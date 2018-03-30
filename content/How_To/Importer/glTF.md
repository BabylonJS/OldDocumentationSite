---
PG_TITLE: glTF
---

# Setup

The glTF loader files are located [here](https://github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release/loaders).

## Full Version

This loader supports both glTF 1.0 and 2.0 and will use the correct loader based on the glTF version string.

```html
<script src="babylon.js"></script>
<script src="babylon.glTFFileLoader.js"></script>
```

## Version 1 Only

This loader supports only glTF 1.0 and will fail to load glTF 2.0.

```html
<script src="babylon.js"></script>
<script src="babylon.glTF1FileLoader.js"></script>
```

## Version 2 Only

This loader supports only glTF 2.0 and will fail to load glTF 1.0.

```html
<script src="babylon.js"></script>
<script src="babylon.glTF2FileLoader.js"></script>
```

# Loading the Scene

Use one of the static function on the `SceneLoader` to load a glTF asset.
See [Load from any file type](/how_to/Load_From_Any_File_Type).

[Demo](http://www.babylonjs-playground.com/#WGZLGJ)

## Common Properties

### onParsed

Raised when the asset has been parsed. The `data.json` property stores the glTF JSON. The `data.bin` property stores the BIN chunk from a glTF binary or `null` if the input is not a glTF binary.

```javascript
loader.onParsed = function (data) {
    // do something with the data
};
```

## Version 1 Properties

### IncrementalLoading

Set this property to false to disable incremental loading which delays the loader from calling the success callback until after loading the meshes and shaders. Textures always loads asynchronously. For example, the success callback can compute the bounding information of the loaded meshes when incremental loading is disabled. Defaults to true.

```javascript
BABYLON.GLTFFileLoader.IncrementalLoading = false;
```

### HomogeneousCoordinates

Set this property to true in order to work with homogeneous coordinates, available with some converters and exporters. Defaults to false.

```javascript
BABYLON.GLTFFileLoader.HomogeneousCoordinates = true;
```

## Version 2 Properties

### coordinateSystemMode

The coordinate system mode (AUTO, FORCE_RIGHT_HANDED). Defaults to AUTO.

- `AUTO` - Automatically convert the glTF right-handed data to the appropriate system based on the current coordinate system mode of the scene.
- `FORCE_RIGHT_HANDED` - Sets the useRightHandedSystem flag on the scene.

```javascript
loader.coordinateSystemMode = BABYLON.GLTFLoaderCoordinateSystemMode.FORCE_RIGHT_HANDED;
```

### animationStartMode

The animation start mode (NONE, FIRST, ALL). Defaults to FIRST.

- `NONE` - No animation will start.
- `FIRST` - The first animation will start.
- `ALL` - All animations will start.

```javascript
loader.animationStartMode = BABYLON.GLTFLoaderAnimationStartMode.NONE;
```

### compileMaterials

Set to true to compile materials before raising the success callback. Defaults to false.

```javascript
loader.compileMaterials = true;
```

### useClipPlane

Set to true to also compile materials with clip planes. Defaults to false.

```javascript
loader.useClipPlane = true;
```

### compileShadowGenerators

Set to true to compile shadow generators before raising the success callback. Defaults to false.

```javascript
loader.compileShadowGenerators = true;
```

### loaderState
The loader state (LOADING, READY, COMPLETE) or null if the loader is not active.

- `LOADING` - The asset is loading
- `READY` - The asset is ready for rendering
- `COMPLETE` - The asset is completely loaded

```javascript
if (loader.loaderState === BABYLON.GLTFLoaderState.LOADING) {
    // do something when the asset is loading
}
```

## Version 2 Events

All events also have `Observable` versions.

### onMeshLoaded

Raised when the loader creates a mesh after parsing the glTF properties of the mesh.

```javascript
loader.onMeshLoaded = function (mesh) {
    // do something with the mesh
};
```

### onTextureLoaded

Raised when the loader creates a texture 
after parsing the glTF properties of the texture.

```javascript
loader.onTextureLoaded = function (texture) {
    // do something with the texture
};
```

### onMaterialLoaded

Raised when the loader creates a material after parsing the glTF properties of the material.

```javascript
loader.onMaterialLoaded = function (material) {
    // do something with the material
};
```

### onComplete

Raised when the asset is completely loaded, immediately before the loader is disposed.  
For assets with LODs, raised when all of the LODs are complete.  
For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.

```javascript
loader.onComplete = function () {
    // do something when loading is complete
};
```

### onDispose

Raised after the loader is disposed.

```javascript
loader.onDispose = function () {
    // do something when dispose is called
};
```

### onExtensionLoaded

Raised after a loader extension is created.  
Set additional options for a loader extension in this event.

```javascript
loader.onExtensionLoaded = function (extension) {
    if (extension.name === "MSFT_lod") {
        extension.maxLODsToLoad = 1;
    }
};
```

## Version 2 Methods

### whenCompleteAsync
Returns a promise that resolves when the asset is completely loaded.

```javascript
loader.whenCompleteAsync().then(function () {
    // do something when loading is complete
});
```

### dispose

Disposes the loader, releases resources during load, and cancels any outstanding requests.

```javascript
// cancel loading of the current glTF asset
loader.dispose();
```

# Supported Extensions

## Version 1

### KHR_binary_glTF
https://github.com/KhronosGroup/glTF/tree/master/extensions/1.0/Khronos/KHR_binary_glTF

### KHR_materials_common
https://github.com/KhronosGroup/glTF/tree/master/extensions/1.0/Khronos/KHR_materials_common

## Version 2

### KHR_draco_mesh_compression
https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression

### KHR_lights
https://github.com/MiiBond/glTF/tree/khr_lights_v1/extensions/Khronos/KHR_lights

### KHR_materials_pbrSpecularGlossiness
https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness

### KHR_materials_unlit
https://github.com/donmccurdy/glTF/tree/feat-khr-materials-cmnConstant/extensions/2.0/Khronos/KHR_materials_unlit

### MSFT_lod
https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/MSFT_lod
