---
ID_PAGE: 25117
PG_TITLE: Engine
PG_VERSION: 2.1
TAGS:
    -   Engine
---
## Description

class [Engine](/classes/2.4/Engine)

The engine class is responsible for interfacing with all lower-level APIs such as WebGL and Audio.

## Constructor

## new [Engine](/classes/2.4/Engine)(canvas, antialias, options, adaptToDeviceRatio)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement |    The canvas
optional | antialias | boolean |    True if this engine should support antialiasing, false otherwise.
optional | options | { antialias: boolean,  preserveDrawingBuffer: boolean,  limitDeviceRatio: number } |  - further options to be sent to the getContext function   Can contains these parameters : generateDepthBuffer, generateMipMaps, samplingMode
## Members

### static ALPHA_DISABLE : number

Alpha disable

### static ALPHA_ONEONE : number



### static ALPHA_ADD : number

Add Alpha

### static ALPHA_COMBINE : number

Combine Alpha

### static ALPHA_SUBTRACT : number



### static ALPHA_MULTIPLY : number



### static ALPHA_MAXIMIZED : number



### static DELAYLOADSTATE_NONE : number

The delay when you don't load

### static DELAYLOADSTATE_LOADED : number

The delay for loaded

### static DELAYLOADSTATE_LOADING : number

The delay of loading

### static DELAYLOADSTATE_NOTLOADED : number

The delay

### static TEXTUREFORMAT_ALPHA : number



### static TEXTUREFORMAT_LUMINANCE : number



### static TEXTUREFORMAT_LUMINANCE_ALPHA : number



### static TEXTUREFORMAT_RGB : number



### static TEXTUREFORMAT_RGBA : number



### static TEXTURETYPE_UNSIGNED_INT : number



### static TEXTURETYPE_FLOAT : number



### static Version : string



### static CollisionsEpsilon : number

This member is static : use [Engine](/classes/2.4/Engine).CollisionsEpsilon

Default value : 0.001

### static CodeRepository : string



### static ShadersRepository : string

This member is static : use [Engine](/classes/2.4/Engine).ShadersRepository

Default value : &quot;Babylon/Shaders/&quot;

Used as the source directory of shaders on the host machine

### isFullscreen : boolean

Default value: false

True if fullscreen, false otherwise

### isPointerLock : boolean

Default value: false

True if the pointer is locked, false otherwise

### cullBackFaces : boolean

Default value: true

True if back faces should be culled, false otherwise

### renderEvenInBackground : boolean

Default value: true

If true, the engine will compute all frames even if the app is in background

### enableOfflineSupport : boolean



### scenes : [Scene](/classes/2.4/Scene)[]

An array of [Scene](/classes/2.4/Scene)

### static audioEngine : [AudioEngine](/classes/2.4/AudioEngine)



### webGLVersion : string



### drawCalls : number

The number of draw calls submitted last frame

### WebGLTexture : undefined



### loadingScreen : ILoadingScreen



### loadingUIText : string

Default Value: &quot;Loading&quot;

Sets the innerHTML for the loading UI created in to displayLoadingUI : void

### loadingUIBackgroundColor : string

Get/Set the background color for the loading UI created in to displayLoadingUI : void

## Methods

### resetTextureCache() &rarr; void


### getGlInfo() &rarr; { vendor: string,  renderer: string,  version: string }


### getAspectRatio(camera, useScreen) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.4/Camera) |    @param camera
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

Returns the rendering canvas
### getRenderingCanvasClientRect() &rarr; ClientRect


### setHardwareScalingLevel(level) &rarr; void

Set the hardware scaling level. The engine is then resized with these new parameters (width/level, height/level).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | level | number |    @param level

### getHardwareScalingLevel() &rarr; number

Returns the hardware scaling level
### getLoadedTexturesCache() &rarr; WebGLTexture[]

Returns all loaded textures from the caches
### getCaps() &rarr; [EngineCapabilities](/classes/2.4/EngineCapabilities)

Returns the engine capabilities
### resetDrawCalls() &rarr; void


### getDepthFunction() &rarr; number


### setDepthFunction(depthFunc) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | depthFunc | number | 

