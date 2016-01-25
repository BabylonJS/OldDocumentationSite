---
ID_PAGE: 25294
PG_TITLE: PostProcessRenderEffect
PG_VERSION: 2.1
TAGS:
    - PostProcess
---

A render effect is a smart postprocess which can manage its own instances itself.

A tutorial about the render pipeline can be found [here](http://doc.babylonjs.com/tutorials/How_to_use_PostProcessRenderPipeline)
##new [PostProcessRenderEffect](/classes/PostProcessRenderEffect)(engine, name, getPostProcess, singleInstance)




Builds a [PostProcessRenderEffect](/classes/PostProcessRenderEffect) object






####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/Engine) | The used engine
 | name | string | The name of the postprocess rendrer effect
 | getPostProcess | () =&gt; [PostProcess](/classes/PostProcess) | The function has to return a new instance of the postprocess which will be used
optional | singleInstance | boolean | default : true
---

##Members

###applyParameters : (postProcess: [PostProcess](/classes/PostProcess)) =&gt; void





Applies given postProcess object to the rendrer effect















##Methods

###addPass(renderPass) &rarr; void
Adds a new pass to the effect







####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](/classes/PostProcessRenderPass) | The pass to add
---

###removePass(renderPass) &rarr; void
Removes a pass from the effect







####Parameters
 | Name | Type | Description
---|---|---|---
 | renderPass | [PostProcessRenderPass](/classes/PostProcessRenderPass) | The pass to remove
---

###addRenderEffectAsPass(renderEffect) &rarr; void
Adds a render effect as a pass







####Parameters
 | Name | Type | Description
---|---|---|---
 | renderEffect | [PostProcessRenderEffect](/classes/PostProcessRenderEffect) | The effect to add
---

###getPass(passName) &rarr; void
Returns a pass using its name







####Parameters
 | Name | Type | Description
---|---|---|---
 | passName | string | The given name
---

###emptyPasses() &rarr; void
Delete all passes








###getPostProcess(camera) &rarr; [PostProcess](/classes/PostProcess)

####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/Camera) | default : this camera
---
