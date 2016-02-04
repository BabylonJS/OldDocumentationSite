---
ID_PAGE: 25271
PG_TITLE: SubMesh
PG_VERSION: 2.1
TAGS:
    - Mesh
---
## Description

class [SubMesh](/classes/2.3/SubMesh)



## Constructor

##  new [SubMesh](/classes/2.3/SubMesh)(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number |   The index of the material to use (this index is used to find the correct material Inside the subMaterials collection of a multi-material)
 | verticesStart | number |   
 | verticesCount | number |   The count of vertices used
 | indexStart | any |   Index of the first indice to use
 | indexCount | number |   The indices count
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   @param mesh
optional | renderingMesh | [Mesh](/classes/2.3/Mesh) |   If defined, is used instead of the mesh parameter.
## Members

### materialIndex : number



### verticesStart : number



### verticesCount : number



### indexStart : any



### indexCount : number



### linesIndexCount : number



### IsGlobal : boolean



## Methods

### getBoundingInfo() &rarr; [BoundingInfo](/classes/2.3/BoundingInfo)


### getMesh() &rarr; [AbstractMesh](/classes/2.3/AbstractMesh)


### getRenderingMesh() &rarr; [Mesh](/classes/2.3/Mesh)


### getMaterial() &rarr; [Material](/classes/2.3/Material)


### refreshBoundingInfo() &rarr; void


### updateBoundingInfo(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.3/Matrix) |   @param world

### isInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.3/Plane)[] |   @param frustumPlanes

### render(enableAlphaMode) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | enableAlphaMode | boolean |  

### getLinesIndexBuffer(indices, engine) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] |   @param indices
 | engine | any |   @param engine
### canIntersects(ray) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.3/Ray) |   The ray

### intersects(ray, positions, indices, fastCheck) &rarr; [IntersectionInfo](/classes/2.3/IntersectionInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.3/Ray) |   The ray
 | positions | [Vector3](/classes/2.3/Vector3)[] |   @param positions
 | indices | number[] |   @param indices
### clone(newMesh, newRenderingMesh) &rarr; [SubMesh](/classes/2.3/SubMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   @param newMesh
optional | newRenderingMesh | [Mesh](/classes/2.3/Mesh) |   @param newRenderingMesh
### dispose() &rarr; void


### static  CreateFromIndices(materialIndex, startIndex, indexCount, mesh, renderingMesh) &rarr; [SubMesh](/classes/2.3/SubMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number |   The index of the material to use (this index is used to find the correct material Inside the subMaterials collection of a multi-material)
 | startIndex | number |   Index of the first indice to use
 | indexCount | number |   The indices count
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   @param mesh
