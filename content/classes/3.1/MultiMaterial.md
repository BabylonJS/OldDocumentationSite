---
ID_PAGE: 25215
PG_TITLE: MultiMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [MultiMaterial](/classes/3.1/MultiMaterial) extends [Material](/classes/3.1/Material)



## Constructor

## new [MultiMaterial](/classes/3.1/MultiMaterial)(name, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### subMaterials : [Material](/classes/3.1/Material)[]



## Methods

### getSubMaterial(index) &rarr; [Material](/classes/3.1/Material)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 

### getActiveTextures() &rarr; [BaseTexture](/classes/3.1/BaseTexture)[]


### getClassName() &rarr; string


### isReadyForSubMesh(mesh, subMesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | subMesh | [BaseSubMesh](/classes/3.1/BaseSubMesh) | 
optional | useInstances | boolean | 
### clone(name, cloneChildren) &rarr; [MultiMaterial](/classes/3.1/MultiMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
optional | cloneChildren | boolean | 
### serialize() &rarr; any


### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | 
optional | forceDisposeTextures | boolean | 
