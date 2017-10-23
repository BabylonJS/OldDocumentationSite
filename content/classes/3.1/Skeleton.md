---
ID_PAGE: 25191
PG_TITLE: Skeleton
PG_VERSION: 2.1
---
## Description

class [Skeleton](/classes/3.1/Skeleton)



## Constructor

## new [Skeleton](/classes/3.1/Skeleton)(name, id, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | id | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### name : string



### id : string



### bones : [Bone](/classes/3.1/Bone)[]



### dimensionsAtRest : [Vector3](/classes/3.1/Vector3)



### needInitialSkinMatrix : boolean



### animations : Array&lt;[Animation](/classes/3.1/Animation)&gt;



### onBeforeComputeObservable : [Observable](/classes/3.1/Observable)&lt;[Skeleton](/classes/3.1/Skeleton)&gt;

An event triggered before computing the skeleton's matrices

@type {BABYLON.[Observable](/classes/3.1/Observable)}

## Methods

### getTransformMatrices(mesh) &rarr; Float32Array



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### getScene() &rarr; [Scene](/classes/3.1/Scene)


### toString(fullDetails) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | fullDetails | boolean | 

### getBoneIndexByName(name) &rarr; number

Get bone's index searching by name

@return {number} Indice of the bone. Returns -1 if not found

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### createAnimationRange(name, from, to) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | from | number | 
 | to | number | 
### deleteAnimationRange(name, deleteFrames) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
optional | deleteFrames | boolean | 
### getAnimationRange(name) &rarr; Nullable&lt;[AnimationRange](/classes/3.1/AnimationRange)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getAnimationRanges() &rarr; Nullable&lt;[AnimationRange](/classes/3.1/AnimationRange)&gt;[]

Returns as an Array, all AnimationRanges defined on this skeleton
### copyAnimationRange(source, name, rescaleAsRequired) &rarr; boolean

note: This is not for a complete retargeting, only between very similar skeleton's with only possible bone length differences

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Skeleton](/classes/3.1/Skeleton) | 
 | name | string | 
optional | rescaleAsRequired | boolean | 
### returnToRest() &rarr; void


### beginAnimation(name, loop, speedRatio, onAnimationEnd) &rarr; Nullable&lt;[Animatable](/classes/3.1/Animatable)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
optional | loop | boolean | 
optional | speedRatio | number | 
### prepare() &rarr; void


### getAnimatables() &rarr; IAnimatable[]


### clone(name, id) &rarr; [Skeleton](/classes/3.1/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | id | string | 
### enableBlending(blendingSpeed) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | blendingSpeed | number | 

### dispose() &rarr; void


### serialize() &rarr; any


### static Parse(parsedSkeleton, scene) &rarr; [Skeleton](/classes/3.1/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedSkeleton | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
### computeAbsoluteTransforms(forceUpdate) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceUpdate | boolean | 

### getPoseMatrix() &rarr; Nullable&lt;[Matrix](/classes/3.1/Matrix)&gt;


### sortBones() &rarr; void


