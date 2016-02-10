---
ID_PAGE: 25147
PG_TITLE: Mesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [Mesh](/classes/2.3/Mesh) extends [AbstractMesh](/classes/2.3/AbstractMesh)



## Constructor

##  new [Mesh](/classes/2.3/Mesh)(name, scene, parent, source, doNotCloneChildren)

@constructor

                 When false, achieved by calling a clone(), also passing False.

                 This will make creation of children, recursive.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | parent | [Node](/classes/2.3/Node) |   
optional | source | [Mesh](/classes/2.3/Mesh) |   
## Members

### static  FRONTSIDE : number



### static  BACKSIDE : number



### static  DOUBLESIDE : number



### static  DEFAULTSIDE : number



### static  NO_CAP : number



### static  CAP_START : number



### static  CAP_END : number



### static  CAP_ALL : number



### delayLoadState : number



### instances : [InstancedMesh](/classes/2.3/InstancedMesh)[]



### delayLoadingFile : string



### onLODLevelSelection : (distance: number, mesh: [Mesh](/classes/2.3/Mesh), selectedLevel: [Mesh](/classes/2.3/Mesh)) =&gt; void



### onBeforeDraw : () =&gt; void



### hasLODLevels : boolean



### geometry : [Geometry](/classes/2.3/Geometry)



### isBlocked : boolean



### sideOrientation : number



### areNormalsFrozen : boolean



## Methods

### addLODLevel(distance, mesh) &rarr; [Mesh](/classes/2.3/Mesh)

Add a mesh as LOD level triggered at the given distance.

@return {[Mesh](/classes/2.3/Mesh)} this mesh (for chaining)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | distance | number |   
 | mesh | [Mesh](/classes/2.3/Mesh) |   
### getLODLevelAtDistance(distance) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | distance | number |   

### removeLODLevel(mesh) &rarr; [Mesh](/classes/2.3/Mesh)

Remove a mesh from the LOD array

@return {[Mesh](/classes/2.3/Mesh)} this mesh (for chaining)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.3/Mesh) |   

### getLOD(camera, boundingSphere) &rarr; [AbstractMesh](/classes/2.3/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.3/Camera) |   
optional | boundingSphere | [BoundingSphere](/classes/2.3/BoundingSphere) |   
### getTotalVertices() &rarr; number


### getVerticesData(kind, copyWhenShared) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   The kind of vertex buffer as defined in class Vertex Buffer
optional | copyWhenShared | boolean |   
### getVertexBuffer(kind) &rarr; [VertexBuffer](/classes/2.3/VertexBuffer)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | any |   The kind of vertex buffer as defined in class Vertex Buffer

### isVerticesDataPresent(kind) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   The kind of vertex buffer as defined in class Vertex Buffer

### getVerticesDataKinds() &rarr; string[]


### getTotalIndices() &rarr; number


### getIndices(copyWhenShared) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | copyWhenShared | boolean |   

### isReady() &rarr; boolean


### isDisposed() &rarr; boolean


### freezeNormals() &rarr; void


### unfreezeNormals() &rarr; void


### refreshBoundingInfo() &rarr; void


### subdivide(count) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | count | number |   The number of subdivision

### setVerticesData(kind, data, updatable, stride) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   The kind of vertex buffer as defined in class Vertex Buffer
 | data | number[] |   The new data of vertex buffer
optional | updatable | boolean |  &nbsp;
### updateVerticesData(kind, data, updateExtends, makeItUnique) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   The kind of vertex buffer as defined in class Vertex Buffer
 | data | number[] |   The new data of vertex buffer
optional | updateExtends | boolean |   @param updateExtends
### updateVerticesDataDirectly(kind, data, offset, makeItUnique) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   The kind of vertex buffer as defined in class Vertex Buffer
 | data | Float32Array |   The new data of vertex buffer
optional | offset | number |   
### updateMeshPositions(positionFunction, computeNormals) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | positionFunction | any |   
optional | computeNormals | boolean |   
### makeGeometryUnique() &rarr; void


### setIndices(indices, totalVertices) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] |   @param indices
optional | totalVertices | number |   
### registerBeforeRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void |   Callback function to delete

### unregisterBeforeRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void |   Callback function to delete

### registerAfterRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void |   Callback function to delete

### unregisterAfterRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void |   Callback function to delete

### render(subMesh, enableAlphaMode) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/2.3/SubMesh) |   The subMesh
 | enableAlphaMode | boolean |  
### getEmittedParticleSystems() &rarr; [ParticleSystem](/classes/2.3/ParticleSystem)[]


### getHierarchyEmittedParticleSystems() &rarr; [ParticleSystem](/classes/2.3/ParticleSystem)[]


### getChildren() &rarr; [Node](/classes/2.3/Node)[]


### isInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.3/Plane)[] |   [Frustum](/classes/2.3/Frustum) plan of the mesh

### setMaterialByID(id) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The ID of the material this mesh should get

### getAnimatables() &rarr; IAnimatable[]


### bakeTransformIntoVertices(transform) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/2.3/Matrix) |   The transform matrix

### bakeCurrentTransformIntoVertices() &rarr; void


