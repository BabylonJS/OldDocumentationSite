---
ID_PAGE: 25151
PG_TITLE: Action
PG_VERSION: 2.1
TAGS:
    - Action
---
## Description

class [Action](/classes/2.3/Action)



## Constructor

##  new [Action](/classes/2.3/Action)(triggerOptions, condition)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any |   Options of the trigger
optional | condition | [Condition](/classes/2.3/Condition) |   [Condition](/classes/2.3/Condition) to trigger the action
## Members

### triggerOptions : any



### trigger : number



## Methods

### getTriggerParameter() &rarr; any


### execute(evt) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](/classes/2.3/ActionEvent) |   An event to trigger

### skipToNextActiveAction() &rarr; void


### then(action) &rarr; [Action](/classes/2.3/Action)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | action | [Action](/classes/2.3/Action) |   The action to do

