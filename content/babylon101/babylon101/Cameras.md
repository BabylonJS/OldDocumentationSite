---
ID_PAGE: 22061
PG_TITLE: Cameras
title: Cameras
abstract: >-
  To be able to see your 3D objects you have to set a camera. You position this
  camera in the scene and you define the direction where it 'looks'.
slug: cameras
redirects:
  - /tutorials/cameras
---

# Cameras

Of the many cameras available in Babylon.js the two most use are probably - the Universal Camera used for First Person Movement and the Arc Rotate Camera which is an orbital camera. Though with the advent of WebVR this may change.

For input control by the user all cameras need to be attached to the canvas once constructed using

```javascript
camera.attachControl(canvas, true);
```
The second parameter is optional and defaults to **false**. When **false** then default actions on a canvas event are prevented. Set to true to allow canvas default actions. 

**Notes** 
1. A [Gamepad](/how-to/events/how-to-use-gamepads) may be used a a controller.
2. For touch control either [PEP](https://github.com/jquery/PEP) or [hand.js](https://github.com/Deltakosh/handjs) is needed.

## Universal Camera

This was introduced with version 2.3 of Babylon.js and is controlled by the keyboard, mouse, touch or [gamepad](/how-to/events/how-to-use-gamepads) depending on the input device used, with no need for the contoller to be specified. This extends and replaces the [Free Camera](/classes/3.0/freecamera), the [Touch Camera](/classes/3.0/touchcamera) and the [Gamepad Camera](classes/3.0/gamepadcamera) which are all still available.

The Universal Camera is now the default camera used by Babylon.js if nothing is specified, and it’s your best choice if you’d like to have a FPS-like control in your scene.  
All demos on babylonjs.com are based upon that feature. Plug a Xbox controller into your PC and using it you’ll still be able to navigate most of the demos.

The default actions are 

1. keyboard - left and right arrows move the camera left and right, up and down arrows move it forwards and backwards;

2. mouse - rotates the camera about the axes with the camera as origin;

3. touch - swipe left and right to move camera left and right, swipe up and down to move it forward and backwards;

4. [gamepad](/how-to/events/how-to-use-gamepads) - corresponds to device.

**Note** - Using keys in the Playground requires you to click inside the rendering area to give it the focus.

### Constructing a Universal Camera

```javascript

// Parameters : name, position, scene
    var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);

// Targets the camera to a particular position. In this case the scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

// Attach the camera to the canvas
    camera.attachControl(canvas, true);
```
[A Playground Example of a Universal Camera](http://www.babylonjs-playground.com/#12WBC#68)


## Arc Rotate Camera

 This camera always points towards a given target position and can be rotated around that target with the target as the centre of rotation. 
 It can be controlled with cursors and mouse, or with touch events. 
 
 Think of this camera as one orbiting its target position, or more imaginatively as a spy satellite orbiting the earth. Its position relative to the target (earth) can be set by three parameters, 
  _alpha_ (radians) the longitudinal rotation, _beta_ (radians) the latitudinal rotation and  _radius_ the distance from the target position. Here is an illustration:
![arc rotate camera](/img/how_to/camalphabeta.jpg)

Setting _beta_ to 0 or PI can, for technical reasons, cause problems and in this situation _beta_ is offset by 0.1 radians (about 0.6 degrees).

Both _alpha_ and _beta_ increase in a clockwise direction. 

The position of the camera can also be set from a vector which will overide any current value for _alpha_, _beta_ and _radius_. 
This can be much easier than calculating the required angles.

Whether using the keyboard, mouse or touch swipes left right directions change _alpha_ and up down directions change _beta_.

### Constructing an Arc Rotate Camera

```javascript

// Parameters : name, position, scene
    var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);

// Targets the camera to a particular position. In this case the scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

// Attach the camera to the canvas
    camera.attachControl(canvas, true);

// Parameters: alpha, beta, radius, target position, scene
	var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

// Positions the camera overwriting alpha, beta, radius
    camera.setPosition(new BABYLON.Vector3(0, 0, 20));

// This attaches the camera to the canvas
    camera.attachControl(canvas, true);    
```
[A Playground Example of an Arc Rotate Camera](http://www.babylonjs-playground.com/#12WBC#69)

Panning with an ArcRotateCamera is also possible by using CTRL + MouseLeftClick, the default action. You can specify to use MouseRightClick instead, by setting _useCtrlForPanning_ to false in the _attachControl_ call :

```javascript
   camera.attachControl(canvas, noPreventDefault, useCtrlForPanning);
```

If required you can also totally deactivate panning by setting :

```javascript
   scene.activeCamera.panningSensibility = 0;
```

## FollowCamera

The Follow Camera does what it says on the tin. Give it a mesh as a target and from whatever position it is currently at it will move to a goal position from which to view 
the target. When the target moves so will the Follow Camera.

The initial position of the Follow Camera is set when it is created then the goal position is set with three parameters:

1. the distance from the target - camera.radius;

2. the height above the target - camera.heightOffset;

3. the angle in degrees around the target in the x y plane.

The speed with which the camera moves to a goal position is set through its acceleration (camera.cameraAcceleration) up to a maximum speed (camera.maxCameraSpeed).

### Constructing a Follow Camera

```javascript

// Parameters: name, position, scene	
var camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 10, -10), scene);
	
//The goal distance of camera from target
camera.radius = 30;
	
// The goal height of camera above local origin (centre) of target
camera.heightOffset = 10;
	
// The goal rotation of camera around local origin (centre) of target in x y plane
camera.rotationOffset = 0;
	
//Acceleration of camera in moving from current to goal position
camera.cameraAcceleration = 0.005
	
//The speed at which acceleration is halted 
camera.maxCameraSpeed = 10
    
// This attaches the camera to the canvas
   camera.attachControl(canvas, true);

// NOTE:: SET CAMERA TARGET AFTER THE TARGET'S CREATION AND NOTE CHANGE FROM BABYLONJS V 2.5
//targetMesh created here
camera.target = targetMesh;   // version 2.4 and earlier
camera.lockedTarget = targetMesh; //version 2.5 onwards
```
[A Playground Example of a Follow Camera following a moving target](http://www.babylonjs-playground.com/#12WBC#84)


## AnaglyphCameras

These extend the use of the Universal and Arc Rotate Cameras for use with red and cyan 3D glasses. They use post-processing filtering techniques. 

### Constructing Anaglyph Universal Camera

```javascript

// Parameters : name, position, eyeSpace, scene
var camera = new BABYLON.AnaglyphUniversalCamera("af_cam", new BABYLON.Vector3(0, 1, -15), 0.033, scene);
```

### Constructing Anaglyph ArcRotateCamera 

```javascript

// Parameters : name, alpha, beta, radius, target, eyeSpace, scene
var camera = new BABYLON.AnaglyphArcRotateCamera("aar_cam", -Math.PI/2, Math.PI/4, 20, new BABYLON.Vector3.Zero(), 0.033, scene);
```

The _eyeSpace_ parameter sets the amount of shift between the left eye view and the right eye view. Once you are wearing your 3D glasses, you might want to experiment with this float value.

You can learn all about anaglyphs by visiting a [Wikipedia page that explains it thoroughly](http://en.wikipedia.org/wiki/Anaglyph_3D). 

## Device Orientation Camera

This is a camera specifically designed to react to device orientation events such as a modern mobile device being tilted forward or back and left or right. 

### Constructing a Device Orientation Camera

```javascript

// Parameters : name, position, scene	
   var camera = new BABYLON.DeviceOrientationCamera("DevOr_camera", new BABYLON.Vector3(0, 0, 0), scene);

    // Targets the camera to a particular positiion
    camera.setTarget(new BABYLON.Vector3(0, 0, -10));
	
	// Sets the sensitivity of the camera to movement and rotation
	camera.angularSensibility = 10;
	camera.moveSensibility = 10;

    // Attach the camera to the canvas
    camera.attachControl(canvas, true);

```
[A Playground Example of a Device Orientation Camera](http://www.babylonjs-playground.com/#12WBC#81) for those with a correct device.

## Virtual Joysticks Camera

This is specifically designed to react to Virtual Joystick events. 
Virtual Joysticks are on-screen 2D graphics that are used to control the camera or other scene items. 
 
### Requires

The third-party file [hand.js](http://handjs.codeplex.com/releases/view/119684).

### Read

[Virtual Joysticks David Rousset Blog](http://blogs.msdn.com/b/davrous/archive/2013/02/22/creating-an-universal-virtual-touch-joystick-working-for-all-touch-models-thanks-to-hand-js.aspx) on David's blog.
 
### Video

[Virtual Joysticks Camera demo in video](https://www.youtube.com/watch?v=53Piiy71lB0)

![Screenshot of the Virtual Joysticks Camera in action on Espilit](http://david.blob.core.windows.net/babylonjs/VJCBabylon.jpg)
 
### Complete sample

Here is a complete sample that loads the Espilit demo and switches the default camera to a virtual joysticks camera:

```javascript
document.addEventListener("DOMContentLoaded", startGame, false);
function startGame() {
  if (BABYLON.Engine.isSupported()) {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);

    BABYLON.SceneLoader.Load("Espilit/", "Espilit.babylon", engine, function (newScene) {

      var VJC = new BABYLON.VirtualJoysticksCamera("VJC", newScene.activeCamera.position, newScene);
      VJC.rotation = newScene.activeCamera.rotation;
      VJC.checkCollisions = newScene.activeCamera.checkCollisions;
      VJC.applyGravity = newScene.activeCamera.applyGravity;

      // Wait for textures and shaders to be ready
      newScene.executeWhenReady(function () {
        newScene.activeCamera = VJC;
        // Attach camera to canvas inputs
        newScene.activeCamera.attachControl(canvas);
        // Once the scene is loaded, just register a render loop to render it
        engine.runRenderLoop(function () {
          newScene.render();
        }),
      }),
    }, function (progress) {
    // To do: give progress feedback to user
    }),
  }
}
```

If you switch back to another camera, don’t forget to call the dispose() function first. Indeed, the VirtualJoysticks are creating a 2D canvas on top of the 3D WebGL canvas to draw the joysticks with cyan and yellow circles. If you forget to call the dispose() function, the 2D canvas will remain, and will continue to use touch events input.


## VR Device Orientation Cameras

A new range of cameras.  
[A Playground Example of a VR Device Orientation Camera](http://www.babylonjs-playground.com/#12WBC#80) for those with a correct device.

### Constructing the VR Device Orientation Free Camera

```javascript
//Parameters: name, position, scene, compensateDistortion, vrCameraMetrics
var camera = new BABYLON.VRDeviceOrientationFreeCamera ("Camera", new BABYLON.Vector3 (-6.7, 1.2, -1.3), scene);
```

### Constructing the VR Device Orientation Arc Rotate Camera

```javascript
//Parameters: name, alpha, beta, radius, target, scene, compensateDistortion, vrCameraMetrics
var camera = new BABYLON.VRDeviceOrientationArcRotateCamera ("Camera", Math.PI/2, Math.PI/4, 25, new BABYLON.Vector3 (0, 0, 0), scene);
```

### Constructing the VR Device Orientation Gamepad Camera

```javascript
//Parameters: name, position, scene, compensateDistortion, vrCameraMetrics
var camera = new BABYLON.VRDeviceOrientationGamepadCamera("Camera", new BABYLON.Vector3 (-10, 5, 14));
```

## WebVR Free Camera

The new virtual reality camera

```javascript

// Parameters : name, position, scene, webVROptions
    var camera = new BABYLON.WebVRFreeCamera("WVR", new BABYLON.Vector3(0, 1, -15), scene);
```

This camera deseves a page to itself so here it is [Using the WebVR Camera](/how-to/camera/web-vr-camera);

## Customizing inputs

The cameras rely upon user inputs to move the camera. If you are happy with the camera presets Babylon.js is giving you, just stick with it.

If you want to change user inputs based upon user preferences, customize one of the existing presets, or use your own input mechanisms.  Those cameras have an input manager that is designed for those advanced scenarios. Read [customizing camera inputs](/how-to/camera/customizing-camera-inputs) to learn more about tweaking inputs on your cameras.

## Next step
You have now learned how to use many cameras, and learned some advanced input options available on our two most-used cameras. You can control how you see your scene, you can choose your input and viewing devices, and you now know how to move cameras around. To give your scene a more realistic effect, we are now going to learn [**how to manage lights**](/babylon-101/babylon-101/lights). See you soon.

# Further Reading

[Cameras Overview](/features/component/cameras)