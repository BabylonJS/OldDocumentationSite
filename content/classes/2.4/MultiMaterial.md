---
ID_PAGE: 25215
PG_TITLE: MultiMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [MultiMaterial](/classes/2.4/MultiMaterial) extends [Material](/classes/2.4/Material)



## Constructor

## new [MultiMaterial](/classes/2.4/MultiMaterial)(name, scene)

Create a new [MultiMaterial](/classes/2.4/MultiMaterial).
A tutorial about multi materials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/10/babylon-js-using-multi-materials.aspx

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) which contain the [MultiMaterial](/classes/2.4/MultiMaterial)
## Members

### subMaterials : [Material](/classes/2.4/Material)[]

Array of sub materials

## Methods

### getSubMaterial(index) &rarr; [Material](/classes/2.4/Material)

Get a sub material

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | any |    Index of the submaterial

### isReady(mesh) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.4/AbstractMesh) |    The mesh with the multi material

### clone(name, cloneChildren) &rarr; [MultiMaterial](/classes/2.4/MultiMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
optional | cloneChildren | boolean |  
### serialize() &rarr; any


