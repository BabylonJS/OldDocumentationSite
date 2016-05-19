---
ID_PAGE: 25190
PG_TITLE: Bone
PG_VERSION: 2.1
---
## Description

class [Bone](/classes/2.4/Bone) extends [Node](/classes/2.4/Node)



## Constructor

## new [Bone](/classes/2.4/Bone)(name, skeleton, parentBone, matrix, restPose)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the bone
 | skeleton | [Skeleton](/classes/2.4/Skeleton) |    The skeleton the bone belongs to
 | parentBone | [Bone](/classes/2.4/Bone) |    The parent bone of this bone
 | matrix | [Matrix](/classes/2.4/Matrix) |    The update matrix
## Members

### name : string

The bone name

### children : [Bone](/classes/2.4/Bone)[]

Children bones array

### animations : [Animation](/classes/2.4/Animation)[]

Animations of this bone

### length : number



## Methods

### getParentundefined &rarr; [Bone](/classes/2.4/Bone)


### getLocalMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### getBaseMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### getRestPoseundefined &rarr; [Matrix](/classes/2.4/Matrix)


### returnToRestundefined &rarr; void


### getWorldMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### getInvertedAbsoluteTransformundefined &rarr; [Matrix](/classes/2.4/Matrix)


### getAbsoluteTransformundefined &rarr; [Matrix](/classes/2.4/Matrix)


### updateMatrixundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### markAsDirtyundefined &rarr; void


### copyAnimationRangeundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
