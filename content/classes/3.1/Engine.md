---
ID_PAGE: 25117
PG_TITLE: Engine
PG_VERSION: 2.1
TAGS:
    -   Engine
---
## Description

class [Engine](/classes/3.1/Engine)

The engine class is responsible for interfacing with all lower-level APIs such as WebGL and Audio.

## Constructor

## new [Engine](/classes/3.1/Engine)(canvasOrContext, WebGLRenderingContext, antialias, options, adaptToDeviceRatio)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | canvasOrContext | Nullable&lt;HTMLCanvasElement&gt; or WebGLRenderingContext | 
optional | antialias | boolean | 
optional | options | EngineOptions |  - further options to be sent to the getContext function
## Members

### static Instances : [Engine](/classes/3.1/Engine)[]


### static LastCreatedEngine : Nullable&lt;[Engine](/classes/3.1/Engine)&gt;


### static LastCreatedScene : Nullable&lt;[Scene](/classes/3.1/Scene)&gt;


### static NEVER : number


### static ALWAYS : number


### static LESS : number


### static EQUAL : number


### static LEQUAL : number


### static GREATER : number


### static GEQUAL : number


### static NOTEQUAL : number


### static KEEP : number


### static REPLACE : number


### static INCR : number


### static DECR : number


### static INVERT : number


### static INCR_WRAP : number


### static DECR_WRAP : number


### static ALPHA_DISABLE : number


### static ALPHA_ONEONE : number


### static ALPHA_ADD : number


### static ALPHA_COMBINE : number


### static ALPHA_SUBTRACT : number


### static ALPHA_MULTIPLY : number


### static ALPHA_MAXIMIZED : number


### static ALPHA_PREMULTIPLIED : number


### static ALPHA_PREMULTIPLIED_PORTERDUFF : number


### static ALPHA_INTERPOLATE : number


### static ALPHA_SCREENMODE : number


### static DELAYLOADSTATE_NONE : number


### static DELAYLOADSTATE_LOADED : number


### static DELAYLOADSTATE_LOADING : number


### static DELAYLOADSTATE_NOTLOADED : number


### static TEXTUREFORMAT_ALPHA : number


### static TEXTUREFORMAT_LUMINANCE : number


### static TEXTUREFORMAT_LUMINANCE_ALPHA : number


### static TEXTUREFORMAT_RGB : number


### static TEXTUREFORMAT_RGBA : number


### static TEXTURETYPE_UNSIGNED_INT : number


### static TEXTURETYPE_FLOAT : number


### static TEXTURETYPE_HALF_FLOAT : number


### static SCALEMODE_FLOOR : number


### static SCALEMODE_NEAREST : number


### static SCALEMODE_CEILING : number


### static Version : string


### static CollisionsEpsilon : number


### static CodeRepository : string


### static ShadersRepository : string


### forcePOTTextures : boolean


### isFullscreen : boolean


### isPointerLock : boolean


### cullBackFaces : boolean


### renderEvenInBackground : boolean


### preventCacheWipeBetweenFrames : boolean


### enableOfflineSupport : boolean


### scenes : [Scene](/classes/3.1/Scene)[]


### postProcesses : [PostProcess](/classes/3.1/PostProcess)[]


### onResizeObservable : [Observable](/classes/3.1/Observable)&lt;[Engine](/classes/3.1/Engine)&gt;

[Observable](/classes/3.1/Observable) event triggered each time the rendering canvas is resized
### onCanvasBlurObservable : [Observable](/classes/3.1/Observable)&lt;[Engine](/classes/3.1/Engine)&gt;

[Observable](/classes/3.1/Observable) event triggered each time the canvas loses focus
### onCanvasFocusObservable : [Observable](/classes/3.1/Observable)&lt;[Engine](/classes/3.1/Engine)&gt;

[Observable](/classes/3.1/Observable) event triggered each time the canvas gains focus
### onCanvasPointerOutObservable : [Observable](/classes/3.1/Observable)&lt;[Engine](/classes/3.1/Engine)&gt;

