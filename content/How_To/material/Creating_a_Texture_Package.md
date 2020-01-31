---
PG_TITLE: Creating a Texture Package
---

#Texture Packer

Create a TexturePacker by calling:
```javascript
let pack = new BABYLON.TexturePacker(name, targetMeshes, options, scene);
```

- name:string, Name of the Texture Pack.
- targetMeshes:Array<AbstractMesh>, Array of meshes to use as material sources.
- options:any, Basic object with argument parameters
- scene:Scene, The scene that everything is scoped to.

The options argument has a few parameters you can use to tweak the result of the texture packing.
- map:Array<string>, An array that contains the names of the channels to pack on the materials if they exist.  `Default = [ 'ambientTexture', 'bumpTexture', 'diffuseTexture', 'emissiveTexture', 'lightmapTexture', 'opacityTexture', 'specularTexture' ]`
- uvsIn:number, The target UV channel to use when creating the frames. `Default = BABYLON.VertexBuffer.UVKind`
- uvsOut:number, The target UV channel to modify on the targetMeshes. `Default = BABYLON.VertexBuffer.UVKind`
- layout:number, Defines the layout of the packer(LAYOUT_STRIP, LAYOUT_POWER2, LAYOUT_COLNUM). `Default = TexturePacker.LAYOUT_STRIP;`
- colnum:number, If using LAYOUT_COLNUM will define the number of columns to use. `Default = 8;`
- frameSize:number, The base size of the frames before padding is added. `Default = 256;`
- paddingMode:number, Defines the padding style of the packer (SUBUV_WRAP, SUBUV_EXTEND, SUBUV_COLOR). `Default = TexturePacker.SUBUV_WRAP;`
- paddingColor:Color3|Color4, Custom color of the padding if paddingMode SUBUV_COLOR. `Default = new Color4(0, 0, 0, 1.0);`
- paddingRatio:number, Ratio of the amount of padding to add to the frames. `Default = 0.0115;`
- fillBlanks:boolean, Toggle to full blank cell when a material does not use that channel. `Default = true;`
- customFillColor:string, css color string for what color to fill the blank frames. `Default = 'black';`
- updateInputMeshes:boolean, Toggle to have the packer automatically update the input meshes to the new packer frames and channels. `Default = true;`
- disposeSources:boolean, Toggle to dispose the source textures after they are packed. `Default = true;`

For PBR materials you will need to change the map to reflect the channels you want to target.  The Environment map should be handled separately.

In order to ensure that the packing proccess does not lock your thread you will have to start the compilation proccess with
```javascript
pack.proccessAsync( success, error );
```
Having all interactions with your pack happening in the success callback. See the below playgrounds for examples.

* [Texture Packer Example](https://www.babylonjs-playground.com/#TQ408M)

Downloading the pack is simple! When initializing the package through both a JSON load or naturally like in the above mentioned constructor, a Promise Object is created.
In order to assure that the textures are all packed and ready to go we call any interactions with the texture pack inside the success callback of the `then` method.
```javascript
pack.processAsync(
    //Success
    ()=>{
        pack.download(type, quality?);
    }
)  
```
You can tell the downloaded to change between jpeg and png image types depending on if you need an alpha channel.  Due to the fact that the images are stored as base64 you should avoid using png unless absolutely necessary.  You can always download both types and then manually mix and match inside the JSON file.

* [Texture Packer Example](https://www.babylonjs-playground.com/#TQ408M#1)
