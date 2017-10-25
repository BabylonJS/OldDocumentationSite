---
ID_PAGE: 25194
PG_TITLE: CollisionCoordinatorWorker
PG_VERSION: 2.1
TAGS:
    - Collision
---
## Description

class [CollisionCoordinatorWorker](/classes/3.1/CollisionCoordinatorWorker)



## Constructor

## new [CollisionCoordinatorWorker](/classes/3.1/CollisionCoordinatorWorker)()


## Members

### static SerializeMesh : (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; SerializedMesh



### static SerializeGeometry : (geometry: [Geometry](/classes/3.1/Geometry)) =&gt; SerializedGeometry



### onMeshUpdated : (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; void



### onGeometryUpdated : (geometry: [Geometry](/classes/3.1/Geometry)) =&gt; void



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

### onGeometryDeleted(geometry) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/3.1/Geometry) | 

