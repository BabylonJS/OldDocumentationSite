---
ID_PAGE: 25258
PG_TITLE: CSG
PG_VERSION: 2.1
---

The [CSG](/classes/CSG) class







##Members

###matrix : [Matrix](/classes/Matrix)





The matrix




###position : [Vector3](/classes/Vector3)





The position




###rotation : [Vector3](/classes/Vector3)





The rotation




###rotationQuaternion : [Quaternion](/classes/Quaternion)


###scaling : [Vector3](/classes/Vector3)





The scaling















##Methods

###static FromMesh(mesh) &rarr; [CSG](/classes/CSG)
Convert [Mesh](/classes/Mesh) to [CSG](/classes/CSG)







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/Mesh) | @param mesh
---

###clone() &rarr; [CSG](/classes/CSG)
Clone this [CSG](/classes/CSG)








###union(csg) &rarr; [CSG](/classes/CSG)
Union the [CSG](/classes/CSG)







####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/CSG) | using this [CSG](/classes/CSG)
---

###unionInPlace(csg) &rarr; void
Union in place







####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/CSG) | @param csg
---

###subtract(csg) &rarr; [CSG](/classes/CSG)
Subtract the [CSG](/classes/CSG)







####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/CSG) | using this [CSG](/classes/CSG)
---

###subtractInPlace(csg) &rarr; void
Subtract in place







####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/CSG) | @param csg
---

###intersect(csg) &rarr; [CSG](/classes/CSG)
Intersect first solid with the second







####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/CSG) | @param csg
---

###intersectInPlace(csg) &rarr; void
Intersect in place







####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/CSG) | @param csg
---

###inverse() &rarr; [CSG](/classes/CSG)
Return a new [CSG](/classes/CSG) solid with solid and empty space swtiched. This solid is not modified.








###inverseInPlace() &rarr; void
Inverse in place








###copyTransformAttributes(csg) &rarr; [CSG](/classes/CSG)
This is used to keep meshes transformations so they can be restored
when we build back a [Mesh](/classes/Mesh)
NB : All [CSG](/classes/CSG) operations are performed in world coordinates







####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/CSG) | @param csg
---

###buildMeshGeometry(name, scene, keepSubMeshes) &rarr; [Mesh](/classes/Mesh)
Build raw mesh from [CSG](/classes/CSG)
Coordinates here are in world space







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](/classes/Scene) | @param scene
 | keepSubMeshes | boolean | @param keepSubMeshes
---

###toMesh(name, material, scene, keepSubMeshes) &rarr; [Mesh](/classes/Mesh)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | material | [Material](/classes/Material) | @param material
 | scene | [Scene](/classes/Scene) | @param scene
 | keepSubMeshes | boolean | @param keepSubMeshes
---
