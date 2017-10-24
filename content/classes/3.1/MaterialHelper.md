---
TAGS:
---
## Description

class [MaterialHelper](/classes/3.1/MaterialHelper)



## Methods

### static PrepareDefinesForMergedUV(texture, defines, key) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [BaseTexture](/classes/3.1/BaseTexture) | 
 | defines | any | 
 | key | string | 
### static BindTextureMatrix(texture, uniformBuffer, key) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [BaseTexture](/classes/3.1/BaseTexture) | 
 | uniformBuffer | [UniformBuffer](/classes/3.1/UniformBuffer) | 
 | key | string | 
### static PrepareDefinesForMisc(mesh, scene, useLogarithmicDepth, pointsCloud, fogEnabled, defines) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | useLogarithmicDepth | boolean | 
 | pointsCloud | boolean | 
 | fogEnabled | boolean | 
### static PrepareDefinesForFrameBoundValues(scene, engine, defines, useInstances, forceAlphaTest) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
 | engine | [Engine](/classes/3.1/Engine) | 
 | defines | any | 
 | useInstances | boolean | 
### static PrepareDefinesForAttributes(mesh, defines, useVertexColor, useBones, useMorphTargets) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | defines | any | 
 | useVertexColor | boolean | 
 | useBones | boolean | 
### static PrepareDefinesForLights(scene, mesh, defines, specularSupported, maxSimultaneousLights, disableLighting) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | defines | any | 
 | specularSupported | boolean | 
optional | maxSimultaneousLights | number | 
### static PrepareUniformsAndSamplersList(uniformsListOrOptions, [EffectCreationOptions](/classes/3.1/EffectCreationOptions), samplersList, defines, maxSimultaneousLights) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformsListOrOptions | string[] or [EffectCreationOptions](/classes/3.1/EffectCreationOptions) | 
optional | samplersList | string[] | 
optional | defines | any | 
### static HandleFallbacksForShadows(defines, fallbacks, maxSimultaneousLights) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | defines | any | 
 | fallbacks | [EffectFallbacks](/classes/3.1/EffectFallbacks) | 
optional | maxSimultaneousLights | number | 
### static PrepareAttributesForMorphTargets(attribs, mesh, defines) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | attribs | string[] | 
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | defines | any | 
### static PrepareAttributesForBones(attribs, mesh, defines, fallbacks) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | attribs | string[] | 
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | defines | any | 
### static PrepareAttributesForInstances(attribs, defines) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | attribs | string[] | 
 | defines | any | 
### static BindLightShadow(light, scene, mesh, lightIndex, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | light | [Light](/classes/3.1/Light) | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | lightIndex | string | 
### static BindLightProperties(light, effect, lightIndex) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | light | [Light](/classes/3.1/Light) | 
 | effect | [Effect](/classes/3.1/Effect) | 
 | lightIndex | number | 
### static BindLights(scene, mesh, effect, defines, maxSimultaneousLights, usePhysicalLightFalloff) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | effect | [Effect](/classes/3.1/Effect) | 
 | defines | any | 
optional | maxSimultaneousLights | number | 
### static BindFogParameters(scene, mesh, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | effect | [Effect](/classes/3.1/Effect) | 
### static BindBonesParameters(mesh, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | effect | [Effect](/classes/3.1/Effect) | 
### static BindMorphTargetParameters(abstractMesh, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | abstractMesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | effect | [Effect](/classes/3.1/Effect) | 
### static BindLogDepth(defines, effect, scene) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | defines | any | 
 | effect | [Effect](/classes/3.1/Effect) | 
 | scene | [Scene](/classes/3.1/Scene) | 
### static BindClipPlane(effect, scene) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 
 | scene | [Scene](/classes/3.1/Scene) | 
