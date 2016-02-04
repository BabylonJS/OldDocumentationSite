---
ID_PAGE: 25277
PG_TITLE: OimoJSPlugin
PG_VERSION: 2.1
TAGS:
    - Plugins
---
## Description

class [OimoJSPlugin](/classes/2.3/OimoJSPlugin)



## Members

### name : string



### updateBodyPosition : (mesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void

Update the body position according to the mesh position

@param mesh

## Methods

### initialize(iterations) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | iterations | number |   Unused parameter

### setGravity(gravity) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/2.3/Vector3) |   The given gravity

### getGravity() &rarr; [Vector3](/classes/2.3/Vector3)


### registerMesh(mesh, impostor, options) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   The given mesh
 | impostor | number |   The corresponding impostor
 | options | PhysicsBodyCreationOptions |   @param options
### registerMeshesAsCompound(parts, options) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parts | PhysicsCompoundBodyPart[] |   The array of object build this way {mesh: [Mesh](/classes/2.3/Mesh), impostor: number}
 | options | PhysicsBodyCreationOptions |   @param options
### unregisterMesh(mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   The given mesh

### applyImpulse(mesh, force, contactPoint) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   The given mesh
 | force | [Vector3](/classes/2.3/Vector3) |   The force to apply to the mesh
 | contactPoint | [Vector3](/classes/2.3/Vector3) |   The point of the mesh where the force has to be applied
### createLink(mesh1, mesh2, pivot1, pivot2, options) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh1 | [AbstractMesh](/classes/2.3/AbstractMesh) |   The first mesh to link
 | mesh2 | [AbstractMesh](/classes/2.3/AbstractMesh) |   The second mesh to link
 | pivot1 | [Vector3](/classes/2.3/Vector3) |   The relative position of the first mesh where the link has to be applied
 | pivot2 | [Vector3](/classes/2.3/Vector3) |   The relative position of the second mesh where the link has to be applied
### dispose() &rarr; void


### isSupported() &rarr; boolean


### getWorldObject() &rarr; any


### getPhysicsBodyOfMesh(mesh) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   The given mesh

### runOneStep(time) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | time | number |   The given time

