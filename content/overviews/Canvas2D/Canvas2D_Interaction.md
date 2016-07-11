# Interacting with Primitives

Interaction with a Canvas can be enabled during its creation. By default it's enabled.

When it's on, [pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) will be tracked in order to raise the appropriate event through the `pointerEventObservable` observable property of a Primitive.

For more information about what observable are, you can head to [this page](https://doc.babylonjs.com/overviews/Observables).

## pointerEventObservable

This property is defined as an Observable of PrimitivePointerInfo  in TypeScript.

The `PrimitivePointerInfo` class contains all the data and sub event types related to this observable.

### Event Bubbling

As it's the case for many UI libraries, the `pointerEventObservable` event is sent to the topmost Primitive which is concerned, but it will also be sent to its parent, one by one, from the direct parent up to the Canvas itself.

So you have a chance to add an observer on a given primitive and still receive events when one of its children will be concerned.

And observer has the ability to stop bubbling, more about this below.

### Sub Event types

In order to simplify things for the developer, the behavior of the interaction system of the Canvas2D feature were greatly inspired from the W3C specifications of the [Pointer Event Types](https://www.w3.org/TR/pointerevents/#pointer-event-types).

The `pointerEventObservable` can be raised in the following cases:

 - `PointerOver`, when the pointer enter the boundaries of the Primitive (but not its children). Bubbles: yes.
 - `PointerEnter`, when the pointer enter the boundaries of the Primitive or its descendants. Bubbles: no.
 - `PointerDown`, when the pointer has a active buttons state change to down over the primitive. Bubbles: yes.
 - `PointerMouseWheel`, when the mouse wheel is used over the primitive. Bubbles: yes.
 - `PointerMove`, when the pointer is moved over the primitive. Bubbles: yes.
 - `PointerUp`, when the pointer leaves the active buttons state over the primitive. Bubbles: yes.
 - `PointerLeave`, when the pointer leaves the boundaries of the Primitive or its descendants. Bubbles: no.
 - `PointerGotCapture`, when the pointer's events got captured for the Primitive. Bubbles: yes.
 - `PointerLostCapture`, when the pointer events are no longer captured for the Primitive. Bubbles: yes.

Note that the reference documentation is far more detailed about the specific behavior/properties of this.

### PrimitivePointerInfo properties

The reference documentation is more exhaustive but let's summarize them:

 - `eventType`, the sub event type triggered, one of the value listed above.
 - `canvasPointerPos`, the position of the pointer, relative to the Canvas.
 - `primitivePointerPos`, the position of the pointer, relative to the primitive that the observer were registered on.
 - `relatedTarget`, the primitive that triggers the event. Due to bubbling this may be a different primitive that the one the observer was registered to.
 - `relatedTargetPointerPos`, the position of the pointer, relative to the `relatedTarget`.
 - `cancelBubble`, an Observer can set this property to true to prevent the event from bubbling up in the parent hierarchy.
 - `cltr/shift/alt/metaKey` state of this special keys.
 - `button` and `buttons` please refer to the [W3C spec](https://www.w3.org/TR/pointerevents/#button-states), the behavior is the same.
 - `mouseWheelDelta` the amount of mouse wheel that changed.
 - `pointerId` the id of the pointer that trigger the event.
 - `width/height/pressure/tilt` properties for a pen pointer, see the [W3C spec](https://www.w3.org/TR/pointerevents/#pointerevent-interface) for more information.
 - `isCaptured` true if the event is triggered from a captured pointer, false otherwise.

### Example

Please refer to this [example](http://babylonjs-playground.com/#UVDG0#67) for a use of the `pointerEventObservable`

## Using the Action Manager

Canvas2D is also compliant with the [ActionManager](http://doc.babylonjs.com/tutorials/How_to_use_Actions) of babylon.js. The `actionManager` property let you access the action Manager created for the particular Primitive.

### Example
Please refer to this [example](http://babylonjs-playground.com/#1ONKPJ#5) for a use of the Action Manager.