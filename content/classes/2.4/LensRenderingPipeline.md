---
ID_PAGE: 25297
PG_TITLE: LensRenderingPipeline
PG_VERSION: 2.1
TAGS:
    - PostProcess
    - PostProcessRenderPipeline
---
## Description

class [LensRenderingPipeline](/classes/2.4/LensRenderingPipeline) extends [PostProcessRenderPipeline](/classes/2.4/PostProcessRenderPipeline)



## Constructor

## new [LensRenderingPipeline](/classes/2.4/LensRenderingPipeline)(name, parameters, scene, ratio, cameras)

@constructor

         * [Effect](/classes/2.4/Effect) parameters are as follow:

{

     chromatic_aberration: number;       // from 0 to x (1 for realism)

     edge_blur: number;                  // from 0 to x (1 for realism)

     distortion: number;                 // from 0 to x (1 for realism)

     grain_amount: number;               // from 0 to 1

     grain_texture: BABYLON.[Texture](/classes/2.4/Texture);     // texture to use for grain effect; if unset, use random B&W noise

     dof_focus_distance: number;         // depth-of-field: focus distance; unset to disable (disabled by default)

     dof_aperture: number;               // depth-of-field: focus blur bias (default: 1)

     dof_darken: number;                 // depth-of-field: darken that which is out of focus (from 0 to 1, disabled by default)

     dof_pentagon: boolean;              // depth-of-field: makes a pentagon-like "bokeh" effect

     dof_gain: number;                   // depth-of-field: highlights gain; unset to disable (disabled by default)

     dof_threshold: number;              // depth-of-field: highlights threshold (default: 1)

     blur_noise: boolean;                // add a little bit of noise to the blur (default: true)

}

Note: if an effect parameter is unset, effect is disabled

         * @param {string} name - The rendering pipeline name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The rendering pipeline name
 | parameters | any |    An object containing all parameters (see above)
 | scene | [Scene](/classes/2.4/Scene) |    The scene linked to this pipeline
optional | ratio | number |    The size of the postprocesses (0.5 means that your postprocess will have a width = canvas.width 0.5 and a height = canvas.height 0.5)
## Members

### LensChromaticAberrationEffect : string

The chromatic aberration [PostProcess](/classes/2.4/PostProcess) id in the pipeline

@type {string}

### HighlightsEnhancingEffect : string

The highlights enhancing [PostProcess](/classes/2.4/PostProcess) id in the pipeline

@type {string}

### LensDepthOfFieldEffect : string

The depth-of-field [PostProcess](/classes/2.4/PostProcess) id in the pipeline

@type {string}

## Methods

### setEdgeBlurundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disableEdgeBlurundefined &rarr; void


### setGrainAmountundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disableGrainundefined &rarr; void


### setChromaticAberrationundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disableChromaticAberrationundefined &rarr; void


### setEdgeDistortionundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disableEdgeDistortionundefined &rarr; void


### setFocusDistanceundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disableDepthOfFieldundefined &rarr; void


### setApertureundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setDarkenOutOfFocusundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### enablePentagonBokehundefined &rarr; void


### disablePentagonBokehundefined &rarr; void


### enableNoiseBlurundefined &rarr; void


### disableNoiseBlurundefined &rarr; void


### setHighlightsGainundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setHighlightsThresholdundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disableHighlightsundefined &rarr; void


### disposeundefined &rarr; void

Removes the internal pipeline assets and detaches the pipeline from the scene cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
