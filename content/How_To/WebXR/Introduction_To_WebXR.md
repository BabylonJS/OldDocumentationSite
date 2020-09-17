The WebXR API enables developers to create VR and AR experiences for the web. XR (Extended reality) has unified both Augmented Reality features and Virtual Reality features into a single API that works across all supported devices.

## Current state

The [WebXR W3C Proposal](https://immersive-web.github.io/webxr/) is currently in its draft phase. It is, however, already implemented in Chrome (check [caniuse.com](https://caniuse.com/#feat=webxr) to know about others browsers). Starting with version 79, WebVR has been deprecated and WebXR is enabled by default. Earlier browser versions had WebXR behind a configuration flag. 

As the API continuously changes, it is difficult to keep up with feature changes. The latest chrome canary is notably the most XR-feature-complete browser and Google continuously updates the browser with new features. This is the main reason we introduced the [Features Manager](./WebXR_Features_Manager), which allows us to implement the newest version of official features with internal versioning without breaking backwards compatibility.

Note that most of the time when we say WebXR, we actually mean WebXR **in VR immersive mode**. This is currently the most used mode of WebXR.

## Device and browser support

### PC

Chrome 79 on windows officially supports WebXR with all [Microsoft Mixed Reality](https://en.wikipedia.org/wiki/Windows_Mixed_Reality) Devices. Unofficially, WebXR is working well with the oculus SDK (Rift, Rift S, and Quest with Link). As of this writing, Oculus support is still behind a flag.

### Mobile and Quest

WebXR is supported on Google Daydream using Chrome.

WebXR AR features on Android's Chrome Browser (Stable and Canary) can be enabled behind a flag at [chrome://flags](chrome://flags), including AR features such as plane detection, hit-tests and anchors. Note that the AR features' architecture is constantly changing, so expect different results from version to version.

Oculus Quest supports WebXR (in VR mode) in the latest oculus browser. Babylon's specs implementation works well with the quest.

No official iOS/iPhone support is planed at the moment. Mozilla has built the [WebXR iOS Viewer](https://apps.apple.com/us/app/webxr-viewer/id1295998056) which is a (very) limited AR-oriented browser.

### Polyfill

For older browsers that support WebVR but not WebXR you can use the [WebXR Polyfill](https://github.com/immersive-web/webxr-polyfill) which is the WebXR API implementation using WebVR features. Some functions will not work (or will simply return without changes) but the basic functionality works well.

Babylon does not intend on integrating the polyfill in the framework itself or in the playground. We encourage the developer to offer the polyfill to users not using a WebXR-Supported browser.

To use the polyfill in the playground, please add the following to your playground (before 'createScene'):

```javascript
const xrPolyfillPromise = new Promise((resolve) => {
    if (navigator.xr) {
        return resolve();
    }
    define('polyfill', ['https://cdn.jsdelivr.net/npm/webxr-polyfill@latest/build/webxr-polyfill.js'], (polyfill) => { new polyfill(); resolve(); });
});
```

afterwards, make sure to `await` it before initializing WebXR:

```javascript
const xrPolyfillPromise = new Promise((resolve) => {
    if (navigator.xr) {
        return resolve();
    }
    define('polyfill', ['https://cdn.jsdelivr.net/npm/webxr-polyfill@latest/build/webxr-polyfill.js'], (polyfill) => { new polyfill(); resolve(); });
});

var createScene = async function () {
    // wait for the polyfill to kick in
    await xrPolyfillPromise;
    console.log(navigator.xr); // should be there!
    console.log(await BABYLON.WebXRSessionManager.IsSessionSupportedAsync('immersive-vr')) // should be true
    // create your scene
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.DeviceOrientationCamera("DevOr_camera", new BABYLON.Vector3(-30, -30, -30), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0, 0), scene);
    scale = 100;
    // initialize XR
    var xr = await scene.createDefaultXRExperienceAsync();

    return scene;
};
```

If you experience low-resolution when using the polyfill, make sure to resize the canvas to a higher resolution. This is a limitation of WebVR (that required resizing the canvas) which we didn't integrate for WebXR.

### The WebXR Emulator

If you are developing and don't want to constantly test on a real device, use mozilla's [WebXR Emulator](https://blog.mozvr.com/webxr-emulator-extension/) which is available for [chrome](https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje) and [firefox](https://addons.mozilla.org/firefox/addon/webxr-api-emulator). We support it and actually use it during development. Highly recommended.

## Getting started

The simplest way to get started is using a WebXR-enabled browser and add a single line of code to your scene:

``` javascript
const xr = scene.createDefaultXRExperienceAsync();
```

This will enable WebXR **in VR immersive mode**, including session init, input sources, the camera, teleportation and scene interactions. All using our [WebXR Default Experience Helper](./WebXR_Experience_Helpers#the-webxr-default-experience-helper).

Note that the `xr` variable is a Promise. Using the async/await pattern will be simpler and more intuitive. It will also make sense to define floor meshes so we can define our ground and move on it. Here is a sphere in XR:

``` javascript
var createScene = async function() {

    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position.y = 1;

    const env = scene.createDefaultEnvironment();

    // here we add XR support
    const xr = await scene.createDefaultXRExperienceAsync({
        floorMeshes: [env.ground]
    });

    return scene;
};
```

[Sphere in WebXR using Babylon.js](https://www.babylonjs-playground.com/#F41V6N) playground link

And that's it!

Make sure to read more on the [WebXR Experience Helper](./WebXR_Experience_Helpers) for further tips and tricks, and take a look at our [Demos and examples](./WebXR_Demos_and_Examples) page.

## Migrating from WebVR

WebVR is deprecated and will soon end its life in most if not all browsers. It is highly recommended to port all WebVR implementations to WebXR.

### Migrating from the VR Experience helper

If you used our [VR experience helper](./WebVR_Helper) remove the VR initializer and add the XR experience helper. So this:

``` javascript
var scene = new BABYLON.Scene(engine);
var vrHelper = scene.createDefaultVRExperience();
```

turns to this:

``` javascript
var scene = new BABYLON.Scene(engine);
var xrHelper = scene.createDefaultXRExperienceAsync();
```

The XR helper has full controller support per default, including interactions with the scene meshes, pointer events and more. Read more about the [XR Experience helper](./WebXR_Experience_Helpers).

### Migrating controller support

Since WebXR controllers are no longer considered to be Gamepads the architecture is a bit different.

The most important feature that was added is the full pointer events support for the controllers. The controllers support all pointer events, so you can use [Pointer interactions](https://doc.babylonjs.com/how_to/interactions#pointer-interactions) just like you use to controller mouse interactions in your scene.

It is also important to note that it is now possible to query what features the controller has and act accordingly.

Here are the **VR** controllers' most used functions, and how to get them to work in **XR**:

``` javascript
// On new controller attached:

// WebVR:
webvrCamera.onControllersAttached = (vrController) => {
    // fun with the new controller, which is a gamepad!
}

// WebXR:
const webXRInput = xr.input; // if using the experience helper, otherwise, an instance of WebXRInput
input.onControllerAddedObservable.add((xrController /* WebXRInputSource instance */ ) => {
    // more fun with the new controller, since we are in XR!
    inputSource.onMotionControllerInitObservable.add((motionController) => {
        // get the motionController, which is similar to but NOT a gamepad:

    });
    // xr supports all types of inputs, so some won't have a motion controller
    if (!xrController.gamepad) {
        // using touch, hands, gaze, something else?
    }
});

// From this point we assume we have two variables: vrController and xrController.
// We also assume motionController is present!

// main button

// WebVR:
controller.onMainButtonStateChangedObservable.add((newState /* ExtendedGamepadButton */ ) => {
    // is the button pressed?
    if (newState.pressed) {
        // Do something
    }
});

// WebXR:
// get the main component (decided by the controller's vendor!)
const mainComponent = xrController.motionController.getMainComponent();
// or get the trigger component, if present:
const mainTrigger = xrController.motionController.getComponent(WebXRControllerComponent.TRIGGER);
mainComponent.onButtonStateChanged.add((component /* WebXRControllerComponent */ ) => {
    // check for changes:
    // pressed changed?
    if (component.changes.pressed) {
        // is it pressed?
        if (component.changes.pressed.current === true) {
            // pressed
        }
        // or a different way:
        if (component.pressed) {
            // component is pressed.
        }
    }
})

// thumbpad / touchpad

// in WebVR - you had to check what controller is being used, but in general this would work:
vrController.onPadValuesChangedObservable.add(function(stateObject) {
    console.log(stateObject); // {x: 0.1, y: -0.3}
});

// in webXR you can check if it is present and work accordingly:
const thumbstick = xrController.motionController.getComponent(WebXRControllerComponent.THUMBSTICK);
if (thumbstick) {
    // Huzza! we have a thumbstick:
    thumbstick.onButtonStateChanged // will trigger when the thumbstick is PRESSED or touched!

    thumbstick.onAxisValueChanged // will trigger when axes of the thumbstick changed
}

// touchpad

// in WebVR we had "pad" concept which was for both thumbstick and touchpad
controller.onPadValuesChangedObservable.add(function(stateObject) {
    console.log(stateObject); // {x: 0.1, y: -0.3}
});

// in WebXR, it is much much better:
const touchpad = xrController.motionController.getComponent(WebXRControllerComponent.TOUCHPAD);
if (touchpad) {
    // Finally, a controller with a touchpad
    touchpad.onButtonStateChanged // will trigger when the touchpad is touched or pressed

    touchpad.onAxisValueChanged // will trigger when axes of the touchpad changed
}
```

Read more about the [XR Controllers system](./WebXR_Controllers_Support).

### Legacy support

Thou we always encourage backwards compatibility **We recommend using WebXR directly** and stop using the WebVR experience helper. However:

The latest WebVR Experience helper has a new flag in its init options - `useXR` . This will check for XR support and will launch the VR session in WebXR, if possible. A working example can be found in [the WebVR color-picker demo](https://www.babylonjs-playground.com/#TAFSN0#323):

``` javascript
var createScene = function() {
    // Create scene
    var scene = new BABYLON.Scene(engine);

    // Create simple sphere
    var sphere = BABYLON.Mesh.CreateIcoSphere("sphere", {
        radius: 0.2,
        flat: true,
        subdivisions: 1
    }, scene);
    sphere.position.y = 3;
    sphere.material = new BABYLON.StandardMaterial("sphere material", scene)

    // Lights and camera
    var light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0, -0.5, 1.0), scene);
    light.position = new BABYLON.Vector3(0, 5, -2);
    var camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 4, 3, new BABYLON.Vector3(0, 3, 0), scene);
    camera.attachControl(canvas, true);
    scene.activeCamera.beta += 0.8;

    // Default Environment
    var environment = scene.createDefaultEnvironment({
        enableGroundShadow: true,
        groundYBias: 2.8
    });
    environment.setMainColor(BABYLON.Color3.FromHexString("#74b9ff"))

    // Shadows
    var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.blurKernel = 32;
    shadowGenerator.addShadowCaster(sphere, true);

    // Enable VR, use XR when possible
    var vrHelper = scene.createDefaultVRExperience({
        createDeviceOrientationCamera: false,
        useXR: true, // This will enable XR if supported
        floorMeshes: [environment.ground]
    });

    // Runs every frame to rotate the sphere
    scene.onBeforeRenderObservable.add(() => {
        sphere.rotation.y += 0.0001 * scene.getEngine().getDeltaTime();
        sphere.rotation.x += 0.0001 * scene.getEngine().getDeltaTime();
    })

    // GUI
    var plane = BABYLON.Mesh.CreatePlane("plane", 1);
    plane.position = new BABYLON.Vector3(0.4, 4, 0.4)
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);
    var panel = new BABYLON.GUI.StackPanel();
    advancedTexture.addControl(panel);
    var header = new BABYLON.GUI.TextBlock();
    header.text = "Color GUI";
    header.height = "100px";
    header.color = "white";
    header.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    header.fontSize = "120"
    panel.addControl(header);
    var picker = new BABYLON.GUI.ColorPicker();
    picker.value = sphere.material.diffuseColor;
    picker.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    picker.height = "350px";
    picker.width = "350px";
    // This will work in XR, since we are using native pointer events!
    picker.onValueChangedObservable.add(function(value) {
        sphere.material.diffuseColor.copyFrom(value);
    });
    panel.addControl(picker);

    vrHelper.onAfterEnteringVRObservable.add(() => {
        // This callback will still work! Would be better to use the XR native observables.
    })

    return scene;
};
```

The color picker works since it is using the pointer architecture. If XR is present, XR will be used. Otherwise, it will use WebVR as a fallback.

Note that some features will not work correctly or will not work at all. For example, camera gaze will not work at all. Controller will work, but since the interaction architecture is different, it is highly likely you will need to adjust a few observers in order to get it to work, especially if there are VR-specific callbacks.

We recommend using the WebXR polyfill instead.

## Further reading

1. [Demos and Examples](./WebXR_Demos_and_Examples)
1. [The WebXR Experience Helper](./WebXR_Experience_Helpers)
1. [The Session Manager](./WebXR_Session_Manager)
1. [The WebXR Camera](./WebXR_Camera)
1. [WebXR Input Sources and Controller support](./WebXR_Controllers_Support)
1. [Features Manager and available features](./WebXR_Features_Manager)
1. [Selected WebXR Features](./WebXR_Selected_Features)
1. [Augmented Reality](./WebXR_Augmented_Reality)
1. Advanced usage, troubleshooting, tips and tricks
