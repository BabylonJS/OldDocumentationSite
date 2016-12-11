---
ID_PAGE: 25304
PG_TITLE: RenderingManager
PG_VERSION: 2.1
---
## Description

class [RenderingManager](/classes/2.5/RenderingManager)



## Constructor

## new [RenderingManager](/classes/2.5/RenderingManager)(scene)

Builds a new Rendering manager object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.5/Scene) |     The scene linked to this rendering manager

## Members

### static MAX_RENDERINGGROUPS : number

The max id used for rendering groups (not included)

### static MIN_RENDERINGGROUPS : number

The min id used for rendering groups (included)

## Methods

### render(customRenderFunction, activeMeshes, renderParticles, renderSprites) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | customRenderFunction | (opaqueSubMeshes: [SmartArray](/classes/2.5/SmartArray)&lt;[SubMesh](/classes/2.5/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/2.5/SmartArray)&lt;[SubMesh](/classes/2.5/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/2.5/SmartArray)&lt;[SubMesh](/classes/2.5/SubMesh)&gt;) =&gt; void |     
 | activeMeshes | [AbstractMesh](/classes/2.5/AbstractMesh)[] |     
 | renderParticles | boolean |     
### reset() &rarr; void


### dispatch(subMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/2.5/SubMesh) |     

### setRenderingOrder(renderingGroupId, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn) &rarr; void

Overrides the default sort function applied in the renderging group to prepare the meshes.

This allowed control for front to back rendering or reversly depending of the special needs.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index
optional | opaqueSortCompareFn | (a: [SubMesh](/classes/2.5/SubMesh), b: [SubMesh](/classes/2.5/SubMesh)) =&gt; number |  The opaque queue comparison function use to sort.
optional | alphaTestSortCompareFn | (a: [SubMesh](/classes/2.5/SubMesh), b: [SubMesh](/classes/2.5/SubMesh)) =&gt; number |  The alpha test queue comparison function use to sort.
### setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil) &rarr; void

Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index
 | autoClearDepthStencil | boolean |  Automatically clears depth and stencil between groups if true.
