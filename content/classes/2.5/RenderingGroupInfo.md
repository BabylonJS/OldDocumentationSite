---
TAGS:
---
## Description

class [RenderingGroupInfo](/classes/2.5/RenderingGroupInfo)

This class is used by the onRenderingGroupObservable

## Members

### scene : [Scene](/classes/2.5/Scene)

The [Scene](/classes/2.5/Scene) that being rendered

### camera : [Camera](/classes/2.5/Camera)

The camera currently used for the rendering pass

### renderingGroupId : number

The ID of the renderingGroup being processed

### renderStage : number

The rendering stage, can be either STAGE_PRECLEAR, STAGE_PREOPAQUE, STAGE_PRETRANSPARENT, STAGE_POSTTRANSPARENT

### static STAGE_PRECLEAR : number

Stage corresponding to the very first hook in the renderingGroup phase: before the render buffer may be cleared

This stage will be fired no matter what

### static STAGE_PREOPAQUE : number

Called before opaque object are rendered.

This stage will be fired only if there's 3D Opaque content to render

### static STAGE_PRETRANSPARENT : number

Called after the opaque objects are rendered and before the transparent ones

This stage will be fired only if there's 3D transparent content to render

### static STAGE_POSTTRANSPARENT : number

Called after the transparent object are rendered, last hook of the renderingGroup phase

This stage will be fired no matter what

