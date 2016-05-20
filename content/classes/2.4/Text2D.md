---
TAGS:
---
## Description

class [Text2D](/classes/2.4/Text2D) extends [RenderablePrim2D](/classes/2.4/RenderablePrim2D)



## Members

### static TEXT2D_MAINPARTID : number



### static fontProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static defaultFontColorProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static textProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static areaSizeProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static vAlignProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static hAlignProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static TEXT2D_VALIGN_TOP : number



### static TEXT2D_VALIGN_CENTER : number



### static TEXT2D_VALIGN_BOTTOM : number



### static TEXT2D_HALIGN_LEFT : number



### static TEXT2D_HALIGN_CENTER : number



### static TEXT2D_HALIGN_RIGHT : number



### fontName : string



### defaultFontColor : [Color4](/classes/2.4/Color4)



### text : string



### areaSize : [Size](/classes/2.4/Size)



### vAlign : number



### hAlign : number



### actualSize : [Size](/classes/2.4/Size)



### fontTexture : [FontTexture](/classes/2.4/FontTexture)



## Methods

### dispose() &rarr; boolean


### updateLevelBoundingInfo() &rarr; void


### setupText2D(owner, parent, id, position, fontName, text, areaSize, defaultFontColor, vAlign, hAlign, tabulationSize) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | owner | [Canvas2D](/classes/2.4/Canvas2D) | 
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | position | [Vector2](/classes/2.4/Vector2) | 
 | fontName | string | 
 | text | string | 
 | areaSize | [Size](/classes/2.4/Size) | 
 | defaultFontColor | [Color4](/classes/2.4/Color4) | 
 | vAlign | any | 
 | hAlign | any | 
### static Create(parent, id, x, y, fontName, text, defaultFontColor, areaSize, vAlign, hAlign, tabulationSize) &rarr; [Text2D](/classes/2.4/Text2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | x | number | 
 | y | number | 
 | fontName | string | 
 | text | string | 
optional | defaultFontColor | [Color4](/classes/2.4/Color4) | 
optional | areaSize | [Size](/classes/2.4/Size) | 
optional | vAlign | number | 
optional | hAlign | number | 
### createModelRenderCache(modelKey, isTransparent) &rarr; [ModelRenderCache](/classes/2.4/ModelRenderCache)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | modelKey | string | 
 | isTransparent | boolean | 
### setupModelRenderCache(modelRenderCache) &rarr; [Text2DRenderCache](/classes/2.4/Text2DRenderCache)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | modelRenderCache | [ModelRenderCache](/classes/2.4/ModelRenderCache) | 

### createInstanceDataParts() &rarr; [InstanceDataBase](/classes/2.4/InstanceDataBase)[]


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

