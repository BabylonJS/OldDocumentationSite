---
PG_TITLE: The Babylon.js Viewer
title: The Babylon Viewer
abstract: ''
slug: the-babylon-viewer
---

# The Babylon.js viewer extension

## Why do we need the viewer

In many use-cases, a website simply wants to display 3D content to its viewers, without any interactions and with a simple-to-use API. Using Babylon.js is very simple, but still requires coding in order to create the engine, the scene, load the model, handle errors etc'. This is where Babylon's viewer come into play.

Babylon's viewer is a wrapper around Babylon, that automatically initializes the needed components in order to display a loaded model. It is easy to use, and require no coding at all.

## How does it work

The viewer automatically interacts with the DOM, searching for HTML elements named `babylon`. It will then automatically read the configuration from the DOM element and will create a scene for it.

The viewer's entire behavior is extendable. It is explained in detail in `Configuration` and `Extending the viewer`.

The viewer automatically serves all of Babylon's loaders, and currently supports loading models from `.babylon`, `.gltf`, `.glb`, `.obj`, and `.stl` files.

## Getting the viewer

The latest stable viewer version can always be found at [https://viewer.babylonjs.com/viewer.js](https://viewer.babylonjs.com/viewer.js). Minified version at [https://viewer.babylonjs.com/viewer.min.js](https://viewer.babylonjs.com/viewer.min.js).
The viewer exposes `BabylonViewer` to the window object, which can be used to interact with all viewers on the current page. For further details see [Advanced usage](//doc.babylonjs.com/extensions/Advanced_usage).

It will soon be available on NPM as well for developers wishing to extend it.

## Basic usage

Consider we want to display Babylon's rabbit model on a website. To do that we simply add a new `<babylon>` DOM element to our already-existing HTML:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>BabylonJS Viewer - Basic usage</title>
        <style>
            babylon {
                max-width: 800px;
                max-height: 500px;
                width: 100%;
                height: 600px;
            }
        </style>
    </head>

    <body>
        <babylon model="https://playground.babylonjs.com/scenes/Rabbit.babylon"></babylon>
        <script src="https://viewer.babylonjs.com/viewer.min.js"></script>
    </body>

</html>
```

This will load the model(s) from Rabbit.babylon and will show them using the default configuration.

## Further details

* [Configuring the viewer](//doc.babylonjs.com/extensions/Configuring_the_viewer)
* [The templating system](//doc.babylonjs.com/extensions/The_templating_system)
* [Advanced usage](//doc.babylonjs.com/extensions/Advanced_usage)
* [Further examples](//doc.babylonjs.com/extensions/Viewer_examples)
