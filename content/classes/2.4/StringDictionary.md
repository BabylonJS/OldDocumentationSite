---
TAGS:
---
## Description

class [StringDictionary](/classes/2.4/StringDictionary)

This class implement a typical dictionary using a string as key and the generic type T as value.

The underlying implementation relies on an associative array to ensure the best performances.

The value can be anything including 'null' but except 'undefined'

## Members

### count : number



## Methods

### getundefined &rarr; T

Get a value based from its key

@return the value if found, otherwise undefined is returned

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getOrAddWithFactoryundefined &rarr; T

Get a value from its key or add it if it doesn't exist.

This method will ensure you that a given key/data will be present in the dictionary.

The factory will only be invoked if there's no data for the given key.

@return the value corresponding to the key.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getOrAddundefined &rarr; T

Get a value from its key if present in the dictionary otherwise add it

@return the value corresponding to the key

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### containsundefined &rarr; boolean

Check if there's a given key in the dictionary

@return true if the key is present, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### addundefined &rarr; boolean

Add a new key and its corresponding value

@return true if the operation completed successfully, false if we couldn't insert the key/value because there was already this key in the dictionary

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### removeundefined &rarr; boolean

Remove a key/value from the dictionary.

@return true if the item was successfully deleted, false if no item with such key exist in the dictionary

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### clearundefined &rarr; void

Clear the whole content of the dictionary
### forEachundefined &rarr; void

Execute a callback on each key/val of the dictionary.

Note that you can remove any element in this dictionary in the callback implementation

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### firstundefined &rarr; TRes

Execute a callback on every occurrence of the dictionary until it returns a valid TRes object.

If the callback returns null or undefined the method will iterate to the next key/value pair

Note that you can remove any element in this dictionary in the callback implementation

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
