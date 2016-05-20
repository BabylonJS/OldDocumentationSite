---
TAGS:
---
## Description

class [Sprite2D](/classes/2.4/Sprite2D) extends [RenderablePrim2D](/classes/2.4/RenderablePrim2D)



## Members

### static SPRITE2D_MAINPARTID : number



### static textureProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static spriteSizeProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static spriteLocationProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static spriteFrameProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static invertYProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### texture : [Texture](/classes/2.4/Texture)



### actualSize : [Size](/classes/2.4/Size)



### spriteSize : [Size](/classes/2.4/Size)



### spriteLocation : [Vector2](/classes/2.4/Vector2)



### spriteFrame : number



### invertY : boolean



## Methods

### updateLevelBoundingInfo() &rarr; void


### setupSprite2D(owner, parent, id, position, texture, spriteSize, spriteLocation, invertY) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | owner | [Canvas2D](/classes/2.4/Canvas2D) | 
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | position | [Vector2](/classes/2.4/Vector2) | 
 | texture | [Texture](/classes/2.4/Texture) | 
 | spriteSize | [Size](/classes/2.4/Size) | 
 | spriteLocation | [Vector2](/classes/2.4/Vector2) | 
### static Create(parent, id, x, y, texture, spriteSize, spriteLocation, invertY) &rarr; [Sprite2D](/classes/2.4/Sprite2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | x | number | 
 | y | number | 
 | texture | [Texture](/classes/2.4/Texture) | 
 | spriteSize | [Size](/classes/2.4/Size) | 
 | spriteLocation | [Vector2](/classes/2.4/Vector2) | 
### createModelRenderCache(modelKey, isTransparent) &rarr; [ModelRenderCache](/classes/2.4/ModelRenderCache)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | modelKey | string | 
 | isTransparent | boolean | 
### setupModelRenderCache(modelRenderCache) &rarr; [Sprite2DRenderCache](/classes/2.4/Sprite2DRenderCache)



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

