---
ID_PAGE: 25145
PG_TITLE: AbstractMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [AbstractMesh](/classes/3.0/AbstractMesh) extends [Node](/classes/3.0/Node)

This class represents a mesh which can't be instantiated

## Constructor

## new [AbstractMesh](/classes/3.0/AbstractMesh)(name, scene)

The [AbstractMesh](/classes/3.0/AbstractMesh) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The new name
 | scene | [Scene](/classes/3.0/Scene) |      The scene where the mesh is.
## Members

### static BILLBOARDMODE_NONE : number

The billboard Mode None, the object is normal by default

@default [AbstractMesh](/classes/3.0/AbstractMesh).BILLBOARDMODE_NONE

### static BILLBOARDMODE_X : number

The billboard Mode X

@default [AbstractMesh](/classes/3.0/AbstractMesh).BILLBOARDMODE_X

### static BILLBOARDMODE_Y : number

The billboard Mode Y

@default [AbstractMesh](/classes/3.0/AbstractMesh).BILLBOARDMODE_Y

### static BILLBOARDMODE_Z : number

The billboard Mode Z

@default [AbstractMesh](/classes/3.0/AbstractMesh).BILLBOARDMODE_Z

### static BILLBOARDMODE_ALL : number

The billboard Mode

@default [AbstractMesh](/classes/3.0/AbstractMesh).BILLBOARDMODE_ALL

### facetNb : number

Read-only : the number of facets in the mesh

### partitioningSubdivisions : number

The number (integer) of subdivisions per axis in the partioning space

### partitioningBBoxRatio : number

The ratio (float) to apply to the bouding box size to set to the partioning space.

Ex : 1.01 (default) the partioning space is 1% bigger than the bounding box.

### isFacetDataEnabled : boolean

Read-only boolean : is the feature facetData enabled ?

### onCollideObservable : [Observable](/classes/3.0/Observable)&lt;[AbstractMesh](/classes/3.0/AbstractMesh)&gt;

An event triggered when this mesh collides with another one

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onCollide : () =&gt; void



### onCollisionPositionChangeObservable : [Observable](/classes/3.0/Observable)&lt;[Vector3](/classes/3.0/Vector3)&gt;

An event triggered when the collision's position changes

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onCollisionPositionChange : () =&gt; void



### onAfterWorldMatrixUpdateObservable : [Observable](/classes/3.0/Observable)&lt;[AbstractMesh](/classes/3.0/AbstractMesh)&gt;

An event triggered after the world matrix is updated

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### definedFacingForward : boolean



### position : [Vector3](/classes/3.0/Vector3)

The mesh position

@default [Vector3](/classes/3.0/Vector3)(0, 0, 0)

### billboardMode : number

The mesh billboardMode

@default [AbstractMesh](/classes/3.0/AbstractMesh).BILLBOARDMODE_NONE

### visibility : number

The mesh visibility

@default 1.0

### alphaIndex : number



### infiniteDistance : boolean

Is infinite distance

@default false

### isVisible : boolean

Is visible

@default true

### isPickable : boolean

Is pickable

@default true

### showBoundingBox : boolean

Show bounding box

@default false

### showSubMeshesBoundingBox : boolean

Show submeshes Bounding box

@default false

### isBlocker : boolean

Is blocker

@default false

### renderingGroupId : number

The rendering group ID

@default 0

### material : [Material](/classes/3.0/Material)

The material

### receiveShadows : boolean

Receive shadows

@default false

### renderOutline : boolean

Render Outline

### outlineColor : [Color3](/classes/3.0/Color3)

outline color

### outlineWidth : number

outline Width

### renderOverlay : boolean



### overlayColor : [Color3](/classes/3.0/Color3)



### overlayAlpha : number



### hasVertexAlpha : boolean



### useVertexColors : boolean



### computeBonesUsingShaders : boolean



### numBoneInfluencers : number



### applyFog : boolean



### scalingDeterminant : number



### useOctreeForRenderingSelection : boolean

Is use octree for rendering selection

@default true

### useOctreeForPicking : boolean

Is use octree for picking

@default true

### useOctreeForCollisions : boolean

Is use octree for collisions

@default true

### layerMask : number

The layer mask

@default 0xFFFFFFFF

### alwaysSelectAsActiveMesh : boolean

