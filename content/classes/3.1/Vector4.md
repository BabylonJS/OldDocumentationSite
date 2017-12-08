---
ID_PAGE: 25240
PG_TITLE: Vector4
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Vector4](/classes/3.1/Vector4)



## Constructor

## new [Vector4](/classes/3.1/Vector4)(x, y, z, w)

Creates a [Vector4](/classes/3.1/Vector4) object from the passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
## Members

### x : number


### y : number


### z : number


### w : number


## Methods

### toString() &rarr; string

Returns the string with the [Vector4](/classes/3.1/Vector4) coordinates.
### getClassName() &rarr; string

Returns the string "[Vector4](/classes/3.1/Vector4)".
### getHashCode() &rarr; number

Returns the [Vector4](/classes/3.1/Vector4) hash code.
### asArray() &rarr; number[]

Returns a new array populated with 4 elements : the [Vector4](/classes/3.1/Vector4) coordinates.
### toArray(array, Float32Array, index) &rarr; [Vector4](/classes/3.1/Vector4)

Populates the passed array from the passed index with the [Vector4](/classes/3.1/Vector4) coordinates.

Returns the [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] or Float32Array | 
optional | index | number | 
### addInPlace(otherVector) &rarr; [Vector4](/classes/3.1/Vector4)

Adds the passed vector to the current [Vector4](/classes/3.1/Vector4).

