---
TAGS:
---
## Description

class [HDRCubeTexture](/classes/3.1/HDRCubeTexture) extends [BaseTexture](/classes/3.1/BaseTexture)

This represents a texture coming from an HDR input.

The only supported format is currently panorama picture stored in RGBE format.

Example of such files can be found on HDRLib: http://hdrlib.com/

## Constructor

## new [HDRCubeTexture](/classes/3.1/HDRCubeTexture)(url, scene, size, noMipmap, generateHarmonics, useInGammaSpace, usePMREMGenerator, onLoad, onError)

Instantiates an HDRTexture from the following parameters.

         * @param url The location of the HDR raw data (Panorama stored in RGBE format)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |  The location of the HDR raw data (Panorama stored in RGBE format)
 | scene | [Scene](/classes/3.1/Scene) |  The scene the texture will be used in
optional | size | number |  The cubemap desired size (the more it increases the longer the generation will be) If the size is omitted this implies you are using a preprocessed cubemap.
optional | noMipmap | boolean |  Forces to not generate the mipmap if true
optional | generateHarmonics | boolean |  Specifies wether you want to extract the polynomial harmonics during the generation process
optional | useInGammaSpace | boolean |  Specifies if the texture will be use in gamma or linear space (the PBR material requires those texture in linear space, but the standard material would require them in Gamma space)
optional | usePMREMGenerator | boolean |  Specifies wether or not to generate the CubeMap through CubeMapGen to avoid seams issue at run time.
optional | onLoad | Nullable&lt;() =&gt; void&gt; | 
## Members

### url : string

The texture URL.
### coordinatesMode : number

The texture coordinates mode. As this texture is stored in a cube format, please modify carefully.
### isPMREM : boolean

Specifies wether the texture has been generated through the PMREMGenerator tool.

This is usefull at run time to apply the good shader.
### isBlocking : boolean

Gets wether or not the texture is blocking during loading.

Sets wether or not the texture is blocking during loading.
### void : undefined


### onError : () =&gt; void


## Methods

### clone() &rarr; [HDRCubeTexture](/classes/3.1/HDRCubeTexture)


### delayLoad() &rarr; void


### getReflectionTextureMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### setReflectionTextureMatrix(value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Matrix](/classes/3.1/Matrix) | 

### static Parse(parsedTexture, scene, rootUrl) &rarr; Nullable&lt;[HDRCubeTexture](/classes/3.1/HDRCubeTexture)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedTexture | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
### serialize() &rarr; any


### static generateBabylonHDROnDisk(url, size, onError) &rarr; (url, size, onError)

Saves as a file the data contained in the texture in a binary format.

This can be used to prevent the long loading tie associated with creating the seamless texture as well

as the spherical used in the lighting.

@return The packed binary data.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |  The HDR file url.
 | size | number |  The size of the texture data to generate (one of the cubemap face desired width).
optional | onError | Nullable&lt;() =&gt; () =&gt; void&gt; |  Method called if any error happens during download.
### static generateBabylonHDR(url, size, callback) &rarr; (url, size, callback)

Serializes the data contained in the texture in a binary format.

This can be used to prevent the long loading tie associated with creating the seamless texture as well

as the spherical used in the lighting.

@return The packed binary data.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |  The HDR file url.
 | size | number |  The size of the texture data to generate (one of the cubemap face desired width).
 | callback |  | 
### Nullable() &rarr; ()


