---
TAGS:
---
## Description

class [AtlasPictureInfoFactory](/classes/2.0/AtlasPictureInfoFactory)

This if the Factory class containing static method to create Atlas Pictures Info objects or add new loaders

## Methods

### static addLoader(fileExtension, plugin) &rarr; void

Add a custom loader

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fileExtension | string |  must be the file extension (without the dot) of the file that is loaded by this loader (e.g.: json)
 | plugin | IAtlasLoader |  the instance of the loader
### static loadFromUrl(texture, url, loaded, error) &rarr; any

Load an Atlas Picture Info object from a data file at a given url and with a given texture

#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | Texture |  the texture containing the atlas bitmap
 | url | string |  the URL of the Atlas Info data file
 | loaded | (api: [AtlasPictureInfo](/classes/2.0/AtlasPictureInfo)) =&gt; void |  a callback that will be called when the [AtlasPictureInfo](/classes/2.0/AtlasPictureInfo) object will be loaded and ready
