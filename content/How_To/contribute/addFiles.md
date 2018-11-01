---
PG_TITLE: Add a File to BJS
---

# Adding a File
When you add a new file to Babylon.js you need to add a reference to the file in the ```config.json``` file from ```/tools/gulp``` folder.

When testing your contribution you can test using all the classes or [customize the build](/How_To/workloads) to just test those that include your new files plus and classes they need.

For most contributors the files will be referenced in the ```workloads``` section.  When you look at the [table of available workloads](/How_To/workloads#available-workloads) you will see that the ```core``` is missing since even during a customized build the core is always included. It may however be a core file you are adding and you will still find this in the ```workloads``` section.

Do not forget to also reference your shaders and shaderIncludes.

If you plan to add files to a satellite project (like the postProcessLibrary), you will have to add them to the associated entry, like this one for the postProcessLibrary:
```
 "postProcessesLibrary": {
        "libraries": [
            {
                "files": [
                    "../../postProcessLibrary/src/asciiArt/babylon.asciiArtPostProcess.ts"
                ],
                "shaderFiles": [
                    "../../postProcessLibrary/src/asciiArt/asciiart.fragment.fx"
                ],
                "output": "babylon.asciiArtPostProcess.js"
            },
            {
                "files": [
                    "../../postProcessLibrary/src/digitalRain/babylon.digitalRainPostProcess.ts"
                ],
                "shaderFiles": [
                    "../../postProcessLibrary/src/digitalRain/digitalrain.fragment.fx"
                ],
                "output": "babylon.digitalRainPostProcess.js"
            }
        ]
}
```