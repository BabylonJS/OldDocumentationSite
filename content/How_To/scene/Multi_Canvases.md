Starting with Babylon.js v4.1, it is now possible to use one engine on several canvases.

To do so, you need to create "views". A view is defined by a canvas (the target) and a camera (the definition of the view).


## Creating a view

To create a view, you need to register the combination of a canvas and a camera to the engine:

```
let view = engine.registerView(document.getElementById("renderCanvas1"), camera1);
```

## Removing a view

To remove a previously activated view, you can run the following code:
```
engine.unRegisterView(document.getElementById("renderCanvas1"));
```

## Internals

The system will render the scene on the main canvas using the defined camera as the active camera.

A view cannot be rendered if the underlying scene is using multiple active cameras (eg. scene.activeCameras.length > 0).

## Multi scenes

You can use views to render different cameras from different scenes. As you control the render loop it is up to you to test the `engine.activeView` to determine which view is currently rendered.

By default `engine.activeView` will be null or undefined for the main frame (the one associated with the master canvas).

So your render loop can look like:
```
let myRenderLoop = () => {
   if (!engine.activeView) {
       mainScene.render();
   } else if (engine.activeView.canvas === view1) {
       scene1.render();
   }
}
```

## Demo
You can see a live demo here: https://www.babylonjs.com/Demos/Views
