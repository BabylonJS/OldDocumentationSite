---
ID_PAGE: 21
PG_TITLE: Blender
---
# Blender to Babylon.js exporter

The Blender export plugin can be found on [github repository](https://github.com/BabylonJS/Babylon.js/tree/master/Exporters/Blender).

An extension named [Tower of Babel](https://github.com/BabylonJS/Extensions/tree/master/QueuedInterpolation/Blender) can also be used as exporter.

## Features: 

### Cameras

![Blender cameras properties panel](img/exporters/blender/cameras/cameras-properties-panel.png)

[BJS doc'](http://doc.babylonjs.com/classes/2.5/camera)

| Blender | BJS equivalent |
|---|---|
| Lens</br>![lens](img/exporters/blender/cameras/lens.png) | <ul><li>Field of View: fov</li><li>Clipping: minZ & maxZ</li> |
| Exporter panel</br>![exporter-cameras-options](img/exporters/blender/cameras/exporter-cameras-options.png) | <ul><li>Camera Type, choose between:<ul><li>Arc Rotate</li><li>Device Orientation</li><li>Follow</li><li>Gamepad</li><li>Touch</li><li>Universal</li><li>Virtual Joysticks</li><li>VR Dev Orientation Free</li><li>Web VR Free</li></ul></li></ul> |

#### Specials

##### Arc Rotate Cameras

When choosing Arc Rotate type, you have to add a target to your camera. 

To do that:

* first select your camera, then its target (object or empty for example),
* press `Ctrl` + `T` > `Track To Constraint`.

### Lights

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
  
### Materials

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

### Textures

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

### Meshes

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
  
 ### World 

![Blender world properties panel](img/exporters/blender/world/world-properties-panel.png)

[BJS doc'](http://doc.babylonjs.com/classes/2.5/scene)

#### Blender Render

| Blender | BJS equivalent |
|---|---|
| World</br>![world-br](img/exporters/blender/world/blender-render/world.png) | <ul><li>Horizon Color: clearColor</li><li>Ambient Color: ambientColor</li></ul> |
| Exporter panel</br>![mist](img/exporters/blender/world/blender-render/mist.png) | <ul><li>Mist: when Blender Render Mist is enabled, you have access to Fog Mode & Fog Density parameters</li></ul> |
