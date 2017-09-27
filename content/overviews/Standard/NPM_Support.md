## Introduction

The NPM package manager is one of the best way to define and organize your project's dependencies. Parallel to traditional javascript development (including a script in a 'script' HTML Tag), using npm packages allows you to use tools like Webpack or Browserify to pack your project and (continuously) deliver it.

We now officially support our npm packages and will continue updating the npm's repository with new versions as they being developed. The first supported version is 3.1.0-alpha3.4

All examples in this tutorial will use commonjs / es6 imports. However, since we are using [UMD](https://github.com/umdjs/umd), the same files being used in our npm packages can also be used with AMD-imports and can also be simply included in an HTML script tag.

## Available packages

We offer babaylon.js' core and its modules as npm packages. The following are available:

* [babylonjs](https://www.npmjs.com/package/babylonjs) - Babylon's core.
* [babylonjs-materials](https://www.npmjs.com/package/babylonjs-materials) - a collection of Babylon-supported advanced materials. 
* [babylonjs-loaders](https://www.npmjs.com/package/babylonjs-loaders) -  All of Babylon's official loaders (OBJ, STL, glTF)
* [babylonjs-post-process](https://www.npmjs.com/package/babylonjs-post-process) - Babylon's post processes.
* [babylonjs-procedural-textures](https://www.npmjs.com/package/babylonjs-procedural-textures) - Officially supported procedural textures
* [babylonjs-serializers](https://www.npmjs.com/package/babylonjs-serializers) - Scene / mesh serializers.
* [babylonjs-gui](https://www.npmjs.com/package/babylonjs-gui) - BabylonJS GUI module.

## Basic usage

Babylon's core and modules take care of setting the dependencies between themselves, so the developer simply needs to import or require them to get everything working.

### Installing Babylon.js

To install the latest babylon version use:

```
npm install --save babylonjs
```

This will install babylonjs' javascript files and will also include a TypeScript declaration file.

To include Babylon in your npm project, use:

```
import * as BABYLON from 'babylonjs';
```

### Installing other Babylon modules

After including babylonjs you can add Babylon's extra modules using npm as follows:

```
npm install --save babylonjs-materials [other packages]
```

Same as the babylonjs, this will install (default-minified and non-minified) javascript files and a declaration file.

To import the dependencies, you simply need to import the library (without giving it a namespace):

```
import 'babylonjs-materials';
```

This will extend the BABYLON namespace with the material classes, so you can do the following:

```
let skyMaterial = new BABYLON.SkyMaterial(.....)
```

An exception is the GUI library, which has its own namespace. It can therefore be imported as following:

```
import * as GUI from 'babylonjs-gui';
```

### using require()

If you prefer not to use es6-import syntax, you can use require in order to import babylon into your project:

```
let BABYLON = require('babylonjs');
let GUI = require('babylonjs-gui');
let materials = require('babylonjs-materials'); // unused variable
```


## TypeScript support

Being written in TypeScript, Babylon.js will always support TypeScript developers. We provide a declaration file in each package, that either extends the BABYLON namespace or declares a new namespace that can be used during development.

The most important thing to get full TypeScript support in your project is to add the imported packages as types of compilerOptions in [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) as follows:


```
{
    "compilerOptions": {
        .....,
        "types": [
            "babylonjs",
            "babylonjs-gui",
            "babylonjs-materials"
        ],
        ...
    },
    ...
}

```

This will load BABYLON's namespace and will allow autocomplete (and of course type safety) correctly.

### Example using webpack

A very simple webpack configuration to compile a babylon.js TypeScript project can look like this:

```
module.exports = {
    entry: {
        'project': './main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    plugins: [

    ],
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}
```

## External libraries

Cannon and Oimo (both physics engines) are being delivered as dependencies when installing babylonjs using npm. There is no need to install them on your own.


## Questions and Troubleshooting

### error TS2307: Cannot find module 'babylonjs' (or other modules)

* Make sure you have a version higher than 3.1.0-alpha3.4
* Make sure you added 'babylonjs' to "types" in tsconfig.json

### Even thou I use only a few classes from the BABYLON namespace, the entire Babylon module is included

Due to the way BabylonJS is built, Tree-Shaking is currently not quite possible. Babylon's internal objects have deep connections with one another, which is not easy to change. That means, that your built JS file will be at least Babylon.js' minified size.

### Naming is different than what the documentation states!

Our documentation always refers to the BABYLON namespace. We therefore always use this namespace when talking about objects/classes, and also use this namespace when talking about the GUI.

When using es-6 imports or require, you are the one responsible to setting the namespace in accordance to your needs. Pay attention when changing it and when copying code from the Playground.