---
ID_PAGE: 25311
PG_TITLE: TextureAssetTask
PG_VERSION: 2.1
TAGS:
    - Assets
---
## Description

class [TextureAssetTask](/classes/2.4/TextureAssetTask)

Load task on the given texture

## Constructor

## new [TextureAssetTask](/classes/2.4/TextureAssetTask)(name, url, noMipmap, invertY, samplingMode)

The [TextureAssetTask](/classes/2.4/TextureAssetTask) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The name
 | url | string |    The url for this texture
optional | noMipmap | boolean |    Set true if you want to activate Mipmap, false otherwise.
optional | invertY | boolean |    Invert y axis or not
## Members

### name : string

The name

### url : string

The url for this texture

### noMipmap : boolean

Set true if you want to activate Mipmap, false otherwise.

### invertY : boolean

Invert the y axis

### samplingMode : number

The sampling mode

### onSuccess : (task: IAssetTask) =&gt; void

Function call when the mesh is load successfully

### onError : (task: IAssetTask) =&gt; void

Function call when the mesh isn't load successfully

### isCompleted : boolean

True if is completed, false otherwise.

### texture : [Texture](/classes/2.4/Texture)

The texture

## Methods

### run(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) |    The scene where this texture is.
 | onSuccess | () =&gt; void |    Function call when the mesh is load successfully
 | onError | () =&gt; void |    Function call when the mesh isn't load successfully
