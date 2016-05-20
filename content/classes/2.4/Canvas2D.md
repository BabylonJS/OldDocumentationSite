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

### scene : [Scene](/classes/2.4/Scene)

Accessor to the [Scene](/classes/2.4/Scene) that owns the Canvas

@returns The instance of the [Scene](/classes/2.4/Scene) object

### engine : [Engine](/classes/2.4/Engine)

Accessor to the [Engine](/classes/2.4/Engine) that drives the [Scene](/classes/2.4/Scene) used by this Canvas

@returns The instance of the [Engine](/classes/2.4/Engine) object

### cachingStrategy : number

Accessor of the Caching Strategy used by this Canvas.

See [Canvas2D](/classes/2.4/Canvas2D).CACHESTRATEGY_xxxx static members for more information

@returns the value corresponding to the used strategy.

### worldSpaceCanvasNode : [WorldSpaceCanvas2d](/classes/2.4/WorldSpaceCanvas2d)

Only valid for World [Space](/classes/2.4/Space) Canvas, returns the scene node that display the canvas

### supportInstancedArray : boolean

Check if the WebGL Instanced Array extension is supported or not

@returns {}

### backgroundFill : IBrush2D

Property that defines the fill object used to draw the background of the Canvas.

Note that Canvas with a Caching Strategy of

@returns If the background is not set, null will be returned, otherwise a valid fill object is returned.

### backgroundBorder : IBrush2D

Property that defines the border object used to draw the background of the Canvas.

@returns If the background is not set, null will be returned, otherwise a valid border object is returned.

### backgroundRoundRadius : number

You can set the roundRadius of the background

@returns The current roundRadius

### interactionEnabled : boolean

Enable/Disable interaction for this Canvas

When enabled the [Prim2DBase](/classes/2.4/Prim2DBase).pointerEventObservable property will notified when appropriate events occur

### hierarchySiblingZDelta : number

Read-only property that return the Z delta to apply for each sibling primitives inside of a given one.

Sibling Primitives are defined in a specific order, the first ones will be draw below the next ones.

This property define the Z value to apply between each sibling Primitive. Current implementation allows 1000 Siblings Primitives per level.

@returns The Z Delta

### hierarchyLevelZFactor : number

Return the Z Factor that will be applied for each new hierarchy level.

@returns The Z Factor

## Methods

### static CreateScreenSpace(scene, name, pos, size, cachingStrategy, enableInteraction) &rarr; [Canvas2D](/classes/2.4/Canvas2D)

Create a new 2D ScreenSpace Rendering Canvas, it is a 2D rectangle that has a size (width/height) and a position relative to the top/left corner of the screen.

ScreenSpace Canvas will be drawn in the [Viewport](/classes/2.4/Viewport) as a 2D [Layer](/classes/2.4/Layer) lying to the top of the 3D [Scene](/classes/2.4/Scene). Typically used for traditional UI.

All caching strategies will be available.

PLEASE NOTE: the origin of a Screen [Space](/classes/2.4/Space) Canvas is set to [0;0] (bottom/left) which is different than the default origin of a Primitive which is centered [0.5;0.5]

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) |  the [Scene](/classes/2.4/Scene) that owns the Canvas
 | name | string |  the name of the Canvas, for information purpose only
 | pos | [Vector2](/classes/2.4/Vector2) |  the position of the canvas, relative from the bottom/left of the scene's viewport
 | size | [Size](/classes/2.4/Size) |  the [Size](/classes/2.4/Size) of the canvas. If null two behaviors depend on the cachingStrategy: if it's CACHESTRATEGY_CACHECANVAS then it will always auto-fit the rendering device, in all the other modes it will fit the content of the Canvas
