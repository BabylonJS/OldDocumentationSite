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

##  new [ArcRotateCamera](/classes/2.3/ArcRotateCamera)(name, alpha, beta, radius, target, scene)



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



### beta : number



### radius : number



### target : any



### inertialAlphaOffset : number



### inertialBetaOffset : number



### inertialRadiusOffset : number



### lowerAlphaLimit : any



### upperAlphaLimit : any



### lowerBetaLimit : number



### upperBetaLimit : number



### lowerRadiusLimit : any



### upperRadiusLimit : any



### angularSensibilityX : number



### angularSensibilityY : number



### wheelPrecision : number



### pinchPrecision : number



### panningSensibility : number



### inertialPanningX : number



### inertialPanningY : number



### keysUp : number[]



### keysDown : number[]



### keysLeft : number[]



### keysRight : number[]



### zoomOnFactor : number



### targetScreenOffset : [Vector2](/classes/2.3/Vector2)



### pinchInwards : boolean



### allowUpsideDown : boolean



### panningAxis : [Vector3](/classes/2.3/Vector3)



### onCollide : (collidedMesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void



### checkCollisions : boolean



### collisionRadius : [Vector3](/classes/2.3/Vector3)



### angularSensibility : number



## Methods

### attachControl(element, noPreventDefault, useCtrlForPanning) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |   Element to detach from the control
optional | noPreventDefault | boolean |   @param noPreventDefault
optional | useCtrlForPanning | boolean |  
### detachControl(element) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |   Element to detach from the control

### setPosition(position) &rarr; void



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


