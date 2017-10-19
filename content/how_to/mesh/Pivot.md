---
PG_TITLE: Rotation Around an Axis About a Center of Rotation
---

# How To Rotate Around an Axis About a Point

Rotation needs two things specifying, they are an axis and a center of rotation with the axis passing through the center of rotation. An axis is defined by a direction vector and the center of rotation a position vector. In Babylon.js when a mesh is created the center of rotation defaults to the the local origin of the mesh which is the mesh's position. Using [rotation](/babylon101/Position#rotation) the axis is specified through the Euler angles alpha, beta, gamma, and using [rotationQuaternion](/features/Position,_Rotation,_Scaling#rotationquaternion) and [rotate](/features/Position,_Rotation,_Scaling#rotate) it is specified explicitly. 

There are two ways to change a center of rotation different to the local origin, these are using a parent and [setting a pivot](/How_To/Pivots).

Together an axis and a center of rotation define a straight line in space and in the following animated playgrounds this line is shown in white. The asymmetric pilot mesh is used to demonstrate the rotation.

![The Pilot](/img/how_to/Mesh/pilot.jpg)
The Pilot


In each of the following examples there is

* a center of rotation at CoR_At;
* a marker mesh for the center of rotation, a small sphere positioned at CoR_At;
* an axis to rotate around
* the pilot mesh at a starting position relative to the center of rotation, pilotStart.

## How To Use a Parent as Center of Rotation

The sphere is parented to the pilot, the pilot positioned and the sphere rotated.

```javascript
sphere.position = CoR_At;

pilot.parent = sphere;
pilot.position = pilotStart;

sphere.rotate(axis, angle, BABYLON.Space.WORLD);
```

**Note:** Any movement of the sphere will result in the pilot being moved.

[Playground Example - Rotating Parent](https://www.babylonjs-playground.com/#1JLGFP#31)

## How To Use a Pivot as a Center of Rotation

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
[Playground Example - Rotating Mesh with Pivot](https://www.babylonjs-playground.com/#C12LH3)

When looking at the next two playgrounds remember that the pivot has become the local origin for the pilot and setting the position of a mesh actually sets the local orign of the mesh. Hence moving the pivot for the pilot is done using _pilot.position_.  
[Playground Example - Rotating Mesh Moving Pivot along Axis](https://www.babylonjs-playground.com/#C12LH3#1)

Notice that as the pivot is moved the axis line moves with the pivot, though the axis direction remains the same.  
[Playground Example - Rotating Mesh Moving Pivot](https://www.babylonjs-playground.com/#C12LH3#2)

## How to Use a Parent as a Pivot

Perhaps you would like to think about achieving the positioning of the pivot by changing the pivots position rather than the pilots position. This can be done with parenting as shown in the following example.

The sphere, representing the pivot at the center of rotation, is placed at the pivot position (CoR_At), the sphere is then made the parent of the pilot the pilot position relative to the pivot is set by matrix and the pilot rotated.

```javascript
sphere.position = CoR_At;

pilot.parent = sphere;
pilot.setPivotMatrix(BABYLON.Matrix.Translation(pilotTranslate.x, pilotTranslate.y, pilotTranslate.z));

pilot.rotate(axis, angle, BABYLON.Space.WORLD);
```

[Playground Example - Rotating Mesh as Pivot's Child](https://www.babylonjs-playground.com/#1JLGFP#33)

Done this way any movement of the pivot is done by moving the parent mesh representing the pivot.  
[Playground Example - Rotating Mesh Moving Pivot's Parent along Axis](https://www.babylonjs-playground.com/#1JLGFP#34)
[Playground Example - Rotating Mesh Moving Pivot's Parent](https://www.babylonjs-playground.com/#1JLGFP#35)

# Further Reading

## More Advanced - L3

[Using a Pivot](/How_To/Pivots)





