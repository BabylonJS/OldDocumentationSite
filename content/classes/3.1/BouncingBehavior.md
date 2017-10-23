---
TAGS:
---
## Description

class [BouncingBehavior](/classes/3.1/BouncingBehavior)

Add a bouncing effect to an [ArcRotateCamera](/classes/3.1/ArcRotateCamera) when reaching a specified minimum and maximum radius

## Members

### name : string



### static [EasingFunction](/classes/3.1/EasingFunction) : [BackEase](/classes/3.1/BackEase)

The easing function used by animations

### static EasingMode : number

The easing mode used by animations

### transitionDuration : number

The duration of the animation, in milliseconds

### lowerRadiusTransitionRange : number

Length of the distance animated by the transition when lower radius is reached

### upperRadiusTransitionRange : number

Length of the distance animated by the transition when upper radius is reached

### autoTransitionRange : boolean

Gets a value indicating if the lowerRadiusTransitionRange and upperRadiusTransitionRange are defined automatically

Sets a value indicating if the lowerRadiusTransitionRange and upperRadiusTransitionRange are defined automatically

Transition ranges will be set to 5% of the bounding box diagonal in world space

## Methods

### attach(camera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [ArcRotateCamera](/classes/3.1/ArcRotateCamera) | 

### detach() &rarr; void


### stopAllAnimations() &rarr; void

Stops and removes all animations that have been applied to the camera
