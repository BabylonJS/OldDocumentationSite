---
ID_PAGE: 25236
PG_TITLE: Color3
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Color3](/classes/3.1/Color3)



## Constructor

## new [Color3](/classes/3.1/Color3)(r, g, b)

Creates a new [Color3](/classes/3.1/Color3) object from red, green, blue values, all between 0 and 1.

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


## Methods

### toString() &rarr; string

Returns a string with the [Color3](/classes/3.1/Color3) current values.
### getClassName() &rarr; string

Returns the string "[Color3](/classes/3.1/Color3)".
### getHashCode() &rarr; number

Returns the [Color3](/classes/3.1/Color3) hash code.
### toArray(array, Float32Array, index) &rarr; [Color3](/classes/3.1/Color3)

Stores in the passed array from the passed starting index the red, green, blue values as successive elements.

Returns the [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] or Float32Array | 
optional | index | number | 
### toColor4(alpha) &rarr; [Color4](/classes/3.1/Color4)

Returns a new [Color4](/classes/3.1/Color4) object from the current [Color3](/classes/3.1/Color3) and the passed alpha.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | alpha | number | 

### asArray() &rarr; number[]

Returns a new array populated with 3 numeric elements : red, green and blue values.
### toLuminance() &rarr; number

Returns the luminance value (float).
### multiply(otherColor) &rarr; [Color3](/classes/3.1/Color3)

Multiply each [Color3](/classes/3.1/Color3) rgb values by the passed [Color3](/classes/3.1/Color3) rgb values in a new [Color3](/classes/3.1/Color3) object.

Returns this new object.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.1/Color3) | 

### multiplyToRef(otherColor, result) &rarr; [Color3](/classes/3.1/Color3)

Multiply the rgb values of the [Color3](/classes/3.1/Color3) and the passed [Color3](/classes/3.1/Color3) and stores the result in the object "result".

Returns the current [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.1/Color3) | 
 | result | [Color3](/classes/3.1/Color3) | 
### equals(otherColor) &rarr; boolean

Boolean : True if the rgb values are equal to the passed ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.1/Color3) | 

### equalsFloats(r, g, b) &rarr; boolean

Boolean : True if the rgb values are equal to the passed ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 
### scale(scale) &rarr; [Color3](/classes/3.1/Color3)

Multiplies in place each rgb value by scale.

Returns the updated [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

### scaleToRef(scale, result) &rarr; [Color3](/classes/3.1/Color3)

Multiplies the rgb values by scale and stores the result into "result".

Returns the unmodified current [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 
 | result | [Color3](/classes/3.1/Color3) | 
### add(otherColor) &rarr; [Color3](/classes/3.1/Color3)

Returns a new [Color3](/classes/3.1/Color3) set with the added values of the current [Color3](/classes/3.1/Color3) and of the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.1/Color3) | 

### addToRef(otherColor, result) &rarr; [Color3](/classes/3.1/Color3)

Stores the result of the addition of the current [Color3](/classes/3.1/Color3) and passed one rgb values into "result".

Returns the unmodified current [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.1/Color3) | 
 | result | [Color3](/classes/3.1/Color3) | 
### subtract(otherColor) &rarr; [Color3](/classes/3.1/Color3)

Returns a new [Color3](/classes/3.1/Color3) set with the subtracted values of the passed one from the current [Color3](/classes/3.1/Color3) .

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.1/Color3) | 

### subtractToRef(otherColor, result) &rarr; [Color3](/classes/3.1/Color3)

Stores the result of the subtraction of passed one from the current [Color3](/classes/3.1/Color3) rgb values into "result".

Returns the unmodified current [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/3.1/Color3) | 
 | result | [Color3](/classes/3.1/Color3) | 
### clone() &rarr; [Color3](/classes/3.1/Color3)

Returns a new [Color3](/classes/3.1/Color3) copied the current one.
### copyFrom(source) &rarr; [Color3](/classes/3.1/Color3)

Copies the rgb values from the source in the current [Color3](/classes/3.1/Color3).

Returns the updated [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color3](/classes/3.1/Color3) | 

### copyFromFloats(r, g, b) &rarr; [Color3](/classes/3.1/Color3)

Updates the [Color3](/classes/3.1/Color3) rgb values from the passed floats.

Returns the [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 
### set(r, g, b) &rarr; [Color3](/classes/3.1/Color3)

Updates the [Color3](/classes/3.1/Color3) rgb values from the passed floats.

Returns the [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 
### toHexString() &rarr; string

Returns the [Color3](/classes/3.1/Color3) hexadecimal code as a string.
### toLinearSpace() &rarr; [Color3](/classes/3.1/Color3)

Returns a new [Color3](/classes/3.1/Color3) converted to linear space.
### toLinearSpaceToRef(convertedColor) &rarr; [Color3](/classes/3.1/Color3)

Converts the [Color3](/classes/3.1/Color3) values to linear space and stores the result in "convertedColor".

Returns the unmodified [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | convertedColor | [Color3](/classes/3.1/Color3) | 

### toGammaSpace() &rarr; [Color3](/classes/3.1/Color3)

Returns a new [Color3](/classes/3.1/Color3) converted to gamma space.
### toGammaSpaceToRef(convertedColor) &rarr; [Color3](/classes/3.1/Color3)

Converts the [Color3](/classes/3.1/Color3) values to gamma space and stores the result in "convertedColor".

Returns the unmodified [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | convertedColor | [Color3](/classes/3.1/Color3) | 

### static FromHexString(hex) &rarr; [Color3](/classes/3.1/Color3)

Creates a new [Color3](/classes/3.1/Color3) from the string containing valid hexadecimal values.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | hex | string | 

### static FromArray(array, offset) &rarr; [Color3](/classes/3.1/Color3)

Creates a new [Vector3](/classes/3.1/Vector3) from the startind index of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; | 
optional | offset | number | 
### static FromInts(r, g, b) &rarr; [Color3](/classes/3.1/Color3)

Creates a new [Color3](/classes/3.1/Color3) from integer values ( < 256).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 
### static Lerp(start, end, amount) &rarr; [Color3](/classes/3.1/Color3)

Creates a new [Color3](/classes/3.1/Color3) with values linearly interpolated of "amount" between the start [Color3](/classes/3.1/Color3) and the end [Color3](/classes/3.1/Color3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Color3](/classes/3.1/Color3) | 
 | end | [Color3](/classes/3.1/Color3) | 
 | amount | number | 
### static Red() &rarr; [Color3](/classes/3.1/Color3)


### static Green() &rarr; [Color3](/classes/3.1/Color3)


### static Blue() &rarr; [Color3](/classes/3.1/Color3)


### static Black() &rarr; [Color3](/classes/3.1/Color3)


### static White() &rarr; [Color3](/classes/3.1/Color3)


### static Purple() &rarr; [Color3](/classes/3.1/Color3)


### static Magenta() &rarr; [Color3](/classes/3.1/Color3)


### static Yellow() &rarr; [Color3](/classes/3.1/Color3)


### static Gray() &rarr; [Color3](/classes/3.1/Color3)


### static Teal() &rarr; [Color3](/classes/3.1/Color3)


### static Random() &rarr; [Color3](/classes/3.1/Color3)


