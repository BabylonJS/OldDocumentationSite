---
ID_PAGE: 25124
PG_TITLE: TargetCamera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
    - TargetCamera
---
## Description

class [TargetCamera](/classes/3.1/TargetCamera) extends [Camera](/classes/3.1/Camera)



## Constructor

## new [TargetCamera](/classes/3.1/TargetCamera)(name, position, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | position | [Vector3](/classes/3.1/Vector3) | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### cameraDirection : [Vector3](/classes/3.1/Vector3)


### cameraRotation : [Vector2](/classes/3.1/Vector2)


### rotation : [Vector3](/classes/3.1/Vector3)


### rotationQuaternion : [Quaternion](/classes/3.1/Quaternion)


### speed : number


### noRotationConstraint : boolean


### lockedTarget : any


## Methods

### getFrontPosition(distance) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | distance | number | 

### storeState() &rarr; [Camera](/classes/3.1/Camera)


### setTarget(target) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/3.1/Vector3) | 

### getTarget() &rarr; [Vector3](/classes/3.1/Vector3)

Return the current target position of the camera. This value is expressed in local space.
### createRigCamera(name, cameraIndex) &rarr; Nullable&lt;[Camera](/classes/3.1/Camera)&gt;

@override

Override [Camera](/classes/3.1/Camera).createRigCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | cameraIndex | number | 
### getClassName() &rarr; string


