---
ID_PAGE: 25190
PG_TITLE: Bone
PG_VERSION: 2.1
---
## Description

class [Bone](/classes/2.5/Bone) extends [Node](/classes/2.5/Node)



## Constructor

## new [Bone](/classes/2.5/Bone)(name, skeleton, parentBone, matrix, restPose)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     Name of the bone
 | skeleton | [Skeleton](/classes/2.5/Skeleton) |     The skeleton the bone belongs to
 | parentBone | [Bone](/classes/2.5/Bone) |     The parent bone of this bone
 | matrix | [Matrix](/classes/2.5/Matrix) |     The update matrix
## Members

### name : string

The bone name

### children : [Bone](/classes/2.5/Bone)[]

Children bones array

### animations : [Animation](/classes/2.5/Animation)[]

Animations of this bone

### length : number



## Methods

### getParent() &rarr; [Bone](/classes/2.5/Bone)

Get the parent bone
### getLocalMatrix() &rarr; [Matrix](/classes/2.5/Matrix)

Get the local matrix
### getBaseMatrix() &rarr; [Matrix](/classes/2.5/Matrix)

Get the base matrix
### getRestPose() &rarr; [Matrix](/classes/2.5/Matrix)


### returnToRest() &rarr; void


### getWorldMatrix() &rarr; [Matrix](/classes/2.5/Matrix)

Get the world matrix
### getInvertedAbsoluteTransform() &rarr; [Matrix](/classes/2.5/Matrix)

Get the inverted absolute transform
### getAbsoluteTransform() &rarr; [Matrix](/classes/2.5/Matrix)


### updateMatrix(matrix, updateDifferenceMatrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.5/Matrix) |     The update matrix
optional | updateDifferenceMatrix | boolean | 
### markAsDirty() &rarr; void


### copyAnimationRange(source, rangeName, frameOffset, rescaleAsRequired, skelDimensionsRatio) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Bone](/classes/2.5/Bone) |   
 | rangeName | string |   
 | frameOffset | number |   
optional | rescaleAsRequired | boolean |  
### translate(vec, space, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vec | [Vector3](/classes/2.5/Vector3) | 
optional | space | [Space](/classes/2.5/Space) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### setPosition(position, space, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/2.5/Vector3) | 
optional | space | [Space](/classes/2.5/Space) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### setAbsolutePosition(position, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/2.5/Vector3) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### setScale(x, y, z, scaleChildren) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### scale(x, y, z, scaleChildren) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### setYawPitchRoll(yaw, pitch, roll, space, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number | 
 | pitch | number | 
 | roll | number | 
optional | space | [Space](/classes/2.5/Space) | 
### rotate(axis, amount, space, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.5/Vector3) | 
 | amount | number | 
optional | space | [Space](/classes/2.5/Space) | 
### setAxisAngle(axis, angle, space, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.5/Vector3) | 
 | angle | number | 
optional | space | [Space](/classes/2.5/Space) | 
### setRotation(rotation, space, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | rotation | [Vector3](/classes/2.5/Vector3) | 
optional | space | [Space](/classes/2.5/Space) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### setRotationQuaternion(quat, space, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | quat | [Quaternion](/classes/2.5/Quaternion) | 
optional | space | [Space](/classes/2.5/Space) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### setRotationMatrix(rotMat, space, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | rotMat | [Matrix](/classes/2.5/Matrix) | 
optional | space | [Space](/classes/2.5/Space) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### getScale() &rarr; [Vector3](/classes/2.5/Vector3)


### getScaleToRef(result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/2.5/Vector3) | 

### getPosition(space, mesh) &rarr; [Vector3](/classes/2.5/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | space | [Space](/classes/2.5/Space) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### getPositionToRef(space, mesh, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | space | [Space](/classes/2.5/Space) | 
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
 | result | [Vector3](/classes/2.5/Vector3) | 
### getAbsolutePosition(mesh) &rarr; [Vector3](/classes/2.5/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 

### getAbsolutePositionToRef(mesh, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
 | result | [Vector3](/classes/2.5/Vector3) | 
### computeAbsoluteTransforms() &rarr; void


### getDirection(localAxis, mesh) &rarr; [Vector3](/classes/2.5/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/2.5/Vector3) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### getDirectionToRef(localAxis, mesh, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/2.5/Vector3) | 
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
 | result | [Vector3](/classes/2.5/Vector3) | 
### getRotation(space, mesh) &rarr; [Vector3](/classes/2.5/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | space | [Space](/classes/2.5/Space) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### getRotationToRef(space, mesh, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | space | [Space](/classes/2.5/Space) | 
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
 | result | [Vector3](/classes/2.5/Vector3) | 
### getRotationQuaternion(space, mesh) &rarr; [Quaternion](/classes/2.5/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | space | [Space](/classes/2.5/Space) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### getRotationQuaternionToRef(space, mesh, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | space | [Space](/classes/2.5/Space) | 
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
 | result | [Quaternion](/classes/2.5/Quaternion) | 
### getRotationMatrix(space, mesh) &rarr; [Matrix](/classes/2.5/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | space | [Space](/classes/2.5/Space) | 
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### getRotationMatrixToRef(space, mesh, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | space | [Space](/classes/2.5/Space) | 
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
 | result | [Matrix](/classes/2.5/Matrix) | 
### getAbsolutePositionFromLocal(position, mesh) &rarr; [Vector3](/classes/2.5/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/2.5/Vector3) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### getAbsolutePositionFromLocalToRef(position, mesh, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/2.5/Vector3) | 
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
 | result | [Vector3](/classes/2.5/Vector3) | 
### getLocalPositionFromAbsolute(position, mesh) &rarr; [Vector3](/classes/2.5/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/2.5/Vector3) | 
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
### getLocalPositionFromAbsoluteToRef(position, mesh, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/2.5/Vector3) | 
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) | 
 | result | [Vector3](/classes/2.5/Vector3) | 
