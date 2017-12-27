---
PG_TITLE: How To Use Multi Materials
title: Use Multi-Materials
abstract: ''
slug: multi-materials
---

# How To use Multi Materials

A multi-material is used to apply different materials to different parts of the same object as you can see below

![Multi Material Sphere](/img/how_to/Materials/multi.png)


To be able to define a multi-materials you first have to define some standard materials:

```javascript
var material0 = new BABYLON.StandardMaterial("mat0", scene);
material0.diffuseColor = new BABYLON.Color3(1, 0, 0);
material0.bumpTexture = new BABYLON.Texture("normalMap.jpg", scene);<br/>
    
var material1 = new BABYLON.StandardMaterial("mat1", scene);
material1.diffuseColor = new BABYLON.Color3(0, 0, 1);
  
var material2 = new BABYLON.StandardMaterial("mat2", scene);
material2.emissiveColor = new BABYLON.Color3(0.4, 0, 0.4);</pre>
```

Then you can create a multi-material in order to gather them all:

```javascript
var multimat = new BABYLON.MultiMaterial("multi", scene);
multimat.subMaterials.push(material0);
multimat.subMaterials.push(material1);
multimat.subMaterials.push(material2);</pre>
```

You are now able to affect the multi-material to your mesh:

```javascript
var sphere = BABYLON.Mesh.CreateSphere("Sphere0", 16, 3, scene);
sphere.material = multimat;
```

But if you do that, you will see that the sphere will only use the first submaterial (the red bumped one). This is because by default a mesh is is designed to use only one material.

You can specify which part of the mesh uses a specific material by using the _subMeshes_ property. By default, every mesh comes with only one submesh that cover the entire mesh.

To define multiple submeshes, you just have to use this code:

```javascript
sphere.subMeshes = [];
var verticesCount = sphere.getTotalVertices();

sphere.subMeshes.push(new BABYLON.SubMesh(0, 0, verticesCount, 0, 900, sphere));
sphere.subMeshes.push(new BABYLON.SubMesh(1, 0, verticesCount, 900, 900, sphere));
sphere.subMeshes.push(new BABYLON.SubMesh(2, 0, verticesCount, 1800, 2088, sphere));
```

In this case, you will have 3 parts:

* One starting from index 0 to index 900
* One starting from index 900 to index 1800
* One starting from index 1800 to index 3880


A submesh is defined with:

* The index of the material to use (this index is used to find the correct material Inside the _subMaterials_ collection of a multi-material)
* The index of the first vertex and the count of vertices used (To optimize things for collisions for instance)
* Index of the first indice to use and indices count
* The parent mesh

So with the code above, you can use the first material on the top part of the sphere, the second material on the middle part and the last material on the bottom part of the sphere.</p>