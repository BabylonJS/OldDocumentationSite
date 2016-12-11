---
ID_PAGE: 25139
PG_TITLE: WebVRFreeCamera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
    - TargetCamera
    - FreeCamera
---
## Description

class [WebVRFreeCamera](/classes/2.5/WebVRFreeCamera) extends [FreeCamera](/classes/2.5/FreeCamera)



## Constructor

## new [WebVRFreeCamera](/classes/2.5/WebVRFreeCamera)(name, position, scene, compensateDistortion, webVROptions)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     
 | position | [Vector3](/classes/2.5/Vector3) |     
 | scene | [Scene](/classes/2.5/Scene) |     
optional | compensateDistortion | boolean | 
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

### requestVRFullscreen(requestPointerlock) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | requestPointerlock | boolean |  

### getTypeName() &rarr; string


### resetToCurrentRotation() &rarr; void


### setPositionOffset(newPosition) &rarr; void

* Set the position offset of the VR camera

The offset will be added to the WebVR pose, after scaling it (if set).

         * @param {[Vector3](/classes/2.5/Vector3)} [newPosition] an optional new position. if not provided, the current camera position will be used.

         * @memberOf [WebVRFreeCamera](/classes/2.5/WebVRFreeCamera)

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | newPosition | [Vector3](/classes/2.5/Vector3) | 

