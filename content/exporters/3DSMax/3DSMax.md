---
ID_PAGE: 20
PG_TITLE: 3DSMax
---
# 3DS Max to Babylon.js exporter

You can download the whole exporter by clicking on the last version of the [zip Max2Babylon](https://github.com/BabylonJS/Babylon.js/tree/master/Exporters/3ds%20Max), and clicking on the 'Raw' button of Github.
This exporter is designed for 3ds Max 2013+. You just have to unzip the content of the archive to [3ds max folder\bin\assemblies]

**After unzipping DLLs, you may have to go through all files, right-click on them, select the Properties menu and click on Unblock button to remove security protection enforce by Windows**

If you right click on the scene, on a light, on a camera or on a mesh you fill have a [Babylon...] menu.

To export you can use the [Babylon] menu in the main menu bar.

## Exported features

- _Scene_
    - Clear color
    - Ambient color
    - Fog

- _Cameras_
    - Fov
    - MinZ
    - MaxZ
    - Speed (*)
    - Inertia (*)
    - Collisions (*)
    - Position
    - Target / Rotation
    - Animations: Position, Fov

- _Lights_
    - Omni / spot / directional / Ambient(Hemispheric)
    - Shadows maps for directional lights (Variance shadow maps can be actived by checking [ABsoulte Map Bias] in light properties)
    - Inclusion / exclusion lists
    - Position / direction
    - Intensity
    - Diffuse
    - Specular
    - Animations: Position, Direction, intensity

- _Meshes_
    - Visibility
    - Renderable
    - Shadows
    - Collisions (*)
    - Pickable (*)
    - Position / rotation / scaling
    - Smoothing groups
    - Skin
    - Geometry (position, normal, texture coordinates (2 channels))
    - Show Bounding box and submeshes bounding boxes (*)
    - Animations: Position, scaling, rotation, visibility, bones

- _Materials_
    - Multi-materials
    - Alpha
    - Diffuse color and texture
    - Ambient color and texture
    - Specular color and texture
    - Bump
    - Emissive color and texture
    - Opacity texture
    - Reflection texture
    - Fresnel for diffuse, emissive, opacity and reflection

- _Textures_
    - UV offset / scaling / angle
    - Level
    - Coordinates mode (Spherical, planar, explicit)
    - Wrapping (Clamp, mirror, wrap)

- Hierarchies are exported

(*): Through custom UI

## Animations

Cameras, lights and meshes have custom properties (Right-click and select "Babylon properties" menu) to automatically launch animations at startup.

Animations are exported by sampling keyframes which can generate a lot of data. To reduce file size, you can opt to use linear interpolation instead of bezier or TCB.

## Consideration about bones

To ensure that bones are correctly exported, you have to use the Skin modifier. Skin should be positioned at origin. [More info here](http://doc.babylonjs.com/exporters/Bones_influences_per_vertex)

## Using Actions Builder

Vresion 2.2.0 introduced a new feature called Actions Builder. This tool allows you to visually design your actions. [More info here](https://medium.com/babylon-js/actions-builder-b05e72aa541a)
