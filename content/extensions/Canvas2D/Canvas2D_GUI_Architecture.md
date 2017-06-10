# Babylon.js GUI Library Architecture/Design document

The Canvas2D feature was originally built to serve as the foundation for a GUI Library that would fulfill most of the needs required by Games or 3D Applications. 

This document describes how the GUI is designed, it can be helpful to understand and use it better.


### Requirements

The design of the GUI library were made considering the following as requirements:

 - Logic must be separated from Rendering through some kind of Styling/Templating mechanisms. A Button's purpose is to provide a Click action, but the rendering of the button may differ to be able to serve the many forthcoming scenarios.
 - Data Binding mechanism should be present to let the control gets the data directly to the source and to update it when necessary (two ways binding).
 - A Control may have different States (Normal, Disabled, Mouse over, Pressed, Focused, etc.), each state provides an alteration to the final render of the control.
 - Providing a Resource mechanism to store assets shared by many GUI components
 - Providing a Command Mechanism to execute code in response of a user's action.
 - 






Babylon.js is a full featured 3D engine, but the need to handle 2D content is often encountered when working on games or complex applications.
It is to provide an answer to this demand that we've developed the Canvas2D feature.

Canvas2D in a **non HTML** feature, **100% WebGL** based, developed to serve the purpose of drawing 2D Content.

### Few useful links

