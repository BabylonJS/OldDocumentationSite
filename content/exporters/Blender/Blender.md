---
ID_PAGE: 21
PG_TITLE: Blender
---
# Blender to Babylon.js exporter

The Blender export plugin can be found on [github repository](https://github.com/BabylonJS/Exporters/tree/master/Blender).

An extension named [Tower of Babel](http://github.com/BabylonJS/Extensions/tree/master/QueuedInterpolation/Blender) can also be used as exporter, see its readme to know about its functionnalities.

## Features:

### Scene

![Blender scene properties panel](img/exporters/blender/scene/scene-properties-panel.png)

| Blender | [BJS equivalent](http://doc.babylonjs.com/classes/3.0/scene) |
| --- | --- |
| Scene</br>![scene](img/exporters/blender/scene/scene.png) | <ul><li>Camera: set scene activeCamera</li></ul> |
| Exporter panel</br>![exporter-scene-options](img/exporters/blender/scene/exporter-scene-options.png) | <ul><li>Export only selected layers: objects in hidden scene layers will not be taken into account</br>![selected-layers](img/exporters/blender/scene/selected-layers.png)</li><li>Flat shade entire scene: all objects will be exported as [flat shaded meshes](http://doc.babylonjs.com/classes/3.0/mesh#converttoflatshadedmesh-rarr-mesh-classes-3-0-mesh-)</br>[(tip about shading)](http://doc.babylonjs.com/exporters/blender_tips#smooth-shading)</li><li>Force 64k per Mesh Vertex Limit: here to keep compatibility with old or low-cost hardware</li></ul> |

### World 

![Blender world properties panel](img/exporters/blender/world/world-properties-panel.png)

#### Blender Render

| Blender | [BJS equivalent](http://doc.babylonjs.com/classes/3.0/scene) |
|---|---|
| World</br>![world-br](img/exporters/blender/world/blender-render/world.png) | <ul><li>Horizon Color: scene clearColor</li><li>Ambient Color: scene ambientColor</li></ul> |
| Exporter panel</br>![mist](img/exporters/blender/world/blender-render/mist.png) | <ul><li>Mist: when Blender Render Mist is enabled, you have access to Fog Mode & Fog Density parameters</li></ul> |

### Object

![Blender object properties panel](img/exporters/blender/object/object-properties-panel.png)

| Blender | BJS equivalent |
| --- | --- |
| ![header](img/exporters/blender/object/header.png) | <ul><li>object name will be exported as it is</li></ul>|
| Transform</br>![transform](img/exporters/blender/object/transform.png) | <ul><li>Position</li><li>Rotation<ul><li>XYZ Euler</li><li>Quaternion</li></ul></li><li>Scale<ul><li>do not forget to apply Scale before exporting: 'Ctrl' + 'A' > 'Scale'</li></ul></li></ul>|
| Relations</br>![relations](img/exporters/blender/object/relations.png) | <ul><li>parenting is supported</li></ul>|

### Constraints

![Blender constraints properties panel](img/exporters/blender/constraints/constraints-properties-panel.png)

| Blender | BJS equivalent |
| --- | --- |
| ![constraints](img/exporters/blender/constraints/constraints.png) | <ul><li>Track To: useful when using ArcRotate camera [(tip)](http://doc.babylonjs.com/exporters/blender_tips#arcrotate)</li></ul>|

### Cameras

![Blender cameras properties panel](img/exporters/blender/cameras/cameras-properties-panel.png)

| Blender | [BJS equivalent](http://doc.babylonjs.com/classes/3.0/camera) |
|---|---|
| Lens</br>![lens](img/exporters/blender/cameras/lens.png) | <ul><li>Field of View: fov</li><li>Clipping: minZ & maxZ</li> |
| Exporter panel</br>![exporter-cameras-options](img/exporters/blender/cameras/exporter-cameras-options.png) | <ul><li>Camera Type, choose between:<ul><li>Arc Rotate [(tip)](http://doc.babylonjs.com/exporters/blender_tips#arcrotate)</li><li>Device Orientation</li><li>Follow</li><li>Gamepad</li><li>Touch</li><li>Universal</li><li>Virtual Joysticks</li><li>VR Dev Orientation Free</li><li>Web VR Free</li></ul></li></ul> |

### Lights

![Blender lights properties panel](img/exporters/blender/lights/lights-properties-panel.png)

| Blender | [BJS equivalent](http://doc.babylonjs.com/classes/3.0/light) |
|---|---|
| Lamp</br>![lamp](img/exporters/blender/lights/lamp.png) | <ul><li>Sun as Directionnal, Area as Point, other named like in BJS</li><li>This Layer Only: [includedOnlyMeshes](http://doc.babylonjs.com/classes/3.0/light#includedonlymeshes-abstractmesh-classes-3-0-abstractmesh-)</li><li>when Sphere is checked, Distance value is exported as range</li></ul> |
| Spot Shape</br>(only available when light type is Spot)</br>![spot-shape](img/exporters/blender/lights/spot-shape.png) | <ul><li>Size: Angle</li><li>Blend: value &#42; 2 = exponent</li></ul> |
| Exporter panel</br>![exporter-lights-options](img/exporters/blender/lights/exporter-lights-options.png) | <ul><li>Shadow Map (only for directional lights):<ul><li>None</li><li>Standard</li><li>Poisson</li><li>ESM</li><li>Blur ESM</li></ul></li></ul> |

### Meshes

![Blender meshes properties panel](img/exporters/blender/meshes/meshes-properties-panel.png)

| Blender | [BJS equivalent](http://doc.babylonjs.com/classes/3.0/mesh) |
|---|---|
| Normals</br>![normals](img/exporters/blender/meshes/normals.png) | Auto Smooth is often use by Blender users, but is not supported.</br> Use an edge split modifier instead, see [tip](http://doc.babylonjs.com/exporters/blender_tips#smooth-shading). |
| UV Maps</br>![uv-maps](img/exporters/blender/meshes/uv-maps.png) | <ul><li>UVMap: coordinatesIndex</li><li>limited to 2 channels</li></ul> |
| Vertex Colors</br>![vertex-colors](img/exporters/blender/meshes/vertex-colors.png) | <ul><li>if multiples layers exist, they will be merge</li></ul> |
| Exporter panel</br>![exporter-meshes-options](img/exporters/blender/meshes/exporter-meshes-options.png) | <ul><li>Use Flat Shading: [flat shaded mesh](http://doc.babylonjs.com/classes/3.0/mesh#converttoflatshadedmesh-rarr-mesh-classes-3-0-mesh-), [see tip](http://doc.babylonjs.com/exporters/blender_tips#smooth-shading)</li></ul> |
  
### Materials

![Blender materials properties panel](img/exporters/blender/materials/materials-properties-panel.png)

#### General

* as you can notice in BJS mesh panel, materials will be suffixed by *.babylon* filename,
* other options can be found on this mesh panel, like max simultaneous lights, texture size for baking, etc,
* texture baking will be automatic when:
    * cycles render is the current render engine,
    * procedural textures are used.

#### Blender Render

| Blender | [BJS equivalent](http://doc.babylonjs.com/classes/3.0/standardmaterial) |
|---|---|
| ![header](img/exporters/blender/materials/header.png) | <ul><li>multi-materials are supported</li></ul> |
| Diffuse</br>![diffuse](img/exporters/blender/materials/diffuse.png) | <ul><li>color intensity is multiplied by intensity value</li></ul>|
| Specular</br>![specular](img/exporters/blender/materials/specular.png) | <ul><li>color intensity is multiplied by intensity value</li><li>Hardness: specularPower</li></ul> |
| Shading</br>![shading](img/exporters/blender/materials/shading.png) | <ul><li>Emit: diffuse color \* value</li><li>Ambient: diffuse color \* value</li></ul> |
| Transparency</br>![transparency](img/exporters/blender/materials/transparency.png) | <ul><li>when enabled, set alpha value under *Z Transparency*</li></ul> |

##### Specials

* you can temporary switch to Blender Game to gain access to some materials settings:

![blender-game](img/exporters/blender/materials/blender-game.png)

| Blender | [BJS equivalent](http://doc.babylonjs.com/classes/3.0/standardmaterial) |
|---|---|
| Game Settings</br>![game-settings](img/exporters/blender/materials/game-settings.png) | <ul><li>Backface culling: true by default</li><li>Face Orientation:<ul><li>Normal</li><li>Billboard</li></ul></li></ul> | 

#### Cycles Render

| Blender | BJS equivalent | 
|---|---|
| Node Editor</br>![cycles node](img/exporters/blender/materials/cycles-node01.png) | Exporter will do automatic baking, and try to detect some nodes:</br> <ul><li>Diffuse BSDF</li><li>Ambient Occlusion</li></ul> |

### Textures

![Blender textures properties panel](img/exporters/blender/textures/textures-properties-panel.png)

#### General

* Blender can handle packed images, even if their isn't source file on disk, but you have to unpack all before export,
* about automatic baking, see [Materials](http://doc.babylonjs.com/exporters/blender#materials).

#### Blender Render

| Blender | BJS equivalent | 
|---|---|
| ![header](img/exporters/blender/textures/header.png) | <ul><li>multiple textures can be assigned<ul><li>if two textures are assigned to the same Influence (see below), automatic baking will be used</li></ul></li><li>this name is only used in Blender</li></ul> |
| Texture Type</br>![type-image](img/exporters/blender/textures/type-image.png) | <ul><li>as seen above, this name is only used in Blender<li><li>texture type:<ul><li>for image file, choose *Image or Movie*</li><li>for procedural textures, choose any one but *voxel data*, *point density*, *ocean*</li></ul></li></ul> |
| Image</br>![image](img/exporters/blender/textures/image.png) | <ul><li>texture filename will be texture name in BJS</li></ul> | 
| Image Sampling</br>![image-sampling](img/exporters/blender/textures/image-sampling.png) | <ul><li>Use Alpha: hasAlpha</li></ul> | 
| Image Mapping</br>![image-mapping](img/exporters/blender/textures/image-mapping.png) | <ul><li>Extension: choosing *Clip* will set Wrap value to 0</li></ul> |
| Mapping</br>![mapping](img/exporters/blender/textures/mapping.png) | <ul><li>Coordinates: choosing between <ul><li>UV: [EXPLICIT_MODE](http://doc.babylonjs.com/classes/3.0/texture#static-explicit_mode-number)</li><li>Reflection: by setting *Projection* to *Sphere*, you gain access to spheremaps through [SPHERICAL_MODE](http://doc.babylonjs.com/classes/3.0/texture#static-spherical_mode-number)</li></ul></li><li>Offset X and Y: [uOffset](http://doc.babylonjs.com/classes/3.0/texture#uoffset-number) and [vOffset](http://doc.babylonjs.com/classes/3.0/texture#voffset-number)</li><li>Size X and Y: [uScale](http://doc.babylonjs.com/classes/3.0/texture#uscale-number) and [vScale](http://doc.babylonjs.com/classes/3.0/texture#vscale-number)</li></ul> |
| Influence</br>![influence](img/exporters/blender/textures/influence.png) | Be sure to enable only one influence by texture, to avoid automatic baking. |
