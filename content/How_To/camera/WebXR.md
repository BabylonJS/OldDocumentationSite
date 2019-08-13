# How to use the WebXR experience helper

## **Note:** The WebXR spec is still under development and this API may not be up to date and will change. For the current status see this [Issue](https://github.com/BabylonJS/Babylon.js/issues/3899)

## Introduction
The [WebXR API](https://immersive-web.github.io/webxr/) allows the browser to interact to AR/VR devices. The WebVR API is planned to replace WebXR by browser vendors, it is recommended for developers to move from Babylon's [WebVRExperienceHelper](/how_to/webvr_helper) to WebXR once the spec is stable. Babylon provides a WebXR classes to make it easier to add webXR support to a Babylon scene.

## Setup

Currently, the version of WebXR Babylon is targeting is in [Chrome Canary](https://www.google.com/chrome/canary/) as of June 27th 2019
 1. Install [Chrome Canary](https://www.google.com/chrome/canary/) on desktop
 2. If on mobile ensure you have Android 8 or higher and a device that supports AR Core (eg. Pixel XL 2)
 2. In Chrome Canary, enter chrome://flags into the URL bar then search for webXR and set all XR related flags
    - WebXR Device API: Enabled
    - Oculus hardware support: Enabled
    - OpenVR hardware support: Enabled
    - XR device sandboxing: Disabled

**Currently Not supported**

 - iPhone browsers don't support xr, https://github.com/mozilla-mobile/webxr-ios supports an older version of webXR, once it matches the current spec, it should work.
 - AR features are not yet available (Current version of XR spec only supports webVR parity)

**Debugging:**

- https://developers.google.com/web/tools/chrome-devtools/remote-debugging/ 

**Note:** https://github.com/immersive-web/webxr-polyfill can be used in the future to polyfill browsers that don't support webXR

# QuickStart and Migrating from WebVR to WebXR

To quickly add XR support to an existing scene, create a default XR experience. This will mirror much of the functionality of the older createDefaultVRExperience method but for more fine grained control manual setup is recommended (See customization below).

```javascript
var xr = await scene.createDefaultXRExperienceAsync({floorMeshes: [environment.ground]})

```
This will:
 - Initialize UI to handle entering/exiting XR
 - Create a WebXRExperienceHelper which will manage an XR camera and XR session
 - Initialize XR input to monitor the state of connected XR controllers
 - Load the correct 3D corresponding to the XR controller
 - Enable pointer selection from the XR controller (For clicking on buttons or gui elements)
 - Enable teleportation interactions to allow the user to teleport around a scene
 - Configure output to display on the XR device and mirror the output on the webpage

- [Example](https://playground.babylonjs.com/#PPM311)

# Manual setup and customization

## WebXRExperienceHelper

WebXRExperienceHelper provides a minimal setup for XR
 - Creates a session manager which will manage creating/modifying/ending XR sessions
 - Creates a WebXR camera, container space and wires up Babylon's engine to render to an XR session

```javascript
 var xrHelper = await BABYLON.WebXRExperienceHelper.CreateAsync(scene)
```

To check if a specific XR session type is supported use
```javascript
if(!await xrHelper.sessionManager.supportsSessionAsync("immersive-vr")){
    alert("immersive-vr xr session not supported")
}else{
    alert("immersive-vr xr session supported")
}
```
- [Example](https://playground.babylonjs.com/#P2H4VV)

## Entering/exiting XR
When entering XR a managed canvas must be used
```javascript
var outputCanvas = new BABYLON.WebXRManagedOutputCanvas(xrHelper, scene.getEngine().getRenderingCanvas());
```
This will setup mirroring and hiding/showing an additional canvas if needed

To enter/exit XR
```javascript
scene.onPointerObservable.add(async (e)=>{
    if(e.type === BABYLON.PointerEventTypes.POINTERDOWN){
        if(xrHelper.state === BABYLON.WebXRState.NOT_IN_XR){
            await xrHelper.enterXRAsync("immersive-vr", "local-floor", outputCanvas)
        }else if(xrHelper.state === BABYLON.WebXRState.IN_XR){
            await xrHelper.exitXRAsync()
        }
    }
})
```
- [Example](https://playground.babylonjs.com/#P2H4VV#2)

Alternatively the WebXREnterExitUI can be used to set these up and provide buttons for entering/exiting

- [Example](https://playground.babylonjs.com/#AM07G2)

## Moving the camera

The helper's XR Camera is updated by the device every frame. If code is used to overwrite it's position it will just be overwritten on the next frame therefor the helper wraps the XR Camera in a container mesh. Helper methods are provided

Position the camera's global position to 0,0,0
```javascript
xrHelper.setPositionOfCameraUsingContainer(new Vector3(0,0,0));
```

Position the user's feet position to 0,0,0 (Only works with "local-floor" XRReferenceSpaceType)
```javascript
xrHelper.setPositionOfCameraUsingContainer(new Vector3(0,xrHelper.camera.position.y,0));
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

## Controller input

To get basic controller input for webXR

```javascript
var xrInput = new BABYLON.WebXRInput(xrHelper);
```

The XR Input's controllers will contain a pointer transform node which will be updated by the devices controller. A mesh can be added as a child of the pointer to be visualized in the scene. Additionally if the controller supports it, the XR controller will also contain a grip node which represents where the controller is held.

```javascript
// Controller mesh materials
var gripMaterial = new BABYLON.StandardMaterial("gripMat", scene)
gripMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.2,0.2)
var pointerMaterial = new BABYLON.StandardMaterial("gripMat", scene)
pointerMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.6,0.4)

// listen to controller added event
xrInput.onControllerAddedObservable.add((controller)=>{
    // Pointer mesh
    var pointerMesh = BABYLON.Mesh.CreateCylinder("", 1, 0, 1, 16, 1, scene)
    pointerMesh.scaling.scaleInPlace(0.03)
    pointerMesh.scaling.y = 0.05
    pointerMesh.position.z = pointerMesh.scaling.y/2
    pointerMesh.rotation.x = Math.PI/2
    pointerMesh.material = pointerMaterial
    pointerMesh.parent = controller.pointer

    // Grip mesh
    if(controller.grip){
        var gripMesh = BABYLON.Mesh.CreateCylinder("", 1, 1, 1, 16, 1, scene)
        gripMesh.scaling.scaleInPlace(0.03)
        gripMesh.rotation.x = Math.PI/2
        gripMesh.material = gripMaterial
        gripMesh.parent = controller.grip
    }
})
```
- [Example](https://playground.babylonjs.com/#AM07G2#2)

Like the xr camera, the controller nodes will also be children of the xrHelper.container node. Their positions will be the value coming from the webXR api but since they are a child of the container to get the correct pose in Babylon world space their absolute position/rotation will need to be retrieved from their world matrix.

```javascript
var pos = new BABYLON.Vector3()
var rot = new BABYLON.Quaternion()
var scale = new BABYLON.Vector3()
var m = controller.pointer.getWorldMatrix()
m.decompose(scale, rot, pos)
```

A world position ray can also be found with the following

```javascript
var ray = new BABYLON.Ray(new BABYLON.Vector3(), new BABYLON.Vector3())
controller.getWorldPointerRayToRef(ray)
```

To check the state of the controllers buttons/axis the raw gamepad is exposed and can be checked every frame

```javascript
// Check controllers gamepad state every frame
var triggerDown = false
var stateCheck = scene.onBeforeRenderObservable.add(()=>{
    if(controller.inputSource.gamepad.buttons[0].pressed){
        if(!triggerDown){
            var sphere = BABYLON.Mesh.CreateSphere("", 16, 0.1, scene)
            controller.getWorldPointerRayToRef(tmpRay)
            tmpRay.origin.addToRef(tmpRay.direction, sphere.position)
            triggerDown = true;
        }
    }else{
        triggerDown = false;
    } 
})
// Stop observable when controller is removed
controller.onDisposeObservable.addOnce(()=>{
    scene.onBeforeRenderObservable.remove(stateCheck)
})
```
- [Example](https://playground.babylonjs.com/#AM07G2#4)

Here is an example that combines input with pointer selection, teleportation and loading models

- [Example](https://playground.babylonjs.com/#AM07G2)

## Multiview (Not yet supported with WebXR)

To improve rendering performance by up to 2x, try using [Multiview](/How_To/Multiview) which will render both eyes in a single render pass

## Examples

- [Custom example](https://playground.babylonjs.com/#AM07G2#4)
- [Simple example](https://playground.babylonjs.com/#PPM311)