[Observable](/classes/3.1/Observable) event triggered each time the canvas receives pointerout event
### onBeforeTextureInitObservable : [Observable](/classes/3.1/Observable)&lt;[Texture](/classes/3.1/Texture)&gt;

[Observable](/classes/3.1/Observable) event triggered before each texture is initialized
### isInVRExclusivePointerMode : boolean


### disableUniformBuffers : boolean


### supportsUniformBuffers : boolean


### needPOTTextures : boolean


### badOS : boolean


### badDesktopOS : boolean


### static audioEngine : [AudioEngine](/classes/3.1/AudioEngine)


### onVRDisplayChangedObservable : [Observable](/classes/3.1/Observable)&lt;IDisplayChangedEventArgs&gt;


### onVRRequestPresentComplete : [Observable](/classes/3.1/Observable)&lt;boolean&gt;


### onVRRequestPresentStart : [Observable](/classes/3.1/Observable)&lt;[Engine](/classes/3.1/Engine)&gt;


### onContextLostObservable : [Observable](/classes/3.1/Observable)&lt;[Engine](/classes/3.1/Engine)&gt;


### onContextRestoredObservable : [Observable](/classes/3.1/Observable)&lt;[Engine](/classes/3.1/Engine)&gt;


### disablePerformanceMonitorInBackground : boolean

Turn this value on if you want to pause FPS computation when in background
### performanceMonitor : [PerformanceMonitor](/classes/3.1/PerformanceMonitor)


### texturesSupported : Array&lt;string&gt;


### textureFormatInUse : Nullable&lt;string&gt;


### currentViewport : Nullable&lt;[Viewport](/classes/3.1/Viewport)&gt;


### emptyTexture : [InternalTexture](/classes/3.1/InternalTexture)


### emptyCubeTexture : [InternalTexture](/classes/3.1/InternalTexture)


### webGLVersion : number


### isStencilEnable : boolean

Returns true if the stencil buffer has been enabled through the creation option of the context.
### drawCalls : number


### drawCallsPerfCounter : [PerfCounter](/classes/3.1/PerfCounter)


### onLoad : () =&gt; void


### loadingScreen : ILoadingScreen


### loadingUIText : string


### loadingUIBackgroundColor : string


### void : () =&gt; void


### void : () =&gt; void


## Methods

### static MarkAllMaterialsAsDirty(flag, predicate) &rarr; void

Will flag all materials in all scenes in all engines as dirty to trigger new shader compilation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | flag | number | 
optional | predicate |  | mat | [Material](/classes/3.1/Material) | 

### resetTextureCache() &rarr; void


### isDeterministicLockStep() &rarr; boolean


### getLockstepMaxSteps() &rarr; number


### getGlInfo() &rarr; { vendor: string,  renderer: string,  version: string }


### getAspectRatio(camera, useScreen) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/3.1/Camera) | 
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

### getRenderingCanvas() &rarr; Nullable&lt;HTMLCanvasElement&gt;


### getRenderingCanvasClientRect() &rarr; Nullable&lt;ClientRect&gt;


### setHardwareScalingLevel(level) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | level | number | 

### getHardwareScalingLevel() &rarr; number


### getLoadedTexturesCache() &rarr; [InternalTexture](/classes/3.1/InternalTexture)[]


### getCaps() &rarr; [EngineCapabilities](/classes/3.1/EngineCapabilities)


### getDepthFunction() &rarr; number


### setDepthFunction(depthFunc) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | depthFunc | number | 

### setDepthFunctionToGreater() &rarr; void


### setDepthFunctionToGreaterOrEqual() &rarr; void


### setDepthFunctionToLess() &rarr; void


### setDepthFunctionToLessOrEqual() &rarr; void


### getStencilBuffer() &rarr; boolean


### setStencilBuffer(enable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | 

### getStencilMask() &rarr; number


