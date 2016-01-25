---
ID_PAGE: 25213
PG_TITLE: Effect
PG_VERSION: 2.1
TAGS:
    - Effect
---
##new [Effect](/classes/Effect)(baseName, attributesNames, uniformsNames, samplers, engine, defines, fallbacks, onCompiled, onError)




The [Effect](/classes/Effect) constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | baseName | any | The base name of the effect (The name of file without .fragment.fx or .vertex.fx)
 | attributesNames | string[] | An array containing the list of attributes.
 | uniformsNames | string[] | An array containing the list of uniforms names.
 | samplers | string[] | @param samplers
 | engine | any | The given engine
optional | defines | string | The list of defines used by this effect.
optional | fallbacks | [EffectFallbacks](/classes/EffectFallbacks) | @param fallbacks
optional | onCompiled | (effect: [Effect](/classes/Effect)) =&gt; void | Function called when given effect are successfully compiled
optional | onError | (effect: [Effect](/classes/Effect), errors: string) =&gt; void | Function called when an error occurs
---

##Members

###name : any





The effect name




###defines : string





The array of defines used by this effect




###onCompiled : (effect: [Effect](/classes/Effect)) =&gt; void





Function called when given effect are successfully compiled




###onError : (effect: [Effect](/classes/Effect), errors: string) =&gt; void





Function called when an error occurs




###onBind : (effect: [Effect](/classes/Effect)) =&gt; void






###static ShadersStore : {}





Object which contains the list of shaders















##Methods

###isReady() &rarr; boolean
Function to know if effect is ready








###getProgram() &rarr; WebGLProgram
Return the shader program linked to this effect








###getAttributesNames() &rarr; string[]
Return attributes names of the effect








###getAttributeLocation(index) &rarr; number
Return the attribute location at the specified index







####Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | The given index
---

###getAttributeLocationByName(name) &rarr; number
Return the attribute location at the specified name







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getAttributesCount() &rarr; number
Return the number of attributes








###getUniformIndex(uniformName) &rarr; number
Return the index of the searched name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
---

###getUniform(uniformName) &rarr; WebGLUniformLocation
Return searched parameter if exist







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
---

###getSamplers() &rarr; string[]
Return samplers








###getCompilationError() &rarr; string
Return the program compilation error








###setTexture(channel, texture) &rarr; void
Set the texture to the effect







####Parameters
 | Name | Type | Description
---|---|---|---
 | channel | string | @param channel
 | texture | [BaseTexture](/classes/BaseTexture) | The given texture
---

###setTextureFromPostProcess(channel, postProcess) &rarr; void
Set the texture to the effect from post process







####Parameters
 | Name | Type | Description
---|---|---|---
 | channel | string | @param channel
 | postProcess | [PostProcess](/classes/PostProcess) | The given post process
---

###setArray(uniformName, array) &rarr; [Effect](/classes/Effect)
Set the array given by its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | array | number[] | The array
---

###setArray2(uniformName, array) &rarr; [Effect](/classes/Effect)



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | number[] | 
---

###setArray3(uniformName, array) &rarr; [Effect](/classes/Effect)



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | number[] | 
---

###setArray4(uniformName, array) &rarr; [Effect](/classes/Effect)



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | number[] | 
---

###setMatrices(uniformName, matrices) &rarr; [Effect](/classes/Effect)
Set the matrice given by its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | matrices | Float32Array | The matrices
---

###setMatrix(uniformName, matrix) &rarr; [Effect](/classes/Effect)
Set the matrix given by its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | matrix | [Matrix](/classes/Matrix) | the matrix
---

###setFloat(uniformName, value) &rarr; [Effect](/classes/Effect)
Set the float given by its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | value | number | The float
---

###setBool(uniformName, bool) &rarr; [Effect](/classes/Effect)
Set the boolean given by its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | bool | boolean | The boolean
---

###setVector2(uniformName, vector2) &rarr; [Effect](/classes/Effect)
Set the vector2 given by its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | vector2 | [Vector2](/classes/Vector2) | The vector2
---

###setFloat2(uniformName, x, y) &rarr; [Effect](/classes/Effect)
Set the float2 given by its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | x | number | The value on x axis
 | y | number | The value on y axis
---

###setVector3(uniformName, vector3) &rarr; [Effect](/classes/Effect)
Set the [Vector3](/classes/Vector3) given by its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | vector3 | [Vector3](/classes/Vector3) | The vector3
---

###setFloat3(uniformName, x, y, z) &rarr; [Effect](/classes/Effect)
Set the float3 given by its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | x | number | The value on x axis
 | y | number | The value on y axis
 | z | number | The value on z axis
---

###setFloat4(uniformName, x, y, z, w) &rarr; [Effect](/classes/Effect)
Set the float4 given by its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | x | number | The value on x axis
 | y | number | The value on y axis
 | z | number | The value on z axis
 | w | number | The rotation
---

###setColor3(uniformName, color3) &rarr; [Effect](/classes/Effect)
Set the color3 given by its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | color3 | [Color3](/classes/Color3) | The color
---

###setColor4(uniformName, color3, alpha) &rarr; [Effect](/classes/Effect)

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | color3 | [Color3](/classes/Color3) | The color
 | alpha | number | Alpha is the transparency between 0 and 1.
---
