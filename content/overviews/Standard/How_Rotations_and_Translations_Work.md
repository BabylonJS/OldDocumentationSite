---
ID_PAGE: 22411
PG_TITLE: How Rotations and Translations Work
---
# Basics
Babylon.js provides many ways to locate and rotate your meshes.

## Position
The basic way to define the position of a mesh is to use its property `position`.  
`position` is a `Vector3` and its set to (0, 0, 0) by default.  
```javascript
mesh.position = new BABYLON.Vector3(x, y, z);
// or 
mesh.position.x = x;
mesh.position.y = y;
mesh.position.z = z;
```
These define the mesh coordinates in the World space. So the mesh will be translated from the world origin to these final coordinates. 
The translation is applied **AFTER** the mesh rotation, if any.  

## Rotation 

A mesh can also be rotated by using either its property `rotation` (Vector3), either its property `rotationQuaternion` (Quaternion).  
`rotation` is a `Vector3` whose values are the Euler angles in radian to rotate the mesh around each axis x, y and z. Default (0, 0, 0).    
`rotationQuaternion` is a `Quaternion` object whose values are the mesh rotation unit quaternion ones. Default `null`.  
```javascript
// Euler
mesh.rotation = new BABYLON.Vector3(x, y, z);                 
// or
mesh.rotation.x = x;        // rotation around x axis
mesh.rotation.y = y;        // rotation around y axis
mesh.rotation.z = z;        // rotation around z axis
// Quaternion
mesh.rotationQuaternion = new BABYLON.Quaternion(x, y, z, w); 
```
The rotation is computed in the mesh local space.   
The order you assign the `rotation` property values doesn't matter (`.z` before `.x` for instance) since BJS computes the final mesh rotation always in the same order : around Y first, then around X, finally around Z.  
In order to understand this order, here's a short sequence showing how this happens in the World (white axis) :   

* a box is set at the origin, unrotated, its local system is showed with red (x), green (y) and blue (z) lines : http://www.babylonjs-playground.com/#BEXX0#1   
* then it's rotated for PI/3 radians around its local Y axis : http://www.babylonjs-playground.com/#BEXX0#2  
* then it's rotated for PI/4 radians around its local X axis : http://www.babylonjs-playground.com/#BEXX0#3  
* finally it's rotated for PI/6 radians around its local Z axis : http://www.babylonjs-playground.com/#BEXX0#4  

The property `rotation` will be used if the property `rotationQuaternion` is `null` (default behavior).  
The property `rotationQuaternion` only is used if both are set.  

**NOTE : You MUST use `rotationQuaternion` when creating physics objects because physics engines rely only on them.**

## Position and Rotation for the World Matrix
It doesn't matter whether you assign values several times to the properties `position` and `rotation` (or `rotationQuaternion`) or not before the next rendering.  
Only the last assigned values are kept for the rendering. In other terms, there's no accumulation : if you set `rotation.y = 2;` then later `rotation.y = 1;` this won't rotate the mesh for 3 around Y, but only for 1 radian.  

These properties just depict some mesh state before it must be rendered : it's located at a given position and rotated to a given orientation.  
Actually, just before the rendering process, these property values are read and computed in a matrix related to the mesh, called its World Matrix.  
The mesh World Matrix embbeds all the values to position, rotate and scale the mesh from its local space to the World space.  
This matrix is then transferred to the GPU what applies all the geometric transformations to each mesh vertex and then renders the whole mesh.  
The GPU piece of code responsible for this vertex transformation is called the vertex shader.  

So just think about the properties `position` and `rotation` (or `rotationQuaternion`) as the state values to set the mesh in the World for the next render call.  


## More Advanced Positioning
As explained before, the property `position` sets the mesh in the World space.  
Nonetheless, you may want to position the mesh in its local space.  
You can then use the following code:
```javascript
mesh.setPositionWithLocalVector(new BABYLON.Vector3(x, y, z));
```

You can also get the current position of the object but in local space and not in parent space with the following code:
```javascript
var localPosition = mesh.getPositionExpressedInLocalSpace();
```

If you want to add an extra translation expressed in local space you have to use the following code:
```javascript
mesh.locallyTranslate(new BABYLON.Vector3(x, y, z));
```
Each time you call it with the same vector, it will move your mesh whereas ```setPositionWithLocalVector``` will move it only the first time. http://jsfiddle.net/gwenaelhagenmuller/35uFf/12/

At last, you can also use the most versatile tool to translate a mesh  : `translate(axis, distance, space)`

