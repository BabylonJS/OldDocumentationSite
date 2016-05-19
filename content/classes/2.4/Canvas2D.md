---
TAGS:
---
## Description

class [Canvas2D](/classes/2.4/Canvas2D) extends [Group2D](/classes/2.4/Group2D)



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

## Methods

### static CreateScreenSpaceundefined &rarr; [Canvas2D](/classes/2.4/Canvas2D)

Create a new 2D ScreenSpace Rendering Canvas, it is a 2D rectangle that has a size (width/height) and a position relative to the top/left corner of the screen.

ScreenSpace Canvas will be drawn in the [Viewport](/classes/2.4/Viewport) as a 2D [Layer](/classes/2.4/Layer) lying to the top of the 3D [Scene](/classes/2.4/Scene). Typically used for traditional UI.

All caching strategies will be available.

PLEASE NOTE: the origin of a Screen [Space](/classes/2.4/Space) Canvas is set to [0;0] (bottom/left) which is different than the default origin of a Primitive which is centered [0.5;0.5]

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static CreateWorldSpaceundefined &rarr; [Canvas2D](/classes/2.4/Canvas2D)

Create a new 2D WorldSpace Rendering Canvas, it is a 2D rectangle that has a size (width/height) and a world transformation information to place it in the world space.

This kind of canvas can't have its Primitives directly drawn in the [Viewport](/classes/2.4/Viewport), they need to be cached in a bitmap at some point, as a consequence the DONT_CACHE strategy is unavailable. For now only CACHESTRATEGY_CANVAS is supported, but the remaining strategies will be soon.

BE AWARE that the Canvas true dimension will be size*renderScaleFactor, then all coordinates and size will have to be express regarding this size.

TIPS: if you want a renderScaleFactor independent reference of frame, create a child [Group2D](/classes/2.4/Group2D) in the Canvas with position 0,0 and size set to null, then set its scale property to the same amount than the renderScaleFactor, put all your primitive inside using coordinates regarding the size property you pick for the Canvas and you'll be fine.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
