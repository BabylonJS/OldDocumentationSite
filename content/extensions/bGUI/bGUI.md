---
ID_PAGE: 25102
PG_TITLE: bGUI
---
![](https://raw.githubusercontent.com/Temechon/bGUI/master/logo_sd.png) v1.0

**A Babylon.js extension to create a beautiful GUI**

# What?
bGUI is an extension for the 3D engine [Babylon.js](www.babylonjs.com) providing a set of tools and class to display a game GUI directly into your Babylon 3D game, without any HTML/CSS.


# Why? I can use HTML/CSS to do that!
The only solution (for now) to deploy a babylon.js game on mobile platforms (Android/iOS - Windows Phone supports Webgl application natively) 
is to use [Cocoon.js](https://www.ludei.com/cocoonjs/) provided by Ludei, with the technology Canvas+ (Webview+ is not so great in term of performance for 3D scenes).
However, Canvas+ does not support DOM elements, such as div, img, ... The only solution is to create the GUI directly in the HTML canvas.
That's what bGUI do!

This library can also fit to some people who want to control the game GUI in javascript without the need of jQuery or manipulating DOM objects.
 
# How does it work?
bGUI adds automatically to your game an orthographic camera correctly configured (according to the canvas size and the device pixel ratio), 
and gives you several classes to create your game GUI.
A **GUIObject** is the root class of bGUI, and represents a 3D object (sphere, plane, cube, custom object, ...) translated into the GUI world, and removed from your game world.

bGUI gives you 2 specific classes in order to create HUD easily : 

* GUIPanel : extends **GUIObject** => it's a plane composed of an image texture.
* GUIText : extends **GUIPanel** => its image texture is actually a dynamic texture where the specified text is written.

# Is it easy to use?
Of course ! First, you have to create a **GUISystem**, which represents your GUI world.
It takes 3 parameters: the Babylon scene where the GUI will be created, and the width and the height of your GUI (in pixels).

```javascript
var gui = new bGUI.GUISystem(scene, 1200, 780);
```

Now your GUI is created, you can create a new panel like this: 

```javascript
var headTexture = new BABYLON.Texture("assets/head.png", scene);
var head = new bGUI.GUIPanel("head", headTexture, null, gui);
```
A GUIPanel takes 4 parameters : 

* The name of this panel
* The texture
* The texture displayed when the user click/touch on this panel (to create a button for example)
* The gui system where this panel should be displayed

bGUI provides a set of methods to update the position of the panel, 3 actually : 

* **guiposition(BABYLON.Vector3)** : to update the mesh in the GUI world (takes a position in pixels)
* **relativePosition(BABYLON.Vector3)** : to update the mesh relatively to the origin of the GUI system (takes a position in percentages)
* **position(BABYLON.Vector3)** :to update the mesh in the BABYLON world (takes a position in babylon units)

You can also use a direct reference to the BABYLON mesh used for any GUIObject. This way, you can use 
Babylon animations to update your panel for example. 


# Any dependencies?
bGUI depends on [babylon.js (from v2.1-beta)](http://www.babylonjs.com), and [hand.js](https://handjs.codeplex.com/) for touch events.
 
# Is a demo available somewhere?
Yes : [http://temechon.github.io/bGUI/](http://temechon.github.io/bGUI/)
Try to click on the images :)

# Copyright?
[WTFPL](http://www.wtfpl.net/about/)


