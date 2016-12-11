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

class [TargetCamera](/classes/2.5/TargetCamera) extends [Camera](/classes/2.5/Camera)



## Constructor

## new [TargetCamera](/classes/2.5/TargetCamera)(name, position, scene)

Create a new targetCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     
 | position | [Vector3](/classes/2.5/Vector3) |     Position of the targetCamera
 | scene | [Scene](/classes/2.5/Scene) |     The scene where the targetCamera will be create
## Members

### cameraDirection : [Vector3](/classes/2.5/Vector3)

The camera direction

### cameraRotation : [Vector2](/classes/2.5/Vector2)

The camera rotation

### rotation : [Vector3](/classes/2.5/Vector3)

The rotation

### rotationQuaternion : [Quaternion](/classes/2.5/Quaternion)



### speed : number

The camera speed

### noRotationConstraint : boolean

True : No rotation constraint ; False : Have rotation constraint

### lockedTarget : any

The camera locked target

## Methods

### getFrontPosition(distance) &rarr; [Vector3](/classes/2.5/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | distance | number |    

### setTarget(target) &rarr; void

Set the target of the targetCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.5/Vector3) |     The target position

### getTarget() &rarr; [Vector3](/classes/2.5/Vector3)


### createRigCamera(name, cameraIndex) &rarr; [Camera](/classes/2.5/Camera)

@override

Override [Camera](/classes/2.5/Camera).createRigCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     
 | cameraIndex | number |     
### getTypeName() &rarr; string


