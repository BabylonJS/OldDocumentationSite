# How to use the WebVR experience helper

## Introduction
The [WebXR API](https://immersive-web.github.io/webxr/) allows the browser to interact to AR/VR devices. Babylon provides WebXR classes to make it easier to add webXR support to a Babylon scene.
**Note:** The WebXR spec is still under development and this API may change.

## Setup

Currently, the version of WebXR Babylon is targetting is in [Chrome Canary](https://www.google.com/chrome/canary/)
 1. Install [Chrome Canary](https://www.google.com/chrome/canary/) on desktop or mobile
 2. If on mobile ensure you have Android 8 or higher and a device that supports AR Core (eg. Pixel XL 2)
 3. In Chrome Canary, enter chrome://flags into the url bar then search for webXR and enable all xr related flags

**Currently Not supported**

 - Iphone browsers don't support xr, https://github.com/mozilla-mobile/webxr-ios supports an older version of webXR, once it matches the current spec, it should work.

**Debugging:**

- https://developers.google.com/web/tools/chrome-devtools/remote-debugging/ 

**Note:** https://github.com/immersive-web/webxr-polyfill can be used in the future to polyfill browsers that dont support webXR

## Getting Started

After creating a Babylon scene, an XR helper can be created to enter/exit an XR session. 

```javascript
var xrHelper = await BABYLON.WebXRExperienceHelper.CreateAsync(scene)
```

XR supports many different session types eg. VR / AR / Mobile AR (Described in later sections below) and not all session types will be supported by a specific device or browser so a session can be checked if it's supported via the supportsSessionAsync method.

```javascript
var supported = await xrHelper.supportsSessionAsync({immersive: true});
```

If a session is supported the helper can be used to enter the XR session.
**Note:** Most browsers require enteringXR to be called from a user interaction event (eg. button click)

```javascript
await xrHelper.enterXRAsync({immersive: true}, "eye-level");
```

This will activate the session and set the scene's active camera to the camera contained in the XR helper.

exitXRAsync can be used to exit XR which will set the active camera back to what it was originally.

```javascript
await xrHelper.exitXRAsync();
```

Application logic may depend on the current state of the XR helper so this can be accessed with:

```javascript
xrHelper.state == WebXRState.IN_XR;
```

## XR Camera

The helper's XR Camera is updated by the device every frame. If code is used to overwrite it's position it will just be overwritten on the next frame therefor the helper wraps the XR Camera in a container mesh. Helper methods are provided

Position the camera's global position to 0,0,0
```javascript
xrHelper.setPositionOfCameraUsingContainer(new Vector3(0,0,0));
```

Rotate the camera 90 degrees on the global Y axis
```javascript
xrHelper.rotateCameraByQuaternionUsingContainer(Quaternion.FromEulerAngles(0, Math.PI/2, 0));
```

The container and camera can be accessed as properties of the helper if needed
```javascript
xrHelper.camera;
xrHelper.container;
```

## Magic Window (Mobile AR)

A magic window session can be initialized with the session parameters below. A new canvas is required to display the mobile device's environment through the camera. The WebXRManagedOutputCanvas can be used to create a full screen output canvas that is only added to the webpage when XR is entered.

```javascript
var xrOutputCanvas = new WebXRManagedOutputCanvas(xrHelper);
await xrHelper.enterXRAsync({immersive: false, environmentIntegration: true, outputContext: xrOutputCanvas.canvasContext}, "eye-level");
```

When an xr session has environmentIntegration enabled, a ray can be cast into that environment to detect collisions in the real world. This can be used to place virtual objects. (After entering XR the device may need to be waived around a bit to scan the environment before a collision will occur)

```javascript
document.onclick = async(e)=>{
    // Create ray
    var ray = xrHelper.camera.getForwardRay(Number.MAX_VALUE)

    // Fire hittest
    var point = await xrHelper.environmentPointHitTestAsync(ray)
    if(point){
        positionableObject.position.copyFrom(point)
    }
}
```

## Virtual reality (Windows Mixed Reality, Vive, Oculus, etc.)

A VR session can be initialized with the following session parameters. If mirroring is desired an output canvas can be used.

```javascript
var xrOutputCanvas = new WebXRManagedOutputCanvas(xrHelper);
await xrHelper.enterXRAsync({immersive: true, outputContext: xrOutputCanvas.canvasContext}, "eye-level");
```

<!-- ## Controllers / Input / Teleportation

## Teleportation

## Enter / Exit buttons UI -->



## Examples

- [Magic window](https://playground.babylonjs.com/#ABR20V#50)
- [VR](https://playground.babylonjs.com/#ABR20V#48)
- [Magic window + VR](https://playground.babylonjs.com/#ABR20V#42)
