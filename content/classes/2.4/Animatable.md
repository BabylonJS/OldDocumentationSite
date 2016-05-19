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

### getAnimationsundefined &rarr; [Animation](/classes/2.4/Animation)[]


### appendAnimationsundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAnimationByTargetPropertyundefined &rarr; [Animation](/classes/2.4/Animation)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### resetundefined &rarr; void


### enableBlendingundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disableBlendingundefined &rarr; void


### goToFrameundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### pauseundefined &rarr; void


### restartundefined &rarr; void


### stopundefined &rarr; void


