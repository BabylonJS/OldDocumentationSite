---
TAGS:
---
## Description

class [IntersectInfo2D](/classes/2.4/IntersectInfo2D)

Main class used for the Primitive Intersection API

## Constructor

## new [IntersectInfo2D](/classes/2.4/IntersectInfo2D)()


## Members

### pickPosition : [Vector2](/classes/2.4/Vector2)

Set the pick position, relative to the primitive where the intersection test is made

### findFirstOnly : boolean

If true the intersection will stop at the first hit, if false all primitives will be tested and the intersectedPrimitives array will be filled accordingly (false default)

### intersectHidden : boolean

If true the intersection test will also be made on hidden primitive (false default)

### topMostIntersectedPrimitive : [PrimitiveIntersectedInfo](/classes/2.4/PrimitiveIntersectedInfo)

The topmost intersected primitive

### intersectedPrimitives : Array&lt;[PrimitiveIntersectedInfo](/classes/2.4/PrimitiveIntersectedInfo)&gt;

The array containing all intersected primitive, in no particular order.

### isIntersected : boolean

true if at least one primitive intersected during the test

## Methods

### isPrimIntersected(prim) &rarr; [Vector2](/classes/2.4/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | prim | [Prim2DBase](/classes/2.4/Prim2DBase) | 

