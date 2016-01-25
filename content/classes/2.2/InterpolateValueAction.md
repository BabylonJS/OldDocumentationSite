---
ID_PAGE: 25164
PG_TITLE: InterpolateValueAction
PG_VERSION: 2.1
TAGS:
    - Action
---
##Description

class [InterpolateValueAction](/classes/2.2/InterpolateValueAction) extends [Action](/classes/2.2/Action)

This action creates an animation to interpolate the current value of a property to a given target.

The supported types are: Float, Color3, Vector3, Matrix and Quaternion

http://doc.babylonjs.com/tutorials/How_to_use_Actions

http://www.babylonjs-playground.com/?17

##Constructor

##new [InterpolateValueAction](/classes/2.2/InterpolateValueAction)(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations)

The Interpolate Value [Action](/classes/2.2/Action) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any |  The trigger
 | target | any |  The target
 | propertyPath | string |  Property of the target
 | value | any |  The target value
optional | duration | number |  The duration
optional | condition | [Condition](/classes/2.2/Condition) |  The condition
##Members

###propertyPath : string

The propertyPath is a string property of your target

###value : any

The target value

###duration : number

The duration for the given interpolation

###stopOtherAnimations : boolean

Set true to stop other animation, false otherwise.

##Methods

###execute() &rarr; void


