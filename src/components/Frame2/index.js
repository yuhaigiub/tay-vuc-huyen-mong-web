import Swiper from "swiper";
import SwiperAnimation from "@cycjimmy/swiper-animation";
import bgVideo from "../Frame1/assets/frame1_bg_video.mp4";

export function runFrame2() {
	// buttons and decor balls
	const decorBalls = $(".decor-ball");
	const maleButton = $("#frame2-male-button");
	const femaleButton = $("#frame2-female-button");

	const swiperAnimation = new SwiperAnimation();
	const frame2CharacterSwiper = new Swiper(".frame2-swiper-character", {
		direction: "horizontal",
		loop: true,
		allowTouchMove: false,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		on: {
			init: function (swiper) {
				swiperAnimation.init(this).animate();
			},
			slideChange: function (swiper) {
				swiperAnimation.init(this).animate();
			},
			touchStart: function (swiper) {
				const currentIndex = swiper.activeIndex;
				if (currentIndex === 0) {
					maleButton.attr("active", false);
					femaleButton.attr("active", true);
					decorBalls.eq(0).hide();
					decorBalls.eq(3).hide();
					decorBalls.eq(1).show();
					decorBalls.eq(2).show();
					frame2CharacterSwiper.slideTo(1);
				} else {
					maleButton.attr("active", true);
					femaleButton.attr("active", false);
					decorBalls.eq(0).show();
					decorBalls.eq(3).show();
					decorBalls.eq(1).hide();
					decorBalls.eq(2).hide();
					frame2CharacterSwiper.slideTo(0);
				}
			},
		},
	});

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

	//
	const video = $("#frame2-video-container video");
	const src = document.createElement("source");
	src.src = bgVideo;
	src.type = "video/mp4";
	video.append(src);
}
