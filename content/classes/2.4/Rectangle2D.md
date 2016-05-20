---
TAGS:
---
## Description

class [Rectangle2D](/classes/2.4/Rectangle2D) extends [Shape2D](/classes/2.4/Shape2D)



## Members

### static sizeProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static notRoundedProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static roundRadiusProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### actualSize : [Size](/classes/2.4/Size)



### size : [Size](/classes/2.4/Size)



### notRounded : boolean



### roundRadius : number



### static roundSubdivisions : number



## Methods

### levelIntersect(intersectInfo) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | intersectInfo | [IntersectInfo2D](/classes/2.4/IntersectInfo2D) | 

### updateLevelBoundingInfo() &rarr; void


### setupRectangle2D(owner, parent, id, position, size, roundRadius, fill, border, borderThickness) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | owner | [Canvas2D](/classes/2.4/Canvas2D) | 
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | position | [Vector2](/classes/2.4/Vector2) | 
 | size | [Size](/classes/2.4/Size) | 
optional | roundRadius | number | 
optional | fill | IBrush2D | 
optional | border | IBrush2D | 
### static Create(parent, id, x, y, width, height, fill, border) &rarr; [Rectangle2D](/classes/2.4/Rectangle2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | x | number | 
 | y | number | 
 | width | number | 
 | height | number | 
optional | fill | IBrush2D | 
### static CreateRounded(parent, id, x, y, width, height, roundRadius, fill, border) &rarr; [Rectangle2D](/classes/2.4/Rectangle2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | x | number | 
 | y | number | 
 | width | number | 
 | height | number | 
optional | roundRadius | number | 
optional | fill | IBrush2D | 
### createModelRenderCache(modelKey, isTransparent) &rarr; [ModelRenderCache](/classes/2.4/ModelRenderCache)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | modelKey | string | 
 | isTransparent | boolean | 
### setupModelRenderCache(modelRenderCache) &rarr; [Rectangle2DRenderCache](/classes/2.4/Rectangle2DRenderCache)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | modelRenderCache | [ModelRenderCache](/classes/2.4/ModelRenderCache) | 

### createInstanceDataParts() &rarr; [InstanceDataBase](/classes/2.4/InstanceDataBase)[]


### refreshInstanceDataPart(part) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | part | [InstanceDataBase](/classes/2.4/InstanceDataBase) | 

