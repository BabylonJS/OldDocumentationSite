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
  * `Bones`: Provides a world matrix for each vertex, based on skeletal (bone/joint) animation.
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

* Color Management:
  * `Desaturate`: Convert a color input into a grayscale representation.
    * Inputs: 
      * color: Color3
      * level: Float 
    * Outputs: 
      * output: Color3

  * `Gradient`: Returns the color in the gradient represented by the target value of the input.
    * Inputs: 
      * value: Float. 
    * Outputs: 
      * output: Color3.

  * `Posterize`: Reduces the number of values in each channel to the number in the corresponding channel of steps.
    * Inputs: 
      * value: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * steps: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `ReplaceColor`: Replaces a reference color in value with the color in replacement blended by distance.
    * Inputs: 
      * value: Vector2, Vector3, Vector4, Color3, or Color4. 
      * reference: Vector2, Vector3, Vector4, Color3, or Color4. 
      * distance: Float
      * replacement: Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

* Conversion:
  * `ColorMerger`: Combines float input channels into a color.
    * Inputs: 
      * r: Float
      * g: Float
      * b: Float
      * a: Float
    * Outputs:
      * rgba: Color4
      * rgb: Color3

  * `ColorSplitter`: Separates color input channels into individual floats.
    * Inputs:
      * rgba: Color4
      * rgb: Color3
    * Outputs: 
      * rgb: Color3
      * r: Float
      * g: Float
      * b: Float
      * a: Float

  * `VectorMerger`: Combines up to four input floats into a vector.
    * Inputs: 
      * x: Float
      * y: Float
      * z: Float
      * w: Float
    * Outputs:
      * xyzw: Vector4
      * xyz: Vector3
      * xy: Vector2

  * `VectorSplitter`: Separates vectors input channels into individual floats.
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
  * `Color3`: A color made up of red, green, and blue channel values.
    * Output: 
      * output: Color3

  * `Color4`: A color made up of red, green, blue, and alpha channel values.
    * Output: 
      * output: Color4

  * `DeltaTime`: A float representing the time that has passed since the last frame was rendered.
    * Output: 
      * output: Float

  * `Float`: A floating point number representing a value with a fractional component.
    * Output: 
      * output: Float

  * `ReflectionTexture`: Creates a reflection from the input texture.
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

  * `Texture`: A node for reading a linked or embedded texture file.
    * Inputs: 
      * uv: Vector2 (mesh.uv automatically attached). 
    * Outputs:
      * rgba: Vector4
      * rgb: Vector3
      * r: Float
      * g: Float
      * b: Float
      * a: Float

  * `Time`: A float value that represents the time that has passed since the scene was loaded.
    * Output: 
      * output: Float

  * `Vector2`: a vector composed of X and Y channels.
    * Output: 
      * output: Vector2

  * `Vector3`: a vector composed of X, Y, and Z channels.
    * Output: 
      * output: Vector3

  * `Vector4`: a vector composed of X, Y, Z, and W channels.
    * Output: 
      * output: Vector4

* Interpolation: 
  * `Lerp`: Outputs a value that is a mix of the left and right inputs based on the target value.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4.
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4
      * gradient: Float 
    * Output: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on left and right input types.

  * `NLerp`: Outputs a value that is a mix of the left and right inputs based on the target's normalized value.
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

  * `Step`: Outputs 1 for any input value above the edge input, outputs 0 for any input value below the edge input.
    * Input: 
      * value: Float
      * edge: Float
    * Output: 
      * output: Float

