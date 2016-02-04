---
ID_PAGE: 25313
PG_TITLE: Database
PG_VERSION: 2.1
TAGS:
    - Database
---
## Description

class [Database](/classes/2.3/Database)



## Constructor

##  new [Database](/classes/2.3/Database)(urlToScene, callbackManifestChecked)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | urlToScene | string |   The Url to store the scene
 | callbackManifestChecked | (checked: boolean) =&gt; any |   The function to execute depending of whether the manifest has been found or not
## Members

### static  IsUASupportingBlobStorage : boolean



### static  IDBStorageEnabled : boolean



### static  parseURL : (url: string) =&gt; string



### static  ReturnFullUrlLocation : (url: string) =&gt; string



## Methods

### checkManifestFile() &rarr; void


### openAsync(successCallback, errorCallback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | successCallback | any |   Function to execute when data is successfuly loaded
 | errorCallback | any |   Function to execute if data could not be loaded
### loadImageFromDB(url, image) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |   The relative url of the image
 | image | HTMLImageElement |   The element to put the image into
