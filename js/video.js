var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume")
	vol.innerHTML = (video.volume*100 + "%");
	console.log("Play Video");
	console.log(video)
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	var vid = document.getElementById("myVideo");
	vid.playbackRate -= 0.2;
  	console.log("Speed is " + video.playbackRate + "!");
} 

function increaseSpeed() {
	var vid = document.getElementById("myVideo");
	vid.playbackRate += 0.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime + 60 > video.duration) {
		// video.Play();
		video.currentTime = 0;
		// video.playbackRate = 1;
		console.log("Current location is "+ video.currentTime);
	}
	else {
		video.currentTime += 60;
		console.log("Current location is "+ video.currentTime);
	}

	
} 

function mute() { 
	if (video.muted){
		console.log("Changing the console to unmuted!")
		video.muted = false;
		document.getElementById("mute").innerText = "mute";
	}
	else{
		console.log("Changing to Muted")
		video.muted = true;
		document.getElementById("mute").innerText = "unmute";
	}
}
//   		console.log("Unmuted");
  	
//       	console.log("Muted");
// }

function changeVolume() {
	let vol = document.querySelector("#volumeSlider");
	let output = document.querySelector("#volume"); 
	// video.volume = vol;
	output.innetHTML = vol.value;
	
	vol.oninput = function() {
		output.innerHTML = this.value;
		console.log("Volume is:" + this.value);
	}

}
       

function gray() { 
	document.getElementById("myVideo").classList.add("grayscale");
	console.log("In grayscale")
}

function color() {
	document.getElementById("myVideo").classList.remove("grayscale");
	console.log("In color") 
}

