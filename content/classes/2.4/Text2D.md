---
TAGS:
---
## Description

class [Text2D](/classes/2.4/Text2D) extends [RenderablePrim2D](/classes/2.4/RenderablePrim2D)



## Constructor

## new [Text2D](/classes/2.4/Text2D)(text, settings)

Create a Text primitive

 - parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)

 - children: an array of direct children

 - id a text identifier, for information purpose

 - position: the X & Y positions relative to its parent. Alternatively the x and y properties can be set. Default is [0;0]

 - rotation: the initial rotation (in radian) of the primitive. default is 0

 - scale: the initial scale of the primitive. default is 1

 - origin: define the normalized origin point location, default [0.5;0.5]

 - fontName: the name/size/style of the font to use, following the CSS notation. Default is "12pt Arial".

 - defaultColor: the color by default to apply on each letter of the text to display, default is plain white.

 - areaSize: the size of the area in which to display the text, default is auto-fit from text content.

 - tabulationSize: number of space character to insert when a tabulation is encountered, default is 4

 - isVisible: true if the text must be visible, false for hidden. Default is true.

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
 | text | string |  the text to display
optional | settings | { parent: [Prim2DBase](/classes/2.4/Prim2DBase),  children: Array&lt;[Prim2DBase](/classes/2.4/Prim2DBase)&gt;,  id: string,  position: [Vector2](/classes/2.4/Vector2),  x: number,  y: number,  rotation: number,  scale: number,  origin: [Vector2](/classes/2.4/Vector2),  fontName: string,  defaultFontColor: [Color4](/classes/2.4/Color4),  size: [Size](/classes/2.4/Size),  tabulationSize: number,  isVisible: boolean,  marginTop: number,  marginLeft: number,  marginRight: number,  marginBottom: number,  margin: number,  marginHAlignment: number,  marginVAlignment: number,  marginAlignment: string,  paddingTop: number,  paddingLeft: number,  paddingRight: number,  paddingBottom: number,  padding: string } |  a combination of settings, possible ones are
## Members

### static TEXT2D_MAINPARTID : number



### static fontProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static defaultFontColorProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static textProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static sizeProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### fontName : string



### defaultFontColor : [Color4](/classes/2.4/Color4)



### text : string



### size : [Size](/classes/2.4/Size)



### actualSize : [Size](/classes/2.4/Size)

Get the actual size of the [Text2D](/classes/2.4/Text2D) primitive

### textSize : [Size](/classes/2.4/Size)

Get the area that bounds the text associated to the primitive

## Methods

### dispose() &rarr; boolean

Dispose the primitive, remove it from its parent
