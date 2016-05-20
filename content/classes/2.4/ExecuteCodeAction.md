---
ID_PAGE: 25160
PG_TITLE: ExecuteCodeAction
PG_VERSION: 2.1
TAGS:
    - Action
---
## Description

class [ExecuteCodeAction](/classes/2.4/ExecuteCodeAction) extends [Action](/classes/2.4/Action)



## Constructor

## new [ExecuteCodeAction](/classes/2.4/ExecuteCodeAction)(triggerOptions, func, condition)

Execute your own code when the trigger is raised and the condition is true

#### Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any |    
 | func | (evt: [ActionEvent](/classes/2.4/ActionEvent)) =&gt; void |    
optional | condition | [Condition](/classes/2.4/Condition) |    
## Members

### func : (evt: [ActionEvent](/classes/2.4/ActionEvent)) =&gt; void

Func

## Methods

### execute(evt) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](/classes/2.4/ActionEvent) |    The event to trigger

