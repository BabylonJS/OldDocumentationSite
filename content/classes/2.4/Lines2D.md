---
TAGS:
---
## Description

class [Lines2D](/classes/2.4/Lines2D) extends [Shape2D](/classes/2.4/Shape2D)



## Constructor

## new [Lines2D](/classes/2.4/Lines2D)(points, settings)

Create an 2D Lines Shape primitive. The defined lines may be opened or closed (see below)

 - parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)

 - children: an array of direct children

 - id a text identifier, for information purpose

 - position: the X & Y positions relative to its parent. Alternatively the x and y properties can be set. Default is [0;0]

 - rotation: the initial rotation (in radian) of the primitive. default is 0

 - scale: the initial scale of the primitive. default is 1

 - origin: define the normalized origin point location, default [0.5;0.5]

 - fillThickness: the thickness of the fill part of the line, can be null to draw nothing (but a border brush must be given), default is 1.

 - closed: if false the lines are said to be opened, the first point and the latest DON'T connect. if true the lines are said to be closed, the first and last point will be connected by a line. For instance you can define the 4 points of a rectangle, if you set closed to true a 4 edges rectangle will be drawn. If you set false, only three edges will be drawn, the edge formed by the first and last point won't exist. Default is false.

 - startCap: Draw a cap of the given type at the start of the first line, you can't define a Cap if the [Lines2D](/classes/2.4/Lines2D) is closed. Default is [Lines2D](/classes/2.4/Lines2D).NoCap.

 - endCap: Draw a cap of the given type at the end of the last line, you can't define a Cap if the [Lines2D](/classes/2.4/Lines2D) is closed. Default is [Lines2D](/classes/2.4/Lines2D).NoCap.

 - fill: the brush used to draw the fill content of the lines, you can set null to draw nothing (but you will have to set a border brush), default is a SolidColorBrush of plain white. can be a string value (see [Canvas2D](/classes/2.4/Canvas2D).GetBrushFromString)

 - border: the brush used to draw the border of the lines, you can set null to draw nothing (but you will have to set a fill brush), default is null. can be a string value (see [Canvas2D](/classes/2.4/Canvas2D).GetBrushFromString)

 - borderThickness: the thickness of the drawn border, default is 1.

 - isVisible: true if the primitive must be visible, false for hidden. Default is true.

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
 | points | [Vector2](/classes/2.4/Vector2)[] |  an array that describe the points to use to draw the line, must contain at least two entries.
optional | settings | { parent: [Prim2DBase](/classes/2.4/Prim2DBase),  children: Array&lt;[Prim2DBase](/classes/2.4/Prim2DBase)&gt;,  id: string,  position: [Vector2](/classes/2.4/Vector2),  x: number,  y: number,  rotation: number,  scale: number,  origin: [Vector2](/classes/2.4/Vector2),  fillThickness: number,  closed: boolean,  startCap: number,  endCap: number,  fill: IBrush2D,  border: IBrush2D,  borderThickness: number,  isVisible: boolean,  marginTop: number,  marginLeft: number,  marginRight: number,  marginBottom: number,  margin: number,  marginHAlignment: number,  marginVAlignment: number,  marginAlignment: string,  paddingTop: number,  paddingLeft: number,  paddingRight: number,  paddingBottom: number,  padding: string } |  a combination of settings, possible ones are
## Members

### static NoCap : number

No Cap to apply on the extremity

### static RoundCap : number

A round cap, will use the line thickness as diameter

### static TriangleCap : number

Creates a triangle at the extremity.

### static SquareAnchorCap : number

Creates a Square anchor at the extremity, the square size is twice the thickness of the line

### static RoundAnchorCap : number

Creates a round anchor at the extremity, the diameter is twice the thickness of the line

### static DiamondAnchorCap : number

Creates a diamond anchor at the extremity.

### static ArrowCap : number

Creates an arrow anchor at the extremity. the arrow base size is twice the thickness of the line

### static pointsProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static fillThicknessProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static closedProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static startCapProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static endCapProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### points : [Vector2](/classes/2.4/Vector2)[]



### fillThickness : number



### closed : boolean



### startCap : number



### endCap : number



### size : [Size](/classes/2.4/Size)



