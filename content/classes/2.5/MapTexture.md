---
TAGS:
---
## Description

class [MapTexture](/classes/2.5/MapTexture) extends [Texture](/classes/2.5/Texture)



## Constructor

## new [MapTexture](/classes/2.5/MapTexture)(name, scene, size, samplingMode, useMipMap)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  
 | scene | [Scene](/classes/2.5/Scene) |  
 | size | ISize |   the portion to fit the clip space to
optional | samplingMode | number | 
## Members

### freeSpace : number

Return the available space in the range of [O;1]. 0 being not space left at all, 1 being an empty texture map.

This is the cumulated space, not the biggest available surface. Due to fragmentation you may not allocate a rect corresponding to this surface.

@returns {}

### canRescale : boolean



## Methods

### allocateRect(size) &rarr; [PackedRect](/classes/2.5/PackedRect)

Allocate a rectangle of a given size in the texture map

@return the [PackedRect](/classes/2.5/PackedRect) instance corresponding to the allocated rect or null is there was not enough space to allocate it.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | [Size](/classes/2.5/Size) |  the size of the rectangle to allocation  the portion to fit the clip space to

### freeRect(rectInfo) &rarr; void

Free a given rectangle from the texture map

#### Parameters
 | Name | Type | Description
---|---|---|---
 | rectInfo | [PackedRect](/classes/2.5/PackedRect) |  the instance corresponding to the rect to free.  the instance corresponding to the rect to free.

### bindTextureForRect(rect, clear) &rarr; void

Bind the texture to the rendering engine to render in the zone of a given rectangle.

Use this method when you want to render into the texture map with a clipspace set to the location and size of the given rect.

Don't forget to call unbindTexture when you're done rendering

#### Parameters
 | Name | Type | Description
---|---|---|---
 | rect | [PackedRect](/classes/2.5/PackedRect) |  the zone to render to  the zone to render to
 | clear | boolean |  true to clear the portion's color/depth data  true to clear the portion's color/depth data
### bindTextureForPosSize(pos, size, clear) &rarr; void

Bind the texture to the rendering engine to render in the zone of the given size at the given position.

Use this method when you want to render into the texture map with a clipspace set to the location and size of the given rect.

Don't forget to call unbindTexture when you're done rendering

#### Parameters
 | Name | Type | Description
---|---|---|---
 | pos | [Vector2](/classes/2.5/Vector2) |  the position into the texture  the position into the texture
 | size | [Size](/classes/2.5/Size) |  the portion to fit the clip space to  the portion to fit the clip space to
 | clear | boolean |  true to clear the portion's color/depth data  true to clear the portion's color/depth data
### unbindTexture(dumpForDebug) &rarr; void

Unbind the texture map from the rendering engine.

Call this method when you're done rendering. A previous call to bindTextureForRect has to be made.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | dumpForDebug | boolean |  if set to true the content of the texture map will be dumped to a picture file that will be sent to the internet browser.  if set to true the content of the texture map will be dumped to a picture file that will be sent to the internet browser.

### clone() &rarr; [MapTexture](/classes/2.5/MapTexture)


