---
TAGS:
---
## Description

class [PhysicsImpostor](/classes/2.4/PhysicsImpostor)



## Constructor

## new [PhysicsImpostor](/classes/2.4/PhysicsImpostor)(object, type, _options, _scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | object | IPhysicsEnabledObject | 
 | type | number | 
optional | _options | PhysicsImpostorParameters | 
## Members

### object : IPhysicsEnabledObject



### type : number



### static DEFAULT_OBJECT_SIZE : [Vector3](/classes/2.4/Vector3)



### uniqueId : number



### physicsBody : any

Gets the body that holds this impostor. Either its own, or its parent.

Set the physics body. Used mainly by the physics engine/plugin

### parent : [PhysicsImpostor](/classes/2.4/PhysicsImpostor)



### beforeStep : () =&gt; void

this function is executed by the physics engine.

### afterStep : () =&gt; void

this function is executed by the physics engine.

### onCollide : (e: { undefined: any }) =&gt; void



### static NoImpostor : number



### static SphereImpostor : number



### static BoxImpostor : number



### static PlaneImpostor : number



### static MeshImpostor : number



### static CylinderImpostor : number



### static ParticleImpostor : number



### static HeightmapImpostor : number



## Methods

### isBodyInitRequiredundefined &rarr; boolean

Should a new body be generated.
### setScalingUpdatedundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### forceUpdateundefined &rarr; void

Force a regeneration of this or the parent's impostor's body.

Use under cautious - This will remove all joints already implemented.
### resetUpdateFlagsundefined &rarr; void


### getObjectExtendSizeundefined &rarr; [Vector3](/classes/2.4/Vector3)


### getObjectCenterundefined &rarr; [Vector3](/classes/2.4/Vector3)


### getParamundefined &rarr; any

Get a specific parametes from the options parameter.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setParamundefined &rarr; void

Sets a specific parameter in the options given to the physics plugin

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setMassundefined &rarr; void

Specifically change the body's mass option. Won't recreate the physics body object

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLinearVelocityundefined &rarr; [Vector3](/classes/2.4/Vector3)


### setLinearVelocityundefined &rarr; void

Set the body's linear velocity.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAngularVelocityundefined &rarr; [Vector3](/classes/2.4/Vector3)


### setAngularVelocityundefined &rarr; void

Set the body's linear velocity.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### executeNativeFunctionundefined &rarr; void

Execute a function with the physics plugin native code.

Provide a function the will have two variables - the world object and the physics body object.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### registerBeforePhysicsStepundefined &rarr; void

Register a function that will be executed before the physics world is stepping forward.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unregisterBeforePhysicsStepundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### registerAfterPhysicsStepundefined &rarr; void

Register a function that will be executed after the physics step

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unregisterAfterPhysicsStepundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### registerOnPhysicsCollideundefined &rarr; void

register a function that will be executed when this impostor collides against a different body.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unregisterOnPhysicsCollideundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### applyForceundefined &rarr; void

Apply a force

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### applyImpulseundefined &rarr; void

Apply an impulse

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createJointundefined &rarr; void

A help function to create a joint.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### addJointundefined &rarr; void

Add a joint to this impostor with a different impostor.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### sleepundefined &rarr; void

Will keep this body still, in a sleep mode.
### wakeUpundefined &rarr; void

Wake the body up.
### cloneundefined &rarr; [PhysicsImpostor](/classes/2.4/PhysicsImpostor)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disposeundefined &rarr; void


### setDeltaPositionundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setDeltaRotationundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
