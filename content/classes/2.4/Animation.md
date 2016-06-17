---
ID_PAGE: 25172
PG_TITLE: Animation
PG_VERSION: 2.1
TAGS:
    - Animation
---
## Description

class [Animation](/classes/2.4/Animation)

The animation is based on objects called [Animation](/classes/2.4/Animation).

An [Animation](/classes/2.4/Animation) is defined by various properties and a collection of keys

A tutorial about Animations ban be found here

## Constructor

## new [Animation](/classes/2.4/Animation)(name, targetProperty, framePerSecond, dataType, loopMode, enableBlending)



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

Name of the animation

### targetProperty : string

The property to change, for example rotate a [Mesh](/classes/2.4/Mesh) : &quot;rotation.x&quot;

### framePerSecond : number

The number of animation frames per second

### dataType : number

The kind of value affected by the animation : ANIMATIONTYPE_FLOAT, ANIMATIONTYPE_VECTOR3, ANIMATIONTYPE_QUATERNION, ANIMATIONTYPE_MATRIX, ANIMATIONTYPE_COLOR3

### loopMode : number

The loop mode : ANIMATIONLOOPMODE_RELATIVE, NIMATIONLOOPMODE_CYCLE, ANIMATIONLOOPMODE_CONSTANT

### enableBlending : boolean



### targetPropertyPath : string[]

An array of properties

### currentFrame : number

The current animation key

### allowMatricesInterpolation : boolean



### blendingSpeed : number



### static ANIMATIONTYPE_FLOAT : number

The value affected by the animation is a float

### static ANIMATIONTYPE_VECTOR3 : number

The value affected by the animation is a [Vector3](/classes/2.4/Vector3)

### static ANIMATIONTYPE_VECTOR2 : number



### static ANIMATIONTYPE_SIZE : number



### static ANIMATIONTYPE_QUATERNION : number

The value affected by the animation is a [Quaternion](/classes/2.4/Quaternion)

### static ANIMATIONTYPE_MATRIX : number

The value affected by the animation is a [Matrix](/classes/2.4/Matrix)

### static ANIMATIONTYPE_COLOR3 : number

The value affected by the animation is a [Color3](/classes/2.4/Color3)

### static ANIMATIONLOOPMODE_RELATIVE : number

The animation loops but doesn't reset values and continues animation with values of the previous ending animation

### static ANIMATIONLOOPMODE_CYCLE : number

The animation restarts with the inital values

### static ANIMATIONLOOPMODE_CONSTANT : number

The animation keeps its final value i.e stopped

## Methods

### static CreateAndStartAnimation(name, node, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd) &rarr; [Animatable](/classes/2.4/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | node | [Node](/classes/2.4/Node) |  
 | targetProperty | string |    
 | framePerSecond | number |    
 | totalFrame | number |    
 | from | any |    The frame defining the begining of the animation
 | to | any |    The frame defining the end of the animation
optional | loopMode | number |    
optional | easingFunction | [EasingFunction](/classes/2.4/EasingFunction) |    
### static CreateMergeAndStartAnimation(name, node, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd) &rarr; [Animatable](/classes/2.4/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | node | [Node](/classes/2.4/Node) |  
 | targetProperty | string |    
 | framePerSecond | number |    
 | totalFrame | number |    
 | from | any |    The frame defining the begining of the animation
 | to | any |    The frame defining the end of the animation
optional | loopMode | number |    
optional | easingFunction | [EasingFunction](/classes/2.4/EasingFunction) |    
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
 | event | [AnimationEvent](/classes/2.4/AnimationEvent) |  

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
 | from | number |    The frame defining the begining of the animation
 | to | number |    The frame defining the end of the animation
### deleteRange(name, deleteFrames) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
optional | deleteFrames | boolean |  
### getRange(name) &rarr; [AnimationRange](/classes/2.4/AnimationRange)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    

### reset() &rarr; void


### isStopped() &rarr; boolean

Tests if the animation is stopped
### getKeys() &rarr; any[]

Returns the animation keys.
Every key represents the value of the [Animation](/classes/2.4/Animation) at that key's given time.
### getHighestFrame() &rarr; number


### getEasingFunction() &rarr; IEasingFunction


### setEasingFunction(easingFunction) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | easingFunction | [EasingFunction](/classes/2.4/EasingFunction) |    

### floatInterpolateFunction(startValue, endValue, gradient) &rarr; number

Used to interpolate (perform the transition ) between float keys

#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | number |    
 | endValue | number |    
 | gradient | number |    
### quaternionInterpolateFunction(startValue, endValue, gradient) &rarr; [Quaternion](/classes/2.4/Quaternion)

Used to interpolate (perform the transition ) between [Quaternion](/classes/2.4/Quaternion) keys

#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Quaternion](/classes/2.4/Quaternion) |    
 | endValue | [Quaternion](/classes/2.4/Quaternion) |    
 | gradient | number |    
### vector3InterpolateFunction(startValue, endValue, gradient) &rarr; [Vector3](/classes/2.4/Vector3)

Used to interpolate (perform the transition ) between [Vector3](/classes/2.4/Vector3) keys

#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector3](/classes/2.4/Vector3) |    
 | endValue | [Vector3](/classes/2.4/Vector3) |    
 | gradient | number |    
### vector2InterpolateFunction(startValue, endValue, gradient) &rarr; [Vector2](/classes/2.4/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Vector2](/classes/2.4/Vector2) |    
 | endValue | [Vector2](/classes/2.4/Vector2) |    
 | gradient | number |    
### sizeInterpolateFunction(startValue, endValue, gradient) &rarr; [Size](/classes/2.4/Size)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Size](/classes/2.4/Size) |    
 | endValue | [Size](/classes/2.4/Size) |    
 | gradient | number |    
### color3InterpolateFunction(startValue, endValue, gradient) &rarr; [Color3](/classes/2.4/Color3)

Used to interpolate (perform the transition ) between [Color3](/classes/2.4/Color3) keys

#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Color3](/classes/2.4/Color3) |    
 | endValue | [Color3](/classes/2.4/Color3) |    
 | gradient | number |    
### matrixInterpolateFunction(startValue, endValue, gradient) &rarr; [Matrix](/classes/2.4/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Matrix](/classes/2.4/Matrix) |    
 | endValue | [Matrix](/classes/2.4/Matrix) |    
 | gradient | number |    
### clone() &rarr; [Animation](/classes/2.4/Animation)

Clones this animation object
### setKeys(values) &rarr; void

Adds the keys array to this [Animation](/classes/2.4/Animation) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | values | Array&lt;any&gt; |    The keys to assign to this object

### setValue(currentValue, blend) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | currentValue | any |  
optional | blend | boolean | 
### goToFrame(frame) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frame | number |  

### animate(delay, from, to, loop, speedRatio, blend) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | delay | number |    @param delay
 | from | number |    The frame defining the begining of the animation
 | to | number |    The frame defining the end of the animation
 | loop | boolean |    true loop the animation, false either
 | speedRatio | number | 
### serialize() &rarr; any


### static Parse(parsedAnimation) &rarr; [Animation](/classes/2.4/Animation)



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
