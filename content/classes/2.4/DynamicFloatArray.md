---
TAGS:
---
## Description

class [DynamicFloatArray](/classes/2.4/DynamicFloatArray)

The purpose of this class is to store float32 based elements of a given size (defined by the stride argument) in a dynamic fashion, that is, you can add/free elements. You can then access to a defragmented/packed version of the underlying Float32Array by calling the pack() method.

The intent is to maintain through time data that will be bound to a WebGlBuffer with the ability to change add/remove elements.

It was first built to efficiently maintain the WebGlBuffer that contain instancing based data.

Allocating an Element will return a instance of DynamicFloatArrayElement which contains the offset into the Float32Array of where the element starts, you are then responsible to copy your data using this offset.

Beware, calling pack() may change the offset of some Entries because this method will defragment the Float32Array to replace empty elements by moving allocated ones at their location.

This method will return an ArrayBufferView on the existing Float32Array that describes the used elements. Use this View to update the WebGLBuffer and NOT the "buffer" field of the class. The pack() method won't shrink/reallocate the buffer to keep it GC friendly, all the empty space will be put at the end of the buffer, the method just ensure there are no "free holes".

## Constructor

## new [DynamicFloatArray](/classes/2.4/DynamicFloatArray)(stride, initialElementCount)

Construct an instance of the dynamic float array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | stride | number |  size of one element in float (i.e. not bytes!)
 | initialElementCount | number |  the number of available entries at construction
## Members

### buffer : Float32Array

This is the main buffer, all elements are stored inside, you use the DynamicFloatArrayElement instance of a given element to know its location into this buffer, then you have the responsibility to perform write operations in this buffer at the right location!

Don't use this buffer for a WebGL bufferSubData() operation, but use the one returned by the pack() method.

### totalElementCount : number

Get the total count of entries that can fit in the current buffer

@returns the elements count

### freeElementCount : number

Get the count of free entries that can still be allocated without resizing the buffer

@returns the free elements count

### usedElementCount : number

Get the count of allocated elements

@returns the allocated elements count

### stride : number

Return the size of one element in float

@returns the size in float

### compareValueOffset : number



### sortingAscending : boolean



## Methods

### allocElement() &rarr; [DynamicFloatArrayElementInfo](/classes/2.4/DynamicFloatArrayElementInfo)

Allocate an element in the array.

@return the element info instance that contains the offset into the main buffer of the element's location.

Beware, this offset may change when you call pack()
### freeElement(elInfo) &rarr; void

Free the element corresponding to the given element info

#### Parameters
 | Name | Type | Description
---|---|---|---
 | elInfo | [DynamicFloatArrayElementInfo](/classes/2.4/DynamicFloatArrayElementInfo) |  the element that describe the allocated element

### pack() &rarr; Float32Array

This method will pack all the used elements into a linear sequence and put all the free space at the end.

Instances of DynamicFloatArrayElement may have their 'offset' member changed as data could be copied from one location to another, so be sure to read/write your data based on the value inside this member after you called pack().

@return the subArray that is the view of the used elements area, you can use it as a source to update a WebGLBuffer
### sort() &rarr; boolean


