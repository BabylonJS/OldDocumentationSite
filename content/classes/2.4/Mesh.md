---
ID_PAGE: 25147
PG_TITLE: Mesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [Mesh](/classes/2.4/Mesh) extends [AbstractMesh](/classes/2.4/AbstractMesh)



## Constructor

## new [Mesh](/classes/2.4/Mesh)(name, scene, parent, source, doNotCloneChildren, clonePhysicsImpostor)

@constructor

                 When false, achieved by calling a clone(), also passing False.

                 This will make creation of children, recursive.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | parent | [Node](/classes/2.4/Node) |    
optional | source | [Mesh](/classes/2.4/Mesh) |    
optional | doNotCloneChildren | boolean |    True if you want to clone children, false if you don't want to.
## Members

### static FRONTSIDE : number

[Mesh](/classes/2.4/Mesh) side orientation : usually the external or front surface

### static BACKSIDE : number

[Mesh](/classes/2.4/Mesh) side orientation : usually the internal or back surface

### static DOUBLESIDE : number

[Mesh](/classes/2.4/Mesh) side orientation : both internal and external or front and back surfaces

### static DEFAULTSIDE : number

[Mesh](/classes/2.4/Mesh) side orientation : by default, `FRONTSIDE`

### static NO_CAP : number

[Mesh](/classes/2.4/Mesh) cap setting : no cap

### static CAP_START : number

[Mesh](/classes/2.4/Mesh) cap setting : one cap at the beginning of the mesh

### static CAP_END : number

[Mesh](/classes/2.4/Mesh) cap setting : one cap at the end of the mesh

### static CAP_ALL : number

[Mesh](/classes/2.4/Mesh) cap setting : two caps, one at the beginning  and one at the end of the mesh

### onBeforeRenderObservable : [Observable](/classes/2.4/Observable)&lt;[Mesh](/classes/2.4/Mesh)&gt;

An event triggered before rendering the mesh

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onAfterRenderObservable : [Observable](/classes/2.4/Observable)&lt;[Mesh](/classes/2.4/Mesh)&gt;

An event triggered after rendering the mesh

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onBeforeDrawObservable : [Observable](/classes/2.4/Observable)&lt;[Mesh](/classes/2.4/Mesh)&gt;

An event triggered before drawing the mesh

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onBeforeDraw : () =&gt; void



### delayLoadState : number

Delay load mesh state

### instances : [InstancedMesh](/classes/2.4/InstancedMesh)[]

Instances [Mesh](/classes/2.4/Mesh)

### delayLoadingFile : string

Delay load mesh file

### onLODLevelSelection : (distance: number, mesh: [Mesh](/classes/2.4/Mesh), selectedLevel: [Mesh](/classes/2.4/Mesh)) =&gt; void



### hasLODLevels : boolean



### geometry : [Geometry](/classes/2.4/Geometry)

Returns the mesh internal [Geometry](/classes/2.4/Geometry) object.

### isBlocked : boolean



### sideOrientation : number

Sets the mesh side orientation : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE, BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE, BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DEFAULTSIDE

tuto : http://doc.babylonjs.com/tutorials/Discover_Basic_Elements#side-orientation

### areNormalsFrozen : boolean

Boolean : true if the normals aren't to be recomputed on next mesh `positions` array update.

This property is pertinent only for updatable parametric shapes.

### overridenInstanceCount : number

Overrides instance count. Only applicable when custom instanced InterleavedVertexBuffer are used rather than InstancedMeshs

## Methods

### toString(fullDetails) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | fullDetails | boolean | 

### addLODLevel(distance, mesh) &rarr; [Mesh](/classes/2.4/Mesh)

Add a mesh as LOD level triggered at the given distance.

tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD

@return {[Mesh](/classes/2.4/Mesh)} This mesh (for chaining)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | distance | number |    
 | mesh | [Mesh](/classes/2.4/Mesh) |    
### getLODLevelAtDistance(distance) &rarr; [Mesh](/classes/2.4/Mesh)

Returns the LOD level mesh at the passed distance or null if not found.

It is related to the method `addLODLevel(distance, mesh)`.

tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD

#### Parameters
 | Name | Type | Description
---|---|---|---
 | distance | number |    

### removeLODLevel(mesh) &rarr; [Mesh](/classes/2.4/Mesh)

Remove a mesh from the LOD array

tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD

@return {[Mesh](/classes/2.4/Mesh)} This mesh (for chaining)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.4/Mesh) |    

### getLOD(camera, boundingSphere) &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)

Returns the registered LOD mesh distant from the parameter `camera` position if any, else returns the current mesh.

tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD

#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.4/Camera) |    
optional | boundingSphere | [BoundingSphere](/classes/2.4/BoundingSphere) |    
### getTotalVertices() &rarr; number

Returns a positive integer : the total number of vertices within the mesh geometry or zero if the mesh has no geometry.
### getVerticesData(kind, copyWhenShared) &rarr; number[]

