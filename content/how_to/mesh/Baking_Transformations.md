---
PG_TITLE: Baking Transformations
---

# Baking Transformations

In certain situations you might be interested in applying a transform (position, rotation, scale) directly to the mesh vertices, instead of saving it as a property of the mesh. This is called baking, and can be useful in the following situations:

- building a set of static geometry
- randomizing a series of mesh copies
- mirroring a mesh along an axis
- etc.

Two methods can be used for this process:

`bakeTransformIntoVertices(transform: Matrix)`: this will bake the provided matrix directly into the mesh vertices. For example:

```
// this will permanently mirror the mesh along the Y axis, while leaving the transform properties untouched
var matrix = BABYLON.Matrix.Scaling(1, -1, 1);
mesh.bakeTransformIntoVertices(matrix);
```

`bakeCurrentTransformIntoVertices()`: this will bake the current transform properties of the mesh into the vertices, and clear those properties. This includes _rotation_, _translation_ and _scaling_.

Note: scaling a mesh will often give unrealistic results for lighting, since the normals will simply be scaled along and not properly recomputed. This is illustrated in the following picture: 

![Normals illustration](http://i.imgur.com/18wDAH7.png) 

_In the above picture, you can see an untransformed mesh on the left, the same mesh scaled along the X axis in the middle and on the right, the mesh with its normals correctly recomputed._


You can do a recomputation of your normals like so:

```
var indices = mesh.getIndices();
var normals = mesh.getVerticesData(VertexBuffer.NormalKind);
BABYLON.VertexData.ComputeNormals(positions, indices, normals);
mesh.updateVerticesData(VertexBuffer.NormalKind, normals, false, false);
```

Please note that recomputing the normals of your mesh may not be an ideal solution, as the results may be wrong in some parts of the mesh (e.g. seams on a sphere).

