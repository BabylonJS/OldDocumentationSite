---
ID_PAGE: 25171
PG_TITLE: Animatable
PG_VERSION: 2.1
TAGS:
    - Animation
---
## Description

class [Animatable](/classes/3.1/Animatable)



## Constructor

## new [Animatable](/classes/3.1/Animatable)(scene, target, fromFrame, toFrame, loopAnimation, speedRatio, onAnimationEnd, animations)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
 | target | any | 
optional | fromFrame | number | 
optional | toFrame | number | 
optional | loopAnimation | boolean | 
optional | speedRatio | number | 
optional | onAnimationEnd | Nullable&lt;() =&gt; void&gt; | 
## Members

### target : any



### fromFrame : number



### toFrame : number



### loopAnimation : boolean



### onAnimationEnd : Nullable&lt;() =&gt; void&gt;



### animationStarted : boolean



### speedRatio : number



## Methods

### getAnimations() &rarr; [RuntimeAnimation](/classes/3.1/RuntimeAnimation)[]


### appendAnimations(target, animations) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | 
 | animations | [Animation](/classes/3.1/Animation)[] | 
### getAnimationByTargetProperty(property) &rarr; Nullable&lt;[Animation](/classes/3.1/Animation)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | property | string | 

### getRuntimeAnimationByTargetProperty(property) &rarr; Nullable&lt;[RuntimeAnimation](/classes/3.1/RuntimeAnimation)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | property | string | 

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


### restart() &rarr; void


### stop(animationName) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | animationName | string | 

