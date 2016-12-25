---
ID_PAGE: 25238
PG_TITLE: Vector2
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Vector2](/classes/2.5/Vector2)

Represent a point in a 2D space.

## Constructor

## new [Vector2](/classes/2.5/Vector2)(x, y)

Creates a new [Vector2](/classes/2.5/Vector2)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     The X coordinate of another vector
 | y | number |     The Y coordinate of another vector
## Members

### x : number

The first coordinate

### y : number

The second coordinate

## Methods

### toString() &rarr; string

Returns a string representation of the vector
### getClassName() &rarr; string


### getHashCode() &rarr; number


### toArray(array, index) &rarr; [Vector2](/classes/2.5/Vector2)

Fills an array from a given index with the vector's coordinates

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |     The given array
optional | index | number |     default : 0 The given index
### asArray() &rarr; number[]

Returns an array representation of the vector
### copyFrom(source) &rarr; [Vector2](/classes/2.5/Vector2)

Copies another vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector2](/classes/2.5/Vector2) |     The source vector

### copyFromFloats(x, y) &rarr; [Vector2](/classes/2.5/Vector2)

Copies another vector in float form

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     The X coordinate of another vector
 | y | number |     The Y coordinate of another vector
### add(otherVector) &rarr; [Vector2](/classes/2.5/Vector2)

Adds an another vector and returns the result as a new vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     

### addToRef(otherVector, result) &rarr; [Vector2](/classes/2.5/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     
 | result | [Vector2](/classes/2.5/Vector2) |     The existing vector
### addInPlace(otherVector) &rarr; [Vector2](/classes/2.5/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     

### addVector3(otherVector) &rarr; [Vector2](/classes/2.5/Vector2)

Adds the vector, the vector3's x and y

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.5/Vector3) |     

### subtract(otherVector) &rarr; [Vector2](/classes/2.5/Vector2)

Substracts another vector and returns the result in a new vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     

### subtractToRef(otherVector, result) &rarr; [Vector2](/classes/2.5/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     
 | result | [Vector2](/classes/2.5/Vector2) |     The existing vector
### subtractInPlace(otherVector) &rarr; [Vector2](/classes/2.5/Vector2)

Substracts another vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     

### multiplyInPlace(otherVector) &rarr; [Vector2](/classes/2.5/Vector2)

Multiply by another vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     

### multiply(otherVector) &rarr; [Vector2](/classes/2.5/Vector2)

Multiply by another vector and returns the result in a new vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     

### multiplyToRef(otherVector, result) &rarr; [Vector2](/classes/2.5/Vector2)

Multiply by another vector into a third target vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     
 | result | [Vector2](/classes/2.5/Vector2) |     The existing vector
### multiplyByFloats(x, y) &rarr; [Vector2](/classes/2.5/Vector2)

Multiply by another vector in float form and returns the result in a new vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     The X coordinate of another vector
 | y | number |     The Y coordinate of another vector
### divide(otherVector) &rarr; [Vector2](/classes/2.5/Vector2)

Divides by another vector and returns the result nin a new vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     

### divideToRef(otherVector, result) &rarr; [Vector2](/classes/2.5/Vector2)

Divides by another vector into a third target vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     
 | result | [Vector2](/classes/2.5/Vector2) |     The existing vector
### negate() &rarr; [Vector2](/classes/2.5/Vector2)

Returns the opposite vector, that is the vector with opposite coordinates
### scaleInPlace(scale) &rarr; [Vector2](/classes/2.5/Vector2)

Scales the vector with the given factor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |     The scaling factor

### scale(scale) &rarr; [Vector2](/classes/2.5/Vector2)

Scales the vector and retruns the result as a new vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |     The scaling factor

### equals(otherVector) &rarr; boolean

Tests if two vectors are equal
Returns true if X,Y coordinates are equal

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     

### equalsWithEpsilon(otherVector, epsilon) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.5/Vector2) |     
optional | epsilon | number |    
### length() &rarr; number

The length of the vector
### lengthSquared() &rarr; number

The squared length of the vector
### normalize() &rarr; [Vector2](/classes/2.5/Vector2)

Normalizes a vector
### clone() &rarr; [Vector2](/classes/2.5/Vector2)

Clones a vector
### static Zero() &rarr; [Vector2](/classes/2.5/Vector2)

Returns a new [Vector2](/classes/2.5/Vector2) with x and y to zero
### static FromArray(array, offset) &rarr; [Vector2](/classes/2.5/Vector2)

