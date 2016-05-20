---
TAGS:
---
## Description

class [ClassTreeInfo](/classes/2.4/ClassTreeInfo)



## Constructor

## new [ClassTreeInfo](/classes/2.4/ClassTreeInfo)(baseClass, type, classContentFactory)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | baseClass | [ClassTreeInfo](/classes/2.4/ClassTreeInfo)&lt;TClass, TProp&gt; | 
 | type | Object | 
 | classContentFactory | (base: TClass) =&gt; TClass | 
## Members

### classContent : TClass



### type : Object



### levelContent : [StringDictionary](/classes/2.4/StringDictionary)&lt;TProp&gt;



### fullContent : [StringDictionary](/classes/2.4/StringDictionary)&lt;TProp&gt;



## Methods

### getLevelOf(type) &rarr; [ClassTreeInfo](/classes/2.4/ClassTreeInfo)&lt;TClass, TProp&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | type | Object | 

### getOrAddType(baseType, type) &rarr; [ClassTreeInfo](/classes/2.4/ClassTreeInfo)&lt;TClass, TProp&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | baseType | Object | 
 | type | Object | 
### static get(type) &rarr; [ClassTreeInfo](/classes/2.4/ClassTreeInfo)&lt;TClass, TProp&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | type | Object | 

### static getOrRegister(type, classContentFactory) &rarr; [ClassTreeInfo](/classes/2.4/ClassTreeInfo)&lt;TClass, TProp&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | type | Object | 
 | classContentFactory | (base: TClass) =&gt; TClass | 
