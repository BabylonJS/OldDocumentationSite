---
ID_PAGE: 25188
PG_TITLE: Sound
PG_VERSION: 2.1
TAGS:
    - Audio
---
## Description

class [Sound](/classes/2.4/Sound)



## Constructor

## new [Sound](/classes/2.4/Sound)(name, urlOrArrayBuffer, scene, readyToPlayCallback, options)

Create a sound and attach it to a scene

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  Name of your sound  Name of your sound  Name of your sound Name of your sound
 | urlOrArrayBuffer | any |  Url to the sound to load async or ArrayBuffer  Url to the sound to load async or ArrayBuffer  Url to the sound to load async or ArrayBuffer Url to the sound to load async or ArrayBuffer
 | scene | [Scene](/classes/2.4/Scene) |    
optional | readyToPlayCallback | () =&gt; void |  Provide a callback function if you'd like to load your code once the sound is ready to be played  Provide a callback function if you'd like to load your code once the sound is ready to be played  Provide a callback function if you'd like to load your code once the sound is ready to be played Provide a callback function if you'd like to load your code once the sound is ready to be played
## Members

### name : string



### autoplay : boolean



### loop : boolean



### useCustomAttenuation : boolean



### soundTrackId : number



### spatialSound : boolean



### refDistance : number



### rolloffFactor : number



### maxDistance : number



### distanceModel : string



### onended : () =&gt; any



### isPlaying : boolean



### isPaused : boolean



## Methods

### disposeundefined &rarr; void


### setAudioBufferundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateOptionsundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### switchPanningModelToHRTFundefined &rarr; void


### switchPanningModelToEqualPowerundefined &rarr; void


### connectToSoundTrackAudioNodeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setDirectionalConeundefined &rarr; void

Transform this sound into a directional source

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setPositionundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setLocalDirectionToMeshundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateDistanceFromListenerundefined &rarr; void


### setAttenuationFunctionundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### playundefined &rarr; void

Play the sound

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### stopundefined &rarr; void

Stop the sound

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### pauseundefined &rarr; void


### setVolumeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setPlaybackRateundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getVolumeundefined &rarr; number


### attachToMeshundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### cloneundefined &rarr; [Sound](/classes/2.4/Sound)


### getAudioBufferundefined &rarr; AudioBuffer


### static Parseundefined &rarr; [Sound](/classes/2.4/Sound)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
