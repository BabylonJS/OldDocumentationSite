# Gamepad Manager
First create a GamepadManager:
```javascript
var gamepadManager = new BABYLON.GamepadManager();
```
Listen to the manager's onGamepad Connected/Disconnected events:
```javascript
gamepadManager.onGamepadConnectedObservable.add((gamepad, state)=>{
});
gamepadManager.onGamepadDisconnectedObservable.add((gamepad, state)=>{
});
```

# Gamepad events
Once a gamepad is available, event listeners can be added to handle the gamepad's inputs
```javascript
gamepadManager.onGamepadConnectedObservable.add((gamepad, state)=>{
    gamepad.onButtonDownObservable.add((button, state)=>{
        //Button has been pressed
        console.log(button)
    })
    gamepad.onleftstickchanged((values)=>{
        //Left stick has been moved
        console.log(values.x+" "+values.y)
    })
}
```

# Gamepad types
Depending on the type of controller, handle any of it's unique properties:
```javascript
gamepadManager.onGamepadConnectedObservable.add((gamepad, state)=>{
    if (gamepad instanceof BABYLON.Xbox360Pad) {
        gamepad.onButtonDownObservable.add((button, state)=>{
            console.log(BABYLON.Xbox360Button[button])
        })
    }
    if (gamepad instanceof BABYLON.PoseEnabledController) {
        gamepad.onMainButtonStateChangedObservable.add((button, state)=>{
            console.log(button.value)
        })
        var position = gamepad.devicePosition
        var rotation = gamepad.deviceRotationQuaternion
    }
}
```

# Check a gamepad's current state
At any time, a gamepad's current state can be checked with the gamepads properties:
```javascript
scene.registerBeforeRender(function () {
    if(gamepad instanceof BABYLON.Xbox360Pad){
        if(gamepad.buttonA){
            sphere.position.y+=0.05
        }
        sphere.position.x+=gamepad.leftStick.x*0.05
    }
}
```

* [Playground Example](https://playground.babylonjs.com/#U3XJTB#38)

# Virtual gamepad

See [How to use virtual joysticks](/How_To/How_to_use_Virtual_Joysticks)
