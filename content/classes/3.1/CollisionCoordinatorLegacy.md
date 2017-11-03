---
ID_PAGE: 25195
PG_TITLE: CollisionCoordinatorLegacy
PG_VERSION: 2.1
TAGS:
    - Collision
---
## Description

class [CollisionCoordinatorLegacy](/classes/3.1/CollisionCoordinatorLegacy)



## Methods

### getNewPosition(position, displacement, collider, maximumRetry, excludedMesh, onNewPosition, collisionIndex) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/3.1/Vector3) | 
 | displacement | [Vector3](/classes/3.1/Vector3) | 
 | collider | [Collider](/classes/3.1/Collider) | 
 | maximumRetry | number | 
 | excludedMesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | onNewPosition | (collisionIndex: number, newPosition: [Vector3](/classes/3.1/Vector3), collidedMesh: Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;) =&gt; void | 
### init(scene) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 

### destroy() &rarr; void


### onMeshAdded(mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### onMeshUpdated(mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### onMeshRemoved(mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### onGeometryAdded(geometry) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/3.1/Geometry) | 

### onGeometryUpdated(geometry) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/3.1/Geometry) | 

### onGeometryDeleted(geometry) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/3.1/Geometry) | 

