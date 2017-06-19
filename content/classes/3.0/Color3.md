---
ID_PAGE: 25236
PG_TITLE: Color3
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Color3](/classes/3.0/Color3)

Basic color defined by Red Green Blue.

## Constructor

## new [Color3](/classes/3.0/Color3)(r, g, b)

Creates a new [Color3](/classes/3.0/Color3) object from red, green, blue values, all between 0 and 1.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | r | number |      The red value (0&lt;r&lt;1)
optional | g | number |      The green value (0&lt;g&lt;1)
optional | b | number |      The blue value (0&lt;b&lt;1)
## Members

### r : number

red value

### g : number

green value

### b : number

blue value

## Methods

### toString() &rarr; string

Returns a string with the [Color3](/classes/3.0/Color3) current values.
### getClassName() &rarr; string

Returns the string "[Color3](/classes/3.0/Color3)".
### getHashCode() &rarr; number

Returns the [Color3](/classes/3.0/Color3) hash code.
### toArray(array, Float32Array, index) &rarr; [Color3](/classes/3.0/Color3)

Stores in the passed array from the passed starting index the red, green, blue values as successive elements.

Returns the [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] or Float32Array |      An array of rgb values
optional | index | number |      The given index
### toColor4(alpha) &rarr; [Color4](/classes/3.0/Color4)

Returns a new [Color4](/classes/3.0/Color4) object from the current [Color3](/classes/3.0/Color3) and the passed alpha.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | alpha | number |      default : 1 The given alpha

### asArray() &rarr; number[]

Returns a new array populated with 3 numeric elements : red, green and blue values.
### toLuminance() &rarr; number

Returns the luminance value (float).
### multiply(otherColor) &rarr; [Color3](/classes/3.0/Color3)

Multiply each [Color3](/classes/3.0/Color3) rgb values by the passed [Color3](/classes/3.0/Color3) rgb values in a new [Color3](/classes/3.0/Color3) object.

Returns this new object.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.0/Color3) |      The color to substract

### multiplyToRef(otherColor, result) &rarr; [Color3](/classes/3.0/Color3)

Multiply the rgb values of the [Color3](/classes/3.0/Color3) and the passed [Color3](/classes/3.0/Color3) and stores the result in the object "result".

Returns the current [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.0/Color3) |      The color to substract
 | result | [Color3](/classes/3.0/Color3) |      The resulting color
### equals(otherColor) &rarr; boolean

Boolean : True if the rgb values are equal to the passed ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.0/Color3) |      The color to substract

### equalsFloats(r, g, b) &rarr; boolean

Boolean : True if the rgb values are equal to the passed ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |      The red value (0&lt;r&lt;1)
 | g | number |      The green value (0&lt;g&lt;1)
 | b | number |      The blue value (0&lt;b&lt;1)
### scale(scale) &rarr; [Color3](/classes/3.0/Color3)

Multiplies in place each rgb value by scale.

Returns the updated [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |      The scaling factor

### scaleToRef(scale, result) &rarr; [Color3](/classes/3.0/Color3)

Multiplies the rgb values by scale and stores the result into "result".

Returns the unmodified current [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |      The scaling factor
 | result | [Color3](/classes/3.0/Color3) |      The resulting color
### add(otherColor) &rarr; [Color3](/classes/3.0/Color3)

Returns a new [Color3](/classes/3.0/Color3) set with the added values of the current [Color3](/classes/3.0/Color3) and of the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.0/Color3) |      The color to substract

### addToRef(otherColor, result) &rarr; [Color3](/classes/3.0/Color3)

Stores the result of the addition of the current [Color3](/classes/3.0/Color3) and passed one rgb values into "result".

Returns the unmodified current [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.0/Color3) |      The color to substract
 | result | [Color3](/classes/3.0/Color3) |      The resulting color
### subtract(otherColor) &rarr; [Color3](/classes/3.0/Color3)

Returns a new [Color3](/classes/3.0/Color3) set with the subtracted values of the passed one from the current [Color3](/classes/3.0/Color3) .

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.0/Color3) |      The color to substract

### subtractToRef(otherColor, result) &rarr; [Color3](/classes/3.0/Color3)

Stores the result of the subtraction of passed one from the current [Color3](/classes/3.0/Color3) rgb values into "result".

