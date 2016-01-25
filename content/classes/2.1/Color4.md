---
ID_PAGE: 25237
PG_TITLE: Color4
PG_VERSION: 2.1
TAGS:
    - Objects
---
##new [Color4](/classes/Color4)(r, g, b, a)




Creates a new RGBA [Color4](/classes/Color4)






####Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | The initial red value
 | g | number | The initial green value
 | b | number | The initial blue value
 | a | number | The initial alpha value
---

##Members

###r : number





The red value




###g : number





The green value




###b : number





The blue value




###a : number





The alpha value















##Methods

###addInPlace(right) &rarr; [Color4](/classes/Color4)
Adds another [Color4](/classes/Color4)







####Parameters
 | Name | Type | Description
---|---|---|---
 | right | any | The color to add
---

###asArray() &rarr; number[]
Returns an array representation of the color








###toArray(array, index) &rarr; [Color4](/classes/Color4)
Fills an array from a given index with the color's values







####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The array to fill
optional | index | number | default : 0 The given index
---

###add(right) &rarr; [Color4](/classes/Color4)
Adds another color and returns the result







####Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/Color4) | 
---

###subtract(right) &rarr; [Color4](/classes/Color4)
Substracts another color and returns the result







####Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/Color4) | The color to substract
---

###subtractToRef(right, result) &rarr; [Color4](/classes/Color4)
Substracts another color into a third color







####Parameters
 | Name | Type | Description
---|---|---|---
 | right | [Color4](/classes/Color4) | The color to substract
 | result | [Color4](/classes/Color4) | The color to return
---

###scale(scale) &rarr; [Color4](/classes/Color4)
Scales a [Color4](/classes/Color4)







####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | The scaling factor
---

###scaleToRef(scale, result) &rarr; [Color4](/classes/Color4)
Scales a [Color4](/classes/Color4) into an existing [Color4](/classes/Color4)







####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | The scaling factor
 | result | [Color4](/classes/Color4) | The color to return
---

###toString() &rarr; string
Returns a string representation of the color








###clone() &rarr; [Color4](/classes/Color4)
Clones the color into a new [Color4](/classes/Color4)








###copyFrom(source) &rarr; [Color4](/classes/Color4)



####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color4](/classes/Color4) | 
---

###static Lerp(left, right, amount) &rarr; [Color4](/classes/Color4)
Linear interpolation of a color 4







####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/Color4) | first color
 | right | [Color4](/classes/Color4) | second color
 | amount | number | Weighting factor.
---

###static LerpToRef(left, right, amount, result) &rarr; void
Linear interpolation of a color 4 into an existing [Color4](/classes/Color4)







####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Color4](/classes/Color4) | first color
 | right | [Color4](/classes/Color4) | second color
 | amount | number | Weighting factor.
 | result | [Color4](/classes/Color4) | The color which hold the result color
---

###static FromArray(array, offset) &rarr; [Color4](/classes/Color4)
Creates new [Color4](/classes/Color4) from the given array







####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The given array
optional | offset | number | The first index of the array to look at
---

###static FromInts(r, g, b, a) &rarr; [Color4](/classes/Color4)

####Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | The red value (0&lt;r&lt;1)
 | g | number | The green value (0&lt;g&lt;1)
 | b | number | The blue value (0&lt;b&lt;1)
 | a | number | The alpha value (0&lt;b&lt;1)
---
