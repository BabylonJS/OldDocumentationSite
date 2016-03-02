---
ID_PAGE: 25191
PG_TITLE: Skeleton
PG_VERSION: 2.1
---
## Description

class [Skeleton](/classes/2.3/Skeleton)



## Constructor

## new [Skeleton](/classes/2.3/Skeleton)(name, id, scene)

A skeleton (BABYLON.[Skeleton](/classes/2.3/Skeleton)) contains a hierarchy of bones (BABYLON.[Bone](/classes/2.3/Bone)).
All bones can be found into the skeleton.bones array.
A tutorial about Bones and Skeletons ban be found here

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | id | string |   
 | scene | [Scene](/classes/2.3/Scene) |   The scene where the skeleton is
## Members

### name : string

Name of the skeleton

### id : string

Name of the skeleton

### bones : [Bone](/classes/2.3/Bone)[]

Array of bones composing the skeleton

### needInitialSkinMatrix : boolean



## Methods

### getTransformMatrices(mesh) &rarr; Float32Array



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) | 

### getScene() &rarr; [Scene](/classes/2.3/Scene)


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
### getAnimationRange(name) &rarr; [AnimationRange](/classes/2.3/AnimationRange)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   

### copyAnimationRange(source, name, rescaleAsRequired) &rarr; boolean

note: This is not for a complete retargeting, only between very similar skeleton's with only possible bone length differences

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Skeleton](/classes/2.3/Skeleton) | 
 | name | string |   
optional | rescaleAsRequired | boolean | 
### returnToRest() &rarr; void


### beginAnimation(name, loop, speedRatio, onAnimationEnd) &rarr; void



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
### clone(name, id) &rarr; [Skeleton](/classes/2.3/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | id | string |   
### dispose() &rarr; void


### serialize() &rarr; any


### static Parse(parsedSkeleton, scene) &rarr; [Skeleton](/classes/2.3/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedSkeleton | any | 
 | scene | [Scene](/classes/2.3/Scene) |   The scene where the skeleton is
