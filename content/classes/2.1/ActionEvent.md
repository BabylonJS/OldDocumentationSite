---
ID_PAGE: 25165
PG_TITLE: ActionEvent
PG_VERSION: 2.1
TAGS:
    - Action
---

 [ActionEvent](/classes/ActionEvent) is the event beint sent when an action is triggered.
##new [ActionEvent](/classes/ActionEvent)(source, pointerX, pointerY, meshUnderPointer, sourceEvent)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](/classes/AbstractMesh) | The mesh that triggered the action.
 | pointerX | number | the X mouse cursor position at the time of the event
 | pointerY | number | the Y mouse cursor position at the time of the event
 | meshUnderPointer | [AbstractMesh](/classes/AbstractMesh) | The mesh that is currently pointed at (can be null)
optional | sourceEvent | any | the original (browser) event that triggered the [ActionEvent](/classes/ActionEvent)
---

##Members

###source : [AbstractMesh](/classes/AbstractMesh)





The source of the action event




###pointerX : number





The pointer X position




###pointerY : number





The pointer Y position




###meshUnderPointer : [AbstractMesh](/classes/AbstractMesh)





The mesh under the pointer position




###sourceEvent : any





The source of the event















##Methods

###static CreateNew(source, evt) &rarr; [ActionEvent](/classes/ActionEvent)
Helper function to auto-create an [ActionEvent](/classes/ActionEvent) from a source mesh.

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](/classes/AbstractMesh) | the source mesh that triggered the event
optional | evt | Event | {Event} The original (browser) event
---

###static CreateNewFromScene(scene, evt) &rarr; [ActionEvent](/classes/ActionEvent)
Helper function to auto-create an [ActionEvent](/classes/ActionEvent) from a scene. If triggered by a mesh use [ActionEvent](/classes/ActionEvent).CreateNew

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | the scene where the event occurred
 | evt | Event | {Event} The original (browser) event
---
