---
ID_PAGE: 25190
PG_TITLE: Bone
PG_VERSION: 2.1
---
## Description

class [Bone](/classes/2.3/Bone) extends [Node](/classes/2.3/Node)



## Constructor

##  new [Bone](/classes/2.3/Bone)(name, skeleton, parentBone, matrix, restPose)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the bone
 | skeleton | [Skeleton](/classes/2.3/Skeleton) |   The skeleton the bone belongs to
 | parentBone | [Bone](/classes/2.3/Bone) |   The parent bone of this bone
 | matrix | [Matrix](/classes/2.3/Matrix) |   The update matrix
## Members

### name : string



### children : [Bone](/classes/2.3/Bone)[]



### animations : [Animation](/classes/2.3/Animation)[]



### length : number



## Methods

### getParent() &rarr; [Bone](/classes/2.3/Bone)


### getLocalMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### getBaseMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### getRestPose() &rarr; [Matrix](/classes/2.3/Matrix)


### returnToRest() &rarr; void


### getWorldMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### getInvertedAbsoluteTransform() &rarr; [Matrix](/classes/2.3/Matrix)


### getAbsoluteTransform() &rarr; [Matrix](/classes/2.3/Matrix)


### updateMatrix(matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.3/Matrix) |   The update matrix

### markAsDirty() &rarr; void


### copyAnimationRange(source, rangeName, frameOffset, rescaleAsRequired) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Bone](/classes/2.3/Bone) | 
 | rangeName | string | 
 | frameOffset | number | 
