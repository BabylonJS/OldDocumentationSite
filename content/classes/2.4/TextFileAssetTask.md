---
ID_PAGE: 25308
PG_TITLE: TextFileAssetTask
PG_VERSION: 2.1
TAGS:
    - Assets
---
## Description

class [TextFileAssetTask](/classes/2.4/TextFileAssetTask)



## Constructor

## new [TextFileAssetTask](/classes/2.4/TextFileAssetTask)(name, url)

The [TextFileAssetTask](/classes/2.4/TextFileAssetTask) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The name
 | url | string |    The url to this text file
## Members

### name : string

The name

### url : string

The url to this text file

### onSuccess : (task: IAssetTask) =&gt; void

Function call when the mesh is load successfully

### onError : (task: IAssetTask) =&gt; void

Function call when the mesh isn't load successfully

### isCompleted : boolean

True if is completed, false otherwise.

### text : string

The text

## Methods

### run(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) |    The scene where the text file is.
 | onSuccess | () =&gt; void |    Function call when the mesh is load successfully
 | onError | () =&gt; void |    Function call when the mesh isn't load successfully
