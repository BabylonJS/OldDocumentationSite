---
ID_PAGE: 25194
PG_TITLE: CollisionCoordinatorWorker
PG_VERSION: 2.1
TAGS:
    - Collision
---
##new [CollisionCoordinatorWorker](/classes/CollisionCoordinatorWorker)()


##Members

###static SerializeMesh : (mesh: [AbstractMesh](/classes/AbstractMesh)) =&gt; SerializedMesh


###static SerializeGeometry : (geometry: [Geometry](/classes/Geometry)) =&gt; SerializedGeometry


###onMeshUpdated : (mesh: [AbstractMesh](/classes/AbstractMesh)) =&gt; void


###onGeometryUpdated : (geometry: [Geometry](/classes/Geometry)) =&gt; void




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

###onGeometryDeleted(geometry) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/Geometry) | 
---