Returns an array of integers or floats, or a Float32Array, depending on the requested `kind` (positions, indices, normals, etc).

If `copywhenShared` is true (default false) and if the mesh geometry is shared among some other meshes, the returned array is a copy of the internal one.

Returns null if the mesh has no geometry or no vertex buffer.

Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsExtraKind

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |    The kind of vertex buffer as defined in class Vertex [Buffer](/classes/2.4/Buffer)
optional | copyWhenShared | boolean |    
### getVertexBuffer(kind) &rarr; [VertexBuffer](/classes/2.4/VertexBuffer)

Returns the mesh [VertexBuffer](/classes/2.4/VertexBuffer) object from the requested `kind` : positions, indices, normals, etc.

Returns `undefined` if the mesh has no geometry.

Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsExtraKind

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | any |    The kind of vertex buffer as defined in class Vertex [Buffer](/classes/2.4/Buffer)

### isVerticesDataPresent(kind) &rarr; boolean

Returns a boolean depending on the existence of the Vertex Data for the requested `kind`.

Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsExtraKind

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |    The kind of vertex buffer as defined in class Vertex [Buffer](/classes/2.4/Buffer)

### getVerticesDataKinds() &rarr; string[]

Returns a string : the list of existing `kinds` of Vertex Data for this mesh.

Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsExtraKind
### getTotalIndices() &rarr; number

Returns a positive integer : the total number of indices in this mesh geometry.

Returns zero if the mesh has no geometry.
### getIndices(copyWhenShared) &rarr; number[]

Returns an array of integers or a Int32Array populated with the mesh indices.

If the parameter `copyWhenShared` is true (default false) and and if the mesh geometry is shared among some other meshes, the returned array is a copy of the internal one.

Returns an empty array if the mesh has no geometry.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | copyWhenShared | boolean |    

### isReady() &rarr; boolean

Boolean : true once the mesh is ready after all the delayed process (loading, etc) are complete.
### isDisposed() &rarr; boolean

Boolean : true if the mesh has been disposed.
### freezeNormals() &rarr; void

This function affects parametric shapes on vertex position update only : ribbons, tubes, etc.

It has no effect at all on other shapes.

It prevents the mesh normals from being recomputed on next `positions` array update.
### unfreezeNormals() &rarr; void

This function affects parametric shapes on vertex position update only : ribbons, tubes, etc.

It has no effect at all on other shapes.

It reactivates the mesh normals computation if it was previously frozen.
### refreshBoundingInfo() &rarr; void

This method recomputes and sets a new [BoundingInfo](/classes/2.4/BoundingInfo) to the mesh unless it is locked.

This means the mesh underlying bounding box and sphere are recomputed.
### subdivide(count) &rarr; void

Subdivide this mesh by creating &quot;count&quot; submeshes stored in this.subMeshes

#### Parameters
 | Name | Type | Description
---|---|---|---
 | count | number |    The number of subdivision

### setVerticesData(kind, data, updatable, stride) &rarr; void

Sets the vertex data of the mesh geometry for the requested `kind`.

If the mesh has no geometry, a new [Geometry](/classes/2.4/Geometry) object is set to the mesh and then passed this vertex data.

The `data` are either a numeric array either a Float32Array.

The parameter `updatable` is passed as is to the underlying [Geometry](/classes/2.4/Geometry) object constructor (if initianilly none) or updater.

The parameter `stride` is an optional positive integer, it is usually automatically deducted from the `kind` (3 for positions or normals, 2 for UV, etc).

Note that a new underlying [VertexBuffer](/classes/2.4/VertexBuffer) object is created each call.

If the `kind` is the `PositionKind`, the mesh [BoundingInfo](/classes/2.4/BoundingInfo) is renewed, so the bounding box and sphere, and the mesh World [Matrix](/classes/2.4/Matrix) is recomputed.



Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsExtraKind

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |    The kind of vertex buffer as defined in class Vertex [Buffer](/classes/2.4/Buffer)
 | data | number[] |    The new data of vertex buffer
optional | updatable | boolean |   &nbsp;
### setVerticesBuffer(buffer) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | [VertexBuffer](/classes/2.4/VertexBuffer) |    The buffer

### updateVerticesData(kind, data, updateExtends, makeItUnique) &rarr; void

Updates the existing vertex data of the mesh geometry for the requested `kind`.

If the mesh has no geometry, it is simply returned as it is.

The `data` are either a numeric array either a Float32Array.

No new underlying [VertexBuffer](/classes/2.4/VertexBuffer) object is created.

If the `kind` is the `PositionKind` and if `updateExtends` is true, the mesh [BoundingInfo](/classes/2.4/BoundingInfo) is renewed, so the bounding box and sphere, and the mesh World [Matrix](/classes/2.4/Matrix) is recomputed.

