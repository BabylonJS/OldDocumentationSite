The Node Material is a new material introduced with Babylon.js v4.1. It lets you create a material based on custom shaders but without having to deal with shader code.
All the shader creation will be done using either an UI (The Node Material Editor) or by creating and connecting nodes (the Node Material blocks).

## Creating a Node Material using code

### Initial steps
To start using the Node Material, you just need to instanciate one:

```
var nodeMaterial = new BABYLON.NodeMaterial("node material", scene, { emitComments: true });
```

Please note that the third parameter will contain optional values that will let you configure how the material will build its shader:

- `emitComments`: Set this value to true if you want the blocks to emit comments in the shader code

### Adding blocks

Blocks can be added by just instanciating them:

```
var morphTargets = new BABYLON.MorphTargetsBlock("morphTargets");
```

For input blocks, you can then define either their value or the source of the value:

```
var timeInput = new BABYLON.InputBlock("time");
timeInput.value = 0;
```

or 

```
var viewProjectionInput = new BABYLON.InputBlock("viewProjection");
viewProjectionInput.setAsWellKnownValue(BABYLON.NodeMaterialWellKnownValues.ViewProjection);
```

Well-known values can be:
* BABYLON.NodeMaterialWellKnownValues.World
* BABYLON.NodeMaterialWellKnownValues.View
* BABYLON.NodeMaterialWellKnownValues.WorldView
* BABYLON.NodeMaterialWellKnownValues.Projection
* BABYLON.NodeMaterialWellKnownValues.ViewProjection
* BABYLON.NodeMaterialWellKnownValues.WorldViewProjection
* BABYLON.NodeMaterialWellKnownValues.CameraPosition
* BABYLON.NodeMaterialWellKnownValues.FogColor

Input blocks can also take their value from a mesh attribute:

```
let positionInput = new BABYLON.InputBlock("position");
positionInput.setAsAttribute("position");
```

Attributes can be:
* position
* normal
* tangent
* uv
* uv2
* matricesIndices
* matricesWeights

### Connecting blocks

By default calling `block.connectTo(otherBlock)` will try to establish a connection by picking an output from the first block and connect it to an available input in the second one:

```
var positionInput = new BABYLON.InputBlock("position");
positionInput.setAsAttribute("position");

var worldInput = new BABYLON.InputBlock("world");
worldInput.setAsWellKnownValue(BABYLON.NodeMaterialWellKnownValues.World);

var worldPos = new BABYLON.TransformBlock("worldPos");
positionInput.connectTo(worldPos);
worldInput.connectTo(worldPos);
```

If you do not want to use the automatic connection you can then pick the output and the input you want to connect directly:

```
worldInput.output.connectTo(boneBlock.world);
```

You can check if two connection points can connect with 

```
if (worldInput.output.canConnectTo(boneBlock.world)) {
    ...
}
```

The system will throw an exception if you try to connect two incompatible connection points.

When connected, two connection points can be disconnect with:

```
worldInput.output.disconnectFrom(boneBlock.world);
```

### List of available blocks

By default, the node material provides the following blocks:

* Conversion:
  * `ColorMergerBlock`: Block used to create a Color3/4 out of individual inputs (one for each component)
  * `ColorSplitterBlock`: Block used to expand a Color3/4 into 4 outputs (one for each component)
  * `VectorMergerBlock`: Block used to create a Vector2/3/4 out of individual inputs (one for each component)
  * `VectorSplitterBlock`: Block used to expand a Vector3/4 into 4 outputs (one for each component)

* Maths:
  * `AddBlock`: Block used to add 2 vectors
  * `ClampBlock`: Block to clamp a float between a minimum and a maximum
  * `CrossBlock`: Block used to do a cross product between 2 vectors
  * `DotBlock`: Block used to do a dot product between 2 vectors
  * `LerpBlock`: Block used to do a mix between 2 values (using a gradient)
  * `MultiplyBlock`: Block used to multiply 2 vectors
  * `NormalizeBlock`: Block used to normalize a vector
  * `RemapBlock`: Block used to remap a float from a range to a new one
  * `ScaleBlock`: Block used to scale a vector by a float
  * `TransformBlock`: Block used to transform a vector (2, 3 or 4) with a matrix
  * `TrigonometryBlock`: Block used to apply trigonometry operation to floats

