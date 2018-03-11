---
TAGS:
---
## Description

class [RuntimeAnimation](/classes/3.1/RuntimeAnimation)



## Constructor

## new [RuntimeAnimation](/classes/3.1/RuntimeAnimation)(target, animation)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | 
 | animation | [Animation](/classes/3.1/Animation) | 
## Members

### currentFrame : number


### animation : [Animation](/classes/3.1/Animation)


## Methods

### reset() &rarr; void


### isStopped() &rarr; boolean


### dispose() &rarr; void


### setValue(currentValue, blend) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | currentValue | any | 
optional | blend | boolean | 
### goToFrame(frame) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frame | number | 

### animate(delay, from, to, loop, speedRatio, blend) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | delay | number | 
 | from | number | 
 | to | number | 
 | loop | boolean | 
 | speedRatio | number | 
