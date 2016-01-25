---
ID_PAGE: 25140
PG_TITLE: Light
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---

Lights are used to produce the diffuse and specular color received by each pixel.

This color is then used by materials to determine the final color of every pixel.

Babylon.js allows you to create and register as many lights as you want but beware because the [StandardMaterial](/classes/StandardMaterial) can handle only 4 simultaneous lights (the first four enabled lights of the lights list)

A tutorial about lights can be found [here](http://doc.babylonjs.com/tutorials/06._Lights)
##new [Light](/classes/Light)(name, scene)




Creates a new [Light](/classes/Light) object






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | scene | [Scene](/classes/Scene) | The scene to append the light
---

##Extends
 [Node](/classes/Node)
##Members

###diffuse : [Color3](/classes/Color3)





The color of the diffuse reflection of the light




###specular : [Color3](/classes/Color3)





The color of the specular reflection of the light




###intensity : number





Controls the global intensity of the light




###range : number








###includeOnlyWithLayerMask : number


###includedOnlyMeshes : [AbstractMesh](/classes/AbstractMesh)[]





Holds the meshes affected by this light




###excludedMeshes : [AbstractMesh](/classes/AbstractMesh)[]





Holds the meshes non affected by this light













###excludeWithLayerMask : number




##Methods

###getShadowGenerator() &rarr; [ShadowGenerator](/classes/ShadowGenerator)
Returns the [ShadowGenerator](/classes/ShadowGenerator) object which allows among other things, meshes to block light








###getAbsolutePosition() &rarr; [Vector3](/classes/Vector3)






###transferToEffect(effect, uniformName0, uniformName1) &rarr; void
Gives the light to position with the given effect with given position names







####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/Effect) | The given effect
optional | uniformName0 | string | The first uniform name
optional | uniformName1 | string | The second uniform name
---

###canAffectMesh(mesh) &rarr; boolean
Tests if the given mesh is affectable by this light







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/AbstractMesh) | The given [Mesh](/classes/Mesh)
---

###getWorldMatrix() &rarr; [Matrix](/classes/Matrix)
Returns the world matrix








###dispose() &rarr; void

