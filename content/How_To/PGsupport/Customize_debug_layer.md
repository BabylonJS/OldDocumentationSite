# Customize the Inspector

The Inspector is part of the Babylon.js repository and can be customized in the same way as Babylon.js can. 

Before following any of the steps below knowing how to customizing Babylon.js in general is required: 
[How to Start Contributing to Babylon.js](/How_To/how_to_start)

## Setting the project

As all the code of the Inspector lies in Babylon.js repository, you have first to follow [this tutorial](/generals/how_to_start) to setting up your IDE.

## Compile the library
In a terminal, type : 
```
cd Tools/Gulp
npm install
gulp inspector
```

## Run the test task
Once this is done, run the test task (<kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>) and type `test` then press <kbd>enter</kbd>.

Open the url : http://localhost:1338/inspector/index.html
You should be able to see the test file (see next) for the inspector.

## Updating the test file

The test file is: `/inspector/test/index.js` ([here](https://github.com/BabylonJS/Babylon.js/tree/master/inspector/test) in Github)
You can update the test file, and press F5 in your browser to check the changes.

## React

Babylon.js Inspector is based on a React. You may want to read more about React before updating the inspector: https://reactjs.org/

# Further Reading

[The Inspector Features](/features/playground_debuglayer)  
[How To use The Inspector in Projects](/How_To/debug_layer)     
