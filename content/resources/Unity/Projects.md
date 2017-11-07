
## Installation

Download the [Distribution Version](https://github.com/BabylonJS/Exporters/tree/master/Unity%205/EditorToolkit/Redist/Asset%20Store-5.x/BabylonJS) as a unity package and use 'Import Package' to install.

Alternatively, you can download the [Source Version](https://github.com/BabylonJS/Exporters/tree/master/Unity%205/EditorToolkit). You just need to copy/paste the 'Babylon' folder inside the **Assets** folder of your unity game project folder. 

Unity will then detect the plugin, compile it and add a "BabylonJS" menu.

Note: The legacy plugin folder can be found here: https://github.com/BabylonJS/Exporters/tree/master/Unity%205/Deprecated


## Project Setup

### Initial Project Creation
![New Unity Project](/img/exporters/unity/newproject.jpg)

Create a new Unity 3D game project then add the BabylonJS toolkit to your project. You can either copy toolkit source to your root asset folder or you can
import the toolkit .unitypackage redist file.

### Check Plugin Libraries
Verify all dll files in the 'Assets/Babylon/Plugins' folder. Each dll should be enabled for your development platform.

### Set Project Output Folder
On the Scene Exporter panel, press the 'Select Project Folder' button to specify the project output folder. I suggest creating a 'Project' folder in the root folder for
you game, outside the 'Assets' folder. Example: '/Users/Me/Documents/MyUnityGame/Project'

### Save Exporter Settings
On the Scene Exporter panel, press the 'Save Export Settings' button to save the toolkit exporter settings to disk. Most export settings will detect changes and save on each build. 

### Save Unity Game Project
Choose 'File -> Save Project' to save your current native Unity 3D game project information.


## Scene Information

### Create New Scene
Choose 'File -> New Scene' to create a new empty scene. Unity will create a main camera and a directional light by default.

### Save Scene Information
Choose 'File -> Save Scene As' to name and save your current scene to a folder in your project assets. The toolkit will use this scene name for exporting content. 

### Default Scene Controller
Any scene options for your project can be set using any script components you see fit. You can optionally add an empty game object and attach a 'Default Scene Controller' script
component to easily setup built in options for your scene.

### Global Startup Script
If defined, the global startup script is the main entry point for every scene. You can use the global startup script to attach the SceneManager.ExecuteWhenReady handler that will get called first for each and every scene.

### Add Scene Content
Add any supported mesh, camera or lighting content to your scene. You can assign materials, attach script components, setup animations, optimize geometry and utilize any editor tools
to add and manipulate standard unity scene content (Game Objects).


## Build And Preview
To build and preview the current scene, press the 'Play' button or the 'Build And Preview' button on the Scene Exporter panel. Select the 'Export Scene' to simply export the current scene content without a full build and preview. This is very useful for creating 'Import Mesh' only scenes.

