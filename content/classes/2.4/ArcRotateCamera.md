---
ID_PAGE: 25120
PG_TITLE: ArcRotateCamera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
    - ArcRotateCamera
---
## Description

class [ArcRotateCamera](/classes/2.4/ArcRotateCamera) extends [TargetCamera](/classes/2.4/TargetCamera)



## Constructor

## new [ArcRotateCamera](/classes/2.4/ArcRotateCamera)(name, alpha, beta, radius, target, scene)

Create a new [ArcRotateCamera](/classes/2.4/ArcRotateCamera).
 [ArcRotateCamera](/classes/2.4/ArcRotateCamera) is a camera that rotates around a given pivot. It can be controlled with the mouse or touch events (and it also requires hand.js to work)
A tutorial about [ArcRotateCamera](/classes/2.4/ArcRotateCamera) can be found here

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | alpha | number |    
 | beta | number |    
 | radius | number |    
 | target | [Vector3](/classes/2.4/Vector3) |    
## Members

### alpha : number

Alpha of the [ArcRotateCamera](/classes/2.4/ArcRotateCamera) (Rotation angle around Y axis)

### beta : number

Beta of the [ArcRotateCamera](/classes/2.4/ArcRotateCamera) (Rotation angle around X axis)

### radius : number

Radius of the [ArcRotateCamera](/classes/2.4/ArcRotateCamera)

### target : [Vector3](/classes/2.4/Vector3)

Target of the [ArcRotateCamera](/classes/2.4/ArcRotateCamera)

### inertialAlphaOffset : number

Inertial alpha offset

### inertialBetaOffset : number

Inertial beta offset

### inertialRadiusOffset : number

Inertial radius offset

### lowerAlphaLimit : any

Lower alpha limit

### upperAlphaLimit : any

Upper alpha limit

### lowerBetaLimit : number

Lower beta limit

### upperBetaLimit : number

Upper beta limit

### lowerRadiusLimit : any

Lower radius limit

### upperRadiusLimit : any

Upper radius limit

### inertialPanningX : number



### inertialPanningY : number



### angularSensibilityX : number



### angularSensibilityY : number



### pinchPrecision : number

PinchPrecision

### panningSensibility : number



### keysUp : number[]

Key to control the camera UP

### keysDown : number[]

Key to control the camera DOWN

### keysLeft : number[]

Key to control the camera LEFT

### keysRight : number[]

Key to control the camera RIGHT

### wheelPrecision : number

Wheel precision

### zoomOnFactor : number

Zoom on factor

### targetScreenOffset : [Vector2](/classes/2.4/Vector2)



### allowUpsideDown : boolean



### inputs : [ArcRotateCameraInputsManager](/classes/2.4/ArcRotateCameraInputsManager)



### panningAxis : [Vector3](/classes/2.4/Vector3)



### onCollide : (collidedMesh: [AbstractMesh](/classes/2.4/AbstractMesh)) =&gt; void

OnCollide

### checkCollisions : boolean

CheckCollisions

### collisionRadius : [Vector3](/classes/2.4/Vector3)

CollisionsRadius

## Methods

### attachControlundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### detachControlundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### rebuildAnglesAndRadiusundefined &rarr; void


### setPositionundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setTargetundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### zoomOnundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### focusOnundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createRigCameraundefined &rarr; [Camera](/classes/2.4/Camera)

@override

Override [Camera](/classes/2.4/Camera).createRigCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disposeundefined &rarr; void


### getTypeNameundefined &rarr; string


