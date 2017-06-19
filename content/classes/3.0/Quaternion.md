---
ID_PAGE: 25241
PG_TITLE: Quaternion
PG_VERSION: 2.1
---
## Description

class [Quaternion](/classes/3.0/Quaternion)



## Constructor

## new [Quaternion](/classes/3.0/Quaternion)(x, y, z, w)

Creates a new [Quaternion](/classes/3.0/Quaternion) from the passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | x | number |      The X coordinate of another vector
optional | y | number |      The Y coordinate of another vector
optional | z | number |      The Z coordinate of another vector
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

Returns a string with the [Quaternion](/classes/3.0/Quaternion) coordinates.
### getClassName() &rarr; string

Returns the string "[Quaternion](/classes/3.0/Quaternion)".
### getHashCode() &rarr; number

Returns the [Quaternion](/classes/3.0/Quaternion) hash code.
### asArray() &rarr; number[]

Returns a new array populated with 4 elements : the [Quaternion](/classes/3.0/Quaternion) coordinates.
### equals(otherQuaternion) &rarr; boolean

Boolean : True if the current Quaterion and the passed one coordinates are strictly equal.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherQuaternion | [Quaternion](/classes/3.0/Quaternion) |      The quaternion to test against

### clone() &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) copied from the current one.
### copyFrom(other) &rarr; [Quaternion](/classes/3.0/Quaternion)

Updates the current [Quaternion](/classes/3.0/Quaternion) from the passed one coordinates.

Returns the updated Quaterion.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/3.0/Quaternion) |      Another quaternion

### copyFromFloats(x, y, z, w) &rarr; [Quaternion](/classes/3.0/Quaternion)

Updates the current [Quaternion](/classes/3.0/Quaternion) from the passed float coordinates.

Returns the updated Quaterion.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The X coordinate of another vector
 | y | number |      The Y coordinate of another vector
 | z | number |      The Z coordinate of another vector
### set(x, y, z, w) &rarr; [Quaternion](/classes/3.0/Quaternion)

Updates the current [Quaternion](/classes/3.0/Quaternion) from the passed float coordinates.

Returns the updated Quaterion.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The X coordinate of another vector
 | y | number |      The Y coordinate of another vector
 | z | number |      The Z coordinate of another vector
### add(other) &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) as the addition result of the passed one and the current [Quaternion](/classes/3.0/Quaternion).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/3.0/Quaternion) |      Another quaternion

### subtract(other) &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) as the subtraction result of the passed one from the current [Quaternion](/classes/3.0/Quaternion).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/3.0/Quaternion) |      Another quaternion

### scale(value) &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) set by multiplying the current Quaterion coordinates by the float "scale".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |      @param value

### multiply(q1) &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) set as the quaternion mulplication result of the current one with the passed one "q1".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | q1 | [Quaternion](/classes/3.0/Quaternion) |      Another quaternion

### multiplyToRef(q1, result) &rarr; [Quaternion](/classes/3.0/Quaternion)

Sets the passed "result" as the quaternion mulplication result of the current one with the passed one "q1".

Returns the current [Quaternion](/classes/3.0/Quaternion).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | q1 | [Quaternion](/classes/3.0/Quaternion) |      Another quaternion
 | result | [Quaternion](/classes/3.0/Quaternion) |      
### multiplyInPlace(q1) &rarr; [Quaternion](/classes/3.0/Quaternion)

Updates the current [Quaternion](/classes/3.0/Quaternion) with the quaternion mulplication result of itself with the passed one "q1".

Returns the updated [Quaternion](/classes/3.0/Quaternion).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | q1 | [Quaternion](/classes/3.0/Quaternion) |      Another quaternion

### conjugateToRef(ref) &rarr; [Quaternion](/classes/3.0/Quaternion)

Sets the passed "ref" with the conjugation of the current [Quaternion](/classes/3.0/Quaternion).

Returns the current [Quaternion](/classes/3.0/Quaternion).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ref | [Quaternion](/classes/3.0/Quaternion) |   

### conjugateInPlace() &rarr; [Quaternion](/classes/3.0/Quaternion)

Conjugates in place the current [Quaternion](/classes/3.0/Quaternion).

Returns the updated [Quaternion](/classes/3.0/Quaternion).
### conjugate() &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) as the conjugate of the current [Quaternion](/classes/3.0/Quaternion).
### length() &rarr; number

Returns the [Quaternion](/classes/3.0/Quaternion) length (float).
### normalize() &rarr; [Quaternion](/classes/3.0/Quaternion)

Normalize in place the current [Quaternion](/classes/3.0/Quaternion).

Returns the updated [Quaternion](/classes/3.0/Quaternion).
### toEulerAngles(order) &rarr; [Vector3](/classes/3.0/Vector3)

Returns a new [Vector3](/classes/3.0/Vector3) set with the Euler angles translated from the current [Quaternion](/classes/3.0/Quaternion).

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | order | string |    

### toEulerAnglesToRef(result, order) &rarr; [Quaternion](/classes/3.0/Quaternion)

Sets the passed vector3 "result" with the Euler angles translated from the current [Quaternion](/classes/3.0/Quaternion).

Returns the current [Quaternion](/classes/3.0/Quaternion).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/3.0/Vector3) |      
optional | order | string |    
### toRotationMatrix(result) &rarr; [Quaternion](/classes/3.0/Quaternion)

