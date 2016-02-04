---
ID_PAGE: 25145
PG_TITLE: AbstractMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [AbstractMesh](/classes/2.3/AbstractMesh) extends [Node](/classes/2.3/Node)



## Constructor

##  new [AbstractMesh](/classes/2.3/AbstractMesh)(name, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The new name
 | scene | [Scene](/classes/2.3/Scene) |   The scene where the mesh is.
## Members

### static  BILLBOARDMODE_NONE : number



### static  BILLBOARDMODE_X : number



### static  BILLBOARDMODE_Y : number



### static  BILLBOARDMODE_Z : number



### static  BILLBOARDMODE_ALL : number



### definedFacingForward : boolean



### position : [Vector3](/classes/2.3/Vector3)



### rotation : [Vector3](/classes/2.3/Vector3)



### rotationQuaternion : [Quaternion](/classes/2.3/Quaternion)



### scaling : [Vector3](/classes/2.3/Vector3)



### billboardMode : number



### visibility : number



### alphaIndex : number



### infiniteDistance : boolean



### isVisible : boolean



### isPickable : boolean



### showBoundingBox : boolean



### showSubMeshesBoundingBox : boolean



### onDispose : any



### isBlocker : boolean



### renderingGroupId : number



### material : [Material](/classes/2.3/Material)



### receiveShadows : boolean



### actionManager : [ActionManager](/classes/2.3/ActionManager)



### renderOutline : boolean



### outlineColor : [Color3](/classes/2.3/Color3)



### outlineWidth : number



### renderOverlay : boolean



### overlayColor : [Color3](/classes/2.3/Color3)



### overlayAlpha : number



### hasVertexAlpha : boolean



### useVertexColors : boolean



### applyFog : boolean



### computeBonesUsingShaders : boolean



### scalingDeterminant : number



### numBoneInfluencers : number



### useOctreeForRenderingSelection : boolean



### useOctreeForPicking : boolean



### useOctreeForCollisions : boolean



### layerMask : number



### alwaysSelectAsActiveMesh : boolean



### onPhysicsCollide : (collidedMesh: [AbstractMesh](/classes/2.3/AbstractMesh), contact: any) =&gt; void



### ellipsoid : [Vector3](/classes/2.3/Vector3)



### ellipsoidOffset : [Vector3](/classes/2.3/Vector3)



### onCollide : (collidedMesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void



### onCollisionPositionChange : (newPosition: [Vector3](/classes/2.3/Vector3)) =&gt; void



### edgesWidth : number



### edgesColor : [Color4](/classes/2.3/Color4)



### subMeshes : [SubMesh](/classes/2.3/SubMesh)[]



### skeleton : [Skeleton](/classes/2.3/Skeleton)



### isBlocked : boolean



### useBones : boolean



### worldMatrixFromCache : [Matrix](/classes/2.3/Matrix)



### absolutePosition : [Vector3](/classes/2.3/Vector3)



### isWorldMatrixFrozen : boolean



### checkCollisions : boolean



## Methods

### updatePoseMatrix(matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.3/Matrix) |   @param matrix

### getPoseMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### disableEdgesRendering() &rarr; void


### enableEdgesRendering(epsilon, checkVerticesInsteadOfIndices) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | epsilon | number |  
optional | checkVerticesInsteadOfIndices | boolean |  
### getLOD(camera) &rarr; [AbstractMesh](/classes/2.3/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.3/Camera) |   

### getTotalVertices() &rarr; number


### getIndices() &rarr; number[]


### getVerticesData(kind) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   @param kind

### isVerticesDataPresent(kind) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   @param kind

### getBoundingInfo() &rarr; [BoundingInfo](/classes/2.3/BoundingInfo)


### getWorldMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### freezeWorldMatrix() &rarr; void


### unfreezeWorldMatrix() &rarr; void


### rotate(axis, amount, space) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.3/Vector3) |   the rotation axis
 | amount | number |   the rotation angle
optional | space | [Space](/classes/2.3/Space) |   local or global
### translate(axis, distance, space) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.3/Vector3) |   the rotation axis
 | distance | number |   the distance from the origin to the next position
optional | space | [Space](/classes/2.3/Space) |   local or global
### getAbsolutePosition() &rarr; [Vector3](/classes/2.3/Vector3)


### setAbsolutePosition(absolutePosition) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | absolutePosition | [Vector3](/classes/2.3/Vector3) |   @param absolutePosition

### movePOV(amountRight, amountUp, amountForward) &rarr; void

