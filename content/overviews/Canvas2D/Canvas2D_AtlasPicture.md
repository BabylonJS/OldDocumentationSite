# Using AtlasPicture

An Atlas Picture is a bitmap file that was constructed to store many images, it's also called a packed texture among other terms...

We want to store many pictures into a big one for many reasons:

 - To redure the number of assets to deal with.
 - To enhance performances at run-time (texture switching is a costy operation for a GPU).

In Canvas2D, an AtlasPicture is made of two parts:

 - The Data description file, which contains the names, location and size of all the images stored into the atlas
 - The Texture which holds the atlas' bitmap.

 ## Using TexturePacker to create an AtlasPicture

 You can download and install [TexturePacker](https://www.codeandweb.com/texturepacker), it's a great software used to generates AtlasPictures.

 Once it's installed and started, drag and drop your picture on the right side of the application, you can use the pictures stored in this [zipped file](https://dl.dropboxusercontent.com/u/9401844/nba.zip) for instance. (images are courtesy of nba.com, all rights belong to them)

![TexturePacker](http://i.imgur.com/zrPVJNv.png)

Select a file path & name for the data format and the texture file.

Pay attention to the following things:

 - The Data Format you must selected is "JSON (Array)", at the time being that's the only format supported, but you'll see below that you can create your own loader to support more data formats.
 - The "Allow rotation" setting must not be selected as it's not supported by Canvas2D right now.

  Once your done, click Publish to generated both files. Look at [this playground](http://babylonjs-playground.azurewebsites.net/#C1BYN#1) for a sample.

  ## Using from the code

  ### AtlasPictureInfoFactory
  The entry point is the `AtlasPictureInfoFactory` class, it contains the methods to add custom loader and to load an `AtlasPictureInfo` from an URL.

  ### AtlasPictureInfo
  Once you've loaded the json file, you'll get an instance of the `AtlasPictureInfo` class, from there you can:

   - Enumerate all the sub pictures stored using the `subPictures` string dictionary.
   - Create a Sprite2D instance using a given Sub Picture calling `createSprite`.
   - Create many Sprite2D instances calling `createSprites`. (see the PG above for an example).

## Adding you own loader

If you already have Atlas Data File of another format, you can develop a plugin class that will be used to load them. All you have to do is:

1) Create a class implementing the `IAtlasLoader` interface.
2) At run-time, call `AtlasPictureInfoFactory.addLoader()` to add your loader.
3) Use the `AtlasPictureInfoFactory.loadFromUrl()` to load your file.

You'll find more information in the [source code](https://github.com/BabylonJS/Babylon.js/blob/master/canvas2D/src/Engine/babylon.atlasPicture.ts).