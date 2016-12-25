---
ID_PAGE: 25275
PG_TITLE: PhysicsEngine
PG_VERSION: 2.1
TAGS:
    - Engine
---
## Description

class [PhysicsEngine](/classes/2.5/PhysicsEngine)



## Constructor

## new [PhysicsEngine](/classes/2.5/PhysicsEngine)(gravity, _physicsPlugin)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | gravity | [Vector3](/classes/2.5/Vector3) |  
optional | _physicsPlugin | IPhysicsEnginePlugin |  
## Members

### gravity : [Vector3](/classes/2.5/Vector3)

The gravity value applied by the engine

### static NoImpostor : number

@Deprecated

### static SphereImpostor : number

The value used for a sphere impostor

### static BoxImpostor : number

The value used for a box impostor

### static PlaneImpostor : number

The value used for a plane impostor

### static MeshImpostor : number

The value used for a mesh impostor

### static CylinderImpostor : number

The value used for a cylinder impostor

### static HeightmapImpostor : number



### static CapsuleImpostor : number

The value used for a capsule impostor

### static ConeImpostor : number

The value used for a cone impostor

### static ConvexHullImpostor : number

The value used for a convex hull impostor

### static Epsilon : number

Returns epsilon value : 0.001, used for approximations

## Methods

### setGravity(gravity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/2.5/Vector3) |  

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
 | impostor | [PhysicsImpostor](/classes/2.5/PhysicsImpostor) |  

### removeImpostor(impostor) &rarr; void

Remove an impostor from the engine.

This impostor and its mesh will not longer be updated by the physics engine.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.5/PhysicsImpostor) |  

### addJoint(mainImpostor, connectedImpostor, joint) &rarr; void

Add a joint to the physics engine

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mainImpostor | [PhysicsImpostor](/classes/2.5/PhysicsImpostor) |  
 | connectedImpostor | [PhysicsImpostor](/classes/2.5/PhysicsImpostor) |  
 | joint | [PhysicsJoint](/classes/2.5/PhysicsJoint) |  
### removeJoint(mainImpostor, connectedImpostor, joint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mainImpostor | [PhysicsImpostor](/classes/2.5/PhysicsImpostor) |  
 | connectedImpostor | [PhysicsImpostor](/classes/2.5/PhysicsImpostor) |  
 | joint | [PhysicsJoint](/classes/2.5/PhysicsJoint) |  
### getPhysicsPlugin() &rarr; IPhysicsEnginePlugin


### getImpostorForPhysicsObject(object) &rarr; [PhysicsImpostor](/classes/2.5/PhysicsImpostor)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | object | IPhysicsEnabledObject |  

### getImpostorWithPhysicsBody(body) &rarr; [PhysicsImpostor](/classes/2.5/PhysicsImpostor)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | body | any |  

