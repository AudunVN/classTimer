/* IE8 polyfill */
if (!Date.now) {
	Date.now = function() { return new Date().getTime(); }
}

function checkTimers() {
	var currentTime = Math.floor(Date.now() / 1000);
	var timedObjects = document.querySelectorAll("[data-showAfter], [data-hideAfter]");
	
	for (i = 0; i < timedObjects.length; i++) {
		if (timedObjects[i].hasAttribute("data-showAfter") && timedObjects[i].getAttribute("data-showAfter") <= currentTime) {
			timedObjects[i].className += " shownAfter";
		} else {
			timedObjects[i].className += " hiddenBefore";
		}
		if (timedObjects[i].hasAttribute("data-hideAfter") && timedObjects[i].getAttribute("data-hideAfter") <= currentTime) {
			timedObjects[i].className += " hiddenAfter";
		} else {
			timedObjects[i].className += " shownBefore";
		}
	}
}

checkTimers();
