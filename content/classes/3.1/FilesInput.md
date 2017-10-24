---
ID_PAGE: 25314
PG_TITLE: FilesInput
PG_VERSION: 2.1
TAGS:
    - Files
---
## Description

class [FilesInput](/classes/3.1/FilesInput)



## Constructor

## new [FilesInput](/classes/3.1/FilesInput)(engine, scene, sceneLoadedCallback, progressCallback, additionalRenderLoopLogicCallback, textureLoadingCallback, startingProcessingFilesCallback, onReloadCallback, errorCallback)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/3.1/Engine) | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | sceneLoadedCallback | (sceneFile: File, scene: [Scene](/classes/3.1/Scene)) =&gt; void | 
 | progressCallback | (progress: ProgressEvent) =&gt; void | 
 | additionalRenderLoopLogicCallback | () =&gt; void | 
 | textureLoadingCallback | (remaining: number) =&gt; void | 
 | startingProcessingFilesCallback | () =&gt; void | 
 | onReloadCallback | (sceneFile: File) =&gt; void | 
## Members

### static FilesToLoad : { [key: string]: File }



### onProcessFileCallback : (file: File, name: string, extension: string) =&gt; 



## Methods

### monitorElementForDragNDrop(elementToMonitor) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | elementToMonitor | HTMLElement | 

### dispose() &rarr; void


### loadFiles(event) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | event | any | 

### reload() &rarr; void


