---
ID_PAGE: 25240
PG_TITLE: Vector4
PG_VERSION: 2.1
TAGS:
    - Objects
---
## Description

class [Vector4](/classes/2.3/Vector4)



## Constructor

## new [Vector4](/classes/2.3/Vector4)(x, y, z, w)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   
 | y | number |   
 | z | number |   
## Members

### x : number



### y : number



### z : number



### w : number



## Methods

### toString() &rarr; string


### asArray() &rarr; number[]


### toArray(array, index) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   
optional | index | number |   
### addInPlace(otherVector) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   

### add(otherVector) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   

### addToRef(otherVector, result) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   
 | result | [Vector4](/classes/2.3/Vector4) |   
### subtractInPlace(otherVector) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   

### subtract(otherVector) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   

### subtractToRef(otherVector, result) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   
 | result | [Vector4](/classes/2.3/Vector4) |   
### subtractFromFloats(x, y, z, w) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   
 | y | number |   
 | z | number |   
### subtractFromFloatsToRef(x, y, z, w, result) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   
 | y | number |   
 | z | number |   
 | w | number |   
### negate() &rarr; [Vector4](/classes/2.3/Vector4)


### scaleInPlace(scale) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   

### scale(scale) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   

### scaleToRef(scale, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number |   
 | result | [Vector4](/classes/2.3/Vector4) |   
### equals(otherVector) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   

### equalsWithEpsilon(otherVector, epsilon) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   
optional | epsilon | number |  
### equalsToFloats(x, y, z, w) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   
 | y | number |   
 | z | number |   
### multiplyInPlace(otherVector) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   

### multiply(otherVector) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   

### multiplyToRef(otherVector, result) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   
 | result | [Vector4](/classes/2.3/Vector4) |   
### multiplyByFloats(x, y, z, w) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   
 | y | number |   
 | z | number |   
### divide(otherVector) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   

### divideToRef(otherVector, result) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector4](/classes/2.3/Vector4) |   
 | result | [Vector4](/classes/2.3/Vector4) |   
### MinimizeInPlace(other) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector4](/classes/2.3/Vector4) |   

### MaximizeInPlace(other) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector4](/classes/2.3/Vector4) |   

### length() &rarr; number


### lengthSquared() &rarr; number


### normalize() &rarr; [Vector4](/classes/2.3/Vector4)


### clone() &rarr; [Vector4](/classes/2.3/Vector4)


### copyFrom(source) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector4](/classes/2.3/Vector4) |   

### copyFromFloats(x, y, z, w) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   
 | y | number |   
 | z | number |   
### static FromArray(array, offset) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   
optional | offset | number |   
### static FromArrayToRef(array, offset, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] |   
 | offset | number |   
 | result | [Vector4](/classes/2.3/Vector4) |   
### static FromFloatArrayToRef(array, offset, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array |   
 | offset | number |   
 | result | [Vector4](/classes/2.3/Vector4) |   
### static FromFloatsToRef(x, y, z, w, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   
 | y | number |   
 | z | number |   
 | w | number |   
### static Zero() &rarr; [Vector4](/classes/2.3/Vector4)


### static Normalize(vector) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector4](/classes/2.3/Vector4) |   

### static NormalizeToRef(vector, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector4](/classes/2.3/Vector4) |   
 | result | [Vector4](/classes/2.3/Vector4) |   
### static Minimize(left, right) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector4](/classes/2.3/Vector4) |   
 | right | [Vector4](/classes/2.3/Vector4) |   
### static Maximize(left, right) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector4](/classes/2.3/Vector4) |   
 | right | [Vector4](/classes/2.3/Vector4) |   
### static Distance(value1, value2) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector4](/classes/2.3/Vector4) |   
 | value2 | [Vector4](/classes/2.3/Vector4) |   
### static DistanceSquared(value1, value2) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector4](/classes/2.3/Vector4) |   
 | value2 | [Vector4](/classes/2.3/Vector4) |   
### static Center(value1, value2) &rarr; [Vector4](/classes/2.3/Vector4)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector4](/classes/2.3/Vector4) |   
 | value2 | [Vector4](/classes/2.3/Vector4) |   
