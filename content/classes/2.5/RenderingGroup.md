---
ID_PAGE: 25303
PG_TITLE: RenderingGroup
PG_VERSION: 2.1
---
## Description

class [RenderingGroup](/classes/2.5/RenderingGroup)



## Constructor

## new [RenderingGroup](/classes/2.5/RenderingGroup)(index, scene, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn)

Creates a new rendering group.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number |  The rendering group index    @param index
 | scene | [Scene](/classes/2.5/Scene) |     @param scene
optional | opaqueSortCompareFn | (a: [SubMesh](/classes/2.5/SubMesh), b: [SubMesh](/classes/2.5/SubMesh)) =&gt; number |  The opaque sort comparison function. If null no order is applied
optional | alphaTestSortCompareFn | (a: [SubMesh](/classes/2.5/SubMesh), b: [SubMesh](/classes/2.5/SubMesh)) =&gt; number |  The alpha test sort comparison function. If null no order is applied
## Members

### index : number



### onBeforeTransparentRendering : () =&gt; void



### opaqueSortCompareFn : (a: [SubMesh](/classes/2.5/SubMesh), b: [SubMesh](/classes/2.5/SubMesh)) =&gt; number

Set the opaque sort comparison function.

If null the sub meshes will be render in the order they were created

### alphaTestSortCompareFn : (a: [SubMesh](/classes/2.5/SubMesh), b: [SubMesh](/classes/2.5/SubMesh)) =&gt; number

Set the alpha test sort comparison function.

If null the sub meshes will be render in the order they were created

### transparentSortCompareFn : (a: [SubMesh](/classes/2.5/SubMesh), b: [SubMesh](/classes/2.5/SubMesh)) =&gt; number

Set the transparent sort comparison function.

If null the sub meshes will be render in the order they were created

## Methods

### render(customRenderFunction) &rarr; boolean

Render all the sub meshes contained in the group.

@returns true if rendered some submeshes.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | customRenderFunction | (opaqueSubMeshes: [SmartArray](/classes/2.5/SmartArray)&lt;[SubMesh](/classes/2.5/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/2.5/SmartArray)&lt;[SubMesh](/classes/2.5/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/2.5/SmartArray)&lt;[SubMesh](/classes/2.5/SubMesh)&gt;) =&gt; void |  Used to override the default render behaviour of the group.    

### static defaultTransparentSortCompare(a, b) &rarr; number

Build in function which can be applied to ensure meshes of a special queue (opaque, alpha test, transparent)

are rendered back to front if in the same alpha index.

         * @param a The first submesh

@returns The result of the comparison

#### Parameters
 | Name | Type | Description
---|---|---|---
 | a | [SubMesh](/classes/2.5/SubMesh) |  The first submesh
 | b | [SubMesh](/classes/2.5/SubMesh) |  The second submesh
### static backToFrontSortCompare(a, b) &rarr; number

Build in function which can be applied to ensure meshes of a special queue (opaque, alpha test, transparent)

are rendered back to front.

         * @param a The first submesh

@returns The result of the comparison

#### Parameters
 | Name | Type | Description
---|---|---|---
 | a | [SubMesh](/classes/2.5/SubMesh) |  The first submesh
 | b | [SubMesh](/classes/2.5/SubMesh) |  The second submesh
### static frontToBackSortCompare(a, b) &rarr; number

Build in function which can be applied to ensure meshes of a special queue (opaque, alpha test, transparent)

are rendered front to back (prevent overdraw).

         * @param a The first submesh

@returns The result of the comparison

#### Parameters
 | Name | Type | Description
---|---|---|---
 | a | [SubMesh](/classes/2.5/SubMesh) |  The first submesh
 | b | [SubMesh](/classes/2.5/SubMesh) |  The second submesh
### prepare() &rarr; void

Resets the different lists of submeshes to prepare a new frame.
### dispatch(subMesh) &rarr; void

Inserts the submesh in its correct queue depending on its material.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/2.5/SubMesh) |  The submesh to dispatch    @param subMesh

