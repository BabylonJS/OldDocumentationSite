---
ID_PAGE: 25245
PG_TITLE: Frustum
PG_VERSION: 2.1
---
## Description

class [Frustum](/classes/3.0/Frustum)

Defines the geometric portion of an object between two parallel Planes

## Methods

### static GetPlanes(transform) &rarr; [Plane](/classes/3.0/Plane)[]

Returns a new array of 6 [Frustum](/classes/3.0/Frustum) planes computed by the passed transformation matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/3.0/Matrix) |      

### static GetPlanesToRef(transform, frustumPlanes) &rarr; void

Sets the passed array "frustumPlanes" with the 6 [Frustum](/classes/3.0/Frustum) planes computed by the passed transformation matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/3.0/Matrix) |      
 | frustumPlanes | [Plane](/classes/3.0/Plane)[] |      
