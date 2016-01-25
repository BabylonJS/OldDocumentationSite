---
ID_PAGE: 25336
PG_TITLE: AsyncLoop
PG_VERSION: 2.1
---

An implementation of a loop for asynchronous functions.
##new [AsyncLoop](/classes/AsyncLoop)(iterations, _fn, _successCallback, offset)

Constroctor.
####Parameters
 | Name | Type | Description
---|---|---|---
 | iterations | number | the number of iterations.
 | _fn | (asyncLoop: [AsyncLoop](/classes/AsyncLoop)) =&gt; void | the function to run each iteration
 | _successCallback | () =&gt; void | the callback that will be called upon succesful execution
optional | offset | number | starting offset.
---

##Members

###iterations : number




###index : number









##Methods

###executeNext() &rarr; void
Execute the next iteration. Must be called after the last iteration was finished.


###breakLoop() &rarr; void
Break the loop and run the success callback.


###static Run(iterations, _fn, _successCallback, offset) &rarr; [AsyncLoop](/classes/AsyncLoop)
Helper function

####Parameters
 | Name | Type | Description
---|---|---|---
 | iterations | number | 
 | _fn | (asyncLoop: [AsyncLoop](/classes/AsyncLoop)) =&gt; void | 
 | _successCallback | () =&gt; void | 
optional | offset | number | 
---

###static SyncAsyncForLoop(iterations, syncedIterations, fn, callback, breakFunction, timeout) &rarr; void
A for-loop that will run a given number of iterations synchronous and the rest async.
@constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | iterations | number | total number of iterations
 | syncedIterations | number | number of synchronous iterations in each async iteration.
 | fn | (iteration: number) =&gt; void | the function to call each iteration.
 | callback | () =&gt; void | a success call back that will be called when iterating stops.
optional | breakFunction | () =&gt; boolean | a break condition (optional)
optional | timeout | number | timeout settings for the setTimeout function. default - 0.
---
