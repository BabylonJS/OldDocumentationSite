---
TAGS:
---
## Description

class [Canvas2D](/classes/2.0/Canvas2D) extends [Group2D](/classes/2.0/Group2D)



## Constructor

## new [Canvas2D](/classes/2.0/Canvas2D)(scene, settings)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | Scene | 
optional | settings | { id: string,  children: Array&lt;[Prim2DBase](/classes/2.0/Prim2DBase)&gt;,  size: Size,  renderingPhase: { camera: Camera,  renderingGroupID: number },  designSize: Size,  designUseHorizAxis: boolean,  isScreenSpace: boolean,  cachingStrategy: number,  enableInteraction: boolean,  origin: Vector2,  isVisible: boolean,  backgroundRoundRadius: number,  backgroundFill: IBrush2D,  string: string,  backgroundBorder: IBrush2D,  string: string,  backgroundBorderThickNess: number } | 
## Members

### static CACHESTRATEGY_TOPLEVELGROUPS : number

In this strategy only the direct children groups of the Canvas will be cached, their whole content (whatever the sub groups they have) into a single bitmap.

This strategy doesn't allow primitives added directly as children of the Canvas.

You typically want to use this strategy of a screenSpace fullscreen canvas: you don't want a bitmap cache taking the whole screen resolution but still want the main contents (say UI in the topLeft and rightBottom for instance) to be efficiently cached.

### static CACHESTRATEGY_ALLGROUPS : number

In this strategy each group will have its own cache bitmap (except if a given group explicitly defines the DONTCACHEOVERRIDE or CACHEINPARENTGROUP behaviors).

This strategy is typically used if the canvas has some groups that are frequently animated. Unchanged ones will have a steady cache and the others will be refreshed when they change, reducing the redraw operation count to their content only.

When using this strategy, group instances can rely on the DONTCACHEOVERRIDE or CACHEINPARENTGROUP behaviors to minimize the amount of cached bitmaps.

Note that in this mode the Canvas itself is not cached, it only contains the sprites of its direct children group to render, there's no point to cache the whole canvas, sprites will be rendered pretty efficiently, the memory cost would be too great for the value of it.

### static CACHESTRATEGY_CANVAS : number

In this strategy the whole canvas is cached into a single bitmap containing every primitives it owns, at the exception of the ones that are owned by a group having the DONTCACHEOVERRIDE behavior (these primitives will be directly drawn to the viewport at each render for screenSpace Canvas or be part of the Canvas cache bitmap for worldSpace Canvas).

### static CACHESTRATEGY_DONTCACHE : number

This strategy is used to recompose/redraw the canvas entirely at each viewport render.

Use this strategy if memory is a concern above rendering performances and/or if the canvas is frequently animated (hence reducing the benefits of caching).

Note that you can't use this strategy for WorldSpace Canvas, they need at least a top level group caching.

### static RENDEROBSERVABLE_PRE : number

Observable Mask to be notified before rendering is made

### static RENDEROBSERVABLE_POST : number

Observable Mask to be notified after rendering is made

### drawCallsOpaqueCounter : PerfCounter



### drawCallsAlphaTestCounter : PerfCounter



### drawCallsTransparentCounter : PerfCounter



### groupRenderCounter : PerfCounter



### updateTransparentDataCounter : PerfCounter



### cachedGroupRenderCounter : PerfCounter



### updateCachedStateCounter : PerfCounter



### updateLayoutCounter : PerfCounter



### updatePositioningCounter : PerfCounter



### updateLocalTransformCounter : PerfCounter



### updateGlobalTransformCounter : PerfCounter



### boundingInfoRecomputeCounter : PerfCounter



### static instances : Array&lt;[Canvas2D](/classes/2.0/Canvas2D)&gt;



