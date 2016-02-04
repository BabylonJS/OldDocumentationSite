---
ID_PAGE: 25310
PG_TITLE: ImageAssetTask
PG_VERSION: 2.1
TAGS:
    - Assets
---
## Description

class [ImageAssetTask](/classes/2.3/ImageAssetTask)



## Constructor

##  new [ImageAssetTask](/classes/2.3/ImageAssetTask)(name, url)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The name
 | url | string |   The url to this image
## Members

### name : string



### url : string



### onSuccess : (task: IAssetTask) =&gt; void



### onError : (task: IAssetTask) =&gt; void



### isCompleted : boolean



### image : HTMLImageElement



## Methods

### run(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   the scene where the image is.
 | onSuccess | () =&gt; void |   Function call when the mesh is load successfully
 | onError | () =&gt; void |   Function call when the mesh isn't load successfully
