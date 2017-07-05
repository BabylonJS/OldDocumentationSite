---
TAGS:
---
## Description

class [Scalar](/classes/3.0/Scalar)



## Methods

### static Lerp(start, end, amount) &rarr; number

Creates a new scalar with values linearly interpolated of "amount" between the start scalar and the end scalar.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | number | 
 | end | number | 
 | amount | number | 
### static Hermite(value1, tangent1, value2, tangent2, amount) &rarr; number

Returns a new scalar located for "amount" (float) on the Hermite spline defined by the scalars "value1", "value3", "tangent1", "tangent2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | number | 
 | tangent1 | number | 
 | value2 | number | 
 | tangent2 | number | 
