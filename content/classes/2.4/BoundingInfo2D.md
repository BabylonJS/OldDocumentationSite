---
TAGS:
---
## Description

class [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Stores 2D Bounding Information.

This class handles a circle area and a bounding rectangle one.

## Constructor

## new [BoundingInfo2D](/classes/2.4/BoundingInfo2D)()


## Members

### center : [Vector2](/classes/2.4/Vector2)

The coordinate of the center of the bounding info

### radius : number

The radius of the bounding circle, from the center of the bounded object

### extent : [Vector2](/classes/2.4/Vector2)

The extent of the bounding rectangle, from the center of the bounded object.

This is an absolute value in both X and Y of the vector which describe the right/top corner of the rectangle, you can easily reconstruct the whole rectangle by negating X &| Y.

## Methods

### static CreateFromSize(size) &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Create a [BoundingInfo2D](/classes/2.4/BoundingInfo2D) object from a given size

#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | [Size](/classes/2.4/Size) |  the size that will be used to set the extend, radius will be computed from it.

### static CreateFromRadius(radius) &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Create a [BoundingInfo2D](/classes/2.4/BoundingInfo2D) object from a given radius

#### Parameters
 | Name | Type | Description
---|---|---|---
 | radius | number |  the radius to use, the extent will be computed from it.

### static CreateFromPoints(points) &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Create a [BoundingInfo2D](/classes/2.4/BoundingInfo2D) object from a list of points.

The resulted object will be the smallest bounding area that includes all the given points.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector2](/classes/2.4/Vector2)[] |  an array of points to compute the bounding object from.

### static CreateFromSizeToRef(size, b) &rarr; void

Update a [BoundingInfo2D](/classes/2.4/BoundingInfo2D) object using the given [Size](/classes/2.4/Size) as input

#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | [Size](/classes/2.4/Size) |  the bounding data will be computed from this size.
 | b | [BoundingInfo2D](/classes/2.4/BoundingInfo2D) |  must be a valid/allocated object, it will contain the result of the operation
### static CreateFromRadiusToRef(radius, b) &rarr; void

Update a [BoundingInfo2D](/classes/2.4/BoundingInfo2D) object using the given radius as input

#### Parameters
 | Name | Type | Description
---|---|---|---
 | radius | number |  the bounding data will be computed from this radius
 | b | [BoundingInfo2D](/classes/2.4/BoundingInfo2D) |  must be a valid/allocated object, it will contain the result of the operation
### static CreateFromPointsToRef(points, b) &rarr; void

Update a [BoundingInfo2D](/classes/2.4/BoundingInfo2D) object using the given points array as input

#### Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector2](/classes/2.4/Vector2)[] |  the point array to use to update the bounding data
 | b | [BoundingInfo2D](/classes/2.4/BoundingInfo2D) |  must be a valid/allocated object, it will contain the result of the operation
### static CreateFromMinMaxToRef(xmin, xmax, ymin, ymax, b) &rarr; void

Update a [BoundingInfo2D](/classes/2.4/BoundingInfo2D) object using the given min/max values as input

#### Parameters
 | Name | Type | Description
---|---|---|---
 | xmin | number |  the smallest x coordinate
 | xmax | number |  the biggest x coordinate
 | ymin | number |  the smallest y coordinate
 | ymax | number |  the buggest y coordinate
### clone() &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Duplicate this instance and return a new one

@return the duplicated instance
### max() &rarr; [Vector2](/classes/2.4/Vector2)

return the max extend of the bounding info
### maxToRef(result) &rarr; void

Update a vector2 with the max extend of the bounding info

#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector2](/classes/2.4/Vector2) |  must be a valid/allocated vector2 that will contain the result of the operation

### transform(matrix) &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Apply a transformation matrix to this [BoundingInfo2D](/classes/2.4/BoundingInfo2D) and return a new instance containing the result

@return the new instance containing the result of the transformation applied on this [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.4/Matrix) |  the transformation matrix to apply

### union(other) &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Compute the union of this [BoundingInfo2D](/classes/2.4/BoundingInfo2D) with a given one, returns a new [BoundingInfo2D](/classes/2.4/BoundingInfo2D) as a result

@return a new instance containing the result of the union

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [BoundingInfo2D](/classes/2.4/BoundingInfo2D) |  the second [BoundingInfo2D](/classes/2.4/BoundingInfo2D) to compute the union with this one

### transformToRef(matrix, result) &rarr; void

Transform this [BoundingInfo2D](/classes/2.4/BoundingInfo2D) with a given matrix and store the result in an existing [BoundingInfo2D](/classes/2.4/BoundingInfo2D) instance.

This is a GC friendly version, try to use it as much as possible, specially if your transformation is inside a loop, allocate the result object once for good outside of the loop and use it every time.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.4/Matrix) |  The matrix to use to compute the transformation
 | result | [BoundingInfo2D](/classes/2.4/BoundingInfo2D) |  A VALID (i.e. allocated) [BoundingInfo2D](/classes/2.4/BoundingInfo2D) object where the result will be stored
### unionToRef(other, result) &rarr; void

Compute the union of this [BoundingInfo2D](/classes/2.4/BoundingInfo2D) with another one and store the result in a third valid [BoundingInfo2D](/classes/2.4/BoundingInfo2D) object

This is a GC friendly version, try to use it as much as possible, specially if your transformation is inside a loop, allocate the result object once for good outside of the loop and use it every time.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [BoundingInfo2D](/classes/2.4/BoundingInfo2D) |  the second object used to compute the union
 | result | [BoundingInfo2D](/classes/2.4/BoundingInfo2D) |  a VALID [BoundingInfo2D](/classes/2.4/BoundingInfo2D) instance (i.e. allocated) where the result will be stored
### doesIntersect(pickPosition) &rarr; boolean

Check if the given point is inside the [BoundingInfo](/classes/2.4/BoundingInfo).

The test is first made on the radius, then inside the rectangle described by the extent

@return true if the point is inside, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
 | pickPosition | [Vector2](/classes/2.4/Vector2) |  the position to test

