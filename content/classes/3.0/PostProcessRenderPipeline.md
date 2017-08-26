---
ID_PAGE: 25296
PG_TITLE: PostProcessRenderPipeline
PG_VERSION: 2.1
TAGS:
    - PostProcess
    - PostProcessRenderPipeline
---
## Description

class [PostProcessRenderPipeline](/classes/3.0/PostProcessRenderPipeline)

Post Process Renders pipelines allow you to create a chain of post processes and attach it to a camera.

A render pipeline can be managed by enabling and disabling some effects and displaying a specific pass for debugging.

A tutorial about the render pipeline can be found here : https://doc.babylonjs.com/how_to/using_standard_rendering_pipeline

## Constructor

## new [PostProcessRenderPipeline](/classes/3.0/PostProcessRenderPipeline)(engine, name)

Builds a [PostProcessRenderPipeline](/classes/3.0/PostProcessRenderPipeline) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/3.0/Engine) |      The used engine
 | name | string |      The name of the object
## Members

### isSupported : boolean



## Methods

### addEffect(renderEffect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderEffect | [PostProcessRenderEffect](/classes/3.0/PostProcessRenderEffect) |      The given render effect

### dispose() &rarr; void


