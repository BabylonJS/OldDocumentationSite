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

### static CreateFromSizeundefined &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateFromRadiusundefined &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateFromPointsundefined &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateFromSizeToRefundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateFromRadiusToRefundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateFromPointsToRefundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateFromMinMaxToRefundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### cloneundefined &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Duplicate this instance and return a new one

@return the duplicated instance
### maxundefined &rarr; [Vector2](/classes/2.4/Vector2)


### maxToRefundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### transformundefined &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Apply a transformation matrix to this [BoundingInfo2D](/classes/2.4/BoundingInfo2D) and return a new instance containing the result

@return the new instance containing the result of the transformation applied on this [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unionundefined &rarr; [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Compute the union of this [BoundingInfo2D](/classes/2.4/BoundingInfo2D) with a given one, return a new [BoundingInfo2D](/classes/2.4/BoundingInfo2D) as a result

@return a new instance containing the result of the union

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### transformToRefundefined &rarr; void

Transform this [BoundingInfo2D](/classes/2.4/BoundingInfo2D) with a given matrix and store the result in an existing [BoundingInfo2D](/classes/2.4/BoundingInfo2D) instance.

This is a GC friendly version, try to use it as much as possible, specially if your transformation is inside a loop, allocate the result object once for good outside of the loop and use it every time.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unionToRefundefined &rarr; void

Compute the union of this [BoundingInfo2D](/classes/2.4/BoundingInfo2D) with another one and store the result in a third valid [BoundingInfo2D](/classes/2.4/BoundingInfo2D) object

This is a GC friendly version, try to use it as much as possible, specially if your transformation is inside a loop, allocate the result object once for good outside of the loop and use it every time.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### doesIntersectundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
