---
TAGS:
---
## Description

class [PBRSpecularGlossinessMaterial](/classes/3.1/PBRSpecularGlossinessMaterial) extends Internals.[PBRBaseSimpleMaterial](/classes/3.1/PBRBaseSimpleMaterial)

The PBR material of BJS following the specular glossiness convention.

This fits to the PBR convention in the GLTF definition:

https://github.com/KhronosGroup/glTF/tree/2.0/extensions/Khronos/KHR_materials_pbrSpecularGlossiness

## Constructor

## new [PBRSpecularGlossinessMaterial](/classes/3.1/PBRSpecularGlossinessMaterial)(name, scene)

Instantiates a new [PBRSpecularGlossinessMaterial](/classes/3.1/PBRSpecularGlossinessMaterial) instance.

         * @param name The material name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The material name
 | scene | [Scene](/classes/3.1/Scene) |  The scene the material will be use in.
## Members

### diffuseColor : [Color3](/classes/3.1/Color3)

Specifies the diffuse color of the material.

### diffuseTexture : [BaseTexture](/classes/3.1/BaseTexture)

Specifies the diffuse texture of the material. This can also contains the opcity value in its alpha

channel.

### specularColor : [Color3](/classes/3.1/Color3)

Specifies the specular color of the material. This indicates how reflective is the material (none to mirror).

### glossiness : number

Specifies the glossiness of the material. This indicates "how sharp is the reflection".

### specularGlossinessTexture : [BaseTexture](/classes/3.1/BaseTexture)

Specifies both the specular color RGB and the glossiness A of the material per pixels.

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

### clone(name) &rarr; [PBRSpecularGlossinessMaterial](/classes/3.1/PBRSpecularGlossinessMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### serialize() &rarr; any

Serialize the material to a parsable JSON object.
### static Parse(source, scene, rootUrl) &rarr; [PBRSpecularGlossinessMaterial](/classes/3.1/PBRSpecularGlossinessMaterial)

Parses a JSON object correponding to the serialize function.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
