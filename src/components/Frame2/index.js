import Swiper from "swiper";
import { animateCSS, isInView } from "../../import_assets";

export function runFrame2() {
	const frame2CharacterSwiper = new Swiper(".frame2-swiper-character", {
		direction: "horizontal",
		loop: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
	});

	// buttons and decor balls
	const decorBalls = $(".decor-ball");
	const maleButton = $("#frame2-male-button");
	const femaleButton = $("#frame2-female-button");

	maleButton.on("click", function (event) {
		maleButton.attr("active", true);
		femaleButton.attr("active", false);
		decorBalls.eq(0).show();
		decorBalls.eq(3).show();
		decorBalls.eq(1).hide();
		decorBalls.eq(2).hide();
		frame2CharacterSwiper.slideTo(0);
	});

	femaleButton.on("click", function (event) {
		maleButton.attr("active", false);
		femaleButton.attr("active", true);
		decorBalls.eq(0).hide();
		decorBalls.eq(3).hide();
		decorBalls.eq(1).show();
		decorBalls.eq(2).show();
		frame2CharacterSwiper.slideTo(1);
	});
}

export function checkInViewFrame2(e) {
	const frame2Info = $("#frame2-info");
	const frame2Swiper = $(".frame2-swiper-character");
	const frame2Video = $("#frame2-video-container");

	if (isInView(frame2Info)) {
		frame2Info.show();
		frame2Swiper.show();
		frame2Video.show();
		console.log("in view");
		animateCSS(frame2Info, "animate__fadeInLeftBig");
		animateCSS(frame2Swiper, "animate__fadeInUpBig");
		animateCSS(frame2Video, "animate__fadeInRightBig");

		window.removeEventListener("load", checkInViewFrame2);
		window.removeEventListener("scroll", checkInViewFrame2);
	}
}
