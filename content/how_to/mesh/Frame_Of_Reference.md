---
PG_TITLE: Frame of Reference
---

# Frame of Reference

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
