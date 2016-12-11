---
TAGS:
---
## Description

class [HighlightLayer](/classes/2.5/HighlightLayer)

The highlight layer Helps adding a glow effect around a mesh.

Once instantiated in a scene, simply use the pushMesh or removeMesh method to add or remove

glowy meshes to your scene.

!!! THIS REQUIRES AN ACTIVE STENCIL BUFFER ON THE CANVAS !!!

## Constructor

## new [HighlightLayer](/classes/2.5/HighlightLayer)(name, scene, options)

Instantiates a new highlight [Layer](/classes/2.5/Layer) and references it to the scene..

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The name of the layer
 | scene | [Scene](/classes/2.5/Scene) |  The scene to use the layer in
optional | options | IHighlightLayerOptions |  Sets of none mandatory options to use with the layer (see IHighlightLayerOptions for more information)
## Members

### static neutralColor : [Color4](/classes/2.5/Color4)

The neutral color used during the preparation of the glow effect.

This is black by default as the blend operation is a blend operation.

### static glowingMeshStencilReference : number

Stencil value used for glowing meshes.

### static normalMeshStencilReference : number

Stencil value used for the other meshes in the scene.

### innerGlow : boolean

Specifies whether or not the inner glow is ACTIVE in the layer.

### outerGlow : boolean

Specifies whether or not the outer glow is ACTIVE in the layer.

### isEnabled : boolean

Specifies wether the highlight layer is enabled or not.

### blurHorizontalSize : number

Gets the horizontal size of the blur.

Specifies the horizontal size of the blur.

### blurVerticalSize : number

Gets the vertical size of the blur.

Specifies the vertical size of the blur.

### camera : [Camera](/classes/2.5/Camera)

Gets the camera attached to the layer.

### onDisposeObservable : [Observable](/classes/2.5/Observable)&lt;[HighlightLayer](/classes/2.5/HighlightLayer)&gt;

An event triggered when the highlight layer has been disposed.

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onBeforeRenderMainTextureObservable : [Observable](/classes/2.5/Observable)&lt;[HighlightLayer](/classes/2.5/HighlightLayer)&gt;

An event triggered when the highlight layer is about rendering the main texture with the glowy parts.

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onBeforeBlurObservable : [Observable](/classes/2.5/Observable)&lt;[HighlightLayer](/classes/2.5/HighlightLayer)&gt;

An event triggered when the highlight layer is being blurred.

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onAfterBlurObservable : [Observable](/classes/2.5/Observable)&lt;[HighlightLayer](/classes/2.5/HighlightLayer)&gt;

An event triggered when the highlight layer has been blurred.

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onBeforeComposeObservable : [Observable](/classes/2.5/Observable)&lt;[HighlightLayer](/classes/2.5/HighlightLayer)&gt;

An event triggered when the glowing blurred texture is being merged in the scene.

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onAfterComposeObservable : [Observable](/classes/2.5/Observable)&lt;[HighlightLayer](/classes/2.5/HighlightLayer)&gt;

An event triggered when the glowing blurred texture has been merged in the scene.

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onSizeChangedObservable : [Observable](/classes/2.5/Observable)&lt;[HighlightLayer](/classes/2.5/HighlightLayer)&gt;

An event triggered when the highlight layer changes its size.

@type {BABYLON.[Observable](/classes/2.5/Observable)}

## Methods

### render() &rarr; void

Renders the glowing part of the scene by blending the blurred glowing meshes on top of the rendered scene.
### addExcludedMesh(mesh) &rarr; void

Add a mesh in the exclusion list to prevent it to impact or being impacted by the highlight layer.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.5/Mesh) |  The mesh to exclude from the highlight layer

### removeExcludedMesh(mesh) &rarr; void

Remove a mesh from the exclusion list to let it impact or being impacted by the highlight layer.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.5/Mesh) |  The mesh to highlight

### addMesh(mesh, color, glowEmissiveOnly) &rarr; void

Add a mesh in the highlight layer in order to make it glow with the chosen color.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.5/Mesh) |  The mesh to highlight
 | color | [Color3](/classes/2.5/Color3) |  The color of the highlight
optional | glowEmissiveOnly | boolean |  Extract the glow from the emissive texture
### removeMesh(mesh) &rarr; void

Remove a mesh from the highlight layer in order to make it stop glowing.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.5/Mesh) |  The mesh to highlight

### shouldRender() &rarr; boolean

Returns true if the layer contains information to display, otherwise false.
### dispose() &rarr; void

Dispose the highlight layer and free resources.
