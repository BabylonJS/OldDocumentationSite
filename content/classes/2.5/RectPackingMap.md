---
TAGS:
---
## Description

class [RectPackingMap](/classes/2.5/RectPackingMap) extends [PackedRect](/classes/2.5/PackedRect)

The purpose of this class is to pack several Rectangles into a big map, while trying to fit everything as optimally as possible.

This class is typically used to build lightmaps, sprite map or to pack several little textures into a big one.

Note that this class allows allocated Rectangles to be freed: that is the map is dynamically maintained so you can add/remove rectangle based on their life-cycle.

## Constructor

## new [RectPackingMap](/classes/2.5/RectPackingMap)(size)

Create an instance of the object with a dimension using the given size

#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | [Size](/classes/2.5/Size) |  The dimension of the rectangle that will contain all the sub ones.  the dimension of the rectangle to store

## Members

### freeSpace : number

Return the current space free normalized between [0;1]

@returns {}

## Methods

### addRect(size) &rarr; [PackedRect](/classes/2.5/PackedRect)

Add a rectangle, finding the best location to store it into the map

@return the [Node](/classes/2.5/Node) containing the rectangle information, or null if we couldn't find a free spot

#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | [Size](/classes/2.5/Size) |  the dimension of the rectangle to store  the dimension of the rectangle to store

