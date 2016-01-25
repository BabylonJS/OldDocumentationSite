---
ID_PAGE: 25147
PG_TITLE: Mesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---

The [Mesh](/classes/Mesh) class extends [AbstractMesh](/classes/AbstractMesh)
##new [Mesh](/classes/Mesh)(name, scene, parent, source, doNotCloneChildren)

@constructor
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; When false, achieved by calling a clone(), also passing False.
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; This will make creation of children, recursive.
####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | @param name
&nbsp;| scene | [Scene](/classes/Scene) | The scene where the mesh is
optional | parent | [Node](/classes/Node) | 
optional | source | [Mesh](/classes/Mesh) | 
optional | doNotCloneChildren | boolean | 
---

##Extends
&nbsp;[AbstractMesh](/classes/AbstractMesh)
##Members

###static FRONTSIDE : number


###static BACKSIDE : number


###static DOUBLESIDE : number


###static DEFAULTSIDE : number


###static NO_CAP : number


###static CAP_START : number


###static CAP_END : number


###static CAP_ALL : number


###delayLoadState : number





Delay load mesh state




###instances : [InstancedMesh](/classes/InstancedMesh)[]





Instances [Mesh](/classes/Mesh)




###delayLoadingFile : string





Delay load mesh file







###onLODLevelSelection : (distance: number, mesh: [Mesh](/classes/Mesh), selectedLevel: [Mesh](/classes/Mesh)) =&gt; void


###hasLODLevels : boolean






###geometry : [Geometry](/classes/Geometry)






###isBlocked : boolean












###sideOrientation : number


###areNormalsFrozen : boolean




##Methods

###addLODLevel(distance, mesh) &rarr; [Mesh](/classes/Mesh)
Add a mesh as LOD level triggered at the given distance.
@return {BABYLON.Mesh} this mesh (for chaining)

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| distance | number | 
&nbsp;| mesh | [Mesh](/classes/Mesh) | 
---

###getLODLevelAtDistance(distance) &rarr; [Mesh](/classes/Mesh)

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| distance | number | 
---

###removeLODLevel(mesh) &rarr; [Mesh](/classes/Mesh)
Remove a mesh from the LOD array
@return {BABYLON.Mesh} this mesh (for chaining)

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| mesh | [Mesh](/classes/Mesh) | 
---

###getLOD(camera, boundingSphere) &rarr; [AbstractMesh](/classes/AbstractMesh)





####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| camera | [Camera](/classes/Camera) | 
optional | boundingSphere | [BoundingSphere](/classes/BoundingSphere) | 
---

###getTotalVertices() &rarr; number
Returns the total number of vertices in this mesh








###getVerticesData(kind, copyWhenShared) &rarr; number[]
Returns the data of a specific vertex buffer







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| kind | string | The kind of vertex buffer
optional | copyWhenShared | boolean | 
---

###getVertexBuffer(kind) &rarr; [VertexBuffer](/classes/VertexBuffer)
Get the vertex buffer







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| kind | any | The kind of vertex buffer (Defined in class [VertexBuffer](/classes/VertexBuffer))
---

###isVerticesDataPresent(kind) &rarr; boolean
Returns true if the kind vertex buffer given in parameter exists for this mesh, false otherwise







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| kind | string | The kind of vertex buffer
---

###getVerticesDataKinds() &rarr; string[]
Get vertices data kinds








###getTotalIndices() &rarr; number
Get the total indices








###getIndices(copyWhenShared) &rarr; number[]
Returns the indices of this mesh







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
optional | copyWhenShared | boolean | 
---

###isReady() &rarr; boolean
Returns true if this mesh is ready to be rendered, false otherwise.








###isDisposed() &rarr; boolean
Returns true if this mesh is disposed, false otherwise.








###freezeNormals() &rarr; void


###unfreezeNormals() &rarr; void


###refreshBoundingInfo() &rarr; void
Refresh this mesh bounding infos








###subdivide(count) &rarr; void
Subdivide this mesh by creating &quot;count&quot; submeshes stored in this.subMeshes







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| count | number | The number of subdivision
---

