---
ID_PAGE: 25227
PG_TITLE: ProceduralTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
    - ProceduralTexture
---
##new [ProceduralTexture](/classes/ProceduralTexture)(name, size, fragment, scene, fallbackTexture, generateMipMaps)







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | any | 
 | fragment | any | 
 | scene | [Scene](/classes/Scene) | 
optional | fallbackTexture | [Texture](/classes/Texture) | 
optional | generateMipMaps | boolean | 
---

##Extends
 [Texture](/classes/Texture)
##Members

###refreshRate : number














##Methods

###reset() &rarr; void






###isReady() &rarr; boolean






###resetRefreshCounter() &rarr; void






###setFragment(fragment) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
 | fragment | any | 
---

###getRenderSize() &rarr; number






###resize(size, generateMipMaps) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
 | size | any | 
 | generateMipMaps | any | 
---

###setTexture(name, texture) &rarr; [ProceduralTexture](/classes/ProceduralTexture)





####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | texture | [Texture](/classes/Texture) | 
---

###setFloat(name, value) &rarr; [ProceduralTexture](/classes/ProceduralTexture)





####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | number | 
---

###setFloats(name, value) &rarr; [ProceduralTexture](/classes/ProceduralTexture)





####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | number[] | 
---

###setColor3(name, value) &rarr; [ProceduralTexture](/classes/ProceduralTexture)





####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Color3](/classes/Color3) | 
---

###setColor4(name, value) &rarr; [ProceduralTexture](/classes/ProceduralTexture)





####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Color4](/classes/Color4) | 
---

###setVector2(name, value) &rarr; [ProceduralTexture](/classes/ProceduralTexture)





####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector2](/classes/Vector2) | 
---

###setVector3(name, value) &rarr; [ProceduralTexture](/classes/ProceduralTexture)





####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector3](/classes/Vector3) | 
---

###setMatrix(name, value) &rarr; [ProceduralTexture](/classes/ProceduralTexture)





####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Matrix](/classes/Matrix) | 
---

###render(useCameraPostProcess) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean | 
---

###clone() &rarr; [ProceduralTexture](/classes/ProceduralTexture)






###dispose() &rarr; void

