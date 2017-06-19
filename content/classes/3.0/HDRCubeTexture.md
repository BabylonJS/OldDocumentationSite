---
TAGS:
---
## Description

class [HDRCubeTexture](/classes/3.0/HDRCubeTexture) extends [BaseTexture](/classes/3.0/BaseTexture)

This represents a texture coming from an HDR input.

The only supported format is currently panorama picture stored in RGBE format.

Example of such files can be found on HDRLib: http://hdrlib.com/

## Members

### url : string

The texture URL.

### coordinatesMode : number

The texture coordinates mode. As this texture is stored in a cube format, please modify carefully.

### sphericalPolynomial : [SphericalPolynomial](/classes/3.0/SphericalPolynomial)

The spherical polynomial data extracted from the texture.

### isPMREM : boolean

Specifies wether the texture has been generated through the [PMREMGenerator](/classes/3.0/PMREMGenerator) tool.

This is usefull at run time to apply the good shader.

