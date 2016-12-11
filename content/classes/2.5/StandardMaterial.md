---
ID_PAGE: 25217
PG_TITLE: StandardMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [StandardMaterial](/classes/2.5/StandardMaterial) extends [Material](/classes/2.5/Material)



## Constructor

## new [StandardMaterial](/classes/2.5/StandardMaterial)(name, scene)

Create a new [StandardMaterial](/classes/2.5/StandardMaterial).
Everything to know about materials can be found here : http://doc.babylonjs.com/tutorials/Materials
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     
 | scene | [Scene](/classes/2.5/Scene) |     
## Members

### diffuseTexture : [BaseTexture](/classes/2.5/BaseTexture)

The diffuse texture

### ambientTexture : [BaseTexture](/classes/2.5/BaseTexture)

The ambient texture

### opacityTexture : [BaseTexture](/classes/2.5/BaseTexture)

The opacity texture

### reflectionTexture : [BaseTexture](/classes/2.5/BaseTexture)

The reflection texture

### emissiveTexture : [BaseTexture](/classes/2.5/BaseTexture)

The emissive texture

### specularTexture : [BaseTexture](/classes/2.5/BaseTexture)

The specular texture

### bumpTexture : [BaseTexture](/classes/2.5/BaseTexture)

The bump texture

### lightmapTexture : [BaseTexture](/classes/2.5/BaseTexture)



### refractionTexture : [BaseTexture](/classes/2.5/BaseTexture)



### ambientColor : [Color3](/classes/2.5/Color3)

The ambient color

### diffuseColor : [Color3](/classes/2.5/Color3)

The diffuse color

### specularColor : [Color3](/classes/2.5/Color3)

The specular color

### emissiveColor : [Color3](/classes/2.5/Color3)

The emissive color

### specularPower : number

The specular power

### useAlphaFromDiffuseTexture : boolean

True to use alpha from diffuse texture

Default value : false

### useEmissiveAsIllumination : boolean



### linkEmissiveWithDiffuse : boolean



### useReflectionFresnelFromSpecular : boolean



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



### diffuseFresnelParameters : [FresnelParameters](/classes/2.5/FresnelParameters)

The diffuse Fresnel parameters

### opacityFresnelParameters : [FresnelParameters](/classes/2.5/FresnelParameters)

The opacity Fresnel parameters

### reflectionFresnelParameters : [FresnelParameters](/classes/2.5/FresnelParameters)

The reflection Fresnel parameters

### refractionFresnelParameters : [FresnelParameters](/classes/2.5/FresnelParameters)



### emissiveFresnelParameters : [FresnelParameters](/classes/2.5/FresnelParameters)

The emissive Fresnel parameters

### useGlossinessFromSpecularMapAlpha : boolean



### maxSimultaneousLights : number



### invertNormalMapX : boolean

If sets to true, x component of normal map value will invert (x = 1.0 - x).

### invertNormalMapY : boolean

If sets to true, y component of normal map value will invert (y = 1.0 - y).

### cameraColorGradingTexture : [BaseTexture](/classes/2.5/BaseTexture)

Color Grading 2D Lookup [Texture](/classes/2.5/Texture).

This allows special effects like sepia, black and white to sixties rendering style.

### cameraColorCurves : [ColorCurves](/classes/2.5/ColorCurves)

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).

They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.

These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;

corresponding to low luminance, medium luminance, and high luminance areas respectively.

### useLogarithmicDepth : boolean



### static DiffuseTextureEnabled : boolean

Function to know if diffuse texture is enabled

@return boolean True if diffuse texture is enabled ; False if not

### static AmbientTextureEnabled : boolean

Function to know if ambient texture is enabled

@return boolean True if ambient texture is enabled ; False if not

### static OpacityTextureEnabled : boolean

Function to know if opacity texture is enabled

@return boolean True if opacity texture is enabled ; False if not

### static ReflectionTextureEnabled : boolean

Function to know if reflection texture is enabled

@return boolean True if reflection texture is enabled ; False if not

### static EmissiveTextureEnabled : boolean

Function to know if emissive texture is enabled

@return boolean True if emissive texture is enabled ; False if not

### static SpecularTextureEnabled : boolean

Function to know if specular texture is enabled

@return boolean True if specular texture is enabled ; False if not

### static BumpTextureEnabled : boolean

Function to know if bump texture is enabled

@return boolean True if bump texture is enabled ; False if not

### static FresnelEnabled : boolean



### static LightmapTextureEnabled : boolean



### static RefractionTextureEnabled : boolean



### static ColorGradingTextureEnabled : boolean



## Methods

### needAlphaBlending() &rarr; boolean

Function to know if standard material need alpha blending
@return boolean True if standard material need alpha blending ; False if not
### needAlphaTesting() &rarr; boolean

Function to know if standard material need alpha testing
@return boolean True if standard material need alpha testing ; False if not
### getAlphaTestTexture() &rarr; [BaseTexture](/classes/2.5/BaseTexture)

Function to get the alpha test texture
@return [BaseTexture](/classes/2.5/BaseTexture) The alpha test texture
### isReady(mesh, useInstances) &rarr; boolean

Function to know if standard material is ready
@return boolean True if is ready ; False if not

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) |     
optional | useInstances | boolean |     True to use instances
### unbind() &rarr; void

Unbind the standard material
### bindOnlyWorldMatrix(world) &rarr; void

Bind only the world matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.5/Matrix) |     

### bind(world, mesh) &rarr; void

Bind the standard material

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.5/Matrix) |     
optional | mesh | [Mesh](/classes/2.5/Mesh) |     
### getAnimatables() &rarr; IAnimatable[]

Get the animatables
@reutnr IAnimatables List of animatables
### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean |     True to force the destroy
optional | forceDisposeTextures | boolean |  
### clone(name) &rarr; [StandardMaterial](/classes/2.5/StandardMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     

### serialize() &rarr; any


### static Parse(source, scene, rootUrl) &rarr; [StandardMaterial](/classes/2.5/StandardMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any |   
 | scene | [Scene](/classes/2.5/Scene) |     
 | rootUrl | string |   
