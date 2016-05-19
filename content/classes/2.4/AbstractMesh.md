---
ID_PAGE: 25145
PG_TITLE: AbstractMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [AbstractMesh](/classes/2.4/AbstractMesh) extends [Node](/classes/2.4/Node)

This class represents a mesh which can't be instantiated

## Constructor

## new [AbstractMesh](/classes/2.4/AbstractMesh)(name, scene)

The [AbstractMesh](/classes/2.4/AbstractMesh) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The new name
 | scene | [Scene](/classes/2.4/Scene) |    The scene where the mesh is.
## Members

### static BILLBOARDMODE_NONE : number

The billboard Mode None, the object is normal by default

@default [AbstractMesh](/classes/2.4/AbstractMesh).BILLBOARDMODE_NONE

### static BILLBOARDMODE_X : number

The billboard Mode X

@default [AbstractMesh](/classes/2.4/AbstractMesh).BILLBOARDMODE_X

### static BILLBOARDMODE_Y : number

The billboard Mode Y

@default [AbstractMesh](/classes/2.4/AbstractMesh).BILLBOARDMODE_Y

### static BILLBOARDMODE_Z : number

The billboard Mode Z

@default [AbstractMesh](/classes/2.4/AbstractMesh).BILLBOARDMODE_Z

### static BILLBOARDMODE_ALL : number

The billboard Mode

@default [AbstractMesh](/classes/2.4/AbstractMesh).BILLBOARDMODE_ALL

### onDisposeObservable : [Observable](/classes/2.4/Observable)&lt;[AbstractMesh](/classes/2.4/AbstractMesh)&gt;

An event triggered when the mesh is disposed.

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onDispose : () =&gt; void

On dispose

@default null

### onCollideObservable : [Observable](/classes/2.4/Observable)&lt;[AbstractMesh](/classes/2.4/AbstractMesh)&gt;

An event triggered when this mesh collides with another one

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onCollide : () =&gt; void



### onCollisionPositionChangeObservable : [Observable](/classes/2.4/Observable)&lt;[Vector3](/classes/2.4/Vector3)&gt;

An event triggered when the collision's position changes

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onCollisionPositionChange : () =&gt; void



### onAfterWorldMatrixUpdateObservable : [Observable](/classes/2.4/Observable)&lt;[AbstractMesh](/classes/2.4/AbstractMesh)&gt;

An event triggered after the world matrix is updated

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### definedFacingForward : boolean



### position : [Vector3](/classes/2.4/Vector3)

The mesh position

@default [Vector3](/classes/2.4/Vector3)(0, 0, 0)

### billboardMode : number

The mesh billboardMode

@default [AbstractMesh](/classes/2.4/AbstractMesh).BILLBOARDMODE_NONE

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

### material : [Material](/classes/2.4/Material)

The material

### receiveShadows : boolean

Receive shadows

@default false

### actionManager : [ActionManager](/classes/2.4/ActionManager)

The action manager

### renderOutline : boolean

Render Outline

### outlineColor : [Color3](/classes/2.4/Color3)

outline color

### outlineWidth : number

outline Width

### renderOverlay : boolean



### overlayColor : [Color3](/classes/2.4/Color3)



### overlayAlpha : number



### hasVertexAlpha : boolean



### useVertexColors : boolean



### applyFog : boolean



### computeBonesUsingShaders : boolean



### scalingDeterminant : number



### numBoneInfluencers : number



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



### physicsImpostor : undefined



### onPhysicsCollide : (collidedMesh: [AbstractMesh](/classes/2.4/AbstractMesh), contact: any) =&gt; void



### ellipsoid : [Vector3](/classes/2.4/Vector3)

Ellipsoid

### ellipsoidOffset : [Vector3](/classes/2.4/Vector3)

Ellipsoid offset

### edgesWidth : number



### edgesColor : [Color4](/classes/2.4/Color4)



### subMeshes : [SubMesh](/classes/2.4/SubMesh)[]

subMeshes

### skeleton : [Skeleton](/classes/2.4/Skeleton)

The skeleton

### rotation : [Vector3](/classes/2.4/Vector3)

