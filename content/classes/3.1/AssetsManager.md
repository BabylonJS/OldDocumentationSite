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

### onFinish : (tasks: IAssetTask[]) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | tasks | IAssetTask[] | 

### onTaskSuccess : (task: IAssetTask) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | task | IAssetTask | 

### onTaskError : (task: IAssetTask) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | task | IAssetTask | 

### onTaskSuccessObservable : [Observable](/classes/3.1/Observable)&lt;IAssetTask&gt;


### onTaskErrorObservable : [Observable](/classes/3.1/Observable)&lt;IAssetTask&gt;


### onTasksDoneObservable : [Observable](/classes/3.1/Observable)&lt;IAssetTask[]&gt;


### useDefaultLoadingScreen : boolean


## Methods

### addMeshTask(taskName, meshesNames, rootUrl, sceneFilename) &rarr; IAssetTask



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | meshesNames | any | 
 | rootUrl | string | 
### addTextFileTask(taskName, url) &rarr; IAssetTask



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 
### addBinaryFileTask(taskName, url) &rarr; IAssetTask



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 
### addImageTask(taskName, url) &rarr; IAssetTask



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 
### addTextureTask(taskName, url, noMipmap, invertY, samplingMode) &rarr; ITextureAssetTask



#### Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | 
 | url | string | 
optional | noMipmap | boolean | 
optional | invertY | boolean | 
### addCubeTextureTask(name, url, extensions, noMipmap, files) &rarr; IAssetTask



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | url | string | 
optional | extensions | string[] | 
optional | noMipmap | boolean | 
### addHDRCubeTextureTask(name, url, size, noMipmap, generateHarmonics, useInGammaSpace, usePMREMGenerator) &rarr; IAssetTask



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


