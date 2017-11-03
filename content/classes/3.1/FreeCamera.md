---
ID_PAGE: 25126
PG_TITLE: FreeCamera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
    - TargetCamera
    - FreeCamera
---
## Description

class [FreeCamera](/classes/3.1/FreeCamera) extends [TargetCamera](/classes/3.1/TargetCamera)



## Constructor

## new [FreeCamera](/classes/3.1/FreeCamera)(name, position, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | position | [Vector3](/classes/3.1/Vector3) | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### ellipsoid : [Vector3](/classes/3.1/Vector3)



### checkCollisions : boolean



### applyGravity : boolean



### inputs : [FreeCameraInputsManager](/classes/3.1/FreeCameraInputsManager)



### angularSensibility : number



### keysUp : number[]



### keysDown : number[]



### keysLeft : number[]



### keysRight : number[]



### onCollide : (collidedMesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; void



### collisionMask : number



## Methods

### attachControl(element, noPreventDefault) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | 
optional | noPreventDefault | boolean | 
### detachControl(element) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | 

### dispose() &rarr; void


### getClassName() &rarr; string


