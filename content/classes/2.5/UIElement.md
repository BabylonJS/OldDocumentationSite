---
TAGS:
---
## Description

class [UIElement](/classes/2.0/UIElement) extends [SmartPropertyBase](/classes/2.0/SmartPropertyBase)



## Constructor

## new [UIElement](/classes/2.0/UIElement)(settings)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | settings | { id: string,  parent: [UIElement](/classes/2.0/UIElement),  templateName: string,  styleName: string,  minWidth: number,  minHeight: number,  maxWidth: number,  maxHeight: number,  width: number,  height: number,  marginTop: number,  string: string,  marginLeft: number,  string: string,  marginRight: number,  string: string,  marginBottom: number,  string: string,  margin: number,  string: string,  marginHAlignment: number,  marginVAlignment: number,  marginAlignment: string,  paddingTop: number,  string: string,  paddingLeft: number,  string: string,  paddingRight: number,  string: string,  paddingBottom: number,  string: string,  padding: string,  paddingHAlignment: number,  paddingVAlignment: number,  paddingAlignment: string } | 

## Members

### static enabledState : string



### static disabledState : string



### static mouseOverState : string



### static UIELEMENT_PROPCOUNT : number



### static parentProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static widthProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static heightProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static minWidthProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static minHeightProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static maxWidthProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static maxHeightProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static actualWidthProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static actualHeightProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static marginProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static paddingProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static marginAlignmentProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static paddingAlignmentProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static isEnabledProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static isFocusedProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### static isMouseOverProperty : [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo)



### animations : Animation[]

Animation array, more info: http://doc.babylonjs.com/tutorials/Animations

### ownerWindow : [Window](/classes/2.0/Window)



### style : string



### id : string

A string that identifies the [UIElement](/classes/2.0/UIElement).

The id is optional and there's possible collision with other [UIElement](/classes/2.0/UIElement)'s id as the uniqueness is not supported.

### uid : string

Return a unique id automatically generated.

This property is mainly used for serialization to ensure a perfect way of identifying a [UIElement](/classes/2.0/UIElement)

### hierarchyDepth : number



### parent : [UIElement](/classes/2.0/UIElement)



### width : number



### height : number



### minWidth : number



### minHheight : number



### minHeight : number



### maxWidth : number



### maxHeight : number



### actualWidth : number



### actualHeight : number



### margin : [PrimitiveThickness](/classes/2.0/PrimitiveThickness)



### padding : [PrimitiveThickness](/classes/2.0/PrimitiveThickness)



### marginAlignment : [PrimitiveAlignment](/classes/2.0/PrimitiveAlignment)



### paddingAlignment : [PrimitiveAlignment](/classes/2.0/PrimitiveAlignment)



### isVisible : boolean



### isEnabled : boolean



### isFocused : boolean



### isMouseOver : boolean



### isFocusScope : boolean



### isFocusable : boolean



## Methods

### dispose() &rarr; boolean


### getAnimatables() &rarr; IAnimatable[]

Returns as a new array populated with the Animatable used by the primitive. Must be overloaded by derived primitives.

Look at [Sprite2D](/classes/2.0/Sprite2D) for more information
### findById(id) &rarr; [UIElement](/classes/2.0/UIElement)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

