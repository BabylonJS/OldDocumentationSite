---
PG_TITLE: Cameras
---

# Cameras

![cameras-properties-panel](img/exporters/blender/cameras/cameras-properties-panel.png)

[BJS-doc](http://doc.babylonjs.com/classes/2.5/camera)

## Lens

![lens](http://doc.babylonjs.com/img/exporters/blender/cameras/lens.png)

* Field of View: fov 
* Clipping: minZ & maxZ 

## Exporter panel

![exporter-cameras-options](http://doc.babylonjs.com/img/exporters/blender/cameras/exporter-cameras-options.png)

-   Camera Type: choose between:
    -   Arc Rotate
    -   Device Orientation
    -   Follow
    -   Gamepad
    -   Touch
    -   Universal
    -   Virtual Joysticks
    -   VR Dev Orientation Free
    -   Web VR Free

## Specials

### Arc Rotate Cameras

When choosing Arc Rotate type, you have to add a target to your camera. 

To do that:

* first select your camera, then its target (object or empty for example),
* press `Ctrl` `T` > `Track To Constraint`.