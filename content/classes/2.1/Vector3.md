---
ID_PAGE: 25239
PG_TITLE: Vector3
PG_VERSION: 2.1
TAGS:
    - Objects
---
##new [Vector3](/classes/Vector3)(x, y, z)




Creates a new [Vector3](/classes/Vector3)






####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The initial X coordinate
 | y | number | The initial Y coordinate
 | z | number | The initial Z coordinate
---

##Members

###x : number





The first coordinate




###y : number





The second coordinate




###z : number





The third coordinate















##Methods

###toString() &rarr; string
Returns a string representation of the vector








###asArray() &rarr; number[]
Returns an array representation of the vector








###toArray(array, index) &rarr; [Vector3](/classes/Vector3)
Fills an array from a given index with the vector's coordinates







####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The array to fill
optional | index | number | default : 0 The given index
---

###toQuaternion() &rarr; [Quaternion](/classes/Quaternion)




###addInPlace(otherVector) &rarr; [Vector3](/classes/Vector3)
Adds in another vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | Another vector
---

###add(otherVector) &rarr; [Vector3](/classes/Vector3)
Adds an another vector and returns the result as a new vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | Another vector
---

###addToRef(otherVector, result) &rarr; [Vector3](/classes/Vector3)
Adds an another vector into a third target vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | Another vector
 | result | [Vector3](/classes/Vector3) | The target vector
---

###subtractInPlace(otherVector) &rarr; [Vector3](/classes/Vector3)
Substracts another vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | Another vector
---

###subtract(otherVector) &rarr; [Vector3](/classes/Vector3)
Substracts another vector and returns the result in a new vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | Another vector
---

###subtractToRef(otherVector, result) &rarr; [Vector3](/classes/Vector3)
Substracts another vector into a third target vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | Another vector
 | result | [Vector3](/classes/Vector3) | The target vector
---

###subtractFromFloats(x, y, z) &rarr; [Vector3](/classes/Vector3)
Substracts another vector in float form and returns the result in a new vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The X coordinate of another vector
 | y | number | The Y coordinate of another vector
 | z | number | The Z coordinate of another vector
---

###subtractFromFloatsToRef(x, y, z, result) &rarr; [Vector3](/classes/Vector3)
Substracts another vector in float form into a third target vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The X coordinate of another vector
 | y | number | The Y coordinate of another vector
 | z | number | The Z coordinate of another vector
 | result | [Vector3](/classes/Vector3) | The target vector
---

###negate() &rarr; [Vector3](/classes/Vector3)
Returns the opposite vector, that is the vector with opposite coordinates








###scaleInPlace(scale) &rarr; [Vector3](/classes/Vector3)
Scales the vector with the given factor







####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | The scaling factor
---

###scale(scale) &rarr; [Vector3](/classes/Vector3)
Scales the vector and returns the result as a new vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | The scaling factor
---

###scaleToRef(scale, result) &rarr; void
Scales the vector into a target vector with the given factor







####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | The scaling factor
 | result | [Vector3](/classes/Vector3) | The target vector
---

###equals(otherVector) &rarr; boolean
Tests if two vectors are equal
Returns true if X,Y,Z coordinates are equal







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | The vector to test against
---

###equalsWithEpsilon(otherVector) &rarr; boolean
Tests if two vectors are equal with an approched value
Returns true if X,Y,Z coordinates are equal within epsilon







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | @param otherVector
---

###equalsToFloats(x, y, z) &rarr; boolean
Test if a vector is equal to another in float form
Returns true if X,Y,Z coordinates are equal to x,y,z







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The X coordinate of another vector
 | y | number | The Y coordinate of another vector
 | z | number | The Z coordinate of another vector
---

###multiplyInPlace(otherVector) &rarr; [Vector3](/classes/Vector3)
Multiply by another vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | Another vector
---

###multiply(otherVector) &rarr; [Vector3](/classes/Vector3)
Multiply by another vector and returns the result in a new vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | Another vector
---

###multiplyToRef(otherVector, result) &rarr; [Vector3](/classes/Vector3)
Multiply by another vector into a third target vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | Another vector
 | result | [Vector3](/classes/Vector3) | The target vector
---

###multiplyByFloats(x, y, z) &rarr; [Vector3](/classes/Vector3)
Multiply by another vector in float form and returns the result in a new vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The X coordinate of another vector
 | y | number | The Y coordinate of another vector
 | z | number | The Z coordinate of another vector
---

###divide(otherVector) &rarr; [Vector3](/classes/Vector3)
Divides by another vector and returns the result nin a new vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | Another vector
---

###divideToRef(otherVector, result) &rarr; [Vector3](/classes/Vector3)
Divides by another vector into a third target vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/Vector3) | Another vector
 | result | [Vector3](/classes/Vector3) | The target vector
---

###MinimizeInPlace(other) &rarr; [Vector3](/classes/Vector3)
Minimizes this vector with another vector. The result is stored in this vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector3](/classes/Vector3) | Another vector
---

###MaximizeInPlace(other) &rarr; [Vector3](/classes/Vector3)
Maximizes by another vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector3](/classes/Vector3) | Another vector
---