### setStencilMask(mask) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mask | number | 

### getStencilFunction() &rarr; number


### getStencilFunctionReference() &rarr; number


### getStencilFunctionMask() &rarr; number


### setStencilFunction(stencilFunc) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | stencilFunc | number | 

### setStencilFunctionReference(reference) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | reference | number | 

### setStencilFunctionMask(mask) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mask | number | 

### getStencilOperationFail() &rarr; number


### getStencilOperationDepthFail() &rarr; number


### getStencilOperationPass() &rarr; number


### setStencilOperationFail(operation) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | operation | number | 

### setStencilOperationDepthFail(operation) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | operation | number | 

### setStencilOperationPass(operation) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | operation | number | 

### setDitheringState(value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | boolean | 

### stopRenderLoop(renderFunction) &rarr; void

stop executing a render loop function and remove it from the execution array

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | renderFunction |  | 

### runRenderLoop(renderFunction) &rarr; void

Register and execute a render loop. The engine can have more than one render function.

@example

engine.runRenderLoop(function () {

     scene.render()

})

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderFunction |  | 

### switchFullscreen(requestPointerLock) &rarr; void

Toggle full screen mode.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | requestPointerLock | boolean | 

### clear(color, backBuffer, depth, stencil) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | Nullable&lt;[Color4](/classes/3.1/Color4)&gt; | 
 | backBuffer | boolean | 
 | depth | boolean | 
### scissorClear(x, y, width, height, clearColor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | width | number | 
 | height | number | 
### setViewport(viewport, requiredWidth, requiredHeight) &rarr; void

Set the WebGL's viewport

#### Parameters
 | Name | Type | Description
---|---|---|---
 | viewport | [Viewport](/classes/3.1/Viewport) | 
optional | requiredWidth | number | 
optional | requiredHeight | number | 
### setDirectViewport(x, y, width, height) &rarr; Nullable&lt;[Viewport](/classes/3.1/Viewport)&gt;

Directly set the WebGL [Viewport](/classes/3.1/Viewport)

The x, y, width & height are directly passed to the WebGL call

@return the current viewport Object (if any) that is being replaced by this call. You can restore this viewport later on to go back to the original state.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | width | number | 
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
 | width | number | 
 | height | number | 
### isVRDevicePresent() &rarr; boolean


### getVRDevice() &rarr; any


### initWebVR() &rarr; [Observable](/classes/3.1/Observable)&lt;{ vrDisplay: any,  vrSupported: any }&gt;


### enableVR() &rarr; void


### disableVR() &rarr; void


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
### generateMipMapsForCubemap(texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [InternalTexture](/classes/3.1/InternalTexture) | 

### flushFramebuffer() &rarr; void


### restoreDefaultFramebuffer() &rarr; void


### createUniformBuffer(elements, Float32Array) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | elements | number[] or Float32Array | 
### createDynamicUniformBuffer(elements, Float32Array) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | elements | number[] or Float32Array | 
### updateUniformBuffer(uniformBuffer, elements, Float32Array, offset, count) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformBuffer | WebGLBuffer | 
 | elements | number[] or Float32Array | 
optional | offset | number | 
### createVertexBuffer(vertices, Float32Array) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertices | number[] or Float32Array | 
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
### createIndexBuffer(indices, updatable) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | IndicesArray | 
optional | updatable | boolean | 
### bindArrayBuffer(buffer) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | Nullable&lt;WebGLBuffer&gt; | 

### bindUniformBuffer(buffer) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | Nullable&lt;WebGLBuffer&gt; | 

### bindUniformBufferBase(buffer, location) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | WebGLBuffer | 
 | location | number | 
### bindUniformBlock(shaderProgram, blockName, index) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | shaderProgram | WebGLProgram | 
 | blockName | string | 
 | index | number | 
### updateArrayBuffer(data) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array | 

