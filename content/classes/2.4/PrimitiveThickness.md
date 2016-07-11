---
TAGS:
---
## Description

class [PrimitiveThickness](/classes/2.4/PrimitiveThickness)

Define a thickness toward every edges of a Primitive to allow margin and padding.

The thickness can be expressed as pixels, percentages, inherit the value of the parent primitive or be auto.

## Constructor

## new [PrimitiveThickness](/classes/2.4/PrimitiveThickness)(parentAccess, changedCallback)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parentAccess | () =&gt; [PrimitiveThickness](/classes/2.4/PrimitiveThickness) | 
 | changedCallback | () =&gt; void | 
## Members

### top : string

Get/set the top thickness. Possible values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.

### left : string

Get/set the left thickness. Possible values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.

### right : string

Get/set the right thickness. Possible values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.

### bottom : string

Get/set the bottom thickness. Possible values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.

### topPixels : number

Get/set the top thickness in pixel.

### leftPixels : number

Get/set the left thickness in pixel.

### rightPixels : number

Get/set the right thickness in pixel.

### bottomPixels : number

Get/set the bottom thickness in pixel.

### topPercentage : number

Get/set the top thickness in percentage.

The get will return a valid value only if the edge type is percentage.

The Set will change the edge mode if needed

### leftPercentage : number

Get/set the left thickness in percentage.

The get will return a valid value only if the edge mode is percentage.

The Set will change the edge mode if needed

### rightPercentage : number

Get/set the right thickness in percentage.

The get will return a valid value only if the edge mode is percentage.

The Set will change the edge mode if needed

### bottomPercentage : number

Get/set the bottom thickness in percentage.

The get will return a valid value only if the edge mode is percentage.

The Set will change the edge mode if needed

### topMode : number

Get/set the top mode. The setter shouldn't be used, other setters with value should be preferred

### leftMode : number

Get/set the left mode. The setter shouldn't be used, other setters with value should be preferred

### rightMode : number

Get/set the right mode. The setter shouldn't be used, other setters with value should be preferred

### bottomMode : number

Get/set the bottom mode. The setter shouldn't be used, other setters with value should be preferred

### static Auto : number



### static Inherit : number



### static Percentage : number



### static Pixel : number



## Methods

### fromString(thickness) &rarr; void

Set the thickness from a string value

Values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | thickness | string |  format is "top: <value>, left:<value>, right:<value>, bottom:<value>" each are optional, auto will be set if it's omitted.

### fromStrings(top, left, right, bottom) &rarr; [PrimitiveThickness](/classes/2.4/PrimitiveThickness)

Set the thickness from multiple string

Possible values are: 'auto', 'inherit', 'XX%' for percentage, 'XXpx' or 'XX' for pixels.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | top | string |  the top thickness to set
 | left | string |  the left thickness to set
 | right | string |  the right thickness to set
### fromPixels(top, left, right, bottom) &rarr; [PrimitiveThickness](/classes/2.4/PrimitiveThickness)

Set the thickness from pixel values

#### Parameters
 | Name | Type | Description
---|---|---|---
 | top | number |  the top thickness in pixels to set
 | left | number |  the left thickness in pixels to set
 | right | number |  the right thickness in pixels to set
### fromUniformPixels(margin) &rarr; [PrimitiveThickness](/classes/2.4/PrimitiveThickness)

Apply the same pixel value to all edges

#### Parameters
 | Name | Type | Description
---|---|---|---
 | margin | number |  the value to set, in pixels.

### auto() &rarr; [PrimitiveThickness](/classes/2.4/PrimitiveThickness)

Set all edges in auto
### setTop(value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 

### setLeft(value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 

### setRight(value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 

### setBottom(value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 

### computeWithAlignment(sourceArea, contentSize, alignment, dstOffset, dstArea) &rarr; void

Compute the positioning/size of an area considering the thickness of this object and a given alignment

#### Parameters
 | Name | Type | Description
---|---|---|---
 | sourceArea | [Size](/classes/2.4/Size) |  the source area
 | contentSize | [Size](/classes/2.4/Size) |  the content size to position/resize
 | alignment | [PrimitiveAlignment](/classes/2.4/PrimitiveAlignment) |  the alignment setting
 | dstOffset | [Vector2](/classes/2.4/Vector2) |  the position of the content
### compute(sourceArea, dstOffset, dstArea) &rarr; void

Compute an area and its position considering this thickness properties based on a given source area

#### Parameters
 | Name | Type | Description
---|---|---|---
 | sourceArea | [Size](/classes/2.4/Size) |  the source area
 | dstOffset | [Vector2](/classes/2.4/Vector2) |  the position of the resulting area
 | dstArea | [Size](/classes/2.4/Size) |  the size of the resulting area
### computeArea(sourceArea, result) &rarr; void

Compute an area considering this thickness properties based on a given source area

#### Parameters
 | Name | Type | Description
---|---|---|---
 | sourceArea | [Size](/classes/2.4/Size) |  the source area
 | result | [Size](/classes/2.4/Size) |  the resulting area
