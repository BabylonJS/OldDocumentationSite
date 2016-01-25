---
ID_PAGE: 25166
PG_TITLE: ActionManager
PG_VERSION: 2.1
TAGS:
    - Action
---

 [Action](/classes/Action) Manager manages all events to be triggered on a given mesh or the global scene.

A single scene can have many [Action](/classes/Action) Managers to handle predefined actions on specific meshes.
##new [ActionManager](/classes/ActionManager)(scene)




See more about Actions [here](http://doc.babylonjs.com/tutorials/How_to_use_Actions)






####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | The scene which contains the new action manager
---

##Members

###static NothingTrigger : number





Nothing trigger




###static OnPickTrigger : number





On pick trigger




###static OnLeftPickTrigger : number





On left pick trigger




###static OnRightPickTrigger : number





On right pick trigger




###static OnCenterPickTrigger : number





On center pick trigger




###static OnPointerOverTrigger : number





On pointer over trigger




###static OnPointerOutTrigger : number





On pointer out trigger




###static OnEveryFrameTrigger : number





On every frame trigger




###static OnIntersectionEnterTrigger : number





On intersection enter trigger




###static OnIntersectionExitTrigger : number





On intersection exit trigger




###static OnKeyDownTrigger : number





On key down trigger




###static OnKeyUpTrigger : number





on key up trigger




###static OnPickUpTrigger : number


###actions : [Action](/classes/Action)[]





The actions of the action manager




###hasPointerTriggers : boolean


Does this action manager has pointer triggers

@return {boolean} whether or not it has pointer triggers

###hasPickTriggers : boolean


Does this action manager has pick triggers

@return {boolean} whether or not it has pick triggers



##Methods

###dispose() &rarr; void
Delete the action manager








###getScene() &rarr; [Scene](/classes/Scene)
Get the scene which contains the action manager








###hasSpecificTriggers(triggers) &rarr; boolean
Does this action manager handles actions of any of the given triggers
@return {boolean} whether one (or more) of the triggers is handeled

####Parameters
 | Name | Type | Description
---|---|---|---
 | triggers | number[] | @param triggers
---

###hasSpecificTrigger(trigger) &rarr; boolean
Does this action manager handles actions of a given trigger
@return {boolean} whether the trigger is handeled

####Parameters
 | Name | Type | Description
---|---|---|---
 | trigger | number | 
---

###registerAction(action) &rarr; [Action](/classes/Action)
Registers an action to this action manager
@return {BABYLON.Action} the action amended (prepared) after registration

####Parameters
 | Name | Type | Description
---|---|---|---
 | action | [Action](/classes/Action) | The action to register
---

###processTrigger(trigger, evt) &rarr; void
Process a specific trigger

####Parameters
 | Name | Type | Description
---|---|---|---
 | trigger | number | The trigger
 | evt | [ActionEvent](/classes/ActionEvent) | {BABYLON.ActionEvent} the event details to be processed
---