### recordVertexArrayObject(vertexBuffers, indexBuffer, effect) &rarr; WebGLVertexArrayObject



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffers | { [key: string]: [VertexBuffer](/classes/3.1/VertexBuffer) } | 
 | indexBuffer | Nullable&lt;WebGLBuffer&gt; | 
 | effect | [Effect](/classes/3.1/Effect) | 
### bindVertexArrayObject(vertexArrayObject, indexBuffer) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexArrayObject | WebGLVertexArrayObject | 
 | indexBuffer | Nullable&lt;WebGLBuffer&gt; | 
### bindBuffersDirectly(vertexBuffer, indexBuffer, vertexDeclaration, vertexStrideSize, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffer | WebGLBuffer | 
 | indexBuffer | WebGLBuffer | 
 | vertexDeclaration | number[] | 
 | vertexStrideSize | number | 
### bindBuffers(vertexBuffers, indexBuffer, effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffers | { [key: string]: Nullable&lt;[VertexBuffer](/classes/3.1/VertexBuffer)&gt; } | 
 | indexBuffer | Nullable&lt;WebGLBuffer&gt; | 
 | effect | [Effect](/classes/3.1/Effect) | 
### unbindInstanceAttributes() &rarr; void


### releaseVertexArrayObject(vao) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vao | WebGLVertexArrayObject | 

### createInstancesBuffer(capacity) &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
 | capacity | number | 

### deleteInstancesBuffer(buffer) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | WebGLBuffer | 

### updateAndBindInstancesBuffer(instancesBuffer, data, offsetLocations, [InstancingAttributeInfo](/classes/3.1/InstancingAttributeInfo)) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | instancesBuffer | WebGLBuffer | 
 | data | Float32Array | 
### applyStates() &rarr; void


### draw(useTriangles, indexStart, indexCount, instancesCount) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | useTriangles | boolean | 
 | indexStart | number | 
 | indexCount | number | 
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
 | useTriangles | boolean | 
 | verticesStart | number | 
 | verticesCount | number | 
### createEffect(baseName, attributesNamesOrOptions, [EffectCreationOptions](/classes/3.1/EffectCreationOptions), uniformsNamesOrEngine, [Engine](/classes/3.1/Engine), samplers, defines, fallbacks, onCompiled, onError, indexParameters) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | baseName | any |  The base name of the effect (The name of file without .fragment.fx or .vertex.fx)
 | attributesNamesOrOptions | string[] or [EffectCreationOptions](/classes/3.1/EffectCreationOptions) | 
 | uniformsNamesOrEngine | string[] or [Engine](/classes/3.1/Engine) | 
optional | samplers | string[] |  An array of string used to represent textures
optional | defines | string | 
optional | fallbacks | [EffectFallbacks](/classes/3.1/EffectFallbacks) | 
optional | onCompiled |  | effect | [Effect](/classes/3.1/Effect) | 

 | 
optional | onError |  | effect | [Effect](/classes/3.1/Effect) | 
 | errors | string | 
### createEffectForParticles(fragmentName, uniformsNames, samplers, defines, fallbacks, onCompiled, onError) &rarr; [Effect](/classes/3.1/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | fragmentName | string | 
optional | uniformsNames | string[] | 
optional | samplers | string[] | 
optional | defines | string | 
optional | fallbacks | [EffectFallbacks](/classes/3.1/EffectFallbacks) | 
optional | onCompiled |  | effect | [Effect](/classes/3.1/Effect) | 

 | 
optional | onError |  | effect | [Effect](/classes/3.1/Effect) | 
### createRawShaderProgram(vertexCode, fragmentCode, context) &rarr; WebGLProgram



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexCode | string | 
 | fragmentCode | string | 
optional | context | WebGLRenderingContext | 
### createShaderProgram(vertexCode, fragmentCode, defines, context) &rarr; WebGLProgram



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexCode | string | 
 | fragmentCode | string | 
 | defines | Nullable&lt;string&gt; | 
