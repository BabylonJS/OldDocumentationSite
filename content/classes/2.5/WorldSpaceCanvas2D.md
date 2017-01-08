---
TAGS:
---
## Description

class [WorldSpaceCanvas2D](/classes/2.0/WorldSpaceCanvas2D) extends [Canvas2D](/classes/2.0/Canvas2D)



## Constructor

## new [WorldSpaceCanvas2D](/classes/2.0/WorldSpaceCanvas2D)(scene, size, settings)

Create a new 2D WorldSpace Rendering Canvas, it is a 2D rectangle that has a size (width/height) and a world transformation information to place it in the world space.

This kind of canvas can't have its Primitives directly drawn in the Viewport, they need to be cached in a bitmap at some point, as a consequence the DONT_CACHE strategy is unavailable. For now only CACHESTRATEGY_CANVAS is supported, but the remaining strategies will be soon.

 - children: an array of direct children primitives

 - id: a text identifier, for information purpose only, default is null.

 - worldPosition the position of the Canvas in World Space, default is [0,0,0]

 - worldRotation the rotation of the Canvas in World Space, default is Quaternion.Identity()

- sideOrientation: Unexpected behavior occur if the value is different from Mesh.DEFAULTSIDE right now, so please use this one, which is the default.

- cachingStrategy Must be CACHESTRATEGY_CANVAS for now, which is the default.

- enableInteraction: if true the pointer events will be listened and rerouted to the appropriate primitives of the [Canvas2D](/classes/2.0/Canvas2D) through the [Prim2DBase](/classes/2.0/Prim2DBase).onPointerEventObservable observable property. Default is false (the opposite of ScreenSpace).

- isVisible: true if the canvas must be visible, false for hidden. Default is true.

- backgroundRoundRadius: the round radius of the background, either backgroundFill or backgroundBorder must be specified.

- backgroundFill: the brush to use to create a background fill for the canvas. can be a string value (see [Canvas2D](/classes/2.0/Canvas2D).GetBrushFromString) or a IBrush2D instance.

- backgroundBorder: the brush to use to create a background border for the canvas. can be a string value (see [Canvas2D](/classes/2.0/Canvas2D).GetBrushFromString) or a IBrush2D instance.

- backgroundBorderThickness: if a backgroundBorder is specified, its thickness can be set using this property

- customWorldSpaceNode: if specified the Canvas will be rendered in this given Node. But it's the responsibility of the caller to set the "worldSpaceToNodeLocal" property to compute the hit of the mouse ray into the node (in world coordinate system) as well as rendering the cached bitmap in the node itself. The properties cachedRect and cachedTexture of [Group2D](/classes/2.0/Group2D) will give you what you need to do that.

- maxAdaptiveCanvasSize: set the max size (width and height) of the bitmap that will contain the cached version of the WorldSpace Canvas. Default is 1024 or less if it's not supported. In any case the value you give will be clipped by the maximum that WebGL supports on the running device. You can set any size, more than 1024 if you want, but testing proved it's a good max value for non "retina" like screens.

- paddingTop: top padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- paddingLeft: left padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- paddingRight: right padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- paddingBottom: bottom padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- padding: top, left, right and bottom padding formatted as a single string (see [PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | Scene |  the Scene that owns the Canvas
 | size | Size |  the dimension of the Canvas in World Space
optional | settings | { children: Array&lt;[Prim2DBase](/classes/2.0/Prim2DBase)&gt;,  id: string,  worldPosition: Vector3,  worldRotation: Quaternion,  sideOrientation: number,  cachingStrategy: number,  enableInteraction: boolean,  isVisible: boolean,  backgroundRoundRadius: number,  backgroundFill: IBrush2D,  string: string,  backgroundBorder: IBrush2D,  string: string,  backgroundBorderThickNess: number,  customWorldSpaceNode: Node,  maxAdaptiveCanvasSize: number,  paddingTop: number,  string: string,  paddingLeft: number,  string: string,  paddingRight: number,  string: string,  paddingBottom: number,  string: string,  padding: string } |  a combination of settings, possible ones are
## Methods

### dispose() &rarr; boolean


