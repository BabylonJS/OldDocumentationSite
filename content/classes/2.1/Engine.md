---
ID_PAGE: 25117
PG_TITLE: Engine
PG_VERSION: 2.1
TAGS:
    -   Engine
---

The engine class is responsible for interfacing with all lower-level APIs such as WebGL and Audio.
##new [Engine](/classes/Engine)(canvas, antialias, options)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement | name of the canvas which holds the engine
optional | antialias | boolean | True if this engine should support antialiasing, false otherwise.
optional | options | any | - further options to be sent to the getContext function
---

##Members

###static ALPHA_DISABLE : number





Alpha disable




###static ALPHA_ADD : number





Add Alpha




###static ALPHA_COMBINE : number





Combine Alpha




###static DELAYLOADSTATE_NONE : number





The delay when you don't load




###static DELAYLOADSTATE_LOADED : number





The delay for loaded




###static DELAYLOADSTATE_LOADING : number





The delay of loading




###static DELAYLOADSTATE_NOTLOADED : number





The delay




###static TEXTUREFORMAT_ALPHA : number




###static TEXTUREFORMAT_LUMINANCE : number




###static TEXTUREFORMAT_LUMINANCE_ALPHA : number




###static TEXTUREFORMAT_RGB : number




###static TEXTUREFORMAT_RGBA : number




###static TEXTURETYPE_UNSIGNED_INT : number




###static TEXTURETYPE_FLOAT : number




###static Version : string








###static Epsilon : number





This member is static : use [Engine](/classes/Engine).Epsilon

Default value : 0.001




###static CollisionsEpsilon : number





This member is static : use [Engine](/classes/Engine).CollisionsEpsilon

Default value : 0.001




###static CodeRepository : string


###static ShadersRepository : string





This member is static : use [Engine](/classes/Engine).ShadersRepository

Default value : &quot;Babylon/Shaders/&quot;

Used as the source directory of shaders on the host machine




###isFullscreen : boolean



Default value: false

True if fullscreen, false otherwise




###isPointerLock : boolean



Default value: false

True if the pointer is locked, false otherwise




###cullBackFaces : boolean



Default value: true

True if back faces should be culled, false otherwise





###renderEvenInBackground : boolean



Default value: true

If true, the engine will compute all frames even if the app is in background




###scenes : [Scene](/classes/Scene)[]





An array of [Scene](/classes/Scene)




###static audioEngine : [AudioEngine](/classes/AudioEngine)




###drawCalls : number


The number of draw calls submitted last frame



###loadingUIText : string



Default Value: &quot;Loading&quot;

Sets the innerHTML for the loading UI created in to displayLoadingUI : void




###loadingUIBackgroundColor : string





Get/Set the background color for the loading UI created in to displayLoadingUI : void















##Methods

###getGlInfo() &rarr; {vendor: string; renderer: string; version: string; }; 




###getAspectRatio(camera) &rarr; number
Returns the screen aspect ratio







####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/Camera) | @param camera
---

###getRenderWidth() &rarr; number
If a current render target is set, returns its width.








###getRenderHeight() &rarr; number
If a current render target is set, returns its height.
Otherwise, returns the rendering canvas height








###getRenderingCanvas() &rarr; HTMLCanvasElement
Returns the rendering canvas








###getRenderingCanvasClientRect() &rarr; ClientRect








###setHardwareScalingLevel(level) &rarr; void
Set the hardware scaling level. The engine is then resized with these new parameters (width/level, height/level).







####Parameters
 | Name | Type | Description
---|---|---|---
 | level | number | @param level
---

###getHardwareScalingLevel() &rarr; number
Returns the hardware scaling level








###getLoadedTexturesCache() &rarr; WebGLTexture[]
Returns all loaded textures from the caches








###getCaps() &rarr; [EngineCapabilities](/classes/EngineCapabilities)
Returns the engine capabilities








###resetDrawCalls() &rarr; void






###setDepthFunctionToGreater() &rarr; void
Set the Depth function to greater








###setDepthFunctionToGreaterOrEqual() &rarr; void
Set the Depth function to greater or equal








