---
ID_PAGE: 25140
PG_TITLE: Light
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [Light](/classes/3.0/Light) extends [Node](/classes/3.0/Node)

Lights are used to produce the diffuse and specular color received by each pixel.

This color is then used by materials to determine the final color of every pixel.

Babylon.js allows you to create and register as many lights as you want but beware because the [StandardMaterial](/classes/3.0/StandardMaterial) can handle only 4 simultaneous lights (the first four enabled lights of the lights list)

A tutorial about lights can be found here : https://doc.babylonjs.com/tutorials/ligths

## Constructor

## new [Light](/classes/3.0/Light)(name, scene)

Creates a [Light](/classes/3.0/Light) object in the scene.

Documentation : http://doc.babylonjs.com/tutorials/lights

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The name of the object
 | scene | [Scene](/classes/3.0/Scene) |      The scene to append the light
## Members

### static LIGHTMAP_DEFAULT : number

If every light affecting the material is in this lightmapMode,

material.lightmapTexture adds or multiplies

(depends on material.useLightmapAsShadowmap)

after every other light calculations.

### static LIGHTMAP_SPECULAR : number

material.lightmapTexture as only diffuse lighting from this light

adds pnly specular lighting from this light

adds dynamic shadows

### static LIGHTMAP_SHADOWSONLY : number

material.lightmapTexture as only lighting

no light calculation from this light

only adds dynamic shadows from this light

### static INTENSITYMODE_AUTOMATIC : number

Each light type uses the default quantity according to its type:

     point/spot lights use luminous intensity

     directional lights use illuminance

### static INTENSITYMODE_LUMINOUSPOWER : number

lumen (lm)

### static INTENSITYMODE_LUMINOUSINTENSITY : number

candela (lm/sr)

### static INTENSITYMODE_ILLUMINANCE : number

lux (lm/m^2)

### static INTENSITYMODE_LUMINANCE : number

nit (cd/m^2)

### static LIGHTTYPEID_POINTLIGHT : number

[Light](/classes/3.0/Light) type const id of the point light.

### static LIGHTTYPEID_DIRECTIONALLIGHT : number

[Light](/classes/3.0/Light) type const id of the directional light.

### static LIGHTTYPEID_SPOTLIGHT : number

[Light](/classes/3.0/Light) type const id of the spot light.

### static LIGHTTYPEID_HEMISPHERICLIGHT : number

[Light](/classes/3.0/Light) type const id of the hemispheric light.

### diffuse : [Color3](/classes/3.0/Color3)

The color of the diffuse reflection of the light

### specular : [Color3](/classes/3.0/Color3)

The color of the specular reflection of the light

### intensity : number

Controls the global intensity of the light

### range : number



### intensityMode : number

Gets the photometric scale used to interpret the intensity.

This is only relevant with PBR Materials where the light intensity can be defined in a physical way.

Sets the photometric scale used to interpret the intensity.

This is only relevant with PBR Materials where the light intensity can be defined in a physical way.

### radius : number

Gets the light radius used by PBR Materials to simulate soft area lights.

sets the light radius used by PBR Materials to simulate soft area lights.

### renderPriority : number



### shadowEnabled : boolean

Defines wether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching

the current shadow generator.

### includedOnlyMeshes : [AbstractMesh](/classes/3.0/AbstractMesh)[]

Holds the meshes affected by this light

### excludedMeshes : [AbstractMesh](/classes/3.0/AbstractMesh)[]

Holds the meshes non affected by this light

### excludeWithLayerMask : number



### includeOnlyWithLayerMask : number



### lightmapMode : number



