---
TAGS:
---
## Description

class [PrimitiveAlignment](/classes/2.0/PrimitiveAlignment)

Defines the horizontal and vertical alignment information for a Primitive.

## Constructor

## new [PrimitiveAlignment](/classes/2.0/PrimitiveAlignment)(changeCallback)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | changeCallback | () =&gt; void | 

## Members

### static AlignLeft : number

Alignment is made relative to the left edge of the Primitive. Valid for horizontal alignment only.

### static AlignTop : number

Alignment is made relative to the top edge of the Primitive. Valid for vertical alignment only.

### static AlignRight : number

Alignment is made relative to the right edge of the Primitive. Valid for horizontal alignment only.

### static AlignBottom : number

Alignment is made relative to the bottom edge of the Primitive. Valid for vertical alignment only.

### static AlignCenter : number

Alignment is made to center the content from equal distance to the opposite edges of the Primitive

### static AlignStretch : number

The content is stretched toward the opposite edges of the Primitive

### horizontal : number

Get/set the horizontal alignment. Use one of the AlignXXX static properties of this class

### vertical : number

Get/set the vertical alignment. Use one of the AlignXXX static properties of this class

### isDefault : boolean



## Methods

### setHorizontal(text) &rarr; void

Set the horizontal alignment from a string value.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | text | string |  can be either: 'left','right','center','stretch'

### setVertical(text) &rarr; void

Set the vertical alignment from a string value.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | text | string |  can be either: 'top','bottom','center','stretch'

### fromString(value) &rarr; void

Set the horizontal and or vertical alignments from a string value.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | string | 

### copyFrom(pa) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | pa | [PrimitiveAlignment](/classes/2.0/PrimitiveAlignment) | 

