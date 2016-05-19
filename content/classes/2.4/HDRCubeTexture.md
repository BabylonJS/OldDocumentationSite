---
TAGS:
---
## Description

class [HDRCubeTexture](/classes/2.4/HDRCubeTexture) extends [BaseTexture](/classes/2.4/BaseTexture)

This represents a texture coming from an HDR input.

The only supported format is currently panorama picture stored in RGBE format.

Example of such files can be found on HDRLib: http://hdrlib.com/

## Constructor

## new [HDRCubeTexture](/classes/2.4/HDRCubeTexture)(url, scene, size, noMipmap, generateHarmonics, useInGammaSpace, usePMREMGenerator)

Instantiates an HDRTexture from the following parameters.

         * @param url The location of the HDR raw data (Panorama stored in RGBE format)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |  The location of the HDR raw data (Panorama stored in RGBE format)
 | scene | [Scene](/classes/2.4/Scene) |  The scene the texture will be used in
optional | size | number |  The cubemap desired size (the more it increases the longer the generation will be) If the size is omitted this implies you are using a preprocessed cubemap.
optional | noMipmap | boolean |  Forces to not generate the mipmap if true
optional | generateHarmonics | boolean |  Specifies wether you want to extract the polynomial harmonics during the generation process
optional | useInGammaSpace | boolean |  Specifies if the texture will be use in gamma or linear space (the PBR material requires those texture in linear space, but the standard material would require them in Gamma space)
## Members

### url : string

The texture URL.

### coordinatesMode : number

The texture coordinates mode. As this texture is stored in a cube format, please modify carefully.

### sphericalPolynomial : [SphericalPolynomial](/classes/2.4/SphericalPolynomial)

The spherical polynomial data extracted from the texture.

### isPMREM : boolean

Specifies wether the texture has been generated through the [PMREMGenerator](/classes/2.4/PMREMGenerator) tool.

This is usefull at run time to apply the good shader.

## Methods

### cloneundefined &rarr; [HDRCubeTexture](/classes/2.4/HDRCubeTexture)


### delayLoadundefined &rarr; void


### getReflectionTextureMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### static Parseundefined &rarr; [HDRCubeTexture](/classes/2.4/HDRCubeTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### serializeundefined &rarr; any


### static generateBabylonHDROnDiskundefined &rarr; void

Saves as a file the data contained in the texture in a binary format.

This can be used to prevent the long loading tie associated with creating the seamless texture as well

as the spherical used in the lighting.

@return The packed binary data.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static generateBabylonHDRundefined &rarr; void

Serializes the data contained in the texture in a binary format.

This can be used to prevent the long loading tie associated with creating the seamless texture as well

as the spherical used in the lighting.

@return The packed binary data.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
