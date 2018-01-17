# Load from any file type (GLTF, OBJ, STL, etc.)

To load a file of a given type, Babylon must first have a reference to the plugin for that file type.

Currently plugins can be found for:
 - [.glTF](/How_To/glTF)
 - [.obj](/How_To/OBJ)
 - [.stl](/How_To/STL)
 - .babylon

Once the plugin is referenced, the SceneLoader class can be used which provides a few loading methods.

SceneLoader.Append - Loads all babylon assets from the file and appends them to the scene
```javascript
BABYLON.SceneLoader.Append("./", "duck.gltf", scene, function (scene) {
    // do something with the scene
});
```
[Demo](http://www.babylonjs-playground.com/#WGZLGJ)
SceneLoader.Load - Loads all babylon assets from the file and creates a new scene
```javascript
BABYLON.SceneLoader.Load("/assets/", "batman.obj", engine, function (newScene) { 
   // ...
});
```
SceneLoader.ImportMesh - Loads the meshes from the file and appends them to the scene
```javascript
// The first parameter can be set to null to load all meshes and skeletons
BABYLON.SceneLoader.ImportMesh(["myMesh1", "myMesh2"], "./", "duck.gltf", scene, function (meshes, particleSystems, skeletons) {
    // do something with the meshes and skeletons
    // particleSystems are always null for glTF assets
});
```
[Demo](http://www.babylonjs-playground.com/#JUKXQD)
SceneLoader.LoadAssetContainer - Loads all babylon assets from the file and does not append them to the scene
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

## Loading multiple assets
For assistance when load multiple assets the AssetsManager class can be used.
See [how to use AssetManager](/How_To/How_to_use_AssetsManager)