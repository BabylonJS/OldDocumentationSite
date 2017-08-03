---
ID_PAGE: 25238
PG_TITLE: Vector2
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Vector2](/classes/3.0/Vector2)

Represent a point in a 2D space.

## Constructor

## new [Vector2](/classes/3.0/Vector2)(x, y)

Creates a new [Vector2](/classes/3.0/Vector2) from the passed x and y coordinates.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The X coordinate of another vector
 | y | number |      The Y coordinate of another vector
## Members

### x : number

The first coordinate

### y : number

The second coordinate

## Methods

### toString() &rarr; string

Returns a string with the [Vector2](/classes/3.0/Vector2) coordinates.
### getClassName() &rarr; string

Returns the string "[Vector2](/classes/3.0/Vector2)"
### getHashCode() &rarr; number

Returns the [Vector2](/classes/3.0/Vector2) hash code as a number.
### toArray(array, Float32Array, index) &rarr; [Vector2](/classes/3.0/Vector2)

Sets the [Vector2](/classes/3.0/Vector2) coordinates in the passed array or Float32Array from the passed index.

Returns the [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] or Float32Array |      The given array
optional | index | number |      default : 0 The given index
### asArray() &rarr; number[]

Returns a new array with 2 elements : the [Vector2](/classes/3.0/Vector2) coordinates.
### copyFrom(source) &rarr; [Vector2](/classes/3.0/Vector2)

Sets the [Vector2](/classes/3.0/Vector2) coordinates with the passed [Vector2](/classes/3.0/Vector2) coordinates.

Returns the updated [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector2](/classes/3.0/Vector2) |      The source vector

### copyFromFloats(x, y) &rarr; [Vector2](/classes/3.0/Vector2)

Sets the [Vector2](/classes/3.0/Vector2) coordinates with the passed floats.