### getUniforms(shaderProgram, uniformsNames) &rarr; Nullable&lt;WebGLUniformLocation&gt;[]



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
### enableEffect(effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 

### setIntArray(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | Int32Array | 
### setIntArray2(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | Int32Array | 
### setIntArray3(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | Int32Array | 
### setIntArray4(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | Int32Array | 
### setFloatArray(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | Float32Array | 
### setFloatArray2(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | Float32Array | 
### setFloatArray3(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | Float32Array | 
### setFloatArray4(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | Float32Array | 
### setArray(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | number[] | 
### setArray2(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | number[] | 
### setArray3(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | number[] | 
### setArray4(uniform, array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | array | number[] | 
### setMatrices(uniform, matrices) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | matrices | Float32Array | 
### setMatrix(uniform, matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | matrix | [Matrix](/classes/3.1/Matrix) | 
### setMatrix3x3(uniform, matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | matrix | Float32Array | 
### setMatrix2x2(uniform, matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | matrix | Float32Array | 
### setFloat(uniform, value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | value | number | 
### setFloat2(uniform, x, y) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | x | number | 
 | y | number | 
### setFloat3(uniform, x, y, z) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | x | number | 
 | y | number | 
### setBool(uniform, bool) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | bool | number | 
### setFloat4(uniform, x, y, z, w) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | x | number | 
 | y | number | 
 | z | number | 
### setColor3(uniform, color3) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | color3 | [Color3](/classes/3.1/Color3) | 
### setColor4(uniform, color3, alpha) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | color3 | [Color3](/classes/3.1/Color3) | 
 | alpha | number | 
### setState(culling, zOffset, force, reverseSide) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | culling | boolean | 
optional | zOffset | number | 
optional | force | boolean | 
### setZOffset(value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 

### getZOffset() &rarr; number


### setDepthBuffer(enable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | 

### getDepthWrite() &rarr; boolean


### setDepthWrite(enable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | 

### setColorWrite(enable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | 

### getColorWrite() &rarr; boolean


### setAlphaConstants(r, g, b, a) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | 
 | g | number | 
 | b | number | 
### setAlphaMode(mode, noDepthWriteChange) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mode | number | 
optional | noDepthWriteChange | boolean | 
### getAlphaMode() &rarr; number


### setAlphaTesting(enable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | 

### getAlphaTesting() &rarr; boolean


### wipeCaches(bruteForce) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | bruteForce | boolean | 

### setTextureFormatToUse(formatsAvailable) &rarr; Nullable&lt;string&gt;

Set the compressed texture format to use, based on the formats you have, and the formats

supported by the hardware / browser.

         * Khronos [Texture](/classes/3.1/Texture) Container (.ktx) files are used to support this.  This format has the

advantage of being specifically designed for OpenGL.  Header elements directly correspond

to API arguments needed to compressed textures.  This puts the burden on the container

generator to house the arcane code for determining these for current & future formats.

         * for description see https://www.khronos.org/opengles/sdk/tools/KTX/

for file layout see https://www.khronos.org/opengles/sdk/tools/KTX/file_format_spec/

         * Note: The result of this call is not taken into account when a texture is base64.

         * @param {Array<string>} formatsAvailable- The list of those format families you have created

on your server.  Syntax: '-' + format family + '.ktx'.  (Case and order do not matter.)

         * Current families are astc, dxt, pvrtc, etc2, & etc1.

@returns The extension selected.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | formatsAvailable | Array&lt;string&gt; | 

### createTexture(urlArg, noMipmap, invertY, scene, samplingMode, onLoad, onError, buffer, HTMLImageElement, fallBack, format) &rarr; [InternalTexture](/classes/3.1/InternalTexture)

