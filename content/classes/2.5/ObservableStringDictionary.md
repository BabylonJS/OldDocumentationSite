---
TAGS:
---
## Description

class [ObservableStringDictionary](/classes/2.0/ObservableStringDictionary) extends StringDictionary



## Constructor

## new [ObservableStringDictionary](/classes/2.0/ObservableStringDictionary)(watchObjectsPropertyChange)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | watchObjectsPropertyChange | boolean | 

## Members

### propertyChanged : Observable&lt;[PropertyChangedInfo](/classes/2.0/PropertyChangedInfo)&gt;



## Methods

### copyFrom(source) &rarr; void

This will clear this dictionary and copy the content from the 'source' one.

If the T value is a custom object, it won't be copied/cloned, the same object will be used

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | StringDictionary&lt;T&gt; |  the dictionary to take the content from and copy to this dictionary

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
### add(key, value) &rarr; boolean

Add a new key and its corresponding value

@return true if the operation completed successfully, false if we couldn't insert the key/value because there was already this key in the dictionary

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the key to add
 | value | T |  the value corresponding to the key
### getAndRemove(key) &rarr; T



#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string | 

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
