---
TAGS:
---
## Description

class [GroupInstanceInfo](/classes/2.4/GroupInstanceInfo)



## Constructor

## new [GroupInstanceInfo](/classes/2.4/GroupInstanceInfo)(owner, mrc, partCount)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | owner | [Group2D](/classes/2.4/Group2D) | 
 | mrc | [ModelRenderCache](/classes/2.4/ModelRenderCache) | 
 | partCount | number | 
## Members

### owner : [Group2D](/classes/2.4/Group2D)



### modelRenderCache : [ModelRenderCache](/classes/2.4/ModelRenderCache)



### partIndexFromId : [StringDictionary](/classes/2.4/StringDictionary)&lt;number&gt;



### hasOpaqueData : boolean



### hasAlphaTestData : boolean



### hasTransparentData : boolean



### opaqueDirty : boolean



### opaqueData : [GroupInfoPartData](/classes/2.4/GroupInfoPartData)[]



### alphaTestDirty : boolean



### alphaTestData : [GroupInfoPartData](/classes/2.4/GroupInfoPartData)[]



### transparentOrderDirty : boolean



### transparentDirty : boolean



### transparentData : [TransparentGroupInfoPartData](/classes/2.4/TransparentGroupInfoPartData)[]



### usedShaderCategories : string[]



### strides : number[]



## Methods

### dispose() &rarr; boolean


### sortTransparentData() &rarr; void


