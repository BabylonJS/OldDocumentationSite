---
TAGS:
---
## Description

class [CubeMapToSphericalPolynomialTools](/classes/2.5/CubeMapToSphericalPolynomialTools)

Helper class dealing with the extraction of spherical polynomial dataArray

from a cube map.

## Methods

### static ConvertCubeMapToSphericalPolynomial(cubeInfo) &rarr; [SphericalPolynomial](/classes/2.5/SphericalPolynomial)

Converts a cubemap to the according Spherical Polynomial data.

This extracts the first 3 orders only as they are the only one used in the lighting.

         * @param cubeInfo The Cube map to extract the information from.

@return The Spherical Polynomial data.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | cubeInfo | CubeMapInfo |  The Cube map to extract the information from.  The Cube map to extract the information from.

