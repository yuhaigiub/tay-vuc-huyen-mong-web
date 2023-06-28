/**
 *
 *
 *
 *
 *
 *
 */
// scale root

// video

import "./index.css";
import "./custom-fancybox.css";

import "./components/Popup/popup-general.css";
import "./components/Popup/components/DangKy/style.css";
import "./components/Popup/components/TheLe/style.css";

import "./components/Frame1/style.css";
import "./components/Frame1/style-mobile.css";

import "./components/Frame2/style.css";
import "./components/Frame2/style-mobile.css";

import "./components/Frame3/style.css";
import "./components/Frame4/style.css";

import "./components/Frame5/style.css";
import "./components/Frame5/style-mobile.css";

import "./components/Footer/style.css";

import { initiatePopup } from "./components/Popup";

import { runFrame1 } from "./components/Frame1";
import { runFrame2 } from "./components/Frame2";
import { runFrame3 } from "./components/Frame3";
import { runFrame5 } from "./components/Frame5";

$(function () {
	// ready

	const outerRoot = document.getElementById("outer-root");
	const root = document.getElementById("root");

	document.body.style.padding = 0;
	document.body.style.margin = 0;
	document.body.style.overflowX = "hidden";
	document.body.style.height = "100vh";

	outerRoot.style.width = "fit-content";
	outerRoot.style.overflow = "hidden";

	root.style.transformOrigin = "top left";
	root.style.overflow = "hidden";

	let mode, width, height, ratio;

	function scaleRoot() {
		console.log(window.screen.width, window.screen.height);
		// check on every trigger
		mode = window.innerWidth <= 768 ? "mobile" : "pc";
		width = root.offsetWidth;
		height = root.offsetHeight;
		ratio = width / height;

		const desiredWidth = window.innerWidth;
		const desiredHeight = desiredWidth / ratio;

		const ratioW = desiredWidth / width;
		const ratioH = desiredHeight / height;

		outerRoot.style.width = `${desiredWidth}px`;
		outerRoot.style.height = `${desiredHeight}px`;

		root.style.transform = `scale(${ratioW}, ${ratioH})`;
	}

	initiatePopup();
	runFrame1();
	runFrame2();
	runFrame3();
	runFrame5();

	window.addEventListener("load", scaleRoot);
	window.addEventListener("resize", scaleRoot);
	window.addEventListener("click", () => {
		const fancyboxContainer = document.querySelector(".fancybox-container");
		if (fancyboxContainer) {
		}
	});
});
