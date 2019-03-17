---
PG_TITLE: Building a track for a Carriage to Follow
---

# Building a track for a Carriage to Follow

![lean and turn](/img/snippets/rcphoto.jpg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![lean and people turn](/img/snippets/rcphoto2.jpg)

In the first image the carriage leans and turns as it follows the track. In the second image the carriage leans and it is the people inside that turn to look around. The 'createTrack' function can be used to simulate either of these two events.

A carriage can be a mesh (with children if wanted), camera or even a point light. A track is a sequence of points in 3D space and for each point rotational data that determines the orientation of the mesh following it, and where necessary any children of the mesh. This rotational data is built by specifying parameters along sections of the track.

A **track** is created using

```javascript
var track = createTrack(points, sections);
```

where points is an array of Vector3s and sections is an array of sections. A section is constructed by giving its starting point (an index of the points array) and an options object (which may be empty), as in

```javascript
var section0 = new sectionData(0, options0);
var section1 = new sectionData(100, {});
var section2 = new sectionData(120, options2);
var section3 = new sectionData(220, {lean: 0, leanTwists: 0, leanWaves: 0, leanWaveAngle: 0});
var section4 = new sectionData(240, {turn: 0, turnTwists: 0, turnWaves: 0, turnWaveAngle: 0});
```

Sections added to the sections array must be in increasing index order. The rotations in any one section are built from the options given in that section and some options from the following section. The following playground allows you to play with these options and others.

* [Playground Example - A Short Track](https://www.babylonjs-playground.com/#HSMDF2#1)

## Section Options

There are two types of rotation 'a lean' and a 'turn' and both may be applied to any section of track. Some illustrative examples are used better understand these. The lean at each point is shown in red and the turn in green, defaults for both are 0. Twists (defaults 0) force complete rotations, waves, with a wave angle, force a rotation to the maximum set by the wave angle followed by a rotation in the reverse direction.

In these examples the track is simply a straight line formed from 100 points and two sections, section0 includes all points from 0 to 99. The second section is an empty section of track but is needed as a device to specify the lean and turn at the track end. 

### Leaning

The initial lean comes from section0 and the final lean from section 1.

A lean is the rotation of the carriage about the track direction.

![lean zero track](/img/snippets/track1.jpg)<------initial lean is 0, final lean is zero

![lean at end track](/img/snippets/track2.jpg)<------initial lean is 0, final lean is pi / 2

![lean at start track](/img/snippets/track3.jpg)<------initial lean is pi / 2, final lean is 0

The value of leanTwists (positive integer, default 0) gives the number of complete rotations about the track over that section of track.

![lean twists track](/img/snippets/track4.jpg)<------initial lean is 0, final lean is 0, leanTwists is 2

The value of waveTwists (positive integer, default 0) gives the number of leans to one side of the track followed by a lean to the other side depending on the lean wave angle over that section of track.

![lean waves track](/img/snippets/track5.jpg)<------initial lean is 0, final lean is 0, leanWaves is 2, leanWaveAngle is pi / 2

When both the values of leanWaves and leanWaveAngle or non zero they will override any value given to leanTwists.

### Turning

The initial turn comes from section0 and the final turn from section 1.

A turn is the rotation of the carriage about its local Y axis. (It can alternatively be the rotation of the children of the carriage mesh)

![turn zero track](/img/snippets/track6.jpg)<------initial turn is 0, final turn is zero

![turn at end track](/img/snippets/track7.jpg)<------initial turn is 0, final turn is pi / 2

![turn at start track](/img/snippets/track8.jpg)
initial turn is pi / 2, final turn is 0

The value of turnTwists (positive integer, default 0) gives the number of complete rotations about the track over that section of track.

![turn twists track](/img/snippets/track9.jpg)<------initial turn is 0, final turn is 0, turnTwists is 2

The value of waveTwists (positive integer, default 0) gives the number of turns to one side of the track followed by a turn to the other side depending on the turn wave angle over that section of track.

![turn waves track](/img/snippets/track10.jpg)<------initial turn is 0, final turn is 0, turnWaves is 2, turnWaveAngle is pi / 2

When both the values of turnWaves and turnWaveAngle or non zero they will override any value given to turnTwists.


### Leaning and Turning

It is possible to use both the lean and turn parameters

![lean and turn track](/img/snippets/track11.jpg)<------both lean and turn are used

### Parameters

The options parameters in  section are

* lean: angle of lean about direction of travel at start of section;
* leanTwists: number of twists against direction of travel over the section;
* leanWaves: number of waves against direction of travel over the section;
* leanWaveAngle: additional angle of lean applied during a wave;
* turn: angle of turn about local carriage y axis at start of section;
* turnTwists: number of twists about local carriage y axis over the section;
* turnWaves: number of waves about local carriage y axis over the section;,
* turnWaveAngle: additional angle of turn applied during a wave.

## Data Returned for Track Object

Using 

```javascript
var track = createTrack(points, sections);
```

gives you a set of arrays of matrices, where each element with index **i** is the data for the points array at **i**.

* track.directions: each element is the direction of travel;
* track.rotations: each element is a combination of the lean and turn rotations;
* track.carriageRotations: each element is the lean rotation;
* track.passengerRotations: each element is the turn rotation;

## Closed Tracks

As an example of a closed path take a circle formed from 500 points

```javascript
var points = [];
var n = 400; // number of points
var r = 20; //radius
for (var i = 0; i < n ; i++) {
	points.push( new BABYLON.Vector3(
        r * Math.cos(i * 2 * Math.PI / n),
	    0,
		r * Math.sin(i * 2 * Math.PI / n)
	));
}
```

When drawing a line to represent the path of the track it is necessary to push points[0] to the end to draw a closed path. However once the line is drawn this must be removed using pop before creating a track.

```javascript
points.push(points[0]); // push to close path
var lines = BABYLON.MeshBuilder.CreateLines("lines", {points: points}, scene); //draw path of track
points.pop(); // remove before track creation
```

Also before creating the track the sections needed must be determined. In this case split into four equal sections. Section0 from 0 to 124, section1 from 125 to 249, section2 from 250 to 374 and section 3 from 375 to 0.

```javascript
var section0 = new sectionData(0, options0); 
var section1 = new sectionData(125, options1);
var section2 = new sectionData(250, options2);
var section3 = new sectionData(375, options3);
	
var sections = [section0, section1, section2, section3];
	
var track = createTrack(points, sections);
```

* [Playground Example - Closed Track](https://www.babylonjs-playground.com/#HSMDF#4)

## Open Tracks

As an example of a open path take three quarters of a circle formed from 375 points

```javascript
var points = [];
var n = 375; // number of points
var r = 20; //radius
for (var i = 0; i < n ; i++) {
	points.push( new BABYLON.Vector3(
        r * Math.cos(i * 3 * Math.PI / (2 * n)),
	    0,
		r * Math.sin(i * 3 * Math.PI / (2 * n))
	));
}
```

Drawing a line to represent the path of the track may be done directly.

```javascript
var lines = BABYLON.MeshBuilder.CreateLines("lines", {points: points}, scene); //draw path of track
```

Before creating the track the sections needed must be determined. In this case split into three equal sections. Section0 from 0 to 124, section1 from 125 to 249 and section2 from 250 to 374. A fourth dummy section, section3,  is needed to provide the data on the final lean and turn at the end of the track. The starting index for the dummy section, at the end, should always be the number of points in the open path, in this case 375.

```javascript
var section0 = new sectionData(0, options0); 
var section1 = new sectionData(125, options1);
var section2 = new sectionData(250, options2);
var section3 = new sectionData(375, options3); //Dummy section
	
var sections = [section0, section1, section2, section3];
	
var track = createTrack(points, sections);
```

* [Playground Example - Open Track](https://www.babylonjs-playground.com/#HSMDF2#5)