If the parameter `makeItUnique` is true, a new global geometry is created from this positions and is set to the mesh.



Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/2.4/VertexBuffer).MatricesWeightsExtraKind

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |    The kind of vertex buffer as defined in class Vertex [Buffer](/classes/2.4/Buffer)
 | data | number[] |    The new data of vertex buffer
optional | updateExtends | boolean |    @param updateExtends
### updateVerticesDataDirectly(kind, data, offset, makeItUnique) &rarr; void

Deprecated since BabylonJS v2.3

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |    The kind of vertex buffer as defined in class Vertex [Buffer](/classes/2.4/Buffer)
 | data | Float32Array |    The new data of vertex buffer
optional | offset | number |    
### updateMeshPositions(positionFunction, computeNormals) &rarr; void

This method updates the vertex positions of an updatable mesh according to the `positionFunction` returned values.

tuto : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#other-shapes-updatemeshpositions

The parameter `positionFunction` is a simple JS function what is passed the mesh `positions` array. It doesn't need to return anything.

The parameter `computeNormals` is a boolean (default true) to enable/disable the mesh normal recomputation after the vertex position update.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | positionFunction | any |    
optional | computeNormals | boolean |    
### makeGeometryUnique() &rarr; void

Make geometry unique
### setIndices(indices, totalVertices) &rarr; void

Sets the mesh indices.

Expects an array populated with integers or a Int32Array.

If the mesh has no geometry, a new `[Geometry](/classes/2.4/Geometry)` object is created and set to the mesh.

This method creates a new index buffer each call.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] |    @param indices
optional | totalVertices | number |    
### toLeftHanded() &rarr; void

Invert the geometry to move from a right handed system to a left handed one.
### registerBeforeRender(func) &rarr; void

Registers for this mesh a javascript function called just before the rendering process.

This function is passed the current mesh and doesn't return anything.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.4/AbstractMesh)) =&gt; void |    Callback function to delete

### unregisterBeforeRender(func) &rarr; void

Disposes a previously registered javascript function called before the rendering.

This function is passed the current mesh and doesn't return anything.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.4/AbstractMesh)) =&gt; void |    Callback function to delete

### registerAfterRender(func) &rarr; void

Registers for this mesh a javascript function called just after the rendering is complete.

This function is passed the current mesh and doesn't return anything.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.4/AbstractMesh)) =&gt; void |    Callback function to delete

### unregisterAfterRender(func) &rarr; void

Disposes a previously registered javascript function called after the rendering.

This function is passed the current mesh and doesn't return anything.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.4/AbstractMesh)) =&gt; void |    Callback function to delete

### render(subMesh, enableAlphaMode) &rarr; void

Triggers the draw call for the mesh.

Usually, you don't need to call this method by your own because the mesh rendering is handled by the scene rendering manager.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/2.4/SubMesh) |    The subMesh
 | enableAlphaMode | boolean |   
### getEmittedParticleSystems() &rarr; [ParticleSystem](/classes/2.4/ParticleSystem)[]

Returns an array populated with [ParticleSystem](/classes/2.4/ParticleSystem) objects whose the mesh is the emitter.
### getHierarchyEmittedParticleSystems() &rarr; [ParticleSystem](/classes/2.4/ParticleSystem)[]

Returns an array populated with [ParticleSystem](/classes/2.4/ParticleSystem) objects whose the mesh or its children are the emitter.
### isInFrustum(frustumPlanes) &rarr; boolean

Boolean, true is the mesh in the frustum defined by the [Plane](/classes/2.4/Plane) objects from the `frustumPlanes` array parameter.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.4/Plane)[] |    [Frustum](/classes/2.4/Frustum) plan of the mesh

### setMaterialByID(id) &rarr; void

Sets the mesh material by the material or multiMaterial `id` property.

The material `id` is a string identifying the material or the multiMaterial.

This method returns nothing.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |    The ID of the material this mesh should get

### getAnimatables() &rarr; IAnimatable[]

Returns as a new array populated with the mesh material and/or skeleton, if any.
### bakeTransformIntoVertices(transform) &rarr; void

Modifies the mesh geometry according to the passed transformation matrix.

This method returns nothing but it really modifies the mesh even if it's originally not set as updatable.

The mesh normals are modified accordingly the same transformation.

tuto : http://doc.babylonjs.com/tutorials/How_Rotations_and_Translations_Work#baking-transform

Note that, under the hood, this method sets a new [VertexBuffer](/classes/2.4/VertexBuffer) each call.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/2.4/Matrix) |    The transform matrix

### bakeCurrentTransformIntoVertices() &rarr; void

Modifies the mesh geometry according to its own current World [Matrix](/classes/2.4/Matrix).

The mesh World [Matrix](/classes/2.4/Matrix) is then reset.

This method returns nothing but really modifies the mesh even if it's originally not set as updatable.

