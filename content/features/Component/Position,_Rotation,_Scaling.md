---
ID_PAGE: 22041
PG_TITLE: 04. Position, Rotation, Scaling
---
# Position, Rotation, Scaling

Having created a mesh it is then possible to set its position, rotation and scale. Using the MeshBuilder method makes it less likely that scaling will be needed as dimensions in the x, y and z directions can be set during creation.

For example to create a box with width 2, height 3 and depth 1 requires

```javascript
var box = BABYLON.MeshBuilder.CreateBox("box", {width:2, height:3, depth:1}, scene);

//or for the legacy method

var box = BABYLON.Mesh.CreateBox("box", 1, scene);
box.scaling.x = 2;
box.scaling.y = 3;
```
[Playground Example Scaling](http://www.babylonjs-playground.com/#1VMQNH)

It is also possible to translate or rotate a mesh from its given position and rotation by a vector or an angle respectively.

## Frames of Reference

There are two frames of reference one the **world axes** in *world space* and the other the **local axes** in *local space*. 
When a mesh is created the **world axes** and the **local axes** coincide. As a mesh moves the **local axes** move with it. 
 

## Setting Methods

![Elements](/img/tutorials/Rotation%20and%20scaling/03.png)

[Playground Example - Positioned, Scaled, and Rotated Boxes](http://www.babylonjs-playground.com/?3)

Using these methods the position and orientation of the mesh is set by the values given. The initial position and orientation of a mesh when first created is (0, 0, 0). Position is given in terms of the **world axes** and rotation is computed using **local axes**. 

The order you assign the rotation property values doesn't matter (`.z` before `.x` for instance) since the final mesh rotation is always calculated in the  order - around Y first, then around X, finally around Z - using the **local space**.  If you think in terms of **world space** then the order used is - around Z first, then around X, finally around Y

### Position

You can easily position any boxes in the scene, anywhere you like. For example:

```javascript
//Positioning the boxes
box1.position = new BABYLON.Vector3(-20, 0, 0);
box2.position.x = -10; // or box2.position = new BABYLON.Vector3(-10,0,0);
box3.position.y = 0;
```
A three dimension vector (x, y, z) in Babylon.js is created by using new BABYLON.Vector3(x, y, z) with assigned values for x, y and z.

[Playground Example Position](http://www.babylonjs-playground.com/#35CPC)

### Position using Local Axes

This method sets the position with reference to the origin of the **world axes** and the orientation of the **local axes**. 

```javascript
mesh.setPositionWithLocalVector(new BABYLON.Vector3(x, y, z));
```
[Playground Example setPositionWithLocalVector](https://www.babylonjs-playground.com/#EYZE4Q)

In order to obtain the current position of the object in local space use

```javascript
var localPosition = mesh.getPositionExpressedInLocalSpace();
```

### Rotation 

All angles are in radians

```javascript
//Rotate the box around the x axis
box1.rotation.x = Math.PI/4; // or box1.rotation = new BABYLON.Vector3(Math.PI/4,0,0);

//Rotate the box around the y axis
box2.rotation.y = Math.PI/6;
```
In this case the vector (alpha, beta, gamma), where x = alpha, y = beta, z = gamma, means a rotation around x of alpha, around y of beta and around z of gamma.

[Playground Example Rotation](http://www.babylonjs-playground.com/#YIT1S)

### RotationQuaternion

All angles are in radians

A rotationQuaternion sets the orientation of a mesh by a rotation around a given axis. It is a four dimensional vector 0f the form (x, y, z, w). The most straight forward way to use a rotationQuaternion is as follows

```javascript
var axis = new BABYLON.Vector3(1, 1, 1);
var angle = Math.PI / 8;
var quaternion = new BABYLON.Quaternion.RotationAxis(axis, angle);
mesh.rotationQuaternion = quaternion;
```

The default for rotationQuaternion is _undefined_ .  

**Note** : You MUST set and use rotationQuaternion when creating physics objects because physics engines rely only on them.

[Playground Example rotationQuaternion](https://www.babylonjs-playground.com/#1ST43U#44)


## Transforming Methods

The two transformations translate and rotate add a vector and a rotation, repectively to current position and orientations. Doing this with a sequence of translates or rotates accumulates on the mesh.

In which space translation or rotation takes place can for some methods be specified.

The **world space** is set using BABYLON.Space.WORLD

The **local space** is set using BABYLON.Space.LOCAL

### Locally Translate

To translate in local space you can use

```javascript
mesh.locallyTranslate(new BABYLON.Vector3(x, y, z));
```
[Playground Example locallyTranslate](https://www.babylonjs-playground.com/#EYZE4Q#1)

## Translate
To translate a mesh a direction, distance and space need to be specified. 

```javascript
pilot.translate(BABYLON.Axis.Y, 2, BABYLON.Space.WORLD);

pilot.translate(new BABYLON.Vector3(-1, 3, -2), 3, BABYLON.Space.LOCAL);
```

[Playground Example - Translate](http://www.babylonjs-playground.com/#1JLGFP) 

### AddRotation

A simple and straight forward way to sequence rotations in the order you wish in **local space** only .

```javascript
mesh.addRotation(Math.PI/2, 0, 0).addRotation(0, Math.PI/4, 0).addRotation(0, 0, Math.PI/6, 0);
```

Whatever the current rotation of the mesh this will rotate it further first around the *local X axis*, followed by a rotation around the *local Y axis* followed by a rotation around the *local Z axis*.

In the first of the following two playgrounds the sequence of boxes shows the result of applying a rotation around the *local Z axis*, followed by a rotation around the *local Y axis* followed by a rotation around the *local X axis*. The second example shows how addRotation can be used to add wheels to a car body.

[Playground Example - Addition of Rotations](http://www.babylonjs-playground.com/#1PON40#8)  
[Playground Example - Wheels](http://www.babylonjs-playground.com/#1PON40#12) Author [Jerome Bousquie](http://jerome.bousquie.fr/BJS/demos/)

## Rotate
To rotate a mesh an axis, angle and the space specified are needed. The axis is given as any vector(x, y, z) and this is taken as the line passing through the origin of the local axes.  In other words the mesh spins at its current position.

For convenience unit vectors in the positive directions of the x, y and z axes are pre-defined as the constants BABYLON.Axis.X, BABYLON.Axis.Y and BABYLON.Axis.Z respectively.

```javascript
pilot.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.WORLD);

pilot.rotate(new BABYLON.Vector3(-1, 3, -10), 7 * Math.PI / 12, BABYLON.Space.LOCAL);
```

[Playground Example - Rotate](http://www.babylonjs-playground.com/#1JLGFP#3)

## Change of Origin

Should you wish to position, rotate or scale a mesh about a point other than its own _local origin_ then this can be done either using a parent or a pivot. More information in Further Reading.

### Parent

Assigning a mesh a parent changes the **world space** for its children. Any change in position, orientation or scale of the parent will be applied to its children. Setting the position, rotation or scaling of a child will be done using the **local space** of the parent as the child's **world space**. 


```javascript
childMesh.parent = parentMesh;
```

[Playground Example Change of Origin Parent](https://www.babylonjs-playground.com/#1JLGFP#7)

**Note** : Parent-child hierarchies are evaluated on every frame. So any position, rotation and scaling transformations made to the parent prior to assigning it to children will also be applied to the children when the parent is assigned. It usually makes sense not to rotate or move a child until after you've assigned it to the parent.

### Pivot

It is also possible to change the center of rotation by setting a pivot point.  

[Playground Example Change of Origin Pivot](https://www.babylonjs-playground.com/#1JLGFP#19)


# Further Reading
 
## Basic - L1  
[Positions, rotations, scaling 101](/babylon101/Position)  
[Rotation Around an Axis](/tutorials/Axis)



## Mid Level - L2

[Position, Rotate, Translate and Spaces](/tutorials/Position,_Rotate,_Translate_and_Spaces)
 
## More Advanced - L3

[Translate and Rotate in Detail](/tutorials/Rotate)  
[Using a Pivot](/tutorials/Pivots)  
[Rotation Around an Axis Through a Pivot](/tutorials/Pivot)  
[Euler Angles and Quaternions](/tutorials/Euler_Angles)  
[Applying Rotation Conventions](/tutorials/Applying_Rotations)  
[Aligning Rotation to Target](/tutorials/Rotation_Target)  
[Frame of Reference](/tutorials/Frame_Of_Reference)  
[Baking Transformations](/tutorials/Baking_Transformations)  
[In-Browser Mesh Simplification (Auto-LOD)](/tutorials/In-Browser_Mesh_Simplification)  

## Gamelet

[A Simple Car Following a Path](/samples/Car_Path)  



