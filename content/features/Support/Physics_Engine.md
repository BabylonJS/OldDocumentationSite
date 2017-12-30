---
PG_TITLE: Physics Engine Support
title: Physics Engine
abstract: ''
slug: physics-engine
---

# Physics Engine Support

Physics engines are third party external programs that can be plugged into Babylon.js. They, depending on their features, emulate "real-life" interactions between objects, which can be meshes, solid particles from the solid particle system or some caameras. One feature of a Physics Engine is the addition of gravity to a scene.

## Physics Engines Available

There are plugins for 2 physics engines:

1. Cannon.js - a wonderful physics engine written entirely in JavaScript
2. Oimo.js - a JS port of the lightweight Oimo physics engine

Both need to be enabled before use.

## Impostors

Interactions between objects are achieved by imposters, simple objects that are attached to any complex objects with a scene. To allow interaction between objects, the physics engines use an impostor, which is a simpler representation of a complex object. The imposter can be assigned physical attributes such as mass, friction and a coefficient of restitution.

[Playground Example Physics](https://www.babylonjs-playground.com/#BEFOO)

It is also possible to assign linear and angular velocities to an imposter as well as an impulse and in the case of the Cannon Physics Engine a force.

Two imposters can be connected using joints such as a hinge or ball and socket.

Collisions between two imposters P<sub>0</sub> and P<sub>1</sub> is handled by setting a callback function on P<sub>0</sub> that determines the action when in contact with P<sub>1</sub>.

# Further Reading

## Basic - L1

[Using a Physics Engine](/how-to/physics/using-the-physics-engine)

## More Advanced - L3

[Add Your Own Physics Engine](/how-to/physics/adding-your-own-physics-engine-plugin-to-babylon_js)