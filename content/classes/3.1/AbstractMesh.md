---
ID_PAGE: 25145
PG_TITLE: AbstractMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [AbstractMesh](/classes/3.1/AbstractMesh) extends [Node](/classes/3.1/Node)



## Constructor

## new [AbstractMesh](/classes/3.1/AbstractMesh)(name, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### static OCCLUSION_TYPE_NONE : number



### static OCCLUSION_TYPE_OPTIMISTIC : number



### static OCCLUSION_TYPE_STRICT : number



### static OCCLUSION_ALGORITHM_TYPE_ACCURATE : number



### static OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE : number



### static BILLBOARDMODE_NONE : number



### static BILLBOARDMODE_X : number



### static BILLBOARDMODE_Y : number



### static BILLBOARDMODE_Z : number



### static BILLBOARDMODE_ALL : number



### facetNb : number

Read-only : the number of facets in the mesh

### partitioningSubdivisions : number

The number (integer) of subdivisions per axis in the partioning space

### partitioningBBoxRatio : number

The ratio (float) to apply to the bouding box size to set to the partioning space.

Ex : 1.01 (default) the partioning space is 1% bigger than the bounding box.

### isFacetDataEnabled : boolean

Read-only boolean : is the feature facetData enabled ?

### onCollideObservable : [Observable](/classes/3.1/Observable)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;

An event triggered when this mesh collides with another one

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onCollide : () =&gt; void



### onCollisionPositionChangeObservable : [Observable](/classes/3.1/Observable)&lt;[Vector3](/classes/3.1/Vector3)&gt;

An event triggered when the collision's position changes

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onCollisionPositionChange : () =&gt; void



### onAfterWorldMatrixUpdateObservable : [Observable](/classes/3.1/Observable)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;

An event triggered after the world matrix is updated

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onMaterialChangedObservable : [Observable](/classes/3.1/Observable)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;

An event triggered when material is changed

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### definedFacingForward : boolean



### position : [Vector3](/classes/3.1/Vector3)



### occlusionQueryAlgorithmType : number

This property determines the type of occlusion query algorithm to run in WebGl, you can use:

[AbstractMesh](/classes/3.1/AbstractMesh).OCCLUSION_ALGORITHM_TYPE_ACCURATE which is mapped to GL_ANY_SAMPLES_PASSED.

or

[AbstractMesh](/classes/3.1/AbstractMesh).OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE (Default Value) which is mapped to GL_ANY_SAMPLES_PASSED_CONSERVATIVE which is a false positive algorithm that is faster than GL_ANY_SAMPLES_PASSED but less accurate.

for more info check WebGl documentations

### occlusionType : number

This property is responsible for starting the occlusion query within the [Mesh](/classes/3.1/Mesh) or not, this property is also used     to determine what should happen when the occlusionRetryCount is reached. It has supports 3 values:

OCCLUSION_TYPE_NONE (Default Value): this option means no occlusion query whith the [Mesh](/classes/3.1/Mesh).

OCCLUSION_TYPE_OPTIMISTIC: this option is means use occlusion query and if occlusionRetryCount is reached and the query is broken show the mesh.

OCCLUSION_TYPE_STRICT: this option is means use occlusion query and if occlusionRetryCount is reached and the query is broken restore the last state of the mesh occlusion if the mesh was visible then show the mesh if was hidden then hide don't show.

### occlusionRetryCount : number

This number indicates the number of allowed retries before stop the occlusion query, this is useful if the        occlusion query is taking long time before to the query result is retireved, the query result indicates if the object is visible within the scene or not and based on that Babylon.Js engine decideds to show or hide the object.

The default value is -1 which means don't break the query and wait till the result.

### isOccluded : boolean

Property isOccluded : Gets or sets whether the mesh is occluded or not, it is used also to set the intial state of the mesh to be occluded or not.

### isOcclusionQueryInProgress : boolean

Flag to check the progress status of the query

### billboardMode : number



### visibility : number



### alphaIndex : number



### infiniteDistance : boolean



### isVisible : boolean



### isPickable : boolean



### showBoundingBox : boolean



### showSubMeshesBoundingBox : boolean



### isBlocker : boolean



### enablePointerMoveEvents : boolean



