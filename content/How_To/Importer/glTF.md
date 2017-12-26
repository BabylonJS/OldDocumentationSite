---
PG_TITLE: glTF
title: Load a glTF File
abstract: ''
slug: gl-tf
redirects:
  - /extensions/gltf
---


# glTF File Import

[Demo](http://www.babylonjs-playground.com/#WGZLGJ)

## Setup

The glTF loader files are located [here](https://github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release/loaders).

### Full Version

This loader supports both glTF 1.0 and 2.0 and will use the correct loader based on the glTF version string.

```html
<script src="babylon.js"></script>
<script src="babylon.glTFFileLoader.js"></script>
```

### Version 1 Only

This loader supports only glTF 1.0 and will fail to load glTF 2.0.

```html
<script src="babylon.js"></script>
<script src="babylon.glTF1FileLoader.js"></script>
```

### Version 2 Only

This loader supports only glTF 2.0 and will fail to load glTF 1.0.

```html
<script src="babylon.js"></script>
<script src="babylon.glTF2FileLoader.js"></script>
```

## Loading the Scene

Use one of the following static function on the `SceneLoader` to load a glTF asset.

### Load

This function loads a glTF asset into a new scene.
```javascript
BABYLON.SceneLoader.Load("./", "duck.gltf", engine, function (scene) {
    // do something with the scene
});
```

### Append

This function appends a glTF file to an existing scene.
```javascript
BABYLON.SceneLoader.Append("./", "duck.gltf", scene, function (scene) {
    // do something with the scene
});
```

### ImportMesh

This function imports specific meshes from a glTF asset to an existing scene and returns the imported meshes and skeletons.
```javascript
// The first parameter can be set to null to load all meshes and skeletons
BABYLON.SceneLoader.ImportMesh(["myMesh1", "myMesh2"], "./", "duck.gltf", scene, function (meshes, particleSystems, skeletons) {
    // do something with the meshes and skeletons
    // particleSystems are always null for glTF assets
});
```

## Advanced Usage

The SceneLoader returns the glTF loader instance to enable setting properties and calling methods.

```javascript
var loader = BABYLON.SceneLoader.Load("./", "duck.gltf", engine, function (scene) {
    // do something with the scene
});

// do something with the loader
// loader.<option1> = <...>
// loader.<option2> = <...>
// loader.dispose();
```

### Common Properties

**onParsed**

Raised when the asset has been parsed. The `data.json` property stores the glTF JSON. The `data.bin` property stores the BIN chunk from a glTF binary or null if the input is not a glTF binary.

```javascript
loader.onParsed = function (data) {
    // do something with the data
};
```

### Version 1 Properties

**IncrementalLoading**

Set this property to false to disable incremental loading which delays the loader from calling the success callback until after loading the meshes and shaders. Textures always loads asynchronously. For example, the success callback can compute the bounding information of the loaded meshes when incremental loading is disabled. Defaults to true.

```javascript
BABYLON.GLTFFileLoader.IncrementalLoading = false;
```

**HomogeneousCoordinates**

Set this property to true in order to work with homogeneous coordinates, available with some converters and exporters. Defaults to false.

```javascript
BABYLON.GLTFFileLoader.HomogeneousCoordinates = true;
```

### Version 2 Properties

**coordinateSystemMode**

The coordinate system mode (AUTO, FORCE_RIGHT_HANDED). Defaults to AUTO.

- `AUTO` - Automatically convert the glTF right-handed data to the appropriate system based on the current coordinate system mode of the scene.
- `FORCE_RIGHT_HANDED` - Sets the useRightHandedSystem flag on the scene.

```javascript
loader.coordinateSystemMode = BABYLON.GLTFLoaderCoordinateSystemMode.FORCE_RIGHT_HANDED;
```

**animationStartMode**

The animation start mode (NONE, FIRST, ALL). Defaults to FIRST.

- `NONE` - No animation will start.
- `FIRST` - The first animation will start.
- `ALL` - All animations will start.

```javascript
loader.animationStartMode = BABYLON.GLTFLoaderAnimationStartMode.NONE;
```

**compileMaterials**

Set to true to compile materials before raising the success callback. Defaults to false.

```javascript
loader.compileMaterials = true;
```

**useClipPlane**
Set to true to also compile materials with clip planes. Defaults to false.

```javascript
loader.useClipPlane = true;
```

**compileShadowGenerators**

Set to true to compile shadow generators before raising the success callback. Defaults to false.

```javascript
loader.compileShadowGenerators = true;
```

**onMeshLoaded**

Raised when the loader creates a mesh after parsing the glTF properties of the mesh.

```javascript
loader.onMeshLoaded = function (mesh) {
    // do something with the mesh
};
```

**onTextureLoaded**

Raised when the loader creates a texture 
after parsing the glTF properties of the texture.

```javascript
loader.onTextureLoaded = function (texture) {
    // do something with the texture
};
```

**onMaterialLoaded**

Raised when the loader creates a material after parsing the glTF properties of the material.

```javascript
loader.onMaterialLoaded = function (material) {
    // do something with the material
};
```

**onComplete**

Raised when the asset is completely loaded, immediately before the loader is disposed.
For assets with LODs, raised when all of the LODs are complete.
For assets without LODs, raised when the model is complete, immediately after onSuccess.

```javascript
loader.onComplete = function () {
    // do something when loading is complete
};
```

### Version 2 Methods

**dispose**

Disposes the loader, releases resources during load, and cancels any outstanding requests.

```javascript
// cancel loading of the current glTF asset
loader.dispose();
```
