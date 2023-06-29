import Swiper from "swiper";
import SwiperAnimation from "@cycjimmy/swiper-animation";

export function runFrame2() {
	const swiperAnimation = new SwiperAnimation();
	console.log(swiperAnimation);
	const frame2CharacterSwiper = new Swiper(".frame2-swiper-character", {
		direction: "horizontal",
		loop: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		on: {
			slideChange: function () {
				swiperAnimation.init(this).animate();
			},
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