Creates a new vector from a given array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |     The given array
optional | offset | number |     The first index of the array to look at
### static FromArrayToRef(array, offset, result) &rarr; void

Sets an existing vector from a given array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |     The given array
 | offset | number |     The first index of the array to look at
 | result | [Vector2](/classes/2.5/Vector2) |     The existing vector
### static CatmullRom(value1, value2, value3, value4, amount) &rarr; [Vector2](/classes/2.5/Vector2)

Performs a Catmull-Rom interpolation using the specified positions.
When the method completes, returns the result of the Catmull-Rom interpolation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.5/Vector2) |     first vector
 | value2 | [Vector2](/classes/2.5/Vector2) |     second vector
 | value3 | [Vector2](/classes/2.5/Vector2) |     The third position in the interpolation.
 | value4 | [Vector2](/classes/2.5/Vector2) |     The fourth position in the interpolation.
### static Clamp(value, min, max) &rarr; [Vector2](/classes/2.5/Vector2)

Restricts a value to be within a specified range.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Vector2](/classes/2.5/Vector2) |     The value to clamp
 | min | [Vector2](/classes/2.5/Vector2) |     The minimum value
 | max | [Vector2](/classes/2.5/Vector2) |     The maximum value
### static Hermite(value1, tangent1, value2, tangent2, amount) &rarr; [Vector2](/classes/2.5/Vector2)

Performs a Hermite spline interpolation.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.5/Vector2) |     first vector
 | tangent1 | [Vector2](/classes/2.5/Vector2) |     First source tangent vector.
 | value2 | [Vector2](/classes/2.5/Vector2) |     second vector
 | tangent2 | [Vector2](/classes/2.5/Vector2) |     Second source tangent vector.
### static Lerp(start, end, amount) &rarr; [Vector2](/classes/2.5/Vector2)

Performs a linear interpolation between two vectors.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Vector2](/classes/2.5/Vector2) |     interpolation start vector
 | end | [Vector2](/classes/2.5/Vector2) |     interpolation end vector
 | amount | number |     Weighting factor
### static Dot(left, right) &rarr; number

Dot product between two vectors

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/2.5/Vector2) |     The vector to maximize
 | right | [Vector2](/classes/2.5/Vector2) |     the vector used to maximize
### static Normalize(vector) &rarr; [Vector2](/classes/2.5/Vector2)

Normalizes a vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](/classes/2.5/Vector2) |     The vector to transform

### static Minimize(left, right) &rarr; [Vector2](/classes/2.5/Vector2)

Minimizes the left vector with the right vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/2.5/Vector2) |     The vector to maximize
 | right | [Vector2](/classes/2.5/Vector2) |     the vector used to maximize
### static Maximize(left, right) &rarr; [Vector2](/classes/2.5/Vector2)

Maximizes the left vector with the right vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/2.5/Vector2) |     The vector to maximize
 | right | [Vector2](/classes/2.5/Vector2) |     the vector used to maximize
### static Transform(vector, transformation) &rarr; [Vector2](/classes/2.5/Vector2)

Transforms a vector into a new vector

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](/classes/2.5/Vector2) |     The vector to transform
 | transformation | [Matrix](/classes/2.5/Matrix) |     The transformation matrix
### static TransformToRef(vector, transformation, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](/classes/2.5/Vector2) |     The vector to transform
 | transformation | [Matrix](/classes/2.5/Matrix) |     The transformation matrix
 | result | [Vector2](/classes/2.5/Vector2) |     The existing vector
### static PointInTriangle(p, p0, p1, p2) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | p | [Vector2](/classes/2.5/Vector2) |  
 | p0 | [Vector2](/classes/2.5/Vector2) |  
 | p1 | [Vector2](/classes/2.5/Vector2) |  
### static Distance(value1, value2) &rarr; number

Returns the distance between two vectors

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.5/Vector2) |     first vector
 | value2 | [Vector2](/classes/2.5/Vector2) |     second vector
### static DistanceSquared(value1, value2) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.5/Vector2) |     first vector
 | value2 | [Vector2](/classes/2.5/Vector2) |     second vector
### static Center(value1, value2) &rarr; [Vector2](/classes/2.5/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.5/Vector2) |     first vector
 | value2 | [Vector2](/classes/2.5/Vector2) |     second vector
### static DistanceOfPointFromSegment(p, segA, segB) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | p | [Vector2](/classes/2.5/Vector2) |  
 | segA | [Vector2](/classes/2.5/Vector2) |  
 | segB | [Vector2](/classes/2.5/Vector2) |  