### clone(name, newParent, doNotCloneChildren) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
optional | newParent | [Node](/classes/2.3/Node) |   His parent
optional | doNotCloneChildren | boolean |   True if you want to clone children, false if you don't want to.
### dispose(doNotRecurse) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean |   @param doNotRecurse

### applyDisplacementMap(url, minHeight, maxHeight, onSuccess) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |   URL of the GroundFromHeightMap
 | minHeight | number |  &nbsp; minHeight of the new GFHM
 | maxHeight | number |   The maximum height of the Height map
### applyDisplacementMapFromBuffer(buffer, heightMapWidth, heightMapHeight, minHeight, maxHeight) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | Uint8Array |   The buffer
 | heightMapWidth | number |   The height map width
 | heightMapHeight | number |   The height map height
 | minHeight | number |  &nbsp; minHeight of the new GFHM
### convertToFlatShadedMesh() &rarr; void


### convertToUnIndexedMesh() &rarr; void


### flipFaces(flipNormals) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | flipNormals | boolean |  

### createInstance(name) &rarr; [InstancedMesh](/classes/2.3/InstancedMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   

### synchronizeInstances() &rarr; void


### simplify(settings, parallelProcessing, simplificationType, successCallback) &rarr; void

Simplify the mesh according to the given array of settings.

Function will return immediately and will simplify async.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | settings | Array&lt;ISimplificationSettings&gt; |  a collection of simplification settings.  a collection of simplification settings. a collection of simplification settings.
optional | parallelProcessing | boolean |  should all levels calculate parallel or one after the other.  should all levels calculate parallel or one after the other. should all levels calculate parallel or one after the other.
optional | simplificationType | [SimplificationType](/classes/2.3/SimplificationType) |   
### optimizeIndices(successCallback) &rarr; void

Optimization of the mesh's indices, in case a mesh has duplicated vertices.

The function will only reorder the indices and will not remove unused vertices to avoid problems with submeshes.

This should be used together with the simplification to avoid disappearing triangles.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | successCallback | (mesh: [Mesh](/classes/2.3/Mesh)) =&gt; void |  an optional success callback to be called after the optimization finished.  an optional success callback to be called after the optimization finished. an optional success callback to be called after the optimization finished.

### static  Parse(parsedMesh, scene, rootUrl) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMesh | any | 
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
 | rootUrl | string | 
### static  CreateRibbon(name, pathArray, closeArray, closePath, offset, scene, updatable, sideOrientation, instance) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | pathArray | [Vector3](/classes/2.3/Vector3)[][] |   
 | closeArray | boolean |   
 | closePath | boolean |   
 | offset | number |   
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
optional | sideOrientation | number |  &nbsp;
### static  CreateDisc(name, radius, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | radius | number |   Radius of the tube
 | tessellation | number |  &nbsp;
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
### static  CreateBox(name, size, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | size | number |   
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
### static  CreateSphere(name, segments, diameter, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | segments | number |   The segments of the sphere
 | diameter | number |   The diameter of the [Torus](/classes/2.3/Torus)
