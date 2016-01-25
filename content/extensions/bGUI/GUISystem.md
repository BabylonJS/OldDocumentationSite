---
ID_PAGE: 25103
PG_TITLE: GUISystem
---
##new [GUISystem](http://doc.babylonjs.com/page.php?p=25103)(scene, guiWidth, guiHeight)

Creates a new GUISystem and a new orthographic camera, which size is computed according to the canvas size (canvas.width, canvas.height) and the window device pixel ratio.
(The active camera is not updated.)

The new orthographic camera is the camera used to display all GUI elements. In order to set the GUI elements invisible to the game camera, the babylon layer mask system
is used. All GUI elements have their layerMask set to bGUI.GUISystem.LAYER_MASK.

The origin of the GUISystem is at the top/left of the canvas.


<img src="http://www.codeease.com/wp-content/uploads/2011/01/wpfXY0.jpg" width="200px">

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [BABYLON.Scene](http://doc.babylonjs.com/page.php?p=24894) | The BABYLON game scene
 | width | number | The gui desired width
 | height | number | The gui desired height
---

##Members
###dpr : number
The screen device pixel ratio. Used to compute the correct camera parameters

###guiWidth : number
The **real** GUI width used for the GUI system.

###guiHeight : number
The **real** GUI height used for the GUI system.

###zoom : number
The zoom level computed for the orthographic camera.

###objects : Array<[GUIObject]()>
Contains all GUIObjects created on the GUI

###groups : Array<[GUIGroup]()>
Contains all GUIGroups added on this GUI

###static LAYER_MASK : number = 8
The layer mask used for all GUI objects

##Methods
###add([BABYLON.Mesh](http://doc.babylonjs.com/page.php?p=24891)) → [GUIObject]()
Add a Babylon mesh to the GUI, and returns a new GUIObject. The given mesh layerMask is updated to GUISystem.LAYER_MASK.

###getGroupByName(string) → [GUIGroup]()
Returns the GUIGroup corresponding to the given name, or null if nothing is found.

###getObjectByName(string) → [GUIObject]()
Returns the GUIObject corresponding to the given name, or null if nothing is found.

###getScene() → [BABYLON.Scene](http://doc.babylonjs.com/page.php?p=24894)
Returns the game scene

###dispose() → void
Dispose the GUI, and delete each GUI object. The orthographic camera is also disposed.

