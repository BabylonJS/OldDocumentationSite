---
ID_PAGE: 25165
PG_TITLE: ActionEvent
PG_VERSION: 2.1
TAGS:
    - Action
---
## Description

class [ActionEvent](/classes/3.1/ActionEvent)

[ActionEvent](/classes/3.1/ActionEvent) is the event beint sent when an action is triggered.

## Constructor

## new [ActionEvent](/classes/3.1/ActionEvent)(source, pointerX, pointerY, meshUnderPointer, sourceEvent, additionalData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any |  The mesh or sprite that triggered the action.
 | pointerX | number |  The X mouse cursor position at the time of the event
 | pointerY | number |  The Y mouse cursor position at the time of the event
 | meshUnderPointer | Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt; |  The mesh that is currently pointed at (can be null)
optional | sourceEvent | any |  the original (browser) event that triggered the [ActionEvent](/classes/3.1/ActionEvent)
## Members

### source : any



### pointerX : number



### pointerY : number



### meshUnderPointer : Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;



### sourceEvent : any



### additionalData : any



## Methods

### static CreateNew(source, evt, additionalData) &rarr; [ActionEvent](/classes/3.1/ActionEvent)

Helper function to auto-create an [ActionEvent](/classes/3.1/ActionEvent) from a source mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](/classes/3.1/AbstractMesh) |  The source mesh that triggered the event
optional | evt | Event |  {Event} The original (browser) event
optional | additionalData | any | 
### static CreateNewFromSprite(source, scene, evt, additionalData) &rarr; [ActionEvent](/classes/3.1/ActionEvent)

Helper function to auto-create an [ActionEvent](/classes/3.1/ActionEvent) from a source mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Sprite](/classes/3.1/Sprite) |  The source sprite that triggered the event
 | scene | [Scene](/classes/3.1/Scene) |  [Scene](/classes/3.1/Scene) associated with the sprite
optional | evt | Event |  {Event} The original (browser) event
### static CreateNewFromScene(scene, evt) &rarr; [ActionEvent](/classes/3.1/ActionEvent)

Helper function to auto-create an [ActionEvent](/classes/3.1/ActionEvent) from a scene. If triggered by a mesh use [ActionEvent](/classes/3.1/ActionEvent).CreateNew

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) |  the scene where the event occurred
 | evt | Event |  {Event} The original (browser) event
### static CreateNewFromPrimitive(prim, pointerPos, evt, additionalData) &rarr; [ActionEvent](/classes/3.1/ActionEvent)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | prim | any | 
 | pointerPos | [Vector2](/classes/3.1/Vector2) | 
optional | evt | Event | 
