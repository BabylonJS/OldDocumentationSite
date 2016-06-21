---
TAGS:
---
## Description

class [PhysicsJoint](/classes/2.4/PhysicsJoint)

This is a holder class for the physics joint created by the physics plugin.

It holds a set of functions to control the underlying joint.

## Constructor

## new [PhysicsJoint](/classes/2.4/PhysicsJoint)(type, jointData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | type | number | 
 | jointData | PhysicsJointData | 
## Members

### type : number



### jointData : PhysicsJointData



### physicsJoint : any



### physicsPlugin : IPhysicsEnginePlugin



### static [DistanceJoint](/classes/2.4/DistanceJoint) : number



### static [HingeJoint](/classes/2.4/HingeJoint) : number



### static BallAndSocketJoint : number



### static WheelJoint : number



### static SliderJoint : number



### static PrismaticJoint : number



### static UniversalJoint : number



### static [Hinge2Joint](/classes/2.4/Hinge2Joint) : number



### static PointToPointJoint : number



### static SpringJoint : number



### static LockJoint : number



## Methods

### executeNativeFunction(func) &rarr; void

Execute a function that is physics-plugin specific.

                       It accepts two parameters: the physics world and the physics joint.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (world: any, physicsJoint: any) =&gt; void | 

