# Creating your own primitive type for the Canvas2D

**WARNING** Documentation outdated, will be updated soon.

So you like to use the Canvas2D feature but there's a primitive type missing and you're willing to contribute!? 
Great news! 

This tutorial will hopefully help you to achieve this goal.

First, be sure you read [the general purpose tutorial](http://doc.babylonjs.com/tutorials/Using_the_Canvas2D) as well as the [overview and architecture](http://doc.babylonjs.com/overviews/Using_The_Canvas2D) document (really important to understand who how the whole engine).

## Terminology
 - Canvas: the Canvas2D where you add primitives.
 - Primitive: a single 2D component being part of the Canvas, can be renderable or not.
 - Part: a Primitive is made of one or more Parts, for instance the Shape2D based primitives have two Parts: Fill and Border. Each part can have their own specific settings and render path in the shaders.
 - Element (or Part Element): Part is made of one or more Elements, each Element is drawn specifically by the Rendering Engine. For instance a Sprite2D has one Part of one Element, but the Text2D has one Part of N elements for N letters displayed.
 - InstanceData: each Element has its own InstanceData based object, containing information to send to the Shaders.

## Choosing you base class

You'll have to select the appropriate base class to extend your own depending on the type of Primitive you're willing to create.
Here are the common cases:

1. It's not a renderable primitive, this case is pretty unlikely because those kind are typically very tied to the engine itself. But if it's the case then the `Prim2DBase` or `Group2D` are likely to be your starting point. This case won't be detailed in this tutorial, chances are pretty low that you'd like to do that, but if it's the case don't hesitate to ask in the HTML5 Forum (mentioning @nockawa).
2. It's a renderable primitive, in this case you have a choice to make between:
    - Is it a parametric shape? Some kind of primitive mathematically computed which tends to represent a custom surface that will be made of a Fill Content and/or a Border. If so the `Shape2D` is your base class and you will work following the example of the `Rectangle2D` implementation.
    - Is it something else, more bitmap based? So the `RenderablePrim2D` class is for you. The `Sprite2D` or `Text2D` will be good examples. 
        - If your primitive is made of a single element to render (like the `Sprite2D` which is one bitmap), `Sprite2D` is a good choice. 
        - If your primitive is rendered using multiple elements, like the `Text2D` which render one element per letter, if it's the case then `Text2D` is a good example to follow.

## Typical Architecture
For now we only mentioned the main class, but there is more around it to achieve our goal, so let's describe your typical shopping list:
 - The primitive main class: it's what we talked about just before, that the class the user will work with to create instances of your primitive type in the Canvas.
 - The ModelRenderCache class: this class will store the rendering resources, used by all instances of your primitives, needed to render your primitive in babylon.js.
 - The InstanceData class: this class will serves as proxy to store information needed to be sent to the Vertex Shader that will render a given part element.
 - The Vertex/Fragment Shaders: GLSL Shaders that will have the responsibility to draw your primitive in the Canvas.

### Caching consideration and rendering optimization
The whole architecture was designed to render as many instances of the a given primitive type sharing common properties in one Draw Call (when the Instanced Array extension is available), but it's not possible to render all possible variations of a primitive type instances through the same Shader pipeline.
Let's give an example: the `Shape2D` based primitives have two parts: Border and Content, each Part will be rendered using one call, but all the Fill Part instances using a `SolidColorBrush2D` will have properties and a vertex shader path that will be different from the Fill Part instance using a `GradientColorBrush2D`. But some properties like the Rectangle Width, Height or RoundRadius could differ for all instances while being drawn in only one call.

For this reason, in the Primitive class, you will define properties of your primitive type and tag them (using a TypeScript decorator) to specify how they behave regarding this caching mechanism.
There are three possible decorators:

1. `@modelLevelProperty`: each different values will lead to a specific instance of the corresponding RenderCache class of your primitive type.
2. `@instanceLevelProperty`: the data of the property will be tracked and stored in the InstanceData class corresponding of your primitive type, but it won't define in which model your instance belongs to.
3. `@dynamicLevelProperty`: the data of the property will be used as a part of the rendering process but won't affect the model selection and won't be stored in the instance data. It's more like a general run-time setting.

These decorators will also provide additional features:
They will overload the setter you implement to detect when the property's value is changing and when its the case perform additional tasks such as marking the primitive instance dirty for render, recompute its boundingInfo, raise the PropertyChanged observable to notify observer of the change.

## Implementing the Primtive based class
Once you've chose which Primitive to extend you will create your class. Here's an excerpt of the `Sprite2D` class. Pay attention to the comments for explanation.

```javascript
// The @className decorator is mandatory, just give the name of the class, it's neede to build the metadata
//   needed to perform cache creation/synchronization in a generic way.
@className("Sprite2D")
export class Sprite2D extends RenderablePrim2D {
    // This static define the ID of the only part present in the Primitive. Shape2D would have two of them.
    static SPRITE2D_MAINPARTID = 1;

    // Each property decorated with a @xxxLevelProperty will have to declare one static member like this to 
    //  store the property metatdata created by the decorator.
    public static textureProperty: Prim2DPropInfo;
    public static spriteSizeProperty: Prim2DPropInfo;

    // Define the texture property getter/setter, the decorator used is modelLevel, it's understandable 
    //  because we can't draw two sprites using a different texture in the same draw call. So each 
    //  different Texture will lead to its own ModelRenderCache instance, storing a property reference 
    //  the appropriate texture.
    @modelLevelProperty(RenderablePrim2D.RENDERABLEPRIM2D_PROPCOUNT + 1, 
                        pi => Sprite2D.textureProperty = pi)
    public get texture(): Texture {
        return this._texture;
    }

    public set texture(value: Texture) {
        this._texture = value;
    }

    // Define the spriteSize property getter/setter, de decorator used is instanceLevel, no matter the size
    //  used the ModelRenderCache won't change, the data will be stored in the InstanceData based object.
    //  The true at the end of the decorator specify that a change of value on this property must trigger
    //  a recomputation of the boundingInfo object.
    @instanceLevelProperty(RenderablePrim2D.RENDERABLEPRIM2D_PROPCOUNT + 2, 
                           pi => Sprite2D.spriteSizeProperty = pi, false, true)
    public get spriteSize(): Size {
        return this._size;
    }

    public set spriteSize(value: Size) {
        this._size = value;
    }

    ... more properties declared ...

    // You have to implement this method to compute the boundingInfo based on the appropriate properties of 
    //  your primitive
    protected updateLevelBoundingInfo() {
        BoundingInfo2D.CreateFromSizeToRef(this.spriteSize, this._levelBoundingInfo);
    }

    // A general convention in the Canvas2D feature wants you to avoid creation of instance through 
    //  constructor, you will have to rely on a CreateXXX static method in the Primitive Type. These method
    //  will then call the setup method below which will perform initialization of this class level and 
    //  also the based class one through the call to this.setupRenderablePrim2D in this case.
    protected setupSprite2D(owner: Canvas2D, parent: Prim2DBase, id: string, position: Vector2, texture: Texture, spriteSize: Size, spriteLocation: Vector2, invertY: boolean) {
        this.setupRenderablePrim2D(owner, parent, id, position, true);
        this.texture = texture;
        this.texture.wrapU = Texture.CLAMP_ADDRESSMODE;
        this.texture.wrapV = Texture.CLAMP_ADDRESSMODE;
        this.spriteSize = spriteSize;
        this.spriteLocation = spriteLocation;
        this.spriteFrame = 0;
        this.invertY = invertY;
        this._isTransparent = true;
    }

    // This is the method the user must call to create an instance of the Sprite2D
    public static Create(parent: Prim2DBase, id: string, x: number, y: number, texture: Texture, 
                spriteSize: Size, spriteLocation: Vector2, invertY: boolean = false): Sprite2D {
        Prim2DBase.CheckParent(parent);

        let sprite = new Sprite2D();
        sprite.setupSprite2D(parent.owner, parent, id, new Vector2(x, y), texture, spriteSize, spriteLocation, invertY);
        return sprite;
    }

    // This method is fairly simple in this case, it must create an instance of the ModelRenderCache 
    //  corresponding to the primitive type. The modelKey is a unique string defining this particular 
    //  instance, it is created from the primitive type and the model level property name/value. 
    // This is how the engine detect if a model already exist and be used or if it must be created.
    protected createModelRenderCache(modelKey: string, isTransparent: boolean): ModelRenderCache {
        let renderCache = new Sprite2DRenderCache(this.owner.engine, modelKey, isTransparent);
        return renderCache;
    }

    // This method will be called to setup a ModelRenderCached created by the method above, this is where
    //  you will create the many rendering resources needed to render all the instances sharing this 
    //  ModelRenderCache: VertexBuffer, IndexBuffer, Effect, Texture, etc. Please pay attention to the
    //  comment for the 'this.getDataPartEffectInfo' method call.
    protected setupModelRenderCache(modelRenderCache: ModelRenderCache) {
        let renderCache = <Sprite2DRenderCache>modelRenderCache;
        let engine = this.owner.engine;

        let vb = new Float32Array(4);
        for (let i = 0; i < 4; i++) {
            vb[i] = i;
        }
        renderCache.vb = engine.createVertexBuffer(vb);

        let ib = new Float32Array(6);
        ib[0] = 0;
        ib[1] = 2;
        ib[2] = 1;
        ib[3] = 0;
        ib[4] = 3;
        ib[5] = 2;

        renderCache.ib = engine.createIndexBuffer(ib);

        renderCache.texture = this.texture;

        // Creating an Effect is a tricky thing, because all the wiring is defined there, you have to 
        //  specify the shaders used, the attributes, uniform and samplers declared in the Shader and also
        //  some defines that will alter the compilation of the Shader based on some variations.
        // Thanks to all the metadata built for the decorators you used on the primitive properties,
        //   you can call the this.getDataPartEffectInfo method to get most of the data automatically. 
        // This method takes the PartID of the data you want to retrieve and the attributes that will be
        //  mapped from the VertexBuffer you created, in this case we have only one vertex buffer, 
        //  containing one attribute called "index" (intialized by the "vb" Float32Array);
        // The method will return the attributes, uniforms and defines to inject in the Effect creation.
        // Depending of if the Instanced Array WebGL extension is available, some data will be declared
        //  either as attribute or uniforms and a specific define will be used to make sure the Shader
        //  compile accordingly.
        var ei = this.getDataPartEffectInfo(Sprite2D.SPRITE2D_MAINPARTID, ["index"]);
        renderCache.effect = engine.createEffect({ vertex: "sprite2d", fragment: "sprite2d" }, ei.attributes, ei.uniforms, ["diffuseSampler"], ei.defines, null);

        return renderCache;
    }

    // This method must create an array of the InstanceData object dedicated to this primitive type, 
    //  fairly simple.
    protected createInstanceDataParts(): InstanceDataBase[] {
        return [new Sprite2DInstanceData(Sprite2D.SPRITE2D_MAINPARTID)];
    }

    // This method will be triggered by the Rendering Engine when needed to refresh the InstanceData from
    //  the Primitive instance.
    // You'll get more information in the Instance Data section of this tutorial.
    protected refreshInstanceDataPart(part: InstanceDataBase): boolean {
        if (!super.refreshInstanceDataPart(part)) {
            return false;
        }

        if (part.id === Sprite2D.SPRITE2D_MAINPARTID) {
            let d = <Sprite2DInstanceData>this._instanceDataParts[0];
            let ts = this.texture.getSize();
            let sl = this.spriteLocation;
            let ss = this.spriteSize;
            d.topLeftUV = new Vector2(sl.x / ts.width, sl.y / ts.height);
            let suv = new Vector2(ss.width / ts.width, ss.height / ts.height);
            d.sizeUV = suv;
            d.frame = this.spriteFrame;
            d.textureSize = new Vector2(ts.width, ts.height);
            d.invertY = this.invertY ? 1 : 0;
        }
        return true;
    }

    private _texture: Texture;
    private _size: Size;
    private _location: Vector2;
    private _spriteFrame: number;
    private _invertY: boolean;
}

```

## Implementing the ModelRenderCache class

So you have to create a class extending the ModelRenderCache, it will stores the rendering resources and be responsible of rendering your primitive parts.

Again, here's an excerpt of the Sprite2D's ModelRenderCache, pay attention to the specific comments for more information.

```javascript
export class Sprite2DRenderCache extends ModelRenderCache {
    // The vertex buffer containing the four vertices of the Sprite
    vb: WebGLBuffer;
    
    // The index buffer containing two triangles to define the rectangle of the Sprite
    ib: WebGLBuffer;

    // An array of InstancingAttributeInfo which contains the metadata to inject to configure the Instanced
    //  Array during rendering
    instancingAttributes: InstancingAttributeInfo[];

    // The Texture used to render the Sprite
    texture: Texture;

    // The Effect used to render the Sprite
    effect: Effect;

    // This is the render method that will be called each time a given Model Render Cache must render all
    //  the primitives' instance data it owns. 
    render(instanceInfo: GroupInstanceInfo, context: Render2DContext): boolean {
        // Do nothing if the shader is still loading/preparing, it's important to make this check and return
        //  false because the Rendering Engine will know the rendering couldn't be done and it will submit 
        //  a new one next time.
        // When the content is cached, rendering is performed just once in a texture, it better be good!
        if (!this.effect.isReady() || !this.texture.isReady()) {
            return false;
        }

        var engine = instanceInfo._owner.owner.engine;

        // Enagle the effect, set the texture and bind the Vertex and Index Buffer to the Effect
        engine.enableEffect(this.effect);
        this.effect.setTexture("diffuseSampler", this.texture);
        engine.bindBuffers(this.vb, this.ib, [1], 4, this.effect);

        // Save and set the alpha mode
        var cur = engine.getAlphaMode();
        engine.setAlphaMode(Engine.ALPHA_COMBINE);

        // Get the count of instance data to render
        let count = instanceInfo._instancesPartsData[0].usedElementCount;

        // Two paths: one for when Instanced Array is supported and its fallback in case it's not.
        if (instanceInfo._owner.owner.supportInstancedArray) {
            // Load the instancingAttributes if it's the first render
            if (!this.instancingAttributes) {
                this.instancingAttributes = this.loadInstancingAttributes(Sprite2D.SPRITE2D_MAINPARTID, this.effect);
            }

            // Setup the Instanced Array buffer, here as there's only one Part for Sprite2D the 
            //  _instancesPartsBuffer array has only one element which is the Instanced Buffer, we use the
            //  instancedAttributes we got earlier to setup the bindings.
            engine.updateAndBindInstancesBuffer(instanceInfo._instancesPartsBuffer[0], null, this.instancingAttributes);

            // Draw all the instance data
            engine.draw(true, 0, 6, count);

            // Unbind the Instanced Buffer
            engine.unBindInstancesBuffer(instanceInfo._instancesPartsBuffer[0], this.instancingAttributes);
        } else {
            // Fallback in case Instanced Array is not support, it's a for loop that render all instance
            //  data, one by one The setupUnifroms methods take automatically care of the wiring to the
            //  Shader uniforms for you.
            for (let i = 0; i < count; i++) {
                this.setupUniforms(this.effect, 0, instanceInfo._instancesPartsData[0], i);
                engine.draw(true, 0, 6);
            }
        }

        // Restore the previous alpha mode
        engine.setAlphaMode(cur);

        // Return true as we perform the rendering successfully
        return true;
    }

    // Typicall dispose method, clean up all the resources. Pay attention to the super.dispose() call, if
    //  false is returned it means the object is already disposed.
    public dispose(): boolean {
        if (!super.dispose()) {
            return false;
        }

        if (this.vb) {
            this._engine._releaseBuffer(this.vb);
            this.vb = null;
        }

        if (this.ib) {
            this._engine._releaseBuffer(this.ib);
            this.ib = null;
        }

        if (this.texture) {
            this.texture.dispose();
            this.texture = null;
        }

        if (this.effect) {
            this._engine._releaseEffect(this.effect);
            this.effect = null;
        }

        return true;
    }
}
```

## Implementing the InstanceData class
The third and last class to implement is the one that describes all the data to store for one Part Element in the Instanced Array. The Sprite2D implementation is fairly simple, so we will also cover another one.

```javascript
export class Sprite2DInstanceData extends InstanceDataBase {
    constructor(partId: number) {
        super(partId, 1);
    }

    @instanceData()
    get topLeftUV(): Vector2 {
        return null;
    }

    @instanceData()
    get sizeUV(): Vector2 {
        return null;
    }

    @instanceData()
    get textureSize(): Vector2 {
        return null;
    }

    @instanceData()
    get frame(): number {
        return null;
    }

    @instanceData()
    get invertY(): number {
        return null;
    }
}
```

We simply define all the data that must be present for one element in the Instanced Array. This is no big deal because the Sprite2D primitive has no variation, which mean the data to store has always the same structure.
Pay attention though that this class extends the instanceDataBase one, which also define instanceData properties.
On more thing to notice: we only define getter property which...returns null! This is totally normal and it's what you must do. Why? Because the decorator will replace your implementation by its own which is...way more complex!
To summarize, the data is not stored in the instance of this class but inside a big Float32Array where all the other InstanceData also store their value. This array is then used (when needed) to update the Instance Array buffer.

Ok, let's take a look to a more complex implementation: the `Shape2D` one:
```javascript
export class Shape2DInstanceData extends InstanceDataBase {
    // FILL ATTRIBUTES

    @instanceData(Shape2D.SHAPE2D_CATEGORY_FILLSOLID)
    get fillSolidColor(): Color4 {
        return null;
    }

    @instanceData(Shape2D.SHAPE2D_CATEGORY_FILLGRADIENT)
    get fillGradientColor1(): Color4 {
        return null;
    }

    @instanceData(Shape2D.SHAPE2D_CATEGORY_FILLGRADIENT)
    get fillGradientColor2(): Color4 {
        return null;
    }

    @instanceData(Shape2D.SHAPE2D_CATEGORY_FILLGRADIENT)
    get fillGradientTY(): Vector4 {
        return null;
    }

    // BORDER ATTRIBUTES

    @instanceData(Shape2D.SHAPE2D_CATEGORY_BORDER)
    get borderThickness(): number {
        return null;
    }

    @instanceData(Shape2D.SHAPE2D_CATEGORY_BORDERSOLID)
    get borderSolidColor(): Color4 {
        return null;
    }

    @instanceData(Shape2D.SHAPE2D_CATEGORY_BORDERGRADIENT)
    get borderGradientColor1(): Color4 {
        return null;
    }

    @instanceData(Shape2D.SHAPE2D_CATEGORY_BORDERGRADIENT)
    get borderGradientColor2(): Color4 {
        return null;
    }

    @instanceData(Shape2D.SHAPE2D_CATEGORY_BORDERGRADIENT)
    get borderGradientTY(): Vector4 {
        return null;
    }
}
```
So you can see the decorator is using an optional parameter which defines a Category. This is needed because when you create and instance of a Shape2D based class, you have the choice to use either a Border, Fill Content or both. Based on this configuration the data sent to the VertexShader must be structured accordingly.
This is what the category is all about. It defines which property belong to a give category and the VertexShader on the other side uses `#define` statement to declare the attributes corresponding to a given category and also the Code to execution to perform the rendering accordingly.

## The Shaders

Finally you have to defined the Shader files, these are two files that by convention must be stored in the Src/Shaders folder of babylon.js and be named [shader].vertex.fx and [shader].fragment.fx.

sprite2d.vertex.fx
```javascript
// based on if Instanced Array are supported or not, declare the field either as attribute or uniform
#ifdef Instanced
#define att attribute
#else
#define att uniform
#endif

// Attribute of the Vertex Buffer
attribute float index;

// Attribute defined in Sprite2DInstanceData
att vec2 topLeftUV;
att vec2 sizeUV;
att vec2 textureSize;
att float frame;
att float invertY;

// Attribute defined in InstanceDataBase
att vec2 zBias;
att vec4 transformX;
att vec4 transformY;
att vec2 origin;

// Additional Vertex Shader output (along with gl_position)
varying vec2 vUV;

void main(void) {

	vec2 pos2;

	//vec2 off = vec2(1.0 / textureSize.x, 1.0 / textureSize.y);
	vec2 off = vec2(0.0, 0.0);

	// Left/Top
	if (index == 0.0) {
		pos2 = vec2(0.0, 0.0);
		vUV = vec2(topLeftUV.x + (frame*sizeUV.x) + off.x, topLeftUV.y - off.y);
	}

	// Left/Bottom
	else if (index == 1.0) {
		pos2 = vec2(0.0,  1.0);
		vUV = vec2(topLeftUV.x + (frame*sizeUV.x) + off.x, (topLeftUV.y + sizeUV.y));
	}

	// Right/Bottom
	else if (index == 2.0) {
		pos2 = vec2( 1.0,  1.0);
		vUV = vec2(topLeftUV.x + sizeUV.x + (frame*sizeUV.x), (topLeftUV.y + sizeUV.y));
	}

	// Right/Top
	else if (index == 3.0) {
		pos2 = vec2( 1.0, 0.0);
		vUV = vec2(topLeftUV.x + sizeUV.x + (frame*sizeUV.x), topLeftUV.y - off.y);
	}

	if (invertY == 1.0) {
		vUV.y = 1.0 - vUV.y;
	}

    // Perform the transformation from a uniform coordinate system (the Sprite was defined in the range
    //  [0;1] on both the X and Y axes to the rendering target (the Canvas or a cached texture to update)
	vec4 pos;
	pos.xy = (pos2.xy - origin) * sizeUV * textureSize;
	pos.z = 1.0;
	pos.w = 1.0;
	gl_Position = vec4(dot(pos, transformX), dot(pos, transformY), zBias.x, zBias.y);
}	
```

sprite2d.fragment.fx
```javascript
varying vec2 vUV;
uniform sampler2D diffuseSampler;

void main(void) {
    // Fetch the texel
	vec4 color = texture2D(diffuseSampler, vUV);

    // Discard the pixel rendering if the texel's alpha is 0
	if (color.w == 0.0) {
		discard;
	}

    // Otherwise fetch the texel's color in the pixel to render
	gl_FragColor = color;
}
```

## Something more tricky: the Rectangle2D case
Rendering a sprite is fairly easy, one might think the same about a rectangle, but things get quickly more complicate when you have several settings for your rectangle and still aim to render a lot of them into the fewest possible Draw Calls.

The `Rectangle2D` class is based on the `Shape2D` one, so we have to support two parts: Fill Content and Border both optional (but at least one specified, otherwise, what's the point!?), each part is drawn using a Brush, the rendering process will greatly depends on the type of the Brush selected. So it's already a lot of variations.

#### Make it efficient
But we also want to render Rectangle of any width, height, roundRadius in one draw call, otherwise chances to benefit of the Instanced Array feature are really low (if you have to have two rectangle sharing these same values).

What makes it so hard is the roundRadius feature, without it a simple non uniform scale along X and Y would have suffice to render rectangle of any width and height, but when you consider the roundRadius, you can't do that anymore because you can't apply the scale on this. Furthermore the value of the roundRadius must lead to specific computation.

The top rectangle has a roundRadius of 10 and the bottom one has 40, both rectangles have identical width and height.

![RoundRadius](http://i.imgur.com/h2lErFG.png)

The solution to this if to compute the vertices of the shape in a parametric way. For the Fill Content Part, we create a vertex buffer that only store a list of numbers from 0 to 64 (the default setting is to use 16 vertices per round corner, don't forget the center as the 65th vertex). The Border Content Part has a Vertex Buffer with 128 value, based on the same system but every value from [0;63] are the inner border and those from [64;127] are the outer border to compute.

The Vertex Shader then determine which corner the vertex to compute belong and apply the appropriate transformation for it.

#### Things to notice
We won't describe the whole implementation, it would be too cumbersome (for me!).

Some points needs to be understood, let's describe them!

##### Shape2D specificities

Here is an excerpt of the `Shape2D` class, only the things that interest us are shown:

```javascript
@className("Shape2D")
export class Shape2D extends RenderablePrim2D {
    // The Shape2D defines two parts, these static field define them
    static SHAPE2D_BORDERPARTID            = 1;
    static SHAPE2D_FILLPARTID              = 2;

    // There are four category to consider when tagging the propeties (ok, the 6th category being 
    //  "no category", which is the default)
    static SHAPE2D_CATEGORY_BORDER         = "Border";
    static SHAPE2D_CATEGORY_BORDERSOLID    = "BorderSolid";
    static SHAPE2D_CATEGORY_BORDERGRADIENT = "BorderGradient";
    static SHAPE2D_CATEGORY_FILLSOLID      = "FillSolid";
    static SHAPE2D_CATEGORY_FILLGRADIENT   = "FillGradient";

    // It hasn't be mentionned before, but each Property tagged with a @xxxxLevelProperty decorator must be
    //  assigned a unique id, these static defines the starting ID for all classes that will derive from
    //  `Shape2D`, which means `Shape2D` can't defines more than 5 properties rightnow.
    static SHAPE2D_PROPCOUNT: number = RenderablePrim2D.RENDERABLEPRIM2D_PROPCOUNT + 5;

    // Border and Fill property are worth to mention, see below why
    public static borderProperty: Prim2DPropInfo;
    public static fillProperty: Prim2DPropInfo;

    ...

    // The `true` at the end of the decorator declaration means we won't use the **value** of the `border`
    //  property to build the ModelKey, but the type of the object assigned instead.
    // What is means in this case is a ModelRenderCache will be able to render any different 
    //  SolidColorBrush instances in one call, but GradientColorBrush instance will be handled by 
    //  another ModelRenderCache.
    @modelLevelProperty(RenderablePrim2D.RENDERABLEPRIM2D_PROPCOUNT + 1, 
                        pi => Shape2D.borderProperty = pi, true)
    public get border(): IBrush2D {
        return this._border;
    }

    public set border(value: IBrush2D) {
        this._border = value;
        this._updateTransparencyStatus();
    }

    // Same as above, but for the `fill` property.
    @modelLevelProperty(RenderablePrim2D.RENDERABLEPRIM2D_PROPCOUNT + 2, 
                        pi => Shape2D.fillProperty = pi, true)
    public get fill(): IBrush2D {
        return this._fill;
    }

    public set fill(value: IBrush2D) {
        this._fill = value;
        this._updateTransparencyStatus();
    }

    ...

    // This method must be implemented if your Primitive is based on category to define the different
    //  available variations. For the given Data Part we analyze its property and determine the categories
    //  that must be used and return them.
    // The Engine will use it to define the data structure of the Instance Data and to know what is to
    //  synchronize.
    protected getUsedShaderCategories(dataPart: InstanceDataBase): string[] {
        var cat = super.getUsedShaderCategories(dataPart);

        // Fill Part
        if (dataPart.id === Shape2D.SHAPE2D_FILLPARTID) {
            let fill = this.fill;
            if (fill instanceof SolidColorBrush2D) {
                cat.push(Shape2D.SHAPE2D_CATEGORY_FILLSOLID);
            }
            if (fill instanceof GradientColorBrush2D) {
                cat.push(Shape2D.SHAPE2D_CATEGORY_FILLGRADIENT);
            }
        }

        // Border Part
        if (dataPart.id === Shape2D.SHAPE2D_BORDERPARTID) {
            cat.push(Shape2D.SHAPE2D_CATEGORY_BORDER);

            let border = this.border;
            if (border instanceof SolidColorBrush2D) {
                cat.push(Shape2D.SHAPE2D_CATEGORY_BORDERSOLID);
            }
            if (border instanceof GradientColorBrush2D) {
                cat.push(Shape2D.SHAPE2D_CATEGORY_BORDERGRADIENT);
            }
        }

        return cat;
    }

    // A more complex implementation of the refresh method. Which consider the two possilble parts.
    protected refreshInstanceDataPart(part: InstanceDataBase): boolean {
        if (!super.refreshInstanceDataPart(part)) {
            return false;
        }

        // Fill Part
        if (part.id === Shape2D.SHAPE2D_FILLPARTID) {
            let d = <Shape2DInstanceData>part;

            if (this.fill) {
                let fill = this.fill;
                if (fill instanceof SolidColorBrush2D) {
                    d.fillSolidColor = fill.color;
                } else if (fill instanceof GradientColorBrush2D) {
                    d.fillGradientColor1 = fill.color1;
                    d.fillGradientColor2 = fill.color2;
                    var t = Matrix.Compose(new Vector3(fill.scale, fill.scale, fill.scale), Quaternion.RotationAxis(new Vector3(0, 0, 1), fill.rotation), new Vector3(fill.translation.x, fill.translation.y, 0));

                    let ty = new Vector4(t.m[1], t.m[5], t.m[9], t.m[13]);
                    d.fillGradientTY = ty;
                }
            }
        }

        else if (part.id === Shape2D.SHAPE2D_BORDERPARTID) {
            let d = <Shape2DInstanceData>part;

            if (this.border) {
                d.borderThickness = this.borderThickness;

                let border = this.border;
                if (border instanceof SolidColorBrush2D) {
                    d.borderSolidColor = border.color;
                } else if (border instanceof GradientColorBrush2D) {
                    d.borderGradientColor1 = border.color1;
                    d.borderGradientColor2 = border.color2;
                    var t = Matrix.Compose(new Vector3(border.scale, border.scale, border.scale), Quaternion.RotationAxis(new Vector3(0, 0, 1), border.rotation), new Vector3(border.translation.x, border.translation.y, 0));

                    let ty = new Vector4(t.m[1], t.m[5], t.m[9], t.m[13]);
                    d.borderGradientTY = ty;
                }
            }
        }

        return true;
    }

    private _updateTransparencyStatus() {
        this.isTransparent = (this._border && this._border.isTransparent()) || (this._fill && this._fill.isTransparent());
    }

    private _border: IBrush2D;
    private _borderThickness: number;
    private _fill: IBrush2D;
}
```

You already saw above the content of the `Shape2DInstanceData` class.

##### Rectangle2D specificities

There's not much to say about the Rectangle2D class, but here's what should stand out:

```javascript
@className("Rectangle2D")
export class Rectangle2D extends Shape2D {

    ...

    // Here we create the InstanceData for the used Parts and return the array containing them.
    protected createInstanceDataParts(): InstanceDataBase[] {
        var res = new Array<InstanceDataBase>();
        if (this.border) {
            res.push(new Rectangle2DInstanceData(Shape2D.SHAPE2D_BORDERPARTID));
        }
        if (this.fill) {
            res.push(new Rectangle2DInstanceData(Shape2D.SHAPE2D_FILLPARTID));
        }
        return res;
    }

    // Here we use the part.id to determine which Part is to refresh
    protected refreshInstanceDataPart(part: InstanceDataBase): boolean {
        if (!super.refreshInstanceDataPart(part)) {
            return false;
        }
        if (part.id === Shape2D.SHAPE2D_BORDERPARTID) {
            let d = <Rectangle2DInstanceData>part;
            let size = this.size;
            d.properties = new Vector3(size.width, size.height, this.roundRadius || 0);
        }
        else if (part.id === Shape2D.SHAPE2D_FILLPARTID) {
            let d = <Rectangle2DInstanceData>part;
            let size = this.size;
            d.properties = new Vector3(size.width, size.height, this.roundRadius || 0);
        }
        return true;
    }
}
```

There's a bit more in the ModelRendeCache based class:

```javascript
export class Rectangle2DRenderCache extends ModelRenderCache {

    ...

    render(instanceInfo: GroupInstanceInfo, context: Render2DContext): boolean {
        // Do nothing if the shader is still loading/preparing
        if ((this.effectFill && !this.effectFill.isReady()) || (this.effectBorder && !this.effectBorder.isReady())) {
            return false;
        }

        var engine = instanceInfo._owner.owner.engine;

        ...

        // Render the Fill Part if any
        if (this.effectFill) {
            // This line is important! Every properties in the instanceInfo are arrays storing data for the
            //  used Parts, you have to call this method to get the index to use for each array for the Part
            //  Id you care about.
            let partIndex = instanceInfo._partIndexFromId.get(Shape2D.SHAPE2D_FILLPARTID.toString());

            engine.enableEffect(this.effectFill);
            engine.bindBuffers(this.fillVB, this.fillIB, [1], 4, this.effectFill);
            let count = instanceInfo._instancesPartsData[partIndex].usedElementCount;
            if (instanceInfo._owner.owner.supportInstancedArray) {
                if (!this.instancingFillAttributes) {
                    // Compute the offset locations of the attributes in the vertex shader that will be
                    //  mapped to the instance buffer data
                    this.instancingFillAttributes = 
                       this.loadInstancingAttributes(Shape2D.SHAPE2D_FILLPARTID, this.effectFill);
                }

                engine.updateAndBindInstancesBuffer(instanceInfo._instancesPartsBuffer[partIndex], null,
                    this.instancingFillAttributes);
                engine.draw(true, 0, this.fillIndicesCount, count);
                engine.unBindInstancesBuffer(instanceInfo._instancesPartsBuffer[partIndex], this.instancingFillAttributes);
            } else {
                for (let i = 0; i < count; i++) {
                    this.setupUniforms(this.effectFill, partIndex, 
                          instanceInfo._instancesPartsData[partIndex], i);
                    engine.draw(true, 0, this.fillIndicesCount);                        
                }
            }
        }

        if (this.effectBorder) {
            // Same as above, but for the border Part
            let partIndex = instanceInfo._partIndexFromId.get(Shape2D.SHAPE2D_BORDERPARTID.toString());

            engine.enableEffect(this.effectBorder);
            engine.bindBuffers(this.borderVB, this.borderIB, [1], 4, this.effectBorder);
            let count = instanceInfo._instancesPartsData[partIndex].usedElementCount;
            if (instanceInfo._owner.owner.supportInstancedArray) {
                if (!this.instancingBorderAttributes) {
                    this.instancingBorderAttributes = this.loadInstancingAttributes(Shape2D.SHAPE2D_BORDERPARTID, this.effectBorder);
                }

                engine.updateAndBindInstancesBuffer(instanceInfo._instancesPartsBuffer[partIndex], null,
                    this.instancingBorderAttributes);
                engine.draw(true, 0, this.borderIndicesCount, count);
                engine.unBindInstancesBuffer(instanceInfo._instancesPartsBuffer[partIndex], this.instancingBorderAttributes);
            } else {
                for (let i = 0; i < count; i++) {
                    this.setupUniforms(this.effectBorder, partIndex, 
                        instanceInfo._instancesPartsData[partIndex], i);
                    engine.draw(true, 0, this.borderIndicesCount);
                }
            }
        }

        ...

        return true;
    }
}
```

The Vertex Shader, just for fun:

```javascript
// based on if Instanced Array are supported or not, declare the field either as attribute or uniform
#ifdef Instanced
#define att attribute
#else
#define att uniform
#endif

// The unique attribute of the Vertex Buffer, note it's declared with attribute and not "att" because it's
//  ALWAYS an attribute!
attribute float index;

// Data corresponding to InstanceDataBase
att vec2 zBias;
att vec4 transformX;
att vec4 transformY;
att vec2 origin;

// Data based on the different categories
#ifdef Border
att float borderThickness;
#endif

#ifdef FillSolid
att vec4 fillSolidColor;
#endif

#ifdef BorderSolid
att vec4 borderSolidColor;
#endif

#ifdef FillGradient
att vec4 fillGradientColor1;
att vec4 fillGradientColor2;
att vec4 fillGradientTY;
#endif

#ifdef BorderGradient
att vec4 borderGradientColor1;
att vec4 borderGradientColor2;
att vec4 borderGradientTY;
#endif

// Mandatory attribute of the Rectangle2D primitive
// xyz are: width, height, roundRadius (0.0 for simple rectangle with four vertices)
att vec3 properties;

// First index is the center, then there's four sections of 16 subdivisions

#define rsub0 17.0
#define rsub1 33.0
#define rsub2 49.0
#define rsub3 65.0
#define rsub 64.0
#define TWOPI 6.28318530

// Output
varying vec2 vUV;
varying vec4 vColor;

void main(void) {

	vec2 pos2;

	// notRound case, only five vertices, 0 is center, then the 4 other for perimeter
	if (properties.z == 0.0) {
		if (index == 0.0) {
			pos2 = vec2(0.5, 0.5);
		} 
		else if (index == 1.0) {
			pos2 = vec2(1.0, 1.0);
		} 
		else if (index == 2.0) {
			pos2 = vec2(1.0, 0.0);
		}
		else if (index == 3.0) {
			pos2 = vec2(0.0, 0.0);
		} 
		else {
			pos2 = vec2(0.0, 1.0);
		}
	}
	else 
	{
#ifdef Border
		float w = properties.x;
		float h = properties.y;
		float r = properties.z;
		float nru = r / w;
		float nrv = r / h;
		vec2 borderOffset = vec2(1.0, 1.0);

		float segi = index;
		if (index < rsub) {
			borderOffset = vec2(1.0-(borderThickness*2.0 / w), 1.0-(borderThickness*2.0 / h));
		}
		else {
			segi -= rsub;
		}

		// right/bottom
		if (segi < rsub0) {
			pos2 = vec2(1.0 - nru, nrv);
		}
		// left/bottom
		else if (segi < rsub1) {
			pos2 = vec2(nru, nrv);
		}
		// left/top
		else if (segi < rsub2) {
			pos2 = vec2(nru, 1.0 - nrv);
		}
		// right/top
		else {
			pos2 = vec2(1.0 - nru, 1.0 - nrv);
		}

		float angle = TWOPI - ((index - 1.0) * TWOPI / (rsub - 0.5));
		pos2.x += cos(angle) * nru;
		pos2.y += sin(angle) * nrv;

		pos2.x = ((pos2.x - 0.5) * borderOffset.x) + 0.5;
		pos2.y = ((pos2.y - 0.5) * borderOffset.y) + 0.5;

#else
		if (index == 0.0) {
			pos2 = vec2(0.5, 0.5);
		}
		else {
			float w = properties.x;
			float h = properties.y;
			float r = properties.z;
			float nru = r / w;
			float nrv = r / h;

			// right/bottom
			if (index < rsub0) {
				pos2 = vec2(1.0 - nru, nrv);
			}
			// left/bottom
			else if (index < rsub1) {
				pos2 = vec2(nru, nrv);
			}
			// left/top
			else if (index < rsub2) {
				pos2 = vec2(nru, 1.0 - nrv);
			}
			// right/top
			else {
				pos2 = vec2(1.0 - nru, 1.0 - nrv);
			}

			float angle = TWOPI - ((index - 1.0) * TWOPI / (rsub - 0.5));
			pos2.x += cos(angle) * nru;
			pos2.y += sin(angle) * nrv;
		}
#endif
	}

#ifdef FillSolid
	vColor = fillSolidColor;
#endif

#ifdef BorderSolid
	vColor = borderSolidColor;
#endif

#ifdef FillGradient
	float v = dot(vec4(pos2.xy, 1, 1), fillGradientTY);
    // As Y is inverted, Color2 first, then Color1
	vColor = mix(fillGradientColor2, fillGradientColor1, v);
#endif

#ifdef BorderGradient
	float v = dot(vec4(pos2.xy, 1, 1), borderGradientTY);
    // As Y is inverted, Color2 first, then Color1
	vColor = mix(borderGradientColor2, borderGradientColor1, v);	
#endif

    // Transformation from the uniform space (all data were ranged from [0;1] on both X and Y to 
    //  the target space (canvas or rendering texture used as a cache)
	vec4 pos;
	pos.xy = (pos2.xy - origin) * properties.xy;
	pos.z = 1.0;
	pos.w = 1.0;
	gl_Position = vec4(dot(pos, transformX), dot(pos, transformY), zBias.x, zBias.y);
}
```

That's all! Good luck and don't hesitate to ask for help in the forum at @Nockawa!