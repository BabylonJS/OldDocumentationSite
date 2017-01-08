---
TAGS:
---
## Description

class [GroupInstanceInfo](/classes/2.0/GroupInstanceInfo)



## Constructor

## new [GroupInstanceInfo](/classes/2.0/GroupInstanceInfo)(owner, mrc, partCount)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | owner | [Group2D](/classes/2.0/Group2D) | 
 | mrc | [ModelRenderCache](/classes/2.0/ModelRenderCache) | 
 | partCount | number | 
## Members

### owner : [Group2D](/classes/2.0/Group2D)



### modelRenderCache : [ModelRenderCache](/classes/2.0/ModelRenderCache)



### partIndexFromId : StringDictionary&lt;number&gt;



### hasOpaqueData : boolean



### hasAlphaTestData : boolean



### hasTransparentData : boolean



### opaqueDirty : boolean



### opaqueData : [GroupInfoPartData](/classes/2.0/GroupInfoPartData)[]



### alphaTestDirty : boolean



### alphaTestData : [GroupInfoPartData](/classes/2.0/GroupInfoPartData)[]



### transparentOrderDirty : boolean



### transparentDirty : boolean



### transparentData : [TransparentGroupInfoPartData](/classes/2.0/TransparentGroupInfoPartData)[]



### usedShaderCategories : string[]



### strides : number[]



## Methods

### dispose() &rarr; boolean


### sortTransparentData() &rarr; void


