## Introduction

Babylon.js v3.1 introduced a new component based tools: the behaviors.
A behavior is a simple class that can be attached to a node where it will provide a specific set of features. 

## General

A behavior is defined by the following interface:
* `name`: Return the name of the behavior
* `attach(node)`: This function will be called when a behavior is attached to a node. This is where the behavior will hook into useful events
* `detach(node)`: This function will be called when a behavior is detached from a node. The behavior must clear any associated resources and unhook all events

You can add behaviors to node objects (lights, cameras and meshes). Every node provides the following entry points:
* `addBehavior(behavior)`: Use this function to attach a behavior to a given node
* `removeBehavior(behavior)`: Use this function to detach a behavior from a node
* `getBehaviorByName(name)`: Return a behavior with the given name or null if not found
* `behaviors`: This read-only property returns the list of behaviors associated with the node

Most of the time, behaviors are designed to deal with a specific kind of nodes. 
Let's have a look at the list of behaviors available in babylon.js core.

## Camera behaviors

### Bouncing behavior
The bouncing behavior (`BABYLON.BouncingBehavior`) is designed to produce a small bouncing effect when an **ArcRotateCamera** reaches the lowerRadiusLimit or the upperRadiusLimit.

The bouncing behavior can be configured using the following properties:
* `bounceEasingFunction`: Define the easing function to use for animations. By default the value is set to `new BABYLON.BackEase(0.3)`
* `bounceEasingMode`: Define the easing mode used by animations. By default the value is set to `BABYLON.EasingFunction.EASINGMODE_EASEOUT`
* `transitionDuration`: Define the duration of the animation, in milliseconds. By default the value is set to 450ms
* `lowerRadiusTransitionRange`: Define the length of the distance animated by the transition when lower radius is reached. By default the value is set to 2
* `upperRadiusTransitionRange`: Define the length of the distance animated by the transition when upper radius is reached. By default the value is set to -2

You can easily turn on this behavior on an ArcRotateCamera with the following code:

```
camera.useBouncingBehavior = true;
```

You can find a live demo here: https://www.babylonjs-playground.com/#6FBD14

###  Framing behavior









