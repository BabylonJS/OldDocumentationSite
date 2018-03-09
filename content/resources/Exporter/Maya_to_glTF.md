# How to export Maya scene as glTF

If you have not already installed the babylon plugin for Maya, you can find all instructions [here](/resources/Maya) as well as general information about the plugin.

With this plugin, you can also export your project to glTF 2.0 format (https://github.com/KhronosGroup/glTF/).

All you need to do is choose __gltf__ as __Output format__.

![glTF export window](/img/exporters/Maya_to_glTF/1_gltf_export_window.jpg)

The plugin exports to babylon format before converting it to glTF.
The notable exported files are the .gltf and .bin ones.

To export to a single .glb file, choose __glb__ as __Output format__.

#  Features  #

## Exported features

Since the plugin first exports to babylon then converts it to glTF, glTF features are a subset of the [babylon ones](/resources/Maya#features).

* _Meshes_
    * Visibility
    * Position / rotation / scaling
    * Geometry (position, normal, texture coordinates (2 channels))

* _Nodes_
    * Hierarchy
    * Position / rotation / scaling

* _Materials_
    * Standard materials (Lambert, Phong, PhongE and Blinn are converted to PBR, see below)
        * Color
        * Transparency
        * Bump mapping
        * Specular color and power
    * PBR materials (Stingray PBS)
        * Base color & opacity
        * Normal
        * Metallic
        * Roughness
        * Emissive
    * Multi-materials

* _Textures_
    * magFilter, minFilter
    * Image format conversion to jpg / png

* _Cameras_
    * zfar
    * znear
    * yfov (Perspective camera)
    * Position / rotation

## Conversion Standard to PBR materials

The plugin uses core specifications of glTF, i.e. without any extension. This implies that only PBR materials are exported.

To support compatibility with Maya Standard materials (Lambert, Phong, PhongE and Blinn), they are converted to PBR materials based on their color, specular, transparency and glossiness (specular power).

[The complete algorithm is detailed here](https://github.com/bghgary/glTF/blob/gh-pages/convert-between-workflows-bjs/js/babylon.pbrUtilities.js)

[A demo is available here](https://bghgary.github.io/glTF/convert-between-workflows-bjs/)

Note that the conversion duration scales with images size and may have a severe impact on export duration.

## PBR materials

For best results with glTF format, you are adviced to use Stingray PBS material, as it is the closest material to glTF PBR material.

Involved parameters are highlighted bellow and described in following sections.

![3DS MAX physical material parameters](/img/exporters/Maya_to_glTF/2_gltf_stingray_pbs.jpg)

### Preset Material

You can choose between _presets/Standard_ and _presets/Standard Transparent_. The only difference it makes is the presence of an opacity attribute and an opacity map checkbox.

### Attributes

The first attributes are checkboxes. When one is checked, the exporter will ignore the linked attribute and will only use the map.

This behaviour is the same for Maya in most cases, see below.

Other attributes (Base Color, Metallic...) are default values used when the corresponding checkboxes are unchecked.

Note that UV attributes are not used by the exporter and should instead be setup in each fileTexture connected to the material.

### Textures

When a _Use XXXX Map_ checkbox is checked, the corresponding texture is used instead of the attribute value.

The following maps have dedicated treatment.

### Base color and Opacity as map

When preset material is set to transparent, the texture in _Color Map_ is used both for base color and opacity.

In Maya, if _Use Color Map_ is checked while _Use Opacity Map_ is not, the opacity attribute is used instead of the alpha defined in the texture, and vice versa.

However, __the exporter does not follow this behaviour. As long as _Use Color Map_ or _Use Opacity Map_ is checked, both are considered checked__. This means that Color Map should contain the end result data (both RGB and Alpha). In this case, the exporter will have no use of the Base Color or Opacity attribute. This also means that opacity must be setup in alpha channel, not in RGB.

When both checkboxes are unchecked, the attributes are used as normal.

### Metallic and Roughness

In glTF format, the metallic and roughness maps are combined together:

![glTF metallic and roughness maps combined](/img/exporters/Maya_to_glTF/3_gltf_metallic_roughness_combined.jpg)

In Maya, metallic and roughness maps are black and white images (R=G=B).

In glTF format, metallic is stored in blue channel, roughness in green.

The 2 maps must have same sizes to be merged successfully. Otherwise, the log panel will display the error "Metallic and roughness maps should have same dimensions" and the merged texture will be irrelevant.

If only one of the 2 maps is used, the attribute value is applied to all pixels when creating merged texture. This behaviour is the same in Maya.

Note that the duration of this process scales with images size and may have a severe impact on export duration.

### Emission

If _Use Emissive Map_ attribute is checked, the emissive color and the emissive intensity are ignored by the exporter.

Thus the emissive map is assumed to be already premultiplied by the emissive intensity.

# What you should know

## Lights

Lights are not supported in glTF 2.0. An empty node is exported in place of light only when it is relevant to do so (when a light has a mesh or a camera as descendant).

## Textures image format

glTF 2.0 only supports the following image formats: jpg and png. You are adviced to use those formats for your textures when exporting to glTF.

Note that the exporter also supports textures with bmp, gif, tga, tif and dds formats. But, those textures will be automatically converted to png/jpg by the exporter to follow glTF specifications.

## Environment texture

To enjoy PBR material rendering, you should have an environmnent texture in your scene. Currently the plugin does not export any environment map and one must be added manually in client implementations. The Babylon Sandbox provides such feature.

#  Try it out!  #

Export your own scene from Maya to glTF format and load it into the [Babylon Sandbox](http://sandbox.babylonjs.com/). Or load them via scripts using the [Babylon loader](/how_to/gltf).