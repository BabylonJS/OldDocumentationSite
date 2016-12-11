---
TAGS:
---
## Description

class [PerfCounter](/classes/2.5/PerfCounter)

This class is used to track a performance counter which is number based.

The user has access to many properties which give statistics of different nature

The implementer can track two kinds of Performance Counter: time and count

For time you can optionally call fetchNewFrame() to notify the start of a new frame to monitor, then call beginMonitoring() to start and endMonitoring() to record the lapsed time. endMonitoring takes a newFrame parameter for you to specify if the monitored time should be set for a new frame or accumulated to the current frame being monitored.

For count you first have to call fetchNewFrame() to notify the start of a new frame to monitor, then call addCount() how many time required to increment the count value you monitor.

## Constructor

## new [PerfCounter](/classes/2.5/PerfCounter)()


## Members

### min : number

Returns the smallest value ever

### max : number

Returns the biggest value ever

### average : number

Returns the average value since the performance counter is running

### lastSecAverage : number

Returns the average value of the last second the counter was monitored

### current : number

Returns the current value

### total : number



## Methods

### fetchNewFrame() &rarr; void

Call this method to start monitoring a new frame.

This scenario is typically used when you accumulate monitoring time many times for a single frame, you call this method at the start of the frame, then beginMonitoring to start recording and endMonitoring(false) to accumulated the recorded time to the [PerfCounter](/classes/2.5/PerfCounter) or addCount() to accumulate a monitored count.
### addCount(newCount, fetchResult) &rarr; void

Call this method to monitor a count of something (e.g. mesh drawn in viewport count)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | newCount | number |  the count value to add to the monitored count
 | fetchResult | boolean |  true when it's the last time in the frame you add to the counter and you wish to update the statistics properties (min/max/average), false if you only want to update statistics.
### beginMonitoring() &rarr; void

Start monitoring this performance counter
### endMonitoring(newFrame) &rarr; void

Compute the time lapsed since the previous beginMonitoring() call.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | newFrame | boolean |  true by default to fetch the result and monitor a new frame, if false the time monitored will be added to the current frame counter

