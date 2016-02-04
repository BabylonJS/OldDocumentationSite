---
ID_PAGE: 25239
PG_TITLE: Vector3
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Vector3](/classes/2.3/Vector3)



## Constructor

##  new [Vector3](/classes/2.3/Vector3)(x, y, z)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate to transform
 | y | number |   The Y coordinate to transform
 | z | number |   The Z coordinate to transform
## Members

### x : number



### y : number



### z : number



## Methods

### toString() &rarr; string


### asArray() &rarr; number[]


### toArray(array, index) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   The given array of floats
optional | index | number |   default : 0 The given index
### toQuaternion() &rarr; [Quaternion](/classes/2.3/Quaternion)


### addInPlace(otherVector) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector

### add(otherVector) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector

### addToRef(otherVector, result) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector
 | result | [Vector3](/classes/2.3/Vector3) |   The vector to put the result into
### subtractInPlace(otherVector) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector

### subtract(otherVector) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector

### subtractToRef(otherVector, result) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector
 | result | [Vector3](/classes/2.3/Vector3) |   The vector to put the result into
### subtractFromFloats(x, y, z) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate to transform
 | y | number |   The Y coordinate to transform
 | z | number |   The Z coordinate to transform
### subtractFromFloatsToRef(x, y, z, result) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate to transform
 | y | number |   The Y coordinate to transform
 | z | number |   The Z coordinate to transform
### negate() &rarr; [Vector3](/classes/2.3/Vector3)


### scaleInPlace(scale) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   The scaling factor

### scale(scale) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   The scaling factor

### scaleToRef(scale, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   The scaling factor
 | result | [Vector3](/classes/2.3/Vector3) |   The vector to put the result into
### equals(otherVector) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector

### equalsWithEpsilon(otherVector, epsilon) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector
optional | epsilon | number |  
### equalsToFloats(x, y, z) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate to transform
 | y | number |   The Y coordinate to transform
 | z | number |   The Z coordinate to transform
### multiplyInPlace(otherVector) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector

### multiply(otherVector) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector

### multiplyToRef(otherVector, result) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector
 | result | [Vector3](/classes/2.3/Vector3) |   The vector to put the result into
### multiplyByFloats(x, y, z) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate to transform
 | y | number |   The Y coordinate to transform
 | z | number |   The Z coordinate to transform
### divide(otherVector) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector

### divideToRef(otherVector, result) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   Another vector
 | result | [Vector3](/classes/2.3/Vector3) |   The vector to put the result into
### MinimizeInPlace(other) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector3](/classes/2.3/Vector3) |   Another vector

### MaximizeInPlace(other) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector3](/classes/2.3/Vector3) |   Another vector

### length() &rarr; number


### lengthSquared() &rarr; number


### normalize() &rarr; [Vector3](/classes/2.3/Vector3)


### clone() &rarr; [Vector3](/classes/2.3/Vector3)


### copyFrom(source) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/2.3/Vector3) |   The vector to project

### copyFromFloats(x, y, z) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate to transform
 | y | number |   The Y coordinate to transform
 | z | number |   The Z coordinate to transform
### static  GetClipFactor(vector0, vector1, axis, size) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector0 | [Vector3](/classes/2.3/Vector3) |   
 | vector1 | [Vector3](/classes/2.3/Vector3) |   
 | axis | [Vector3](/classes/2.3/Vector3) |   
### static  FromArray(array, offset) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   The given array of floats
optional | offset | number |   The first index of the array to look at
### static  FromFloatArray(array, offset) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array |   The given array of floats
optional | offset | number |   The first index of the array to look at
### static  FromArrayToRef(array, offset, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   The given array of floats
 | offset | number |   The first index of the array to look at
 | result | [Vector3](/classes/2.3/Vector3) |   The vector to put the result into
### static  FromFloatArrayToRef(array, offset, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array |   The given array of floats
 | offset | number |   The first index of the array to look at
 | result | [Vector3](/classes/2.3/Vector3) |   The vector to put the result into
### static  FromFloatsToRef(x, y, z, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate to transform
 | y | number |   The Y coordinate to transform
 | z | number |   The Z coordinate to transform
### static  Zero() &rarr; [Vector3](/classes/2.3/Vector3)


### static  Up() &rarr; [Vector3](/classes/2.3/Vector3)


### static  TransformCoordinates(vector, transformation) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.3/Vector3) |   The vector to project
 | transformation | [Matrix](/classes/2.3/Matrix) |   The transformation matrix
### static  TransformCoordinatesToRef(vector, transformation, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.3/Vector3) |   The vector to project
 | transformation | [Matrix](/classes/2.3/Matrix) |   The transformation matrix
 | result | [Vector3](/classes/2.3/Vector3) |   The vector to put the result into
### static  TransformCoordinatesFromFloatsToRef(x, y, z, transformation, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate to transform
 | y | number |   The Y coordinate to transform
 | z | number |   The Z coordinate to transform
 | transformation | [Matrix](/classes/2.3/Matrix) |   The transformation matrix
### static  TransformNormal(vector, transformation) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.3/Vector3) |   The vector to project
 | transformation | [Matrix](/classes/2.3/Matrix) |   The transformation matrix
