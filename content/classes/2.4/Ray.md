---
ID_PAGE: 25246
PG_TITLE: Ray
PG_VERSION: 2.1
---
## Description

class [Ray](/classes/2.4/Ray)



## Constructor

## new [Ray](/classes/2.4/Ray)(origin, direction, length)

Defines a [Ray](/classes/2.4/Ray)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](/classes/2.4/Vector3) |   The origin point  The origin point The origin point
 | direction | [Vector3](/classes/2.4/Vector3) |    The initial vector describing the direction of the [Ray](/classes/2.4/Ray)
optional | length | number |    
## Members

### origin : [Vector3](/classes/2.4/Vector3)

The starting point of the [Ray](/classes/2.4/Ray)

### direction : [Vector3](/classes/2.4/Vector3)

The vector describing the direction of the [Ray](/classes/2.4/Ray)

### length : number



## Methods

### intersectsBoxMinMaxundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### intersectsBoxundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### intersectsSphereundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### intersectsTriangleundefined &rarr; [IntersectionInfo](/classes/2.4/IntersectionInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### intersectsPlaneundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### intersectionSegmentundefined &rarr; number

Intersection test between the ray and a given segment whithin a given tolerance (threshold)

@return the distance from the ray origin to the intersection point if there's intersection, or -1 if there's no intersection

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateNewundefined &rarr; [Ray](/classes/2.4/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateNewFromToundefined &rarr; [Ray](/classes/2.4/Ray)

Function will create a new transformed ray starting from origin and ending at the end point. [Ray](/classes/2.4/Ray)'s length will be set, and ray will be

transformed to the given world matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static Transformundefined &rarr; [Ray](/classes/2.4/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
