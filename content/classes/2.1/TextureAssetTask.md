---
ID_PAGE: 25311
PG_TITLE: TextureAssetTask
PG_VERSION: 2.1
TAGS:
    - Assets
---

Load task on the given texture
##new [TextureAssetTask](/classes/TextureAssetTask)(name, url, noMipmap, invertY, samplingMode)




The [TextureAssetTask](/classes/TextureAssetTask) constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name
 | url | string | The url for this texture
optional | noMipmap | boolean | Set true if you want to activate Mipmap, false otherwise.
optional | invertY | boolean | Invert y axis or not
optional | samplingMode | number | The sampling mode
---

##Members

###name : string





The name




###url : string





The url for this texture




###noMipmap : boolean





Set true if you want to activate Mipmap, false otherwise.




###invertY : boolean





Invert the y axis




###samplingMode : number





The sampling mode




###onSuccess : (task: IAssetTask) =&gt; void





Function call when the mesh is load successfully




###onError : (task: IAssetTask) =&gt; void





Function call when the mesh isn't load successfully




###isCompleted : boolean





True if is completed, false otherwise.




###texture : [Texture](/classes/Texture)





The texture















##Methods

###run(scene, onSuccess, onError) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | The scene where this texture is.
 | onSuccess | () =&gt; void | Function call when the mesh is load successfully
 | onError | () =&gt; void | Function call when the mesh isn't load successfully
---
