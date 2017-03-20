---
TAGS:
---
## Description

class [Render2DContext](/classes/2.0/Render2DContext)



## Constructor

## new [Render2DContext](/classes/2.0/Render2DContext)(renderMode)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderMode | number | 

## Members

### renderMode : number

Define which render Mode should be used to render the primitive: one of [Render2DContext](/classes/2.0/Render2DContext).RenderModeXxxx property

### useInstancing : boolean

If true hardware instancing is supported and must be used for the rendering. The groupInfoPartData._partBuffer must be used.

If false rendering on a per primitive basis must be made. The following properties must be used

 - groupInfoPartData._partData: contains the primitive instances data to render

 - partDataStartIndex: the index into instanceArrayData of the first instance to render.

 - partDataCount: the number of primitive to render

### instancedBuffers : WebGLBuffer[]

If specified, must take precedence from the groupInfoPartData. partIndex is the same as groupInfoPardData

### instancesCount : number

To use when instancedBuffers is specified, gives the count of instances to draw

### groupInfoPartData : [GroupInfoPartData](/classes/2.0/GroupInfoPartData)[]

Contains the data related to the primitives instances to render

### partDataStartIndex : number

The index into groupInfoPartData._partData of the first primitive to render. This is an index, not an offset: it represent the nth primitive which is the first to render.

### partDataEndIndex : number

The exclusive end index, you have to render the primitive instances until you reach this one, but don't render this one!

### static RenderModeOpaque : number

The set of primitives to render is opaque.

This is the first rendering pass. All Opaque primitives are rendered. Depth Compare and Write are both enabled.

### static RenderModeAlphaTest : number

The set of primitives to render is using Alpha Test (aka masking).

Alpha Blend is enabled, the AlphaMode must be manually set, the render occurs after the RenderModeOpaque and is depth independent (i.e. primitives are not sorted by depth). Depth Compare and Write are both enabled.

### static RenderModeTransparent : number

The set of primitives to render is transparent.

Alpha Blend is enabled, the AlphaMode must be manually set, the render occurs after the RenderModeAlphaTest and is depth dependent (i.e. primitives are stored by depth and rendered back to front). Depth Compare is on, but Depth write is Off.

