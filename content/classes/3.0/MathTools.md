---
TAGS:
---
## Description

class [MathTools](/classes/3.0/MathTools)



## Methods

### static WithinEpsilon(a, b, epsilon) &rarr; boolean

Boolean : true if the absolute difference between a and b is lower than epsilon (default = 1.401298E-45)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | a | number |   
 | b | number |   
optional | epsilon | number |   
### static ToHex(i) &rarr; string

Returns a string : the upper case translation of the number i to hexadecimal.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | i | number |   

### static Sign(value) &rarr; number

Returns -1 if value is negative and +1 is value is positive.

Returns the value itself if it's equal to zero.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |   

### static Clamp(value, min, max) &rarr; number

Returns the value itself if it's between min and max.

Returns min if the value is lower than min.

Returns max if the value is greater than max.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |   
optional | min | number |   
optional | max | number |   
