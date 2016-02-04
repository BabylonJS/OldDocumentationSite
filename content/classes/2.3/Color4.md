---
ID_PAGE: 25237
PG_TITLE: Color4
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Color4](/classes/2.3/Color4)



## Constructor

##  new [Color4](/classes/2.3/Color4)(r, g, b, a)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |   The red value (0&lt;r&lt;1)
 | g | number |   The green value (0&lt;g&lt;1)
 | b | number |   The blue value (0&lt;b&lt;1)
## Members

### r : number



### g : number



### b : number



### a : number



## Methods

### addInPlace(right) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | any |   second color

### asArray() &rarr; number[]


### toArray(array, index) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   The given array
optional | index | number |   default : 0 The given index
### add(right) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/2.3/Color4) |   second color

### subtract(right) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/2.3/Color4) |   second color

### subtractToRef(right, result) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/2.3/Color4) |   second color
 | result | [Color4](/classes/2.3/Color4) |   The color which hold the result color
### scale(scale) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   The scaling factor

### scaleToRef(scale, result) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   The scaling factor
 | result | [Color4](/classes/2.3/Color4) |   The color which hold the result color
### toString() &rarr; string


### clone() &rarr; [Color4](/classes/2.3/Color4)


### copyFrom(source) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color4](/classes/2.3/Color4) |   

### toHexString() &rarr; string


### static  FromHexString(hex) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | hex | string |  

### static  Lerp(left, right, amount) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/2.3/Color4) |   first color
 | right | [Color4](/classes/2.3/Color4) |   second color
 | amount | number |   Weighting factor.
### static  LerpToRef(left, right, amount, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/2.3/Color4) |   first color
 | right | [Color4](/classes/2.3/Color4) |   second color
 | amount | number |   Weighting factor.
### static  FromArray(array, offset) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   The given array
optional | offset | number |   The first index of the array to look at
### static  FromInts(r, g, b, a) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |   The red value (0&lt;r&lt;1)
 | g | number |   The green value (0&lt;g&lt;1)
 | b | number |   The blue value (0&lt;b&lt;1)
### static  CheckColors4(colors, count) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | colors | number[] | 
 | count | number | 
