---
ID_PAGE: 25276
PG_TITLE: CannonJSPlugin
PG_VERSION: 2.1
TAGS:
    -   Plugins
---
## Description

class [CannonJSPlugin](/classes/2.4/CannonJSPlugin)



## Constructor

## new [CannonJSPlugin](/classes/2.4/CannonJSPlugin)(_useDeltaForWorldStep, iterations)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | _useDeltaForWorldStep | boolean |  
optional | iterations | number |    default : 10. The bigger are the iterations the more precise will be the equations but while calculating more the performance impacted
## Members

### world : any



### name : string



## Methods

### setGravity(gravity) &rarr; void

Applies the given gravity into the world

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
 | delta | number |    The fixed time step size to use.
 | impostors | Array&lt;[PhysicsImpostor](/classes/2.4/PhysicsImpostor)&gt; | 
### applyImpulse(impostor, force, contactPoint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use
 | force | [Vector3](/classes/2.4/Vector3) |    The force to apply
 | contactPoint | [Vector3](/classes/2.4/Vector3) |    The contact point on the given mesh
### applyForce(impostor, force, contactPoint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use
 | force | [Vector3](/classes/2.4/Vector3) |    The force to apply
 | contactPoint | [Vector3](/classes/2.4/Vector3) |    The contact point on the given mesh
### generatePhysicsBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use

### removePhysicsBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use

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

### setTransformationFromPhysicsBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use

### setPhysicsBodyTransformation(impostor, newPosition, newRotation) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use
 | newPosition | [Vector3](/classes/2.4/Vector3) | 
 | newRotation | [Quaternion](/classes/2.4/Quaternion) | 
### isSupported() &rarr; boolean


### setLinearVelocity(impostor, velocity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use
 | velocity | [Vector3](/classes/2.4/Vector3) | 
### setAngularVelocity(impostor, velocity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use
 | velocity | [Vector3](/classes/2.4/Vector3) | 
### getLinearVelocity(impostor) &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use

### getAngularVelocity(impostor) &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use

### setBodyMass(impostor, mass) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use
 | mass | number | 
### sleepBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use

### wakeUpBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/2.4/PhysicsImpostor) |    The impostor to use

### updateDistanceJoint(joint, maxDistance, minDistance) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | joint | [PhysicsJoint](/classes/2.4/PhysicsJoint) | 
 | maxDistance | number | 
optional | minDistance | number | 
### setMotor(joint, speed, maxForce, motorIndex) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | joint | IMotorEnabledJoint | 
optional | speed | number | 
optional | maxForce | number | 
### setLimit(joint, upperLimit, lowerLimit) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | joint | IMotorEnabledJoint | 
 | upperLimit | number | 
optional | lowerLimit | number | 
### dispose() &rarr; void

Disposes the [CannonJSPlugin](/classes/2.4/CannonJSPlugin)
