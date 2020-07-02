## A bit about augmented reality

The idea behind augmented reality is simple - show the real world, but add information on top of it. As opposed to virtual reality where you are fully immersed in a different scene and have no actual contat to the real world, augmented reality lets you interact with it.

## Getting started with Augmented reality

### WebXR and AR

Augmented reality using Babylon.js will be heavily using WebXR, so I will recommend you to first start with the [getting started with WebXR](./Introduction_To_WebXR) guide. Most of the information that is valid for immersive VR sessions is also valid for immersive AR sessions. The few main differences between the two will be explained here.

### Supported devices

Immersive AR sessions are (currently) supported on two types of devices - mobile phones and firefox reality on the Hololens.

Mobile phones using android support immersive AR sessions on chrome (stable/canary). Note that you will need to install [AR Core](https://play.google.com/store/apps/details?id=com.google.ar.core), otherwise it will be a very short experience.

Hololens 2 supports WebXR and immersive AR sessions when using [Firefox Reality for hololens](https://www.microsoft.com/en-ca/p/firefox-reality/9npq78m7nb0r).

To check your scene on a desktop you can use the WebXR emulator, which supports a set of features of AR and lets you enter an immersive AR session when choosing the mobile mode.

### Simple scene in immersive AR

The simplest immersive AR sample is a port of an immersive VR scene:

```javascript
var createScene = async function () {
  var scene = new BABYLON.Scene(engine);
  var camera = new BABYLON.FreeCamera(
    "camera1",
    new BABYLON.Vector3(0, 5, -10),
    scene
  );
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, true);
  var light = new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.7;
  var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
  sphere.position.y = 2;
  sphere.position.z = 5;

  const xr = await scene.createDefaultXRExperienceAsync({
    // ask for an ar-session
    uiOptions: {
      sessionMode: "immersive-ar",
    },
  });

  return scene;
};
```

Playground for a [simple immersive AR scene](https://www.babylonjs-playground.com/pg/F41V6N/revision/32)

Notice that no environment was created. As opposed to immersive VR sessions, AR doesn't require a skybox or ground. If you want to define ground and remove it when entering AR (for example if you develop an experience for both desktop and AR) you can use the background remover feature, defined later in this page.

## Features

### Hit test

### Anchors

### Plane detection

### Background remover
