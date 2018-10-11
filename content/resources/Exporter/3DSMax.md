---
ID_PAGE: 20
PG_TITLE: 3DSMax
---
# How To Install the 3DS Max plugin 

The plugin is designed for 3DS Max 2015 or later. To download it, go to the Github project (https://github.com/BabylonJS/Exporters/tree/master/3ds%20Max).  

![github](/img/exporters/3DSMax/1_github.jpg)

In this folder, you can find the source code of the exporter if you want to update it, and a zip file _Max2Babylon-XX.zip_ (where XX is the exporter version, currently 1.1.0). Click on the zip file, and click on the _Download_ button. 

![github download](/img/exporters/3DSMax/2_github_dl.jpg)

By default, Windows blocks all .dll files coming from the web, so we have to unblock them first. Select the zip file, and with a right click select _Properties_, select _Unblock_, and then _OK_. 

![dll unblocking](/img/exporters/3DSMax/3_dll_unlocking.jpg)

Then, extract the content of the zip file on your computer, and open the directory corresponding to your 3DS Max version. Finally, make sure 3ds Max is not running, and move all .dll files into the installation directory of 3DS Max (in `C:/Programs/Autodesk/3ds Max 2015/bin/assemblies`). The next time you will start 3ds Max, the plugin will be automatically launched, and a new tab should appear: 

![plugin visible](/img/exporters/3DSMax/4_plugin_visible.jpg)

Congratulations! You did it!

# Features  #

## Exported features

* _Scene_
    * Clear color
    * Ambient color
    * Fog
    * Environment texture (.dds)

* _Cameras_
    * Fov
    * MinZ
    * MaxZ
    * Speed (*)
    * Inertia (*)
    * Collisions (*)
    * Position
    * Target / Rotation
    * Animations: Position, Target, Fov

* _Lights_
    * Omni / spot / directional / Ambient(Hemispheric)
    * Shadows maps for directional lights (Variance shadow maps can be actived by checking [Absolute Map Bias] in light properties)
    * Inclusion / exclusion lists
    * Position / direction
    * Intensity
    * Diffuse
    * Specular
    * Animations: Position, direction, intensity, diffuse

* _Meshes_
    * Visibility
    * Renderable
    * Shadows
    * Collisions (*)
    * Pickable (*)
    * Position / rotation / scaling
    * Smoothing groups
    * Skin
    * Geometry (position, normal, color, texture coordinates (2 channels))
    * Instances
    * Morph targets
    * Show Bounding box and submeshes bounding boxes (*)
    * Animations: Position, scaling, rotation, visibility, bones, morph weights

* _Materials_
    * Multi-materials
    * Alpha
    * Diffuse color and texture
    * Ambient color and texture
    * Specular color and texture
    * Bump
    * Emissive color and texture
    * Opacity texture
    * Reflection texture
    * Fresnel for diffuse, emissive, opacity and reflection
    * Physical materials (PBR)
    * Standard Surface Arnold material
    * Unlit attribute

* _Textures_
    * UV offset / scaling / angle
    * Level
    * Coordinates mode (Spherical, planar, explicit)
    * Wrapping (Clamp, mirror, wrap)

* Hierarchies are exported

(*): Through custom UI

## Scene properties 

If you right-click on your scene, you will have a menu _Babylon -> Babylon Properties:_
All the available blend modes are listed below:

![Property button](/img/exporters/3DSMax/5_properties_button.jpg)

![Scene properties](/img/exporters/3DSMax/6_properties_window.jpg)

The scene properties allow you to do these things:
* Set the scene gravity
* __Export quaternions for all nodes instead of Euler angles__. If this option is selected, an exported model rotation won’t be updated by setting its `rotation` parameter. Instead, you will have to use the `rotationQuaternion` parameter.
* __Do not optimize animations__. You should check this option if animations are not exported correctly.
* Create a default skybox from the environment texture when scene is being loaded. An environmnent texture must be setup to enable this feature.
* Set the blur effect intensity applied to the skybox texture. By default it is slightly blurred. Setting value to 0 disables the blur effect.
* __Add a default light, if no light is exported__. If this option is checked and there is no light selected for the export, an hemispheric light is added in the exported scene. By default this option is checked.
* __Export normals__ and __Export tangents__ checkboxes allow you to control the morph target export. Note that if you want to export the target morph tangent, you have to check both the __Export tangents__ checkbox and the other __Export tangents__ checkbox of [the exporter window](#the-exporter-window).

## Object properties 

With a right click on a mesh, select the menu _Babylon -> Babylon Properties_ to open the window Object Properties:

![Object properties](/img/exporters/3DSMax/7_object_properties_window.jpg)

With this window, you can set the following properties:
* __Check collisions__: Activate it to enable collisions between the camera and this object. False by default.
* __Do not export__: Self-explanatory, this object won’t be exported. False by default.
* __Pickable__: This object can be picked with the mouse. False by default.
* __Try to optimize vertices__: The Babylon exporter will try to optimize the number of vertices to export instead of exporting everything naively (if a vertex is part of two faces, this vertex won’t be exported twice with this option checked). False by default.
* __Show bounding box__: Display the bounding box of this object in the scene. False by default.
* __Show submeshes bounding boxes__. Same as above. False by default.
* __Alpha index__: Used to sort transparent meshes. The mesh with the bigger alpha index is rendered first (then the depth is taken into account). Default value is 1000.
* __Tag__: Used to add a custom tag to this object. Empty by default.
* __Auto animate__: All animations for this object will start when this object is being added to the scene. True by default.
* __From/To/Loop__: The starting and ending frame for this object, and if the animation loops. Default values are 0, 100 and true.
* __Impostor__: Add an impostor to this object. Default is none.
* __Mass/Friction/Restitution__: set the physics value of the impostor. Default values are 0.20, 0.20, and 0.20. 

## Light properties

If you create a standard light and right click on it, select the menu Babylon -> Babylon Properties to display this window: 

![Light properties](/img/exporters/3DSMax/8_light_properties_window.jpg)

The options __Do not export__, __Tag__ and __animations__ are exactly the same as the Object properties window.

## Camera properties 

![Camera properties](/img/exporters/3DSMax/9_camera_properties_window.jpg)

In this window, you can choose the kind of camera you want to create in Babylon.js. You can also:
* __Check collision__: The camera can collide against objects where check collisions is activated.
* __Apply gravity__: The camera will be subject to the scene’s gravity (in the Scene properties window)
* __Ellipsoid__: With collisions enabled, the camera will be wrapped in an ellipsoid, the size of which can be set here.
* __Speed / inertia__: The speed and inertia of the camera. Default values are 1 and 0.9.
* __Animations__: Same as in Object properties window. 
* __Tag__: Same as in Object properties window. 

## The exporter window 

When your scene is ready to be exported, click on the __Babylon__ tab on the top menu, and click on __Babylon File Exporter__ to display the exporter window. 

![export window](/img/exporters/3DSMax/10_export_window.jpg)

This window is composed of 3 panels:
* A top panel with a file path and a button. With this panel, you choose where your Babylon file will be exported by clicking on the right button.
* Several options and two buttons Export and Export & Run
* A log panel 
 
The _Scale factor_ can be used to rescale the whole world. If you set a scale factor equal to 100, the resulting scene will be 100 times smaller (1%). By default the scale factor is equal to 1, meaning no rescale.

The _Texture quality_ sets the convertion quality of bitmap to JPEG. At 100 (the maximum value), it gives the highest image quality but no file size reduction. On the contrary at 0 (the minimum value), it gives the lowest image quality but the greatest file size reduction. By default the _Texture quality_ is set to 100.

The _Merge AO map_ option enables the merging of the Ambient Occlusion shadow map (stored on Diffuse Roughness slot) with the Metalness and Roughness map.

The _write textures_ option enables writing the textures to the output directory.  Note that this is *__force enabled__* when exporting glb files.

The _overwrite textures_ option enables overwriting existing textures in the output directory.

The _Use Draco comression_ option is only available for gltf and glb output format. More detail [here](/resources/3DSMax_to_glTF#draco-compression).

The _Export_ button should be used to create the Babylon file representing your scene. The _Export & Run_ button will also create the Babylon file, but will also launch your default browser and run the newly made Babylon file. This button is very useful if you just want to test the render of your scene in Babylon.js. 

As babylon.js script is retrieved directly from the official website directly, you should have internet access in order to correctly use Export & Run.  

The log panel indicates in real time which mesh has been exported, which material, and if there are any problems with these objects. 

## Export with MaxScript

You can also export the scene using MaxScript. A sample script file is available [here](https://github.com/BabylonJS/Exporters/blob/master/3ds%20Max/MaxScripts/Max2Babylon.ms).

You will need to update the path to your babylon dll and the output path.

All parameters are editable. Default values are the same as in the exporter window except for _autoSave3dsMaxFile_ which is false.

Logs are limited to errors, warnings and core messages to avoid excessive amount of prints.


# What you should know

## Camera

If you want to test your scene right away by using the button Export & Run, your scene should have a camera created. Otherwise, the log panel will display the warning “No camera defined” and a default one would be created at runtime but won't be exported in .babylon file. 

If you have more than one camera, the first one will be set as activeCamera in Babylon. 

## Light

If you don’t have any lights in your scene, the exporter will add a hemispheric light by default. The log panel will display the warning “No light defined – A default hemispheric light was added for your convenience”. 

## Pivot and position 

The object position will be defined with your object pivot position. In the image below, the pivot position is not at the center of the box: updating the object position in Babylon.js will update this pivot position, and not the box position.

![pivot](/img/exporters/3DSMax/10_pivot.jpg)

## Negative scale

Using a negative scale will reverse the normal of your objects. These objects will appear correctly in 3DSMax, but incorrectly in a Babylon.js application.

## Mirror by Transform

Using mirror tool affecting __Transform__ will make mirrored object appear correctly in 3DSMax, but incorrectly in a Babylon.js application. Consider using mirror tool affecting __Geometry__ instead.

If mirror by __Transform__ is what you need (or what you got), you can fix this issue doing the following after mirroring:
- apply a ResetXForm
- make object editable: add an Edit modifier or collapse Xform modifier
- flip normals

Be aware animations for this object will likely be incorrect after that.

## Animations

Cameras, lights and meshes have custom properties (Right-click and select "Babylon properties" menu) to automatically launch animations at startup.

Animations are exported by sampling keyframes which can generate a lot of data. To reduce file size, you can opt to use linear interpolation instead of bezier or TCB.

Also, if animations are not exported correctly, you may want to disable animation optimization by using the Babylon properties menu on the scene (Right-click on the scene and select "Babylon properties" menu).

## Consideration about bones

To ensure that bones are correctly exported, you have to use the Skin modifier. Skin should be positioned at origin. [More info here](/resources/Bones_influences_per_vertex)

## Textures image format

Babylon engine fully supports the following image formats: jpg, bmp, png, gif, tga. You are adviced to use those formats for your textures when exporting to Babylon.

Note that the exporter also supports textures with tif and dds formats. But, those textures will be automatically converted to png by the exporter to ensure compatibility with the Babylon engine.

About dds format, Babylon engine partially supports this format depending on compression. To avoid any issue with this format, the exporter automatically converts it to png as stated previously. As an exception, the dds format is allowed for the environmnent texture and will not be automatically converted.

## Specular color and specular level

Specular color and specular level are split into two attributes in 3ds Max while merged in Babylon.

For the global value, the specular color and level are multiplied to obtain the resulting specular color in Babylon.

For the texture, the Babylon specular color map is either:
- directly the specular color map setup in 3ds max when the specular level map is not defined. To ensure backward compatibility, the global specular level is ignored in this case. __It is assumed the specular color map is already pre-multiplied by the desired amount__.
- a mix between specular color map and specular level map. Maps are multiplied by the exporter.
- a mix between specular level map and global specular color. The global specular color is multiplied to each pixel of the specular level map.

Even though a specular level map should be a grayscale, its 3 components (RGB) are multiplied individually to the specular color.

## Physical materials

The handling of physical materials is mimic from glTF format. [Detailed explanations here](/resources/3DSMax_to_glTF#pbr-materials)

## Arnold materials

The handling of arnold materials is mimic from glTF format. [Detailed explanations here](/resources/3DSMax_to_glTF#standard-surface-arnold-material)

## Shell material

The handling of the shell material is mimic from glTF format. [Detailed explanations here](/resources/3DSMax_to_glTF#shell-material)

## DirectX Shader

The handling of the directX shader material is mimic from glTF format. [Detailed explanations here](/resources/3DSMax_to_glTF#directx-shader-material)

## Texture transparency 

Babylon supports PNG, DDS and TGA formats for texture transparency. You can choose to include the transparency directly in your diffuse texture, or create an opacity map. Here are the options to check if you want to have transparency on your diffuse texture: 

![texture](/img/exporters/3DSMax/11_texture.jpg)

## Unlit material

A material can be exported as Unlit, meaning independent of lighting. This implies that light-relative attributes or textures are not exported: ambient, specular, emissive, bump mapping and reflection texture.

3DS MAX does not provide a simple way to tag a material as Unlit. To do so, you need to add a custom attribute to the material :

![3DS MAX unlit custom material attribute](/img/exporters/3DSMax/unlit_custom_material_attribute.jpg)

To add the desired custom attribute, you are recommended to use the [BabylonMaterialAttributes MAXScript](https://github.com/BabylonJS/Exporters/blob/master/3ds%20Max/MaxScripts/BabylonMaterialAttributes.ms) which adds the Unlit attribute to all materials used in the scene. The default value is _not Unlit_. Run the script again whenever creating/assigning a new material.

Alternatively, you can add the custom attribute manually following [3DS MAX guidelines](https://knowledge.autodesk.com/support/3ds-max/learn-explore/caas/CloudHelp/cloudhelp/2016/ENU/3DSMax/files/GUID-7EAA7D84-5775-4E4C-9936-D874EB7A42BB-htm.html). Note that the exporter is looking for an attribute named _babylonUnlit_. The visual text (_Unlit_) could be whatever you want.

Now that you know all about the exporter features, it’s time to use it! 

# Using the exporter

First, create the model you will be using in the Key class. I choose to create a simple key (you might recognize a little inspiration from the Zelda games). As you can see, the key has 3 key frames creating a floating animation. Its material has no diffuse color (set to black), but a self-illumination color (corresponding to the emissive color in Babylon.js). 

![key](/img/exporters/3DSMax/12_key.jpg)

The only thing left to do is to export this key as a Babylon file, and we’re done with 3DS Max. As the animation is going from frame 0 to frame 80, the Babylon properties for this object have to be updated. And we’re done! 

![animation](/img/exporters/3DSMax/13_animation.jpg)
