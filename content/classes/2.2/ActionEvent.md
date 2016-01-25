---
ID_PAGE: 25165
PG_TITLE: ActionEvent
PG_VERSION: 2.1
TAGS:
    - Action
---
##Description

class [ActionEvent](/classes/2.2/ActionEvent)

[ActionEvent](/classes/2.2/ActionEvent) is the event beint sent when an action is triggered.

##Constructor

##new [ActionEvent](/classes/2.2/ActionEvent)(source, pointerX, pointerY, meshUnderPointer, sourceEvent, additionalData)

@constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](/classes/2.2/AbstractMesh) |  The mesh that triggered the action. the source mesh that triggered the event
 | pointerX | number |  the X mouse cursor position at the time of the event the X mouse cursor position at the time of the event
 | pointerY | number |  the Y mouse cursor position at the time of the event the Y mouse cursor position at the time of the event
 | meshUnderPointer | [AbstractMesh](/classes/2.2/AbstractMesh) |  The mesh that is currently pointed at (can be null) The mesh that is currently pointed at (can be null)
optional | sourceEvent | any |  the original (browser) event that triggered the [ActionEvent](/classes/2.2/ActionEvent) the original (browser) event that triggered the [ActionEvent](/classes/2.2/ActionEvent)
##Members

###source : [AbstractMesh](/classes/2.2/AbstractMesh)

The source of the action event

###pointerX : number

The pointer X position

###pointerY : number

The pointer Y position

###meshUnderPointer : [AbstractMesh](/classes/2.2/AbstractMesh)

The mesh under the pointer position

###sourceEvent : any

The source of the event

###additionalData : any



##Methods

###static CreateNew(source, evt, additionalData) &rarr; [ActionEvent](/classes/2.2/ActionEvent)

Helper function to auto-create an [ActionEvent](/classes/2.2/ActionEvent) from a source mesh.

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](/classes/2.2/AbstractMesh) |  the source mesh that triggered the event the source mesh that triggered the event
optional | evt | Event |  {Event} The original (browser) event {Event} The original (browser) event
optional | additionalData | any | 
###static CreateNewFromScene(scene, evt) &rarr; [ActionEvent](/classes/2.2/ActionEvent)

Helper function to auto-create an [ActionEvent](/classes/2.2/ActionEvent) from a scene. If triggered by a mesh use [ActionEvent](/classes/2.2/ActionEvent).CreateNew

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.2/Scene) |  the scene where the event occurred the scene where the event occurred
 | evt | Event |  {Event} The original (browser) event {Event} The original (browser) event
