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
The feature `facetData` can work for any mesh whatever it is created from BJS provided shapes (box, sphere, cylinder, tube, parametric shapes, etc), cloned ones (not instances), merged ones or imported ones from an external source (Blender, etc).  
To enable this feature, just call once `updateFacetData()`.  
If the mesh belongs to some parent-child relationship, the feature is then not enabled for its parents or children.  
```javascript
var mesh = BABYLON.MeshBuilder.CreateTorusKnot("t", {radius: 2.0}, scene);
mesh.updateFacetData();
console.log(mesh.facetNb);
```
As soon as the feature is enabled, you can get the mesh total number of facets with the read-only property `.facetNb`.  

The method `updateFacetData()` creates two permanent arrays : the mesh facet positions and facet normals.  
Moreover, it logically divides the mesh according some partitioning and stores all the facets in this partitioning.  
Unless the mesh is updated or morphed afterwards, you don't need to call this method anymore once it has been done.  
If you don't need this feature any longer, you can disabled it to release the memory with `mesh.disableFacetData()`.  
```javascript
mesh.updateFacetData();
console.log(mesh.isFacetDataEnabled);  // displays "true"
mesh.disableFacetData();
console.log(mesh.isFacetDataEnabled);  // displays "false"
```
The read-only property `.isFacetDataEnabled` returns the current state of the feature.   
Note that disposing the mesh will automatically disable its facet data.  

#### The facet data tools
##### Facet position
The position of a facet is the position of its barycenter.  
You can get the position of the i-th facet of a mesh with `getFacetPosition(i)`. This returns a new `Vector3` that is the world coordinates of the facet center.  
```javascript
var pos = mesh.getFacetPosition(50); // returns the world position of the mesh 50th facet
```
If you don't want to allocate a new `Vector3` per call, you can use `getFacetPositionToRef(i, ref)` instead.
```javascript
var pos = BABYLON.Vector3.Zero();
mesh.getFacetPositionToRef(50, ref); // stores the facet world position in the variable "pos"
```

Actually, in the internal array containing the facet positions, all the stored coordinates are computed in the mesh local space.  
If you need to get some facet local position, call `getFacetLocalPositions()` to get the array of the facet positions, then access the i-th element.  
```javascript
var localPositions = mesh.getFacetLocalPositions(); // returns the array of facet positions in the local space
var localPos = localPositions[50];                  // Vector3 : the 50th facet local position
```
##### Facet normal
The normal of a facet is the normalized vector orthogonal to the facet plane.  
You can get the normal of the i-th facet of a mesh with `getFacetNormal(i)`. This returns a new `Vector3` that is the world coordinates of the facet normal.  
```javascript
var norm = mesh.getFacetNormal(50); // returns the world normal of the mesh 50th facet
```
If you don't want to allocate a new `Vector3` per call, you can use `getFacetNormalToRef(i, ref)` instead.
```javascript
var norm = BABYLON.Vector3.Zero();
mesh.getFacetNormalToRef(50, ref); // stores the facet world normal in the variable "norm"
```

Like for the positions, in the internal array containing the facet normals, all the stored coordinates are computed in the mesh local space.  
If you need to get some facet local normal, call `getFacetLocalNormals()` to get the array of the facet local normals, then access the i-th element.  
```javascript
var localNormals = mesh.getFacetLocalNormals();   // returns the array of facet normals in the local space
var localPos = localNormals[50];                  // Vector3 : the 50th facet local position
```
###### Note
All the methods dealing with the world coordinates use the mesh world matrix. As you may know, this matrix is automatically computed on the render call.  
If you've just moved, scaled or rotated your mesh before calling the facetData methods using the world values and you're not sure about this, you can ever force the world matrix computation.  
```javascript
mesh.rotate.y += 0.2;               // the mesh will be rotated on the next render call, but I need a rotated normal
mesh.computeWorldMatrix(true);      // force the world matrix computation
var norm = mesh.getFacetNormal(50); // returns the world normal of the mesh 50th facet
```
###### Examples :  
Displaying all the facet normals of an icosphere : http://www.babylonjs-playground.com/#1YTZAC  
Just change the mesh shape, torus knot : http://www.babylonjs-playground.com/#1YTZAC#1  
Smarter : set a box at a distance of 2 from the mesh 10th facet and keep it there, even if the mesh rotates : http://www.babylonjs-playground.com/#1YTZAC#3  
Of course, you add some translation to the mesh and even some rotation to the box : http://www.babylonjs-playground.com/#1YTZAC#4  

