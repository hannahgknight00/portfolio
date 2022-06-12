var hours = 00;
var minutes = 00;
var seconds = 00;

var insertHours = document.getElementById("hours");
var insertMinutes = document.getElementById("minutes");
var insertSeconds = document.getElementById("seconds");

var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var value;

var error = document.getElementById("timerheader");

function timerStart() {
	seconds++;

	if (seconds < 10) {
		insertSeconds.innerHTML = "0" + seconds;
	} else if (seconds < 60) {
		insertSeconds.innerHTML = seconds;
	} else if (seconds == 60) {
		minutes++;
		seconds = 0; insertSeconds.innerhtml = "0" + seconds;
		if (minutes < 10) {
			insertMinutes.innerHTML = "0" + minutes;
		} else if (minutes < 60) {
			insertMinutes.innerHTML = minutes;
		} else if (minutes == 60) {
			hours++;
			minutes = 0; insertMinutes.innerHTML = "0" + minutes;
			if (hours < 10) {
				insertHours.innerHTML = "0" + hours;
			} else {
				insertHours.innerHTML = hours;
			}
		} else {
			error.innerHTML = "lol you broke it";
		}
	} else {
		error.innerHTML = "lol you broke it";
	}
}

start.onclick = function() {
	value = setInterval(timerStart, 1);
}

stop.onclick = function() {
	clearInterval(value);
}

reset.onclick = function() {
	hours = 00;
	minutes = 00;
	seconds = 00;

	insertHours.innerHTML = "0" + hours;
	insertMinutes.innerHTML = "0" + minutes;
	insertSeconds.innerHTML = "0" + seconds;
}