###setDepthFunctionToLess() &rarr; void
Set the Depth function to less








###setDepthFunctionToLessOrEqual() &rarr; void
Set the Depth function to less or equal








###stopRenderLoop(renderFunction) &rarr; void
stop executing a render loop function and remove it from the execution array

####Parameters
 | Name | Type | Description
---|---|---|---
optional | renderFunction | () =&gt; void | 
---

###runRenderLoop(renderFunction) &rarr; void
Register and execute a render loop. The engine can have more than one render function.
@example
engine.runRenderLoop(function () {
     scene.render()
})

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderFunction | () =&gt; void | @param renderFunction
---

###switchFullscreen(requestPointerLock) &rarr; void
Toggle full screen mode.

####Parameters
 | Name | Type | Description
---|---|---|---
 | requestPointerLock | boolean | If true, the user requests a pointer lock
---

###clear(color, backBuffer, depthStencil) &rarr; void
Clear the canvas with the given parameters.







####Parameters
 | Name | Type | Description
---|---|---|---
 | color | any | The clear color used
 | backBuffer | boolean | True if this method should clear the color buffer
 | depthStencil | boolean | True if this method should clear the depth buffer
---

###setViewport(viewport, requiredWidth, requiredHeight) &rarr; void
Set the WebGL's viewport

####Parameters
 | Name | Type | Description
---|---|---|---
 | viewport | [Viewport](/classes/Viewport) | @param viewport
optional | requiredWidth | number | The required width of the viewport. By defaults, equals to the rendering canvas width
optional | requiredHeight | number | The required height of the viewport. By defaults, equals to the rendering canvas height
---

###setDirectViewport(x, y, width, height) &rarr; void
Set the viewport of this engine. The cached viewport is cleared and the viewport takes exactly the size given in parameter.







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The x origin coordinate
 | y | number | The y origin coordinate
 | width | number | The width of the viewport
 | height | number | The height of the viewport
---

###beginFrame() &rarr; void
Method used at the beginning of the frame rendering. Currently, measure the number of frames per seconds (FPS).








###endFrame() &rarr; void
Method used at the end of a frame rendering. Flushes the frame buffer of the canvas.








###resize() &rarr; void
resize the view according to the canvas' size.
@example
  window.addEventListener(&quot;resize&quot;, function () {
     engine.resize();
  });


###setSize(width, height) &rarr; void
force a specific size of the canvas

####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
---

###bindFramebuffer(texture) &rarr; void
Bind Frame buffer







####Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture | @param texture
---

###unBindFramebuffer(texture) &rarr; void
Unbind frame buffer







####Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture | @param texture
---

###flushFramebuffer() &rarr; void
Flushes the frame buffer








###restoreDefaultFramebuffer() &rarr; void
Restore the default frame buffer








###createVertexBuffer(vertices) &rarr; WebGLBuffer
Create a new vertex Buffer object







####Parameters
 | Name | Type | Description
---|---|---|---
 | vertices | number[] | The array of vertices
---

###createDynamicVertexBuffer(capacity) &rarr; WebGLBuffer
Create a dynamic vertex buffer object







####Parameters
 | Name | Type | Description
---|---|---|---
 | capacity | number | The capacity of the vertex buffer object
---

###updateDynamicVertexBuffer(vertexBuffer, vertices, offset) &rarr; void
Updates the given dynamic vertex buffer object







####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffer | WebGLBuffer | The buffer to upadte
 | vertices | any | The array of vertices
optional | offset | number | 
---

###createIndexBuffer(indices) &rarr; WebGLBuffer
Create a new index buffer







####Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] | @param indices
---

###bindBuffers(vertexBuffer, indexBuffer, vertexDeclaration, vertexStrideSize, effect) &rarr; void
Bind buffer with the given vertexBuffer, indexBuffer, vertexDeclaration vertexStrideSize and effect







####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffer | WebGLBuffer | The given vertex buffer
 | indexBuffer | WebGLBuffer | The given index buffer
 | vertexDeclaration | number[] | The given vertex declaration
 | vertexStrideSize | number | The given vertex
 | effect | [Effect](/classes/Effect) | @param effect