tuto : tuto : http://doc.babylonjs.com/tutorials/How_Rotations_and_Translations_Work#baking-transform

Note that, under the hood, this method sets a new [VertexBuffer](/classes/2.4/VertexBuffer) each call.
### clone(name, newParent, doNotCloneChildren, clonePhysicsImpostor) &rarr; [Mesh](/classes/2.4/Mesh)

Returns a new [Mesh](/classes/2.4/Mesh) object generated from the current mesh properties.

This method must not get confused with createInstance().

The parameter `name` is a string, the name given to the new mesh.

The optional parameter `newParent` can be any `[Node](/classes/2.4/Node)` object (default `null`).

The optional parameter `doNotCloneChildren` (default `false`) allows/denies the recursive cloning of the original mesh children if any.

The parameter `clonePhysicsImpostor` (default `true`)  allows/denies the cloning in the same time of the original mesh `body` used by the physics engine, if any.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
optional | newParent | [Node](/classes/2.4/Node) |    His parent
optional | doNotCloneChildren | boolean |    True if you want to clone children, false if you don't want to.
### dispose(doNotRecurse) &rarr; void

Disposes the mesh.

This also frees the memory allocated under the hood to all the buffers used by WebGL.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean |    @param doNotRecurse

### applyDisplacementMap(url, minHeight, maxHeight, onSuccess) &rarr; void

Modifies the mesh geometry according to a displacement map.

A displacement map is a colored image. Each pixel color value (actually a gradient computed from red, green, blue values) will give the displacement to apply to each mesh vertex.

The mesh must be set as updatable. Its internal geometry is directly modified, no new buffer are allocated.

This method returns nothing.

The parameter `url` is a string, the URL from the image file is to be downloaded.

The parameters `minHeight` and `maxHeight` are the lower and upper limits of the displacement.

The parameter `onSuccess` is an optional Javascript function to be called just after the mesh is modified. It is passed the modified mesh and must return nothing.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |    URL of the GroundFromHeightMap
 | minHeight | number |   &nbsp; minHeight of the new GFHM
 | maxHeight | number |    The maximum height of the Height map
### applyDisplacementMapFromBuffer(buffer, heightMapWidth, heightMapHeight, minHeight, maxHeight) &rarr; void

Modifies the mesh geometry according to a displacementMap buffer.

A displacement map is a colored image. Each pixel color value (actually a gradient computed from red, green, blue values) will give the displacement to apply to each mesh vertex.

The mesh must be set as updatable. Its internal geometry is directly modified, no new buffer are allocated.

This method returns nothing.

The parameter `buffer` is a `Uint8Array` buffer containing series of `Uint8` lower than 255, the red, green, blue and alpha values of each successive pixel.

The parameters `heightMapWidth` and `heightMapHeight` are positive integers to set the width and height of the buffer image.

The parameters `minHeight` and `maxHeight` are the lower and upper limits of the displacement.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | Uint8Array |    The buffer
 | heightMapWidth | number |    The height map width
 | heightMapHeight | number |    The height map height
 | minHeight | number |   &nbsp; minHeight of the new GFHM
### convertToFlatShadedMesh() &rarr; void

Modify the mesh to get a flat shading rendering.

This means each mesh facet will then have its own normals. Usually new vertices are added in the mesh geometry to get this result.

This method returns nothing.

Warning : the mesh is really modified even if not set originally as updatable and, under the hood, a new [VertexBuffer](/classes/2.4/VertexBuffer) is allocated.
### convertToUnIndexedMesh() &rarr; void

This method removes all the mesh indices and add new vertices (duplication) in order to unfold facets into buffers.

In other words, more vertices, no more indices and a single bigger VBO.

This method returns nothing.

The mesh is really modified even if not set originally as updatable. Under the hood, a new [VertexBuffer](/classes/2.4/VertexBuffer) is allocated.
### flipFaces(flipNormals) &rarr; void

Inverses facet orientations and inverts also the normals with `flipNormals` (default `false`) if true.

This method returns nothing.

Warning : the mesh is really modified even if not set originally as updatable. A new [VertexBuffer](/classes/2.4/VertexBuffer) is created under the hood each call.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | flipNormals | boolean |   

### createInstance(name) &rarr; [InstancedMesh](/classes/2.4/InstancedMesh)

Creates a new [InstancedMesh](/classes/2.4/InstancedMesh) object from the mesh model.

An instance shares the same properties and the same material than its model.

Only these properties of each instance can then be set individually :

- position

- rotation

- rotationQuaternion

- setPivotMatrix

- scaling

tuto : http://doc.babylonjs.com/tutorials/How_to_use_Instances

Warning : this method is not supported for Line mesh and LineSystem

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    

### synchronizeInstances() &rarr; void

Synchronises all the mesh instance submeshes to the current mesh submeshes, if any.

After this call, all the mesh instances have the same submeshes than the current mesh.

