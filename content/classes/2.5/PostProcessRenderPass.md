---
ID_PAGE: 25295
PG_TITLE: PostProcessRenderPass
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [PostProcessRenderPass](/classes/2.5/PostProcessRenderPass)

A render pass is render texture that can be used in differents render effects

## Constructor

## new [PostProcessRenderPass](/classes/2.5/PostProcessRenderPass)(scene, name, size, renderList, beforeRender, afterRender)

Builds a new [PostProcessRenderPass](/classes/2.5/PostProcessRenderPass) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.5/Scene) |     The scene linked to this renderer
 | name | string |     The name of the object
 | size | number |     The size of the renderer in pixels
 | renderList | [Mesh](/classes/2.5/Mesh)[] |     @param renderList
 | beforeRender | () =&gt; void |     The function to run before rendering
## Methods

### setRenderList(renderList) &rarr; void

Updates the render list

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderList | [Mesh](/classes/2.5/Mesh)[] |     @param renderList

### getRenderTexture() &rarr; [RenderTargetTexture](/classes/2.5/RenderTargetTexture)


