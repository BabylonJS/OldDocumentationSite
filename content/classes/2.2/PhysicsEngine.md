---
ID_PAGE: 25275
PG_TITLE: PhysicsEngine
PG_VERSION: 2.1
TAGS:
    - Engine
---
##Description

class [PhysicsEngine](/classes/2.2/PhysicsEngine)



##Constructor

##new [PhysicsEngine](/classes/2.2/PhysicsEngine)(plugin)

The physics engine loader

####Parameters
 | Name | Type | Description
---|---|---|---
optional | plugin | IPhysicsEnginePlugin |  default : [oimoJs](http://lo-th.github.io/Oimo.js/) You can load your own physic engine, more informations [here](http://doc.babylonjs.com/tutorials/Adding_Your_Own_Physics_Engine_Plugin_to_Babylon.js)

##Members

###gravity : [Vector3](/classes/2.2/Vector3)

The gravity value applied by the engine

###static NoImpostor : number

The value used when there is no impostor used by the physic engine

###static SphereImpostor : number

The value used for a sphere impostor

###static BoxImpostor : number

The value used for a box impostor

###static PlaneImpostor : number

The value used for a plane impostor

###static MeshImpostor : number

The value used for a mesh impostor

###static CapsuleImpostor : number

The value used for a capsule impostor

###static ConeImpostor : number

The value used for a cone impostor

###static CylinderImpostor : number

The value used for a cylinder impostor

###static ConvexHullImpostor : number

The value used for a convex hull impostor

###static Epsilon : number

Returns epsilon value : 0.001, used for approximations

##Methods

###dispose() &rarr; void

Calls the dispose method of the loaded engine
###isSupported() &rarr; boolean


