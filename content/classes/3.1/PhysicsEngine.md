---
ID_PAGE: 25275
PG_TITLE: PhysicsEngine
PG_VERSION: 2.1
TAGS:
    - Engine
---
## Description

class [PhysicsEngine](/classes/3.1/PhysicsEngine)



## Constructor

## new [PhysicsEngine](/classes/3.1/PhysicsEngine)(gravity, _physicsPlugin)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | Nullable&lt;[Vector3](/classes/3.1/Vector3)&gt; | 
optional | _physicsPlugin | IPhysicsEnginePlugin | 
## Members

### gravity : [Vector3](/classes/3.1/Vector3)


### static Epsilon : number


## Methods

### setGravity(gravity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/3.1/Vector3) | 

### setTimeStep(newTimeStep) &rarr; void

Set the time step of the physics engine.

default is 1/60.

To slow it down, enter 1/600 for example.

To speed it up, 1/30

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | newTimeStep | number | 

### getTimeStep() &rarr; number

Get the time step of the physics engine.
### dispose() &rarr; void


### getPhysicsPluginName() &rarr; string


### addImpostor(impostor) &rarr; void

Adding a new impostor for the impostor tracking.

This will be done by the impostor itself.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### removeImpostor(impostor) &rarr; void

Remove an impostor from the engine.

This impostor and its mesh will not longer be updated by the physics engine.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### addJoint(mainImpostor, connectedImpostor, joint) &rarr; void

Add a joint to the physics engine

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mainImpostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | connectedImpostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | joint | [PhysicsJoint](/classes/3.1/PhysicsJoint) | 
### removeJoint(mainImpostor, connectedImpostor, joint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mainImpostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | connectedImpostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | joint | [PhysicsJoint](/classes/3.1/PhysicsJoint) | 
### getPhysicsPlugin() &rarr; IPhysicsEnginePlugin


### getImpostors() &rarr; Array&lt;[PhysicsImpostor](/classes/3.1/PhysicsImpostor)&gt;


### getImpostorForPhysicsObject(object) &rarr; Nullable&lt;[PhysicsImpostor](/classes/3.1/PhysicsImpostor)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | object | IPhysicsEnabledObject | 

### getImpostorWithPhysicsBody(body) &rarr; Nullable&lt;[PhysicsImpostor](/classes/3.1/PhysicsImpostor)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | body | any | 

