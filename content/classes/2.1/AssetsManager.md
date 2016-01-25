---
ID_PAGE: 25312
PG_TITLE: AssetsManager
PG_VERSION: 2.1
TAGS:
    - Assets
---

This class can be used to import meshes into a scene or load text and binary files.
##new [AssetsManager](/classes/AssetsManager)(scene)




The [AssetsManager](/classes/AssetsManager) constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | The current scene
---

##Members

###onFinish : (tasks: IAssetTask[]) =&gt; void





The callback




###onTaskSuccess : (task: IAssetTask) =&gt; void





The callback




###onTaskError : (task: IAssetTask) =&gt; void





Function call when the element




###useDefaultLoadingScreen : boolean





Default value is true, you can set false if you don't want to see the loading screen















##Methods

###addMeshTask(taskName, meshesNames, rootUrl, sceneFilename) &rarr; IAssetTask
Add and return the new [MeshAssetTask](/classes/MeshAssetTask)







####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | The task name
 | meshesNames | any | The meshes name
 | rootUrl | string | The root url of this mesh
 | sceneFilename | string | The scene file name
---

###addTextFileTask(taskName, url) &rarr; IAssetTask
Add and return the new [TextFileAssetTask](/classes/TextFileAssetTask)







####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | The task name
 | url | string | The url of this text file
---

###addBinaryFileTask(taskName, url) &rarr; IAssetTask
Add and return the new [BinaryFileAssetTask](/classes/BinaryFileAssetTask)







####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | The task name
 | url | string | The url of this binary file
---

###addImageTask(taskName, url) &rarr; IAssetTask
Add and return the new [TextFileAssetTask](/classes/TextFileAssetTask)







####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | The task name
 | url | string | The url of this image
---

###addTextureTask(taskName, url, noMipmap, invertY, samplingMode) &rarr; IAssetTask
Add and return the new [TextFileAssetTask](/classes/TextFileAssetTask)







####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | The task name
 | url | string | The url of this texture
optional | noMipmap | boolean | Set true if you want to activate Mipmap, false otherwise.
optional | invertY | boolean | Invert the y axis
optional | samplingMode | number | The sampling mode
---

###reset() &rarr; [AssetsManager](/classes/AssetsManager)
Reset all tasks








###load() &rarr; [AssetsManager](/classes/AssetsManager)

