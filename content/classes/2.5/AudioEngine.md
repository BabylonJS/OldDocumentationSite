---
ID_PAGE: 25187
PG_TITLE: AudioEngine
PG_VERSION: 2.1
TAGS:
    - Audio
---
## Description

class [AudioEngine](/classes/2.5/AudioEngine)



## Constructor

## new [AudioEngine](/classes/2.5/AudioEngine)()


## Members

### canUseWebAudio : boolean



### masterGain : GainNode



### WarnedWebAudioUnsupported : boolean



### unlocked : boolean



### onAudioUnlocked : () =&gt; any



### isMP3supported : boolean



### isOGGsupported : boolean



### audioContext : AudioContext



## Methods

### dispose() &rarr; void


### getGlobalVolume() &rarr; number


### setGlobalVolume(newVolume) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newVolume | number |     

### connectToAnalyser(analyser) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | analyser | [Analyser](/classes/2.5/Analyser) |     

