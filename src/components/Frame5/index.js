import Swiper from "swiper";

export function runFrame5() {
	const frame5Swiper = new Swiper(".frame5-swiper", {
		direction: "horizontal",
		slidesPerView: 3,
		grabCursor: true,
		pagination: {
			el: ".frame5-swiper .swiper-pagination",
			clickable: true,
		},
	});
}
