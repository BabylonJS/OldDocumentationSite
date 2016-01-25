---
ID_PAGE: 25280
PG_TITLE: BlackAndWhitePostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
##Description

class [BlackAndWhitePostProcess](/classes/2.2/BlackAndWhitePostProcess) extends [PostProcess](/classes/2.2/PostProcess)

Builtin postprocess applying black and white effect

##Constructor

##new [BlackAndWhitePostProcess](/classes/2.2/BlackAndWhitePostProcess)(name, ratio, camera, samplingMode, engine, reusable)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The postprocess name
 | ratio | number |  The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/2.2/Camera) |  The scene camera linked to this post process
optional | samplingMode | number |  [Texture](/classes/2.2/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.2/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.2/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.2/Engine) |  The engine to attach the postprocess.
