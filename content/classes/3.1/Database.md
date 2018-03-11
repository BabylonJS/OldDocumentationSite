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
 | callbackManifestChecked |  | checked | boolean | 

## Members

### static IsUASupportingBlobStorage : boolean


### static IDBStorageEnabled : boolean


### enableSceneOffline : boolean


### enableTexturesOffline : boolean


### static parseURL : (url: string) =&gt; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 

### static ReturnFullUrlLocation : (url: string) =&gt; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 

## Methods

### checkManifestFile() &rarr; void


### openAsync(successCallback, errorCallback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | successCallback |  | 
 | errorCallback |  | 
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
 | sceneLoaded |  | data | any | 

 | 
optional | progressCallBack |  | data | any | 
optional | errorCallback |  | 
