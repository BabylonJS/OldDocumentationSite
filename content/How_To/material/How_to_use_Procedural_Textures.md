In classic texturing, we use 2D images, often pictures that have been shaped specifically to match an object. Let’s imagine you are creating a medieval fantasy game, working on a dwarf pub, where there are multiple, big, "old school" wooden tables. With classic 2D texturing, you have 3 choices:

- Create a single texture and use it on all of the tables (but every table is going to look the same)

- Create a collection of various wood textures and apply them randomly to each table

- Create a separate texture for each table, insuring that they each look different 

No choice seems to be a good one.

Enter **procedural textures**. 

Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.

One main advantage of procedural textures is that they are written using a fragment shader (using GLSL in the case of Babylon.js). That means that the code generating the texture is executed by the GPU and not the CPU (that is to say, NOT executed in JavaScript code). This has a huge performance impact in a positive way.

Procedural textures can be generated:

- Only once to create the texture which is put into cache

- Every 1, 2, 3, or 4, or more frames to be able to create an animated texture (like fire)

See more about 'refreshrate' in the Custom Procedural Textures section... far below.

# Procedural Textures in Babylon.js #
**Babylon.js** offers you an easy out-of-the-box way to use this kind of texture. The engine itself provides you with standard default textures that you can use right now. It also gives you the ability to create custom procedural textures and package them in a simple way.

## Using a Procedural Texture
Applying a procedural texture is just the same as using a classic one. Let’s start with a simple mesh (a cylinder in this case) and attach it to your scene:

```javascript
    var cylinder = BABYLON.Mesh.CreateCylinder("mycylinder", 7, 2, 2, 12, 1, scene);
```

Then, you need to create a StandardMaterial:

```javascript
    var material = new BABYLON.StandardMaterial("material", scene);
```

Now, create a WoodProceduralTexture object for which you need to pass a name, the size of the generated texture and the scene.

```javascript
    var texture = new BABYLON.WoodProceduralTexture("texture", 1024, scene);
```

You are almost set! All you need to do now is to associate the texture to the material as a diffuseTexture, for instance, (or emissiveTexture, specularTexture, any other) and then apply the material to the mesh.

```javascript
    material.diffuseTexture = texture;
    cylinder.material = material;
```

You can optionally change the values of special default properties.  Here is an example of setting two properties for the WoodProceduralTexture:

```javascript
    texture.woodColor = new BABYLON.Color3(0.49, 0.25, 0);
    texture.ampScale = new BABYLON.Vector2(1.0, 1.0);
```

## Noise Procedural Texture

The NoiseProceduralTexture is available out of the box with the core Babylon.js engine.

You can create one with the following code:

```
var noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, scene);
```

The NoiseProceduralTexture exposes the following properties:
* brightness: Gets or sets a value between 0 and 1 indicating the overall brightness of the texture (default is 0.2)
* octaves: Defines the number of octaves to process (default is 3)
* persistence: Defines the level of persistence (0.8 by default)
* animationSpeedFactor: Gets or sets animation speed factor (default is 1)

You can experiment each property in this demo: https://www.babylonjs-playground.com/#K9GLE6#1

## Using Standard Procedural Textures ##
Babylon.js also has a number of pre-built procedural textures that are gathered in the Procedural Texture library: https://github.com/BabylonJS/Babylon.js/tree/master/proceduralTexturesLibrary

You can use them in your project:
* Using npm with `npm install --save babylonjs babylonjs-procedural-textures`
* With a direct reference to: https://cdn.babylonjs.com/proceduralTexturesLibrary/babylonjs.proceduralTextures.min.js

All standard procedural textures can be used in the same ways, but they each have specific (special) properties:

- **WoodProceduralTexture**: //doc.babylonjs.com/extensions/woodproceduraltexture
- **MarbleProceduralTexture**: //doc.babylonjs.com/extensions/marbleproceduraltexture
- **BrickProceduralTexture**: //doc.babylonjs.com/extensions/brickproceduraltexture
- **FireProceduralTexture**: //doc.babylonjs.com/extensions/fireproceduraltexture
- **GrassProceduralTexture**: //doc.babylonjs.com/extensions/grassproceduraltexture
- **RoadProceduralTexture**: //doc.babylonjs.com/extensions/roadproceduraltexture
- **CloudProceduralTexture**: //doc.babylonjs.com/extensions/cloudproceduraltexture

## Creating Custom Procedural Textures ##

### Using a Files-Based Custom Procedural Texture ###
To use a files-based custom procedural texture, you need to create a folder containing at least 2 files:

- config.json
- custom.fragment.fx

The config file is a Javascript Simple Object Notation file containing 4 elements. Here is an example:

```javascript
    {
     "animate": false,
     "refreshrate": 0,
     "uniforms": [
      {
          "type": "float",
          "name": "dirtAmplifier",
          "value": "6.0"
      }
  ],
     "sampler2Ds": [
      {
          "sample2Dname": "dirt",
          "textureRelativeUrl": "textures/dirt.jpg"
      },
      {
          "sample2Dname": "grass",
          "textureRelativeUrl": "textures/grass.png"
      }
     ]
    }
```