Returns the updated [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 

### add(otherVector) &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) as the result of the addition of the current [Vector4](/classes/3.1/Vector4) and the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 

### addToRef(otherVector, result) &rarr; [Vector4](/classes/3.1/Vector4)

Updates the passed vector "result" with the result of the addition of the current [Vector4](/classes/3.1/Vector4) and the passed one.

Returns the current [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 
 | result | [Vector4](/classes/3.1/Vector4) | 
### subtractInPlace(otherVector) &rarr; [Vector4](/classes/3.1/Vector4)

Subtract in place the passed vector from the current [Vector4](/classes/3.1/Vector4).

Returns the updated [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 

### subtract(otherVector) &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) with the result of the subtraction of the passed vector from the current [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 

### subtractToRef(otherVector, result) &rarr; [Vector4](/classes/3.1/Vector4)

Sets the passed vector "result" with the result of the subtraction of the passed vector from the current [Vector4](/classes/3.1/Vector4).

Returns the current [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 
 | result | [Vector4](/classes/3.1/Vector4) | 
### subtractFromFloats(x, y, z, w) &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) set with the result of the subtraction of the passed floats from the current [Vector4](/classes/3.1/Vector4) coordinates.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### subtractFromFloatsToRef(x, y, z, w, result) &rarr; [Vector4](/classes/3.1/Vector4)

Sets the passed vector "result" set with the result of the subtraction of the passed floats from the current [Vector4](/classes/3.1/Vector4) coordinates.

Returns the current [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 
### negate() &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) set with the current [Vector4](/classes/3.1/Vector4) negated coordinates.
### scaleInPlace(scale) &rarr; [Vector4](/classes/3.1/Vector4)

Multiplies the current [Vector4](/classes/3.1/Vector4) coordinates by scale (float).

Returns the updated [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

### scale(scale) &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) set with the current [Vector4](/classes/3.1/Vector4) coordinates multiplied by scale (float).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

### scaleToRef(scale, result) &rarr; [Vector4](/classes/3.1/Vector4)

Sets the passed vector "result" with the current [Vector4](/classes/3.1/Vector4) coordinates multiplied by scale (float).

Returns the current [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 
 | result | [Vector4](/classes/3.1/Vector4) | 
### equals(otherVector) &rarr; boolean

Boolean : True if the current [Vector4](/classes/3.1/Vector4) coordinates are stricly equal to the passed ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 

### equalsWithEpsilon(otherVector, epsilon) &rarr; boolean

Boolean : True if the current [Vector4](/classes/3.1/Vector4) coordinates are each beneath the distance "epsilon" from the passed vector ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 
optional | epsilon | number | 
### equalsToFloats(x, y, z, w) &rarr; boolean

Boolean : True if the passed floats are strictly equal to the current [Vector4](/classes/3.1/Vector4) coordinates.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### multiplyInPlace(otherVector) &rarr; [Vector4](/classes/3.1/Vector4)

Multiplies in place the current [Vector4](/classes/3.1/Vector4) by the passed one.

Returns the updated [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 

### multiply(otherVector) &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) set with the multiplication result of the current [Vector4](/classes/3.1/Vector4) and the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 

### multiplyToRef(otherVector, result) &rarr; [Vector4](/classes/3.1/Vector4)

Updates the passed vector "result" with the multiplication result of the current [Vector4](/classes/3.1/Vector4) and the passed one.

Returns the current [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 
 | result | [Vector4](/classes/3.1/Vector4) | 
### multiplyByFloats(x, y, z, w) &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) set with the multiplication result of the passed floats and the current [Vector4](/classes/3.1/Vector4) coordinates.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### divide(otherVector) &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) set with the division result of the current [Vector4](/classes/3.1/Vector4) by the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 

### divideToRef(otherVector, result) &rarr; [Vector4](/classes/3.1/Vector4)

Updates the passed vector "result" with the division result of the current [Vector4](/classes/3.1/Vector4) by the passed one.

Returns the current [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/3.1/Vector4) | 
 | result | [Vector4](/classes/3.1/Vector4) | 
### MinimizeInPlace(other) &rarr; [Vector4](/classes/3.1/Vector4)

Updates the [Vector4](/classes/3.1/Vector4) coordinates with the minimum values between its own and the passed vector ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector4](/classes/3.1/Vector4) | 

### MaximizeInPlace(other) &rarr; [Vector4](/classes/3.1/Vector4)

Updates the [Vector4](/classes/3.1/Vector4) coordinates with the maximum values between its own and the passed vector ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector4](/classes/3.1/Vector4) | 

### length() &rarr; number

Returns the [Vector4](/classes/3.1/Vector4) length (float).
### lengthSquared() &rarr; number

Returns the [Vector4](/classes/3.1/Vector4) squared length (float).
### normalize() &rarr; [Vector4](/classes/3.1/Vector4)

Normalizes in place the [Vector4](/classes/3.1/Vector4).

Returns the updated [Vector4](/classes/3.1/Vector4).
### toVector3() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) from the [Vector4](/classes/3.1/Vector4) (x, y, z) coordinates.
### clone() &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) copied from the current one.
### copyFrom(source) &rarr; [Vector4](/classes/3.1/Vector4)

Updates the current [Vector4](/classes/3.1/Vector4) with the passed one coordinates.

Returns the updated [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector4](/classes/3.1/Vector4) | 

### copyFromFloats(x, y, z, w) &rarr; [Vector4](/classes/3.1/Vector4)

Updates the current [Vector4](/classes/3.1/Vector4) coordinates with the passed floats.

Returns the updated [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### set(x, y, z, w) &rarr; [Vector4](/classes/3.1/Vector4)

Updates the current [Vector4](/classes/3.1/Vector4) coordinates with the passed floats.

Returns the updated [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### static FromArray(array, offset) &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) set from the starting index of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; | 
optional | offset | number | 
### static FromArrayToRef(array, offset, result) &rarr; void

Updates the passed vector "result" from the starting index of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; | 
 | offset | number | 
 | result | [Vector4](/classes/3.1/Vector4) | 
### static FromFloatArrayToRef(array, offset, result) &rarr; void

Updates the passed vector "result" from the starting index of the passed Float32Array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array | 
 | offset | number | 
 | result | [Vector4](/classes/3.1/Vector4) | 
### static FromFloatsToRef(x, y, z, w, result) &rarr; void

Updates the passed vector "result" coordinates from the passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 
### static Zero() &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) set to (0.0, 0.0, 0.0, 0.0)
### static One() &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) set to (1.0, 1.0, 1.0, 1.0)
### static Normalize(vector) &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new normalized [Vector4](/classes/3.1/Vector4) from the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector4](/classes/3.1/Vector4) | 

### static NormalizeToRef(vector, result) &rarr; void

Updates the passed vector "result" from the normalization of the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector4](/classes/3.1/Vector4) | 
 | result | [Vector4](/classes/3.1/Vector4) | 
### static Minimize(left, right) &rarr; [Vector4](/classes/3.1/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector4](/classes/3.1/Vector4) | 
 | right | [Vector4](/classes/3.1/Vector4) | 
### static Maximize(left, right) &rarr; [Vector4](/classes/3.1/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector4](/classes/3.1/Vector4) | 
 | right | [Vector4](/classes/3.1/Vector4) | 
### static Distance(value1, value2) &rarr; number

Returns the distance (float) between the vectors "value1" and "value2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector4](/classes/3.1/Vector4) | 
 | value2 | [Vector4](/classes/3.1/Vector4) | 
### static DistanceSquared(value1, value2) &rarr; number

Returns the squared distance (float) between the vectors "value1" and "value2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector4](/classes/3.1/Vector4) | 
 | value2 | [Vector4](/classes/3.1/Vector4) | 
### static Center(value1, value2) &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) located at the center between the vectors "value1" and "value2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector4](/classes/3.1/Vector4) | 
 | value2 | [Vector4](/classes/3.1/Vector4) | 
### static TransformNormal(vector, transformation) &rarr; [Vector4](/classes/3.1/Vector4)

Returns a new [Vector4](/classes/3.1/Vector4) set with the result of the normal transformation by the passed matrix of the passed vector.

This methods computes transformed normalized direction vectors only.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector4](/classes/3.1/Vector4) | 
 | transformation | [Matrix](/classes/3.1/Matrix) | 
### static TransformNormalToRef(vector, transformation, result) &rarr; void

Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed vector.

This methods computes transformed normalized direction vectors only.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector4](/classes/3.1/Vector4) | 
 | transformation | [Matrix](/classes/3.1/Matrix) | 
 | result | [Vector4](/classes/3.1/Vector4) | 
### static TransformNormalFromFloatsToRef(x, y, z, w, transformation, result) &rarr; void

Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed floats (x, y, z, w).

This methods computes transformed normalized direction vectors only.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 
 | transformation | [Matrix](/classes/3.1/Matrix) | 
