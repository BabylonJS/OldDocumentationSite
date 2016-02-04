---
ID_PAGE: 25117
PG_TITLE: Engine
PG_VERSION: 2.1
TAGS:
    -   Engine
---
## Description

class [Engine](/classes/2.3/Engine)

The engine class is responsible for interfacing with all lower-level APIs such as WebGL and Audio.

## Constructor

##  new [Engine](/classes/2.3/Engine)(canvas, antialias, options, adaptToDeviceRatio)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement |   The canvas
optional | antialias | boolean |   True if this engine should support antialiasing, false otherwise.
optional | options | { antialias: boolean,  preserveDrawingBuffer: boolean } |  - further options to be sent to the getContext function  Can contains these parameters : generateDepthBuffer, generateMipMaps, samplingMode
## Members

### static  ALPHA_DISABLE : number



### static  ALPHA_ONEONE : number



### static  ALPHA_ADD : number



### static  ALPHA_COMBINE : number



### static  ALPHA_SUBTRACT : number



### static  ALPHA_MULTIPLY : number



### static  ALPHA_MAXIMIZED : number



### static  DELAYLOADSTATE_NONE : number



### static  DELAYLOADSTATE_LOADED : number



### static  DELAYLOADSTATE_LOADING : number



### static  DELAYLOADSTATE_NOTLOADED : number



### static  TEXTUREFORMAT_ALPHA : number



### static  TEXTUREFORMAT_LUMINANCE : number



### static  TEXTUREFORMAT_LUMINANCE_ALPHA : number



### static  TEXTUREFORMAT_RGB : number



### static  TEXTUREFORMAT_RGBA : number



### static  TEXTURETYPE_UNSIGNED_INT : number



### static  TEXTURETYPE_FLOAT : number



### static  Version : string



### static  Epsilon : number



### static  CollisionsEpsilon : number



### static  CodeRepository : string



### static  ShadersRepository : string



### isFullscreen : boolean



### isPointerLock : boolean



### cullBackFaces : boolean



### renderEvenInBackground : boolean



### enableOfflineSupport : boolean



### scenes : [Scene](/classes/2.3/Scene)[]



### static  audioEngine : [AudioEngine](/classes/2.3/AudioEngine)



### webGLVersion : string



### drawCalls : number



### loadingScreen : ILoadingScreen



### loadingUIText : string



### loadingUIBackgroundColor : string



## Methods

### resetTextureCache() &rarr; void


### getGlInfo() &rarr; { vendor: string,  renderer: string,  version: string }


### getAspectRatio(camera, useScreen) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.3/Camera) |   @param camera
optional | useScreen | boolean | 
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

### getRenderingCanvas() &rarr; HTMLCanvasElement


### getRenderingCanvasClientRect() &rarr; ClientRect


### setHardwareScalingLevel(level) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | level | number |   @param level

### getHardwareScalingLevel() &rarr; number


### getLoadedTexturesCache() &rarr; WebGLTexture[]


### getCaps() &rarr; [EngineCapabilities](/classes/2.3/EngineCapabilities)


### resetDrawCalls() &rarr; void


### setDepthFunctionToGreater() &rarr; void


### setDepthFunctionToGreaterOrEqual() &rarr; void


### setDepthFunctionToLess() &rarr; void


### setDepthFunctionToLessOrEqual() &rarr; void


### stopRenderLoop(renderFunction) &rarr; void

stop executing a render loop function and remove it from the execution array

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | renderFunction | () =&gt; void |   @param renderFunction

### runRenderLoop(renderFunction) &rarr; void

Register and execute a render loop. The engine can have more than one render function.

@example

engine.runRenderLoop(function () {

     scene.render()

})

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderFunction | () =&gt; void |   @param renderFunction

### switchFullscreen(requestPointerLock) &rarr; void

Toggle full screen mode.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | requestPointerLock | boolean |   If true, the user requests a pointer lock

### clear(color, backBuffer, depthStencil) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | any |   The clear color used
 | backBuffer | boolean |   True if this method should clear the color buffer
 | depthStencil | boolean |   True if this method should clear the depth buffer
### setViewport(viewport, requiredWidth, requiredHeight) &rarr; void

Set the WebGL's viewport

#### Parameters
 | Name | Type | Description
---|---|---|---
 | viewport | [Viewport](/classes/2.3/Viewport) |   @param viewport
optional | requiredWidth | number |   The required width of the viewport. By defaults, equals to the rendering canvas width
optional | requiredHeight | number |   The required height of the viewport. By defaults, equals to the rendering canvas height
### setDirectViewport(x, y, width, height) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   @param x
 | y | number |   @param y
 | width | number |   The width of the rectangle
### beginFrame() &rarr; void


### endFrame() &rarr; void


### resize() &rarr; void

resize the view according to the canvas' size.

@example

  window.addEventListener("resize", function () {

     engine.resize();

  });
### setSize(width, height) &rarr; void

force a specific size of the canvas

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |   The width of the rectangle
 | height | number |   The height of the rectangle
