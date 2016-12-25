---
TAGS:
---
## Description

class [EventState](/classes/2.5/EventState)

A class serves as a medium between the observable and its observers

## Constructor

## new [EventState](/classes/2.5/EventState)(mask, skipNextObservers)

If the callback of a given [Observer](/classes/2.5/Observer) set skipNextObservers to true the following observers will be ignored

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mask | number |  
optional | skipNextObservers | boolean |  
## Members

### skipNextObservers : boolean

An [Observer](/classes/2.5/Observer) can set this property to true to prevent subsequent observers of being notified

### mask : number

Get the mask value that were used to trigger the event corresponding to this [EventState](/classes/2.5/EventState) object

## Methods

### initalize(mask, skipNextObservers) &rarr; [EventState](/classes/2.5/EventState)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mask | number |  
optional | skipNextObservers | boolean |  
