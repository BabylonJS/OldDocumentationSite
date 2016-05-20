---
TAGS:
---
## Description

class [PrimitivePointerInfo](/classes/2.4/PrimitivePointerInfo)

This class store information for the pointerEventObservable [Observable](/classes/2.4/Observable).

The [Observable](/classes/2.4/Observable) is divided into many sub events (using the Mask feature of the [Observable](/classes/2.4/Observable) pattern): PointerOver, PointerEnter, PointerDown, PointerMouseWheel, PointerMove, PointerUp, PointerDown, PointerLeave, PointerGotCapture and PointerLostCapture.

## Constructor

## new [PrimitivePointerInfo](/classes/2.4/PrimitivePointerInfo)()


## Members

### static PointerOver : number

This event type is raised when a pointing device is moved into the hit test boundaries of a primitive.

Bubbles: yes

### static PointerEnter : number

This event type is raised when a pointing device is moved into the hit test boundaries of a primitive or one of its descendants.

Bubbles: no

### static PointerDown : number

This event type is raised when a pointer enters the active button state (non-zero value in the buttons property). For mouse it's when the device transitions from no buttons depressed to at least one button depressed. For touch/pen this is when a physical contact is made.

Bubbles: yes

### static PointerMouseWheel : number

This event type is raised when the pointer is a mouse and it's wheel is rolling

Bubbles: yes

### static PointerMove : number

This event type is raised when a pointer change coordinates or when a pointer changes button state, pressure, tilt, or contact geometry and the circumstances produce no other pointers events.

Bubbles: yes

### static PointerUp : number

This event type is raised when the pointer leaves the active buttons states (zero value in the buttons property). For mouse, this is when the device transitions from at least one button depressed to no buttons depressed. For touch/pen, this is when physical contact is removed.

Bubbles: yes

### static PointerOut : number

This event type is raised when a pointing device is moved out of the hit test the boundaries of a primitive.

Bubbles: yes

### static PointerLeave : number

This event type is raised when a pointing device is moved out of the hit test boundaries of a primitive and all its descendants.

Bubbles: no

### static PointerGotCapture : number

This event type is raised when a primitive receives the pointer capture. This event is fired at the element that is receiving pointer capture. Subsequent events for that pointer will be fired at this element.

Bubbles: yes

### static PointerLostCapture : number

This event type is raised after pointer capture is released for a pointer.

Bubbles: yes

### static MouseWheelPrecision : number



### eventType : number

Event Type, one of the static PointerXXXX property defined above ([PrimitivePointerInfo](/classes/2.4/PrimitivePointerInfo).PointerOver to [PrimitivePointerInfo](/classes/2.4/PrimitivePointerInfo).PointerLostCapture)

### canvasPointerPos : [Vector2](/classes/2.4/Vector2)

Position of the pointer relative to the bottom/left of the Canvas

### primitivePointerPos : [Vector2](/classes/2.4/Vector2)

Position of the pointer relative to the bottom/left of the primitive that registered the [Observer](/classes/2.4/Observer)

### relatedTarget : [Prim2DBase](/classes/2.4/Prim2DBase)

The primitive where the event was initiated first (in case of bubbling)

### relatedTargetPointerPos : [Vector2](/classes/2.4/Vector2)

Position of the pointer relative to the bottom/left of the relatedTarget

### cancelBubble : boolean

An observable can set this property to true to stop bubbling on the upper levels

### ctrlKey : boolean

True if the Control keyboard key is down

### shiftKey : boolean

true if the Shift keyboard key is down

### altKey : boolean

true if the Alt keyboard key is down

### metaKey : boolean

true if the Meta keyboard key is down

### button : number

For button, buttons, refer to https://www.w3.org/TR/pointerevents/#button-states

### buttons : number

For button, buttons, refer to https://www.w3.org/TR/pointerevents/#button-states

### mouseWheelDelta : number

The amount of mouse wheel rolled

### pointerId : number

Id of the Pointer involved in the event

### width : number



### height : number



### presssure : number



### tilt : [Vector2](/classes/2.4/Vector2)



### isCaptured : boolean

true if the involved pointer is captured for a particular primitive, false otherwise.

## Methods

### updateRelatedTarget(prim, primPointerPos) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | prim | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | primPointerPos | [Vector2](/classes/2.4/Vector2) | 
### static getEventTypeName(mask) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mask | number | 

