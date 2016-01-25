---
ID_PAGE: 25295
PG_TITLE: PostProcessRenderPass
PG_VERSION: 2.1
TAGS:
    - PostProcess
---

A render pass is render texture that can be used in differents render effects
##new [PostProcessRenderPass](/classes/PostProcessRenderPass)(scene, name, size, renderList, beforeRender, afterRender)




Builds a new [PostProcessRenderPass](/classes/PostProcessRenderPass) object












####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | The scene linked to this renderer
 | name | string | The name of the object
 | size | number | The size of the renderer in pixels
 | renderList | [Mesh](/classes/Mesh)[] | the list of renderers
 | beforeRender | () =&gt; void | The function to run before rendering
 | afterRender | () =&gt; void | The function to run after rendering
---



##Methods

###setRenderList(renderList) &rarr; void
Updates the render list







####Parameters
 | Name | Type | Description
---|---|---|---
 | renderList | [Mesh](/classes/Mesh)[] | @param renderList
---

###getRenderTexture() &rarr; [RenderTargetTexture](/classes/RenderTargetTexture)

