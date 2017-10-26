---
TAGS:
---
## Description

class [VRExperienceHelper](/classes/3.1/VRExperienceHelper)



## Constructor

## new [VRExperienceHelper](/classes/3.1/VRExperienceHelper)(scene, webVROptions)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
optional | webVROptions | WebVROptions | 
## Members

### webVROptions : WebVROptions



### onEnteringVR : () =&gt; void



### onExitingVR : () =&gt; void



### onControllerMeshLoaded : (controller: [WebVRController](/classes/3.1/WebVRController)) =&gt; void



### position : [Vector3](/classes/3.1/Vector3)



## Methods

### enterVR() &rarr; void

Attempt to enter VR. If a headset is connected and ready, will request present on that.

Otherwise, will use the fullscreen API.
### exitVR() &rarr; void

Attempt to exit VR, or fullscreen.
### dispose() &rarr; void


### getClassName() &rarr; string


