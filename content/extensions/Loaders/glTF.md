# Babylon.js glTF File Loader

[glTF1 Demo](http://babylonjs-extras.azurewebsites.net/glTF.html)

[glTF2 Playground example]( https://www.babylonjs-playground.com/#6MZV8R)

# Usage
The glTF file loader is a SceneLoader plugin.
You can find the loaders [here](https://github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release/loaders)

## Step 1 - Include the glTF File Loader

**Full Version**

This loader supports both glTF 1.0 and 2.0 and will use the correct loader based on the glTF version string.

```
<script src="babylon.js"></script>
<script src="babylon.glTFFileLoader.js"></script>
```

**Version 1 Only**

This loader supports only glTF 1.0 and will fail to load glTF 2.0.

```
<script src="babylon.js"></script>
<script src="babylon.glTF1FileLoader.js"></script>
```

**Version 2 Only**

This loader supports only glTF 2.0 and will fail to load glTF 1.0.

```
<script src="babylon.js"></script>
<script src="babylon.glTF2FileLoader.js"></script>
```

## Step 2 - Call the Scene Loader
```
BABYLON.SceneLoader.Load("./", "duck.gltf", engine, function (scene) { 
   // do somethings with the scene
});
```

You can also call the ImportMesh function and import specific meshes
```
// meshesNames can be set to "null" to load all meshes and skeletons
BABYLON.SceneLoader.ImportMesh(["myMesh1", "myMesh2", "..."], "./", "duck.gltf", scene, function (meshes, particleSystems, skeletons) { 
   // do somethings with the meshes, particleSystems (not handled in glTF files) and skeletons
});
```


You can also append a glTF file to a scene. When using `SceneLoader.Append`, configure the scene to use right handed system by setting the property `useRightHandedSystem` to true. 

```
// glTF Files use right handed system 
scene.useRightHandedSystem = true;

// Append sample glTF model to scene
BABYLON.SceneLoader.Append("https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoomBox/glTF/", "BoomBox.gltf", scene, function (scene) {
}, null, function (scene) {
    alert("error");
});
```

## Step 3 (V1 Only) - Optionally Specify Flags

If you want to disable incremental loading, you can set the property `IncrementalLoading` to false.
Then, you'll be able to be called back with all geometries and shaders loaded. Textures are always loaded asynchronously. For example, you can retrieve the real bounding infos of a mesh loaded when incremental loading is disabled.
```
BABYLON.GLTFFileLoader.IncrementalLoading = false; // true by default
```

In order to work with homogeneous coordinates (that can be available with some converters and exporters):
```
BABYLON.GLTFFileLoader.HomogeneousCoordinates = true; // false by default
```


## Supported features
* Load scenes (SceneLoader.Load and SceneLoader.Append)
* Support of ImportMesh function
* Import geometries
    * From binary files
    * From base64 buffers
* Import and set custom shaders (if no shaders, the Babylon.js default material is applied)
    * Automatically bind attributes
    * Automatically bind matrices
    * Set uniforms
* Import and set animations
* Skinning
    * Skeletons
    * Hardware skinning (shaders support)
    * Bones import
* Handle dummy nodes (empty nodes)

## To improve
* Test on more models. You can experiment your own models using the [3DS MAX exporter to glTF format](https://doc.babylonjs.com/exporters/3DSMax_to_glTF).
