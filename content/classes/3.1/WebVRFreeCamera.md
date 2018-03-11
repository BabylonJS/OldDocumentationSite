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

class [WebVRFreeCamera](/classes/3.1/WebVRFreeCamera) extends [FreeCamera](/classes/3.1/FreeCamera)



## Constructor

## new [WebVRFreeCamera](/classes/3.1/WebVRFreeCamera)(name, position, scene, webVROptions)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | position | [Vector3](/classes/3.1/Vector3) | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### rawPose : Nullable&lt;DevicePose&gt;


### devicePosition : [Vector3](/classes/3.1/Vector3)


### deviceRotationQuaternion : [Quaternion](/classes/3.1/Quaternion)


### deviceScaleFactor : number


### controllers : Array&lt;[WebVRController](/classes/3.1/WebVRController)&gt;


### onControllersAttachedObservable : [Observable](/classes/3.1/Observable)&lt;[WebVRController](/classes/3.1/WebVRController)[]&gt;


### onControllerMeshLoadedObservable : [Observable](/classes/3.1/Observable)&lt;[WebVRController](/classes/3.1/WebVRController)&gt;


### rigParenting : boolean


### deviceDistanceToRoomGround : () =&gt; number


### useStandingMatrix : (callback: (bool: boolean) =&gt; void) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | callback |  | bool | boolean | 

 | 
### leftController : Nullable&lt;[WebVRController](/classes/3.1/WebVRController)&gt;


### rightController : Nullable&lt;[WebVRController](/classes/3.1/WebVRController)&gt;


## Methods

### dispose() &rarr; void


### getControllerByName(name) &rarr; Nullable&lt;[WebVRController](/classes/3.1/WebVRController)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getForwardRay(length) &rarr; [Ray](/classes/3.1/Ray)



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

         * @memberOf [WebVRFreeCamera](/classes/3.1/WebVRFreeCamera)

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


### update() &rarr; void


### initControllers() &rarr; void


