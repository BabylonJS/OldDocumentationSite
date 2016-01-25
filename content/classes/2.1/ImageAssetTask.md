---
ID_PAGE: 25310
PG_TITLE: ImageAssetTask
PG_VERSION: 2.1
TAGS:
    - Assets
---

Load task on the given image
##new [ImageAssetTask](/classes/ImageAssetTask)(name, url)




The [ImageAssetTask](/classes/ImageAssetTask)






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name
 | url | string | The url to this image
---

##Members

###name : string





The name




###url : string





The url to this image




###onSuccess : (task: IAssetTask) =&gt; void





Function call when the mesh is load successfully




###onError : (task: IAssetTask) =&gt; void





Function call when the mesh isn't load successfully




###isCompleted : boolean





True if is completed, false otherwise.




###image : HTMLImageElement





The image















##Methods

###run(scene, onSuccess, onError) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | the scene where the image is.
 | onSuccess | () =&gt; void | Function call when the mesh is load successfully
 | onError | () =&gt; void | Function call when the mesh isn't load successfully
---
