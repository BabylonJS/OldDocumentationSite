## Introduction

Babylon.js provides a lot of events (like scene.beforeRender) and before v2.4 there were not a unified way to handle them.
Starting with v2.4, we introduced (without breaking backward compatibility of course) a new pattern: the Obervables.

## So how does it works
There're two parts: the Observable and the Observer. The Observable is a property of an object which represent a given event (like beforeRender for instance). 
Users that want to have their own piece of code running in response of such event will register an Observer to the adequate Observable. Then it's the duty of the Observable to execute the Observers, when appropriate.

So we are here with two classes (In typescript):

### Observable\<T\>
The implementer uses it to create a property which will trigger all the registered observers.The Generic type T is used to communicate a given data type from the Observable to the Observer.

You have the following method/properties:

* add(): to add an Observer
* remove(): to remove a previously registered Observer
* removeCallback(): same as above but giving the callback instead of the Observer instance
* notifyObservers(): used to notify all the registered Observers (with a little special feature I'll detail at the end of this post)
* hasObserver: a property that returns true if at least one Observer is registered
* hasSpecificMask(mask): a function that returns true if at least one Observer is registered with this mask
* clear() to remove all Observers
* clone() to simply clone the object but not the registered Observers.

### Observer\<T\> 
An instance of this class is created when you call the Observable.add() method to create a new Observer. 
When you no longer want to be notified, you call Observable.remove() giving the same object and you're done!

### Give me an example!
Let's consider you want to be called on every frame before the scene starts the rendering:

```
var alpha = 0;
scene.onBeforeRenderObservable.add(function () {
	sphere.scaling.y = Math.cos(alpha);
	
	alpha += 0.01;
});
```

And here is the associated playground:  https://www.babylonjs-playground.com/#UP2O8#0

If you want to later remove your observer, you just need to capture it after calling add, then use it with remove:

```
var alpha = 0;
var observer = scene.onBeforeRenderObservable.add(function () {
	sphere.scaling.y = Math.cos(alpha);
	
	alpha += 0.01;
});
	
scene.onBeforeRenderObservable.remove(observer);
```
And here is the associated playground:  https://www.babylonjs-playground.com/#UP2O8#1

### Context
Starting with Babylon.js v3.1, you can also add the scope to apply to observers when they are notified.

To do so just add a fourth parameter to the add function:
```
scene.onPointerObservable.add(this.onPickDown, BABYLON.PointerEventTypes.POINTERDOWN, false, this);
```

You can test it here: http://playground.babylonjs.com/#012I9K

### MultiObserver
Starting with Babylon.js v3.1, you can watch multiple observables simultaneously with theMultiObserver class:

```
var watcher = BABYLON.MultiObserver.Watch([button.onPointerDownObservable, button2.onPointerDownObservable], function(info) {
	console.log(info.x);
});
```

The MultiObserver will handle the observers for you. You will just need to call watcher.dispose() when done with the observables to free all observers.

You can test it here: https://www.babylonjs-playground.com/#YENXH1
