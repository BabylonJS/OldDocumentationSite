---
TAGS:
---
## Description

class [SmartPropertyPrim](/classes/2.4/SmartPropertyPrim)



## Constructor

## new [SmartPropertyPrim](/classes/2.4/SmartPropertyPrim)()


## Members

### propertyChanged : [Observable](/classes/2.4/Observable)&lt;[PropertyChangedInfo](/classes/2.4/PropertyChangedInfo)&gt;

An observable that is triggered when a property (using of the XXXXLevelProperty decorator) has its value changing.

You can add an observer that will be triggered only for a given set of Properties using the Mask feature of the [Observable](/classes/2.4/Observable) and the corresponding [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo).flagid value (e.g. [Prim2DBase](/classes/2.4/Prim2DBase).positionProperty.flagid|[Prim2DBase](/classes/2.4/Prim2DBase).rotationProperty.flagid to be notified only about position or rotation change)

### isDisposed : boolean

Check if the object is disposed or not.

@returns true if the object is dispose, false otherwise.

### animations : [Animation](/classes/2.4/Animation)[]

[Animation](/classes/2.4/Animation) array, more info: http://doc.babylonjs.com/tutorials/Animations

### modelKey : string

Property giving the Model Key associated to the property.

This value is constructed from the type of the primitive and all the name/value of its properties declared with the modelLevelProperty decorator

@returns the model key string.

### isDirty : boolean

States if the Primitive is dirty and should be rendered again next time.

@returns true is dirty, false otherwise

### levelBoundingInfo : [BoundingInfo2D](/classes/2.4/BoundingInfo2D)

Retrieve the boundingInfo for this Primitive, computed based on the primitive itself and NOT its children

### static flagIsDisposed : number



### static flagLevelBoundingInfoDirty : number



### static flagModelDirty : number



### static flagLayoutDirty : number



### static flagLevelVisible : number



### static flagBoundingInfoDirty : number



### static flagIsPickable : number



### static flagIsVisible : number



### static flagVisibilityChanged : number



### static flagPositioningDirty : number



### static flagTrackedGroup : number



## Methods

### dispose() &rarr; boolean

Disposable pattern, this method must be overloaded by derived types in order to clean up hardware related resources.

@returns false if the object is already dispose, true otherwise. Your implementation must call super.dispose() and check for a false return and return immediately if it's the case.
### getAnimatables() &rarr; IAnimatable[]

Returns as a new array populated with the [Animatable](/classes/2.4/Animatable) used by the primitive. Must be overloaded by derived primitives.

Look at [Sprite2D](/classes/2.4/Sprite2D) for more information
### markAsDirty(propertyName) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | propertyName | string | 

### checkPropertiesDirty(flags) &rarr; boolean

Check if a given set of properties are dirty or not.

@return true if at least one property is dirty, false if none of them are.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | flags | number |  a ORed combination of [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo).flagId values

### addExternalData(key, data) &rarr; boolean

Add an externally attached data from its key.

This method call will fail and return false, if such key already exists.

If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.

@return true if no such key were already present and the data was added successfully, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data
 | data | T |  the data object to associate to the key for this [Engine](/classes/2.4/Engine) instance
### getExternalData(key) &rarr; T

Get an externally attached data from its key

@return the associated data, if present (can be null), or undefined if not present

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data

### getOrAddExternalDataWithFactory(key, factory) &rarr; T

Get an externally attached data from its key, create it using a factory if it's not already present

@return the associated data, can be null if the factory returned null.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data
 | factory | (k: string) =&gt; T |  the factory that will be called to create the instance if and only if it doesn't exists
### removeExternalData(key) &rarr; boolean

Remove an externally attached data from the [Engine](/classes/2.4/Engine) instance

@return true if the data was successfully removed, false if it doesn't exist

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | any |  the unique key that identifies the data

