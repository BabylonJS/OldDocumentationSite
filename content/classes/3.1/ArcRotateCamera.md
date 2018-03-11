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

class [ArcRotateCamera](/classes/3.1/ArcRotateCamera) extends [TargetCamera](/classes/3.1/TargetCamera)



## Constructor

## new [ArcRotateCamera](/classes/3.1/ArcRotateCamera)(name, alpha, beta, radius, target, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | alpha | number | 
 | beta | number | 
 | radius | number | 
 | target | [Vector3](/classes/3.1/Vector3) | 
## Members

### alpha : number


### beta : number


### radius : number


### target : [Vector3](/classes/3.1/Vector3)


### inertialAlphaOffset : number


### inertialBetaOffset : number


### inertialRadiusOffset : number


### lowerAlphaLimit : Nullable&lt;number&gt;


### upperAlphaLimit : Nullable&lt;number&gt;


### lowerBetaLimit : number


### upperBetaLimit : number


### lowerRadiusLimit : Nullable&lt;number&gt;


### upperRadiusLimit : Nullable&lt;number&gt;


### inertialPanningX : number


### inertialPanningY : number


### pinchToPanMaxDistance : number


### panningDistanceLimit : Nullable&lt;number&gt;


### panningOriginTarget : [Vector3](/classes/3.1/Vector3)


### panningInertia : number


### angularSensibilityX : number


### angularSensibilityY : number


### pinchPrecision : number


### pinchDeltaPercentage : number


### panningSensibility : number


### keysUp : number[]


### keysDown : number[]


### keysLeft : number[]


### keysRight : number[]


### wheelPrecision : number


### wheelDeltaPercentage : number


### zoomOnFactor : number


### targetScreenOffset : [Vector2](/classes/3.1/Vector2)


### allowUpsideDown : boolean


### inputs : [ArcRotateCameraInputsManager](/classes/3.1/ArcRotateCameraInputsManager)


### panningAxis : [Vector3](/classes/3.1/Vector3)


### bouncingBehavior : Nullable&lt;[BouncingBehavior](/classes/3.1/BouncingBehavior)&gt;


### useBouncingBehavior : boolean


### framingBehavior : Nullable&lt;[FramingBehavior](/classes/3.1/FramingBehavior)&gt;


### useFramingBehavior : boolean


### autoRotationBehavior : Nullable&lt;[AutoRotationBehavior](/classes/3.1/AutoRotationBehavior)&gt;


### useAutoRotationBehavior : boolean


### onMeshTargetChangedObservable : [Observable](/classes/3.1/Observable)&lt;Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;&gt;


### onCollide : (collidedMesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | collidedMesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### checkCollisions : boolean


### collisionRadius : [Vector3](/classes/3.1/Vector3)


### doNotUpdateMaxZ : undefined


## Methods

### storeState() &rarr; [Camera](/classes/3.1/Camera)


### attachControl(element, noPreventDefault, useCtrlForPanning, panningMouseButton) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | 
optional | noPreventDefault | boolean | 
optional | useCtrlForPanning | boolean | 
### detachControl(element) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | 

### rebuildAnglesAndRadius() &rarr; void


### setPosition(position) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/3.1/Vector3) | 

### setTarget(target, [Vector3](/classes/3.1/Vector3), toBoundingCenter, allowSamePosition) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [AbstractMesh](/classes/3.1/AbstractMesh) or [Vector3](/classes/3.1/Vector3) | 
optional | toBoundingCenter | boolean | 
optional | allowSamePosition | boolean | 
### zoomOn(meshes, doNotUpdateMaxZ) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | meshes | [AbstractMesh](/classes/3.1/AbstractMesh)[] | 
optional | doNotUpdateMaxZ | boolean | 
### focusOn(meshesOrMinMaxVectorAndDistance) &rarr; (meshesOrMinMaxVectorAndDistance)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | meshesOrMinMaxVectorAndDistance | [AbstractMesh](/classes/3.1/AbstractMesh)[] | 

