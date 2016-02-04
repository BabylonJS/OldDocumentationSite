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

##  new [PhysicsEngine](/classes/2.3/PhysicsEngine)(plugin)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | plugin | IPhysicsEnginePlugin |   default : oimoJs You can load your own physic engine, more informations here

## Members

### gravity : [Vector3](/classes/2.3/Vector3)



### static  NoImpostor : number



### static  SphereImpostor : number



### static  BoxImpostor : number



### static  PlaneImpostor : number



### static  MeshImpostor : number



### static  CapsuleImpostor : number



### static  ConeImpostor : number



### static  CylinderImpostor : number



### static  ConvexHullImpostor : number



### static  HeightmapImpostor : number



### static  Epsilon : number



## Methods

### dispose() &rarr; void


### isSupported() &rarr; boolean


### getPhysicsBodyOfMesh(mesh) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) | 

### getPhysicsPluginName() &rarr; string


