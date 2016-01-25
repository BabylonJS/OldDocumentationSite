---
ID_PAGE: 25246
PG_TITLE: Ray
PG_VERSION: 2.1
---
##new [Ray](/classes/Ray)(origin, direction, length)




Defines a [Ray](/classes/Ray)






####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](/classes/Vector3) | The initial starting point of the [Ray](/classes/Ray)
 | direction | [Vector3](/classes/Vector3) | The initial vector describing the direction of the [Ray](/classes/Ray)
optional | length | number | 
---

##Members

###origin : [Vector3](/classes/Vector3)





The starting point of the [Ray](/classes/Ray)




###direction : [Vector3](/classes/Vector3)





The vector describing the direction of the [Ray](/classes/Ray)







###length : number














##Methods

###intersectsBoxMinMax(minimum, maximum) &rarr; boolean
Tests if the ray intersects with the box defined by minimum and maximum







####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/Vector3) | The minimum vector defining the box
 | maximum | [Vector3](/classes/Vector3) | The maximum vector defining the box
---

###intersectsBox(box) &rarr; boolean
Tests if the ray intersects with the given box







####Parameters
 | Name | Type | Description
---|---|---|---
 | box | [BoundingBox](/classes/BoundingBox) | The box to test with
---

###intersectsSphere(sphere) &rarr; boolean
Tests if the ray intersects with the given [Sphere](/classes/Sphere)







####Parameters
 | Name | Type | Description
---|---|---|---
 | sphere | any | The sphere to test with
---

###intersectsTriangle(vertex0, vertex1, vertex2) &rarr; [IntersectionInfo](/classes/IntersectionInfo)
Tests if the ray intersects with the given triangle defined by the three vectors







####Parameters
 | Name | Type | Description
---|---|---|---
 | vertex0 | [Vector3](/classes/Vector3) | The first vector defining the triangle
 | vertex1 | [Vector3](/classes/Vector3) | The second vector defining the triangle
 | vertex2 | [Vector3](/classes/Vector3) | The third vector defining the triangle
---

###static CreateNew(x, y, viewportWidth, viewportHeight, world, view, projection) &rarr; [Ray](/classes/Ray)
Creates new [Ray](/classes/Ray)







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | @param x
 | y | number | @param y
 | viewportWidth | number | @param viewportWidth
 | viewportHeight | number | @param viewportHeight
 | world | [Matrix](/classes/Matrix) | @param world
 | view | [Matrix](/classes/Matrix) | @param view
 | projection | [Matrix](/classes/Matrix) | @param projection
---

###static CreateNewFromTo(origin, end, world) &rarr; [Ray](/classes/Ray)
Function will create a new transformed ray starting from origin and ending at the end point. [Ray](/classes/Ray)'s length will be set, and ray will be
transformed to the given world matrix.

####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](/classes/Vector3) | The origin point
 | end | [Vector3](/classes/Vector3) | The end point
optional | world | [Matrix](/classes/Matrix) | a matrix to transform the ray to. Default is the identity matrix.
---

###static Transform(ray, matrix) &rarr; [Ray](/classes/Ray)

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/Ray) | The given ray
 | matrix | [Matrix](/classes/Matrix) | The given matrix to apply
---
