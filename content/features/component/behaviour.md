---
PG_TITLE: Behavior
title: Behaviors
abstract: ''
slug: behaviour
redirects:
  - /overviews/behaviors
---

# Behavior

Babylon.js v3.1 introduced a new component based tools: the behaviors.
A behavior is a simple class that can be attached to a node where it will provide a specific set of features. Features will be triggered by defined events. 

## General

A behavior is defined by the following interface:
* `name`: Return the name of the behavior
* `init()`: This function will be called when a behavior needs to be initialized. This is before the attachment to a node.
* `attach(node)`: This function will be called when a behavior is attached to a node. This is where the behavior will hook into useful events. Babylon.js will make sure that the scene is not currently loading when this function will be called.
* `detach(node)`: This function will be called when a behavior is detached from a node. The behavior must clear any associated resources and unhook all events

If behaviors rely on animation, the following **static** properties will be available:
* `EasingFunction`: Define the easing function used animations
* `EasingMode`: Define the easing mode used by animations

You can add behaviors to node objects (lights, cameras and meshes). Every node provides the following entry points:
* `addBehavior(behavior)`: Use this function to attach a behavior to a given node. If the scene is currently loading, this code will be delayed until scene completion.
* `removeBehavior(behavior)`: Use this function to detach a behavior from a node
* `getBehaviorByName(name)`: Return a behavior with the given name or null if not found
* `behaviors`: This read-only property returns the list of behaviors associated with the node

Most of the time, behaviors are designed to deal with a specific kind of nodes. 

Currently the list of behaviors available in babylon.js core are camera behaviours.

# Further Reading

## Basic - L1

[Camera Behaviours](/how-to/camera/camera-behaviors)
