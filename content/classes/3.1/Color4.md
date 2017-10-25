---
ID_PAGE: 25237
PG_TITLE: Color4
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Color4](/classes/3.1/Color4)



## Constructor

## new [Color4](/classes/3.1/Color4)(r, g, b, a)

Creates a new [Color4](/classes/3.1/Color4) object from the passed float values ( < 1) : red, green, blue, alpha.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | r | number | 
optional | g | number | 
optional | b | number | 
## Members

### r : number



### g : number



### b : number



### a : number



## Methods

### addInPlace(right) &rarr; [Color4](/classes/3.1/Color4)

Adds in place the passed [Color4](/classes/3.1/Color4) values to the current [Color4](/classes/3.1/Color4).

Returns the updated [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/3.1/Color4) | 

### asArray() &rarr; number[]

Returns a new array populated with 4 numeric elements : red, green, blue, alpha values.
### toArray(array, index) &rarr; [Color4](/classes/3.1/Color4)

Stores from the starting index in the passed array the [Color4](/classes/3.1/Color4) successive values.

Returns the [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | index | number | 
### add(right) &rarr; [Color4](/classes/3.1/Color4)

Returns a new [Color4](/classes/3.1/Color4) set with the added values of the current [Color4](/classes/3.1/Color4) and of the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/3.1/Color4) | 

### subtract(right) &rarr; [Color4](/classes/3.1/Color4)

Returns a new [Color4](/classes/3.1/Color4) set with the subtracted values of the passed one from the current [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/3.1/Color4) | 

### subtractToRef(right, result) &rarr; [Color4](/classes/3.1/Color4)

Subtracts the passed ones from the current [Color4](/classes/3.1/Color4) values and stores the results in "result".

Returns the [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/3.1/Color4) | 
 | result | [Color4](/classes/3.1/Color4) | 
### scale(scale) &rarr; [Color4](/classes/3.1/Color4)

Creates a new [Color4](/classes/3.1/Color4) with the current [Color4](/classes/3.1/Color4) values multiplied by scale.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

### scaleToRef(scale, result) &rarr; [Color4](/classes/3.1/Color4)

Multiplies the current [Color4](/classes/3.1/Color4) values by scale and stores the result in "result".

Returns the [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 
 | result | [Color4](/classes/3.1/Color4) | 
### multiply(color) &rarr; [Color4](/classes/3.1/Color4)

Multipy an RGBA [Color4](/classes/3.1/Color4) value by another and return a new [Color4](/classes/3.1/Color4) object

@returns A new [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color4](/classes/3.1/Color4) |  The [Color4](/classes/3.1/Color4) (RGBA) value to multiply by

### multiplyToRef(color, result) &rarr; [Color4](/classes/3.1/Color4)

Multipy an RGBA [Color4](/classes/3.1/Color4) value by another and push the result in a reference value

@returns the result [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color4](/classes/3.1/Color4) |  The [Color4](/classes/3.1/Color4) (RGBA) value to multiply by
 | result | [Color4](/classes/3.1/Color4) |  The [Color4](/classes/3.1/Color4) (RGBA) to fill the result in
### toString() &rarr; string

Returns a string with the [Color4](/classes/3.1/Color4) values.
### getClassName() &rarr; string

Returns the string "[Color4](/classes/3.1/Color4)"
### getHashCode() &rarr; number

Return the [Color4](/classes/3.1/Color4) hash code as a number.
### clone() &rarr; [Color4](/classes/3.1/Color4)

Creates a new [Color4](/classes/3.1/Color4) copied from the current one.
### copyFrom(source) &rarr; [Color4](/classes/3.1/Color4)

Copies the passed [Color4](/classes/3.1/Color4) values into the current one.

Returns the updated [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color4](/classes/3.1/Color4) | 

### copyFromFloats(r, g, b, a) &rarr; [Color4](/classes/3.1/Color4)

Copies the passed float values into the current one.

Returns the updated [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 
### set(r, g, b, a) &rarr; [Color4](/classes/3.1/Color4)

Copies the passed float values into the current one.

Returns the updated [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 
### toHexString() &rarr; string

Returns a string containing the hexadecimal [Color4](/classes/3.1/Color4) code.
### toLinearSpace() &rarr; [Color4](/classes/3.1/Color4)

Returns a new [Color4](/classes/3.1/Color4) converted to linear space.
### toLinearSpaceToRef(convertedColor) &rarr; [Color4](/classes/3.1/Color4)

Converts the [Color4](/classes/3.1/Color4) values to linear space and stores the result in "convertedColor".

Returns the unmodified [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | convertedColor | [Color4](/classes/3.1/Color4) | 

### toGammaSpace() &rarr; [Color4](/classes/3.1/Color4)

Returns a new [Color4](/classes/3.1/Color4) converted to gamma space.
### toGammaSpaceToRef(convertedColor) &rarr; [Color4](/classes/3.1/Color4)

Converts the [Color4](/classes/3.1/Color4) values to gamma space and stores the result in "convertedColor".

Returns the unmodified [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | convertedColor | [Color4](/classes/3.1/Color4) | 

### static FromHexString(hex) &rarr; [Color4](/classes/3.1/Color4)

Creates a new [Color4](/classes/3.1/Color4) from the valid hexadecimal value contained in the passed string.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | hex | string | 

### static Lerp(left, right, amount) &rarr; [Color4](/classes/3.1/Color4)

Creates a new [Color4](/classes/3.1/Color4) object set with the linearly interpolated values of "amount" between the left [Color4](/classes/3.1/Color4) and the right [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/3.1/Color4) | 
 | right | [Color4](/classes/3.1/Color4) | 
 | amount | number | 
### static LerpToRef(left, right, amount, result) &rarr; void

Set the passed "result" with the linearly interpolated values of "amount" between the left [Color4](/classes/3.1/Color4) and the right [Color4](/classes/3.1/Color4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/3.1/Color4) | 
 | right | [Color4](/classes/3.1/Color4) | 
 | amount | number | 
### static FromArray(array, offset) &rarr; [Color4](/classes/3.1/Color4)

Creates a new [Color4](/classes/3.1/Color4) from the starting index element of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; | 
optional | offset | number | 
### static FromInts(r, g, b, a) &rarr; [Color4](/classes/3.1/Color4)

Creates a new [Color4](/classes/3.1/Color4) from the passed integers ( < 256 ).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 
### static CheckColors4(colors, count) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | colors | number[] | 
 | count | number | 
