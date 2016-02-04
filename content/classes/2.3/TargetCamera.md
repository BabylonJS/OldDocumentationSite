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

class [TargetCamera](/classes/2.3/TargetCamera) extends [Camera](/classes/2.3/Camera)



## Constructor

##  new [TargetCamera](/classes/2.3/TargetCamera)(name, position, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | position | [Vector3](/classes/2.3/Vector3) |   Position of the targetCamera
 | scene | [Scene](/classes/2.3/Scene) |   The scene where the targetCamera will be create
## Members

### cameraDirection : [Vector3](/classes/2.3/Vector3)



### cameraRotation : [Vector2](/classes/2.3/Vector2)



### rotation : [Vector3](/classes/2.3/Vector3)



### speed : number



### noRotationConstraint : boolean



### lockedTarget : any



## Methods

### getFrontPosition(distance) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | distance | number |  

### setTarget(target) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.3/Vector3) |   The target position

### getTarget() &rarr; [Vector3](/classes/2.3/Vector3)


### createRigCamera(name, cameraIndex) &rarr; [Camera](/classes/2.3/Camera)

@override

Override [Camera](/classes/2.3/Camera).createRigCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | cameraIndex | number |   
### serialize() &rarr; any


