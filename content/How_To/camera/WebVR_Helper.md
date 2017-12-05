# Introduction

The WebVR Experience Helper provides a quick way to add WebVR support to a Babylon scene.

Features include:
1. WebVR camera and non-WebVR camera initialization
2. Enter WebVR button
3. Teleportation and rotation in the world
4. Gaze tracking with mesh selection from HMD and controllers

# Setup

A VRExperienceHelper can be created directly from the scene.
```javascript
var scene = new BABYLON.Scene(engine);
var vrHelper = scene.createDefaultVRExperience();
```
This will initialize a WebVR camera and a non-WebVR camera in the scene. It will also create an enterVR button at the bottom right of the screen which will start rendering to the HMD on click.

## Options
 - createDeviceOrientationCamera(default: true): If the non-WebVR camera should be created. To use an existing camera, create it and then initialize the helper with this set to false in the constructor.
 - createFallbackVRDeviceOrientationFreeCamera(default: true): When no HMD is connected, this flag specifies if the VR camera should fallback to a VRDeviceOrientationFreeCamera which will render each eye on the screen. This can be set to false to only enable entering VR if an HMD is connected.

# Teleportation and Rotation

To enable teleportation in the scene, create a mesh that the user should be able to teleport to and then enable teleportation with that mesh's name.
```javascript
var ground = BABYLON.Mesh.CreateGround("ground", 6, 6, 2, scene);
vrHelper.enableTeleportation({floorMeshName: "ground"});
```
To teleport, hold up on the joystick to display where the user will be teleported to and then release to teleport.
To rotate, move the joystick to the left or to the right.

When WebVR controllers are connected, the teleportation will be based on where the controller is pointing.

When WebVR controllers are not connected, the user will teleport to where the user is looking and teleportation can be triggered with an Xbox controller. 

# Accessing cameras

The VR and non-VR camera can be accessed from the helper to handle any application specific logic.
```javascript
// Initial camera before the user enters VR
vrHelper.deviceOrientationCamera;
// WebVR camera used after the user enters VR
vrHelper.webVRCamera;
// One of the 2 cameras above depending on which one is in use
vrHelper.currentVRCamera;
```

# Accessing controllers

The controllers can be accessed from the helper to handle any application specific logic.
```javascript
vrHelper.onControllerMeshLoaded.add((webVRController)=>{
    var controllerMesh = webVRController.mesh;
    webVRController.onTriggerStateChangedObservable.add(()=>{
        // Trigger pressed event
    });
});
```

# Mesh selected event

As the user selects an object with their gaze or controller the NewMeshSelected event will occur.
```javascript
vrHelper.onNewMeshSelected.add((mesh)=>{
    // Mesh has been selected
});
```
Note: This only works after teleportation has been enabled.

# Examples

Scenes:
 - [Sponza](https://www.babylonjs-playground.com/#JA1ND3#6)
 - [Mansion](https://www.babylonjs-playground.com/#JA1ND3#15)
 - [HillValley](https://www.babylonjs-playground.com/#JA1ND3#18)

Games:
 - [Minecraft JMJ](https://www.babylonjs-playground.com/#32DWVS#4)
 - [Fruit Ninja](https://www.babylonjs-playground.com/#92RIZ6#51)
