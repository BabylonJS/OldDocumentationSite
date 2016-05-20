---
ID_PAGE: 25304
PG_TITLE: RenderingManager
PG_VERSION: 2.1
---
## Description

class [RenderingManager](/classes/2.4/RenderingManager)



## Constructor

## new [RenderingManager](/classes/2.4/RenderingManager)(scene)

Builds a new Rendering manager object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) |    The scene linked to this rendering manager

## Members

### static MAX_RENDERINGGROUPS : number

The max rendering groups

default : 4

## Methods

### render(customRenderFunction, activeMeshes, renderParticles, renderSprites) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | customRenderFunction | (opaqueSubMeshes: [SmartArray](/classes/2.4/SmartArray)&lt;[SubMesh](/classes/2.4/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/2.4/SmartArray)&lt;[SubMesh](/classes/2.4/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/2.4/SmartArray)&lt;[SubMesh](/classes/2.4/SubMesh)&gt;) =&gt; void |    
 | activeMeshes | [AbstractMesh](/classes/2.4/AbstractMesh)[] |    
 | renderParticles | boolean |    
### reset() &rarr; void


### dispatch(subMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/2.4/SubMesh) |    

