---
ID_PAGE: 25104
PG_TITLE: GUIObject
---
##new [GUIObject](http://doc.babylonjs.com/page.php?p=25104)(mesh, guiSystem)

Creates a new GUIObject from a babylon mesh, and add it to the GUI system given in parameter.
The given mesh layer mask is updated to GUISystem.LAYER_MASK.
Each object can be linked to an action, called when the user clicks/touch the object.
The name of the GUIObject is the mesh name.

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [BABYLON.Mesh](http://doc.babylonjs.com/page.php?p=24891) | The Babylon mesh to add in the GUI system
 | guiSystem | [GUISystem](http://doc.babylonjs.com/page.php?p=25103) | The gui system
---

##Members
###mesh : [BABYLON.Mesh](http://doc.babylonjs.com/page.php?p=24891)
The babylon mesh.

###guiPosition : [BABYLON.Vector3](http://doc.babylonjs.com/page.php?p=24977)
The position of the panel in the GUI world (values in pixels)

###guiSystem : [GUISystem](http://doc.babylonjs.com/page.php?p=25103)
The GUI System

###onClick : function([BABYLON.ActionEvent](http://doc.babylonjs.com/page.php?p=24909)) → void
A callback function called when the object is clicked or touched (if hand.js is included). 
This function is not set when a new GUIObject is created.


##Methods
###guiposition([BABYLON.Vector3](http://doc.babylonjs.com/page.php?p=24977)) → void
Set the gui position of this object (values in pixels)

###relativePosition([BABYLON.Vector3](http://doc.babylonjs.com/page.php?p=24977)) → [BABYLON.Vector3](http://doc.babylonjs.com/page.php?p=24977)
If the argument is not present, returns the relative position of this element.<br/>
If the argument is present, set the relative position of this element according to the GUI width/height.
This example will set the position of the object at 50% of canvas width, and 25% of canvas height: 
```
var rp = new BABYLON.Vector3(0.5,0.25,0);
obj.relativePosition(rp);
```
The GUI system world is used for relative position.

###position([BABYLON.Vector3](http://doc.babylonjs.com/page.php?p=24977)) → void
If the argument is not present, returns the position of the mesh.<br/>
If the argument is present, set the position of the mesh. The Babylon unit system is used for this function.

###scaling([BABYLON.Vector3](http://doc.babylonjs.com/page.php?p=24977)) → void
If the argument is not present, returns the scaling of the mesh.<br/>
If the argument is present, set the scaling of the mesh. The Babylon unit system is used for this function.

###dispose() → void
Dispose this GUI object
###setVisible(boolean) → void
Set this GUI element to visible or invisible

