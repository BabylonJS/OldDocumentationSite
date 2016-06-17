---
ID_PAGE: 25242
PG_TITLE: Matrix
PG_VERSION: 2.1
---
## Description

class [Matrix](/classes/2.4/Matrix)

Creates a new 4 by 4 matrix

## Members

### m : Float32Array

The matrix, which is an array

## Methods

### isIdentity() &rarr; boolean

Tests if the matrix is an identity matrix
### determinant() &rarr; number

Returns the determinant of the matrix
### toArray() &rarr; Float32Array

Returns the matrix in array form
### asArray() &rarr; Float32Array

Returns the matrix in array form
### invert() &rarr; [Matrix](/classes/2.4/Matrix)

Inverts the matrix
### reset() &rarr; [Matrix](/classes/2.4/Matrix)


### add(other) &rarr; [Matrix](/classes/2.4/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.4/Matrix) |    

### addToRef(other, result) &rarr; [Matrix](/classes/2.4/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.4/Matrix) |    
 | result | [Matrix](/classes/2.4/Matrix) |    the target matrix
### addToSelf(other) &rarr; [Matrix](/classes/2.4/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.4/Matrix) |    

### invertToRef(other) &rarr; [Matrix](/classes/2.4/Matrix)

Inverts the matrix and put it into another matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.4/Matrix) |    

### setTranslation(vector3) &rarr; [Matrix](/classes/2.4/Matrix)

Sets a translation to the matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/2.4/Vector3) |    The translation to apply

### getTranslation() &rarr; [Vector3](/classes/2.4/Vector3)


### multiply(other) &rarr; [Matrix](/classes/2.4/Matrix)

Multiplies by another matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.4/Matrix) |    

### copyFrom(other) &rarr; [Matrix](/classes/2.4/Matrix)

Copies another matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.4/Matrix) |    

### copyToArray(array, offset) &rarr; [Matrix](/classes/2.4/Matrix)

Copies the current matrix into an array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array |    The array to copy
optional | offset | number |    The first index to copy from
### multiplyToRef(other, result) &rarr; [Matrix](/classes/2.4/Matrix)

Multiplies another matrix into an existing matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.4/Matrix) |    
 | result | [Matrix](/classes/2.4/Matrix) |    the target matrix
### multiplyToArray(other, result, offset) &rarr; [Matrix](/classes/2.4/Matrix)

Multiplies another matrix into an existing array at a given index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.4/Matrix) |    
 | result | Float32Array |    the target matrix
 | offset | number |    The first index to copy from
### equals(value) &rarr; boolean

Tests if two matrices are equal

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Matrix](/classes/2.4/Matrix) |    The matrix to test against

### clone() &rarr; [Matrix](/classes/2.4/Matrix)

Clones a martix
### getClassName() &rarr; string


### getHashCode() &rarr; number


### decompose(scale, rotation, translation) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | [Vector3](/classes/2.4/Vector3) |    
 | rotation | [Quaternion](/classes/2.4/Quaternion) |    
 | translation | [Vector3](/classes/2.4/Vector3) |    
### static FromArray(array, offset) &rarr; [Matrix](/classes/2.4/Matrix)

Creates a new matrix from an array from a given index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |    The array to copy
optional | offset | number |    The first index to copy from
### static FromArrayToRef(array, offset, result) &rarr; void

Fills an existing matrix with an array from a given index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |    The array to copy
 | offset | number |    The first index to copy from
 | result | [Matrix](/classes/2.4/Matrix) |    the target matrix
### static FromFloat32ArrayToRefScaled(array, offset, scale, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array |    The array to copy
 | offset | number |    The first index to copy from
 | scale | number |    
### static FromValuesToRef(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44, result) &rarr; void

Fills an existsing matrix with a set of values

#### Parameters
 | Name | Type | Description
