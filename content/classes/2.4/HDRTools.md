---
TAGS:
---
## Description

class [HDRTools](/classes/2.4/HDRTools)

This groups tools to convert HDR texture to native colors array.

## Methods

### static RGBE_ReadHeader(uint8array) &rarr; HDRInfo

Reads header information from an RGBE texture stored in a native array.

More information on this format are available here:

https://en.wikipedia.org/wiki/RGBE_image_format



@return The header information.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uint8array | Uint8Array |  The binary file stored in  native array.

### static GetCubeMapTextureData(buffer, size) &rarr; CubeMapInfo

Returns the cubemap information (each faces texture data) extracted from an RGBE texture.

This RGBE texture needs to store the information as a panorama.



More information on this format are available here:

https://en.wikipedia.org/wiki/RGBE_image_format



@return The Cube Map information.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | ArrayBuffer |  The binary file stored in an array buffer.
 | size | number |  The expected size of the extracted cubemap.
### static RGBE_ReadPixels(uint8array, hdrInfo) &rarr; Float32Array

Returns the pixels data extracted from an RGBE texture.

This pixels will be stored left to right up to down in the R G B order in one array.



More information on this format are available here:

https://en.wikipedia.org/wiki/RGBE_image_format



@return The pixels data in RGB right to left up to down order.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uint8array | Uint8Array |  The binary file stored in an array buffer.
 | hdrInfo | HDRInfo |  The header information of the file.