Usually called from BABYLON.[Texture](/classes/3.1/Texture).ts.  Passed information to create a WebGLTexture.

                        1. A conventional http URL, e.g. 'http://...' or 'file://...'

                        2. A base64 string of in-line texture data, e.g. 'data:image/jpg;base64,/...'

                        3. An indicator that data being passed using the buffer parameter, e.g. 'data:mytexture.jpg'

         * @param {boolean} noMipmap- When true, no mipmaps shall be generated.  Ignored for compressed textures.  They must be in the file.

         * @returns {WebGLTexture} for assignment back into BABYLON.[Texture](/classes/3.1/Texture)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | urlArg | Nullable&lt;string&gt; | 
 | noMipmap | boolean | 
 | invertY | boolean | 
 | scene | Nullable&lt;[Scene](/classes/3.1/Scene)&gt; | 
optional | samplingMode | number | 
optional | onLoad | Nullable&lt;() =&gt; void&gt; | 
optional | onError | Nullable&lt;() =&gt; void&gt; | 
optional | buffer | Nullable&lt;ArrayBuffer&gt; or HTMLImageElement | 
optional | fallBack | Nullable&lt;[InternalTexture](/classes/3.1/InternalTexture)&gt; | 
### updateRawTexture(texture, data, format, invertY, compression) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [InternalTexture](/classes/3.1/InternalTexture) | 
 | data | ArrayBufferView | 
 | format | number | 
 | invertY | boolean | 
### createRawTexture(data, width, height, format, generateMipMaps, invertY, samplingMode, compression) &rarr; [InternalTexture](/classes/3.1/InternalTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | ArrayBufferView | 
 | width | number | 
 | height | number | 
 | format | number | 
 | generateMipMaps | boolean | 
 | invertY | boolean | 
 | samplingMode | number | 
### createDynamicTexture(width, height, generateMipMaps, samplingMode) &rarr; [InternalTexture](/classes/3.1/InternalTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | generateMipMaps | boolean | 
### updateTextureSamplingMode(samplingMode, texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | samplingMode | number | 
 | texture | [InternalTexture](/classes/3.1/InternalTexture) | 
### updateDynamicTexture(texture, canvas, invertY, premulAlpha, format) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [InternalTexture](/classes/3.1/InternalTexture) | 
 | canvas | HTMLCanvasElement | 
 | invertY | boolean | 
optional | premulAlpha | boolean | 
### updateVideoTexture(texture, video, invertY) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [InternalTexture](/classes/3.1/InternalTexture) | 
 | video | HTMLVideoElement | 
 | invertY | boolean | 
### createRenderTargetTexture(size, options, [RenderTargetCreationOptions](/classes/3.1/RenderTargetCreationOptions)) &rarr; [InternalTexture](/classes/3.1/InternalTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | any | 
 | options | boolean or [RenderTargetCreationOptions](/classes/3.1/RenderTargetCreationOptions) | 
### createMultipleRenderTarget(size, options) &rarr; [InternalTexture](/classes/3.1/InternalTexture)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | any | 
 | options | any | 
### updateRenderTargetTextureSampleCount(texture, samples) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | Nullable&lt;[InternalTexture](/classes/3.1/InternalTexture)&gt; | 
 | samples | number | 
### createRenderTargetCubeTexture(size, options) &rarr; [InternalTexture](/classes/3.1/InternalTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | number | 
optional | options | [RenderTargetCreationOptions](/classes/3.1/RenderTargetCreationOptions) | 
### createPrefilteredCubeTexture(rootUrl, scene, scale, offset, onLoad, onError, format, forcedExtension) &rarr; [InternalTexture](/classes/3.1/InternalTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | 
 | scene | Nullable&lt;[Scene](/classes/3.1/Scene)&gt; | 
 | scale | number | 
 | offset | number | 
 | onLoad |  | internalTexture | Nullable&lt;[InternalTexture](/classes/3.1/InternalTexture)&gt; | 

 | 
optional | onError | Nullable&lt;(message: string, exception: any) =&gt; void&gt; | 
optional | format | number | 
### createCubeTexture(rootUrl, scene, files, noMipmap, onLoad, onError, format, forcedExtension) &rarr; [InternalTexture](/classes/3.1/InternalTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | 
 | scene | Nullable&lt;[Scene](/classes/3.1/Scene)&gt; | 
 | files | Nullable&lt;string[]&gt; | 
