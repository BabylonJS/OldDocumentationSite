It's definitely possible to use a single scene for the entire application, but for my game, I wanted to separate the states into individual scenes. So, I created a state machine to handle rendering the different scenes of the entire game.

# App.ts
Recall from the [Create a Scene](/how_to/page2#creating-a-scene) section of the getting set up tutorial that we made an app.ts file. This is going to be our main file that handles our scene creations and rendering. Starting with the constructor, we're going to break up our scene creation and rendering loop call into separate functions.

# States
How I went about this was by outlining all of the different scenes I would need for the game:
- START
- CUTSCENE
- GAME
- LOSE

The reason why there's no win and pause state is because those are actually still using the game scene and so it still needs to be able to render the game scene. I've made those two "states" as GUI overlays.
Now that we know what states we want we can go ahead and create an enum for them. All the enum does is assign names to the states and encodes them as numbers. We also want to create a class variable **_state** to store the current state that we're in. Now, our app.ts should look something like this:

```javascript
//...imports here

//enum for states
enum State { START = 0, GAME = 1, LOSE = 2, CUTSCENE = 3 }

class App {
    // General Entire Application
    private _scene: Scene;
    private _canvas: HTMLCanvasElement;
    private _engine: Engine;

    //Scene - related
    private _state: number = 0;

    constructor() {
        this._canvas = this._createCanvas();

        // initialize babylon scene and engine
        this._engine = new Engine(this._canvas, true);
        this._scene = new Scene(this._engine);

        var camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), this._scene);
        camera.attachControl(this._canvas, true);
        var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), this._scene);
        var sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, this._scene);

        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (this._scene.debugLayer.isVisible()) {
                    this._scene.debugLayer.hide();
                } else {
                    this._scene.debugLayer.show();
                }
            }
        });

        // run the main render loop
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });
    }
}
new App();

```
I've also gone ahead and created a separate function for creating our canvas called [_createCanvas](). Additionally, here is where we'll be starting to include the use of class variables (denoted by the *this* keyword).

# GoTo Functions
## Scene Setup
The goTo functions will be in charge of setting up the scene and consist of things that happen only once.

Let's start with [_goToStart]() for a simple example of how to set up a scene.
```javascript
this._engine.displayLoadingUI();
```
Have the loading UI show while our start scene is loading.

```javascript
this._scene.detachControl();
let scene = new Scene(this._engine);
scene.clearColor = new Color(0,0,0,1);
let camera = new FreeCamera("camera1", new Vector3(0, 0, 0), scene);
camera.setTarget(Vector3.Zero());
```
Create the scene and camera. Any camera should be fine since it'll be fixed at the center of the scene, so I just went with the FreeCamera.

```javascript
//...do gui related stuff

//--SCENE FINISHED LOADING--
await scene.whenReadyAsync();
this._engine.hideLoadingUI();
//lastly set the current state to the start state and set the scene to the start scene
this._scene.dispose();
this._scene = scene;
this._state = State.START;
```
When the scene is ready, we hide the loading UI, dispose of the current stored scene and then switch scenes and change the state to render the new scene.
## GUI setup
For now, we'll make a simple fullscreenUI with a button to transition between scenes.
```javascript
//... scene setup

//create a fullscreen ui for all of our GUI elements
const guiMenu = AdvancedDynamicTexture.CreateFullscreenUI("UI");
guiMenu.idealHeight = 720; //fit our fullscreen ui to this height

//create a simple button
const startBtn = Button.CreateSimpleButton("start", "PLAY");
startBtn.width = 0.2
startBtn.height = "40px";
startBtn.color = "white";
startBtn.top = "-14px";
startBtn.thickness = 0;
startBtn.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
guiMenu.addControl(startBtn);

//this handles interactions with the start button attached to the scene
startBtn.onPointerDownObservable.add(() => {
    this._goToCutScene();
    scene.detachControl(); //observables disabled
});
```
Here what we're doing is creating an AdvancedDynamicTexture fullscreenUI. This is what's going to hold all of our gui elements. We then create a simple button and add an observable to detect when we click on it. This will trigger our scene to call goToCutScene. We want to make sure that we detach the controls since it's possible that as we hold down the mouse, goToCutScene gets called multiple times.
# Other States
The lose state will follow a similar format, but for organizational and performance purposes, the cutscene and game states have slightly different structures.
## goToCutScene
The cutscene is set up normally along with the gui; however, what we do while in this state is what allows our game to be loaded properly. If you take a look at the [_goToCutScene]() function, the [scene setup]() is the same, but [scene finished loading]() is different. Notice how we don't have the hideLoadingUI. For now, you can actually put this in, but in the final version I actually removed it since I hide it once my animations have finished loading and then trigger it to show once we've completed the dialogue, but the game is still loading.

The most important aspect is what we do after that:
```javascript
var finishedLoading = false;
await this._setUpGame().then(res =>{
    finishedLoading = true;
});
```
Essentially what this is doing is telling the code to wait until **_setUpGame** has completed its tasks and then set *finishedLoading* to true. At this point, it may seem unnecessary to have since we haven't brought in our animation nor are we loading any heavy assets, but it's very important once we've gotten to that stage in the development process. 

This was an important discovery that ultimately led me to change the structure of importing and loading assets for my game to this. If we don't wait for our assets to finish importing, what the async functions will do is tell our code to continue as we load in the background. This can ultimately break our transitions between scenes as we'd be moving on before things were fully loaded. I discovered this happening when playtesting the web-hosted version of my game:
1. Safari had several issues relating to sounds and scene transitions
2. Assets were taking a long time to load and thus showed undefined meshes errors

## _setUpGame
The only thing here we need to worry about here for now is:
```javascript
private async _setUpGame() {
    let scene = new Scene(this._engine);
    this._gamescene = scene;

    //...load assets
}
```
[_setUpGame]() is where we are pre-creating the game scene and where we start to load all of our assets.
## goToGame
If you look at the [_goToGame]() function, we've actually encapsulated the camera setup and gui setup into their own functions. For now you can use the default UI and camera like so:
```javascript
//--SETUP SCENE--
this._scene.detachControl();
let scene = this._gamescene;
scene.clearColor = new Color4(0.01568627450980392, 0.01568627450980392, 0.20392156862745098); // a color that fit the overall color scheme better
let camera4 = new ArcRotateCamera("arc", -Math.PI/2, Math.PI/2, 40, new BABYLON.Vector3(0,0,0), scene);
camera.setTarget(Vector3.Zero());

//--GUI--
const playerUI = AdvancedDynamicTexture.CreateFullscreenUI("UI");
//dont detect any inputs from this ui while the game is loading
scene.detachControl();

//create a simple button
const loseBtn = Button.CreateSimpleButton("lose", "LOSE");
loseBtn.width = 0.2
loseBtn.height = "40px";
loseBtn.color = "white";
loseBtn.top = "-14px";
loseBtn.thickness = 0;
loseBtn.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
playerUI.addControl(loseBtn);

//this handles interactions with the start button attached to the scene
loseBtn.onPointerDownObservable.add(() => {
    this._goToLose();
    scene.detachControl(); //observables disabled
});

//get rid of start scene, switch to gamescene and change states
this._scene.dispose();
this._state = State.GAME;
this._scene = scene;
this._engine.hideLoadingUI();
//the game is ready, attach control back
this._scene.attachControl();
```
What we're doing here is setting up the scene normally and adding a simple button to test going to the lose state.
# Switching States
Now that we have our scenes set up, how do we actually render and switch between them?! Within our [constructor](), we want to call [main]().
## Main
The main function is where we'll be setting up our state machine.
```javascript
await this._goToStart();

// Register a render loop to repeatedly render the scene
this._engine.runRenderLoop(() => {
    switch (this._state) {
        case State.START:
            this._scene.render();
            break;
        case State.CUTSCENE:
            this._scene.render();
            break;
        case State.GAME:
            this._scene.render();
            break;
        case State.LOSE:
            this._scene.render();
            break;
        default: break;
    }
});

//resize if the screen is resized/rotated
window.addEventListener('resize', () => {
    this._engine.resize();
});
```
We first call *await _goToStart* to ensure that our scene is ready to be rendered. 

What this switch statement does is it tells our render loop to act differently based on the state that we're in. It might seem a little unnecessary to always be calling *this._scene* in each state, but this actually holds reference to our current scene. Recall that we dispose of what *this._scene* was, do other detachments to that scene, create a new scene, and then re-assign *this._scene* to the new scene. You could definitely use variables that reference your different scenes, but I thought this would be better since we're disposing of the scenes when not in use, and this ensures that we're rendering the right scene in the right state.

# Further Reading
**Previous:** [Getting Set Up](/how_to/page2)  
**Next:** [Simple Game State](/how_to/page10)