---
TAGS:
---
## Description

class [SolidColorBrush2D](/classes/2.0/SolidColorBrush2D) extends [LockableBase](/classes/2.0/LockableBase)



## Constructor

## new [SolidColorBrush2D](/classes/2.0/SolidColorBrush2D)(color, lock)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | Color4 | 
optional | lock | boolean | 
## Members

### color : Color4

The color used by this instance to render

@returns the color object. Note that it's not a clone of the actual object stored in the instance so you MUST NOT modify it, otherwise unexpected behavior might occurs.

## Methods

### isTransparent() &rarr; boolean

Return true if the brush is transparent, false if it's totally opaque
### toString() &rarr; string

Return a unique identifier of the instance, which is simply the hexadecimal representation (CSS Style) of the solid color.
