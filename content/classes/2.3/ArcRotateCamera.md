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

class [ArcRotateCamera](/classes/2.3/ArcRotateCamera) extends [TargetCamera](/classes/2.3/TargetCamera)



## Constructor

## new [ArcRotateCamera](/classes/2.3/ArcRotateCamera)(name, alpha, beta, radius, target, scene)

Create a new [ArcRotateCamera](/classes/2.3/ArcRotateCamera).
 [ArcRotateCamera](/classes/2.3/ArcRotateCamera) is a camera that rotates around a given pivot. It can be controlled with the mouse or touch events (and it also requires hand.js to work)
A tutorial about [ArcRotateCamera](/classes/2.3/ArcRotateCamera) can be found here

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | alpha | number |   
 | beta | number |   
 | radius | number |   
 | target | any |   
## Members

### alpha : number

Alpha of the [ArcRotateCamera](/classes/2.3/ArcRotateCamera) (Rotation angle around Y axis)

### beta : number

Beta of the [ArcRotateCamera](/classes/2.3/ArcRotateCamera) (Rotation angle around X axis)

### radius : number

Radius of the [ArcRotateCamera](/classes/2.3/ArcRotateCamera)

### target : any

Target of the [ArcRotateCamera](/classes/2.3/ArcRotateCamera)

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

### angularSensibilityX : number



### angularSensibilityY : number



### wheelPrecision : number

Wheel precision

### pinchPrecision : number

PinchPrecision

### panningSensibility : number



### inertialPanningX : number



### inertialPanningY : number



### keysUp : number[]

Key to control the camera UP

### keysDown : number[]

Key to control the camera DOWN

### keysLeft : number[]

Key to control the camera LEFT

### keysRight : number[]

Key to control the camera RIGHT

### zoomOnFactor : number

Zoom on factor

### targetScreenOffset : [Vector2](/classes/2.3/Vector2)



### pinchInwards : boolean



### allowUpsideDown : boolean



### panningAxis : [Vector3](/classes/2.3/Vector3)



### onCollide : (collidedMesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void

OnCollide

### checkCollisions : boolean

CheckCollisions

### collisionRadius : [Vector3](/classes/2.3/Vector3)

CollisionsRadius

### angularSensibility : number

Angular sensibility

## Methods

### attachControl(element, noPreventDefault, useCtrlForPanning) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |   Element to detach from the control
optional | noPreventDefault | boolean |   @param noPreventDefault
optional | useCtrlForPanning | boolean |  
### detachControl(element) &rarr; void

Detach camera control and display from the specified canvas

#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |   Element to detach from the control

### setPosition(position) &rarr; void

Set the position of the [ArcRotateCamera](/classes/2.3/ArcRotateCamera)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/2.3/Vector3) |   The new position of the [ArcRotateCamera](/classes/2.3/ArcRotateCamera)

### setTarget(target) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.3/Vector3) |   

### zoomOn(meshes, doNotUpdateMaxZ) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | meshes | [AbstractMesh](/classes/2.3/AbstractMesh)[] |   Meshes to zoom on
optional | doNotUpdateMaxZ | boolean |  
### focusOn(meshesOrMinMaxVectorAndDistance, doNotUpdateMaxZ) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | meshesOrMinMaxVectorAndDistance | any |   @param meshesOrMinMaxVectorAndDistance
optional | doNotUpdateMaxZ | boolean |  
### createRigCamera(name, cameraIndex) &rarr; [Camera](/classes/2.3/Camera)

@override

Override [Camera](/classes/2.3/Camera).createRigCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | cameraIndex | number |   
### serialize() &rarr; any


