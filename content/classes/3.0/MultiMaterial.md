---
ID_PAGE: 25215
PG_TITLE: MultiMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [MultiMaterial](/classes/3.0/MultiMaterial) extends [Material](/classes/3.0/Material)



## Constructor

## new [MultiMaterial](/classes/3.0/MultiMaterial)(name, scene)

Create a new [MultiMaterial](/classes/3.0/MultiMaterial).
A tutorial about multi materials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/10/babylon-js-using-multi-materials.aspx

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      
 | scene | [Scene](/classes/3.0/Scene) |      [Scene](/classes/3.0/Scene) which contain the [MultiMaterial](/classes/3.0/MultiMaterial)
## Members

### subMaterials : [Material](/classes/3.0/Material)[]

Array of sub materials

## Methods

### getSubMaterial(index) &rarr; [Material](/classes/3.0/Material)

Get a sub material

#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | any |      Index of the submaterial

### getClassName() &rarr; string


### isReady(mesh) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |      The mesh with the multi material

### clone(name, cloneChildren) &rarr; [MultiMaterial](/classes/3.0/MultiMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      
optional | cloneChildren | boolean |    
### serialize() &rarr; any


