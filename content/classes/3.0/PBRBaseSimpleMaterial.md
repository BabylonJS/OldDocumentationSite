---
TAGS:
---
## Description

class [PBRBaseSimpleMaterial](/classes/3.0/PBRBaseSimpleMaterial) extends [PBRBaseMaterial](/classes/3.0/PBRBaseMaterial)



## Members

### maxSimultaneousLights : number

Number of Simultaneous lights allowed on the material.

### disableLighting : boolean

If sets to true, disables all the lights affecting the material.

### environmentTexture : [BaseTexture](/classes/3.0/BaseTexture)

Environment [Texture](/classes/3.0/Texture) used in the material (this is use for both reflection and environment lighting).

### invertNormalMapX : boolean

If sets to true, x component of normal map value will invert (x = 1.0 - x).

### invertNormalMapY : boolean

If sets to true, y component of normal map value will invert (y = 1.0 - y).

### normalTexture : [BaseTexture](/classes/3.0/BaseTexture)

Normal map used in the model.

### emissiveColor : [Color3](/classes/3.0/Color3)

Emissivie color used to self-illuminate the model.

### emissiveTexture : [BaseTexture](/classes/3.0/BaseTexture)

Emissivie texture used to self-illuminate the model.

### occlusionStrength : number

Occlusion Channel Strenght.

### occlusionTexture : [BaseTexture](/classes/3.0/BaseTexture)

Occlusion [Texture](/classes/3.0/Texture) of the material (adding extra occlusion effects).

### alphaCutOff : number

Defines the alpha limits in alpha test mode.

