---
TAGS:
---
## Description

class [SmartPropertyPrim](/classes/2.0/SmartPropertyPrim) extends [SmartPropertyBase](/classes/2.0/SmartPropertyBase)



## Constructor

## new [SmartPropertyPrim](/classes/2.0/SmartPropertyPrim)()


## Members

### static SMARTPROPERTYPRIM_PROPCOUNT : number



### animations : Animation[]

Animation array, more info: http://doc.babylonjs.com/tutorials/Animations

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

Returns as a new array populated with the Animatable used by the primitive. Must be overloaded by derived primitives.

Look at [Sprite2D](/classes/2.0/Sprite2D) for more information
