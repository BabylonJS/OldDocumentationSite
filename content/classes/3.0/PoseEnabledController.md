---
TAGS:
---
## Description

class [PoseEnabledController](/classes/3.0/PoseEnabledController) extends [Gamepad](/classes/3.0/Gamepad)



## Constructor

## new [PoseEnabledController](/classes/3.0/PoseEnabledController)(vrGamepad)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vrGamepad | any | 

## Members

### vrGamepad : any



### devicePosition : [Vector3](/classes/3.0/Vector3)



### deviceRotationQuaternion : [Quaternion](/classes/3.0/Quaternion)



### deviceScaleFactor : number



### position : [Vector3](/classes/3.0/Vector3)



### rotationQuaternion : [Quaternion](/classes/3.0/Quaternion)



### controllerType : [PoseEnabledControllerType](/classes/3.0/PoseEnabledControllerType)



### rawPose : DevicePose



### mesh : [AbstractMesh](/classes/3.0/AbstractMesh)



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
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) | 

### attachToPoseControlledCamera(camera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [TargetCamera](/classes/3.0/TargetCamera) | 

### detachMesh() &rarr; void


### getForwardRay(length) &rarr; [Ray](/classes/3.0/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | length | number | 

