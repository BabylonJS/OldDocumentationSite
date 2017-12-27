---
title: 3DSMax to glTF
abstract: ''
slug: 3dsmax-to-gl-tf
---

# How to export 3DS MAX scene as glTF

If you have not already installed the babylon plugin for 3DS MAX, you can find all instructions [here](/resources/exporter/3dsmax) as well as general information about the plugin.

With this plugin, you can also export your project to glTF 2.0 format (https://github.com/KhronosGroup/glTF/).

All you need to do is choose __gltf__ as __Output format__.

![glTF export window](/img/exporters/3DSMax/14_gltf_export_window.jpg)

The plugin exports to babylon format before converting it to glTF.
The notable exported files are the .gltf and .bin ones.

To export to a single .glb file, choose __glb__ as __Output format__.

#  Features  #

## Exported features

Since the plugin first exports to babylon then converts it to glTF, glTF features are a subset of the [babylon ones](/resources/3dsmax#features).

* _Cameras_
    * zfar
    * znear
    * yfov (Perspective camera)
    * Position / rotation
    * Animations: Position

* _Meshes_
    * Geometry: position, normal, color, texture coordinates (2 channels)
    * Skin
    * Instances
    * Morph targets
    * Position / rotation / scaling
    * Animations: bones, morph weights

* _Nodes_
    * Position / rotation / scaling
    * Animations: Position, scaling, rotation

* _Materials_
    * Base color
    * Metalness and roughness
    * Emission, ambient occlusion
    * Multi-materials

* _Textures_
    * Wrap mode (Clamp, mirror, repeat)

* Hierarchies are exported

## Conversion Standard to PBR materials

The plugin uses core specifications of glTF, i.e. without any extension. This implies that only PBR materials are exported.

To support compatibility with standard materials, they are converted to PBR materials based on their diffuse, specular, opacity and glossiness.

[The complete algorithm is detailed here](https://github.com/bghgary/glTF/blob/gh-pages/convert-between-workflows-bjs/js/babylon.pbrUtilities.js)

[A demo is available here](https://bghgary.github.io/glTF/convert-between-workflows-bjs/)

Note that the conversion duration scales with images size and may have a severe impact on export duration.

## PBR materials

The physical materials are exported to glTF format as PBR materials.

Involved parameters are highlighted bellow and described in following sections.

![3DS MAX physical material parameters](/img/exporters/3DSMax/18_3dsmax_physical_materials_parameters.png)

Remember that in 3DS MAX, when a map is assigned to a parameter, the basic parameter value is ignored. This behaviour is kept when exporting.

### Base color and Transparency

Only the color of base color is used. The weight of base color is ignored.

Only the weight of transparency is used. The color of the transparency is ignored, as well as other parameters (depth, thin-walled, transparency roughness).

In glTF format, the transparency is expressed in alpha (alpha = 1 - transparency).

The base color RGB and the alpha A are merged together into a single color RGBA:

![glTF base color and alpha maps combined](/img/exporters/3DSMax/16_gltf_baseColor_alpha_combined.jpg)

The 2 maps must have same sizes to be merged successfully.

Note that the duration of this process scales with images size and may have a severe impact on export duration.

The basic parameter value is used as default value when binded map is not provided:

![glTF base color map and transparency weight combined](/img/exporters/3DSMax/17_gltf_baseColor_transparencyWeight_combined.jpg)

### Metalness and Roughness

The metalness is used.

The roughness of the material is used. It can be inverted to mean Glossiness - this also affects roughness map. The IOR parameter is ignored.

The metalness and roughness maps are combined together:

![glTF metalness and roughness maps combined](/img/exporters/3DSMax/15_gltf_metallic_roughness_combined.jpg)

In 3DS MAX, metalness and roughness maps are black and white images (R=G=B).

In glTF format, metalness is stored in blue channel, roughness in green.

The 2 maps must have same sizes to be merged successfully.

Note that the duration of this process scales with images size and may have a severe impact on export duration.

Like for base color and transparency, the basic parameter value is used as default value when binded map is not provided.

### Emission

The exported emission color value is computed based on all 4 parameters: emission weight, color, luminance and Kelvin.

However, the exported emission color map is identical to the specified one in generic map. This mean that emisson weight, luminance and Kelvin __are not__ used. The emission map is assumed to be precomputed.

### Ambient occlusion

The diffuse roughness map is used as ambient occlusion.

### Bump map

The bump map (or normal map) and its weight are used.

# What you should know

## Babylon properties

Most babylon properties are not used when exporting to glTF format. The only one which matter is:
* __Do not export__: Self-explanatory, this object/light/camera won’t be exported. False by default.

## Lights

Lights are not supported in glTF 2.0. An empty node is exported in place of light only when it is relevant to do so (when a light has a mesh or a camera as descendant).

## Left to right handed coordinate system

As glTF export relies on conversion from babylon, the coordinate system is changing from left (babylon) to right handed (glTF).
To do it simply, a root node named "root" is added to the scene. All nodes are set as descendants of this root node. It has specific rotation and scaling to do the trick.

## Consideration about skins

In glTF, a skin is binded to a node. The skeleton (root bone) of a skin should be positioned at origin, without rotation or scaling. The node to which is applied the skin is responsible of its transformation (translation, rotation, scale).

## Textures image format

glTF 2.0 only supports the following image formats: jpg and png. You are adviced to use those formats for your textures when exporting to glTF.

Note that the exporter also supports textures with bmp, gif, tga, tif and dds formats. But, those textures will be automatically converted to png/jpg by the exporter to follow glTF specifications.

## Environment texture

To enjoy PBR material rendering, you should have an environmnent texture in your scene. The plugin exports the environment map if any is provided in 3DS MAX.

However, glTF format does not support this feature and the environment map needs to be added manually in client implementations. The Babylon Sandbox, see bellow, provides such feature.

#  Try it out!  #

Export your own scene from 3DS MAX to glTF format and load it into the [Babylon Sandbox](http://sandbox.babylonjs.com/). Or load them via scripts using the [babylon loader](/how-to/importer/gl-tf).
