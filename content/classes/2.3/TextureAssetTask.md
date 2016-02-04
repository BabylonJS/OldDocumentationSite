---
ID_PAGE: 25311
PG_TITLE: TextureAssetTask
PG_VERSION: 2.1
TAGS:
    - Assets
---
## Description

class [TextureAssetTask](/classes/2.3/TextureAssetTask)



## Constructor

##  new [TextureAssetTask](/classes/2.3/TextureAssetTask)(name, url, noMipmap, invertY, samplingMode)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The name
 | url | string |   The url for this texture
optional | noMipmap | boolean |   Set true if you want to activate Mipmap, false otherwise.
optional | invertY | boolean |   Invert y axis or not
## Members

### name : string



### url : string



### noMipmap : boolean



### invertY : boolean



### samplingMode : number



### onSuccess : (task: IAssetTask) =&gt; void



### onError : (task: IAssetTask) =&gt; void



### isCompleted : boolean



### texture : [Texture](/classes/2.3/Texture)



## Methods

### run(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   The scene where this texture is.
 | onSuccess | () =&gt; void |   Function call when the mesh is load successfully
 | onError | () =&gt; void |   Function call when the mesh isn't load successfully
