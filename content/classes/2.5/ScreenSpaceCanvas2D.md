---
TAGS:
---
## Description

class [ScreenSpaceCanvas2D](/classes/2.0/ScreenSpaceCanvas2D) extends [Canvas2D](/classes/2.0/Canvas2D)



## Constructor

## new [ScreenSpaceCanvas2D](/classes/2.0/ScreenSpaceCanvas2D)(scene, settings)

Create a new 2D ScreenSpace Rendering Canvas, it is a 2D rectangle that has a size (width/height) and a position relative to the bottom/left corner of the screen.

ScreenSpace Canvas will be drawn in the Viewport as a 2D Layer lying to the top of the 3D Scene. Typically used for traditional UI.

All caching strategies will be available.

PLEASE NOTE: the origin of a Screen Space Canvas is set to [0;0] (bottom/left) which is different than the default origin of a Primitive which is centered [0.5;0.5]

 - children: an array of direct children primitives

 - id: a text identifier, for information purpose only

 - x: the position along the x axis (horizontal), relative to the left edge of the viewport. you can alternatively use the position setting.

 - y: the position along the y axis (vertically), relative to the bottom edge of the viewport. you can alternatively use the position setting.

 - position: the position of the canvas, relative from the bottom/left of the scene's viewport. Alternatively you can set the x and y properties directly. Default value is [0, 0]

 - width: the width of the Canvas. you can alternatively use the size setting.

 - height: the height of the Canvas. you can alternatively use the size setting.

 - size: the Size of the canvas. Alternatively the width and height properties can be set. If null two behaviors depend on the cachingStrategy: if it's CACHESTRATEGY_CACHECANVAS then it will always auto-fit the rendering device, in all the other modes it will fit the content of the Canvas

 - renderingPhase: you can specify for which camera and which renderGroup this canvas will render to enable interleaving of 3D/2D content through the use of renderinGroup. As a rendering Group is rendered for each camera, you have to specify in the scope of which camera you want the canvas' render to be made. Default behavior will render the Canvas at the very end of the render loop.

 - designSize: if you want to set the canvas content based on fixed coordinates whatever the final canvas dimension would be, set this. For instance a designSize of 360*640 will give you the possibility to specify all the children element in this frame. The Canvas' true size will be the HTMLCanvas' size: for instance it could be 720*1280, then a uniform scale of 2 will be applied on the Canvas to keep the absolute coordinates working as expecting. If the ratios of the designSize and the true Canvas size are not the same, then the scale is computed following the designUseHorizAxis member by using either the size of the horizontal axis or the vertical axis.

 - designUseHorizAxis: you can set this member if you use designSize to specify which axis is priority to compute the scale when the ratio of the canvas' size is different from the designSize's one.

 - cachingStrategy: either CACHESTRATEGY_TOPLEVELGROUPS, CACHESTRATEGY_ALLGROUPS, CACHESTRATEGY_CANVAS, CACHESTRATEGY_DONTCACHE. Please refer to their respective documentation for more information. Default is [Canvas2D](/classes/2.0/Canvas2D).CACHESTRATEGY_DONTCACHE

 - enableInteraction: if true the pointer events will be listened and rerouted to the appropriate primitives of the [Canvas2D](/classes/2.0/Canvas2D) through the [Prim2DBase](/classes/2.0/Prim2DBase).onPointerEventObservable observable property. Default is true.

 - isVisible: true if the canvas must be visible, false for hidden. Default is true.

- backgroundRoundRadius: the round radius of the background, either backgroundFill or backgroundBorder must be specified.

- backgroundFill: the brush to use to create a background fill for the canvas. can be a string value (see BABYLON.[Canvas2D](/classes/2.0/Canvas2D).GetBrushFromString) or a IBrush2D instance.

- backgroundBorder: the brush to use to create a background border for the canvas. can be a string value (see BABYLON.[Canvas2D](/classes/2.0/Canvas2D).GetBrushFromString) or a IBrush2D instance.

- backgroundBorderThickness: if a backgroundBorder is specified, its thickness can be set using this property

- customWorldSpaceNode: if specified the Canvas will be rendered in this given Node. But it's the responsibility of the caller to set the "worldSpaceToNodeLocal" property to compute the hit of the mouse ray into the node (in world coordinate system) as well as rendering the cached bitmap in the node itself. The properties cachedRect and cachedTexture of [Group2D](/classes/2.0/Group2D) will give you what you need to do that.

- paddingTop: top padding, can be a number (will be pixels) or a string (see BABYLON.[PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- paddingLeft: left padding, can be a number (will be pixels) or a string (see BABYLON.[PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- paddingRight: right padding, can be a number (will be pixels) or a string (see BABYLON.[PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- paddingBottom: bottom padding, can be a number (will be pixels) or a string (see BABYLON.[PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

- padding: top, left, right and bottom padding formatted as a single string (see BABYLON.[PrimitiveThickness](/classes/2.0/PrimitiveThickness).fromString)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | Scene |  the Scene that owns the Canvas
optional | settings | { children: Array&lt;[Prim2DBase](/classes/2.0/Prim2DBase)&gt;,  id: string,  x: number,  y: number,  position: Vector2,  origin: Vector2,  width: number,  height: number,  size: Size,  renderingPhase: { camera: Camera,  renderingGroupID: number },  designSize: Size,  designUseHorizAxis: boolean,  cachingStrategy: number,  cacheBehavior: number,  enableInteraction: boolean,  isVisible: boolean,  backgroundRoundRadius: number,  backgroundFill: IBrush2D,  string: string,  backgroundBorder: IBrush2D,  string: string,  backgroundBorderThickNess: number,  paddingTop: number,  string: string,  paddingLeft: number,  string: string,  paddingRight: number,  string: string,  paddingBottom: number,  string: string,  padding: string } |  a combination of settings, possible ones are
