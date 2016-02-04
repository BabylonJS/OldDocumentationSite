---
ID_PAGE: 25241
PG_TITLE: Quaternion
PG_VERSION: 2.1
---
## Description

class [Quaternion](/classes/2.3/Quaternion)



## Constructor

##  new [Quaternion](/classes/2.3/Quaternion)(x, y, z, w)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | x | number |   The X coordinate of another vector
optional | y | number |   The Y coordinate of another vector
optional | z | number |   The Z coordinate of another vector
## Members

### x : number



### y : number



### z : number



### w : number



## Methods

### toString() &rarr; string


### asArray() &rarr; number[]


### equals(otherQuaternion) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherQuaternion | [Quaternion](/classes/2.3/Quaternion) |   The quaternion to test against

### clone() &rarr; [Quaternion](/classes/2.3/Quaternion)


### copyFrom(other) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/2.3/Quaternion) |   Another quaternion

### copyFromFloats(x, y, z, w) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   The X coordinate of another vector
 | y | number |   The Y coordinate of another vector
 | z | number |   The Z coordinate of another vector
### add(other) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/2.3/Quaternion) |   Another quaternion

### subtract(other) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/2.3/Quaternion) |   Another quaternion

### scale(value) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |   @param value

### multiply(q1) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | q1 | [Quaternion](/classes/2.3/Quaternion) |   Another quaternion

### multiplyToRef(q1, result) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | q1 | [Quaternion](/classes/2.3/Quaternion) |   Another quaternion
 | result | [Quaternion](/classes/2.3/Quaternion) |   
### multiplyInPlace(q1) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | q1 | [Quaternion](/classes/2.3/Quaternion) |   Another quaternion

### length() &rarr; number


### normalize() &rarr; [Quaternion](/classes/2.3/Quaternion)


### toEulerAngles(order) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | order | string | 

### toEulerAnglesToRef(result, order) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/2.3/Vector3) |   
optional | order | string | 
### toRotationMatrix(result) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Matrix](/classes/2.3/Matrix) |   

### fromRotationMatrix(matrix) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.3/Matrix) |   

### static  FromRotationMatrix(matrix) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.3/Matrix) |   

### static  FromRotationMatrixToRef(matrix, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.3/Matrix) |   
 | result | [Quaternion](/classes/2.3/Quaternion) |   
### static  Inverse(q) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | q | [Quaternion](/classes/2.3/Quaternion) |   The quaternion to inverse

### static  Identity() &rarr; [Quaternion](/classes/2.3/Quaternion)


### static  RotationAxis(axis, angle) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.3/Vector3) |   The rotation axis
 | angle | number |   Some angle
### static  FromArray(array, offset) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   The given array
optional | offset | number |   The first index of the array to look at
### static  RotationYawPitchRoll(yaw, pitch, roll) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number |   The yaw rotation
 | pitch | number |   The pitch rotation
 | roll | number |   The roll rotation
### static  RotationYawPitchRollToRef(yaw, pitch, roll, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number |   The yaw rotation
 | pitch | number |   The pitch rotation
 | roll | number |   The roll rotation
### static  RotationAlphaBetaGamma(alpha, beta, gamma) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | alpha | number |   
 | beta | number |   
 | gamma | number |   
### static  RotationAlphaBetaGammaToRef(alpha, beta, gamma, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | alpha | number |   
 | beta | number |   
 | gamma | number |   
### static  Slerp(left, right, amount) &rarr; [Quaternion](/classes/2.3/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Quaternion](/classes/2.3/Quaternion) |   interpolation start quaternion
 | right | [Quaternion](/classes/2.3/Quaternion) |   interpolation end quaternion
 | amount | number |   Weighting factor