This method returns nothing.
### simplify(settings, parallelProcessing, simplificationType, successCallback) &rarr; void

Simplify the mesh according to the given array of settings.

Function will return immediately and will simplify async. It returns nothing.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | settings | Array&lt;ISimplificationSettings&gt; |  a collection of simplification settings.  a collection of simplification settings.  a collection of simplification settings. a collection of simplification settings.
optional | parallelProcessing | boolean |  should all levels calculate parallel or one after the other.  should all levels calculate parallel or one after the other.  should all levels calculate parallel or one after the other. should all levels calculate parallel or one after the other.
optional | simplificationType | [SimplificationType](/classes/2.4/SimplificationType) |    
### optimizeIndices(successCallback) &rarr; void

Optimization of the mesh's indices, in case a mesh has duplicated vertices.

The function will only reorder the indices and will not remove unused vertices to avoid problems with submeshes.

This should be used together with the simplification to avoid disappearing triangles.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | successCallback | (mesh: [Mesh](/classes/2.4/Mesh)) =&gt; void |  an optional success callback to be called after the optimization finished.  an optional success callback to be called after the optimization finished.  an optional success callback to be called after the optimization finished. an optional success callback to be called after the optimization finished.

### static Parse(parsedMesh, scene, rootUrl) &rarr; [Mesh](/classes/2.4/Mesh)

Returns a new [Mesh](/classes/2.4/Mesh) object what is a deep copy of the passed mesh.

The parameter `parsedMesh` is the mesh to be copied.

The parameter `rootUrl` is a string, it's the root URL to prefix the `delayLoadingFile` property with

#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMesh | any |  
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
 | rootUrl | string |  
### static CreateRibbon(name, pathArray, closeArray, closePath, offset, scene, updatable, sideOrientation, instance) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a ribbon mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The ribbon is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.



Please read this full tutorial to understand how to design a ribbon : http://doc.babylonjs.com/tutorials/Ribbon_Tutorial

The parameter `pathArray` is a required array of paths, what are each an array of successive [Vector3](/classes/2.4/Vector3). The pathArray parameter depicts the ribbon geometry.

The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array.

The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array.

The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path.

It's the offset to join together the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11.

The optional parameter `instance` is an instance of an existing [Ribbon](/classes/2.4/Ribbon) object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#ribbon

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | pathArray | [Vector3](/classes/2.4/Vector3)[][] |    
 | closeArray | boolean |    
 | closePath | boolean |    
 | offset | number |    
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
optional | sideOrientation | number |   &nbsp;
### static CreateDisc(name, radius, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a plane polygonal mesh.  By default, this is a disc.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameter `radius` sets the radius size (float) of the polygon (default 0.5).

The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc.

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | radius | number |    Radius of the tube
 | tessellation | number |   &nbsp;
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
### static CreateBox(name, size, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a box mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameter `size` sets the size (float) of each box side (default 1).

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | size | number |    
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
### static CreateSphere(name, segments, diameter, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a sphere mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameter `diameter` sets the diameter size (float) of the sphere (default 1).

The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32).

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | segments | number |    The segments of the sphere
 | diameter | number |    The diameter of the [Torus](/classes/2.4/Torus)
optional | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
### static CreateCylinder(name, height, diameterTop, diameterBottom, tessellation, subdivisions, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a cylinder or a cone mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameter `height` sets the height size (float) of the cylinder/cone (float, default 2).

The parameter `diameter` sets the diameter of the top and bottom cap at once (float, default 1).

The parameters `diameterTop` and `diameterBottom` overwrite the parameter `diameter` and set respectively the top cap and bottom cap diameter (floats, default 1). The parameter "diameterBottom" can't be zero.

The parameter `tessellation` sets the number of cylinder sides (positive integer, default 24). Set it to 3 to get a prism for instance.

The parameter `subdivisions` sets the number of rings along the cylinder height (positive integer, default 1).

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | height | number |    The height of the GroundFromHeightMap
 | diameterTop | number |    Diameter at top of the cylinder
 | diameterBottom | number |    Diameter at bottom of the cylinder
 | tessellation | number |   &nbsp;
 | subdivisions | any |    The number of subdivisions in the GroundFromHeightMap
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | any |   &nbsp;
### static CreateTorus(name, diameter, thickness, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a torus mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameter `diameter` sets the diameter size (float) of the torus (default 1).

The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5).

The parameter `tessellation` sets the number of torus sides (postive integer, default 16).

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | diameter | number |    The diameter of the [Torus](/classes/2.4/Torus)
 | thickness | number |    The thickness of the [Torus](/classes/2.4/Torus)
 | tessellation | number |   &nbsp;
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
### static CreateTorusKnot(name, radius, tube, radialSegments, tubularSegments, p, q, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a torus knot mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameter `radius` sets the global radius size (float) of the torus knot (default 2).

The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32).

The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32).

