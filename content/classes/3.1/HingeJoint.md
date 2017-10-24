---
TAGS:
---
## Description

class [HingeJoint](/classes/3.1/HingeJoint) extends [MotorEnabledJoint](/classes/3.1/MotorEnabledJoint)

This class represents a single hinge physics joint

## Constructor

## new [HingeJoint](/classes/3.1/HingeJoint)(jointData)



#### Parameters
 | Name | Type | Description
---|---|---|---
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
