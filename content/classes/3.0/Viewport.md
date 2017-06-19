---
ID_PAGE: 25244
PG_TITLE: Viewport
PG_VERSION: 2.1
---
## Description

class [Viewport](/classes/3.0/Viewport)



## Constructor

## new [Viewport](/classes/3.0/Viewport)(x, y, width, height)

Creates a [Viewport](/classes/3.0/Viewport) object located at (x, y) and sized (width, height).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |      The initial x coordinate of the upper-left pixel of the viewport
 | y | number |      The initial y coordinate of the upper-left pixel of the viewport
 | width | number |      The initial width of the viewport
## Members

### x : number

The pixel x coordinate of the upper-left corner of the viewport on the render-target surface

### y : number

The pixel y coordinate of the upper-left corner of the viewport on the render-target surface

### width : number

The width of the viewport on the render-target surface in pixels

### height : number

The height of the  viewport on the render-target surface in pixels

## Methods

### toGlobal(renderWidth, renderHeight) &rarr; [Viewport](/classes/3.0/Viewport)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderWidth | number |   
 | renderHeight | number |   
### clone() &rarr; [Viewport](/classes/3.0/Viewport)

Returns a new [Viewport](/classes/3.0/Viewport) copied from the current one.
