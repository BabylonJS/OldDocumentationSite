---
TAGS:
---
## Description

class [Prim2DBase](/classes/2.4/Prim2DBase) extends [SmartPropertyPrim](/classes/2.4/SmartPropertyPrim)



## Constructor

## new [Prim2DBase](/classes/2.4/Prim2DBase)(settings)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | settings | { parent: [Prim2DBase](/classes/2.4/Prim2DBase),  id: string,  children: Array&lt;[Prim2DBase](/classes/2.4/Prim2DBase)&gt;,  position: [Vector2](/classes/2.4/Vector2),  x: number,  y: number,  rotation: number,  scale: number,  origin: [Vector2](/classes/2.4/Vector2),  layoutEngine: [LayoutEngineBase](/classes/2.4/LayoutEngineBase),  isVisible: boolean,  marginTop: number,  marginLeft: number,  marginRight: number,  marginBottom: number,  margin: number,  marginHAlignment: number,  marginVAlignment: number,  marginAlignment: string,  paddingTop: number,  paddingLeft: number,  paddingRight: number,  paddingBottom: number,  padding: string } | 

## Members

### static PRIM2DBASE_PROPCOUNT : number



### actionManager : [ActionManager](/classes/2.4/ActionManager)



### owner : [Canvas2D](/classes/2.4/Canvas2D)

Retrieve the owner [Canvas2D](/classes/2.4/Canvas2D)

### parent : [Prim2DBase](/classes/2.4/Prim2DBase)

Get the parent primitive (can be the Canvas, only the Canvas has no parent)

### children : [Prim2DBase](/classes/2.4/Prim2DBase)[]

The array of direct children primitives

### id : string

The identifier of this primitive, may not be unique, it's for information purpose only

### static positionProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the position property

### static actualPositionProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the actualPosition property

### static sizeProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the size property

### static rotationProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the rotation property

### static scaleProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the scale property

### static originProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the origin property

### static levelVisibleProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the levelVisible property

### static isVisibleProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the isVisible property

### static zOrderProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the zOrder property

### static marginProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the margin property

### static paddingProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the margin property

### static marginAlignmentProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)

Metadata of the hAlignment property

### actualPosition : [Vector2](/classes/2.4/Vector2)

DO NOT INVOKE for internal purpose only

### actualX : number

Shortcut to actualPosition.x

### actualY : number

Shortcut to actualPosition.y

### position : [Vector2](/classes/2.4/Vector2)

Position of the primitive, relative to its parent.

BEWARE: if you change only position.x or y it won't trigger a property change and you won't have the expected behavior.

Use this property to set a new [Vector2](/classes/2.4/Vector2) object, otherwise to change only the x/y use [Prim2DBase](/classes/2.4/Prim2DBase).x or y properties.

Setting this property may have no effect is specific alignment are in effect.

### x : number

Direct access to the position.x value of the primitive

Use this property when you only want to change one component of the position property

### y : number

Direct access to the position.y value of the primitive

Use this property when you only want to change one component of the position property

## Methods

### traverseUp(predicate) &rarr; [Prim2DBase](/classes/2.4/Prim2DBase)

From 'this' primitive, traverse up (from parent to parent) until the given predicate is true

@return the first primitive where the predicate was successful

#### Parameters
 | Name | Type | Description
---|---|---|---
 | predicate | (p: [Prim2DBase](/classes/2.4/Prim2DBase)) =&gt; boolean |  the predicate to test on each parent

