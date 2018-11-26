---
PG_TITLE: How To Use the Scroll Viewer
---

# The Scroll Viewer

When you want to keep your user interface small and the information to present large you can use the **ScrollViewer** to contain the information.

![ScrollViewer](/img/gui/scroll1.jpg).

It consists of vertical and horizontal scroll bars and a viewing area. Adding a control to the viewing area gives you a window to the information you want to present. With one exception any window you add to the viewing area will retain its original size. The exception is a TextBlock which will adjust to fit the width of the viewing area.

## Creating the Scroll Viewer

A scroll viewer is created using a rectangle container to hold the scroll bars and the viewing window. You create it with

```javascript
var myScrollViewer = new BABYLON.GUI.ScrollViewer();
```
and add it to an advanced texture as usual.

```javascript
var myAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
myAdvancedTexture.addControl(myScollViewer);
```
You can then create your control or container of controls as a window to add to the viewer window using the **add.Window** method.

```javascript
myScrollViewer.addWindow(myWindow);
```

* [Playground Example - Scroll Viewer](https://www.babylonjs-playground.com/#13CF95)

The default setting for width and depth of the scroll viewer is 0.25 of the parent control.

The following table shows the properties of a scroll viewer that are changed from or added to those of a rectangle container.

Property|Type|Default|Comments
--------|----|-------|--------
paddingTop|valueAndUnit|0px|accepts % or px and changes the viewed window padding not that of the scroll viewer
paddingBottom|valueAndUnit|0px|accepts % or px and changes the viewed window padding not that of the scroll viewer
paddingLeft|valueAndUnit|0px|accepts % or px and changes the viewed window padding not that of the scroll viewer
paddingRight|valueAndUnit|0px|accepts % or px and changes the viewed window padding not that of the scroll viewer
barColor|string|grey|Foreground color of the bar and color of the thumb
barBackground|white|0|Background color of the bar
barBorderColor|string|light grey|Color used to render the border of the thumb

* [playground Example - Scroll Viewer of Fixed Size with Grid of Images](https://www.babylonjs-playground.com/#C3RDBS)
* [playground Example - Scroll Viewer of Relative Size with Grid of Images](https://www.babylonjs-playground.com/#C3RDBS#1)

## Adding a Fixed Size TextBlock Window (Special Case)

![Contained TextBlock](/img/gui/scroll3.jpg)

Directly adding a TextBlock window to a scroll viewer will adjust the text to fit the scroll viewer. Should you want a fixed size for your TextBlock then simply add it to a container and add the container to the scroll viewer.

* [Playground Example - Scroll Viewer with Fixed TextBlock](https://www.babylonjs-playground.com/#FX6KVK)

## Adding an Adjustable TextBlock Window (Special Case)

![Adjusting TextBlock](/img/gui/scroll2.jpg)

Quite often you need to present text only with the text fitting the width of the viewing window and scrolling for the height. This is achieved by adding a TextBlock directly to the viewing window. In this case the width of the TextBlock is adjusted to fit the width of the viewing window and the height adjusted to fit the number of lines taken up by the text. Any changes of size to the scroll viewer window will adjust the size of the text. 

* [Playground Example - Scroll Viewer with Adjusting TextBlock](https://www.babylonjs-playground.com/#3EF49E)

**NOTE** The font size for the text should be set from the scroll viewer as in

```javascript
myScollViewer.fontSize = "32px";
```

Direct changes to the fontSize on the TextBlock will break the text adjustment

## Further reading

[How To Use the Selection Panel Helper](/how_to/selector)  
[How To Use Babylon GUI](/how_to/gui)  
[How To Use Babylon GUI3D](/how_to/gui3d)