###setVerticesData(kind, data, updatable, stride) &rarr; void
Set the vertex buffer data of this mesh







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| kind | any | The kind of vertex buffer
&nbsp;| data | any | The new data of vertex buffer
optional | updatable | boolean | @param updatable
optional | stride | number | 
---

###updateVerticesData(kind, data, updateExtends, makeItUnique) &rarr; void
Update a specific kind of vertex buffer







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| kind | string | The kind of vertex buffer as defined in class Vertex Buffer
&nbsp;| data | number[] | The new data of vertex buffer
optional | updateExtends | boolean | @param updateExtends
optional | makeItUnique | boolean | @param makeItUnique
---

###updateVerticesDataDirectly(kind, data, offset, makeItUnique) &rarr; void
Update a specific kind of vertex buffer directly







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| kind | string | The kind of vertex buffer as defined in class Vertex Buffer
&nbsp;| data | Float32Array | The new data of vertex buffer
optional | offset | number | 
optional | makeItUnique | boolean | @param makeItUnique
---

###updateMeshPositions(positionFunction, computeNormals) &rarr; void

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| positionFunction | any | 
optional | computeNormals | boolean | 
---

###makeGeometryUnique() &rarr; void
Make geometry unique








###setIndices(indices, totalVertices) &rarr; void
Set the indices of this mesh







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| indices | number[] | @param indices
optional | totalVertices | number | 
---

###registerBeforeRender(func) &rarr; void
Set the callback function to call before starting a frame rendering







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| func | (mesh: [AbstractMesh](/classes/AbstractMesh)) =&gt; void | Callback function
---

###unregisterBeforeRender(func) &rarr; void
Unregister the callback function which the name is given in parameter







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| func | (mesh: [AbstractMesh](/classes/AbstractMesh)) =&gt; void | Callback function to delete
---

###registerAfterRender(func) &rarr; void
Set the callback function to call after starting a frame rendering







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| func | (mesh: [AbstractMesh](/classes/AbstractMesh)) =&gt; void | Callback function
---

###unregisterAfterRender(func) &rarr; void
Unregister the callback function which the name is given in parameter.







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| func | (mesh: [AbstractMesh](/classes/AbstractMesh)) =&gt; void | Callback function to delete
---

###render(subMesh) &rarr; void
Render the mesh







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| subMesh | [SubMesh](/classes/SubMesh) | The subMesh
---

###getEmittedParticleSystems() &rarr; [ParticleSystem](/classes/ParticleSystem)[]
Returns the list of particle system in which this mesh is the emitter.








###getHierarchyEmittedParticleSystems() &rarr; [ParticleSystem](/classes/ParticleSystem)[]
Returns a list of particle system. For all results, at least one descendant of this mesh is the emitter of it.








###getChildren() &rarr; [Node](/classes/Node)[]
Returns the list of children of this mesh.








###isInFrustum(frustumPlanes) &rarr; boolean
Returns true if this mesh is in the frustrum defined by the 6 planes given in parameters







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| frustumPlanes | [Plane](/classes/Plane)[] | [Frustum](/classes/Frustum) plan of the mesh
---

###setMaterialByID(id) &rarr; void
Set this mesh material within all material present in the scene.







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| id | string | The ID of the material this mesh should get
---

###getAnimatables() &rarr; IAnimatable[]
Returns an array containing the mesh material if it exists.








###bakeTransformIntoVertices(transform) &rarr; void
Apply the given transformation to this mesh







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| transform | [Matrix](/classes/Matrix) | The transform matrix
---

###clone(name, newParent, doNotCloneChildren) &rarr; [Mesh](/classes/Mesh)
Clone a mesh







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | Name of the mesh
optional | newParent | [Node](/classes/Node) | His parent
optional | doNotCloneChildren | boolean | True if you want to clone children, false if you don't want to.
---

###dispose(doNotRecurse) &rarr; void
Dispose a mesh







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | @param doNotRecurse
---

###applyDisplacementMap(url, minHeight, maxHeight, onSuccess) &rarr; void
Apply displacement map







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| url | string | The url
&nbsp;| minHeight | number | The minimum height
&nbsp;| maxHeight | number | The maximum height
optional | onSuccess | (mesh: [Mesh](/classes/Mesh)) =&gt; void | 
---

