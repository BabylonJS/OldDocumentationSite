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
optional | options | { undefined: boolean,  undefined: boolean,  undefined: number } |  - further options to be sent to the getContext function   Can contains these parameters : generateDepthBuffer, generateMipMaps, samplingMode
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

### loadingScreen : ILoadingScreen



### loadingUIText : string

Default Value: &quot;Loading&quot;

Sets the innerHTML for the loading UI created in to displayLoadingUI : void

### loadingUIBackgroundColor : string

Get/Set the background color for the loading UI created in to displayLoadingUI : void

## Methods

### resetTextureCacheundefined &rarr; void


### getGlInfoundefined &rarr; { undefined: string,  undefined: string,  undefined: string }


### getAspectRatioundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getRenderWidthundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getRenderHeightundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getRenderingCanvasundefined &rarr; HTMLCanvasElement


### getRenderingCanvasClientRectundefined &rarr; ClientRect


### setHardwareScalingLevelundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getHardwareScalingLevelundefined &rarr; number


### getLoadedTexturesCacheundefined &rarr; WebGLTexture[]


### getCapsundefined &rarr; [EngineCapabilities](/classes/2.4/EngineCapabilities)


### resetDrawCallsundefined &rarr; void


### getDepthFunctionundefined &rarr; number


### setDepthFunctionundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setDepthFunctionToGreaterundefined &rarr; void


### setDepthFunctionToGreaterOrEqualundefined &rarr; void


### setDepthFunctionToLessundefined &rarr; void


### setDepthFunctionToLessOrEqualundefined &rarr; void


### stopRenderLoopundefined &rarr; void

stop executing a render loop function and remove it from the execution array

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### runRenderLoopundefined &rarr; void

Register and execute a render loop. The engine can have more than one render function.

@example

engine.runRenderLoop(function () {

     scene.render()

})

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### switchFullscreenundefined &rarr; void

Toggle full screen mode.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### clearundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setViewportundefined &rarr; void

Set the WebGL's viewport

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setDirectViewportundefined &rarr; [Viewport](/classes/2.4/Viewport)

Directly set the WebGL [Viewport](/classes/2.4/Viewport)

The x, y, width & height are directly passed to the WebGL call

@return the current viewport Object (if any) that is being replaced by this call. You can restore this viewport later on to go back to the original state.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### beginFrameundefined &rarr; void


### endFrameundefined &rarr; void


### resizeundefined &rarr; void

resize the view according to the canvas' size.

@example

  window.addEventListener("resize", function () {

     engine.resize();

  });
### setSizeundefined &rarr; void

force a specific size of the canvas

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### bindFramebufferundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unBindFramebufferundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### generateMipMapsForCubemapundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### flushFramebufferundefined &rarr; void


### restoreDefaultFramebufferundefined &rarr; void


### createVertexBufferundefined &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createDynamicVertexBufferundefined &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateDynamicVertexBufferundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createIndexBufferundefined &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### bindBuffersundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### bindMultiBuffersundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createInstancesBufferundefined &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### deleteInstancesBufferundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateAndBindInstancesBufferundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unBindInstancesBufferundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### applyStatesundefined &rarr; void


### drawundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### drawPointCloudsundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### drawUnIndexedundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createEffectundefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createEffectForParticlesundefined &rarr; [Effect](/classes/2.4/Effect)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createShaderProgramundefined &rarr; WebGLProgram



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getUniformsundefined &rarr; WebGLUniformLocation[]



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAttributesundefined &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### enableEffectundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setArrayundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setArray2undefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setArray3undefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setArray4undefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setMatricesundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setMatrixundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setMatrix3x3undefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setMatrix2x2undefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setFloatundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setFloat2undefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setFloat3undefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setBoolundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setFloat4undefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setColor3undefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setColor4undefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setStateundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setDepthBufferundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getDepthWriteundefined &rarr; boolean


### setDepthWriteundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setColorWriteundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setAlphaModeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAlphaModeundefined &rarr; number


### setAlphaTestingundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAlphaTestingundefined &rarr; boolean


### wipeCachesundefined &rarr; void


### setSamplingModeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createTextureundefined &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateRawTextureundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createRawTextureundefined &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createDynamicTextureundefined &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateTextureSamplingModeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateDynamicTextureundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateVideoTextureundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createRenderTargetTextureundefined &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createRenderTargetCubeTextureundefined &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createCubeTextureundefined &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateTextureSizeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createRawCubeTextureundefined &rarr; WebGLTexture



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### bindSamplersundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setTextureFromPostProcessundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unbindAllTexturesundefined &rarr; void


### setTextureundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### readPixelsundefined &rarr; Uint8Array



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### addExternalDataundefined &rarr; boolean

Add an externaly attached data from its key.

This method call will fail and return false, if such key already exists.

If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.

@return true if no such key were already present and the data was added successfully, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getExternalDataundefined &rarr; T

Get an externaly attached data from its key

@return the associated data, if present (can be null), or undefined if not present

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getOrAddExternalDataWithFactoryundefined &rarr; T

Get an externaly attached data from its key, create it using a factory if it's not already present

@return the associated data, can be null if the factory returned null.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### removeExternalDataundefined &rarr; boolean

Remove an externaly attached data from the [Engine](/classes/2.4/Engine) instance

@return true if the data was successfully removed, false if it doesn't exist

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### releaseInternalTextureundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disposeundefined &rarr; void


### displayLoadingUIundefined &rarr; void


### hideLoadingUIundefined &rarr; void


### getFpsundefined &rarr; number


### getDeltaTimeundefined &rarr; number


### static isSupportedundefined &rarr; boolean


