---
ID_PAGE: 25239
PG_TITLE: Vector3
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Vector3](/classes/3.1/Vector3)



## Constructor

## new [Vector3](/classes/3.1/Vector3)(x, y, z)

Creates a new [Vector3](/classes/3.1/Vector3) object from the passed x, y, z (floats) coordinates.

A [Vector3](/classes/3.1/Vector3) is the main object used in 3D geometry.

It can represent etiher the coordinates of a point the space, either a direction.

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


## Methods

### toString() &rarr; string

Returns a string with the [Vector3](/classes/3.1/Vector3) coordinates.
### getClassName() &rarr; string

Returns the string "[Vector3](/classes/3.1/Vector3)"
### getHashCode() &rarr; number

Returns the Vector hash code.
### asArray() &rarr; number[]

Returns a new array with three elements : the coordinates the [Vector3](/classes/3.1/Vector3).
### toArray(array, Float32Array, index) &rarr; [Vector3](/classes/3.1/Vector3)

Populates the passed array or Float32Array from the passed index with the successive coordinates of the [Vector3](/classes/3.1/Vector3).

Returns the [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] or Float32Array | 
optional | index | number | 
### toQuaternion() &rarr; [Quaternion](/classes/3.1/Quaternion)

Returns a new [Quaternion](/classes/3.1/Quaternion) object, computed from the [Vector3](/classes/3.1/Vector3) coordinates.
### addInPlace(otherVector) &rarr; [Vector3](/classes/3.1/Vector3)

Adds the passed vector to the current [Vector3](/classes/3.1/Vector3).

