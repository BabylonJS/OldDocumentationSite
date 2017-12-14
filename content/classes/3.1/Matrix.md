---
ID_PAGE: 25242
PG_TITLE: Matrix
PG_VERSION: 2.1
---
## Description

class [Matrix](/classes/3.1/Matrix)



## Constructor

## new [Matrix](/classes/3.1/Matrix)()


## Members

### updateFlag : number


### m : Float32Array


### static IdentityReadOnly : [Matrix](/classes/3.1/Matrix)

Static identity matrix to be used as matrix

Must not be updated.
## Methods

### isIdentity(considerAsTextureMatrix) &rarr; boolean

Boolean : True is the matrix is the identity matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | considerAsTextureMatrix | boolean | 

### determinant() &rarr; number

Returns the matrix determinant (float).
### toArray() &rarr; Float32Array

Returns the matrix underlying array.
### asArray() &rarr; Float32Array

Returns the matrix underlying array.
### invert() &rarr; [Matrix](/classes/3.1/Matrix)

Inverts in place the [Matrix](/classes/3.1/Matrix).

Returns the [Matrix](/classes/3.1/Matrix) inverted.
### reset() &rarr; [Matrix](/classes/3.1/Matrix)

Sets all the matrix elements to zero.

Returns the [Matrix](/classes/3.1/Matrix).
### add(other) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as the addition result of the current [Matrix](/classes/3.1/Matrix) and the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.1/Matrix) | 

### addToRef(other, result) &rarr; [Matrix](/classes/3.1/Matrix)

Sets the passed matrix "result" with the ddition result of the current [Matrix](/classes/3.1/Matrix) and the passed one.

Returns the [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.1/Matrix) | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### addToSelf(other) &rarr; [Matrix](/classes/3.1/Matrix)

Adds in place the passed matrix to the current [Matrix](/classes/3.1/Matrix).

Returns the updated [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.1/Matrix) | 

### invertToRef(other) &rarr; [Matrix](/classes/3.1/Matrix)

Sets the passed matrix with the current inverted [Matrix](/classes/3.1/Matrix).

Returns the unmodified current [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.1/Matrix) | 

### setTranslationFromFloats(x, y, z) &rarr; [Matrix](/classes/3.1/Matrix)

Inserts the translation vector (using 3 x floats) in the current [Matrix](/classes/3.1/Matrix).

Returns the updated [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### setTranslation(vector3) &rarr; [Matrix](/classes/3.1/Matrix)

Inserts the translation vector in the current [Matrix](/classes/3.1/Matrix).

Returns the updated [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/3.1/Vector3) | 

### getTranslation() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) as the extracted translation from the [Matrix](/classes/3.1/Matrix).
### getTranslationToRef(result) &rarr; [Matrix](/classes/3.1/Matrix)

Fill a [Vector3](/classes/3.1/Vector3) with the extracted translation from the [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/3.1/Vector3) | 

### removeRotationAndScaling() &rarr; [Matrix](/classes/3.1/Matrix)

Remove rotation and scaling part from the [Matrix](/classes/3.1/Matrix).

Returns the updated [Matrix](/classes/3.1/Matrix).
### multiply(other) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) set with the multiplication result of the current [Matrix](/classes/3.1/Matrix) and the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.1/Matrix) | 

### copyFrom(other) &rarr; [Matrix](/classes/3.1/Matrix)

Updates the current [Matrix](/classes/3.1/Matrix) from the passed one values.

Returns the updated [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.1/Matrix) | 

### copyToArray(array, offset) &rarr; [Matrix](/classes/3.1/Matrix)

Populates the passed array from the starting index with the [Matrix](/classes/3.1/Matrix) values.

Returns the [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array | 
optional | offset | number | 
### multiplyToRef(other, result) &rarr; [Matrix](/classes/3.1/Matrix)

Sets the passed matrix "result" with the multiplication result of the current [Matrix](/classes/3.1/Matrix) and the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.1/Matrix) | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### multiplyToArray(other, result, offset) &rarr; [Matrix](/classes/3.1/Matrix)

Sets the Float32Array "result" from the passed index "offset" with the multiplication result of the current [Matrix](/classes/3.1/Matrix) and the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/3.1/Matrix) | 
 | result | Float32Array | 
 | offset | number | 
### equals(value) &rarr; boolean

Boolean : True is the current [Matrix](/classes/3.1/Matrix) and the passed one values are strictly equal.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Matrix](/classes/3.1/Matrix) | 

### clone() &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) from the current [Matrix](/classes/3.1/Matrix).
### getClassName() &rarr; string

Returns the string "[Matrix](/classes/3.1/Matrix)"
### getHashCode() &rarr; number

