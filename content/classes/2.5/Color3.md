---
ID_PAGE: 25236
PG_TITLE: Color3
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Color3](/classes/2.5/Color3)

Basic color defined by Red Green Blue.

## Constructor

## new [Color3](/classes/2.5/Color3)(r, g, b)

Creates a new RGB [Color3](/classes/2.5/Color3)

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | r | number |     The red value (0&lt;r&lt;1)
optional | g | number |     The green value (0&lt;g&lt;1)
optional | b | number |     The blue value (0&lt;b&lt;1)
## Members

### r : number

red value

### g : number

green value

### b : number

blue value

## Methods

### toString() &rarr; string

Returns a string representation of the color
### getClassName() &rarr; string


### getHashCode() &rarr; number


### toArray(array, index) &rarr; [Color3](/classes/2.5/Color3)

Fills an array from a given index with the color's RGB values

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |     An array of rgb values
optional | index | number |     The given index
### toColor4(alpha) &rarr; [Color4](/classes/2.5/Color4)

Return a [Color4](/classes/2.5/Color4) object

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | alpha | number |     default : 1 The given alpha

### asArray() &rarr; number[]

Returns an array representation of the color
### toLuminance() &rarr; number

Returns the luminance of the color
### multiply(otherColor) &rarr; [Color3](/classes/2.5/Color3)

Multiplies two [Color3](/classes/2.5/Color3) and returns the result

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.5/Color3) |     The color to substract

### multiplyToRef(otherColor, result) &rarr; [Color3](/classes/2.5/Color3)

Multiplies two [Color3](/classes/2.5/Color3) into an existing Color

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.5/Color3) |     The color to substract
 | result | [Color3](/classes/2.5/Color3) |     The resulting color
### equals(otherColor) &rarr; boolean

Tests if two [Color3](/classes/2.5/Color3) have the same rgb values

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.5/Color3) |     The color to substract

### equalsFloats(r, g, b) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |     The red value (0&lt;r&lt;1)
 | g | number |     The green value (0&lt;g&lt;1)
 | b | number |     The blue value (0&lt;b&lt;1)
### scale(scale) &rarr; [Color3](/classes/2.5/Color3)

Scales a [Color3](/classes/2.5/Color3) : multiply red, green and blue values by the given number

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |     The scaling factor

### scaleToRef(scale, result) &rarr; [Color3](/classes/2.5/Color3)

Scale a [Color3](/classes/2.5/Color3) into an existing Color

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |     The scaling factor
 | result | [Color3](/classes/2.5/Color3) |     The resulting color
### add(otherColor) &rarr; [Color3](/classes/2.5/Color3)

Adds another color and returns the result

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.5/Color3) |     The color to substract

### addToRef(otherColor, result) &rarr; [Color3](/classes/2.5/Color3)

Adds another color and store the result in the color given in parameter

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.5/Color3) |     The color to substract
 | result | [Color3](/classes/2.5/Color3) |     The resulting color
### subtract(otherColor) &rarr; [Color3](/classes/2.5/Color3)

Substracts another color and returns the result

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.5/Color3) |     The color to substract

### subtractToRef(otherColor, result) &rarr; [Color3](/classes/2.5/Color3)

Substracts another color and store the result in the given color

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.5/Color3) |     The color to substract
 | result | [Color3](/classes/2.5/Color3) |     The resulting color
### clone() &rarr; [Color3](/classes/2.5/Color3)

Create a clone of a [Color3](/classes/2.5/Color3)
### copyFrom(source) &rarr; [Color3](/classes/2.5/Color3)

Copies a [Color3](/classes/2.5/Color3)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color3](/classes/2.5/Color3) |     color to copy from

### copyFromFloats(r, g, b) &rarr; [Color3](/classes/2.5/Color3)

Copies a color from numbers

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |     The red value (0&lt;r&lt;1)
 | g | number |     The green value (0&lt;g&lt;1)
 | b | number |     The blue value (0&lt;b&lt;1)
### toHexString() &rarr; string


### toLinearSpace() &rarr; [Color3](/classes/2.5/Color3)


### toLinearSpaceToRef(convertedColor) &rarr; [Color3](/classes/2.5/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | convertedColor | [Color3](/classes/2.5/Color3) |   

### toGammaSpace() &rarr; [Color3](/classes/2.5/Color3)


### toGammaSpaceToRef(convertedColor) &rarr; [Color3](/classes/2.5/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | convertedColor | [Color3](/classes/2.5/Color3) |   

### static FromHexString(hex) &rarr; [Color3](/classes/2.5/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | hex | string |    

### static FromArray(array, offset) &rarr; [Color3](/classes/2.5/Color3)

Creates a new [Color3](/classes/2.5/Color3) from an array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |     An array of rgb values
optional | offset | number |     
### static FromInts(r, g, b) &rarr; [Color3](/classes/2.5/Color3)

Creates a new [Color3](/classes/2.5/Color3) from a set of integers. Values must be between 0 and 255

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |     The red value (0&lt;r&lt;1)
 | g | number |     The green value (0&lt;g&lt;1)
 | b | number |     The blue value (0&lt;b&lt;1)
### static Lerp(start, end, amount) &rarr; [Color3](/classes/2.5/Color3)

Linear interpolation of a color

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Color3](/classes/2.5/Color3) |     interpolation start color
 | end | [Color3](/classes/2.5/Color3) |     interpolation end color
 | amount | number |     Weighting factor
### static Red() &rarr; [Color3](/classes/2.5/Color3)

Red color
### static Green() &rarr; [Color3](/classes/2.5/Color3)

Green color
### static Blue() &rarr; [Color3](/classes/2.5/Color3)

Blue color
### static Black() &rarr; [Color3](/classes/2.5/Color3)

Black color
### static White() &rarr; [Color3](/classes/2.5/Color3)

White color
### static Purple() &rarr; [Color3](/classes/2.5/Color3)

Purple color
### static Magenta() &rarr; [Color3](/classes/2.5/Color3)

Magenta color
### static Yellow() &rarr; [Color3](/classes/2.5/Color3)

Yellow color
### static Gray() &rarr; [Color3](/classes/2.5/Color3)


