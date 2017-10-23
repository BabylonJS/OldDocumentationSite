---
ID_PAGE: 25276
PG_TITLE: CannonJSPlugin
PG_VERSION: 2.1
TAGS:
    -   Plugins
---
## Description

class [CannonJSPlugin](/classes/3.1/CannonJSPlugin)



## Constructor

## new [CannonJSPlugin](/classes/3.1/CannonJSPlugin)(_useDeltaForWorldStep, iterations)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | _useDeltaForWorldStep | boolean | 
optional | iterations | number | 
## Members

### world : any



### name : string



### BJSCANNON : any



## Methods

### setGravity(gravity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/3.1/Vector3) | 

### setTimeStep(timeStep) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | timeStep | number | 

### getTimeStep() &rarr; number


### executeStep(delta, impostors) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | delta | number | 
 | impostors | Array&lt;[PhysicsImpostor](/classes/3.1/PhysicsImpostor)&gt; | 
### applyImpulse(impostor, force, contactPoint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | force | [Vector3](/classes/3.1/Vector3) | 
 | contactPoint | [Vector3](/classes/3.1/Vector3) | 
### applyForce(impostor, force, contactPoint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | force | [Vector3](/classes/3.1/Vector3) | 
 | contactPoint | [Vector3](/classes/3.1/Vector3) | 
### generatePhysicsBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### removePhysicsBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

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
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### setPhysicsBodyTransformation(impostor, newPosition, newRotation) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | newPosition | [Vector3](/classes/3.1/Vector3) | 
 | newRotation | [Quaternion](/classes/3.1/Quaternion) | 
### isSupported() &rarr; boolean


### setLinearVelocity(impostor, velocity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | velocity | [Vector3](/classes/3.1/Vector3) | 
### setAngularVelocity(impostor, velocity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | velocity | [Vector3](/classes/3.1/Vector3) | 
### getLinearVelocity(impostor) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### getAngularVelocity(impostor) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### setBodyMass(impostor, mass) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | mass | number | 
### getBodyMass(impostor) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### getBodyFriction(impostor) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### setBodyFriction(impostor, friction) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | friction | number | 
### getBodyRestitution(impostor) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### setBodyRestitution(impostor, restitution) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | restitution | number | 
### sleepBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### wakeUpBody(impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### updateDistanceJoint(joint, maxDistance, minDistance) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | joint | [PhysicsJoint](/classes/3.1/PhysicsJoint) | 
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
### syncMeshWithImpostor(mesh, impostor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
### getRadius(impostor) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 

### getBoxSizeToRef(impostor, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### dispose() &rarr; void