optional | noMipmap | boolean | 
optional | onLoad | Nullable&lt;(data: any) =&gt; void&gt; | 
optional | onError | Nullable&lt;(message: string, exception: any) =&gt; void&gt; | 
optional | format | number | 
### updateRawCubeTexture(texture, data, format, type, invertY, compression, level) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [InternalTexture](/classes/3.1/InternalTexture) | 
 | data | ArrayBufferView[] | 
 | format | number | 
 | type | number | 
 | invertY | boolean | 
optional | compression | Nullable&lt;string&gt; | 
### createRawCubeTexture(data, size, format, type, generateMipMaps, invertY, samplingMode, compression) &rarr; [InternalTexture](/classes/3.1/InternalTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Nullable&lt;ArrayBufferView[]&gt; | 
 | size | number | 
 | format | number | 
 | type | number | 
 | generateMipMaps | boolean | 
 | invertY | boolean | 
 | samplingMode | number | 
### createRawCubeTextureFromUrl(url, scene, size, format, type, noMipmap, callback, mipmmapGenerator) &rarr; (url, scene, size, format, type, noMipmap, callback, mipmmapGenerator)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | size | number | 
 | format | number | 
 | type | number | 
 | noMipmap | boolean | 
 | callback |  | ArrayBuffer | ArrayBuffer | 

 | 
### Nullable() &rarr; ()


### bindSamplers(effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 

### setTextureFromPostProcess(channel, postProcess) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | number | 
 | postProcess | [PostProcess](/classes/3.1/PostProcess) | 
### unbindAllTextures() &rarr; void


### setTexture(channel, uniform, texture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | number | 
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | texture | Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt; | 
### setTextureArray(channel, uniform, textures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | channel | number | 
 | uniform | Nullable&lt;WebGLUniformLocation&gt; | 
 | textures | [BaseTexture](/classes/3.1/BaseTexture)[] | 
### readPixels(x, y, width, height) &rarr; Uint8Array



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | width | number | 
### addExternalData(key, data) &rarr; boolean

Add an externaly attached data from its key.

This method call will fail and return false, if such key already exists.

If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.

@return true if no such key were already present and the data was added successfully, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data
 | data | T |  the data object to associate to the key for this [Engine](/classes/3.1/Engine) instance
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
 | factory |  | k | string | 

### removeExternalData(key) &rarr; boolean

Remove an externaly attached data from the [Engine](/classes/3.1/Engine) instance

@return true if the data was successfully removed, false if it doesn't exist

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data

### unbindAllAttributes() &rarr; void


### releaseEffects() &rarr; void


### dispose() &rarr; void


### displayLoadingUI() &rarr; void


### hideLoadingUI() &rarr; void


### attachContextLostEvent(callback) &rarr; (callback)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback |  | 

### attachContextRestoredEvent(callback) &rarr; (callback)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback |  | 

### getVertexShaderSource(program) &rarr; Nullable&lt;string&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | program | WebGLProgram | 

### getFragmentShaderSource(program) &rarr; Nullable&lt;string&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | program | WebGLProgram | 

### getError() &rarr; number


### getFps() &rarr; number


### getDeltaTime() &rarr; number


### createQuery() &rarr; WebGLQuery


### deleteQuery(query) &rarr; [Engine](/classes/3.1/Engine)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | query | WebGLQuery | 

### isQueryResultAvailable(query) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | query | WebGLQuery | 

### getQueryResult(query) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | query | WebGLQuery | 

### beginQuery(algorithmType, query) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | algorithmType | number | 
 | query | WebGLQuery | 
### endQuery(algorithmType) &rarr; [Engine](/classes/3.1/Engine)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | algorithmType | number | 

### static isSupported() &rarr; boolean


