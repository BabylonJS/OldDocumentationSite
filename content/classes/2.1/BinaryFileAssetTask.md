---
ID_PAGE: 25309
PG_TITLE: BinaryFileAssetTask
PG_VERSION: 2.1
---

Load task on the given binary file
##new [BinaryFileAssetTask](/classes/BinaryFileAssetTask)(name, url)




The [BinaryFileAssetTask](/classes/BinaryFileAssetTask)






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name
 | url | string | The url for this binary file
---

##Members

###name : string





The name




###url : string





The url for this binary file




###onSuccess : (task: IAssetTask) =&gt; void





Function call when the mesh is load successfully




###onError : (task: IAssetTask) =&gt; void





Function call when the mesh isn't load successfully




###isCompleted : boolean





True if is completed, false otherwise.




###data : ArrayBuffer





The data















##Methods

###run(scene, onSuccess, onError) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | The scene where this binary file is.
 | onSuccess | () =&gt; void | Function call when the mesh is load successfully
 | onError | () =&gt; void | Function call when the mesh is load successfully
---
