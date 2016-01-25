---
ID_PAGE: 25271
PG_TITLE: SubMesh
PG_VERSION: 2.1
TAGS:
    - Mesh
---

Create a new [SubMesh](/classes/SubMesh)
##new [SubMesh](/classes/SubMesh)(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox)




 [SubMesh](/classes/SubMesh) constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number | The index of the material to use (this index is used to find the correct material Inside the subMaterials collection of a multi-material)
 | verticesStart | number | 
 | verticesCount | number | The count of vertices used
 | indexStart | any | Index of the first indice to use
 | indexCount | number | indices count
 | mesh | [AbstractMesh](/classes/AbstractMesh) | The parent mesh
optional | renderingMesh | [Mesh](/classes/Mesh) | @param renderingMesh
optional | createBoundingBox | boolean | @param createBoundingBox
---

##Members

###materialIndex : number





The material Index




###verticesStart : number





The vertice sStart




###verticesCount : number





The vertices Count




###indexStart : any





The index Start




###indexCount : number





The index Count




###linesIndexCount : number





The lines Index Count















##Methods

###getBoundingInfo() &rarr; [BoundingInfo](/classes/BoundingInfo)
Get bounding info








###getMesh() &rarr; [AbstractMesh](/classes/AbstractMesh)
Get mesh








###getRenderingMesh() &rarr; [Mesh](/classes/Mesh)
Get rendering mesh








###getMaterial() &rarr; [Material](/classes/Material)
Get material








###refreshBoundingInfo() &rarr; void
Refresh bounding info








###updateBoundingInfo(world) &rarr; void
Update bounding info







####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/Matrix) | @param world
---

###isInFrustum(frustumPlanes) &rarr; boolean
Return true if it is frustum







####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/Plane)[] | @param frustumPlanes
---

###render() &rarr; void
The render








###getLinesIndexBuffer(indices, engine) &rarr; WebGLBuffer
Get lines index buffer







####Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] | @param indices
 | engine | any | @param engine
---

###canIntersects(ray) &rarr; boolean
Can Intersects







####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/Ray) | The ray
---

###intersects(ray, positions, indices, fastCheck) &rarr; [IntersectionInfo](/classes/IntersectionInfo)
Intersects







####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/Ray) | The ray
 | positions | [Vector3](/classes/Vector3)[] | @param positions
 | indices | number[] | @param indices
optional | fastCheck | boolean | @param fastCheck
---

###clone(newMesh, newRenderingMesh) &rarr; [SubMesh](/classes/SubMesh)
Create a clone of the subMesh







####Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](/classes/AbstractMesh) | @param newMesh
optional | newRenderingMesh | [Mesh](/classes/Mesh) | @param newRenderingMesh
---

###dispose() &rarr; void
Dispose








###static CreateFromIndices(materialIndex, startIndex, indexCount, mesh, renderingMesh) &rarr; [SubMesh](/classes/SubMesh)

####Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number | The index of the material to use (this index is used to find the correct material Inside the subMaterials collection of a multi-material)
 | startIndex | number | Index of the first indice to use
 | indexCount | number | The indices count
 | mesh | [AbstractMesh](/classes/AbstractMesh) | @param mesh
optional | renderingMesh | [Mesh](/classes/Mesh) | If defined, is used instead of the mesh parameter.
---