Perform relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | amountRight | number |   
 | amountUp | number |   
 | amountForward | number |   
### calcMovePOV(amountRight, amountUp, amountForward) &rarr; [Vector3](/classes/2.3/Vector3)

Calculate relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | amountRight | number |   
 | amountUp | number |   
 | amountForward | number |   
### rotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; void

Perform relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number |   
 | twirlClockwise | number |   
 | tiltRight | number |   
### calcRotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; [Vector3](/classes/2.3/Vector3)

Calculate relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number |   
 | twirlClockwise | number |   
 | tiltRight | number |   
### setPivotMatrix(matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.3/Matrix) |   @param matrix

### getPivotMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### markAsDirty(property) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | property | string |   @param property

### computeWorldMatrix(force) &rarr; [Matrix](/classes/2.3/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean |   the force direction

### registerAfterWorldMatrixUpdate(func) &rarr; void

If you'd like to be callbacked after the mesh position, rotation or scaling has been updated

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void | : callback function to add  

### unregisterAfterWorldMatrixUpdate(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void |   

### setPositionWithLocalVector(vector3) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/2.3/Vector3) |   the translation contact information

### getPositionExpressedInLocalSpace() &rarr; [Vector3](/classes/2.3/Vector3)


### locallyTranslate(vector3) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/2.3/Vector3) |   the translation contact information

### lookAt(targetPoint, yawCor, pitchCor, rollCor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | targetPoint | [Vector3](/classes/2.3/Vector3) |   The position (must be in same space as current mesh) to look at
 | yawCor | number |   yaw (y-axis) correction in radians
 | pitchCor | number |   pitch (x-axis) correction in radians
### attachToBone(bone, affectedMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | bone | [Bone](/classes/2.3/Bone) |  
 | affectedMesh | [AbstractMesh](/classes/2.3/AbstractMesh) |  
### detachFromBone() &rarr; void


### isInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.3/Plane)[] |   is between near frustum plan and far frustum plan view

### isCompletelyInFrustum(camera) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.3/Camera) |   

### intersectsMesh(mesh, precise) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   The mesh
optional | precise | boolean |   If true, the abstractMesh is closer to the mesh,
### intersectsPoint(point) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/2.3/Vector3) |   the intersect point

### setPhysicsState(impostor, options) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | impostor | any |   The physics impostor [Sphere](/classes/2.3/Sphere)/[Box](/classes/2.3/Box)/[Plane](/classes/2.3/Plane)
optional | options | PhysicsBodyCreationOptions |   @param options
### getPhysicsImpostor() &rarr; number


### getPhysicsMass() &rarr; number


### getPhysicsFriction() &rarr; number


### getPhysicsRestitution() &rarr; number


### getPositionInCameraSpace(camera) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.3/Camera) |   

### getDistanceToCamera(camera) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.3/Camera) |   

### applyImpulse(force, contactPoint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | force | [Vector3](/classes/2.3/Vector3) |   the force direction
 | contactPoint | [Vector3](/classes/2.3/Vector3) |   the contact point
### setPhysicsLinkWith(otherMesh, pivot1, pivot2, options) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherMesh | [Mesh](/classes/2.3/Mesh) |   the impostor
 | pivot1 | [Vector3](/classes/2.3/Vector3) |   link the impostor with this mesh
 | pivot2 | [Vector3](/classes/2.3/Vector3) |   link the impostor with this mesh
### updatePhysicsBodyPosition() &rarr; void


### moveWithCollisions(velocity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | velocity | [Vector3](/classes/2.3/Vector3) |   change the velocity

### createOrUpdateSubmeshesOctree(maxCapacity, maxDepth) &rarr; [Octree](/classes/2.3/Octree)&lt;[SubMesh](/classes/2.3/SubMesh)&gt;

This function will create an octree to help select the right submeshes for rendering, picking and collisions

Please note that you must have a decent number of submeshes to get performance improvements when using octree

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number |   @param maxCapacity
optional | maxDepth | number |   @param maxDepth
### intersects(ray, fastCheck) &rarr; [PickingInfo](/classes/2.3/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.3/Ray) |   The ray
optional | fastCheck | boolean |   if true, stop at the first result
### clone(name, newParent, doNotCloneChildren) &rarr; [AbstractMesh](/classes/2.3/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The new name
 | newParent | [Node](/classes/2.3/Node) |   @param newParent
optional | doNotCloneChildren | boolean |   Set true if you want to clone children, false otherwise
### releaseSubMeshes() &rarr; void


### dispose(doNotRecurse) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean |   @param doNotRecurse

