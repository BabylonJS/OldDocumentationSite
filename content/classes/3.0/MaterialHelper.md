---
TAGS:
---
## Description

class [MaterialHelper](/classes/3.0/MaterialHelper)



## Methods

### static PrepareDefinesForMisc(mesh, scene, useLogarithmicDepth, pointsCloud, fogEnabled, defines) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |   
 | scene | [Scene](/classes/3.0/Scene) |   
 | useLogarithmicDepth | boolean | 
 | pointsCloud | any | 
 | fogEnabled | boolean | 
### static PrepareDefinesForFrameBoundValues(scene, engine, defines, useInstances) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.0/Scene) |   
 | engine | [Engine](/classes/3.0/Engine) | 
 | defines | [MaterialDefines](/classes/3.0/MaterialDefines) |   
### static PrepareDefinesForAttributes(mesh, defines, useVertexColor, useBones, useMorphTargets) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |   
 | defines | [MaterialDefines](/classes/3.0/MaterialDefines) |   
 | useVertexColor | boolean | 
 | useBones | boolean | 
### static PrepareDefinesForLights(scene, mesh, defines, specularSupported, maxSimultaneousLights, disableLighting) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.0/Scene) |   
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |   
 | defines | [MaterialDefines](/classes/3.0/MaterialDefines) |   
 | specularSupported | boolean | 
optional | maxSimultaneousLights | number |   
### static PrepareUniformsAndSamplersList(uniformsListOrOptions, [EffectCreationOptions](/classes/3.0/EffectCreationOptions), samplersList, defines, maxSimultaneousLights) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformsListOrOptions | string[] or [EffectCreationOptions](/classes/3.0/EffectCreationOptions) | 
optional | samplersList | string[] |   
optional | defines | [MaterialDefines](/classes/3.0/MaterialDefines) |   
### static HandleFallbacksForShadows(defines, fallbacks, maxSimultaneousLights) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | defines | [MaterialDefines](/classes/3.0/MaterialDefines) |   
 | fallbacks | [EffectFallbacks](/classes/3.0/EffectFallbacks) |   
optional | maxSimultaneousLights | number |   
### static PrepareAttributesForMorphTargets(attribs, mesh, defines) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | attribs | string[] |   
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |   
 | defines | [MaterialDefines](/classes/3.0/MaterialDefines) |   
### static PrepareAttributesForBones(attribs, mesh, defines, fallbacks) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | attribs | string[] |   
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |   
 | defines | [MaterialDefines](/classes/3.0/MaterialDefines) |   
### static PrepareAttributesForInstances(attribs, defines) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | attribs | string[] |   
 | defines | [MaterialDefines](/classes/3.0/MaterialDefines) |   
### static BindLightShadow(light, scene, mesh, lightIndex, effect, depthValuesAlreadySet) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | light | [Light](/classes/3.0/Light) |   
 | scene | [Scene](/classes/3.0/Scene) |   
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |   
 | lightIndex | string |   
 | effect | [Effect](/classes/3.0/Effect) |   
### static BindLightProperties(light, effect, lightIndex) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | light | [Light](/classes/3.0/Light) |   
 | effect | [Effect](/classes/3.0/Effect) |   
 | lightIndex | number |   
### static BindLights(scene, mesh, effect, defines, maxSimultaneousLights) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.0/Scene) |   
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |   
 | effect | [Effect](/classes/3.0/Effect) |   
 | defines | [MaterialDefines](/classes/3.0/MaterialDefines) |   
### static BindFogParameters(scene, mesh, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.0/Scene) |   
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |   
 | effect | [Effect](/classes/3.0/Effect) |   
### static BindBonesParameters(mesh, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |   
 | effect | [Effect](/classes/3.0/Effect) |   
### static BindMorphTargetParameters(abstractMesh, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | abstractMesh | [AbstractMesh](/classes/3.0/AbstractMesh) | 
 | effect | [Effect](/classes/3.0/Effect) |   
### static BindLogDepth(defines, effect, scene) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | defines | [MaterialDefines](/classes/3.0/MaterialDefines) |   
 | effect | [Effect](/classes/3.0/Effect) |   
 | scene | [Scene](/classes/3.0/Scene) |   
### static BindClipPlane(effect, scene) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.0/Effect) |   
 | scene | [Scene](/classes/3.0/Scene) |   
