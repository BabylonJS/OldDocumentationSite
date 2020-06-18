---
PG_TITLE: How to use the DeviceSourceManager
---

# DeviceSourceManager
The [DeviceSourceManager](https://doc.babylonjs.com/api/classes/babylon.devicesourcemanager) is a class that will manage the connections for various user input devices and provide methods of querying those devices for their current state.

To use this, first create a DeviceSourceManager.  You will need to provide an engine object.
```javascript
var deviceSourceManager = new BABYLON.deviceSourceManager(scene.getEngine());
```

Within your scene's render/game loop, you can query the DeviceSourceManager for the current state of a specific input.  First, you will need to get the DeviceSource object.  With this object, you can then query for a specific input's status.

In Javascript, you should use the following approach
```javascript
// If the device has been registered in the DSM
if (deviceSourceManager.getDeviceSource(BABYLON.DeviceType.Xbox)) {
    // And the A button was pressed
    if (deviceSourceManager.getDeviceSource(BABYLON.DeviceType.Xbox).getInput(BABYLON.XboxInput.A) ==  1) {
        // Do something
    }
}
```

In Typescript, you can use a null-conditional operator to make it a one line call
```javascript
if (deviceSourceManager.getDeviceSource(BABYLON.DeviceType.Xbox)?.getInput(BABYLON.XboxInput.A) ==  1) {
    // Do something
}
```

# Events and Observables
You can use the following Observables to work with identifiers for a given device
```javascript
/*  Before a device is registered */
onBeforeDeviceConnectedObservable.add((device) => {
    // You can get the device type by using device.deviceType
    // You can also get the device slot (only applicable to gamepads and touch) by using device.deviceSlot
});

onBeforeDeviceDisconnectedObservable.add((device) => {
    // You can get the device type by using device.deviceType
    // You can also get the device slot (only applicable to gamepads and touch) by using device.deviceSlot
});

/*  After a device is registered */
onAfterDeviceConnectedObservable.add((device) => {
    // You can get the device type by using device.deviceType
    // You can also get the device slot (only applicable to gamepads and touch) by using device.deviceSlot
});

onAfterDeviceDisconnectedObservable.add((device) => {
    // You can get the device type by using device.deviceType
    // You can also get the device slot (only applicable to gamepads and touch) by using device.deviceSlot
});
```

For Keyboards and Pointers, you can use an event based system to get the current input and previous input when an input is activated
```javascript
deviceSourceManager.getDeviceSource(BABYLON.DeviceType.Keyboard).onInputChangedObservable.add((device) => {
    // device.inputIndex is the activated input
    // device.currentState is the current value
    // device.previousState is the previous value (before activation)
});
```