The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3).

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | radius | number |    Radius of the tube
 | tube | number |    @param tube
 | radialSegments | number |    @param radialSegments
 | tubularSegments | number |    @param tubularSegments
 | p | number |    Describes up-and-down (P) winding numbers
 | q | number |    Describes around-the-center (Q) winding numbers
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
### static CreateLines(name, points, scene, updatable, instance) &rarr; [LinesMesh](/classes/2.4/LinesMesh)

Creates a line mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter.

Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function.

The parameter `points` is an array successive [Vector3](/classes/2.4/Vector3).

The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines

When updating an instance, remember that only point positions can change, not the number of points.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | points | [Vector3](/classes/2.4/Vector3)[] |    
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
### static CreateDashedLines(name, points, dashSize, gapSize, dashNb, scene, updatable, instance) &rarr; [LinesMesh](/classes/2.4/LinesMesh)

Creates a dashed line mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

A dashed line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter.

Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function.

The parameter `points` is an array successive [Vector3](/classes/2.4/Vector3).

The parameter `dashNb` is the intended total number of dashes (positive integer, default 200).

The parameter `dashSize` is the size of the dashes relatively the dash number (positive float, default 3).

The parameter `gapSize` is the size of the gap between two successive dashes relatively the dash number (positive float, default 1).

The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines

When updating an instance, remember that only point positions can change, not the number of points.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | points | [Vector3](/classes/2.4/Vector3)[] |    
 | dashSize | number |    
 | gapSize | number |    
 | dashNb | number |    
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
### static ExtrudeShape(name, shape, path, scale, rotation, cap, scene, updatable, sideOrientation, instance) &rarr; [Mesh](/classes/2.4/Mesh)

Creates an extruded shape mesh.

The extrusion is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.



Please read this full tutorial to understand how to design an extruded shape : http://doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion

The parameter `shape` is a required array of successive [Vector3](/classes/2.4/Vector3). This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be

extruded along the Z axis.

The parameter `path` is a required array of successive [Vector3](/classes/2.4/Vector3). This is the axis curve the shape is extruded along.

The parameter `rotation` (float, default 0 radians) is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve.

The parameter `scale` (float, default 1) is the value to scale the shape.

The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.[Mesh](/classes/2.4/Mesh).NO_CAP (default), BABYLON.[Mesh](/classes/2.4/Mesh).CAP_START, BABYLON.[Mesh](/classes/2.4/Mesh).CAP_END, BABYLON.[Mesh](/classes/2.4/Mesh).CAP_ALL

The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#extruded-shape

Remember you can only change the shape or path point positions, not their number when updating an extruded shape.

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | shape | [Vector3](/classes/2.4/Vector3)[] |    
 | path | [Vector3](/classes/2.4/Vector3)[] |    The tube will follow this points path
 | scale | number |    
 | rotation | number |    
 | cap | number |    Add caps on each side of the tube
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
optional | sideOrientation | number |   &nbsp;
### static ExtrudeShapeCustom(name, shape, path, scaleFunction, rotationFunction, ribbonCloseArray, ribbonClosePath, cap, scene, updatable, sideOrientation, instance) &rarr; [Mesh](/classes/2.4/Mesh)

Creates an custom extruded shape mesh.

The custom extrusion is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.



Please read this full tutorial to understand how to design a custom extruded shape : http://doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion

The parameter `shape` is a required array of successive [Vector3](/classes/2.4/Vector3). This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be

extruded along the Z axis.

The parameter `path` is a required array of successive [Vector3](/classes/2.4/Vector3). This is the axis curve the shape is extruded along.

The parameter `rotationFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path

and the distance of this point from the begining of the path :

```javascript

var rotationFunction = function(i, distance) {

    // do things

    return rotationValue; }

```

It must returns a float value that will be the rotation in radians applied to the shape on each path point.

The parameter `scaleFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path

and the distance of this point from the begining of the path :

```javascript

var scaleFunction = function(i, distance) {

    // do things

   return scaleValue;}

```

It must returns a float value that will be the scale value applied to the shape on each path point.

The parameter `ribbonClosePath` (boolean, default false) forces the extrusion underlying ribbon to close all the paths in its `pathArray`.

The parameter `ribbonCloseArray` (boolean, default false) forces the extrusion underlying ribbon to close its `pathArray`.

The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.[Mesh](/classes/2.4/Mesh).NO_CAP (default), BABYLON.[Mesh](/classes/2.4/Mesh).CAP_START, BABYLON.[Mesh](/classes/2.4/Mesh).CAP_END, BABYLON.[Mesh](/classes/2.4/Mesh).CAP_ALL

The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#extruded-shape

