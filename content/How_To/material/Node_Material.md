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

### Adding and connecting blocks\

[WIP]

### List of available blocks

[WIP]

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

[WIP]