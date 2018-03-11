---
ID_PAGE: 25312
PG_TITLE: AssetsManager
PG_VERSION: 2.1
TAGS:
    - Assets
---
## Description

class [AssetsManager](/classes/3.1/AssetsManager)



## Constructor

## new [AssetsManager](/classes/3.1/AssetsManager)(scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 

## Members

### tasks : [AbstractAssetTask](/classes/3.1/AbstractAssetTask)[]


### waitingTasksCount : number


### onFinish : (tasks: [AbstractAssetTask](/classes/3.1/AbstractAssetTask)[]) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | tasks | [AbstractAssetTask](/classes/3.1/AbstractAssetTask)[] | 

### onTaskSuccess : (task: [AbstractAssetTask](/classes/3.1/AbstractAssetTask)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | task | [AbstractAssetTask](/classes/3.1/AbstractAssetTask) | 

### onTaskError : (task: [AbstractAssetTask](/classes/3.1/AbstractAssetTask)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | task | [AbstractAssetTask](/classes/3.1/AbstractAssetTask) | 

### onProgress : (remainingCount: number, totalCount: number, task: [AbstractAssetTask](/classes/3.1/AbstractAssetTask)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | remainingCount | number | 
 | totalCount | number | 
 | task | [AbstractAssetTask](/classes/3.1/AbstractAssetTask) | 
### onTaskSuccessObservable : [Observable](/classes/3.1/Observable)&lt;[AbstractAssetTask](/classes/3.1/AbstractAssetTask)&gt;


### onTaskErrorObservable : [Observable](/classes/3.1/Observable)&lt;[AbstractAssetTask](/classes/3.1/AbstractAssetTask)&gt;


### onTasksDoneObservable : [Observable](/classes/3.1/Observable)&lt;[AbstractAssetTask](/classes/3.1/AbstractAssetTask)[]&gt;


### onProgressObservable : [Observable](/classes/3.1/Observable)&lt;IAssetsProgressEvent&gt;


### useDefaultLoadingScreen : boolean


## Methods

### addMeshTask(taskName, meshesNames, rootUrl, sceneFilename) &rarr; [MeshAssetTask](/classes/3.1/MeshAssetTask)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | meshesNames | any | 
 | rootUrl | string | 
### addTextFileTask(taskName, url) &rarr; [TextFileAssetTask](/classes/3.1/TextFileAssetTask)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 
### addBinaryFileTask(taskName, url) &rarr; [BinaryFileAssetTask](/classes/3.1/BinaryFileAssetTask)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 
### addImageTask(taskName, url) &rarr; [ImageAssetTask](/classes/3.1/ImageAssetTask)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 
### addTextureTask(taskName, url, noMipmap, invertY, samplingMode) &rarr; [TextureAssetTask](/classes/3.1/TextureAssetTask)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 
optional | noMipmap | boolean | 
optional | invertY | boolean | 
### addCubeTextureTask(name, url, extensions, noMipmap, files) &rarr; [CubeTextureAssetTask](/classes/3.1/CubeTextureAssetTask)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | url | string | 
optional | extensions | string[] | 
optional | noMipmap | boolean | 
### addHDRCubeTextureTask(name, url, size, noMipmap, generateHarmonics, useInGammaSpace, usePMREMGenerator) &rarr; [HDRCubeTextureAssetTask](/classes/3.1/HDRCubeTextureAssetTask)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | url | string | 
optional | size | number | 
optional | noMipmap | boolean | 
optional | generateHarmonics | boolean | 
optional | useInGammaSpace | boolean | 
### reset() &rarr; [AssetsManager](/classes/3.1/AssetsManager)


### load() &rarr; [AssetsManager](/classes/3.1/AssetsManager)


