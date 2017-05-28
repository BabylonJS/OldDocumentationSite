---
PG_TITLE: PolygonMeshBuilder Tutorial
---

#  PolygonMeshBuilder Tutorial

Given the corner points of a polygon in the XoY plane the PolygonMeshBuilder constructs vertices forming a triangulation of the polygon. This is then converted to a mesh using the build() function. It is also possible to add sides to and a polygon constructed with PolygonMeshBuilder and to include holes inside it but on doing either a new mesh would need to be built. 

## Constraints

The polygon and any holes inside it must be simple, that is no overlapping sides. Holes should be wholly inside the polygon and should not be too close to the sides of the polygon or to each other.

![Safe Construction](/img/tutorials/PolyMeshBuild/pmberr1.jpg)

![Unsafe Construction](/img/tutorials/PolyMeshBuild/pmberr2.jpg)

![Unsafe Construction](/img/tutorials/PolyMeshBuild/pmberr3.jpg)

## Construction

There are two methods of creating a polygon, either using a Path2 object or an array of Vector2. In both cases the corners of the polygon are entered once in consecutive counter clockwise order around the polygon. The Path2 object has the benefit of being able to add arcs. PolygonMeshBuilder is then called to produce a triangulation of the polygon from which a mesh can be built.

```javascript
var polygon_triangulation = new BABYLON.PolygonMeshBuilder("name", [vec21, vec22, vec23], scene);
var polygon = polygon_triangulation.build();
```
The build function takes two optional parameters, updatable a boolean, true if the mesh is to be updatable and should the polygon need to be extruded the depth of the extrusion.

```javascript
var polygon_triangulation = new BABYLON.PolygonMeshBuilder("name", Path2, scene);
var polygon = polygon_triangulation.build(false, 3);
```

[Playground Example - Simple Polygons Using Both Methods](http://www.babylonjs-playground.com/#PTTMVI#1)

## Holes

A hole is given only as an array of Vector2, representing the corners of the hole in consecutive couter clockwise order around the hole.

Holes are added to the polygon triangulation using the addHole function.

```javascript
polygon_triangulation.addHole(hole1);
polygon_triangulation.addHole(hole2);
polygon_triangulation.addHole(hole3);
var polygon = polygon_triangulation.build(true, 1.4);
```

[Playground Example - Simple Polygons with a Hole](http://www.babylonjs-playground.com/#PTTMVI#2)