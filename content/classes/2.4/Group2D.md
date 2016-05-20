---
TAGS:
---
## Description

class [Group2D](/classes/2.4/Group2D) extends [Prim2DBase](/classes/2.4/Prim2DBase)



## Constructor

## new [Group2D](/classes/2.4/Group2D)()

Don't invoke directly, rely on [Group2D](/classes/2.4/Group2D).CreateXXX methods
## Members

### static GROUP2D_PROPCOUNT : number



### static sizeProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static actualSizeProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static GROUPCACHEBEHAVIOR_FOLLOWCACHESTRATEGY : number

Default behavior, the group will use the caching strategy defined at the Canvas Level

### static GROUPCACHEBEHAVIOR_DONTCACHEOVERRIDE : number

When used, this group's content won't be cached, no matter which strategy used.

If the group is part of a WorldSpace Canvas, its content will be drawn in the Canvas cache bitmap.

### static GROUPCACHEBEHAVIOR_CACHEINPARENTGROUP : number

When used, the group's content will be cached in the nearest cached parent group/canvas

### isRenderableGroup : boolean

@returns Returns true if the Group render content, false if it's a logical group only

### isCachedGroup : boolean

@returns only meaningful for isRenderableGroup, will be true if the content of the Group is cached into a texture, false if it's rendered every time

### size : [Size](/classes/2.4/Size)

Get/Set the size of the group. If null the size of the group will be determine from its content.

BEWARE: if the Group is a RenderableGroup and its content is cache the texture will be resized each time the group is getting bigger. For performance reason the opposite won't be true: the texture won't shrink if the group does.

### viewportSize : ISize



### actualSize : [Size](/classes/2.4/Size)



### cacheBehavior : number

Get/set the Cache Behavior, used in case the Canvas Cache Strategy is set to CACHESTRATEGY_ALLGROUPS. Can be either GROUPCACHEBEHAVIOR_CACHEINPARENTGROUP, GROUPCACHEBEHAVIOR_DONTCACHEOVERRIDE or GROUPCACHEBEHAVIOR_FOLLOWCACHESTRATEGY. See their documentation for more information.

It is critical to understand than you HAVE TO play with this behavior in order to achieve a good performance/memory ratio. Caching all groups would certainly be the worst strategy of all.

## Methods

### static CreateGroup2D(parent, id, position, size, cacheBehabior) &rarr; [Group2D](/classes/2.4/Group2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | position | [Vector2](/classes/2.4/Vector2) | 
optional | size | [Size](/classes/2.4/Size) | 
### applyCachedTexture(vertexData, material) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexData | [VertexData](/classes/2.4/VertexData) | 
 | material | [StandardMaterial](/classes/2.4/StandardMaterial) | 
### dispose() &rarr; boolean

Call this method to remove this Group and its children from the Canvas
### setupGroup2D(owner, parent, id, position, size, cacheBehavior) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | owner | [Canvas2D](/classes/2.4/Canvas2D) | 
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | position | [Vector2](/classes/2.4/Vector2) | 
optional | size | [Size](/classes/2.4/Size) | 
### levelIntersect(intersectInfo) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | intersectInfo | [IntersectInfo2D](/classes/2.4/IntersectInfo2D) | 

### updateLevelBoundingInfo() &rarr; void


### handleGroupChanged(prop) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | prop | [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo) | 

