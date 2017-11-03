---
TAGS:
---
## Description

class [AutoRotationBehavior](/classes/3.1/AutoRotationBehavior)



## Members

### name : string



### zoomStopsAnimation : boolean

Gets the flag that indicates if user zooming should stop animation.

Sets the flag that indicates if user zooming should stop animation.

### idleRotationSpeed : number

Gets the default speed at which the camera rotates around the model.

Sets the default speed at which the camera rotates around the model.

### idleRotationWaitTime : number

Gets the time (milliseconds) to wait after user interaction before the camera starts rotating.

Sets the time (in milliseconds) to wait after user interaction before the camera starts rotating.

### idleRotationSpinupTime : number

Gets the time (milliseconds) to take to spin up to the full idle rotation speed.

Sets the time (milliseconds) to take to spin up to the full idle rotation speed.

### rotationInProgress : boolean

Gets a value indicating if the camera is currently rotating because of this behavior

## Methods

### attach(camera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [ArcRotateCamera](/classes/3.1/ArcRotateCamera) | 

### detach() &rarr; void