### setDepthFunctionToGreater() &rarr; void

Set the Depth function to greater
### setDepthFunctionToGreaterOrEqual() &rarr; void

Set the Depth function to greater or equal
### setDepthFunctionToLess() &rarr; void

Set the Depth function to less
### setDepthFunctionToLessOrEqual() &rarr; void

Set the Depth function to less or equal
### stopRenderLoop(renderFunction) &rarr; void

stop executing a render loop function and remove it from the execution array

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | renderFunction | () =&gt; void |    @param renderFunction

### runRenderLoop(renderFunction) &rarr; void

Register and execute a render loop. The engine can have more than one render function.

@example

engine.runRenderLoop(function () {

     scene.render()

})

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderFunction | () =&gt; void |    @param renderFunction

### switchFullscreen(requestPointerLock, options) &rarr; void

Toggle full screen mode.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | requestPointerLock | boolean |    If true, the user requests a pointer lock
optional | options | any |    Can contains these parameters : generateDepthBuffer, generateMipMaps, samplingMode
### clear(color, backBuffer, depthStencil) &rarr; void

Clear the canvas with the given parameters.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | any |    The clear color used
 | backBuffer | boolean |    True if this method should clear the color buffer
 | depthStencil | boolean |    True if this method should clear the depth buffer
### scissorClear(x, y, width, height, clearColor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |    @param x
 | y | number |    @param y
 | width | number |    The width of the rectangle
 | height | number |    The height of the rectangle
### setViewport(viewport, requiredWidth, requiredHeight) &rarr; void

Set the WebGL's viewport

#### Parameters
 | Name | Type | Description
---|---|---|---
 | viewport | [Viewport](/classes/2.4/Viewport) |    @param viewport
optional | requiredWidth | number |    The required width of the viewport. By defaults, equals to the rendering canvas width
optional | requiredHeight | number |    The required height of the viewport. By defaults, equals to the rendering canvas height
### setDirectViewport(x, y, width, height) &rarr; [Viewport](/classes/2.4/Viewport)

Directly set the WebGL [Viewport](/classes/2.4/Viewport)

The x, y, width & height are directly passed to the WebGL call

@return the current viewport Object (if any) that is being replaced by this call. You can restore this viewport later on to go back to the original state.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |    @param x
 | y | number |    @param y
 | width | number |    The width of the rectangle
### beginFrame() &rarr; void

Method used at the beginning of the frame rendering. Currently, measure the number of frames per seconds (FPS).
### endFrame() &rarr; void

Method used at the end of a frame rendering. Flushes the frame buffer of the canvas.
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
 | width | number |    The width of the rectangle
 | height | number |    The height of the rectangle
### bindFramebuffer(texture, faceIndex, requiredWidth, requiredHeight) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |    @param texture
optional | faceIndex | number |  
optional | requiredWidth | number |    The required width of the viewport. By defaults, equals to the rendering canvas width
### unBindFramebuffer(texture, disableGenerateMipMaps) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |    @param texture
optional | disableGenerateMipMaps | boolean |  
### generateMipMapsForCubemap(texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |    @param texture

### flushFramebuffer() &rarr; void

Flushes the frame buffer
### restoreDefaultFramebuffer() &rarr; void

Restore the default frame buffer
### createVertexBuffer(vertices) &rarr; WebGLBuffer

Create a new vertex [Buffer](/classes/2.4/Buffer) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertices | number[] |    The array of vertices

### createDynamicVertexBuffer(vertices) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertices | number[] |    The array of vertices

### updateDynamicVertexBuffer(vertexBuffer, vertices, offset, count) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffer | WebGLBuffer |    The given vertex buffer
 | vertices | number[] |    The array of vertices
optional | offset | number |    
### createIndexBuffer(indices) &rarr; WebGLBuffer

Create a new index buffer

#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] |    @param indices

### bindArrayBuffer(buffer) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | WebGLBuffer |    The buffer

### updateArrayBuffer(data) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array |    

### bindBuffersDirectly(vertexBuffer, indexBuffer, vertexDeclaration, vertexStrideSize, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffer | WebGLBuffer |    The given vertex buffer
 | indexBuffer | WebGLBuffer |    The given index buffer
 | vertexDeclaration | number[] |    The given vertex declaration
 | vertexStrideSize | number |    The given vertex
