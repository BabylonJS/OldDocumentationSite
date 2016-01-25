---
ID_PAGE: 25209
PG_TITLE: LensFlareSystem
PG_VERSION: 2.1
---

Create a lens Flare system
##new [LensFlareSystem](/classes/LensFlareSystem)(name, emitter, scene)




The lens Flare system






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the lens flare system
 | emitter | any | The Emitter of the lens flare system : it can be a camera, a light or a mesh.
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) where the lens flare system is.
---

##Members

###name : string





The name of the lens Flare system




###lensFlares : [LensFlare](/classes/LensFlare)[]





Lens flares array containing all lens flares




###borderLimit : number





Lens flare system border limit.




###meshesSelectionPredicate : (mesh: [Mesh](/classes/Mesh)) =&gt; boolean





Verify that a mesh can receive lens flares.




###isEnabled : boolean





Lens flare system is enabled















##Methods

###getScene() &rarr; [Scene](/classes/Scene)
Get the scene where the lens flare system is.








###getEmitter() &rarr; any
Get the emitter








###getEmitterPosition() &rarr; [Vector3](/classes/Vector3)
Get the emitter position. Returns its absolute position if the emitter has an absolute position.








###computeEffectivePosition(globalViewport) &rarr; boolean
Compute the effective position







####Parameters
 | Name | Type | Description
---|---|---|---
 | globalViewport | [Viewport](/classes/Viewport) | The global viewport
---

###render() &rarr; boolean
Render the lens flare system








###dispose() &rarr; void

