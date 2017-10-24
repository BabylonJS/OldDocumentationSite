---
TAGS:
---
## Description

class [Scalar](/classes/3.1/Scalar)



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
### static Log2(value) &rarr; number

Returns the log2 of value.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 

### static Repeat(value, length) &rarr; number

Loops the value, so that it is never larger than length and never smaller than 0.

        * This is similar to the modulo operator but it works with floating point numbers.

For example, using 3.0 for t and 2.5 for length, the result would be 0.5.

With t = 5 and length = 2.5, the result would be 0.0.

Note, however, that the behaviour is not defined for negative numbers as it is for the modulo operator

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 
 | length | number | 
### static Normalize(value, min, max) &rarr; number

Normalize the value between 0.0 and 1.0 using min and max values

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 
 | min | number | 
 | max | number | 
### static Denormalize(normalized, min, max) &rarr; number

Denormalize the value from 0.0 and 1.0 using min and max values

#### Parameters
 | Name | Type | Description
---|---|---|---
 | normalized | number | 
 | min | number | 
 | max | number | 
### static DeltaAngle(current, target) &rarr; number

Calculates the shortest difference between two given angles given in degrees.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | current | number | 
 | target | number | 
### static PingPong(tx, length) &rarr; number

PingPongs the value t, so that it is never larger than length and never smaller than 0.

        * The returned value will move back and forth between 0 and length

#### Parameters
 | Name | Type | Description
---|---|---|---
 | tx | number | 
 | length | number | 
### static SmoothStep(from, to, tx) &rarr; number

Interpolates between min and max with smoothing at the limits.

        * This function interpolates between min and max in a similar way to Lerp. However, the interpolation will gradually speed up

from the start and slow down toward the end. This is useful for creating natural-looking animation, fading and other transitions.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | from | number | 
 | to | number | 
 | tx | number | 
### static MoveTowards(current, target, maxDelta) &rarr; number

Moves a value current towards target.

        * This is essentially the same as Mathf.Lerp but instead the function will ensure that the speed never exceeds maxDelta.

Negative values of maxDelta pushes the value away from target.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | current | number | 
 | target | number | 
 | maxDelta | number | 
### static MoveTowardsAngle(current, target, maxDelta) &rarr; number

Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.

        * Variables current and target are assumed to be in degrees. For optimization reasons, negative values of maxDelta

 are not supported and may cause oscillation. To push current away from a target angle, add 180 to that angle instead.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | current | number | 
 | target | number | 
 | maxDelta | number | 
### static Lerp(start, end, amount) &rarr; number

Creates a new scalar with values linearly interpolated of "amount" between the start scalar and the end scalar.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | number | 
 | end | number | 
 | amount | number | 
### static LerpAngle(start, end, amount) &rarr; number

Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.

The parameter t is clamped to the range [0, 1]. Variables a and b are assumed to be in degrees.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | number | 
 | end | number | 
 | amount | number | 
### static InverseLerp(a, b, value) &rarr; number

Calculates the linear parameter t that produces the interpolant value within the range [a, b].

#### Parameters
 | Name | Type | Description
---|---|---|---
 | a | number | 
 | b | number | 
 | value | number | 
### static Hermite(value1, tangent1, value2, tangent2, amount) &rarr; number

Returns a new scalar located for "amount" (float) on the Hermite spline defined by the scalars "value1", "value3", "tangent1", "tangent2".

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | number | 
 | tangent1 | number | 
 | value2 | number | 
 | tangent2 | number | 
### static RandomRange(min, max) &rarr; number

Returns a random float number between and min and max values

#### Parameters
 | Name | Type | Description
---|---|---|---
 | min | number | 
 | max | number | 
### static RangeToPercent(number, min, max) &rarr; number

This function returns percentage of a number in a given range.

        * RangeToPercent(40,20,60) will return 0.5 (50%)

RangeToPercent(34,0,100) will return 0.34 (34%)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | number | number | 
 | min | number | 
 | max | number | 
### static PercentToRange(percent, min, max) &rarr; number

This function returns number that corresponds to the percentage in a given range.

        * PercentToRange(0.34,0,100) will return 34.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | percent | number | 
 | min | number | 
 | max | number | 
