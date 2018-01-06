---
TAGS:
---
## Description

class [TransformNode](/classes/3.1/TransformNode) extends [Node](/classes/3.1/Node)



## Constructor

## new [TransformNode](/classes/3.1/TransformNode)(name, scene, isPure)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
optional | scene | Nullable&lt;[Scene](/classes/3.1/Scene)&gt; | 
optional | isPure | boolean | 
## Members

### static BILLBOARDMODE_NONE : number


### static BILLBOARDMODE_X : number


### static BILLBOARDMODE_Y : number


### static BILLBOARDMODE_Z : number


### static BILLBOARDMODE_ALL : number


### billboardMode : number


### scalingDeterminant : number


### infiniteDistance : boolean


### position : [Vector3](/classes/3.1/Vector3)


### onAfterWorldMatrixUpdateObservable : [Observable](/classes/3.1/Observable)&lt;[TransformNode](/classes/3.1/TransformNode)&gt;

An event triggered after the world matrix is updated

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### rotation : [Vector3](/classes/3.1/Vector3)

Rotation property : a [Vector3](/classes/3.1/Vector3) depicting the rotation value in radians around each local axis X, Y, Z.

If rotation quaternion is set, this [Vector3](/classes/3.1/Vector3) will (almost always) be the Zero vector!

Default : (0.0, 0.0, 0.0)
### scaling : [Vector3](/classes/3.1/Vector3)

Scaling property : a [Vector3](/classes/3.1/Vector3) depicting the mesh scaling along each local axis X, Y, Z.

Default : (1.0, 1.0, 1.0)

Scaling property : a [Vector3](/classes/3.1/Vector3) depicting the mesh scaling along each local axis X, Y, Z.

Default : (1.0, 1.0, 1.0)
### rotationQuaternion : Nullable&lt;[Quaternion](/classes/3.1/Quaternion)&gt;

Rotation [Quaternion](/classes/3.1/Quaternion) property : this a [Quaternion](/classes/3.1/Quaternion) object depicting the mesh rotation by using a unit quaternion.

It's null by default.

