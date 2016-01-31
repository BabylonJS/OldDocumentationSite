---
ID_PAGE: 25145
PG_TITLE: AbstractMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
##Description

class [AbstractMesh](/classes/2.2/AbstractMesh) extends [Node](/classes/2.2/Node)

This class represents a mesh which can't be instantiated

##Constructor

##new [AbstractMesh](/classes/2.2/AbstractMesh)(name, scene)

The [AbstractMesh](/classes/2.2/AbstractMesh) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The new name
 | scene | [Scene](/classes/2.2/Scene) |  The scene where the mesh is.
##Members

###static BILLBOARDMODE_NONE : number

The billboard Mode None, the object is normal by default

@default [AbstractMesh](/classes/2.2/AbstractMesh).BILLBOARDMODE_NONE

###static BILLBOARDMODE_X : number

The billboard Mode X

@default [AbstractMesh](/classes/2.2/AbstractMesh).BILLBOARDMODE_X

###static BILLBOARDMODE_Y : number

The billboard Mode Y

@default [AbstractMesh](/classes/2.2/AbstractMesh).BILLBOARDMODE_Y

###static BILLBOARDMODE_Z : number

The billboard Mode Z

@default [AbstractMesh](/classes/2.2/AbstractMesh).BILLBOARDMODE_Z

###static BILLBOARDMODE_ALL : number

The billboard Mode

@default [AbstractMesh](/classes/2.2/AbstractMesh).BILLBOARDMODE_ALL

###definedFacingForward : boolean



###position : [Vector3](/classes/2.2/Vector3)

The mesh position

@default [Vector3](/classes/2.2/Vector3)(0, 0, 0)

###rotation : [Vector3](/classes/2.2/Vector3)

The mesh rotation

@default [Vector3](/classes/2.2/Vector3)(0, 0, 0)

###rotationQuaternion : [Quaternion](/classes/2.2/Quaternion)

The mesh rotation [Quaternion](/classes/2.2/Quaternion)

@default [Quaternion](/classes/2.2/Quaternion)(x, y, z, w)

###scaling : [Vector3](/classes/2.2/Vector3)

The mesh scaling

@default [Vector3](/classes/2.2/Vector3)(1,1,1)

###billboardMode : number

The mesh billboardMode

@default [AbstractMesh](/classes/2.2/AbstractMesh).BILLBOARDMODE_NONE

###visibility : number

The mesh visibility

@default 1.0

###alphaIndex : number



###infiniteDistance : boolean

Is infinite distance

@default false

###isVisible : boolean

Is visible

@default true

###isPickable : boolean

Is pickable

@default true

###showBoundingBox : boolean

Show bounding box

@default false

###showSubMeshesBoundingBox : boolean

Show submeshes Bounding box

@default false

###onDispose : any

On dispose

@default null

###isBlocker : boolean

Is blocker

@default false

###skeleton : [Skeleton](/classes/2.2/Skeleton)

The skeleton

###renderingGroupId : number

The rendering group ID

@default 0

###material : [Material](/classes/2.2/Material)

The material

###receiveShadows : boolean

Receive shadows

@default false

###actionManager : [ActionManager](/classes/2.2/ActionManager)

The action manager

###renderOutline : boolean

Render Outline

###outlineColor : [Color3](/classes/2.2/Color3)

outline color

###outlineWidth : number

outline Width

###renderOverlay : boolean



###overlayColor : [Color3](/classes/2.2/Color3)



###overlayAlpha : number



###hasVertexAlpha : boolean



###useVertexColors : boolean



###applyFog : boolean



###computeBonesUsingShaders : boolean



###useOctreeForRenderingSelection : boolean

Is use octree for rendering selection

@default true

###useOctreeForPicking : boolean

Is use octree for picking

@default true

###useOctreeForCollisions : boolean

Is use octree for collisions

@default true

###layerMask : number

The layer mask

@default 0xFFFFFFFF

###alwaysSelectAsActiveMesh : boolean



###ellipsoid : [Vector3](/classes/2.2/Vector3)

Ellipsoid

###ellipsoidOffset : [Vector3](/classes/2.2/Vector3)

Ellipsoid offset

###onCollide : (collidedMesh: [AbstractMesh](/classes/2.2/AbstractMesh)) =&gt; void



###edgesWidth : number



###edgesColor : [Color4](/classes/2.2/Color4)



