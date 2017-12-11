---
TAGS:
---
## Description

class [PhysicsImpostor](/classes/3.1/PhysicsImpostor)



## Constructor

## new [PhysicsImpostor](/classes/3.1/PhysicsImpostor)(object, type, _options, _scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | object | IPhysicsEnabledObject | 
 | type | number | 
optional | _options | PhysicsImpostorParameters | 
## Members

### object : IPhysicsEnabledObject


### type : number


### static DEFAULT_OBJECT_SIZE : [Vector3](/classes/3.1/Vector3)


### static IDENTITY_QUATERNION : [Quaternion](/classes/3.1/Quaternion)


### isDisposed : boolean


### mass : number


### friction : number


### restitution : number


### uniqueId : number


### physicsBody : any

Gets the body that holds this impostor. Either its own, or its parent.

Set the physics body. Used mainly by the physics engine/plugin
### parent : [PhysicsImpostor](/classes/3.1/PhysicsImpostor)


### void : undefined


### beforeStep : () =&gt; void

this function is executed by the physics engine.
### afterStep : () =&gt; void

this function is executed by the physics engine.
### onCollideEvent : (collider: undefined, collidedWith: undefined) =&gt; void

Legacy collision detection event support

#### Parameters
 | Name | Type | Description
---|---|---|---
 | collider | undefined | 
 | collidedWith | undefined | 
### onCollide : (e: { body: any }) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | e | { body: any } | 

### static NoImpostor : number


### static SphereImpostor : number


### static BoxImpostor : number


### static PlaneImpostor : number


### static MeshImpostor : number


### static CylinderImpostor : number


### static ParticleImpostor : number


### static HeightmapImpostor : number


## Methods

### isBodyInitRequired() &rarr; boolean

Should a new body be generated.
### setScalingUpdated(updated) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | updated | boolean | 

### forceUpdate() &rarr; void

Force a regeneration of this or the parent's impostor's body.

Use under cautious - This will remove all joints already implemented.
### resetUpdateFlags() &rarr; void


### getObjectExtendSize() &rarr; [Vector3](/classes/3.1/Vector3)


### getObjectCenter() &rarr; [Vector3](/classes/3.1/Vector3)


### getParam(paramName) &rarr; any

Get a specific parametes from the options parameter.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | paramName | string | 

### setParam(paramName, value) &rarr; void

Sets a specific parameter in the options given to the physics plugin

#### Parameters
 | Name | Type | Description
---|---|---|---
 | paramName | string | 
 | value | number | 
### setMass(mass) &rarr; void

Specifically change the body's mass option. Won't recreate the physics body object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mass | number | 

### getLinearVelocity() &rarr; [Vector3](/classes/3.1/Vector3)


### setLinearVelocity(velocity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | velocity | [Vector3](/classes/3.1/Vector3) | 

### getAngularVelocity() &rarr; [Vector3](/classes/3.1/Vector3)


### setAngularVelocity(velocity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | velocity | [Vector3](/classes/3.1/Vector3) | 

### executeNativeFunction(func) &rarr; void

Execute a function with the physics plugin native code.

Provide a function the will have two variables - the world object and the physics body object.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func |  | world | any | 
 | physicsBody | any | 

### registerBeforePhysicsStep(func) &rarr; void

Register a function that will be executed before the physics world is stepping forward.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func |  | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

 | 
### unregisterBeforePhysicsStep(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func |  | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

 | 
### registerAfterPhysicsStep(func) &rarr; void

Register a function that will be executed after the physics step

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func |  | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

 | 
### unregisterAfterPhysicsStep(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func |  | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

 | 
### registerOnPhysicsCollide(collideAgainst, Array, func) &rarr; void

register a function that will be executed when this impostor collides against a different body.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | collideAgainst | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) or Array | 
 | func |  | collider | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | collidedAgainst | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### unregisterOnPhysicsCollide(collideAgainst, Array, func) &rarr; (collideAgainst, Array, func)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | collideAgainst | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) or Array | 
 | func |  | collider | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | collidedAgainst | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) or Array | 
### applyForce(force, contactPoint) &rarr; void

Apply a force

#### Parameters
 | Name | Type | Description
---|---|---|---
 | force | [Vector3](/classes/3.1/Vector3) | 
 | contactPoint | [Vector3](/classes/3.1/Vector3) | 
### applyImpulse(force, contactPoint) &rarr; void

Apply an impulse

#### Parameters
 | Name | Type | Description
---|---|---|---
 | force | [Vector3](/classes/3.1/Vector3) | 
 | contactPoint | [Vector3](/classes/3.1/Vector3) | 
### createJoint(otherImpostor, jointType, jointData) &rarr; void

A help function to create a joint.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherImpostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | jointType | number | 
 | jointData | PhysicsJointData | 
### addJoint(otherImpostor, joint) &rarr; void

Add a joint to this impostor with a different impostor.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherImpostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | joint | [PhysicsJoint](/classes/3.1/PhysicsJoint) | 
### sleep() &rarr; void

Will keep this body still, in a sleep mode.
### wakeUp() &rarr; void

Wake the body up.
### clone(newObject) &rarr; [PhysicsImpostor](/classes/3.1/PhysicsImpostor)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newObject | IPhysicsEnabledObject | 

### dispose() &rarr; void


### setDeltaPosition(position) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/3.1/Vector3) | 

### setDeltaRotation(rotation) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | rotation | [Quaternion](/classes/3.1/Quaternion) | 

### getBoxSizeToRef(result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/3.1/Vector3) | 

### getRadius() &rarr; number


### syncBoneWithImpostor(bone, boneMesh, jointPivot, distToJoint, adjustRotation) &rarr; void

Sync a bone with this impostor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | bone | [Bone](/classes/3.1/Bone) |  The bone to sync to the impostor.
 | boneMesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  The mesh that the bone is influencing.
 | jointPivot | [Vector3](/classes/3.1/Vector3) |  The pivot of the joint / bone in local space.
optional | distToJoint | number |  Optional distance from the impostor to the joint.
### syncImpostorWithBone(bone, boneMesh, jointPivot, distToJoint, adjustRotation, boneAxis) &rarr; void

Sync impostor to a bone

#### Parameters
 | Name | Type | Description
---|---|---|---
 | bone | [Bone](/classes/3.1/Bone) |  The bone that the impostor will be synced to.
 | boneMesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  The mesh that the bone is influencing.
 | jointPivot | [Vector3](/classes/3.1/Vector3) |  The pivot of the joint / bone in local space.
optional | distToJoint | number |  Optional distance from the impostor to the joint.
optional | adjustRotation | [Quaternion](/classes/3.1/Quaternion) |  Optional quaternion for adjusting the local rotation of the bone.
