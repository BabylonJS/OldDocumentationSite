# BabylonJS with ReactJS.
## A brief example showing how to use BabylonJS with ReactJS ##

For anyone interested, it is not difficult to integrate BabylonJS into a ReactJS application. 

## When would you **NOT** want to use React with BabylonJS
It is very easy to get a BabylonJS scene inside a ReactJS website; that is a valid scenario and this tutorial will show you how.  If you are building a game for mobile devices then probably you would want to keep all interactions in the canvas and avoid DOM.

## What you need

It's up to you if you choose Node + NPM/Yarn or static page, so only how to create the component will be discussed here.  Some example projects with ES6/TypeScript are linked at the end.

## Component

You could put a canvas right on your page itself using code from this component we are going to build, but it's easy to make a reusable ReactJS component, too!  This is a TypeScript example, so for JavaScript just remove the data types.

If you are using NPM or Yarn then you need to install the package 'babylonjs'.
```bash
npm install 'babylonjs'
```

```bash
yarn add 'babylonjs'
```

Here is the code for our component.  Create a .tsx or .jsx file and put this code in it:
```jsx
import * as BABYLON from 'babylonjs';

export type SceneEventArgs = {
  engine: BABYLON.Engine,
  scene: BABYLON.Scene,
  canvas: HTMLCanvasElement
};

export type SceneProps = {
  engineOptions?: BABYLON.EngineOptions,
  adaptToDeviceRatio?: boolean,
  onSceneMount?: (args: SceneEventArgs) => void,
  width?: number,
  height?: number
};

export default class Scene extends React.Component<SceneProps & React.HTMLAttributes<HTMLCanvasElement>, {}> {

  private scene: BABYLON.Scene;
  private engine: BABYLON.Engine;
  private canvas: HTMLCanvasElement;

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize();
    }
  }

  componentDidMount () {
    this.engine = new BABYLON.Engine(
        this.canvas,
        true,
        this.props.engineOptions,
        this.props.adaptToDeviceRatio
    );

    let scene = new BABYLON.Scene(this.engine);
    this.scene = scene;

    if (typeof this.props.onSceneMount === 'function') {
      this.props.onSceneMount({
        scene,
        engine: this.engine,
        canvas: this.canvas
      });
    } else {
      console.error('onSceneMount function not available');
    }

    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResizeWindow);
  }

  onCanvasLoaded = (c : HTMLCanvasElement) => {
    if (c !== null) {
      this.canvas = c;
    }
  }

  render () {
    // 'rest' can contain additional properties that you can flow through to canvas:
    // (id, className, etc.)
    let { width, height, ...rest } = this.props;

    let opts: any = {};

    if (width !== undefined && height !== undefined) {
      opts.width = width;
      opts.height = height;
    }

    return (
      <canvas
        {...opts}
        ref={this.onCanvasLoaded}
      />
    )
  }
}
```
>In 80 lines we have: 
> * Reusable ReactJS Component for BabylonJS.
> * Scene will resize the engine when canvas is resized.
> * We only need to add this component to a page and specify a method to run.

Here is the page using our component.  It will load the default playground scene in our ReactJS website.

```jsx
import * as React from 'react';
import * as BABYLON from 'babylonjs';
import BabylonScene from './SceneComponent'; // import the component above linking to file we just created.

class PageWithScene extends React.Component<{}, {}> {
    onSceneMount = (e: SceneEventArgs) => {
        const { canvas, scene, engine } = e;
       
        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;

        // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
        var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

        // Move the sphere upward 1/2 its height
        sphere.position.y = 1;

        // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
        var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });
    }

    render() {               
        return (
            <div>
                <BabylonScene onSceneMount={this.onSceneMount} />
            </div>
        )
    }
}
```

## A few notes on the code
This will show the basic playground in your website!  Note only that our 'BABYLON.Scene' was already instantiated in componentDidMount() of our component.

## Conclusion

Integrating BabylonJS into a ReactJS website turns out to be not so tough.  Since BabylonJS 3.1 we can now use ES6 imports not only for BabylonJS, but also for GUI and more.

If the above component we created does everything you need then that's all you will need and you are all set.  There is an NPM project called 'react-babylonjs' that has additional methods and properties and also has redux middleware.  That NPM is used in a couple of starter kits - One for ES6 and a TypeScript one for create-react-app:
* [Create React App + TypeScript + BabylonJS (GUI + Physics)](https://github.com/brianzinn/create-react-app-typescript-babylonjs)
* [ES6 + BabylonJS](https://github.com/brianzinn/react-redux-babylonjs-starter-kit)
