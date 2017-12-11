---
ID_PAGE: 25294
PG_TITLE: PostProcessRenderEffect
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [PostProcessRenderEffect](/classes/3.1/PostProcessRenderEffect)



## Constructor

## new [PostProcessRenderEffect](/classes/3.1/PostProcessRenderEffect)(engine, name, getPostProcess, singleInstance)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/3.1/Engine) | 
 | name | string | 
 | getPostProcess |  | 
## Members

### applyParameters : (postProcess: [PostProcess](/classes/3.1/PostProcess)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](/classes/3.1/PostProcess) | 

### isSupported : boolean


## Methods

### addPass(renderPass) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](/classes/3.1/PostProcessRenderPass) | 

### removePass(renderPass) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](/classes/3.1/PostProcessRenderPass) | 

### addRenderEffectAsPass(renderEffect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderEffect | [PostProcessRenderEffect](/classes/3.1/PostProcessRenderEffect) | 

### getPass(passName) &rarr; [PostProcessRenderPass](/classes/3.1/PostProcessRenderPass)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | passName | string | 

### emptyPasses() &rarr; void


### getPostProcess(camera) &rarr; [PostProcess](/classes/3.1/PostProcess)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/3.1/Camera) | 

