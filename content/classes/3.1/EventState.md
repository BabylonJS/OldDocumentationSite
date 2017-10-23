---
TAGS:
---
## Description

class [EventState](/classes/3.1/EventState)

A class serves as a medium between the observable and its observers

## Constructor

## new [EventState](/classes/3.1/EventState)(mask, skipNextObservers, target, currentTarget)

If the callback of a given [Observer](/classes/3.1/Observer) set skipNextObservers to true the following observers will be ignored

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mask | number | 
optional | skipNextObservers | boolean | 
optional | target | any | 
## Members

### skipNextObservers : boolean

An [Observer](/classes/3.1/Observer) can set this property to true to prevent subsequent observers of being notified

### mask : number

Get the mask value that were used to trigger the event corresponding to this [EventState](/classes/3.1/EventState) object

### target : undefined

The object that originally notified the event

### any : undefined



### currentTarget : undefined

The current object in the bubbling phase

### any : undefined



## Methods

### initalize(mask, skipNextObservers, target, currentTarget) &rarr; [EventState](/classes/3.1/EventState)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mask | number | 
optional | skipNextObservers | boolean | 
optional | target | any | 
