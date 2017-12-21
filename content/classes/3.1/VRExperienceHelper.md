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
optional | webVROptions | VRExperienceHelperOptions | 
## Members

### webVROptions : VRExperienceHelperOptions


### onEnteringVR : [Observable](/classes/3.1/Observable)&lt;[VRExperienceHelper](/classes/3.1/VRExperienceHelper)&gt;


### onExitingVR : [Observable](/classes/3.1/Observable)&lt;[VRExperienceHelper](/classes/3.1/VRExperienceHelper)&gt;


### onControllerMeshLoaded : [Observable](/classes/3.1/Observable)&lt;[WebVRController](/classes/3.1/WebVRController)&gt;


### onNewMeshSelected : [Observable](/classes/3.1/Observable)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;


### raySelectionPredicate : (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean

To be optionaly changed by user to define custom ray selection

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### meshSelectionPredicate : (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean

To be optionaly changed by user to define custom selection logic (after ray selection)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### teleportationTarget : [Mesh](/classes/3.1/Mesh)


### displayGaze : boolean


### displayLaserPointer : boolean


### deviceOrientationCamera : Nullable&lt;[DeviceOrientationCamera](/classes/3.1/DeviceOrientationCamera)&gt;


### currentVRCamera : Nullable&lt;[Camera](/classes/3.1/Camera)&gt;


### webVRCamera : [WebVRFreeCamera](/classes/3.1/WebVRFreeCamera)


### vrDeviceOrientationCamera : Nullable&lt;[VRDeviceOrientationFreeCamera](/classes/3.1/VRDeviceOrientationFreeCamera)&gt;


### isInVRMode : boolean

Gets a value indicating if we are currently in VR mode.
### position : [Vector3](/classes/3.1/Vector3)


## Methods

### enterVR() &rarr; void

Attempt to enter VR. If a headset is connected and ready, will request present on that.

Otherwise, will use the fullscreen API.
### exitVR() &rarr; void

Attempt to exit VR, or fullscreen.
### enableInteractions() &rarr; void


### addFloorMesh(floorMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | floorMesh | [Mesh](/classes/3.1/Mesh) | 

### removeFloorMesh(floorMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | floorMesh | [Mesh](/classes/3.1/Mesh) | 

### enableTeleportation(vrTeleportationOptions) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | vrTeleportationOptions | VRTeleportationOptions | 

### changeLaserColor(color) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color3](/classes/3.1/Color3) | 

### changeGazeColor(color) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color3](/classes/3.1/Color3) | 

### dispose() &rarr; void


### getClassName() &rarr; string


