---
ID_PAGE: 25166
PG_TITLE: ActionManager
PG_VERSION: 2.1
TAGS:
    - Action
---
## Description

class [ActionManager](/classes/3.1/ActionManager)

[Action](/classes/3.1/Action) Manager manages all events to be triggered on a given mesh or the global scene.

A single scene can have many [Action](/classes/3.1/Action) Managers to handle predefined actions on specific meshes.

## Constructor

## new [ActionManager](/classes/3.1/ActionManager)(scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 

## Members

### static NothingTrigger : number



### static OnPickTrigger : number



### static OnLeftPickTrigger : number



### static OnRightPickTrigger : number



### static OnCenterPickTrigger : number



### static OnPickDownTrigger : number



### static OnDoublePickTrigger : number



### static OnPickUpTrigger : number



### static OnPickOutTrigger : number



### static OnLongPressTrigger : number



### static OnPointerOverTrigger : number



### static OnPointerOutTrigger : number



### static OnEveryFrameTrigger : number



### static OnIntersectionEnterTrigger : number



### static OnIntersectionExitTrigger : number



### static OnKeyDownTrigger : number



### static OnKeyUpTrigger : number



### static Triggers : { [key: string]: number }



### actions : [Action](/classes/3.1/Action)[]



### hoverCursor : string



### hasPointerTriggers : boolean

Does this action manager has pointer triggers

@return {boolean} whether or not it has pointer triggers

### hasPickTriggers : boolean

Does this action manager has pick triggers

@return {boolean} whether or not it has pick triggers

### static HasTriggers : boolean

Does exist one action manager with at least one trigger

@return {boolean} whether or not it exists one action manager with one trigger

### static HasPickTriggers : boolean

Does exist one action manager with at least one pick trigger

@return {boolean} whether or not it exists one action manager with one pick trigger

## Methods

### dispose() &rarr; void


### getScene() &rarr; [Scene](/classes/3.1/Scene)


### hasSpecificTriggers(triggers) &rarr; boolean

Does this action manager handles actions of any of the given triggers

@return {boolean} whether one (or more) of the triggers is handeled

#### Parameters
 | Name | Type | Description
---|---|---|---
 | triggers | number[] | 

### hasSpecificTrigger(trigger) &rarr; boolean

Does this action manager handles actions of a given trigger

@return {boolean} whether the trigger is handeled

#### Parameters
 | Name | Type | Description
---|---|---|---
 | trigger | number | 

### static HasSpecificTrigger(trigger) &rarr; boolean

Does exist one action manager that handles actions of a given trigger

@return {boolean} whether the trigger is handeled by at least one action manager

#### Parameters
 | Name | Type | Description
---|---|---|---
 | trigger | number | 

### registerAction(action) &rarr; Nullable&lt;[Action](/classes/3.1/Action)&gt;

Registers an action to this action manager

@return {BABYLON.[Action](/classes/3.1/Action)} the action amended (prepared) after registration

#### Parameters
 | Name | Type | Description
---|---|---|---
 | action | [Action](/classes/3.1/Action) | 

### processTrigger(trigger, evt) &rarr; void

Process a specific trigger

#### Parameters
 | Name | Type | Description
---|---|---|---
 | trigger | number | 
optional | evt | [ActionEvent](/classes/3.1/ActionEvent) |  {BABYLON.[ActionEvent](/classes/3.1/ActionEvent)} the event details to be processed
### serialize(name) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### static Parse(parsedActions, object, scene) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedActions | any | 
 | object | Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt; | 
 | scene | [Scene](/classes/3.1/Scene) | 
### static GetTriggerName(trigger) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | trigger | number | 

