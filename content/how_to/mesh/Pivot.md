---
PG_TITLE: Rotation Around an Axis Through a Pivot
---

# Rotation Around an Axis Through a Pivot

To rotate a mesh about an axis that does not pass through its _local origin_ requires a point 
that the axis does pass through. A point and a vector defines a line in 3D space and any 
point on the line can be used as a pivot and produce the same rotation.

In each of the following several systems there is

* a pivot at pivotAt;
* a marker mesh for the pivot, a small sphere positioned at pivotAt;
* an axis to rotate around
* the pilot mesh at a starting position relative to the pivot position, pilotStart.

All Playgrounds are animated.

## Setting and Rotating a Parent to the Pilot

The sphere is parented to the pilot, the pilot positioned and the sphere rotated.

```javascript
sphere.position = pivotAt;

pilot.parent = sphere;
pilot.position = pilotStart;

sphere.rotate(axis, angle, BABYLON.Space.WORLD);
```

Note: Any movement of the pivot(sphere) will result in the pilot being moved.

[Playground Example - Rotating Parent](http://www.babylonjs-playground.com/#1JLGFP#6)

## Setting a Parent and Rotating the Child

The sphere is parented to the pilot, the pilot position relative to the pivot is set by matrix and the pilot rotated.

```javascript
sphere.position = pivotAt;

pilot.parent = sphere;
pilot.setPivotMatrix(BABYLON.Matrix.Translation(pilotStart.x, pilotStart.y, pilotStart.z));

pilot.rotate(axis, angle, BABYLON.Space.WORLD);
```
Note: Any movement of the pivot(sphere) will result in the pilot being moved.

[Playground Example - Rotating Child](http://www.babylonjs-playground.com/#1JLGFP#7)

## Pivoting with No Parenting

As in *[Using a Pivot](/advanced/Pivots.html)* to get the pilot and pivot in the correct position the pilot is placed where the pivot is going to be 
and the pivot translation is set using the displacement of the pilot position from the pivot position.

```javascript
var pivotAt = new BABYLON.Vector3(1, 3, 2);
var pilotStart = new BABYLON.Vector3(3, 6, 6);

pilot.position = pivotAt; 

var pivotTranslate = pilotStart.subtract(pivotAt);
pilot.setPivotMatrix(BABYLON.Matrix.Translation(pivotTranslate.x, pivotTranslate.y, pivotTranslate.z));
```

```javascript	
/*-------------------Rotation Animation--------------------*/
var angle=0.025;   
scene.registerAfterRender(function() {
    pilot.rotate(axis, angle, BABYLON.Space.LOCAL);  
});
```
[Playground Example - Rotating Mesh No Parenting](http://www.babylonjs-playground.com/#1JLGFP#19)
[Playground Example - Rotating Mesh Moving Pivot along Axis](http://www.babylonjs-playground.com/#1JLGFP#20)
[Playground Example - Rotating Mesh Moving Pivot](http://www.babylonjs-playground.com/#1JLGFP#21)

# Further Reading

## More Advanced - L3

[Using a Pivot](/tutorials/Pivots)