### static  TransformNormalToRef(vector, transformation, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.3/Vector3) |   The vector to project
 | transformation | [Matrix](/classes/2.3/Matrix) |   The transformation matrix
 | result | [Vector3](/classes/2.3/Vector3) |   The vector to put the result into
### static  TransformNormalFromFloatsToRef(x, y, z, transformation, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate to transform
 | y | number |   The Y coordinate to transform
 | z | number |   The Z coordinate to transform
 | transformation | [Matrix](/classes/2.3/Matrix) |   The transformation matrix
### static  CatmullRom(value1, value2, value3, value4, amount) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/2.3/Vector3) |   first vector
 | value2 | [Vector3](/classes/2.3/Vector3) |   second vector
 | value3 | [Vector3](/classes/2.3/Vector3) |   The third position in the interpolation.
 | value4 | [Vector3](/classes/2.3/Vector3) |   The fourth position in the interpolation.
### static  Clamp(value, min, max) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Vector3](/classes/2.3/Vector3) |   The value to clamp
 | min | [Vector3](/classes/2.3/Vector3) |   The minimum value
 | max | [Vector3](/classes/2.3/Vector3) |   The maximum value
### static  Hermite(value1, tangent1, value2, tangent2, amount) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/2.3/Vector3) |   first vector
 | tangent1 | [Vector3](/classes/2.3/Vector3) |   First source tangent vector.
 | value2 | [Vector3](/classes/2.3/Vector3) |   second vector
 | tangent2 | [Vector3](/classes/2.3/Vector3) |   Second source tangent vector.
### static  Lerp(start, end, amount) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Vector3](/classes/2.3/Vector3) |   interpolation start vector
 | end | [Vector3](/classes/2.3/Vector3) |   interpolation end vector
 | amount | number |   Weighting factor
### static  Dot(left, right) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/2.3/Vector3) |   The vector to maximize
 | right | [Vector3](/classes/2.3/Vector3) |   the vetor used to maximize
### static  Cross(left, right) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/2.3/Vector3) |   The vector to maximize
 | right | [Vector3](/classes/2.3/Vector3) |   the vetor used to maximize
### static  CrossToRef(left, right, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/2.3/Vector3) |   The vector to maximize
 | right | [Vector3](/classes/2.3/Vector3) |   the vetor used to maximize
 | result | [Vector3](/classes/2.3/Vector3) |   The vector to put the result into
### static  Normalize(vector) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.3/Vector3) |   The vector to project

### static  NormalizeToRef(vector, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.3/Vector3) |   The vector to project
 | result | [Vector3](/classes/2.3/Vector3) |   The vector to put the result into
### static  Project(vector, world, transform, viewport) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.3/Vector3) |   The vector to project
 | world | [Matrix](/classes/2.3/Matrix) |   The matrix representing the world matrix
 | transform | [Matrix](/classes/2.3/Matrix) |   
### static  UnprojectFromTransform(source, viewportWidth, viewportHeight, world, transform) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/2.3/Vector3) |   The vector to project
 | viewportWidth | number |   The viewport width
 | viewportHeight | number |   The viewport height
 | world | [Matrix](/classes/2.3/Matrix) |   The matrix representing the world matrix
### static  Unproject(source, viewportWidth, viewportHeight, world, view, projection) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/2.3/Vector3) |   The vector to project
 | viewportWidth | number |   The viewport width
 | viewportHeight | number |   The viewport height
 | world | [Matrix](/classes/2.3/Matrix) |   The matrix representing the world matrix
 | view | [Matrix](/classes/2.3/Matrix) |   The matrix representing the view matrix
### static  Minimize(left, right) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/2.3/Vector3) |   The vector to maximize
 | right | [Vector3](/classes/2.3/Vector3) |   the vetor used to maximize
### static  Maximize(left, right) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/2.3/Vector3) |   The vector to maximize
 | right | [Vector3](/classes/2.3/Vector3) |   the vetor used to maximize
### static  Distance(value1, value2) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/2.3/Vector3) |   first vector
 | value2 | [Vector3](/classes/2.3/Vector3) |   second vector
### static  DistanceSquared(value1, value2) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/2.3/Vector3) |   first vector
 | value2 | [Vector3](/classes/2.3/Vector3) |   second vector
### static  Center(value1, value2) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/2.3/Vector3) |   first vector
 | value2 | [Vector3](/classes/2.3/Vector3) |   second vector
### static  RotationFromAxis(axis1, axis2, axis3) &rarr; [Vector3](/classes/2.3/Vector3)

Given three orthogonal normalized left-handed oriented [Vector3](/classes/2.3/Vector3) axis in space (target system),

RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply

to something in order to rotate it from its local system to the given target system.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis1 | [Vector3](/classes/2.3/Vector3) |   
 | axis2 | [Vector3](/classes/2.3/Vector3) |   
 | axis3 | [Vector3](/classes/2.3/Vector3) |   
### static  RotationFromAxisToRef(axis1, axis2, axis3, ref) &rarr; void

The same than RotationFromAxis but updates the passed ref [Vector3](/classes/2.3/Vector3) parameter.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis1 | [Vector3](/classes/2.3/Vector3) |   
 | axis2 | [Vector3](/classes/2.3/Vector3) |   
 | axis3 | [Vector3](/classes/2.3/Vector3) |   
