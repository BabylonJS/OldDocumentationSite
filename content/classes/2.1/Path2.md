---
ID_PAGE: 25252
PG_TITLE: Path2
PG_VERSION: 2.1
---
##new [Path2](/classes/Path2)(x, y)




####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
---

##Members

###closed : boolean









##Methods

###addLineTo(x, y) &rarr; [Path2](/classes/Path2)



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
---

###addArcTo(midX, midY, endX, endY, numberOfSegments) &rarr; [Path2](/classes/Path2)



####Parameters
 | Name | Type | Description
---|---|---|---
 | midX | number | 
 | midY | number | 
 | endX | number | 
 | endY | number | 
optional | numberOfSegments | number | 
---

###close() &rarr; [Path2](/classes/Path2)




###length() &rarr; number




###getPoints() &rarr; [Vector2](/classes/Vector2)[]




###getPointAtLengthPosition(normalizedLengthPosition) &rarr; [Vector2](/classes/Vector2)



####Parameters
 | Name | Type | Description
---|---|---|---
 | normalizedLengthPosition | number | 
---

###static StartingAt(x, y) &rarr; [Path2](/classes/Path2)

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
---
