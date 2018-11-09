
# Getting Started
The V2 of the Babylon.js Editor is now available and comes with new features from the V1. Such as customizable layout, better design, new tools etc.

The editor V2 is available at http://editor.babylonjs.com/.
The video tutorials are all available on [a Youtube playlist](https://www.youtube.com/watch?v=obEuCI_pPL4&list=PLuZE-0i73Wo-xqfBsgZA531BXeesXQ3Op&index=1)

# Desktop App
The Babylon.js Editor is also available as a desktop application.

**Note: It is highly recommanded to use the desktop app as you'll get access to the local file system to save your projects.**

This will allow you to continue working even in offline mode and save projects directly on your local file system instead of using OneDrive. Using the online version, the editor will have to save projects
on OneDrive as it doesn't have access to the local file system.

Also, when an update is available (new features, bug fixes), you'll get notified and the editor will download the new installer for you.

**Note: in some cases, updating the desktop application can fail, you'll have to re-run the installer to finalize the installation**

Downloading:
* Windows: [http://editor.babylonjs.com/BabylonJS Editor.exe](http://editor.babylonjs.com/BabylonJS Editor.exe)
* Mac OS X: [http://editor.babylonjs.com/BabylonJS Editor.dmg](http://editor.babylonjs.com/BabylonJS Editor.dmg)

# Project example

As an exemple, the following demo has been done 100% in the editor. It includes writing custom scripts, custom post-processes etc.

<iframe width="560" height="315" src="https://www.youtube.com/embed/obEuCI_pPL4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

# Available features
* Create and edit particle systems
* Create and edit animations
* Create and edit lens flares systems
* Create and edit physics states on meshes
* Create and edit materials (including materials library)
* Add and edit sounds
* Add and edit textures (including render target textures & procedural textures)
* Save projects on OneDrive / local with Electron
* Deploy project template on OneDrive / local with Electron
* Scene graph view
* Create and edit custom post-process
* Create and edit custom materials
* Attach custom scripts (JavaScript and TypeScript) to your objects
* Test your scenes with debug support

# Starting with the editor
Once you run the editor, you'll see several panels:
* Preview: the scene preview in live
* Assets: this will contain assets in future such as custom scripts etc. that you'll be able to modify and drag'n'drop
* Graph: the current scene's graph showing the nodes configuration
* Inspector: contains all the tools available for the currently selected object in the scene. The inspector is used to modify the properties of the selected object
* Stats: shows the rendering and scene statistics for information according to the current scene preview

To use the tools and start a new project, it is highly recommanded to read the documentation of each tool available at https://www.babylonjs.com/resources/ :)
