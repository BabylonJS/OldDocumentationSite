---
ID_PAGE: 25128
PG_TITLE: DeviceOrientationCamera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
    - TargetCamera
    - FreeCamera
---
## Description

class [DeviceOrientationCamera](/classes/2.3/DeviceOrientationCamera) extends [FreeCamera](/classes/2.3/FreeCamera)



## Constructor

## new [DeviceOrientationCamera](/classes/2.3/DeviceOrientationCamera)(name, position, scene)

Create a new [DeviceOrientationCamera](/classes/2.3/DeviceOrientationCamera). It's a camera controlled by device orientation
A tutorial about [DeviceOrientationCamera](/classes/2.3/DeviceOrientationCamera) can be found here

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | position | [Vector3](/classes/2.3/Vector3) |   
 | scene | [Scene](/classes/2.3/Scene) |   
## Members

### angularSensibility : number

The angular sensibility of the camera

### moveSensibility : number

The move sensibility of the camera

## Methods

### attachControl(canvas, noPreventDefault) &rarr; void

Attach the camera controls and display to a canvas

#### Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement |   Element to detach the controls and display
 | noPreventDefault | boolean |   @param noPreventDefault
### detachControl(canvas) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement |   Element to detach the controls and display