### bindFramebuffer(texture, faceIndex) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |   @param texture
optional | faceIndex | number | 
### unBindFramebuffer(texture, disableGenerateMipMaps) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |   @param texture
optional | disableGenerateMipMaps | boolean | 
### generateMipMapsForCubemap(texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |   @param texture

### flushFramebuffer() &rarr; void


### restoreDefaultFramebuffer() &rarr; void


### createVertexBuffer(vertices) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertices | number[] |   The array of vertices

### createDynamicVertexBuffer(capacity) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | capacity | number |   The size of this dynamic buffer

### updateDynamicVertexBuffer(vertexBuffer, vertices, offset) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffer | WebGLBuffer |   The given vertex buffer
 | vertices | number[] |   The array of vertices
optional | offset | number |   
### createIndexBuffer(indices) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] |   @param indices

### bindBuffers(vertexBuffer, indexBuffer, vertexDeclaration, vertexStrideSize, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffer | WebGLBuffer |   The given vertex buffer
 | indexBuffer | WebGLBuffer |   The given index buffer
 | vertexDeclaration | number[] |   The given vertex declaration
 | vertexStrideSize | number |   The given vertex
### bindMultiBuffers(vertexBuffers, indexBuffer, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffers | [VertexBuffer](/classes/2.3/VertexBuffer)[] |   The given vextex buffer
 | indexBuffer | WebGLBuffer |   The given index buffer
 | effect | [Effect](/classes/2.3/Effect) |   @param effect
### createInstancesBuffer(capacity) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | capacity | number |   The size of this dynamic buffer

### deleteInstancesBuffer(buffer) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | WebGLBuffer |   The buffer

### updateAndBindInstancesBuffer(instancesBuffer, data, offsetLocations) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | instancesBuffer | WebGLBuffer |   The instances buffer
 | data | Float32Array |   
 | offsetLocations | number[] |   @param offsetLocations
### unBindInstancesBuffer(instancesBuffer, offsetLocations) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | instancesBuffer | WebGLBuffer |   The instances buffer
 | offsetLocations | number[] |   @param offsetLocations
### applyStates() &rarr; void


### draw(useTriangles, indexStart, indexCount, instancesCount) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | useTriangles | boolean |   @param useTriangles
 | indexStart | number |   @param indexStart
 | indexCount | number |   @param indexCount
### drawPointClouds(verticesStart, verticesCount, instancesCount) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | verticesStart | number |   
 | verticesCount | number |   
optional | instancesCount | number |   
### drawUnIndexed(useTriangles, verticesStart, verticesCount, instancesCount) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | useTriangles | boolean |   @param useTriangles
 | verticesStart | number |   
 | verticesCount | number |   
### createEffect(baseName, attributesNames, uniformsNames, samplers, defines, fallbacks, onCompiled, onError) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | baseName | any |   The base name of the effect (The name of file without .fragment.fx or .vertex.fx)
 | attributesNames | string[] |   The name of the attributes
 | uniformsNames | string[] |   The uniforms names
 | samplers | string[] |   An array of samplers (the objects used to read textures)
 | defines | string |   The shader defines string
optional | fallbacks | [EffectFallbacks](/classes/2.3/EffectFallbacks) |   @param fallbacks
optional | onCompiled | (effect: [Effect](/classes/2.3/Effect)) =&gt; void |   Function launched when the effect is compiled
### createEffectForParticles(fragmentName, uniformsNames, samplers, defines, fallbacks, onCompiled, onError) &rarr; [Effect](/classes/2.3/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | fragmentName | string |   The name of the Particules
optional | uniformsNames | string[] |   The uniforms names
optional | samplers | string[] |   An array of samplers (the objects used to read textures)
optional | defines | string |   The shader defines string
optional | fallbacks | [EffectFallbacks](/classes/2.3/EffectFallbacks) |   @param fallbacks
optional | onCompiled | (effect: [Effect](/classes/2.3/Effect)) =&gt; void |   Function launched when the effect is compiled
### createShaderProgram(vertexCode, fragmentCode, defines) &rarr; WebGLProgram



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexCode | string |   The vertex shader code
 | fragmentCode | string |   The fragment shader code
 | defines | string |   The shader defines string
### getUniforms(shaderProgram, uniformsNames) &rarr; WebGLUniformLocation[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | shaderProgram | WebGLProgram |   The given shader program
 | uniformsNames | string[] |   The uniforms names
### getAttributes(shaderProgram, attributesNames) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | shaderProgram | WebGLProgram |   The given shader program
 | attributesNames | string[] |   The name of the attributes
### enableEffect(effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.3/Effect) |   @param effect

### setArray(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | array | number[] |   
### setArray2(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | array | number[] |   
### setArray3(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | array | number[] |   
### setArray4(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | array | number[] |   
### setMatrices(uniform, matrices) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | matrices | Float32Array |   @param matrices
### setMatrix(uniform, matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | matrix | [Matrix](/classes/2.3/Matrix) |   @param matrix
### setMatrix3x3(uniform, matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | matrix | Float32Array |   @param matrix
### setMatrix2x2(uniform, matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | matrix | Float32Array |   @param matrix
### setFloat(uniform, value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | value | number |   @param value
### setFloat2(uniform, x, y) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | x | number |   @param x
 | y | number |   @param y
