---
TAGS:
---
## Description

class [Prim2DBase](/classes/2.0/Prim2DBase) extends [SmartPropertyPrim](/classes/2.0/SmartPropertyPrim)



## Constructor

## new [Prim2DBase](/classes/2.0/Prim2DBase)(settings)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | settings | { parent: [Prim2DBase](/classes/2.0/Prim2DBase),  id: string,  children: Array&lt;[Prim2DBase](/classes/2.0/Prim2DBase)&gt;,  position: Vector2,  x: number,  y: number,  rotation: number,  scale: number,  scaleX: number,  scaleY: number,  dontInheritParentScale: boolean,  opacity: number,  zOrder: number,  origin: Vector2,  layoutEngine: [LayoutEngineBase](/classes/2.0/LayoutEngineBase),  string: string,  isVisible: boolean,  isPickable: boolean,  isContainer: boolean,  childrenFlatZOrder: boolean,  marginTop: number,  string: string,  marginLeft: number,  string: string,  marginRight: number,  string: string,  marginBottom: number,  string: string,  margin: number,  string: string,  marginHAlignment: number,  marginVAlignment: number,  marginAlignment: string,  paddingTop: number,  string: string,  paddingLeft: number,  string: string,  paddingRight: number,  string: string,  paddingBottom: number,  string: string,  padding: string } | 

## Members

### static PRIM2DBASE_PROPCOUNT : number



### actionManager : ActionManager



### owner : [Canvas2D](/classes/2.0/Canvas2D)

Retrieve the owner [Canvas2D](/classes/2.0/Canvas2D)

### parent : [Prim2DBase](/classes/2.0/Prim2DBase)

Get the parent primitive (can be the Canvas, only the Canvas has no parent)

### children : [Prim2DBase](/classes/2.0/Prim2DBase)[]

The array of direct children primitives

### id : string

The identifier of this primitive, may not be unique, it's for information purpose only

### static positionProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the position property

### static xProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the left property

### static yProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the bottom property

### static actualPositionProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the actualPosition property

### static actualXProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the actualX (Left) property

### static actualYProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the actualY (Bottom) property

### static sizeProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the size property

### static widthProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the width property

### static heightProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the height property

### static rotationProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the rotation property

### static scaleProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the scale property

### static actualSizeProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the actualSize property

### static actualWidthProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the actualWidth property

### static actualHeightProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the actualHeight property

### static originProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the origin property

### static levelVisibleProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the levelVisible property

### static isVisibleProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the isVisible property

### static zOrderProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the zOrder property

### static marginProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the margin property

### static paddingProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the margin property

### static marginAlignmentProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the marginAlignment property

### static opacityProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the opacity property

### static scaleXProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the scaleX property

### static scaleYProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the scaleY property

### static actualScaleProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)

Metadata of the actualScale property

### actualPosition : Vector2

DO NOT INVOKE for internal purpose only

### actualX : number

Shortcut to actualPosition.x

### actualY : number

Shortcut to actualPosition.y

### position : Vector2

Position of the primitive, relative to its parent.

BEWARE: if you change only position.x or y it won't trigger a property change and you won't have the expected behavior.

Use this property to set a new Vector2 object, otherwise to change only the x/y use [Prim2DBase](/classes/2.0/Prim2DBase).x or y properties.

Setting this property may have no effect is specific alignment are in effect.

### x : number

Direct access to the position.x value of the primitive

Use this property when you only want to change one component of the position property

### y : number

Direct access to the position.y value of the primitive

Use this property when you only want to change one component of the position property

## Methods

### traverseUp(predicate) &rarr; [Prim2DBase](/classes/2.0/Prim2DBase)

From 'this' primitive, traverse up (from parent to parent) until the given predicate is true

@return the first primitive where the predicate was successful

#### Parameters
 | Name | Type | Description
---|---|---|---
 | predicate | (p: [Prim2DBase](/classes/2.0/Prim2DBase)) =&gt; boolean |  the predicate to test on each parent

