---
ID_PAGE: 25172
PG_TITLE: Animation
PG_VERSION: 2.1
TAGS:
    - Animation
---
## Description

class [Animation](/classes/3.1/Animation)



## Constructor

## new [Animation](/classes/3.1/Animation)(name, targetProperty, framePerSecond, dataType, loopMode, enableBlending)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | targetProperty | string | 
 | framePerSecond | number | 
 | dataType | number | 
optional | loopMode | number | 
## Members

### name : string



### targetProperty : string



### framePerSecond : number



### dataType : number



### loopMode : number



### enableBlending : boolean



### static AllowMatricesInterpolation : boolean



### targetPropertyPath : string[]



### blendingSpeed : number



### runtimeAnimations : [RuntimeAnimation](/classes/3.1/RuntimeAnimation)[]

Return the array of runtime animations currently using this animation

### hasRunningRuntimeAnimations : boolean



### static ANIMATIONTYPE_FLOAT : number



### static ANIMATIONTYPE_VECTOR3 : number



### static ANIMATIONTYPE_VECTOR2 : number



### static ANIMATIONTYPE_SIZE : number



### static ANIMATIONTYPE_QUATERNION : number



### static ANIMATIONTYPE_MATRIX : number



### static ANIMATIONTYPE_COLOR3 : number



### static ANIMATIONLOOPMODE_RELATIVE : number



### static ANIMATIONLOOPMODE_CYCLE : number



### static ANIMATIONLOOPMODE_CONSTANT : number



## Methods

### static CreateAnimation(property, animationType, framePerSecond, easingFunction) &rarr; undefined

Sets up an animation.

@returns The created animation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | property | string |  the property to animate
 | animationType | number |  the animation type to apply
 | framePerSecond | number | 
### static CreateAndStartAnimation(name, node, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd) &rarr; Nullable&lt;[Animatable](/classes/3.1/Animatable)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | node | [Node](/classes/3.1/Node) | 
 | targetProperty | string | 
 | framePerSecond | number | 
 | totalFrame | number | 
 | from | any | 
 | to | any | 
optional | loopMode | number | 
optional | easingFunction | [EasingFunction](/classes/3.1/EasingFunction) | 
### static CreateMergeAndStartAnimation(name, node, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd) &rarr; Nullable&lt;[Animatable](/classes/3.1/Animatable)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | node | [Node](/classes/3.1/Node) | 
 | targetProperty | string | 
 | framePerSecond | number | 
 | totalFrame | number | 
 | from | any | 
 | to | any | 
optional | loopMode | number | 
optional | easingFunction | [EasingFunction](/classes/3.1/EasingFunction) | 
### static TransitionTo(property, targetValue, host, scene, frameRate, transition, duration, onAnimationEnd) &rarr; Nullable&lt;[Animatable](/classes/3.1/Animatable)&gt;

Transition property of the [Camera](/classes/3.1/Camera) to the target Value.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | property | string |  The property to transition
 | targetValue | any |  The target Value of the property
 | host | any |  The object where the property to animate belongs
 | scene | [Scene](/classes/3.1/Scene) |  [Scene](/classes/3.1/Scene) used to run the animation
 | frameRate | number |  Framerate (in frame/s) to use
 | transition | [Animation](/classes/3.1/Animation) |  The transition type we want to use
 | duration | number |  The duration of the animation, in milliseconds
### toString(fullDetails) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | fullDetails | boolean | 

### addEvent(event) &rarr; void

Add an event to this animation.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | event | [AnimationEvent](/classes/3.1/AnimationEvent) | 

### removeEvents(frame) &rarr; void

Remove all events found at the given frame

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frame | number | 

### getEvents() &rarr; [AnimationEvent](/classes/3.1/AnimationEvent)[]


### createRange(name, from, to) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | from | number | 
 | to | number | 
