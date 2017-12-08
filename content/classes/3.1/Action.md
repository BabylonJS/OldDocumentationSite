---
ID_PAGE: 25151
PG_TITLE: Action
PG_VERSION: 2.1
TAGS:
    - Action
---
## Description

class [Action](/classes/3.1/Action)



## Constructor

## new [Action](/classes/3.1/Action)(triggerOptions, condition)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | 
optional | condition | [Condition](/classes/3.1/Condition) | 
## Members

### triggerOptions : any


### trigger : number


### onBeforeExecuteObservable : [Observable](/classes/3.1/Observable)&lt;[Action](/classes/3.1/Action)&gt;


## Methods

### getTriggerParameter() &rarr; any


### execute(evt) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | evt | [ActionEvent](/classes/3.1/ActionEvent) | 

### skipToNextActiveAction() &rarr; void


### then(action) &rarr; [Action](/classes/3.1/Action)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | action | [Action](/classes/3.1/Action) | 

### serialize(parent) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parent | any | 

