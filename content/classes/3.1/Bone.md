---
ID_PAGE: 25190
PG_TITLE: Bone
PG_VERSION: 2.1
---
## Description

class [Bone](/classes/3.1/Bone) extends [Node](/classes/3.1/Node)



## Constructor

## new [Bone](/classes/3.1/Bone)(name, skeleton, parentBone, localMatrix, restPose, baseMatrix, index)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | skeleton | [Skeleton](/classes/3.1/Skeleton) | 
optional | parentBone | Nullable&lt;[Bone](/classes/3.1/Bone)&gt; | 
optional | localMatrix | Nullable&lt;[Matrix](/classes/3.1/Matrix)&gt; | 
optional | restPose | Nullable&lt;[Matrix](/classes/3.1/Matrix)&gt; | 
optional | baseMatrix | Nullable&lt;[Matrix](/classes/3.1/Matrix)&gt; | 
## Members

### name : string


### children : [Bone](/classes/3.1/Bone)[]


### animations : [Animation](/classes/3.1/Animation)[]


### length : number


### position : [Vector3](/classes/3.1/Vector3)


### rotation : [Vector3](/classes/3.1/Vector3)


### rotationQuaternion : [Quaternion](/classes/3.1/Quaternion)


### scaling : [Vector3](/classes/3.1/Vector3)


## Methods

### getSkeleton() &rarr; [Skeleton](/classes/3.1/Skeleton)


### getParent() &rarr; Nullable&lt;[Bone](/classes/3.1/Bone)&gt;


### setParent(parent, updateDifferenceMatrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parent | Nullable&lt;[Bone](/classes/3.1/Bone)&gt; | 
optional | updateDifferenceMatrix | boolean | 
### getLocalMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### getBaseMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### getRestPose() &rarr; [Matrix](/classes/3.1/Matrix)


### returnToRest() &rarr; void


### getWorldMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### getInvertedAbsoluteTransform() &rarr; [Matrix](/classes/3.1/Matrix)


### getAbsoluteTransform() &rarr; [Matrix](/classes/3.1/Matrix)


### updateMatrix(matrix, updateDifferenceMatrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.1/Matrix) | 
optional | updateDifferenceMatrix | boolean | 
### markAsDirty() &rarr; void


### copyAnimationRange(source, rangeName, frameOffset, rescaleAsRequired, skelDimensionsRatio) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Bone](/classes/3.1/Bone) | 
 | rangeName | string | 
 | frameOffset | number | 
optional | rescaleAsRequired | boolean | 
### translate(vec, space, mesh) &rarr; void

Translate the bone in local or world space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vec | [Vector3](/classes/3.1/Vector3) |  The amount to translate the bone.
optional | space | [Space](/classes/3.1/Space) |  The space that the translation is in.
optional | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  The mesh that this bone is attached to.  This is only used in world space.
### setPosition(position, space, mesh) &rarr; void

Set the postion of the bone in local or world space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/3.1/Vector3) |  The position to set the bone.
optional | space | [Space](/classes/3.1/Space) |  The space that the position is in.
optional | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  The mesh that this bone is attached to.  This is only used in world space.
### setAbsolutePosition(position, mesh) &rarr; void

Set the absolute postion of the bone (world space).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/3.1/Vector3) |  The position to set the bone.
optional | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  The mesh that this bone is attached to.
### setScale(x, y, z, scaleChildren) &rarr; void

Set the scale of the bone on the x, y and z axes.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |  The scale of the bone on the x axis. The scale of the bone on the y axis.
 | y | number | 
 | z | number |  The scale of the bone on the z axis.
### scale(x, y, z, scaleChildren) &rarr; void

Scale the bone on the x, y and z axes.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |  The amount to scale the bone on the x axis. The amount to scale the bone on the y axis.
 | y | number | 
 | z | number |  The amount to scale the bone on the z axis.
### setYawPitchRoll(yaw, pitch, roll, space, mesh) &rarr; void

Set the yaw, pitch, and roll of the bone in local or world space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number |  The rotation of the bone on the y axis.
 | pitch | number |  The rotation of the bone on the x axis.
 | roll | number |  The rotation of the bone on the z axis.
