# Babylon.js - Official documentation website

![](http://babylonjs.com/Assets/Logo.png)

Welcome on the repository of the official documentation of [Babylon.js](http://www.babylonjs.com).

## Prerequisites
Before beginning, please be sure to have these packages installed:

 * [Nodejs](https://nodejs.org/)
 * [grunt-cli](https://www.npmjs.com/package/grunt-cli): just use ```npm install -g grunt-cli```


## Run a local copy of the documentation
 * ```git clone https://github.com/BabylonJS/Documentation.git && cd Documentation```Clone this repository
 * ```npm install``` to install all dependencies
 * ```grunt build``` to build documentation
 * ```grunt serve``` runs the server and open a tab in your default browser

## Updating a local copy of a fork of the documentation
See [configure a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
and [syncing a fork](https://help.github.com/articles/syncing-a-fork/) for additional github documentation.

 * ```git fetch upstream``` to get the latest upstream copy
 * ```git checkout master``` to checkout master branch
 * ```get merge upstream/master``` to merge master with current upstream/master
 * ```git push``` (optional) to push lastest version to your fork
 * ```npm install``` to update any dependencies
 * ```npm prune``` to remove any old dependencies

## Updating a local copy of the documentation
 * ```git pull``` to get the lastest documentation
 * ```npm install``` to update any dependencies
 * ```npm prune``` to remove any old dependencies

## Useful command

You don't need to edit html yourself: edit markdown files and use:
 
```grunt build``` to rebuild html from markdown and index the search.

If you want to edit some styles or see your changes without repeating ```grunt build```, then use ```grunt serve```.


```grunt serve``` features:
 * Opens automatically the browser at ```localhost:3000```
 * Watcher on markdown
 * Recompile everything on detected change 

 
## How to contribute?

### Update content
If you want to add/update a tutorial, an extension or a class, you have to follow these steps:

0. Fork the repo with the corresponding icon on Github.
1. Clone the forked repo on your computer.
2. Head to content folder. All markdowns files are located in this folder.
3. Edit markdown according to your need
4. Use ```grunt build```
5. Pull request :)

NB: Sections like:

    ---
    ID_PAGE: 24441       // Id of the page in the old doc, use to forward links
    PG_TITLE: Cheetah3D  // Name of the page in the old doc
    TAGS:
        - Cheetah3D      // Deprecated, will be remove soon, except for classes
    ---
Are YAML meta description for files, this is used to make some link between the old and the new documentation.

Wherever you find these, please don't touch them :)

### Add a new content
Categories classify the content, it is implemented and can be seen in:
    * [tutorials](http://doc.babylonjs.com/tutorials)
    * [exporters](http://doc.babylonjs.com/exporters)
    * [extensions](http://doc.babylonjs.com/extensions)
    
If you want to add your own:

1. Head to the root of exporters or extensions or tutorials
2. Create a new folder (or use an existing one)
3. Fill it with your markdown
4. Head to data/statics.json
5. Add your folder and files
6. Use ```grunt build```
7. Pull request :)


#### statics.json structure

The three root arrays are mandatory, when displayed, object's order is kept.

Here is how the object is structured:

    {
        "tutorials": [                         // Mandatory
            {                                  // This object represents a folder inside the tutorials folder 
              "title": "title displayed",      // The title displayed in the list of folders 
              "name": "foldername",            // The folder name with no spaces, no special chars except underscores
              "img": "img/tutorials/name.jpg", // Place your image inside the public/img/tutorials/
              "desc": "my great tutos serie",  // This is the description of the folder, don't make it too long :)
              "files": [                       // This is the list of files inside your folder
                {
                    "title":'tuto title',      // The title displayed in the list of tutorials 
                    "filename":'tuto title',   // The file name with no spaces, no special chars except underscores, and no extension
                    "hidden" : true            // Should this file be hidden in the global list ? false by default
                },
                ...
              ]
            },
            ...
        ],
        "exporters": [],                       // Mandatory
        "extensions": []                       // Mandatory
    }

### Build documentation for your own version of BabylonJs

This can be done very easily by following these steps:

1. Get a local copy of the documentation
2. Head to scripts\helpers\builder\sources
3. Add your typescript description file in the current folder
4. Make sure your file name is like 'babylon.<version>.d.ts'
5. Head to scripts\helpers\builder
6. Open the config.js file
7. Change the ```version``` and the ```previousVersion``` properties
8. Head to content\classes
9. Make sure there is no folder named like the version you want to build
10. Open your command shell and run ```npm run build```
10. Rebuild the doc: ```grunt build```

### How to structure your document to get a functional Table Of Content (TOC)

A TOC is automatically generated on the compilation of the general, tutorials, exporters and extensions md files into HTML.
In order to get a functional TOC, you need to follow two very simple rules:
    * every markdown lines beginning by a series "#" will be included in the TOC
    * DO NOT put a link inside of your heading

If you do put a link, like this:

	## [](https://awesomewebsite.com/somethingInteresting.html)Animations

... or like this:

    ## [Animations](https://awesomewebsite.com/somethingEvenMoreInteresting.html)

... it will be included in the TOC, but **won't be clickable** (meaning, user's browser won't jump to the selected content)

Also, the TOC is automatically nested. It means that if you write something like this:

	# Main title
    <insert content here>
    ## Secondary title 1
    <insert content here>
    ### Third title
    <insert content here>
    ## Secondary title 2
    <insert content here>
    ## Secondary title 3
    <insert content here> 

You will get the following TOC:

	1. Main title
		1. Secondary title 1
			1. Third title
		2. Secondary title 2
		3. Secondary title 3

    
NB: For safety, you need to delete yourself the version of classes in content\classes in order to rebuild the same version.

####Still doesn't work?
Please leave us an issue with a link to your .d.ts and your config file. 
