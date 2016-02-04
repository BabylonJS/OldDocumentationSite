---
ID_PAGE: 25213
PG_TITLE: Effect
PG_VERSION: 2.1
TAGS:
    - Effect
---
## Description

class [Effect](/classes/2.3/Effect)



## Constructor

##  new [Effect](/classes/2.3/Effect)(baseName, attributesNames, uniformsNames, samplers, engine, defines, fallbacks, onCompiled, onError)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | baseName | any |   The base name of the effect (The name of file without .fragment.fx or .vertex.fx)
 | attributesNames | string[] |   An array containing the list of attributes.
 | uniformsNames | string[] |   An array containing the list of uniforms names.
 | samplers | string[] |   @param samplers
 | engine | any |   The given engine
optional | defines | string |   The list of defines used by this effect.
optional | fallbacks | [EffectFallbacks](/classes/2.3/EffectFallbacks) |   @param fallbacks
optional | onCompiled | (effect: [Effect](/classes/2.3/Effect)) =&gt; void |   Function called when given effect are successfully compiled
## Members

### name : any



### defines : string



### onCompiled : (effect: [Effect](/classes/2.3/Effect)) =&gt; void



### onError : (effect: [Effect](/classes/2.3/Effect), errors: string) =&gt; void



### onBind : (effect: [Effect](/classes/2.3/Effect)) =&gt; void



### isSupported : boolean



### static  ShadersStore : { }



## Methods

### isReady() &rarr; boolean


### getProgram() &rarr; WebGLProgram


### getAttributesNames() &rarr; string[]


### getAttributeLocation(index) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number |   The given index

### getAttributeLocationByName(name) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name

### getAttributesCount() &rarr; number


### getUniformIndex(uniformName) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name

### getUniform(uniformName) &rarr; WebGLUniformLocation



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name

### getSamplers() &rarr; string[]


### getCompilationError() &rarr; string


### setTexture(channel, texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | string |   @param channel
 | texture | [BaseTexture](/classes/2.3/BaseTexture) |   The given texture
### setTextureFromPostProcess(channel, postProcess) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | string |   @param channel
 | postProcess | [PostProcess](/classes/2.3/PostProcess) |   The given post process
### setArray(uniformName, array) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | array | number[] |   
### setArray2(uniformName, array) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | array | number[] |   
### setArray3(uniformName, array) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | array | number[] |   
### setArray4(uniformName, array) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | array | number[] |   
### setMatrices(uniformName, matrices) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | matrices | Float32Array |   The matrices
### setMatrix(uniformName, matrix) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | matrix | [Matrix](/classes/2.3/Matrix) |   the matrix
### setMatrix3x3(uniformName, matrix) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | matrix | Float32Array |   the matrix
### setMatrix2x2(uniformname, matrix) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformname | string |  
 | matrix | Float32Array |   the matrix
### setFloat(uniformName, value) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | value | number |   The float
### setBool(uniformName, bool) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | bool | boolean |   The boolean
### setVector2(uniformName, vector2) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | vector2 | [Vector2](/classes/2.3/Vector2) |   The vector2
### setFloat2(uniformName, x, y) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | x | number |   The value on x axis
 | y | number |   The value on y axis
### setVector3(uniformName, vector3) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | vector3 | [Vector3](/classes/2.3/Vector3) |   The vector3
### setFloat3(uniformName, x, y, z) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | x | number |   The value on x axis
 | y | number |   The value on y axis
### setVector4(uniformName, vector4) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | vector4 | [Vector4](/classes/2.3/Vector4) |  
### setFloat4(uniformName, x, y, z, w) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | x | number |   The value on x axis
 | y | number |   The value on y axis
 | z | number |   The value on z axis
### setColor3(uniformName, color3) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | color3 | [Color3](/classes/2.3/Color3) |   The color
### setColor4(uniformName, color3, alpha) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string |   The given uniform name
 | color3 | [Color3](/classes/2.3/Color3) |   The color
 | alpha | number |   Alpha is the transparency between 0 and 1.
