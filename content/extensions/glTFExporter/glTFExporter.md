---
PG_TITLE: glTF Exporter
---

# glTF Exporter

The glTF Exporter allows BabylonJS models to be exported to the [glTF 2.0 format](https://www.khronos.org/gltf/).

## Setup
The glTF Serializer files are in the [BabylonJS serializers](https://github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release/serializers)
 
At the top of your script, import `babylonjs-serializers` **after** importing `babylonjs`:

```javascript
import * as BABYLON from 'babylonjs';
import from 'babylonjs-serializers';
```

## Exporting a Scene to glTF
The exporter expects the scene to be ready before exporting, so it is best called by the scene's [`executeWhenReady` function](https://doc.babylonjs.com/api/classes/babylon.scene#executewhenready):
```javascript
scene.executeWhenReady(function() {
    let gltf = BABYLON.GLTF2Export.GLTF(scene, "fileName");
    gltf.downloadFiles();
});
```

To download to glb format, simply replace the `GLTF` static function with `GLB`:

```javascript
scene.executeWhenReady(function() {
    let gltf = BABYLON.GLTF2Export.GLB(scene, "fileName");
    gltf.downloadFiles();
});
```

## Export options
glTF Exporter accepts an optional `options` parameter with certain functions and properties defined.

### Excluding geometry 
Sometimes you may need to exclude geometry from export, such as the skybox.  You can define a boolean callback called `shouldExportMesh` which accepts a BabylonJS mesh as an argument and returns a boolean, specifying
if the mesh should be exported or not:

```javascript
// Initializer code...
let skybox = scene.createDefaultSkybox(hdrTexture, true, 100, 0.3);
// scene setup code...
scene.executeWhenReady(function() {
    let options = {
        shouldExportMesh: function(mesh) {
            return mesh !== skybox;
        }
    }

    let gltf = BABYLON.GLTF2Export.GLB(scene, "fileName", options);
    gltf.downloadFiles();
});
```

## Supported features
Currently the following material types are supported:
- `PBRMaterial`
  - Not all Babylon `PBRMaterial` features are supported in glTF.
- `MetallicRoughnessMaterial`
- `StandardMaterial` 
  -  A conversion from `StandardMaterial` to `MetallicRoughness` has been implemented to try to match as close as visibly possible, though not all BabylonJS features are supported in glTF.
- `SpecularGlossinessMaterial` 
  -  glTF Exporter converts `SpecularGlossiness` materials to `MetallicRoughness` to match core glTF 2.0 specification.

## Coming soon
- Node-based animation
- Skinning animation
- Morph Targets


