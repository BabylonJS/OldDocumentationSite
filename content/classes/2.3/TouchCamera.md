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
## Description

class [TouchCamera](/classes/2.3/TouchCamera) extends [FreeCamera](/classes/2.3/FreeCamera)



## Constructor

## new [TouchCamera](/classes/2.3/TouchCamera)(name, position, scene)

Create a new [TouchCamera](/classes/2.3/TouchCamera) (camera controlled by touch with touchscreen)
A tutorial about [ArcRotateCamera](/classes/2.3/ArcRotateCamera) can be found here

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the camera
 | position | [Vector3](/classes/2.3/Vector3) |   Begin position of the camera (in [Vector3](/classes/2.3/Vector3))
 | scene | [Scene](/classes/2.3/Scene) |   The scene which contain camera
## Members

### touchAngularSensibility : number



### touchMoveSensibility : number



## Methods

### attachControl(canvas, noPreventDefault) &rarr; void

Attach the camera controls and display to a canvas element

#### Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement |   The element from which the camera controls and display will be detached
 | noPreventDefault | boolean |   No prevent default
### detachControl(canvas) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement |   The element from which the camera controls and display will be detached

