---
PG_TITLE: Rotation Around an Axis
---

# Rotation Around an Axis

 Rotation properties and methods of a mesh are set to be about an axis through the _local origin_ of a mesh. In this case 
 all that is necessary is to define an axis is a vector.

## Rotate

The rotate method has the following form where axis is a vector of the type (x, y, z), angle is in radians and space is local (BABYLON.Space.LOCAL) or 
world (BABYLON.Space.WORLD)

```javascript
mesh.rotate(axis, angle, space);
```
Using rotate is cumulative, that is the rotation angle is added to the current rotation angle, so in an animation the same angle is used 
in each frame.


## Rotation Quaternion

Just as you set mesh.rotation to a 3 dimensional vector you set mesh.rotationQuaternion to a quaternion, a 4 dimensional vector (x, y, z, w) 
where x, y, z defines a world axis and w the angle of rotation about the axis.

You set the rotationQuaternion property given an axis and an angle by creating a quaternion as follows

```javascript
mesh.rotationQuaternion = new BABYLON.Quaternion.RotationAxis(axis, angle);
```
As for rotation a further use of rotationQuaternion re-sets the rotation to the new angle, so in an animation the angle of rotation 
is increased each frame.

[Playground Example using a Quaternion](http://www.babylonjs-playground.com/#1JLGFP#11)


# Further Reading

## Basic - L1

[Position, Rotation, Scaling Overview](/overviews/Position,_Rotation,_Scaling)  

## More Advanced - L3

[Rotation About a Remote Axis](/tutorials/Pivot)  
[Euler Angles and Quaternions](/tutorials/Euler_Angles)  
[Euler Angle Conventions in BJS](/tutorials/Applying_Rotations)  




