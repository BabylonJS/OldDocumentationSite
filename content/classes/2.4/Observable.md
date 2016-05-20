---
TAGS:
---
## Description

class [Observable](/classes/2.4/Observable)

The [Observable](/classes/2.4/Observable) class is a simple implementation of the [Observable](/classes/2.4/Observable) pattern.

There's one slight particularity though: a given [Observable](/classes/2.4/Observable) can notify its observer using a particular mask value, only the Observers registered with this mask value will be notified.

This enable a more fine grained execution without having to rely on multiple different [Observable](/classes/2.4/Observable) objects.

For instance you may have a given [Observable](/classes/2.4/Observable) that have four different types of notifications: Move (mask = 0x01), Stop (mask = 0x02), Turn Right (mask = 0X04), Turn Left (mask = 0X08).

A given observer can register itself with only Move and Stop (mask = 0x03), then it will only be notified when one of these two occurs and will never be for Turn Left/Right.

## Methods

### add(callback, mask, insertFirst) &rarr; [Observer](/classes/2.4/Observer)&lt;T&gt;

Create a new [Observer](/classes/2.4/Observer) with the specified callback

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (eventData: T, eventState: [EventState](/classes/2.4/EventState)) =&gt; void |  the callback that will be executed for that [Observer](/classes/2.4/Observer)
optional | mask | number |  the mask used to filter observers
optional | insertFirst | boolean |  if true the callback will be inserted at the first position, hence executed before the others ones. If false (default behavior) the callback will be inserted at the last position, executed after all the others already present.
### remove(observer) &rarr; boolean

Remove an [Observer](/classes/2.4/Observer) from the [Observable](/classes/2.4/Observable) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | observer | [Observer](/classes/2.4/Observer)&lt;T&gt; |  the instance of the [Observer](/classes/2.4/Observer) to remove. If it doesn't belong to this [Observable](/classes/2.4/Observable), false will be returned.

### removeCallback(callback) &rarr; boolean

Remove a callback from the [Observable](/classes/2.4/Observable) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (eventData: T, eventState: [EventState](/classes/2.4/EventState)) =&gt; void |  the callback to remove. If it doesn't belong to this [Observable](/classes/2.4/Observable), false will be returned.

### notifyObservers(eventData, mask) &rarr; void

Notify all Observers by calling their respective callback with the given data

#### Parameters
 | Name | Type | Description
---|---|---|---
 | eventData | T | 
optional | mask | number | 
### hasObservers() &rarr; boolean

return true is the [Observable](/classes/2.4/Observable) has at least one [Observer](/classes/2.4/Observer) registered
### clear() &rarr; void

Clear the list of observers
### clone() &rarr; [Observable](/classes/2.4/Observable)&lt;T&gt;

Clone the current observable
