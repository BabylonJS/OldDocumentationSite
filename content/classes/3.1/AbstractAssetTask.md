---
TAGS:
---
## Description

class [AbstractAssetTask](/classes/3.1/AbstractAssetTask)



## Constructor

## new [AbstractAssetTask](/classes/3.1/AbstractAssetTask)()


## Members

### onSuccess : (task: IAssetTask) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | task | IAssetTask | 

### onError : (task: IAssetTask, message: string, exception: any) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | task | IAssetTask | 
optional | message | string | 
optional | exception | any | 
### isCompleted : boolean


### taskState : [AssetTaskState](/classes/3.1/AssetTaskState)


### errorObject : { message: string,  exception: any }


## Methods

### run(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
 | onSuccess |  | 
 | onError | optional | message | string | 
optional | exception | any | 

### runTask(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
 | onSuccess |  | 
 | onError | optional | message | string | 
optional | exception | any | 

