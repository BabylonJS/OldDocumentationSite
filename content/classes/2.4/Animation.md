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

### static CreateAndStartAnimationundefined &rarr; [Animatable](/classes/2.4/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateMergeAndStartAnimationundefined &rarr; [Animatable](/classes/2.4/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### toStringundefined &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### addEventundefined &rarr; void

Add an event to this animation.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### removeEventsundefined &rarr; void

Remove all events found at the given frame

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createRangeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### deleteRangeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getRangeundefined &rarr; [AnimationRange](/classes/2.4/AnimationRange)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### resetundefined &rarr; void


### isStoppedundefined &rarr; boolean


### getKeysundefined &rarr; any[]


### getHighestFrameundefined &rarr; number


### getEasingFunctionundefined &rarr; IEasingFunction


### setEasingFunctionundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### floatInterpolateFunctionundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### quaternionInterpolateFunctionundefined &rarr; [Quaternion](/classes/2.4/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### vector3InterpolateFunctionundefined &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### vector2InterpolateFunctionundefined &rarr; [Vector2](/classes/2.4/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### color3InterpolateFunctionundefined &rarr; [Color3](/classes/2.4/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### matrixInterpolateFunctionundefined &rarr; [Matrix](/classes/2.4/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### cloneundefined &rarr; [Animation](/classes/2.4/Animation)


### setKeysundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setValueundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### goToFrameundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### animateundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### serializeundefined &rarr; any


### static Parseundefined &rarr; [Animation](/classes/2.4/Animation)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static AppendSerializedAnimationsundefined &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
