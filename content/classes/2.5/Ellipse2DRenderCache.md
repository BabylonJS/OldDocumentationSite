---
TAGS:
---
## Description

class [Ellipse2DRenderCache](/classes/2.0/Ellipse2DRenderCache) extends [ModelRenderCache](/classes/2.0/ModelRenderCache)



## Constructor

## new [Ellipse2DRenderCache](/classes/2.0/Ellipse2DRenderCache)(engine, modelKey)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | Engine | 
 | modelKey | string | 
## Members

### effectsReady : boolean



### fillVB : WebGLBuffer



### fillIB : WebGLBuffer



### fillIndicesCount : number



### instancingFillAttributes : InstancingAttributeInfo[]



### effectFillInstanced : Effect



### effectFill : Effect



### borderVB : WebGLBuffer



### borderIB : WebGLBuffer



### borderIndicesCount : number



### instancingBorderAttributes : InstancingAttributeInfo[]



### effectBorderInstanced : Effect



### effectBorder : Effect



## Methods

### render(instanceInfo, context) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | instanceInfo | [GroupInstanceInfo](/classes/2.0/GroupInstanceInfo) | 
 | context | [Render2DContext](/classes/2.0/Render2DContext) | 
### dispose() &rarr; boolean


