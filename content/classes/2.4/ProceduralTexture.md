---
ID_PAGE: 25227
PG_TITLE: ProceduralTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
    - ProceduralTexture
---
## Description

class [ProceduralTexture](/classes/2.4/ProceduralTexture) extends [Texture](/classes/2.4/Texture)



## Constructor

## new [ProceduralTexture](/classes/2.4/ProceduralTexture)(name, size, fragment, scene, fallbackTexture, generateMipMaps, isCube)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | size | any |    
 | fragment | any |    
 | scene | [Scene](/classes/2.4/Scene) |    
optional | fallbackTexture | [Texture](/classes/2.4/Texture) |    
optional | generateMipMaps | boolean |    
## Members

### isCube : boolean



### isEnabled : boolean



### onGenerated : () =&gt; void



### refreshRate : number



## Methods

### reset() &rarr; void


### isReady() &rarr; boolean


### resetRefreshCounter() &rarr; void


### setFragment(fragment) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | fragment | any |    

### getRenderSize() &rarr; number


### resize(size, generateMipMaps) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | any |    
 | generateMipMaps | any |    
### setTexture(name, texture) &rarr; [ProceduralTexture](/classes/2.4/ProceduralTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | texture | [Texture](/classes/2.4/Texture) |    
### setFloat(name, value) &rarr; [ProceduralTexture](/classes/2.4/ProceduralTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | value | number |    
### setFloats(name, value) &rarr; [ProceduralTexture](/classes/2.4/ProceduralTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | value | number[] |    
### setColor3(name, value) &rarr; [ProceduralTexture](/classes/2.4/ProceduralTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | value | [Color3](/classes/2.4/Color3) |    
### setColor4(name, value) &rarr; [ProceduralTexture](/classes/2.4/ProceduralTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | value | [Color4](/classes/2.4/Color4) |    
### setVector2(name, value) &rarr; [ProceduralTexture](/classes/2.4/ProceduralTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | value | [Vector2](/classes/2.4/Vector2) |    
### setVector3(name, value) &rarr; [ProceduralTexture](/classes/2.4/ProceduralTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | value | [Vector3](/classes/2.4/Vector3) |    
### setMatrix(name, value) &rarr; [ProceduralTexture](/classes/2.4/ProceduralTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    
 | value | [Matrix](/classes/2.4/Matrix) |    
### render(useCameraPostProcess) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean |    

### clone() &rarr; [ProceduralTexture](/classes/2.4/ProceduralTexture)


### dispose() &rarr; void