optional | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
### static  CreateCylinder(name, height, diameterTop, diameterBottom, tessellation, subdivisions, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | height | number |   The height of cylinder
 | diameterTop | number |   Diameter at top of the cylinder
 | diameterBottom | number |   Diameter at bottom of the cylinder
 | tessellation | number |  Number of faces around the cylinder
 | subdivisions | any |   The number of subdivisions from bottom to top of the cylinder
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the cylinder
optional | updatable | any |  &nbsp;
### static  CreateTorus(name, diameter, thickness, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | diameter | number |   The diameter of the [Torus](/classes/2.3/Torus)
 | thickness | number |   The thickness of the [Torus](/classes/2.3/Torus)
 | tessellation | number |  &nbsp;
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
### static  CreateTorusKnot(name, radius, tube, radialSegments, tubularSegments, p, q, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | radius | number |   Radius of the tube
 | tube | number |   @param tube
 | radialSegments | number |   @param radialSegments
 | tubularSegments | number |   @param tubularSegments
 | p | number |   Describes up-and-down (P) winding numbers
 | q | number |   Describes around-the-center (Q) winding numbers
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
### static  CreateLines(name, points, scene, updatable, instance) &rarr; [LinesMesh](/classes/2.3/LinesMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | points | [Vector3](/classes/2.3/Vector3)[] |   
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
### static  CreateDashedLines(name, points, dashSize, gapSize, dashNb, scene, updatable, instance) &rarr; [LinesMesh](/classes/2.3/LinesMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | points | [Vector3](/classes/2.3/Vector3)[] |   
 | dashSize | number |   
 | gapSize | number |   
 | dashNb | number |   
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
### static  ExtrudeShape(name, shape, path, scale, rotation, cap, scene, updatable, sideOrientation, instance) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | shape | [Vector3](/classes/2.3/Vector3)[] |   
 | path | [Vector3](/classes/2.3/Vector3)[] |   The tube will follow this points path
 | scale | number |   
 | rotation | number |   
 | cap | number |   Add caps on each side of the tube
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
optional | sideOrientation | number |  &nbsp;
### static  ExtrudeShapeCustom(name, shape, path, scaleFunction, rotationFunction, ribbonCloseArray, ribbonClosePath, cap, scene, updatable, sideOrientation, instance) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | shape | [Vector3](/classes/2.3/Vector3)[] |   
 | path | [Vector3](/classes/2.3/Vector3)[] |   The tube will follow this points path
 | scaleFunction | any |   
 | rotationFunction | any |   
 | ribbonCloseArray | boolean |   
 | ribbonClosePath | boolean |   
 | cap | number |   Add caps on each side of the tube
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
optional | sideOrientation | number |  &nbsp;
### static  CreateLathe(name, shape, radius, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | shape | [Vector3](/classes/2.3/Vector3)[] |   
 | radius | number |   Radius of the tube
 | tessellation | number |  &nbsp;
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
### static  CreatePlane(name, size, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | size | number |   
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
### static  CreateGround(name, width, height, subdivisions, scene, updatable) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | width | number |   The width of the GroundFromHeightMap
 | height | number |   The height of the GroundFromHeightMap
 | subdivisions | number |   The number of subdivisions in the GroundFromHeightMap
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
### static  CreateTiledGround(name, xmin, zmin, xmax, zmax, subdivisions, precision, scene, updatable) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | xmin | number |   The xmin of the [Ground](/classes/2.3/Ground)
 | zmin | number |   The zmin of the [Ground](/classes/2.3/Ground)
 | xmax | number |   The xmax of the [Ground](/classes/2.3/Ground)
 | zmax | number |   The zmax of the [Ground](/classes/2.3/Ground)
 | subdivisions | { w: number,  h: number } |   The number of subdivisions in the GroundFromHeightMap
 | precision | { w: number,  h: number } |   The number of subdivisions in each tile (precision.w : in width; precision.h : in height)
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
### static  CreateGroundFromHeightMap(name, url, width, height, subdivisions, minHeight, maxHeight, scene, updatable, onReady) &rarr; [GroundMesh](/classes/2.3/GroundMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | url | string |   URL of the GroundFromHeightMap
 | width | number |   The width of the GroundFromHeightMap
 | height | number |   The height of the GroundFromHeightMap
 | subdivisions | number |   The number of subdivisions in the GroundFromHeightMap
 | minHeight | number |  &nbsp; minHeight of the new GFHM
 | maxHeight | number |   The maximum height of the Height map
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
### static  CreateTube(name, path, radius, tessellation, radiusFunction, cap, scene, updatable, sideOrientation, instance) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | path | [Vector3](/classes/2.3/Vector3)[] |   The tube will follow this points path
 | radius | number |   Radius of the tube
 | tessellation | number |  &nbsp;
 | radiusFunction | { (i, distance): number } |  &nbsp;
 | cap | number |   Add caps on each side of the tube
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
optional | updatable | boolean |  &nbsp;
optional | sideOrientation | number |  &nbsp;
### static  CreatePolyhedron(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { type: number,  size: number,  sizeX: number,  sizeY: number,  sizeZ: number,  custom: any,  faceUV: [Vector4](/classes/2.3/Vector4)[],  faceColors: [Color4](/classes/2.3/Color4)[],  updatable: boolean,  sideOrientation: number } |  
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
### static  CreateIcoSphere(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { radius: number,  flat: boolean,  subdivisions: number,  sideOrientation: number,  updatable: boolean } |  
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) to add the tube
### static  CreateDecal(name, sourceMesh, position, normal, size, angle) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | sourceMesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   
 | position | [Vector3](/classes/2.3/Vector3) |   
 | normal | [Vector3](/classes/2.3/Vector3) |   
 | size | [Vector3](/classes/2.3/Vector3) |   
### setPositionsForCPUSkinning() &rarr; Float32Array

@returns original positions used for CPU skinning.  Useful for integrating Morphing with skeletons in same mesh.
### setNormalsForCPUSkinning() &rarr; Float32Array

@returns original normals used for CPU skinning.  Useful for integrating Morphing with skeletons in same mesh.
### applySkeleton(skeleton) &rarr; [Mesh](/classes/2.3/Mesh)

Update the vertex buffers by applying transformation from the bones

#### Parameters
 | Name | Type | Description
---|---|---|---
 | skeleton | [Skeleton](/classes/2.3/Skeleton) |  

### static  MinMax(meshes) &rarr; { min: [Vector3](/classes/2.3/Vector3),  max: [Vector3](/classes/2.3/Vector3) }



#### Parameters
 | Name | Type | Description
---|---|---|---
 | meshes | [AbstractMesh](/classes/2.3/AbstractMesh)[] |   

### static  Center(meshesOrMinMaxVector) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | meshesOrMinMaxVector | any |   @param meshesOrMinMaxVector

### static  MergeMeshes(meshes, disposeSource, allow32BitsIndices, meshSubclass) &rarr; [Mesh](/classes/2.3/Mesh)

Merge the array of meshes into a single mesh for performance reasons.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | meshes | Array&lt;[Mesh](/classes/2.3/Mesh)&gt; |   
optional | disposeSource | boolean |   
optional | allow32BitsIndices | boolean |   
