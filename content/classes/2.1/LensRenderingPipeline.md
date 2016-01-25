---
ID_PAGE: 25297
PG_TITLE: LensRenderingPipeline
PG_VERSION: 2.1
TAGS:
    - PostProcess
    - PostProcessRenderPipeline
---
##new [LensRenderingPipeline](/classes/LensRenderingPipeline)(name, parameters, scene, ratio, cameras)

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| name | string | The rendering pipeline name
&nbsp;| parameters | any | An object containing all parameters (see above)
&nbsp;| scene | [Scene](/classes/Scene) | The scene linked to this pipeline
optional | ratio | number | The size of the postprocesses (0.5 means that your postprocess will have a width = canvas.width 0.5 and a height = canvas.height 0.5)
optional | cameras | [Camera](/classes/Camera)[] | The array of cameras that the rendering pipeline will be attached to
---

Effect parameters are as follow:


&nbsp; &nbsp; chromatic_aberration: number; // from 0 to x (1 for realism)

&nbsp; &nbsp; edge_blur: number; // from 0 to x (1 for realism)

&nbsp; &nbsp; distortion: number; // from 0 to x (1 for realism)

&nbsp; &nbsp; grain_amount: number; // from 0 to 1

&nbsp; &nbsp; grain_texture: BABYLON.Texture; // texture to use for grain effect; if unset, use random B&amp;W noise

&nbsp; &nbsp; dof_focus_distance: number; // depth-of-field: focus distance; unset to disable (disabled by default)

&nbsp; &nbsp; dof_aperture: number; // depth-of-field: focus blur bias (default: 1)

&nbsp; &nbsp; dof_darken: number; // depth-of-field: darken that which is out of focus (from 0 to 1, disabled by default)

&nbsp; &nbsp; dof_pentagon: boolean; // depth-of-field: makes a pentagon-like &quot;bokeh&quot; effect

&nbsp; &nbsp; dof_gain: number; // depth-of-field: highlights gain; unset to disable (disabled by default)

&nbsp; &nbsp; dof_threshold: number; // depth-of-field: highlights threshold (default: 1)

&nbsp; &nbsp; blur_noise: boolean; // add a little bit of noise to the blur (default: true)


Note: if an effect parameter is unset, effect is disabled

##Extends
&nbsp;[PostProcessRenderPipeline](/classes/PostProcessRenderPipeline)
##Members

###LensChromaticAberrationEffect : string


The chromatic aberration [PostProcess](/classes/PostProcess) id in the pipeline

@type {string}

###HighlightsEnhancingEffect : string


The highlights enhancing [PostProcess](/classes/PostProcess) id in the pipeline

@type {string}

###LensDepthOfFieldEffect : string


The depth-of-field [PostProcess](/classes/PostProcess) id in the pipeline

@type {string}



##Methods

###setEdgeBlur(amount) &rarr; void

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| amount | number | 
---

###disableEdgeBlur() &rarr; void


###setGrainAmount(amount) &rarr; void

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| amount | number | 
---

###disableGrain() &rarr; void


###setChromaticAberration(amount) &rarr; void

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| amount | number | 
---

###disableChromaticAberration() &rarr; void


###setEdgeDistortion(amount) &rarr; void

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| amount | number | 
---

###disableEdgeDistortion() &rarr; void


###setFocusDistance(amount) &rarr; void

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| amount | number | 
---

###disableDepthOfField() &rarr; void


###setAperture(amount) &rarr; void

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| amount | number | 
---

###setDarkenOutOfFocus(amount) &rarr; void

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| amount | number | 
---

###enablePentagonBokeh() &rarr; void


###disablePentagonBokeh() &rarr; void


###enableNoiseBlur() &rarr; void


###disableNoiseBlur() &rarr; void


###setHighlightsGain(amount) &rarr; void

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| amount | number | 
---

###setHighlightsThreshold(amount) &rarr; void

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
&nbsp;| amount | number | 
---

###disableHighlights() &rarr; void


###dispose(disableDepthRender) &rarr; void
Removes the internal pipeline assets and detaches the pipeline from the scene cameras

####Parameters
&nbsp;| Name | Type | Description
---|---|---|---
optional | disableDepthRender | boolean | 
---
