# Canvas2D Rendering

You will find more complete information in the [Architecture Overview](http://doc.babylonjs.com/overviews/Canvas2D_Overview_Architecture) page.

## Rendering chain

In the Canvas2D library, each Canvas2D instance is also a Group2D and there're two kinds of Group2D:

1. Renderable Group2D: the content of the Group2D is processed for rendering through this Group2D instance.
2. Logical Group2D: the Group2D is acting more like a Container, a new frame of reference.

The Canvas is always a Renderable Group2D, but it can contains children Group2D that are also renderable. 

For instance, this the case of when the TOPLEVELGROUPS caching mode is used: all direct children of the Canvas must be Group2D and they are all Renderable ones. In this mode there's a rendering chains, links are created between the child renderable groups and their parent (the Canvas).

 During the rendering process, it starts from the Canvas which basically does no real rendering and then recurse to its children: all Renderable Group2D, which will be process using the same code as the Canvas (it's more the Canvas which is using the Group2D's code) to perform the render of their content.

## Renderable Group2D's cache modes
When a Group2D is renderable you can define if its content will be drawn to the canvas at each render (then it's the DONTCACHE behavior) or if its content will be cached into a bitmap for its content to be rendered only when needed: this is the Cached Mode.

There are many Caching Behavior for a Cached Renderable Group2D, if you want some information about it I strongly encourage you to read the appropriate section in the [Architecture Overview](http://doc.babylonjs.com/overviews/Canvas2D_Overview_Architecture) page.

## Rendering Modes

When Primitive are Rendered (either to the 3D Viewport or into a Texture when the content is Cached) their are split into three different groups, one per rendering mode

1. Opaque: Primitives that have no transparency, no alpha test, no texture using alpha channel and an actualOpacity of 1.0 will rendered as Opaque.
2. Alpha Test: Primitives are rendered with Alpha Test when they have a Texture with a used Alpha Channel but no Alpha Blending required. Basically the Alpha Channel is used to keep or discard a rendered pixel (typically Masking effect).
3. Transparent: Primitives with an actualOpacity < 1.0, with texture using their alpha channels are rendered with Alpha Blending on in the Transparent pass.

What does this all mean for each Primitives type?

### Shaped2D based primitives

All Shape2D primitives (Rectangle2D, Ellipse2D, Lines2D, ...) are following this rule:

- If `actualOpacity` is less than 1.0: it's Transparent
- If `actualOpacity` is 1.0: it's Opaque

### Sprite2D

 - If `useAlphaFromTexture` is true and the texture has an Alpha Channel which is used (`BaseTexture.hasAlpha = true`) the Sprite2d will be rendered as a **Transparent**.
 - if `useAlphaFromTexture` is false and the texture has an Alpha Channel which is used (`BaseTexture.hasAlpha = true`) the Sprite2d will be rendered as **Alpha Test**. 
 - If `useAlphaFromTexture` is false or if the Texture has no alpha or it's not used (`BaseTexture.hasAlpha = false`) the Sprite2d will be rendered as **Opaque**

 ### Text2D
  - If the Signed Distance Field mode is used on a FontTexture, then the **Alpha Test** mode is used.
  - If a BitmapFontTexture or a FontTexture without Signed Distance Field is used, then the **Transparent** mode is used.

  ### Remember!
  Opaque and Alpha Test Primitives will be rendered in no particular order, which ensure a **minimal Draw Call** count.

  Transparent Primitives must be sorted by their Z order to be rendered from the further one to the nearest one. When the ANGLE_Instance Array Extension is supported: TransparentSegment are built and Transparent Segment is drawn into one Draw Call if it contains more than 5 primitives (otherwise it's more efficient to render with *x* Draw Calls for *x* instances).
  
  A TransparentSegment contains primitives instances that share the same Rendering Model (see the [Architecture Overview](http://doc.babylonjs.com/overviews/Canvas2D_Overview_Architecture) for mode explanation) and which are consecutive in their Z order.

  To summarize: Transparent is rendered as efficiently as possible, but it still potentially waaaaaay more Draw Calls than Opaque or Alpha Test.
