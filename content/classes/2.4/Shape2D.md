---
TAGS:
---
## Description

class [Shape2D](/classes/2.4/Shape2D) extends [RenderablePrim2D](/classes/2.4/RenderablePrim2D)



## Members

### static SHAPE2D_BORDERPARTID : number



### static SHAPE2D_FILLPARTID : number



### static SHAPE2D_CATEGORY_BORDER : string



### static SHAPE2D_CATEGORY_BORDERSOLID : string



### static SHAPE2D_CATEGORY_BORDERGRADIENT : string



### static SHAPE2D_CATEGORY_FILLSOLID : string



### static SHAPE2D_CATEGORY_FILLGRADIENT : string



### static SHAPE2D_PROPCOUNT : number



### static borderProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static fillProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static borderThicknessProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### border : IBrush2D



### fill : IBrush2D



### borderThickness : number



## Methods

### setupShape2D(owner, parent, id, position, isVisible, fill, border, borderThickness) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | owner | [Canvas2D](/classes/2.4/Canvas2D) | 
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | position | [Vector2](/classes/2.4/Vector2) | 
 | isVisible | boolean | 
 | fill | IBrush2D | 
 | border | IBrush2D | 
### getUsedShaderCategories(dataPart) &rarr; string[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | dataPart | [InstanceDataBase](/classes/2.4/InstanceDataBase) | 

### refreshInstanceDataPart(part) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | part | [InstanceDataBase](/classes/2.4/InstanceDataBase) | 