---|---|---|---
 | initialM11 | number |    initial MM11 1,1 value
 | initialM12 | number |    initial MM12 1,2 value
 | initialM13 | number |    initial MM13 1,3 value
 | initialM14 | number |    initial MM14 1,4 value
 | initialM21 | number |    initial MM21 [2.1](/classes/2.1) value
 | initialM22 | number |    initial MM22 2,2 value
 | initialM23 | number |    initial MM23 2,3 value
 | initialM24 | number |    initial MM24 2,4 value
 | initialM31 | number |    initial MM31 3,1 value
 | initialM32 | number |    initial MM32 3,2 value
 | initialM33 | number |    initial MM33 3,3 value
 | initialM34 | number |    initial MM34 3,4 value
 | initialM41 | number |    initial MM41 4,1 value
 | initialM42 | number |    initial MM42 4,2 value
 | initialM43 | number |    initial MM43 4,3 value
 | initialM44 | number |    initial MM44 4,4 value
### getRow(index) &rarr; [Vector4](/classes/2.4/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 

### setRow(index, row) &rarr; [Matrix](/classes/2.4/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 
 | row | [Vector4](/classes/2.4/Vector4) | 
### static FromValues(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44) &rarr; [Matrix](/classes/2.4/Matrix)

Creates a matrix from set of values

#### Parameters
 | Name | Type | Description
---|---|---|---
 | initialM11 | number |    initial MM11 1,1 value
 | initialM12 | number |    initial MM12 1,2 value
 | initialM13 | number |    initial MM13 1,3 value
 | initialM14 | number |    initial MM14 1,4 value
 | initialM21 | number |    initial MM21 [2.1](/classes/2.1) value
 | initialM22 | number |    initial MM22 2,2 value
 | initialM23 | number |    initial MM23 2,3 value
 | initialM24 | number |    initial MM24 2,4 value
 | initialM31 | number |    initial MM31 3,1 value
 | initialM32 | number |    initial MM32 3,2 value
 | initialM33 | number |    initial MM33 3,3 value
 | initialM34 | number |    initial MM34 3,4 value
 | initialM41 | number |    initial MM41 4,1 value
 | initialM42 | number |    initial MM42 4,2 value
 | initialM43 | number |    initial MM43 4,3 value
### static Compose(scale, rotation, translation) &rarr; [Matrix](/classes/2.4/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | [Vector3](/classes/2.4/Vector3) |    
 | rotation | [Quaternion](/classes/2.4/Quaternion) |    
 | translation | [Vector3](/classes/2.4/Vector3) |    
### static Identity() &rarr; [Matrix](/classes/2.4/Matrix)

Returns the identity matrix
### static IdentityToRef(result) &rarr; void

Fills an existing matrix with the identity matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Matrix](/classes/2.4/Matrix) |    the target matrix

### static Zero() &rarr; [Matrix](/classes/2.4/Matrix)

Returns a null matrix
### static RotationX(angle) &rarr; [Matrix](/classes/2.4/Matrix)

Rotates a matrix around X axis

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |    angle of the rotation

### static Invert(source) &rarr; [Matrix](/classes/2.4/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Matrix](/classes/2.4/Matrix) |    

### static RotationXToRef(angle, result) &rarr; void

Rotates a matrix around X axis into an existing matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |    angle of the rotation
 | result | [Matrix](/classes/2.4/Matrix) |    the target matrix
### static RotationY(angle) &rarr; [Matrix](/classes/2.4/Matrix)

Rotates a matrix around Y axis

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |    angle of the rotation

### static RotationYToRef(angle, result) &rarr; void

Rotates a matrix around Y axis into an existing axis

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |    angle of the rotation
 | result | [Matrix](/classes/2.4/Matrix) |    the target matrix
### static RotationZ(angle) &rarr; [Matrix](/classes/2.4/Matrix)

Rotates a matrix around Z axis

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |    angle of the rotation

### static RotationZToRef(angle, result) &rarr; void

Rotates a matrix around Z axis into an existing axis

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |    angle of the rotation
 | result | [Matrix](/classes/2.4/Matrix) |    the target matrix
