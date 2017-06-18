---
TAGS:
---
## Description

class [Size](/classes/3.0/Size)



## Constructor

## new [Size](/classes/3.0/Size)(width, height)

Creates a [Size](/classes/3.0/Size) object from the passed width and height (floats).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |   
 | height | number |   
## Members

### width : number



### height : number



### surface : number

Returns the surface of the [Size](/classes/3.0/Size) : width * height (float).

## Methods

### toString() &rarr; string


### getClassName() &rarr; string

Returns the string "[Size](/classes/3.0/Size)"
### getHashCode() &rarr; number

Returns the [Size](/classes/3.0/Size) hash code.
### copyFrom(src) &rarr; void

Updates the current size from the passed one.

Returns the updated [Size](/classes/3.0/Size).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | src | [Size](/classes/3.0/Size) |   

### copyFromFloats(width, height) &rarr; [Size](/classes/3.0/Size)

Updates in place the current [Size](/classes/3.0/Size) from the passed floats.

Returns the updated [Size](/classes/3.0/Size).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |   
 | height | number |   
### set(width, height) &rarr; [Size](/classes/3.0/Size)

Updates in place the current [Size](/classes/3.0/Size) from the passed floats.

Returns the updated [Size](/classes/3.0/Size).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |   
 | height | number |   
### multiplyByFloats(w, h) &rarr; [Size](/classes/3.0/Size)

Returns a new [Size](/classes/3.0/Size) set with the multiplication result of the current [Size](/classes/3.0/Size) and the passed floats.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | w | number |  
 | h | number |  
### clone() &rarr; [Size](/classes/3.0/Size)

Returns a new [Size](/classes/3.0/Size) copied from the passed one.
### equals(other) &rarr; boolean

Boolean : True if the current [Size](/classes/3.0/Size) and the passed one width and height are strictly equal.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Size](/classes/3.0/Size) |   

### static Zero() &rarr; [Size](/classes/3.0/Size)

Returns a new [Size](/classes/3.0/Size) set to (0.0, 0.0)
### add(otherSize) &rarr; [Size](/classes/3.0/Size)

Returns a new [Size](/classes/3.0/Size) set as the addition result of the current [Size](/classes/3.0/Size) and the passed one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherSize | [Size](/classes/3.0/Size) |   

### subtract(otherSize) &rarr; [Size](/classes/3.0/Size)

Returns a new [Size](/classes/3.0/Size) set as the subtraction result of  the passed one from the current [Size](/classes/3.0/Size).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherSize | [Size](/classes/3.0/Size) |   

### static Lerp(start, end, amount) &rarr; [Size](/classes/3.0/Size)

Returns a new [Size](/classes/3.0/Size) set at the linear interpolation "amount" between "start" and "end".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Size](/classes/3.0/Size) |   
 | end | [Size](/classes/3.0/Size) |   
 | amount | number |   
