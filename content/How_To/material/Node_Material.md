The Node Material is a new material introduced with Babylon.js v4.1. It lets you create a material based on custom shaders but without having to deal with shader code.
All the shader creation will be done using either an UI (the Node Material Editor) or by creating and connecting nodes (the Node Material blocks).

## Creating a Node Material using code

### Initial steps
To start using the Node Material, you just need to instantiating one:

```
var nodeMaterial = new BABYLON.NodeMaterial("node material", scene, { emitComments: true });
```

Please note that the third parameter will contain optional values that will let you configure how the material will build its shader:

- `emitComments`: Set this value to true if you want the blocks to emit comments in the shader code

### Adding blocks

Blocks can be added by just instantiating them:

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
viewProjectionInput.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);
```

System values can be:
* BABYLON.NodeMaterialSystemValues.World
* BABYLON.NodeMaterialSystemValues.View
* BABYLON.NodeMaterialSystemValues.WorldView
* BABYLON.NodeMaterialSystemValues.Projection
* BABYLON.NodeMaterialSystemValues.ViewProjection
* BABYLON.NodeMaterialSystemValues.WorldViewProjection
* BABYLON.NodeMaterialSystemValues.CameraPosition
* BABYLON.NodeMaterialSystemValues.FogColor
* BABYLON.NodeMaterialSystemValues.DeltaTime

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
* matricesIndicesExtra
* matricesWeightsExtra

When you manually set the value of an InputNode, you can flag it as `node.isConstant` to indicate that the value will not be dynamically updated and thus the node material will be able to optimize the block by not generating an uniform for this value.

The following functions will let you get information about your InputNode:

* `isSystemValue`
* `isAttribute`
* `isUniform`
* `isConstant`

When an InputNode is an uniform (eg. a manual value that will be sent to the shader) and not a constant, you can set `inputNode.visibleInInspector` to true so users will be able to visually control the value of the node using Babylon.js Inspector.

You can even csutomize the look and feel of the Inspector UI by defining `inputNode.min` and `inputNode.max` to get a slider instead of an input text box.

### Connecting blocks

By default calling `block.connectTo(otherBlock)` will try to establish a connection by picking an output from the first block and connect it to an available input in the second one:

```
var positionInput = new BABYLON.InputBlock("position");
positionInput.setAsAttribute("position");

var worldInput = new BABYLON.InputBlock("world");
worldInput.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

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

When connected, two connection points can be disconnected with:

```
worldInput.output.disconnectFrom(boneBlock.world);
```

### Gettings blocks
Once a graph is built inside a NodeMaterial, you can use the following API to get a specific node by name:

```
let block = nodeMaterial.getBlockByName("MyBlock");
```

You can also get a block using a predicate:

```
let block = nodeMaterial.getBlockByPredicate((b) => b.getClassName() === "AddBlock" && b.name === "foo");
```

Or you can also use this API to get an InputNode and use it to setup its value if the node is set manual value:

```
let block = nodeMaterial.getInputBlockByPredicate((b) => b.name === "foo");
block.value = 10;
```

You can access the list of InputBlocks with:
```
nodeMaterial.getInputBlocks();
```

Or you can get all blocks registered with a node material with:
```
nodeMaterial.attachedBlocks
```

### List of available blocks

By default, the node material provides the following blocks:

* Animation:
  * `Bones`: Provides a world matrix for each vertex, based on skeletal (bone/joint) animation. mesh.matricesIndices and mesh.matricesWeights are the vertex to bone assignments and weighting, and assume no more than 4 bones influencing any given vertex. If a vertex is influenced by more than 4 bones, then mesh.matricesIndicesExtra and mesh.matricesWeightsExtra can be used for up to 8 bones of influence per vertex.
    * Inputs: 
      * matricesIndices: Vector4
      * matricesWeights: Vector4
      * matricesIndicesExtra: Vector4
      * matricesWeightsExtra: Vector4
      * world: Matrix
    * Outputs: 
      * output: Matrix

  * `MorphTargets`: Provides the final positions, normals, tangents, and uvs based on morph targets in a mesh.
    * Inputs: 
      * position: Vector3
      * normal: Vector3
      * tangent: Vector3
      * uv: Vector2
    * Outputs:
      * positionOutput: Vector3
      * normalOutput: Vector3
      * tangentOutput: Vetor3
      * uvOutput: Vector2

