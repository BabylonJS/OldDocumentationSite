# Debug Layer features 

# Tools bar

![toolbar](/img/overviews/debuglayer/toolbar.jpg)

Several tools are available, from left to right : 
* Refresh the current tab - *As the debug layer can be created before some information are available, this tool is here to refresh displayed data according to the last version of the game scene*
* Display mesh names - *Display mesh names on the screen, using Canvas2D*
* Pick a mesh - *A click on a tool and a click on a 3D object display the mesh tab, with the selected mesh opened*
* Popup mode - *Open the debug layer in a popup - Not available on Edge for security reasons*
* Pause mode - *All properties are refreshed automatically every 200ms. This tool pauses and resumes the automatic property refresh.*
* Close debug layer - *Self explainatory*

# Tab bar

![tabbar](/img/overviews/debuglayer/tabbar.jpg)

Each tab has an index (from 0 to 9, 0 is the Scene tab and 9 is the Camera tab) and correspond to a specific feature.

| Name | Index | Description | Top Panel | Bottom panel | 
| ---- | --- | --- | --- | ---- |
| Scene | 0 | Display some information about the current scene | Toggle render modes | Display scene properties |
| Console | 1 | Display console messages | Hook all console.log messages | Display all logs related to babylon.js (callled with BABYLON.Tools.Log) |
| Stats | 2 | Display statistics data | Display stats | | 
| Textures | 3 | Display all textures | The list of textures available in the scene (images, render target textures, map textures, font textures and dynamic textures) | The texture image. You can right-click - open in a new tab to have perfect dimensions |
| Mesh | 4 | Display mesh data | The list of mesh, sorted by their names. | The selected mesh properties |
| Shader | 5 |Display vertex and fragment shader | A combo list with all custom shaders | The vertex and fragment shaders |
| Light | 6 | Display light data | The list of light, sorted by their names. | The selected light properties |
| Canvas2D | 7 | Display canvas2D information. Only displayed if canvas2D is included in the project | The list of Canvas2D, sorted by their name | The selected canvas2D primitive properties |
| Material | 8 | Display material data | The list of material, sorted by their names. | The selected material properties |
| Camera | 9 | Display camera data | The list of camera, sorted by their names. | The selected camera properties |
| Sound | 10 | Display all sounds | The list of sounds, sorted by their names. | The selected sound properties |

In some tabs, a search bar is available to look for a specific object.

# Specific features

## Manual property update
When a list of properties is displayed for an object (example for a mesh below), the developer can update manually these properties by clicking on it, updating the new value and press 'Enter'.

![mesh details](/img/overviews/debuglayer/meshdetails.jpg)

## Tree Tools

 ### Mesh
 
![mesh tools](/img/overviews/debuglayer/meshtools.jpg)

* Make visible/invisible the selected mesh
* Display/remove mesh axis
* Display/remove mesh bounding box
* Display the number of vertices of the mesh

 ### Light
 
![light tools](/img/overviews/debuglayer/lighttools.jpg)

* Switch on/off the light

### Canvas2D

![canvas2D tools](/img/overviews/debuglayer/canvas2Dtools.jpg)

* Display all children of the selected primitive
* Display/hide the selected primitive
* Display/hide the canvas 2D debug tool

### Material

![material tools](/img/overviews/debuglayer/materialtools.jpg)

* Display the selected texture with the mouse cursor - *Works only for images textures*

### Camera

![camera tools](/img/overviews/debuglayer/cameratools.jpg)

* Make the selected camera the active camera

### Sounds

![sound tools](/img/overviews/debuglayer/soundtools.jpg)

* Play the selected sound


