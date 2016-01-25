---
ID_PAGE: 25243
PG_TITLE: Plane
PG_VERSION: 2.1
TAGS:
    - Geometry
---
##new [Plane](/classes/Plane)(a, b, c, d)




The plane constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | a | number | 
 | b | number | 
 | c | number | 
 | d | number | 
---

##Members

###normal : [Vector3](/classes/Vector3)


###d : number




##Methods

###asArray() &rarr; number[]


###clone() &rarr; [Plane](/classes/Plane)


###normalize() &rarr; [Plane](/classes/Plane)


###transform(transformation) &rarr; [Plane](/classes/Plane)

####Parameters
 | Name | Type | Description
---|---|---|---
 | transformation | [Matrix](/classes/Matrix) | 
---

###dotCoordinate(point) &rarr; number

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | any | 
---

###copyFromPoints(point1, point2, point3) &rarr; [Plane](/classes/Plane)

####Parameters
 | Name | Type | Description
---|---|---|---
 | point1 | [Vector3](/classes/Vector3) | 
 | point2 | [Vector3](/classes/Vector3) | 
 | point3 | [Vector3](/classes/Vector3) | 
---

###isFrontFacingTo(direction, epsilon) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | direction | [Vector3](/classes/Vector3) | 
 | epsilon | number | 
---

###signedDistanceTo(point) &rarr; number

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/Vector3) | 
---

###static FromArray(array) &rarr; [Plane](/classes/Plane)

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
---

###static FromPoints(point1, point2, point3) &rarr; [Plane](/classes/Plane)

####Parameters
 | Name | Type | Description
---|---|---|---
 | point1 | any | 
 | point2 | any | 
 | point3 | any | 
---

###static FromPositionAndNormal(origin, normal) &rarr; [Plane](/classes/Plane)

####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](/classes/Vector3) | 
 | normal | [Vector3](/classes/Vector3) | 
---

###static SignedDistanceToPlaneFromPositionAndNormal(origin, normal, point) &rarr; number

####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](/classes/Vector3) | 
 | normal | [Vector3](/classes/Vector3) | 
 | point | [Vector3](/classes/Vector3) | 
---
