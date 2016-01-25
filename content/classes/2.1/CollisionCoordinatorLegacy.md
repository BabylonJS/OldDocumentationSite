---
ID_PAGE: 25195
PG_TITLE: CollisionCoordinatorLegacy
PG_VERSION: 2.1
TAGS:
    - Collision
---



##Methods

###getNewPosition(position, velocity, collider, maximumRetry, excludedMesh, onNewPosition, collisionIndex) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/Vector3) | 
 | velocity | [Vector3](/classes/Vector3) | 
 | collider | [Collider](/classes/Collider) | 
 | maximumRetry | number | 
 | excludedMesh | [AbstractMesh](/classes/AbstractMesh) | 
 | onNewPosition | (collisionIndex: number, newPosition: [Vector3](/classes/Vector3), collidedMesh?: [AbstractMesh](/classes/AbstractMesh)) =&gt; void | 
 | collisionIndex | number | 
---

###init(scene) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | 
---

###destroy() &rarr; void


###onMeshAdded(mesh) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/AbstractMesh) | 
---

###onMeshUpdated(mesh) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/AbstractMesh) | 
---

###onMeshRemoved(mesh) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/AbstractMesh) | 
---

###onGeometryAdded(geometry) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/Geometry) | 
---

###onGeometryUpdated(geometry) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/Geometry) | 
---

###onGeometryDeleted(geometry) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/Geometry) | 
---
