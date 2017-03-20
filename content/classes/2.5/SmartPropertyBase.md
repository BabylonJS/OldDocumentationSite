---
TAGS:
---
## Description

class [SmartPropertyBase](/classes/2.0/SmartPropertyBase) extends [PropertyChangedBase](/classes/2.0/PropertyChangedBase)



## Constructor

## new [SmartPropertyBase](/classes/2.0/SmartPropertyBase)()


## Members

### disposeObservable : Observable&lt;[SmartPropertyBase](/classes/2.0/SmartPropertyBase)&gt;



### isDisposed : boolean

Check if the object is disposed or not.

@returns true if the object is dispose, false otherwise.

## Methods

### dispose() &rarr; boolean

Disposable pattern, this method must be overloaded by derived types in order to clean up hardware related resources.

@returns false if the object is already dispose, true otherwise. Your implementation must call super.dispose() and check for a false return and return immediately if it's the case.
### checkPropertiesDirty(flags) &rarr; boolean

Check if a given set of properties are dirty or not.

@return true if at least one property is dirty, false if none of them are.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | flags | number |  a ORed combination of [Prim2DPropInfo](/classes/2.0/Prim2DPropInfo).flagId values

