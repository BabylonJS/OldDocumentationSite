---
ID_PAGE: 25213
PG_TITLE: Effect
PG_VERSION: 2.1
TAGS:
    - Effect
---
## Description

class [Effect](/classes/2.4/Effect)



## Constructor

## new [Effect](/classes/2.4/Effect)(baseName, attributesNames, uniformsNames, samplers, engine, defines, fallbacks, onCompiled, onError, indexParameters)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | baseName | any |    The base name of the effect (The name of file without .fragment.fx or .vertex.fx)
 | attributesNames | string[] |    An array containing the list of attributes.
 | uniformsNames | string[] |    An array containing the list of uniforms names.
 | samplers | string[] |    @param samplers
 | engine | any |    The given engine
optional | defines | string |    The list of defines used by this effect.
optional | fallbacks | [EffectFallbacks](/classes/2.4/EffectFallbacks) |    @param fallbacks
optional | onCompiled | (effect: [Effect](/classes/2.4/Effect)) =&gt; void |    Function called when given effect are successfully compiled
optional | onError | (effect: [Effect](/classes/2.4/Effect), errors: string) =&gt; void | 
## Members

### name : any

The effect name

### defines : string

The array of defines used by this effect

### onCompiled : (effect: [Effect](/classes/2.4/Effect)) =&gt; void

Function called when given effect are successfully compiled

### onError : (effect: [Effect](/classes/2.4/Effect), errors: string) =&gt; void

Function called when an error occurs

### onBind : (effect: [Effect](/classes/2.4/Effect)) =&gt; void



### isSupported : boolean



### static ShadersStore : { }



### static IncludesShadersStore : { }



## Methods

### isReadyundefined &rarr; boolean


### getProgramundefined &rarr; WebGLProgram


### getAttributesNamesundefined &rarr; string[]


### getAttributeLocationundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAttributeLocationByNameundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAttributesCountundefined &rarr; number


### getUniformIndexundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getUniformundefined &rarr; WebGLUniformLocation



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getSamplersundefined &rarr; string[]


### getCompilationErrorundefined &rarr; string


### setTextureundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setTextureFromPostProcessundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setArrayundefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setArray2undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setArray3undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setArray4undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setMatricesundefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setMatrixundefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setMatrix3x3undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setMatrix2x2undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setFloatundefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setBoolundefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setVector2undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setFloat2undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setVector3undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setFloat3undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setVector4undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setFloat4undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setColor3undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setColor4undefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
