---
TAGS:
---
## Description

class [Sprite2D](/classes/2.4/Sprite2D) extends [RenderablePrim2D](/classes/2.4/RenderablePrim2D)



## Constructor

## new [Sprite2D](/classes/2.4/Sprite2D)(texture, settings)

Create an 2D [Sprite](/classes/2.4/Sprite) primitive

 - parent: the parent primitive/canvas, must be specified if the primitive is not constructed as a child of another one (i.e. as part of the children array setting)

 - children: an array of direct children

 - id a text identifier, for information purpose

 - position: the X & Y positions relative to its parent. Alternatively the x and y properties can be set. Default is [0;0]

 - rotation: the initial rotation (in radian) of the primitive. default is 0

 - scale: the initial scale of the primitive. default is 1

 - origin: define the normalized origin point location, default [0.5;0.5]

 - spriteSize: the size of the sprite (in pixels), if null the size of the given texture will be used, default is null.

 - spriteLocation: the location (in pixels) in the texture of the top/left corner of the [Sprite](/classes/2.4/Sprite) to display, default is null (0,0)

 - invertY: if true the texture Y will be inverted, default is false.

 - alignToPixel: if true the sprite's texels will be aligned to the rendering viewport pixels, ensuring the best rendering quality but slow animations won't be done as smooth as if you set false. If false a texel could lies between two pixels, being blended by the texture sampling mode you choose, the rendering result won't be as good, but very slow animation will be overall better looking. Default is true: content will be aligned.

 - isVisible: true if the sprite must be visible, false for hidden. Default is true.

 - marginTop: top margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

 - marginLeft: left margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

 - marginRight: right margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

 - marginBottom: bottom margin, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

 - margin: top, left, right and bottom margin formatted as a single string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

 - marginHAlignment: one value of the [PrimitiveAlignment](/classes/2.4/PrimitiveAlignment) type's static properties

 - marginVAlignment: one value of the [PrimitiveAlignment](/classes/2.4/PrimitiveAlignment) type's static properties

 - marginAlignment: a string defining the alignment, see [PrimitiveAlignment](/classes/2.4/PrimitiveAlignment).fromString

 - paddingTop: top padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

 - paddingLeft: left padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

 - paddingRight: right padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

 - paddingBottom: bottom padding, can be a number (will be pixels) or a string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

 - padding: top, left, right and bottom padding formatted as a single string (see [PrimitiveThickness](/classes/2.4/PrimitiveThickness).fromString)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [Texture](/classes/2.4/Texture) |  the texture that stores the sprite to render
optional | settings | { parent: [Prim2DBase](/classes/2.4/Prim2DBase),  children: Array&lt;[Prim2DBase](/classes/2.4/Prim2DBase)&gt;,  id: string,  position: [Vector2](/classes/2.4/Vector2),  x: number,  y: number,  rotation: number,  scale: number,  origin: [Vector2](/classes/2.4/Vector2),  spriteSize: [Size](/classes/2.4/Size),  spriteLocation: [Vector2](/classes/2.4/Vector2),  invertY: boolean,  alignToPixel: boolean,  isVisible: boolean,  marginTop: number,  marginLeft: number,  marginRight: number,  marginBottom: number,  margin: number,  marginHAlignment: number,  marginVAlignment: number,  marginAlignment: string,  paddingTop: number,  paddingLeft: number,  paddingRight: number,  paddingBottom: number,  padding: string } |  a combination of settings, possible ones are
## Members

### static SPRITE2D_MAINPARTID : number



### static textureProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static actualSizeProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static spriteLocationProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static spriteFrameProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static invertYProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### static alignToPixelProperty : [Prim2DPropInfo](/classes/2.4/Prim2DPropInfo)



### texture : [Texture](/classes/2.4/Texture)



### actualSize : [Size](/classes/2.4/Size)



### spriteLocation : [Vector2](/classes/2.4/Vector2)



### spriteFrame : number



### invertY : boolean



### alignToPixel : boolean

Get/set if the sprite rendering should be aligned to the target rendering device pixel or not

## Methods

### getAnimatables() &rarr; IAnimatable[]

Get the animatable array (see http://doc.babylonjs.com/tutorials/Animations)
