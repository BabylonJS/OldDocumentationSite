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

class [ArcRotateCamera](/classes/3.0/ArcRotateCamera) extends [TargetCamera](/classes/3.0/TargetCamera)



## Constructor

## new [ArcRotateCamera](/classes/3.0/ArcRotateCamera)(name, alpha, beta, radius, target, scene)

Create a new [ArcRotateCamera](/classes/3.0/ArcRotateCamera).
 [ArcRotateCamera](/classes/3.0/ArcRotateCamera) is a camera that rotates around a given pivot. It can be controlled with the mouse or touch events (and it also requires hand.js to work)
A tutorial about [ArcRotateCamera](/classes/3.0/ArcRotateCamera) can be found here : https://doc.babylonjs.com/How_To/Cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      
 | alpha | number |      
 | beta | number |      
 | radius | number |      
 | target | [Vector3](/classes/3.0/Vector3) |      
## Members

### alpha : number

Alpha of the [ArcRotateCamera](/classes/3.0/ArcRotateCamera) (Rotation angle around Y axis)

### beta : number

Beta of the [ArcRotateCamera](/classes/3.0/ArcRotateCamera) (Rotation angle around X axis)

### radius : number

Radius of the [ArcRotateCamera](/classes/3.0/ArcRotateCamera)

### target : [Vector3](/classes/3.0/Vector3)

Target of the [ArcRotateCamera](/classes/3.0/ArcRotateCamera)

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



### panningInertia : number



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

### targetScreenOffset : [Vector2](/classes/3.0/Vector2)



### allowUpsideDown : boolean



### inputs : [ArcRotateCameraInputsManager](/classes/3.0/ArcRotateCameraInputsManager)



### panningAxis : [Vector3](/classes/3.0/Vector3)



### onCollide : (collidedMesh: [AbstractMesh](/classes/3.0/AbstractMesh)) =&gt; void

OnCollide

### checkCollisions : boolean

CheckCollisions

### collisionRadius : [Vector3](/classes/3.0/Vector3)

CollisionsRadius

## Methods

### attachControl(element, noPreventDefault, useCtrlForPanning, panningMouseButton) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |      Element to detach from the control
optional | noPreventDefault | boolean |      @param noPreventDefault
optional | useCtrlForPanning | boolean |     
### detachControl(element) &rarr; void

Detach camera control and display from the specified canvas

#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |      Element to detach from the control

### rebuildAnglesAndRadius() &rarr; void


### setPosition(position) &rarr; void

Set the position of the [ArcRotateCamera](/classes/3.0/ArcRotateCamera)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/3.0/Vector3) |      The new position of the [ArcRotateCamera](/classes/3.0/ArcRotateCamera)

### setTarget(target, [Vector3](/classes/3.0/Vector3), toBoundingCenter, allowSamePosition) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [AbstractMesh](/classes/3.0/AbstractMesh) or [Vector3](/classes/3.0/Vector3) |      
optional | toBoundingCenter | boolean |  
optional | allowSamePosition | boolean | 
### zoomOn(meshes, doNotUpdateMaxZ) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | meshes | [AbstractMesh](/classes/3.0/AbstractMesh)[] |      Meshes to zoom on
optional | doNotUpdateMaxZ | boolean |     
### focusOn(meshesOrMinMaxVectorAndDistance, doNotUpdateMaxZ) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | meshesOrMinMaxVectorAndDistance | any |      @param meshesOrMinMaxVectorAndDistance
optional | doNotUpdateMaxZ | boolean |     
### createRigCamera(name, cameraIndex) &rarr; [Camera](/classes/3.0/Camera)

@override

Override [Camera](/classes/3.0/Camera).createRigCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      
 | cameraIndex | number |      
### dispose() &rarr; void


### getClassName() &rarr; string


