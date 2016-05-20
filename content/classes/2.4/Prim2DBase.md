---
TAGS:
---
## Description

class [Prim2DBase](/classes/2.4/Prim2DBase) extends [SmartPropertyPrim](/classes/2.4/SmartPropertyPrim)



## Members

### static PRIM2DBASE_PROPCOUNT : number



### owner : [Canvas2D](/classes/2.4/Canvas2D)

Retrieve the owner [Canvas2D](/classes/2.4/Canvas2D)

### parent : [Prim2DBase](/classes/2.4/Prim2DBase)

Get the parent primitive (can be the Canvas, only the Canvas has no parent)

### children : [Prim2DBase](/classes/2.4/Prim2DBase)[]

The array of direct children primitives

### id : string

The identifier of this primitive, may not be unique, it's for information purpose only

### static positionProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static rotationProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static scaleProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static originProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static levelVisibleProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static isVisibleProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static zOrderProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### position : [Vector2](/classes/2.4/Vector2)



### rotation : number



### scale : number



### actualSize : [Size](/classes/2.4/Size)

this method must be implemented by the primitive type to return its size

@returns The size of the primitive

### origin : [Vector2](/classes/2.4/Vector2)

The origin defines the normalized coordinate of the center of the primitive, from the top/left corner.

The origin is used only to compute transformation of the primitive, it has no meaning in the primitive local frame of reference

For instance:

0,0 means the center is bottom/left. Which is the default for [Canvas2D](/classes/2.4/Canvas2D) instances

0.5,0.5 means the center is at the center of the primitive, which is default of all types of Primitives

0,1 means the center is top/left

@returns The normalized center.

### levelVisible : boolean



### isVisible : boolean



### zOrder : number



### isPickable : boolean

Define if the Primitive can be subject to intersection test or not (default is true)

### hierarchyDepth : number

Return the depth level of the Primitive into the Canvas' Graph. A Canvas will be 0, its direct children 1, and so on.

@returns {}

### renderGroup : [Group2D](/classes/2.4/Group2D)

Retrieve the Group that is responsible to render this primitive

@returns {}

### globalTransform : [Matrix](/classes/2.4/Matrix)

Get the global transformation matrix of the primitive

### invGlobalTransform : [Matrix](/classes/2.4/Matrix)

Get invert of the global transformation matrix of the primitive

@returns {}

### localTransform : [Matrix](/classes/2.4/Matrix)

Get the local transformation of the primitive

### boundingInfo : [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Get the boundingInfo associated to the primitive.

The value is supposed to be always up to date

### pointerEventObservable : [Observable](/classes/2.4/Observable)&lt;[PrimitivePointerInfo](/classes/2.4/PrimitivePointerInfo)&gt;

Interaction with the primitive can be create using this [Observable](/classes/2.4/Observable). See the [PrimitivePointerInfo](/classes/2.4/PrimitivePointerInfo) class for more information

## Methods

### setupPrim2DBase(owner, parent, id, position, isVisible) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | owner | [Canvas2D](/classes/2.4/Canvas2D) | 
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | id | string | 
 | position | [Vector2](/classes/2.4/Vector2) | 
### traverseUp(predicate) &rarr; [Prim2DBase](/classes/2.4/Prim2DBase)

From 'this' primitive, traverse up (from parent to parent) until the given predicate is true

@return the first primitive where the predicate was successful

#### Parameters
 | Name | Type | Description
---|---|---|---
 | predicate | (p: [Prim2DBase](/classes/2.4/Prim2DBase)) =&gt; boolean |  the predicate to test on each parent

### levelIntersect(intersectInfo) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | intersectInfo | [IntersectInfo2D](/classes/2.4/IntersectInfo2D) | 

### setPointerEventCapture(pointerId) &rarr; boolean

Capture all the Events of the given PointerId for this primitive.

Don't forget to call releasePointerEventsCapture when done.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | pointerId | number |  the Id of the pointer to capture the events from.

### releasePointerEventsCapture(pointerId) &rarr; boolean

Release a captured pointer made with setPointerEventCapture.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | pointerId | number |  the Id of the pointer to release the capture from.

### intersect(intersectInfo) &rarr; boolean

Make an intersection test with the primitive, all inputs/outputs are stored in the [IntersectInfo2D](/classes/2.4/IntersectInfo2D) class, see its documentation for more information.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | intersectInfo | [IntersectInfo2D](/classes/2.4/IntersectInfo2D) |  contains the settings of the intersection to perform, to setup before calling this method as well as the result, available after a call to this method.

### moveChild(child, previous) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | child | [Prim2DBase](/classes/2.4/Prim2DBase) | 
 | previous | [Prim2DBase](/classes/2.4/Prim2DBase) | 
### dispose() &rarr; boolean


### getActualZOffset() &rarr; number


### onPrimBecomesDirty() &rarr; void


### static CheckParent(parent) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parent | [Prim2DBase](/classes/2.4/Prim2DBase) | 

### updateGlobalTransVisOf(list, recurse) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | list | [Prim2DBase](/classes/2.4/Prim2DBase)[] | 
 | recurse | boolean | 
### updateGlobalTransVis(recurse) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | recurse | boolean | 

