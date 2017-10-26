---
TAGS:
---
## Description

class [RollingAverage](/classes/3.1/RollingAverage)

[RollingAverage](/classes/3.1/RollingAverage)

Utility to efficiently compute the rolling average and variance over a sliding window of samples

## Constructor

## new [RollingAverage](/classes/3.1/RollingAverage)(length)

constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | length | number |  The number of samples required to saturate the sliding window

## Members

### average : number

Current average

### variance : number

Current variance

## Methods

### add(v) &rarr; void

Adds a sample to the sample set

#### Parameters
 | Name | Type | Description
---|---|---|---
 | v | number |  The sample value

### history(i) &rarr; number

Returns previously added values or null if outside of history or outside the sliding window domain

@return Value previously recorded with add() or null if outside of range

#### Parameters
 | Name | Type | Description
---|---|---|---
 | i | number |  Index in history. For example, pass 0 for the most recent value and 1 for the value before that

### isSaturated() &rarr; boolean

Returns true if enough samples have been taken to completely fill the sliding window

@return true if sample-set saturated
### reset() &rarr; void

Resets the rolling average (equivalent to 0 samples taken so far)
