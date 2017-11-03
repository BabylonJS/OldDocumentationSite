---
TAGS:
---
## Description

class [PBRBaseSimpleMaterial](/classes/3.1/PBRBaseSimpleMaterial) extends [PBRBaseMaterial](/classes/3.1/PBRBaseMaterial)



## Constructor

## new [PBRBaseSimpleMaterial](/classes/3.1/PBRBaseSimpleMaterial)(name, scene)

Instantiates a new [PBRMaterial](/classes/3.1/PBRMaterial) instance.

         * @param name The material name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The material name
 | scene | [Scene](/classes/3.1/Scene) |  The scene the material will be use in.
## Members

### maxSimultaneousLights : number

Number of Simultaneous lights allowed on the material.

### disableLighting : boolean

If sets to true, disables all the lights affecting the material.

### environmentTexture : [BaseTexture](/classes/3.1/BaseTexture)

Environment [Texture](/classes/3.1/Texture) used in the material (this is use for both reflection and environment lighting).

### invertNormalMapX : boolean

If sets to true, x component of normal map value will invert (x = 1.0 - x).

### invertNormalMapY : boolean

If sets to true, y component of normal map value will invert (y = 1.0 - y).

### normalTexture : [BaseTexture](/classes/3.1/BaseTexture)

Normal map used in the model.

### emissiveColor : [Color3](/classes/3.1/Color3)

Emissivie color used to self-illuminate the model.

### emissiveTexture : [BaseTexture](/classes/3.1/BaseTexture)

Emissivie texture used to self-illuminate the model.

### occlusionStrength : number

Occlusion Channel Strenght.

### occlusionTexture : [BaseTexture](/classes/3.1/BaseTexture)

Occlusion [Texture](/classes/3.1/Texture) of the material (adding extra occlusion effects).

### alphaCutOff : number

Defines the alpha limits in alpha test mode.

### transparencyMode : number

Gets the current transparency mode.

Sets the transparency mode of the material.

### doubleSided : boolean

Gets the current double sided mode.

If sets to true and backfaceCulling is false, normals will be flipped on the backside.

## Methods

### needAlphaBlending() &rarr; boolean

Specifies wether or not the meshes using this material should be rendered in alpha blend mode.
### needAlphaTesting() &rarr; boolean

Specifies wether or not the meshes using this material should be rendered in alpha test mode.
### getActiveTextures() &rarr; [BaseTexture](/classes/3.1/BaseTexture)[]

Return the active textures of the material.
### getClassName() &rarr; string