### bindBuffers(vertexBuffers, indexBuffer, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffers | { [key: string]: [VertexBuffer](/classes/2.4/VertexBuffer) } |    The given vextex buffer
 | indexBuffer | WebGLBuffer |    The given index buffer
 | effect | [Effect](/classes/2.4/Effect) |    @param effect
### unbindInstanceAttributes() &rarr; void


### createInstancesBuffer(capacity) &rarr; WebGLBuffer

Create a dynamic instance buffer

#### Parameters
 | Name | Type | Description
---|---|---|---
 | capacity | number |    The size of this dynamic buffer

### deleteInstancesBuffer(buffer) &rarr; void

Delete an existing instance buffer

#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | WebGLBuffer |    The buffer

### updateAndBindInstancesBuffer(instancesBuffer, data, offsetLocations, [InstancingAttributeInfo](/classes/2.4/InstancingAttributeInfo)) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | instancesBuffer | WebGLBuffer |    The instances buffer
 | data | Float32Array |    
### applyStates() &rarr; void


### draw(useTriangles, indexStart, indexCount, instancesCount) &rarr; void

Draw

#### Parameters
 | Name | Type | Description
---|---|---|---
 | useTriangles | boolean |    @param useTriangles
 | indexStart | number |    @param indexStart
 | indexCount | number |    @param indexCount
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
 | useTriangles | boolean |    @param useTriangles
 | verticesStart | number |    
 | verticesCount | number |    
### createEffect(baseName, attributesNames, uniformsNames, samplers, defines, fallbacks, onCompiled, onError, indexParameters) &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | baseName | any |    The base name of the effect (The name of file without .fragment.fx or .vertex.fx)
 | attributesNames | string[] |    The name of the attributes
 | uniformsNames | string[] |    The uniforms names
 | samplers | string[] |    An array of samplers (the objects used to read textures)
 | defines | string |    The shader defines string
optional | fallbacks | [EffectFallbacks](/classes/2.4/EffectFallbacks) |    @param fallbacks
optional | onCompiled | (effect: [Effect](/classes/2.4/Effect)) =&gt; void |    Function launched when the effect is compiled
optional | onError | (effect: [Effect](/classes/2.4/Effect), errors: string) =&gt; void |    Function when error occurs.
### createEffectForParticles(fragmentName, uniformsNames, samplers, defines, fallbacks, onCompiled, onError) &rarr; [Effect](/classes/2.4/Effect)

Compiled/linked your shaders into a simple object.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fragmentName | string |    The name of the Particules
optional | uniformsNames | string[] |    The uniforms names
optional | samplers | string[] |    An array of samplers (the objects used to read textures)
optional | defines | string |    The shader defines string
optional | fallbacks | [EffectFallbacks](/classes/2.4/EffectFallbacks) |    @param fallbacks
optional | onCompiled | (effect: [Effect](/classes/2.4/Effect)) =&gt; void |    Function launched when the effect is compiled
### createShaderProgram(vertexCode, fragmentCode, defines) &rarr; WebGLProgram

Creates a shader program

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexCode | string |    The vertex shader code
 | fragmentCode | string |    The fragment shader code
 | defines | string |    The shader defines string
### getUniforms(shaderProgram, uniformsNames) &rarr; WebGLUniformLocation[]

Return the uniforms location for the given shader program

#### Parameters
 | Name | Type | Description
---|---|---|---
 | shaderProgram | WebGLProgram |    The given shader program
 | uniformsNames | string[] |    The uniforms names
### getAttributes(shaderProgram, attributesNames) &rarr; number[]

Return the attributes for the given shader program

#### Parameters
 | Name | Type | Description
---|---|---|---
 | shaderProgram | WebGLProgram |    The given shader program
 | attributesNames | string[] |    The name of the attributes
### enableEffect(effect) &rarr; void

Enable effect

#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.4/Effect) |    @param effect

### setArray(uniform, array) &rarr; void

