---
TAGS:
---
## Description

class [FramingBehavior](/classes/3.1/FramingBehavior)



## Members

### name : string



### static [EasingFunction](/classes/3.1/EasingFunction) : [ExponentialEase](/classes/3.1/ExponentialEase)

The easing function used by animations

### static EasingMode : number

The easing mode used by animations

### mode : number

Gets current mode used by the behavior.

Sets the current mode used by the behavior

### radiusScale : number

Gets the scale applied to the radius

Sets the scale applied to the radius (1 by default)

### positionScale : number

Gets the scale to apply on Y axis to position camera focus. 0.5 by default which means the center of the bounding box.

Sets the scale to apply on Y axis to position camera focus. 0.5 by default which means the center of the bounding box.

### defaultElevation : number

Gets the angle above/below the horizontal plane to return to when the return to default elevation idle

behaviour is triggered, in radians.

Sets the angle above/below the horizontal plane to return to when the return to default elevation idle

behaviour is triggered, in radians.

### elevationReturnTime : number

Gets the time (in milliseconds) taken to return to the default beta position.

Negative value indicates camera should not return to default.

Sets the time (in milliseconds) taken to return to the default beta position.

Negative value indicates camera should not return to default.

### elevationReturnWaitTime : number

Gets the delay (in milliseconds) taken before the camera returns to the default beta position.

Sets the delay (in milliseconds) taken before the camera returns to the default beta position.

### zoomStopsAnimation : boolean

Gets the flag that indicates if user zooming should stop animation.

Sets the flag that indicates if user zooming should stop animation.

### framingTime : number

Gets the transition time when framing the mesh, in milliseconds

Sets the transition time when framing the mesh, in milliseconds

### isUserIsMoving : boolean

Gets a value indicating if the user is moving the camera

### static IgnoreBoundsSizeMode : number

The camera can move all the way towards the mesh.

### static FitFrustumSidesMode : number

The camera is not allowed to zoom closer to the mesh than the point at which the adjusted bounding sphere touches the frustum sides

## Methods

### attach(camera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [ArcRotateCamera](/classes/3.1/ArcRotateCamera) | 

### detach() &rarr; void


### zoomOnMesh(mesh, focusOnOriginXZ, onAnimationEnd) &rarr; void

Targets the given mesh and updates zoom level accordingly.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |   The mesh to target.
optional | focusOnOriginXZ | boolean |  Determines if the camera should focus on 0 in the X and Z axis instead of the mesh
optional | onAnimationEnd | Nullable&lt;() =&gt; void&gt; |  Callback triggered at the end of the framing animation
### zoomOnBoundingInfo(minimumWorld, maximumWorld, focusOnOriginXZ, onAnimationEnd) &rarr; void

Targets the given mesh and updates zoom level accordingly.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | minimumWorld | [Vector3](/classes/3.1/Vector3) | 
 | maximumWorld | [Vector3](/classes/3.1/Vector3) | 
optional | focusOnOriginXZ | boolean |  Determines if the camera should focus on 0 in the X and Z axis instead of the mesh
### stopAllAnimations() &rarr; void

Stops and removes all animations that have been applied to the camera
