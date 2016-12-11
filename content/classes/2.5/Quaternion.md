---
ID_PAGE: 25241
PG_TITLE: Quaternion
PG_VERSION: 2.1
---
## Description

class [Quaternion](/classes/2.5/Quaternion)



## Constructor

## new [Quaternion](/classes/2.5/Quaternion)(x, y, z, w)

Creates a new [Quaternion](/classes/2.5/Quaternion)

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | x | number |     The X coordinate of another vector
optional | y | number |     The Y coordinate of another vector
optional | z | number |     The Z coordinate of another vector
## Members

### x : number

The first coordinate

### y : number

The second coordinate

### z : number

The third coordinate

### w : number

The fourth coordinate

## Methods

### toString() &rarr; string

Returns a string representation of the quaternion
### getClassName() &rarr; string


### getHashCode() &rarr; number


### asArray() &rarr; number[]

Returns an array representation of the quaternion
### equals(otherQuaternion) &rarr; boolean

Tests if two quaternion are identical

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherQuaternion | [Quaternion](/classes/2.5/Quaternion) |     The quaternion to test against

### clone() &rarr; [Quaternion](/classes/2.5/Quaternion)

Returns a clone of the quaternion
### copyFrom(other) &rarr; [Quaternion](/classes/2.5/Quaternion)

Copies another quaternion

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/2.5/Quaternion) |     Another quaternion

### copyFromFloats(x, y, z, w) &rarr; [Quaternion](/classes/2.5/Quaternion)

Copies another queternion from a set of floats

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     The X coordinate of another vector
 | y | number |     The Y coordinate of another vector
 | z | number |     The Z coordinate of another vector
### add(other) &rarr; [Quaternion](/classes/2.5/Quaternion)

Adds in another quaternion

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/2.5/Quaternion) |     Another quaternion

### subtract(other) &rarr; [Quaternion](/classes/2.5/Quaternion)

Substracts another quaternion

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/2.5/Quaternion) |     Another quaternion

### scale(value) &rarr; [Quaternion](/classes/2.5/Quaternion)

Scales a quaternion

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |     @param value

### multiply(q1) &rarr; [Quaternion](/classes/2.5/Quaternion)

Multiplies by another quaternion

#### Parameters
 | Name | Type | Description
---|---|---|---
 | q1 | [Quaternion](/classes/2.5/Quaternion) |     Another quaternion

### multiplyToRef(q1, result) &rarr; [Quaternion](/classes/2.5/Quaternion)

Multiplies another quaternion into a third target quaternion

#### Parameters
 | Name | Type | Description
---|---|---|---
 | q1 | [Quaternion](/classes/2.5/Quaternion) |     Another quaternion
 | result | [Quaternion](/classes/2.5/Quaternion) |     
### multiplyInPlace(q1) &rarr; [Quaternion](/classes/2.5/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | q1 | [Quaternion](/classes/2.5/Quaternion) |     Another quaternion

### conjugateToRef(ref) &rarr; [Quaternion](/classes/2.5/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ref | [Quaternion](/classes/2.5/Quaternion) |  

### conjugateInPlace() &rarr; [Quaternion](/classes/2.5/Quaternion)


### conjugate() &rarr; [Quaternion](/classes/2.5/Quaternion)


### length() &rarr; number

The length of the quaternion
### normalize() &rarr; [Quaternion](/classes/2.5/Quaternion)

Normalizes the quaternion
### toEulerAngles(order) &rarr; [Vector3](/classes/2.5/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | order | string |   

### toEulerAnglesToRef(result, order) &rarr; [Quaternion](/classes/2.5/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/2.5/Vector3) |     
optional | order | string |   
### toRotationMatrix(result) &rarr; [Quaternion](/classes/2.5/Quaternion)

Converts the quaternion into a target rotation [Matrix](/classes/2.5/Matrix) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Matrix](/classes/2.5/Matrix) |     

### fromRotationMatrix(matrix) &rarr; [Quaternion](/classes/2.5/Quaternion)

Imports a source matrix into the current quaternion

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.5/Matrix) |     

### static FromRotationMatrix(matrix) &rarr; [Quaternion](/classes/2.5/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.5/Matrix) |     

### static FromRotationMatrixToRef(matrix, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.5/Matrix) |     
 | result | [Quaternion](/classes/2.5/Quaternion) |     
### static Inverse(q) &rarr; [Quaternion](/classes/2.5/Quaternion)

Returns the passed quaternion's inverse

#### Parameters
 | Name | Type | Description
---|---|---|---
 | q | [Quaternion](/classes/2.5/Quaternion) |     The quaternion to inverse

### static Identity() &rarr; [Quaternion](/classes/2.5/Quaternion)


### static RotationAxis(axis, angle) &rarr; [Quaternion](/classes/2.5/Quaternion)

Creates a quaternion using an axis and an angle

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.5/Vector3) |     The rotation axis
 | angle | number |     Some angle
### static RotationAxisToRef(axis, angle, result) &rarr; [Quaternion](/classes/2.5/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.5/Vector3) |     The rotation axis
 | angle | number |     Some angle
 | result | [Quaternion](/classes/2.5/Quaternion) |     
### static FromArray(array, offset) &rarr; [Quaternion](/classes/2.5/Quaternion)

Creates a quaterion from agiven array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |     The given array
optional | offset | number |     The first index of the array to look at
### static RotationYawPitchRoll(yaw, pitch, roll) &rarr; [Quaternion](/classes/2.5/Quaternion)

Creates a quaternion from yaw, pitch and roll values

#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number |     The yaw rotation
 | pitch | number |     The pitch rotation
 | roll | number |     The roll rotation
### static RotationYawPitchRollToRef(yaw, pitch, roll, result) &rarr; void

Creates a quaternion from yaw, pitch and roll values and put it in the target quaternion

#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number |     The yaw rotation
 | pitch | number |     The pitch rotation
 | roll | number |     The roll rotation
### static RotationAlphaBetaGamma(alpha, beta, gamma) &rarr; [Quaternion](/classes/2.5/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | alpha | number |     
 | beta | number |     
 | gamma | number |     
### static RotationAlphaBetaGammaToRef(alpha, beta, gamma, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | alpha | number |     
 | beta | number |     
 | gamma | number |     
### static Slerp(left, right, amount) &rarr; [Quaternion](/classes/2.5/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Quaternion](/classes/2.5/Quaternion) |     interpolation start quaternion
 | right | [Quaternion](/classes/2.5/Quaternion) |     interpolation end quaternion
 | amount | number |     Weighting factor
### static SlerpToRef(left, right, amount, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Quaternion](/classes/2.5/Quaternion) |     interpolation start quaternion
 | right | [Quaternion](/classes/2.5/Quaternion) |     interpolation end quaternion
 | amount | number |     Weighting factor
