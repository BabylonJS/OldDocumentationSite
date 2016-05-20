---
ID_PAGE: 25277
PG_TITLE: OimoJSPlugin
PG_VERSION: 2.1
TAGS:
    - Plugins
---
## Description

class [OimoJSPlugin](/classes/2.4/OimoJSPlugin)



## Constructor

## new [OimoJSPlugin](/classes/2.4/OimoJSPlugin)(iterations)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | iterations | number |    Unused parameter

## Members

### world : any



### name : string



## Methods

### setGravity(gravity) &rarr; void

Sets the gravity

#### Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/2.4/Vector3) |    The given gravity

### setTimeStep(timeStep) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | timeStep | number | 

### executeStep(delta, impostors) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | delta | number | 
 | impostors | Array&lt;[PhysicsImpostor](/classes/2.4/PhysicsImpostor)&gt; | 
### applyImpulse(impostor, force, contactPoint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor
 | force | [Vector3](/classes/2.4/Vector3) |    The force to apply to the mesh
 | contactPoint | [Vector3](/classes/2.4/Vector3) |    The point of the mesh where the force has to be applied
### applyForce(impostor, force, contactPoint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor
 | force | [Vector3](/classes/2.4/Vector3) |    The force to apply to the mesh
 | contactPoint | [Vector3](/classes/2.4/Vector3) |    The point of the mesh where the force has to be applied
### generatePhysicsBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor

### removePhysicsBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor

### generateJoint(impostorJoint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostorJoint | PhysicsImpostorJoint | 

### removeJoint(impostorJoint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostorJoint | PhysicsImpostorJoint | 

### isSupported() &rarr; boolean

Tests if the plugin is usable in the current environement
### setTransformationFromPhysicsBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor

### setPhysicsBodyTransformation(impostor, newPosition, newRotation) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor
 | newPosition | [Vector3](/classes/2.4/Vector3) | 
 | newRotation | [Quaternion](/classes/2.4/Quaternion) | 
### setLinearVelocity(impostor, velocity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor
 | velocity | [Vector3](/classes/2.4/Vector3) | 
### setAngularVelocity(impostor, velocity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor
 | velocity | [Vector3](/classes/2.4/Vector3) | 
### getLinearVelocity(impostor) &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor

### getAngularVelocity(impostor) &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor

### setBodyMass(impostor, mass) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor
 | mass | number | 
### sleepBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor

### wakeUpBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The corresponding impostor

### updateDistanceJoint(joint, maxDistance, minDistance) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | joint | IMotorEnabledJoint | 
 | maxDistance | number | 
optional | minDistance | number | 
### setMotor(joint, speed, maxForce, motorIndex) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | joint | IMotorEnabledJoint | 
 | speed | number | 
optional | maxForce | number | 
### setLimit(joint, upperLimit, lowerLimit, motorIndex) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | joint | IMotorEnabledJoint | 
 | upperLimit | number | 
optional | lowerLimit | number | 
### dispose() &rarr; void

Destroys the engine object
