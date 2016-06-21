---
TAGS:
---
## Description

class [Canvas2D](/classes/2.4/Canvas2D) extends [Group2D](/classes/2.4/Group2D)



## Constructor

## new [Canvas2D](/classes/2.4/Canvas2D)(scene, settings)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) | 
optional | settings | { id: string,  children: Array&lt;[Prim2DBase](/classes/2.4/Prim2DBase)&gt;,  size: [Size](/classes/2.4/Size),  renderScaleFactor: number,  isScreenSpace: boolean,  cachingStrategy: number,  enableInteraction: boolean,  origin: [Vector2](/classes/2.4/Vector2),  isVisible: boolean,  backgroundRoundRadius: number,  backgroundFill: IBrush2D,  backgroundBorder: IBrush2D,  backgroundBorderThickNess: number } | 
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

### static hierarchyLevelMaxSiblingCount : number



### worldSpaceToNodeLocal : (worldPos: [Vector3](/classes/2.4/Vector3)) =&gt; [Vector2](/classes/2.4/Vector2)

If you set your own WorldSpaceNode to display the [Canvas2D](/classes/2.4/Canvas2D) you have to provide your own implementation of this method which computes the local position in the Canvas based on the given 3D World one.

Beware that you have to take under consideration the origin and the renderScaleFactor in your calculations! Good luck!

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

### worldSpaceCanvasNode : [Node](/classes/2.4/Node)

Only valid for World [Space](/classes/2.4/Space) Canvas, returns the scene node that displays the canvas

### supportInstancedArray : boolean

Check if the WebGL Instanced Array extension is supported or not

### backgroundFill : IBrush2D

Property that defines the fill object used to draw the background of the Canvas.

Note that Canvas with a Caching Strategy of

@returns If the background is not set, null will be returned, otherwise a valid fill object is returned.

### backgroundBorder : IBrush2D

Property that defines the border object used to draw the background of the Canvas.

@returns If the background is not set, null will be returned, otherwise a valid border object is returned.

### backgroundBorderThickness : number

Property that defines the thickness of the border object used to draw the background of the Canvas.

@returns If the background is not set, null will be returned, otherwise a valid number matching the thickness is returned.

### backgroundRoundRadius : number

You can set the roundRadius of the background

@returns The current roundRadius

### interactionEnabled : boolean

Enable/Disable interaction for this Canvas

When enabled the [Prim2DBase](/classes/2.4/Prim2DBase).pointerEventObservable property will notified when appropriate events occur

## Methods

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

Get a Gradient Color Brush

#### Parameters
 | Name | Type | Description
---|---|---|---
 | color1 | [Color4](/classes/2.4/Color4) |  starting color
 | color2 | [Color4](/classes/2.4/Color4) |  engine color
optional | translation | [Vector2](/classes/2.4/Vector2) |  translation vector to apply. default is [0;0]
optional | rotation | number |  rotation in radian to apply to the brush, initial direction is top to bottom. rotation is counter clockwise. default is 0.
### static GetBrushFromString(brushString) &rarr; IBrush2D

Create a solid or gradient brush from a string value.

 - "solid: #RRGGBBAA" or "#RRGGBBAA"

 - "gradient: #FF808080, #FFFFFFF[, [10:20], 180, 1]" for color1, color2, translation, rotation (degree), scale. The last three are optionals, but if specified must be is this order. "gradient:" can be omitted.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | brushString | string |  should be either

