# How To Use Babylon 3D GUI

The Babylon.js 3D GUI library is an extension you can use to generate 3D interactive user interface.

The latest version can be found [here](https://github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release/gui)

And the source code is available on the main [Babylon.js GUI3D repo](https://github.com/BabylonJS/Babylon.js/tree/master/gui/src/3D)

## Introduction

Babylon.GUI uses meshes to create an interactive user interface, which is fully integrated in your scene.

## GUI3DManager

To begin with 3D GUI, you need to instantiate a `GUI3DManager` which will be responsible for connecting all the controls together:

```javascript
var manager = new BABYLON.GUI.GUI3DManager(scene);
```

The manager only requires the scene to work on. Once instantiated, the manager will create a utility layer which is a specific child scene that will host all the meshes used to render the controls. This way, your main scene won't get populated by the utility meshes.

You can reach the utility layer with `manager.utilityLayer`.

Once you have a manager, you can start adding controls with `manager.addControl(control)`. All controls will be added to the `manager.rootContainer`.

Please also note that the following functions are available:

- `containsControl()`: Gets a boolean indicating if the given control is in the root child list.
- `removeControl()`: Removes a control from the root child list.

## Containers

A container is used to organize controls in the scene. The base class for all containers is the `Container3D` class. The `manager.rootContainer` is a `Container3D` object.

All containers provide the following functions to handle controls:

- `addControl()`: Adds a control to the children of this container
- `containsControl()`: Gets a boolean indicating if the given control is in the root child list
- `removeControl()`: Removes a control from the root child list

By default, all containers will update their layout everytime you add a new control to it. But you can optimize this behavior if you plan to add multiple controls in a row with `container.blockLayout = true`:

```javascript
panel.blockLayout = true;
for (var index = 0; index < 30; index++) {
  var button = new BABYLON.GUI.Button3D("click me");
  panel.addControl(button);
}
panel.blockLayout = false;
```

The `Container3D` class will do nothing regarding layout of its controls. You need to use one of its children to get a specialized layout mechanism.

All specialized containers must implement the following function to provide layout mechanism:

- `_arrangeChildren()`: This function will be called everytime a new control is added. This is where children class can decide how to organize controls

### StackPanel

The `StackPanel` container can be used to stack items either horizontally or vertically:

```javascript
var panel = new BABYLON.GUI.StackPanel3D();
panel.isVertical = true;
```

The panel will automatically arrange its content every time you add a new control.

You can specify the distance between elements with `panel.margin = 0.02`.

Demo [here](https://www.babylonjs-playground.com/#HJZBRG#0)

### VolumeBasedPanel

VolumeBasedPanel are containers used to dispatch items on the surface of a volume (like sphere or cylinder).

The panels will automatically arrange its content every time you add a new control.

The panels can either be row or column first depending on which property you use:

```javascript
panel.columns = 5; // The panel will automatically compute the number of rows based on number of child controls
```

or

```javascript
panel.rows = 5; // The panel will automatically compute the number of columns based on number of child controls
```

By default a VolumeBasedPanel is set up with panel.columns = 10;

You can specify the distance between elements with `panel.margin = 0.02`.

You can also control how each cell is oriented:

| Value | Type                                                | Description                                                     |
| ----- | --------------------------------------------------- | --------------------------------------------------------------- |
| 0     | BABYLON.Container3D.UNSET_ORIENTATION               | Control rotation will remain unchanged                          |
| 1     | BABYLON.Container3D.FACEORIGIN_ORIENTATION          | Control will rotate to make it look at sphere central axis      |
| 2     | BABYLON.Container3D.FACEORIGINREVERSED_ORIENTATION  | Control will rotate to make it look back at sphere central axis |
| 3     | BABYLON.Container3D.FACEFORWARD_ORIENTATION         | Control will rotate to look at z axis (0, 0, 1)                 |
| 4     | BABYLON.Container3D.FACEFORWARDREVERSED_ORIENTATION | Control will rotate to look at negative z axis (0, 0, -1)       |

#### SpherePanel

The `SpherePanel` container can be used to dispatch items on the surface of a sphere:

```javascript
var panel = new BABYLON.GUI.SpherePanel();
panel.radius = 5;
```

The radius property is used to define the radius of the hosting sphere.

Demo [here](https://www.babylonjs-playground.com/#HB4C01#9)

![SpherePanel](/img/how_to/gui/SpherePanel.jpg)

#### CylinderPanel

The `CylinderPanel` container can be used to dispatch item on the surface of a cylinder:

```javascript
var panel = new BABYLON.GUI.CylinderPanel();
panel.radius = 5;
```

The radius property is used to define the radius of the hosting cylinder.

Demo [here](https://www.babylonjs-playground.com/#HB4C01#8)

![CylinderPanel](/img/how_to/gui/CylinderPanel.jpg)

#### PlanePanel

The `PlanePanel` container can be used to dispatch item on the surface of a plane:

```javascript
var panel = new BABYLON.GUI.PlanePanel();
```

Demo [here](https://www.babylonjs-playground.com/#HB4C01#7)

![PlanePanel](/img/how_to/gui/PlanePanel.jpg)

#### ScatterPanel

The `ScatterPanel` container can be used to dispatch items using a randomized planar mapping:

```javascript
var panel = new BABYLON.GUI.ScatterPanel();
panel.iterations = 100;
```

The iterations property is used to define the number of iteration to use to scatter the controls (100 by default)

![ScatterPanel](/img/how_to/gui/ScatterPanel.jpg)

Demo [here](https://www.babylonjs-playground.com/#HB4C01#6)

## Controls

All controls inherit from the `Control3D` class which provides a set of basic features:

- `position`: Gets or sets the control position in world space
- `scaling`: Gets or sets the control scaling in world space
- `parent`: Gets or sets the parent container
- `isVisible`: Gets or sets a boolean indicating if the control is visible
- `node`: Gets the transform node used by this control
- `mesh`: Gets the mesh used to render this control

You can attach a control to a mesh or tranform node from your scene with:

```javascript
control.linkToTransformNode(anchor);
```

This way the control will always follow the linked node or mesh. Please note that in this case, the `position` and `scaling` properties are considered local to the new parent node or mesh.
When linking a control to a transform node, please make sure that the control was first added to a container or to the root manager.

Some observables are also available to help tracking control state:

- `onPointerEnterObservable`: An event triggered when pointer enters the control
- `onPointerOutObservable`: An event triggered when the pointer move out of the control
- `onPointerDownObservable`: An event triggered when the pointer taps the control
- `onPointerUpObservable`: An event triggered when pointer is up
- `onPointerClickObservable`: An event triggered when a control is clicked on (with a mouse)
- `onPointerMoveObservable`: An event triggered when the pointer move over the control

All controls can also be the target of [behaviors](//doc.babylonjs.com/features/behaviour) so they expose the associated properties and functions:

- `behaviors`: Gets the list of attached behaviors
- `addBehavior()`: Attach a behavior to the control
- `removeBehavior()`: Remove an attached behavior
- `getBehaviorByName()`: Gets an attached behavior by name

All controls can also define a callback when specific event is happening. These callbacks will be called to let the user defines an animation for the control. Here is the list of available callbakcs:

- `pointerEnterAnimation`: Callback used to start pointer enter animation
- `pointerOutAnimation`: Callback used to start pointer out animation
- `pointerDownAnimation`: Callback used to start pointer down animation
- `pointerUpAnimation`: Callback used to start pointer up animation

All these callbacks are empty by default and will be implemented by specialized controls.

### Button3D

`Button3D` is a class used to create 3D buttons.

A button is a control with default animations for enter/out/down and up events.
It is based on a 2D GUI content.

You can specify the content through the `content` property and set it to any regular [2D GUI content](//doc.babylonjs.com/how_to/gui):

```javascript
var button = new BABYLON.GUI.Button3D("reset");

var text = new BABYLON.GUI.TextBlock();
text.text = "reset";
text.color = "white";
text.fontSize = 24;
button.content = text;
```

By default the `Button3D` control uses a 512x512 AdvancedDynamicTexture to render its content.
You can use the following properties to change the texture resolution:

- `contentResolution`: Gets or sets the texture resolution used to render content (512 by default)
- `contentScaleRatio`: Gets or sets the texture scale ratio used to render content (2 by default)

Demo [here](https://www.babylonjs-playground.com/#2YZFA0#0)

### HolographicButton

The `HolographicButton` is a specialized button that mimics the Mixed Reality Toolkit holographic button.

An `HolographicButton` can be defined with two properties:

- `text`: Gets or sets text for the button
- `imageUrl`: Gets or sets the image url for the button

![Babylon.GUI](/img/how_to/gui/MRTK_HolographicButton.jpg)

Demo [here](https://www.babylonjs-playground.com/#2YZFA0#2)

Please note that you can overwrite the default content but you need to do it after the call to addControl:

```javascript
var button = new BABYLON.GUI.HolographicButton("reset");
panel.addControl(button);

// Must be done AFTER addControl in order to overwrite the default content
var text1 = new BABYLON.GUI.TextBlock();
text1.text = "Reset";
text1.color = "Red";
text1.fontSize = 48;
button.content = text1;
```

### MeshButton3D

This class is used to to create an interactable object which will use a mesh coming from the current scene to render.

```javascript
var pushButton = new BABYLON.GUI.MeshButton3D(mesh, "pushButton");
```

Once created, you can use the new MeshButton3D to add animations:

```javascript
pushButton.pointerEnterAnimation = () => {
  mesh.material.albedoColor = hoverColor;
};
pushButton.pointerOutAnimation = () => {
  mesh.material.albedoColor = new BABYLON.Color3(0.5, 0.19, 0);
};
```

See a [complete GUI3D demo](https://www.babylonjs-playground.com/#8Y780Y#20)

### Custom controls

You can create your own custom control by inheriting from the `Control3D` class and implementing the following functions:

- `_createNode()`: Called on controls to create a transform node or a mesh to represent the control
- `_affectMaterial()`: Called on controls to prepare and affect a material if a mesh is used to represent the control

## Further reading

[How To Use Babylon GUI](/how_to/gui)  
[How To Use Babylon GUI Scroll Viewer](/how_to/ScrollViewer)
[How To Use Babylon GUI Xml Loader](/how_to/XmlLoader)
[How To Use the Selection Panel Helper](/how_to/selector)
