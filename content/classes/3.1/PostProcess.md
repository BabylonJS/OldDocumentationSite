---
ID_PAGE: 25278
PG_TITLE: PostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [PostProcess](/classes/3.1/PostProcess)



## Constructor

## new [PostProcess](/classes/3.1/PostProcess)(name, fragmentUrl, parameters, samplers, options, PostProcessOptions, camera, samplingMode, engine, reusable, defines, textureType, vertexUrl, indexParameters, blockCompilation)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | fragmentUrl | string | 
 | parameters | Nullable&lt;string[]&gt; | 
 | samplers | Nullable&lt;string[]&gt; | 
 | options | number or PostProcessOptions | 
 | camera | Nullable&lt;[Camera](/classes/3.1/Camera)&gt; | 
optional | samplingMode | number | 
optional | engine | [Engine](/classes/3.1/Engine) | 
optional | reusable | boolean | 
optional | defines | Nullable&lt;string&gt; | 
optional | textureType | number | 
optional | vertexUrl | string | 
optional | indexParameters | any | 
## Members

### name : string



### width : number



### height : number



### renderTargetSamplingMode : number



### clearColor : [Color4](/classes/3.1/Color4)



### autoClear : boolean



### alphaMode : number



### alphaConstants : [Color4](/classes/3.1/Color4)



### enablePixelPerfectMode : boolean



### scaleMode : number



### alwaysForcePOT : boolean



### samples : number



### adaptScaleToCurrentViewport : boolean



### onActivateObservable : [Observable](/classes/3.1/Observable)&lt;[Camera](/classes/3.1/Camera)&gt;

An event triggered when the postprocess is activated.

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onActivate : (camera: [Camera](/classes/3.1/Camera)) =&gt; void



### onSizeChangedObservable : [Observable](/classes/3.1/Observable)&lt;[PostProcess](/classes/3.1/PostProcess)&gt;

An event triggered when the postprocess changes its size.

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onSizeChanged : (postProcess: [PostProcess](/classes/3.1/PostProcess)) =&gt; void



### onApplyObservable : [Observable](/classes/3.1/Observable)&lt;[Effect](/classes/3.1/Effect)&gt;

An event triggered when the postprocess applies its effect.

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onApply : (effect: [Effect](/classes/3.1/Effect)) =&gt; void



### onBeforeRenderObservable : [Observable](/classes/3.1/Observable)&lt;[Effect](/classes/3.1/Effect)&gt;

An event triggered before rendering the postprocess

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onBeforeRender : (effect: [Effect](/classes/3.1/Effect)) =&gt; void



### onAfterRenderObservable : [Observable](/classes/3.1/Observable)&lt;[Effect](/classes/3.1/Effect)&gt;

An event triggered after rendering the postprocess

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onAfterRender : (efect: [Effect](/classes/3.1/Effect)) =&gt; void



### outputTexture : [InternalTexture](/classes/3.1/InternalTexture)



### texelSize : [Vector2](/classes/3.1/Vector2)



### isSupported : boolean



### aspectRatio : number



## Methods

### getCamera() &rarr; [Camera](/classes/3.1/Camera)


### getEngine() &rarr; [Engine](/classes/3.1/Engine)


### getEffect() &rarr; [Effect](/classes/3.1/Effect)


### shareOutputWith(postProcess) &rarr; [PostProcess](/classes/3.1/PostProcess)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](/classes/3.1/PostProcess) | 

### updateEffect(defines, uniforms, samplers, indexParameters, onCompiled, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | defines | Nullable&lt;string&gt; | 
optional | uniforms | Nullable&lt;string[]&gt; | 
optional | samplers | Nullable&lt;string[]&gt; | 
optional | indexParameters | any | 
optional | onCompiled | (effect: [Effect](/classes/3.1/Effect)) =&gt; void | 
### isReusable() &rarr; boolean


### markTextureDirty() &rarr; void


### activate(camera, sourceTexture, forceDepthStencil) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/3.1/Camera) | 
optional | sourceTexture | Nullable&lt;[InternalTexture](/classes/3.1/InternalTexture)&gt; | 
optional | forceDepthStencil | boolean | 
### apply() &rarr; Nullable&lt;[Effect](/classes/3.1/Effect)&gt;


### dispose(camera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/3.1/Camera) | 

