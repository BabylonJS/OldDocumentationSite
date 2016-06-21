---
TAGS:
---
## Description

class [CubeMapToSphericalPolynomialTools](/classes/2.4/CubeMapToSphericalPolynomialTools)

Helper class dealing with the extraction of spherical polynomial dataArray

from a cube map.

## Methods

### static ConvertCubeMapToSphericalPolynomial(cubeInfo) &rarr; [SphericalPolynomial](/classes/2.4/SphericalPolynomial)

Converts a cubemap to the according Spherical Polynomial data.

This extracts the first 3 orders only as they are the only one used in the lighting.



@return The Spherical Polynomial data.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | cubeInfo | CubeMapInfo |  The Cube map to extract the information from.

