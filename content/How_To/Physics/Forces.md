---
PG_TITLE: How To Use Forces
---

# How To Understand How the Physics' Engines Difference

This section considers the difference between basic Newtonian forces in the real world of rigid body physics and its simulation in the three physics engines 

1. Cannon.js;
2. Oimo.js;
3. Ammo.js

as well as any differences in using them. Playgrounds are available to check out the coding. In the playgrounds, where appropriate, the physics' engine used can be changed by selecting which ones to comment out.

See [How to Use The Physics' Engines](/how_to/using_the_physics_engine) for an overall view of setting up and using the three plugins.



## Body

Solids in physics are often referred to as `bodies`. In the simulation bodies are made up of two parts, the rendered object and the physics object. The rendered object is a mesh and the physics object, which holds the data about the body, is called a physics imposter. 

**Note:** a box imposter is often preferable when the body is a plane.

## Mass

This is the amount of matter in the body and is set when the imposter is formed. Static bodies should have a mass of zero.

```javascript
new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 2 }, scene);
```

## Forces

These are gravity, impulses, friction and applied forces.

### Gravity 

In the simulations gravity is a universal force applied throughout the time of the simulation producing a gravitational acceleration. Setting a Vector3 for gravity is in fact setting the gravitational acceleration. The default value being `(0, -9.807, 0)`. Since it is a universal force it is set in the physics' engine either when it is enabled or later. 

```javascript
/*When physics is enabled use default gravity*/ 
scene.enablePhysics(null, new BABYLON.CannonJSPlugin());
scene.enablePhysics(null, new BABYLON.OimoJSPlugin());
scene.enablePhysics(null, new BABYLON.AmmoJSPlugin());

//set gravity
scene.enablePhysics(new BABYLON.Vector3(0, -5, 0), new BABYLON.CannonJSPlugin());
scene.enablePhysics(new BABYLON.Vector3(0, -5, 0), new BABYLON.OimoJSPlugin());
scene.enablePhysics(new BABYLON.Vector3(0, -5, 0), new BABYLON.AmmoJSPlugin());

/*Get and set gravity*/
var physicsEngine = scene.enablePhysics(null, new BABYLON.CannonJSPlugin());
var physicsEngine = scene.enablePhysics(null, new BABYLON.OimoJSPlugin());
var physicsEngine = scene.enablePhysics(null, new BABYLON.AmmoJSPlugin());

//Get gravity
var gravity = physicsEngine.gravity;

//Set gravity
physicsEngine.setGravity(new BABYLON.Vector3(0, -5, 0))
```

*[Playground Example - Gravity](https://www.babylonjs-playground.com/#YUNAST#3)

### Impulses

An impulse is a force applied to a body in an instance which will change the current linear the impulse acts on the body will affect the change in the velocities. Impulses acting at the center of mass of the body will not change the angular velocity.
linear velocity and/or the angular velocity of the body. Unless other forces act on it the body will continue with the new velocities. W
An impulse is applied to a body's physics imposter.

Applying an impulse requires a vector giving the magnitude and direction of the impulse and the position vector of the contact point of the impulse.

```javascript
imposter.applyImpulse(impluse_vector, contact_vector)
```

**_Differences_**
* In `Cannon.js` and `Oimo.Js` the contact point of the impulse is given in world coordinates. 
* In Ammo.js the contact point is given in the body's local coordinates.

```javascript
let localRefPoint = new BABYLON.Vector3(x, y, z);
```

_Cannon.js_ and _Oimo.js_ 
```javascript
imposter.applyImpulse(ImpulseVector, mesh.getAbsolutePosition()); //impulse at center of mass

imposter.applyImpulse(ImpulseVector, mesh.getAbsolutePosition().add(localRefPoint)); //impulse at a local point
```

_Ammo.js_
```javascript
imposter.applyImpulse(ImpulseVector, BABYLON.Vector3.Zero()); //impulse at center of mass

imposter.applyImpulse(ImpulseVector, localRefPoint); //impulse at a local point
```

#### Playgrounds
The following playgrounds are initially set up to apply an impulse at the center of mass vertically against gravity which eventually return the box to earth. Leaving the friction as 0 and applying horizontal impulses shows the continuity of movement.

* [Playground Example Cannon.js and Oimo.js - Impulses](https://www.babylonjs-playground.com/#YUNAST#8)
* [Playground Example Ammo.js.js - Impulses](https://www.babylonjs-playground.com/#YUNAST#7)

### Friction

Friction is a property of a body and is set in the imposter and provides a continuous force between two bodies while they are in contact. You can set friction when creating an imposter and also get and set it later.

```javascript
new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 2, friction: 0.4}, scene); //on creation

var friction = imposter.friction; // get friction;
imposter.friction = 0.1; //set friction.
```

Since friction occurs at the boundary of a body, applying an impulse at the center of mass will produce an angular velocity as well as a linear velocity.

#### Playgrounds
Re-visiting the following and setting friction on **both** bodies and applying horizontal impulses will show the angular velocity effect.

* [Playground Example Cannon.js and Oimo.js - Impulses](https://www.babylonjs-playground.com/#YUNAST#8)
* [Playground Example Ammo.js.js - Impulses](https://www.babylonjs-playground.com/#YUNAST#7)

### Applied Forces

An applied force will only affect the body over the time period that it is applied which is the duration of the frame interval. For zero friction a sufficiently large force (to overcome inertia) applied in the first frame interval will set the body in motion. While `Cannon.js` and `Ammo.js` have a specific applied force method `Oimo.js` does not and so an applying force is replaced (internally) with the apply impulse method. For this reason you will notice that the same size applied force has a greater effect using `Oimo.js`.

As with all forces in `Ammo.js` the contact point is given in the body's local coordinates rather than in world space as in `Cannon.js` and `Oimo.js`.

```javascript
//Force Settings
var forceDirection = new BABYLON.Vector3(1, 0, 0);
var forceMagnitude = 50;
var contactLocalRefPoint = BABYLON.Vector3.Zero();
```

_Cannon.js_ and _Oimo.js_
```javascript
impostor.applyForce(forceDirection.scale(forceMagnitude), mesh.getAbsolutePosition().add(contactLocalRefPoint));
```

_Ammo.js_
```javascript
impostor.applyForce(forceDirection.scale(forceMagnitude), contactRefPoint);
```

#### Playgrounds
The following playgrounds are initially set up with zero friction and to apply an impulse at the center of mass horizontally in the X direction.

* [Playground Example Cannon.js and Oimo.js - Applied Force](https://www.babylonjs-playground.com/#YUNAST#11)
* [Playground Example Ammo.js - Applied Force](https://www.babylonjs-playground.com/#YUNAST#13)

# Further Reading

## Basic - L1

[How To Use The Physics' Engines](/how_to/using_the_physics_engine)  
[How To Use Joints](/how_to/joints)   
[How To Use Pivots and Axes](/how_to/pivots)  

## Mid Level - L2

[How To Use Advanced Features](/how_to/Using_Advanced_Physics_Features)
 
## More Advanced - L3

[How To Add Your Own Physics Engine](/how_to/Adding_Your_Own_Physics_Engine_Plugin_to_Babylon.js)