---
ID_PAGE: 25254
PG_TITLE: Curve3
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Curve3](/classes/2.4/Curve3)



## Constructor

## new [Curve3](/classes/2.4/Curve3)(points)

A [Curve3](/classes/2.4/Curve3) object is a logical object, so not a mesh, to handle curves in the 3D geometric space.

A [Curve3](/classes/2.4/Curve3) is designed from a series of successive [Vector3](/classes/2.4/Vector3).

Tuto : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#curve3-object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector3](/classes/2.4/Vector3)[] |    

## Methods

### static CreateQuadraticBezierundefined &rarr; [Curve3](/classes/2.4/Curve3)

Returns a [Curve3](/classes/2.4/Curve3) object along a Quadratic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#quadratic-bezier-curve

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateCubicBezierundefined &rarr; [Curve3](/classes/2.4/Curve3)

Returns a [Curve3](/classes/2.4/Curve3) object along a Cubic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#cubic-bezier-curve

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateHermiteSplineundefined &rarr; [Curve3](/classes/2.4/Curve3)

Returns a [Curve3](/classes/2.4/Curve3) object along a Hermite Spline curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#hermite-spline

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getPointsundefined &rarr; [Vector3](/classes/2.4/Vector3)[]

Returns the [Curve3](/classes/2.4/Curve3) stored array of successive [Vector3](/classes/2.4/Vector3)
### lengthundefined &rarr; number

Returns the computed length (float) of the curve.
### continueundefined &rarr; [Curve3](/classes/2.4/Curve3)

Returns a new instance of [Curve3](/classes/2.4/Curve3) object : var curve = curveA.continue(curveB);

This new [Curve3](/classes/2.4/Curve3) is built by translating and sticking the curveB at the end of the curveA.

curveA and curveB keep unchanged.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
