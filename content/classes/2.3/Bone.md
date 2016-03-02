---
ID_PAGE: 25190
PG_TITLE: Bone
PG_VERSION: 2.1
---
## Description

class [Bone](/classes/2.3/Bone) extends [Node](/classes/2.3/Node)



## Constructor

## new [Bone](/classes/2.3/Bone)(name, skeleton, parentBone, matrix, restPose)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the bone
 | skeleton | [Skeleton](/classes/2.3/Skeleton) |   The skeleton the bone belongs to
 | parentBone | [Bone](/classes/2.3/Bone) |   The parent bone of this bone
 | matrix | [Matrix](/classes/2.3/Matrix) |   The update matrix
## Members

### name : string

The bone name

### children : [Bone](/classes/2.3/Bone)[]

Children bones array

### animations : [Animation](/classes/2.3/Animation)[]

Animations of this bone

### length : number



## Methods

### getParent() &rarr; [Bone](/classes/2.3/Bone)

Get the parent bone
### getLocalMatrix() &rarr; [Matrix](/classes/2.3/Matrix)

Get the local matrix
### getBaseMatrix() &rarr; [Matrix](/classes/2.3/Matrix)

Get the base matrix
### getRestPose() &rarr; [Matrix](/classes/2.3/Matrix)


### returnToRest() &rarr; void


### getWorldMatrix() &rarr; [Matrix](/classes/2.3/Matrix)

Get the world matrix
### getInvertedAbsoluteTransform() &rarr; [Matrix](/classes/2.3/Matrix)

Get the inverted absolute transform
### getAbsoluteTransform() &rarr; [Matrix](/classes/2.3/Matrix)


### updateMatrix(matrix) &rarr; void

Update the bone matrix

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
