---
TAGS:
---
## Description

class [Ellipse2D](/classes/2.4/Ellipse2D) extends [Shape2D](/classes/2.4/Shape2D)



## Constructor

## new [Ellipse2D](/classes/2.4/Ellipse2D)(settings)

Create an Ellipse 2D Shape primitive

 - parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)

 - children: an array of direct children

 - id: a text identifier, for information purpose

 - position: the X & Y positions relative to its parent. Alternatively the x and y properties can be set. Default is [0;0]

 - rotation: the initial rotation (in radian) of the primitive. default is 0

 - scale: the initial scale of the primitive. default is 1

 - origin: define the normalized origin point location, default [0.5;0.5]

 - size: the size of the group. Alternatively the width and height properties can be set. Default will be [10;10].

 - subdivision: the number of subdivision to create the ellipse perimeter, default is 64.

 - fill: the brush used to draw the fill content of the ellipse, you can set null to draw nothing (but you will have to set a border brush), default is a SolidColorBrush of plain white. can also be a string value (see [Canvas2D](/classes/2.4/Canvas2D).GetBrushFromString)

 - border: the brush used to draw the border of the ellipse, you can set null to draw nothing (but you will have to set a fill brush), default is null. can be a string value (see [Canvas2D](/classes/2.4/Canvas2D).GetBrushFromString)

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
optional | settings | { parent: [Prim2DBase](/classes/2.4/Prim2DBase),  children: Array&lt;[Prim2DBase](/classes/2.4/Prim2DBase)&gt;,  id: string,  position: [Vector2](/classes/2.4/Vector2),  x: number,  y: number,  rotation: number,  scale: number,  origin: [Vector2](/classes/2.4/Vector2),  size: [Size](/classes/2.4/Size),  width: number,  height: number,  subdivisions: number,  fill: IBrush2D,  border: IBrush2D,  borderThickness: number,  isVisible: boolean,  marginTop: number,  marginLeft: number,  marginRight: number,  marginBottom: number,  margin: number,  marginHAlignment: number,  marginVAlignment: number,  marginAlignment: string,  paddingTop: number,  paddingLeft: number,  paddingRight: number,  paddingBottom: number,  padding: string } |  a combination of settings, possible ones are

## Members

### static acutalSizeProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static subdivisionsProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### actualSize : [Size](/classes/2.4/Size)



### subdivisions : number



