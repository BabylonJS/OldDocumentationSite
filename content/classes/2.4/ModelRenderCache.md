---
TAGS:
---
## Description

class [ModelRenderCache](/classes/2.4/ModelRenderCache)



## Constructor

## new [ModelRenderCache](/classes/2.4/ModelRenderCache)(engine, modelKey)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.4/Engine) | 
 | modelKey | string | 
## Members

### isDisposed : boolean



### modelKey : string



## Methods

### dispose() &rarr; boolean


### addRef() &rarr; number


### render(instanceInfo, context) &rarr; boolean

Render the model instances

@return must return true is the rendering succeed, false if the rendering couldn't be done (asset's not yet ready, like [Effect](/classes/2.4/Effect))

#### Parameters
 | Name | Type | Description
---|---|---|---
 | instanceInfo | [GroupInstanceInfo](/classes/2.4/GroupInstanceInfo) | 
 | context | [Render2DContext](/classes/2.4/Render2DContext) | 
### addInstanceDataParts(data) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | [InstanceDataBase](/classes/2.4/InstanceDataBase)[] | 

### removeInstanceData(key) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string | 

