---
TAGS:
---
## Description

class [ScreenSpaceCanvas2D](/classes/2.4/ScreenSpaceCanvas2D) extends [Canvas2D](/classes/2.4/Canvas2D)



## Constructor

## new [ScreenSpaceCanvas2D](/classes/2.4/ScreenSpaceCanvas2D)(scene, settings)

Create a new 2D ScreenSpace Rendering Canvas, it is a 2D rectangle that has a size (width/height) and a position relative to the bottom/left corner of the screen.

ScreenSpace Canvas will be drawn in the [Viewport](/classes/2.4/Viewport) as a 2D [Layer](/classes/2.4/Layer) lying to the top of the 3D [Scene](/classes/2.4/Scene). Typically used for traditional UI.

All caching strategies will be available.

PLEASE NOTE: the origin of a Screen [Space](/classes/2.4/Space) Canvas is set to [0;0] (bottom/left) which is different than the default origin of a Primitive which is centered [0.5;0.5]

 - children: an array of direct children primitives

 - id: a text identifier, for information purpose only

 - x: the position along the x axis (horizontal), relative to the left edge of the viewport. you can alternatively use the position setting.

 - y: the position along the y axis (vertically), relative to the bottom edge of the viewport. you can alternatively use the position setting.

 - position: the position of the canvas, relative from the bottom/left of the scene's viewport. Alternatively you can set the x and y properties directly. Default value is [0, 0]

 - width: the width of the Canvas. you can alternatively use the size setting.

 - height: the height of the Canvas. you can alternatively use the size setting.

 - size: the [Size](/classes/2.4/Size) of the canvas. Alternatively the width and height properties can be set. If null two behaviors depend on the cachingStrategy: if it's CACHESTRATEGY_CACHECANVAS then it will always auto-fit the rendering device, in all the other modes it will fit the content of the Canvas

 - cachingStrategy: either CACHESTRATEGY_TOPLEVELGROUPS, CACHESTRATEGY_ALLGROUPS, CACHESTRATEGY_CANVAS, CACHESTRATEGY_DONTCACHE. Please refer to their respective documentation for more information. Default is [Canvas2D](/classes/2.4/Canvas2D).CACHESTRATEGY_DONTCACHE

 - enableInteraction: if true the pointer events will be listened and rerouted to the appropriate primitives of the [Canvas2D](/classes/2.4/Canvas2D) through the [Prim2DBase](/classes/2.4/Prim2DBase).onPointerEventObservable observable property. Default is true.

 - isVisible: true if the canvas must be visible, false for hidden. Default is true.

- backgroundRoundRadius: the round radius of the background, either backgroundFill or backgroundBorder must be specified.

- backgroundFill: the brush to use to create a background fill for the canvas. can be a string value (see BABYLON.[Canvas2D](/classes/2.4/Canvas2D).GetBrushFromString) or a IBrush2D instance.

- backgroundBorder: the brush to use to create a background border for the canvas. can be a string value (see BABYLON.[Canvas2D](/classes/2.4/Canvas2D).GetBrushFromString) or a IBrush2D instance.

- backgroundBorderThickness: if a backgroundBorder is specified, its thickness can be set using this property

- customWorldSpaceNode: if specified the Canvas will be rendered in this given [Node](/classes/2.4/Node). But it's the responsibility of the caller to set the "worldSpaceToNodeLocal" property to compute the hit of the mouse ray into the node (in world coordinate system) as well as rendering the cached bitmap in the node itself. The properties cachedRect and cachedTexture of [Group2D](/classes/2.4/Group2D) will give you what you need to do that.

- paddingTop: top padding, can be a number (will be pixels) or a string (see BABYLON.[PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- paddingLeft: left padding, can be a number (will be pixels) or a string (see BABYLON.[PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- paddingRight: right padding, can be a number (will be pixels) or a string (see BABYLON.[PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- paddingBottom: bottom padding, can be a number (will be pixels) or a string (see BABYLON.[PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

- padding: top, left, right and bottom padding formatted as a single string (see BABYLON.[PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) |  the [Scene](/classes/2.4/Scene) that owns the Canvas
optional | settings | { children: Array&lt;[Prim2DBase](/classes/2.4/Prim2DBase)&gt;,  id: string,  x: number,  y: number,  position: [Vector2](/classes/2.4/Vector2),  origin: [Vector2](/classes/2.4/Vector2),  width: number,  height: number,  size: [Size](/classes/2.4/Size),  cachingStrategy: number,  enableInteraction: boolean,  isVisible: boolean,  backgroundRoundRadius: number,  backgroundFill: IBrush2D,  backgroundBorder: IBrush2D,  backgroundBorderThickNess: number,  paddingTop: number,  paddingLeft: number,  paddingRight: number,  paddingBottom: number,  padding: string } |  a combination of settings, possible ones are
