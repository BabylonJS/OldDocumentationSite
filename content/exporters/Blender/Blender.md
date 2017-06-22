---
ID_PAGE: 21
PG_TITLE: Blender
---
# Blender to Babylon.js exporter

The Blender export plugin can be found on [github repository](https://github.com/BabylonJS/Babylon.js/tree/master/Exporters/Blender).

An extension named [Tower of Babel](https://github.com/BabylonJS/Extensions/tree/master/QueuedInterpolation/Blender) can also be used as exporter.

## Features: 

* Cameras
  * Name
  * Position
  * Target
  * Fov
  * Clip start
  * Clip end
  * Check collisions
  * Gravity
  * Ellipsoid
  * Actions exported as AnimationRanges
  * 3D Camera Rigs
  * All kind of Babylon.js cameras can be chosen from a custom dropdown list
* Lights
  * Type (Point, directional (Sun), Spot, Hemispheric)
  * Name
  * Position
  * Direction
  * Spot size
  * Spot blend 
  * Energy
  * Diffuse color
  * Specular color
  * Include only meshes in same Blender layer
  * Shadow maps, all types (For directional lights)
  * Actions exported as AnimationRanges
* Materials
  * Name
  * Name space
  * Ambient color
  * Diffuse color
  * Specular color
  * Specular hardness
  * Emissive color
  * Alpha
  * Backface culling
  * Diffuse texture
  * Ambient texture
  * Opacity texture
  * Reflection texture
  * Emissive texture
  * Bump texture
  * Procedural Texture Baking
  * Cycles Render Baking
  * Check Ready Only Once
  * Maximum Simultaneous Lights
* Multi-materials
  * Name
  * Child materials
  * 32 bit vertex limit for multi-materials
* Textures
  * Name
  * Associated file
  * Level
  * Use alpha
  * uOffset / voffset
  * uScale / uScale
  * uAng / vAng / Wang
  * WrapU / WrapV
  * Coordinates index
  * Texture in-lining to .babylon file
* Meshes
  * Name
  * Geometry (Positions & normals)
  * Position
  * Rotation
  * Scaling
  * FreezeWorldMatrix
  * Texture coordinates (2 channels)
  * Vertex colors
  * Visibility
  * Load disabled
  * Check collisions
  * Billboard
  * Receive and cast shadows
  * Bones (armatures) and bones' actions
    * Variable Max Bone Influencers / vertex
  * Actions exported as AnimationRanges