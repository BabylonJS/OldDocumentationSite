---
TAGS:
---
## Description

class [Hinge2Joint](/classes/2.5/Hinge2Joint) extends [MotorEnabledJoint](/classes/2.5/MotorEnabledJoint)

This class represents a dual hinge physics joint (same as wheel joint)

## Constructor

## new [Hinge2Joint](/classes/2.5/Hinge2Joint)(jointData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | jointData | PhysicsJointData |  

## Methods

### setMotor(force, maxForce, motorIndex) &rarr; void

Set the motor values.

Attention, this function is plugin specific. Engines won't react 100% the same.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | number |  
optional | maxForce | number |  
optional | motorIndex | number |  
### setLimit(upperLimit, lowerLimit, motorIndex) &rarr; void

Set the motor limits.

Attention, this function is plugin specific. Engines won't react 100% the same.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | upperLimit | number |  
optional | lowerLimit | number |  
optional | motorIndex | number |  
