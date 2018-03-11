---
TAGS:
---
## Description

class [PBRMetallicRoughnessMaterial](/classes/3.1/PBRMetallicRoughnessMaterial) extends Internals.[PBRBaseSimpleMaterial](/classes/3.1/PBRBaseSimpleMaterial)

The PBR material of BJS following the metal roughness convention.

This fits to the PBR convention in the GLTF definition:

https://github.com/KhronosGroup/glTF/tree/2.0/specification/2.0

## Constructor

## new [PBRMetallicRoughnessMaterial](/classes/3.1/PBRMetallicRoughnessMaterial)(name, scene)

Instantiates a new PBRMetalRoughnessMaterial instance.

         * @param name The material name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The material name
 | scene | [Scene](/classes/3.1/Scene) |  The scene the material will be use in.
## Members

### baseColor : [Color3](/classes/3.1/Color3)

The base color has two different interpretations depending on the value of metalness.

When the material is a metal, the base color is the specific measured reflectance value

at normal incidence (F0). For a non-metal the base color represents the reflected diffuse color

of the material.
### baseTexture : [BaseTexture](/classes/3.1/BaseTexture)

Base texture of the metallic workflow. It contains both the baseColor information in RGB as

well as opacity information in the alpha channel.
### metallic : number

Specifies the metallic scalar value of the material.

Can also be used to scale the metalness values of the metallic texture.
### roughness : number

Specifies the roughness scalar value of the material.

Can also be used to scale the roughness values of the metallic texture.
### metallicRoughnessTexture : [BaseTexture](/classes/3.1/BaseTexture)

[Texture](/classes/3.1/Texture) containing both the metallic value in the B channel and the

roughness value in the G channel to keep better precision.
## Methods

### getClassName() &rarr; string

Return the currrent class name of the material.
### getActiveTextures() &rarr; [BaseTexture](/classes/3.1/BaseTexture)[]

Return the active textures of the material.
### hasTexture(texture) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [BaseTexture](/classes/3.1/BaseTexture) | 

### clone(name) &rarr; [PBRMetallicRoughnessMaterial](/classes/3.1/PBRMetallicRoughnessMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### serialize() &rarr; any

Serialize the material to a parsable JSON object.
### static Parse(source, scene, rootUrl) &rarr; [PBRMetallicRoughnessMaterial](/classes/3.1/PBRMetallicRoughnessMaterial)

Parses a JSON object correponding to the serialize function.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
