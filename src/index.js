/**
 *
 *
 *
 *
 *
 *
 */
// scale root

import { initiatePopup } from "./components/Popup";

import { runHeaderMobile } from "./components/HeaderMobile";
import { runFrame1 } from "./components/Frame1";
import { runFrame2, checkInViewFrame2 } from "./components/Frame2";
import { runFrame3 } from "./components/Frame3";
import { runFrame5 } from "./components/Frame5";
import { isInView, animateCSS } from "./import_assets";

$(function () {
	// ready

	// custom
	const mobileHeaderContainer = $("#mobile-header-container").get(0);
	mobileHeaderContainer.style.transformOrigin = "top left";

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
	}

	initiatePopup();
	runHeaderMobile();
	runFrame1();
	runFrame2();
	runFrame3();
	runFrame5();

	window.addEventListener("load", scaleRoot);
	window.addEventListener("resize", scaleRoot);

	function frame2InView() {
		const frame2Info = $("#frame2-info");
		const frame2Swiper = $(".frame2-swiper-character");
		const frame2Video = $("#frame2-video-container");
		if (isInView(frame2Info, $(window))) {
			animateCSS(frame2Info, "animate__fadeInLeftBig");
			animateCSS(frame2Swiper, "animate__fadeInUpBig");
			animateCSS(frame2Video, "animate__fadeInRightBig");

			window.removeEventListener("load", frame2InView);
			window.removeEventListener("scroll", frame2InView);
		}
	}

	function frame3InView() {
		const frame3Swiper = $(".frame3-swiper");
		if (isInView(frame3Swiper, $(window))) {
			animateCSS(frame3Swiper, "animate__fadeInUpBig");

			window.removeEventListener("load", frame3InView);
			window.removeEventListener("scroll", frame3InView);
		}
	}

	function frame4InView() {
		const frame4ButtonContainer = $("#frame4-button-container");
		const frame4Buttons = $("#frame4-button-container .frame4-button");

		if (isInView(frame4ButtonContainer, $(window)) && $(window).width() >= 750) {
			frame4Buttons.hide();
			frame4Buttons.each(function (index, element) {
				setTimeout(() => {
					$(element).show();
					animateCSS(element, "animate__fadeInLeftBig");
				}, index * 100);
			});

			window.removeEventListener("load", frame4InView);
			window.removeEventListener("scroll", frame4InView);
		}
	}

	function frame5InView() {
		const frame5ButtonContainer = $("#frame5-button-container");
		const frame5Buttons = $("#frame5-button-container .frame5-button");

		if (isInView(frame5ButtonContainer, $(window)) && $(window).width() >= 750) {
			frame5Buttons.hide();
			frame5Buttons.each(function (index, element) {
				setTimeout(() => {
					$(element).show();
					animateCSS(element, "animate__fadeInUpBig");
				}, index * 100);
			});

			window.removeEventListener("load", frame5InView);
			window.removeEventListener("scroll", frame5InView);
		}
	}

	window.addEventListener("load", frame2InView);
	window.addEventListener("scroll", frame2InView);

	window.addEventListener("load", frame3InView);
	window.addEventListener("scroll", frame3InView);

	window.addEventListener("load", frame4InView);
	window.addEventListener("scroll", frame4InView);

	window.addEventListener("load", frame5InView);
	window.addEventListener("scroll", frame5InView);
});
