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
##new [FreeCamera](/classes/FreeCamera)(name, position, scene)




Create a new free camera.
You can move around the world with mouse and keyboard
A tutorial about [FreeCamera](/classes/FreeCamera) can be found [here](http://doc.babylonjs.com/tutorials/05._Cameras)






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the camera
 | position | [Vector3](/classes/Vector3) | Starting position of the camera
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the camera
---

##Extends
 [TargetCamera](/classes/TargetCamera)
##Members

###ellipsoid : [Vector3](/classes/Vector3)





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




###onCollide : (collidedMesh: [AbstractMesh](/classes/AbstractMesh)) =&gt; void





The function called when this camera collides with the world















##Methods

###attachControl(element, noPreventDefault) &rarr; void
Attach the camera to an element







####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element where attach the camera
optional | noPreventDefault | boolean | @param noPreventDefault
---

###detachControl(element) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element from where detach the camera
---
