---
ID_PAGE: 25299
PG_TITLE: PostProcessRenderPipelineManager
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [PostProcessRenderPipelineManager](/classes/2.5/PostProcessRenderPipelineManager)

Managing all pipelines, allow you to enable or disable an effect, displaying a pass of post process for debugging.

A tutorial about the render pipeline can be found here : https://doc.babylonjs.com/tutorials/using_standard_rendering_pipeline

## Constructor

## new [PostProcessRenderPipelineManager](/classes/2.5/PostProcessRenderPipelineManager)()

Builds a [PostProcessRenderPipelineManager](/classes/2.5/PostProcessRenderPipelineManager) object
## Methods

### addPipeline(renderPipeline) &rarr; void

Adds a pipeline to the pool

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipeline | [PostProcessRenderPipeline](/classes/2.5/PostProcessRenderPipeline) |     The given pipeline

### attachCamerasToRenderPipeline(renderPipelineName, cameras, unique) &rarr; any

Attach a render pipeline to a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | cameras | [Camera](/classes/2.5/Camera) |     The given camera or an array of cameras
optional | unique | boolean |     @param unique
### attachCamerasToRenderPipeline(renderPipelineName, cameras, unique) &rarr; any

Attach a render pipeline to a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | cameras | [Camera](/classes/2.5/Camera)[] |     The given camera or an array of cameras
optional | unique | boolean |     @param unique
### detachCamerasFromRenderPipeline(renderPipelineName, cameras) &rarr; any

Detach a render pipeline to a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | cameras | [Camera](/classes/2.5/Camera) |     The given camera or an array of cameras
### detachCamerasFromRenderPipeline(renderPipelineName, cameras) &rarr; any

Detach a render pipeline to a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | cameras | [Camera](/classes/2.5/Camera)[] |     The given camera or an array of cameras
### enableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any

Enable an effect in a pipeline for a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | renderEffectName | string |     The render effect name
 | cameras | [Camera](/classes/2.5/Camera) |     The given camera or an array of cameras
### enableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any

Enable an effect in a pipeline for a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | renderEffectName | string |     The render effect name
 | cameras | [Camera](/classes/2.5/Camera)[] |     The given camera or an array of cameras
### disableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any

Disable an effect in a pipeline for a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | renderEffectName | string |     The render effect name
 | cameras | [Camera](/classes/2.5/Camera) |     The given camera or an array of cameras
### disableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any

Disable an effect in a pipeline for a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | renderEffectName | string |     The render effect name
 | cameras | [Camera](/classes/2.5/Camera)[] |     The given camera or an array of cameras
### enableDisplayOnlyPassInPipeline(renderPipelineName, passName, cameras) &rarr; any

Enable displaying of a specific pass used in a specific render pipeline, for a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | passName | string |     The pass name
 | cameras | [Camera](/classes/2.5/Camera) |     The given camera or an array of cameras
### enableDisplayOnlyPassInPipeline(renderPipelineName, passName, cameras) &rarr; any

Enable displaying of a specific pass used in a specific render pipeline, for a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | passName | string |     The pass name
 | cameras | [Camera](/classes/2.5/Camera)[] |     The given camera or an array of cameras
### disableDisplayOnlyPassInPipeline(renderPipelineName, cameras) &rarr; any

Disable displaying of a specific pass used in a specific render pipeline, for a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | cameras | [Camera](/classes/2.5/Camera) |     The given camera or an array of cameras
### disableDisplayOnlyPassInPipeline(renderPipelineName, cameras) &rarr; any

Disable displaying of a specific pass used in a specific render pipeline, for a list(or unique) of cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |     The render pipeline name
 | cameras | [Camera](/classes/2.5/Camera)[] |     The given camera or an array of cameras
### update() &rarr; void


