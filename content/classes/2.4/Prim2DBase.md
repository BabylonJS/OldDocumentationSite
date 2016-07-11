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

### size : [Size](/classes/2.4/Size)

[Size](/classes/2.4/Size) of the primitive or its bounding area

BEWARE: if you change only size.width or height it won't trigger a property change and you won't have the expected behavior.

Use this property to set a new [Size](/classes/2.4/Size) object, otherwise to change only the width/height use [Prim2DBase](/classes/2.4/Prim2DBase).width or height properties.

### width : number

Direct access to the size.width value of the primitive

Use this property when you only want to change one component of the size property

### height : number

Direct access to the size.height value of the primitive

Use this property when you only want to change one component of the size property

### rotation : number



### scale : number



### actualSize : [Size](/classes/2.4/Size)

Return the size of the primitive as it's being rendered into the target.

This value may be different of the size property when layout/alignment is used or specific primitive types can implement a custom logic through this property.

BEWARE: don't use the setter, it's for internal purpose only

Note to implementers: you have to override this property and declare if necessary a @xxxxInstanceLevel decorator

### actualZOffset : number



### minSize : [Size](/classes/2.4/Size)

Get or set the minimal size the Layout [Engine](/classes/2.4/Engine) should respect when computing the primitive's actualSize.

The Primitive's size won't be less than specified.

The default value depends of the Primitive type

### maxSize : [Size](/classes/2.4/Size)

Get or set the maximal size the Layout [Engine](/classes/2.4/Engine) should respect when computing the primitive's actualSize.

The Primitive's size won't be more than specified.

The default value depends of the Primitive type

### origin : [Vector2](/classes/2.4/Vector2)

The origin defines the normalized coordinate of the center of the primitive, from the bottom/left corner.

The origin is used only to compute transformation of the primitive, it has no meaning in the primitive local frame of reference

For instance:

0,0 means the center is bottom/left. Which is the default for [Canvas2D](/classes/2.4/Canvas2D) instances

0.5,0.5 means the center is at the center of the primitive, which is default of all types of Primitives

0,1 means the center is top/left

@returns The normalized center.

### levelVisible : boolean



### isVisible : boolean



### zOrder : number



### margin : [PrimitiveThickness](/classes/2.4/PrimitiveThickness)



### padding : [PrimitiveThickness](/classes/2.4/PrimitiveThickness)



### marginAlignment : [PrimitiveAlignment](/classes/2.4/PrimitiveAlignment)



### layoutEngine : [LayoutEngineBase](/classes/2.4/LayoutEngineBase)

Get/set the layout engine to use for this primitive.

The default layout engine is the [CanvasLayoutEngine](/classes/2.4/CanvasLayoutEngine).

### layoutArea : [Size](/classes/2.4/Size)

Get/set the layout are of this primitive.

The Layout area is the zone allocated by the Layout [Engine](/classes/2.4/Engine) for this particular primitive. Margins/Alignment will be computed based on this area.

The setter should only be called by a Layout [Engine](/classes/2.4/Engine) class.

### layoutAreaPos : [Vector2](/classes/2.4/Vector2)

Get/set the layout area position (relative to the parent primitive).

The setter should only be called by a Layout [Engine](/classes/2.4/Engine) class.

### isPickable : boolean

Define if the Primitive can be subject to intersection test or not (default is true)

### hierarchyDepth : number

Return the depth level of the Primitive into the Canvas' Graph. A Canvas will be 0, its direct children 1, and so on.

### renderGroup : [Group2D](/classes/2.4/Group2D)

Retrieve the Group that is responsible to render this primitive

### globalTransform : [Matrix](/classes/2.4/Matrix)

Get the global transformation matrix of the primitive

### invGlobalTransform : [Matrix](/classes/2.4/Matrix)

Get invert of the global transformation matrix of the primitive

### localTransform : [Matrix](/classes/2.4/Matrix)

Get the local transformation of the primitive

### boundingInfo : [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Get the boundingInfo associated to the primitive and its children.

The value is supposed to be always up to date

### isSizeAuto : boolean

Determine if the size is automatically computed or fixed because manually specified.

Use the actualSize property to get the final/real size of the primitive

@returns true if the size is automatically computed, false if it were manually specified.

### isPositionAuto : boolean

Determine if the position is automatically computed or fixed because manually specified.

Use the actualPosition property to get the final/real position of the primitive

@returns true if the position is automatically computed, false if it were manually specified.

### pointerEventObservable : [Observable](/classes/2.4/Observable)&lt;[PrimitivePointerInfo](/classes/2.4/PrimitivePointerInfo)&gt;

Interaction with the primitive can be create using this [Observable](/classes/2.4/Observable). See the [PrimitivePointerInfo](/classes/2.4/PrimitivePointerInfo) class for more information

### contentArea : [Size](/classes/2.4/Size)

Get the content are of this primitive, this area is computed using the padding property and also possibly the primitive type itself.

Children of this primitive will be positioned relative to the bottom/left corner of this area.

## Methods

### traverseUp(predicate) &rarr; [Prim2DBase](/classes/2.4/Prim2DBase)

From 'this' primitive, traverse up (from parent to parent) until the given predicate is true

@return the first primitive where the predicate was successful

#### Parameters
 | Name | Type | Description
---|---|---|---
 | predicate | (p: [Prim2DBase](/classes/2.4/Prim2DBase)) =&gt; boolean |  the predicate to test on each parent

### getGlobalPosition() &rarr; [Vector2](/classes/2.4/Vector2)

return the global position of the primitive, relative to its canvas
### getGlobalPositionByRef(v) &rarr; void

return the global position of the primitive, relative to its canvas

#### Parameters
 | Name | Type | Description
---|---|---|---
 | v | [Vector2](/classes/2.4/Vector2) |  the valid [Vector2](/classes/2.4/Vector2) object where the global position will be stored

### findById(id) &rarr; [Prim2DBase](/classes/2.4/Prim2DBase)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

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

Dispose the primitive, remove it from its parent.