### static RotationAxis(axis, angle) &rarr; [Matrix](/classes/2.4/Matrix)

Rotates a matrix using a [Vector3](/classes/2.4/Vector3)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.4/Vector3) |    [Vector3](/classes/2.4/Vector3) axis of the rotation
 | angle | number |    angle of the rotation
### static RotationAxisToRef(axis, angle, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.4/Vector3) |    [Vector3](/classes/2.4/Vector3) axis of the rotation
 | angle | number |    angle of the rotation
 | result | [Matrix](/classes/2.4/Matrix) |    the target matrix
### static RotationYawPitchRoll(yaw, pitch, roll) &rarr; [Matrix](/classes/2.4/Matrix)

Rotates a matrix using yaw, pitch and roll values

#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number |    The yaw rotation value
 | pitch | number |    The pitch rotation value
 | roll | number |    The roll rotation value
### static RotationYawPitchRollToRef(yaw, pitch, roll, result) &rarr; void

Rotates a matrix using yaw, pitch and roll values and put it into a target matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number |    The yaw rotation value
 | pitch | number |    The pitch rotation value
 | roll | number |    The roll rotation value
### static Scaling(x, y, z) &rarr; [Matrix](/classes/2.4/Matrix)

Creates a scaling matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |    The X translation value
 | y | number |    The Y translation value
 | z | number |    The Z translation value
### static ScalingToRef(x, y, z, result) &rarr; void

Creates a scaling matrix and put it into a target matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |    The X translation value
 | y | number |    The Y translation value
 | z | number |    The Z translation value
### static Translation(x, y, z) &rarr; [Matrix](/classes/2.4/Matrix)

Creates a matrix with a translation pitch defined by x, y, z

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |    The X translation value
 | y | number |    The Y translation value
 | z | number |    The Z translation value
### static TranslationToRef(x, y, z, result) &rarr; void

Creates a matrix with a translation pitch defined by x, y, z and put it into a target matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |    The X translation value
 | y | number |    The Y translation value
 | z | number |    The Z translation value
### static Lerp(startValue, endValue, gradient) &rarr; [Matrix](/classes/2.4/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Matrix](/classes/2.4/Matrix) |  
 | endValue | [Matrix](/classes/2.4/Matrix) |  
 | gradient | number |  
### static DecomposeLerp(startValue, endValue, gradient) &rarr; [Matrix](/classes/2.4/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | startValue | [Matrix](/classes/2.4/Matrix) |  
 | endValue | [Matrix](/classes/2.4/Matrix) |  
 | gradient | number |  
### static LookAtLH(eye, target, up) &rarr; [Matrix](/classes/2.4/Matrix)

Builds a left-handed look-at [Matrix](/classes/2.4/Matrix)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/2.4/Vector3) |    The [Vector3](/classes/2.4/Vector3) that defines the camera point
 | target | [Vector3](/classes/2.4/Vector3) |    The [Vector3](/classes/2.4/Vector3) that defines the camera look-at target
 | up | [Vector3](/classes/2.4/Vector3) |    The [Vector3](/classes/2.4/Vector3) that defines the up direction
### static LookAtLHToRef(eye, target, up, result) &rarr; void

Builds a left-handed look-at [Matrix](/classes/2.4/Matrix) and put it in a target matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/2.4/Vector3) |    The [Vector3](/classes/2.4/Vector3) that defines the camera point
 | target | [Vector3](/classes/2.4/Vector3) |    The [Vector3](/classes/2.4/Vector3) that defines the camera look-at target
 | up | [Vector3](/classes/2.4/Vector3) |    The [Vector3](/classes/2.4/Vector3) that defines the up direction
### static OrthoLH(width, height, znear, zfar) &rarr; [Matrix](/classes/2.4/Matrix)