Returns the unmodified current [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.0/Color3) |      The color to substract
 | result | [Color3](/classes/3.0/Color3) |      The resulting color
### clone() &rarr; [Color3](/classes/3.0/Color3)

Returns a new [Color3](/classes/3.0/Color3) copied the current one.
### copyFrom(source) &rarr; [Color3](/classes/3.0/Color3)

Copies the rgb values from the source in the current [Color3](/classes/3.0/Color3).

Returns the updated [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color3](/classes/3.0/Color3) |      color to copy from

### copyFromFloats(r, g, b) &rarr; [Color3](/classes/3.0/Color3)

Updates the [Color3](/classes/3.0/Color3) rgb values from the passed floats.

Returns the [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |      The red value (0&lt;r&lt;1)
 | g | number |      The green value (0&lt;g&lt;1)
 | b | number |      The blue value (0&lt;b&lt;1)
### set(r, g, b) &rarr; [Color3](/classes/3.0/Color3)

Updates the [Color3](/classes/3.0/Color3) rgb values from the passed floats.

Returns the [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |      The red value (0&lt;r&lt;1)
 | g | number |      The green value (0&lt;g&lt;1)
 | b | number |      The blue value (0&lt;b&lt;1)
### toHexString() &rarr; string

Returns the [Color3](/classes/3.0/Color3) hexadecimal code as a string.
### toLinearSpace() &rarr; [Color3](/classes/3.0/Color3)

Returns a new [Color3](/classes/3.0/Color3) converted to linear space.
### toLinearSpaceToRef(convertedColor) &rarr; [Color3](/classes/3.0/Color3)

Converts the [Color3](/classes/3.0/Color3) values to linear space and stores the result in "convertedColor".

Returns the unmodified [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | convertedColor | [Color3](/classes/3.0/Color3) |    

### toGammaSpace() &rarr; [Color3](/classes/3.0/Color3)

Returns a new [Color3](/classes/3.0/Color3) converted to gamma space.
### toGammaSpaceToRef(convertedColor) &rarr; [Color3](/classes/3.0/Color3)

Converts the [Color3](/classes/3.0/Color3) values to gamma space and stores the result in "convertedColor".

Returns the unmodified [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | convertedColor | [Color3](/classes/3.0/Color3) |    

### static FromHexString(hex) &rarr; [Color3](/classes/3.0/Color3)

Creates a new [Color3](/classes/3.0/Color3) from the string containing valid hexadecimal values.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | hex | string |     

### static FromArray(array, offset) &rarr; [Color3](/classes/3.0/Color3)

Creates a new [Vector3](/classes/3.0/Vector3) from the startind index of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; |      An array of rgb values
optional | offset | number |      
### static FromInts(r, g, b) &rarr; [Color3](/classes/3.0/Color3)

Creates a new [Color3](/classes/3.0/Color3) from integer values ( < 256).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |      The red value (0&lt;r&lt;1)
 | g | number |      The green value (0&lt;g&lt;1)
 | b | number |      The blue value (0&lt;b&lt;1)
### static Lerp(start, end, amount) &rarr; [Color3](/classes/3.0/Color3)

Creates a new [Color3](/classes/3.0/Color3) with values linearly interpolated of "amount" between the start [Color3](/classes/3.0/Color3) and the end [Color3](/classes/3.0/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Color3](/classes/3.0/Color3) |      interpolation start color
 | end | [Color3](/classes/3.0/Color3) |      interpolation end color
 | amount | number |      Weighting factor
### static Red() &rarr; [Color3](/classes/3.0/Color3)

Red color
### static Green() &rarr; [Color3](/classes/3.0/Color3)

Green color
### static Blue() &rarr; [Color3](/classes/3.0/Color3)

Blue color
### static Black() &rarr; [Color3](/classes/3.0/Color3)

Black color
### static White() &rarr; [Color3](/classes/3.0/Color3)

White color
### static Purple() &rarr; [Color3](/classes/3.0/Color3)

Purple color
### static Magenta() &rarr; [Color3](/classes/3.0/Color3)

Magenta color
### static Yellow() &rarr; [Color3](/classes/3.0/Color3)

Yellow color
### static Gray() &rarr; [Color3](/classes/3.0/Color3)


### static Random() &rarr; [Color3](/classes/3.0/Color3)


