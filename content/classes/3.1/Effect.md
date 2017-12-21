---
ID_PAGE: 25213
PG_TITLE: Effect
PG_VERSION: 2.1
TAGS:
    - Effect
---
## Description

class [Effect](/classes/3.1/Effect)



## Constructor

## new [Effect](/classes/3.1/Effect)(baseName, attributesNamesOrOptions, [EffectCreationOptions](/classes/3.1/EffectCreationOptions), uniformsNamesOrEngine, [Engine](/classes/3.1/Engine), samplers, engine, defines, fallbacks, onCompiled, onError, indexParameters)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | baseName | any | 
 | attributesNamesOrOptions | string[] or [EffectCreationOptions](/classes/3.1/EffectCreationOptions) | 
 | uniformsNamesOrEngine | string[] or [Engine](/classes/3.1/Engine) | 
optional | samplers | Nullable&lt;string[]&gt; | 
optional | engine | [Engine](/classes/3.1/Engine) | 
optional | defines | Nullable&lt;string&gt; | 
optional | fallbacks | Nullable&lt;[EffectFallbacks](/classes/3.1/EffectFallbacks)&gt; | 
optional | onCompiled | Nullable&lt;(effect: [Effect](/classes/3.1/Effect)) =&gt; void&gt; | 
optional | onError | Nullable&lt;(effect: [Effect](/classes/3.1/Effect), errors: string) =&gt; void&gt; | 
## Members

### name : any


### defines : string


### onCompiled : Nullable&lt;(effect: [Effect](/classes/3.1/Effect)) =&gt; void&gt;


### onError : Nullable&lt;(effect: [Effect](/classes/3.1/Effect), errors: string) =&gt; void&gt;


### onBind : Nullable&lt;(effect: [Effect](/classes/3.1/Effect)) =&gt; void&gt;


### uniqueId : number


### onCompileObservable : [Observable](/classes/3.1/Observable)&lt;[Effect](/classes/3.1/Effect)&gt;


### onErrorObservable : [Observable](/classes/3.1/Observable)&lt;[Effect](/classes/3.1/Effect)&gt;


### onBindObservable : [Observable](/classes/3.1/Observable)&lt;[Effect](/classes/3.1/Effect)&gt;


### key : string


### isSupported : boolean


### static ShadersStore : { [key: string]: string }


### static IncludesShadersStore : { [key: string]: string }


## Methods

### isReady() &rarr; boolean


### getEngine() &rarr; [Engine](/classes/3.1/Engine)


### getProgram() &rarr; WebGLProgram


### getAttributesNames() &rarr; string[]


### getAttributeLocation(index) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 

### getAttributeLocationByName(name) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getAttributesCount() &rarr; number


### getUniformIndex(uniformName) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 

### getUniform(uniformName) &rarr; Nullable&lt;WebGLUniformLocation&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 

### getSamplers() &rarr; string[]


### getCompilationError() &rarr; string


### executeWhenCompiled(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func |  | effect | [Effect](/classes/3.1/Effect) | 

 | 
### setTexture(channel, texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | string | 
 | texture | Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt; | 
### setTextureArray(channel, textures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | string | 
 | textures | [BaseTexture](/classes/3.1/BaseTexture)[] | 
### setTextureFromPostProcess(channel, postProcess) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | string | 
 | postProcess | Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt; | 
### bindUniformBuffer(buffer, name) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | WebGLBuffer | 
 | name | string | 
### bindUniformBlock(blockName, index) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | blockName | string | 
 | index | number | 
### setIntArray(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | Int32Array | 
### setIntArray2(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | Int32Array | 
### setIntArray3(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | Int32Array | 
### setIntArray4(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | Int32Array | 
### setFloatArray(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | Float32Array | 
### setFloatArray2(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | Float32Array | 
### setFloatArray3(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | Float32Array | 
### setFloatArray4(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | Float32Array | 
### setArray(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | number[] | 
### setArray2(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | number[] | 
### setArray3(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | number[] | 
### setArray4(uniformName, array) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | number[] | 
### setMatrices(uniformName, matrices) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | matrices | Float32Array | 
### setMatrix(uniformName, matrix) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | matrix | [Matrix](/classes/3.1/Matrix) | 
### setMatrix3x3(uniformName, matrix) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | matrix | Float32Array | 
### setMatrix2x2(uniformName, matrix) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | matrix | Float32Array | 
### setFloat(uniformName, value) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | value | number | 
### setBool(uniformName, bool) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | bool | boolean | 
### setVector2(uniformName, vector2) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | vector2 | [Vector2](/classes/3.1/Vector2) | 
### setFloat2(uniformName, x, y) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | x | number | 
 | y | number | 
### setVector3(uniformName, vector3) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | vector3 | [Vector3](/classes/3.1/Vector3) | 
### setFloat3(uniformName, x, y, z) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | x | number | 
 | y | number | 
### setVector4(uniformName, vector4) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | vector4 | [Vector4](/classes/3.1/Vector4) | 
### setFloat4(uniformName, x, y, z, w) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | x | number | 
 | y | number | 
 | z | number | 
### setColor3(uniformName, color3) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | color3 | [Color3](/classes/3.1/Color3) | 
### setColor4(uniformName, color3, alpha) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | color3 | [Color3](/classes/3.1/Color3) | 
 | alpha | number | 
### static ResetCache() &rarr; void


