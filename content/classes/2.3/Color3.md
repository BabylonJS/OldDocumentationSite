---
ID_PAGE: 25236
PG_TITLE: Color3
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Color3](/classes/2.3/Color3)



## Constructor

##  new [Color3](/classes/2.3/Color3)(r, g, b)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | r | number |   The red value (0&lt;r&lt;1)
optional | g | number |   The green value (0&lt;g&lt;1)
optional | b | number |   The blue value (0&lt;b&lt;1)
## Members

### r : number



### g : number



### b : number



## Methods

### toString() &rarr; string


### toArray(array, index) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   An array of rgb values
optional | index | number |   The given index
### toColor4(alpha) &rarr; [Color4](/classes/2.3/Color4)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | alpha | number |   default : 1 The given alpha

### asArray() &rarr; number[]


### toLuminance() &rarr; number


### multiply(otherColor) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.3/Color3) |   The color to substract

### multiplyToRef(otherColor, result) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.3/Color3) |   The color to substract
 | result | [Color3](/classes/2.3/Color3) |   The resulting color
### equals(otherColor) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.3/Color3) |   The color to substract

### equalsFloats(r, g, b) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |   The red value (0&lt;r&lt;1)
 | g | number |   The green value (0&lt;g&lt;1)
 | b | number |   The blue value (0&lt;b&lt;1)
### scale(scale) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   The scaling factor

### scaleToRef(scale, result) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   The scaling factor
 | result | [Color3](/classes/2.3/Color3) |   The resulting color
### add(otherColor) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.3/Color3) |   The color to substract

### addToRef(otherColor, result) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.3/Color3) |   The color to substract
 | result | [Color3](/classes/2.3/Color3) |   The resulting color
### subtract(otherColor) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.3/Color3) |   The color to substract

### subtractToRef(otherColor, result) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](/classes/2.3/Color3) |   The color to substract
 | result | [Color3](/classes/2.3/Color3) |   The resulting color
### clone() &rarr; [Color3](/classes/2.3/Color3)


### copyFrom(source) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color3](/classes/2.3/Color3) |   color to copy from

### copyFromFloats(r, g, b) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |   The red value (0&lt;r&lt;1)
 | g | number |   The green value (0&lt;g&lt;1)
 | b | number |   The blue value (0&lt;b&lt;1)
### toHexString() &rarr; string


### toLinearSpace() &rarr; [Color3](/classes/2.3/Color3)


### toLinearSpaceToRef(convertedColor) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | convertedColor | [Color3](/classes/2.3/Color3) | 

### toGammaSpace() &rarr; [Color3](/classes/2.3/Color3)


### toGammaSpaceToRef(convertedColor) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | convertedColor | [Color3](/classes/2.3/Color3) | 

### static  FromHexString(hex) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | hex | string |  

### static  FromArray(array, offset) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   An array of rgb values
optional | offset | number |   
### static  FromInts(r, g, b) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | r | number |   The red value (0&lt;r&lt;1)
 | g | number |   The green value (0&lt;g&lt;1)
 | b | number |   The blue value (0&lt;b&lt;1)
### static  Lerp(start, end, amount) &rarr; [Color3](/classes/2.3/Color3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Color3](/classes/2.3/Color3) |   interpolation start color
 | end | [Color3](/classes/2.3/Color3) |   interpolation end color
 | amount | number |   Weighting factor
### static  Red() &rarr; [Color3](/classes/2.3/Color3)


### static  Green() &rarr; [Color3](/classes/2.3/Color3)


### static  Blue() &rarr; [Color3](/classes/2.3/Color3)


### static  Black() &rarr; [Color3](/classes/2.3/Color3)


### static  White() &rarr; [Color3](/classes/2.3/Color3)


### static  Purple() &rarr; [Color3](/classes/2.3/Color3)


### static  Magenta() &rarr; [Color3](/classes/2.3/Color3)


### static  Yellow() &rarr; [Color3](/classes/2.3/Color3)


### static  Gray() &rarr; [Color3](/classes/2.3/Color3)


