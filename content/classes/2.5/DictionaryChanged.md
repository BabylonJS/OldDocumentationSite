---
TAGS:
---
## Description

class [DictionaryChanged](/classes/2.0/DictionaryChanged)

Class for the [ObservableStringDictionary](/classes/2.0/ObservableStringDictionary).onDictionaryChanged observable

## Members

### action : number

Contain the action that were made on the dictionary, it's one of the [DictionaryChanged](/classes/2.0/DictionaryChanged).xxxAction members.

Note the action's value can be used in the "mask" field of the Observable to only be notified about given action(s)

### newItem : { key: string,  value: T }

Only valid if the action is newItemAction

### removedKey : string

Only valid if the action is removedItemAction

### changedItem : { key: string,  oldValue: T,  newValue: T }

Only valid if the action is itemValueChangedAction

### static clearAction : number

The content of the dictionary was totally cleared

### static newItemAction : number

A new item was added, the newItem field contains the key/value pair

### static removedItemAction : number

An existing item was removed, the removedKey field contains its key

### static itemValueChangedAction : number

An existing item had a value change, the changedItem field contains the key/value

### static replacedAction : number

The dictionary's content was reset and replaced by the content of another dictionary.

[DictionaryChanged](/classes/2.0/DictionaryChanged)<T> contains no further information about this action

