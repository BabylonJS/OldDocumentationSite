# How To Install the Maya plug-in 

The plug-in is designed for Maya 2018. This guide is about the Windows version (a MacOS version is coming soon). To download the plug-in, go to the Github project (https://github.com/BabylonJS/Exporters/tree/master/Maya).  

![github](/img/exporters/Maya/1_github.jpg)

In this folder, you can find the source code of the exporter if you want to update it, and a zip file _Maya2Babylon-XX.zip_ (where XX is the exporter version, currently v0.1). Click on the zip file, and click on the _Download_ button. 

![github download](/img/exporters/Maya/2_github_dl.jpg)

Extract the content of the zip file on your computer. By default, Windows blocks all .dll files coming from the web, so we have to unblock them first. Select the first .dll file, and with a right click select _Properties_, select _Unblock_, and then _OK_. 

![dll unblocking](/img/exporters/Maya/3_dll_unlocking.jpg)

Repeat this process for all .dll files. Finally, move all .dll files into a directory defined in Maya plug-in path (for example `C:/Program Files/Autodesk/Maya2018/bin/plug-ins`). More information on how to install a plug-in in Maya [here](https://knowledge.autodesk.com/support/maya/learn-explore/caas/CloudHelp/cloudhelp/2016/ENU/Maya/files/GUID-FA51BD26-86F3-4F41-9486-2C3CF52B9E17-htm.html). In Maya plug-in Manager you should find the Maya2Babylon.nll.dll.

![dll unblocking](/img/exporters/Maya/4_maya_plug_in_manager.jpg)

Check _Loaded_ and _Auto load_, and a new tab should appear: 

![plug-in visible](/img/exporters/Maya/5_plugin_visible.jpg)

Congratulations! You did it!

# Features  #

## Exported features

* _Meshes_
    * Visibility
    * Position / rotation / scaling
    * Geometry (position, normal, color, texture coordinates (2 channels))

* _Materials_
    * Standard materials (Lambert, Phong, PhongE and Blinn)
        * Color
        * Transparency
        * Ambient color
        * Bump mapping
        * Specular color and power
        * Reflected color
    * PBR materials (Stingray PBS)
        * Base color & opacity
        * Normal
        * Metallic
        * Roughness
        * Emissive
    * Multi-materials

* _Textures_
    * UV offset / scaling / angle
    * Level
    * Coordinates mode (Spherical, planar, explicit)
    * Wrapping (Clamp, mirror, wrap)

* _Cameras_
    * Fov
    * MinZ
    * MaxZ
    * Position
    * Target / Rotation

* _Lights_
    * Point / spot / directional / ambient
    * Position / direction
    * Intensity
    * Diffuse
    * Specular
    * Light linking relations (inclusion list)

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

# What you should know

## Camera

If you want to test your scene right away by using the button Export & Run, your scene should have a camera created. Otherwise, the log panel will display the warning “No camera defined” and a default one would be created at runtime but won't be exported in .babylon file.

If you have more than one camera, the first one will be set as activeCamera in Babylon.

## Light

If you don’t have any lights in your scene, the exporter will add an ambient light by default. The log panel will display the warning “No light defined – A default ambient light was added for your convenience”. 

## Materials & textures

Maya provides a large range of tools to manipulate connexions between textures and materials (like the Reverse node). Currently none of these tools are supported by the exporter. Only a fileTexture is expected as input to a material. Otherwise the log panel will display the error “Only file texture is supported”. 

## Textures image format

Babylon engine fully supports the following image formats: jpg, bmp, png, gif, tga. You are adviced to use those formats for your textures when exporting to Babylon.

Note that the exporter also supports textures with tif and dds formats. But, those textures will be automatically converted to png by the exporter to ensure compatibility with the Babylon engine.

## Physical materials

The handling of physical materials is mimic from glTF format. [Detailed explanations here](/resources/Maya_to_glTF#pbr-materials)

## UV sets

Babylon engine supports only 2 UV sets. In Maya the first UV set, created by default, is used as UV1 in Babylon. The second UV set is used as UV2. Other UV sets are ignored and UV2 is used instead.

![export window](/img/exporters/Maya/7_uv_set_editor.jpg)

Moreover, Babylon engine supports only 1 UV set per texture. If a single texture is linked to UV1 and any other UV set, the log panel will display the warning “Texture is linked to UV1 and UV2. Only one UV set per texture is supported.” and the texture will be linked to UV1 or UV2 but not both.

Now that you know all about the exporter features, it’s time to use it! 

# Using the exporter

Export your own scene from Maya to babylon format and load it into the [Babylon Sandbox](http://sandbox.babylonjs.com/). Or load them via scripts using the [babylon loader](/how_to/how_to_use_assetsmanager).