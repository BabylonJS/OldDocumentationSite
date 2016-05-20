---
TAGS:
---
## Description

class [MaterialHelper](/classes/2.4/MaterialHelper)



## Methods

### static PrepareDefinesForLights(scene, mesh, defines, maxSimultaneousLights) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) | 
 | mesh | [AbstractMesh](/classes/2.4/AbstractMesh) | 
 | defines | [MaterialDefines](/classes/2.4/MaterialDefines) | 
### static PrepareUniformsAndSamplersList(uniformsList, samplersList, defines, maxSimultaneousLights) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformsList | string[] | 
 | samplersList | string[] | 
 | defines | [MaterialDefines](/classes/2.4/MaterialDefines) | 
### static HandleFallbacksForShadows(defines, fallbacks, maxSimultaneousLights) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | defines | [MaterialDefines](/classes/2.4/MaterialDefines) | 
 | fallbacks | [EffectFallbacks](/classes/2.4/EffectFallbacks) | 
optional | maxSimultaneousLights | number | 
### static PrepareAttributesForBones(attribs, mesh, defines, fallbacks) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | attribs | string[] | 
 | mesh | [AbstractMesh](/classes/2.4/AbstractMesh) | 
 | defines | [MaterialDefines](/classes/2.4/MaterialDefines) | 
### static PrepareAttributesForInstances(attribs, defines) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | attribs | string[] | 
 | defines | [MaterialDefines](/classes/2.4/MaterialDefines) | 
### static BindLightShadow(light, scene, mesh, lightIndex, effect, depthValuesAlreadySet) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | light | [Light](/classes/2.4/Light) | 
 | scene | [Scene](/classes/2.4/Scene) | 
 | mesh | [AbstractMesh](/classes/2.4/AbstractMesh) | 
 | lightIndex | number | 
 | effect | [Effect](/classes/2.4/Effect) | 
### static BindLightProperties(light, effect, lightIndex) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | light | [Light](/classes/2.4/Light) | 
 | effect | [Effect](/classes/2.4/Effect) | 
 | lightIndex | number | 
### static BindLights(scene, mesh, effect, defines, maxSimultaneousLights) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) | 
 | mesh | [AbstractMesh](/classes/2.4/AbstractMesh) | 
 | effect | [Effect](/classes/2.4/Effect) | 
 | defines | [MaterialDefines](/classes/2.4/MaterialDefines) | 
### static BindFogParameters(scene, mesh, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) | 
 | mesh | [AbstractMesh](/classes/2.4/AbstractMesh) | 
 | effect | [Effect](/classes/2.4/Effect) | 
### static BindBonesParameters(mesh, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.4/AbstractMesh) | 
 | effect | [Effect](/classes/2.4/Effect) | 
### static BindLogDepth(defines, effect, scene) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | defines | [MaterialDefines](/classes/2.4/MaterialDefines) | 
 | effect | [Effect](/classes/2.4/Effect) | 
 | scene | [Scene](/classes/2.4/Scene) | 
### static BindClipPlane(effect, scene) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.4/Effect) | 
 | scene | [Scene](/classes/2.4/Scene) | 
