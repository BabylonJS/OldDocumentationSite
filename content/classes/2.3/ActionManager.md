---
ID_PAGE: 25166
PG_TITLE: ActionManager
PG_VERSION: 2.1
TAGS:
    - Action
---
## Description

class [ActionManager](/classes/2.3/ActionManager)

[Action](/classes/2.3/Action) Manager manages all events to be triggered on a given mesh or the global scene.

A single scene can have many [Action](/classes/2.3/Action) Managers to handle predefined actions on specific meshes.

## Constructor

##  new [ActionManager](/classes/2.3/ActionManager)(scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   The scene which contains the new action manager

## Members

### static  NothingTrigger : number



### static  OnPickTrigger : number



### static  OnLeftPickTrigger : number



### static  OnRightPickTrigger : number



### static  OnCenterPickTrigger : number



### static  OnPickDownTrigger : number



### static  OnPickUpTrigger : number



### static  OnLongPressTrigger : number



### static  OnPointerOverTrigger : number



### static  OnPointerOutTrigger : number



### static  OnEveryFrameTrigger : number



### static  OnIntersectionEnterTrigger : number



### static  OnIntersectionExitTrigger : number



### static  OnKeyDownTrigger : number



### static  OnKeyUpTrigger : number



### static  DragMovementThreshold : number



### static  LongPressDelay : number



### actions : [Action](/classes/2.3/Action)[]



### hasPointerTriggers : boolean

Does this action manager has pointer triggers

@return {boolean} whether or not it has pointer triggers

### hasPickTriggers : boolean

Does this action manager has pick triggers

@return {boolean} whether or not it has pick triggers

## Methods

### dispose() &rarr; void


### getScene() &rarr; [Scene](/classes/2.3/Scene)


### hasSpecificTriggers(triggers) &rarr; boolean

Does this action manager handles actions of any of the given triggers

@return {boolean} whether one (or more) of the triggers is handeled

#### Parameters
 | Name | Type | Description
---|---|---|---
 | triggers | number[] |   @param triggers

### hasSpecificTrigger(trigger) &rarr; boolean

Does this action manager handles actions of a given trigger

@return {boolean} whether the trigger is handeled

#### Parameters
 | Name | Type | Description
---|---|---|---
 | trigger | number |   The trigger

### registerAction(action) &rarr; [Action](/classes/2.3/Action)

Registers an action to this action manager

@return {BABYLON.[Action](/classes/2.3/Action)} the action amended (prepared) after registration

#### Parameters
 | Name | Type | Description
---|---|---|---
 | action | [Action](/classes/2.3/Action) |   The action to register

### processTrigger(trigger, evt) &rarr; void

Process a specific trigger

#### Parameters
 | Name | Type | Description
---|---|---|---
 | trigger | number |   The trigger
 | evt | [ActionEvent](/classes/2.3/ActionEvent) |  {BABYLON.[ActionEvent](/classes/2.3/ActionEvent)} the event details to be processed  {BABYLON.[ActionEvent](/classes/2.3/ActionEvent)} the event details to be processed {BABYLON.[ActionEvent](/classes/2.3/ActionEvent)} the event details to be processed
### static  Parse(parsedActions, object, scene) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedActions | any | 
 | object | [AbstractMesh](/classes/2.3/AbstractMesh) | 
 | scene | [Scene](/classes/2.3/Scene) |   The scene which contains the new action manager
