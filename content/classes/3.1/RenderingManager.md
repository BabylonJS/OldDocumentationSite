---
ID_PAGE: 25304
PG_TITLE: RenderingManager
PG_VERSION: 2.1
---
## Description

class [RenderingManager](/classes/3.1/RenderingManager)



## Constructor

## new [RenderingManager](/classes/3.1/RenderingManager)(scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 

## Members

### static MAX_RENDERINGGROUPS : number

The max id used for rendering groups (not included)
### static MIN_RENDERINGGROUPS : number

The min id used for rendering groups (included)
### static AUTOCLEAR : boolean

Used to globally prevent autoclearing scenes.
## Methods

### render(customRenderFunction, activeMeshes, renderParticles, renderSprites) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | customRenderFunction | Nullable&lt;(opaqueSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, depthOnlySubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;) =&gt; void&gt; | 
 | activeMeshes | Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)[]&gt; | 
 | renderParticles | boolean | 
### reset() &rarr; void


### dispose() &rarr; void


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

### dispatch(subMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/3.1/SubMesh) | 

### setRenderingOrder(renderingGroupId, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn) &rarr; void

Overrides the default sort function applied in the renderging group to prepare the meshes.

This allowed control for front to back rendering or reversly depending of the special needs.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index
optional | opaqueSortCompareFn | Nullable&lt;(a: [SubMesh](/classes/3.1/SubMesh), b: [SubMesh](/classes/3.1/SubMesh)) =&gt; number&gt; |  The opaque queue comparison function use to sort.
optional | alphaTestSortCompareFn | Nullable&lt;(a: [SubMesh](/classes/3.1/SubMesh), b: [SubMesh](/classes/3.1/SubMesh)) =&gt; number&gt; |  The alpha test queue comparison function use to sort.
### setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil, depth, stencil) &rarr; void

Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index
 | autoClearDepthStencil | boolean |  Automatically clears depth and stencil between groups if true.
optional | depth | boolean |  Automatically clears depth between groups if true and autoClear is true.
