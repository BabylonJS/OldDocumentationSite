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

### get(key) &rarr; T

Get a value based from its key

@return the value if found, otherwise undefined is returned

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the given key to get the matching value from

### getOrAddWithFactory(key, factory) &rarr; T

Get a value from its key or add it if it doesn't exist.

This method will ensure you that a given key/data will be present in the dictionary.

The factory will only be invoked if there's no data for the given key.

@return the value corresponding to the key.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the given key to get the matching value from
 | factory | (key: string) =&gt; T |  the factory that will create the value if the key is not present in the dictionary.
### getOrAdd(key, val) &rarr; T

Get a value from its key if present in the dictionary otherwise add it

@return the value corresponding to the key

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the key to get the value from
 | val | T |  if there's no such key/value pair in the dictionary add it with this value
### contains(key) &rarr; boolean

Check if there's a given key in the dictionary

@return true if the key is present, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | any |  the key to check for

### add(key, value) &rarr; boolean

Add a new key and its corresponding value

@return true if the operation completed successfully, false if we couldn't insert the key/value because there was already this key in the dictionary

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the key to add
 | value | T |  the value corresponding to the key
### set(key, value) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string | 
 | value | T | 
### remove(key) &rarr; boolean

Remove a key/value from the dictionary.

@return true if the item was successfully deleted, false if no item with such key exist in the dictionary

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the key to remove

### clear() &rarr; void

Clear the whole content of the dictionary
### forEach(callback) &rarr; void

Execute a callback on each key/val of the dictionary.

Note that you can remove any element in this dictionary in the callback implementation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (key: string, val: T) =&gt; void |  the callback to execute on a given key/value pair

### first(callback) &rarr; TRes

Execute a callback on every occurrence of the dictionary until it returns a valid TRes object.

If the callback returns null or undefined the method will iterate to the next key/value pair

Note that you can remove any element in this dictionary in the callback implementation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (key: string, val: T) =&gt; TRes |  the callback to execute, if it return a valid T instanced object the enumeration will stop and the object will be returned

