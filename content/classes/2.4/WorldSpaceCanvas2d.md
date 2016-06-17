---
TAGS:
---
## Description

class [WorldSpaceCanvas2D](/classes/2.4/WorldSpaceCanvas2D) extends [Canvas2D](/classes/2.4/Canvas2D)



## Constructor

## new [WorldSpaceCanvas2D](/classes/2.4/WorldSpaceCanvas2D)(scene, size, settings)

Create a new 2D WorldSpace Rendering Canvas, it is a 2D rectangle that has a size (width/height) and a world transformation information to place it in the world space.

This kind of canvas can't have its Primitives directly drawn in the [Viewport](/classes/2.4/Viewport), they need to be cached in a bitmap at some point, as a consequence the DONT_CACHE strategy is unavailable. For now only CACHESTRATEGY_CANVAS is supported, but the remaining strategies will be soon.

 - children: an array of direct children primitives

 - id: a text identifier, for information purpose only, default is null.

 - worldPosition the position of the Canvas in World [Space](/classes/2.4/Space), default is [0,0,0]

 - worldRotation the rotation of the Canvas in World [Space](/classes/2.4/Space), default is [Quaternion](/classes/2.4/Quaternion).Identity()

 - renderScaleFactor A scale factor applied to create the rendering texture that will be mapped in the [Scene](/classes/2.4/Scene) Rectangle. If you set 2 for instance the texture will be twice large in width and height. A greater value will allow to achieve a better rendering quality. Default value is 1.

BE AWARE that the Canvas true dimension will be size*renderScaleFactor, then all coordinates and size will have to be express regarding this size.

TIPS: if you want a renderScaleFactor independent reference of frame, create a child [Group2D](/classes/2.4/Group2D) in the Canvas with position 0,0 and size set to null, then set its scale property to the same amount than the renderScaleFactor, put all your primitive inside using coordinates regarding the size property you pick for the Canvas and you'll be fine.

- sideOrientation: Unexpected behavior occur if the value is different from [Mesh](/classes/2.4/Mesh).DEFAULTSIDE right now, so please use this one, which is the default.

- cachingStrategy Must be CACHESTRATEGY_CANVAS for now, which is the default.

- enableInteraction: if true the pointer events will be listened and rerouted to the appropriate primitives of the [Canvas2D](/classes/2.4/Canvas2D) through the [Prim2DBase](/classes/2.4/Prim2DBase).onPointerEventObservable observable property. Default is false (the opposite of ScreenSpace).

- isVisible: true if the canvas must be visible, false for hidden. Default is true.

- backgroundRoundRadius: the round radius of the background, either backgroundFill or backgroundBorder must be specified.

- backgroundFill: the brush to use to create a background fill for the canvas. can be a string value (see [Canvas2D](/classes/2.4/Canvas2D).GetBrushFromString) or a IBrush2D instance.

- backgroundBorder: the brush to use to create a background border for the canvas. can be a string value (see [Canvas2D](/classes/2.4/Canvas2D).GetBrushFromString) or a IBrush2D instance.

- backgroundBorderThickness: if a backgroundBorder is specified, its thickness can be set using this property

- customWorldSpaceNode: if specified the Canvas will be rendered in this given [Node](/classes/2.4/Node). But it's the responsibility of the caller to set the "worldSpaceToNodeLocal" property to compute the hit of the mouse ray into the node (in world coordinate system) as well as rendering the cached bitmap in the node itself. The properties cachedRect and cachedTexture of [Group2D](/classes/2.4/Group2D) will give you what you need to do that.

- paddingTop: top padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- paddingLeft: left padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- paddingRight: right padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- paddingBottom: bottom padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- padding: top, left, right and bottom padding formatted as a single string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) |  the [Scene](/classes/2.4/Scene) that owns the Canvas
 | size | [Size](/classes/2.4/Size) |  the dimension of the Canvas in World [Space](/classes/2.4/Space)
optional | settings | { children: Array&lt;[Prim2DBase](/classes/2.4/Prim2DBase)&gt;,  id: string,  worldPosition: [Vector3](/classes/2.4/Vector3),  worldRotation: [Quaternion](/classes/2.4/Quaternion),  renderScaleFactor: number,  sideOrientation: number,  cachingStrategy: number,  enableInteraction: boolean,  isVisible: boolean,  backgroundRoundRadius: number,  backgroundFill: IBrush2D,  backgroundBorder: IBrush2D,  backgroundBorderThickNess: number,  customWorldSpaceNode: [Node](/classes/2.4/Node),  paddingTop: number,  paddingLeft: number,  paddingRight: number,  paddingBottom: number,  padding: string } |  a combination of settings, possible ones are
