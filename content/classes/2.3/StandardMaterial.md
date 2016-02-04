---
ID_PAGE: 25217
PG_TITLE: StandardMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [StandardMaterial](/classes/2.3/StandardMaterial) extends [Material](/classes/2.3/Material)



## Constructor

##  new [StandardMaterial](/classes/2.3/StandardMaterial)(name, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | scene | [Scene](/classes/2.3/Scene) |   
## Members

### diffuseTexture : [BaseTexture](/classes/2.3/BaseTexture)



### ambientTexture : [BaseTexture](/classes/2.3/BaseTexture)



### opacityTexture : [BaseTexture](/classes/2.3/BaseTexture)



### reflectionTexture : [BaseTexture](/classes/2.3/BaseTexture)



### emissiveTexture : [BaseTexture](/classes/2.3/BaseTexture)



### specularTexture : [BaseTexture](/classes/2.3/BaseTexture)



### bumpTexture : [BaseTexture](/classes/2.3/BaseTexture)



### lightmapTexture : [BaseTexture](/classes/2.3/BaseTexture)



### ambientColor : [Color3](/classes/2.3/Color3)



### diffuseColor : [Color3](/classes/2.3/Color3)



### specularColor : [Color3](/classes/2.3/Color3)



### specularPower : number



### emissiveColor : [Color3](/classes/2.3/Color3)



### useAlphaFromDiffuseTexture : boolean



### useEmissiveAsIllumination : boolean



### linkEmissiveWithDiffuse : boolean



### useReflectionFresnelFromSpecular : boolean



### useSpecularOverAlpha : boolean



### disableLighting : boolean



### roughness : number



### useLightmapAsShadowmap : boolean



### diffuseFresnelParameters : [FresnelParameters](/classes/2.3/FresnelParameters)



### opacityFresnelParameters : [FresnelParameters](/classes/2.3/FresnelParameters)



### reflectionFresnelParameters : [FresnelParameters](/classes/2.3/FresnelParameters)



### emissiveFresnelParameters : [FresnelParameters](/classes/2.3/FresnelParameters)



### useGlossinessFromSpecularMapAlpha : boolean



### useLogarithmicDepth : boolean



### static  DiffuseTextureEnabled : boolean



### static  AmbientTextureEnabled : boolean



### static  OpacityTextureEnabled : boolean



### static  ReflectionTextureEnabled : boolean



### static  EmissiveTextureEnabled : boolean



### static  SpecularTextureEnabled : boolean



### static  BumpTextureEnabled : boolean



### static  FresnelEnabled : boolean



### static  LightmapEnabled : boolean



## Methods

### needAlphaBlending() &rarr; boolean


### needAlphaTesting() &rarr; boolean


### getAlphaTestTexture() &rarr; [BaseTexture](/classes/2.3/BaseTexture)


### static  PrepareDefinesForLights(scene, mesh, defines) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   
 | defines | [MaterialDefines](/classes/2.3/MaterialDefines) | 
### static  BindLights(scene, mesh, effect, defines) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   
 | effect | [Effect](/classes/2.3/Effect) | 
### isReady(mesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   
optional | useInstances | boolean |   True to use instances
### unbind() &rarr; void


### bindOnlyWorldMatrix(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.3/Matrix) |   

### bind(world, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.3/Matrix) |   
optional | mesh | [Mesh](/classes/2.3/Mesh) |   
### getAnimatables() &rarr; IAnimatable[]


### dispose(forceDisposeEffect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean |   True to force the destroy

### clone(name) &rarr; [StandardMaterial](/classes/2.3/StandardMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   

### serialize() &rarr; any


### static  Parse(source, scene, rootUrl) &rarr; [StandardMaterial](/classes/2.3/StandardMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/2.3/Scene) |   
 | rootUrl | string | 
