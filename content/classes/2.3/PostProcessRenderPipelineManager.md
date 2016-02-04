---
ID_PAGE: 25299
PG_TITLE: PostProcessRenderPipelineManager
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [PostProcessRenderPipelineManager](/classes/2.3/PostProcessRenderPipelineManager)



## Constructor

##  new [PostProcessRenderPipelineManager](/classes/2.3/PostProcessRenderPipelineManager)()


## Methods

### addPipeline(renderPipeline) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipeline | [PostProcessRenderPipeline](/classes/2.3/PostProcessRenderPipeline) |   The given pipeline

### attachCamerasToRenderPipeline(renderPipelineName, cameras, unique) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | cameras | [Camera](/classes/2.3/Camera) |   The given camera or an array of cameras
optional | unique | boolean |   @param unique
### attachCamerasToRenderPipeline(renderPipelineName, cameras, unique) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | cameras | [Camera](/classes/2.3/Camera)[] |   The given camera or an array of cameras
optional | unique | boolean |   @param unique
### detachCamerasFromRenderPipeline(renderPipelineName, cameras) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | cameras | [Camera](/classes/2.3/Camera) |   The given camera or an array of cameras
### detachCamerasFromRenderPipeline(renderPipelineName, cameras) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | cameras | [Camera](/classes/2.3/Camera)[] |   The given camera or an array of cameras
### enableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | renderEffectName | string |   The render effect name
 | cameras | [Camera](/classes/2.3/Camera) |   The given camera or an array of cameras
### enableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | renderEffectName | string |   The render effect name
 | cameras | [Camera](/classes/2.3/Camera)[] |   The given camera or an array of cameras
### disableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | renderEffectName | string |   The render effect name
 | cameras | [Camera](/classes/2.3/Camera) |   The given camera or an array of cameras
### disableEffectInPipeline(renderPipelineName, renderEffectName, cameras) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | renderEffectName | string |   The render effect name
 | cameras | [Camera](/classes/2.3/Camera)[] |   The given camera or an array of cameras
### enableDisplayOnlyPassInPipeline(renderPipelineName, passName, cameras) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | passName | string |   The pass name
 | cameras | [Camera](/classes/2.3/Camera) |   The given camera or an array of cameras
### enableDisplayOnlyPassInPipeline(renderPipelineName, passName, cameras) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | passName | string |   The pass name
 | cameras | [Camera](/classes/2.3/Camera)[] |   The given camera or an array of cameras
### disableDisplayOnlyPassInPipeline(renderPipelineName, cameras) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | cameras | [Camera](/classes/2.3/Camera) |   The given camera or an array of cameras
### disableDisplayOnlyPassInPipeline(renderPipelineName, cameras) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPipelineName | string |   The render pipeline name
 | cameras | [Camera](/classes/2.3/Camera)[] |   The given camera or an array of cameras
### update() &rarr; void


