---
ID_PAGE: 25348
PG_TITLE: AndOrNotEvaluator
PG_VERSION: 2.1
---















##Methods

###static Eval(query, evaluateCallback) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | query | string | The given query example :  (tag1 &amp;&amp; (tag2 || tag4 || !tag5)) || !(!tag1) &amp;&amp; !!!tag5
 | evaluateCallback | (val: any) =&gt; boolean | A callback function, internally used to return found objects
---