* Math: Standard:
  * `Add`: Adds the left and right inputs of the same type together.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Divide`: Divides the left input by the right input of the same type.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Max`: Outputs the largest value between the left and right inputs of the same type.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Min`: Outputs the smallest value between the left and right inputs of the same type.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Multiply`: Multiplies the left and right inputs of the same type together. 
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

  * `OneMinus`: Subtracts each channel of the input value from 1 (1 - input).
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Reciprocal`: Quotient of 1 divided by the input.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Scale`: Multiplies the input channels by a float factor. 
    * Inputs: 
      * Input: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * Factor: Float
    * Output: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Sign`: Returns 1 if the input is positive, 0 if input is equal to 0, or -1 if the input is negative.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Sqrt`: Outputs the the square root of the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Subtract`: Subtracts the right input from the left input of the same type.
    * Inputs: 
      * left: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Float, Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

* Math: Scientific:
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

  * `ArcTan`: Outputs the inverse of the tangent value based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `ArcTan2`: Outputs the inverse of the tangent value based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Cos`: Outputs the cosine value based on the input value.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `DegreesToRadians`: Converts the input degrees value to radians.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Exp`: Outputs the input value multiplied by itself 9 time. (Exponent of 10)
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Exp2`: Outputs the input value multiplied by itself 1 time. (Exponent of 2)
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Fract`: Outputs only the fractional value of a floating point number.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Log`: The logarithmic value based on the input value.
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

  * `RadiansToDegrees`: Converts the input radians value to degrees.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `SawToothWave`: Outputs a sawtooth pattern value between -1 and 1 based on the input value. 
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Sin`: Outputs the the sine value based on the input value.
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

* Math: Vector:
  * `Cross`: Outputs a vector that is perpendicular to two input vectors.
    * Inputs: 
      * left: Vector2, Vector3, Vector4, Color3, or Color4.
      * right: Vector2, Vector3, Vector4, Color3, or Color4.
    * Output: 
      * output: Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on left and right input types.

  * `Derivative`: FRAGMENT SHADER ONLY. Provides the rate of change for an input on a given axis (x,y).
    * Inputs: 
      * input: Float, Vector2, Vector3, Vector4, Color3, or Color4.
    * Output: 
      * dx: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on left and right input types.
      * dy: Float, Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on left and right input types.

  * `Distance`: Provides a distance vector based on the left and right input vectors. 
    * Inputs: 
      * left: Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Dot`: Outputs the cos of the angle between two vectors.
    * Inputs: 
      * left: Vector2, Vector3, Vector4, Color3, or Color4.
      * right: Vector2, Vector3, Vector4, Color3, or Color4.
    * Output: 
      * output: Float

  * `Fresnel`: Outputs the grazing angle of the surface of the mesh, relative to a camera influenced by the bias and power inputs.
    * Input: 
      * worldNormal: Vector4
      * viewDirection: Vector3
      * bias: Float
      * power: Float
    * Output: 
      * fresnel: Float

  * `Length`: Outputs the length of an input vector.
    * Inputs: 
      * left: Vector2, Vector3, Vector4, Color3, or Color4. 
      * right: Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Reflect`: Outputs the direction of the input vector reflected across the surface normal.
    * Inputs: 
      * incident: Vector3
      * normal: Vector3
    * Outputs: 
      * output: Vector3

  * `Refract`: Outputs a direction simulating a deflection of the input vector.
    * Inputs: 
      * incident: Vector3
      * normal: Vector3
      * ior: Float
    * Outputs: 
      * output: Vector3

  * `Rotate2D`: Rotates UV coordinates around the W axis.
    * Inputs: 
      * input: Vector2
      * angle: Float 
    * Outputs: 
      * output: Vector2

  * `Transform`: Transforms a input vector based on the input matrix.
    * Inputs: 
      * vector: Vector2, Vector3, Vector4, Color3, or Color4
      * transform: Matrix
    * Output: 
      * output: Vector4

* Matrices:
  * `Matrix`: A 4x4 table of related values.
    * Output: 
      * output: Matrix

  * `ProjectionMatrix`: A matrix to remap points in 3D space to 2D plane relative to the screen.
    * Output: 
      * output: Matrix

  * `ViewMatrix`: A matrix to remap points in 3D space to 2D plane relative to the view of the scene camera.
    * Output: 
      * output: Matrix

  * `ViewProjectionMatrix`: A matrix to remap points in 3D space to 2D view space before remapping to 2D screen space.
    * Output: 
      * output: Matrix

  * `WorldMatrix`: A matrix to remap points in 3D local space to 3D world space.
    * Output: 
      * output: Matrix

  * `WorldViewMatrix`: A matrix to remap points in 3D local space to 3D world space, and ending in 2D camera space.
    * Output: 
      * output: Matrix

  * `WorldViewProjectionMatrix`: A matrix to remap points in 3D local space to 3D world space, then to 2D camera space, and ending in 2D screen space.
    * Output: 
      * output: Matrix

* Mesh:
  * `Color`: Outputs the RGBA color of each vertex in the mesh.
    * Output: 
      * output: Color4

  * `FrontFacing`: Returns 1 if a mesh triangle faces the normal direction and 0 if it does not.
    * Outputs: 
      * output: Float

  * `Instances`: Provides the world matrix for each instance to apply this material to all instances.
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

  * `NormalBlend`: Outputs the result of blending two normal maps together using a per-channel screen.
    * Input: 
      * normalMap0: Vector3
      * normalMap1: Vector3
    * Output: 
      * output: Vector3 

  * `PerturbNormal`: Creates high-frequency detail normal vectors based on a normal map, the world position, and world normal.
    * Input: 
      * worldPosition: Vector4
      * worldNormal: Vector4
      * uv: Vector2
      * normalMap: Color3
      * strength: Float
    * Output: 
      * output: Vector4 

  * `Position`: A Vector3 representing the position of each vertex of the attached mesh.
    * Output: 
      * output: Vector3

  * `Tangent`: A Vector3 representing the tangent of each vertex of the attached mesh.
    * Output: 
      * output: Vector3

  * `UV`: A Vector2 representing the UV coordinates of each vertex of the attached mesh.
    * Output: 
      * output: Vector2

  * `WorldNormal`: A Vector4 representing the normal of each vertex of the attached mesh transformed into world space.
    * Input: 
      * vector: Vector3
      * transform: Matrix
    * Output: 
      * output: Vector4

  * `WorldPosition`: A Vector4 representing the position of each vertex of the attached mesh transformed into world space.
    * Input: 
      * vector: Vector3
      * transform: Matrix
    * Output: 
      * output: Vector4
 
* Noises:
  * `RandomNumber`: Provides a random number based on an input seed.
    * Inputs: 
      * seed: Vector2
    * Output: 
      * output: Float

  * `SimplexPerlin3D`: Creates a type of gradient noise with few directional artifacts. 
    * Inputs: 
      * seed: Vector3
    * Output:
      * output: Float 
 
  * `WorleyNoise3D`: Creates a random pattern resembling cells. 
    * Inputs: 
      * seed: Vector3
      * jitter: Float
    * Output:
      * output: Vector2

* Outputs:
  * `Discard`: A final node that will not output a pixel below the cutoff value.
    * Inputs: 
      * value: Float
      * cutoff: Float

  * `FragmentOutput`: A mandatory final node for outputing the color of each pixel.
    * Inputs: 
      * rgba: Vector4
      * rgb: Vector3
      * a: Float

  * `VertexOutput`: A mandatory final node for outputing the position of each vertex.
    * Inputs: 
      * vector: Vector4 

* Range:
  * `Clamp`: Outputs values above the maximum or below minimum as maximum or minimum values respectively.
    * Input: 
      * input: Float
    * Output:
      * input: Float

  * `Normalize`: Remaps the length of a vector or color to 1.
    * Inputs: 
      * input: Vector2, Vector3, Vector4, Color3, or Color4. 
    * Outputs: 
      * output: Vector2, Vector3, Vector4, Color3, or Color4. Output varies based on input types.

  * `Remap`: Remaps input value between sourceMin and sourceMax to a new range between targetMin and targetMax.
    * Inputs: 
      * input: Float, Vector2, Vector3, Vector4, Color3, Color4.
      * sourceMin: Float
      * sourceMax: Float
      * targetMin: Float
      * targetMax: Float 
    * Outputs: 
      * output: Float, Vector2, Vector3, Vector4, Color3, Color4. Output varies based on input type.

* Round:
  * `Ceiling`: Outputs fractional values as the next higher whole number.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Floor`: Outputs fractional values as the next lower whole number.
    * Input: 
      * input: Float
    * Output: 
      * output: Float

  * `Round`: Outputs fractional values rounded to the nearest whole number.
    * Input: 
      * input: Float
    * Output: 
      * output: Float
      