##### Mesh partitioning
The feature `facetData` provides also another tool called the mesh partitioning.  
The mesh is logically divided in 3D blocks aligned with the X, Y and Z axis in its local space.  
Here's an illustration about how this logical partitioning looks like : http://www.babylonjs-playground.com/#UZGNA  
In order to improve the visibility, the planes along the axis Z weren't displayed.  
As you can see, there's by default 10 subdivisions on each axis.  
When you call `updateFacetData()`, the indexes of the all the facets are sorted in the partioning array according to the facet belonging of each block.  
Then, you get all the facet indexes from some local coordinates (x, y, z) with `getFacetsAtLocalCoordinates(x, y, z)`.  
```javascript
var indexes = mesh.getFacetsAtLocalCoordinates(x, y, z);    // returns an array containing the facet indexes
if (indexes) {
    var worldPos = mesh.getFacetPosition(indexes[0]);       // the world position of the first facet in the block
}
```
This method returns an array containing the indexes of the facet belonging to the block containing the point at the coordinates (x, y, z).  
If (x, y, z) aren't in any block or if there are facets in the block containing (x, y, z), it returns `null`.  
Thus you can retrieve all the facets near some position and do your own treatment.  
This method can be called as many times you need, even in the render loop.  

Sometimes you don't need all the facets from a given block but only the closest facet to some world, and not local, coordinates.  
You can then use the method `getClosestFacetAtCoordinates(x, y, z)` what returns the index of the closest facet to the World coordinates (x, y, z).  
```javascript
var index = mesh.getClosestFacetAtCoordinates(x, y, z); // returns the index of the closest facet to (x, y, z)
if (index) {
    var worldPos = mesh.getFacetPosition(indexes[0]);   // the world position of this facet
}
```
The method returns just the index of the closest facet, if any.  
Actually the world coordinates (x, y, z) are internally transformed to local coordinates in the mesh local system.  
If these local coordinates aren't in any block or if there's no facet in this block, it returns `null`.  
This method can be called as many times you need, even in the render loop.  

This method can also compute for you the coordinates of the projection of (x, y, z) on the closest facet plane. You can imagine this projection point as the contact point of (x, y, z) on the facet, or the nearest point from (x, y, z) on the facet.  
Just pass it a`Vector3` as a reference :
```javascript
var projected = BABYLON.Vector3.Zero();
var index = mesh.getClosestFacetAtCoordinates(x, y, z, projected); // sets the point "projected" world coordinates
if (index) {
    var worldPos = mesh.getFacetPosition(indexes[0]);              // the world position of this facet
    // use the vector3 projected here ...
}
```
You can even filter the returned facet index.  
Imagine that you want only the facet "facing" the coordinates (x, y, z), it is to say the facet what the dot product normal * facetPosition_to_(x, y, z) is positive.  
So just set the fifth parameter `checkFace` to `true` (default `false`) and the sixth parameter `facing?` to `true` (default `true`).  
```javascript
var projected = BABYLON.Vector3.Zero();
var index = mesh.getClosestFacetAtCoordinates(x, y, z, projected, true); // just the "facing" closest facet
if (index) {
    var worldPos = mesh.getFacetPosition(indexes[0]);                    // the world position of this facet
    // use the vector3 projected here ...
}
```
In contrary, if you just want the closest facet "turning its back" to (x, y, z), set `checkFace` to `true` and `facing?` to `false`.  
```javascript
var projected = BABYLON.Vector3.Zero();
var index = mesh.getClosestFacetAtCoordinates(x, y, z, projected, true, false); // just the "turning back" closest facet
if (index) {
    var worldPos = mesh.getFacetPosition(indexes[0]);                           // the world position of this facet
    // use the vector3 projected here ...
}
```

If you need it, this method exists also in the mesh local space. Everything is then expressed in the local space : (x, y, z) and the returned coordinates of the projected point.  
Just call `getClosestFacetAtLocalCoordinates(x, y, z, projected, checkFace, facing?)` instead.  
```javascript
var localProj = BABYLON.Vector3.Zero();
var index = mesh.getClosestFacetAtLocalCoordinates(x, y, z, localProj); // local projection
if (index) {
    var worldPos = mesh.getFacetPosition(indexes[0]);                    // the world position of this facet
    // use the vector3 localProj here ...
}
```
###### Example
A rotating torus knot with facet data enabled and a Solid Particle System (SPS) moving balls with simple custom physics :  

* move the ball,
* get the torus closest facet to the particle,
* if any, bounce back the particle.    

http://www.babylonjs-playground.com/#7ATLX


##### Updating facet data


