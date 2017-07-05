---
TAGS:
---
## Description

class [PBRBaseMaterial](/classes/3.0/PBRBaseMaterial) extends BABYLON.[Material](/classes/3.0/Material)



## Constructor

## new [PBRBaseMaterial](/classes/3.0/PBRBaseMaterial)(name, scene)

Instantiates a new [PBRMaterial](/classes/3.0/PBRMaterial) instance.

         * @param name The material name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The material name
 | scene | [Scene](/classes/3.0/Scene) |  The scene the material will be use in.
## Members

### abstract : undefined



### string : undefined



### useLogarithmicDepth : boolean



## Methods

### needAlphaBlending() &rarr; boolean


### needAlphaTesting() &rarr; boolean


### getAlphaTestTexture() &rarr; [BaseTexture](/classes/3.0/BaseTexture)


### static BindLights(scene, mesh, effect, defines, useScalarInLinearSpace, maxSimultaneousLights, usePhysicalLightFalloff) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.0/Scene) | 
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) | 
 | effect | [Effect](/classes/3.0/Effect) | 
 | defines | [MaterialDefines](/classes/3.0/MaterialDefines) | 
 | useScalarInLinearSpace | boolean | 
 | maxSimultaneousLights | number | 
### isReady(mesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) | 
optional | useInstances | boolean | 
### buildUniformLayout() &rarr; void


### unbind() &rarr; void


### bindOnlyWorldMatrix(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.0/Matrix) | 

### bind(world, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.0/Matrix) | 
optional | mesh | [Mesh](/classes/3.0/Mesh) | 
### getAnimatables() &rarr; IAnimatable[]


### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | 
optional | forceDisposeTextures | boolean | 
