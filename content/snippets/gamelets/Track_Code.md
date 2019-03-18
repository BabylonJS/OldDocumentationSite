---
PG_TITLE: Design for Create Track
---

# Design for Create Track
 
This page explains the design behind the 'createTrack' function which you use to [build tracks](/snippets/Track) that provide data for a carriage to follow. A track is built for an array of points (Vector3s) which is split into sections. Each section uses the designated lean, *the rotation of the carriage about the track direction* and turn, *the rotation of the carriage about its local Y axis*, of the carriage following the track to produce arrays of matrices for each point on the track path. These arrays are 

* directions: directions of travel;
* rotations: a combination of the lean and turn rotations;
* carriageRotations: lean rotations;
* passengerRotations: turn rotations.

The [parameters](/snippets/track/#parameters) for each section are 

* lean;
* leanTwists;
* leanWaves;
* leanWaveAngle;
* turn;
* turnTwists;
* turnWaves;
* turnWaveAngle.

## Section Data Design





# Further Reading

## More Advanced - Level 3
[Building a Track](/snippets/Track)  