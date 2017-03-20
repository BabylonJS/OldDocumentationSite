---
ID_PAGE: 25237
PG_TITLE: Color4
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Color4](/classes/2.5/Color4)

Color defined by Red Green Blue, plus the Alpha.

## Constructor

## new [Color4](/classes/2.5/Color4)(r, g, b, a)

Creates a new RGBA [Color4](/classes/2.5/Color4)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |     The red value (0&lt;r&lt;1)
 | g | number |     The green value (0&lt;g&lt;1)
 | b | number |     The blue value (0&lt;b&lt;1)
 | a | number |     The alpha value (0&lt;a&lt;1)
## Members

### r : number

The red value

### g : number

The green value

### b : number

The blue value

### a : number

The alpha value

## Methods

### addInPlace(right) &rarr; [Color4](/classes/2.5/Color4)

Adds another [Color4](/classes/2.5/Color4)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | any |     second color

### asArray() &rarr; number[]

Returns an array representation of the color
### toArray(array, index) &rarr; [Color4](/classes/2.5/Color4)

Fills an array from a given index with the color's values

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |     The given array
optional | index | number |     default : 0 The given index
### add(right) &rarr; [Color4](/classes/2.5/Color4)

Adds another color and returns the result

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/2.5/Color4) |     second color

### subtract(right) &rarr; [Color4](/classes/2.5/Color4)

Substracts another color and returns the result

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/2.5/Color4) |     second color

### subtractToRef(right, result) &rarr; [Color4](/classes/2.5/Color4)

Substracts another color into a third color

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/2.5/Color4) |     second color
 | result | [Color4](/classes/2.5/Color4) |   The [Color4](/classes/2.5/Color4) (RGBA) to fill the result in   The color which hold the result color
### scale(scale) &rarr; [Color4](/classes/2.5/Color4)

Scales a [Color4](/classes/2.5/Color4)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |     The scaling factor

### scaleToRef(scale, result) &rarr; [Color4](/classes/2.5/Color4)

Scales a [Color4](/classes/2.5/Color4) into an existing [Color4](/classes/2.5/Color4)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |     The scaling factor
 | result | [Color4](/classes/2.5/Color4) |   The [Color4](/classes/2.5/Color4) (RGBA) to fill the result in   The color which hold the result color
### multiply(color) &rarr; [Color4](/classes/2.5/Color4)

Multipy an RGBA [Color4](/classes/2.5/Color4) value by another and return a new [Color4](/classes/2.5/Color4) object

@returns A new [Color4](/classes/2.5/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color4](/classes/2.5/Color4) |  The [Color4](/classes/2.5/Color4) (RGBA) value to multiply by  The [Color4](/classes/2.5/Color4) (RGBA) value to multiply by

### multiplyToRef(color, result) &rarr; [Color4](/classes/2.5/Color4)

Multipy an RGBA [Color4](/classes/2.5/Color4) value by another and push the result in a reference value

@returns the result [Color4](/classes/2.5/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color4](/classes/2.5/Color4) |  The [Color4](/classes/2.5/Color4) (RGBA) value to multiply by  The [Color4](/classes/2.5/Color4) (RGBA) value to multiply by
 | result | [Color4](/classes/2.5/Color4) |  The [Color4](/classes/2.5/Color4) (RGBA) to fill the result in  The [Color4](/classes/2.5/Color4) (RGBA) to fill the result in   The color which hold the result color
### toString() &rarr; string

Returns a string representation of the color
### getClassName() &rarr; string


### getHashCode() &rarr; number


### clone() &rarr; [Color4](/classes/2.5/Color4)

Clones the color into a new [Color4](/classes/2.5/Color4)
### copyFrom(source) &rarr; [Color4](/classes/2.5/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color4](/classes/2.5/Color4) |     

### toHexString() &rarr; string


### static FromHexString(hex) &rarr; [Color4](/classes/2.5/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | hex | string |    

### static Lerp(left, right, amount) &rarr; [Color4](/classes/2.5/Color4)

Linear interpolation of a color 4

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/2.5/Color4) |     first color
 | right | [Color4](/classes/2.5/Color4) |     second color
 | amount | number |     Weighting factor.
### static LerpToRef(left, right, amount, result) &rarr; void

Linear interpolation of a color 4 into an existing [Color4](/classes/2.5/Color4)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/2.5/Color4) |     first color
 | right | [Color4](/classes/2.5/Color4) |     second color
 | amount | number |     Weighting factor.
### static FromArray(array, offset) &rarr; [Color4](/classes/2.5/Color4)

Creates new [Color4](/classes/2.5/Color4) from the given array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |     The given array
optional | offset | number |     The first index of the array to look at
### static FromInts(r, g, b, a) &rarr; [Color4](/classes/2.5/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |     The red value (0&lt;r&lt;1)
 | g | number |     The green value (0&lt;g&lt;1)
 | b | number |     The blue value (0&lt;b&lt;1)
### static CheckColors4(colors, count) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | colors | number[] |   
 | count | number |   
