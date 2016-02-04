---
ID_PAGE: 25171
PG_TITLE: Animatable
PG_VERSION: 2.1
TAGS:
    - Animation
---
## Description

class [Animatable](/classes/2.3/Animatable)



## Constructor

##  new [Animatable](/classes/2.3/Animatable)(scene, target, fromFrame, toFrame, loopAnimation, speedRatio, onAnimationEnd, animations)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   The scene where takes place the animation
 | target | any |   The target which will be animated
optional | fromFrame | number |   default : 0
optional | toFrame | number |   default : 100
optional | loopAnimation | boolean |   default : false
optional | speedRatio | number |   default : 1.0
optional | onAnimationEnd | any |   Function triggered on the end of an animation
## Members

### target : any



### fromFrame : number



### toFrame : number



### loopAnimation : boolean



### speedRatio : number



### onAnimationEnd : any



### animationStarted : boolean



## Methods

### getAnimations() &rarr; [Animation](/classes/2.3/Animation)[]


### appendAnimations(target, animations) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |   The target which will be animated
 | animations | [Animation](/classes/2.3/Animation)[] |   The animation(s) to apply
### getAnimationByTargetProperty(property) &rarr; [Animation](/classes/2.3/Animation)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | property | string |   The given property

### reset() &rarr; void


### goToFrame(frame) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frame | number | 

### pause() &rarr; void


### restart() &rarr; void


### stop() &rarr; void


