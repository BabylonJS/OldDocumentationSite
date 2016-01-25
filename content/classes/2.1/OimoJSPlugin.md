---
ID_PAGE: 25277
PG_TITLE: OimoJSPlugin
PG_VERSION: 2.1
TAGS:
    - Plugins
---







##Members

###updateBodyPosition : (mesh: [AbstractMesh](/classes/AbstractMesh)) =&gt; void


Update the body position according to the mesh position

@param mesh



##Methods

###initialize(iterations) &rarr; void
Initializes the OIMO engine







####Parameters
 | Name | Type | Description
---|---|---|---
optional | iterations | number | Unused parameter
---

###setGravity(gravity) &rarr; void
Sets the gravity







####Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/Vector3) | The given gravity
---

###registerMesh(mesh, impostor, options) &rarr; any
Registers a mesh







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/AbstractMesh) | The given mesh to register
 | impostor | number | The corresponding impostor
 | options | PhysicsBodyCreationOptions | An object build this way {mass: number, friction: number, restitution: number}
---

###registerMeshesAsCompound(parts, options) &rarr; any
Register meshes as compound







####Parameters
 | Name | Type | Description
---|---|---|---
 | parts | PhysicsCompoundBodyPart[] | The array of object build this way {mesh: [Mesh](/classes/Mesh), impostor: number}
 | options | PhysicsBodyCreationOptions | An object build this way {mass: number, friction: number, restitution: number}
---

###unregisterMesh(mesh) &rarr; void
Removes the mesh from the world







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/AbstractMesh) | The given mesh to remove
---

###applyImpulse(mesh, force, contactPoint) &rarr; void
Applies a force to the mesh at a contact point







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/AbstractMesh) | The given mesh
 | force | [Vector3](/classes/Vector3) | The force to apply to the mesh
 | contactPoint | [Vector3](/classes/Vector3) | The point of the mesh where the force has to be applied
---

###createLink(mesh1, mesh2, pivot1, pivot2, options) &rarr; boolean
Creates a physical link between two meshes







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh1 | [AbstractMesh](/classes/AbstractMesh) | The first mesh to link
 | mesh2 | [AbstractMesh](/classes/AbstractMesh) | The second mesh to link
 | pivot1 | [Vector3](/classes/Vector3) | The relative position of the first mesh where the link has to be applied
 | pivot2 | [Vector3](/classes/Vector3) | The relative position of the second mesh where the link has to be applied
optional | options | any | @param options
---

###dispose() &rarr; void
Destroys the engine object








###isSupported() &rarr; boolean
Tests if the plugin is usable in the current environement








###runOneStep(time) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | time | number | The given time
---