Returns the [Matrix](/classes/3.1/Matrix) hash code.
### decompose(scale, rotation, translation) &rarr; boolean

Decomposes the current [Matrix](/classes/3.1/Matrix) into :

- a scale vector3 passed as a reference to update,

- a rotation quaternion passed as a reference to update,

- a translation vector3 passed as a reference to update.

Returns the boolean `true`.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | [Vector3](/classes/3.1/Vector3) | 
 | rotation | [Quaternion](/classes/3.1/Quaternion) | 
 | translation | [Vector3](/classes/3.1/Vector3) | 
### getRotationMatrix() &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as the extracted rotation matrix from the current one.
### getRotationMatrixToRef(result) &rarr; [Matrix](/classes/3.1/Matrix)

Extracts the rotation matrix from the current one and sets it as the passed "result".

Returns the current [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Matrix](/classes/3.1/Matrix) | 

### static FromArray(array, offset) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) set from the starting index of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; | 
optional | offset | number | 
### static FromArrayToRef(array, offset, result) &rarr; void

Sets the passed "result" matrix from the starting index of the passed array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | ArrayLike&lt;number&gt; | 
 | offset | number | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### static FromFloat32ArrayToRefScaled(array, offset, scale, result) &rarr; void

Sets the passed "result" matrix from the starting index of the passed Float32Array by multiplying each element by the float "scale".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array | 
 | offset | number | 
 | scale | number | 
### static FromValuesToRef(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44, result) &rarr; void

Sets the passed matrix "result" with the 16 passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | initialM11 | number | 
 | initialM12 | number | 
 | initialM13 | number | 
 | initialM14 | number | 
 | initialM21 | number | 
 | initialM22 | number | 
 | initialM23 | number | 
 | initialM24 | number | 
 | initialM31 | number | 
 | initialM32 | number | 
 | initialM33 | number | 
 | initialM34 | number | 
 | initialM41 | number | 
 | initialM42 | number | 
 | initialM43 | number | 
 | initialM44 | number | 
### getRow(index) &rarr; Nullable&lt;[Vector4](/classes/3.1/Vector4)&gt;

Returns the index-th row of the current matrix as a new [Vector4](/classes/3.1/Vector4).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 

### setRow(index, row) &rarr; [Matrix](/classes/3.1/Matrix)

Sets the index-th row of the current matrix with the passed [Vector4](/classes/3.1/Vector4) values.

Returns the updated [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 
 | row | [Vector4](/classes/3.1/Vector4) | 
### transpose() &rarr; [Matrix](/classes/3.1/Matrix)

Compute the transpose of the matrix.

Returns a new [Matrix](/classes/3.1/Matrix).
### transposeToRef(result) &rarr; [Matrix](/classes/3.1/Matrix)

Compute the transpose of the matrix.

Returns the current matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Matrix](/classes/3.1/Matrix) | 

### setRowFromFloats(index, x, y, z, w) &rarr; [Matrix](/classes/3.1/Matrix)

Sets the index-th row of the current matrix with the passed 4 x float values.

Returns the updated [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 
 | x | number | 
 | y | number | 
 | z | number | 
### static FromValues(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) set from the 16 passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | initialM11 | number | 
 | initialM12 | number | 
 | initialM13 | number | 
 | initialM14 | number | 
 | initialM21 | number | 
 | initialM22 | number | 
 | initialM23 | number | 
 | initialM24 | number | 
 | initialM31 | number | 
 | initialM32 | number | 
 | initialM33 | number | 
 | initialM34 | number | 
 | initialM41 | number | 
 | initialM42 | number | 
 | initialM43 | number | 
### static Compose(scale, rotation, translation) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) composed by the passed scale (vector3), rotation (quaternion) and translation (vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | [Vector3](/classes/3.1/Vector3) | 
 | rotation | [Quaternion](/classes/3.1/Quaternion) | 
 | translation | [Vector3](/classes/3.1/Vector3) | 
### static ComposeToRef(scale, rotation, translation, result) &rarr; void

Update a [Matrix](/classes/3.1/Matrix) with values composed by the passed scale (vector3), rotation (quaternion) and translation (vector3).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | [Vector3](/classes/3.1/Vector3) | 
 | rotation | [Quaternion](/classes/3.1/Quaternion) | 
 | translation | [Vector3](/classes/3.1/Vector3) | 
### static Identity() &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new indentity [Matrix](/classes/3.1/Matrix).
### static IdentityToRef(result) &rarr; void

Sets the passed "result" as an identity matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Matrix](/classes/3.1/Matrix) | 

