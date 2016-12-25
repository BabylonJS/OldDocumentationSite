---
ID_PAGE: 25336
PG_TITLE: AsyncLoop
PG_VERSION: 2.1
---
## Description

class [AsyncLoop](/classes/2.5/AsyncLoop)

An implementation of a loop for asynchronous functions.

## Constructor

## new [AsyncLoop](/classes/2.5/AsyncLoop)(iterations, _fn, _successCallback, offset)

Constroctor.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | iterations | number |  the number of iterations.  total number of iterations  total number of iterations  total number of iterations total number of iterations
 | _fn | (asyncLoop: [AsyncLoop](/classes/2.5/AsyncLoop)) =&gt; void |  the function to run each iteration    
 | _successCallback | () =&gt; void |  the callback that will be called upon succesful execution    
## Members

### iterations : number



### index : number



## Methods

### executeNext() &rarr; void

Execute the next iteration. Must be called after the last iteration was finished.
### breakLoop() &rarr; void

Break the loop and run the success callback.
### static Run(iterations, _fn, _successCallback, offset) &rarr; [AsyncLoop](/classes/2.5/AsyncLoop)

Helper function

#### Parameters
 | Name | Type | Description
---|---|---|---
 | iterations | number |   total number of iterations  total number of iterations  total number of iterations total number of iterations
 | _fn | (asyncLoop: [AsyncLoop](/classes/2.5/AsyncLoop)) =&gt; void |     
 | _successCallback | () =&gt; void |     
### static SyncAsyncForLoop(iterations, syncedIterations, fn, callback, breakFunction, timeout) &rarr; void

A for-loop that will run a given number of iterations synchronous and the rest async.

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | iterations | number |  total number of iterations  total number of iterations  total number of iterations  total number of iterations total number of iterations
 | syncedIterations | number |  number of synchronous iterations in each async iteration.  number of synchronous iterations in each async iteration.  number of synchronous iterations in each async iteration.  number of synchronous iterations in each async iteration. number of synchronous iterations in each async iteration.
 | fn | (iteration: number) =&gt; void |  the function to call each iteration.  the function to call each iteration.  the function to call each iteration.  the function to call each iteration. the function to call each iteration.
 | callback | () =&gt; void |  a success call back that will be called when iterating stops.  a success call back that will be called when iterating stops.  a success call back that will be called when iterating stops.  a success call back that will be called when iterating stops. a success call back that will be called when iterating stops.
optional | breakFunction | () =&gt; boolean |  a break condition (optional)  a break condition (optional)  a break condition (optional)  a break condition (optional) a break condition (optional)
