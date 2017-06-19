---
ID_PAGE: 25275
PG_TITLE: PhysicsEngine
PG_VERSION: 2.1
TAGS:
    - Engine
---
## Description

class [PhysicsEngine](/classes/3.0/PhysicsEngine)



## Constructor

## new [PhysicsEngine](/classes/3.0/PhysicsEngine)(gravity, _physicsPlugin)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | gravity | [Vector3](/classes/3.0/Vector3) |   
optional | _physicsPlugin | IPhysicsEnginePlugin |   
## Members

### gravity : [Vector3](/classes/3.0/Vector3)

The gravity value applied by the engine

### static Epsilon : number

Returns epsilon value : 0.001, used for approximations

## Methods

### setGravity(gravity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/3.0/Vector3) |   

### setTimeStep(newTimeStep) &rarr; void

Set the time step of the physics engine.

default is 1/60.

To slow it down, enter 1/600 for example.

To speed it up, 1/30

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | newTimeStep | number |   

### dispose() &rarr; void

Calls the dispose method of the loaded engine
### getPhysicsPluginName() &rarr; string


### addImpostor(impostor) &rarr; void

Adding a new impostor for the impostor tracking.

This will be done by the impostor itself.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.0/PhysicsImpostor) |   

### removeImpostor(impostor) &rarr; void

Remove an impostor from the engine.

This impostor and its mesh will not longer be updated by the physics engine.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.0/PhysicsImpostor) |   

### addJoint(mainImpostor, connectedImpostor, joint) &rarr; void

Add a joint to the physics engine

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mainImpostor | [PhysicsImpostor](/classes/3.0/PhysicsImpostor) |   
 | connectedImpostor | [PhysicsImpostor](/classes/3.0/PhysicsImpostor) |   
 | joint | [PhysicsJoint](/classes/3.0/PhysicsJoint) |   
### removeJoint(mainImpostor, connectedImpostor, joint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mainImpostor | [PhysicsImpostor](/classes/3.0/PhysicsImpostor) |   
 | connectedImpostor | [PhysicsImpostor](/classes/3.0/PhysicsImpostor) |   
 | joint | [PhysicsJoint](/classes/3.0/PhysicsJoint) |   
### getPhysicsPlugin() &rarr; IPhysicsEnginePlugin


### getImpostorForPhysicsObject(object) &rarr; [PhysicsImpostor](/classes/3.0/PhysicsImpostor)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | object | IPhysicsEnabledObject |   

### getImpostorWithPhysicsBody(body) &rarr; [PhysicsImpostor](/classes/3.0/PhysicsImpostor)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | body | any |   

