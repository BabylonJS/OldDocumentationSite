---
ID_PAGE: 25242
PG_TITLE: Matrix
PG_VERSION: 2.1
---
## Description

class [Matrix](/classes/3.0/Matrix)

Creates a new 4 by 4 matrix

## Constructor

## new [Matrix](/classes/3.0/Matrix)()


## Members

### updateFlag : number



### m : Float32Array

The matrix, which is an array

## Methods

### isIdentity() &rarr; boolean

Boolean : True is the matrix is the identity matrix
### determinant() &rarr; number

Returns the matrix determinant (float).
### toArray() &rarr; Float32Array

Returns the matrix underlying array.
### asArray() &rarr; Float32Array

Returns the matrix underlying array.
### invert() &rarr; [Matrix](/classes/3.0/Matrix)

Inverts in place the [Matrix](/classes/3.0/Matrix).

Returns the [Matrix](/classes/3.0/Matrix) inverted.
### reset() &rarr; [Matrix](/classes/3.0/Matrix)

Sets all the matrix elements to zero.

Returns the [Matrix](/classes/3.0/Matrix).
### add(other) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as the addition result of the current [Matrix](/classes/3.0/Matrix) and the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.0/Matrix) |      

### addToRef(other, result) &rarr; [Matrix](/classes/3.0/Matrix)

Sets the passed matrix "result" with the ddition result of the current [Matrix](/classes/3.0/Matrix) and the passed one.

Returns the [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.0/Matrix) |      
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
### addToSelf(other) &rarr; [Matrix](/classes/3.0/Matrix)

Adds in place the passed matrix to the current [Matrix](/classes/3.0/Matrix).

Returns the updated [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.0/Matrix) |      

### invertToRef(other) &rarr; [Matrix](/classes/3.0/Matrix)

Sets the passed matrix with the current inverted [Matrix](/classes/3.0/Matrix).

Returns the unmodified current [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.0/Matrix) |      

### setTranslationFromFloats(x, y, z) &rarr; [Matrix](/classes/3.0/Matrix)

Inserts the translation vector (using 3 x floats) in the current [Matrix](/classes/3.0/Matrix).

Returns the updated [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The X translation value
 | y | number |      The Y translation value
 | z | number |      The Z translation value
### setTranslation(vector3) &rarr; [Matrix](/classes/3.0/Matrix)

Inserts the translation vector in the current [Matrix](/classes/3.0/Matrix).

Returns the updated [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/3.0/Vector3) |      The translation to apply

### getTranslation() &rarr; [Vector3](/classes/3.0/Vector3)

Returns a new [Vector3](/classes/3.0/Vector3) as the extracted translation from the [Matrix](/classes/3.0/Matrix).
### getTranslationToRef(result) &rarr; [Matrix](/classes/3.0/Matrix)

Fill a [Vector3](/classes/3.0/Vector3) with the extracted translation from the [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/3.0/Vector3) |      the target matrix

### removeRotationAndScaling() &rarr; [Matrix](/classes/3.0/Matrix)

Remove rotation and scaling part from the [Matrix](/classes/3.0/Matrix).

Returns the updated [Matrix](/classes/3.0/Matrix).
### multiply(other) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) set with the multiplication result of the current [Matrix](/classes/3.0/Matrix) and the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.0/Matrix) |      

### copyFrom(other) &rarr; [Matrix](/classes/3.0/Matrix)

Updates the current [Matrix](/classes/3.0/Matrix) from the passed one values.

Returns the updated [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.0/Matrix) |      

### copyToArray(array, offset) &rarr; [Matrix](/classes/3.0/Matrix)

Populates the passed array from the starting index with the [Matrix](/classes/3.0/Matrix) values.

Returns the [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array |      The array to copy
optional | offset | number |      The first index to copy from
### multiplyToRef(other, result) &rarr; [Matrix](/classes/3.0/Matrix)

Sets the passed matrix "result" with the multiplication result of the current [Matrix](/classes/3.0/Matrix) and the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.0/Matrix) |      
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
### multiplyToArray(other, result, offset) &rarr; [Matrix](/classes/3.0/Matrix)

Sets the Float32Array "result" from the passed index "offset" with the multiplication result of the current [Matrix](/classes/3.0/Matrix) and the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.0/Matrix) |      
 | result | Float32Array |      the target matrix
 | offset | number |      The first index to copy from