### deleteRange(name, deleteFrames) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
optional | deleteFrames | boolean | 
### getRange(name) &rarr; Nullable&lt;[AnimationRange](/classes/3.1/AnimationRange)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getKeys() &rarr; Array&lt;{ frame: number,  value: any,  inTangent: any,  outTangent: any }&gt;


### getHighestFrame() &rarr; number


### getEasingFunction() &rarr; IEasingFunction


### setEasingFunction(easingFunction) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | easingFunction | [EasingFunction](/classes/3.1/EasingFunction) | 

### floatInterpolateFunction(startValue, endValue, gradient) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | number | 
 | endValue | number | 
 | gradient | number | 
### floatInterpolateFunctionWithTangents(startValue, outTangent, endValue, inTangent, gradient) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | number | 
 | outTangent | number | 
 | endValue | number | 
 | inTangent | number | 
### quaternionInterpolateFunction(startValue, endValue, gradient) &rarr; [Quaternion](/classes/3.1/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Quaternion](/classes/3.1/Quaternion) | 
 | endValue | [Quaternion](/classes/3.1/Quaternion) | 
 | gradient | number | 
### quaternionInterpolateFunctionWithTangents(startValue, outTangent, endValue, inTangent, gradient) &rarr; [Quaternion](/classes/3.1/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Quaternion](/classes/3.1/Quaternion) | 
 | outTangent | [Quaternion](/classes/3.1/Quaternion) | 
 | endValue | [Quaternion](/classes/3.1/Quaternion) | 
 | inTangent | [Quaternion](/classes/3.1/Quaternion) | 
### vector3InterpolateFunction(startValue, endValue, gradient) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector3](/classes/3.1/Vector3) | 
 | endValue | [Vector3](/classes/3.1/Vector3) | 
 | gradient | number | 
### vector3InterpolateFunctionWithTangents(startValue, outTangent, endValue, inTangent, gradient) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector3](/classes/3.1/Vector3) | 
 | outTangent | [Vector3](/classes/3.1/Vector3) | 
 | endValue | [Vector3](/classes/3.1/Vector3) | 
 | inTangent | [Vector3](/classes/3.1/Vector3) | 
### vector2InterpolateFunction(startValue, endValue, gradient) &rarr; [Vector2](/classes/3.1/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector2](/classes/3.1/Vector2) | 
 | endValue | [Vector2](/classes/3.1/Vector2) | 
 | gradient | number | 
### vector2InterpolateFunctionWithTangents(startValue, outTangent, endValue, inTangent, gradient) &rarr; [Vector2](/classes/3.1/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector2](/classes/3.1/Vector2) | 
 | outTangent | [Vector2](/classes/3.1/Vector2) | 
 | endValue | [Vector2](/classes/3.1/Vector2) | 
 | inTangent | [Vector2](/classes/3.1/Vector2) | 
### sizeInterpolateFunction(startValue, endValue, gradient) &rarr; [Size](/classes/3.1/Size)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Size](/classes/3.1/Size) | 
 | endValue | [Size](/classes/3.1/Size) | 
 | gradient | number | 
### color3InterpolateFunction(startValue, endValue, gradient) &rarr; [Color3](/classes/3.1/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Color3](/classes/3.1/Color3) | 
 | endValue | [Color3](/classes/3.1/Color3) | 
 | gradient | number | 
### matrixInterpolateFunction(startValue, endValue, gradient) &rarr; [Matrix](/classes/3.1/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Matrix](/classes/3.1/Matrix) | 
 | endValue | [Matrix](/classes/3.1/Matrix) | 
 | gradient | number | 
### clone() &rarr; [Animation](/classes/3.1/Animation)


### setKeys(values) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | values | Array&lt;{ frame: number,  value: any }&gt; | 

### serialize() &rarr; any


### static Parse(parsedAnimation) &rarr; [Animation](/classes/3.1/Animation)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedAnimation | any | 

### static AppendSerializedAnimations(source, destination) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | IAnimatable | 
 | destination | any | 
