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
##Description

class [FreeCamera](/classes/2.2/FreeCamera) extends [TargetCamera](/classes/2.2/TargetCamera)



##Constructor

##new [FreeCamera](/classes/2.2/FreeCamera)(name, position, scene)

Create a new free camera.
You can move around the world with mouse and keyboard
A tutorial about [FreeCamera](/classes/2.2/FreeCamera) can be found here

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  Name of the camera
 | position | [Vector3](/classes/2.2/Vector3) |  Starting position of the camera
 | scene | [Scene](/classes/2.2/Scene) |  [Scene](/classes/2.2/Scene) which contain the camera
##Members

###ellipsoid : [Vector3](/classes/2.2/Vector3)

The collision ellipsoid used to check collisions with the world

###keysUp : number[]

List of keys to up camera

###keysDown : number[]

List of keys to down camera

###keysLeft : number[]

List of keys to left camera

###keysRight : number[]

List of keys to right camera

###checkCollisions : boolean

True : check collisions ; False : don't check collisions

###applyGravity : boolean

True : apply gravity ; False : don't apply gravity

###angularSensibility : number

The angular sensibility of the camera

###onCollide : (collidedMesh: [AbstractMesh](/classes/2.2/AbstractMesh)) =&gt; void

The function called when this camera collides with the world

##Methods

###attachControl(element, noPreventDefault) &rarr; void

Attach the camera to an element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |  The element from where detach the camera
optional | noPreventDefault | boolean |  @param noPreventDefault
###detachControl(element) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |  The element from where detach the camera

