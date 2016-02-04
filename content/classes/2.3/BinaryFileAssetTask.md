---
ID_PAGE: 25309
PG_TITLE: BinaryFileAssetTask
PG_VERSION: 2.1
---
## Description

class [BinaryFileAssetTask](/classes/2.3/BinaryFileAssetTask)



## Constructor

##  new [BinaryFileAssetTask](/classes/2.3/BinaryFileAssetTask)(name, url)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The name
 | url | string |   The url for this binary file
## Members

### name : string



### url : string



### onSuccess : (task: IAssetTask) =&gt; void



### onError : (task: IAssetTask) =&gt; void



### isCompleted : boolean



### data : ArrayBuffer



## Methods

### run(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   The scene where this binary file is.
 | onSuccess | () =&gt; void |   Function call when the mesh is load successfully
 | onError | () =&gt; void |   Function call when the mesh is load successfully