###applyDisplacementMapFromBuffer(buffer, heightMapWidth, heightMapHeight, minHeight, maxHeight) &rarr; void
Apply displacement map from the buffer







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| buffer | Uint8Array | The buffer
&nbsp;| heightMapWidth | number | The height map width
&nbsp;| heightMapHeight | number | The height map height
&nbsp;| minHeight | number | The minimum height
&nbsp;| maxHeight | number | The maximum height
---

###convertToFlatShadedMesh() &rarr; void
Updates normals and vertices to get a flat shading rendering.
Warning: This may imply adding vertices to the mesh in order to get exactly 3 vertices per face.








###createInstance(name) &rarr; [InstancedMesh](/classes/InstancedMesh)
Create a new instance of [InstanceMesh](/classes/InstanceMesh)







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The instance mesh name
---

###synchronizeInstances() &rarr; void
Synchronize the instances








###simplify(settings, parallelProcessing, simplificationType, successCallback) &rarr; void
Simplify the mesh according to the given array of settings.
Function will return immediately and will simplify async.

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| settings | Array&lt;ISimplificationSettings&gt; | a collection of simplification settings.
optional | parallelProcessing | boolean | should all levels calculate parallel or one after the other.
optional | simplificationType | [SimplificationType](/classes/SimplificationType) | 
optional | successCallback | (mesh?: [Mesh](/classes/Mesh), submeshIndex?: number) =&gt; void | optional success callback to be called after the simplification finished processing all settings.
---

###optimizeIndices(successCallback) &rarr; void
Optimization of the mesh's indices, in case a mesh has duplicated vertices.
The function will only reorder the indices and will not remove unused vertices to avoid problems with submeshes.
This should be used together with the simplification to avoid disappearing triangles.

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
optional | successCallback | (mesh?: [Mesh](/classes/Mesh)) =&gt; void | an optional success callback to be called after the optimization finished.
---

