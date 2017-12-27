---
title: Normal
abstract: ''
slug: normal
---

# Normal material

![Screenshot](/img/extensions/materials/normal.jpg)

## [Playgound Example]( https://www.babylonjs-playground.com/#22VQKB)

## Using the normal material

Very simple : 
```
var ground = BABYLON.Mesh.CreateGround("ground", 512, 512, 32, scene);
var normalMaterial = new BABYLON.NormalMaterial("normal", scene);
ground.material = normalMaterial;
```

## Customize the normal material

You can add a diffuse texture to the normal material, because why not?
Normal colors will be mixed with texture color.

```
normalMaterial.diffuseTexture = new BABYLON.Texture("textures/amiga.jpg", scene);
```

