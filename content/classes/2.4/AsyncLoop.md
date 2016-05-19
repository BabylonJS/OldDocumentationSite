---
ID_PAGE: 25336
PG_TITLE: AsyncLoop
PG_VERSION: 2.1
---
## Description

class [AsyncLoop](/classes/2.4/AsyncLoop)

An implementation of a loop for asynchronous functions.

## Constructor

## new [AsyncLoop](/classes/2.4/AsyncLoop)(iterations, _fn, _successCallback, offset)

Constroctor.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | iterations | number |  the number of iterations.  total number of iterations  total number of iterations total number of iterations
 | _fn | (asyncLoop: [AsyncLoop](/classes/2.4/AsyncLoop)) =&gt; void |  the function to run each iteration   
 | _successCallback | () =&gt; void |  the callback that will be called upon succesful execution   
## Members

### iterations : number



### index : number



## Methods

### executeNextundefined &rarr; void

Execute the next iteration. Must be called after the last iteration was finished.
### breakLoopundefined &rarr; void

Break the loop and run the success callback.
### static Runundefined &rarr; [AsyncLoop](/classes/2.4/AsyncLoop)

Helper function

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static SyncAsyncForLoopundefined &rarr; void

A for-loop that will run a given number of iterations synchronous and the rest async.

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
