---
TAGS:
---
## Description

class [KhronosTextureContainer](/classes/3.1/KhronosTextureContainer)

for description see https://www.khronos.org/opengles/sdk/tools/KTX/

for file layout see https://www.khronos.org/opengles/sdk/tools/KTX/file_format_spec/

## Constructor

## new [KhronosTextureContainer](/classes/3.1/KhronosTextureContainer)(arrayBuffer, facesExpected, threeDExpected, textureArrayExpected)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | arrayBuffer | any | 
 | facesExpected | number | 
optional | threeDExpected | boolean | 
## Members

### arrayBuffer : any



### static HEADER_LEN : number



### static COMPRESSED_2D : number



### static COMPRESSED_3D : number



### static TEX_2D : number



### static TEX_3D : number



### glType : number



### glTypeSize : number



### glFormat : number



### glInternalFormat : number



### glBaseInternalFormat : number



### pixelWidth : number



### pixelHeight : number



### pixelDepth : number



### numberOfArrayElements : number



### numberOfFaces : number



### numberOfMipmapLevels : number



### bytesOfKeyValueData : number



### loadType : number



## Methods

### switchEndainness(val) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | val | number | 

### uploadLevels(gl, loadMipmaps) &rarr; void

It is assumed that the texture has already been created & is currently bound

#### Parameters
 | Name | Type | Description
---|---|---|---
 | gl | WebGLRenderingContext | 
 | loadMipmaps | boolean | 