###subMeshes : [SubMesh](/classes/2.2/SubMesh)[]

subMeshes

###isBlocked : boolean



###useBones : boolean



###worldMatrixFromCache : [Matrix](/classes/2.2/Matrix)

World [Matrix](/classes/2.2/Matrix) from cache

###absolutePosition : [Vector3](/classes/2.2/Vector3)

Absolute Position

###isWorldMatrixFrozen : boolean



###checkCollisions : boolean

Is check collisions

@default false

##Methods

###disableEdgesRendering() &rarr; void


###enableEdgesRendering(epsilon, checkVerticesInsteadOfIndices) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | epsilon | number | 
optional | checkVerticesInsteadOfIndices | boolean | 
###getLOD(camera) &rarr; [AbstractMesh](/classes/2.2/AbstractMesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.2/Camera) |  

###getTotalVertices() &rarr; number

Get the total vertices
###getIndices() &rarr; number[]

To access the mesh vertices data
###getVerticesData(kind) &rarr; number[]

To access the mesh vertices data

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |  @param kind

###isVerticesDataPresent(kind) &rarr; boolean

Is vertices data present

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |  @param kind

###getBoundingInfo() &rarr; [BoundingInfo](/classes/2.2/BoundingInfo)

Get the bounding info
###getWorldMatrix() &rarr; [Matrix](/classes/2.2/Matrix)

Get the world matrix
###freezeWorldMatrix() &rarr; void


###unfreezeWorldMatrix() &rarr; void


###rotate(axis, amount, space) &rarr; void

Rotate this mesh with the given axis and the given angle in the mesh's space.

The mesh's "rotationQuaternion" property will be set to the new rotation. The mesh's "rotation" property will be set to zero if "rotationQuaternion" property was not set before.

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.2/Vector3) |  the rotation axis
 | amount | number |  the rotation angle
 | space | [Space](/classes/2.2/Space) |  local or global
###translate(axis, distance, space) &rarr; void

Translate the mesh with the given axis, with the given distance

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.2/Vector3) |  the rotation axis
 | distance | number |  the distance from the origin to the next position
 | space | [Space](/classes/2.2/Space) |  local or global
###getAbsolutePosition() &rarr; [Vector3](/classes/2.2/Vector3)

Returns the absolute position
###setAbsolutePosition(absolutePosition) &rarr; void

Set the absolute position

####Parameters
 | Name | Type | Description
---|---|---|---
 | absolutePosition | [Vector3](/classes/2.2/Vector3) |  @param absolutePosition

###movePOV(amountRight, amountUp, amountForward) &rarr; void

Perform relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

####Parameters
 | Name | Type | Description
---|---|---|---
 | amountRight | number |  
 | amountUp | number |  
 | amountForward | number |  
###calcMovePOV(amountRight, amountUp, amountForward) &rarr; [Vector3](/classes/2.2/Vector3)

Calculate relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

####Parameters
 | Name | Type | Description
---|---|---|---
 | amountRight | number |  
 | amountUp | number |  
 | amountForward | number |  
###rotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; void

Perform relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

####Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number |  
 | twirlClockwise | number |  
 | tiltRight | number |  
###calcRotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; [Vector3](/classes/2.2/Vector3)

Calculate relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

####Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number |  
 | twirlClockwise | number |  
 | tiltRight | number |  
###setPivotMatrix(matrix) &rarr; void

Set the pivot matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2/Matrix) |  @param matrix

###getPivotMatrix() &rarr; [Matrix](/classes/2.2/Matrix)

Get the pivot matrix
###markAsDirty(property) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | property | string |  @param property

###computeWorldMatrix(force) &rarr; [Matrix](/classes/2.2/Matrix)

Compute the world matrix, recalculate the world matrix
@default false

####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean |  the force direction

###registerAfterWorldMatrixUpdate(func) &rarr; void

If you'd like to be callbacked after the mesh position, rotation or scaling has been updated

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.2/AbstractMesh)) =&gt; void | : callback function to add 

###unregisterAfterWorldMatrixUpdate(func) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.2/AbstractMesh)) =&gt; void |  

###setPositionWithLocalVector(vector3) &rarr; void

Set the position with a local vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/2.2/Vector3) |  the translation contact information

###getPositionExpressedInLocalSpace() &rarr; [Vector3](/classes/2.2/Vector3)

Get the position in local space
###locallyTranslate(vector3) &rarr; void

