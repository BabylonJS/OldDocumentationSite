---
TAGS:
---
## Description

class [HDRTools](/classes/2.4/HDRTools)

This groups tools to convert HDR texture to native colors array.

## Methods

### static RGBE_ReadHeaderundefined &rarr; HDRInfo

Reads header information from an RGBE texture stored in a native array.

More information on this format are available here:

https://en.wikipedia.org/wiki/RGBE_image_format

         * @param uint8array The binary file stored in  native array.

@return The header information.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static GetCubeMapTextureDataundefined &rarr; CubeMapInfo

Returns the cubemap information (each faces texture data) extracted from an RGBE texture.

This RGBE texture needs to store the information as a panorama.

         * More information on this format are available here:

https://en.wikipedia.org/wiki/RGBE_image_format

         * @param buffer The binary file stored in an array buffer.

@return The Cube Map information.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static RGBE_ReadPixelsundefined &rarr; Float32Array

Returns the pixels data extracted from an RGBE texture.

This pixels will be stored left to right up to down in the R G B order in one array.

         * More information on this format are available here:

https://en.wikipedia.org/wiki/RGBE_image_format

         * @param uint8array The binary file stored in an array buffer.

@return The pixels data in RGB right to left up to down order.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
