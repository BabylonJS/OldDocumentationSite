# Debug Layer features 

# Tools bar

![toolbar](/img/features/debuglayer/toolbar.jpg)

Several tools are available, from left to right : 
* Refresh the current tab - *As the debug layer can be created before some information are available, this tool is here to refresh displayed data according to the last version of the game scene*
* Display mesh names - *Display mesh names on the screen, using BABYLON.GUI*
* Pick a mesh - *A click on a tool and a click on a 3D object display the mesh tab, with the selected mesh opened*
* Popup mode - *Open the debug layer in a popup - Not available on Edge for security reasons*
* Pause mode - *All properties are refreshed automatically every 200ms. This tool pauses and resumes the automatic property refresh.*
* Close debug layer - *Self explainatory*

# Tab bar

![tabbar](/img/features/debuglayer/tabbar.jpg)

Each tab has an index (from 0 to 9, 0 is the Scene tab and 9 is the Camera tab) and correspond to a specific feature.

| Name | Index | Description | Top Panel | Bottom panel | 
| ---- | --- | --- | --- | ---- |
| Scene | 0 | Display some information about the current scene | Toggle render modes | Display scene properties |
| Console | 1 | Display console messages | Hook all console.log messages | Display all logs related to babylon.js (callled with BABYLON.Tools.Log) |
| Stats | 2 | Display statistics data | Display stats | | 
| Textures | 3 | Display all textures | The list of textures available in the scene (images, render target textures, map textures, font textures and dynamic textures) | The texture image. You can right-click - open in a new tab to have perfect dimensions |
| GUI | 4 | Display GUI information. Only displayed if BABYLON.GUI is included in the project | The list of BABYLON.GUI, sorted by their name | The selected BABYLON.GUI primitive properties |
| Mesh | 5 | Display mesh data | The list of mesh, sorted by their names. | The selected mesh properties |
| Shader | 6 |Display vertex and fragment shader | A combo list with all custom shaders | The vertex and fragment shaders |
| Light | 7 | Display light data | The list of light, sorted by their names. | The selected light properties |
| Material | 8 | Display material data | The list of material, sorted by their names. | The selected material properties |
| Camera | 9 | Display camera data | The list of camera, sorted by their names. | The selected camera properties |
| Sound | 10 | Display all sounds | The list of sounds, sorted by their names. | The selected sound properties |

In some tabs, a search bar is available to look for a specific object.

# Specific features

## Manual property update
When a list of properties is displayed for an object (example for a mesh below), the developer can update manually these properties by clicking on it, updating the new value and press 'Enter'.

![mesh details](/img/features/debuglayer/meshdetails.jpg)

## Tree Tools

 ### Mesh
 
![mesh tools](/img/features/debuglayer/meshtools.jpg)

* Make visible/invisible the selected mesh
* Display/remove mesh axis
* Display/remove mesh bounding box
* Display the number of vertices of the mesh

 ### Light
 
![light tools](/img/features/debuglayer/lighttools.jpg)

* Switch on/off the light

### GUI

![GUI tools](/img/features/debuglayer/GUItools.jpg)

* Display all children of the selected primitive
* Display/hide the selected primitive

### Material

![material tools](/img/features/debuglayer/materialtools.jpg)

* Display the selected texture with the mouse cursor - *Works only for images textures*

### Camera

![camera tools](/img/features/debuglayer/cameratools.jpg)

* Make the selected camera the active camera

### Sounds

![sound tools](/img/features/debuglayer/soundtools.jpg)

* Play the selected sound


