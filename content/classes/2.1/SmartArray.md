---
ID_PAGE: 25332
PG_TITLE: SmartArray<T>
PG_VERSION: 2.1
---

Create a new smart array
##new SmartArray&lt;T&gt;(capacity)




SmartArray constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | capacity | number | @param capacity
---

##Members

###data : Array&lt;T&gt;





Array




###length : number





The length of the smart array















##Methods

###push(value) &rarr; void
Push method. If the length of the smart array is reached, the length of this array is doubled.







####Parameters
 | Name | Type | Description
---|---|---|---
 | value | any | @param value
---

###pushNoDuplicate(value) &rarr; void
Push method to avoid any duplicate. If the value is found in the smart array, nothing is done.







####Parameters
 | Name | Type | Description
---|---|---|---
 | value | any | @param value
---

###sort(compareFn) &rarr; void
Sort this array with the sort function given in parameter.







####Parameters
 | Name | Type | Description
---|---|---|---
 | compareFn | any | @param compareFn
---

###reset() &rarr; void
Reset the length of this smart array








###concat(array) &rarr; void
Append the given smart array data to this smart array.







####Parameters
 | Name | Type | Description
---|---|---|---
 | array | any | @param array
---

###concatWithNoDuplicate(array) &rarr; void
Append the given smart array data to this smart array.
This function check if each values are not already in the smart array.







####Parameters
 | Name | Type | Description
---|---|---|---
 | array | any | @param array
---

###indexOf(value) &rarr; number

####Parameters
 | Name | Type | Description
---|---|---|---
 | value | any | @param value
---
