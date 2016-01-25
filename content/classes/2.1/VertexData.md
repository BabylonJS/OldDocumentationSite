---
ID_PAGE: 25261
PG_TITLE: VertexData
PG_VERSION: 2.1
---

The [VertexData](/classes/VertexData) Class







##Members

###positions : number[]





The [VertexData](/classes/VertexData) position




###normals : number[]





The [VertexData](/classes/VertexData) normals




###uvs : number[]





The [VertexData](/classes/VertexData) uvs




###uv2s : number[]





The [VertexData](/classes/VertexData) uvs2




###colors : number[]





The [VertexData](/classes/VertexData) colors




###matricesIndices : number[]





The [VertexData](/classes/VertexData) matricesIndices




###matricesWeights : number[]





The [VertexData](/classes/VertexData) matricesWeights




###indices : number[]





The [VertexData](/classes/VertexData) indices















##Methods

###set(data, kind) &rarr; void
Set the vertex data







####Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] | @param data
 | kind | string | @param kind
---

###applyToMesh(mesh, updatable) &rarr; void
Apply To mesh







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/Mesh) | The mesh
optional | updatable | boolean | @param updatable
---

###applyToGeometry(geometry, updatable) &rarr; void
Apply to [Geometry](/classes/Geometry)







####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/Geometry) | @param geometry
optional | updatable | boolean | @param updatable
---

###updateMesh(mesh, updateExtends, makeItUnique) &rarr; void
Update [Mesh](/classes/Mesh)







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/Mesh) | This mesh
optional | updateExtends | boolean | Not used here
optional | makeItUnique | boolean | Not used here
---

###updateGeometry(geometry, updateExtends, makeItUnique) &rarr; void
Update







####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/Geometry) | @param geometry
optional | updateExtends | boolean | Not used here
optional | makeItUnique | boolean | Not used here
---

###transform(matrix) &rarr; void
Transform his vertexdata with the given matri







####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/Matrix) | @param matrix
---

###merge(other) &rarr; void
Merge this vertex data with the one given in parameter







####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [VertexData](/classes/VertexData) | @param other
---

###static ExtractFromMesh(mesh, copyWhenShared) &rarr; [VertexData](/classes/VertexData)
Creates a new VertexDataObject with values extracted of the given mesh







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/Mesh) | @param mesh
optional | copyWhenShared | boolean | 
---

###static ExtractFromGeometry(geometry, copyWhenShared) &rarr; [VertexData](/classes/VertexData)
Creates a new VertexDataObject with values extracted of the given geometry







####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/Geometry) | @param geometry
optional | copyWhenShared | boolean | 
---

###static CreateRibbon(pathArray, closeArray, closePath, offset, sideOrientation) &rarr; [VertexData](/classes/VertexData)

####Parameters
 | Name | Type | Description
---|---|---|---
 | pathArray | [Vector3](/classes/Vector3)[][] | 
 | closeArray | boolean | 
 | closePath | boolean | 
 | offset | number | 
optional | sideOrientation | number | 
---

###static CreateBox(size, sideOrientation) &rarr; [VertexData](/classes/VertexData)
Creates a new [VertexData](/classes/VertexData) object of a box of the given size







####Parameters
 | Name | Type | Description
---|---|---|---
 | size | number | The size of the box
optional | sideOrientation | number | 
---

###static CreateSphere(segments, diameter, sideOrientation) &rarr; [VertexData](/classes/VertexData)
Creates a new [VertexData](/classes/VertexData) object of a sphere of the given diameter







####Parameters
 | Name | Type | Description
---|---|---|---
 | segments | number | The number of segments of the result sphere
 | diameter | number | The diameter of the sphere
optional | sideOrientation | number | 
---

###static CreateCylinder(height, diameterTop, diameterBottom, tessellation, subdivisions, sideOrientation) &rarr; [VertexData](/classes/VertexData)
Creates a new [VertexData](/classes/VertexData) object of a cylinder of the given parameters







####Parameters
 | Name | Type | Description
---|---|---|---
 | height | number | The height of the cylinder
 | diameterTop | number | Diameter at top of the cylinder
 | diameterBottom | number | Diameter at bottom of the cylinder
 | tessellation | number | The tessellation of the cylinder
optional | subdivisions | number | the subdivisions of the cylinder
optional | sideOrientation | number | 
---

###static CreateTorus(diameter, thickness, tessellation, sideOrientation) &rarr; [VertexData](/classes/VertexData)
Creates a new [VertexData](/classes/VertexData) object of a torus of the given parameters







