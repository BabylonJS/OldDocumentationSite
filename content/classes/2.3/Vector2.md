---
ID_PAGE: 25238
PG_TITLE: Vector2
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Vector2](/classes/2.3/Vector2)



## Constructor

##  new [Vector2](/classes/2.3/Vector2)(x, y)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate of another vector
 | y | number |   The Y coordinate of another vector
## Members

### x : number



### y : number



## Methods

### toString() &rarr; string


### toArray(array, index) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   The given array
optional | index | number |   default : 0 The given index
### asArray() &rarr; number[]


### copyFrom(source) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector2](/classes/2.3/Vector2) |   The source vector

### copyFromFloats(x, y) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate of another vector
 | y | number |   The Y coordinate of another vector
### add(otherVector) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.3/Vector2) |   

### addVector3(otherVector) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.3/Vector3) |   

### subtract(otherVector) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.3/Vector2) |   

### subtractInPlace(otherVector) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.3/Vector2) |   

### multiplyInPlace(otherVector) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.3/Vector2) |   

### multiply(otherVector) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.3/Vector2) |   

### multiplyToRef(otherVector, result) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.3/Vector2) |   
 | result | [Vector2](/classes/2.3/Vector2) |   The existing vector
### multiplyByFloats(x, y) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate of another vector
 | y | number |   The Y coordinate of another vector
### divide(otherVector) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.3/Vector2) |   

### divideToRef(otherVector, result) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.3/Vector2) |   
 | result | [Vector2](/classes/2.3/Vector2) |   The existing vector
### negate() &rarr; [Vector2](/classes/2.3/Vector2)


### scaleInPlace(scale) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   The scaling factor

### scale(scale) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   The scaling factor

### equals(otherVector) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.3/Vector2) |   

### equalsWithEpsilon(otherVector, epsilon) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.3/Vector2) |   
optional | epsilon | number |  
### length() &rarr; number


### lengthSquared() &rarr; number


### normalize() &rarr; [Vector2](/classes/2.3/Vector2)


### clone() &rarr; [Vector2](/classes/2.3/Vector2)


### static  Zero() &rarr; [Vector2](/classes/2.3/Vector2)


### static  FromArray(array, offset) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   The given array
optional | offset | number |   The first index of the array to look at
### static  FromArrayToRef(array, offset, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   The given array
 | offset | number |   The first index of the array to look at
 | result | [Vector2](/classes/2.3/Vector2) |   The existing vector
### static  CatmullRom(value1, value2, value3, value4, amount) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.3/Vector2) |   first vector
 | value2 | [Vector2](/classes/2.3/Vector2) |   second vector
 | value3 | [Vector2](/classes/2.3/Vector2) |   The third position in the interpolation.
 | value4 | [Vector2](/classes/2.3/Vector2) |   The fourth position in the interpolation.
### static  Clamp(value, min, max) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Vector2](/classes/2.3/Vector2) |   The value to clamp
 | min | [Vector2](/classes/2.3/Vector2) |   The minimum value
 | max | [Vector2](/classes/2.3/Vector2) |   The maximum value
### static  Hermite(value1, tangent1, value2, tangent2, amount) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.3/Vector2) |   first vector
 | tangent1 | [Vector2](/classes/2.3/Vector2) |   First source tangent vector.
 | value2 | [Vector2](/classes/2.3/Vector2) |   second vector
 | tangent2 | [Vector2](/classes/2.3/Vector2) |   Second source tangent vector.
### static  Lerp(start, end, amount) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Vector2](/classes/2.3/Vector2) |   interpolation start vector
 | end | [Vector2](/classes/2.3/Vector2) |   interpolation end vector
 | amount | number |   Weighting factor
### static  Dot(left, right) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/2.3/Vector2) |   The vector to maximize
 | right | [Vector2](/classes/2.3/Vector2) |   the vector used to maximize
### static  Normalize(vector) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](/classes/2.3/Vector2) |   The vector to transform

### static  Minimize(left, right) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/2.3/Vector2) |   The vector to maximize
 | right | [Vector2](/classes/2.3/Vector2) |   the vector used to maximize
### static  Maximize(left, right) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/2.3/Vector2) |   The vector to maximize
 | right | [Vector2](/classes/2.3/Vector2) |   the vector used to maximize
### static  Transform(vector, transformation) &rarr; [Vector2](/classes/2.3/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](/classes/2.3/Vector2) |   The vector to transform
 | transformation | [Matrix](/classes/2.3/Matrix) |   The transformation matrix
### static  Distance(value1, value2) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.3/Vector2) |   first vector
 | value2 | [Vector2](/classes/2.3/Vector2) |   second vector
### static  DistanceSquared(value1, value2) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.3/Vector2) |   first vector
 | value2 | [Vector2](/classes/2.3/Vector2) |   second vector
