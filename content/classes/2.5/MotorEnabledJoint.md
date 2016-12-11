---
TAGS:
---
## Description

class [MotorEnabledJoint](/classes/2.5/MotorEnabledJoint) extends [PhysicsJoint](/classes/2.5/PhysicsJoint)



## Constructor

## new [MotorEnabledJoint](/classes/2.5/MotorEnabledJoint)(type, jointData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | type | number |  
 | jointData | PhysicsJointData |  
## Methods

### setMotor(force, maxForce) &rarr; void

Set the motor values.

Attention, this function is plugin specific. Engines won't react 100% the same.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | number |  
optional | maxForce | number |  
### setLimit(upperLimit, lowerLimit) &rarr; void

Set the motor's limits.

Attention, this function is plugin specific. Engines won't react 100% the same.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | upperLimit | number |  
optional | lowerLimit | number |  
