---
PG_TITLE: A Wide Range of Mesh Types
title: A Range of Meshes
abstract: ''
slug: shapes
---

# Meshes

In the 3D virtual world shapes are built from meshes, lots of trangular facets joined together, each facet made from three vertices.

![A mesh](/img/features/scene/custom1.jpg)

Babylon.js provides for the creation of predefined meshes and of custom meshes. For all meshes the underlying data structure is exposed and can be updated.

Specialist meshes such as [sprites](/babylon-101/babylon-101/sprites), [2D particles](/babylon-101/babylon-101/particles) and [3D solid particles](/how-to/mesh/solid-particle-system) are also available.

## Types

There are two types of predefined meshes, [set shapes](/how-to/mesh/set-shapes) and [parametric shapes](/How_To/Parametric Shapes). Set shapes usually already have names in everyday use and their forms are well known and recognized. They are a box (or cuboid), a sphere, a cylinder, a cone, regular polygons, a plane and a specialist horizontal plane called the ground. Slightly less well know but also included in set shapes are a torus, a torus knot and the polyhedra. Parametric shapes have no everyday names but are formed through data sets and parameters and most often their shape is unpredictable. These include lines, a system of lines, ribbons, tubes, extrusions, lathed shapes and irregular polygons. 

Mention has already been made of the horizonal plane called the ground which is your common flat everyday surface like a floor. You will be pleased to know that it comes in other varieties to provide an outside terrain with rolling hills and valleys. For a view from a distance terrain you use [GroundFromAHeightMap](/babylon-101/babylon-101/height-map). If you literally want rolling hills add the extension [dynamic terrain][/Extension/dynamic_terrain] which gives you an infinite landscape to fly over.


## Ways of Creating a Predefined Mesh

Since Babylon.js version 2.3 there are two techniques to use to create a predefined mesh. Using the newest technique a mesh is created using the _MeshBuilder_ method where meshes are created with the following format and &lt;Mesh&gt; is replaced with the required type of mesh.

```javascript
var mesh = BABYLON.MeshBuilder.Create<Mesh>(name, {param1 : val1, param2: val2}, scene);
```

The older or legacy method which has the form 

```javascript
var mesh = BABYLON.Mesh.Create<Mesh>(name, param1, param2, ..., scene, optional_parameter1, ........);
```
and is still available and will often be seen in Playground examples.

The _MeshBuilder_ method has the advantages of making all (or some) of the parameters optional depending on the mesh and provides more features than the legacy method. Using default values for the shapes the only parameters need for mesh creation is a name, which can be blank and an empty object.

For example to create a box which is an unit cube all that is needed is

```javascript
var box = BABYLON.MeshBuilder.CreateBox("", {});
```