* Basic Math:
  * `Add`: Adds the left and right inputs together. Left and right inputs have to be of the same type.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Distance`: Provides a distance vector based on the left and right input vectors. 
    * Inputs: 
      * left: Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Divide`: Divides the left input by the right input
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Length`: Outputs the length of an input vector.
    * Inputs: 
      * left: Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Max`: Outputs the largest value between the left and right inputs.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Min`: Outputs the smallest value between the left and right inputs.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Multiply`: Multiplies the left and right inputs together. 
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Negate`: Multiplies the input by -1.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `OneMinus`: Subtracts the input value from 1 (1 - input).
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `RandomNumber`: Provides a random number based on an input seed.
    * Inputs: 
      * seed: Vector2
    * Output: 
      * output: Float

  * `Reciprocal`: Outputs the reciprocal value(s) vased on the input value(s).
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Scale`: Multiplies the input value(s) by the factor. 
    * Inputs: 
      * Input: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * Factor: Float
    * Output: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Subtract`: Subtracts the right input from the left input.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

* Color Management:
  * `Posterize`: Reduces the number of colors in an image to the value of input steps.
    * Inputs: 
      * value: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * steps: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `ReplaceColor`: Replaces a reference color in input value with a different replacement color. Distance is the tolerance variation of the color.
    * Inputs: 
      * value: Vector2, Vector3, Vector4, Color3, or Color4. 
      * reference: Vector2, Vector3, Vector4, Color3, or Color4. 
      * distance: Float
      * replacement: Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

* Conversion:
  * `ColorMerger`: Combines individual color channels into color Vectors.
    * Inputs: 
      * r: Float
      * g: Float
      * b: Float
      * a: Float
    * Outputs:
      * rgba: Color4
      * rgb: Color3

  * `ColorSplitter`: Separates color Vectors into individual color channels.
    * Inputs:
      * rgba: Color4
      * rgb: Color3
    * Outputs: 
      * rgb: Color3
      * r: Float
      * g: Float
      * b: Float
      * a: Float

  * `VectorMerger`: Combines up to 4 input values into Vectors.
    * Inputs: 
      * x: Float
      * y: Float
      * z: Float
      * w: Float
    * Outputs:
      * xyzw: Vector4
      * xyz: Vector3
      * xy: Vector2

  * `VectorSplitter`: Separates Vectors into individual elements.
    * Inputs:
      * xyzw: Vector4
      * xyz: Vector3
      * xy: Vector2
    * Outputs: 
      * xyz: Vector3
      * xy: Vector2
      * x: Float
      * y: Float
      * z: Float
      * w: Float

* Inputs:
  * `Color3`: A Vector3 representing combined color values (red, green, and blue).
    * Output: 
      * output: Color3

  * `Color4`:A Vector4 representing combined color and alpha values (red, green, blue, and alpha).
    * Output: 
      * output: Color4

  * `DeltaTime`: A Float representing the time value that's passed since the last frame has rendered.
    * Output: 
      * output: Float

  * `Float`: A Float for a single floating point value.
    * Output: 
      * output: Float

  * `Texture`: A container node for a texture (image or url)
    * Inputs: 
      * uv: Vector2 (mesh.uv automatically attached). 
    * Outputs:
      * rgba: Vector4
      * rgb: Vector3
      * r: Float
      * g: Float
      * b: Float
      * a: Float

  * `Time`: A Float of a constantly increasing floating point value, starting when the scene is loaded.
    * Output: 
      * output: Float

  * `Vector2`: A Vector2 represneting two values.
    * Output: 
      * output: Vector2

  * `Vector3`: A Vector3 represneting three values.
    * Output: 
      * output: Vector3

  * `Vector4`: A Vector4 represneting four values.
    * Output: 
      * output: Vector4

* Interpolation: 
  * `Lerp`: Provides linear interpolated value(s) between the left and right inputs, based on the gradient input.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4.
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4
      * gradient: Float 
    * Output: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on left and right input types.

  * `SmoothStep`: Outputs a value based on a the input value's position on a curve between the two edge values.
    * Inputs: 
      * value: Float
      * edge0: Float 
      * edge1: Float 
    * Output: 
      * output: Float

* Matrices:
  * `Matrix`: A container for a vector transformation.
    * Output: 
      * output: Matrix

  * `ProjectionMatrix`: A matrix moving from 3D space to screen space.
    * Output: 
      * output: Matrix

  * `ViewMatrix`: A matrix moving from 3D space to camera space.
    * Output: 
      * output: Matrix

  * `ViewProjectionMatrix`: A matrix moving from 3D space to camera space, and ending in screen space.
    * Output: 
      * output: Matrix

  * `WorldMatrix`: A matrix moving from local space to world space
    * Output: 
      * output: Matrix

  * `WorldViewMatrix`: A matrix moving from local space to world space and ending in camera space.
    * Output: 
      * output: Matrix

  * `WorldViewProjectionMatrix`: A matrix moving from local space to world space, then to camera space, and ending in screen space.
    * Output: 
      * output: Matrix

* Mesh Attributes:
  * `Color`: A Color4 representing the color of each vertex of the attached mesh.
    * Output: 
      * output: Color4

  * `Instances`: Provides the world matrix for each instance. This is used to apply materials to instances as well as original meshes.
    * Inputs: 
      * world0: Vector4
      * world1: Vector4
      * world2: Vector4
      * world3: Vector4 
      * world: worldMatrix 
    * Output: 
      * output: Matrix

  * `MatricesIndices`: A Vector4 representing the vertex to bone skinning assignments.
    * Output: 
      * output: Vector4

  * `MatricesWeights`: A Vector4 representing the vertex to bone skinning weights.
    * Output: 
      * output: Vector4

  * `Normal`: A Vector3 representing the normal of each vertex of the attached mesh.
    * Output: 
      * output: Vector3

  * `Position`: A Vector3 representing the position of each vertex of the attached mesh.
    * Output: 
      * output: Vector3

  * `Tangent`: A Vector3 representing the tangent of each vertex of the attached mesh.
    * Output: 
      * output: Vector3

  * `UV`: A Vector2 representing the UV coordinates of each vertex of the attached mesh.
    * Output: 
      * output: Vector2      
 
* Noises:
  * `SimplexPerlin3D`: A procedural noise will output a value between -1 and 1 depending on an input position. 
    * Inputs: 
      * seed: Vector3
    * Output:
      * output: Float 
 
   * `WorleyNoise3D`: A procedural noise will output two values between -1 and 1 depending on an input position(F1, F2 respectively).  It has a parameter to change the distance calculation from Euclidean to Manhattan.  Jitter will introduce noise into the sampling equation. 
     * Inputs: 
       * seed: Vector3
       * jitter: Float
     * Output:
       * output: Vec2

* Outputs:
  * `Discard`: A final output node that will not output a pixel below the cutoff value.
    * Inputs: 
      * value: Float
      * cutoff: Float

  * `FragmentOutput`: The final node for outputing the color of each pixel. This node must be included in every node material.
    * Inputs: 
      * rgba: Vector4
      * rgb: Vector3
      * a: Float

  * `VertexOutput`: The final node for outputing the position of each vertex. This node must be included in every node material.
    * Inputs: 
      * vector: Vector4 

* Range:
  * `Clamp`: Ignores all values of the input outside of the Minimum and Maximum property values.
    * Input: 
      * input: Float
    * Output:
      * input: Float

  * `Normalize`: Remaps the length of a vector or color to 1.
    * Inputs: 
      * input: Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Remap`: Remaps all input values between sourceMin and sourceMax, to be between targetMin and targetMax. source and target inputs can be static or variable inputs.
    * Inputs: 
      * input: Float, Vector2, Vector3, Vector4, Color3, Color4.
      * sourceMin: Float
      * sourceMax: Float
      * targetMin: Float
      * targetMax: Float 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, Color4. Output varies based on input type.

