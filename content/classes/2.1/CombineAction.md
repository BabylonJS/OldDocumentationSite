---
ID_PAGE: 25159
PG_TITLE: CombineAction
PG_VERSION: 2.1
TAGS:
    - Action
---
##new [CombineAction](/classes/CombineAction)(triggerOptions, children, condition)




This action is a container. You can use it to execute many actions simultaneously on the same trigger. The children property must be an array of actions






####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | The trigger options
 | children | [Action](/classes/Action)[] | The childrens actions
optional | condition | [Condition](/classes/Condition) | The condition to do the action
---

##Extends
 [Action](/classes/Action)
##Members

###children : [Action](/classes/Action)[]





The childrens actions















##Methods

###execute(evt) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](/classes/ActionEvent) | The event to trigger
---