---

###bindMultiBuffers(vertexBuffers, indexBuffer, effect) &rarr; void
Bind some buffers with the given vertexBuffer, indexBuffer and effect







####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffers | [VertexBuffer](/classes/VertexBuffer)[] | The given vextex buffer
 | indexBuffer | WebGLBuffer | The given index buffer
 | effect | [Effect](/classes/Effect) | @param effect
---

###createInstancesBuffer(capacity) &rarr; WebGLBuffer
Create a dynamic instance buffer







####Parameters
 | Name | Type | Description
---|---|---|---
 | capacity | number | The size of this dynamic buffer
---

###deleteInstancesBuffer(buffer) &rarr; void
Delete an existing instance buffer







####Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | WebGLBuffer | The buffer which will be deleted
---

###updateAndBindInstancesBuffer(instancesBuffer, data, offsetLocations) &rarr; void
Update and bind the given instance buffer







####Parameters
 | Name | Type | Description
---|---|---|---
 | instancesBuffer | WebGLBuffer | @param instancesBuffer
 | data | Float32Array | @param data
 | offsetLocations | number[] | @param offsetLocations
---

###unBindInstancesBuffer(instancesBuffer, offsetLocations) &rarr; void
Unbind the given instance buffer







####Parameters
 | Name | Type | Description
---|---|---|---
 | instancesBuffer | WebGLBuffer | The instances buffer
 | offsetLocations | number[] | @param offsetLocations
---

###applyStates() &rarr; void








###draw(useTriangles, indexStart, indexCount, instancesCount) &rarr; void
Draw







####Parameters
 | Name | Type | Description
---|---|---|---
 | useTriangles | boolean | @param useTriangles
 | indexStart | number | @param indexStart
 | indexCount | number | @param indexCount
optional | instancesCount | number | If true, uses the engine capabilities.
---

###drawPointClouds(verticesStart, verticesCount, instancesCount) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
 | verticesStart | number | 
 | verticesCount | number | 
optional | instancesCount | number | 
---

###createEffect(baseName, attributesNames, uniformsNames, samplers, defines, fallbacks, onCompiled, onError) &rarr; [Effect](/classes/Effect)
Compiled/linked your shaders into a simple object.







####Parameters
 | Name | Type | Description
---|---|---|---
 | baseName | any | The base name of the effect (The name of file without .fragment.fx or .vertex.fx)
 | attributesNames | string[] | An array of attributes describing the topology of your vertices
 | uniformsNames | string[] | An array of uniforms (the external variables) defined by the shaders
 | samplers | string[] | An array of samplers (the objects used to read textures)
 | defines | string | A define string
optional | fallbacks | [EffectFallbacks](/classes/EffectFallbacks) | @param fallbacks
optional | onCompiled | (effect: [Effect](/classes/Effect)) =&gt; void | Function launched when the effect is compiled
optional | onError | (effect: [Effect](/classes/Effect), errors: string) =&gt; void | Function launched when an error occurs
---

###createEffectForParticles(fragmentName, uniformsNames, samplers, defines, fallbacks, onCompiled, onError) &rarr; [Effect](/classes/Effect)
Compiled/linked your shaders into a simple object.







####Parameters
 | Name | Type | Description
---|---|---|---
 | fragmentName | string | The name of the Particules
optional | uniformsNames | string[] | An array of uniforms (the external variables) defined by the shaders
optional | samplers | string[] | An array of samplers (the objects used to read textures)
optional | defines | string | A define string
optional | fallbacks | [EffectFallbacks](/classes/EffectFallbacks) | @param fallbacks
optional | onCompiled | (effect: [Effect](/classes/Effect)) =&gt; void | Function launched when the effect is compiled
optional | onError | (effect: [Effect](/classes/Effect), errors: string) =&gt; void | Function launched when an error occurs
---

###createShaderProgram(vertexCode, fragmentCode, defines) &rarr; WebGLProgram
Creates a shader program