If set, only the rotationQuaternion is then used to compute the mesh rotation and its property `.rotation\ is then ignored and set to (0.0, 0.0, 0.0)
### worldMatrixFromCache : [Matrix](/classes/3.1/Matrix)

Returns directly the latest state of the mesh World matrix.

A [Matrix](/classes/3.1/Matrix) is returned.
### absolutePosition : [Vector3](/classes/3.1/Vector3)

Returns the current mesh absolute position.

Retuns a [Vector3](/classes/3.1/Vector3).
### this : ()


### isWorldMatrixFrozen : boolean

True if the World matrix has been frozen.

Returns a boolean.
### nonUniformScaling : boolean


## Methods

### getWorldMatrix() &rarr; [Matrix](/classes/3.1/Matrix)

Returns the latest update of the World matrix

Returns a [Matrix](/classes/3.1/Matrix).
### updatePoseMatrix(matrix) &rarr; [TransformNode](/classes/3.1/TransformNode)

Copies the paramater passed [Matrix](/classes/3.1/Matrix) into the mesh Pose matrix.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.1/Matrix) | 

### getPoseMatrix() &rarr; [Matrix](/classes/3.1/Matrix)

Returns the mesh Pose matrix.

Returned object : [Matrix](/classes/3.1/Matrix)
### markAsDirty(property) &rarr; [TransformNode](/classes/3.1/TransformNode)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | property | string | 

### setPivotMatrix(matrix, postMultiplyPivotMatrix) &rarr; [TransformNode](/classes/3.1/TransformNode)

Sets a new pivot matrix to the mesh.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.1/Matrix) | 
optional | postMultiplyPivotMatrix | boolean | 
### getPivotMatrix() &rarr; [Matrix](/classes/3.1/Matrix)

Returns the mesh pivot matrix.

Default : Identity.

A [Matrix](/classes/3.1/Matrix) is returned.
### freezeWorldMatrix() &rarr; [TransformNode](/classes/3.1/TransformNode)

Prevents the World matrix to be computed any longer.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).
### unfreezeWorldMatrix() &rarr; 

Allows back the World matrix computation.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).
### getAbsolutePosition() &rarr; [Vector3](/classes/3.1/Vector3)

Retuns the mesh absolute position in the World.

Returns a [Vector3](/classes/3.1/Vector3).
### setAbsolutePosition(absolutePosition) &rarr; [TransformNode](/classes/3.1/TransformNode)

Sets the mesh absolute position in the World from a [Vector3](/classes/3.1/Vector3) or an Array(3).

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | absolutePosition | [Vector3](/classes/3.1/Vector3) | 

### setPositionWithLocalVector(vector3) &rarr; [TransformNode](/classes/3.1/TransformNode)

Sets the mesh position in its local space.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/3.1/Vector3) | 

### getPositionExpressedInLocalSpace() &rarr; [Vector3](/classes/3.1/Vector3)

Returns the mesh position in the local space from the current World matrix values.

Returns a new [Vector3](/classes/3.1/Vector3).
### locallyTranslate(vector3) &rarr; [TransformNode](/classes/3.1/TransformNode)

Translates the mesh along the passed [Vector3](/classes/3.1/Vector3) in its local space.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/3.1/Vector3) | 

### lookAt(targetPoint, yawCor, pitchCor, rollCor, space) &rarr; [TransformNode](/classes/3.1/TransformNode)

Orients a mesh towards a target point. [Mesh](/classes/3.1/Mesh) must be drawn facing user.

@returns the [TransformNode](/classes/3.1/TransformNode).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | targetPoint | [Vector3](/classes/3.1/Vector3) |  the position (must be in same space as current mesh) to look at
optional | yawCor | number |  optional yaw (y-axis) correction in radians
optional | pitchCor | number |  optional pitch (x-axis) correction in radians
optional | rollCor | number |  optional roll (z-axis) correction in radians
### getDirection(localAxis) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) what is the localAxis, expressed in the mesh local space, rotated like the mesh.

This [Vector3](/classes/3.1/Vector3) is expressed in the World space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/3.1/Vector3) | 

### getDirectionToRef(localAxis, result) &rarr; [TransformNode](/classes/3.1/TransformNode)

Sets the [Vector3](/classes/3.1/Vector3) "result" as the rotated [Vector3](/classes/3.1/Vector3) "localAxis" in the same rotation than the mesh.

localAxis is expressed in the mesh local space.

result is computed in the Wordl space from the mesh World matrix.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/3.1/Vector3) | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### setPivotPoint(point, space) &rarr; [TransformNode](/classes/3.1/TransformNode)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/3.1/Vector3) | 
optional | space | [Space](/classes/3.1/Space) | 
### getPivotPoint() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set with the mesh pivot point coordinates in the local space.
### getPivotPointToRef(result) &rarr; [TransformNode](/classes/3.1/TransformNode)

Sets the passed [Vector3](/classes/3.1/Vector3) "result" with the coordinates of the mesh pivot point in the local space.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/3.1/Vector3) | 

### getAbsolutePivotPoint() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set with the mesh pivot point World coordinates.
### getAbsolutePivotPointToRef(result) &rarr; [TransformNode](/classes/3.1/TransformNode)

Sets the [Vector3](/classes/3.1/Vector3) "result" coordinates with the mesh pivot point World coordinates.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/3.1/Vector3) | 

### setParent(node) &rarr; [TransformNode](/classes/3.1/TransformNode)

Defines the passed node as the parent of the current node.

The node will remain exactly where it is and its position / rotation will be updated accordingly

Returns the [TransformNode](/classes/3.1/TransformNode).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | node | Nullable&lt;[Node](/classes/3.1/Node)&gt; | 

### attachToBone(bone, affectedTransformNode) &rarr; [TransformNode](/classes/3.1/TransformNode)

Attach the current [TransformNode](/classes/3.1/TransformNode) to another [TransformNode](/classes/3.1/TransformNode) associated with a bone

#### Parameters
 | Name | Type | Description
---|---|---|---
 | bone | [Bone](/classes/3.1/Bone) |  [Bone](/classes/3.1/Bone) affecting the [TransformNode](/classes/3.1/TransformNode)
 | affectedTransformNode | [TransformNode](/classes/3.1/TransformNode) |  [TransformNode](/classes/3.1/TransformNode) associated with the bone
### detachFromBone() &rarr; [TransformNode](/classes/3.1/TransformNode)


### rotate(axis, amount, space) &rarr; [TransformNode](/classes/3.1/TransformNode)

Rotates the mesh around the axis vector for the passed angle (amount) expressed in radians, in the given space.

space (default LOCAL) can be either BABYLON.[Space](/classes/3.1/Space).LOCAL, either BABYLON.[Space](/classes/3.1/Space).WORLD.

Note that the property `rotationQuaternion` is then automatically updated and the property `rotation` is set to (0,0,0) and no longer used.

The passed axis is also normalized.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.1/Vector3) | 
 | amount | number | 
optional | space | [Space](/classes/3.1/Space) | 
### rotateAround(point, axis, amount) &rarr; [TransformNode](/classes/3.1/TransformNode)

Rotates the mesh around the axis vector for the passed angle (amount) expressed in radians, in world space.

Note that the property `rotationQuaternion` is then automatically updated and the property `rotation` is set to (0,0,0) and no longer used.

The passed axis is also normalized.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

Method is based on http://www.euclideanspace.com/maths/geometry/affine/aroundPoint/index.htm

#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/3.1/Vector3) | 
 | axis | [Vector3](/classes/3.1/Vector3) | 
 | amount | number | 
### translate(axis, distance, space) &rarr; [TransformNode](/classes/3.1/TransformNode)

Translates the mesh along the axis vector for the passed distance in the given space.

space (default LOCAL) can be either BABYLON.[Space](/classes/3.1/Space).LOCAL, either BABYLON.[Space](/classes/3.1/Space).WORLD.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.1/Vector3) | 
 | distance | number | 
optional | space | [Space](/classes/3.1/Space) | 
### addRotation(x, y, z) &rarr; [TransformNode](/classes/3.1/TransformNode)

Adds a rotation step to the mesh current rotation.

x, y, z are Euler angles expressed in radians.

This methods updates the current mesh rotation, either mesh.rotation, either mesh.rotationQuaternion if it's set.

This means this rotation is made in the mesh local space only.

It's useful to set a custom rotation order different from the BJS standard one YXZ.

Example : this rotates the mesh first around its local X axis, then around its local Z axis, finally around its local Y axis.

```javascript

