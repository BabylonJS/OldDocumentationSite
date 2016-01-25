---
ID_PAGE: 25254
PG_TITLE: Curve3
PG_VERSION: 2.1
TAGS:
    - Objects
---
##new [Curve3](/classes/Curve3)(points)

####Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector3](/classes/Vector3)[] | 
---



##Methods

###static CreateQuadraticBezier(v0, v1, v2, nbPoints) &rarr; [Curve3](/classes/Curve3)

####Parameters
 | Name | Type | Description
---|---|---|---
 | v0 | [Vector3](/classes/Vector3) | 
 | v1 | [Vector3](/classes/Vector3) | 
 | v2 | [Vector3](/classes/Vector3) | 
 | nbPoints | number | 
---

###static CreateCubicBezier(v0, v1, v2, v3, nbPoints) &rarr; [Curve3](/classes/Curve3)

####Parameters
 | Name | Type | Description
---|---|---|---
 | v0 | [Vector3](/classes/Vector3) | 
 | v1 | [Vector3](/classes/Vector3) | 
 | v2 | [Vector3](/classes/Vector3) | 
 | v3 | [Vector3](/classes/Vector3) | 
 | nbPoints | number | 
---

###static CreateHermiteSpline(p1, t1, p2, t2, nbPoints) &rarr; [Curve3](/classes/Curve3)

####Parameters
 | Name | Type | Description
---|---|---|---
 | p1 | [Vector3](/classes/Vector3) | 
 | t1 | [Vector3](/classes/Vector3) | 
 | p2 | [Vector3](/classes/Vector3) | 
 | t2 | [Vector3](/classes/Vector3) | 
 | nbPoints | number | 
---

###getPoints() &rarr; [Vector3](/classes/Vector3)[]


###length() &rarr; number


###continue(curve) &rarr; [Curve3](/classes/Curve3)

####Parameters
 | Name | Type | Description
---|---|---|---
 | curve | [Curve3](/classes/Curve3) | 
---
