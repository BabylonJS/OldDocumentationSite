---
TAGS:
---
## Description

class [PackedRect](/classes/2.5/PackedRect)

This class describe a rectangle that were added to the map.

You have access to its coordinates either in pixel or normalized (UV)

## Constructor

## new [PackedRect](/classes/2.5/PackedRect)(root, parent, pos, size)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | root | [PackedRect](/classes/2.5/PackedRect) |  
 | parent | [PackedRect](/classes/2.5/PackedRect) |  
 | pos | [Vector2](/classes/2.5/Vector2) |  
## Members

### pos : [Vector2](/classes/2.5/Vector2)

@returns the position of this node into the map

### contentSize : [Size](/classes/2.5/Size)

@returns the size of the rectangle this node handles

### UVs : [Vector2](/classes/2.5/Vector2)[]

Compute the UV of the top/left, top/right, bottom/right, bottom/left points of the rectangle this node handles into the map

@returns And array of 4 [Vector2](/classes/2.5/Vector2), containing UV coordinates for the four corners of the Rectangle into the map

## Methods

### getUVsForCustomSize(customSize) &rarr; [Vector2](/classes/2.5/Vector2)[]

You may have allocated the [PackedRect](/classes/2.5/PackedRect) using over-provisioning (you allocated more than you need in order to prevent frequent deallocations/reallocations) and then using only a part of the PackRect.

This method will return the UVs for this part by given the custom size of what you really use

#### Parameters
 | Name | Type | Description
---|---|---|---
 | customSize | [Size](/classes/2.5/Size) |  must be less/equal to the allocated size, UV will be compute from this

### freeContent() &rarr; void

Free this rectangle from the map.

Call this method when you no longer need the rectangle to be in the map.
