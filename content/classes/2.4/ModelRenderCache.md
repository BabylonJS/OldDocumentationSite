---
TAGS:
---
## Description

class [ModelRenderCache](/classes/2.4/ModelRenderCache)



## Constructor

## new [ModelRenderCache](/classes/2.4/ModelRenderCache)(engine, modelKey, isTransparent)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.4/Engine) | 
 | modelKey | string | 
 | isTransparent | boolean | 
## Members

### isDisposed : boolean



### modelKey : string



### isTransparent : boolean



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

### getPartIndexFromId(partId) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | partId | number | 

### loadInstancingAttributes(partId, effect) &rarr; [InstancingAttributeInfo](/classes/2.4/InstancingAttributeInfo)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | partId | number | 
 | effect | [Effect](/classes/2.4/Effect) | 
### setupUniforms(effect, partIndex, data, elementCount) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.4/Effect) | 
 | partIndex | number | 
 | data | [DynamicFloatArray](/classes/2.4/DynamicFloatArray) | 
