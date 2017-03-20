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

And here is the associated playground: http://www.babylonjs-playground.com/#UP2O8#0

If you want to later remove your observer, you just need to capture it after calling add, then use it with remove:

```
var alpha = 0;
var observer = scene.onBeforeRenderObservable.add(function () {
	sphere.scaling.y = Math.cos(alpha);
	
	alpha += 0.01;
});
	
scene.onBeforeRenderObservable.remove(observer);
```
And here is the associated playground: http://www.babylonjs-playground.com/#UP2O8#1

## Where are they?
Babylon.js uses them a lot! Here is the current list (as of v2.4) of available observables:

* scene.onDisposeObservable
* scene.onBeforeRenderObservable
* scene.onAfterRenderObservable
* scene.onReadyObservable
* scene.onBeforeCameraRenderObservable
* scene.onAfterCameraRenderObservable
* scene.onNewCameraAddedObservable
* scene.onCameraRemovedObservable
* scene.onNewLightAddedObservable
* scene.onLightRemovedObservable
* scene.onNewGeometryAddedObservable
* scene.onGeometryRemovedObservable
* scene.onNewMeshAddedObservable
* scene.onMeshRemovedObservable
* scene.onPrePointerObservable
* scene.onPointerObservable
* layer.onDisposeObservable
* layer.onBeforeRenderObservable
* layer.onAfterRenderObservable
* material.onDisposeObservable
* material.onBindObservable
* baseTexture.onDisposeObservable
* renderTargetTexture.onAfterUnbindObservable
* renderTargetTexture.onBeforeRenderObservable
* renderTargetTexture.onAfterRenderObservable
* renderTargetTexture.onClearObservable
* abstractMesh.onDisposeObservable
* abstractMesh.onCollideObservable
* abstractMesh.onCollisionPositionChangeObservable
* abstractMesh.onAfterWorldMatrixUpdateObservable
* mesh.onBeforeRenderObservable
* mesh.onAfterRenderObservable
* mesh.onBeforeDrawObservable
* particleSystem.onDisposeObservable
* postProcess.onActivateObservable
* postProcess.onSizeChangedObservable
* postProcess.onApplyObservable
* postProcess.onBeforeRenderObservable
* postProcess.onAfterRenderObservable.
* spriteManager.onDisposeObservable







