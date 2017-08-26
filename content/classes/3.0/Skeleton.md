---
ID_PAGE: 25191
PG_TITLE: Skeleton
PG_VERSION: 2.1
---
## Description

class [Skeleton](/classes/3.0/Skeleton)



## Constructor

## new [Skeleton](/classes/3.0/Skeleton)(name, id, scene)

A skeleton (BABYLON.[Skeleton](/classes/3.0/Skeleton)) contains a hierarchy of bones (BABYLON.[Bone](/classes/3.0/Bone)).
All bones can be found into the skeleton.bones array.
A tutorial about Bones and Skeletons ban be found here : https://doc.babylonjs.com/how_to/how_to_use_bones_and_skeletons

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      
 | id | string |      
 | scene | [Scene](/classes/3.0/Scene) |      The scene where the skeleton is
## Members

### name : string

Name of the skeleton

### id : string

Name of the skeleton

### bones : [Bone](/classes/3.0/Bone)[]

Array of bones composing the skeleton

### dimensionsAtRest : [Vector3](/classes/3.0/Vector3)



### needInitialSkinMatrix : boolean



### onBeforeComputeObservable : [Observable](/classes/3.0/Observable)&lt;[Skeleton](/classes/3.0/Skeleton)&gt;

An event triggered before computing the skeleton's matrices

@type {BABYLON.[Observable](/classes/3.0/Observable)}

## Methods

### getTransformMatrices(mesh) &rarr; Float32Array



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |    

### getScene() &rarr; [Scene](/classes/3.0/Scene)


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
### getAnimationRange(name) &rarr; [AnimationRange](/classes/3.0/AnimationRange)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      

### getAnimationRanges() &rarr; [AnimationRange](/classes/3.0/AnimationRange)[]

Returns as an Array, all AnimationRanges defined on this skeleton
### copyAnimationRange(source, name, rescaleAsRequired) &rarr; boolean

note: This is not for a complete retargeting, only between very similar skeleton's with only possible bone length differences

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Skeleton](/classes/3.0/Skeleton) |    
 | name | string |      
optional | rescaleAsRequired | boolean |    
### returnToRest() &rarr; void


### beginAnimation(name, loop, speedRatio, onAnimationEnd) &rarr; [Animatable](/classes/3.0/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      
optional | loop | boolean |    
optional | speedRatio | number |    
### prepare() &rarr; void

Prepare bones' skeleton
### getAnimatables() &rarr; IAnimatable[]

Get the animatables of the skeleton
### clone(name, id) &rarr; [Skeleton](/classes/3.0/Skeleton)



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


### static Parse(parsedSkeleton, scene) &rarr; [Skeleton](/classes/3.0/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedSkeleton | any |    
 | scene | [Scene](/classes/3.0/Scene) |      The scene where the skeleton is
### computeAbsoluteTransforms(forceUpdate) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceUpdate | boolean |  

### getPoseMatrix() &rarr; [Matrix](/classes/3.0/Matrix)