### static Zero() &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new zero [Matrix](/classes/3.1/Matrix).
### static RotationX(angle) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new rotation matrix for "angle" radians around the X axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 

### static Invert(source) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as the passed inverted one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Matrix](/classes/3.1/Matrix) | 

### static RotationXToRef(angle, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix for "angle" radians around the X axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### static RotationY(angle) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new rotation matrix for "angle" radians around the Y axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 

### static RotationYToRef(angle, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix for "angle" radians around the Y axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### static RotationZ(angle) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new rotation matrix for "angle" radians around the Z axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 

### static RotationZToRef(angle, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix for "angle" radians around the Z axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### static RotationAxis(axis, angle) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new rotation matrix for "angle" radians around the passed axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.1/Vector3) | 
 | angle | number | 
### static RotationAxisToRef(axis, angle, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix for "angle" radians around the passed axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/3.1/Vector3) | 
 | angle | number | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### static RotationYawPitchRoll(yaw, pitch, roll) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as a rotation matrix from the Euler angles (y, x, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number | 
 | pitch | number | 
 | roll | number | 
### static RotationYawPitchRollToRef(yaw, pitch, roll, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix from the Euler angles (y, x, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number | 
 | pitch | number | 
 | roll | number | 
### static Scaling(x, y, z) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as a scaling matrix from the passed floats (x, y, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### static ScalingToRef(x, y, z, result) &rarr; void

Sets the passed matrix "result" as a scaling matrix from the passed floats (x, y, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### static Translation(x, y, z) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as a translation matrix from the passed floats (x, y, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### static TranslationToRef(x, y, z, result) &rarr; void

Sets the passed matrix "result" as a translation matrix from the passed floats (x, y, z).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
### static Lerp(startValue, endValue, gradient) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) whose values are the interpolated values for "gradien" (float) between the ones of the matrices "startValue" and "endValue".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Matrix](/classes/3.1/Matrix) | 
 | endValue | [Matrix](/classes/3.1/Matrix) | 
 | gradient | number | 
### static DecomposeLerp(startValue, endValue, gradient) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) whose values are computed by :

- decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices,

- interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end,

- recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Matrix](/classes/3.1/Matrix) | 
 | endValue | [Matrix](/classes/3.1/Matrix) | 
 | gradient | number | 
### static LookAtLH(eye, target, up) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new rotation [Matrix](/classes/3.1/Matrix) used to rotate a mesh so as it looks at the target [Vector3](/classes/3.1/Vector3), from the eye [Vector3](/classes/3.1/Vector3), the UP vector3 being orientated like "up".

This methods works for a Left-Handed system.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/3.1/Vector3) | 
 | target | [Vector3](/classes/3.1/Vector3) | 
 | up | [Vector3](/classes/3.1/Vector3) | 
### static LookAtLHToRef(eye, target, up, result) &rarr; void

Sets the passed "result" [Matrix](/classes/3.1/Matrix) as a rotation matrix used to rotate a mesh so as it looks at the target [Vector3](/classes/3.1/Vector3), from the eye [Vector3](/classes/3.1/Vector3), the UP vector3 being orientated like "up".

This methods works for a Left-Handed system.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/3.1/Vector3) | 
 | target | [Vector3](/classes/3.1/Vector3) | 
 | up | [Vector3](/classes/3.1/Vector3) | 
### static LookAtRH(eye, target, up) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new rotation [Matrix](/classes/3.1/Matrix) used to rotate a mesh so as it looks at the target [Vector3](/classes/3.1/Vector3), from the eye [Vector3](/classes/3.1/Vector3), the UP vector3 being orientated like "up".

This methods works for a Right-Handed system.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/3.1/Vector3) | 
 | target | [Vector3](/classes/3.1/Vector3) | 
 | up | [Vector3](/classes/3.1/Vector3) | 
### static LookAtRHToRef(eye, target, up, result) &rarr; void

Sets the passed "result" [Matrix](/classes/3.1/Matrix) as a rotation matrix used to rotate a mesh so as it looks at the target [Vector3](/classes/3.1/Vector3), from the eye [Vector3](/classes/3.1/Vector3), the UP vector3 being orientated like "up".

This methods works for a Left-Handed system.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/3.1/Vector3) | 
 | target | [Vector3](/classes/3.1/Vector3) | 
 | up | [Vector3](/classes/3.1/Vector3) | 
### static OrthoLH(width, height, znear, zfar) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as a left-handed orthographic projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | znear | number | 
### static OrthoLHToRef(width, height, znear, zfar, result) &rarr; void

Sets the passed matrix "result" as a left-handed orthographic projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | znear | number | 
 | zfar | number | 
