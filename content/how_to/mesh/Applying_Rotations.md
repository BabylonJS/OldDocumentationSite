---
PG_TITLE: Applying Rotations
---

# Applying Rotations

There are several methods of achieving rotations within BabylonJS all of which use a particular convention.


## Euler Angles

In 3D space Euler angles can produce any possible orientation by providing three angles to rotate about each of three axes in a given order.    
For three axes X, Y and Z there are 12 different permutations for the order of the angles. Since X, Y and Z can be treated as *World* or as *local* axes this means there is a potential of 24 different possibilities. Most, if not all,of these are in use in different systems around the world. So you need to be very careful that you know very clearly the convention that the system you are working in uses.

Mesh.rotation(alpha, beta, gamma) uses the three Euler angles alpha, beta and gamma which are rotations about the X, Y and Z axes respectively. The convention that Babylon.js uses is based on the yaw, pitch and roll convention and so is carried out around X, Y and Z as local axes in the order Y, X, Z.

### YXZ *Local Axes* Yaw, Pitch, Roll

![Yaw pitch roll](/img/how-to/Mesh/yawpitchroll.jpg)

A pitch is about X, yaw about Y and roll about Z applied in the order yaw, pitch roll using local axes.

Applying independent rotations to a newly created mesh (ie one that has zero rotations) in the order YXZ using local axes

```javascript
mesh.rotate(BABYLON.Axis.Y, yaw, BABYLON.Space.LOCAL);
mesh.rotate(BABYLON.Axis.X, pitch, BABYLON.Space.LOCAL);
mesh.rotate(BABYLON.Axis.Z, roll, BABYLON.Space.LOCAL);
```

produces the same orientation as 

```javascript
mesh.rotation = new BABYLON.Vector3(pitch, yaw, roll);
```

which will produce this orientation whatever the orientation of the mesh prior to its application. The playground below demonstrates this by applying these two methods to two different boxes which end up in alignment.

[Playground Example YXZ yaw, pitch, roll](http://www.babylonjs-playground.com/#1ST43U#4)

### ZXY *World Axes*

The YXZ convention with local axes has produced a particular orientation and it turns out that taking the same angles (aplha = pitch, beta = yaw and gamma = roll) and applying them in the order ZXY using world axes will produce exactly the same orientation.

Applying independent rotations to a newly created mesh (ie one that has zero rotations) in the order ZXY

```javascript
mesh.rotate(BABYLON.Axis.Z, gamma, BABYLON.Space.WORLD);
mesh.rotate(BABYLON.Axis.X, alpha, BABYLON.Space.WORLD);
mesh.rotate(BABYLON.Axis.Y, beta, BABYLON.Space.WORLD);
```

produces the same orientation as 

```javascript
mesh.rotation = new BABYLON.Vector(alpha, beta, gamma);
```

which will produce this orientation whatever the orientation of the mesh prior to its application, as seen in the playground below.

[Playground Example ZXY](http://www.babylonjs-playground.com/#1ST43U#2)


## Quaternions

Imagine a disc with an axle through its center. The disc is able to rotate about the axle. The diagram below shows the disc at several different rotation points around the axle.

![disc rotate](/img/how_to/Mesh/quat1.jpg)

For all rotations of the disc the axle can be tilted as seen in the diagram below.

![disc rotate and axle tilt](/img/how_to/Mesh/quat2.jpg)

Together a rotation of the disc and a tilt of the axle can produce all possible 3D orientations of the disc. The tilt, or direction, of the axle can be given by a vector along the axle. This means that another way of giving the orientation of a mesh is with a vector (axle direction) and a rotation (of the disc).

So one way of producing any possible orientation is to use four values, three for the axis and one for the angle of rotation. Such a four dimensional vector is a rotational quaternion.

In Babylon.js this is obtained by using

```javascript
mesh.rotationQuaternion = new BABYLON.Quaternion.RotationAxis(axis, angle);
```

where axis is a Vector3 and the angle is the rotation in radians. 

What each method has in common is given a set of data they have their own fixed manner to produce a rotation of a shape. 
For example using 



```javascript
mesh.rotation = new BABYLON.Vector(alpha, beta, gamma);
```
produces an orientation of the mesh, relative to its initial orientation on creation, by a rotation gamma radians about its local y axis, then alpha about the local x axis and finally beta about the local y axis.

While using



produces an orientation of the mesh, relative to its initial orientation on creation, by a rotation delta radians about an axis given 
by the vector (x, y, z) through its local origin.

Let A, B and C be a random ordering of the world axes X, Y and Z. 

Let theta, phi and psi be three random angles and then randomise the orientation of a mesh by rotating it theta about A, phi about B and psi about C.

Having done this then there exists alpha, beta, gamma and x, y, z, delta such that 

```javascript
mesh.rotation = new BABYLON.Vector(alpha, beta, gamma);
```
or

```javascript
mesh.rotationQuaternion = new BABYLON.Quaternion(x, y, z, delta)
```   

will each produce the same orientation of the mesh.

The problem often faced in a project is what are the data values to use.

### Other Conventions
From BabylonJS version 2.5 other conventions can be converted to be used with mesh.rotation. Check out the further reading below.

# Further Reading

[Euler Angles and Quaternions](/tutorials/Euler_Angles.html)