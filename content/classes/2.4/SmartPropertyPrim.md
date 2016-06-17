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

