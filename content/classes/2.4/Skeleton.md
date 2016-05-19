---
ID_PAGE: 25191
PG_TITLE: Skeleton
PG_VERSION: 2.1
---
## Description

class [Skeleton](/classes/2.4/Skeleton)



## Constructor

## new [Skeleton](/classes/2.4/Skeleton)(name, id, scene)

A skeleton (BABYLON.[Skeleton](/classes/2.4/Skeleton)) contains a hierarchy of bones (BABYLON.[Bone](/classes/2.4/Bone)).
All bones can be found into the skeleton.bones array.
A tutorial about Bones and Skeletons ban be found here

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | id | string |    
 | scene | [Scene](/classes/2.4/Scene) |    The scene where the skeleton is
## Members

### name : string

Name of the skeleton

### id : string

Name of the skeleton

### bones : [Bone](/classes/2.4/Bone)[]

Array of bones composing the skeleton

### needInitialSkinMatrix : boolean



## Methods

### getTransformMatricesundefined &rarr; Float32Array



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getSceneundefined &rarr; [Scene](/classes/2.4/Scene)


### toStringundefined &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getBoneIndexByNameundefined &rarr; number

Get bone's index searching by name

@return {number} Indice of the bone. Returns -1 if not found

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createAnimationRangeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### deleteAnimationRangeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAnimationRangeundefined &rarr; [AnimationRange](/classes/2.4/AnimationRange)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAnimationRangesundefined &rarr; [AnimationRange](/classes/2.4/AnimationRange)[]

Returns as an Array, all AnimationRanges defined on this skeleton
### copyAnimationRangeundefined &rarr; boolean

note: This is not for a complete retargeting, only between very similar skeleton's with only possible bone length differences

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### returnToRestundefined &rarr; void


### beginAnimationundefined &rarr; [Animatable](/classes/2.4/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### prepareundefined &rarr; void


### getAnimatablesundefined &rarr; IAnimatable[]


### cloneundefined &rarr; [Skeleton](/classes/2.4/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### enableBlendingundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disposeundefined &rarr; void


### serializeundefined &rarr; any


### static Parseundefined &rarr; [Skeleton](/classes/2.4/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
