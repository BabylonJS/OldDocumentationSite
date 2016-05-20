---
ID_PAGE: 25303
PG_TITLE: RenderingGroup
PG_VERSION: 2.1
---
## Description

class [RenderingGroup](/classes/2.4/RenderingGroup)



## Constructor

## new [RenderingGroup](/classes/2.4/RenderingGroup)(index, scene)

Creates a new rendering group

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number |    @param index
 | scene | [Scene](/classes/2.4/Scene) |    @param scene
## Members

### index : number



### onBeforeTransparentRendering : () =&gt; void



## Methods

### render(customRenderFunction) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | customRenderFunction | (opaqueSubMeshes: [SmartArray](/classes/2.4/SmartArray)&lt;[SubMesh](/classes/2.4/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/2.4/SmartArray)&lt;[SubMesh](/classes/2.4/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/2.4/SmartArray)&lt;[SubMesh](/classes/2.4/SubMesh)&gt;) =&gt; void |    

### prepare() &rarr; void


### dispatch(subMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/2.4/SubMesh) |    @param subMesh