### renderingGroupId : number



### material : [Material](/classes/3.1/Material)



### receiveShadows : boolean



### renderOutline : boolean



### outlineColor : [Color3](/classes/3.1/Color3)



### outlineWidth : number



### renderOverlay : boolean



### overlayColor : [Color3](/classes/3.1/Color3)



### overlayAlpha : number



### hasVertexAlpha : boolean



### useVertexColors : boolean



### computeBonesUsingShaders : boolean



### numBoneInfluencers : number



### applyFog : boolean



### scalingDeterminant : number



### useOctreeForRenderingSelection : boolean



### useOctreeForPicking : boolean



### useOctreeForCollisions : boolean



### layerMask : number



### alwaysSelectAsActiveMesh : boolean

True if the mesh must be rendered in any case.

### actionManager : Nullable&lt;[ActionManager](/classes/3.1/ActionManager)&gt;

This scene's action manager

@type {BABYLON.[ActionManager](/classes/3.1/ActionManager)}

### physicsImpostor : Nullable&lt;[PhysicsImpostor](/classes/3.1/PhysicsImpostor)&gt;



### ellipsoid : [Vector3](/classes/3.1/Vector3)



### ellipsoidOffset : [Vector3](/classes/3.1/Vector3)



### collisionMask : number



### collisionGroup : number



### edgesWidth : number



### edgesColor : [Color4](/classes/3.1/Color4)



### subMeshes : [SubMesh](/classes/3.1/SubMesh)[]



### skeleton : Nullable&lt;[Skeleton](/classes/3.1/Skeleton)&gt;



### rotation : [Vector3](/classes/3.1/Vector3)

Rotation property : a [Vector3](/classes/3.1/Vector3) depicting the rotation value in radians around each local axis X, Y, Z.

If rotation quaternion is set, this [Vector3](/classes/3.1/Vector3) will (almost always) be the Zero vector!

Default : (0.0, 0.0, 0.0)

### scaling : [Vector3](/classes/3.1/Vector3)

Scaling property : a [Vector3](/classes/3.1/Vector3) depicting the mesh scaling along each local axis X, Y, Z.

Default : (1.0, 1.0, 1.0)

### rotationQuaternion : Nullable&lt;[Quaternion](/classes/3.1/Quaternion)&gt;

Rotation [Quaternion](/classes/3.1/Quaternion) property : this a [Quaternion](/classes/3.1/Quaternion) object depicting the mesh rotation by using a unit quaternion.

It's null by default.

