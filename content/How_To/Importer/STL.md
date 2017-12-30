---
ID_PAGE: 25109
PG_TITLE: STL
title: Load an STL File
abstract: ''
slug: stl
redirects:
  - /extensions/stl
---

# STL File Import

You can find the STL loader [here](https://github.com/BabylonJS/Babylon.js/tree/master/dist/preview release/loaders)

To use it you just have to reference it after Babylon.js:


```
<script src="Babylon.js"></script>
<script src="babylon.stlFileLoader.js"></script>
```

Then you can just call SceneLoader.Load:

```

BABYLON.SceneLoader.Load("/Files/", "ch9.stl", engine, function (newScene) {
   newScene.activeCamera.attachControl(canvas, false);
   engine.runRenderLoop(function () {
       newScene.render();
   });
});

```
