---
PG_TITLE: How To Use Babylon.GUI
---

# How To Use Babylon.GUI

The Babylon.js GUI library is an extension you can use to generate interactive user interface.
It is build on top of the DynamicTexture.

The latest version can be found here: https://github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release/gui.

And the source code is available on the main Babylon.js repo: https://github.com/BabylonJS/Babylon.js/tree/master/gui.

You can find a complete demo here: http://www.babylonjs.com/demos/gui/

![Babylon.GUI](http://www.babylonjs.com/screenshots/gui.jpg)

## Introduction
Babylon.GUI uses a DynamicTexture to generate a fully functional user interface which is flexible and GPU accelerated.

## AdvancedDynamicTexture
To begin with Babylon.GUI, you first need an AdvancedDynamicTexture object.

Babylon.GUI has two modes:
* Fullscreen mode: In this mode, Babylon.GUI will cover the entire screen and will rescale to always adapt to your rendering resolution. It will also intercept clicks (including touches). To create an AdvancedDynamicTexture in fullscreen mode, just run this code:

```
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
```

Here is an example of a simple fullscreen mode GUI:  https://www.babylonjs-playground.com/#XCPP9Y#1

By default the ratio between rendering resolution and texture size is 1. But you can force it to different values with `advancedTexture.renderScale`. This could be useful if you want crisper texts for instance.

Foreground & background:
The fullscreen mode can be rendered in either the foreground or the background of a scene.
It can be set like this:
```
// true == foreground (default)
// false == background
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI", foreground? : Boolean );
// it can also be changed on the go:
    advancedTexture.isForeground = false;
```

**Please note that only one fullscreen mode GUI is allowed per scene**

* Texture mode: In this mode, BABYLON.GUI will be used as a texture for a given mesh. You will have to define the resolution of your texture. To create an AdvancedDynamicTexture in texture mode, just run this code:

```
var advancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(myPlane, 1024, 1024);
```

Here is an example of a simple texture mode GUI:  https://www.babylonjs-playground.com/#ZI9AK7#1

Please note that handling pointer move events could be costly on complex meshes, so you can turn off supporting pointer move events with a fourth parameter:

```
var advancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(myPlane, 1024, 1024, false);
```

Once you have an AdvancedDynamicTexture object, you can start adding controls.

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

Please note that `onPointerMoveObservable`, `onPointerDownObservable` and `onPointerUpObservable` will receive a Vector2 parameter containing the pointer coordinates. If you want to get the pointer coordinates in local control space, you have to call `control.getLocalCoordinates(coordinates)`.

Here is an example of how to use observables:  https://www.babylonjs-playground.com/#XCPP9Y#121

### Alignments
You can define the alignments used by your control with the following properties:

Property|Default|Comments
--------|-------|--------
horizontalAlignment|BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER|Can be set to left, right or center.
verticalAlignment|BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER|Can be set to top, bottom and center.

Here is an example of how to use alignments:  https://www.babylonjs-playground.com/#XCPP9Y#13

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

Paddings can be set with:

Property|Type|Default|Default unit
--------|----|-------|------------
paddingTop|valueAndUnit|0px|Pixel
paddingBottom|valueAndUnit|0px|Pixel
paddingLeft|valueAndUnit|0px|Pixel
paddingRight|valueAndUnit|0px|Pixel

Please note that paddings are inside the control. This means that the usableWidth = width - paddingLeft - paddingRight. Same for usableHeight = height - paddingTop - paddingBottom.

All these properties can be defined using pixel or percentage as unit.
To set value as pixel, use this construct: `control.left = "50px"`
To set value as percentage, use this construct: `control.left = "50%"`

You can also not define the unit (In this case the default unit will be used): `control.width = 0.5` (which is equivalent to `control.width = "50%"`)

Here is an example of how to use positions and sizes:  https://www.babylonjs-playground.com/#XCPP9Y#14

### Tracking positions
All controls can be moved to track position of a mesh.
To do this, just call `control.linkWithMesh(mesh)`. You can then offset the position with `control.linkOffsetX` and `control.linkOffsetY`.

Here is an example of a trackable label:  https://www.babylonjs-playground.com/#XCPP9Y#16

Please note that controls that want to track position of a mesh must be at root level (at AdvancedDynamicTexture level).

You can also move a control to a specific coordinates in your scene with `control.moveToVector3(position)`. Please note that the control will not stick with the vector if you change it afterwards.

For Line control, you can also attach the second point to a control with `line.connectedControl = control`. In this case the `x2` and `y2` properties are used to offset the second point from the connected control.

With these 2 options, you can create a complete trackable label:  https://www.babylonjs-playground.com/#XCPP9Y#20

### Adaptive scaling
When in fullscreen UI, you can decide to define your UI with a fixed resolution.
To define this resolution, just set `myAdvancedDynamicTexture.idealWidth = 600` **or** `myAdvancedDynamicTexture.idealHeight = 400`.

If both are set, the idealWidth will be used.

When ideal resolution is set, all values expressed **in pixels** are considered relatively to this resolution and scaled accordingly to match the current resolution.

Even when ideal size is set, the fullscreen UI will be rendered at the same resolution of your canvas, but you can decide (mostly for performance reason) to force the texture to use the ideal size for resolution as well. To do so, just call `myAdvancedDynamicTexture.renderAtIdealSize = true`.

Here is an example of how to use horizontal adaptive scaling:  https://www.babylonjs-playground.com/#XCPP9Y#39

### Rotation and Scaling

Controls can be transformed with the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
rotation|number|0|Value is in radians
scaleX|number|1|
scaleY|number|1|
transformCenterX|number|0.5|Define the center of transformation on X axis. Value is between 0 and 1
transformCenterY|number|0.5|Define the center of transformation on Y axis. Value is between 0 and 1

**Please be aware that transformations are done at rendering level so after all computations.** This means that alignment or positioning will be done first without taking transform in account.

Here is an example of how to use rotation and scaling:  https://www.babylonjs-playground.com/#XCPP9Y#22

## Controls

A control is an abstraction of a piece of UI. There are two kinds of controls:
* Pure controls: A pure control defines an action or an information useful for the user. It could be a TextBlock or a Button.
* Containers: Containers are used to organize your UI. They can contain other controls or containers.

All controls share the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
alpha|number|1|Between 0 and 1. 0 means completely transparent. 1 means fully opaque
color|string|Black|Foreground color
fontFamily|string|Arial|Font family can be inherited. This means that if you set it on a container, it will be transmitted to all children of the container
fontSize|number|18|Can be inherited
zIndex|number|0|the zIndex can be used to reorder controls on the z axis
shadowBlur|number|0|the amount of blur that is applied to the drop shadow
shadowOffsetX|number|0|the offset of the shadow on the x axis
shadowOffsetY|number|0|the offset of the shadow on the y axis
shadowColor|string|"#000"|the color of the shadow

Controls can be added directly to the AdvancedDynamicTexture or to a container with:

```
container.addControl(control);
```

They can be removed with:

```
container.removeControl(control);
```

You can also control the control visibility with `control.isVisible = false`.

### TextBlock

The TextBlock is a simple control used to display text:  https://www.babylonjs-playground.com/#XCPP9Y#2

Here are the properties you can define:

Property|Type|Default|Comments
--------|----|-------|--------
text|string|null|Text to display
textWrapping|boolean|false|Can be set to true to enable text wrapping.
resizeToFit|boolean|false|Can be set to true to enable resize to fit.
textHorizontalAlignment|number|BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER|Can be set to left, right or center
textVerticalAlignment|number|BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER|Can be set to top, bottom or center

The control currently provides 1 observable:

Observables|Comments
-----------|--------
onTextChangedObservable|Raised when the text has changed

#### Resize to Fit

When resizeToFit is set to true, the width and height of the rendered text will be automatically measured and applied to the TextBlock.

This property allows you to change the text and font of a TextBlock without having to worry about manually setting the estimated rendered width and height.

**Notice that textWrapping is ignored when resizeToFit is set to true.** It doesn't make sense logically for both properties to be used at the same time as they contradict each other.


### InputText

The InputText is a control used to let users insert text in a single line: https://www.babylonjs-playground.com/#UWS0TS

Here are the properties you can define:

Property|Type|Default|Comments
--------|----|-------|--------
text|string|null|Text to display
color|string|white|Foreground color
background|string|black|Background color
focusedBackground|string|black|Background color to use when the control is focused
autoStretchWidth|boolean|true|The control will resize horizontally to adapt to text size
maxWidth|valueAndUnit|100%|The maximum width allowed if autoStretchWidth is set to true
margin|valueAndUnit|10px|Margin to use on left and right inside the control itself. This margin is used to determine where the text will be drawn
thickness|number|1|Thickness of the border

The InputText is a focusable control. This means you can click / touch it in order to give it the focus and control over the keyboard events. You can remove the focus from the control by hitting enter or clicking outside of the control.

The control provides several observables to track its state:

Observables|Comments
-----------|--------
onTextChangedObservable|Raised when the text has changed
onFocusObservable|Raised when the control loses the focus
onBlurObservable|Raised when the control gets the focus

Please note that the InputText has pretty limited edition support. Here are the supported keys:
* Delete
* Backspace
* Home
* End
* Enter
* Left / Right (used to move the cursor)

Furthermore, please note that due to JavaScript platform limitation, the InputText cannot invoke the onscreen keyboard. On mobile, the InputText will use the `prompt()` command to get user input. You can define the title of the prompt by setting `control.promptMessage`.

### Button

A button can be used to interact with your user.
Please see the events chapter to see how to connect your events with your buttons.

There are three kinds of buttons available out of the box:

* ImageButton: An image button is a button made with an image and a text. You can create one with:

```
var button = BABYLON.GUI.Button.CreateImageButton("but", "Click Me", "textures/grass.png");
```

You can try it here:  https://www.babylonjs-playground.com/#XCPP9Y#3

* ImageWithCenterTextButton: An image button made with a image background and a centered text overlay.

```
var button = BABYLON.GUI.Button.CreateImageWithCenterTextButton("but", "Click Me", "textures/grass.png");
```

You can try it here:  https://www.babylonjs-playground.com/#PLTRBV

* SimpleButton: A simple button with text only

```
var button = BABYLON.GUI.Button.CreateSimpleButton("but", "Click Me");
```

You can try it here:  https://www.babylonjs-playground.com/#XCPP9Y#4

* ImageOnlyButton:

```
var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "textures/grass.png");
```

You can try it here:  https://www.babylonjs-playground.com/#XCPP9Y#28

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
textBlock.paddingLeft = "20%";
result.addControl(textBlock);   

// Adding image
var iconImage = new BABYLON.GUI.Image(name + "_icon", imageUrl);
iconImage.width = "20%";
iconImage.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
iconImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
result.addControl(iconImage);            

return result;
```  

### Checkbox

The checkbox is used to control a boolean value.
You can specify the value with `checkbox.isChecked`.

Changing the `isChecked` property will raise an observable called `checkbox.onIsCheckedChangedObservable`.

The control is rendered using the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
color|string|white|Foreground color
background|string|black|Background color
checkSizeRatio|number|0.8|Define the ratio used to compute the size of the inner checkbox (0.8 by default, which means the inner check size is equal to 80% of the control itself)

Here is an example of a checkbox: https://www.babylonjs-playground.com/#U9AC0N#2

### RadioButton

The radio button is used to define a value among a list by using a group of radio buttons where only one can be true.
You can specify the selected value with `radiobutton.isChecked`.

Changing the `isChecked` property will raise an observable called `checkbox.onIsCheckedChangedObservable`. Furthermore, if you select a radio button, all other radio buttons within the same group will turn to false.

The control is rendered using the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
color|string|white|Foreground color
background|string|black|Background color
checkSizeRatio|number|0.8|Define the ratio used to compute the size of the inner checkbox (0.8 by default, which means the inner check size is equal to 80% of the control itself)
group|string|empty string|Use the group property to gather radio buttons working on the same value set

Here is an example of a radiobutton: https://www.babylonjs-playground.com/#U9AC0N#13

### Slider

The slider is used to control a value within a range.
You can specify the range with `slider.minimum` and `slider.maximum`.

The value itself is specified with `slider.value` and will raise an observable everytime it is changed (`slider.onValueChangedObservable`).

The control is rendered using the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
borderColor|string|white|Color used to render the border of the thumb
color|string|white|Foreground color
background|string|black|Background color
barOffset|valueAndUnit|5px|Offset used vertically to draw the background bar
thumbWidth|valueAndUnit|30px|Width of the thumb
isThumbCircle|boolean|false|Indicates if the thumb should be a circle (square if false)

Here is an example of a slider: https://www.babylonjs-playground.com/#U9AC0N#1

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

Here is an example of a line:  https://www.babylonjs-playground.com/#XCPP9Y#6

### Image

Use the image control to display an image in your UI.
You can control the stretch used by the image with `image.stretch` property. You can set it to one of these values:
* BABYLON.GUI.Image.STRETCH_NONE: Use original size
* BABYLON.GUI.Image.STRETCH_FILL: Scale the image to fill the container (This is the default value)
* BABYLON.GUI.Image.STRETCH_UNIFORM: Scale the image to fill the container but maintain aspect ratio
* BABYLON.GUI.Image.STRETCH_EXTEND: Scale the container to adapt to the image size.

You may want to have the Image control adapt its size to the source image. To do so just call `image.autoScale = true`.

You can change image source at any time with `image.source="myimage.jpg"`.

You can also define which part of the source image you want to use with the following properties:
* sourceLeft: x coordinate in the source image (in pixel)
* sourceTop: y coordinate in the source image (in pixel)
* sourceWidth: width of the source image you want to use (in pixel)
* sourceHeight: height of the source image you want to use (in pixel)

Here is an example of an image:  https://www.babylonjs-playground.com/#XCPP9Y#7

You can use animation sheet in the image using properties `image.cellId`, `image.cellWidth`, `image.cellHeight`. [example](https://www.babylonjs-playground.com/#K60448)
You can also apply stretch to animation sheet using `image.stretch` property.

[example 1](https://www.babylonjs-playground.com/#K60448#1)
[example 2](https://www.babylonjs-playground.com/#K60448#2)


### VirtualKeyboard

The VirtualKeyboard is a control used to display simple onscreen keyboard. This is mostly useful with WebVR scenarios where the user cannot easily use his keyboard.

#### Keys

You can define the keys provided by the keyboard with the following code:

```
var keyboard = new BABYLON.GUI.VirtualKeyboard();
keyboard.addKeysRow(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0","\u2190"]);
```

Every key will be created using default values specified by the following properties:

Property|Default
--------|----
defaultButtonWidth|40px
defaultButtonHeight|40px
defaultButtonPaddingLeft|2px
defaultButtonPaddingRight|2px
defaultButtonPaddingTop|2px
defaultButtonPaddingBottom|2px
defaultButtonColor|#DDD
defaultButtonBackground|#070707

You can also override each property by providing an array containing properties for keys (or null):

```
addKeysRow(["a", "b"], [null, { width: "200px"}]);
```

You can define each default properties based on the following class:
```
class KeyPropertySet {
      width?: string;
      height?: string;
      paddingLeft?: string;
      paddingRight?: string;
      paddingTop?: string;
      paddingBottom?: string;
      color?: string;
      background?: string;
  }
```

#### Layouts

The VirtualKeyboard provides a static method to create a default layout:

```
var keyboard = BABYLON.GUI.VirtualKeyboard.CreateDefaultLayout();
```

The default layout is equivalent to:

```
addKeysRow(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0","\u2190"]);
addKeysRow(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]);
addKeysRow(["a", "s", "d", "f", "g", "h", "j", "k", "l",";","'","\u21B5"]);
addKeysRow(["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]);
addKeysRow([" "], [{ width: "200px"}]);
```

#### Events
Every time a key is pressed the `onKeyPressObservable` observable is triggered. But you can also rely on `keyboard.connect(inputText)` to automatically connect a VirtualKeyboard to an InputText. In this case, the keyboard will only appear when the InputText will be focused and all key pressed events will be sent to the InputText.

You can find a complete demo here: https://www.babylonjs-playground.com/#S7L7FE

## Containers

The containers are controls used to host other controls. Use them to organize your UI.
Containers has one specific property: `container.background`. Use it to define the background color of your container.

### Rectangle
The Rectangle is a rectangular container with the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
thickness|number|1|Thickness of the border
cornerRadius|number|0|Size in pixel of each corner. Used to create rounded rectangles

Here is an example of a rectangle control:  https://www.babylonjs-playground.com/#XCPP9Y#8

### Ellipse
The Ellipse is a ellipsoidal container with the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
thickness|number|1|Thickness of the border

Here is an example of an ellipse control:  https://www.babylonjs-playground.com/#XCPP9Y#10

### StackPanel

The StackPanel is a control which stacks its children based on its orientation (can be horizontal or vertical).
All children must have a defined width or height (depending on the orientation).

The height (or width) of the StackPanel is defined automatically based on children.

Here is an example of a StackPanel:  https://www.babylonjs-playground.com/#XCPP9Y#11

### ColorPicker

The color picker control allows users to set colors in your scene.

Whenever a user interacts with the color picker an observable is triggered (`colorPicker.onValueChangedObservable`) which returns the current value (Color3) of the color picker.

The control is rendered using the following properties:

Property|Type|Default|Comments
--------|----|-------|--------
size|string or number|"200px"|The size, width, and height property will always be the same value since the color picker can only be a square.


Here is an example of a color picker: https://www.babylonjs-playground.com/#91I2RE#1


## Helpers

To reduce the amount of code required to achieve frequent tasks you can use the following helpers:

* `BABYLON.GUI.Control.AddHeader(control, text, size, options { isHorizontal, controlFirst })`: This function will create a StackPanel (horizontal or vertical based on options) and will add your control plus a TextBlock in it. Options can also be used to specify if the control is inserted first of after the header. Depending on the orientation, size will either specify the widht or the height used for the TextBlock.
