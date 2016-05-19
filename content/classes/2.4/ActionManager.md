---
ID_PAGE: 25166
PG_TITLE: ActionManager
PG_VERSION: 2.1
TAGS:
    - Action
---
## Description

class [ActionManager](/classes/2.4/ActionManager)

[Action](/classes/2.4/Action) Manager manages all events to be triggered on a given mesh or the global scene.

A single scene can have many [Action](/classes/2.4/Action) Managers to handle predefined actions on specific meshes.

## Constructor

## new [ActionManager](/classes/2.4/ActionManager)(scene)

See more about Actions here

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) |    The scene which contains the new action manager

## Members

### static NothingTrigger : number

Nothing trigger

### static OnPickTrigger : number

On pick trigger

### static OnLeftPickTrigger : number

On left pick trigger

### static OnRightPickTrigger : number

On right pick trigger

### static OnCenterPickTrigger : number

On center pick trigger

### static OnPickDownTrigger : number



### static OnPickUpTrigger : number



### static OnPickOutTrigger : number



### static OnLongPressTrigger : number



### static OnPointerOverTrigger : number

On pointer over trigger

### static OnPointerOutTrigger : number

On pointer out trigger

### static OnEveryFrameTrigger : number

On every frame trigger

### static OnIntersectionEnterTrigger : number

On intersection enter trigger

### static OnIntersectionExitTrigger : number

On intersection exit trigger

### static OnKeyDownTrigger : number

On key down trigger

### static OnKeyUpTrigger : number

on key up trigger

### static DragMovementThreshold : number



### static LongPressDelay : number



### actions : [Action](/classes/2.4/Action)[]

The actions of the action manager

### hasPointerTriggers : boolean

Does this action manager has pointer triggers

@return {boolean} whether or not it has pointer triggers

### hasPickTriggers : boolean

Does this action manager has pick triggers

@return {boolean} whether or not it has pick triggers

## Methods

### disposeundefined &rarr; void


### getSceneundefined &rarr; [Scene](/classes/2.4/Scene)


### hasSpecificTriggersundefined &rarr; boolean

Does this action manager handles actions of any of the given triggers

@return {boolean} whether one (or more) of the triggers is handeled

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### hasSpecificTriggerundefined &rarr; boolean

Does this action manager handles actions of a given trigger

@return {boolean} whether the trigger is handeled

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### registerActionundefined &rarr; [Action](/classes/2.4/Action)

Registers an action to this action manager

@return {BABYLON.[Action](/classes/2.4/Action)} the action amended (prepared) after registration

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### processTriggerundefined &rarr; void

Process a specific trigger

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### serializeundefined &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static Parseundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static GetTriggerNameundefined &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
