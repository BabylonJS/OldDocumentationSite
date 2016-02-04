---
ID_PAGE: 25308
PG_TITLE: TextFileAssetTask
PG_VERSION: 2.1
TAGS:
    - Assets
---
## Description

class [TextFileAssetTask](/classes/2.3/TextFileAssetTask)



## Constructor

##  new [TextFileAssetTask](/classes/2.3/TextFileAssetTask)(name, url)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The name
 | url | string |   The url to this text file
## Members

### name : string



### url : string



### onSuccess : (task: IAssetTask) =&gt; void



### onError : (task: IAssetTask) =&gt; void



### isCompleted : boolean



### text : string



## Methods

### run(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   The scene where the text file is.
 | onSuccess | () =&gt; void |   Function call when the mesh is load successfully
 | onError | () =&gt; void |   Function call when the mesh isn't load successfully
