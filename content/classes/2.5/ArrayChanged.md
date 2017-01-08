---
TAGS:
---
## Description

class [ArrayChanged](/classes/2.0/ArrayChanged)

Class for the [ObservableArray](/classes/2.0/ObservableArray).onArrayChanged observable

## Constructor

## new [ArrayChanged](/classes/2.0/ArrayChanged)()


## Members

### action : number

Contain the action that were made on the [ObservableArray](/classes/2.0/ObservableArray), it's one of the [ArrayChanged](/classes/2.0/ArrayChanged).xxxAction members.

Note the action's value can be used in the "mask" field of the Observable to only be notified about given action(s)

### newItems : { index: number,  value: T }[]

Only valid if the action is newItemsAction

### removedItems : { index: number,  value: T }[]

Only valid if the action is removedItemsAction

### changedItems : { index: number,  value: T }[]

Only valid if the action is changedItemAction

### newStartingIndex : number

Get the index of the first item inserted

### removedStartingIndex : number

Get the index of the first item removed

### changedStartingIndex : number

Get the index of the first changed item

### static clearAction : number

The content of the array was totally cleared

### static newItemsAction : number

A new item was added, the newItems field contains the key/value pairs

### static removedItemsAction : number

An existing item was removed, the removedKey field contains its key

### static changedItemAction : number

One or many items in the array were changed, the

### static replacedArrayAction : number

The array's content was totally changed

Depending on the method that used this mode the ChangedArray object may contains more information

### static lengthChangedAction : number

The length of the array changed

## Methods

### clear() &rarr; void


