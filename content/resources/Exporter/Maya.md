# How To Install the Maya plug-in 

The plug-in is designed for Maya 2018. This guide is about the Windows version (a MacOS version is coming soon). To download the plug-in, go to the Github project (https://github.com/BabylonJS/Exporters/tree/master/Maya).  

![github](/img/exporters/Maya/1_github.jpg)

In this folder, you can find the source code of the exporter if you want to update it, and a zip file _Maya2Babylon-XX.zip_ (where XX is the exporter version, currently v1.0.7). Click on the zip file, and click on the _Download_ button. 

![github download](/img/exporters/Maya/2_github_dl.jpg)

By default, Windows blocks all .dll files coming from the web, so we have to unblock them first. Select the zip file, and with a right click select _Properties_, select _Unblock_, and then _OK_.

![dll unblocking](/img/exporters/Maya/3_dll_unlocking.jpg)

Then, extract the content of the zip file on your computer. Finally, move all .dll files into a directory defined in Maya plug-in path (for example `C:/Program Files/Autodesk/Maya2018/bin/plug-ins`). More information on how to install a plug-in in Maya [here](https://knowledge.autodesk.com/support/maya/learn-explore/caas/CloudHelp/cloudhelp/2016/ENU/Maya/files/GUID-FA51BD26-86F3-4F41-9486-2C3CF52B9E17-htm.html). In Maya plug-in Manager you should find the Maya2Babylon.nll.dll.

![dll unblocking](/img/exporters/Maya/4_maya_plug_in_manager.jpg)

Check _Loaded_ and _Auto load_, and a new tab should appear: 

![plug-in visible](/img/exporters/Maya/5_plugin_visible.jpg)

Congratulations! You did it!

# Features  #

## Exported features

* _Meshes_
    * Visibility
    * Position / rotation / scaling
    * Geometry (position, normal, tangent, texture coordinates (2 channels))
    * Skin
    * Instances
    * Morph targets (blend shapes)
    * Animations: Position, scaling, rotation, bones, morph weights

* _Materials_
    * Standard materials (Lambert, Phong, PhongE and Blinn)
        * Color
        * Transparency
        * Ambient color
        * Bump mapping
        * Specular color and power
        * Reflected color
    * PBR materials (Stingray PBS, AiStandardSurface)
        * Base color & opacity
        * Normal
        * Metallic
        * Roughness
        * Emissive
    * Multi-materials

* _Textures_
    * UV offset / scaling / angle
    * Level
    * Coordinates mode (spherical, planar, explicit)
    * Wrapping (clamp, mirror, wrap)

* _Cameras_
    * Fov
    * MinZ
    * MaxZ
    * Position
    * Target / Rotation
    * Animations: Position, Target / Rotation

* _Lights_
    * Point / spot / directional / ambient
    * Inclusion / exclusion lists
    * Position / direction
    * Intensity
    * Diffuse
    * Specular
    * Animations: Position, direction

## The exporter window 

When your scene is ready to be exported, click on the __Babylon__ tab on the top menu, and click on __Babylon File Exporter__ to display the exporter window. 

![export window](/img/exporters/Maya/6_export_window.jpg)

This window is composed of 3 panels:
* A top panel with a file path and a button. With this panel, you choose where your Babylon file will be exported by clicking on the right button
* Several options and two buttons Export and Export & Run
* A log panel
 
The _Export_ button should be used to create the Babylon file representing your scene. The _Export & Run_ button will also create the Babylon file, but will also launch your default browser and run the newly made Babylon file. This button is very useful if you just want to test the render of your scene in Babylon.js.

As babylon.js script is retrieved directly from the official website directly, you should have internet access in order to correctly use Export & Run.

The log panel indicates in real time which mesh has been exported, which material, and if there are any problems with these objects.

Option _Optimize vertices_: The Babylon exporter will try to optimize the number of vertices to export instead of exporting everything naively (if a vertex is part of two faces, this vertex won’t be exported twice with this option checked).

The _Scale factor_ can be used to rescale the whole world. If you set a scale factor equal to 100, the resulting scene will be 100 times smaller (1%). By default the scale factor is equal to 1, meaning no rescale.

The _Texture quality_ sets the convertion quality of bitmap to JPEG. At 100 (the maximum value), it gives the highest image quality but no file size reduction. On the contrary at 0 (the minimum value), it gives the lowest image quality but the greatest file size reduction. By default the _Texture quality_ is set to 100.

The _Use Draco comression_ option is only available for gltf and glb output format. More detail [here](/resources/Maya_to_glTF#draco-compression).

In the _MorphTarget options_ section, the _Export normal_ and _Export tangent_ checkboxes allow you to customize the morph target export.

# What you should know

## Camera

If you want to test your scene right away by using the button Export & Run, your scene should have a camera created. Otherwise, the log panel will display the warning “No camera defined” and a default one would be created at runtime but won't be exported in .babylon file.

If you have more than one camera, the first one will be set as activeCamera in Babylon.

## Light

If you don’t have any lights in your scene, the exporter will add an ambient light by default. The log panel will display the warning “No light defined – A default ambient light was added for your convenience”. 

## Locator

If you want to have a point in space used only for its transform attributes you can use a Locator. For example, a target camera naturally comes with a locator to indicate the position to look at. They can also be used as parent node when updating the scene at runtime with the Babylon engine.

## Group node

A group node is exported as a dummy, a mesh without vertices, just like a locator. However, only group nodes used as parent for other nodes are exported. If you have an empty group node, you should probably switch to a locator instead or it will be ignored.

## Textures and intermediate nodes

Maya provides a large range of tools to manipulate connexions between textures and materials (like the Reverse node). For the most part, only a fileTexture is expected as input to a material.

Currently the following intermediate nodes are supported by the exporter:
- Projection node which is only considered for the reflected color texture of a standard material. You can choose the projection type between _Spherical_ or _Planar_. If no projection node is provided, the default projection type is _Spherical_ for the reflected color texture.
- Bump2d node which is automatically created when assigning a file to a bump attribute.

## Textures image format

Babylon engine fully supports the following image formats: jpg, bmp, png, gif, tga. You are adviced to use those formats for your textures when exporting to Babylon.

Note that the exporter also supports textures with tif and dds formats. But, those textures will be automatically converted to png by the exporter to ensure compatibility with the Babylon engine.

## Physical materials

The handling of physical materials is mimic from glTF format. [Detailed explanations here](/resources/Maya_to_glTF#pbr-materials)

## UV sets

Babylon engine supports only 2 UV sets. In Maya the first UV set, created by default (map1), is used as UV1 in Babylon. The second UV set (map2) is used as UV2. Other UV sets are ignored and UV2 is used instead.

![export window](/img/exporters/Maya/7_uv_set_editor.jpg)

Moreover, Babylon engine supports only 1 UV set per texture. If a single texture is linked to UV1 and any other UV set, the log panel will display the warning “Texture is linked to UV1 and UV2. Only one UV set per texture is supported.” and the texture will be linked to UV1 or UV2 but not both.

Now that you know all about the exporter features, it’s time to use it! 

# Using the exporter

Export your own scene from Maya to babylon format and load it into the [Babylon Sandbox](http://sandbox.babylonjs.com/). Or load them via scripts using the [babylon loader](/how_to/how_to_use_assetsmanager).
