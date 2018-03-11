---
ID_PAGE: 25336
PG_TITLE: AsyncLoop
PG_VERSION: 2.1
---
## Description

class [AsyncLoop](/classes/3.1/AsyncLoop)

An implementation of a loop for asynchronous functions.

## Constructor

## new [AsyncLoop](/classes/3.1/AsyncLoop)(iterations, _fn, _successCallback, offset)

Constroctor.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | iterations | number |  the number of iterations.
 | _fn |  | asyncLoop | [AsyncLoop](/classes/3.1/AsyncLoop) | 

 |  the function to run each iteration
 | _successCallback |  |  the callback that will be called upon succesful execution
## Members

### iterations : number


### index : number


## Methods

### executeNext() &rarr; void

Execute the next iteration. Must be called after the last iteration was finished.
### breakLoop() &rarr; void

Break the loop and run the success callback.
### static Run(iterations, _fn, _successCallback, offset) &rarr; [AsyncLoop](/classes/3.1/AsyncLoop)

Helper function

#### Parameters
 | Name | Type | Description
---|---|---|---
 | iterations | number | 
 | _fn |  | asyncLoop | [AsyncLoop](/classes/3.1/AsyncLoop) | 

 | 
 | _successCallback |  | 
### static SyncAsyncForLoop(iterations, syncedIterations, fn, callback, breakFunction, timeout) &rarr; void

A for-loop that will run a given number of iterations synchronous and the rest async.

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | iterations | number |  total number of iterations
 | syncedIterations | number |  number of synchronous iterations in each async iteration.
 | fn |  | iteration | number | 

 |  the function to call each iteration.
 | callback |  |  a success call back that will be called when iterating stops.
optional | breakFunction |  |  a break condition (optional)
