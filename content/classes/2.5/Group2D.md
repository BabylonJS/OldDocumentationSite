---
TAGS:
---
## Description

class [Group2D](/classes/2.0/Group2D) extends [Prim2DBase](/classes/2.0/Prim2DBase)



## Constructor

## new [Group2D](/classes/2.0/Group2D)(settings)

Create an Logical or Renderable Group.

- parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)

- children: an array of direct children

- id a text identifier, for information purpose

- position: the X & Y positions relative to its parent. Alternatively the x and y properties can be set. Default is [0;0]

- rotation: the initial rotation (in radian) of the primitive. default is 0

- scale: the initial scale of the primitive. default is 1. You can alternatively use scaleX &| scaleY to apply non uniform scale

- dontInheritParentScale: if set the parent's scale won't be taken into consideration to compute the actualScale property

- opacity: set the overall opacity of the primitive, 1 to be opaque (default), less than 1 to be transparent.

- zOrder: override the zOrder with the specified value

- origin: define the normalized origin point location, default [0.5;0.5]

- size: the size of the group. Alternatively the width and height properties can be set. If null the size will be computed from its content, default is null.

 - cacheBehavior: Define how the group should behave regarding the Canvas's cache strategy, default is [Group2D](/classes/2.0/Group2D).GROUPCACHEBEHAVIOR_FOLLOWCACHESTRATEGY

- layoutEngine: either an instance of a layout engine based class ([StackPanel](/classes/2.0/StackPanel).Vertical, [StackPanel](/classes/2.0/StackPanel).Horizontal) or a string ('canvas' for Canvas layout, '[StackPanel](/classes/2.0/StackPanel)' or 'HorizontalStackPanel' for horizontal Stack Panel layout, 'VerticalStackPanel' for vertical Stack Panel layout).

- isVisible: true if the group must be visible, false for hidden. Default is true.

- isPickable: if true the Primitive can be used with interaction mode and will issue Pointer Event. If false it will be ignored for interaction/intersection test. Default value is true.

- isContainer: if true the Primitive acts as a container for interaction, if the primitive is not pickable or doesn't intersection, no further test will be perform on its children. If set to false, children will always be considered for intersection/interaction. Default value is true.

- childrenFlatZOrder: if true all the children (direct and indirect) will share the same Z-Order. Use this when there's a lot of children which don't overlap. The drawing order IS NOT GUARANTED!

- marginTop: top margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- marginLeft: left margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- marginRight: right margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- marginBottom: bottom margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- margin: top, left, right and bottom margin formatted as a single string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- marginHAlignment: one value of the [PrimitiveAlignment](/classes/2.0/PrimitiveAlignment) type's static properties

- marginVAlignment: one value of the [PrimitiveAlignment](/classes/2.0/PrimitiveAlignment) type's static properties

- marginAlignment: a string defining the alignment, see [PrimitiveAlignment](/classes/2.0/PrimitiveAlignment).fromString

- paddingTop: top padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- paddingLeft: left padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- paddingRight: right padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- paddingBottom: bottom padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- padding: top, left, right and bottom padding formatted as a single string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | settings | { parent: [Prim2DBase](/classes/2.0/Prim2DBase),  children: Array&lt;[Prim2DBase](/classes/2.0/Prim2DBase)&gt;,  id: string,  position: Vector2,  x: number,  y: number,  scale: number,  scaleX: number,  scaleY: number,  dontInheritParentScale: boolean,  trackNode: Node,  opacity: number,  zOrder: number,  origin: Vector2,  size: Size,  width: number,  height: number,  cacheBehavior: number,  layoutEngine: [LayoutEngineBase](/classes/2.0/LayoutEngineBase),  string: string,  isVisible: boolean,  isPickable: boolean,  isContainer: boolean,  childrenFlatZOrder: boolean,  marginTop: number,  string: string,  marginLeft: number,  string: string,  marginRight: number,  string: string,  marginBottom: number,  string: string,  margin: number,  string: string,  marginHAlignment: number,  marginVAlignment: number,  marginAlignment: string,  paddingTop: number,  string: string,  paddingLeft: number,  string: string,  paddingRight: number,  string: string,  paddingBottom: number,  string: string,  padding: string } |  a combination of settings, possible ones are

## Members

### static GROUP2D_PROPCOUNT : number



### static sizeProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static actualSizeProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static GROUPCACHEBEHAVIOR_FOLLOWCACHESTRATEGY : number

Default behavior, the group will use the caching strategy defined at the Canvas Level

### static GROUPCACHEBEHAVIOR_DONTCACHEOVERRIDE : number

When used, this group's content won't be cached, no matter which strategy used.

If the group is part of a WorldSpace Canvas, its content will be drawn in the Canvas cache bitmap.

### static GROUPCACHEBEHAVIOR_CACHEINPARENTGROUP : number

When used, the group's content will be cached in the nearest cached parent group/canvas

### static GROUPCACHEBEHAVIOR_NORESIZEONSCALE : number

You can specify this behavior to any cached [Group2D](/classes/2.0/Group2D) to indicate that you don't want the cached content to be resized when the Group's actualScale is changing. It will draw the content stretched or shrink which is faster than a resize. This setting is obviously for performance consideration, don't use it if you want the best rendering quality