Go to the [Home Page](http://doc.babylonjs.com/overviews/Canvas2D_Home) as a good starting point.

For a first-time learning tutorial [go there](http://doc.babylonjs.com/tutorials/Using_the_Canvas2D).

To learn how to develop your own Primitive type, [it's here](http://doc.babylonjs.com/tutorials/How_to_create_your_own_Canvas2D_primitive).

## Features overview
A Canvas2D is a 2D rectangle with a position and a size, the size can be specified by the user or it is automatically computed to fit its content. To follow Open/WebGL standard, the origin of the canvas is at the **bottom/left** corner and not at the top/left as one would expect.

The Canvas can be rendered in two different spaces:

 - **ScreenSpace**: it lies above the rendered 3D Scene and is coplanar to the rendering viewport. Its position/rotation/scale is expressed in screen coordinate, with the origin being the top/left corner of the rendering viewport.
 - **WorldSpace**: the canvas has a position/rotation/scale that is expressed in World Coordinates, your canvas is like a 2D Rectangle lying in World Space, like any other 3D objects you can find in a 3D Scene.

In order to preserve a good balance between rendering time and memory consumption the user has the possibility to cache in a bitmap the content of a Group. Many caching strategies are predefined, hopefully for the user to always find what fits him/her the best.

The content of a Canvas is defined by a graph of primitives, they are rendered using Brushes (Border, Fill) &| Textures.

## Basic Types
Here is the basic types to work with.

### Prim2DBase
This is the base class for any object that are part of the content graph of a Canvas.
It features properties such as:

- Transformation properties: Position/Rotation/Scale. Position being X,Y, Rotation being a number in radian for the rotation along the Z axis, Scale being a number to provide uniform scale.
- Size: define the 2D size of the primitive, can be a bounding area.
- There's also actualPosition, actualSize properties that gives the real position and size, after layout and alignment was computed on the primitive. So you should always use these properties on get operations.
- Origin: define the origin of the primitive, default being 0.5,0.5, which is the center of the primitive, 0.0,0.0 would be the bottom/left corner of the primitive. The origin play a role in the rotation/scaling of the primitive but **not** in its positioning.
- LevelVisibility: define the visibility set for this particular Primitive, it's **not** the actual visibility in the canvas, see below.
- The IsVisible property will inform if the Primitive will be rendered or not in the Canvas. The visibility concept is hierarchical, if a Primitive has at least one parent set as not visible, it won't be too.
- zOrder. While the hierarchy give a sense of Z ordering (children being place above parents), the user can override it through this property.
- boundingInfo, every primitive has a bounding information maintained automatically. This info describe a bounding circle (with a Radius) and a bounding box (with a 2D Vector acting as the extent).
- Parent/Children: to navigate through the graph.
- LayoutEngine: the layout engine use to position/resize the children primitives, if you don't want a layout engine (which is the default behavior), do nothing, the CanvasLayoutEngine will be used by default and it doesn't change position/size of primitives.
- LayoutArea, LayoutAreaPos define the Area and its position of the zone allocated by the LayoutEngine to the Primitive.
- ContentArea define the area allocated for the children primitives. The Padding related properties will affect its value.
- Margin, Padding, MarginAlignment are used by the positioning engine to compute the actualPosition/actualSize of the primitive and also the ContentArea.

### Group2D
Acts as a container for its children, has no rendering itself. A group define a new frame of reference, the visibility status will also be applied to its children. Based on the Caching strategy defined at the Canvas level and also the Caching Behavior of the group, its content will be cached to a bitmap or rendered during the viewport rendering.

### Canvas2D
The main class that describes a Canvas, it derives from Group2D, inheriting its capabilities. A given Canvas belong to a given Scene, it's either defined in ScreenSpace or WorldSpace through the use of the ScreenSpaceCanvas2D or WorldSpaceCanvas2D classes, may have a Background &| Border.

### RenderablePrim2D
This is an abstract class, used for primitives that render in the Canvas. This class takes care of the model and instance caching of the rendering resources.

### Shape2D
This is the abstract to describe a generic shape, which is a 2D form, displayed either or both a border and fill content.

### Brushes

There's a IBrush2D TypeScript interface that can be implemented to define a specific type of Brush, that would be used to render a part or the totality of a Primitive.
Right now SolidColorBrush2D and GradientColorBrush2D are implemented

## Canvas & Group2D caching behaviors

It is critical to understand that Groups are defined either as Renderable or not (say Logical) and Cached or not.
This is defined by setting the Canvas Caching Strategy and overriding it at a Group Level with its cacheBehavior property.

A Renderable Group will contains the list of the primitive it's responsible to update and render.
A Logical Group will merely act as a container, a new reference frame which doesn't play a part in the rendering process.

If a Group is Renderable, it can be:

 - Cached, its whole content until the next Renderable Group down the graph will be Cached into a bitmap.
 - Not Cached, its whole content until the next Renderable Group down the graph will be rendered every time.

### Canvas Caching Strategy

When a Canvas is created you have to choose a Caching Strategy, one of these:

- `CACHESTRATEGY_TOPLEVELGROUPS` The Canvas itself won't be cached, but each of its direct children group will be cached (so their content, also including sub groups). If you have a Canvas spanning the whole rendering viewport (say 1920*1080 pixels) and the content of the Canvas is only one small Group at the Top Left and another at the Bottom Right of the viewport, then you don't want to cache the whole screen for that less. This mode will only create a cache bitmap for the space taken by the two groups.
- `CACHESTRATEGY_ALLGROUPS` The Canvas and each group will have their own cache, unless you change this behavior using the Group2D.cacheBehavior). This is by far the most memory consuming, but efficient if the content change frequently but at different pace. You can reduce greatly the amount of cache with Group2D.cacheBehavior though.
- `CACHESTRATEGY_CANVAS` Only the Canvas and its whole content will be cached. Simple and efficient if its size is ok for you and its content doesn't change every frame.
- `CACHESTRATEGY_DONTCACHE` Nothing is cached, every primitives are rendered every frame in the Viewport. Note this mode can only be chosen for ScreenSpace Canvas, World Space ones has to be cached at some level.

### Group Cache Behavior

Each instance of Group2D has a cacheBehavior property, with one of the following values:

- `GROUPCACHEBEHAVIOR_FOLLOWCACHESTRATEGY` Follow the strategy defined at the Canvas level, this is the default value.
- `GROUPCACHEBEHAVIOR_DONTCACHEOVERRIDE` Don't cache the Group's content whatever the strategy defines for this group.
- `GROUPCACHEBEHAVIOR_CACHEINPARENTGROUP` Cache the group's content in the first parent group that is cached.

## Architecture

### The Primitive Caching mechanisms
The challenge behind this feature is to render everything with the minimal amount of Draw calls and to compute/update the data needed for rendering only when necessary (i.e. something changes).

In order to reduce the WebGL Draw Calls, the architecture was designed to render the highest amount of instances of a given Primitive using the [Instanced Array feature](https://www.khronos.org/registry/webgl/extensions/ANGLE_instanced_arrays/) of WebGL. A fallback is available is the extension is not supported by the browser.

Several mechanisms are implemented to achieve that.

#### Properties Level
Each Primitive type won't probably be able to render any variations of its instances in a single call, because of the limitations imposed by the Vertex/Fragment Shader. But it's certainly possible to put several instances sharing the same given set of property/value into a single call.

To achieve that we breakdown each property of a primitive into three possible categories:

1. Model Level: each different value will lead to a specific render model, then one draw call. Two instances having two different values for a given property will lead to two different models to render.
2. Instance Level: the property can have any kind of value, it won't change the render model assigned to the instance.
3. Dynamic Level: the property doesn't play a part in the rendering.

For instance the Sprite2D Primitive has the following properties:

 - texture (model): the texture to use to render the sprite
 - spriteSize (instance): the size of the sprite
 - spriteLocation (instance): the location into the texture of the top/left corner of the sprite.

If we have three sprites: A, B, C. A and C are using the same texture, B is using another one. We will end up with two rendering models: one for A and C and another one for B. A and C will be drawn into a single call and B will also have one call for itself.

#### The Model Render Cache class
When an instance is about to be rendered, we access its Model Render Cache, it's an instance of a class dedicated to this primitive type which stores all the information to perform the rendering.

For a given type of Primitive there's as many different Model Render Cache instance as there's different combinations of properties declare with the Model Level.

Each primitive instance has a modelKey (accessible through the property 'modelKey') which is computed based on the primitive type and the different model level properties name+value.

The Model Render Cache creates all the resources to render the list of instances it has. If the user change the value of a property tagged with the Model Level, then its rendering instance will be removed from the old Model Render Cache and a new one will be created into the appropriate one.

A per primitive instance object is also created, it contains all the data that will be stored in the Instancing Array.

A third dedicated type is needed for each primitive type in order to describe these data that will fill the Instancing Array, that's the Instance Data.
Complex Primitives may be broke down into many different types of Instance Data, which are called **Parts**, for instance a Shape2D has a Border Part and a Fill Part. This will lead to two separated drawing calls.

A Primitive can stores *nth* instances of a Part. For instance the Text2D Primitive will store one Part Instance per letter contained in the displayed Text. All letters of all Text2D Primitives sharing the same font will be drawn in one call, which is very efficient.

Finally each property defined in a given InstanceData can belong to a category to make it optional. This is needed to support many types of Brushes in the same implementation of a Primitive Shaders.
For instance a Rectangle2D has a set of properties for the SolidColorBrush2D (just a Color4 for Border and Fill) and another one for the GradientColorBrush2D (Color1, Color2, Transformation information, for both Border and Fill).
The Canvas2D will take care of pretty much everything for the developers, creating the data array that will be mapped to the Instanced Array based on what combination is used, synchronize them, inject the right information in the Effect created to render the primitive (Attribute, Uniform, Defines) and setup everything up before the render call is submitted. This flexibility is achieved thanks to the decorator you use to describe a Primitive and its Instance Data.

To sum up, for the Sprite2D primitive we have:

- Sprite2D: the main class the user of the Canvas2D deals with to create sprites in the Canvas.
- Sprite2DRenderCache: a ModelRenderCache extended class that create the vertex buffer, index buffer, store the texture, the rendering effect, implements the rendering method and also hold the list of all instances using this model. The Instanced Array buffer containing the data to send to the GPU during the DrawInstanced call are store into another class call the GroupInstanceInfo, which is controlled by a Renderable Group and contains all the data the Group is supposed to render for this specific model.
- Sprite2DInstanceData: which extends the InstanceDataBase class and serves as a proxy to declare the properties that will end up in the Instancing Array. The list so far:
	- For InstanceDataBase: zBias (to compute the depth value), transformX and transformY (to transform the primitive vertices at the right location), origin (needed for the vertices position calculation)
	- For Sprite2D: topLeftUV (location in the texture of the sprite), sizeUV (size of the sprite), textureSize (to compute the on-screen size of the sprite), frame (for animated sprites, the frame number) and invertY (to invert the texture V coordinates)

#### The InstanceData class
Luckily for the developer that implements new primitives type, the wiring of the data to take from an instance of a primitive to put in the Instance Array is automatically made.
For this to happens each primitive type has a dedicated InstanceData class (extending the InstanceData matching the Primitive class it extends) which declare the properties to store in the Instancing Array.
All you have to do is declaring a property this way:
```Javascript
export class Sprite2DInstanceData extends InstanceDataBase {
    @instanceData()
    get topLeftUV(): Vector2 {
        return null;
    }
	...
}
```

The @instanceData decorator will take care of providing a real getter/setter to the property, which will be used to make the wiring.

The primitive based class (Sprite2D in our case) must implements the refreshInstancaData() method which will be called to update the data. This method may contains a little logic/transformation because the properties exposed by the primitive are not necessary represented the same way in the Vertex Shader.

Take a look at the Rectangle2D and Text2D classes (and their base classes) for more information of what and how you can do your own Primitives.

#### Automatic dirty/property change
Each property in a primitive that is decorated with either @modelLevelProperty, @instanceLevelProperty or @dynamicLevelProperty will have its setter function overloaded in order to provide the following services:
 - Detect if the change of value will impact the way the primitive should be rendered and add it to the list of primitives to update for rendering.
 - Maintain a dirty flag when this property has a value change between two renders
 - Dirty the boundingInfo if needed
 - Dirty positioning/layout if needed
 - Notify observers of the data change

The implementer doesn't have to take care of these things, it's free!

**WARNING**: for custom type properties like Vector3 for instance, changing only the .x/y/z won't trigger a property change and nothing will happen. You have to assign a new object for the change to be detected!

### Rendering

Rendering of a Canvas is made is in three parts:

1. Preparation of the "cached states": positioning, layout update, visibility status, transformation matrices of each primitive
2. Preparation/update of the WebGL resources of primitives that are dirty for rendering
3. Do the rendering in three passes: opaque, alpha test, transparency

#### Cached States update
This step is done on each primitive that had a position, visibility status, positioning/layout based properties that changed.
Only a part of the graph is traversed, from the primitives that changed down to its children.
No change will lead to zero node traversing in the graph.

#### Primitive preparation
The first time a primitive is to render or when on of its property (tagged with the xxxLevelProperty decorator) changed, it needs to be prepared.
This is made on a per Renderable Group basis, each Renderable Group are traversed and if one has some dirty primitive it will update their rendering resources optimally (model change &| instance change). A dirty primitive may lead to a dirty of its children ones, which is also taken care by this stage.

#### Rendering
Rendering is made by traversing Renderable Groups, respecting the Cached mode. If a group is Cached its content will be displayed by its parent Renderable Group into a Sprite2D targeting the bitmap's content.

If rendering resources are not ready (texture or effect still loading), the primitive will be let as dirty for render and then rendering will be retried next round.

Then rendering is made in three passes:

1. Opaque based primitive are rendered, regardless of their depth
2. AlphaTest based primitives are rendered with blending on to do alpha cut, regardless of their depth
3. Transparent primitives are rendered. Blending is on, TransparencySegment are computed to group all primitives that shares the same drawing context and which could be drawn using Instanced Array. TransparentSegments are sorted and draw from back to front to ensure a proper blending. If the Z-Order doesn't change the TransparentSegments are kept and reused from a rendering frame to the next.