# Loading a scene

The editor is able to load BabylonJS scenes but also editor project files (.editorproject).
To load a scene (even with a .editorproject file), just drag'n'drop all the files (scene, textures, sounds, etc.) into the canvas (3D preview panel).

You can also load a scene using the toolbar **Project -> Import Project**, select all the files and click **Open**.

## Available scene formats
* .babylon
* .gltf
* .glb (binary GLTF)
* .obj
* .stl

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3ShDnKXt5o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

# Saving project

The editor will not save the entire scene when you want to save your project. Anyway, the editor will save the delta between the original scene file (.babylon, .gltf, etc.) and the editor file (.editorproject).

The editor project file will contain all the user's metadatas such as custom scripts, custom post-processes, custom materials, sounds, nodes, etc.

To save the project, just click on the main toolbar **Project -> Save Project**.

**Note: It is highly recommanded to use the desktop app as you'll get access to the local file system to save your projects. Anyway, on the online version, the editor will try to save the project on OneDrive.**

## Important
To properly load your scenes after saving, don't forget to add all the external files (sounds, textures, etc.) in the same folder of the scene.

When you edit properties in the editor, be careful as all modified objects will not be saved. In fact, all sounds, materials, lights, cameras and geometries coming from the modeler (3ds Max, Blender) will not be saved by the editor as all these objects can be modified in the modeler's properties directly.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dEZ834dv22Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>