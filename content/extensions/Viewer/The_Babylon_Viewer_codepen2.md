---
PG_TITLE: The Babylon.js Viewer
---

# Display 3D models on your webpage

The Babylon.js viewer is the simplest way to display 3D content on a web page. 

To display a 3D model on you web page

1. Add a script reference to the viewer 

   ```html
   <script src="https://cdn.babylonjs.com/viewer/babylon.viewer.js"></script> 
   ```
   
2. Add a `<babylon>` tag and point the *model* attribute to a `.gltf` or `.glb` file

   ```html
   <babylon model="model.gltf"></babylon>
   ```

The Babylon.js viewer automatically provides a default viewing experience for 3D models which includes:
1. A loading screen displayed while the model is being downloaded
2. A default stage which includes a ground plane, lights and environment for image based lighting 
3. A navigation bar with various controls for entering fullscreen mode, controlling animation playback etc.
4. The camera automatically rotates around the model to create a turntable effect

All aspects of this experience are configurable. See [Configuring the viewer](//doc.babylonjs.com/extensions/Configuring_the_viewer) for more information on customizing the viewing experience. 

## Example 

```html
<html>
<head>
  <title>Babylon.js Viewer - Display a 3D model</title>
  <script src="https://cdn.babylonjs.com/viewer/babylon.viewer.js"></script>    
</head>
<body>
    <babylon model="https://models.babylonjs.com/boombox.glb"></babylon>
</body>
</html>
```

<p data-height="500" data-theme-id="light" data-slug-hash="zaMemN" data-default-tab="result" data-embed-version="2" data-pen-title="Babylon.js Viewer" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/sbtron/pen/zaMemN/">Babylon.js Viewer</a> on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# Getting the viewer

## CDN

Stable versions of the viewer are available on public CDN:

* https://cdn.babylonjs.com/viewer/babylon.viewer.js (minified)
* https://cdn.babylonjs.com/viewer/babylon.viewer.max.js 

Preview releases of the viewer are available on public CDN:

* https://preview.babylonjs.com/viewer/babylon.viewer.js (minified)
* https://preview.babylonjs.com/viewer/babylon.viewer.max.js

The Babylon.js viewer follows the same versioning as the Babylon.js engine. The currently stable version of the Babylon.js viewer will use the current stable version of Babylon.js engine and the preview version of the Babylon.js viewer will use the preview version of Babylon.js engine.

## NPM

The Babylon.js viewer is also available through NPM. To install use

```javascript
npm install --save babylonjs-viewer
```

Afterwards it can be imported to the project using:

```javascript
import * as BabylonViewer from 'babylonjs-viewer';

BabylonViewer.InitTags("my-tag");
```

This will enable the BabylonViewer namespace. 

Using webpack to package your project will use the minified js file.

# How does it work

The viewer automatically interacts with the DOM, searching for HTML elements named `babylon`. It will then automatically read the configuration from the DOM element and will create a scene for it.

We recommend using the glTF format (`.gltf` or `.glb`) for displaying 3D models on your webpage. Other formats supported by Babylon.js loaders are also supported by the viewer component including `.babylon`, `.obj`, and `.stl` formats.

# Further details

* [Configuring the viewer](//doc.babylonjs.com/extensions/Configuring_the_viewer)
* [The templating system](//doc.babylonjs.com/extensions/The_templating_system)
* [Advanced usage](//doc.babylonjs.com/extensions/Advanced_usage)
* [Further examples](//doc.babylonjs.com/extensions/Viewer_examples)
