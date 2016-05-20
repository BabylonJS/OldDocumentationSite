---
TAGS:
---
## Description

class [RenderablePrim2D](/classes/2.4/RenderablePrim2D) extends [Prim2DBase](/classes/2.4/Prim2DBase)



## Members

### static RENDERABLEPRIM2D_PROPCOUNT : number



### static isTransparentProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### isTransparent : boolean



### modelRenderCache : [ModelRenderCache](/classes/2.4/ModelRenderCache)



## Methods

### setupRenderablePrim2D(owner, parent, id, position, isVisible) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | owner | [Canvas2D](/classes/2.4/Canvas2D) | 
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | position | [Vector2](/classes/2.4/Vector2) | 
### dispose() &rarr; boolean


### getDataPartEffectInfo(dataPartId, vertexBufferAttributes) &rarr; { attributes: string[],  uniforms: string[],  defines: string }



#### Parameters
 | Name | Type | Description
---|---|---|---
 | dataPartId | number | 
 | vertexBufferAttributes | string[] | 
### createModelRenderCache(modelKey, isTransparent) &rarr; [ModelRenderCache](/classes/2.4/ModelRenderCache)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | modelKey | string | 
 | isTransparent | boolean | 
### setupModelRenderCache(modelRenderCache) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | modelRenderCache | [ModelRenderCache](/classes/2.4/ModelRenderCache) | 

### createInstanceDataParts() &rarr; [InstanceDataBase](/classes/2.4/InstanceDataBase)[]


### getUsedShaderCategories(dataPart) &rarr; string[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | dataPart | [InstanceDataBase](/classes/2.4/InstanceDataBase) | 

### beforeRefreshForLayoutConstruction(part) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | part | [InstanceDataBase](/classes/2.4/InstanceDataBase) | 

### afterRefreshForLayoutConstruction(part, obj) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | part | [InstanceDataBase](/classes/2.4/InstanceDataBase) | 
 | obj | any | 
### refreshInstanceDataPart(part) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | part | [InstanceDataBase](/classes/2.4/InstanceDataBase) | 

### updateInstanceDataPart(part, positionOffset, customSize) &rarr; void

Update the instanceDataBase level properties of a part

#### Parameters
 | Name | Type | Description
---|---|---|---
 | part | [InstanceDataBase](/classes/2.4/InstanceDataBase) |  the part to update
optional | positionOffset | [Vector2](/classes/2.4/Vector2) |  to use in multi part per primitive (e.g. the [Text2D](/classes/2.4/Text2D) has N parts for N letter to display), this give the offset to apply (e.g. the position of the letter from the bottom/left corner of the text). You MUST also set customSize.
optional | customSize | [Size](/classes/2.4/Size) |  to use in multi part per primitive, this is the size of the overall primitive to display (the bounding rect's size of the Text, for instance). This is mandatory to compute correct transformation based on the Primitive's origin property.
