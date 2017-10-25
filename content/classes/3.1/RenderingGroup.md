---
ID_PAGE: 25303
PG_TITLE: RenderingGroup
PG_VERSION: 2.1
---
## Description

class [RenderingGroup](/classes/3.1/RenderingGroup)



## Constructor

## new [RenderingGroup](/classes/3.1/RenderingGroup)(index, scene, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn)

Creates a new rendering group.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number |  The rendering group index
 | scene | [Scene](/classes/3.1/Scene) | 
optional | opaqueSortCompareFn | Nullable&lt;(a: [SubMesh](/classes/3.1/SubMesh), b: [SubMesh](/classes/3.1/SubMesh)) =&gt; number&gt; |  The opaque sort comparison function. If null no order is applied
optional | alphaTestSortCompareFn | Nullable&lt;(a: [SubMesh](/classes/3.1/SubMesh), b: [SubMesh](/classes/3.1/SubMesh)) =&gt; number&gt; |  The alpha test sort comparison function. If null no order is applied
## Members

### index : number



### onBeforeTransparentRendering : () =&gt; void



### opaqueSortCompareFn : Nullable&lt;(a: [SubMesh](/classes/3.1/SubMesh), b: [SubMesh](/classes/3.1/SubMesh)) =&gt; number&gt;

Set the opaque sort comparison function.

If null the sub meshes will be render in the order they were created

### alphaTestSortCompareFn : Nullable&lt;(a: [SubMesh](/classes/3.1/SubMesh), b: [SubMesh](/classes/3.1/SubMesh)) =&gt; number&gt;

Set the alpha test sort comparison function.

If null the sub meshes will be render in the order they were created

### transparentSortCompareFn : Nullable&lt;(a: [SubMesh](/classes/3.1/SubMesh), b: [SubMesh](/classes/3.1/SubMesh)) =&gt; number&gt;

Set the transparent sort comparison function.

If null the sub meshes will be render in the order they were created

## Methods

### render(customRenderFunction, renderSprites, renderParticles, activeMeshes) &rarr; void

Render all the sub meshes contained in the group.

@returns true if rendered some submeshes.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | customRenderFunction | Nullable&lt;(opaqueSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, depthOnlySubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;) =&gt; void&gt; |  Used to override the default render behaviour of the group.
 | renderSprites | boolean | 
 | renderParticles | boolean | 
### static defaultTransparentSortCompare(a, b) &rarr; number

Build in function which can be applied to ensure meshes of a special queue (opaque, alpha test, transparent)

are rendered back to front if in the same alpha index.

         * @param a The first submesh

@returns The result of the comparison

#### Parameters
 | Name | Type | Description
---|---|---|---
 | a | [SubMesh](/classes/3.1/SubMesh) |  The first submesh
 | b | [SubMesh](/classes/3.1/SubMesh) |  The second submesh
### static backToFrontSortCompare(a, b) &rarr; number

Build in function which can be applied to ensure meshes of a special queue (opaque, alpha test, transparent)

are rendered back to front.

         * @param a The first submesh

@returns The result of the comparison

#### Parameters
 | Name | Type | Description
---|---|---|---
 | a | [SubMesh](/classes/3.1/SubMesh) |  The first submesh
 | b | [SubMesh](/classes/3.1/SubMesh) |  The second submesh
### static frontToBackSortCompare(a, b) &rarr; number

Build in function which can be applied to ensure meshes of a special queue (opaque, alpha test, transparent)

are rendered front to back (prevent overdraw).

         * @param a The first submesh

@returns The result of the comparison

#### Parameters
 | Name | Type | Description
---|---|---|---
 | a | [SubMesh](/classes/3.1/SubMesh) |  The first submesh
 | b | [SubMesh](/classes/3.1/SubMesh) |  The second submesh
### prepare() &rarr; void

Resets the different lists of submeshes to prepare a new frame.
### dispose() &rarr; void


### dispatch(subMesh) &rarr; void

Inserts the submesh in its correct queue depending on its material.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/3.1/SubMesh) |  The submesh to dispatch

### dispatchSprites(spriteManager) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | spriteManager | [SpriteManager](/classes/3.1/SpriteManager) | 

### dispatchParticles(particleSystem) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | particleSystem | IParticleSystem | 

