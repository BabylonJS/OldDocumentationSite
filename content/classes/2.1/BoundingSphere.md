---
ID_PAGE: 25203
PG_TITLE: BoundingSphere
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---

Create a bounding sphere for the given mesh
##new [BoundingSphere](/classes/BoundingSphere)(minimum, maximum)




The [BoundingSphere](/classes/BoundingSphere) constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/Vector3) | The minimum of the sphere
 | maximum | [Vector3](/classes/Vector3) | The maximum of the sphere
---

##Members

###minimum : [Vector3](/classes/Vector3)





The minimum size of the bounding sphere




###maximum : [Vector3](/classes/Vector3)





The minimum of the bounding sphere




###center : [Vector3](/classes/Vector3)





The center of the bounding sphere




###radius : number





The radius of the bounding sphere




###centerWorld : [Vector3](/classes/Vector3)








###radiusWorld : number



















##Methods

###isInFrustum(frustumPlanes) &rarr; boolean
Check if the boundingSphere is in frustum







####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/Plane)[] | the frustum planes
---

###intersectsPoint(point) &rarr; boolean
Check if this bounding sphere intersect the point given in parameter







####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/Vector3) | The point
---

###static Intersects(sphere0, sphere1) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | sphere0 | [BoundingSphere](/classes/BoundingSphere) | The first sphere
 | sphere1 | [BoundingSphere](/classes/BoundingSphere) | The second sphere
---
