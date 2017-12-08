---
TAGS:
---
## Description

class [NullEngine](/classes/3.1/NullEngine) extends [Engine](/classes/3.1/Engine)

The null engine class provides support for headless version of babylon.js.

This can be used in server side scenario or for testing purposes

## Constructor

## new [NullEngine](/classes/3.1/NullEngine)(options)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | options | [NullEngineOptions](/classes/3.1/NullEngineOptions) | 

## Methods

### createVertexBuffer(vertices, Float32Array) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertices | number[] or Float32Array | 
### createIndexBuffer(indices) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | IndicesArray | 

### clear(color, backBuffer, depth, stencil) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color4](/classes/3.1/Color4) | 
 | backBuffer | boolean | 
 | depth | boolean | 
### getRenderWidth(useScreen) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | useScreen | boolean | 

### getRenderHeight(useScreen) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | useScreen | boolean | 

### setViewport(viewport, requiredWidth, requiredHeight) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | viewport | [Viewport](/classes/3.1/Viewport) | 
optional | requiredWidth | number | 
optional | requiredHeight | number | 
### createShaderProgram(vertexCode, fragmentCode, defines, context) &rarr; WebGLProgram



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexCode | string | 
 | fragmentCode | string | 
 | defines | string | 
### getUniforms(shaderProgram, uniformsNames) &rarr; WebGLUniformLocation[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | shaderProgram | WebGLProgram | 
 | uniformsNames | string[] | 
### getAttributes(shaderProgram, attributesNames) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | shaderProgram | WebGLProgram | 
 | attributesNames | string[] | 
### bindSamplers(effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 

### enableEffect(effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 

### setState(culling, zOffset, force, reverseSide) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | culling | boolean | 
optional | zOffset | number | 
optional | force | boolean | 
### setIntArray(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | Int32Array | 
### setIntArray2(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | Int32Array | 
### setIntArray3(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | Int32Array | 
### setIntArray4(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | Int32Array | 
### setFloatArray(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | Float32Array | 
### setFloatArray2(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | Float32Array | 
### setFloatArray3(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | Float32Array | 
### setFloatArray4(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | Float32Array | 
### setArray(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | number[] | 
### setArray2(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | number[] | 
### setArray3(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | number[] | 
### setArray4(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | number[] | 
### setMatrices(uniform, matrices) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | matrices | Float32Array | 
### setMatrix(uniform, matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | matrix | [Matrix](/classes/3.1/Matrix) | 
### setMatrix3x3(uniform, matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | matrix | Float32Array | 
### setMatrix2x2(uniform, matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | matrix | Float32Array | 
### setFloat(uniform, value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | value | number | 
### setFloat2(uniform, x, y) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | x | number | 
 | y | number | 
### setFloat3(uniform, x, y, z) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | x | number | 
 | y | number | 
### setBool(uniform, bool) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | bool | number | 
### setFloat4(uniform, x, y, z, w) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | x | number | 
 | y | number | 
 | z | number | 
### setColor3(uniform, color3) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | color3 | [Color3](/classes/3.1/Color3) | 
### setColor4(uniform, color3, alpha) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | color3 | [Color3](/classes/3.1/Color3) | 
 | alpha | number | 
### setAlphaMode(mode, noDepthWriteChange) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mode | number | 
optional | noDepthWriteChange | boolean | 
### bindBuffers(vertexBuffers, indexBuffer, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffers | { [key: string]: [VertexBuffer](/classes/3.1/VertexBuffer) } | 
 | indexBuffer | WebGLBuffer | 
 | effect | [Effect](/classes/3.1/Effect) | 
### wipeCaches(bruteForce) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | bruteForce | boolean | 

### draw(useTriangles, indexStart, indexCount, instancesCount) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | useTriangles | boolean | 
 | indexStart | number | 
 | indexCount | number | 
### createTexture(urlArg, noMipmap, invertY, scene, samplingMode, onLoad, onError, buffer, HTMLImageElement, fallBack, format) &rarr; [InternalTexture](/classes/3.1/InternalTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | urlArg | string | 
 | noMipmap | boolean | 
 | invertY | boolean | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | samplingMode | number | 
optional | onLoad | Nullable&lt;() =&gt; void&gt; | 
optional | onError | Nullable&lt;() =&gt; void&gt; | 
optional | buffer | Nullable&lt;ArrayBuffer&gt; or HTMLImageElement | 
optional | fallBack | [InternalTexture](/classes/3.1/InternalTexture) | 
### createRenderTargetTexture(size, options, [RenderTargetCreationOptions](/classes/3.1/RenderTargetCreationOptions)) &rarr; [InternalTexture](/classes/3.1/InternalTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | any | 
 | options | boolean or [RenderTargetCreationOptions](/classes/3.1/RenderTargetCreationOptions) | 
### updateTextureSamplingMode(samplingMode, texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | samplingMode | number | 
 | texture | [InternalTexture](/classes/3.1/InternalTexture) | 
### bindFramebuffer(texture, faceIndex, requiredWidth, requiredHeight, forceFullscreenViewport) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [InternalTexture](/classes/3.1/InternalTexture) | 
optional | faceIndex | number | 
optional | requiredWidth | number | 
optional | requiredHeight | number | 
### unBindFramebuffer(texture, disableGenerateMipMaps, onBeforeUnbind) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [InternalTexture](/classes/3.1/InternalTexture) | 
optional | disableGenerateMipMaps | boolean | 
optional | onBeforeUnbind |  | 
### createDynamicVertexBuffer(vertices, Float32Array) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertices | number[] or Float32Array | 
### updateDynamicIndexBuffer(indexBuffer, indices, offset) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | indexBuffer | WebGLBuffer | 
 | indices | IndicesArray | 
optional | offset | number | 
### updateDynamicVertexBuffer(vertexBuffer, vertices, Float32Array, offset, count) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffer | WebGLBuffer | 
 | vertices | number[] or Float32Array | 
optional | offset | number | 