Updates the passed rotation matrix with the current [Quaternion](/classes/3.0/Quaternion) values.

Returns the current [Quaternion](/classes/3.0/Quaternion).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Matrix](/classes/3.0/Matrix) |      

### fromRotationMatrix(matrix) &rarr; [Quaternion](/classes/3.0/Quaternion)

Updates the current [Quaternion](/classes/3.0/Quaternion) from the passed rotation matrix values.

Returns the updated [Quaternion](/classes/3.0/Quaternion).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.0/Matrix) |      

### static FromRotationMatrix(matrix) &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) set from the passed rotation matrix values.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.0/Matrix) |      

### static FromRotationMatrixToRef(matrix, result) &rarr; void

Updates the passed quaternion "result" with the passed rotation matrix values.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.0/Matrix) |      
 | result | [Quaternion](/classes/3.0/Quaternion) |      
### static Zero() &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) set to (0.0, 0.0, 0.0).
### static Inverse(q) &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) as the inverted current [Quaternion](/classes/3.0/Quaternion).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | q | [Quaternion](/classes/3.0/Quaternion) |      The quaternion to inverse

### static Identity() &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns the identity [Quaternion](/classes/3.0/Quaternion).
### static IsIdentity(quaternion) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | quaternion | [Quaternion](/classes/3.0/Quaternion) | 

### static RotationAxis(axis, angle) &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) set from the passed axis ([Vector3](/classes/3.0/Vector3)) and angle in radians (float).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.0/Vector3) |      The rotation axis
 | angle | number |      Some angle
### static RotationAxisToRef(axis, angle, result) &rarr; [Quaternion](/classes/3.0/Quaternion)

Sets the passed quaternion "result" from the passed axis ([Vector3](/classes/3.0/Vector3)) and angle in radians (float).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.0/Vector3) |      The rotation axis
 | angle | number |      Some angle
 | result | [Quaternion](/classes/3.0/Quaternion) |      
### static FromArray(array, offset) &rarr; [Quaternion](/classes/3.0/Quaternion)

Retuns a new [Quaternion](/classes/3.0/Quaternion) set from the starting index of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; |      The given array
optional | offset | number |      The first index of the array to look at
### static RotationYawPitchRoll(yaw, pitch, roll) &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) set from the passed Euler float angles (y, x, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number |      The yaw rotation
 | pitch | number |      The pitch rotation
 | roll | number |      The roll rotation
### static RotationYawPitchRollToRef(yaw, pitch, roll, result) &rarr; void

Sets the passed quaternion "result" from the passed float Euler angles (y, x, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number |      The yaw rotation
 | pitch | number |      The pitch rotation
 | roll | number |      The roll rotation
### static RotationAlphaBetaGamma(alpha, beta, gamma) &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) from the passed float Euler angles expressed in z-x-z orientation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | alpha | number |      
 | beta | number |      
 | gamma | number |      
### static RotationAlphaBetaGammaToRef(alpha, beta, gamma, result) &rarr; void

Sets the passed quaternion "result" from the passed float Euler angles expressed in z-x-z orientation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | alpha | number |      
 | beta | number |      
 | gamma | number |      
### static RotationQuaternionFromAxis(axis1, axis2, axis3, ref) &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) as the quaternion rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system.

cf to [Vector3](/classes/3.0/Vector3).RotationFromAxis() documentation.

Note : axis1, axis2 and axis3 are normalized during this operation.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis1 | [Vector3](/classes/3.0/Vector3) | 
 | axis2 | [Vector3](/classes/3.0/Vector3) | 
 | axis3 | [Vector3](/classes/3.0/Vector3) | 
### static RotationQuaternionFromAxisToRef(axis1, axis2, axis3, ref) &rarr; void

Sets the passed quaternion "ref" with the quaternion rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system.

cf to [Vector3](/classes/3.0/Vector3).RotationFromAxis() documentation.

Note : axis1, axis2 and axis3 are normalized during this operation.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis1 | [Vector3](/classes/3.0/Vector3) | 
 | axis2 | [Vector3](/classes/3.0/Vector3) | 
 | axis3 | [Vector3](/classes/3.0/Vector3) | 
### static Slerp(left, right, amount) &rarr; [Quaternion](/classes/3.0/Quaternion)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Quaternion](/classes/3.0/Quaternion) |      interpolation start quaternion
 | right | [Quaternion](/classes/3.0/Quaternion) |      interpolation end quaternion
 | amount | number |      Weighting factor
### static SlerpToRef(left, right, amount, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Quaternion](/classes/3.0/Quaternion) |      interpolation start quaternion
 | right | [Quaternion](/classes/3.0/Quaternion) |      interpolation end quaternion
 | amount | number |      Weighting factor
### static Hermite(value1, tangent1, value2, tangent2, amount) &rarr; [Quaternion](/classes/3.0/Quaternion)

Returns a new [Quaternion](/classes/3.0/Quaternion) located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Quaternion](/classes/3.0/Quaternion) | 
 | tangent1 | [Quaternion](/classes/3.0/Quaternion) | 
 | value2 | [Quaternion](/classes/3.0/Quaternion) | 
 | tangent2 | [Quaternion](/classes/3.0/Quaternion) | 
