# CastorGUI V1.2

Library to display a GUI game as a layer on top of the canvas HTML/CSS. This library has been created extention for [BabylonJS](http://www.babylonjs.com/).

* [Demo online of this extension](http://www.castorengine.com/babylon/demoCastorGUI/)
* [Tutorial English](https://github.com/dad72/CastorGUI/wiki)
* [Tutorial French](http://www.castorengine.com/forum/index.php?/tutorials/article/28-cr%C3%A9er-une-interface-graphique-avec-castorgui/)
* [GIT](https://github.com/dad72/CastorGUI/)

## Features:

* Create texture
* Create text
* Create window draggable (with title & button close)
* Create dialog (with button close)
* Create panel (simple dialog without button close)
* Create button
* Create slider
* Create progress
* Create spinner
* Create meter
* Create radio button
* Create checkbox
* Create textfield
* Create textarea
* Create label
* Create fieldset
* Create select with options

## Quick overview of use 

We must create a GUIManager that allows to recover the origin of the canvas and provides other basic thing.
A GUIManager can have a CSS that Formatted anything you want to customize your GUI.

```javascript
var canvas = document.getElementById("game");
var css = "button {cursor:pointer;}";
var guisystem = new CASTORGUI.GUIManager(canvas, css);
```
Then we create interfaces items. eg textures and dialog with text:

```javascript
var myFunction = function() { alert("Yes, this work!"); };
var guiTexture = new CASTORGUI.GUITexture("life", "data/image.png", {w:50,h:50,x:10,y:0}, guisystem, myFunction);

var optionsDialog = {w: (guisystem.getCanvasWidth().width - 20), h: 100, x: 8, y: (guisystem.getCanvasWidth().height - 110)};
var dialog = new CASTORGUI.GUIDialog("dialog", optionsDialog, guisystem);
dialog.setVisible(true);

var text = new CASTORGUI.GUIText("textDialog", {size:15, text:"Display text here"}, guisystem, false);
dialog.add(text);
```
That's it. Everything works the same way with the same simplicity.