mesh.addRotation(x1, 0, 0).addRotation(0, 0, z2).addRotation(0, 0, y3);

```

Note that `addRotation()` accumulates the passed rotation values to the current ones and computes the .rotation or .rotationQuaternion updated values.

Under the hood, only quaternions are used. So it's a little faster is you use .rotationQuaternion because it doesn't need to translate them back to Euler angles.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### computeWorldMatrix(force) &rarr; [Matrix](/classes/3.1/Matrix)

Computes the mesh World matrix and returns it.

If the mesh world matrix is frozen, this computation does nothing more than returning the last frozen values.

If the parameter `force` is let to `false` (default), the current cached World matrix is returned.

If the parameter `force`is set to `true`, the actual computation is done.

Returns the mesh World [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | 

### registerAfterWorldMatrixUpdate(func) &rarr; [TransformNode](/classes/3.1/TransformNode)

If you'd like to be called back after the mesh position, rotation or scaling has been updated.

        * Returns the [TransformNode](/classes/3.1/TransformNode).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func |  | mesh | [TransformNode](/classes/3.1/TransformNode) | 

 | : callback function to add
### unregisterAfterWorldMatrixUpdate(func) &rarr; [TransformNode](/classes/3.1/TransformNode)

Removes a registered callback function.

Returns the [TransformNode](/classes/3.1/TransformNode).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func |  | mesh | [TransformNode](/classes/3.1/TransformNode) | 

 | 
### clone(name, newParent, doNotCloneChildren) &rarr; Nullable&lt;[TransformNode](/classes/3.1/TransformNode)&gt;

Clone the current transform node

Returns the new transform node

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  Name of the new clone
 | newParent | [Node](/classes/3.1/Node) |  New parent for the clone
optional | doNotCloneChildren | boolean |  Do not clone children hierarchy
### serialize(currentSerializationObject) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | currentSerializationObject | any | 

### static Parse(parsedTransformNode, scene, rootUrl) &rarr; [TransformNode](/classes/3.1/TransformNode)

Returns a new [TransformNode](/classes/3.1/TransformNode) object parsed from the source provided.

The parameter `parsedMesh` is the source.

The parameter `rootUrl` is a string, it's the root URL to prefix the `delayLoadingFile` property with

#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedTransformNode | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
### dispose(doNotRecurse) &rarr; void

Disposes the [TransformNode](/classes/3.1/TransformNode).

By default, all the children are also disposed unless the parameter `doNotRecurse` is set to `true`.

Returns nothing.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | 

