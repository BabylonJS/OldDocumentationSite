---
ID_PAGE: 25171
PG_TITLE: Animatable
PG_VERSION: 2.1
TAGS:
    - Animation
---
## Description

class [Animatable](/classes/2.4/Animatable)

Used to access to individual animations

## Constructor

## new [Animatable](/classes/2.4/Animatable)(scene, target, fromFrame, toFrame, loopAnimation, speedRatio, onAnimationEnd, animations)

Builds an [Animatable](/classes/2.4/Animatable) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) |    The scene where takes place the animation
 | target | any |    The target which will be animated
optional | fromFrame | number |    default : 0
optional | toFrame | number |    default : 100
optional | loopAnimation | boolean |    default : false
optional | speedRatio | number |    default : 1.0
optional | onAnimationEnd | any |    Function triggered on the end of an animation
## Members

### target : any

The animated target

### fromFrame : number

The begining frame of the animation

### toFrame : number

The ending frame of the animation

### loopAnimation : boolean

default : false. Sets if the animation loops or not

### speedRatio : number

default : 1.0. The speed Ratio, lower gives a slower animation

### onAnimationEnd : any

Function to execute on animation end

### animationStarted : boolean

Tests if the animation is in started state

## Methods

### getAnimations() &rarr; [Animation](/classes/2.4/Animation)[]


### appendAnimations(target, animations) &rarr; void

Append a new animation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |    The target which will be animated
 | animations | [Animation](/classes/2.4/Animation)[] |    The animation(s) to apply
### getAnimationByTargetProperty(property) &rarr; [Animation](/classes/2.4/Animation)

Returns animations that have to given property

#### Parameters
 | Name | Type | Description
---|---|---|---
 | property | string |    The given property

### reset() &rarr; void


### enableBlending(blendingSpeed) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | blendingSpeed | number | 

### disableBlending() &rarr; void


### goToFrame(frame) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frame | number |  

### pause() &rarr; void

Pauses the animation
### restart() &rarr; void

Restarts the animation
### stop() &rarr; void