Set array of given shader

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | array | number[] |    
### setArray2(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | array | number[] |    
### setArray3(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | array | number[] |    
### setArray4(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | array | number[] |    
### setMatrices(uniform, matrices) &rarr; void

Set matrices for a given shader

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | matrices | Float32Array |    @param matrices
### setMatrix(uniform, matrix) &rarr; void

Set matrix for a given shader

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | matrix | [Matrix](/classes/2.4/Matrix) |    @param matrix
### setMatrix3x3(uniform, matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | matrix | Float32Array |    @param matrix
### setMatrix2x2(uniform, matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | matrix | Float32Array |    @param matrix
### setFloat(uniform, value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | value | number |    @param value
### setFloat2(uniform, x, y) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | x | number |    @param x
 | y | number |    @param y
### setFloat3(uniform, x, y, z) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | x | number |    @param x
 | y | number |    @param y
### setBool(uniform, bool) &rarr; void

Set bool for this given shader

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | bool | number |    @param bool
### setFloat4(uniform, x, y, z, w) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | x | number |    @param x
 | y | number |    @param y
 | z | number |    The z axis
### setColor3(uniform, color3) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | color3 | [Color3](/classes/2.4/Color3) |    The color of the shader
### setColor4(uniform, color3, alpha) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation |    The uniforms of the shader
 | color3 | [Color3](/classes/2.4/Color3) |    The color of the shader
 | alpha | number |    The alpha of the shader
### setState(culling, zOffset, force, reverseSide) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | culling | boolean |    @param culling
optional | zOffset | number |    
optional | force | boolean |    @param force
### setDepthBuffer(enable) &rarr; void

Enable or disable the depth buffer

#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean |    Set true if the alpha testing is enabled, false otherwise.

### getDepthWrite() &rarr; boolean

Get the depth mask
### setDepthWrite(enable) &rarr; void

Enables or disables the depth mask

#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean |    Set true if the alpha testing is enabled, false otherwise.

### setColorWrite(enable) &rarr; void

Enables or disables the writing or red, blue, green and alpha

#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean |    Set true if the alpha testing is enabled, false otherwise.

### setAlphaMode(mode, noDepthWriteChange) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mode | number |    @param mode
optional | noDepthWriteChange | boolean | 
### getAlphaMode() &rarr; number


### setAlphaTesting(enable) &rarr; void

Enables or disables the alpha testing

#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean |    Set true if the alpha testing is enabled, false otherwise.

### getAlphaTesting() &rarr; boolean

Returns true if the alpha testing is enabled, false otherwise.
### wipeCaches() &rarr; void

Reset the cache
### setSamplingMode(texture, samplingMode) &rarr; void

Set the default texture sampling mode

#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |    @param texture
 | samplingMode | number |    
### createTexture(url, noMipmap, invertY, scene, samplingMode, onLoad, onError, buffer) &rarr; WebGLTexture

Create a new texture

#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |    The texture url
 | noMipmap | boolean |    Set true if you want to activate Mipmap, false otherwise.
 | invertY | boolean |    @param invertY
 | scene | [Scene](/classes/2.4/Scene) |    The scene where the cube texture
optional | samplingMode | number |    
optional | onLoad | () =&gt; void |    Function when load.
optional | onError | () =&gt; void |    Function when error occurs.
### updateRawTexture(texture, data, format, invertY, compression) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |    @param texture
 | data | ArrayBufferView |    
 | format | number |    
 | invertY | boolean |    @param invertY
### createRawTexture(data, width, height, format, generateMipMaps, invertY, samplingMode, compression) &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | ArrayBufferView |    
 | width | number |    The width of the rectangle
 | height | number |    The height of the rectangle
 | format | number |    
 | generateMipMaps | boolean |    True if you want to generate Mipmap, false otherwise.
 | invertY | boolean |    @param invertY
 | samplingMode | number |    
### createDynamicTexture(width, height, generateMipMaps, samplingMode) &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |    The width of the rectangle
 | height | number |    The height of the rectangle
 | generateMipMaps | boolean |    True if you want to generate Mipmap, false otherwise.
### updateTextureSamplingMode(samplingMode, texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | samplingMode | number |    
 | texture | WebGLTexture |    @param texture
