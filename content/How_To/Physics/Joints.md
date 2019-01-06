---
PG_TITLE: How To Use Joints
---

# Joints

A joint in a physics engine is a constraining feature between two bodies. This area has the largest differences between the physics engine both in the joints available and the names used. Not all native joints are available in some plugins.

This section considers the difference between the way joints behave in the three physics engines 

1. Cannon.js;
2. Oimo.js;
3. Ammo.js

as well as any differences in using them. Playgrounds are available to check out the coding. In the playgrounds, where appropriate, the physics' engine used can be changed by selecting which ones to comment out.

See [How to Use The Physics' Engines](/how_to/using_the_physics_engine) for an overall view of setting up and using the three plugins.

## Physical Joint Types

| Number | Joint | Name | Notes |
| -----| ----- | ----- |
| 1 | ![Hinge](/img/how_to/physics/hinge.jpg) | Hinge | Single Axis Rotation|
| 2 | ![Ball and Socket](/img/how_to/physics/ballnsocket.jpg) | Ball and Socket | Multi Axis Rotation |
| 3 | ![Cone Twist](/img/how_to/physics/conetwist.jpg) | Cone Twist | Unrestricted rotation (Twist) on One Axis, Limited Rotation (in Cone) On Others |
| 4 | ![Wheel](/img/how_to/physics/wheel.jpg) | Wheel | Two Axes Rotation |
| 5 | ![Slider](/img/how_to/physics/slider.jpg) | Slider | Single Axis Translation |
| 6 | ![Prismatic](/img/how_to/physics/prismatic.jpg) | Prismatic | Single Axis Translation and Rotation |
| 7 | ![Fixed](/img/how_to/physics/fixed.jpg) | Fixed | Set Bodies a Fixed Distance Apart |

## Native Joints for Each Physics Engine

The relationship between native joints and physical joints

**_Cannon.js_**

| Cannon Joint| Physical Joint |
| ----- | ----- |
| HingeConstraint | 1 Hinge |
| PointToPointConstraint | 2 Ball and Socket |
| DistanceConstraint | 7 Fixed |
| Spring | Not Shown |
| LockConstraint | Not Shown |


**_Oimo.js_**

| Oimo Joint | Physical Joint |
| ----- | ----- |
| HingeJoint | 1 Hinge |
| BallAndSocketJoint | 2 ball and Socket |
| WheelJoint | 4 Wheel |
| SliderJoint | 5 Slider |
| PrismaticJoint | 5 Prismatic |
| DistanceJoint | 7 Fixed |


**_Ammo.js_**

| Ammo Joint| Physical Joint |
| ----- | ----- |
| HingeConstraint | 1 Hinge |
| Point2PointConstraint | 2 Ball and Socket |
| ConeTwistConstraint | 3 Cone Twist |
| SliderConstraint | 5 Slider |
| FixedConstraint | 7 Fixed |

## Babylon.js Joints

The following table lists those joints within Babylon.js and where available their equivalence to each other and their link to the native joints  

| Babylon.js Joint | Equivalent  Babylon.js Joint | Cannon Joint | Oimo Joint | Ammo Joint | Helper Class | Motor |
| ----- | ----- | ------ | ----- | ----- | ----- | ----- |
| BABYLON.PhysicsJoint.HingeJoint | ---- | HingeConstraint | HingJoint | HingeConstraint | Yes | Yes |
| BABYLON.PhysicsJoint.BallAndSocketJoint | BABYLON.PhysicsJoint.PointToPointJoint | PointToPointConstraint | BallAndSocketJoint | Point2PointConstraint | No | Yes |
| BABYLON.PhysicsJoint.WheelJoint | BABYLON.PhysicsJoint.Hinge2Joint | ---- | WheelJoint | Point2PointConstraint | Hinge2Joint Only | Yes |
| BABYLON.PhysicsJoint.DistanceJoint | ---- | DistanceConstraint | DistanceJoint | Point2PointConstraint with Added Constraints| Yes | No |
| BABYLON.PhysicsJoint.LockJoint | ---- | LockConstraint | ---- | ----| No | No |
| BABYLON.PhysicsJoint.SliderJoint | ---- | ---- | SliderJoint | SliderConstraint | No | No |
| BABYLON.PhysicsJoint.SpringJoint | ---- | Spring | DistanceJoint | ---- | No | No |

The method to form a joint and connect one body (main) to a second body (connected) is 

```javascript
var joint = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.TYPE_OF_JOINT, jointData);

mainImpostor.addJoint(connectedImpostor, joint);
```
where the `jointData` object contains the properties for the joint.

**Note 1** In the following examples the impulse force, as with all forces, in `Ammo.js` the contact point is given in the body's local coordinates and in `Cannon.js` and `Oimo.js` are given world space.

**Note 2** `Ammo.js` for some as yet unexplained reason sometimes does not apply an impulse if triggered through a button. To ensure triggering an added direct impulse with a smallish size (that does not overcome inertia) is applied after joint construction. It is hoped that this issue can be resolved in the future.

```javascript
impostor.applyImpulse(impulseDirection.scale(0.01), contactLocalRefPoint);
```

### Hinge Joint
For a hinge the only component of any force that produces movement is one perpendicular to the axis of the hinge. It is possible however that a large impulse in another direction can produce a reaction between the two bodies that does produce an impulse component in the perpendicular direction.

The `jointData` object for a hinge contains the following properties

* mainAxis: Vector3; the axis for the main body.
* connectedAxis: Vector3; the axis for the connected body, usually the same as the main axis.
* mainPivot: Vector3; the pivot point for the main body.
* connectedPivot: vector3; the pivot point for the connected body, the negative of the connected body's position.

A hinge joint can also be created with a helper class

```javascript
var joint1 = new BABYLON.HingeJoint(jointData);
```
**_PhysicsJoint Playgrounds_**  
* [Playground Example Cannon.js and Oimo.js - Hinge - Both Sphere Imposters](https://www.babylonjs-playground.com/#UFVU18)
* [Playground Example Ammo.js - Hinge - Both Sphere Imposters](https://www.babylonjs-playground.com/#UFVU18#1)

**_Helper Class Playgrounds_**  
* [Playground Example Cannon.js and Oimo.js - Hinge - Both Sphere Imposters](https://www.babylonjs-playground.com/#F15U0G#16)
* [Playground Example Ammo.js - Hinge - Both Sphere Imposters](https://www.babylonjs-playground.com/#F15U0G#17)

Since a hinge gives movement about only one axis it would seem to make sense to replace the representation of the hinge with a cylinder. Doing this, reshaping the box and keeping the sphere mesh imposter as a sphere does produce changes.

In this case, for all the physics' engines whatever the direction of impulse set it is applied in a direction perpendicular to the hinge axis.

**_PhysicsJoint Playgrounds_**  
* [Playground Example Cannon.js and Oimo.js - Hinge - Cylinder Imposter and Sphere Imposter](https://www.babylonjs-playground.com/#UFVU18#2)
* [Playground Example Ammo.js - Hinge - Cylinder Imposter and Sphere Imposter](https://www.babylonjs-playground.com/#UFVU18#3)

**_Helper Class Playgrounds_**  
* [Playground Example Cannon.js and Oimo.js - Hinge - Cylinder Imposter and Sphere Imposter](https://www.babylonjs-playground.com/#F15U0G#18)
* [Playground Example Ammo.js - Hinge - Cylinder Imposter and Sphere Imposter](https://www.babylonjs-playground.com/#F15U0G#19)


Replacing the sphere mesh imposter with a cylinder imposter produces further changes. 
 
For `Cannon.js` you need to swap the y and z values in the mainAxis vector only, for a correct rotation direction

**_PhysicsJoint Playground_**  
* [Playground Example Cannon.js - Hinge - Both Cylinder Imposters](https://www.babylonjs-playground.com/#UFVU18#4)

**_Helper Class Playground_**  
* [Playground Example Cannon.js - Hinge - Both Cylinder Imposters](https://www.babylonjs-playground.com/#F15U0G#20)

This is not necessary for `Oimo.js` and `Ammo.js`

**_PhysicsJoint Playgrounds_**  
* [Playground Example Oimo.js - Hinge - Both Cylinder Imposters](https://www.babylonjs-playground.com/#UFVU18#5)
* [Playground Example Ammo.js - Hinge - Both Cylinder Imposters](https://www.babylonjs-playground.com/#UFVU18#6)

**_Helper Class Playgrounds_** 
* [Playground Example Oimo.js - Hinge - Both Cylinder Imposters](https://www.babylonjs-playground.com/#F15U0G#21)
* [Playground Example Ammo.js - Hinge - Both Cylinder Imposters](https://www.babylonjs-playground.com/#F15U0G#22)
        
### Ball And Socket Joint
For a ball and socket joint a force can produce rotation about all three axes.

`Cannon.js` behaves quite differently from the other two. 

For `Cannon.js` the  `jointData` object for a ball and socket contains the following properties

* mainPivot: Vector3; the center of mass that the connected body rotates around.
* connectedPivot: Vector3; use yet to be determined.

In  `Cannon.js`, for a ball and socket joint, the initial position of the connected body is moved to the position of the main body. In order for a connected body to appear to orbit a body a dummy (non physics based) mesh should be positioned to represent the body being orbited. The position of the main body's pivot should be the position of the dummy body.

**_PhysicsJoint Playground_**  
* [Playground Example Cannon.js - Ball and Socket - Both Sphere Imposters](https://www.babylonjs-playground.com/#UFVU18#12)

In `Oimo.js` and `Ammo.js`, for a ball and socket joint, the positioning is determined by the connected pivot. The `jointData` object for a ball and socket contains the following properties

* mainPivot: Vector3; the pivot point for the main body.
* connectedPivot: vector3; the pivot point for the connected body, the negative of the connected body's position.

**_PhysicsJoint Playground_** 
* [Playground Example Oimo.js - Ball and Socket - Both Sphere Imposters](https://www.babylonjs-playground.com/#UFVU18#10)
* [Playground Example Ammo.js - Ball and Socket - Both Sphere Imposters](https://www.babylonjs-playground.com/#UFVU18#11)

### Wheel Joint

For a wheel the a force produces rotation about two axes.

The `jointData` object for a hinge contains the following properties

* mainAxis: Vector3; the first axis.
* connectedAxis: Vector3; the second axis.
* mainPivot: Vector3; the pivot point for the main body.
* connectedPivot: vector3; the pivot point for the connected body, the negative of the connected body's position.

**Note** In the `Oimo.js` playgrounds changing the contact point of the force will not produce a spin around the axis perpendicular to the sphere's surface.  Since the helper class uses the `Point2PointConstraint` in `Ammo.js` a change of contact point can produce a spin around the axis perpendicular to the sphere's surface.

**_PhysicsJoint Playground_**  
* [Playground Example Oimo.js - Wheel - Both Sphere Imposters](https://www.babylonjs-playground.com/#UFVU18#7)

The `PhysicsJoint` called `Hinge2Joint` can be used as an alternative. However when using the helper class only

```javascript
var joint1 = new BABYLON.Hinge2Joint(jointData);
```
is available. When this helper class is used with `Ammo.js` it forms a `BallAndSocketJoint` not a `WheelJoint`.

**_Helper Class Playgrounds_**  
* [Playground Example Oimo.js - Hinge2 - Both Sphere Imposters](https://www.babylonjs-playground.com/#F15U0G#26) 
* [Playground Example Ammo.js - Hinge2 - Both Sphere Imposters](https://www.babylonjs-playground.com/#F15U0G#27)

### Distance Joint

**_PhysicsJoint Playgrounds_**  
* [Playground Example Cannon.js and Oimo.js - Distance - Both Sphere Imposters](https://www.babylonjs-playground.com/#UFVU18#13)
* [Playground Example Ammo.js - Distance - Both Sphere Imposters](https://www.babylonjs-playground.com/#UFVU18#14)

**_Helper Class Playgrounds_**  
* [Playground Example Cannon.js and Oimo.js - Distance - Both Sphere Imposters](https://www.babylonjs-playground.com/#F15U0G#14)
* [Playground Example Ammo.js - Distance - Both Sphere Imposters](https://www.babylonjs-playground.com/#F15U0G#15)



## Motor

https://www.babylonjs-playground.com/#5W5B6W#3