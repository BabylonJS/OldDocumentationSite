---
ID_PAGE: 25164
PG_TITLE: InterpolateValueAction
PG_VERSION: 2.1
TAGS:
    - Action
---
## Description

class [InterpolateValueAction](/classes/3.0/InterpolateValueAction) extends [Action](/classes/3.0/Action)

This action creates an animation to interpolate the current value of a property to a given target.

The supported types are: Float, [Color3](/classes/3.0/Color3), [Vector3](/classes/3.0/Vector3), [Matrix](/classes/3.0/Matrix) and [Quaternion](/classes/3.0/Quaternion)

http://doc.babylonjs.com/tutorials/How_to_use_Actions

http://www.babylonjs-playground.com/?17

## Constructor

## new [InterpolateValueAction](/classes/3.0/InterpolateValueAction)(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any |      The trigger
 | target | any |      The target
 | propertyPath | string |      Property of the target
 | value | any |      The target value
optional | duration | number |      The duration
optional | condition | [Condition](/classes/3.0/Condition) |      The condition
optional | stopOtherAnimations | boolean |    
## Members

### propertyPath : string

The propertyPath is a string property of your target

### value : any

The target value

### duration : number

The duration for the given interpolation

### stopOtherAnimations : boolean

Set true to stop other animation, false otherwise.

### onInterpolationDone : () =&gt; void



## Methods

### execute() &rarr; void


### serialize(parent) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parent | any |   

