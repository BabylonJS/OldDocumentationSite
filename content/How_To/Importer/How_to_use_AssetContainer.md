To add and remove assets from a scene an AssetContainer can be used.

It can be created manually
```javascript
var container = new BABYLON.AssetContainer(scene);
```
Or by loading from a file. See [loading from files](/How_To/Load_From_Any_File_Type)

The container can then be used to add or remove contents of the container from the scene.
```javascript
// Add all objects in the asset container to the scene
container.addAllToScene()

// Remove all objects in the container from the scene
container.removeAllFromScene()
```
[Demo](https://www.babylonjs-playground.com/#5NFRVE#1)
This can be used to add/remove all objects in a scene without the need to exit WebVR. [Demo](https://www.babylonjs-playground.com/#JA1ND3#48)
When creating assets manually the moveAllFromScene method can be used to move all assets currently in a scene into an AssetContainer and remove them from the scene for later use. 
```javascript
var keepAssets = new BABYLON.KeepAssets();
keepAssets.cameras.push(camera);
container.moveAllFromScene(keepAssets);
```
[Demo](https://www.babylonjs-playground.com/#5NFRVE#3)