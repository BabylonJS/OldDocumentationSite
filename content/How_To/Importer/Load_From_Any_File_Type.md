---
PG_TITLE: How To Use Scene Loader
---

# How to Use Scene Loader

The built in file type is `.babylon` and Babylon.js can load these without a plugin.

**Note:** Since meshes you import can have a _rotationQuaternion_ set applying a _rotation_ to one will have unforeseen consequences as detailed in this [warning](/resources/rotation_conventions#warning).

## Basic Usage

To load a file of a given type, Babylon must first have a reference to the plugin for that file type.

Currently plugins can be found for:
 - [.glTF](/How_To/glTF)
 - [.obj](/How_To/OBJ)
 - [.stl](/How_To/STL)

To quickly add support for all loaders the following script can be added to your page:
```
<script src="https://cdn.babylonjs.com/babylon.js"></script>
<script src="https://preview.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
```
For NPM usage see: https://www.npmjs.com/package/babylonjs-loaders

Once the plugin is referenced, the SceneLoader class can be used which provides a few loading methods.

## SceneLoader.Append 

Loads all babylon assets from the file and appends them to the scene
```javascript
BABYLON.SceneLoader.Append("./", "duck.gltf", scene, function (scene) {
    // do something with the scene
});
```
[Demo](http://www.babylonjs-playground.com/#WGZLGJ)

## SceneLoader.Load 

Loads all babylon assets from the file and creates a new scene
```javascript
BABYLON.SceneLoader.Load("/assets/", "batman.obj", engine, function (newScene) { 
   // ...
});
```

## SceneLoader.ImportMesh 

Loads the meshes from the file and appends them to the scene
```javascript
// The first parameter can be set to null to load all meshes and skeletons
BABYLON.SceneLoader.ImportMesh(["myMesh1", "myMesh2"], "./", "duck.gltf", scene, function (meshes, particleSystems, skeletons) {
    // do something with the meshes and skeletons
    // particleSystems are always null for glTF assets
});
```
[Demo](http://www.babylonjs-playground.com/#JUKXQD)

## SceneLoader.LoadAssetContainer 

Loads all babylon assets from the file and does not append them to the scene
```javascript
BABYLON.SceneLoader.LoadAssetContainer("./", "duck.gltf", scene, function (container) {
    var meshes = container.meshes;
    var materials = container.materials;
    //...

    // Adds all elements to the scene
    container.addAllToScene();
});
```
[Demo](http://www.babylonjs-playground.com/#JA1ND3#48)

## SceneLoader.AppendAsync

There are also `Async` versions of these functions that return promises:
```javascript
BABYLON.SceneLoader.AppendAsync("./", "duck.gltf", scene).then(function (scene) {
    // do something with the scene
});
```

See [How to Use Promises](/How_To/Promises) to learn more about using promises.

## Advanced Usage

Use the `onPluginActivatedObservable` to set properties and call methods specific to a particular loader.

```javascript
BABYLON.SceneLoader.OnPluginActivatedObservable.add(function (loader) {
    if (loader.name === "gltf") {
        // do something with the loader
        // loader.<option1> = <...>
        // loader.<option2> = <...>
        // loader.dispose();
    }
});
```

Alternatively, the static synchronous SceneLoader functions return the plugin.

```javascript
var loader = BABYLON.SceneLoader.Load("./", "duck.gltf", engine, function (scene) {
    // do something with the scene
});

// do something with the loader
// loader.<option1> = <...>
// loader.<option2> = <...>
// loader.dispose();
```

## Loading multiple assets
For assistance when load multiple assets the AssetsManager class can be used.
See [Load Files with Assets Manager](/How_To/How_to_use_AssetsManager)