####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexCode | string | The vertex shader code
 | fragmentCode | string | The fragment shader code
 | defines | string | The shader defines string
---

###getUniforms(shaderProgram, uniformsNames) &rarr; WebGLUniformLocation[]
Return the uniforms location for the given shader program







####Parameters
 | Name | Type | Description
---|---|---|---
 | shaderProgram | WebGLProgram | The given shader program
 | uniformsNames | string[] | The uniforms names
---

###getAttributes(shaderProgram, attributesNames) &rarr; number[]
Return the attributes for the given shader program







####Parameters
 | Name | Type | Description
---|---|---|---
 | shaderProgram | WebGLProgram | The given shader program
 | attributesNames | string[] | The name of the attributes
---

###enableEffect(effect) &rarr; void
Enable effect







####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/Effect) | @param effect
---

###setArray(uniform, array) &rarr; void
Set array of given shader







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | The uniform of this shader
 | array | number[] | The array
---

###setArray2(uniform, array) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | number[] | 
---

###setArray3(uniform, array) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | number[] | 
---

###setArray4(uniform, array) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | number[] | 
---

###setMatrices(uniform, matrices) &rarr; void
Set matrices for a given shader







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | the uniform of this shader
 | matrices | Float32Array | @param matrices
---

###setMatrix(uniform, matrix) &rarr; void
Set matrix for a given shader







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | The uniforms of the shader
 | matrix | [Matrix](/classes/Matrix) | @param matrix
---

###setFloat(uniform, value) &rarr; void







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | The uniforms of the shader
 | value | number | @param value
---

###setFloat2(uniform, x, y) &rarr; void







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | The uniforms of the shader
 | x | number | The x axis
 | y | number | The y axis
---

###setFloat3(uniform, x, y, z) &rarr; void







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | The uniforms of the shader
 | x | number | The x axis
 | y | number | The y axis
 | z | number | The z axis
---

###setBool(uniform, bool) &rarr; void
Set bool for this given shader







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | The uniforms of the shader
 | bool | number | @param bool
---

###setFloat4(uniform, x, y, z, w) &rarr; void







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | The uniforms of the shader
 | x | number | The x axis
 | y | number | The y axis
 | z | number | The z axis
 | w | number | The rotation of the shader
---

###setColor3(uniform, color3) &rarr; void







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | The uniforms of the shader
 | color3 | [Color3](/classes/Color3) | The color of the shader
---

###setColor4(uniform, color3, alpha) &rarr; void







####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | The uniforms of the shader
 | color3 | [Color3](/classes/Color3) | The color of the shader
 | alpha | number | The alpha of the shader
---

###setState(culling, zOffset, force) &rarr; void
Set the culling state (true : front faces are visible. If cullBackFaces is set to true, back and front faces are visible).







####Parameters
 | Name | Type | Description
---|---|---|---
 | culling | boolean | @param culling
optional | zOffset | number | 
optional | force | boolean | @param force
---

###setDepthBuffer(enable) &rarr; void
Enable or disable the depth buffer







####Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | @param enable
---

###getDepthWrite() &rarr; boolean
Get the depth mask








###setDepthWrite(enable) &rarr; void
Enables or disables the depth mask







####Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | 
---

###setColorWrite(enable) &rarr; void
Enables or disables the writing or red, blue, green and alpha







####Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | @param enable
---

###setAlphaMode(mode) &rarr; void
Set the engine alpha mode







####Parameters
 | Name | Type | Description
---|---|---|---
 | mode | number | @param mode
---

###getAlphaMode() &rarr; number






###setAlphaTesting(enable) &rarr; void
Enables or disables the alpha testing







####Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | Set true if the alpha testing is enabled, false otherwise.
---

###getAlphaTesting() &rarr; boolean
Returns true if the alpha testing is enabled, false otherwise.








###wipeCaches() &rarr; void
Reset the cache








###setSamplingMode(texture, samplingMode) &rarr; void
Set the default texture sampling mode







####Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture | @param texture
 | samplingMode | number | The sampling mode
---

