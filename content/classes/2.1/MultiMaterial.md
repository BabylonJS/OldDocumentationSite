---
ID_PAGE: 25215
PG_TITLE: MultiMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
##new [MultiMaterial](/classes/MultiMaterial)(name, scene)




Create a new [MultiMaterial](/classes/MultiMaterial).
A tutorial about multi materials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/10/babylon-js-using-multi-materials.aspx






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the multimaterial
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the [MultiMaterial](/classes/MultiMaterial)
---

##Extends
 [Material](/classes/Material)
##Members

###subMaterials : [Material](/classes/Material)[]





Array of sub materials















##Methods

###getSubMaterial(index) &rarr; [Material](/classes/Material)
Get a sub material







####Parameters
 | Name | Type | Description
---|---|---|---
 | index | any | Index of the submaterial
---

###isReady(mesh) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/AbstractMesh) | The mesh with the multi material
---

###clone(name) &rarr; [MultiMaterial](/classes/MultiMaterial)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
---
