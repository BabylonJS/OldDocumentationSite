---
ID_PAGE: 25304
PG_TITLE: RenderingManager
PG_VERSION: 2.1
---
##new [RenderingManager](/classes/RenderingManager)(scene)




Builds a new Rendering manager object






####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | The scene linked to this rendering manager
---

##Members

###static MAX_RENDERINGGROUPS : number





The max rendering groups

default : 4















##Methods

###render(customRenderFunction, activeMeshes, renderParticles, renderSprites) &rarr; void







####Parameters
 | Name | Type | Description
---|---|---|---
 | customRenderFunction | (opaqueSubMeshes: SmartArray&lt;SubMesh&gt;, transparentSubMeshes: SmartArray&lt;SubMesh&gt;, alphaTestSubMeshes: SmartArray&lt;SubMesh&gt;) =&gt; void | 
 | activeMeshes | [AbstractMesh](/classes/AbstractMesh)[] | 
 | renderParticles | boolean | 
 | renderSprites | boolean | 
---

###reset() &rarr; void








###dispatch(subMesh) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/SubMesh) | 
---
