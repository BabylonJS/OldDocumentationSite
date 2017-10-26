---
TAGS:
---
## Description

class [ReflectionProbe](/classes/3.1/ReflectionProbe)



## Constructor

## new [ReflectionProbe](/classes/3.1/ReflectionProbe)(name, size, scene, generateMipMaps)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | number | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### name : string



### invertYAxis : boolean



### position : [Vector3](/classes/3.1/Vector3)



### samples : number



### refreshRate : number



### cubeTexture : [RenderTargetTexture](/classes/3.1/RenderTargetTexture)



### renderList : [AbstractMesh](/classes/3.1/AbstractMesh)[]



## Methods

### getScene() &rarr; [Scene](/classes/3.1/Scene)


### attachToMesh(mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil) &rarr; void

Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index
 | autoClearDepthStencil | boolean |  Automatically clears depth and stencil between groups if true.
### dispose() &rarr; void


