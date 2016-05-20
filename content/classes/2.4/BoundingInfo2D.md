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

### static CreateFromSize(size, origin) &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | [Size](/classes/2.4/Size) | 
optional | origin | [Vector2](/classes/2.4/Vector2) | 
### static CreateFromRadius(radius, origin) &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | radius | number | 
optional | origin | [Vector2](/classes/2.4/Vector2) | 
### static CreateFromPoints(points, origin) &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector2](/classes/2.4/Vector2)[] | 
optional | origin | [Vector2](/classes/2.4/Vector2) | 
### static CreateFromSizeToRef(size, b, origin) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | [Size](/classes/2.4/Size) | 
 | b | [BoundingInfo2D](/classes/2.4/BoundingInfo2D) | 
optional | origin | [Vector2](/classes/2.4/Vector2) | 
### static CreateFromRadiusToRef(radius, b, origin) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | radius | number | 
 | b | [BoundingInfo2D](/classes/2.4/BoundingInfo2D) | 
optional | origin | [Vector2](/classes/2.4/Vector2) | 
### static CreateFromPointsToRef(points, b, origin) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector2](/classes/2.4/Vector2)[] | 
 | b | [BoundingInfo2D](/classes/2.4/BoundingInfo2D) | 
optional | origin | [Vector2](/classes/2.4/Vector2) | 
### static CreateFromMinMaxToRef(xmin, xmax, ymin, ymax, b, origin) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | xmin | number | 
 | xmax | number | 
 | ymin | number | 
 | ymax | number | 
 | b | [BoundingInfo2D](/classes/2.4/BoundingInfo2D) | 
### clone() &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Duplicate this instance and return a new one

@return the duplicated instance
### max() &rarr; [Vector2](/classes/2.4/Vector2)


### maxToRef(result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector2](/classes/2.4/Vector2) | 

### transform(matrix) &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Apply a transformation matrix to this [BoundingInfo2D](/classes/2.4/BoundingInfo2D) and return a new instance containing the result

@return the new instance containing the result of the transformation applied on this [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.4/Matrix) |  the transformation matrix to apply

### union(other) &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Compute the union of this [BoundingInfo2D](/classes/2.4/BoundingInfo2D) with a given one, return a new [BoundingInfo2D](/classes/2.4/BoundingInfo2D) as a result

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



#### Parameters
 | Name | Type | Description
---|---|---|---
 | pickPosition | [Vector2](/classes/2.4/Vector2) | 

