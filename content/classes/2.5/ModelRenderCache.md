---
TAGS:
---
## Description

class [ModelRenderCache](/classes/2.0/ModelRenderCache)



## Constructor

## new [ModelRenderCache](/classes/2.0/ModelRenderCache)(engine, modelKey)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | Engine | 
 | modelKey | string | 
## Members

### isDisposed : boolean



### modelKey : string



## Methods

### dispose() &rarr; boolean


### addRef() &rarr; number


### render(instanceInfo, context) &rarr; boolean

Render the model instances

@return must return true is the rendering succeed, false if the rendering couldn't be done (asset's not yet ready, like Effect)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | instanceInfo | [GroupInstanceInfo](/classes/2.0/GroupInstanceInfo) | 
 | context | [Render2DContext](/classes/2.0/Render2DContext) | 
