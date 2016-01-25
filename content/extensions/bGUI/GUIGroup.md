---
ID_PAGE: 25106
PG_TITLE: GUIGroup
---
new [GUIGroup](http://doc.babylonjs.com/page.php?p=25106)(name, guiSystem)

Represents a group of GUIObject. Can be used to easily retrieve GUIObjects grouped by functionality.

##Parameters
 | Name | Type | Description
 | ---  | ---  | ---
 | name | string | The name of the group
 | guiSystem | GUISystem | The GUI system

##Members
guiSystem : [GUISystem](http://doc.babylonjs.com/page.php?p=25103)
The GUI system
###name : string
The group name
###elements : Array<[GUIObject](http://doc.babylonjs.com/page.php?p=25104)>
All GUIObjects of this group

##Methods
###add([GUIObject](http://doc.babylonjs.com/page.php?p=25104)) → void
Add a GUIObject to this group

###setVisible(boolean) → void
Set all elements of this group as visible (or not)