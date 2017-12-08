---
TAGS:
---
## Description

class [PerformanceMonitor](/classes/3.1/PerformanceMonitor)

Performance monitor tracks rolling average frame-time and frame-time variance over a user defined sliding-window

## Constructor

## new [PerformanceMonitor](/classes/3.1/PerformanceMonitor)(frameSampleSize)

constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | frameSampleSize | number |  The number of samples required to saturate the sliding window

## Members

### averageFrameTime : number

Returns the average frame time in milliseconds over the sliding window (or the subset of frames sampled so far)

@return Average frame time in milliseconds
### averageFrameTimeVariance : number

Returns the variance frame time in milliseconds over the sliding window (or the subset of frames sampled so far)

@return Frame time variance in milliseconds squared
### instantaneousFrameTime : number

Returns the frame time of the most recent frame

@return Frame time in milliseconds
### averageFPS : number

Returns the average framerate in frames per second over the sliding window (or the subset of frames sampled so far)

@return Framerate in frames per second
### instantaneousFPS : number

Returns the average framerate in frames per second using the most recent frame time

@return Framerate in frames per second
### isSaturated : boolean

Returns true if enough samples have been taken to completely fill the sliding window

@return true if saturated
### isEnabled : boolean

Returns true if sampling is enabled

@return true if enabled
## Methods

### sampleFrame(timeMs) &rarr; void

Samples current frame

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | timeMs | number |  A timestamp in milliseconds of the current frame to compare with other frames

### enable() &rarr; void

Enables contributions to the sliding window sample set
### disable() &rarr; void

Disables contributions to the sliding window sample set

Samples will not be interpolated over the disabled period
### reset() &rarr; void

Resets performance monitor
