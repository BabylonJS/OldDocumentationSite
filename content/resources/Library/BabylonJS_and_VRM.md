![VRM top header](/img/resources/babylonjs_and_vrm/vrm_topheader.png)

## What is VRM?

> “VRM” is **a file format for handling 3D humanoid avatar (3D model) data for VR applications**. It is based on glTF2.0. Anyone is free to use it.
> 
> In addition, a standard implementation ([UniVRM](https://github.com/vrm-c/UniVRM)) in c# that can import and export VRM file in [Unity](https://unity3d.com/) is released as open source.

Additional informations can view at [vrm.dev](https://vrm.dev/en/).

## How to load VRM file in BabylonJS?

You can load VRM file in BabylonJS that uses [babylon-vrm-loader](https://github.com/virtual-cast/babylon-vrm-loader), which is community-made BabylonJS glTF Loader Extension for `VRM`.

It supports `.vrm` and `.vci` file loading.

## A brief example

https://playground.babylonjs.com/#K5W35Y

## What can do?

For example, once write some animation code, all VRM models can animate it!

![VRM Same Code Animation](/img/resources/babylonjs_and_vrm/vrm-samecode-animation.gif)

```javascript
// example code
vrmManager.humanoidBone.leftShoulder.rotationQuaternion = Quaternion.FromEulerAngles(
    Math.sin(Math.PI / 4 * (elapsedTime / 200)),
    0,
    Math.PI / 3.5,
);
vrmManager.humanoidBone.rightShoulder.rotationQuaternion = Quaternion.FromEulerAngles(
    Math.sin(Math.PI + (Math.PI / 4 * (elapsedTime / 200))),
    0,
    -Math.PI / 3.5,
);
vrmManager.humanoidBone.leftUpperLeg.rotationQuaternion = Quaternion.FromEulerAngles(
    Math.sin(Math.PI / 4 * (elapsedTime / 200)),
    0,
    0,
);
vrmManager.humanoidBone.rightUpperLeg.rotationQuaternion = Quaternion.FromEulerAngles(
    Math.sin(Math.PI + (Math.PI / 4 * (elapsedTime / 200))),
    0,
    0,
);
vrmManager.humanoidBone.leftLowerLeg.rotationQuaternion = Quaternion.FromEulerAngles(
    -Math.PI / 6,
    0,
    0,
);
vrmManager.humanoidBone.rightLowerLeg.rotationQuaternion = Quaternion.FromEulerAngles(
    -Math.PI / 6,
    0,
    0,
);
```

BabylonJS [standard animation mechanism](/babylon101/animations) also can be used.

For instance, you can make pose to any VRM.

https://playground.babylonjs.com/#K5W35Y#8

## How to use?

On browser example is [here](https://codepen.io/anon/pen/zQXyxL?editors=1010).

On BabylonJS Playground example is https://playground.babylonjs.com/#K5W35Y

On npm/yarn with webpack...

```bash
$ npm install --save @babylonjs/core @babylonjs/loaders babylon-vrm-loader
# or
$ yarn add @babylonjs/core @babylonjs/loaders babylon-vrm-loader
```

```javascript
import * as BABYLON from '@babylonjs/core'

// has side-effect
// ref. https://webpack.js.org/guides/tree-shaking#mark-the-file-as-side-effect-free
import 'babylon-vrm-loader'

// vrmFile is File object retrieved by <input type="file">.
const scene = await BABYLON.SceneLoader.LoadAsync('file:', vrmFile, engine);
const vrmManager = scene.metadata.vrmManagers[0];

// Update secondary animation
scene.onBeforeRenderObservable.add(() => {
    vrmManager.update(scene.getEngine().getDeltaTime());
});

// Model Transformation
vrmManager.rootMesh.translate(new BABYLON.Vector3(1, 0, 0), 1);

// Work with HumanoidBone
vrmManager.humanoidBone.leftUpperArm.addRotation(0, 1, 0);

// Work with BlendShape(MorphTarget)
vrmManager.morphing('Joy', 1.0);
```

## External

* [vrm.dev](https://vrm.dev/en/)
* [virtual-cast/babylon-vrm-loader: GitHub](https://github.com/virtual-cast/babylon-vrm-loader)
* [vrm-c/UniVRM: GitHub](https://github.com/vrm-c/UniVRM)
* [Loading VRM Humanoid-based model - Demos and projects - Babylon.js Forums](https://forum.babylonjs.com/t/loading-vrm-humanoid-based-model/4980/8)