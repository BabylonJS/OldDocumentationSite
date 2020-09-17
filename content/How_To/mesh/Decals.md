# How to Use Decals

![Decal](http://www.babylonjs.com/screenshots/decals.jpg)

These are usually used to add details on meshes (bullets hole, local details, etc...), a decal is a mesh produced from a subset of a previous one with a small offset in order to appear on top of it.

Creation Example :
```javascript
var decal = BABYLON.MeshBuilder.CreateDecal("decal", mesh,  {position: myPos}, scene);
```
Don't forget the _mesh_ parameter; this is the mesh to which the decal is applied.

Properties, all optional :

property|value|default value
--------|-----|-------------
position|_(Vector3)_ position of the decal (World coordinates) | (0, 0, 0)
normal|_(Vector3)_  the normal of the mesh where the decal is applied onto (World coordinates)|Vector3.Up
size|_(Vector3)_  the x, y, z sizes of the decal|(1, 1, 1)
angle|_(number)_ the angle to rotate the decal|0

[A Playground Example of Decals](https://www.babylonjs-playground.com/#1BAPRM#73) click on the cat.

# Further Reading

[Basic Shapes](/babylon101/Discover_Basic_Elements) 
 