### setFloat3(uniform, x, y, z) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | x | number |   @param x
 | y | number |   @param y
### setBool(uniform, bool) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | bool | number |   @param bool
### setFloat4(uniform, x, y, z, w) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | x | number |   @param x
 | y | number |   @param y
 | z | number |   The z axis
### setColor3(uniform, color3) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | color3 | [Color3](/classes/2.3/Color3) |   The color of the shader
### setColor4(uniform, color3, alpha) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |   The uniforms of the shader
 | color3 | [Color3](/classes/2.3/Color3) |   The color of the shader
 | alpha | number |   The alpha of the shader
### setState(culling, zOffset, force, reverseSide) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | culling | boolean |   @param culling
optional | zOffset | number |   
optional | force | boolean |   @param force
### setDepthBuffer(enable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean |   Set true if the alpha testing is enabled, false otherwise.

### getDepthWrite() &rarr; boolean


### setDepthWrite(enable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean |   Set true if the alpha testing is enabled, false otherwise.

### setColorWrite(enable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean |   Set true if the alpha testing is enabled, false otherwise.

### setAlphaMode(mode) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mode | number |   @param mode

### getAlphaMode() &rarr; number


### setAlphaTesting(enable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean |   Set true if the alpha testing is enabled, false otherwise.

### getAlphaTesting() &rarr; boolean


### wipeCaches() &rarr; void


### setSamplingMode(texture, samplingMode) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |   @param texture
 | samplingMode | number |   
### createTexture(url, noMipmap, invertY, scene, samplingMode, onLoad, onError, buffer) &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |   The texture url
 | noMipmap | boolean |   Set true if you want to activate Mipmap, false otherwise.
 | invertY | boolean |   @param invertY
 | scene | [Scene](/classes/2.3/Scene) |   The scene where the cube texture
optional | samplingMode | number |   
optional | onLoad | () =&gt; void |   Function when load.
optional | onError | () =&gt; void |   Function when error occurs.
### updateRawTexture(texture, data, format, invertY, compression) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |   @param texture
 | data | ArrayBufferView |   
 | format | number |   
 | invertY | boolean |   @param invertY
### createRawTexture(data, width, height, format, generateMipMaps, invertY, samplingMode, compression) &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | ArrayBufferView |   
 | width | number |   The width of the rectangle
 | height | number |   The height of the rectangle
 | format | number |   
 | generateMipMaps | boolean |   True if you want to generate Mipmap, false otherwise.
 | invertY | boolean |   @param invertY
 | samplingMode | number |   
### createDynamicTexture(width, height, generateMipMaps, samplingMode, forceExponantOfTwo) &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |   The width of the rectangle
 | height | number |   The height of the rectangle
 | generateMipMaps | boolean |   True if you want to generate Mipmap, false otherwise.
 | samplingMode | number |   
### updateTextureSamplingMode(samplingMode, texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | samplingMode | number |   
 | texture | WebGLTexture |   @param texture
### updateDynamicTexture(texture, canvas, invertY) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |   @param texture
 | canvas | HTMLCanvasElement |   The canvas
 | invertY | boolean |   @param invertY
### updateVideoTexture(texture, video, invertY) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |   @param texture
 | video | HTMLVideoElement |   The video
 | invertY | boolean |   @param invertY
### createRenderTargetTexture(size, options) &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | any |   Can be an object with the two parameters width and height.
 | options | any |   Can contains these parameters : generateDepthBuffer, generateMipMaps, samplingMode
### createRenderTargetCubeTexture(size, options) &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | number |   Can be an object with the two parameters width and height.
optional | options | any |   Can contains these parameters : generateDepthBuffer, generateMipMaps, samplingMode
### createCubeTexture(rootUrl, scene, files, noMipmap) &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string |   @param rootUrl
 | scene | [Scene](/classes/2.3/Scene) |   The scene where the cube texture
 | files | string[] | 
### bindSamplers(effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.3/Effect) |   @param effect

### setTextureFromPostProcess(channel, postProcess) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | number |   The index in the array _activeTexturesCache
 | postProcess | [PostProcess](/classes/2.3/PostProcess) |   @param postProcess
### unbindAllTextures() &rarr; void


### setTexture(channel, texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | number |   The index in the array _activeTexturesCache
 | texture | [BaseTexture](/classes/2.3/BaseTexture) |   @param texture
### readPixels(x, y, width, height) &rarr; Uint8Array



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   @param x
 | y | number |   @param y
 | width | number |   The width of the rectangle
### releaseInternalTexture(texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |   @param texture

### dispose() &rarr; void


### displayLoadingUI() &rarr; void


### hideLoadingUI() &rarr; void


### getFps() &rarr; number


### getDeltaTime() &rarr; number


### static  isSupported() &rarr; boolean


