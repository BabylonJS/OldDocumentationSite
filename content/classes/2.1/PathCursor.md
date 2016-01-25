---
ID_PAGE: 25251
PG_TITLE: PathCursor
PG_VERSION: 2.1
---
##new [PathCursor](/classes/PathCursor)(path)




####Parameters
 | Name | Type | Description
---|---|---|---
 | path | [Path2](/classes/Path2) | 
---

##Members

###value : number




###animations : [Animation](/classes/Animation)[]









##Methods

###getPoint() &rarr; [Vector3](/classes/Vector3)




###moveAhead(step) &rarr; [PathCursor](/classes/PathCursor)



####Parameters
 | Name | Type | Description
---|---|---|---
optional | step | number | 
---

###moveBack(step) &rarr; [PathCursor](/classes/PathCursor)



####Parameters
 | Name | Type | Description
---|---|---|---
optional | step | number | 
---

###move(step) &rarr; [PathCursor](/classes/PathCursor)



####Parameters
 | Name | Type | Description
---|---|---|---
 | step | number | 
---

###onchange(f) &rarr; [PathCursor](/classes/PathCursor)

####Parameters
 | Name | Type | Description
---|---|---|---
 | f | (cursor: [PathCursor](/classes/PathCursor)) =&gt; void | 
---
