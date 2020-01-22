The WebXR Camera is an extension of the `FreeCamera` that includes an update loop from an XRFrame and the ability to create 1 or more rig cameras that will be used to render the XR session.

If not using the [XR Experience helper](./ExperienceHelpers), you will need an [XR Session Manager](./SessionManager) to construct a new WebXR Camera:

``` javascript
const xrCamera = new WebXRCamera("nameOfCamera", scene, xrSessionManager);
```

## How positioning works

Just like any Babylon camera, the WebXR camera is an object with its own position and rotation that can be updated between frames. The WebXR camera's transformation is the current position of the device rendering the XR session (such as the HUD or the phone rendering the session) relative to the reference space currently used in the [Session Manager](./SessionManager).

The camera's position will update every frame from the information sent to it by the XRFrame. The XRFrame contains a general position of the device, and, if available, the poses for each screen (or eye) that are used to update the position of the rig cameras (which are the ones actually rendering the scene).

Just like any other camera you can get its direction:

``` javascript
const direction = xrCamera.getDirection(Axis.Z);
```

Or a position in front of the camera in a certain distance:

``` javascript
// get the position 2 meters in front of the camera
const frontPosition = xrCamera.getFrontPosition(2);
```

If the camera's position changes between frames (manually by you, or by the [WebXR teleportation feature](/api/classes/babylon.webxrmotioncontrollerteleportation)) a new reference space is being calculated (compensating for the position change). This reference space will now be used to update the camera's position.

The camera's Rig-system is the one responsible for rendering. The Rig-Camera's pose is always calculated based on the pose coming from the XR-Frame and **NOT** the WebXR Camera's pose. The main camera's pose is only a reference bot the base transformation and is not directly influencing the rendered cameras.

## Updating from a Non-VR Camera

When entering XR you might want to duplicate the Non-XR camera's position and use it as the base position of the XR Camera. To do that you will need to find the absolute transformation of the old camera and apply it to the new one. Babylon allows you to do that with a single function of the XR Camera:

``` javascript
// if scene.activeCamera is still the non-VR camera:
xrCamera.setTransformationFromNonVRCamera();

// Otherwise, provide the non-vr camera to copy the transformation from:

xrCamera.setTransformationFromNonVRCamera(otherCamera);

// If you want XR o also reset the XR Reference space, set the 2nd variable to true:

xrCamera.setTransformationFromNonVRCamera(otherCamera, true);
```

When executing this function the XR camera will copy the position of the old camera, and its rotation around the Y axis. The rest will be provided by the XR Frame. It is important to know that the height provided by the XR Frame (relative to the reference space) will be added to the position as a compensation for the position reset. Which means that it is possible that the XR camera's Y position will not be exactly equal to the other camera's Y position.