### updateDynamicTexture(texture, canvas, invertY, premulAlpha) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |    @param texture
 | canvas | HTMLCanvasElement |    The canvas
 | invertY | boolean |    @param invertY
### updateVideoTexture(texture, video, invertY) &rarr; void

Update the given dynamic texture with the video given in parameter

#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |    @param texture
 | video | HTMLVideoElement |    The video
 | invertY | boolean |    @param invertY
### createRenderTargetTexture(size, options) &rarr; WebGLTexture

Create a new render target texture
old version had a &quot;generateMipMaps&quot; arg instead of options.
if options.generateMipMaps is undefined, consider that options itself if the generateMipmaps value
in the same way, generateDepthBuffer is defaulted to true

#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | any |    Can be an object with the two parameters width and height.
 | options | any |    Can contains these parameters : generateDepthBuffer, generateMipMaps, samplingMode
### createRenderTargetCubeTexture(size, options) &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | number |    Can be an object with the two parameters width and height.
optional | options | any |    Can contains these parameters : generateDepthBuffer, generateMipMaps, samplingMode
### createCubeTexture(rootUrl, scene, files, noMipmap) &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string |    @param rootUrl
 | scene | [Scene](/classes/2.4/Scene) |    The scene where the cube texture
 | files | string[] |  
### updateTextureSize(texture, width, height) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |    @param texture
 | width | number |    The width of the rectangle
 | height | number |    The height of the rectangle
### createRawCubeTexture(url, scene, size, format, type, noMipmap, callback, mipmmapGenerator) &rarr; (url, scene, size, format, type, noMipmap, callback, mipmmapGenerator)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |    The texture url
 | scene | [Scene](/classes/2.4/Scene) |    The scene where the cube texture
 | size | number |    Can be an object with the two parameters width and height.
 | format | number |    
 | type | number | 
 | noMipmap | boolean |    Set true if you want to activate Mipmap, false otherwise.
 | callback | (ArrayBuffer: undefined) =&gt; ArrayBufferView[] | 
### bindSamplers(effect) &rarr; void

Bind the given effect to samplers

#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.4/Effect) |    @param effect

### setTextureFromPostProcess(channel, postProcess) &rarr; void

Set texture from post process

#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | number |    The index in the array _activeTexturesCache
 | postProcess | [PostProcess](/classes/2.4/PostProcess) |    @param postProcess
### unbindAllTextures() &rarr; void


### setTexture(channel, texture) &rarr; void

The index in the array _activeTexturesCache

#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | number |    The index in the array _activeTexturesCache
 | texture | [BaseTexture](/classes/2.4/BaseTexture) |    @param texture
### readPixels(x, y, width, height) &rarr; Uint8Array

Read pixels in the given rectangle

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |    @param x
 | y | number |    @param y
 | width | number |    The width of the rectangle
### addExternalData(key, data) &rarr; boolean

Add an externaly attached data from its key.

This method call will fail and return false, if such key already exists.

If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.

@return true if no such key were already present and the data was added successfully, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data
 | data | T |  the data object to associate to the key for this [Engine](/classes/2.4/Engine) instance   
### getExternalData(key) &rarr; T

Get an externaly attached data from its key

@return the associated data, if present (can be null), or undefined if not present

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data

### getOrAddExternalDataWithFactory(key, factory) &rarr; T

Get an externaly attached data from its key, create it using a factory if it's not already present

@return the associated data, can be null if the factory returned null.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data
 | factory | (k: string) =&gt; T |  the factory that will be called to create the instance if and only if it doesn't exists
### removeExternalData(key) &rarr; boolean

Remove an externaly attached data from the [Engine](/classes/2.4/Engine) instance

@return true if the data was successfully removed, false if it doesn't exist

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | any |  the unique key that identifies the data

### releaseInternalTexture(texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture |    @param texture

### dispose() &rarr; void

Delete this engine. Calls dispose on each of the registered scene and deletes all shaders
### displayLoadingUI() &rarr; void

Display loading User Interface
### hideLoadingUI() &rarr; void

Hide the loading state to the User Interface
### getFps() &rarr; number


### getDeltaTime() &rarr; number


### static isSupported() &rarr; boolean


