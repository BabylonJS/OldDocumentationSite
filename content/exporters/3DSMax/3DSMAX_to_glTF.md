# How to export 3DS MAX scene as glTF

With the babylon plugin for 3DS MAX, you can also export your project to glTF 2.0 format (https://github.com/KhronosGroup/glTF/).

All you need to do is choose __gltf__ as __Output format__.

![glTF export window](/img/exporters/3DSMax/14_gltf_export_window.jpg)

The plugin exports to babylon format before converting it to glTF.
The notable exported files are the .gltf and .bin ones.

To export to a single .glb file, choose __glb__ as __Output format__.

#  Features  #

## Exported features

Since the plugin first exports to babylon then converts it to glTF, glTF features are a subset of the [babylon ones](https://doc.babylonjs.com/exporters/3dsmax#features).

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
    * Base color factor and texture
    * Metallic and roughness factors
    * Combined MetallicRoughness texture
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

PBR materials as defined in glTF use a combined map of metallic and roughness, while in 3DS MAX those data are split into 2 textures.

Thus, a combined map is created when exporting Physical materials. Its name starts with the material's one and is exported to the same folder as other outputs.

![glTF metallic roughness combined](/img/exporters/3DSMax/15_gltf_metallic_roughness_combined.jpg)

In 3DS MAX, metallic and roughness maps are black and white images (R=G=B).
For glTF, metallic is stored in blue channel, roughness in green.

Note that the duration of this process scales with images size and may have a severe impact on export duration.

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

#  Try it out!  #

Export your own scene from 3DS MAX to gltf format and load it into the [Babylon Sandbox](http://sandbox.babylonjs.com/). Or load them via scripts using the [babylon loader](https://doc.babylonjs.com/extensions/gltf).
