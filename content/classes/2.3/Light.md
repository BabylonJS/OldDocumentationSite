---
ID_PAGE: 25140
PG_TITLE: Light
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [Light](/classes/2.3/Light) extends [Node](/classes/2.3/Node)



## Constructor

##  new [Light](/classes/2.3/Light)(name, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The name of the object
 | scene | [Scene](/classes/2.3/Scene) |   The scene to append the light
## Members

### diffuse : [Color3](/classes/2.3/Color3)



### specular : [Color3](/classes/2.3/Color3)



### intensity : number



### range : number



### includeOnlyWithLayerMask : number



### includedOnlyMeshes : [AbstractMesh](/classes/2.3/AbstractMesh)[]



### excludedMeshes : [AbstractMesh](/classes/2.3/AbstractMesh)[]



### excludeWithLayerMask : number



## Methods

### getShadowGenerator() &rarr; [ShadowGenerator](/classes/2.3/ShadowGenerator)


### getAbsolutePosition() &rarr; [Vector3](/classes/2.3/Vector3)


### transferToEffect(effect, uniformName0, uniformName1) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.3/Effect) |   The given effect
optional | uniformName0 | string |   The first uniform name
optional | uniformName1 | string |   The second uniform name
### canAffectMesh(mesh) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   The given [Mesh](/classes/2.3/Mesh)

### getWorldMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### dispose() &rarr; void


### serialize() &rarr; any


### static  Parse(parsedLight, scene) &rarr; [Light](/classes/2.3/Light)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedLight | any | 
 | scene | [Scene](/classes/2.3/Scene) |   The scene to append the light
