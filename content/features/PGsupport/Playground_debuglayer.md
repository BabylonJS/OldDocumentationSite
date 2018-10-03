---
PG_TITLE: Playground Inspector
---

# Playground Inspector

## What Is It?

Before babylon.js version 3.0, the debug layer was a very simple HTML interface helping the developer to retrieve some basic data about his project : mesh list, mesh names, logs, stats...

From version 3.0, this debug layer has been replaced by an complete inspector, that can be used to browser a lot of data:
* Scene attributes
* Statistics about performances
* Mesh list and attributes
* Material list
* ... and much more

![debug layer overview](/img/features/debuglayer/debuglayer.jpg)

Features are available from either the Tool Bar or the Tab Bar at the top of the Inspector

## Tool bar

![toolbar](/img/features/debuglayer/toolbar.jpg)

Several tools are available, from left to right : 
* Refresh the current tab - *As the Inspector can be created before some information are available, this tool is here to refresh displayed data according to the last version of the game scene*
* Display mesh names - *Display mesh names on the screen, using BABYLON.GUI*
* Pick a mesh - *A click on a tool and a click on a 3D object display the mesh tab, with the selected mesh opened*
* Popup mode - *Open the Inspector in a popup - Not available on Edge for security reasons*
* Pause mode - *All properties are refreshed automatically every 200ms. This tool pauses and resumes the automatic property refresh.*
* Close Inspector - *Self explainatory*

If the Inspector window is widened then some tab bar menu items are shown. Alternatively by using the scroll bar the tab bar icon >> will appear, from which you can obtain the full tab bar menu. 

![tab bar icon](/img/features/debuglayer/toolbar2.jpg)

## Tab Bar Overview

![tabbar](/img/features/debuglayer/tabbar.jpg)


| Name | Description | Top Panel | Bottom panel | 
| ---- | --- | --- | ---- |
| Tools | Display General Tools| Utilities such as generate videos, generate gif, do a screen capture, etc.. |   |
| Audio | Display all sounds | The list of sounds, sorted by their names. | The selected sound properties |
| Camera | Display camera data | The list of camera, sorted by their names. | The selected camera properties |
| Physics |Display physics data|List of physics objects sorted by name|The selected physics object properties|
| GUI | Display GUI information | The list of BABYLON.GUI, sorted by their name | The selected BABYLON.GUI primitive properties |
| GTLF |Display GTLF Utilities | The tools to help you work with glTF: validators, logs, etc..| |
| Material | Display material data | The list of material, sorted by their names. | The selected material properties |
| Light | Display light data | The list of light, sorted by their names. | The selected light properties |
| Mesh | Display mesh data | The list of mesh, sorted by their names. | The selected mesh properties |
| Textures | Display all textures | The list of textures available in the scene (images, render target textures, map textures, font textures and dynamic textures) | The texture image. You can right-click - open in a new tab to have perfect dimensions |
| Stats | Display statistics data | Display stats | |
| Console | Display console messages | Hook all console.log messages | Display all logs related to babylon.js (called with BABYLON.Tools.Log) |
| Scene | Display some information about the current scene | Toggle render modes | Display scene properties |


In some tabs, a search bar is available to look for a specific object.

## Tab Bar Additional Details

### Scene
The displayed list of properties for the scene can updated manually by clicking on it, updating the new value and press 'Enter'.

![scene details](/img/features/debuglayer/scenedetails.jpg)

### Textures

![Texture Tools](/img/features/debuglayer/texturetools.jpg)

* Displays the texture - *Works only for images textures*


### Mesh

![mesh tools](/img/features/debuglayer/meshtools.jpg)

* Toggles display of children if present (>v)
* Make visible/invisible the selected mesh (eye)
* Display/remove mesh axis (spanner)
* Display/remove mesh bounding box (box)
* Display the number of vertices of the mesh (i)
* Display mesh properties (name)

![mesh details](/img/features/debuglayer/meshdetails.jpg)

As for a scene the displayed list of properties for a mesh can be updated manually.

 ### Light
 
![light tools](/img/features/debuglayer/lighttools.jpg)

* Switch on/off the light (eye)
* Display properites (name)

### GUI

![GUI tools](/img/features/debuglayer/GUItools.jpg)

* Toggles the display of children of the selected control (> v)
* Display/hide the selected control (eye)
* Display the properties of the control

### Material

![material tools](/img/features/debuglayer/materialdetails.jpg)

* Displays material properties (name)

![material details](/img/features/debuglayer/materialtools.jpg)

As for a scene the displayed list of properties for a material can be updated manually.

* Hover over magnifying glass to display the selected texture - *Works only for images textures*

### Camera

![camera tools](/img/features/debuglayer/cameratools.jpg)

* Make the selected camera the active camera (camera)
* Displays camera properties (name)

As for a scene the displayed list of properties for a camera can be updated manually.

### Audio

![sound tools](/img/features/debuglayer/soundtools.jpg)

* Play the selected sound (&#9658;) 
* Display Audio Properties (name)

As for a scene the displayed list of properties for a sound can be updated manually.

# Further Reading

[How To Use The Inspector in Projects](/How_To/debug_layer)  
[Textures Directly Available to the Playground](/resources/Playground_Textures.html)  
[Meshes Available to Import into the Playground](/resources/meshes_to_load)  
[Using External Assets in the Playground](/resources/External_PG_assets)

[How To Customize the Inspector](/How_To/customize_debug_layer)  


