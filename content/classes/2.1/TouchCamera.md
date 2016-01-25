---
ID_PAGE: 25135
PG_TITLE: TouchCamera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
    - TargetCamera
    - FreeCamera
---
##new [TouchCamera](/classes/TouchCamera)(name, position, scene)




Create a new [TouchCamera](/classes/TouchCamera) (camera controlled by touch with touchscreen)
A tutorial about [ArcRotateCamera](/classes/ArcRotateCamera) can be found [here](http://doc.babylonjs.com/tutorials/05._Cameras)






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the camera
 | position | [Vector3](/classes/Vector3) | Begin position of the camera (in [Vector3](/classes/Vector3))
 | scene | [Scene](/classes/Scene) | The scene which contain camera
---

##Extends
 [FreeCamera](/classes/FreeCamera)
##Members

###angularSensibility : number





The angular sensibility of the camera




###moveSensibility : number





The move sensibility of the camera















##Methods

###attachControl(canvas, noPreventDefault) &rarr; void
Attach the camera controls and display to a canvas element







####Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement | Element where the camera controls and display will be attached
 | noPreventDefault | boolean | No prevent default
---

###detachControl(canvas) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement | The element from which the camera controls and display will be detached
---
