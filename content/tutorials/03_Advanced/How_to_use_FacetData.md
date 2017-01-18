### Facet Data
#### What is FacetData ?
FacetData is a feature that can be enabled on a mesh.  
As it requires some extra memory, it's not enabled by default.  
This feature provides some methods and properties to access each facet of a mesh, like the facet positions, normals or the ability to retrieve all of a mesh facets in a given zone of the world space.  
#### What is a mesh facet ?
We use here the term "facet" not to be confused with the term "face".  
A mesh can have some planar faces. For example, a box has 6 sides, so 6 planar squared faces. Each of its faces are drawn at the WebGL level with 2 triangles.  
We call "facets" these elementary triangles.  
#### How to enable the facet data ?
The feature `facetData` can work for any mesh whatever it is created from BJS provided shapes (box, sphere, cylinder, tube, parametric shapes, etc) or imported from an external source (Blender, etc).  
To enable this feature, just call once `updateFacetData()`.  
```javascript
var mesh = BABYLON.MeshBuilder.CreateTorusKnot("t", {radius: 2.0}, scene);
mesh.updateFacetData();
```
This method then creates two permanent arrays : the mesh facet positions and facet normals.  
Moreover, it logically divides the mesh according some partitioning and stores all the facets in this partitioning.  
Unless the mesh is updated or morphed afterwards, you don't need to call this method anymore once it has been called once.  
#### The facet data tools
You can get the position of the i-th facet of a mesh with `getFacetPosition(i)`. This returns a new `Vector3` that are the world coordinates of the facet center (barycenter).  
```javascript
var pos = mesh.getFacetPosition(50); // returns the world position of the mesh 50th facet
```
If you don't want to allocate a new `Vector3` per call, you can use `getFacetPositionToRef(i, ref)` instead.
```javascript
var pos = BABYLON.Vector3.Zero();
mesh.getFacetPositionToRef(50, ref); // stores the facet world position in the variable pos
```

