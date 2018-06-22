---
PG_TITLE: Use UtilityLayerRenderer
---

## UtilityLayerRenderer

The UtilityLayerRenderer class is able to overlay objects in the scene without modifying the existing scene. It can be used to enable custom overlays or [Gizmos](/How_To/Gizmo).

It can be created with the following

```
var utilLayer = new BABYLON.UtilityLayerRenderer(scene);
```
Once created meshes can be added to the utility layer's scene

```
 // Create an overlay box
var overlayBox = BABYLON.Mesh.CreateBox("box", 1, utilLayer.utilityLayerScene);
overlayBox.position.z = 0.5
overlayBox.position.y = 3.5;
// Create a different light for the overlay scene
var overlayLight = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 0, 1), utilLayer.utilityLayerScene);
overlayLight.intensity = 0.7;
```

By default the overlaid scene will be drawn on top of the existing scene ignoring the depth buffer. Of objects in the utility scene are desired to be occluded by the main scene, autoClearDepthAndStencil should be set to false
```
utilLayer.utilityLayerScene.autoClearDepthAndStencil=false;
```

## Examples

 - [Overlay scene example](https://www.babylonjs-playground.com/#DEYAQ5#41)
 - [Gizmo example](https://www.babylonjs-playground.com/#31M2AP#3)