# BabylonJS with React.
## How to use BabylonJS with React

For anyone interested, it is not difficult to integrate BabylonJS into a React application. 

## What you need
It's up to you if you choose Create React App or a custom project; only how to load BabylonJS in a component will be discussed here.  This example uses the newer `@babylonjs/core` ES6 NPM, but can also be modified to work with the `babylonjs` NPM.

## Component
We are going to build a reusable React component that takes care of starting up BabylonJS for us!

In a working React project you first need to install the package `@babylonjs/core` using npm or yarn:
```bash
npm install @babylonjs/core
```

```bash
yarn add @babylonjs/core
```
Create a file called `SceneComponent.jsx` and add this:
```jsx
import { Engine, Scene } from '@babylonjs/core'
import React, { useEffect, useRef, useState } from 'react'

export default (props) => {
    const reactCanvas = useRef(null);
    const { antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest } = props;

    const [loaded, setLoaded] = useState(false);
    const [scene, setScene] = useState(null);

    useEffect(() => {
        if (window) {
            const resize = () => {
                if (scene) {
                    scene.getEngine().resize();
                }
            }
            window.addEventListener('resize', resize);

            return () => {
                window.removeEventListener('resize', resize);
            }
        }
    }, [scene]);

    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
            const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
            const scene = new Scene(engine, sceneOptions);
            setScene(scene);
            if (scene.isReady()) {
                props.onSceneReady(scene)
            } else {
                scene.onReadyObservable.addOnce(scene => props.onSceneReady(scene));
            }

            engine.runRenderLoop(() => {
                if (typeof onRender === 'function') {
                    onRender(scene);
                }
                scene.render();
            })
        }

        return () => {
            if (scene !== null) {
                scene.dispose();
            }
        }
    }, [reactCanvas])

    return (
        <canvas ref={reactCanvas} {...rest} />
    );
}
```
>In 55 lines we have: 
> * Reusable React Component for BabylonJS.
> * Will resize the engine when window is resized.
> * Any extra props you add to this component will flow to the canvas (ie: style/className)
> * We only need to add this component to a page and specify a method to run when the scene is ready.  A `<canvas />` element is created and a BabylonJS engine and scene are created and started.
> * If you want more control of the runRenderLoop, just remove it from here and add it in your `onSceneReady` prop.
> * TypeScript source can be copied from [here](https://raw.githubusercontent.com/brianzinn/babylonjs-hook/master/src/babylonjs-hook.tsx).

The above component is available in NPM, if you prefer:
```bash
npm add babylonjs-hook
yarn add babylonjs-hook
```

Here is a page using our component:

```jsx
import React from 'react';
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from '@babylonjs/core';
import SceneComponent from './SceneComponent'; // ^^ point to file we created above or 'babylonjs-hook' NPM.
import './App.css';

let box;

const onSceneReady = scene => {
  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'box' shape.
  box = MeshBuilder.CreateBox("box", {size: 2}, scene);

  // Move the box upward 1/2 its height
  box.position.y = 1;

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
}

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = scene => {
  if (box !== undefined) {
    var deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 10;
    box.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
  }
}

export default () => (
    <div>
      <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id='my-canvas' />
    </div>
)
```

## A few notes on the code
This will show the basic playground in your website!  A rotation has been added in the render loop (and the sphere changed to a box, so you would notice).

If you would like to see this in action, there is a boilerplate project using the original NPM `babylonjs`, which you can clone from
* [Reactjs + BabylonJS + Electron](https://github.com/blurymind/babylon-react-electron-app)

There is a boilerplate using above component with ES6 NPM `@babylonjs/core` here
* [Reactjs + BabylonJS](https://github.com/brianzinn/babylonjs-cra-vanilla-ts)

## Adding other BabylonJS NPMs
If you start with the `@babylonjs` [ES6 NPMs](https://doc.babylonjs.com/features/es6_support) (as we have done) then add those ones only.  
> For GUI use `@babylonjs/gui` instead of the NPMs that don't start with `@`.

## Conclusion

Integrating BabylonJS into a React site turns out to be not so tough.  Since BabylonJS 3.1 we can use ES6 imports not only for BabylonJS, but also for supported libraries (GUI/loaders/etc).

If the above component we created does everything you need then that's all you will need and you are all set!  If you want to take it a step further you may want to take the `react-babylonjs` renderer for a spin.

# react-babylonjs renderer
A renderer is a next-level React integration that lets you use JSX to build your scenes and GUI.  State changes will flow automatically to your BabylonJS components (and persist through HMR) and you can maintain your scene graph in a declarative syntax and through components.

There is an NPM project called `react-babylonjs` that is a react renderer for BabylonJS.

What you are able to easily do is powerful, because inside the Scene component you can declare BabylonJS objects like Cameras/Meshes/Lights/Materials/Textures/3D Models/etc, using familiar JSX.  Meanwhile there are escape hatches that allow you to work imperatively as well.

> BabylonJS ES6 + CRA (Create React App) project examples:
> * JavaScript (examples for 3D models, GUI, VR, behaviors, props/state management)
>   * [source](https://github.com/brianzinn/create-react-app-babylonjs)
>   * [demo](https://brianzinn.github.io/create-react-app-babylonjs/)
>* TypeScript (GUI + physics + shadows)
>   * [source](https://github.com/brianzinn/create-react-app-typescript-babylonjs)
>   * [demo](https://brianzinn.github.io/create-react-app-typescript-babylonjs/)
>* [Electron](https://github.com/brianzinn/react-babylonjs-electron) (Electron added to above TypeScript project)
>* [PWA](https://github.com/brianzinn/create-react-app-babylonjs-pwa) (Progressive Web App)

`react-babylonjs` (https://github.com/brianzinn/react-babylonjs) links to many live storybook code examples (skybox, CSG, dynamic terrain, behaviors, GUI, react hooks, integrations (PIXI, react-spring, gsap, chroma-js), 3D models, physics, shadows, layers (glow/highlight), textures, fresnel parameters, PBR, etc.