If set, only the rotationQuaternion is then used to compute the mesh rotation and its property `.rotation\ is then ignored and set to (0.0, 0.0, 0.0)

### isBlocked : boolean

Returns true if the mesh is blocked. Used by the class [Mesh](/classes/3.1/Mesh).

Returns the boolean `false` by default.

### Float32Array : undefined



### useBones : boolean



### worldMatrixFromCache : [Matrix](/classes/3.1/Matrix)

Returns directly the last state of the mesh World matrix.

A [Matrix](/classes/3.1/Matrix) is returned.

### absolutePosition : [Vector3](/classes/3.1/Vector3)

Returns the current mesh absolute position.

Retuns a [Vector3](/classes/3.1/Vector3).

### this : ()



### isWorldMatrixFrozen : boolean

True if the World matrix has been frozen.

Returns a boolean.

### checkCollisions : boolean

Property checkCollisions : Boolean, whether the camera should check the collisions against the mesh.

Default `false`.

### this : undefined



## Methods

### isDisposed() &rarr; boolean

Boolean : true if the mesh has been disposed.
### getClassName() &rarr; string

Returns the string "[AbstractMesh](/classes/3.1/AbstractMesh)"
### toString(fullDetails) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | fullDetails | boolean | 

### updatePoseMatrix(matrix) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Copies the paramater passed [Matrix](/classes/3.1/Matrix) into the mesh Pose matrix.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.1/Matrix) | 

### getPoseMatrix() &rarr; [Matrix](/classes/3.1/Matrix)

Returns the mesh Pose matrix.

Returned object : [Matrix](/classes/3.1/Matrix)
### disableEdgesRendering() &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Disables the mesh edger rendering mode.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).
### enableEdgesRendering(epsilon, checkVerticesInsteadOfIndices) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Enables the edge rendering mode on the mesh.

This mode makes the mesh edges visible.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | epsilon | number | 
optional | checkVerticesInsteadOfIndices | boolean | 
### getLOD(camera) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Returns the mesh itself by default, used by the class [Mesh](/classes/3.1/Mesh).

Returned type : [AbstractMesh](/classes/3.1/AbstractMesh)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/3.1/Camera) | 

### getTotalVertices() &rarr; number

Returns 0 by default, used by the class [Mesh](/classes/3.1/Mesh).

Returns an integer.
### getIndices() &rarr; Nullable&lt;IndicesArray&gt;

Returns null by default, used by the class [Mesh](/classes/3.1/Mesh).

Returned type : integer array
### getVerticesData(kind) &rarr; Nullable&lt;number[]&gt;

Returns the array of the requested vertex data kind. Used by the class [Mesh](/classes/3.1/Mesh). Returns null here.

Returned type : float array or Float32Array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

### setVerticesData(kind, data, Float32Array, updatable, stride) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Sets the vertex data of the mesh geometry for the requested `kind`.

If the mesh has no geometry, a new [Geometry](/classes/3.1/Geometry) object is set to the mesh and then passed this vertex data.

The `data` are either a numeric array either a Float32Array.

The parameter `updatable` is passed as is to the underlying [Geometry](/classes/3.1/Geometry) object constructor (if initianilly none) or updater.

The parameter `stride` is an optional positive integer, it is usually automatically deducted from the `kind` (3 for positions or normals, 2 for UV, etc).

Note that a new underlying [VertexBuffer](/classes/3.1/VertexBuffer) object is created each call.

If the `kind` is the `PositionKind`, the mesh [BoundingInfo](/classes/3.1/BoundingInfo) is renewed, so the bounding box and sphere, and the mesh World [Matrix](/classes/3.1/Matrix) is recomputed.

         * Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesWeightsExtraKind

         * Returns the [Mesh](/classes/3.1/Mesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | number[] or Float32Array | 
optional | updatable | boolean | 
### updateVerticesData(kind, data, Float32Array, updateExtends, makeItUnique) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Updates the existing vertex data of the mesh geometry for the requested `kind`.

If the mesh has no geometry, it is simply returned as it is.

The `data` are either a numeric array either a Float32Array.

No new underlying [VertexBuffer](/classes/3.1/VertexBuffer) object is created.

If the `kind` is the `PositionKind` and if `updateExtends` is true, the mesh [BoundingInfo](/classes/3.1/BoundingInfo) is renewed, so the bounding box and sphere, and the mesh World [Matrix](/classes/3.1/Matrix) is recomputed.

If the parameter `makeItUnique` is true, a new global geometry is created from this positions and is set to the mesh.

         * Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesWeightsExtraKind

         * Returns the [Mesh](/classes/3.1/Mesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | number[] or Float32Array | 
optional | updateExtends | boolean | 
### setIndices(indices, totalVertices) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Sets the mesh indices.

Expects an array populated with integers or a typed array (Int32Array, Uint32Array, Uint16Array).

If the mesh has no geometry, a new [Geometry](/classes/3.1/Geometry) object is created and set to the mesh.

This method creates a new index buffer each call.

Returns the [Mesh](/classes/3.1/Mesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | IndicesArray | 
 | totalVertices | Nullable&lt;number&gt; | 
### isVerticesDataPresent(kind) &rarr; boolean

Returns a boolean

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

### getBoundingInfo() &rarr; Nullable&lt;[BoundingInfo](/classes/3.1/BoundingInfo)&gt;

Returns the mesh [BoundingInfo](/classes/3.1/BoundingInfo) object or creates a new one and returns it if undefined.

Returns a [BoundingInfo](/classes/3.1/BoundingInfo)
### setBoundingInfo(boundingInfo) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Sets a mesh new object [BoundingInfo](/classes/3.1/BoundingInfo).

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](/classes/3.1/BoundingInfo) | 

### getWorldMatrix() &rarr; [Matrix](/classes/3.1/Matrix)

Returns the last update of the World matrix

Returns a [Matrix](/classes/3.1/Matrix).
### freezeWorldMatrix() &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Prevents the World matrix to be computed any longer.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).
### unfreezeWorldMatrix() &rarr; 

Allows back the World matrix computation.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).
### rotate(axis, amount, space) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

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
### rotateAround(point, axis, amount) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

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
### translate(axis, distance, space) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Translates the mesh along the axis vector for the passed distance in the given space.

space (default LOCAL) can be either BABYLON.[Space](/classes/3.1/Space).LOCAL, either BABYLON.[Space](/classes/3.1/Space).WORLD.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.1/Vector3) | 
 | distance | number | 
optional | space | [Space](/classes/3.1/Space) | 
### addRotation(x, y, z) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

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
### getAbsolutePosition() &rarr; [Vector3](/classes/3.1/Vector3)

Retuns the mesh absolute position in the World.

Returns a [Vector3](/classes/3.1/Vector3).
### setAbsolutePosition(absolutePosition) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Sets the mesh absolute position in the World from a [Vector3](/classes/3.1/Vector3) or an Array(3).

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | absolutePosition | [Vector3](/classes/3.1/Vector3) | 

### movePOV(amountRight, amountUp, amountForward) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Perform relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

         * Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | amountRight | number | 
 | amountUp | number | 
 | amountForward | number | 
### calcMovePOV(amountRight, amountUp, amountForward) &rarr; [Vector3](/classes/3.1/Vector3)

Calculate relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

         * Returns a new [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | amountRight | number | 
 | amountUp | number | 
 | amountForward | number | 
### rotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Perform relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

         * Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number | 
 | twirlClockwise | number | 
 | tiltRight | number | 
### calcRotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; [Vector3](/classes/3.1/Vector3)

Calculate relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

         * Returns a new [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number | 
 | twirlClockwise | number | 
 | tiltRight | number | 
### setPivotMatrix(matrix, postMultiplyPivotMatrix) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

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
### markAsDirty(property) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | property | string | 

### getHierarchyBoundingVectors() &rarr; { min: [Vector3](/classes/3.1/Vector3),  max: [Vector3](/classes/3.1/Vector3) }

Return the minimum and maximum world vectors of the entire hierarchy under current mesh
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

### registerAfterWorldMatrixUpdate(func) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

If you'd like to be called back after the mesh position, rotation or scaling has been updated.

        * Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; void | : callback function to add

### unregisterAfterWorldMatrixUpdate(func) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Removes a registered callback function.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; void | 

### setPositionWithLocalVector(vector3) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Sets the mesh position in its local space.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/3.1/Vector3) | 

### getPositionExpressedInLocalSpace() &rarr; [Vector3](/classes/3.1/Vector3)

Returns the mesh position in the local space from the current World matrix values.

Returns a new [Vector3](/classes/3.1/Vector3).
### locallyTranslate(vector3) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Translates the mesh along the passed [Vector3](/classes/3.1/Vector3) in its local space.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/3.1/Vector3) | 

### lookAt(targetPoint, yawCor, pitchCor, rollCor, space) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | targetPoint | [Vector3](/classes/3.1/Vector3) | 
optional | yawCor | number | 
optional | pitchCor | number | 
optional | rollCor | number | 
### attachToBone(bone, affectedMesh) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | bone | [Bone](/classes/3.1/Bone) | 
 | affectedMesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
### detachFromBone() &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)


### isInFrustum(frustumPlanes) &rarr; boolean

Returns `true` if the mesh is within the frustum defined by the passed array of planes.

A mesh is in the frustum if its bounding box intersects the frustum.

Boolean returned.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 

### isCompletelyInFrustum(frustumPlanes) &rarr; boolean

Returns `true` if the mesh is completely in the frustum defined be the passed array of planes.

A mesh is completely in the frustum if its bounding box it completely inside the frustum.

Boolean returned.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 

### intersectsMesh(mesh, [SolidParticle](/classes/3.1/SolidParticle), precise, includeDescendants) &rarr; boolean

True if the mesh intersects another mesh or a [SolidParticle](/classes/3.1/SolidParticle) object.

Unless the parameter `precise` is set to `true` the intersection is computed according to [Axis](/classes/3.1/Axis) Aligned Bounding Boxes (AABB), else according to OBB (Oriented BBoxes)

includeDescendants can be set to true to test if the mesh defined in parameters intersects with the current mesh or any child meshes

Returns a boolean.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) or [SolidParticle](/classes/3.1/SolidParticle) | 
optional | precise | boolean | 
optional | includeDescendants | boolean | 
### intersectsPoint(point) &rarr; boolean

Returns true if the passed point ([Vector3](/classes/3.1/Vector3)) is inside the mesh bounding box.

Returns a boolean.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/3.1/Vector3) | 

### getPhysicsImpostor() &rarr; Nullable&lt;[PhysicsImpostor](/classes/3.1/PhysicsImpostor)&gt;


### getPositionInCameraSpace(camera) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | Nullable&lt;[Camera](/classes/3.1/Camera)&gt; | 

### getDistanceToCamera(camera) &rarr; number

Returns the distance from the mesh to the active camera.

Returns a float.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | Nullable&lt;[Camera](/classes/3.1/Camera)&gt; | 

### applyImpulse(force, contactPoint) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | force | [Vector3](/classes/3.1/Vector3) | 
 | contactPoint | [Vector3](/classes/3.1/Vector3) | 
### setPhysicsLinkWith(otherMesh, pivot1, pivot2, options) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherMesh | [Mesh](/classes/3.1/Mesh) | 
 | pivot1 | [Vector3](/classes/3.1/Vector3) | 
 | pivot2 | [Vector3](/classes/3.1/Vector3) | 
### moveWithCollisions(displacement) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | displacement | [Vector3](/classes/3.1/Vector3) | 

### createOrUpdateSubmeshesOctree(maxCapacity, maxDepth) &rarr; [Octree](/classes/3.1/Octree)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;

This function will create an octree to help to select the right submeshes for rendering, picking and collision computations.

Please note that you must have a decent number of submeshes to get performance improvements when using an octree.

Returns an [Octree](/classes/3.1/Octree) of submeshes.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number | 
optional | maxDepth | number | 
### intersects(ray, fastCheck) &rarr; [PickingInfo](/classes/3.1/PickingInfo)

Checks if the passed [Ray](/classes/3.1/Ray) intersects with the mesh.

Returns an object [PickingInfo](/classes/3.1/PickingInfo).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.1/Ray) | 
optional | fastCheck | boolean | 
### clone(name, newParent, doNotCloneChildren) &rarr; Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;

Clones the mesh, used by the class [Mesh](/classes/3.1/Mesh).

Just returns `null` for an [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | newParent | [Node](/classes/3.1/Node) | 
optional | doNotCloneChildren | boolean | 
### releaseSubMeshes() &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Disposes all the mesh submeshes.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).
### dispose(doNotRecurse) &rarr; void

Disposes the [AbstractMesh](/classes/3.1/AbstractMesh).

Some internal references are kept for further use.

By default, all the mesh children are also disposed unless the parameter `doNotRecurse` is set to `true`.

Returns nothing.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | 

### getDirection(localAxis) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) what is the localAxis, expressed in the mesh local space, rotated like the mesh.

This [Vector3](/classes/3.1/Vector3) is expressed in the World space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/3.1/Vector3) | 

### getDirectionToRef(localAxis, result) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Sets the [Vector3](/classes/3.1/Vector3) "result" as the rotated [Vector3](/classes/3.1/Vector3) "localAxis" in the same rotation than the mesh.

localAxis is expressed in the mesh local space.

result is computed in the Wordl space from the mesh World matrix.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/3.1/Vector3) | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### setPivotPoint(point, space) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/3.1/Vector3) | 
optional | space | [Space](/classes/3.1/Space) | 
### getPivotPoint() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set with the mesh pivot point coordinates in the local space.
### getPivotPointToRef(result) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Sets the passed [Vector3](/classes/3.1/Vector3) "result" with the coordinates of the mesh pivot point in the local space.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/3.1/Vector3) | 

### getAbsolutePivotPoint() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set with the mesh pivot point World coordinates.
### setParent(mesh) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Defines the passed mesh as the parent of the current mesh.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt; | 

### addChild(mesh) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Adds the passed mesh as a child to the current mesh.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### removeChild(mesh) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Removes the passed mesh from the current mesh children list.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### getAbsolutePivotPointToRef(result) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Sets the [Vector3](/classes/3.1/Vector3) "result" coordinates with the mesh pivot point World coordinates.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/3.1/Vector3) | 

### updateFacetData() &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Updates the mesh facetData arrays and the internal partitioning when the mesh is morphed or updated.

This method can be called within the render loop.

You don't need to call this method by yourself in the render loop when you update/morph a mesh with the methods CreateXXX() as they automatically manage this computation.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).
### getFacetLocalNormals() &rarr; [Vector3](/classes/3.1/Vector3)[]

Returns the facetLocalNormals array.

The normals are expressed in the mesh local space.
### getFacetLocalPositions() &rarr; [Vector3](/classes/3.1/Vector3)[]

Returns the facetLocalPositions array.

The facet positions are expressed in the mesh local space.
### getFacetLocalPartitioning() &rarr; number[][]

Returns the facetLocalPartioning array.
### getFacetPosition(i) &rarr; [Vector3](/classes/3.1/Vector3)

Returns the i-th facet position in the world system.

This method allocates a new [Vector3](/classes/3.1/Vector3) per call.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | i | number | 

### getFacetPositionToRef(i, ref) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Sets the reference [Vector3](/classes/3.1/Vector3) with the i-th facet position in the world system.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | i | number | 
 | ref | [Vector3](/classes/3.1/Vector3) | 
### getFacetNormal(i) &rarr; [Vector3](/classes/3.1/Vector3)

Returns the i-th facet normal in the world system.

This method allocates a new [Vector3](/classes/3.1/Vector3) per call.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | i | number | 

### getFacetNormalToRef(i, ref) &rarr; 

Sets the reference [Vector3](/classes/3.1/Vector3) with the i-th facet normal in the world system.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | i | number | 
 | ref | [Vector3](/classes/3.1/Vector3) | 
### getFacetsAtLocalCoordinates(x, y, z) &rarr; Nullable&lt;number[]&gt;

Returns the facets (in an array) in the same partitioning block than the one the passed coordinates are located (expressed in the mesh local system).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### getClosestFacetAtCoordinates(x, y, z, projected, checkFace, facing) &rarr; Nullable&lt;number&gt;

Returns the closest mesh facet index at (x,y,z) World coordinates, null if not found.

If the parameter projected (vector3) is passed, it is set as the (x,y,z) World projection on the facet.

If checkFace is true (default false), only the facet "facing" to (x,y,z) or only the ones "turning their backs", according to the parameter "facing" are returned.

If facing and checkFace are true, only the facet "facing" to (x, y, z) are returned : positive dot (x, y, z) * facet position.

If facing si false and checkFace is true, only the facet "turning their backs" to (x, y, z) are returned : negative dot (x, y, z) * facet position.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
optional | projected | [Vector3](/classes/3.1/Vector3) | 
optional | checkFace | boolean | 
### getClosestFacetAtLocalCoordinates(x, y, z, projected, checkFace, facing) &rarr; Nullable&lt;number&gt;

Returns the closest mesh facet index at (x,y,z) local coordinates, null if not found.

If the parameter projected (vector3) is passed, it is set as the (x,y,z) local projection on the facet.

If checkFace is true (default false), only the facet "facing" to (x,y,z) or only the ones "turning their backs", according to the parameter "facing" are returned.

If facing and checkFace are true, only the facet "facing" to (x, y, z) are returned : positive dot (x, y, z) * facet position.

If facing si false and checkFace is true, only the facet "turning their backs"  to (x, y, z) are returned : negative dot (x, y, z) * facet position.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
optional | projected | [Vector3](/classes/3.1/Vector3) | 
optional | checkFace | boolean | 
### getFacetDataParameters() &rarr; any

Returns the object "parameter" set with all the expected parameters for facetData computation by ComputeNormals()
### disableFacetData() &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Disables the feature FacetData and frees the related memory.

Returns the [AbstractMesh](/classes/3.1/AbstractMesh).
### createNormals(updatable) &rarr; void

Creates new normals data for the mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | updatable | boolean | .

