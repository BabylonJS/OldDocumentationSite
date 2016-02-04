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

class [FreeCamera](/classes/2.3/FreeCamera) extends [TargetCamera](/classes/2.3/TargetCamera)



## Constructor

##  new [FreeCamera](/classes/2.3/FreeCamera)(name, position, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the camera
 | position | [Vector3](/classes/2.3/Vector3) |   Starting position of the camera
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) which contain the camera
## Members

### ellipsoid : [Vector3](/classes/2.3/Vector3)



### keysUp : number[]



### keysDown : number[]



### keysLeft : number[]



### keysRight : number[]



### checkCollisions : boolean



### applyGravity : boolean



### angularSensibility : number



### onCollide : (collidedMesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void



## Methods

### attachControl(element, noPreventDefault) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |   The element from where detach the camera
optional | noPreventDefault | boolean |   @param noPreventDefault
### detachControl(element) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |   The element from where detach the camera

### serialize() &rarr; any


