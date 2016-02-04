---
ID_PAGE: 25312
PG_TITLE: AssetsManager
PG_VERSION: 2.1
TAGS:
    - Assets
---
## Description

class [AssetsManager](/classes/2.3/AssetsManager)



## Constructor

##  new [AssetsManager](/classes/2.3/AssetsManager)(scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   The current scene

## Members

### onFinish : (tasks: IAssetTask[]) =&gt; void



### onTaskSuccess : (task: IAssetTask) =&gt; void



### onTaskError : (task: IAssetTask) =&gt; void



### useDefaultLoadingScreen : boolean



## Methods

### addMeshTask(taskName, meshesNames, rootUrl, sceneFilename) &rarr; IAssetTask



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string |   The task name
 | meshesNames | any |   The meshes name
 | rootUrl | string |   The root url of this mesh
### addTextFileTask(taskName, url) &rarr; IAssetTask



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string |   The task name
 | url | string |   The url of this texture
### addBinaryFileTask(taskName, url) &rarr; IAssetTask



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string |   The task name
 | url | string |   The url of this texture
### addImageTask(taskName, url) &rarr; IAssetTask



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string |   The task name
 | url | string |   The url of this texture
### addTextureTask(taskName, url, noMipmap, invertY, samplingMode) &rarr; IAssetTask



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string |   The task name
 | url | string |   The url of this texture
optional | noMipmap | boolean |   Set true if you want to activate Mipmap, false otherwise.
optional | invertY | boolean |   Invert the y axis
### reset() &rarr; [AssetsManager](/classes/2.3/AssetsManager)


### load() &rarr; [AssetsManager](/classes/2.3/AssetsManager)


