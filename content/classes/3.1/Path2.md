---
ID_PAGE: 25252
PG_TITLE: Path2
PG_VERSION: 2.1
---
## Description

class [Path2](/classes/3.1/Path2)



## Constructor

## new [Path2](/classes/3.1/Path2)(x, y)

Creates a [Path2](/classes/3.1/Path2) object from the starting 2D coordinates x and y.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
## Members

### closed : boolean


## Methods

### addLineTo(x, y) &rarr; [Path2](/classes/3.1/Path2)

Adds a new segment until the passed coordinates (x, y) to the current [Path2](/classes/3.1/Path2).

Returns the updated [Path2](/classes/3.1/Path2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
### addArcTo(midX, midY, endX, endY, numberOfSegments) &rarr; [Path2](/classes/3.1/Path2)

Adds _numberOfSegments_ segments according to the arc definition (middle point coordinates, end point coordinates, the arc start point being the current [Path2](/classes/3.1/Path2) last point) to the current [Path2](/classes/3.1/Path2).

Returns the updated [Path2](/classes/3.1/Path2).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | midX | number | 
 | midY | number | 
 | endX | number | 
 | endY | number | 
### close() &rarr; [Path2](/classes/3.1/Path2)

Closes the [Path2](/classes/3.1/Path2).

Returns the [Path2](/classes/3.1/Path2).
### length() &rarr; number

Returns the [Path2](/classes/3.1/Path2) total length (float).
### getPoints() &rarr; [Vector2](/classes/3.1/Vector2)[]

Returns the [Path2](/classes/3.1/Path2) internal array of points.
### getPointAtLengthPosition(normalizedLengthPosition) &rarr; [Vector2](/classes/3.1/Vector2)

Returns a new [Vector2](/classes/3.1/Vector2) located at a percentage of the [Path2](/classes/3.1/Path2) total length on this path.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | normalizedLengthPosition | number | 

### static StartingAt(x, y) &rarr; [Path2](/classes/3.1/Path2)

Returns a new [Path2](/classes/3.1/Path2) starting at the coordinates (x, y).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
