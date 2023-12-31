import videoBg from "./assets/frame1_bg_video.mp4";

export function runFrame1() {
	let firstActionState = false;

	// video bg
	const video = $("#frame1-container video").get(0);
	const source = document.createElement("source");
	source.src = videoBg;
	video.appendChild(source);

	// --------------------------------------------
	// audio
	const audio = $("audio").get(0);
	let musicState = false;
	const musicButton = $("#frame1-music-button");
	const musicButtonMobile = $("#frame1-music-button-mobile");

	musicButton.on("click", function (event) {
		musicState = !musicState;
		musicButton.attr("active", musicState);
		musicButtonMobile.attr("active", musicState);
		firstActionState = true;
		if (musicState) {
			audio.play();
		} else {
			audio.pause();
		}
	});

	musicButtonMobile.on("click", function (event) {
		musicState = !musicState;
		musicButton.attr("active", musicState);
		musicButtonMobile.attr("active", musicState);
		firstActionState = true;
		if (musicState) {
			audio.play();
		} else {
			audio.pause();
		}
	});

	// create an Array from 1 to 12
	const excludedFnKeys = Array.from({ length: 12 }, (_, i) => i + 1).map(
		(i) => `F${i}`
	);
	const excludedKeys = [
		...excludedFnKeys,
		"Control",
		"Shift",
		"Escape",
		"Tab",
		"CapsLock",
		"OS",
		"Alt",
	];

	function trackFirstMovement(e) {
		if (!firstActionState) {
			console.log(e.key);
			if (e.type === "keydown" && excludedKeys.includes(e.key)) {
				return;
			}

			audio.play();
			firstActionState = true;
			musicState = !musicState;
			musicButton.attr("active", musicState);
			musicButtonMobile.attr("active", musicState);
		} else {
			window.removeEventListener("click", trackFirstMovement);
			window.removeEventListener("keydown", trackFirstMovement);
		}
	}

	window.addEventListener("click", trackFirstMovement);
	// window.addEventListener("keydown", trackFirstMovement);
}
