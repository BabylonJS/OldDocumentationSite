---
ID_PAGE: 25217
PG_TITLE: StandardMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [StandardMaterial](/classes/3.0/StandardMaterial) extends [PushMaterial](/classes/3.0/PushMaterial)



## Members

### diffuseTexture : [BaseTexture](/classes/3.0/BaseTexture)

The diffuse texture

### ambientTexture : [BaseTexture](/classes/3.0/BaseTexture)

The ambient texture

### opacityTexture : [BaseTexture](/classes/3.0/BaseTexture)

The opacity texture

### reflectionTexture : [BaseTexture](/classes/3.0/BaseTexture)

The reflection texture

### emissiveTexture : [BaseTexture](/classes/3.0/BaseTexture)

The emissive texture

### specularTexture : [BaseTexture](/classes/3.0/BaseTexture)

The specular texture

### bumpTexture : [BaseTexture](/classes/3.0/BaseTexture)

The bump texture

### lightmapTexture : [BaseTexture](/classes/3.0/BaseTexture)



### refractionTexture : [BaseTexture](/classes/3.0/BaseTexture)



### ambientColor : [Color3](/classes/3.0/Color3)

The ambient color

### diffuseColor : [Color3](/classes/3.0/Color3)

The diffuse color

### specularColor : [Color3](/classes/3.0/Color3)

The specular color

### emissiveColor : [Color3](/classes/3.0/Color3)

The emissive color

### specularPower : number

The specular power

### useAlphaFromDiffuseTexture : boolean

True to use alpha from diffuse texture

Default value : false

### useEmissiveAsIllumination : boolean



### linkEmissiveWithDiffuse : boolean



### useSpecularOverAlpha : boolean

True to use specular over alpha

### useReflectionOverAlpha : boolean



### disableLighting : boolean



### useParallax : boolean



### useParallaxOcclusion : boolean



### parallaxScaleBias : number



### roughness : number



### indexOfRefraction : number



### invertRefractionY : boolean



### useLightmapAsShadowmap : boolean



### diffuseFresnelParameters : [FresnelParameters](/classes/3.0/FresnelParameters)

The diffuse Fresnel parameters

### opacityFresnelParameters : [FresnelParameters](/classes/3.0/FresnelParameters)

The opacity Fresnel parameters

### reflectionFresnelParameters : [FresnelParameters](/classes/3.0/FresnelParameters)

The reflection Fresnel parameters

### refractionFresnelParameters : [FresnelParameters](/classes/3.0/FresnelParameters)



### emissiveFresnelParameters : [FresnelParameters](/classes/3.0/FresnelParameters)

The emissive Fresnel parameters

### useReflectionFresnelFromSpecular : boolean



### useGlossinessFromSpecularMapAlpha : boolean



### maxSimultaneousLights : number



### invertNormalMapX : boolean

If sets to true, x component of normal map value will invert (x = 1.0 - x).

### invertNormalMapY : boolean

If sets to true, y component of normal map value will invert (y = 1.0 - y).

### twoSidedLighting : boolean



### cameraColorGradingTexture : [BaseTexture](/classes/3.0/BaseTexture)

Color Grading 2D Lookup [Texture](/classes/3.0/Texture).

This allows special effects like sepia, black and white to sixties rendering style.

### cameraColorCurves : [ColorCurves](/classes/3.0/ColorCurves)

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).

They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.

These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;

corresponding to low luminance, medium luminance, and high luminance areas respectively.

### customShaderNameResolve : (shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: [StandardMaterialDefines](/classes/3.0/StandardMaterialDefines)) =&gt; string