###length() &rarr; number
The length of the vector








###lengthSquared() &rarr; number
The squared length of the vector








###normalize() &rarr; [Vector3](/classes/Vector3)
Normalizes a vector








###clone() &rarr; [Vector3](/classes/Vector3)
Clones a vector








###copyFrom(source) &rarr; [Vector3](/classes/Vector3)
Copies another vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/Vector3) | The source vector
---

###copyFromFloats(x, y, z) &rarr; [Vector3](/classes/Vector3)
Copies another vector in float form







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The X coordinate of another vector
 | y | number | The Y coordinate of another vector
 | z | number | The Z coordinate of another vector
---

###static GetClipFactor(vector0, vector1, axis, size) &rarr; number

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector0 | [Vector3](/classes/Vector3) | 
 | vector1 | [Vector3](/classes/Vector3) | 
 | axis | [Vector3](/classes/Vector3) | 
 | size | any | 
---

###static FromArray(array, offset) &rarr; [Vector3](/classes/Vector3)
Creates a new vector from a given array







####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The given array
optional | offset | number | The first index of the array to look at
---

###static FromArrayToRef(array, offset, result) &rarr; void
Sets an existing vector from a given array







####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The given array
 | offset | number | The first index of the array to look at
 | result | [Vector3](/classes/Vector3) | The existing vector
---

###static FromFloatArrayToRef(array, offset, result) &rarr; void
Sets an existing vector from an array of floats







####Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array | The given array of floats
 | offset | number | The first index of the array to look at
 | result | [Vector3](/classes/Vector3) | The existing vector
---

###static FromFloatsToRef(x, y, z, result) &rarr; void
Sets an existing vector from a set of floats







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The new X coordinate
 | y | number | The new Y coordinate
 | z | number | The new Z coordinate
 | result | [Vector3](/classes/Vector3) | The existing vector
---

###static Zero() &rarr; [Vector3](/classes/Vector3)
Returns a new [Vector3](/classes/Vector3) with x, y, z to zero








###static Up() &rarr; [Vector3](/classes/Vector3)
Returns a new [Vector3](/classes/Vector3) with y equal 1 anx x, z equal 0








###static TransformCoordinates(vector, transformation) &rarr; [Vector3](/classes/Vector3)
Transforms a vector into a new vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/Vector3) | The vector to transform
 | transformation | [Matrix](/classes/Matrix) | The transformation matrix
---

###static TransformCoordinatesToRef(vector, transformation, result) &rarr; void
Transforms a vector into an existing vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/Vector3) | The vector to transform
 | transformation | [Matrix](/classes/Matrix) | The transformation matrix
 | result | [Vector3](/classes/Vector3) | The existing vector
---

###static TransformCoordinatesFromFloatsToRef(x, y, z, transformation, result) &rarr; void
Transforms a set of coordinates into an existing vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The X coordinate to transform
 | y | number | The Y coordinate to transform
 | z | number | The Z coordinate to transform
 | transformation | [Matrix](/classes/Matrix) | The transformation matrix
 | result | [Vector3](/classes/Vector3) | The existing vector
---

###static TransformCoordinatesToRefSIMD(vector, transformation, result) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/Vector3) | 
 | transformation | [Matrix](/classes/Matrix) | 
 | result | [Vector3](/classes/Vector3) | 
---

###static TransformCoordinatesFromFloatsToRefSIMD(x, y, z, transformation, result) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | transformation | [Matrix](/classes/Matrix) | 
 | result | [Vector3](/classes/Vector3) | 
---

###static TransformNormal(vector, transformation) &rarr; [Vector3](/classes/Vector3)
Performs a normal transformation using the given [Matrix](/classes/Matrix).







####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/Vector3) | The vector to transform
 | transformation | [Matrix](/classes/Matrix) | The transformation matrix
---

###static TransformNormalToRef(vector, transformation, result) &rarr; void
Performs a normal transformation using the given [Matrix](/classes/Matrix) into an existing vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/Vector3) | The vector to transform
 | transformation | [Matrix](/classes/Matrix) | The transformation matrix
 | result | [Vector3](/classes/Vector3) | The existing vector
---

###static TransformNormalFromFloatsToRef(x, y, z, transformation, result) &rarr; void
Performs a normal transformation of the set of float using the given [Matrix](/classes/Matrix) into an existing vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The X coordinate to transform
 | y | number | The Y coordinate to transform
 | z | number | The Z coordinate to transform
 | transformation | [Matrix](/classes/Matrix) | The transformation matrix
 | result | [Vector3](/classes/Vector3) | The existing vector
---

###static CatmullRom(value1, value2, value3, value4, amount) &rarr; [Vector3](/classes/Vector3)
Performs a Catmull-Rom interpolation using the specified positions.
When the method completes, returns the result of the Catmull-Rom interpolation







####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/Vector3) | The first position in the interpolation.
 | value2 | [Vector3](/classes/Vector3) | The second position in the interpolation.
 | value3 | [Vector3](/classes/Vector3) | The third position in the interpolation.
 | value4 | [Vector3](/classes/Vector3) | The fourth position in the interpolation.
 | amount | number | Weighting factor.