* Round:
  * `Ceiling`: Outputs the highest value of the input.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Floor`: Outputs the lowest value of the input.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Round`: Outputs the nearest whole number based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Step`: Outputs 1 for any input value above the edge input, outputs 0 for any input value below the edge input.
    * Input: 
      * value: Float
      * edge: Float
    * Output: 
      * output: Float

* Scene Attributes:
  * `CameraPosition`: A Vector3 position of the active scene camera.
    * Output: 
      * output: Vector3

  * `Fog`: Applies fog to a scene. Outputs fog with increasing value based on distance from the camera.
    * Input: 
      * worldPosition: Vector4
      * view: viewMatrix (Matrix)
      * input: Vector3
      * fogColor: Color3
    * Output: 
      * output: Color3

  * `FogColor`: A Color3 for the fog color.
    * Output: 
      * output: Color3

  * `ImageProcessing`: Provides access to all of the Babylon image processing properties https://doc.babylonjs.com/how_to/how_to_use_postprocesses
    * Input:
      * color: Color4
    * Output:
      * output: Color4

  * `Light`: Returns the individual color values (red, green, and blue) of the diffuse or specular colors of the combined OR individual lighting within the scene.
    * Input: 
      * worldPosition: Vector4
      * worldNormal: Vector4
      * cameraPosition: Vector3
      * glossiness: Float
      * glossPower: Float
      * diffuseColor: Color3
      * specularColor: Color3
    * Output:
      * diffuseOutput: Color3
      * specularOutput: Color3

  * `LightInformation`:  Provides the direction, color and intensity of a selected light based on its world position.
    * Input: 
      * worldPosition: Vector4
    * Output:
      * direction: Vector3
      * color: Color3
      * intensity: Float

  * `PerturbNormal`: Creates a new normal direction based on a normal map, the world position, and world normal.
    * Input: 
      * worldPosition: Vector4
      * worldNormal: Vector4
      * uv: Vector2
      * normalMap: Color3
      * strength: Float
    * Output: 
      * output: Vector4

  * `ReflectionTexture`: Creates a reflection of the input texture.
    * Input: 
      * position: Vector3
      * worldPosition: Vector4
      * worldNormal: Vector4
      * world: Matrix
      * cameraPosition: Vector3
      * view: Matrix
    * Output: 
      * rgb: Color3
      * r: Float
      * g: Float
      * b: Float

  * `ViewDirection`: Outputs the direction vector of where the camera is aimed.
    * Input: 
      * worldPosition: Vector4
      * cameraPosition: Vector3
    * Output: 
      * output: Vector3

* Trigonometry:
  * `Abs`: Outputs the absolute value of the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `ArcCos`: Outputs the inverse of the cosine value based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `ArcSin`: Outputs the inverse of the sine value based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `ArcTan2`: Outputs the inverse of the tangent value based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

    * `ArcTan`: Outputs the inverse of the tangent value based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Cos`: Outputs the cosine value based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `DegreesToRadians`: Converts the input value (degrees) to radians.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Exp2`: Outputs the input value multiplied by itself 1 time. (Exponent of 2)
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Exp`: Outputs the input value multiplied by itself 9 time. (Exponent of 10)
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Fract`: everything after the period.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Log`: The logarithm value based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Pow`: Outputs the input value multiplied by itself the number of times equal to the power input (Exponent of power)
    * Input: 
        * value: Float
        * power: Float
    * Output: 
      * output: Float

  * `RadiansToDegrees`: Converts the input value (radians) to degrees.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `SawToothWave`: Outputs a sawtooth pattern value between -1 and 1 based on the input value. 
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Sign`: returns 1 if 10 or -1 if -10
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Sin`: Outputs the the sine value based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Sqrt`: Outputs the the square root of the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `SquareWave`: Outputs a stepped pattern value between -1 and 1 based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Tan`: Outputs the the tangent value based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `TriangleWave`: Outputs a sawtooth pattern value between 0 and 1 based on the input value. 
    * Input: 
      * input: Float
    * Output: 
      * output: Float

* Vector Math:
  * `Cross`: Outputs a vector that is perpendicular to two input vectors.
    * Inputs: 
      * left: Vector2, Vector3, Vector4, Color3, or Color4.
      * right: Vector2, Vector3, Vector4, Color3, or Color4.
    * Output: 
      * output: Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on left and right input types.

  * `Dot`: Outputs the cos of the angle between two vectors.
    * Inputs: 
      * left: Vector2, Vector3, Vector4, Color3, or Color4.
      * right: Vector2, Vector3, Vector4, Color3, or Color4.
    * Output: 
      * output: Float

  * `Fresnel`: Outputs the grazing angle of the surface of the mesh, relative to a camera. Angle can be influenced by the bias and power inputs.
    * Input: 
      * worldNormal: Vector4
      * viewDirection: Vector3
      * bias: Float
      * power: Float
    * Output: 
      * fresnel: Float

  * `Transform`: Transforms a input vector based on an input matrix.
    * Inputs: 
      * vector: Vector2, Vector3, Vector4, Color3, or Color4
      * transform: Matrix
    * Output: 
      * output: Vector4

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
worldInput.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

var worldPos = new BABYLON.TransformBlock("worldPos");
positionInput.connectTo(worldPos);
worldInput.connectTo(worldPos);

var viewProjectionInput = new BABYLON.InputBlock("viewProjection");
viewProjectionInput.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

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

![NME](/img/how_to/Materials/nme.jpg)

To invoke the editor you can call `nodematerial.edit()` but this code must be called inside a user interaction (like a click event). You can also call it through the Inspector:

```
scene.debugLayer.show();
scene.debugLayer.select(nodeMaterial);
```

When selected in the Inspector, you can find an edit button in the Node Material property pane.

You can also use a standalone version of the editor on https://nme.babylonjs.com

## Loading from a file saved from the Node Material Editor

You can directly setup a Node Material from a file saved from the Node Material Editor.

Here is the code to use:

```
nodeMaterial.loadAsync("file-url.json").then(() => {
    nodeMaterial.build(true);
});
```

## Sharing unique URLs

When using https://nme.babylonjs.com, you can have an additional option to save your work using a unique URL (like the Playground for instance). You can then share these urls (which are immutable).

Example: https://nme.babylonjs.com/#2F999G

## Going further

Here is a list of videos related to Node material:
- Toon Shader Part 1: https://youtu.be/K0PXzE1hJXg
- Toon Shader Part 2: https://youtu.be/wtrIbGmuJ2o
- Toon Shader Part 3: https://youtu.be/YmcZ69xlOjM
- Step Node Switches: https://youtu.be/FwtFroNMmxw
- Use Your Node Material in your code: https://youtu.be/F0Lh73I_6Z8
- Vertex shader: https://www.youtube.com/watch?v=B5BO3nFc55s
- Lights and textures: https://www.youtube.com/watch?v=fLXYhGhCejc

You can also visit the dedicated forum topic: https://forum.babylonjs.com/t/node-materials-examples/6048
