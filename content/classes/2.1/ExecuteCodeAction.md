---
ID_PAGE: 25160
PG_TITLE: ExecuteCodeAction
PG_VERSION: 2.1
TAGS:
    - Action
---
##new [ExecuteCodeAction](/classes/ExecuteCodeAction)(triggerOptions, func, condition)




Execute your own code when the trigger is raised and the condition is true






####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | 
 | func | (evt: [ActionEvent](/classes/ActionEvent)) =&gt; void | 
optional | condition | [Condition](/classes/Condition) | 
---

##Extends
 [Action](/classes/Action)
##Members

###func : (evt: [ActionEvent](/classes/ActionEvent)) =&gt; void





Func















##Methods

###execute(evt) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](/classes/ActionEvent) | The event to trigger
---
