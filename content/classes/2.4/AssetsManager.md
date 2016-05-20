---
ID_PAGE: 25312
PG_TITLE: AssetsManager
PG_VERSION: 2.1
TAGS:
    - Assets
---
## Description

class [AssetsManager](/classes/2.4/AssetsManager)

This class can be used to import meshes into a scene or load text and binary files.

## Constructor

## new [AssetsManager](/classes/2.4/AssetsManager)(scene)

The [AssetsManager](/classes/2.4/AssetsManager) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) |    The current scene

## Members

### onFinish : (tasks: IAssetTask[]) =&gt; void

The callback

### onTaskSuccess : (task: IAssetTask) =&gt; void

The callback

### onTaskError : (task: IAssetTask) =&gt; void

Function call when the element

### useDefaultLoadingScreen : boolean

Default value is true, you can set false if you don't want to see the loading screen

## Methods

### addMeshTask(taskName, meshesNames, rootUrl, sceneFilename) &rarr; IAssetTask

Add and return the new [MeshAssetTask](/classes/2.4/MeshAssetTask)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string |    The task name
 | meshesNames | any |    The meshes name
 | rootUrl | string |    The root url of this mesh
### addTextFileTask(taskName, url) &rarr; IAssetTask

Add and return the new [TextFileAssetTask](/classes/2.4/TextFileAssetTask)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string |    The task name
 | url | string |    The url of this texture
### addBinaryFileTask(taskName, url) &rarr; IAssetTask

Add and return the new [BinaryFileAssetTask](/classes/2.4/BinaryFileAssetTask)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string |    The task name
 | url | string |    The url of this texture
### addImageTask(taskName, url) &rarr; IAssetTask

Add and return the new [TextFileAssetTask](/classes/2.4/TextFileAssetTask)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string |    The task name
 | url | string |    The url of this texture
### addTextureTask(taskName, url, noMipmap, invertY, samplingMode) &rarr; IAssetTask

Add and return the new [TextFileAssetTask](/classes/2.4/TextFileAssetTask)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string |    The task name
 | url | string |    The url of this texture
optional | noMipmap | boolean |    Set true if you want to activate Mipmap, false otherwise.
optional | invertY | boolean |    Invert the y axis
### reset() &rarr; [AssetsManager](/classes/2.4/AssetsManager)

Reset all tasks
### load() &rarr; [AssetsManager](/classes/2.4/AssetsManager)


