---
ID_PAGE: 25165
PG_TITLE: ActionEvent
PG_VERSION: 2.1
TAGS:
    - Action
---
## Description

class [ActionEvent](/classes/2.4/ActionEvent)

[ActionEvent](/classes/2.4/ActionEvent) is the event beint sent when an action is triggered.

## Constructor

## new [ActionEvent](/classes/2.4/ActionEvent)(source, pointerX, pointerY, meshUnderPointer, sourceEvent, additionalData)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any |  The mesh or sprite that triggered the action.  The source sprite that triggered the event  the source mesh that triggered the event the source mesh that triggered the event
 | pointerX | number |  The X mouse cursor position at the time of the event  The X mouse cursor position at the time of the event  the X mouse cursor position at the time of the event the X mouse cursor position at the time of the event
 | pointerY | number |  The Y mouse cursor position at the time of the event  The Y mouse cursor position at the time of the event  the Y mouse cursor position at the time of the event the Y mouse cursor position at the time of the event
 | meshUnderPointer | [AbstractMesh](/classes/2.4/AbstractMesh) |  The mesh that is currently pointed at (can be null)  The mesh that is currently pointed at (can be null)  The mesh that is currently pointed at (can be null) The mesh that is currently pointed at (can be null)
optional | sourceEvent | any |  the original (browser) event that triggered the [ActionEvent](/classes/2.4/ActionEvent)  the original (browser) event that triggered the [ActionEvent](/classes/2.4/ActionEvent)  the original (browser) event that triggered the [ActionEvent](/classes/2.4/ActionEvent) the original (browser) event that triggered the [ActionEvent](/classes/2.4/ActionEvent)
## Members

### source : any

The source of the action event

### pointerX : number

The pointer X position

### pointerY : number

The pointer Y position

### meshUnderPointer : [AbstractMesh](/classes/2.4/AbstractMesh)

The mesh under the pointer position

### sourceEvent : any

The source of the event

### additionalData : any



## Methods

### static CreateNew(source, evt, additionalData) &rarr; [ActionEvent](/classes/2.4/ActionEvent)

Helper function to auto-create an [ActionEvent](/classes/2.4/ActionEvent) from a source mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](/classes/2.4/AbstractMesh) |  The source mesh that triggered the event  The source sprite that triggered the event  the source mesh that triggered the event the source mesh that triggered the event
optional | evt | Event |  {Event} The original (browser) event  {Event} The original (browser) event  {Event} The original (browser) event {Event} The original (browser) event
optional | additionalData | any |   
### static CreateNewFromSprite(source, scene, evt, additionalData) &rarr; [ActionEvent](/classes/2.4/ActionEvent)

Helper function to auto-create an [ActionEvent](/classes/2.4/ActionEvent) from a source mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Sprite](/classes/2.4/Sprite) |  The source sprite that triggered the event  The source sprite that triggered the event  the source mesh that triggered the event the source mesh that triggered the event
 | scene | [Scene](/classes/2.4/Scene) |  [Scene](/classes/2.4/Scene) associated with the sprite  the scene where the event occurred  the scene where the event occurred the scene where the event occurred
optional | evt | Event |  {Event} The original (browser) event  {Event} The original (browser) event  {Event} The original (browser) event {Event} The original (browser) event
### static CreateNewFromScene(scene, evt) &rarr; [ActionEvent](/classes/2.4/ActionEvent)

Helper function to auto-create an [ActionEvent](/classes/2.4/ActionEvent) from a scene. If triggered by a mesh use [ActionEvent](/classes/2.4/ActionEvent).CreateNew

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) |  the scene where the event occurred  the scene where the event occurred  the scene where the event occurred the scene where the event occurred
 | evt | Event |  {Event} The original (browser) event  {Event} The original (browser) event  {Event} The original (browser) event {Event} The original (browser) event
### static CreateNewFromPrimitive(prim, pointerPos, evt, additionalData) &rarr; [ActionEvent](/classes/2.4/ActionEvent)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | prim | any | 
 | pointerPos | [Vector2](/classes/2.4/Vector2) | 
optional | evt | Event |   {Event} The original (browser) event  {Event} The original (browser) event {Event} The original (browser) event
