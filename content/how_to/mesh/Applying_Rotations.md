---
PG_TITLE: Applying Rotation Conventions BJS
---

# Applying Rotation Conventions BJS

There are several methods of achieving rotations within BabylonJS including the use of, Euler Angles, Quaternions and Yaw, Pitch and Roll. All of which 
in the context of BabylonJS have a particular convention when used.

What each method has in common is given a set of data they have their own fixed manner to produce a rotation of a shape. 
For example using 

```javascript
mesh.rotation = new BABYLON.Vector(alpha, beta, gamma);
```
produces an orientation of the mesh, relative to its initial orientation on creation, by a rotation gamma radians about the world z axis, then alpha about the 
world x axis and finally beta about the world y axis.

While using

```javascript
mesh.rotationQuaternion = new BABYLON.Quaternion(x, y, z, delta)
```

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

## Euler Angles

Euler angles are the three angles that when used around the correct axes in the correct order will produce any given orientation. 
For three axes X, Y and Z there are 12 different permutations that can produce all possible orientations. Since X, Y and Z can be treated as *World* or as *local* axes 
this gives 24 different possibilities. Most, if not all, of these are in use in different systems around the world. So you need to be very careful that you know very clearly the convention that 
the system you are working in uses.

In BabylonJS two of these possibilities are immediately accesible using mesh.rotation if you are careful about parameter order.

### ZXY *World Axes*

Rotations alpha about X, beta about Y and gamma about Z in the order ZXY using world axes.

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

which will produce this orientation whatever the orientation of the mesh prior to its application.

[Playground Example ZXY](http://www.babylonjs-playground.com/#1ST43U#2)

### YXZ *Local Axes* Yaw, Pitch, Roll

Rotations pitch about X, yaw about Y and roll about Z in the order YXZ using local axes.

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

which will produce this orientation whatever the orientation of the mesh prior to its application.

[Playground Example YXZ yaw, pitch, roll](http://www.babylonjs-playground.com/#1ST43U#4)

### Other Conventions
From BabylonJS version 2.5 other conventions can be converted to be used with mesh.rotation. Check out the further reading below.

# Further Reading

[Euler Angles and Quaternions](/tutorials/Euler_Angles.html)