### equals(value) &rarr; boolean

Boolean : True is the current [Matrix](/classes/3.0/Matrix) and the passed one values are strictly equal.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Matrix](/classes/3.0/Matrix) |      The matrix to test against

### clone() &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) from the current [Matrix](/classes/3.0/Matrix).
### getClassName() &rarr; string

Returns the string "[Matrix](/classes/3.0/Matrix)"
### getHashCode() &rarr; number

Returns the [Matrix](/classes/3.0/Matrix) hash code.
### decompose(scale, rotation, translation) &rarr; boolean

Decomposes the current [Matrix](/classes/3.0/Matrix) into :

- a scale vector3 passed as a reference to update,

- a rotation quaternion passed as a reference to update,

- a translation vector3 passed as a reference to update.

Returns the boolean `true`.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | [Vector3](/classes/3.0/Vector3) |      
 | rotation | [Quaternion](/classes/3.0/Quaternion) |      
 | translation | [Vector3](/classes/3.0/Vector3) |      
### getRotationMatrix() &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as the extracted rotation matrix from the current one.
### getRotationMatrixToRef(result) &rarr; [Matrix](/classes/3.0/Matrix)

Extracts the rotation matrix from the current one and sets it as the passed "result".

Returns the current [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix

### static FromArray(array, offset) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) set from the starting index of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; |      The array to copy
optional | offset | number |      The first index to copy from
### static FromArrayToRef(array, offset, result) &rarr; void

Sets the passed "result" matrix from the starting index of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; |      The array to copy
 | offset | number |      The first index to copy from
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
### static FromFloat32ArrayToRefScaled(array, offset, scale, result) &rarr; void

Sets the passed "result" matrix from the starting index of the passed Float32Array by multiplying each element by the float "scale".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array |      The array to copy
 | offset | number |      The first index to copy from
 | scale | number |      
### static FromValuesToRef(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44, result) &rarr; void

Sets the passed matrix "result" with the 16 passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | initialM11 | number |      initial MM11 1,1 value
 | initialM12 | number |      initial MM12 1,2 value
 | initialM13 | number |      initial MM13 1,3 value
 | initialM14 | number |      initial MM14 1,4 value
 | initialM21 | number |      initial MM21 [2.1](/classes/2.1) value
 | initialM22 | number |      initial MM22 2,2 value
 | initialM23 | number |      initial MM23 2,3 value
 | initialM24 | number |      initial MM24 2,4 value
 | initialM31 | number |      initial MM31 3,1 value
 | initialM32 | number |      initial MM32 3,2 value
 | initialM33 | number |      initial MM33 3,3 value
 | initialM34 | number |      initial MM34 3,4 value
 | initialM41 | number |      initial MM41 4,1 value
 | initialM42 | number |      initial MM42 4,2 value
 | initialM43 | number |      initial MM43 4,3 value
 | initialM44 | number |      initial MM44 4,4 value
### getRow(index) &rarr; [Vector4](/classes/3.0/Vector4)

Returns the index-th row of the current matrix as a new [Vector4](/classes/3.0/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number |   

### setRow(index, row) &rarr; [Matrix](/classes/3.0/Matrix)

Sets the index-th row of the current matrix with the passed [Vector4](/classes/3.0/Vector4) values.

Returns the updated [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number |   
 | row | [Vector4](/classes/3.0/Vector4) |   
### setRowFromFloats(index, x, y, z, w) &rarr; [Matrix](/classes/3.0/Matrix)

Sets the index-th row of the current matrix with the passed 4 x float values.

Returns the updated [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number |   
 | x | number |      The X translation value
 | y | number |      The Y translation value
 | z | number |      The Z translation value
### static FromValues(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) set from the 16 passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | initialM11 | number |      initial MM11 1,1 value
 | initialM12 | number |      initial MM12 1,2 value
 | initialM13 | number |      initial MM13 1,3 value
 | initialM14 | number |      initial MM14 1,4 value
 | initialM21 | number |      initial MM21 [2.1](/classes/2.1) value
 | initialM22 | number |      initial MM22 2,2 value
 | initialM23 | number |      initial MM23 2,3 value
 | initialM24 | number |      initial MM24 2,4 value
 | initialM31 | number |      initial MM31 3,1 value
 | initialM32 | number |      initial MM32 3,2 value
 | initialM33 | number |      initial MM33 3,3 value
 | initialM34 | number |      initial MM34 3,4 value
 | initialM41 | number |      initial MM41 4,1 value
 | initialM42 | number |      initial MM42 4,2 value
 | initialM43 | number |      initial MM43 4,3 value
### static Compose(scale, rotation, translation) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) composed by the passed scale (vector3), rotation (quaternion) and translation (vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | [Vector3](/classes/3.0/Vector3) |      
 | rotation | [Quaternion](/classes/3.0/Quaternion) |      
 | translation | [Vector3](/classes/3.0/Vector3) |      
### static ComposeToRef(scale, rotation, translation, result) &rarr; void

Update a [Matrix](/classes/3.0/Matrix) with values composed by the passed scale (vector3), rotation (quaternion) and translation (vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | [Vector3](/classes/3.0/Vector3) |      
 | rotation | [Quaternion](/classes/3.0/Quaternion) |      
 | translation | [Vector3](/classes/3.0/Vector3) |      
### static Identity() &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new indentity [Matrix](/classes/3.0/Matrix).
### static IdentityToRef(result) &rarr; void

Sets the passed "result" as an identity matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix

### static Zero() &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new zero [Matrix](/classes/3.0/Matrix).
### static RotationX(angle) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new rotation matrix for "angle" radians around the X axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |      angle of the rotation

### static Invert(source) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as the passed inverted one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Matrix](/classes/3.0/Matrix) |      

### static RotationXToRef(angle, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix for "angle" radians around the X axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |      angle of the rotation
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
### static RotationY(angle) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new rotation matrix for "angle" radians around the Y axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |      angle of the rotation

### static RotationYToRef(angle, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix for "angle" radians around the Y axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |      angle of the rotation
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
### static RotationZ(angle) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new rotation matrix for "angle" radians around the Z axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |      angle of the rotation

### static RotationZToRef(angle, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix for "angle" radians around the Z axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |      angle of the rotation
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
### static RotationAxis(axis, angle) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new rotation matrix for "angle" radians around the passed axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.0/Vector3) |      [Vector3](/classes/3.0/Vector3) axis of the rotation
 | angle | number |      angle of the rotation
### static RotationAxisToRef(axis, angle, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix for "angle" radians around the passed axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.0/Vector3) |      [Vector3](/classes/3.0/Vector3) axis of the rotation
 | angle | number |      angle of the rotation
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
### static RotationYawPitchRoll(yaw, pitch, roll) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as a rotation matrix from the Euler angles (y, x, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number |      The yaw rotation value
 | pitch | number |      The pitch rotation value
 | roll | number |      The roll rotation value
### static RotationYawPitchRollToRef(yaw, pitch, roll, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix from the Euler angles (y, x, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number |      The yaw rotation value
 | pitch | number |      The pitch rotation value
 | roll | number |      The roll rotation value
### static Scaling(x, y, z) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as a scaling matrix from the passed floats (x, y, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The X translation value
 | y | number |      The Y translation value
 | z | number |      The Z translation value
### static ScalingToRef(x, y, z, result) &rarr; void

Sets the passed matrix "result" as a scaling matrix from the passed floats (x, y, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The X translation value
 | y | number |      The Y translation value
 | z | number |      The Z translation value
### static Translation(x, y, z) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as a translation matrix from the passed floats (x, y, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The X translation value
 | y | number |      The Y translation value
 | z | number |      The Z translation value
### static TranslationToRef(x, y, z, result) &rarr; void

Sets the passed matrix "result" as a translation matrix from the passed floats (x, y, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The X translation value
 | y | number |      The Y translation value
 | z | number |      The Z translation value
### static Lerp(startValue, endValue, gradient) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) whose values are the interpolated values for "gradien" (float) between the ones of the matrices "startValue" and "endValue".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Matrix](/classes/3.0/Matrix) |    
 | endValue | [Matrix](/classes/3.0/Matrix) |    
 | gradient | number |    
### static DecomposeLerp(startValue, endValue, gradient) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) whose values are computed by :

- decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices,

- interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end,

- recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Matrix](/classes/3.0/Matrix) |    
 | endValue | [Matrix](/classes/3.0/Matrix) |    
 | gradient | number |    
### static LookAtLH(eye, target, up) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new rotation [Matrix](/classes/3.0/Matrix) used to rotate a mesh so as it looks at the target [Vector3](/classes/3.0/Vector3), from the eye [Vector3](/classes/3.0/Vector3), the UP vector3 being orientated like "up".

This methods works for a Left-Handed system.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the camera point
 | target | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the camera look-at target
 | up | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the up direction
### static LookAtLHToRef(eye, target, up, result) &rarr; void

Sets the passed "result" [Matrix](/classes/3.0/Matrix) as a rotation matrix used to rotate a mesh so as it looks at the target [Vector3](/classes/3.0/Vector3), from the eye [Vector3](/classes/3.0/Vector3), the UP vector3 being orientated like "up".

This methods works for a Left-Handed system.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the camera point
 | target | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the camera look-at target
 | up | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the up direction
### static LookAtRH(eye, target, up) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new rotation [Matrix](/classes/3.0/Matrix) used to rotate a mesh so as it looks at the target [Vector3](/classes/3.0/Vector3), from the eye [Vector3](/classes/3.0/Vector3), the UP vector3 being orientated like "up".

This methods works for a Right-Handed system.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the camera point
 | target | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the camera look-at target
 | up | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the up direction
### static LookAtRHToRef(eye, target, up, result) &rarr; void

Sets the passed "result" [Matrix](/classes/3.0/Matrix) as a rotation matrix used to rotate a mesh so as it looks at the target [Vector3](/classes/3.0/Vector3), from the eye [Vector3](/classes/3.0/Vector3), the UP vector3 being orientated like "up".

This methods works for a Left-Handed system.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the camera point
 | target | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the camera look-at target
 | up | [Vector3](/classes/3.0/Vector3) |      The [Vector3](/classes/3.0/Vector3) that defines the up direction
### static OrthoLH(width, height, znear, zfar) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as a left-handed orthographic projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |      The width of the view volume at the near view plane
 | height | number |      The height of the view volume at the near view plane
 | znear | number |      Z-value of the near view plane.
### static OrthoLHToRef(width, height, znear, zfar, result) &rarr; void

Sets the passed matrix "result" as a left-handed orthographic projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |      The width of the view volume at the near view plane
 | height | number |      The height of the view volume at the near view plane
 | znear | number |      Z-value of the near view plane.
 | zfar | number |      Z-value of the far view plane.
### static OrthoOffCenterLH(left, right, bottom, top, znear, zfar) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as a left-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | number |      The minimum x value of the view volume
 | right | number |      The maximum x value of the view volume
 | bottom | number |      The minimum y value of the view volume
 | top | number |      The maximum y value of the view volume
 | znear | number |      Z-value of the near view plane.
### static OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, result) &rarr; void

Sets the passed matrix "result" as a left-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | number |      The minimum x value of the view volume
 | right | number |      The maximum x value of the view volume
 | bottom | number |      The minimum y value of the view volume
 | top | number |      The maximum y value of the view volume
 | znear | number |      Z-value of the near view plane.
 | zfar | number |      Z-value of the far view plane.
### static OrthoOffCenterRH(left, right, bottom, top, znear, zfar) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as a right-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | number |      The minimum x value of the view volume
 | right | number |      The maximum x value of the view volume
 | bottom | number |      The minimum y value of the view volume
 | top | number |      The maximum y value of the view volume
 | znear | number |      Z-value of the near view plane.
### static OrthoOffCenterRHToRef(left, right, bottom, top, znear, zfar, result) &rarr; void

Sets the passed matrix "result" as a right-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | number |      The minimum x value of the view volume
 | right | any |      The maximum x value of the view volume
 | bottom | number |      The minimum y value of the view volume
 | top | number |      The maximum y value of the view volume
 | znear | number |      Z-value of the near view plane.
 | zfar | number |      Z-value of the far view plane.
### static PerspectiveLH(width, height, znear, zfar) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as a left-handed perspective projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |      The width of the view volume at the near view plane
 | height | number |      The height of the view volume at the near view plane
 | znear | number |      Z-value of the near view plane.
### static PerspectiveFovLH(fov, aspect, znear, zfar) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as a left-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number |      Field of view in the y direction, in radians.
 | aspect | number |      Aspect ratio, defined as the view space width divided by height.
 | znear | number |      Z-value of the near view plane.
### static PerspectiveFovLHToRef(fov, aspect, znear, zfar, result, isVerticalFovFixed) &rarr; void

Sets the passed matrix "result" as a left-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number |      Field of view in the y direction, in radians.
 | aspect | number |      Aspect ratio, defined as the view space width divided by height.
 | znear | number |      Z-value of the near view plane.
 | zfar | number |      Z-value of the far view plane.
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
### static PerspectiveFovRH(fov, aspect, znear, zfar) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as a right-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number |      Field of view in the y direction, in radians.
 | aspect | number |      Aspect ratio, defined as the view space width divided by height.
 | znear | number |      Z-value of the near view plane.
### static PerspectiveFovRHToRef(fov, aspect, znear, zfar, result, isVerticalFovFixed) &rarr; void

Sets the passed matrix "result" as a right-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number |      Field of view in the y direction, in radians.
 | aspect | number |      Aspect ratio, defined as the view space width divided by height.
 | znear | number |      Z-value of the near view plane.
 | zfar | number |      Z-value of the far view plane.
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
### static PerspectiveFovWebVRToRef(fov, znear, zfar, result, rightHanded) &rarr; void

Sets the passed matrix "result" as a left-handed perspective projection matrix  for WebVR computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | any |      Field of view in the y direction, in radians.
 | znear | number |      Z-value of the near view plane.
 | zfar | number |      Z-value of the far view plane.
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
### static GetFinalMatrix(viewport, world, view, projection, zmin, zmax) &rarr; [Matrix](/classes/3.0/Matrix)

Returns the final transformation matrix : world * view * projection * viewport

#### Parameters
 | Name | Type | Description
---|---|---|---
 | viewport | [Viewport](/classes/3.0/Viewport) |      The [Viewport](/classes/3.0/Viewport) structure representing the viewport
 | world | [Matrix](/classes/3.0/Matrix) |      The [Matrix](/classes/3.0/Matrix) structure representing the world
 | view | [Matrix](/classes/3.0/Matrix) |      The [Matrix](/classes/3.0/Matrix) structure representing the view
 | projection | [Matrix](/classes/3.0/Matrix) |      The [Matrix](/classes/3.0/Matrix) structure representing the projection
 | zmin | number |      The minumum z value of the viewport
### static GetAsMatrix2x2(matrix) &rarr; Float32Array

Returns a new Float32Array array with 4 elements : the 2x2 matrix extracted from the passed [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.0/Matrix) |      The matrix to transpose

### static GetAsMatrix3x3(matrix) &rarr; Float32Array

Returns a new Float32Array array with 9 elements : the 3x3 matrix extracted from the passed [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.0/Matrix) |      The matrix to transpose

### static Transpose(matrix) &rarr; [Matrix](/classes/3.0/Matrix)

Compute the transpose of the passed [Matrix](/classes/3.0/Matrix).

Returns a new [Matrix](/classes/3.0/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.0/Matrix) |      The matrix to transpose

### static Reflection(plane) &rarr; [Matrix](/classes/3.0/Matrix)

Returns a new [Matrix](/classes/3.0/Matrix) as the reflection  matrix across the passed plane.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | plane | [Plane](/classes/3.0/Plane) |      The given plane

### static ReflectionToRef(plane, result) &rarr; void

Sets the passed matrix "result" as the reflection matrix across the passed plane.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | plane | [Plane](/classes/3.0/Plane) |      The given plane
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
### static FromXYZAxesToRef(xaxis, yaxis, zaxis, result) &rarr; void

Sets the passed matrix "mat" as a rotation matrix composed from the 3 passed  left handed axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | xaxis | [Vector3](/classes/3.0/Vector3) |  
 | yaxis | [Vector3](/classes/3.0/Vector3) |  
 | zaxis | [Vector3](/classes/3.0/Vector3) |  
### static FromQuaternionToRef(quat, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix according to the passed quaternion.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | quat | [Quaternion](/classes/3.0/Quaternion) |  
 | result | [Matrix](/classes/3.0/Matrix) |      the target matrix
