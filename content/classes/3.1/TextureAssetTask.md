---
ID_PAGE: 25311
PG_TITLE: TextureAssetTask
PG_VERSION: 2.1
TAGS:
    - Assets
---
## Description

class [TextureAssetTask](/classes/3.1/TextureAssetTask) extends [AbstractAssetTask](/classes/3.1/AbstractAssetTask)



## Constructor

## new [TextureAssetTask](/classes/3.1/TextureAssetTask)(name, url, noMipmap, undefined, invertY, undefined, samplingMode)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | url | string | 
optional | noMipmap | boolean or undefined | 
optional | invertY | boolean or undefined | 
## Members

### name : string


### url : string


### noMipmap : boolean


### undefined : undefined


### invertY : boolean


### undefined : undefined


### samplingMode : number


### texture : [Texture](/classes/3.1/Texture)


### onSuccess : (task: [TextureAssetTask](/classes/3.1/TextureAssetTask)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | task | [TextureAssetTask](/classes/3.1/TextureAssetTask) | 

### onError : (task: [TextureAssetTask](/classes/3.1/TextureAssetTask), message: string, exception: any) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | task | [TextureAssetTask](/classes/3.1/TextureAssetTask) | 
optional | message | string | 
optional | exception | any | 
## Methods

### runTask(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
 | onSuccess |  | 
 | onError | optional | message | string | 
optional | exception | any | 

