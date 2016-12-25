---
ID_PAGE: 25254
PG_TITLE: Curve3
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Curve3](/classes/2.5/Curve3)



## Constructor

## new [Curve3](/classes/2.5/Curve3)(points)

A [Curve3](/classes/2.5/Curve3) object is a logical object, so not a mesh, to handle curves in the 3D geometric space.

A [Curve3](/classes/2.5/Curve3) is designed from a series of successive [Vector3](/classes/2.5/Vector3).

Tuto : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#curve3-object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector3](/classes/2.5/Vector3)[] |     

## Methods

### static CreateQuadraticBezier(v0, v1, v2, nbPoints) &rarr; [Curve3](/classes/2.5/Curve3)

Returns a [Curve3](/classes/2.5/Curve3) object along a Quadratic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#quadratic-bezier-curve

#### Parameters
 | Name | Type | Description
---|---|---|---
 | v0 | [Vector3](/classes/2.5/Vector3) |  ([Vector3](/classes/2.5/Vector3)) the origin point of the Quadratic Bezier  ([Vector3](/classes/2.5/Vector3)) the origin point of the Cubic Bezier   
 | v1 | [Vector3](/classes/2.5/Vector3) |  ([Vector3](/classes/2.5/Vector3)) the control point  ([Vector3](/classes/2.5/Vector3)) the first control point   
 | v2 | [Vector3](/classes/2.5/Vector3) |  ([Vector3](/classes/2.5/Vector3)) the end point of the Quadratic Bezier  ([Vector3](/classes/2.5/Vector3)) the second control point   
### static CreateCubicBezier(v0, v1, v2, v3, nbPoints) &rarr; [Curve3](/classes/2.5/Curve3)

Returns a [Curve3](/classes/2.5/Curve3) object along a Cubic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#cubic-bezier-curve

#### Parameters
 | Name | Type | Description
---|---|---|---
 | v0 | [Vector3](/classes/2.5/Vector3) |  ([Vector3](/classes/2.5/Vector3)) the origin point of the Cubic Bezier  ([Vector3](/classes/2.5/Vector3)) the origin point of the Cubic Bezier   
 | v1 | [Vector3](/classes/2.5/Vector3) |  ([Vector3](/classes/2.5/Vector3)) the first control point  ([Vector3](/classes/2.5/Vector3)) the first control point   
 | v2 | [Vector3](/classes/2.5/Vector3) |  ([Vector3](/classes/2.5/Vector3)) the second control point  ([Vector3](/classes/2.5/Vector3)) the second control point   
 | v3 | [Vector3](/classes/2.5/Vector3) |  ([Vector3](/classes/2.5/Vector3)) the end point of the Cubic Bezier  ([Vector3](/classes/2.5/Vector3)) the end point of the Cubic Bezier   
### static CreateHermiteSpline(p1, t1, p2, t2, nbPoints) &rarr; [Curve3](/classes/2.5/Curve3)

Returns a [Curve3](/classes/2.5/Curve3) object along a Hermite Spline curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#hermite-spline

#### Parameters
 | Name | Type | Description
---|---|---|---
 | p1 | [Vector3](/classes/2.5/Vector3) |  ([Vector3](/classes/2.5/Vector3)) the origin point of the Hermite Spline  ([Vector3](/classes/2.5/Vector3)) the origin point of the Hermite Spline   
 | t1 | [Vector3](/classes/2.5/Vector3) |  ([Vector3](/classes/2.5/Vector3)) the tangent vector at the origin point  ([Vector3](/classes/2.5/Vector3)) the tangent vector at the origin point   
 | p2 | [Vector3](/classes/2.5/Vector3) |  ([Vector3](/classes/2.5/Vector3)) the end point of the Hermite Spline  ([Vector3](/classes/2.5/Vector3)) the end point of the Hermite Spline   
 | t2 | [Vector3](/classes/2.5/Vector3) |  ([Vector3](/classes/2.5/Vector3)) the tangent vector at the end point  ([Vector3](/classes/2.5/Vector3)) the tangent vector at the end point   
### getPoints() &rarr; [Vector3](/classes/2.5/Vector3)[]

Returns the [Curve3](/classes/2.5/Curve3) stored array of successive [Vector3](/classes/2.5/Vector3)
### length() &rarr; number

Returns the computed length (float) of the curve.
### continue(curve) &rarr; [Curve3](/classes/2.5/Curve3)

Returns a new instance of [Curve3](/classes/2.5/Curve3) object : var curve = curveA.continue(curveB);

This new [Curve3](/classes/2.5/Curve3) is built by translating and sticking the curveB at the end of the curveA.

curveA and curveB keep unchanged.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | curve | [Curve3](/classes/2.5/Curve3) |     

