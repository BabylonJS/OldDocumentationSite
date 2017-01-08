---
TAGS:
---
## Description

class [Rectangle2DRenderCache](/classes/2.0/Rectangle2DRenderCache) extends [ModelRenderCache](/classes/2.0/ModelRenderCache)



## Constructor

## new [Rectangle2DRenderCache](/classes/2.0/Rectangle2DRenderCache)(engine, modelKey)



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



### effectFill : Effect



### effectFillInstanced : Effect



### borderVB : WebGLBuffer



### borderIB : WebGLBuffer



### borderIndicesCount : number



### instancingBorderAttributes : InstancingAttributeInfo[]



### effectBorder : Effect



### effectBorderInstanced : Effect



## Methods

### render(instanceInfo, context) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | instanceInfo | [GroupInstanceInfo](/classes/2.0/GroupInstanceInfo) | 
 | context | [Render2DContext](/classes/2.0/Render2DContext) | 
### dispose() &rarr; boolean