Returns the updated [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The X coordinate of another vector
 | y | number |      The Y coordinate of another vector
### set(x, y) &rarr; [Vector2](/classes/3.0/Vector2)

Sets the [Vector2](/classes/3.0/Vector2) coordinates with the passed floats.

Returns the updated [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The X coordinate of another vector
 | y | number |      The Y coordinate of another vector
### add(otherVector) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) set with the addition of the current [Vector2](/classes/3.0/Vector2) and the passed one coordinates.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      

### addToRef(otherVector, result) &rarr; [Vector2](/classes/3.0/Vector2)

Sets the "result" coordinates with the addition of the current [Vector2](/classes/3.0/Vector2) and the passed one coordinates.

Returns the [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      
 | result | [Vector2](/classes/3.0/Vector2) |      The existing vector
### addInPlace(otherVector) &rarr; [Vector2](/classes/3.0/Vector2)

Set the [Vector2](/classes/3.0/Vector2) coordinates by adding the passed [Vector2](/classes/3.0/Vector2) coordinates.

Returns the updated [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      

### addVector3(otherVector) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) by adding the current [Vector2](/classes/3.0/Vector2) coordinates to the passed [Vector3](/classes/3.0/Vector3) x, y coordinates.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.0/Vector3) |      

### subtract(otherVector) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) set with the subtracted coordinates of the passed one from the current [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      

### subtractToRef(otherVector, result) &rarr; [Vector2](/classes/3.0/Vector2)

Sets the "result" coordinates with the subtraction of the passed one from the current [Vector2](/classes/3.0/Vector2) coordinates.

Returns the [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      
 | result | [Vector2](/classes/3.0/Vector2) |      The existing vector
### subtractInPlace(otherVector) &rarr; [Vector2](/classes/3.0/Vector2)

Sets the current [Vector2](/classes/3.0/Vector2) coordinates by subtracting from it the passed one coordinates.

Returns the updated [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      

### multiplyInPlace(otherVector) &rarr; [Vector2](/classes/3.0/Vector2)

Multiplies in place the current [Vector2](/classes/3.0/Vector2) coordinates by the passed ones.

Returns the updated [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      

### multiply(otherVector) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) set with the multiplication of the current [Vector2](/classes/3.0/Vector2) and the passed one coordinates.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      

### multiplyToRef(otherVector, result) &rarr; [Vector2](/classes/3.0/Vector2)

Sets "result" coordinates with the multiplication of the current [Vector2](/classes/3.0/Vector2) and the passed one coordinates.

Returns the [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      
 | result | [Vector2](/classes/3.0/Vector2) |      The existing vector
### multiplyByFloats(x, y) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) set with the [Vector2](/classes/3.0/Vector2) coordinates multiplied by the passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The X coordinate of another vector
 | y | number |      The Y coordinate of another vector
### divide(otherVector) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) set with the [Vector2](/classes/3.0/Vector2) coordinates divided by the passed one coordinates.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      

### divideToRef(otherVector, result) &rarr; [Vector2](/classes/3.0/Vector2)

Sets the "result" coordinates with the [Vector2](/classes/3.0/Vector2) divided by the passed one coordinates.

Returns the [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      
 | result | [Vector2](/classes/3.0/Vector2) |      The existing vector
### negate() &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) with current [Vector2](/classes/3.0/Vector2) negated coordinates.
### scaleInPlace(scale) &rarr; [Vector2](/classes/3.0/Vector2)

Multiply the [Vector2](/classes/3.0/Vector2) coordinates by scale.

Returns the updated [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |      The scaling factor

### scale(scale) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) scaled by "scale" from the current [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |      The scaling factor

### equals(otherVector) &rarr; boolean

Boolean : True if the passed vector coordinates strictly equal the current [Vector2](/classes/3.0/Vector2) ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      

### equalsWithEpsilon(otherVector, epsilon) &rarr; boolean

Boolean : True if the passed vector coordinates are close to the current ones by a distance of epsilon.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/3.0/Vector2) |      
optional | epsilon | number |     
### length() &rarr; number

Returns the vector length (float).
### lengthSquared() &rarr; number

Returns the vector squared length (float);
### normalize() &rarr; [Vector2](/classes/3.0/Vector2)

Normalize the vector.

Returns the updated [Vector2](/classes/3.0/Vector2).
### clone() &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) copied from the [Vector2](/classes/3.0/Vector2).
### static Zero() &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2)(0, 0)
### static FromArray(array, offset) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) set from the passed index element of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; |      The given array
optional | offset | number |      The first index of the array to look at
### static FromArrayToRef(array, offset, result) &rarr; void

Sets "result" from the passed index element of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; |      The given array
 | offset | number |      The first index of the array to look at
 | result | [Vector2](/classes/3.0/Vector2) |      The existing vector
### static CatmullRom(value1, value2, value3, value4, amount) &rarr; [Vector2](/classes/3.0/Vector2)

Retuns a new [Vector2](/classes/3.0/Vector2) located for "amount" (float) on the CatmullRom  spline defined by the passed four [Vector2](/classes/3.0/Vector2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/3.0/Vector2) |      first vector
 | value2 | [Vector2](/classes/3.0/Vector2) |      second vector
 | value3 | [Vector2](/classes/3.0/Vector2) |      The third position in the interpolation.
 | value4 | [Vector2](/classes/3.0/Vector2) |      The fourth position in the interpolation.
### static Clamp(value, min, max) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".

If a coordinate of "value" is lower than "min" coordinates, the returned [Vector2](/classes/3.0/Vector2) is given this "min" coordinate.

If a coordinate of "value" is greater than "max" coordinates, the returned [Vector2](/classes/3.0/Vector2) is given this "max" coordinate.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Vector2](/classes/3.0/Vector2) |      The value to clamp
 | min | [Vector2](/classes/3.0/Vector2) |      The minimum value
 | max | [Vector2](/classes/3.0/Vector2) |      The maximum value
### static Hermite(value1, tangent1, value2, tangent2, amount) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value3", "tangent1", "tangent2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/3.0/Vector2) |      first vector
 | tangent1 | [Vector2](/classes/3.0/Vector2) |      First source tangent vector.
 | value2 | [Vector2](/classes/3.0/Vector2) |      second vector
 | tangent2 | [Vector2](/classes/3.0/Vector2) |      Second source tangent vector.
### static Lerp(start, end, amount) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Vector2](/classes/3.0/Vector2) |      interpolation start vector
 | end | [Vector2](/classes/3.0/Vector2) |      interpolation end vector
 | amount | number |      Weighting factor
### static Dot(left, right) &rarr; number

Returns the dot product (float) of the vector "left" and the vector "right".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/3.0/Vector2) |      The vector to maximize
 | right | [Vector2](/classes/3.0/Vector2) |      the vector used to maximize
### static Normalize(vector) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new [Vector2](/classes/3.0/Vector2) equal to the normalized passed vector.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](/classes/3.0/Vector2) |      The vector to transform

### static Minimize(left, right) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new Vecto2 set with the minimal coordinate values from the "left" and "right" vectors.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/3.0/Vector2) |      The vector to maximize
 | right | [Vector2](/classes/3.0/Vector2) |      the vector used to maximize
### static Maximize(left, right) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new Vecto2 set with the maximal coordinate values from the "left" and "right" vectors.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/3.0/Vector2) |      The vector to maximize
 | right | [Vector2](/classes/3.0/Vector2) |      the vector used to maximize
### static Transform(vector, transformation) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new Vecto2 set with the transformed coordinates of the passed vector by the passed transformation matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](/classes/3.0/Vector2) |      The vector to transform
 | transformation | [Matrix](/classes/3.0/Matrix) |      The transformation matrix
### static TransformToRef(vector, transformation, result) &rarr; void

Transforms the passed vector coordinates by the passed transformation matrix and stores the result in the vector "result" coordinates.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](/classes/3.0/Vector2) |      The vector to transform
 | transformation | [Matrix](/classes/3.0/Matrix) |      The transformation matrix
 | result | [Vector2](/classes/3.0/Vector2) |      The existing vector
### static PointInTriangle(p, p0, p1, p2) &rarr; boolean

Boolean : True if the point "p" is in the triangle defined by the vertors "p0", "p1", "p2"

#### Parameters
 | Name | Type | Description
---|---|---|---
 | p | [Vector2](/classes/3.0/Vector2) |   
 | p0 | [Vector2](/classes/3.0/Vector2) |   
 | p1 | [Vector2](/classes/3.0/Vector2) |   
### static Distance(value1, value2) &rarr; number

Returns the distance (float) between the vectors "value1" and "value2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/3.0/Vector2) |      first vector
 | value2 | [Vector2](/classes/3.0/Vector2) |      second vector
### static DistanceSquared(value1, value2) &rarr; number

Returns the squared distance (float) between the vectors "value1" and "value2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/3.0/Vector2) |      first vector
 | value2 | [Vector2](/classes/3.0/Vector2) |      second vector
### static Center(value1, value2) &rarr; [Vector2](/classes/3.0/Vector2)

Returns a new Vecto2 located at the center of the vectors "value1" and "value2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/3.0/Vector2) |      first vector
 | value2 | [Vector2](/classes/3.0/Vector2) |      second vector
### static DistanceOfPointFromSegment(p, segA, segB) &rarr; number

Returns the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | p | [Vector2](/classes/3.0/Vector2) |   
 | segA | [Vector2](/classes/3.0/Vector2) |   
 | segB | [Vector2](/classes/3.0/Vector2) |   