Creates a left-handed orthogonal projection matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |    The width of the view volume at the near view plane
 | height | number |    The height of the view volume at the near view plane
 | znear | number |    Z-value of the near view plane.
### static OrthoLHToRef(width, height, znear, zfar, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |    The width of the view volume at the near view plane
 | height | number |    The height of the view volume at the near view plane
 | znear | number |    Z-value of the near view plane.
 | zfar | number |    Z-value of the far view plane.
### static OrthoOffCenterLH(left, right, bottom, top, znear, zfar) &rarr; [Matrix](/classes/2.4/Matrix)

Creates a custom left-handed orthogonal projection matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | number |    The minimum x value of the view volume
 | right | number |    The maximum x value of the view volume
 | bottom | number |    The minimum y value of the view volume
 | top | number |    The maximum y value of the view volume
 | znear | number |    Z-value of the near view plane.
### static OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, result) &rarr; void

Creates a custom left-handed orthogonal projection matrix and put it into the target matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | number |    The minimum x value of the view volume
 | right | any |    The maximum x value of the view volume
 | bottom | number |    The minimum y value of the view volume
 | top | number |    The maximum y value of the view volume
 | znear | number |    Z-value of the near view plane.
 | zfar | number |    Z-value of the far view plane.
### static PerspectiveLH(width, height, znear, zfar) &rarr; [Matrix](/classes/2.4/Matrix)

Creates a left-handed perspective projection matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |    The width of the view volume at the near view plane
 | height | number |    The height of the view volume at the near view plane
 | znear | number |    Z-value of the near view plane.
### static PerspectiveFovLH(fov, aspect, znear, zfar) &rarr; [Matrix](/classes/2.4/Matrix)

Creates a left-handed perspective projection matrix based on the field of view

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number |    Field of view in the y direction, in radians.
 | aspect | number |    Aspect ratio, defined as the view space width divided by height.
 | znear | number |    Z-value of the near view plane.
### static PerspectiveFovLHToRef(fov, aspect, znear, zfar, result, isVerticalFovFixed) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number |    Field of view in the y direction, in radians.
 | aspect | number |    Aspect ratio, defined as the view space width divided by height.
 | znear | number |    Z-value of the near view plane.
 | zfar | number |    Z-value of the far view plane.
 | result | [Matrix](/classes/2.4/Matrix) |    the target matrix
### static GetFinalMatrix(viewport, world, view, projection, zmin, zmax) &rarr; [Matrix](/classes/2.4/Matrix)

??

#### Parameters
 | Name | Type | Description
---|---|---|---
 | viewport | [Viewport](/classes/2.4/Viewport) |    The [Viewport](/classes/2.4/Viewport) structure representing the viewport
 | world | [Matrix](/classes/2.4/Matrix) |    The [Matrix](/classes/2.4/Matrix) structure representing the world
 | view | [Matrix](/classes/2.4/Matrix) |    The [Matrix](/classes/2.4/Matrix) structure representing the view
 | projection | [Matrix](/classes/2.4/Matrix) |    The [Matrix](/classes/2.4/Matrix) structure representing the projection
 | zmin | number |    The minumum z value of the viewport
### static GetAsMatrix2x2(matrix) &rarr; Float32Array



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.4/Matrix) |    The matrix to transpose

### static GetAsMatrix3x3(matrix) &rarr; Float32Array



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.4/Matrix) |    The matrix to transpose

### static Transpose(matrix) &rarr; [Matrix](/classes/2.4/Matrix)

Transposes the rows and the columns of the given matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.4/Matrix) |    The matrix to transpose

### static Reflection(plane) &rarr; [Matrix](/classes/2.4/Matrix)

Creates the reflection matrix of a given [Plane](/classes/2.4/Plane)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | plane | [Plane](/classes/2.4/Plane) |    The given plane

### static ReflectionToRef(plane, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | plane | [Plane](/classes/2.4/Plane) |    The given plane
 | result | [Matrix](/classes/2.4/Matrix) |    the target matrix