Getting the rotation object.

If rotation quaternion is set, this vector will (almost always) be the Zero vector!

### scaling : [Vector3](/classes/2.4/Vector3)

The mesh scaling

@default [Vector3](/classes/2.4/Vector3)(1,1,1)

### rotationQuaternion : [Quaternion](/classes/2.4/Quaternion)

The mesh rotation [Quaternion](/classes/2.4/Quaternion)

@default [Quaternion](/classes/2.4/Quaternion)(x, y, z, w)

### isBlocked : boolean



### useBones : boolean



### worldMatrixFromCache : [Matrix](/classes/2.4/Matrix)

World [Matrix](/classes/2.4/Matrix) from cache

### absolutePosition : [Vector3](/classes/2.4/Vector3)

Absolute Position

### isWorldMatrixFrozen : boolean



### checkCollisions : boolean

Is check collisions

@default false

## Methods

### toStringundefined &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updatePoseMatrixundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getPoseMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### disableEdgesRenderingundefined &rarr; void


### enableEdgesRenderingundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLODundefined &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getTotalVerticesundefined &rarr; number


### getIndicesundefined &rarr; number[]


### getVerticesDataundefined &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### isVerticesDataPresentundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getBoundingInfoundefined &rarr; [BoundingInfo](/classes/2.4/BoundingInfo)


### getWorldMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### freezeWorldMatrixundefined &rarr; void


### unfreezeWorldMatrixundefined &rarr; void


### rotateundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### translateundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAbsolutePositionundefined &rarr; [Vector3](/classes/2.4/Vector3)


### setAbsolutePositionundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### movePOVundefined &rarr; void

Perform relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### calcMovePOVundefined &rarr; [Vector3](/classes/2.4/Vector3)

Calculate relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### rotatePOVundefined &rarr; void

Perform relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### calcRotatePOVundefined &rarr; [Vector3](/classes/2.4/Vector3)

Calculate relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setPivotMatrixundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getPivotMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### markAsDirtyundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### computeWorldMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### registerAfterWorldMatrixUpdateundefined &rarr; void

If you'd like to be callbacked after the mesh position, rotation or scaling has been updated

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unregisterAfterWorldMatrixUpdateundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setPositionWithLocalVectorundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getPositionExpressedInLocalSpaceundefined &rarr; [Vector3](/classes/2.4/Vector3)


### locallyTranslateundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### lookAtundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### attachToBoneundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### detachFromBoneundefined &rarr; void


### isInFrustumundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### isCompletelyInFrustumundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### intersectsMeshundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### intersectsPointundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setPhysicsStateundefined &rarr; any

@Deprecated. Use new [PhysicsImpostor](/classes/2.4/PhysicsImpostor) instead.

*/

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getPhysicsImpostorundefined &rarr; [PhysicsImpostor](/classes/2.4/PhysicsImpostor)


### getPhysicsMassundefined &rarr; number

@Deprecated. Use getPhysicsImpostor().getParam("mass");
### getPhysicsFrictionundefined &rarr; number

@Deprecated. Use getPhysicsImpostor().getParam("friction");
### getPhysicsRestitutionundefined &rarr; number

@Deprecated. Use getPhysicsImpostor().getParam("restitution");
### getPositionInCameraSpaceundefined &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getDistanceToCameraundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### applyImpulseundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setPhysicsLinkWithundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updatePhysicsBodyPositionundefined &rarr; void

@Deprecated
### updatePhysicsBodyundefined &rarr; void

@Deprecated

Calling this function is not needed anymore.

The physics engine takes care of transofmration automatically.
### moveWithCollisionsundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createOrUpdateSubmeshesOctreeundefined &rarr; [Octree](/classes/2.4/Octree)&lt;[SubMesh](/classes/2.4/SubMesh)&gt;

This function will create an octree to help select the right submeshes for rendering, picking and collisions

Please note that you must have a decent number of submeshes to get performance improvements when using octree

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### intersectsundefined &rarr; [PickingInfo](/classes/2.4/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### cloneundefined &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### releaseSubMeshesundefined &rarr; void


### disposeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
