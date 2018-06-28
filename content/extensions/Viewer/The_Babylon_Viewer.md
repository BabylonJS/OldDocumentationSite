---
PG_TITLE: The Babylon.js Viewer
---

# The Babylon.js viewer 

The Babylon.js viewer is the simplest way to display 3D content on a web page. 

To display a 3D model on you web page

1. Add a script reference to the viewer 

   ```html
   <script src="https://viewer.babylonjs.com/viewer.min.js"></script> 
   ```
   
2. Add a `<babylon>` tag and point the *model* attribute to a `.gltf` or `.glb` file

   ```html
   <babylon model="model.gltf"></babylon>
   ```

## Example

<div class="glitch-embed-wrap" style="height: 408px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/3d-viewer?path=index.html&previewSize=35&attributionHidden=true&sidebarCollapsed=true" alt="3d-viewer on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>

## Getting the viewer

### CDN
Nightly releases of the viewer are available on public CDN:

* https://viewer.babylonjs.com/viewer.js (minified)
* https://viewer.babylonjs.com/viewer.max.js

### NPM

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

## How does it work

The viewer automatically interacts with the DOM, searching for HTML elements named `babylon`. It will then automatically read the configuration from the DOM element and will create a scene for it.

The viewer's entire behavior is extendable. It is explained in detail in `Configuration` and `Extending the viewer`.

We recommend using the glTF format (`.gltf` or `.glb`) for displaying 3D models on your webpage. Other formats supported by Babylon.js loaders are also supported by the viewer component including `.babylon`, `.obj`, and `.stl` formats.

## Further details

* [Configuring the viewer](//doc.babylonjs.com/extensions/Configuring_the_viewer)
* [The templating system](//doc.babylonjs.com/extensions/The_templating_system)
* [Advanced usage](//doc.babylonjs.com/extensions/Advanced_usage)
* [Further examples](//doc.babylonjs.com/extensions/Viewer_examples)
