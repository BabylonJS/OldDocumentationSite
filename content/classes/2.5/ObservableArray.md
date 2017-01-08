---
TAGS:
---
## Description

class [ObservableArray](/classes/2.0/ObservableArray) extends [PropertyChangedBase](/classes/2.0/PropertyChangedBase)

This class mimics the Javascript Array and TypeScript Array<T> classes, adding new features concerning the Observable pattern.

## Constructor

## new [ObservableArray](/classes/2.0/ObservableArray)(watchObjectsPropertyChange, array)

Create an Observable Array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | watchObjectsPropertyChange | boolean | 
optional | array | Array&lt;T&gt; |  and optional array that will be encapsulated by this [ObservableArray](/classes/2.0/ObservableArray) instance. That's right, it's NOT a copy!
## Members

### length : number

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

### arrayChanged : Observable&lt;[ArrayChanged](/classes/2.0/ArrayChanged)&lt;T&gt;&gt;



## Methods

### getAt(index) &rarr; T



#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 

### setAt(index, value) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 
 | value | T | 
### toString() &rarr; string

Returns a string representation of an array.
### toLocaleString() &rarr; string


### push(items) &rarr; number

Appends new elements to an array, and returns the new length of the array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | items | T[] |  New elements of the Array.

### pop() &rarr; T

Removes the last element from an array and returns it.
### concat(items) &rarr; [ObservableArray](/classes/2.0/ObservableArray)&lt;T&gt;

Combines two or more arrays.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | items | T[] |  Additional items to add to the end of array1.

### join(separator) &rarr; string

Adds all the elements of an array separated by the specified separator string.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | separator | string |  A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.

### reverse() &rarr; T[]

Reverses the elements in an Array.

The arrayChanged action is
### shift() &rarr; T

Removes the first element from an array and returns it, shift all subsequents element one element before.

The ArrayChange action is replacedArrayAction, the whole array changes and must be reevaluate as such, the removed element is in removedItems.

          */
### slice(start, end) &rarr; [ObservableArray](/classes/2.0/ObservableArray)&lt;T&gt;

Returns a section of an array.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | start | number |  The beginning of the specified portion of the array.
optional | end | number |  The end of the specified portion of the array.
### sort(compareFn) &rarr; void

Sorts an array.

On the contrary of the Javascript Array's implementation, this method returns nothing

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | compareFn | (a: T, b: T) =&gt; number |  The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.

### splice(start, deleteCount, items) &rarr; T[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | start | number |  The zero-based location in the array from which to start removing elements.
 | deleteCount | number |  The number of elements to remove.
 | items | T[] |  Elements to insert into the array in place of the deleted elements.
### unshift(items) &rarr; number

Inserts new elements at the start of an array.

The ChangedArray action is replacedArrayAction, newItems contains the list of the added items

#### Parameters
 | Name | Type | Description
---|---|---|---
 | items | T[] |   Elements to insert at the start of the Array.

### indexOf(searchElement, fromIndex) &rarr; number

Returns the index of the first occurrence of a value in an array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | searchElement | T |  The value to locate in the array.
optional | fromIndex | number |  The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
### lastIndexOf(searchElement, fromIndex) &rarr; number

Returns the index of the last occurrence of a specified value in an array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | searchElement | T |  The value to locate in the array.
optional | fromIndex | number |  The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
### every(callbackfn, thisArg) &rarr; boolean

Determines whether all the members of an array satisfy the specified test.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callbackfn | (value: T, index: number, array: T[]) =&gt; boolean |  A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
optional | thisArg | any |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
### some(callbackfn, thisArg) &rarr; boolean

Determines whether the specified callback function returns true for any element of an array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callbackfn | (value: T, index: number, array: T[]) =&gt; boolean |  A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
optional | thisArg | any |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
### forEach(callbackfn, thisArg) &rarr; void

Performs the specified action for each element in an array.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callbackfn | (value: T, index: number, array: T[]) =&gt; void |   A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
optional | thisArg | any |   An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
### map(callbackfn, thisArg) &rarr; U[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callbackfn | (value: T, index: number, array: T[]) =&gt; U |  A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
optional | thisArg | any |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
### filter(callbackfn, thisArg) &rarr; T[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callbackfn | (value: T, index: number, array: T[]) =&gt; boolean |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
optional | thisArg | any |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
### reduce(callbackfn, initialValue) &rarr; T

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
optional | initialValue | T |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
### reduceRight(callbackfn, initialValue) &rarr; T

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
optional | initialValue | T |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
