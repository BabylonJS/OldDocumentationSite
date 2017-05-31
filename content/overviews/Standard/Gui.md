# Babylon.GUI

The Babylon.js GUI library is an extension you can use to generate interactive user interface.
It is build on top of the DynamicTexture.

The latest version can be found here: https://github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release/gui.

And the source code is available on the main Babylon.js repo: https://github.com/BabylonJS/Babylon.js/tree/master/gui.

You can find a complete demo here: http://www.babylonjs.com/demos/gui/

![Babylon.GUI](http://www.babylonjs.com/screenshots/gui.jpg)

## Introduction
Babylon.GUI uses a DynamicTexture to generate a fully functionnal user interface. It is an alternate option to [Canvas2D](http://doc.babylonjs.com/overviews/canvas2d_home).

The main difference is that Canvas2D is full GPU oriented (text constructrion, animations, etc..) where Babylon.GUI relies on HTML canvas API.

While it could be seen as a less performant aproach, it is also more flexible. Furthermore, HTML canvas is also GPU accelerated on most recent browsers.

## AdvancedDynamicTexture
To begin with Babylon.GUI, you first need an AdvancedDynamicTexture object.

Babylon.GUI has two modes:
* Fullscreen mode: In this mode, Babylon.GUI will cover the entire screen and will rescale to always adapt to your rendering resolution. It will also intercept clicks (including touches). To create an AdvancedDynamicTexture in fullscreen mode, just run this code:

```
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
```

Here is an example of a simple fullscreen mode GUI: http://babylonjs-playground.com/#XCPP9Y#1

* Texture mode: In this mode, BABYLON.GUI will be used as a texture for a given mesh. Pointer down and up events will be intercepted. You will have to define the resolution of your texture. To create an AdvancedDynamicTexture in texture mode, just run this code:

```
var advancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(myPlane, 1024, 1024);
```

Here is an example of a simple texture mode GUI: http://babylonjs-playground.com/#ZI9AK7#1

Once you have an AdvancedDynamicTexture object, you can start adding controls.

## Controls

A control is an abstraction of a piece of UI. There are two kinds of controls: 
* Pure controls: A pure control defines an action or an information useful for the user. It could be a TextBlock or a Button.
* Containers: Containers are used to organize your UI. They can contain other controls or containers. 

All controls share the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
alpha|number|1|Between 0 and 1. 0 means completely transparent. 1 means fully opaque
color|string|Black|Foreground color
fontName|string|Arial|Font name can be inherited. This means that if you set it on a container, it will be transmitted to all children of the container
fontSize|number|18|Can be inherited
zIndex|number|0|the zIndex can be used to reorder controls on the z axis

Controls can be added directly to the AdvancedDynamicTexture or to a container with:

```
container.addControl(control);
```

They can be removed with:

```
container.removeControl(control);
```


### TextBlock

The TextBlock is a simple control used to display text: http://babylonjs-playground.com/#XCPP9Y#2

Here are the properties you can define:

Property|Type|Default|Comments
--------|----|-------|--------
text|string|null|Text to display
textWrapping|boolean|false|Can be set to true to enable text wrapping. 
textHorizontalAlignment|number|BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER|Can be set to left, right or center
textVerticalAlignment|number|BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER|Can be set to top, bottom or center

### Button

A button can be used to interact with your user. 
Please see the events chapter to see how to connect your events with your buttons.

There are three kinds of buttons available out of the box:

* ImageButton: An image button is a button made with an image and a text. You can create one with:

```
var button = BABYLON.GUI.Button.CreateImageButton("but", "Click Me", "textures/grass.png");
```

You can try it here: http://babylonjs-playground.com/#XCPP9Y#3

* SimpleButton: A simple button with text only

```
var button = BABYLON.GUI.Button.CreateSimpleButton("but", "Click Me");
```

You can try it here: http://babylonjs-playground.com/#XCPP9Y#4

* ImageOnlyButton:

```
var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "textures/grass.png");
```

You can try it here: http://www.babylonjs-playground.com/#XCPP9Y#28

#### Visual animations
By default a button will change its opacity on pointerover and will change it scale when clicked.
You can define your own animations with the following callbacks:

* pointerEnterAnimation
* pointerOutAnimation
* pointerDownAnimation
* pointerUpAnimation

#### Custom button
You can also create a complete custom button by manually adding children to the button. Here is how the ImageButton is built:

```
var result = new Button(name);

// Adding text
var textBlock = new BABYLON.GUI.TextBlock(name + "_button", text);
textBlock.textWrapping = true;
textBlock.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
textBlock.marginLeft = "20%";
result.addControl(textBlock);   

// Adding image
var iconImage = new BABYLON.GUI.Image(name + "_icon", imageUrl);
iconImage.width = "20%";
iconImage.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
iconImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
result.addControl(iconImage);            

return result;
```            

### Line

The line will draw a line (!!) between two points.

Here are the properties you can define:

Property|Type|Default|Comments
--------|----|-------|--------
x1|number|0|X coordinate of the first point
y1|number|0|Y coordinate of the first point
x2|number|0|X coordinate of the second point
y2|number|0|Y coordinate of the second point
dash|array of numbers|Empty array|Defines the size of the dashes
lineWidth|number|1|Width in pixel

Here is an example of a line: http://babylonjs-playground.com/#XCPP9Y#6

### Image

Use the image control to display an image in your UI. 
You can control the stretch used by the image with `image.stretch` property. You can set it to one of these values:
* BABYLON.GUI.Image.STRETCH_NONE: Use original size
* BABYLON.GUI.Image.STRETCH_FILL: Scale the image to fill the container (This is the default value)
* BABYLON.GUI.Image.STRETCH_UNIFORM: Scale the image to fill the container but maintain aspect ratio
* BABYLON.GUI.Image.STRETCH_EXTEND: Scale the container to adapt to the image size.

You may want to have the Image control adapt its size to the source image. TO do so just call `image.autoScale = true`.

You can change image source at any time with `image.source="myimage.jpg"`.

Here is an example of an image: http://babylonjs-playground.com/#XCPP9Y#7

## Containers

The containers are controls used to host other controls. Use them to organize your UI.
Containers has one specific property: `container.background`. Use it to define the background color of your container.

### Rectangle
The Rectangle is a rectangular container with the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
thickness|number|1|Thickness of the border
cornerRadius|number|0|Radius of each corner. Used to create rounded rectangles

Here is an example of a rectangle control: http://babylonjs-playground.com/#XCPP9Y#8

### Ellipse
The Ellipse is a ellipsoidal container with the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
thickness|number|1|Thickness of the border

Here is an example of an ellipse control: http://babylonjs-playground.com/#XCPP9Y#10

### StackPanel

The StackPanel is a control which stacks its children based on its orientation (can be horizontal or vertical).
All children must have a defined width or height (depending on the orientation).

The height (or width) of the StackPanel is defined automatically based on children.

Here is an example of a StackPanel: http://babylonjs-playground.com/#XCPP9Y#11

## General properties

### Events
All controls have the following observables:

Observables|Comments
-----------|--------
onPointerMoveObservable|Raised when the cursor moves over the control. Only available on fullscreen mode
onPointerEnterObservable|Raised when the cursor enters the control. Only available on fullscreen mode
onPointerOutObservable|Raised when the cursor leaves the control. Only available on fullscreen mode
onPointerDownObservable|Raised when pointer is down on the control.
onPointerUpObservable|Raised when pointer is up on the control.

You can also define that a control is invisble to events (so you can click through it for instance). To do so, just call `control.isHitTestVisible`.

Here is an example of how to use observables: http://babylonjs-playground.com/#XCPP9Y#12

### Alignments
You can define the alignments used by your control with the following properties:

Property|Default|Comments
--------|-------|--------
horizontalAlignment|BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER|Can be set to left, right or center.
verticalAlignment|BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER|Can be set to top, bottom and center.

Here is an example of how to use alignments: http://babylonjs-playground.com/#XCPP9Y#13

### Position and size
You can set controls' position with the following properties:

Property|Type|Default|Default unit
--------|----|-------|------------
left|valueAndUnit|0|Pixel
top|valueAndUnit|0|Pixel

Size can be set with:

Property|Type|Default|Default unit
--------|----|-------|------------
width|valueAndUnit|100%|Percentage
height|valueAndUnit|100%|Percentage

Margins can be set with:

Property|Type|Default|Default unit
--------|----|-------|------------
marginTop|valueAndUnit|0px|Pixel
marginBottom|valueAndUnit|0px|Pixel
marginLeft|valueAndUnit|0px|Pixel
marginRight|valueAndUnit|0px|Pixel

Please note that margins are inside the control. This means that the usableWidth = width - marginLeft - marginRight. Same for usableHeight = height - marginTop - marginBottom.

All these properties can be defined using pixel or percentage as unit.
To set value as pixel, use this construct: `control.left = "50px"`
To set value as percentage, use this construct: `control.left = "50%"`

You can also not define the unit (In this cade the default unit will be used): `control.width = 50` (which is equivalent to `control.width = "50%"`)

Here is an example of how to use positions and sizes: http://babylonjs-playground.com/#XCPP9Y#14

### Tracking positions
All controls can be moved to track position of a mesh.
To do this, just call `control.linkWithMesh(mesh)`. You can then offset the position with `control.linkOffsetX` and `control.linkOffsetY`.

Here is an example of a trackable label: http://babylonjs-playground.com/#XCPP9Y#16

Please note that controls that want to track position of a mesh must be at root level (at AdvancedDynamicTexture level).

For Line control, you can also attach the second point to a control with `line.connectedControl = control`. In this case the `x2` and `y2` properties are used to offset the second point from the connected control. 

With these 2 options, you can create a complete trackable label: http://babylonjs-playground.com/#XCPP9Y#20

### Rotation and Scaling

Controls can be transformed with the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
rotation|number|0|Value is in radians
scaleX|number|1|
scaleY|number|1|
transformCenterX|number|0.5|Define the center of transformation on X axis. Value is between 0 and 1
transformCenterY|number|0.5|Define the center of transformation on Y axis. Value is between 0 and 1

Here is an example of how to use rotation and scaling: http://babylonjs-playground.com/#XCPP9Y#22

