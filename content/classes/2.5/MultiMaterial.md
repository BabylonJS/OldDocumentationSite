---
ID_PAGE: 25215
PG_TITLE: MultiMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [MultiMaterial](/classes/2.5/MultiMaterial) extends [Material](/classes/2.5/Material)



## Constructor

## new [MultiMaterial](/classes/2.5/MultiMaterial)(name, scene)

Create a new [MultiMaterial](/classes/2.5/MultiMaterial).
A tutorial about multi materials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/10/babylon-js-using-multi-materials.aspx

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     
 | scene | [Scene](/classes/2.5/Scene) |     [Scene](/classes/2.5/Scene) which contain the [MultiMaterial](/classes/2.5/MultiMaterial)
## Members

### subMaterials : [Material](/classes/2.5/Material)[]

Array of sub materials

## Methods

### getSubMaterial(index) &rarr; [Material](/classes/2.5/Material)

Get a sub material

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | any |     Index of the submaterial

### isReady(mesh) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) |     The mesh with the multi material

### clone(name, cloneChildren) &rarr; [MultiMaterial](/classes/2.5/MultiMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     
optional | cloneChildren | boolean |   
### serialize() &rarr; any