### static OrthoOffCenterLH(left, right, bottom, top, znear, zfar) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as a left-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | number | 
 | right | number | 
 | bottom | number | 
 | top | number | 
 | znear | number | 
### static OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, result) &rarr; void

Sets the passed matrix "result" as a left-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | number | 
 | right | number | 
 | bottom | number | 
 | top | number | 
 | znear | number | 
 | zfar | number | 
### static OrthoOffCenterRH(left, right, bottom, top, znear, zfar) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as a right-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | number | 
 | right | number | 
 | bottom | number | 
 | top | number | 
 | znear | number | 
### static OrthoOffCenterRHToRef(left, right, bottom, top, znear, zfar, result) &rarr; void

Sets the passed matrix "result" as a right-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | number | 
 | right | number | 
 | bottom | number | 
 | top | number | 
 | znear | number | 
 | zfar | number | 
### static PerspectiveLH(width, height, znear, zfar) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as a left-handed perspective projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | znear | number | 
### static PerspectiveFovLH(fov, aspect, znear, zfar) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as a left-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number | 
 | aspect | number | 
 | znear | number | 
### static PerspectiveFovLHToRef(fov, aspect, znear, zfar, result, isVerticalFovFixed) &rarr; void

Sets the passed matrix "result" as a left-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number | 
 | aspect | number | 
 | znear | number | 
 | zfar | number | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### static PerspectiveFovRH(fov, aspect, znear, zfar) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as a right-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number | 
 | aspect | number | 
 | znear | number | 
### static PerspectiveFovRHToRef(fov, aspect, znear, zfar, result, isVerticalFovFixed) &rarr; void

Sets the passed matrix "result" as a right-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number | 
 | aspect | number | 
 | znear | number | 
 | zfar | number | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### static PerspectiveFovWebVRToRef(fov, znear, zfar, result, rightHanded) &rarr; void

Sets the passed matrix "result" as a left-handed perspective projection matrix  for WebVR computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | { upDegrees: number,  downDegrees: number,  leftDegrees: number,  rightDegrees: number } | 
 | znear | number | 
 | zfar | number | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### static GetFinalMatrix(viewport, world, view, projection, zmin, zmax) &rarr; [Matrix](/classes/3.1/Matrix)

Returns the final transformation matrix : world * view * projection * viewport

#### Parameters
 | Name | Type | Description
---|---|---|---
 | viewport | [Viewport](/classes/3.1/Viewport) | 
 | world | [Matrix](/classes/3.1/Matrix) | 
 | view | [Matrix](/classes/3.1/Matrix) | 
 | projection | [Matrix](/classes/3.1/Matrix) | 
 | zmin | number | 
### static GetAsMatrix2x2(matrix) &rarr; Float32Array

Returns a new Float32Array array with 4 elements : the 2x2 matrix extracted from the passed [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.1/Matrix) | 

### static GetAsMatrix3x3(matrix) &rarr; Float32Array

Returns a new Float32Array array with 9 elements : the 3x3 matrix extracted from the passed [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.1/Matrix) | 

### static Transpose(matrix) &rarr; [Matrix](/classes/3.1/Matrix)

Compute the transpose of the passed [Matrix](/classes/3.1/Matrix).

Returns a new [Matrix](/classes/3.1/Matrix).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.1/Matrix) | 

### static TransposeToRef(matrix, result) &rarr; void

Compute the transpose of the passed [Matrix](/classes/3.1/Matrix) and store it in the result matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.1/Matrix) | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### static Reflection(plane) &rarr; [Matrix](/classes/3.1/Matrix)

Returns a new [Matrix](/classes/3.1/Matrix) as the reflection  matrix across the passed plane.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | plane | [Plane](/classes/3.1/Plane) | 

### static ReflectionToRef(plane, result) &rarr; void

Sets the passed matrix "result" as the reflection matrix across the passed plane.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | plane | [Plane](/classes/3.1/Plane) | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### static FromXYZAxesToRef(xaxis, yaxis, zaxis, result) &rarr; void

Sets the passed matrix "mat" as a rotation matrix composed from the 3 passed  left handed axis.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | xaxis | [Vector3](/classes/3.1/Vector3) | 
 | yaxis | [Vector3](/classes/3.1/Vector3) | 
 | zaxis | [Vector3](/classes/3.1/Vector3) | 
### static FromQuaternionToRef(quat, result) &rarr; void

Sets the passed matrix "result" as a rotation matrix according to the passed quaternion.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | quat | [Quaternion](/classes/3.1/Quaternion) | 
 | result | [Matrix](/classes/3.1/Matrix) | 
