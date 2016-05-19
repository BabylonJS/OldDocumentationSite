---
ID_PAGE: 25217
PG_TITLE: StandardMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [StandardMaterial](/classes/2.4/StandardMaterial) extends [Material](/classes/2.4/Material)



## Constructor

## new [StandardMaterial](/classes/2.4/StandardMaterial)(name, scene)

Create a new [StandardMaterial](/classes/2.4/StandardMaterial).
Everything to know about materials can be found here : http://doc.babylonjs.com/tutorials/Materials
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | scene | [Scene](/classes/2.4/Scene) |    
## Members

### diffuseTexture : [BaseTexture](/classes/2.4/BaseTexture)

The diffuse texture

### ambientTexture : [BaseTexture](/classes/2.4/BaseTexture)

The ambient texture

### opacityTexture : [BaseTexture](/classes/2.4/BaseTexture)

The opacity texture

### reflectionTexture : [BaseTexture](/classes/2.4/BaseTexture)

The reflection texture

### emissiveTexture : [BaseTexture](/classes/2.4/BaseTexture)

The emissive texture

### specularTexture : [BaseTexture](/classes/2.4/BaseTexture)

The specular texture

### bumpTexture : [BaseTexture](/classes/2.4/BaseTexture)

The bump texture

### lightmapTexture : [BaseTexture](/classes/2.4/BaseTexture)



### refractionTexture : [BaseTexture](/classes/2.4/BaseTexture)



### ambientColor : [Color3](/classes/2.4/Color3)

The ambient color

### diffuseColor : [Color3](/classes/2.4/Color3)

The diffuse color

### specularColor : [Color3](/classes/2.4/Color3)

The specular color

### emissiveColor : [Color3](/classes/2.4/Color3)

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



### diffuseFresnelParameters : [FresnelParameters](/classes/2.4/FresnelParameters)

The diffuse Fresnel parameters

### opacityFresnelParameters : [FresnelParameters](/classes/2.4/FresnelParameters)

The opacity Fresnel parameters

### reflectionFresnelParameters : [FresnelParameters](/classes/2.4/FresnelParameters)

The reflection Fresnel parameters

### refractionFresnelParameters : [FresnelParameters](/classes/2.4/FresnelParameters)



### emissiveFresnelParameters : [FresnelParameters](/classes/2.4/FresnelParameters)

The emissive Fresnel parameters

### useGlossinessFromSpecularMapAlpha : boolean



### maxSimultaneousLights : number



### useOpenGLNormalMap : boolean

If sets to true, normal map will be considered following OpenGL convention.

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



## Methods

### needAlphaBlendingundefined &rarr; boolean


### needAlphaTestingundefined &rarr; boolean


### getAlphaTestTextureundefined &rarr; [BaseTexture](/classes/2.4/BaseTexture)


### isReadyundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unbindundefined &rarr; void


### bindOnlyWorldMatrixundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### bindundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAnimatablesundefined &rarr; IAnimatable[]


### disposeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### cloneundefined &rarr; [StandardMaterial](/classes/2.4/StandardMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### serializeundefined &rarr; any


### static Parseundefined &rarr; [StandardMaterial](/classes/2.4/StandardMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