###static CreateRibbon(name, pathArray, closeArray, closePath, offset, scene, updatable, sideOrientation, ribbonInstance) &rarr; [Mesh](/classes/Mesh)

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | 
&nbsp;| pathArray | [Vector3](/classes/Vector3)[][] | 
&nbsp;| closeArray | boolean | 
&nbsp;| closePath | boolean | 
&nbsp;| offset | number | 
&nbsp;| scene | [Scene](/classes/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 
optional | ribbonInstance | [Mesh](/classes/Mesh) | 
---

###static CreateDisc(name, radius, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/Mesh)

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | 
&nbsp;| radius | number | 
&nbsp;| tessellation | number | 
&nbsp;| scene | [Scene](/classes/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 
---

###static CreateBox(name, size, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/Mesh)
Create a box with the given properties







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The name of the box
&nbsp;| size | number | The size of the box
&nbsp;| scene | [Scene](/classes/Scene) | The [Scene](/classes/Scene) contains the new [Box](/classes/Box)
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
optional | sideOrientation | number | 
---

###static CreateSphere(name, segments, diameter, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/Mesh)
Create a [Sphere](/classes/Sphere) with the given properties







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The name of the sphere
&nbsp;| segments | number | The segments of the sphere
&nbsp;| diameter | number | The diameter of the sphere
&nbsp;| scene | [Scene](/classes/Scene) | The scene contains the new sphere
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
optional | sideOrientation | number | 
---

###static CreateCylinder(name, height, diameterTop, diameterBottom, tessellation, subdivisions, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/Mesh)
Create a cylinder with the given properties







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The name of the cylinder
&nbsp;| height | number | The Height of the cylinder
&nbsp;| diameterTop | number | Diameter at top of the cylinder
&nbsp;| diameterBottom | number | Diameter at bottom of the cylinder
&nbsp;| tessellation | number | Number of vertex to create each cercle
&nbsp;| subdivisions | any | Subdivision of the cylinder
&nbsp;| scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | any | True if the vertices buffers'll be updated afterwards, false otherwise
optional | sideOrientation | number | 
---

###static CreateTorus(name, diameter, thickness, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/Mesh)
Create a [Torus](/classes/Torus) with the given properties







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The name of the [Torus](/classes/Torus)
&nbsp;| diameter | number | The diameter of the [Torus](/classes/Torus)
&nbsp;| thickness | number | The thickness of the [Torus](/classes/Torus)
&nbsp;| tessellation | number | The tessellation of the [Torus](/classes/Torus)
&nbsp;| scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
optional | sideOrientation | number | 
---

###static CreateTorusKnot(name, radius, tube, radialSegments, tubularSegments, p, q, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/Mesh)
Create a TorusKnut with the given properties







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The name of the TorusKnut
&nbsp;| radius | number | The radius of the TorusKnut
&nbsp;| tube | number | @param tube
&nbsp;| radialSegments | number | @param radialSegments
&nbsp;| tubularSegments | number | @param tubularSegments
&nbsp;| p | number | Describes up-and-down (P) winding numbers
&nbsp;| q | number | Describes around-the-center (Q) winding numbers
&nbsp;| scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
optional | sideOrientation | number | 
---

###static CreateLines(name, points, scene, updatable, linesInstance) &rarr; [LinesMesh](/classes/LinesMesh)
Create a Line with the given properties







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The name of the Line
&nbsp;| points | [Vector3](/classes/Vector3)[] | The points of the Line
&nbsp;| scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
optional | linesInstance | [LinesMesh](/classes/LinesMesh) | 
---

###static CreateDashedLines(name, points, dashSize, gapSize, dashNb, scene, updatable, linesInstance) &rarr; [LinesMesh](/classes/LinesMesh)

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | 
&nbsp;| points | [Vector3](/classes/Vector3)[] | 
&nbsp;| dashSize | number | 
&nbsp;| gapSize | number | 
&nbsp;| dashNb | number | 
&nbsp;| scene | [Scene](/classes/Scene) | 
optional | updatable | boolean | 
optional | linesInstance | [LinesMesh](/classes/LinesMesh) | 
---

###static ExtrudeShape(name, shape, path, scale, rotation, cap, scene, updatable, sideOrientation, extrudedInstance) &rarr; [Mesh](/classes/Mesh)

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | 
&nbsp;| shape | [Vector3](/classes/Vector3)[] | 
&nbsp;| path | [Vector3](/classes/Vector3)[] | 
&nbsp;| scale | number | 
&nbsp;| rotation | number | 
&nbsp;| cap | number | 
&nbsp;| scene | [Scene](/classes/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 
optional | extrudedInstance | [Mesh](/classes/Mesh) | 
---

###static ExtrudeShapeCustom(name, shape, path, scaleFunction, rotationFunction, ribbonCloseArray, ribbonClosePath, cap, scene, updatable, sideOrientation, extrudedInstance) &rarr; [Mesh](/classes/Mesh)

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | 
&nbsp;| shape | [Vector3](/classes/Vector3)[] | 
&nbsp;| path | [Vector3](/classes/Vector3)[] | 
&nbsp;| scaleFunction | any | 
&nbsp;| rotationFunction | any | 
&nbsp;| ribbonCloseArray | boolean | 
&nbsp;| ribbonClosePath | boolean | 
&nbsp;| cap | number | 
&nbsp;| scene | [Scene](/classes/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 
optional | extrudedInstance | [Mesh](/classes/Mesh) | 
---

###static CreateLathe(name, shape, radius, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/Mesh)

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | 
&nbsp;| shape | [Vector3](/classes/Vector3)[] | 
&nbsp;| radius | number | 
&nbsp;| tessellation | number | 
&nbsp;| scene | [Scene](/classes/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 
---

###static CreatePlane(name, size, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/Mesh)
Create a [Plane](/classes/Plane) with the given properties







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The name of the [Plane](/classes/Plane)
&nbsp;| size | number | The size of the plane
&nbsp;| scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
optional | sideOrientation | number | 
---

###static CreateGround(name, width, height, subdivisions, scene, updatable) &rarr; [Mesh](/classes/Mesh)
Create a [Ground](/classes/Ground) with the given properties







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The name of the [Ground](/classes/Ground)
&nbsp;| width | number | The width of the [Ground](/classes/Ground)
&nbsp;| height | number | The height of the [Ground](/classes/Ground)
&nbsp;| subdivisions | number | The subdivision of the [Ground](/classes/Ground)
&nbsp;| scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static CreateTiledGround(name, xmin, zmin, xmax, zmax, subdivisions, precision, scene, updatable) &rarr; [Mesh](/classes/Mesh); 
Create a [TiledGround](/classes/TiledGround) with the given properties







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The name of the [TiledGround](/classes/TiledGround)
&nbsp;| xmin | number | The xmin of the [Ground](/classes/Ground)
&nbsp;| zmin | number | The zmin of the [Ground](/classes/Ground)
&nbsp;| xmax | number | The xmax of the [Ground](/classes/Ground)
&nbsp;| zmax | number | The zmax of the [Ground](/classes/Ground)
&nbsp;| subdivisions | {w: number; h: number; } | The number of tiles (subdivisions.w : in width; subdivisions.h : in height)
&nbsp;| precision | { w: number; h: number; } | The number of subdivisions in each tile (precision.w : in width; precision.h : in height)
&nbsp;| scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static CreateGroundFromHeightMap(name, url, width, height, subdivisions, minHeight, maxHeight, scene, updatable, onReady) &rarr; [GroundMesh](/classes/GroundMesh)
Create a GroundFromHeightMap







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The name of the GroundFromHeightMap
&nbsp;| url | string | URL of the GroundFromHeightMap
&nbsp;| width | number | The width of the GroundFromHeightMap
&nbsp;| height | number | The height of the GroundFromHeightMap
&nbsp;| subdivisions | number | The number of subdivisions in the GroundFromHeightMap
&nbsp;| minHeight | number |&nbsp; minHeight of the new GFHM
&nbsp;| maxHeight | number | The maximum height of the Height map
&nbsp;| scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
optional | onReady | (mesh: [GroundMesh](/classes/GroundMesh)) =&gt; void | 
---


###static CreateTube(name, path, radius, tessellation, radiusFunction, cap, scene, updatable, sideOrientation, tubeInstance) &rarr; [Mesh](/classes/Mesh)
Create a Tube


####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | Name of the tube
&nbsp;| path | Vector3[] | The tube will follow this points path
&nbsp;| radius | number | Radius of the tube
&nbsp;| tessellation | number |&nbsp;
&nbsp;| radiusFunction | { (i: number, distance: number) &rarr; number } |&nbsp;
&nbsp;| cap | number | Add caps on each side of the tube
&nbsp;| scene | [Scene](/classes/Scene) | Scene to add the tube
optional | updatable | boolean |&nbsp;
optional | sideOrientation | number |&nbsp;
optional | tubeInstance | [Mesh](/classes/Mesh) |
---




###static CreateDecal(name, sourceMesh, position, normal, size, angle) &rarr; [Mesh](/classes/Mesh)

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | 
&nbsp;| sourceMesh | [AbstractMesh](/classes/AbstractMesh) | 
&nbsp;| position | [Vector3](/classes/Vector3) | 
&nbsp;| normal | [Vector3](/classes/Vector3) | 
&nbsp;| size | [Vector3](/classes/Vector3) | 
optional | angle | number | 
---

###static MinMax(meshes) &rarr; {min: [Vector3](/classes/Vector3); max: [Vector3](/classes/Vector3); }; 







####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| meshes | [AbstractMesh](/classes/AbstractMesh)[] | @param meshes
---

###static Center(meshesOrMinMaxVector) &rarr; [Vector3](/classes/Vector3)





####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| meshesOrMinMaxVector | any | @param meshesOrMinMaxVector
---

###static MergeMeshes(meshes, disposeSource, allow32BitsIndices, meshSubclass) &rarr; [Mesh](/classes/Mesh)
Merge the array of meshes into a single mesh for performance reasons.

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| meshes | Array&lt;Mesh&gt; | 
optional | disposeSource | boolean | 
optional | allow32BitsIndices | boolean | 
optional | meshSubclass | [Mesh](/classes/Mesh) | 
---
