---
ID_PAGE: 25164
PG_TITLE: InterpolateValueAction
PG_VERSION: 2.1
TAGS:
    - Action
---
## Description

class [InterpolateValueAction](/classes/3.1/InterpolateValueAction) extends [Action](/classes/3.1/Action)



## Constructor

## new [InterpolateValueAction](/classes/3.1/InterpolateValueAction)(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | 
 | target | any | 
 | propertyPath | string | 
 | value | any | 
optional | duration | number | 
optional | condition | [Condition](/classes/3.1/Condition) | 
optional | stopOtherAnimations | boolean | 
## Members

### propertyPath : string



### value : any



### duration : number



### stopOtherAnimations : boolean



### onInterpolationDone : () =&gt; void



### onInterpolationDoneObservable : [Observable](/classes/3.1/Observable)&lt;[InterpolateValueAction](/classes/3.1/InterpolateValueAction)&gt;



## Methods

### execute() &rarr; void


### serialize(parent) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parent | any | 