---

###static Clamp(value, min, max) &rarr; [Vector3](/classes/Vector3)
Restricts a value to be within a specified range.







####Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Vector3](/classes/Vector3) | The value to clamp
 | min | [Vector3](/classes/Vector3) | The minimum value
 | max | [Vector3](/classes/Vector3) | The maximum value
---

###static Hermite(value1, tangent1, value2, tangent2, amount) &rarr; [Vector3](/classes/Vector3)
Performs a Hermite spline interpolation.







####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/Vector3) | First source position vector.
 | tangent1 | [Vector3](/classes/Vector3) | First source tangent vector.
 | value2 | [Vector3](/classes/Vector3) | Second source position vector.
 | tangent2 | [Vector3](/classes/Vector3) | Second source tangent vector.
 | amount | number | Weighting factor.
---

###static Lerp(start, end, amount) &rarr; [Vector3](/classes/Vector3)
Performs a linear interpolation between two vectors.







####Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Vector3](/classes/Vector3) | interpolation start vector
 | end | [Vector3](/classes/Vector3) | interpolation end vector
 | amount | number | Weighting factor
---

###static Dot(left, right) &rarr; number
Dot product between two vectors







####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/Vector3) | first operand
 | right | [Vector3](/classes/Vector3) | second operand
---

###static Cross(left, right) &rarr; [Vector3](/classes/Vector3)
Calculates the cross product of two vectors.







####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/Vector3) | first operand
 | right | [Vector3](/classes/Vector3) | second operand
---

###static CrossToRef(left, right, result) &rarr; void
Calculates the cross product of two vectors and put the result in the passed vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/Vector3) | first operand
 | right | [Vector3](/classes/Vector3) | second operand
 | result | [Vector3](/classes/Vector3) | The vector to put the result into
---

###static Normalize(vector) &rarr; [Vector3](/classes/Vector3)
Returns the normalized version of the passed vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/Vector3) | The vector to normalize
---

###static NormalizeToRef(vector, result) &rarr; void
Put into the result vector the normalized version of the passed vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/Vector3) | The vector to normalize
 | result | [Vector3](/classes/Vector3) | The vector to put the result into
---

###static Project(vector, world, transform, viewport) &rarr; [Vector3](/classes/Vector3)
Projects a 3D vector from object space into screen space.







####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/Vector3) | The vector to project
 | world | [Matrix](/classes/Matrix) | The matrix representing the world matrix
 | transform | [Matrix](/classes/Matrix) | The matrix representing the transform matrix
 | viewport | [Viewport](/classes/Viewport) | The [Viewport](/classes/Viewport) structure representing the viewport
---

###static UnprojectFromTransform(source, viewportWidth, viewportHeight, world, transform) &rarr; [Vector3](/classes/Vector3)





####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/Vector3) | 
 | viewportWidth | number | 
 | viewportHeight | number | 
 | world | [Matrix](/classes/Matrix) | 
 | transform | [Matrix](/classes/Matrix) | 
---

###static Unproject(source, viewportWidth, viewportHeight, world, view, projection) &rarr; [Vector3](/classes/Vector3)
Converts a 3D vector from screen space into world space.







####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/Vector3) | The vector to project
 | viewportWidth | number | The viewport width
 | viewportHeight | number | The viewport height
 | world | [Matrix](/classes/Matrix) | The matrix representing the world matrix
 | view | [Matrix](/classes/Matrix) | The matrix representing the view matrix
 | projection | [Matrix](/classes/Matrix) | The projection matrix
---

###static Minimize(left, right) &rarr; [Vector3](/classes/Vector3)
Minimizes the left vector with the right vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/Vector3) | The vector to minimize
 | right | [Vector3](/classes/Vector3) | The vector used to minimize
---

###static Maximize(left, right) &rarr; [Vector3](/classes/Vector3)
Maximizes the left vector with the right vector







####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/Vector3) | The vector to maximize
 | right | [Vector3](/classes/Vector3) | the vetor used to maximize
---

###static Distance(value1, value2) &rarr; number
Returns the distance between two vectors







####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/Vector3) | first vector
 | value2 | [Vector3](/classes/Vector3) | second vector
---

###static DistanceSquared(value1, value2) &rarr; number
Returns the squared distance between two vectors







####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/Vector3) | first vector
 | value2 | [Vector3](/classes/Vector3) | second vector
---

###static Center(value1, value2) &rarr; [Vector3](/classes/Vector3)

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/Vector3) | first vector
 | value2 | [Vector3](/classes/Vector3) | second vector
---

###static RotationFromAxis(axis1, axis2, axis3) &rarr; [Vector3](/classes/Vector3)
Given three orthogonal left-handed oriented [Vector3](/classes/Vector3) axis in space (target system),
RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
to something in order to rotate it from its local system to the given target system.

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis1 | [Vector3](/classes/Vector3) | 
 | axis2 | [Vector3](/classes/Vector3) | 
 | axis3 | [Vector3](/classes/Vector3) | 
---
