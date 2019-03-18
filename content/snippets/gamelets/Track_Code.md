---
PG_TITLE: Design for Create Track
---

# Design for Create Track
 
This page explains the design behind the 'createTrack' function which you use to [build tracks](/snippets/Track) that provide data for a carriage to follow. A track is built for an array of points (Vector3s) which is split into sections. Each section uses the designated lean, *the rotation of the carriage about the track direction* and turn, *the rotation of the carriage about its local Y axis*, of the carriage following the track to produce arrays of matrices for each point on the track path. These arrays are 

* directions: directions of travel;
* rotations: a combination of the lean and turn rotations;
* carriageRotations: lean rotations;
* passengerRotations: turn rotations.

The [parameters](/snippets/track/#parameters) needed for each section are 

* start index;

then the options

* lean;
* leanTwists;
* leanWaves;
* leanWaveAngle;
* turn;
* turnTwists;
* turnWaves;
* turnWaveAngle.

are  created using 

```javascript
var section = new sectionData(startAt, options)
```

The code for which is 

```javascript
var sectionData = function (startAt, options) {
	this.start = startAt;
	this.options = options;
}
```

This data for each section is passed as an array to 'createTrack' along with the points for the track as 

```javascript
var createTrack = function(points, sections) {
```

Internally 'createTrack' uses a 'createSection' function to construct the data to return.

## Section Build

The 'createSection' takes three parameters, points, the full points array for the track, the startSection which contains the information to be used in creating the section and endSection which just provides the lean and turn values at the end of the current section.

The term rail is used to indicate a segment of track from points[i] to points[i + 1]

```javascript
function createSection(points, startSection, endSection) {
    /***** Calculate the number of rails for the section *****/
    var railsFrom = startSection.start;  //index of start of section
	var railsTo = endSection.start; //index of end of section
	if(endSection.start === 0) {
		railsTo = points.length;
	}
	
    var nbRails = railsTo - railsFrom; 
    

	/***** Set the defaults for the section *****/
	var initialLean = (startSection.options.lean === void 0) ? 0 : startSection.options.lean; //lean of carriage about direction axis at start, a phi variable
	var initialTurn = (startSection.options.turn === void 0) ? 0 : startSection.options.turn; // turn of carriage around upright at start, a theta variable
	var leanTwists  = (startSection.options.leanTwists === void 0) ? 0 : startSection.options.leanTwists; //number of  lean twists (+ve counter clockwise, -ve clockwise)
	var leanWaves  = (startSection.options.leanWaves === void 0) ? 0 : startSection.options.leanWaves; //number of lean waves
	var leanWaveAngle  = (startSection.options.leanWaveAngle === void 0) ? 0 : startSection.options.leanWaveAngle; //angle for lean wave
	var turnTwists  = (startSection.options.turnTwists === void 0) ? 0 : startSection.options.turnTwists; //number of  turn twists (+ve counter clockwise, -ve clockwise)
	var turnWaves  = (startSection.options.turnWaves === void 0) ? 0 : startSection.options.turnWaves; //number of turn waves
	var turnWaveAngle  = (startSection.options.turnWaveAngle === void 0) ? 0 : startSection.options.turnWaveAngle; //angle for turn wave
	
	var finalLean = (endSection.options.lean === void 0) ? 0 : endSection.options.lean;
    var finalTurn = (endSection.options.turn === void 0) ? 0 : endSection.options.turn;
    
    /***** Check if both waves and  twists are used and ignore twists when so  *****/
	//lean waves supersede lean twists unless leanWaveAngle = 0
	if (leanWaves > 0 && Math.abs(leanTwists) > 0) {
		if (leanWaveAngle == 0) {
			leanWaves = 0;
		}
		else {
			leanTwists = 0;
		}
	}
	
	//turn waves supersede turn twists unless turnWaveAngle = 0
	if (turnWaves > 0 && Math.abs(turnTwists) > 0) {
		if (turnWaveAngle == 0) {
			turnWaves = 0;
		}
		else {
			turnTwists = 0;
		}
	}
	
    /***** Initiate the variables *****/
    //rail transformation
	var rotationMatrixY = BABYLON.Matrix.Identity();		
	var rotationMatrixZ = BABYLON.Matrix.Identity();		
	var rotationMatrix = BABYLON.Matrix.Identity();
	
	var tilt  = 0; //of rail rotation about (0, 0, 1) gives gradient
	var swivel = 0 //rotation of rail around (0, 1, 0)
	
	var deltaPhi = (finalLean  + 2 * leanTwists * Math.PI - initialLean) / (nbRails); //increase in phi per rail for lean twist		
	var deltaTheta = (finalTurn  + 2 * turnTwists * Math.PI - initialTurn) / (nbRails); //increase in theta per rail for lean twist		
	var phi = initialLean;
	var theta = initialTurn;
	var m = BABYLON.Matrix.Identity();
	var initialRailDirection = BABYLON.Axis.X;
	var initialUprightDirection = BABYLON.Axis.Y;
	var initialLevelDirection = BABYLON.Axis.Z;
	var railDirection = BABYLON.Vector3.Zero();
	var uprightDirection = BABYLON.Vector3.Zero();
	var levelDirection = BABYLON.Vector3.Zero();
	var leanDirection = BABYLON.Vector3.Zero();
	var turnDirection = BABYLON.Vector3.Zero();
	var carriageNormal = BABYLON.Vector3.Zero();
	var rotationMatrixLean = BABYLON.Matrix.Identity();
	var rotationMatrixTurn = BABYLON.Matrix.Identity();
	var rotationMatrixPassenger = BABYLON.Matrix.Identity();
	var initialPosition = BABYLON.Vector3.Zero();
	
	var normal = BABYLON.Vector3.Zero();
	var binormal = BABYLON.Vector3.Zero();
	
	var rotation = BABYLON.Matrix.Identity();
	var gradLean = (finalLean - initialLean) / (nbRails - 1); // lean gradient
	var gradTurn = (finalTurn - initialTurn) / (nbRails - 1); // turn gradient
    var railCount = 0;
    
    /***** Main  Loop*****/

	for (var i = railsFrom; i < railsTo; i++) {		
		points[(i + 1) % points.length].subtractToRef(points[i], railDirection);  //direction of each rail
		railDirection.normalize();			
		swivel = -Math.atan2(railDirection.z, railDirection.x);  //swivel angle rail makes in xz plane
		tilt = Math.atan2(Math.abs(railDirection.y), Math.abs(railDirection.x)); // tilt angle rail makes in first quadrant of xy plane
		tilt *= Math.sign(railDirection.y); //tilt angle of rail in xy plane from -pi/2 to pi/2
		BABYLON.Matrix.RotationAxisToRef(BABYLON.Axis.Y, swivel, rotationMatrixY); //swivel angle to matrix rotation			
		BABYLON.Matrix.RotationAxisToRef(BABYLON.Axis.Z, tilt, rotationMatrixZ); //tilt angle to matrix rotation			
		rotationMatrixZ.multiplyToRef(rotationMatrixY, rotationMatrix); // form combined swivel and tilt matrix
		BABYLON.Vector3.TransformNormalToRef(initialUprightDirection, rotationMatrix, uprightDirection); //apply 
		BABYLON.Vector3.TransformNormalToRef(initialLevelDirection, rotationMatrix, levelDirection);
		uprightDirection.normalize();
		levelDirection.normalize();
		
	    if (leanWaves > 0) {
			phi = initialLean + railCount * gradLean + leanWaveAngle * Math.sin(railCount * leanWaves * Math.PI / (nbRails - 1));					
		}
		else {
			phi += deltaPhi;
		}
		if (turnWaves > 0) {
			theta = initialTurn + railCount * gradTurn + turnWaveAngle * Math.sin(railCount * turnWaves * Math.PI / (nbRails - 1));
		}
		else {
			theta += deltaTheta;
		}	
		railCount++;
		BABYLON.Matrix.RotationAxisToRef(railDirection, phi, rotationMatrixLean);
		BABYLON.Vector3.TransformNormalToRef(uprightDirection, rotationMatrixLean, carriageNormal);
		BABYLON.Matrix.RotationAxisToRef(carriageNormal, theta, rotationMatrixTurn);
		
		BABYLON.Matrix.RotationAxisToRef(initialUprightDirection, theta, rotationMatrixPassenger);
		passengerRotations.push(rotationMatrixPassenger.clone());
		
		rotationMatrix.multiplyToRef(rotationMatrixLean, rotation);
		carriageRotations.push(rotation.clone());
		rotation.multiplyToRef(rotationMatrixTurn, rotation);
		rotations.push(rotation.clone())
		
		directions.push(railDirection.clone());
	}
}
```



# Further Reading

## More Advanced - Level 3
[Building a Track](/snippets/Track)  