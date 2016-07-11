---
TAGS:
---
## Description

class [GradientColorBrush2D](/classes/2.4/GradientColorBrush2D) extends [LockableBase](/classes/2.4/LockableBase)



## Constructor

## new [GradientColorBrush2D](/classes/2.4/GradientColorBrush2D)(color1, color2, translation, rotation, scale, lock)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | color1 | [Color4](/classes/2.4/Color4) | 
 | color2 | [Color4](/classes/2.4/Color4) | 
optional | translation | [Vector2](/classes/2.4/Vector2) | 
optional | rotation | number | 
optional | scale | number | 
## Members

### color1 : [Color4](/classes/2.4/Color4)

First color, the blend will start from this color

### color2 : [Color4](/classes/2.4/Color4)

Second color, the blend will end to this color

### translation : [Vector2](/classes/2.4/Vector2)

Translation vector to apply on the blend

Default is [0;0]

### rotation : number

Rotation in radian to apply to the brush

Default direction of the brush is vertical, you can change this using this property.

Default is 0.

### scale : number

Scale factor to apply to the gradient.

Default is 1: no scale.

## Methods

### isTransparent() &rarr; boolean

Return true if the brush is transparent, false if it's totally opaque
### toString() &rarr; string

Return a string describing the brush
### static BuildKey(color1, color2, translation, rotation, scale) &rarr; string

Build a unique key string for the given parameters

#### Parameters
 | Name | Type | Description
---|---|---|---
 | color1 | [Color4](/classes/2.4/Color4) | 
 | color2 | [Color4](/classes/2.4/Color4) | 
 | translation | [Vector2](/classes/2.4/Vector2) | 
 | rotation | number | 
