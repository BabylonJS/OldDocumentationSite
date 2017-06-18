---
ID_PAGE: 25237
PG_TITLE: Color4
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Color4](/classes/3.0/Color4)

Color defined by Red Green Blue, plus the Alpha.

## Constructor

## new [Color4](/classes/3.0/Color4)(r, g, b, a)

Creates a new [Color4](/classes/3.0/Color4) object from the passed float values ( < 1) : red, green, blue, alpha.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |      The red value (0&lt;r&lt;1)
 | g | number |      The green value (0&lt;g&lt;1)
 | b | number |      The blue value (0&lt;b&lt;1)
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

### addInPlace(right) &rarr; [Color4](/classes/3.0/Color4)

Adds in place the passed [Color4](/classes/3.0/Color4) values to the current [Color4](/classes/3.0/Color4).

Returns the updated [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | any |      second color

### asArray() &rarr; number[]

Returns a new array populated with 4 numeric elements : red, green, blue, alpha values.
### toArray(array, index) &rarr; [Color4](/classes/3.0/Color4)

Stores from the starting index in the passed array the [Color4](/classes/3.0/Color4) successive values.

Returns the [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |      The given array
optional | index | number |      default : 0 The given index
### add(right) &rarr; [Color4](/classes/3.0/Color4)

Returns a new [Color4](/classes/3.0/Color4) set with the added values of the current [Color4](/classes/3.0/Color4) and of the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/3.0/Color4) |      second color

### subtract(right) &rarr; [Color4](/classes/3.0/Color4)

Returns a new [Color4](/classes/3.0/Color4) set with the subtracted values of the passed one from the current [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/3.0/Color4) |      second color

### subtractToRef(right, result) &rarr; [Color4](/classes/3.0/Color4)

Subtracts the passed ones from the current [Color4](/classes/3.0/Color4) values and stores the results in "result".

Returns the [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/3.0/Color4) |      second color
 | result | [Color4](/classes/3.0/Color4) |   The [Color4](/classes/3.0/Color4) (RGBA) to fill the result in  The [Color4](/classes/3.0/Color4) (RGBA) to fill the result in   The color which hold the result color
### scale(scale) &rarr; [Color4](/classes/3.0/Color4)

Creates a new [Color4](/classes/3.0/Color4) with the current [Color4](/classes/3.0/Color4) values multiplied by scale.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |      The scaling factor

### scaleToRef(scale, result) &rarr; [Color4](/classes/3.0/Color4)

Multiplies the current [Color4](/classes/3.0/Color4) values by scale and stores the result in "result".

Returns the [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |      The scaling factor
 | result | [Color4](/classes/3.0/Color4) |   The [Color4](/classes/3.0/Color4) (RGBA) to fill the result in  The [Color4](/classes/3.0/Color4) (RGBA) to fill the result in   The color which hold the result color
### multiply(color) &rarr; [Color4](/classes/3.0/Color4)

Multipy an RGBA [Color4](/classes/3.0/Color4) value by another and return a new [Color4](/classes/3.0/Color4) object

@returns A new [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color4](/classes/3.0/Color4) |  The [Color4](/classes/3.0/Color4) (RGBA) value to multiply by  The [Color4](/classes/3.0/Color4) (RGBA) value to multiply by  The [Color4](/classes/3.0/Color4) (RGBA) value to multiply by

### multiplyToRef(color, result) &rarr; [Color4](/classes/3.0/Color4)

Multipy an RGBA [Color4](/classes/3.0/Color4) value by another and push the result in a reference value

@returns the result [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color4](/classes/3.0/Color4) |  The [Color4](/classes/3.0/Color4) (RGBA) value to multiply by  The [Color4](/classes/3.0/Color4) (RGBA) value to multiply by  The [Color4](/classes/3.0/Color4) (RGBA) value to multiply by
 | result | [Color4](/classes/3.0/Color4) |  The [Color4](/classes/3.0/Color4) (RGBA) to fill the result in  The [Color4](/classes/3.0/Color4) (RGBA) to fill the result in  The [Color4](/classes/3.0/Color4) (RGBA) to fill the result in   The color which hold the result color
### toString() &rarr; string

Returns a string with the [Color4](/classes/3.0/Color4) values.
### getClassName() &rarr; string

Returns the string "[Color4](/classes/3.0/Color4)"
### getHashCode() &rarr; number

Return the [Color4](/classes/3.0/Color4) hash code as a number.
### clone() &rarr; [Color4](/classes/3.0/Color4)

Creates a new [Color4](/classes/3.0/Color4) copied from the current one.
### copyFrom(source) &rarr; [Color4](/classes/3.0/Color4)

Copies the passed [Color4](/classes/3.0/Color4) values into the current one.

Returns the updated [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color4](/classes/3.0/Color4) |      

### copyFromFloats(r, g, b, a) &rarr; [Color4](/classes/3.0/Color4)

Copies the passed float values into the current one.

Returns the updated [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |      The red value (0&lt;r&lt;1)
 | g | number |      The green value (0&lt;g&lt;1)
 | b | number |      The blue value (0&lt;b&lt;1)
### set(r, g, b, a) &rarr; [Color4](/classes/3.0/Color4)

Copies the passed float values into the current one.

Returns the updated [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |      The red value (0&lt;r&lt;1)
 | g | number |      The green value (0&lt;g&lt;1)
 | b | number |      The blue value (0&lt;b&lt;1)
### toHexString() &rarr; string

Returns a string containing the hexadecimal [Color4](/classes/3.0/Color4) code.
### static FromHexString(hex) &rarr; [Color4](/classes/3.0/Color4)

Creates a new [Color4](/classes/3.0/Color4) from the valid hexadecimal value contained in the passed string.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | hex | string |     

### static Lerp(left, right, amount) &rarr; [Color4](/classes/3.0/Color4)

Creates a new [Color4](/classes/3.0/Color4) object set with the linearly interpolated values of "amount" between the left [Color4](/classes/3.0/Color4) and the right [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/3.0/Color4) |      first color
 | right | [Color4](/classes/3.0/Color4) |      second color
 | amount | number |      Weighting factor.
### static LerpToRef(left, right, amount, result) &rarr; void

Set the passed "result" with the linearly interpolated values of "amount" between the left [Color4](/classes/3.0/Color4) and the right [Color4](/classes/3.0/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/3.0/Color4) |      first color
 | right | [Color4](/classes/3.0/Color4) |      second color
 | amount | number |      Weighting factor.
### static FromArray(array, offset) &rarr; [Color4](/classes/3.0/Color4)

Creates a new [Color4](/classes/3.0/Color4) from the starting index element of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; |      The given array
optional | offset | number |      The first index of the array to look at
### static FromInts(r, g, b, a) &rarr; [Color4](/classes/3.0/Color4)

Creates a new [Color4](/classes/3.0/Color4) from the passed integers ( < 256 ).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |      The red value (0&lt;r&lt;1)
 | g | number |      The green value (0&lt;g&lt;1)
 | b | number |      The blue value (0&lt;b&lt;1)
### static CheckColors4(colors, count) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | colors | number[] |    
 | count | number |    
