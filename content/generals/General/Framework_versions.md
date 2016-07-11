**Babylon.js** comes with different versions that you can find in the /dist folder of the [repository](https://github.com/BabylonJS/Babylon.js/tree/master/dist):

## CDN

Babylon.js files can be found on our CDN:

* http://cdn.babylonjs.com/2-4/babylon.js 
* http://cdn.babylonjs.com/2-4/babylon.max.js 
* http://cdn.babylonjs.com/2-4/babylon.noworker.js 


## Unminified version: *babylon.max.js*

This version is aimed to be used for debugging purpose only. It is not minified so you can easy use it to debug. 
Please do not use it in production environment as the file size is really important (more than 1.5 MB).

## Minified version: *babylon.js*

This is the complete version of babylon.js. File size is less than 250KB when gizipped. This version is aimed for production.

## No worker version: *babylon.noworker.js*

This version of babylon.js does not include web worker support for collision. File size is less than 200KB when gizipped. This version is aimed for production.

## Core version: *babylon.core.js* (introduced in 2.3)

The core version is based on the "no worker" version and it is here to keep the file to a minimal size (< 150 KB gzipped).

The following files are not included in the core version:

* Math/babylon.math.SIMD.js
* Tools/babylon.rectPackingMap.js
* Tools/babylon.dynamicFloatArray.js
* Materials/Textures/babylon.fontTexture.js
* Materials/Textures/babylon.mapTexture.js
* Canvas2d/babylon.bounding2d.js
* Canvas2d/babylon.canvas2dLayoutEngine.js
* Canvas2d/babylon.brushes2d.js
* Canvas2d/babylon.smartPropertyPrim.js
* Canvas2d/babylon.prim2dBase.js
* Canvas2d/babylon.modelRenderCache.js
* Canvas2d/babylon.renderablePrim2d.js
* Canvas2d/babylon.shape2d.js
* Canvas2d/babylon.group2d.js
* Canvas2d/babylon.rectangle2d.js
* Canvas2d/babylon.ellipse2d.js
* Canvas2d/babylon.sprite2d.js
* Canvas2d/babylon.text2d.js
* Canvas2d/babylon.lines2d.js
* Canvas2d/babylon.canvas2d.js
* Canvas2d/babylon.worldSpaceCanvas2dNode.js
* Materials/babylon.shaderMaterial.js
* Tools/babylon.tools.dds.js
* Physics/Plugins/babylon.cannonJSPlugin.js
* Physics/Plugins/babylon.oimoJSPlugin.js
* PostProcess/babylon.displayPassPostProcess.js
* Mesh/babylon.meshSimplification.js
* Tools/babylon.sceneSerializer.js
* Tools/babylon.earcut.js
* Mesh/babylon.csg.js
* PostProcess/babylon.vrDistortionCorrectionPostProcess.js
* Tools/babylon.virtualJoystick.js
* Cameras/babylon.virtualJoysticksCamera.js      
* Cameras/Inputs/babylon.freecamera.input.virtualjoystick.js
* PostProcess/babylon.anaglyphPostProcess.js
* Rendering/babylon.outlineRenderer.js
* Tools/babylon.assetsManager.js
* Cameras/VR/babylon.vrCameraMetrics.js
* Cameras/VR/babylon.vrDeviceOrientationCamera.js
* Cameras/VR/babylon.webVRCamera.js
* Tools/babylon.sceneOptimizer.js
* Mesh/babylon.meshLODLevel.js
* Materials/Textures/babylon.rawTexture.js
* Mesh/babylon.polygonMesh.js
* Culling/Octrees/babylon.octree.js
* Culling/Octrees/babylon.octreeBlock.js
* PostProcess/babylon.blurPostProcess.js
* PostProcess/babylon.refractionPostProcess.js
* PostProcess/babylon.blackAndWhitePostProcess.js
* PostProcess/babylon.convolutionPostProcess.js
* PostProcess/babylon.filterPostProcess.js
* PostProcess/babylon.fxaaPostProcess.js
* PostProcess/babylon.stereoscopicInterlacePostProcess.js
* LensFlare/babylon.lensFlare.js
* LensFlare/babylon.lensFlareSystem.js
* Cameras/babylon.deviceOrientationCamera.js
* Cameras/babylon.universalCamera.js
* Tools/babylon.gamepads.js
* Cameras/babylon.gamepadCamera.js
* Audio/babylon.analyser.js
* Rendering/babylon.depthRenderer.js
* PostProcess/babylon.ssaoRenderingPipeline.js
* PostProcess/babylon.volumetricLightScatteringPostProcess.js
* PostProcess/babylon.lensRenderingPipeline.js
* PostProcess/babylon.colorCorrectionPostProcess.js
* Cameras/babylon.stereoscopicCameras.js
* PostProcess/babylon.hdrRenderingPipeline.js
* Rendering/babylon.edgesRenderer.js
* PostProcess/babylon.tonemapPostProcess.js
* Probes/babylon.reflectionProbe.js
* Particles/babylon.solidParticle.js
* Particles/babylon.solidParticleSystem.js
* Tools/HDR/babylon.tools.cubemapToSphericalPolynomial.js
* Tools/HDR/babylon.tools.panoramaToCubemap.js
* Tools/HDR/babylon.tools.hdr.js
* Tools/HDR/babylon.tools.pmremgenerator.js
* Materials/Textures/babylon.hdrCubeTexture.js
* Debug/babylon.skeletonViewer.js
* Materials/Textures/babylon.colorGradingTexture.js
* Materials/babylon.colorCurves.js
* Materials/babylon.pbrMaterial.js      
* Debug/babylon.debugLayer.js"