True if the mesh must be rendered in any case.

### actionManager : [ActionManager](/classes/3.0/ActionManager)

This scene's action manager

@type {BABYLON.[ActionManager](/classes/3.0/ActionManager)}

### physicsImpostor : undefined



### ellipsoid : [Vector3](/classes/3.0/Vector3)

Ellipsoid

### ellipsoidOffset : [Vector3](/classes/3.0/Vector3)

Ellipsoid offset

### collisionMask : number



### collisionGroup : number



### edgesWidth : number



### edgesColor : [Color4](/classes/3.0/Color4)



### subMeshes : [SubMesh](/classes/3.0/SubMesh)[]

subMeshes

### skeleton : [Skeleton](/classes/3.0/Skeleton)

The skeleton

### rotation : [Vector3](/classes/3.0/Vector3)

Rotation property : a [Vector3](/classes/3.0/Vector3) depicting the rotation value in radians around each local axis X, Y, Z.

If rotation quaternion is set, this [Vector3](/classes/3.0/Vector3) will (almost always) be the Zero vector!

Default : (0.0, 0.0, 0.0)

### scaling : [Vector3](/classes/3.0/Vector3)

Scaling property : a [Vector3](/classes/3.0/Vector3) depicting the mesh scaling along each local axis X, Y, Z.

Default : (1.0, 1.0, 1.0)

### rotationQuaternion : [Quaternion](/classes/3.0/Quaternion)

Rotation [Quaternion](/classes/3.0/Quaternion) property : this a [Quaternion](/classes/3.0/Quaternion) object depicting the mesh rotation by using a unit quaternion.

It's null by default.

