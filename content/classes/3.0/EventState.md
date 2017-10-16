---
TAGS:
---
## Description

class [EventState](/classes/3.0/EventState)

A class serves as a medium between the observable and its observers

## Constructor

## new [EventState](/classes/3.0/EventState)(mask, skipNextObservers)

If the callback of a given [Observer](/classes/3.0/Observer) set skipNextObservers to true the following observers will be ignored

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mask | number |   
optional | skipNextObservers | boolean |   
optional | target | any | The object that originally notified the event
optional | currentTarget | any | The current object in the bubbling phase
## Members

### skipNextObservers : boolean

An [Observer](/classes/3.0/Observer) can set this property to true to prevent subsequent observers of being notified

### mask : number

Get the mask value that were used to trigger the event corresponding to this [EventState](/classes/3.0/EventState) object

### target : boolean

Can optionally be set to the object that originally notified the event.

### currentTarget : boolean

Can optionally be set to the current object in the bubbling phase of the event.

## Methods

### initalize(mask, skipNextObservers, target, currentTarget) &rarr; [EventState](/classes/3.0/EventState)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mask | number |   
optional | skipNextObservers | boolean |   
optional | target | any | The object that originally notified the event
optional | currentTarget | any | The current object in the bubbling phase