---
ID_PAGE: 25217
PG_TITLE: StandardMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [StandardMaterial](/classes/3.0/StandardMaterial) extends [PushMaterial](/classes/3.0/PushMaterial)



## Constructor

## new [StandardMaterial](/classes/3.0/StandardMaterial)(name, scene)

Create a new [StandardMaterial](/classes/3.0/StandardMaterial).
Everything to know about materials can be found here : http://doc.babylonjs.com/How_To/Materials
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      
 | scene | [Scene](/classes/3.0/Scene) |      
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

### static LightmapTextureEnabled : boolean



### static RefractionTextureEnabled : boolean



### static ColorGradingTextureEnabled : boolean



### static FresnelEnabled : boolean



## Methods

### getClassName() &rarr; string


### needAlphaBlending() &rarr; boolean

Function to know if standard material need alpha blending
@return boolean True if standard material need alpha blending ; False if not
### needAlphaTesting() &rarr; boolean

Function to know if standard material need alpha testing
@return boolean True if standard material need alpha testing ; False if not
### getAlphaTestTexture() &rarr; [BaseTexture](/classes/3.0/BaseTexture)

Function to get the alpha test texture
@return [BaseTexture](/classes/3.0/BaseTexture) The alpha test texture
### isReadyForSubMesh(mesh, subMesh, useInstances) &rarr; boolean

Child classes can use it to update shaders

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |      
 | subMesh | [SubMesh](/classes/3.0/SubMesh) | 
optional | useInstances | boolean |      True to use instances
### buildUniformLayout() &rarr; void


### unbind() &rarr; void

Unbind the standard material
### bindForSubMesh(world, mesh, subMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.0/Matrix) |      
 | mesh | [Mesh](/classes/3.0/Mesh) |      
 | subMesh | [SubMesh](/classes/3.0/SubMesh) | 
### getAnimatables() &rarr; IAnimatable[]

Get the animatables
@reutnr IAnimatables List of animatables
### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean |      True to force the destroy
optional | forceDisposeTextures | boolean |   
### clone(name) &rarr; [StandardMaterial](/classes/3.0/StandardMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      

### serialize() &rarr; any


### static Parse(source, scene, rootUrl) &rarr; [StandardMaterial](/classes/3.0/StandardMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any |    
 | scene | [Scene](/classes/3.0/Scene) |      
 | rootUrl | string |    
