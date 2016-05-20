---
ID_PAGE: 25168
PG_TITLE: ValueCondition
PG_VERSION: 2.1
TAGS:
    - Condition
---
## Description

class [ValueCondition](/classes/2.4/ValueCondition) extends [Condition](/classes/2.4/Condition)



## Constructor

## new [ValueCondition](/classes/2.4/ValueCondition)(actionManager, target, propertyPath, value, operator)

The Value condition constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | actionManager | [ActionManager](/classes/2.4/ActionManager) |    The action manager
 | target | any |    The target
 | propertyPath | string |    The property Path
 | value | any |    The given value
## Members

### propertyPath : string

The propertyPath of condition

### value : any

The value of the condition

### operator : number

The operator of the condition

### static IsEqual : number

isEqual of value condition

### static IsDifferent : number

isDifferent of value condition

### static IsGreater : number

isGreater of value condition

### static IsLesser : number

isLesser of value condition

## Methods

### isValid() &rarr; boolean


### serialize() &rarr; any


### static GetOperatorName(operator) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | operator | number | 

