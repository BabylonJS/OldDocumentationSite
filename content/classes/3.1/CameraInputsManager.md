---
TAGS:
---
## Description

class [CameraInputsManager](/classes/3.1/CameraInputsManager)



## Constructor

## new [CameraInputsManager](/classes/3.1/CameraInputsManager)(camera)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | TCamera | 

## Members

### attached : CameraInputsMap&lt;TCamera&gt;



### attachedElement : Nullable&lt;HTMLElement&gt;



### noPreventDefault : boolean



### camera : TCamera



### checkInputs : () =&gt; void



## Methods

### add(input) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | input | ICameraInput&lt;TCamera&gt; | 

### remove(inputToRemove) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | inputToRemove | ICameraInput&lt;TCamera&gt; | 

### removeByType(inputType) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | inputType | string | 

### attachInput(input) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | input | ICameraInput&lt;TCamera&gt; | 

### attachElement(element, noPreventDefault) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | 
optional | noPreventDefault | boolean | 
### detachElement(element, disconnect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | 
optional | disconnect | boolean | 
### rebuildInputCheck() &rarr; void


### clear() &rarr; void


### serialize(serializedCamera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | serializedCamera | any | 

### parse(parsedCamera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedCamera | any | 

