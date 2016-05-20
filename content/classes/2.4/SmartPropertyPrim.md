---
TAGS:
---
## Description

class [SmartPropertyPrim](/classes/2.4/SmartPropertyPrim)



## Members

### propertyChanged : [Observable](/classes/2.4/Observable)&lt;[PropertyChangedInfo](/classes/2.4/PropertyChangedInfo)&gt;



### isDisposed : boolean



### modelKey : string



### isDirty : boolean



### levelBoundingInfo : [BoundingInfo2D](/classes/2.4/BoundingInfo2D)



### string : any



## Methods

### setupSmartPropertyPrim() &rarr; void


### dispose() &rarr; boolean


### handleGroupChanged(prop) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | prop | [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo) | 

### checkPropertiesDirty(flags) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | flags | number | 

### clearPropertiesDirty(flags) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | flags | number | 

### updateLevelBoundingInfo() &rarr; void


### onPrimBecomesDirty() &rarr; void


