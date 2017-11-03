---
ID_PAGE: 25245
PG_TITLE: Frustum
PG_VERSION: 2.1
---
## Description

class [Frustum](/classes/3.1/Frustum)



## Methods

### static GetPlanes(transform) &rarr; [Plane](/classes/3.1/Plane)[]

Returns a new array of 6 [Frustum](/classes/3.1/Frustum) planes computed by the passed transformation matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/3.1/Matrix) | 

### static GetNearPlaneToRef(transform, frustumPlane) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/3.1/Matrix) | 
 | frustumPlane | [Plane](/classes/3.1/Plane) | 
### static GetFarPlaneToRef(transform, frustumPlane) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/3.1/Matrix) | 
 | frustumPlane | [Plane](/classes/3.1/Plane) | 
### static GetLeftPlaneToRef(transform, frustumPlane) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/3.1/Matrix) | 
 | frustumPlane | [Plane](/classes/3.1/Plane) | 
### static GetRightPlaneToRef(transform, frustumPlane) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/3.1/Matrix) | 
 | frustumPlane | [Plane](/classes/3.1/Plane) | 
### static GetTopPlaneToRef(transform, frustumPlane) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/3.1/Matrix) | 
 | frustumPlane | [Plane](/classes/3.1/Plane) | 
### static GetBottomPlaneToRef(transform, frustumPlane) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/3.1/Matrix) | 
 | frustumPlane | [Plane](/classes/3.1/Plane) | 
### static GetPlanesToRef(transform, frustumPlanes) &rarr; void

Sets the passed array "frustumPlanes" with the 6 [Frustum](/classes/3.1/Frustum) planes computed by the passed transformation matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/3.1/Matrix) | 
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 
