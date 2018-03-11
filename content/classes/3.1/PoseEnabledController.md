---
TAGS:
---
## Description

class [PoseEnabledController](/classes/3.1/PoseEnabledController) extends [Gamepad](/classes/3.1/Gamepad)



## Constructor

## new [PoseEnabledController](/classes/3.1/PoseEnabledController)(browserGamepad)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | browserGamepad | any | 

## Members

### devicePosition : [Vector3](/classes/3.1/Vector3)


### deviceRotationQuaternion : [Quaternion](/classes/3.1/Quaternion)


### deviceScaleFactor : number


### position : [Vector3](/classes/3.1/Vector3)


### rotationQuaternion : [Quaternion](/classes/3.1/Quaternion)


### controllerType : [PoseEnabledControllerType](/classes/3.1/PoseEnabledControllerType)


### rawPose : DevicePose


### mesh : Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;


## Methods

### update() &rarr; void


### updateFromDevice(poseData) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | poseData | DevicePose | 

### attachToMesh(mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### attachToPoseControlledCamera(camera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [TargetCamera](/classes/3.1/TargetCamera) | 

### dispose() &rarr; void


### getForwardRay(length) &rarr; [Ray](/classes/3.1/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | length | number | 

