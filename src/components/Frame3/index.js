import Swiper from "swiper";

export function runFrame3() {
	const frame3Swiper = new Swiper(".frame3-swiper", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		slidesPerView: "auto",
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 50,
			modifier: 2.5,
		},
		pagination: {
			el: ".frame3-swiper .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".frame3-swiper .swiper-button-next",
			prevEl: ".frame3-swiper .swiper-button-prev",
		},
	});
}