If set, only the rotationQuaternion is then used to compute the mesh rotation and its property `.rotation\ is then ignored and set to (0.0, 0.0, 0.0)

### isBlocked : boolean

Returns true if the mesh is blocked. Used by the class [Mesh](/classes/3.0/Mesh).

Returns the boolean `false` by default.

### Float32Array : undefined



### useBones : boolean



### worldMatrixFromCache : [Matrix](/classes/3.0/Matrix)

Returns directly the last state of the mesh World matrix.

A [Matrix](/classes/3.0/Matrix) is returned.

### absolutePosition : [Vector3](/classes/3.0/Vector3)

Returns the current mesh absolute position.

Retuns a [Vector3](/classes/3.0/Vector3).

### this : ()



### isWorldMatrixFrozen : boolean

True if the World matrix has been frozen.

Returns a boolean.

### checkCollisions : boolean

Property checkCollisions : Boolean, whether the camera should check the collisions against the mesh.

Default `false`.

### this : undefined



## Methods

### getClassName() &rarr; string

Returns the string "[AbstractMesh](/classes/3.0/AbstractMesh)"
### toString(fullDetails) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | fullDetails | boolean |   

### updatePoseMatrix(matrix) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Copies the paramater passed [Matrix](/classes/3.0/Matrix) into the mesh Pose matrix.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.0/Matrix) |      @param matrix

### getPoseMatrix() &rarr; [Matrix](/classes/3.0/Matrix)

Returns the mesh Pose matrix.

Returned object : [Matrix](/classes/3.0/Matrix)
### disableEdgesRendering() &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Disables the mesh edger rendering mode.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).
### enableEdgesRendering(epsilon, checkVerticesInsteadOfIndices) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Enables the edge rendering mode on the mesh.

This mode makes the mesh edges visible.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | epsilon | number |     
optional | checkVerticesInsteadOfIndices | boolean |     
### getLOD(camera) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Returns the mesh itself by default, used by the class [Mesh](/classes/3.0/Mesh).

Returned type : [AbstractMesh](/classes/3.0/AbstractMesh)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/3.0/Camera) |      

### getTotalVertices() &rarr; number

Returns 0 by default, used by the class [Mesh](/classes/3.0/Mesh).

Returns an integer.
### getIndices() &rarr; IndicesArray

Returns null by default, used by the class [Mesh](/classes/3.0/Mesh).

Returned type : integer array
### getVerticesData(kind) &rarr; number[]

Returns the array of the requested vertex data kind. Used by the class [Mesh](/classes/3.0/Mesh). Returns null here.

Returned type : float array or Float32Array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |      @param kind

### setVerticesData(kind, data, Float32Array, updatable, stride) &rarr; [Mesh](/classes/3.0/Mesh)

Sets the vertex data of the mesh geometry for the requested `kind`.

If the mesh has no geometry, a new [Geometry](/classes/3.0/Geometry) object is set to the mesh and then passed this vertex data.

The `data` are either a numeric array either a Float32Array.

The parameter `updatable` is passed as is to the underlying [Geometry](/classes/3.0/Geometry) object constructor (if initianilly none) or updater.

The parameter `stride` is an optional positive integer, it is usually automatically deducted from the `kind` (3 for positions or normals, 2 for UV, etc).

Note that a new underlying [VertexBuffer](/classes/3.0/VertexBuffer) object is created each call.

If the `kind` is the `PositionKind`, the mesh [BoundingInfo](/classes/3.0/BoundingInfo) is renewed, so the bounding box and sphere, and the mesh World [Matrix](/classes/3.0/Matrix) is recomputed.

         * Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).MatricesWeightsExtraKind

         * Returns the [Mesh](/classes/3.0/Mesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |      @param kind
 | data | number[] or Float32Array | 
optional | updatable | boolean | 
### updateVerticesData(kind, data, Float32Array, updateExtends, makeItUnique) &rarr; [Mesh](/classes/3.0/Mesh)

Updates the existing vertex data of the mesh geometry for the requested `kind`.

If the mesh has no geometry, it is simply returned as it is.

The `data` are either a numeric array either a Float32Array.

No new underlying [VertexBuffer](/classes/3.0/VertexBuffer) object is created.

If the `kind` is the `PositionKind` and if `updateExtends` is true, the mesh [BoundingInfo](/classes/3.0/BoundingInfo) is renewed, so the bounding box and sphere, and the mesh World [Matrix](/classes/3.0/Matrix) is recomputed.

If the parameter `makeItUnique` is true, a new global geometry is created from this positions and is set to the mesh.

         * Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/3.0/VertexBuffer).MatricesWeightsExtraKind

         * Returns the [Mesh](/classes/3.0/Mesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |      @param kind
 | data | number[] or Float32Array | 
optional | updateExtends | boolean | 
### setIndices(indices, totalVertices) &rarr; [Mesh](/classes/3.0/Mesh)

Sets the mesh indices.

Expects an array populated with integers or a typed array (Int32Array, Uint32Array, Uint16Array).

If the mesh has no geometry, a new [Geometry](/classes/3.0/Geometry) object is created and set to the mesh.

This method creates a new index buffer each call.

Returns the [Mesh](/classes/3.0/Mesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | IndicesArray | 
optional | totalVertices | number | 
### isVerticesDataPresent(kind) &rarr; boolean

Returns a boolean

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |      @param kind

### getBoundingInfo() &rarr; [BoundingInfo](/classes/3.0/BoundingInfo)

Returns the mesh [BoundingInfo](/classes/3.0/BoundingInfo) object or creates a new one and returns it if undefined.

Returns a [BoundingInfo](/classes/3.0/BoundingInfo)
### setBoundingInfo(boundingInfo) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Sets a mesh new object [BoundingInfo](/classes/3.0/BoundingInfo).

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](/classes/3.0/BoundingInfo) |  

### getWorldMatrix() &rarr; [Matrix](/classes/3.0/Matrix)

Returns the last update of the World matrix

Returns a [Matrix](/classes/3.0/Matrix).
### freezeWorldMatrix() &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Prevents the World matrix to be computed any longer.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).
### unfreezeWorldMatrix() &rarr; 

Allows back the World matrix computation.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).
### rotate(axis, amount, space) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Rotates the mesh around the axis vector for the passed angle (amount) expressed in radians, in the given space.

space (default LOCAL) can be either BABYLON.[Space](/classes/3.0/Space).LOCAL, either BABYLON.[Space](/classes/3.0/Space).WORLD.

Note that the property `rotationQuaternion` is then automatically updated and the property `rotation` is set to (0,0,0) and no longer used.

The passed axis is also normalized.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.0/Vector3) |      the rotation axis
 | amount | number |      the rotation angle
optional | space | [Space](/classes/3.0/Space) |      local or global
### translate(axis, distance, space) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Translates the mesh along the axis vector for the passed distance in the given space.

space (default LOCAL) can be either BABYLON.[Space](/classes/3.0/Space).LOCAL, either BABYLON.[Space](/classes/3.0/Space).WORLD.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.0/Vector3) |      the rotation axis
 | distance | number |      the distance from the origin to the next position
optional | space | [Space](/classes/3.0/Space) |      local or global
### addRotation(x, y, z) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

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

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### getAbsolutePosition() &rarr; [Vector3](/classes/3.0/Vector3)

Retuns the mesh absolute position in the World.

Returns a [Vector3](/classes/3.0/Vector3).
### setAbsolutePosition(absolutePosition) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Sets the mesh absolute position in the World from a [Vector3](/classes/3.0/Vector3) or an Array(3).

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | absolutePosition | [Vector3](/classes/3.0/Vector3) |      @param absolutePosition

### movePOV(amountRight, amountUp, amountForward) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Perform relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

         * Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | amountRight | number |      
 | amountUp | number |      
 | amountForward | number |      
### calcMovePOV(amountRight, amountUp, amountForward) &rarr; [Vector3](/classes/3.0/Vector3)

Calculate relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

         * Returns a new [Vector3](/classes/3.0/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | amountRight | number |      
 | amountUp | number |      
 | amountForward | number |      
### rotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Perform relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

         * Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number |      
 | twirlClockwise | number |      
 | tiltRight | number |      
### calcRotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; [Vector3](/classes/3.0/Vector3)

Calculate relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

         * Returns a new [Vector3](/classes/3.0/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number |      
 | twirlClockwise | number |      
 | tiltRight | number |      
### setPivotMatrix(matrix) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Sets a new pivot matrix to the mesh.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.0/Matrix) |      @param matrix

### getPivotMatrix() &rarr; [Matrix](/classes/3.0/Matrix)

Returns the mesh pivot matrix.

Default : Identity.

A [Matrix](/classes/3.0/Matrix) is returned.
### markAsDirty(property) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | property | string |      @param property

### computeWorldMatrix(force) &rarr; [Matrix](/classes/3.0/Matrix)

Computes the mesh World matrix and returns it.

If the mesh world matrix is frozen, this computation does nothing more than returning the last frozen values.

If the parameter `force` is let to `false` (default), the current cached World matrix is returned.

If the parameter `force`is set to `true`, the actual computation is done.

Returns the mesh World [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean |      the force direction

### registerAfterWorldMatrixUpdate(func) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

If you'd like to be called back after the mesh position, rotation or scaling has been updated.

        * Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/3.0/AbstractMesh)) =&gt; void | : callback function to add     

### unregisterAfterWorldMatrixUpdate(func) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Removes a registered callback function.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/3.0/AbstractMesh)) =&gt; void |      

### setPositionWithLocalVector(vector3) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Sets the mesh position in its local space.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/3.0/Vector3) |      the translation contact information

### getPositionExpressedInLocalSpace() &rarr; [Vector3](/classes/3.0/Vector3)

Returns the mesh position in the local space from the current World matrix values.

Returns a new [Vector3](/classes/3.0/Vector3).
### locallyTranslate(vector3) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Translates the mesh along the passed [Vector3](/classes/3.0/Vector3) in its local space.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/3.0/Vector3) |      the translation contact information

### lookAt(targetPoint, yawCor, pitchCor, rollCor, space) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | targetPoint | [Vector3](/classes/3.0/Vector3) |      The position (must be in same space as current mesh) to look at
optional | yawCor | number |      yaw (y-axis) correction in radians
optional | pitchCor | number |      pitch (x-axis) correction in radians
optional | rollCor | number |  
### attachToBone(bone, affectedMesh) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | bone | [Bone](/classes/3.0/Bone) |     
 | affectedMesh | [AbstractMesh](/classes/3.0/AbstractMesh) |     
### detachFromBone() &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)


### isInFrustum(frustumPlanes) &rarr; boolean

Returns `true` if the mesh is within the frustum defined by the passed array of planes.

A mesh is in the frustum if its bounding box intersects the frustum.

Boolean returned.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.0/Plane)[] |      is between near frustum plan and far frustum plan view

### isCompletelyInFrustum(frustumPlanes) &rarr; boolean

Returns `true` if the mesh is completely in the frustum defined be the passed array of planes.

A mesh is completely in the frustum if its bounding box it completely inside the frustum.

Boolean returned.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.0/Plane)[] |      is between near frustum plan and far frustum plan view

### intersectsMesh(mesh, [SolidParticle](/classes/3.0/SolidParticle), precise) &rarr; boolean

True if the mesh intersects another mesh or a [SolidParticle](/classes/3.0/SolidParticle) object.

Unless the parameter `precise` is set to `true` the intersection is computed according to [Axis](/classes/3.0/Axis) Aligned Bounding Boxes (AABB), else according to OBB (Oriented BBoxes)

Returns a boolean.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) or [SolidParticle](/classes/3.0/SolidParticle) |      The mesh
optional | precise | boolean |      If true, the abstractMesh is closer to the mesh,
### intersectsPoint(point) &rarr; boolean

Returns true if the passed point ([Vector3](/classes/3.0/Vector3)) is inside the mesh bounding box.

Returns a boolean.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/3.0/Vector3) |      the intersect point

### getPhysicsImpostor() &rarr; [PhysicsImpostor](/classes/3.0/PhysicsImpostor)

Get a physics impostor
### getPositionInCameraSpace(camera) &rarr; [Vector3](/classes/3.0/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/3.0/Camera) |      

### getDistanceToCamera(camera) &rarr; number

Returns the distance from the mesh to the active camera.

Returns a float.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/3.0/Camera) |      

### applyImpulse(force, contactPoint) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Apply a force

#### Parameters
 | Name | Type | Description
---|---|---|---
 | force | [Vector3](/classes/3.0/Vector3) |      the force direction
 | contactPoint | [Vector3](/classes/3.0/Vector3) |      the contact point
### setPhysicsLinkWith(otherMesh, pivot1, pivot2, options) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Link the impostor in order to keep meshes linked

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherMesh | [Mesh](/classes/3.0/Mesh) |      the impostor
 | pivot1 | [Vector3](/classes/3.0/Vector3) |      link the impostor with this mesh
 | pivot2 | [Vector3](/classes/3.0/Vector3) |      link the impostor with this mesh
### moveWithCollisions(velocity) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Move a mesh

#### Parameters
 | Name | Type | Description
---|---|---|---
 | velocity | [Vector3](/classes/3.0/Vector3) |      change the velocity

### createOrUpdateSubmeshesOctree(maxCapacity, maxDepth) &rarr; [Octree](/classes/3.0/Octree)&lt;[SubMesh](/classes/3.0/SubMesh)&gt;

This function will create an octree to help to select the right submeshes for rendering, picking and collision computations.

Please note that you must have a decent number of submeshes to get performance improvements when using an octree.

Returns an [Octree](/classes/3.0/Octree) of submeshes.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number |      @param maxCapacity
optional | maxDepth | number |      @param maxDepth
### intersects(ray, fastCheck) &rarr; [PickingInfo](/classes/3.0/PickingInfo)

Checks if the passed [Ray](/classes/3.0/Ray) intersects with the mesh.

Returns an object [PickingInfo](/classes/3.0/PickingInfo).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.0/Ray) |      The ray
optional | fastCheck | boolean |      if true, stop at the first result
### clone(name, newParent, doNotCloneChildren) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Clones the mesh, used by the class [Mesh](/classes/3.0/Mesh).

Just returns `null` for an [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The new name
 | newParent | [Node](/classes/3.0/Node) |      @param newParent
optional | doNotCloneChildren | boolean |      Set true if you want to clone children, false otherwise
### releaseSubMeshes() &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Disposes all the mesh submeshes.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).
### dispose(doNotRecurse) &rarr; void

Disposes the [AbstractMesh](/classes/3.0/AbstractMesh).

Some internal references are kept for further use.

By default, all the mesh children are also disposed unless the parameter `doNotRecurse` is set to `true`.

Returns nothing.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean |      @param doNotRecurse

### getDirection(localAxis) &rarr; [Vector3](/classes/3.0/Vector3)

Returns a new [Vector3](/classes/3.0/Vector3) what is the localAxis, expressed in the mesh local space, rotated like the mesh.

This [Vector3](/classes/3.0/Vector3) is expressed in the World space.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/3.0/Vector3) |  

### getDirectionToRef(localAxis, result) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Sets the [Vector3](/classes/3.0/Vector3) "result" as the rotated [Vector3](/classes/3.0/Vector3) "localAxis" in the same rotation than the mesh.

localAxis is expressed in the mesh local space.

result is computed in the Wordl space from the mesh World matrix.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/3.0/Vector3) |  
 | result | [Vector3](/classes/3.0/Vector3) |  
### setPivotPoint(point, space) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/3.0/Vector3) |      the intersect point
optional | space | [Space](/classes/3.0/Space) |      local or global
### getPivotPoint() &rarr; [Vector3](/classes/3.0/Vector3)

Returns a new [Vector3](/classes/3.0/Vector3) set with the mesh pivot point coordinates in the local space.
### getPivotPointToRef(result) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Sets the passed [Vector3](/classes/3.0/Vector3) "result" with the coordinates of the mesh pivot point in the local space.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/3.0/Vector3) |  

### getAbsolutePivotPoint() &rarr; [Vector3](/classes/3.0/Vector3)

Returns a new [Vector3](/classes/3.0/Vector3) set with the mesh pivot point World coordinates.
### setParent(mesh) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Defines the passed mesh as the parent of the current mesh.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |      The mesh

### addChild(mesh) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Adds the passed mesh as a child to the current mesh.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |      The mesh

### removeChild(mesh) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Removes the passed mesh from the current mesh children list.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |      The mesh

### getAbsolutePivotPointToRef(result) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Sets the [Vector3](/classes/3.0/Vector3) "result" coordinates with the mesh pivot point World coordinates.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/3.0/Vector3) |  

### updateFacetData() &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Updates the mesh facetData arrays and the internal partitioning when the mesh is morphed or updated.

This method can be called within the render loop.

You don't need to call this method by yourself in the render loop when you update/morph a mesh with the methods CreateXXX() as they automatically manage this computation.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).
### getFacetLocalNormals() &rarr; [Vector3](/classes/3.0/Vector3)[]

Returns the facetLocalNormals array.

The normals are expressed in the mesh local space.
### getFacetLocalPositions() &rarr; [Vector3](/classes/3.0/Vector3)[]

Returns the facetLocalPositions array.

The facet positions are expressed in the mesh local space.
### getFacetLocalPartitioning() &rarr; number[][]

Returns the facetLocalPartioning array.
### getFacetPosition(i) &rarr; [Vector3](/classes/3.0/Vector3)

Returns the i-th facet position in the world system.

This method allocates a new [Vector3](/classes/3.0/Vector3) per call.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | i | number | 

### getFacetPositionToRef(i, ref) &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Sets the reference [Vector3](/classes/3.0/Vector3) with the i-th facet position in the world system.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | i | number | 
 | ref | [Vector3](/classes/3.0/Vector3) | 
### getFacetNormal(i) &rarr; [Vector3](/classes/3.0/Vector3)

Returns the i-th facet normal in the world system.

This method allocates a new [Vector3](/classes/3.0/Vector3) per call.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | i | number | 

### getFacetNormalToRef(i, ref) &rarr; 

Sets the reference [Vector3](/classes/3.0/Vector3) with the i-th facet normal in the world system.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | i | number | 
 | ref | [Vector3](/classes/3.0/Vector3) | 
### getFacetsAtLocalCoordinates(x, y, z) &rarr; number[]

Returns the facets (in an array) in the same partitioning block than the one the passed coordinates are located (expressed in the mesh local system).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### getClosestFacetAtCoordinates(x, y, z, projected, checkFace, facing) &rarr; number

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
optional | projected | [Vector3](/classes/3.0/Vector3) | 
optional | checkFace | boolean | 
### getClosestFacetAtLocalCoordinates(x, y, z, projected, checkFace, facing) &rarr; number

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
optional | projected | [Vector3](/classes/3.0/Vector3) | 
optional | checkFace | boolean | 
### getFacetDataParameters() &rarr; any

Returns the object "parameter" set with all the expected parameters for facetData computation by ComputeNormals()
### disableFacetData() &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Disables the feature FacetData and frees the related memory.

Returns the [AbstractMesh](/classes/3.0/AbstractMesh).
### createNormals(updatable) &rarr; void

Creates new normals data for the mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | updatable | boolean | .