###createTexture(url, noMipmap, invertY, scene, samplingMode, onLoad, onError, buffer) &rarr; WebGLTexture
Create a new texture







####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | The texture url
 | noMipmap | boolean | True if you want to activate the Mipmap, false otherwise.
 | invertY | boolean | @param invertY
 | scene | [Scene](/classes/Scene) | The scene where the shader is.
optional | samplingMode | number | The sampling mode
optional | onLoad | () =&gt; void | Function when load.
optional | onError | () =&gt; void | Function when error occurs.
optional | buffer | any | The buffer
---

###createRawTexture(data, width, height, format, generateMipMaps, invertY, samplingMode) &rarr; WebGLTexture



####Parameters
 | Name | Type | Description
---|---|---|---
 | data | ArrayBufferView | 
 | width | number | 
 | height | number | 
 | format | number | 
 | generateMipMaps | boolean | 
 | invertY | boolean | 
 | samplingMode | number | 
---

###createDynamicTexture(width, height, generateMipMaps, samplingMode, forceExponantOfTwo) &rarr; WebGLTexture
Create a new dynamic texture







####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | The width of the texture
 | height | number | the height of the texture
 | generateMipMaps | boolean | True if you want to generate Mipmap, false otherwise.
 | samplingMode | number | The sampling mode
optional | forceExponantOfTwo | boolean | 
---

###updateTextureSamplingMode(samplingMode, texture) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | samplingMode | number | 
 | texture | WebGLTexture | 
---

###updateDynamicTexture(texture, canvas, invertY) &rarr; void
Update the given dynamic texture







####Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture | The new texture
 | canvas | HTMLCanvasElement | The canvas
 | invertY | boolean | @param invertY
---

###updateVideoTexture(texture, video, invertY) &rarr; void
Update the given dynamic texture with the video given in parameter







####Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture | The new texture
 | video | HTMLVideoElement | The video
 | invertY | boolean | @param invertY
---

###createRenderTargetTexture(size, options) &rarr; WebGLTexture
Create a new render target texture
old version had a &quot;generateMipMaps&quot; arg instead of options.
if options.generateMipMaps is undefined, consider that options itself if the generateMipmaps value
in the same way, generateDepthBuffer is defaulted to true







####Parameters
 | Name | Type | Description
---|---|---|---
 | size | any | Can be an object with the two parameters width and height.
 | options | any | Can contains these parameters : generateDepthBuffer, generateMipMaps, samplingMode
---

###createCubeTexture(rootUrl, scene, extensions, noMipmap) &rarr; WebGLTexture
Create a new cube texture







####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | @param rootUrl
 | scene | [Scene](/classes/Scene) | The scene where the cube texture
 | extensions | string[] | Contains the image extensions in string format
optional | noMipmap | boolean | Set true if you want to activate Mipmap, false otherwise.
---

###bindSamplers(effect) &rarr; void
Bind the given effect to samplers







####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/Effect) | @param effect
---

###setTextureFromPostProcess(channel, postProcess) &rarr; void
Set texture from post process







####Parameters
 | Name | Type | Description
---|---|---|---
 | channel | number | The index in the array _activeTexturesCache
 | postProcess | [PostProcess](/classes/PostProcess) | @param postProcess
---

###setTexture(channel, texture) &rarr; void
The index in the array _activeTexturesCache







####Parameters
 | Name | Type | Description
---|---|---|---
 | channel | number | The index in the array _activeTexturesCache
 | texture | [BaseTexture](/classes/BaseTexture) | @param texture
---

###readPixels(x, y, width, height) &rarr; Uint8Array
Read pixels in the given rectangle







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | @param x
 | y | number | @param y
 | width | number | The width of the rectangle
 | height | number | The height of the rectangle
---

###dispose() &rarr; void
Delete this engine. Calls dispose on each of the registered scene and deletes all shaders








###displayLoadingUI() &rarr; void
Display loading User Interface








###hideLoadingUI() &rarr; void
Hide the loading state to the User Interface








###getFps() &rarr; number






###getDeltaTime() &rarr; number


###static isSupported() &rarr; boolean

