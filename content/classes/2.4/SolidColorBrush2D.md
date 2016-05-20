---
TAGS:
---
## Description

class [SolidColorBrush2D](/classes/2.4/SolidColorBrush2D) extends [LockableBase](/classes/2.4/LockableBase)

This class implements a Brush that will be drawn with a uniform solid color (i.e. the same color everywhere in the content where the brush is assigned to).

## Constructor

## new [SolidColorBrush2D](/classes/2.4/SolidColorBrush2D)(color, lock)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color4](/classes/2.4/Color4) | 
optional | lock | boolean | 
## Members

### color : [Color4](/classes/2.4/Color4)

The color used by this instance to render

@returns the color object. Note that it's not a clone of the actual object stored in the instance so you MUST NOT modify it, otherwise unexpected behavior might occurs.

## Methods

### isTransparent() &rarr; boolean


### toString() &rarr; string

Return a unique identifier of the instance, which is simply the hexadecimal representation (CSS Style) of the solid color.
