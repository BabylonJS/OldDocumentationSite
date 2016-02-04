---
ID_PAGE: 25278
PG_TITLE: PostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [PostProcess](/classes/2.3/PostProcess)



## Constructor

##  new [PostProcess](/classes/2.3/PostProcess)(name, fragmentUrl, parameters, samplers, ratio, camera, samplingMode, engine, reusable, defines, textureType)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The postprocess name
 | fragmentUrl | string |   The URL of .fragment.fx file where you will code the GLSL shader used for every pixel of the screen
 | parameters | string[] |   A list of your uniforms parameters
 | samplers | string[] |   A list of additionnal samplers
 | ratio | number |   The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/2.3/Camera) |   The given camera
optional | samplingMode | number |   [Texture](/classes/2.3/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.3/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.3/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.3/Engine) |   The engine to attach the postprocess.
optional | reusable | boolean |   Indicates if the postprocess can be reused multiple times on the same camera
optional | defines | string |   
## Members

### name : string



### onApply : (effect: [Effect](/classes/2.3/Effect)) =&gt; void



### onBeforeRender : (effect: [Effect](/classes/2.3/Effect)) =&gt; void



### onAfterRender : (effect: [Effect](/classes/2.3/Effect)) =&gt; void



### onSizeChanged : () =&gt; void



### onActivate : (camera: [Camera](/classes/2.3/Camera)) =&gt; void



### width : number



### height : number



### renderTargetSamplingMode : number



### clearColor : [Color4](/classes/2.3/Color4)



### isSupported : boolean



## Methods

### updateEffect(defines) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | defines | string |   

### isReusable() &rarr; boolean


### activate(camera, sourceTexture) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.3/Camera) |   The given camera
optional | sourceTexture | WebGLTexture |   Optional textures to add
### apply() &rarr; [Effect](/classes/2.3/Effect)


### dispose(camera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.3/Camera) |   The given camera