optional | space | [Space](/classes/3.1/Space) |  The space that the axes of rotation are in.
### rotate(axis, amount, space, mesh) &rarr; void

Rotate the bone on an axis in local or world space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.1/Vector3) |  The axis to rotate the bone on.
 | amount | number |  The amount to rotate the bone.
optional | space | [Space](/classes/3.1/Space) |  The space that the axis is in.
### setAxisAngle(axis, angle, space, mesh) &rarr; void

Set the rotation of the bone to a particular axis angle in local or world space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.1/Vector3) |  The axis to rotate the bone on.
 | angle | number |  The angle that the bone should be rotated to.
optional | space | [Space](/classes/3.1/Space) |  The space that the axis is in.
### setRotation(rotation, space, mesh) &rarr; void

Set the euler rotation of the bone in local of world space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | rotation | [Vector3](/classes/3.1/Vector3) |  The euler rotation that the bone should be set to.
optional | space | [Space](/classes/3.1/Space) |  The space that the rotation is in.
optional | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  The mesh that this bone is attached to.  This is only used in world space.
### setRotationQuaternion(quat, space, mesh) &rarr; void

Set the quaternion rotation of the bone in local of world space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | quat | [Quaternion](/classes/3.1/Quaternion) |  The quaternion rotation that the bone should be set to.
optional | space | [Space](/classes/3.1/Space) |  The space that the rotation is in.
optional | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  The mesh that this bone is attached to.  This is only used in world space.
### setRotationMatrix(rotMat, space, mesh) &rarr; void

Set the rotation matrix of the bone in local of world space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | rotMat | [Matrix](/classes/3.1/Matrix) |  The rotation matrix that the bone should be set to.
optional | space | [Space](/classes/3.1/Space) |  The space that the rotation is in.
optional | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  The mesh that this bone is attached to.  This is only used in world space.
### getScale() &rarr; [Vector3](/classes/3.1/Vector3)

Get the scale of the bone

@returns the scale of the bone
### getScaleToRef(result) &rarr; void

Copy the scale of the bone to a vector3.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/3.1/Vector3) |  The vector3 to copy the scale to

### getPosition(space, mesh) &rarr; [Vector3](/classes/3.1/Vector3)

Get the position of the bone in local or world space.

@returns The position of the bone

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | space | [Space](/classes/3.1/Space) |  The space that the returned position is in.
optional | mesh | Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt; |  The mesh that this bone is attached to.  This is only used in world space.
### getPositionToRef(space, undefined, mesh, result) &rarr; void

Copy the position of the bone to a vector3 in local or world space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | space | [Space](/classes/3.1/Space) |  The space that the returned position is ior undefined n.
 | mesh | Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt; |  The mesh that this bone is attached to.  This is only used in world space.
 | result | [Vector3](/classes/3.1/Vector3) |  The vector3 to copy the position to.
### getAbsolutePosition(mesh) &rarr; [Vector3](/classes/3.1/Vector3)

Get the absolute position of the bone (world space).

@returns The absolute position of the bone

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt; |  The mesh that this bone is attached to.

### getAbsolutePositionToRef(mesh, result) &rarr; void

Copy the absolute position of the bone (world space) to the result param.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  The mesh that this bone is attached to.
 | result | [Vector3](/classes/3.1/Vector3) |  The vector3 to copy the absolute position to.
### computeAbsoluteTransforms() &rarr; void

Compute the absolute transforms of this bone and its children.
### getDirection(localAxis, mesh) &rarr; [Vector3](/classes/3.1/Vector3)

Get the world direction from an axis that is in the local space of the bone.

@returns The world direction

#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/3.1/Vector3) |  The local direction that is used to compute the world direction.
optional | mesh | Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt; |  The mesh that this bone is attached to.
### getDirectionToRef(localAxis, mesh) &rarr; (localAxis, mesh)

Copy the world direction to a vector3 from an axis that is in the local space of the bone.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/3.1/Vector3) |  The local direction that is used to compute the world direction.
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  The mesh that this bone is attached to.