Remember you can only change the shape or path point positions, not their number when updating an extruded shape.

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | shape | [Vector3](/classes/2.4/Vector3)[] |    
 | path | [Vector3](/classes/2.4/Vector3)[] |    The tube will follow this points path
 | scaleFunction | Function |    
 | rotationFunction | Function |    
 | ribbonCloseArray | boolean |    
 | ribbonClosePath | boolean |    
 | cap | number |    Add caps on each side of the tube
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
optional | sideOrientation | number |   &nbsp;
### static CreateLathe(name, shape, radius, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.4/Mesh)

Creates lathe mesh.

The lathe is a shape with a symetry axis : a 2D model shape is rotated around this axis to design the lathe.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.



The parameter `shape` is a required array of successive [Vector3](/classes/2.4/Vector3). This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be

rotated around the Y axis. It's usually a 2D shape, so the [Vector3](/classes/2.4/Vector3) z coordinates are often set to zero.

The parameter `radius` (positive float, default 1) is the radius value of the lathe.

The parameter `tessellation` (positive integer, default 64) is the side number of the lathe.

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | shape | [Vector3](/classes/2.4/Vector3)[] |    
 | radius | number |    Radius of the tube
 | tessellation | number |   &nbsp;
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
### static CreatePlane(name, size, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a plane mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameter `size` sets the size (float) of both sides of the plane at once (default 1).

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | size | number |    
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
### static CreateGround(name, width, height, subdivisions, scene, updatable) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a ground mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameters `width` and `height` (floats, default 1) set the width and height sizes of the ground.

The parameter `subdivisions` (positive integer) sets the number of subdivisions per side.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | width | number |    The width of the GroundFromHeightMap
 | height | number |    The height of the GroundFromHeightMap
 | subdivisions | number |    The number of subdivisions in the GroundFromHeightMap
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
### static CreateTiledGround(name, xmin, zmin, xmax, zmax, subdivisions, precision, scene, updatable) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a tiled ground mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameters `xmin` and `xmax` (floats, default -1 and 1) set the ground minimum and maximum X coordinates.

The parameters `zmin` and `zmax` (floats, default -1 and 1) set the ground minimum and maximum Z coordinates.

The parameter `subdivisions` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the

numbers of subdivisions on the ground width and height. Each subdivision is called a tile.

The parameter `precision` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the

numbers of subdivisions on the ground width and height of each tile.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | xmin | number |    The xmin of the [Ground](/classes/2.4/Ground)
 | zmin | number |    The zmin of the [Ground](/classes/2.4/Ground)
 | xmax | number |    The xmax of the [Ground](/classes/2.4/Ground)
 | zmax | number |    The zmax of the [Ground](/classes/2.4/Ground)
 | subdivisions | { w: number,  h: number } |    The number of subdivisions in the GroundFromHeightMap
 | precision | { w: number,  h: number } |    The number of subdivisions in each tile (precision.w : in width; precision.h : in height)
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
### static CreateGroundFromHeightMap(name, url, width, height, subdivisions, minHeight, maxHeight, scene, updatable, onReady) &rarr; [GroundMesh](/classes/2.4/GroundMesh)

Creates a ground mesh from a height map.

tuto : http://doc.babylonjs.com/tutorials/14._Height_Map

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameter `url` sets the URL of the height map image resource.

The parameters `width` and `height` (positive floats, default 10) set the ground width and height sizes.

The parameter `subdivisions` (positive integer, default 1) sets the number of subdivision per side.

The parameter `minHeight` (float, default 0) is the minimum altitude on the ground.

The parameter `maxHeight` (float, default 1) is the maximum altitude on the ground.

The parameter `onReady` is a javascript callback function that will be called  once the mesh is just built (the height map download can last some time).

This function is passed the newly built mesh :

```javascript

function(mesh) { // do things

    return; }

```

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | url | string |    URL of the GroundFromHeightMap
 | width | number |    The width of the GroundFromHeightMap
 | height | number |    The height of the GroundFromHeightMap
 | subdivisions | number |    The number of subdivisions in the GroundFromHeightMap
 | minHeight | number |   &nbsp; minHeight of the new GFHM
 | maxHeight | number |    The maximum height of the Height map
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
### static CreateTube(name, path, radius, tessellation, radiusFunction, cap, scene, updatable, sideOrientation, instance) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a tube mesh.

The tube is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.



Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameter `path` is a required array of successive [Vector3](/classes/2.4/Vector3). It is the curve used as the axis of the tube.

The parameter `radius` (positive float, default 1) sets the tube radius size.

The parameter `tessellation` (positive float, default 64) is the number of sides on the tubular surface.

The parameter `radiusFunction` (javascript function, default null) is a vanilla javascript function. If it is not null, it overwrittes the parameter `radius`.

This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path.

It must return a radius value (positive float) :

```javascript

var radiusFunction = function(i, distance) {

    // do things

    return radius; }

```

The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.[Mesh](/classes/2.4/Mesh).NO_CAP (default), BABYLON.[Mesh](/classes/2.4/Mesh).CAP_START, BABYLON.[Mesh](/classes/2.4/Mesh).CAP_END, BABYLON.[Mesh](/classes/2.4/Mesh).CAP_ALL

