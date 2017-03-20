---
TAGS:
---
## Description

class [DataBinding](/classes/2.0/DataBinding)



## Constructor

## new [DataBinding](/classes/2.0/DataBinding)()


## Members

### static MODE_DEFAULT : number

Use the mode specified in the SmartProperty declaration

### static MODE_ONETIME : number

Update the binding target only once when the Smart Property's value is first accessed

### static MODE_ONEWAY : number

Update the smart property when the source changes.

The source won't be updated if the smart property value is set.

### static MODE_ONEWAYTOSOURCE : number

Only update the source when the target's data is changing.

### static MODE_TWOWAY : number

Update the bind target when the source changes and update the source when the Smart Property value is set.

### static UPDATESOURCETRIGGER_DEFAULT : number

Use the Update Source Trigger defined in the SmartProperty declaration

### static UPDATESOURCETRIGGER_PROPERTYCHANGED : number

Update the source as soon as the Smart Property has a value change

### static UPDATESOURCETRIGGER_LOSTFOCUS : number

Update the source when the binding target loses focus

### static UPDATESOURCETRIGGER_EXPLICIT : number

Update the source will be made by explicitly calling the UpdateFromDataSource method

### converter : (sourceValue: any) =&gt; any

Provide a callback that will convert the value obtained by the Data Binding to the type of the SmartProperty it's bound to.

If no value are set, then it's assumed that the sourceValue is of the same type as the SmartProperty's one.

If the SmartProperty type is a basic data type (string, boolean or number) and no converter is specified but the sourceValue is of a different type, the conversion will be implicitly made, if possible.

@param sourceValue the source object retrieve by the Data Binding mechanism

@returns the object of a compatible type with the SmartProperty it's bound to

### mode : number

Set the mode to use for the data flow in the binding. Set one of the MODE_xxx static member of this class. If not specified then MODE_DEFAULT will be used

### uiElementId : string

You can override the Data Source object with this member which is the Id of a uiElement existing in the UI Logical tree.

If not set and source no set too, then the dataSource property will be used.

### dataSource : IPropertyChanged

You can override the Data Source object with this member which is the source object to use directly.

If not set and uiElement no set too, then the dataSource property of the [SmartPropertyBase](/classes/2.0/SmartPropertyBase) object will be used.

### propertyPathName : string

The path & name of the property to get from the source object.

Once the Source object is evaluated (it's either the one got from uiElementId, source or dataSource) you can specify which property of this object is the value to bind to the smartProperty.

If nothing is set then the source object will be used.

You can specify an indirect property using the format "firstProperty.indirectProperty" like "address.postalCode" if the source is a Customer object which contains an address property and the Address class contains a postalCode property.

If the property is an Array and you want to address a particular element then use the 'arrayProperty[index]' notation. For example "phoneNumbers[0]" to get the first element of the phoneNumber property which is an array.

### stringFormat : (value: any) =&gt; string

If the Smart Property is of the string type, you can use the string interpolation notation to provide how the sourceValue will be formatted, reference to the source value must be made via the token: ${value}. For instance `Customer Name: ${value}`

### updateSourceTrigger : number

Specify how the source should be updated, use one of the UPDATESOURCETRIGGER_xxx member of this class, if not specified then UPDATESOURCETRIGGER_DEFAULT will be used.

## Methods

### canUpdateTarget(resetUpdateCounter) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | resetUpdateCounter | boolean | 

### updateTarget() &rarr; void


