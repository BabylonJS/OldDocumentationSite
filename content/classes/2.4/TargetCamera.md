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

class [TargetCamera](/classes/2.4/TargetCamera) extends [Camera](/classes/2.4/Camera)



## Constructor

## new [TargetCamera](/classes/2.4/TargetCamera)(name, position, scene)

Create a new targetCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | position | [Vector3](/classes/2.4/Vector3) |    Position of the targetCamera
 | scene | [Scene](/classes/2.4/Scene) |    The scene where the targetCamera will be create
## Members

### cameraDirection : [Vector3](/classes/2.4/Vector3)

The camera direction

### cameraRotation : [Vector2](/classes/2.4/Vector2)

The camera rotation

### rotation : [Vector3](/classes/2.4/Vector3)

The rotation

### rotationQuaternion : [Quaternion](/classes/2.4/Quaternion)



### speed : number

The camera speed

### noRotationConstraint : boolean

True : No rotation constraint ; False : Have rotation constraint

### lockedTarget : any

The camera locked target

## Methods

### getFrontPositionundefined &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setTargetundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getTargetundefined &rarr; [Vector3](/classes/2.4/Vector3)


### createRigCameraundefined &rarr; [Camera](/classes/2.4/Camera)

@override

Override [Camera](/classes/2.4/Camera).createRigCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getTypeNameundefined &rarr; string