Translate mesh in local space

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/2.2/Vector3) |  the translation contact information

###lookAt(targetPoint, yawCor, pitchCor, rollCor) &rarr; void

Orients a mesh towards a target point. [Mesh](/classes/2.2/Mesh) must be drawn facing user.

####Parameters
 | Name | Type | Description
---|---|---|---
 | targetPoint | [Vector3](/classes/2.2/Vector3) |  The position (must be in same space as current mesh) to look at
optional | yawCor | number |  yaw (y-axis) correction in radians
optional | pitchCor | number |  pitch (x-axis) correction in radians
###attachToBone(bone, affectedMesh) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | bone | [Bone](/classes/2.2/Bone) | 
 | affectedMesh | [AbstractMesh](/classes/2.2/AbstractMesh) | 
###detachFromBone() &rarr; void


###isInFrustum(frustumPlanes) &rarr; boolean

Is in frustum

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.2/Plane)[] |  is between near frustum plan and far frustum plan view

###isCompletelyInFrustum(camera) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.2/Camera) |  

###intersectsMesh(mesh, precise) &rarr; boolean

Intersects [Mesh](/classes/2.2/Mesh)
For precise : default value is false

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2/AbstractMesh) |  The mesh
optional | precise | boolean |  If true, the abstractMesh is closer to the mesh,
###intersectsPoint(point) &rarr; boolean

Intersects Point

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/2.2/Vector3) |  the intersect point

###setPhysicsState(impostor, options) &rarr; any

Set physics state to mesh

####Parameters
 | Name | Type | Description
---|---|---|---
optional | impostor | any |  The physics impostor [Sphere](/classes/2.2/Sphere)/[Box](/classes/2.2/Box)/[Plane](/classes/2.2/Plane)
optional | options | PhysicsBodyCreationOptions |  @param options
###getPhysicsImpostor() &rarr; number

Get a physics impostor
###getPhysicsMass() &rarr; number

Get the physics mass
###getPhysicsFriction() &rarr; number

Get the physics friction
###getPhysicsRestitution() &rarr; number

Get the physics restitution
###getPositionInCameraSpace(camera) &rarr; [Vector3](/classes/2.2/Vector3)



####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.2/Camera) |  

###getDistanceToCamera(camera) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.2/Camera) |  

###applyImpulse(force, contactPoint) &rarr; void

Apply a force

####Parameters
 | Name | Type | Description
---|---|---|---
 | force | [Vector3](/classes/2.2/Vector3) |  the force direction
 | contactPoint | [Vector3](/classes/2.2/Vector3) |  the contact point
###setPhysicsLinkWith(otherMesh, pivot1, pivot2, options) &rarr; void

Link the impostor in order to keep meshes linked

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherMesh | [Mesh](/classes/2.2/Mesh) |  the impostor
 | pivot1 | [Vector3](/classes/2.2/Vector3) |  link the impostor with this mesh
 | pivot2 | [Vector3](/classes/2.2/Vector3) |  link the impostor with this mesh
###updatePhysicsBodyPosition() &rarr; void

Update physics body position
###moveWithCollisions(velocity) &rarr; void

Move a mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | velocity | [Vector3](/classes/2.2/Vector3) |  change the velocity

###createOrUpdateSubmeshesOctree(maxCapacity, maxDepth) &rarr; [Octree](/classes/2.2/Octree)&lt;[SubMesh](/classes/2.2/SubMesh)&gt;

This function will create an octree to help select the right submeshes for rendering, picking and collisions

Please note that you must have a decent number of submeshes to get performance improvements when using octree

####Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number |  @param maxCapacity
optional | maxDepth | number |  @param maxDepth
###intersects(ray, fastCheck) &rarr; [PickingInfo](/classes/2.2/PickingInfo)

Intersects
if false, infinite ray !

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.2/Ray) |  The ray
optional | fastCheck | boolean |  if true, stop at the first result
###clone(name, newParent, doNotCloneChildren) &rarr; [AbstractMesh](/classes/2.2/AbstractMesh)

Clone this abstract mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The new name
 | newParent | [Node](/classes/2.2/Node) |  @param newParent
optional | doNotCloneChildren | boolean |  Set true if you want to clone children, false otherwise
###releaseSubMeshes() &rarr; void

Release submeshes
###dispose(doNotRecurse) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean |  @param doNotRecurse