optional | cachingStrategy | number |  either CACHESTRATEGY_TOPLEVELGROUPS, CACHESTRATEGY_ALLGROUPS, CACHESTRATEGY_CANVAS, CACHESTRATEGY_DONTCACHE. Please refer to their respective documentation for more information.
### static CreateWorldSpace(scene, name, position, rotation, size, renderScaleFactor, sideOrientation, cachingStrategy, enableInteraction) &rarr; [Canvas2D](/classes/2.4/Canvas2D)

Create a new 2D WorldSpace Rendering Canvas, it is a 2D rectangle that has a size (width/height) and a world transformation information to place it in the world space.

This kind of canvas can't have its Primitives directly drawn in the [Viewport](/classes/2.4/Viewport), they need to be cached in a bitmap at some point, as a consequence the DONT_CACHE strategy is unavailable. For now only CACHESTRATEGY_CANVAS is supported, but the remaining strategies will be soon.

BE AWARE that the Canvas true dimension will be size*renderScaleFactor, then all coordinates and size will have to be express regarding this size.

TIPS: if you want a renderScaleFactor independent reference of frame, create a child [Group2D](/classes/2.4/Group2D) in the Canvas with position 0,0 and size set to null, then set its scale property to the same amount than the renderScaleFactor, put all your primitive inside using coordinates regarding the size property you pick for the Canvas and you'll be fine.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) |  the [Scene](/classes/2.4/Scene) that owns the Canvas
 | name | string |  the name of the Canvas, for information purpose only
 | position | [Vector3](/classes/2.4/Vector3) |  the position of the Canvas in World [Space](/classes/2.4/Space)
 | rotation | [Quaternion](/classes/2.4/Quaternion) |  the rotation of the Canvas in World [Space](/classes/2.4/Space)
 | size | [Size](/classes/2.4/Size) |  the dimension of the Canvas in World [Space](/classes/2.4/Space)
optional | renderScaleFactor | number |  A scale factor applied to create the rendering texture that will be mapped in the [Scene](/classes/2.4/Scene) Rectangle. If you set 2 for instance the texture will be twice large in width and height. A greater value will allow to achieve a better rendering quality.
optional | sideOrientation | number |  Unexpected behavior occur if the value is different from [Mesh](/classes/2.4/Mesh).DEFAULTSIDE right now, so please use this one.
optional | cachingStrategy | number |  Must be CACHESTRATEGY_CANVAS for now
### setupCanvas(scene, name, size, isScreenSpace, cachingstrategy, enableInteraction) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) | 
 | name | string | 
 | size | [Size](/classes/2.4/Size) | 
 | isScreenSpace | boolean | 
 | cachingstrategy | number | 
### isPointerCaptured(pointerId) &rarr; boolean

Determine if the given pointer is captured or not

@return true if it's captured, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
 | pointerId | number |  the Id of the pointer

### dispose() &rarr; boolean

Don't forget to call the dispose method when you're done with the Canvas instance.

But don't worry, if you dispose its scene, the canvas will be automatically disposed too.
### static GetSolidColorBrush(color) &rarr; IBrush2D

Get a Solid Color Brush instance matching the given color.

@return A shared instance of the [SolidColorBrush2D](/classes/2.4/SolidColorBrush2D) class that use the given color

#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color4](/classes/2.4/Color4) |  The color to retrieve

### static GetSolidColorBrushFromHex(hexValue) &rarr; IBrush2D

Get a Solid Color Brush instance matching the given color expressed as a CSS formatted hexadecimal value.

@return A shared instance of the [SolidColorBrush2D](/classes/2.4/SolidColorBrush2D) class that uses the given color

#### Parameters
 | Name | Type | Description
---|---|---|---
 | hexValue | string | 

### static GetGradientColorBrush(color1, color2, translation, rotation, scale) &rarr; IBrush2D



#### Parameters
 | Name | Type | Description
---|---|---|---
 | color1 | [Color4](/classes/2.4/Color4) | 
 | color2 | [Color4](/classes/2.4/Color4) | 
optional | translation | [Vector2](/classes/2.4/Vector2) | 
optional | rotation | number | 
