## Introduction

The NPM package manager is one of the best way to define and organize your project's dependencies. Parallel to traditional javascript development (including a script in a 'script' HTML Tag), using npm packages allows you to use tools like Webpack or Browserify to pack your project and (continuously) deliver it.

We now officially support our npm es6 packages and will continue updating the npm's repository with new versions as they being developed.

Please note that by using es6 packages, you will need to rely on extra tooling to bundle and test your library but on the bright side you will be able to tree shake your application and reduce its final size.

All the babylon es6 packages are available within the npm scope @babylonjs.

## Available packages

We offer babylon.js' core and its modules as npm packages. The following are available:

* [@babylonjs/core](https://www.npmjs.com/package/@babylonjs/core) - Babylon's core.
* [@babylonjs/materials](https://www.npmjs.com/package/@babylonjs/materials) - a collection of Babylon-supported advanced materials.
* [@babylonjs/loaders](https://www.npmjs.com/package/@babylonjs/loaders) -  All of Babylon's official loaders (OBJ, STL, glTF)
* [@babylonjs/post-processes](https://www.npmjs.com/package/@babylonjs/post-processes) - Babylon's post processes.
* [@babylonjs/procedural-textures](https://www.npmjs.com/package/@babylonjs/procedural-textures) - Officially supported procedural textures
* [@babylonjs/serializers](https://www.npmjs.com/package/@babylonjs/serializers) - Scene / mesh serializers.
* [@babylonjs/gui](https://www.npmjs.com/package/@babylonjs/gui) - BabylonJS GUI module.
* [@babylonjs/inspector](https://www.npmjs.com/package/@babylonjs/inspector) - The stand-alone BabylonJS Viewer.

## Basic usage
As the ES6 version is composed of many separated files the usual way to consume such packages is through Webpack or other bundlers. The following examples will be done with Webpack but you could rely on any of the tools you are familiar with.

### Using Webpack

First create a new folder where you will develop your app: `mkdir MyAwesomeApp`.

Then navigate to the folder `cd MyAwesomeApp` and initializes npm with the command `npm init`. Simply fill out the requested question or leave default if you prefer.

You can the install webpack like this: ```npm install webpack webpack-cli webpack-dev-server --save-dev```. This will also install a local dev server pretty handy to develop locally.

Following the default webpack convention, you do not even need a configuration file.

### Installing Babylon.js

To install the latest babylon es6 version use:

```bash
npm install --save-dev @babylonjs/core
```

This will install babylonjs' javascript files and will also include a TypeScript declaration file.

To include all Babylon in a javascript or typescript file, use:

```javascript
import * as BABYLON from '@babylonjs/core/Legacy/legacy';
```

This will work exactly like the none es6 version and the entire library will be included as a dependency.

You can also load specific classes to help with your code:

```javascript
import { Engine, Scene } from '@babylonjs/core';
```

**NOTE:** Some of the modules working through side effects you might need for instance to ```import "@babylonjs/core/Meshes/meshBuilder"``` for side effects only in order to rely on any of the Mesh creation static methods like ```Mesh.CreateBox``` for instance. This was the best way to deliver our ES6 version without breaking backward compatibility of the bundled version.

### Installing other Babylon modules

After including ```@babylonjs/core``` you can add Babylon's extra modules using npm as follows:

```bash
npm install --save-dev @babylonjs/materials [other packages]
```

Same as the babylonjs, this will install the javascript files and a declaration file.

To import the dependencies, you simply need to import the library (without giving it a namespace):

```javascript
import { GridMaterial } from '@babylonjs/materials';

let skyMaterial = new GridMaterial(.....)
```

### Creating our first js APP
Now we have all the dependencies created, create an index.html file in the `MyAwesomeApp` folder and fill it with the following code:

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Local Development</title>

    <script src="https://code.jquery.com/pep/0.4.2/pep.min.js"></script>

    <style>
        html,
        body {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            overflow: hidden;
        }

        #renderCanvas {
            width: 100%;
            height: 100%;
            display: block;
            font-size: 0;
        }
    </style>
</head>

<body>
    <canvas id="renderCanvas" touch-action="none"></canvas>

    <script src="main.js"></script>
</body>

</html>
```

This will only have a fullscreen canvas as well as a reference to our application file (by default webpack output during developmetn is "main.js");

Once done you can create a `src` folder containing an index.js file with the following content:

```
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Mesh } from "@babylonjs/core/Meshes/mesh";

import { GridMaterial } from "@babylonjs/materials/grid";

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import "@babylonjs/core/Meshes/meshBuilder";

// Get the canvas element from the DOM.
const canvas = document.getElementById("renderCanvas");

// Associate a Babylon Engine to it.
const engine = new Engine(canvas);

// Create our first scene.
var scene = new Scene(engine);

// This creates and positions a free camera (non-mesh)
var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

// This targets the camera to scene origin
camera.setTarget(Vector3.Zero());

// This attaches the camera to the canvas
camera.attachControl(canvas, true);

// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

// Default intensity is 1. Let's dim the light a small amount
light.intensity = 0.7;

// Create a grid material
var material = new GridMaterial("grid", scene);

// Our built-in 'sphere' shape. Params: name, subdivs, size, scene
var sphere = Mesh.CreateSphere("sphere1", 16, 2, scene);

// Move the sphere upward 1/2 its height
sphere.position.y = 2;

// Affect a material
sphere.material = material;

// Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
var ground = Mesh.CreateGround("ground1", 6, 6, 2, scene);

// Affect a material
ground.material = material;

// Render every frame
engine.runRenderLoop(() => {
    scene.render();
});
```

Finally you can run the local dev environment through the command `npx webpack-dev-server`.

Open the browser and navigate to the url `http://localhost:8080/`. You should see a sphere and a plane using the Grid Material.

## Typescript
Switching the project to typescript is pretty straight forward. First in the previous example `MyAwesomeApp` folder we need to install typescript and one of the module allowing the use of typescript in webpack: `npm install typescript ts-loader --save-dev`

Once done we can replace our previous index.js by its typescript equivalent index.ts:
```
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Mesh } from "@babylonjs/core/Meshes/mesh";

import { GridMaterial } from "@babylonjs/materials/grid";

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import "@babylonjs/core/Meshes/meshBuilder";

// Get the canvas element from the DOM.
const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

// Associate a Babylon Engine to it.
const engine = new Engine(canvas);

// Create our first scene.
var scene = new Scene(engine);

// This creates and positions a free camera (non-mesh)
var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

// This targets the camera to scene origin
camera.setTarget(Vector3.Zero());

// This attaches the camera to the canvas
camera.attachControl(canvas, true);

// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

// Default intensity is 1. Let's dim the light a small amount
light.intensity = 0.7;

// Create a grid material
var material = new GridMaterial("grid", scene);

// Our built-in 'sphere' shape. Params: name, subdivs, size, scene
var sphere = Mesh.CreateSphere("sphere1", 16, 2, scene);

// Move the sphere upward 1/2 its height
sphere.position.y = 2;

// Affect a material
sphere.material = material;

// Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
var ground = Mesh.CreateGround("ground1", 6, 6, 2, scene);

// Affect a material
ground.material = material;

// Render every frame
engine.runRenderLoop(() => {
    scene.render();
});
```

The only change being the addition of `as HTMLCanvasElement` on the canvas element.

With that done we need to configure Webpack to allow the use of Typescript. Add a `webpack.config.js` at the root of your project containing the following:

```
module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    }
}
```

We also need to configure typescript in the application folder. The simplest is to add a tsconfig.json file at the root of the project containing:

```
{
  "compilerOptions": {
      "module": "esNext",
      "target": "es5",
      "moduleResolution": "node",
  }
}
```

This will ensure our babylonjs module can be loaded and used in your application.

It is time to run again with the command `npx webpack-dev-server` and open your browser on `http://localhost:8080/`. You should see a sphere and a plane using the Grid Material exactly like in javascript. You are now fully ready to use the Babylon.js ES6 packages in Typescript.

## Tree Shaking
From the begining you could wonder why using these ES6 packages vs the default bundled ones. Beside being more "modern" which is not a valuable enough argument to make the switch, you can now fully benefit from [tree shaking](https://webpack.js.org/guides/tree-shaking/).

This means the previous example is now requiring about 700Kb vs 2.3Mb before.

**Please note we are continuing to improve our min package size by decoupling a bit more our packages until our final 4.0 release.**

**As you will see in the next paragraph, you also currently need to target individual files to fully benefit from tree shaking in your app.**

## Side Effects
At the moment, the side effect portion of our delivered packages is under development and not yet shipped, webpack As a result, webpack can not detect if the provided modules are having side effects or not and it would by default include all of them.

This will force you to target your imports on the dedicated modules (vs index ones) if you want to fully benefit from tree shaking.

We are planing to release soon (before 4.0) the side effect portion of the package as well as smaller workload files you could import from. This will avoid you to know our full file hierarchy. Please, bear with us in the mean time and to not hesitate to provide feedback on the workload you would like to see.

## Earcut/Oimo/Canon/Ammo
As we do not want to force by default our user to include any dependencies, we have extended the way users could rely on external dependencies for ES6.

For each of the external dependencies Babylon.js is relying upon, if you are planing on relying on them, you can either provide them as global var in you bundler. For instance if you are willing to use the `PolygonMeshBuilder` class in your app you can add earcut in webpack like this:

```
module.exports = {
    context: __dirname,
...
    plugins: [
        new webpack.ProvidePlugin({
            'earcut': 'earcut'
        })
    ]
}
```

Or if you do not want to use a global var for earcut, you could simply pass the dependency to the PolygonMeshBuilder class like this:

```
import * as MyEarcut from "earcut";
...
new PolygonMeshBuilder("polytri", corners, scene, MyEarcut);
```

It would be the same for physics plugin where you can either provide the underlying engine as a var or inject it in the constructor of the Babylon.js respective plugin.

## Loaders
In Babylon.js the loaders you can install from `@babylonjs-loaders` are actually plugins of the main `SceneLoader` module. In order to use for instance the obj loader in your app, you simply need to import it for side effects only: `import "@babylonjs/loaders/OBJ";`. It would be exactly the same for gltf: `import "@babylonjs/loaders/glTF";`.


