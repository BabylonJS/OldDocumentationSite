---
ID_PAGE: 25217
PG_TITLE: StandardMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
##Description

class [StandardMaterial](/classes/2.2/StandardMaterial) extends [Material](/classes/2.2/Material)



##Constructor

##new [StandardMaterial](/classes/2.2/StandardMaterial)(name, scene)

Create a new [StandardMaterial](/classes/2.2/StandardMaterial).
Everything to know about materials can be found here : http://doc.babylonjs.com/tutorials/Materials
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  
 | scene | [Scene](/classes/2.2/Scene) |  
##Members

###diffuseTexture : [BaseTexture](/classes/2.2/BaseTexture)

The diffuse texture

###ambientTexture : [BaseTexture](/classes/2.2/BaseTexture)

The ambient texture

###opacityTexture : [BaseTexture](/classes/2.2/BaseTexture)

The opacity texture

###reflectionTexture : [BaseTexture](/classes/2.2/BaseTexture)

The reflection texture

###emissiveTexture : [BaseTexture](/classes/2.2/BaseTexture)

The emissive texture

###specularTexture : [BaseTexture](/classes/2.2/BaseTexture)

The specular texture

###bumpTexture : [BaseTexture](/classes/2.2/BaseTexture)

The bump texture

###ambientColor : [Color3](/classes/2.2/Color3)

The ambient color

###diffuseColor : [Color3](/classes/2.2/Color3)

The diffuse color

###specularColor : [Color3](/classes/2.2/Color3)

The specular color

###specularPower : number

The specular power

###emissiveColor : [Color3](/classes/2.2/Color3)

The emissive color

###useAlphaFromDiffuseTexture : boolean

True to use alpha from diffuse texture

Default value : false

###useEmissiveAsIllumination : boolean



###useReflectionFresnelFromSpecular : boolean



###useSpecularOverAlpha : boolean

True to use specular over alpha

###fogEnabled : boolean



###roughness : number



###diffuseFresnelParameters : [FresnelParameters](/classes/2.2/FresnelParameters)

The diffuse Fresnel parameters

###opacityFresnelParameters : [FresnelParameters](/classes/2.2/FresnelParameters)

The opacity Fresnel parameters

###reflectionFresnelParameters : [FresnelParameters](/classes/2.2/FresnelParameters)

The reflection Fresnel parameters

###emissiveFresnelParameters : [FresnelParameters](/classes/2.2/FresnelParameters)

The emissive Fresnel parameters

###useGlossinessFromSpecularMapAlpha : boolean



###static DiffuseTextureEnabled : boolean

Function to know if diffuse texture is enabled

@return boolean True if diffuse texture is enabled ; False if not

###static AmbientTextureEnabled : boolean

Function to know if ambient texture is enabled

@return boolean True if ambient texture is enabled ; False if not

###static OpacityTextureEnabled : boolean

Function to know if opacity texture is enabled

@return boolean True if opacity texture is enabled ; False if not

###static ReflectionTextureEnabled : boolean

Function to know if reflection texture is enabled

@return boolean True if reflection texture is enabled ; False if not

###static EmissiveTextureEnabled : boolean

Function to know if emissive texture is enabled

@return boolean True if emissive texture is enabled ; False if not

###static SpecularTextureEnabled : boolean

Function to know if specular texture is enabled

@return boolean True if specular texture is enabled ; False if not

###static BumpTextureEnabled : boolean

Function to know if bump texture is enabled

@return boolean True if bump texture is enabled ; False if not

###static FresnelEnabled : boolean



##Methods

###needAlphaBlending() &rarr; boolean

Function to know if standard material need alpha blending
@return boolean True if standard material need alpha blending ; False if not
###needAlphaTesting() &rarr; boolean

Function to know if standard material need alpha testing
@return boolean True if standard material need alpha testing ; False if not
###getAlphaTestTexture() &rarr; [BaseTexture](/classes/2.2/BaseTexture)

Function to get the alpha test texture
@return [BaseTexture](/classes/2.2/BaseTexture) The alpha test texture
###isReady(mesh, useInstances) &rarr; boolean

Function to know if standard material is ready
@return boolean True if is ready ; False if not

####Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.2/AbstractMesh) |  
optional | useInstances | boolean |  True to use instances
###unbind() &rarr; void

Unbind the standard material
###bindOnlyWorldMatrix(world) &rarr; void

Bind only the world matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.2/Matrix) |  

###bind(world, mesh) &rarr; void

Bind the standard material

####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.2/Matrix) |  
optional | mesh | [Mesh](/classes/2.2/Mesh) |  
###getAnimatables() &rarr; IAnimatable[]

Get the animatables
@reutnr IAnimatables List of animatables
###dispose(forceDisposeEffect) &rarr; void

Destroy the standard material

####Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean |  True to force the destroy

###clone(name) &rarr; [StandardMaterial](/classes/2.2/StandardMaterial)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  

