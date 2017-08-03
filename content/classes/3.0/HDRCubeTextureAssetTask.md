---
TAGS:
---
## Description

class [HDRCubeTextureAssetTask](/classes/3.0/HDRCubeTextureAssetTask)



## Constructor

## new [HDRCubeTextureAssetTask](/classes/3.0/HDRCubeTextureAssetTask)(name, url, size, noMipmap, generateHarmonics, useInGammaSpace, usePMREMGenerator)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | url | string | 
optional | size | number | 
optional | noMipmap | boolean | 
optional | generateHarmonics | boolean | 
optional | useInGammaSpace | boolean | 
## Members

### name : string



### url : string



### size : number



### noMipmap : boolean



### generateHarmonics : boolean



### useInGammaSpace : boolean



### usePMREMGenerator : boolean



### onSuccess : (task: IAssetTask) =&gt; void



### onError : (task: IAssetTask) =&gt; void



### isCompleted : boolean



### texture : [HDRCubeTexture](/classes/3.0/HDRCubeTexture)



## Methods

### run(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.0/Scene) | 
 | onSuccess | () =&gt; void | 
 | onError | () =&gt; void | 