[Playground Example Default Box](https://www.babylonjs-playground.com/#3QW4J1#2)

However, You will find most people will still write

```javascript
var box = BABYLON.MeshBuilder.CreateBox("", {}, scene);
```
since the ability to drop the scene parameter is fairly recent, not well know, old habits die hard and if you transfer your code to a project with more than one scene then missing it out can cause confusion. But if you are working with just one scene, and most people are, and you are happy to do so you can leave it out.

With the legacy method the scene parameter must be present, you can only create a box that is a cube and if you wanted a cuboid you needed to apply scaling, which is some circumastance could prove tricky. However it can be fairly quick to type.

For example if you want an updatable cuboid with different dimensions in all directions that is doublesided so you can view it from the inside and outside then using _MeshBuilder_ requires

```javascript
var box = BABYLON.MeshBuilder.CreateBox("", {height: 6, width: 4, depth: 2, updatable: true, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
```

whereas the legacy method needs

```javascript
var box = BABYLON.Mesh.CreateBox("box", 1, scene, true, BABYLON.Mesh.DOUBLESIDE);
box.scaling = new BABYLON.Vector3(4, 6, 2);
```
and the scene prameter is necessary to position the updatable and sideOrientation parameters correctly.

Also using _MeshBuilder_ you can [apply different colors and images to individual faces](/how-to/material/create-box-per-face-textures-and-colors) of meshes that have distinct faces (for example a box does but a sphere does not). This is not possible with the legacy method.

For a second example consider the creation of a truncated cone with a diameter of 3 top and and 6 at the bottom, with height 5 constructed using 16 radial sections and 10 vertical subdivisions.

**MeshBuilder**
```javascript
var options = {
    diameterTop:3, 
    diameterBottom: 6, 
    height: 5, 
    tessellations: 16, 
    subdivisions: 10
}
var cylinder = BABYLON.MeshBuilder.CreateCylinder("myCylinder", options);
```

**Legacy**
```javascript
var cylinder = BABYLON.Mesh.CreateCylinder("myCylinder", 5, 3, 6, 16, 10, scene);
```

## Creating a Custom Mesh

To create your own custom mesh requires you to know the internal data structure of a mesh and how to transfer details of your shape to this structure by setting the positions and normals of the vertices making up each triangular facet.  With a little mathematics knowledge this is quite straight forward should you wish to do it. 

Want to know more about the facets that make up a mesh then enabling _FacetData_ is just for you. You can obtain a facets position and its mathematical normal for example. 

[Further Reading](#further-readin) will show you how to do all of these.

## Other Mesh Features

### Copying a Mesh

The following features reduce the number of draw calls. When you want a number of meshes that share the same geometry and material, you can create one mesh and then obtain many instances of that mesh and re-position each and rotate each seperately. When you want many meshes with the same geometry but having different materials then Babylon.js provides you with the facility to clone a mesh. 

Another way available to you, especially if you want a very large number of identical meshes is to use particles. You have the option of using 2D meshes or sprites or f or very many identical 3D meshes that can be positioned and rotated individually and are fast then the solid particle system (SPS) is for you.

### Collide with a Camera, another Mesh, a Ray or Pointer

When you are moving around a scene in a _first person shooter_  manner then you want to be able to react if an object is blocking the way. You can as [Camera Collision](/babylon-101/babylon-101/cameras_-mesh-collisions-and-gravity) is a provided facility. As is the [Intersection of Meshes](/babylon-101/babylon-101/intersect-collisions-mesh), [Raycasting](/babylon-101/babylon-101/raycasts) and [Pointer Clicked on Mesh](/babylon-101/babylon-101/picking-collisions)


### Accessing Mesh Data, Morphing or Updating

The facility to read data on the facets making up a mesh and also the vertices making up each facet of the mesh is available for all meshes. This data can be over written to update an existing mesh, **provided** the mesh was created as updatable (the mesh's updatable parameter is set to _true_) in the first place and no change is made in the number of vertices. For more information see [Updating Vertices](/How_To/Updating_Vertices.html). 

Some parametric shapes have an instance parameter in its _MeshBuilder_ options and can be updated by setting the instance option the initially created parametric shape. Currently all the parametric shapes, except for the Lathe and Polygon (both Create and Extend), can have their mesh updated in this way.

From Babylon.js version 3.0 morphing, or distoring a mesh through a number of transitions, is possible by creating a copy of the mesh, the target, updating the target and then adjusting the influence of the target mesh from 0 to 1.

# Further Reading

## Basic - L1  
[Meshes 101](/babylon-101/babylon-101/discover-basic-elements)   
[Parametric Shapes 101](/babylon-101/babylon-101/parametric-shapes)  
[Sprites 101](/babylon-101/babylon-101/sprites)  
[Particles 101](/babylon-101/babylon-101/particles)  
[Mesh Collisions 101](/babylon-101/babylon-101/intersect-collisions-mesh)  
[Mesh Picking 101](/babylon-101/babylon-101/picking-collisions)   
[Ray Casting 101](/babylon-101/babylon-101/raycasts)  
[Polyhedra](/how-to/mesh/polyhedra-shapes)   
[Using Decals](/how-to/mesh/decals)  
[How to Use the Solid Particle System](/how-to/mesh/solid-particle-system)  
[Set the Position, Rotation and Scale of a Mesh](/features/component/position_-rotation_-scaling)

## Mid Level - L2  
[Using PolygonMeshBuilder](/how-to/mesh/polygon-mesh-builder)  
[Ribbon Tutorial](/how-to/mesh/ribbon-tutorial)  
[Highlight Layer](/how-to/mesh/highlight-layer)  

## More Advanced - L3
[How to use Instances](/how-to/mesh/how-to-use-instances)  
[How to Merge Meshes](/how-to/mesh/how-to-merge-meshes)  
[Mathematics and Ribbons](/resources/manual/maths-make-ribbons)  
[How to use Curve3](/how-to/mesh/how-to-use-curve-3)  
[How to use Path3D](/how-to/mesh/how-to-use-path-3d)  
[How to use Facet Data](/how-to/mesh/how-to-use-facet-data)  
[How to use LOD](/how-to/mesh/how-to-use-lod)  
[How to Dynamically Morph a Mesh](/how-to/mesh/how-to-dynamically-morph-a-mesh)  
[How to use Morph Targets](/how-to/mesh/how-to-use-morph-targets)  
[How to use Bones and Skeletons](/how-to/mesh/how-to-use-bones-and-skeletons)  
[How to use EdgesRenderer](/how-to/mesh/how-to-use-edges-renderer)  
[Creating Custom Meshes](/how-to/mesh/custom)  
[Facet Normals](/How_To/Normals)  
[Updating Vertices](/how-to/mesh/updating-vertices)

 



