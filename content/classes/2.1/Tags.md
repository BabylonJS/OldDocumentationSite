---
ID_PAGE: 25334
PG_TITLE: Tags
PG_VERSION: 2.1
---
 [Tags](/classes/Tags) can be added to ANY javascript object (not necessarily reserved to BabylonJS) by calling [Tags](/classes/Tags).AddTagsTo.
 [Tags](/classes/Tags).MatchesQuery can be used to check if a javascript object matches a &quot;boolean&quot; query&lt;br/&gt;

The tags 'true' and 'false' are reserved and cannot be used as tags

a tag cannot start with '||', '&amp;&amp;', and '!' it cannot contain whitespaces















##Methods

###static EnableFor(obj) &rarr; void
Enable the tag system for the given object.







####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | The given object
---

###static DisableFor(obj) &rarr; void
Disable the tag system for the given object







####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | The given object
---

###static HasTags(obj) &rarr; boolean
True if given object has tags, false otherwise







####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | The given object
---

###static GetTags(obj) &rarr; any
Get tags







####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | The given object
---

###static AddTagsTo(obj, tagsString) &rarr; void
Add tags







####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | The given object
 | tagsString | string | @param tagsString
---

###static RemoveTagsFrom(obj, tagsString) &rarr; void
Remove the list of tag to the given object







####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | The given object
 | tagsString | string | @param tagsString
---

###static MatchesQuery(obj, tagsQuery) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | The given object
 | tagsQuery | string | @param tagsQuery
---
