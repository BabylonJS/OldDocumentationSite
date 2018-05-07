---
PG_TITLE: Rotation Around an Axis About a Center of Rotation
---

NOTE: BREAKING CHANGES FROM V3.2 PART OF THIS PAGE IS FOR VERSIONS PRIOR TO 3.2
  
[Page for v3.2+](/how_to/pivot3.2)

# How To Rotate Around an Axis About a Point

Rotation needs two things specifying, they are an axis and a center of rotation with the axis passing through the center of rotation. An axis is defined by a direction vector and the center of rotation a position vector. In Babylon.js when a mesh is created the center of rotation defaults to the the local origin of the mesh which is the mesh's position. Using [rotation](/babylon101/Position#rotation) the axis is specified through the Euler angles alpha, beta, gamma, and using [rotationQuaternion](/features/Position,_Rotation,_Scaling#rotationquaternion) and [rotate](/features/Position,_Rotation,_Scaling#rotate) it is specified explicitly. 

There are three ways to change a center of rotation different to the local origin, these are using a [TransformNode](/How_To/TransformNode), a parent and [setting a pivot](/How_To/Pivots).

Together an axis and a center of rotation define a straight line in space and in the following animated playgrounds this line is shown in white. The asymmetric pilot mesh is used to demonstrate the rotation.

![The Pilot](/img/how_to/Mesh/pilot.jpg)
The Pilot


In each of the following examples there is

* a center of rotation at CoR_At;
* a marker mesh for the center of rotation, a small sphere positioned at CoR_At;
* an axis to rotate around
* the pilot mesh at a starting position relative to the center of rotation, pilotStart.

## How to Use TransformNode as a Center of Rotation

A TransformNode is an object that is not rendered but can be used as a center of rotation (in fact the centre of any transformation). This can decrease memory usage and increase rendering speed.

The TransformNode is used as a pivot point by parenting it to the pilot and rotating it.

```javascript
var pivot = new BABYLON.TransformNode("root");
pivot.position = CoR_At;

pilot.parent = pivot;
pilot.position = pilotStart;

pivot.rotate(axis, angle, BABYLON.Space.WORLD);
```
In these playgrounds a sphere is created only to show the position of the TransformNode.

* [Playground Example - Rotating TransformNode](https://www.babylonjs-playground.com/#1JLGFP#36)
* [Playground Example - Rotating Mesh Moving TransformNode along Axis](https://www.babylonjs-playground.com/#C12LH3#3)
* [Playground Example - Rotating Mesh Moving TransformNode](https://www.babylonjs-playground.com/#C12LH3#4)

## How To Use a Parent as Center of Rotation

The sphere is parented to the pilot, the pilot positioned and the sphere rotated.

```javascript
sphere.position = CoR_At;

pilot.parent = sphere;
pilot.position = pilotStart;

sphere.rotate(axis, angle, BABYLON.Space.WORLD);
```

**Note:** Any movement of the sphere will result in the pilot being moved.

* [Playground Example - Rotating Parent](https://www.babylonjs-playground.com/#1JLGFP#31)

## How To Use a Pivot as a Center of Rotation

BREAKING CHANGES IN THIS SECTION
**Technically in v3.2 and later `setPivotMatrix` applies a transformation matrix after setting the pivot whereas earler versions do not. It follows that when used with v3.2 or later the playgrounds in this section will not give the expected results. To obtain the expected results add `false` as a second parameter when using the `setPivotMatrix` method preventing the transformation matrix being applied.** 

As described in [How to Set a Pivot](/How_To/Pivots#how-to-set-mesh-and-pivot-position-at-the-same-time) set the pivot and the pilot in their wanted positions by placing the pilot where the pivot is going to be and setting the pivot translation using the displacement of the pilot position from the pivot position.

```javascript
var CoR_At = new BABYLON.Vector3(1, 3, 2);
var pilotStart = new BABYLON.Vector3(3, 6, 6);

pilot.position = CoR_At; 

var pivotTranslate = pilotStart.subtract(CoR_At);
pilot.setPivotMatrix(BABYLON.Matrix.Translation(pivotTranslate.x, pivotTranslate.y, pivotTranslate.z));
```

```javascript	
/*-------------------Rotation Animation--------------------*/
var angle=0.025;   
scene.registerAfterRender(function() {
    pilot.rotate(axis, angle, BABYLON.Space.LOCAL);  
});
```
* [Playground Example - Rotating Mesh with Pivot](https://www.babylonjs-playground.com/#C12LH3)

When looking at the next two playgrounds remember that the pivot has become the local origin for the pilot and setting the position of a mesh actually sets the local orign of the mesh. Hence moving the pivot for the pilot is done using _pilot.position_.  
* [Playground Example - Rotating Mesh Moving Pivot along Axis](https://www.babylonjs-playground.com/#C12LH3#1)

Notice that as the pivot is moved the axis line moves with the pivot, though the axis direction remains the same.  
* [Playground Example - Rotating Mesh Moving Pivot](https://www.babylonjs-playground.com/#C12LH3#2)

## How to Use a Parent as a Set Pivot

Perhaps you would like to think about achieving the positioning of the pivot by changing the pivots position rather than the pilots position. This can be done with parenting as shown in the following example.

The sphere, representing the pivot at the center of rotation, is placed at the pivot position (CoR_At), the sphere is then made the parent of the pilot. The translation needed to move the pilot starting position to the center of rotation is found and is used to set the pivot using a matrix.  The pilot position is reset to the translation vector and the pilot rotated.

```javascript
sphere.position = CoR_At;
pilot.parent = sphere;
var pilotTranslate = pilotStart.subtract(CoR_At);
pilot.setPivotMatrix(BABYLON.Matrix.Translation(pilotTranslate.x, pilotTranslate.y, pilotTranslate.z));
pilot.position = pilotTranslate;
pilot.rotate(axis, angle, BABYLON.Space.WORLD);
```

* [Playground Example - Rotating Mesh as Pivot's Child](https://www.babylonjs-playground.com/#1JLGFP#77)

Done this way any movement of the pivot is done by moving the parent mesh representing the pivot.  
* [Playground Example - Rotating Mesh Moving Pivot's Parent along Axis](https://www.babylonjs-playground.com/#1JLGFP#78)
* [Playground Example - Rotating Mesh Moving Pivot's Parent](https://www.babylonjs-playground.com/#1JLGFP#80)

# Further Reading

## More Advanced - L3

[Using a Pivot V3.2+](/How_To/Pivots3.2)  
[Using a Pivot before V3.2](/How_To/Pivots) 

[How To Rotate Around an Axis about a Point V3.2+](/How_To/Pivot3.2)





