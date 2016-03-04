---
ID_PAGE: 25294
PG_TITLE: PostProcessRenderEffect
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [PostProcessRenderEffect](/classes/2.3/PostProcessRenderEffect)

A render effect is a smart postprocess which can manage its own instances itself.

A tutorial about the render pipeline can be found here

## Constructor

## new [PostProcessRenderEffect](/classes/2.3/PostProcessRenderEffect)(engine, name, getPostProcess, singleInstance)

Builds a [PostProcessRenderEffect](/classes/2.3/PostProcessRenderEffect) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.3/Engine) |   The used engine
 | name | string |   The name of the postprocess rendrer effect
 | getPostProcess | () =&gt; [PostProcess](/classes/2.3/PostProcess) |   The function has to return a new instance of the postprocess which will be used
## Members

### applyParameters : (postProcess: [PostProcess](/classes/2.3/PostProcess)) =&gt; void

Applies given postProcess object to the rendrer effect

### isSupported : boolean



## Methods

### addPass(renderPass) &rarr; void

Adds a new pass to the effect

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](/classes/2.3/PostProcessRenderPass) |   The pass to remove

### removePass(renderPass) &rarr; void

Removes a pass from the effect

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](/classes/2.3/PostProcessRenderPass) |   The pass to remove

### addRenderEffectAsPass(renderEffect) &rarr; void

Adds a render effect as a pass

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderEffect | [PostProcessRenderEffect](/classes/2.3/PostProcessRenderEffect) |   The effect to add

### getPass(passName) &rarr; void

Returns a pass using its name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | passName | string |   The given name

### emptyPasses() &rarr; void

Delete all passes
### getPostProcess(camera) &rarr; [PostProcess](/classes/2.3/PostProcess)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.3/Camera) |   default : this camera