* `axis` (_Vector3_) is the vector along what you want to translate the mesh 
* `distance` (_float_) is the length of the translation along this vector  
* `space` (optional, defaut `BABYLON.Space.LOCAL`), the space where the translation is applied : `BABYLON.Space.WORLD` or `BABYLON.Space.LOCAL`

Example :  
```javascript
mesh.translate(BABYLON.Axis.X, 1.0, BABYLON.Space.WORLD);
```

## More Advanced Rotation

### addRotation()
As explained BJS imposes the rotation order YXZ.  
If you still want to use the Euler angles what are more intuitive than quaternions, this constraint can quickly complicate the way to calculate the required Euler angles to achieve a given final mesh orientation.  
Indeed, rotations aren't commutative operations. This means that rotating a mesh first around X, then around Z will lead to a different orientation than rotating it first around Z and then around X with the same values.  

You can then use `mesh.addRotation(x, y, z)`.  
This method updates for you the current property `rotation` or `rotationQuaternion` values by adding a rotation step to the initial values.  
`x`, `y` and `z` are the Euler angles in radians to add each call of this method.  
You can call it as many times you want : it will accumulate the passed rotation values.  
This means you can decompose your whole rotation in several steps to be done in your own order, not necesseraly the imposed YXZ one, to achieve your final wanted orientation.   

 How does it work ?

Just give the mesh an initial rotation, or none, (this rotation can be Euler angles or a quaternion, as you want), then add your rotation steps to achieve the wanted final orientation :

```javascript
mesh.rotation.x = Math.PI / 4.0;        // initial rotation around x
mesh.addRotation(0, Math.PI / 3.0, 0);  // the mesh is fisrt rotated around X, then only around Y for PI/3

// you can even link all the rotation steps
// here X first, then Z, finally Y
mesh.addRotation(x1, 0, 0).addRotation(0, 0, z2).addRotation(0, y3, 0);

// the mesh rotation property is computed for you
console.log(mesh.rotation);
```
Example : http://www.babylonjs-playground.com/#1PON40#6

The left box is the model box. The central box is rotated as usual for PI/3 around X and PI/4 around Y. The BJS rotation order makes it rotate first around Y, then around X.  
The right box is given an initial rotation for PI/3 around X, then a rotation step is added for PI/4 around Y. You can see that the final orientation differs.  
If you have a look at the console where the box2 rotation is displayed, you will notice that the Euler angles needed to achieve this final orientation have a z value, although you didn't specify anything about Z. 
Simply because this is the Euler rotation to be dapplied in the required BJS rotation order to achieve this final orientation.  
Something you wouldn't probably have found by yourself just playing with Euler angles ...  

In brief, `addRotation()` accumulates the rotation values each call, allows to choose the rotation order and updates the initial property `rotation` or `rotationQuaternion` values.  
This rotation is computed in the local space as usual.  

### rotate()
At last, like for the positions, you can also use the most versatile tool : `mesh.rotate(axis, amount, space)`

* `axis` (_Vector3_) is the axis around what the rotation is to be done,
* `amount` (_float_) is the angle in radians to rotate the mesh around this axis,
* `space` (optional, default `BABYLON.Space.LOCAL`) is the space in what the rotation is to be computed : `BABYLON.Space.WORLD` or `BABYLON.Space.LOCAL`.

Example :  
```javascript
mesh.rotate(BABYLON.Axis.X, 1.0, BABYLON.Space.WORLD);
```
Please note that `mesh.rotate()` generates a new quaternion and then uses `mesh.rotationQuaternion` while `mesh.rotation` is set to (0, 0, 0).  

Like `mesh.addRotation()`, this method accumulates also the rotation each call. So, if you call it several times, the order really matters : first `rotate(x, 3)` then `rotate(y, 2)` will give a different final orientation than first `rotate(y, 2` then `rotate(x, 3)`.  
It updates the `mesh.rotationQuaternion` before it is read by the World Matrix.  

## Summary

* The mesh vertices are positioned and rotated GPU side at the render call by the vertex shader.  
* The vertex shader needs the mesh World matrix in order to compute these transformations.  
* The mesh World matrix is computed automatically by BJS just before the render call.  
* Only the last assigned values of the mesh properties `position`, `rotation` or `quaternionRotation` are read at this moment for the matrix computation.  
* You can set directly these properties before manually and/or you can use helper functions like `translate()`, `rotate()`, `addRotation()`, etc what compute then their values for you.    



