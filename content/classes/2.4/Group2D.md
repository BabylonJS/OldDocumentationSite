---
TAGS:
---
## Description

class [Group2D](/classes/2.4/Group2D) extends [Prim2DBase](/classes/2.4/Prim2DBase)



## Constructor

## new [Group2D](/classes/2.4/Group2D)(settings)

Create an Logical or Renderable Group.

 - parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)

 - children: an array of direct children

 - id a text identifier, for information purpose

 - position: the X & Y positions relative to its parent. Alternatively the x and y properties can be set. Default is [0;0]

 - rotation: the initial rotation (in radian) of the primitive. default is 0

 - scale: the initial scale of the primitive. default is 1

 - origin: define the normalized origin point location, default [0.5;0.5]

 - size: the size of the group. Alternatively the width and height properties can be set. If null the size will be computed from its content, default is null.

 - cacheBehavior: Define how the group should behave regarding the Canvas's cache strategy, default is [Group2D](/classes/2.4/Group2D).GROUPCACHEBEHAVIOR_FOLLOWCACHESTRATEGY

 - layoutEngine: either an instance of a layout engine based class (StackPanel.Vertical, StackPanel.Horizontal) or a string ('canvas' for Canvas layout, 'StackPanel' or 'HorizontalStackPanel' for horizontal Stack Panel layout, 'VerticalStackPanel' for vertical Stack Panel layout).

 - isVisible: true if the group must be visible, false for hidden. Default is true.

- marginTop: top margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- marginLeft: left margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- marginRight: right margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- marginBottom: bottom margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- margin: top, left, right and bottom margin formatted as a single string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- marginHAlignment: one value of the [PrimitiveAlignment](/classes/2.4/PrimitiveAlignment) type's static properties

- marginVAlignment: one value of the [PrimitiveAlignment](/classes/2.4/PrimitiveAlignment) type's static properties

- marginAlignment: a string defining the alignment, see [PrimitiveAlignment](/classes/2.4/PrimitiveAlignment).fromString

- paddingTop: top padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- paddingLeft: left padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- paddingRight: right padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- paddingBottom: bottom padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- padding: top, left, right and bottom padding formatted as a single string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | settings | { parent: [Prim2DBase](/classes/2.4/Prim2DBase),  children: Array&lt;[Prim2DBase](/classes/2.4/Prim2DBase)&gt;,  id: string,  position: [Vector2](/classes/2.4/Vector2),  x: number,  y: number,  trackNode: [Node](/classes/2.4/Node),  origin: [Vector2](/classes/2.4/Vector2),  size: [Size](/classes/2.4/Size),  width: number,  height: number,  cacheBehavior: number,  layoutEngine: [LayoutEngineBase](/classes/2.4/LayoutEngineBase),  isVisible: boolean,  marginTop: number,  marginLeft: number,  marginRight: number,  marginBottom: number,  margin: number,  marginHAlignment: number,  marginVAlignment: number,  marginAlignment: string,  paddingTop: number,  paddingLeft: number,  paddingRight: number,  paddingBottom: number,  padding: string } |  a combination of settings, possible ones are

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

### cachedRect : [PackedRect](/classes/2.4/PackedRect)

Allow you to access the information regarding the cached rectangle of the [Group2D](/classes/2.4/Group2D) into the [MapTexture](/classes/2.4/MapTexture).

If the `noWorldSpaceNode` options was used at the creation of a WorldSpaceCanvas, the rendering of the canvas must be made by the caller, so typically you want to bind the cacheTexture property to some material/mesh and you must use the cachedRect.UVs property to get the UV coordinates to use for your quad that will display the Canvas.

### cacheTexture : [MapTexture](/classes/2.4/MapTexture)

Access the texture that maintains a cached version of the [Group2D](/classes/2.4/Group2D).

This is useful only if you're not using a WorldSpaceNode for your WorldSpace Canvas and therefore need to perform the rendering yourself.

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

### trackedNode : [Node](/classes/2.4/Node)

Get/set the [Scene](/classes/2.4/Scene)'s [Node](/classes/2.4/Node) that should be tracked, the group's position will follow the projected position of the [Node](/classes/2.4/Node).

## Methods

### dispose() &rarr; boolean

Call this method to remove this Group and its children from the Canvas
