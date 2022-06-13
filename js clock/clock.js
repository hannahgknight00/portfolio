

console.log("lol");

function clockTime() {
	let date = new Date();
	let hr = date.getHours();
	let mn = date.getMinutes();
	let sd = date.getSeconds();
	let ap = "AM";

	if(hr == 0) { 
		hr = 12;
	} else if(hr > 12) {
		hr -= 12;
		ap = "PM";
	}

	if(hr<10) {
		hr = "0"+hr;
	}
	if(mn<10) {
		mn = "0"+mn;
	}
	if(sd<10) {
		sd = "0"+sd;
	}

	let timereturn = hr + " : " + mn + " : " + sd;

	document.getElementById("clockgt").innerText = timereturn;

	setTimeout(clockTime, 1000);
}

clockTime();