* Advanced:
  * `AlphaTestBlock`: Block used to add an alpha test in the fragment shader
  * `BonesBlock`: Block used to add support for vertex skinning (bones)
  * `FogBlock`: Block used to add support for scene fog
  * `FresnelBlock`: Block used to add a frensel effect
  * `ImageProcessingBlock`: Block used to add image processing support to fragment shader
  * `InstancesBlock`: Block used to add support for instances
  * `LightBlock`: Block used to add light in the fragment shader
  * `MorphTargetsBlock`: Block used to add morph targets support to vertex shader
  * `ReflectionTextureBlock`: Block used to read a reflection texture from a sampler
  * `TextureBlock`: Block used to read a texture from a sampler

* Inputs:
  * `InputBlock`: Block used to define an input value (uniform or attribute)

* Outputs:
  * `VertexOutputBlock`: Block used to output the vertex position. You must have one per Node Material
  * `FragmentOutputBlock`: Block used to output the fragment color. You must have one per Node Material

### Building the Node Material

Once setup, you can ask the Node Material to build its internal shaders (vertex and fragment) by calling `nodeMaterial.build(true)`. You can set the boolean parameter to true to get a log of the final shaders on the console.

The build function will throw an exception if the shaders cannot be compiled:

```
try {
    nodeMaterial.build(true);
} catch (err) {
    console.log("Unable to compile because " + err);
}

```

Once successfully built, you can use the Node Material like any other materials:

```
myMesh.material = nodeMaterial;
```

### Example

Here is one of the simplest code using the Node Material:
```
var nodeMaterial = new BABYLON.NodeMaterial("node material", scene, { emitComments: true });
var positionInput = new BABYLON.InputBlock("position");
positionInput.setAsAttribute("position");

var worldInput = new BABYLON.InputBlock("world");
worldInput.setAsWellKnownValue(BABYLON.NodeMaterialWellKnownValues.World);

var worldPos = new BABYLON.TransformBlock("worldPos");
positionInput.connectTo(worldPos);
worldInput.connectTo(worldPos);

var viewProjectionInput = new BABYLON.InputBlock("viewProjection");
viewProjectionInput.setAsWellKnownValue(BABYLON.NodeMaterialWellKnownValues.ViewProjection);

var worldPosdMultipliedByViewProjection = new BABYLON.TransformBlock("worldPos * viewProjectionTransform");
worldPos.connectTo(worldPosdMultipliedByViewProjection);
viewProjectionInput.connectTo(worldPosdMultipliedByViewProjection);

var vertexOutput = new BABYLON.VertexOutputBlock("vertexOutput");
worldPosdMultipliedByViewProjection.connectTo(vertexOutput);

// Pixel
var pixelColor = new BABYLON.InputBlock("color");
pixelColor.value = new BABYLON.Color4(0.8, 0.8, 0.8, 1);

var fragmentOutput = new BABYLON.FragmentOutputBlock("fragmentOutput");
pixelColor.connectTo(fragmentOutput);

// Add to nodes
nodeMaterial.addOutputNode(vertexOutput);
nodeMaterial.addOutputNode(fragmentOutput);
```

Please note that this code is equivalent to:
```
var nodeMaterial = new BABYLON.NodeMaterial("node material", scene, { emitComments: true });
nodeMaterial.setToDefault();
```

## Using the Node Material Editor

The Node Material Editor can be used to visually edit / build your Node Material.

To invoke the editor you can call `nodematerial.edit()` but this code must be called inside a user interaction (like a click event). You can also call it through the Inspector:

```
scene.debugLayer.show();
scene.debugLayer.select(nodeMaterial);
```

When selected in the Inspector, youc an find an edit button in the Node Material property pane.

## Loading from a file saved from the Node Material Editor

You can directly setup a Node Material from a file saved from the Node Material Editor.

Here is the code to use:

```
nodeMaterial.loadAsync("file-url.json").then(() => {
    nodeMaterial.build(true);
});
```
