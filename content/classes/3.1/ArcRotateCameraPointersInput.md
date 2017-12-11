---
TAGS:
---
## Description

class [ArcRotateCameraPointersInput](/classes/3.1/ArcRotateCameraPointersInput)



## Members

### camera : [ArcRotateCamera](/classes/3.1/ArcRotateCamera)


### buttons : number[]


### angularSensibilityX : number


### angularSensibilityY : number


### pinchPrecision : number


### pinchDeltaPercentage : number

pinchDeltaPercentage will be used instead of pinchPrecision if different from 0.

It defines the percentage of current camera.radius to use as delta when pinch zoom is used.
### panningSensibility : number


### multiTouchPanning : boolean


### multiTouchPanAndZoom : boolean


### pinchInwards : boolean


## Methods

### attachControl(element, noPreventDefault) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | 
optional | noPreventDefault | boolean | 
### detachControl(element) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | 

### getClassName() &rarr; string


### getSimpleName() &rarr; string


