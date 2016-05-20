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

class [FreeCamera](/classes/2.4/FreeCamera) extends [TargetCamera](/classes/2.4/TargetCamera)



## Constructor

## new [FreeCamera](/classes/2.4/FreeCamera)(name, position, scene)

Create a new free camera.
You can move around the world with mouse and keyboard
A tutorial about [FreeCamera](/classes/2.4/FreeCamera) can be found here

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the camera
 | position | [Vector3](/classes/2.4/Vector3) |    Starting position of the camera
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) which contain the camera
## Members

### ellipsoid : [Vector3](/classes/2.4/Vector3)

The collision ellipsoid used to check collisions with the world

### checkCollisions : boolean

True : check collisions ; False : don't check collisions

### applyGravity : boolean

True : apply gravity ; False : don't apply gravity

### inputs : [FreeCameraInputsManager](/classes/2.4/FreeCameraInputsManager)



### angularSensibility : number

The angular sensibility of the camera

### keysUp : number[]

List of keys to up camera

### keysDown : number[]

List of keys to down camera

### keysLeft : number[]

List of keys to left camera

### keysRight : number[]

List of keys to right camera

### onCollide : (collidedMesh: [AbstractMesh](/classes/2.4/AbstractMesh)) =&gt; void

The function called when this camera collides with the world

## Methods

### attachControl(element, noPreventDefault) &rarr; void

Attach the camera to an element

#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |    The element from where detach the camera
optional | noPreventDefault | boolean |    @param noPreventDefault
### detachControl(element) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |    The element from where detach the camera

### dispose() &rarr; void


### getTypeName() &rarr; string