####Parameters
 | Name | Type | Description
---|---|---|---
 | diameter | any | The diameter of the [Torus](/classes/Torus)
 | thickness | any | The thickness of the [Torus](/classes/Torus)
 | tessellation | any | The tessellation of the [Torus](/classes/Torus)
optional | sideOrientation | number | 
---

###static CreateLines(points) &rarr; [VertexData](/classes/VertexData)
Creates a new [VertexData](/classes/VertexData) object of a ground of the given parameters







####Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector3](/classes/Vector3)[] | The points of the Line
---

###static CreateDashedLines(points, dashSize, gapSize, dashNb) &rarr; [VertexData](/classes/VertexData)

####Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector3](/classes/Vector3)[] | 
 | dashSize | number | 
 | gapSize | number | 
 | dashNb | number | 
---

###static CreateGround(width, height, subdivisions) &rarr; [VertexData](/classes/VertexData)
Creates a new [VertexData](/classes/VertexData) object of a ground of the given parameters







####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | The width of the ground
 | height | number | The height of the ground
 | subdivisions | number | The subdivisions of the ground
---

###static CreateTiledGround(xmin, zmin, xmax, zmax, subdivisions, precision) &rarr; [VertexData](/classes/VertexData); 
Create a new [VertexData](/classes/VertexData) object of a [TiledGround](/classes/TiledGround) with the given properties







####Parameters
 | Name | Type | Description
---|---|---|---
 | xmin | number | The xmin of the [Ground](/classes/Ground)
 | zmin | number | The zmin of the [Ground](/classes/Ground)
 | xmax | number | The xmax of the [Ground](/classes/Ground)
 | zmax | number | The zmax of the [Ground](/classes/Ground)
optional | subdivisions | {w: number; h: number; } | The number of tiles (subdivisions.w : in width; subdivisions.h : in height)
optional | precision | { w: number; h: number; } | The number of subdivisions in each tile (precision.w : in width; precision.h : in height)
---

###static CreateGroundFromHeightMap(width, height, subdivisions, minHeight, maxHeight, buffer, bufferWidth, bufferHeight) &rarr; [VertexData](/classes/VertexData)
Creates a new [VertexData](/classes/VertexData) object of a huge ground of the given parameters







####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | The width of the GroundFromHeightMap
 | height | number | The width of the GroundFromHeightMap
 | subdivisions | number | The number of subdivisions in the GroundFromHeightMap
 | minHeight | number | The minimum Height of the new GFHM
 | maxHeight | number | The maximum height of the Height map
 | buffer | Uint8Array | @param buffer
 | bufferWidth | number | @param bufferWidth
 | bufferHeight | number | @param bufferHeight
---

###static CreatePlane(size, sideOrientation) &rarr; [VertexData](/classes/VertexData)
Creates a new [VertexData](/classes/VertexData) object of a plane of the given parameters







####Parameters
 | Name | Type | Description
---|---|---|---
 | size | number | the size of the plane
optional | sideOrientation | number | 
---

###static CreateDisc(radius, tessellation, sideOrientation) &rarr; [VertexData](/classes/VertexData)

####Parameters
 | Name | Type | Description
---|---|---|---
 | radius | number | 
 | tessellation | number | 
optional | sideOrientation | number | 
---

###static CreateTorusKnot(radius, tube, radialSegments, tubularSegments, p, q, sideOrientation) &rarr; [VertexData](/classes/VertexData)
Creates a new [VertexData](/classes/VertexData) object of a torus knot of the given parameters. &lt;br/&gt;
Based on &lt;a href=&quot;http://code.google.com/p/away3d/source/browse/trunk/fp10/Away3D/src/away3d/primitives/TorusKnot.as?spec=svn2473&amp;r=2473&quot;&gt;http://code.google.com/p/away3d/source/browse/trunk/fp10/Away3D/src/away3d/primitives/TorusKnot.as?spec=svn2473&amp;r=2473&lt;/a&gt;







####Parameters
 | Name | Type | Description
---|---|---|---
 | radius | number | The radius of the [TorusKnot](/classes/TorusKnot)
 | tube | number | @param tube
 | radialSegments | number | @param radialSegments
 | tubularSegments | number | @param tubularSegments
 | p | number | Describes up-and-down (P) winding numbers
 | q | number | Describes around-the-center (Q) winding numbers
optional | sideOrientation | number | 
---

###static ComputeNormals(positions, indices, normals) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | positions | any | @param positions
 | indices | any | @param indices
 | normals | any | @param normals
---
