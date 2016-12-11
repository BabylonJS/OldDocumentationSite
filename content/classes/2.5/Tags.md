---
ID_PAGE: 25334
PG_TITLE: Tags
PG_VERSION: 2.1
---
## Description

class [Tags](/classes/2.5/Tags)

[Tags](/classes/2.5/Tags) can be added to ANY javascript object (not necessarily reserved to BabylonJS) by calling [[Tags](/classes/2.5/Tags).AddTagsTo](http://doc.babylonjs.com/classes/2.1/[Tags](/classes/2.5/Tags)#static-addtagsto-obj-tagsstring-rarr-void)

[[Tags](/classes/2.5/Tags).MatchesQuery](http://doc.babylonjs.com/classes/2.1/[Tags](/classes/2.5/Tags)#static-matchesquery-obj-tagsquery-rarr-boolean) can be used to check if a javascript object matches a "boolean" query<br/>

The tags 'true' and 'false' are reserved and cannot be used as tags

a tag cannot start with '||', '&&', and '!' it cannot contain whitespaces

## Methods

### static EnableFor(obj) &rarr; void

Enable the tag system for the given object.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any |     The given object

### static DisableFor(obj) &rarr; void

Disable the tag system for the given object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any |     The given object

### static HasTags(obj) &rarr; boolean

True if given object has tags, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any |     The given object

### static GetTags(obj, asString) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any |     The given object
optional | asString | boolean |   
### static AddTagsTo(obj, tagsString) &rarr; void

Add tags

#### Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any |     The given object
 | tagsString | string |     @param tagsString
### static RemoveTagsFrom(obj, tagsString) &rarr; void

Remove the list of tag to the given object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any |     The given object
 | tagsString | string |     @param tagsString
### static MatchesQuery(obj, tagsQuery) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any |     The given object
 | tagsQuery | string |     @param tagsQuery
