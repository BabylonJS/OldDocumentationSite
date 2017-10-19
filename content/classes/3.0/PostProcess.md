---
ID_PAGE: 25278
PG_TITLE: PostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [PostProcess](/classes/3.0/PostProcess)

Postprocesses allow you to create 2D effects on top of your scene.

A postprocess is linked to a camera and can be part of a chain of postprocesss where each postprocess use the result of the previous one as input for its own processing.

A tutorial about post process can be found here : https://doc.babylonjs.com/How_To/how_to_use_postprocessrenderpipeline

## Constructor

## new [PostProcess](/classes/3.0/PostProcess)(name, fragmentUrl, parameters, samplers, options, PostProcessOptions, camera, samplingMode, engine, reusable, defines, textureType, vertexUrl, indexParameters, blockCompilation)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The postprocess name
 | fragmentUrl | string |      The URL of .fragment.fx file where you will code the GLSL shader used for every pixel of the screen
 | parameters | string[] |      A list of your uniforms parameters
 | samplers | string[] |      A list of additionnal samplers
 | options | number or PostProcessOptions |   
 | camera | [Camera](/classes/3.0/Camera) |      The given camera
optional | samplingMode | number |      [Texture](/classes/3.0/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/3.0/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/3.0/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/3.0/Engine) |      The engine to attach the postprocess.
optional | reusable | boolean |      Indicates if the postprocess can be reused multiple times on the same camera
optional | defines | string |      
optional | textureType | number | 
optional | vertexUrl | string | 
optional | indexParameters | any | 
## Members

### name : string



### width : number

default : -1

### height : number

default : -1

### renderTargetSamplingMode : number

default : [Texture](/classes/3.0/Texture).NEAREST_SAMPLINGMODE

Other possible values : [Texture](/classes/3.0/Texture).BILINEAR_SAMPLINGMODE, [Texture](/classes/3.0/Texture).TRILINEAR_SAMPLINGMODE

### clearColor : [Color4](/classes/3.0/Color4)



### autoClear : boolean



### alphaMode : number



### alphaConstants : [Color4](/classes/3.0/Color4)



### enablePixelPerfectMode : boolean



### scaleMode : number



### alwaysForcePOT : boolean



### samples : number



### onActivateObservable : [Observable](/classes/3.0/Observable)&lt;[Camera](/classes/3.0/Camera)&gt;

An event triggered when the postprocess is activated.

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onActivate : (camera: [Camera](/classes/3.0/Camera)) =&gt; void

[Action](/classes/3.0/Action) to execute just before the postprocess is activated

### onSizeChangedObservable : [Observable](/classes/3.0/Observable)&lt;[PostProcess](/classes/3.0/PostProcess)&gt;

An event triggered when the postprocess changes its size.

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onSizeChanged : (postProcess: [PostProcess](/classes/3.0/PostProcess)) =&gt; void

[Action](/classes/3.0/Action) to execute just before the postprocess' size is changed

### onApplyObservable : [Observable](/classes/3.0/Observable)&lt;[Effect](/classes/3.0/Effect)&gt;

An event triggered when the postprocess applies its effect.

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onApply : (effect: [Effect](/classes/3.0/Effect)) =&gt; void

[Action](/classes/3.0/Action) to execute just before the postprocess is applied

### onBeforeRenderObservable : [Observable](/classes/3.0/Observable)&lt;[Effect](/classes/3.0/Effect)&gt;

An event triggered before rendering the postprocess

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onBeforeRender : (effect: [Effect](/classes/3.0/Effect)) =&gt; void

[Action](/classes/3.0/Action) to execute just before the postprocess is rendered

### onAfterRenderObservable : [Observable](/classes/3.0/Observable)&lt;[Effect](/classes/3.0/Effect)&gt;

An event triggered after rendering the postprocess

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onAfterRender : (efect: [Effect](/classes/3.0/Effect)) =&gt; void



### outputTexture : WebGLTexture



### texelSize : [Vector2](/classes/3.0/Vector2)



### isSupported : boolean



### aspectRatio : number



## Methods

### getCamera() &rarr; [Camera](/classes/3.0/Camera)


### getEngine() &rarr; [Engine](/classes/3.0/Engine)


### shareOutputWith(postProcess) &rarr; [PostProcess](/classes/3.0/PostProcess)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](/classes/3.0/PostProcess) | 

### updateEffect(defines, uniforms, samplers, indexParameters) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | defines | string |      
optional | uniforms | string[] | 
optional | samplers | string[] |      A list of additionnal samplers
### isReusable() &rarr; boolean

Tests if the Postprocess is set to reusable
### markTextureDirty() &rarr; void


### activate(camera, sourceTexture, forceDepthStencil) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/3.0/Camera) |      The given camera
optional | sourceTexture | WebGLTexture |      Optional textures to add
optional | forceDepthStencil | boolean | 
### apply() &rarr; [Effect](/classes/3.0/Effect)

Applies this postprocess
### dispose(camera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/3.0/Camera) |      The given camera

