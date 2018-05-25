---
PG_TITLE: How To Use Babylon 3D GUI
---

# How To Use Babylon 3D GUI

The Babylon.js 3D GUI library is an extension you can use to generate 3D interactive user interface.

The latest version can be found here: https://github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release/gui.

And the source code is available on the main Babylon.js repo: https://github.com/BabylonJS/Babylon.js/tree/master/gui.

You can find a complete demo here: http://www.babylonjs.com/demos/gui3D/

![Babylon 3D GUI](http://www.babylonjs.com/screenshots/gui3d.jpg)

## Introduction
Babylon.GUI uses a meshes to create an interactive user interface which is fully integrated in your scene.

## GUI3DManager
To begin with 3D GUI, you need to instantiate a `GUI3DManager` which will be responsible for connecting all controls together:

```
var manager = new BABYLON.GUI.GUI3DManager(scene);
```

The manager only requires the scene to work on. Once instantiated, the manager will create an utility layer which is a specific child scene which will host all meshes used to render the controls. This way, your main scene won't get poluated by the utility meshes.

You can reach the utility layer with `manager.utilityLayer`.

Once you have a manager, you can start adding controls with `manager.addControl(control)`. All controls will be added to the `manager.rootContainer` container.

Please also note that the following functions are available:
- `containsControl()`: Gets a boolean indicating if the given control is in the root child list
- `removeControl()`: Removes a control from the root child list

## Containers

A container is used to organize controls in the scene. The base class for all containers is the `Container3D` class. The `manager.rootContainer` is a `Container3D` object.

All containers provide the following functions to handle controls:
- `addControl()`: Adds a control to the children of this control
- `containsControl()`: Gets a boolean indicating if the given control is in the root child list
- `removeControl()`: Removes a control from the root child list

The `Container3D` class will do nothing regarding layout of its controls. You need to use one of its children to get a specialized layout mechanism.

All specialized containers must implement the following function to provide layout mechanism:
- `_arrangeChildren()`: This function will be called everytime a new control is added. This is where children class can decide how to organize controls

### StackPanel
 The `StackPanel` container can be used to stack items either horizontally or vertically:

 ```
 var panel = new BABYLON.GUI.StackPanel3D();
 panel.isVertical = true;
 ```

The panel will automatically arrange its content every time you add a new control.

You can specify the distance between elements with `panel.margin = 0.02`.

Demo [here](https://www.babylonjs-playground.com/#HJZBRG)

## Controls
All controls inherit from the `Control3D` class which provides a set of basic features:

- `position`: Gets or sets the control position in world space
- `scaling`: Gets or sets the control scaling  in world space 
- `parent`: Gets or sets the parent container
- `isVisible`: Gets or sets a boolean indicating if the control is visible
- `node`: Gets the transform node used by this control
- `mesh`: Gets the mesh used to render this control

You can attach a control to a mesh or tranform node from your scene with:
```
control.linkToTransformNode(anchor);
```
This way the control will always follow the linked node or mesh. Please note that in this case, the `position` and `scaling` properties are considered local to the new parent node or mesh.

Some observables are also available to help tracking control state:
- `onPointerEnterObservable`: An event triggered when pointer enters the control
- `onPointerOutObservable`: An event triggered when the pointer move out of the control
- `onPointerDownObservable`: An event triggered when the pointer taps the control
- `onPointerUpObservable`: An event triggered when pointer is up
- `onPointerClickObservable`: An event triggered when a control is clicked on (with a mouse)
- `onPointerMoveObservable`: An event triggered when the pointer move over the control

All controls can also be the target of [behaviors ](http://doc.babylonjs.com/features/behaviour) so they expose the associated properties and functions:
- `behaviors`: Gets the list of attached behaviors
- `addBehavior()`: Attach a behavior to the control
- `removeBehavior()`: Remove an attached behavior
- `getBehaviorByName()`: Gets an attached behavior by name

### Button3D

### HolographicButton

### Custom controls






