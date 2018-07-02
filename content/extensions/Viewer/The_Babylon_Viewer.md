---
PG_TITLE: The Babylon.js Viewer
---

# Display 3D models on your webpage

The Babylon.js viewer is the simplest way to display 3D content on a web page. 

To display a 3D model on you web page:

1. Add a script reference to the viewer 

   ```html
   <script src="https://cdn.babylonjs.com/viewer/babylon.viewer.js"></script> 
   ```
   
2. Add a `<babylon>` tag and set the *model* attribute to point to a `.gltf` or `.glb` file

   ```html
   <babylon model="model.gltf"></babylon>
   ```

   We recommend using the [glTF format](http://github.com/khronosgroup/gltf) (`.gltf` or `.glb`) for displaying 3D models on your webpage. Other formats supported by Babylon.js loaders are also supported by the viewer component including `.babylon`, `.obj`, and `.stl` formats.

The Babylon.js viewer automatically provides a default viewing experience for 3D models. All aspects of this experience are configurable. See [Configuring the viewer](//doc.babylonjs.com/extensions/Configuring_the_viewer) for more information on customizing the viewing experience. 

## Example 

<p data-height="400" data-theme-id="light" data-slug-hash="QxzBPd" data-default-tab="html,result" data-user="BabylonJS" data-embed-version="2" data-pen-title="Babylon.js Viewer - Display a 3D model" class="codepen">See the Pen <a href="https://codepen.io/BabylonJS/pen/QxzBPd/">Babylon.js Viewer - Display a 3D model</a> by Babylon.js (<a href="https://codepen.io/BabylonJS">@BabylonJS</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


# Using the viewer in your project

The Babylon.js viewer is available on CDN as well as an NPM package. The Babylon.js viewer is a wrapper around the Babylon.js engine and follows the same versioning scheme as the engine.  The currently stable version of the Babylon.js viewer will use the current stable version of Babylon.js engine and the preview version of the Babylon.js viewer will use the preview version of Babylon.js engine.

## CDN

Stable versions of the viewer are available on:

* https://cdn.babylonjs.com/viewer/babylon.viewer.js (minified)
* https://cdn.babylonjs.com/viewer/babylon.viewer.max.js 

Preview releases of the viewer are available on:

* https://preview.babylonjs.com/viewer/babylon.viewer.js (minified)
* https://preview.babylonjs.com/viewer/babylon.viewer.max.js

## NPM

To install the Babylon.js viewer through NPM use

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

# Further details

* [Configuring the viewer](//doc.babylonjs.com/extensions/Configuring_the_viewer)
* [The templating system](//doc.babylonjs.com/extensions/The_templating_system)
* [Advanced usage](//doc.babylonjs.com/extensions/Advanced_usage)
* [Further examples](//doc.babylonjs.com/extensions/Viewer_examples)
