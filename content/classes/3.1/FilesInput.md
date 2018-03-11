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
 | sceneLoadedCallback |  | sceneFile | File | 

 | 
 | progressCallback |  | progress | ProgressEvent | 
 | additionalRenderLoopLogicCallback |  | 
 | textureLoadingCallback |  | remaining | number | 
 | startingProcessingFilesCallback |  | 
 | onReloadCallback |  | sceneFile | File | 
 | errorCallback |  | sceneFile | File | 
## Members

### static FilesToLoad : { [key: string]: File }


### onProcessFileCallback : (file: File, name: string, extension: string) =&gt; 



#### Parameters
 | Name | Type | Description
---|---|---|---
 | file | File | 
 | name | string | 
 | extension | string | 
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