The **animate** property indicates if a time value should be created and increased each time the fragment shader code is executed.

The **refreshrate** property is set to 0 if you want the texture to only render once. If set to 1, it will render every frame, 2 every two frames, etc.

**Uniforms** are the values that will be passed from the javascript code to the shader code. By setting them that way, you can allow the custom texture user to modify this value at runtime... to customize the texture. 

Uniforms can be of type:
 
- **float** (parameters : value)
- **Vector2** (parameters: x, y)
- **Vector3** (parameters: x, y, z)
- **Color3** (parameters: r, g, b)
- **Color4** (parameters: r, g, b, a)

**Textures2D** are 2D image files that are passed to the shader code as **sampler2D** variables. They can be read by the shader code and be used to create the final pixel color. You only need to provide a name and the relative path inside the folder.

The **custom.fragment.fx** file contains the GLSL code. The purpose of this wiki article is not to teach you how to create a fragment shader or how it works. You simply need to know that the code contained in your main function will be called once for each pixel to create on the texture. In this main function, you only know the coordinates of the current pixel in the final texture.

Here is a simple code which is setting all pixels to a specific gray.

```javascript 
    #ifdef GL_ES
    precision highp float;
    #endif
    
    void main(void) {
     vec3 color = vec3(0.9, 0.9, 0.9);
     gl_FragColor = vec4(color, 1.0);
    }
```
Gl_FragColor is the variable in which you put the color object you want the pixel to be.
Here is a more complex example using 2 samplers and mixing their color equally. 

```javascript
    #ifdef GL_ES
    precision highp float;
    #endif
    
    varying vec2 vPosition;
    varying vec2 vUV;
    
    uniform sampler2D grass;
    uniform sampler2D dirt;
    
    void main(void) {
     vec3 color = mix(texture2D(dirt, vUV).xyz, texture2D(grass, vUV).xyz, 0.5);
     gl_FragColor = vec4(color, 1.0);
    }
```
To use this custom texture, you need to make your folder available to your babylon.js html/javascript files and use a **CustomProceduralTexture** class instead of a standard one. The difference is only that you specify a new parameter which is the relative path to the folder containing the custom texture. Babylon.js will automatically read the config.json and custom.fragment.fx files and load everything for you.

```javascript
    var texture = new BABYLON.CustomProceduralTexture("texture", "./pathtotexture", 1024, scene);
```

### Using a ShaderStore for Shader Storage ###
You can also use the ShaderStore to write a shader inline and use it in a CustomProceduralTexture.
This can be done easily using the **BABYLON.Effect.ShaderStore** array : 

```javascript
BABYLON.Effect.ShadersStore["LinesPixelShader"] =
       "#ifdef GL_ES\n" +
       "precision highp float;\n" +
       "#endif\n\n" +
       "varying vec2 vUV; \n" +
       "void main(void) {\n" +
       " gl_FragColor = vec4(vUV.x,vUV.y,-vUV.x, 1.0);\n" +
       "}\n" +
       "";
```
Note that your shader name should be suffixed with **PixelShader** as the Procedural Texture shader is always a pixel shader. Babylon.JS will automatically understand it is a pixel shader.

To use this shader, you just have to create a CustomProceduralTexture and put the name of your shader in the store instead of the path to the files.

```javascript
var customProcText = new BABYLON.CustomProceduralTexture("customtext", "Lines", 1024, scene);
```
### Using a DOM Element for Shader Storage ###

Finally you can also use **DOM Elements** to store your shader. You just have to create a script tag in your HTML file like this:

```javascript
<script type="application/pixelShader" id="LinesPixelShader">
        #ifdef GL_ES
        precision highp float;
        #endif
        varying vec2 vUV; 
        void main(void) {
             gl_FragColor = vec4(vUV.x,vUV.y,-vUV.x, 1.0);
        }
</script>
```
To use it, you just have to create a simple object containing one property which is named **fragmentElement** and contains the id identifying the script DOM element.

```javascript
var linesShader = { fragmentElement: 'LinesPixelShader' };
var customProcText = new BABYLON.CustomProceduralTexture("customtext", linesShader, 1024, scene);
```

## Using Node Material to generate procedural texture

You can use NodeMaterial to generate the shaders for your procedural texture.
The code to generate it is very simple:
```
BABYLON.NodeMaterial.ParseFromSnippetAsync("#A7A3UB#1", scene).then((nodeMaterial) => {
    const proceduralTexture = nodeMaterial.createProceduralTexture(256);
});
```
Example: https://www.babylonjs-playground.com/#8S19ZC#1

More here: https://doc.babylonjs.com/how_to/node_material#creating-procedural-textures

**Note :** when using ShaderStore or DOM Element shader for custom procedural textures : the config.json file is not needed anymore and you can just use setFloat or setVector3 (and so on), and setTexture on the CustomProceduralTexture will give values and Sampler2D to the shader code.

Feel free to play with this scene... [at our online playground]( https://www.babylonjs-playground.com/#24C4KC#17).
