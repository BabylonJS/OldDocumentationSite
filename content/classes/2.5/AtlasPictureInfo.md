---
TAGS:
---
## Description

class [AtlasPictureInfo](/classes/2.0/AtlasPictureInfo)

This class represent an Atlas Picture, it contains the information of all the sub pictures and the Texture that stores the bitmap.

You get an instance of this class using methods of the [AtlasPictureInfoFactory](/classes/2.0/AtlasPictureInfoFactory)

## Members

### atlasSize : Size

Size of the Atlas Picture

### subPictures : StringDictionary&lt;[AtlasSubPictureInfo](/classes/2.0/AtlasSubPictureInfo)&gt;

String Dictionary of all the sub pictures, the key is the sub picture's name, the value is the info object

### texture : Texture

The Texture associated to the Atlas Picture info

## Methods

### createSprites(filterCallback, spriteSettings) &rarr; Array&lt;[Sprite2D](/classes/2.0/Sprite2D)&gt;

Creates many sprite from the Atlas Picture

The Predicate has many parameters:

 - index: just an index incremented at each sub picture submitted for Sprite creation

 - name: the sub picture's name

 - aspi: the [AtlasSubPictureInfo](/classes/2.0/AtlasSubPictureInfo) corresponding to the submitted sub picture

 - settings: the [Sprite2D](/classes/2.0/Sprite2D) creation settings, you can alter this JSON object but BEWARE, the alterations will be kept for subsequent [Sprite2D](/classes/2.0/Sprite2D) creations!

#### Parameters
 | Name | Type | Description
---|---|---|---
 | filterCallback | (index: number, name: string, aspi: [AtlasSubPictureInfo](/classes/2.0/AtlasSubPictureInfo), settings: any) =&gt; boolean |  a predicate if true is returned then the corresponding sub picture will be used to create a sprite.
 | spriteSettings | { parent: [Prim2DBase](/classes/2.0/Prim2DBase),  position: Vector2,  x: number,  y: number,  rotation: number,  size: Size,  scale: number,  scaleX: number,  scaleY: number,  dontInheritParentScale: boolean,  opacity: number,  zOrder: number,  origin: Vector2,  scale9: Vector4,  invertY: boolean,  alignToPixel: boolean,  isVisible: boolean,  isPickable: boolean,  isContainer: boolean,  childrenFlatZOrder: boolean,  marginTop: number,  string: string,  marginLeft: number,  string: string,  marginRight: number,  string: string,  marginBottom: number,  string: string,  margin: number,  string: string,  marginHAlignment: number,  marginVAlignment: number,  marginAlignment: string,  paddingTop: number,  string: string,  paddingLeft: number,  string: string,  paddingRight: number,  string: string,  paddingBottom: number,  string: string,  padding: string } |  The [Sprite2D](/classes/2.0/Sprite2D) settings to use for Sprite creation, this JSON object will be passed to the filterCallback for you to alter it, if needed.
### createSprite(subPictureName, spriteSettings) &rarr; [Sprite2D](/classes/2.0/Sprite2D)

Create one Sprite from a sub picture

#### Parameters
 | Name | Type | Description
---|---|---|---
 | subPictureName | string |  the name of the sub picture to use
 | spriteSettings | { parent: [Prim2DBase](/classes/2.0/Prim2DBase),  position: Vector2,  x: number,  y: number,  rotation: number,  size: Size,  scale: number,  scaleX: number,  scaleY: number,  dontInheritParentScale: boolean,  opacity: number,  zOrder: number,  origin: Vector2,  scale9: Vector4,  invertY: boolean,  alignToPixel: boolean,  isVisible: boolean,  isPickable: boolean,  isContainer: boolean,  childrenFlatZOrder: boolean,  marginTop: number,  string: string,  marginLeft: number,  string: string,  marginRight: number,  string: string,  marginBottom: number,  string: string,  margin: number,  string: string,  marginHAlignment: number,  marginVAlignment: number,  marginAlignment: string,  paddingTop: number,  string: string,  paddingLeft: number,  string: string,  paddingRight: number,  string: string,  paddingBottom: number,  string: string,  padding: string } |  the [Sprite2D](/classes/2.0/Sprite2D) settings to use for the Sprite instance creation
