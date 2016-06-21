---
TAGS:
---
## Description

class [HDRRenderingPipeline](/classes/2.4/HDRRenderingPipeline) extends [PostProcessRenderPipeline](/classes/2.4/PostProcessRenderPipeline)



## Constructor

## new [HDRRenderingPipeline](/classes/2.4/HDRRenderingPipeline)(name, scene, ratio, originalPostProcess, cameras)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | scene | [Scene](/classes/2.4/Scene) |   
 | ratio | number |   
optional | originalPostProcess | [PostProcess](/classes/2.4/PostProcess) |   
## Members

### gaussCoeff : number

Public members



Gaussian blur coefficient

@type {number}

### gaussMean : number

Gaussian blur mean

@type {number}

### gaussStandDev : number

Gaussian blur standard deviation

@type {number}

### gaussMultiplier : number

Gaussian blur multiplier. Multiplies the blur effect

@type {number}

### exposure : number

Exposure, controls the overall intensity of the pipeline

@type {number}

### minimumLuminance : number

Minimum luminance that the post-process can output. Luminance is >= 0

@type {number}

### maximumLuminance : number

Maximum luminance that the post-process can output. Must be suprerior to minimumLuminance

@type {number}

### luminanceIncreaserate : number

Increase rate for luminance: eye adaptation speed to dark

@type {number}

### luminanceDecreaseRate : number

Decrease rate for luminance: eye adaptation speed to bright

@type {number}

### brightThreshold : number

Minimum luminance needed to compute HDR

@type {number}

### static LUM_STEPS : number



## Methods

### update() &rarr; void

Tells the pipeline to update its post-processes
### getCurrentLuminance() &rarr; number

Returns the current calculated luminance
### getOutputLuminance() &rarr; number

Returns the currently drawn luminance
### dispose() &rarr; void

Releases the rendering pipeline and its internal effects. Detaches pipeline from cameras
