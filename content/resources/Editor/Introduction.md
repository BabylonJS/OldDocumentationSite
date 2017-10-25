# Introduction

![Introduction](/img/extensions/Editor/editor.png)

For a quick and complete introduction with videos, you can read this post : [https://medium.com/babylon-js/welcome-to-the-babylon-js-editor-c08dccdcec07#.e1lm87d4g](https://medium.com/babylon-js/welcome-to-the-babylon-js-editor-c08dccdcec07#.e1lm87d4g)

The Babylon.js Editor is the final stage for artists and developers in scene designs.
It provides several tools not provided (or supported by the exporters) by 3D modelers such as 3ds Max, Blender, etc.

As an example, the Babylon.js Materials Library, which is not supported by 3D modelers, can be managed in the Babylon.js Editor.

In other words, this editor is a Web Application providing several tools to help artists (and developers) to debug, animate,
configure and export Babylon.js scenes. In other words, this editor provides the optional final stage (in addition to the Babylon.js
exporters of 3ds Max, Blender, Unity3D, etc.) to designers before they release their final scenes.

The Babylon.js Editor can be found here: [http://editor.babylonjs.com/](http://editor.babylonjs.com/)

The Github Repository can be found here: [https://github.com/BabylonJS/Editor](https://github.com/BabylonJS/Editor)

# Available features
## From v0.8
* Create and edit particle systems
* Create and edit animations
* Create and edit lens flares systems
* Save projects on OneDrive (Drop Box will come in future versions)
* Deploy project template on OneDrive (Drop Box will come in future versions)
* Cinematic Editor
* Scene graph view
* Create and edit post-process (soon exported in final .babylon scenes)
* Create and edit render targets (soon exported in final .babylon scenes)

## From v0.9
* Create and edit materials (complete Babylon.js Materials Library)
* Import and setup textures to use with materials
* Live preview of render targets (including shadow maps)

## Coming in v1.0 (current)
* Actions Builder support

## Coming in v1.1
* Setup and test physics simulations inlucing new updates of RaananW
* Shader Materials Builder tool

# Now, what is clearly exported?
* Project configuration (FPS, animated at launch)
* Particle systems
* Lens flares
* Post-processes (not yet serialized in .babylon files)
* Animations
* Skies
* Render target textures
* Reflection probes (not yet serialized in .babylon files)
* Materials from Materials Library
* Actions using Actions Builder
* Custom metadatas used by extensions (Post-Process Builder, etc.)
