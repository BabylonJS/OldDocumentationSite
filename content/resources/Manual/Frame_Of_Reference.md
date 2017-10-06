---
PG_TITLE: Frame of Reference
---

# Frame of Reference

Every mathematical vector and transformation is expressed in a certain _frame of reference_. This is for example handled by the `BABYLON.Space.LOCAL` and `BABYLON.Space.WORLD` constants used in the `rotate()` and `translate()` functions, or `locallyTranslate()` and other similar functions.

In Babylon.js the _frame of reference_ for a mesh is determined by the world matrix for the mesh which is formed from any rotation, translation and scaling operations.

The vertex data for a mesh on creation is stored by Babylon.js, call this the mesh origin data. As you translate, rotate and scale a mesh the world matrix for the mesh is updated to reflect these transformations. During rendering of each frame the world matrix is applied to the mesh origin data to determine its world 3D data. However the frame of reference for the mesh to be viewed is a 2D screen and this frame of reference is a projection matrix which is applied to the mesh's world 3D data.


![World Matrix](/img/resources/world_matrix.jpg)

At any time, should you wish to change the stored origin data for a mesh you can do what is called baking the transformation which replaces the mesh origin data with the current world 3D data.

# Coordinate Transformation Explained

The _TransformCoordinates_ function takes a position vector in one frame of reference and places it in another frame of reference using the matrix that transforms on frame of reference into the other.

You are able to use the world matrix of a mesh to transform position vectors, and only position vectors, from a mesh's **local axes** coordinates to the **world axes** coordinates. For example

```javascript
mesh.computeWorldMatrix();
var matrix = mesh.getWorldMatrix(true);
var local_position = new BABYLON.Vector3(0,1,0);
var global_position = BABYLON.Vector3.TransformCoordinates(local_position, matrix);
```

where 'mesh.getWorldMatrix(true);' forces the calculation of the world matrix for the mesh.

[Playground Example - TransformCoordinates](https://www.babylonjs-playground.com/#TRAIXW)

Should you want to translate the local_position, in the above example, its current local position of (0, 1, 0) by (1, 1, 1) then this must be done to the local position before applying `TransformCoodinates` since this only transforms position vectors not direction vectors.

```javascript
mesh.computeWorldMatrix();
var matrix = mesh.getWorldMatrix(true);
var local_position = new BABYLON.Vector3(0,1,0);
local_position.addInPlace(new BABYLON.Vector3(1, 1, 1));
var global_position = BABYLON.Vector3.TransformCoordinates(local_position, matrix);
```

[Playground Example - TransformCoordinates with a Translation](https://www.babylonjs-playground.com/#TRAIXW#1)

Potential uses of `BABYLON.Vector3.TransformCoordinates()` may be:

- setting the position and speed of a mesh relative to another, without the use of parenting
 (e.g. a spaceship shooting missiles)
- applying a projection matrix to a world position vector to end up with a screen-space position vector

# Further Reading

[Rotate and Translate Overview](/features/Position,_Rotation,_Scaling)  
[How To Use a Parent](/how_to/Parenting)  
[How To Transform Coordinates](/how_to/Transform_Coordinates)  
