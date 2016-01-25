---
ID_PAGE: 25188
PG_TITLE: Sound
PG_VERSION: 2.1
TAGS:
    - Audio
---
##new [Sound](/classes/Sound)(name, urlOrArrayBuffer, scene, readyToPlayCallback, options)

Create a sound and attach it to a scene
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of your sound
 | urlOrArrayBuffer | any | Url to the sound to load async or ArrayBuffer
 | scene | [Scene](/classes/Scene) | 
optional | readyToPlayCallback | () =&gt; void | Provide a callback function if you'd like to load your code once the sound is ready to be played
optional | options | any | Objects to provide with the current available options: autoplay, loop, volume, spatialSound, maxDistance, rolloffFactor, refDistance, distanceModel, panningModel
---

##Members

###name : string




###autoplay : boolean






###loop : boolean






###useCustomAttenuation : boolean




###soundTrackId : number









###spatialSound : boolean




###refDistance : number




###rolloffFactor : number




###maxDistance : number






###distanceModel : string




###onended : () =&gt; any







###isPlaying : boolean


###isPaused : boolean




##Methods

###dispose() &rarr; void




###setAudioBuffer(audioBuffer) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | audioBuffer | AudioBuffer | 
---

###updateOptions(options) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | options | any | 
---

###switchPanningModelToHRTF() &rarr; void


###switchPanningModelToEqualPower() &rarr; void


###connectToSoundTrackAudioNode(soundTrackAudioNode) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
 | soundTrackAudioNode | AudioNode | 
---

###setDirectionalCone(coneInnerAngle, coneOuterAngle, coneOuterGain) &rarr; void
Transform this sound into a directional source

####Parameters
 | Name | Type | Description
---|---|---|---
 | coneInnerAngle | number | Size of the inner cone in degree
 | coneOuterAngle | number | Size of the outer cone in degree
 | coneOuterGain | number | Volume of the sound outside the outer cone (between 0.0 and 1.0)
---

###setPosition(newPosition) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
 | newPosition | [Vector3](/classes/Vector3) | 
---

###setLocalDirectionToMesh(newLocalDirection) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
 | newLocalDirection | [Vector3](/classes/Vector3) | 
---

###updateDistanceFromListener() &rarr; void






###setAttenuationFunction(callback) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (currentVolume: number, currentDistance: number, maxDistance: number, refDistance: number, rolloffFactor: number) =&gt; number | 
---

###play(time) &rarr; void
Play the sound

####Parameters
 | Name | Type | Description
---|---|---|---
optional | time | number | (optional) Start the sound after X seconds. Start immediately (0) by default.
---

###stop(time) &rarr; void
Stop the sound

####Parameters
 | Name | Type | Description
---|---|---|---
optional | time | number | (optional) Stop the sound after X seconds. Stop immediately (0) by default.
---

###pause() &rarr; void






###setVolume(newVolume, time) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
 | newVolume | number | 
optional | time | number | 
---

###setPlaybackRate(newPlaybackRate) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | newPlaybackRate | number | 
---

###getVolume() &rarr; number






###attachToMesh(meshToConnectTo) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | meshToConnectTo | [AbstractMesh](/classes/AbstractMesh) | 
---
