---
ID_PAGE: 25313
PG_TITLE: Database
PG_VERSION: 2.1
TAGS:
    - Database
---
## Description

class [Database](/classes/3.1/Database)



## Constructor

## new [Database](/classes/3.1/Database)(urlToScene, callbackManifestChecked)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | urlToScene | string | 
 | callbackManifestChecked | (checked: boolean) =&gt; any | 
## Members

### static IsUASupportingBlobStorage : boolean



### static IDBStorageEnabled : boolean



### enableSceneOffline : boolean



### enableTexturesOffline : boolean



### static parseURL : (url: string) =&gt; string



### static ReturnFullUrlLocation : (url: string) =&gt; string



## Methods

### checkManifestFile() &rarr; void


### openAsync(successCallback, errorCallback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | successCallback | () =&gt; void | 
 | errorCallback | () =&gt; void | 
### loadImageFromDB(url, image) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 
 | image | HTMLImageElement | 
### loadFileFromDB(url, sceneLoaded, progressCallBack, errorCallback, useArrayBuffer) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 
 | sceneLoaded | (data: any) =&gt; void | 
optional | progressCallBack | (data: any) =&gt; void | 
optional | errorCallback | () =&gt; void | 