# Generating a rotation from a target system #
Sometimes you may know the final orientation you want to give to a mesh in terms of alignment with distant axes, but you don't know what rotation to apply to it to achieve this wanted orientation.  
There is a way to compute an Euler rotation from a set of axes : 
```javascript
var rot = BABYLON.Vector3.RotationFromAxis(axis1, axis2, axis3);
mesh.rotation = rot;
```
where _axis1_, _axis2_ and _axis3_ are three left-handed oriented orthogonal vectors.   
With this code, the mesh will be aligned thus :   

* _axis1_ will become x axis in its local system
* _axis2_ will become y axis in its local system
* _axis3_ will become z axis in its local system

example : http://www.babylonjs-playground.com/#VYM1E#28        
The textured plane mesh is currently aligned with the axis between spheres (axis1) and "faces" the camera.  
`RotationFromAxis()` computes the required rotation value (Vector3) to assign to the mesh property `.rotation` in order to rotate it along the passed axes.  
If you prefer using quaternions instead of Euler angles, then `RotationQuaternionFromAxis()` computes the required rotation value (Quaternion) to assign to the mesh property `.rotationQuaternion` in order to rotate it along the passed axes.  
The same methods exist also in the `toRef()` version.  

`Vector3.RotationFromAxis()`  
`Vector3.RotationFromAxisToRef()` 
`Quaternion.RotationQuaternionFromAxis()`  
`Quaternion.RotationQuaternionFromAxisToRef()`  


# Baking Transform #

In certain situations you might be interested in applying a transform (position, rotation, scale) directly to the mesh vertices, instead of saving it as a property of the mesh. This is called baking, and can be useful in the following situations:

- building a set of static geometry
- randomizing a series of mesh copies
- mirroring a mesh along an axis
- etc.

Two methods can be used for this process:

`bakeTransformIntoVertices(transform: Matrix)`: this will bake the provided matrix directly into the mesh vertices. For example:

```
// this will permanently mirror the mesh along the Y axis, while leaving the transform properties untouched
var matrix = BABYLON.Matrix.Scaling(1, -1, 1);
mesh.bakeTransformIntoVertices(matrix);
```

`bakeCurrentTransformIntoVertices()`: this will bake the current transform properties of the mesh into the vertices, and clear those properties. This includes _rotation_, _translation_ and _scaling_.

Note: scaling a mesh will often give unrealistic results for lighting, since the normals will simply be scaled along and not properly recomputed. This is illustrated in the following picture: 

![Normals illustration](http://i.imgur.com/18wDAH7.png) 

_In the above picture, you can see an untransformed mesh on the left, the same mesh scaled along the X axis in the middle and on the right, the mesh with its normals correctly recomputed._


You can do a recomputation of your normals like so:

```
var indices = mesh.getIndices();
var normals = mesh.getVerticesData(VertexBuffer.NormalKind);
BABYLON.VertexData.ComputeNormals(positions, indices, normals);
mesh.updateVerticesData(VertexBuffer.NormalKind, normals, false, false);
```

Please note that recomputing the normals of your mesh may not be an ideal solution, as the results may be wrong in some parts of the mesh (e.g. seams on a sphere).

# Changing the Frame of Reference #

Every mathematical vector and transformation is expressed in a certain _frame of reference_. This is for example handled by the `BABYLON.Space.LOCAL` and `BABYLON.Space.WORLD` constants used in the `rotate()` and `translate()` functions cited above, or `locallyTranslate()` and other similar functions.

A _frame of reference_ is in fact a regular transformation matrix, i.e. an association of rotation, translation and scaling operations.

You may need to express a certain vector in a precise frame of reference, be it the one of a mesh or an arbitrary one. In this case, the function `BABYLON.Vector3.TransformCoordinates()` will come in handy. 

Here is how you would compute the _up_ vector (Y+) inside the frame of reference of a mesh:
```
mesh.computeWorldMatrix();
var matrix = mesh.getWorldMatrix();
var up_local = new BABYLON.Vector3(0,1,0);
var up_global = BABYLON.Vector3.TransformCoordinates(up_local, matrix);
```

Potential uses of `BABYLON.Vector3.TransformCoordinates()` may be:

- computing direction and axis vectors for `applyImpulse()` and other physics-related functions
- setting the position and speed of a mesh relative to another, without the use of parenting
 (e.g. a spaceship shooting missiles)
- applying a projection matrix to a world position vector to end up with a screen-space position vector
