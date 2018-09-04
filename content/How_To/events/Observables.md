---
PG_TITLE: How to Use Observables
---

# How To Use Observables

For many of you creating Babylon.js projects only [GUI](/how_to/Gui), and [scene](#scene-observables) Observables will be needed, particularly [scene.onPointerObservable](/how_to/interactions).

## Introduction

Babylon.js provides a lot of events (like scene.beforeRender) and before v2.4 there was not a unified way to handle them.
Starting with v2.4, we introduced (without breaking backward compatibility of course) a new pattern: the Observables.

There are two parts: the Observable and the Observer. The [Observable](http://doc.babylonjs.com/api/classes/babylon.observable) is a property of an object which represents a given event (like beforeRender for instance). 
Users that want to have their own piece of code running in response to such event will register an Observer to the appropriate Observable. Then it's the duty of the Observable to execute the Observers, when appropriate.

The implementer uses an Observable to create a property which will trigger all the registered observers. The Generic type T is used to communicate a given data type from the Observable to the Observer.

While it is possible to create your own Observable (a simple example of which is below) for most users it will be a case of adding their own Observers to the Observables that Babylon.js provides. For those who want to delve deeper there is more detail in the [API](http://doc.babylonjs.com/api/classes/babylon.observable)  

* [Playground Example - Simple Custom Observable Example](https://www.babylonjs-playground.com/#6IGFM2)
An Observable - onXChange- is added to the master sphere. The two minion spheres and the actions they have to undertake form the two Observers which react when a change in the x position of the master is observed.

## Observable Methods and Properties 

The following are available:

* add(): to add an Observer
* addOnce(): to add an Observer which will be executed once and then removed
* remove(): to remove a previously registered Observer
* removeCallback(): same as above but giving the callback instead of the Observer instance
* notifyObservers(): used to notify all the registered Observers 
* notifyObserversWithPromise(): calling this will execute each callback, expecting it to be a promise or return a value. If at any point in the chain one function fails, the promise will fail and the execution will not continue.
* hasObserver: a property that returns true if at least one Observer is registered
* hasSpecificMask(mask): a function that returns true if at least one Observer is registered with this mask
* clear() to remove all Observers
* clone() to simply clone the object but not the registered Observers.

Many Babylon.js objects have a range of available Observables. Here is an [unordered list](http://doc.babylonjs.com/search/?bjsq=observable) from the search facility of the Documentation with links to the API. 

## Add An Observer 
An Observer is formed from an object set to watch the Observable and the objects reaction to the observation.

In the following example the sphere and its scale change create an Observer through the Observable.add() method. 


Set the Observable that notifies its Observers before the scene starts the rendering each frame.

```javascript
var alpha = 0;
scene.onBeforeRenderObservable.add(function () {
	sphere.scaling.y = Math.cos(alpha);
	
	alpha += 0.01;
});
```

* [Playground Example Add Observer](https://www.babylonjs-playground.com/#UP2O8#0)

T0 remove an Observer, you need to store it during it's creation to refer to it with remove. The following example remove the Observer before it is notified of even the first frame rendering.

```javascript
var alpha = 0;
var observer = scene.onBeforeRenderObservable.add(function () {
	sphere.scaling.y = Math.cos(alpha);
	
	alpha += 0.01;
});
	
scene.onBeforeRenderObservable.remove(observer);
```
* [Playground Example Add and Remove Observer ](https://www.babylonjs-playground.com/#UP2O8#1)

The following example removes the Observer during the rendering cycle. Since it is not possible to remove an Observer that does not exist there is a need to check whether the Observable still has the Observer.

```javascript
var alpha = 0;
	var observer = scene.onBeforeRenderObservable.add(function () {
		sphere.scaling.y = Math.cos(alpha);
		
		alpha += 0.01;

        if(scene.onBeforeRenderObservable.hasObservers && alpha > 3) {
            scene.onBeforeRenderObservable.remove(observer);
        }
	});
```

## Scene Observables
The BabylonJS Scene Object has over 20 observables that 'fire' under various conditions. Most of them are checked EACH frame/render, and in a deterministic/predictable order or sequence.  Below is a list of Scene observables checked during each renderLoop... in the order they are checked:

- onBeforeAnimationsObservable
- onAfterAnimationsObservable
- onBeforePhysicsObservable
- onAfterPhysicsObservable
- onBeforeRenderObservable
- onBeforeRenderTargetsRenderObservable
- onAfterRenderTargetsRenderObservable
- onBeforeCameraRenderObservable
- onBeforeActiveMeshesEvaluationObservable
- onAfterActiveMeshesEvaluationObservable
- onBeforeParticlesRenderingObservable
- onAfterParticlesRenderingObservable
- onBeforeRenderTargetsRenderObservable
- onAfterRenderTargetsRenderObservable
- onBeforeDrawPhaseObservable
- onAfterDrawPhaseObservable
- onAfterCameraRenderObservable
- onAfterRenderObservable

The Scene Object also has observers: onReady, onDataLoaded, onDispose, but they do not happen within a rendering/frame.  

Also, onBeforeStep and onAfterStep are available when using [deterministic lock step](http://doc.babylonjs.com/babylon101/animations#deterministic-lockstep)

However possibly the most useful Observable is the one that checks what is happening to the screen pointer whether with mouse or with finger or controller. [scene.onPointerObservable](/how_to/interactions)