* Scene Attributes:
  * `CameraPosition`: Outputs a Vector3 position of the active scene camera.
    * Output: 
      * output: Vector3

  * `Fog`: Applies fog to the scene with an increasing opacity based on distance from the camera.
    * Input: 
      * worldPosition: Vector4
      * view: viewMatrix (Matrix)
      * input: Vector3
      * fogColor: Color3
    * Output: 
      * output: Color3

  * `FogColor`: The system value for fog color pulled from the scene.
    * Output: 
      * output: Color3

  * `ImageProcessing`: Provides access to all of the Babylon image processing properties https://doc.babylonjs.com/how_to/how_to_use_postprocesses
    * Input:
      * color: Color4
    * Output:
      * output: Color4

  * `Light`: Outputs diffuse and specular contributions from one or more scene lights.
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

  * `ViewDirection`: Outputs the direction vector of where the camera is aimed.
    * Input: 
      * worldPosition: Vector4
      * cameraPosition: Vector3
    * Output: 
      * output: Vector3



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
- Frames and Collapsible Nodes: https://youtu.be/uHjAoHnMwDo
- Add Light Texture: https://youtu.be/n2DLnMa21K0
- Add basic lighting: https://youtu.be/BU9BTUkdYDY
- Toon Shader Part 1: https://youtu.be/K0PXzE1hJXg
- Toon Shader Part 2: https://youtu.be/wtrIbGmuJ2o
- Toon Shader Part 3: https://youtu.be/YmcZ69xlOjM
- Ink Shader: https://youtu.be/0re82mEd1n8
- Step Node Switches: https://youtu.be/FwtFroNMmxw
- Use Your Node Material in your code: https://youtu.be/F0Lh73I_6Z8
- Vertex shader: https://www.youtube.com/watch?v=B5BO3nFc55s
- Lights and textures: https://www.youtube.com/watch?v=fLXYhGhCejc


You can also visit the dedicated forum topic: https://forum.babylonjs.com/t/node-materials-examples/6048
