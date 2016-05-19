---
ID_PAGE: 25275
PG_TITLE: PhysicsEngine
PG_VERSION: 2.1
TAGS:
    - Engine
---
## Description

class [PhysicsEngine](/classes/2.4/PhysicsEngine)



## Constructor

## new [PhysicsEngine](/classes/2.4/PhysicsEngine)(gravity, _physicsPlugin)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | gravity | [Vector3](/classes/2.4/Vector3) | 
optional | _physicsPlugin | IPhysicsEnginePlugin | 
## Members

### gravity : [Vector3](/classes/2.4/Vector3)

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

### setGravityundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setTimeStepundefined &rarr; void

Set the time step of the physics engine.

default is 1/60.

To slow it down, enter 1/600 for example.

To speed it up, 1/30

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disposeundefined &rarr; void


### getPhysicsPluginNameundefined &rarr; string


### addImpostorundefined &rarr; void

Adding a new impostor for the impostor tracking.

This will be done by the impostor itself.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### removeImpostorundefined &rarr; void

Remove an impostor from the engine.

This impostor and its mesh will not longer be updated by the physics engine.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### addJointundefined &rarr; void

Add a joint to the physics engine

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### removeJointundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getPhysicsPluginundefined &rarr; IPhysicsEnginePlugin


### getImpostorForPhysicsObjectundefined &rarr; [PhysicsImpostor](/classes/2.4/PhysicsImpostor)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getImpostorWithPhysicsBodyundefined &rarr; [PhysicsImpostor](/classes/2.4/PhysicsImpostor)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
