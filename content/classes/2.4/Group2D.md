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

## Methods

### static CreateGroup2Dundefined &rarr; [Group2D](/classes/2.4/Group2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
