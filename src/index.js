/**
 *
 *
 *
 *
 *
 *
 */
// scale root
import ScrollWatch from "scrollwatch";
import { initiatePopup } from "./components/Popup";

import { runHeaderMobile } from "./components/HeaderMobile";
import { runFrame1 } from "./components/Frame1";
import { runFrame2 } from "./components/Frame2";
import { runFrame3 } from "./components/Frame3";
import { runFrame5 } from "./components/Frame5";
import { animateCSS } from "./import_assets";

$(function () {
	// ready

	// custom
	const mobileHeaderContainer = $("#mobile-header-container").get(0);
	mobileHeaderContainer.style.transformOrigin = "top left";

	const backToTop = $("#back-to-top-button").get(0);

	//
	const outerRoot = document.getElementById("outer-root");
	const root = document.getElementById("root");

	document.body.style.padding = 0;
	document.body.style.margin = 0;
	document.body.style.width = "100vw";
	document.body.style.height = "fit-content";
	document.body.style.overflowX = "hidden";

	outerRoot.style.width = "fit-content";
	outerRoot.style.overflow = "hidden";

	root.style.transformOrigin = "top left";
	root.style.overflow = "hidden";

	let mode, width, height, ratio;

	function scaleRoot() {
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
		mobileHeaderContainer.style.transform = `scale(${ratioW}, ${ratioH})`;
		backToTop.style.transform = `scale(${ratioW}, ${ratioH})`;
	}

	initiatePopup();
	runHeaderMobile();
	runFrame1();
	runFrame2();
	runFrame3();
	runFrame5();

	const frame2Info = $("#frame2-info");
	const frame2Swiper = $(".frame2-swiper-character");
	const frame2Video = $("#frame2-video-container");

	const frame3Swiper = $(".frame3-swiper");
	const frame4Buttons = $("#frame4-button-container .frame4-button");

	const sw = new ScrollWatch({
		onElementInView: function (data) {
			switch (data.el) {
				case frame2Info.get(0):
					animateCSS(frame2Info, "animate__fadeInLeftBig");
					return;
				case frame2Swiper.get(0):
					animateCSS(frame2Swiper, "animate__fadeInUpBig");
					return;
				case frame2Video.get(0):
					animateCSS(frame2Video, "animate__fadeInRightBig");
					return;
				// frame 3
				case frame3Swiper.get(0):
					animateCSS(frame3Swiper, "animate__fadeInUpBig");
					return;
			}

			let done = false;
			frame4Buttons.each(function (index, el) {
				if (data.el === el) {
					animateCSS(el, "animate__fadeInLeftBig");
					done = true;
					return false;
				}
			});
			if (done) return;
		},
	});

	window.addEventListener("load", scaleRoot);
	window.addEventListener("resize", scaleRoot);
});
