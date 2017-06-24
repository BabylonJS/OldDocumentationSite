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

class [WebVRFreeCamera](/classes/3.0/WebVRFreeCamera) extends [FreeCamera](/classes/3.0/FreeCamera)



## Constructor

## new [WebVRFreeCamera](/classes/3.0/WebVRFreeCamera)(name, position, scene, webVROptions)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      
 | position | [Vector3](/classes/3.0/Vector3) |      
 | scene | [Scene](/classes/3.0/Scene) |      
## Members

### rawPose : DevicePose



### devicePosition : [Vector3](/classes/3.0/Vector3)



### deviceRotationQuaternion : any



### deviceScaleFactor : number



### controllers : Array&lt;[WebVRController](/classes/3.0/WebVRController)&gt;



### nonVRControllers : Array&lt;[Gamepad](/classes/3.0/Gamepad)&gt;



### rigParenting : boolean



### onControllersAttached : (controllers: Array&lt;[WebVRController](/classes/3.0/WebVRController)&gt;) =&gt; void



### onNonVRControllerAttached : (controller: [Gamepad](/classes/3.0/Gamepad)) =&gt; void



### leftController : [WebVRController](/classes/3.0/WebVRController)



### rightController : [WebVRController](/classes/3.0/WebVRController)



## Methods

### getControllerByName(name) &rarr; [WebVRController](/classes/3.0/WebVRController)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      

### getForwardRay(length) &rarr; [Ray](/classes/3.0/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | length | number | 

### updateFromDevice(poseData) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | poseData | DevicePose | 

### attachControl(element, noPreventDefault) &rarr; void

WebVR's attach control will start broadcasting frames to the device.

Note that in certain browsers (chrome for example) this function must be called

within a user-interaction callback. Example:

<pre> scene.onPointerDown = function() { camera.attachControl(canvas); }</pre>

         * @param {HTMLElement} element

         * @memberOf [WebVRFreeCamera](/classes/3.0/WebVRFreeCamera)

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


### resetToCurrentRotation() &rarr; void


### initControllers() &rarr; void