The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#tube

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | path | [Vector3](/classes/2.4/Vector3)[] |    The tube will follow this points path
 | radius | number |    Radius of the tube
 | tessellation | number |   &nbsp;
 | radiusFunction | { (i, distance): number } |   &nbsp;
 | cap | number |    Add caps on each side of the tube
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
optional | updatable | boolean |   &nbsp;
optional | sideOrientation | number |   &nbsp;
### static CreatePolyhedron(name, options, scene) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a polyhedron mesh.



Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embbeded types. Please refer to the type sheet in the tutorial

 to choose the wanted type.

The parameter `size` (positive float, default 1) sets the polygon size.

You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value).

You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overwrittes the parameter `type`.

A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron

You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` ([Color4](/classes/2.4/Color4), default `(1, 1, 1, 1)`) and faceUV ([Vector4](/classes/2.4/Vector4), default `(0, 0, 1, 1)`).

To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : http://doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors

The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored.

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | options | { type: number,  size: number,  sizeX: number,  sizeY: number,  sizeZ: number,  custom: any,  faceUV: [Vector4](/classes/2.4/Vector4)[],  faceColors: [Color4](/classes/2.4/Color4)[],  updatable: boolean,  sideOrientation: number } |   
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
### static CreateIcoSphere(name, options, scene) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

The parameter `radius` sets the radius size (float) of the icosphere (default 1).

You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value than `radius`).

The parameter `subdivisions` sets the number of subdivisions (postive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size.

The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface.

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.4/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.4/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.4/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | options | { radius: number,  flat: boolean,  subdivisions: number,  sideOrientation: number,  updatable: boolean } |   
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) to add the tube
### static CreateDecal(name, sourceMesh, position, normal, size, angle) &rarr; [Mesh](/classes/2.4/Mesh)

Creates a decal mesh.

Please consider using the same method from the [MeshBuilder](/classes/2.4/MeshBuilder) class instead.

A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal.

The parameter `position` ([Vector3](/classes/2.4/Vector3), default `(0, 0, 0)`) sets the position of the decal in World coordinates.

The parameter `normal` ([Vector3](/classes/2.4/Vector3), default `[Vector3](/classes/2.4/Vector3).Up`) sets the normal of the mesh where the decal is applied onto in World coordinates.

The parameter `size` ([Vector3](/classes/2.4/Vector3), default `(1, 1, 1)`) sets the decal scaling.

The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | sourceMesh | [AbstractMesh](/classes/2.4/AbstractMesh) |    
 | position | [Vector3](/classes/2.4/Vector3) |    
 | normal | [Vector3](/classes/2.4/Vector3) |    
 | size | [Vector3](/classes/2.4/Vector3) |    
### setPositionsForCPUSkinning() &rarr; Float32Array

@returns original positions used for CPU skinning.  Useful for integrating Morphing with skeletons in same mesh.
### setNormalsForCPUSkinning() &rarr; Float32Array

@returns original normals used for CPU skinning.  Useful for integrating Morphing with skeletons in same mesh.
### applySkeleton(skeleton) &rarr; [Mesh](/classes/2.4/Mesh)

Update the vertex buffers by applying transformation from the bones

#### Parameters
 | Name | Type | Description
---|---|---|---
 | skeleton | [Skeleton](/classes/2.4/Skeleton) |   

### static MinMax(meshes) &rarr; { min: [Vector3](/classes/2.4/Vector3),  max: [Vector3](/classes/2.4/Vector3) }

Returns an object `{min: [Vector3](/classes/2.4/Vector3), max: [Vector3](/classes/2.4/Vector3)}`

This min and max [Vector3](/classes/2.4/Vector3) are the minimum and maximum vectors of each mesh bounding box from the passed array, in the World system

#### Parameters
 | Name | Type | Description
---|---|---|---
 | meshes | [AbstractMesh](/classes/2.4/AbstractMesh)[] |    

### static Center(meshesOrMinMaxVector) &rarr; [Vector3](/classes/2.4/Vector3)

Returns a `[Vector3](/classes/2.4/Vector3)`, the center of the `{min: [Vector3](/classes/2.4/Vector3), max: [Vector3](/classes/2.4/Vector3)}` or the center of MinMax vector3 computed from a mesh array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | meshesOrMinMaxVector | any |    @param meshesOrMinMaxVector

### static MergeMeshes(meshes, disposeSource, allow32BitsIndices, meshSubclass) &rarr; [Mesh](/classes/2.4/Mesh)

Merge the array of meshes into a single mesh for performance reasons.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | meshes | Array&lt;[Mesh](/classes/2.4/Mesh)&gt; |    
optional | disposeSource | boolean |    
optional | allow32BitsIndices | boolean |    
