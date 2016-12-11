---
TAGS:
---
## Description

class [CameraInputsManager](/classes/2.5/CameraInputsManager)



## Constructor

## new [CameraInputsManager](/classes/2.5/CameraInputsManager)(camera)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | TCamera |  

## Members

### attached : CameraInputsMap&lt;TCamera&gt;



### attachedElement : HTMLElement



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
### detachElement(element) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |  

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

