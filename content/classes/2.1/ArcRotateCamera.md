---
ID_PAGE: 25120
PG_TITLE: ArcRotateCamera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
    - ArcRotateCamera
---
##new [ArcRotateCamera](/classes/ArcRotateCamera)(name, alpha, beta, radius, target, scene)




Create a new [ArcRotateCamera](/classes/ArcRotateCamera).
 [ArcRotateCamera](/classes/ArcRotateCamera) is a camera that rotates around a given pivot. It can be controlled with the mouse or touch events (and it also requires hand.js to work)
A tutorial about [ArcRotateCamera](/classes/ArcRotateCamera) can be found [here](http://doc.babylonjs.com/tutorials/05._Cameras)






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | alpha | number | 
 | beta | number | 
 | radius | number | 
 | target | any | 
 | scene | [Scene](/classes/Scene) | 
---

##Extends
 [Camera](/classes/Camera)
##Members

###alpha : number





Alpha of the [ArcRotateCamera](/classes/ArcRotateCamera) (Rotation angle around Y axis)




###beta : number





Beta of the [ArcRotateCamera](/classes/ArcRotateCamera) (Rotation angle around X axis)




###radius : number





Radius of the [ArcRotateCamera](/classes/ArcRotateCamera)




###target : any





Target of the [ArcRotateCamera](/classes/ArcRotateCamera)




###inertialAlphaOffset : number





Inertial alpha offset




###inertialBetaOffset : number





Inertial beta offset




###inertialRadiusOffset : number





Inertial radius offset




###lowerAlphaLimit : any





Lower alpha limit




###upperAlphaLimit : any





Upper alpha limit




###lowerBetaLimit : number





Lower beta limit




###upperBetaLimit : number





Upper beta limit




###lowerRadiusLimit : any





Lower radius limit




###upperRadiusLimit : any





Upper radius limit




###angularSensibility : number





Angular sensibility




###wheelPrecision : number





Wheel precision




###pinchPrecision : number





PinchPrecision













###keysUp : number[]





Key to control the camera UP




###keysDown : number[]





Key to control the camera DOWN




###keysLeft : number[]





Key to control the camera LEFT




###keysRight : number[]





Key to control the camera RIGHT




###zoomOnFactor : number





Zoom on factor




###targetScreenOffset : [Vector2](/classes/Vector2)






###pinchInwards : boolean


###allowUpsideDown : boolean


###onCollide : (collidedMesh: [AbstractMesh](/classes/AbstractMesh)) =&gt; void





OnCollide




###checkCollisions : boolean





CheckCollisions




###collisionRadius : [Vector3](/classes/Vector3)





CollisionsRadius






##Methods

###attachControl(element, noPreventDefault) &rarr; void
Attach camera to a specified canvas, to control and display it







####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The canvas attached to the camera
optional | noPreventDefault | boolean | @param noPreventDefault
---

###detachControl(element) &rarr; void
Detach camera control and display from the specified canvas







####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | Element to detach from the control
---

###setPosition(position) &rarr; void
Set the position of the [ArcRotateCamera](/classes/ArcRotateCamera)







####Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/Vector3) | The new position of the [ArcRotateCamera](/classes/ArcRotateCamera)
---

###zoomOn(meshes) &rarr; void
Zoom on specified meshes







####Parameters
 | Name | Type | Description
---|---|---|---
optional | meshes | [AbstractMesh](/classes/AbstractMesh)[] | Meshes to zoom on
---

###focusOn(meshesOrMinMaxVectorAndDistance) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | meshesOrMinMaxVectorAndDistance | any | @param meshesOrMinMaxVectorAndDistance
---

###createRigCamera(name, cameraIndex) &rarr; [Camera](/classes/Camera)
@override
Override [Camera](/classes/Camera).createRigCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | cameraIndex | number | 
---
