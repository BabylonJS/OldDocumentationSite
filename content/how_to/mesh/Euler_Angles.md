---
PG_TITLE: Euler Angles and Quaternions
---

# Euler Angles and Quaternions

From BabylonJS version 2.5 Euler angles for use in mesh.rotation can always be found from a built in method. For some conventions of using 
Euler angles a quaternion can be found from those angles. Once found the quaternions can be used to rotate a mesh.

## Quaternions from Euler Angles

### YXZ *Local Axes* Yaw, Pitch, Roll

![Yaw pitch roll](/img/tutorials/Mesh/yawpitchroll.jpg)

```javascript
var yprQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(yaw, pitch, roll);
``` 
[Playground Example Yaw Pitch Roll to Quaternion](http://www.babylonjs-playground.com/#1ST43U#9)


### ZXZ *World Axes* A Standard Convention 

Rotations alpha about Z, beta about X, gamma about Z around the world axes

```javascript
var abcQuaternion = BABYLON.Quaternion.RotationAlphaBetaGamma(alpha, beta, gamma);
```

[Playground Example ZXZ to Quaternion](http://www.babylonjs-playground.com/#1ST43U#10)

## Euler Angles from Quaternions

The Euler angles that can be used in mesh.rotation can be found from any quaternion the following method

```javascript
var euler = quaternion.toEulerAngles();
```

To illustrate this the following playground generates three random angles, puts the axes XYZ into a random order 
and selects at random either to use world or local for all axes. This data is then used to randomise the orientation 
of a box. The rotationQuaternion for this box is used to generate Euler angles to rotate another box, box1, using 
box1.rotation to obtain the same orientation as the first box.

[Playground Example Random Orientation to Euler Angles for mesh.rotation](http://www.babylonjs-playground.com/#1ST43U#7)

# Further Reading

[Applying Rotation Conventions](/tutorials/Applying_Rotations)