Returns the updated [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 

### add(otherVector) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3), result of the addition the current [Vector3](/classes/3.1/Vector3) and the passed vector.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 

### addToRef(otherVector, result) &rarr; [Vector3](/classes/3.1/Vector3)

Adds the current [Vector3](/classes/3.1/Vector3) to the passed one and stores the result in the vector "result".

Returns the current [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### subtractInPlace(otherVector) &rarr; [Vector3](/classes/3.1/Vector3)

Subtract the passed vector from the current [Vector3](/classes/3.1/Vector3).

Returns the updated [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 

### subtract(otherVector) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3), result of the subtraction of the passed vector from the current [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 

### subtractToRef(otherVector, result) &rarr; [Vector3](/classes/3.1/Vector3)

Subtracts the passed vector from the current [Vector3](/classes/3.1/Vector3) and stores the result in the vector "result".

Returns the current [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### subtractFromFloats(x, y, z) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set with the subtraction of the passed floats from the current [Vector3](/classes/3.1/Vector3) coordinates.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### subtractFromFloatsToRef(x, y, z, result) &rarr; [Vector3](/classes/3.1/Vector3)

Subtracts the passed floats from the current [Vector3](/classes/3.1/Vector3) coordinates and set the passed vector "result" with this result.

Returns the current [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### negate() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set with the current [Vector3](/classes/3.1/Vector3) negated coordinates.
### scaleInPlace(scale) &rarr; [Vector3](/classes/3.1/Vector3)

Multiplies the [Vector3](/classes/3.1/Vector3) coordinates by the float "scale".

Returns the updated [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

### scale(scale) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set with the current [Vector3](/classes/3.1/Vector3) coordinates multiplied by the float "scale".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

### scaleToRef(scale, result) &rarr; [Vector3](/classes/3.1/Vector3)

Multiplies the current [Vector3](/classes/3.1/Vector3) coordinates by the float "scale" and stores the result in the passed vector "result" coordinates.

Returns the current [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### equals(otherVector) &rarr; boolean

Boolean : True if the current [Vector3](/classes/3.1/Vector3) and the passed vector coordinates are strictly equal.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 

### equalsWithEpsilon(otherVector, epsilon) &rarr; boolean

Boolean : True if the current [Vector3](/classes/3.1/Vector3) and the passed vector coordinates are distant less than epsilon.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 
optional | epsilon | number | 
### equalsToFloats(x, y, z) &rarr; boolean

Boolean : True if the current [Vector3](/classes/3.1/Vector3) coordinate equal the passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### multiplyInPlace(otherVector) &rarr; [Vector3](/classes/3.1/Vector3)

Muliplies the current [Vector3](/classes/3.1/Vector3) coordinates by the passed ones.

Returns the updated [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 

### multiply(otherVector) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3), result of the multiplication of the current [Vector3](/classes/3.1/Vector3) by the passed vector.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 

### multiplyToRef(otherVector, result) &rarr; [Vector3](/classes/3.1/Vector3)

Multiplies the current [Vector3](/classes/3.1/Vector3) by the passed one and stores the result in the passed vector "result".

Returns the current [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### multiplyByFloats(x, y, z) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set witth the result of the mulliplication of the current [Vector3](/classes/3.1/Vector3) coordinates by the passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### divide(otherVector) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set witth the result of the division of the current [Vector3](/classes/3.1/Vector3) coordinates by the passed ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 

### divideToRef(otherVector, result) &rarr; [Vector3](/classes/3.1/Vector3)

Divides the current [Vector3](/classes/3.1/Vector3) coordinates by the passed ones and stores the result in the passed vector "result".

Returns the current [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/3.1/Vector3) | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### MinimizeInPlace(other) &rarr; [Vector3](/classes/3.1/Vector3)

Updates the current [Vector3](/classes/3.1/Vector3) with the minimal coordinate values between its and the passed vector ones.

Returns the updated [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector3](/classes/3.1/Vector3) | 

### MaximizeInPlace(other) &rarr; [Vector3](/classes/3.1/Vector3)

Updates the current [Vector3](/classes/3.1/Vector3) with the maximal coordinate values between its and the passed vector ones.

Returns the updated [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector3](/classes/3.1/Vector3) | 

### length() &rarr; number

Returns the length of the [Vector3](/classes/3.1/Vector3) (float).
### lengthSquared() &rarr; number

Returns the squared length of the [Vector3](/classes/3.1/Vector3) (float).
### normalize() &rarr; [Vector3](/classes/3.1/Vector3)

Normalize the current [Vector3](/classes/3.1/Vector3).

Returns the updated [Vector3](/classes/3.1/Vector3).
### clone() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) copied from the current [Vector3](/classes/3.1/Vector3).
### copyFrom(source) &rarr; [Vector3](/classes/3.1/Vector3)

Copies the passed vector coordinates to the current [Vector3](/classes/3.1/Vector3) ones.

Returns the updated [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/3.1/Vector3) | 

### copyFromFloats(x, y, z) &rarr; [Vector3](/classes/3.1/Vector3)

Copies the passed floats to the current [Vector3](/classes/3.1/Vector3) coordinates.

Returns the updated [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### set(x, y, z) &rarr; [Vector3](/classes/3.1/Vector3)

Copies the passed floats to the current [Vector3](/classes/3.1/Vector3) coordinates.

Returns the updated [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### static GetClipFactor(vector0, vector1, axis, size) &rarr; number

*/

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector0 | [Vector3](/classes/3.1/Vector3) | 
 | vector1 | [Vector3](/classes/3.1/Vector3) | 
 | axis | [Vector3](/classes/3.1/Vector3) | 
### static FromArray(array, offset) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set from the index "offset" of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; | 
optional | offset | number | 
### static FromFloatArray(array, offset) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set from the index "offset" of the passed Float32Array.

This function is deprecated.  Use FromArray instead.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array | 
optional | offset | number | 
### static FromArrayToRef(array, offset, result) &rarr; void

Sets the passed vector "result" with the element values from the index "offset" of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; | 
 | offset | number | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### static FromFloatArrayToRef(array, offset, result) &rarr; void

Sets the passed vector "result" with the element values from the index "offset" of the passed Float32Array.

This function is deprecated.  Use FromArrayToRef instead.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array | 
 | offset | number | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### static FromFloatsToRef(x, y, z, result) &rarr; void

Sets the passed vector "result" with the passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### static Zero() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set to (0.0, 0.0, 0.0).
### static One() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set to (1.0, 1.0, 1.0).
### static Up() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set to (0.0, 1.0, 0.0)
### static Forward() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set to (0.0, 0.0, 1.0)
### static Right() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set to (1.0, 0.0, 0.0)
### static Left() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set to (-1.0, 0.0, 0.0)
### static TransformCoordinates(vector, transformation) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set with the result of the transformation by the passed matrix of the passed vector.

This method computes tranformed coordinates only, not transformed direction vectors.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/3.1/Vector3) | 
 | transformation | [Matrix](/classes/3.1/Matrix) | 
### static TransformCoordinatesToRef(vector, transformation, result) &rarr; void

Sets the passed vector "result" coordinates with the result of the transformation by the passed matrix of the passed vector.

This method computes tranformed coordinates only, not transformed direction vectors.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/3.1/Vector3) | 
 | transformation | [Matrix](/classes/3.1/Matrix) | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### static TransformCoordinatesFromFloatsToRef(x, y, z, transformation, result) &rarr; void

Sets the passed vector "result" coordinates with the result of the transformation by the passed matrix of the passed floats (x, y, z).

This method computes tranformed coordinates only, not transformed direction vectors.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | transformation | [Matrix](/classes/3.1/Matrix) | 
### static TransformNormal(vector, transformation) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set with the result of the normal transformation by the passed matrix of the passed vector.

This methods computes transformed normalized direction vectors only.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/3.1/Vector3) | 
 | transformation | [Matrix](/classes/3.1/Matrix) | 
### static TransformNormalToRef(vector, transformation, result) &rarr; void

Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed vector.

This methods computes transformed normalized direction vectors only.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/3.1/Vector3) | 
 | transformation | [Matrix](/classes/3.1/Matrix) | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### static TransformNormalFromFloatsToRef(x, y, z, transformation, result) &rarr; void

Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed floats (x, y, z).

This methods computes transformed normalized direction vectors only.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | transformation | [Matrix](/classes/3.1/Matrix) | 
### static CatmullRom(value1, value2, value3, value4, amount) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/3.1/Vector3) | 
 | value2 | [Vector3](/classes/3.1/Vector3) | 
 | value3 | [Vector3](/classes/3.1/Vector3) | 
 | value4 | [Vector3](/classes/3.1/Vector3) | 
### static Clamp(value, min, max) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max".

If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one.

If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Vector3](/classes/3.1/Vector3) | 
 | min | [Vector3](/classes/3.1/Vector3) | 
 | max | [Vector3](/classes/3.1/Vector3) | 
### static Hermite(value1, tangent1, value2, tangent2, amount) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/3.1/Vector3) | 
 | tangent1 | [Vector3](/classes/3.1/Vector3) | 
 | value2 | [Vector3](/classes/3.1/Vector3) | 
 | tangent2 | [Vector3](/classes/3.1/Vector3) | 
### static Lerp(start, end, amount) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) located for "amount" (float) on the linear interpolation between the vectors "start" and "end".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Vector3](/classes/3.1/Vector3) | 
 | end | [Vector3](/classes/3.1/Vector3) | 
 | amount | number | 
### static LerpToRef(start, end, amount, result) &rarr; void

Sets the passed vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Vector3](/classes/3.1/Vector3) | 
 | end | [Vector3](/classes/3.1/Vector3) | 
 | amount | number | 
### static Dot(left, right) &rarr; number

Returns the dot product (float) between the vectors "left" and "right".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/3.1/Vector3) | 
 | right | [Vector3](/classes/3.1/Vector3) | 
### static Cross(left, right) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) as the cross product of the vectors "left" and "right".

The cross product is then orthogonal to both "left" and "right".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/3.1/Vector3) | 
 | right | [Vector3](/classes/3.1/Vector3) | 
### static CrossToRef(left, right, result) &rarr; void

Sets the passed vector "result" with the cross product of "left" and "right".

The cross product is then orthogonal to both "left" and "right".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/3.1/Vector3) | 
 | right | [Vector3](/classes/3.1/Vector3) | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### static Normalize(vector) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) as the normalization of the passed vector.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/3.1/Vector3) | 

### static NormalizeToRef(vector, result) &rarr; void

Sets the passed vector "result" with the normalization of the passed first vector.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/3.1/Vector3) | 
 | result | [Vector3](/classes/3.1/Vector3) | 
### static Project(vector, world, transform, viewport) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/3.1/Vector3) | 
 | world | [Matrix](/classes/3.1/Matrix) | 
 | transform | [Matrix](/classes/3.1/Matrix) | 
### static UnprojectFromTransform(source, viewportWidth, viewportHeight, world, transform) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/3.1/Vector3) | 
 | viewportWidth | number | 
 | viewportHeight | number | 
 | world | [Matrix](/classes/3.1/Matrix) | 
### static Unproject(source, viewportWidth, viewportHeight, world, view, projection) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/3.1/Vector3) | 
 | viewportWidth | number | 
 | viewportHeight | number | 
 | world | [Matrix](/classes/3.1/Matrix) | 
 | view | [Matrix](/classes/3.1/Matrix) | 
### static Minimize(left, right) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/3.1/Vector3) | 
 | right | [Vector3](/classes/3.1/Vector3) | 
### static Maximize(left, right) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/3.1/Vector3) | 
 | right | [Vector3](/classes/3.1/Vector3) | 
### static Distance(value1, value2) &rarr; number

Returns the distance (float) between the vectors "value1" and "value2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/3.1/Vector3) | 
 | value2 | [Vector3](/classes/3.1/Vector3) | 
### static DistanceSquared(value1, value2) &rarr; number

Returns the squared distance (float) between the vectors "value1" and "value2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/3.1/Vector3) | 
 | value2 | [Vector3](/classes/3.1/Vector3) | 
### static Center(value1, value2) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) located at the center between "value1" and "value2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/3.1/Vector3) | 
 | value2 | [Vector3](/classes/3.1/Vector3) | 
### static RotationFromAxis(axis1, axis2, axis3) &rarr; [Vector3](/classes/3.1/Vector3)

Given three orthogonal normalized left-handed oriented [Vector3](/classes/3.1/Vector3) axis in space (target system),

RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply

to something in order to rotate it from its local system to the given target system.

Note : axis1, axis2 and axis3 are normalized during this operation.

Returns a new [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis1 | [Vector3](/classes/3.1/Vector3) | 
 | axis2 | [Vector3](/classes/3.1/Vector3) | 
 | axis3 | [Vector3](/classes/3.1/Vector3) | 
### static RotationFromAxisToRef(axis1, axis2, axis3, ref) &rarr; void

The same than RotationFromAxis but updates the passed ref [Vector3](/classes/3.1/Vector3) parameter instead of returning a new [Vector3](/classes/3.1/Vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis1 | [Vector3](/classes/3.1/Vector3) | 
 | axis2 | [Vector3](/classes/3.1/Vector3) | 
 | axis3 | [Vector3](/classes/3.1/Vector3) | 
