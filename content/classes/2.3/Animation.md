---
ID_PAGE: 25172
PG_TITLE: Animation
PG_VERSION: 2.1
TAGS:
    - Animation
---
## Description

class [Animation](/classes/2.3/Animation)



## Constructor

##  new [Animation](/classes/2.3/Animation)(name, targetProperty, framePerSecond, dataType, loopMode)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | targetProperty | string |   
 | framePerSecond | number |   
 | dataType | number |   
## Members

### name : string



### targetProperty : string



### framePerSecond : number



### dataType : number



### loopMode : number



### targetPropertyPath : string[]



### currentFrame : number



### allowMatricesInterpolation : boolean



### static  ANIMATIONTYPE_FLOAT : number



### static  ANIMATIONTYPE_VECTOR3 : number



### static  ANIMATIONTYPE_VECTOR2 : number



### static  ANIMATIONTYPE_QUATERNION : number



### static  ANIMATIONTYPE_MATRIX : number



### static  ANIMATIONTYPE_COLOR3 : number



### static  ANIMATIONLOOPMODE_RELATIVE : number



### static  ANIMATIONLOOPMODE_CYCLE : number



### static  ANIMATIONLOOPMODE_CONSTANT : number



## Methods

### static  CreateAndStartAnimation(name, node, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd) &rarr; [Animatable](/classes/2.3/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | node | [Node](/classes/2.3/Node) | 
 | targetProperty | string |   
 | framePerSecond | number |   
 | totalFrame | number |   
 | from | any |   The frame defining the begining of the animation
 | to | any |   The frame defining the end of the animation
optional | loopMode | number |   
optional | easingFunction | [EasingFunction](/classes/2.3/EasingFunction) |   
### static  CreateMergeAndStartAnimation(name, node, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd) &rarr; [Animatable](/classes/2.3/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | node | [Node](/classes/2.3/Node) | 
 | targetProperty | string |   
 | framePerSecond | number |   
 | totalFrame | number |   
 | from | any |   The frame defining the begining of the animation
 | to | any |   The frame defining the end of the animation
optional | loopMode | number |   
optional | easingFunction | [EasingFunction](/classes/2.3/EasingFunction) |   
### addEvent(event) &rarr; void

Add an event to this animation.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | event | [AnimationEvent](/classes/2.3/AnimationEvent) | 

### removeEvents(frame) &rarr; void

Remove all events found at the given frame

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frame | number | 

### createRange(name, from, to) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | from | number |   The frame defining the begining of the animation
 | to | number |   The frame defining the end of the animation
### deleteRange(name, deleteFrames) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
optional | deleteFrames | boolean | 
### getRange(name) &rarr; [AnimationRange](/classes/2.3/AnimationRange)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   

### reset() &rarr; void


### isStopped() &rarr; boolean


### getKeys() &rarr; any[]


### getHighestFrame() &rarr; number


### getEasingFunction() &rarr; IEasingFunction


### setEasingFunction(easingFunction) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | easingFunction | [EasingFunction](/classes/2.3/EasingFunction) |   

### floatInterpolateFunction(startValue, endValue, gradient) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | number |   
 | endValue | number |   
 | gradient | number |   
### quaternionInterpolateFunction(startValue, endValue, gradient) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Quaternion](/classes/2.3/Quaternion) |   
 | endValue | [Quaternion](/classes/2.3/Quaternion) |   
 | gradient | number |   
### vector3InterpolateFunction(startValue, endValue, gradient) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector3](/classes/2.3/Vector3) |   
 | endValue | [Vector3](/classes/2.3/Vector3) |   
 | gradient | number |   
### vector2InterpolateFunction(startValue, endValue, gradient) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector2](/classes/2.3/Vector2) |   
 | endValue | [Vector2](/classes/2.3/Vector2) |   
 | gradient | number |   
### color3InterpolateFunction(startValue, endValue, gradient) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Color3](/classes/2.3/Color3) |   
 | endValue | [Color3](/classes/2.3/Color3) |   
 | gradient | number |   
### matrixInterpolateFunction(startValue, endValue, gradient) &rarr; [Matrix](/classes/2.3/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Matrix](/classes/2.3/Matrix) |   
 | endValue | [Matrix](/classes/2.3/Matrix) |   
 | gradient | number |   
### clone() &rarr; [Animation](/classes/2.3/Animation)


### setKeys(values) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | values | Array&lt;any&gt; |   The keys to assign to this object

### setValue(currentValue) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | currentValue | any | 

### goToFrame(frame) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frame | number | 

### animate(delay, from, to, loop, speedRatio) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | delay | number |   @param delay
 | from | number |   The frame defining the begining of the animation
 | to | number |   The frame defining the end of the animation
 | loop | boolean |   true loop the animation, false either
### serialize() &rarr; any


### static  Parse(parsedAnimation) &rarr; [Animation](/classes/2.3/Animation)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedAnimation | any | 

### static  AppendSerializedAnimations(source, destination) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | IAnimatable | 
 | destination | any | 
