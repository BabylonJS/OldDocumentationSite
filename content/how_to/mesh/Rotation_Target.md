---
PG_TITLE: Aligning Rotation to Target
---
# Aligning Rotation to Target

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


