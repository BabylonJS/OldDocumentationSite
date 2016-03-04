---
ID_PAGE: 25275
PG_TITLE: PhysicsEngine
PG_VERSION: 2.1
TAGS:
    - Engine
---
## Description

class [PhysicsEngine](/classes/2.3/PhysicsEngine)



## Constructor

## new [PhysicsEngine](/classes/2.3/PhysicsEngine)(plugin)

The physics engine loader

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | plugin | IPhysicsEnginePlugin |   default : oimoJs You can load your own physic engine, more informations here

## Members

### gravity : [Vector3](/classes/2.3/Vector3)

The gravity value applied by the engine

### static NoImpostor : number

The value used when there is no impostor used by the physic engine

### static SphereImpostor : number

The value used for a sphere impostor

### static BoxImpostor : number

The value used for a box impostor

### static PlaneImpostor : number

The value used for a plane impostor

### static MeshImpostor : number

The value used for a mesh impostor

### static CapsuleImpostor : number

The value used for a capsule impostor

### static ConeImpostor : number

The value used for a cone impostor

### static CylinderImpostor : number

The value used for a cylinder impostor

### static ConvexHullImpostor : number

The value used for a convex hull impostor

### static HeightmapImpostor : number



### static Epsilon : number

Returns epsilon value : 0.001, used for approximations

## Methods

### dispose() &rarr; void

Calls the dispose method of the loaded engine
### isSupported() &rarr; boolean


### getPhysicsBodyOfMesh(mesh) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) | 

### getPhysicsPluginName() &rarr; string


