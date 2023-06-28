import "animate.css";

import "@fancyapps/fancybox";
import "@fancyapps/fancybox/dist/jquery.fancybox.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";

import "lazysizes";

import Swiper, {
	Navigation,
	Pagination,
	EffectCoverflow,
	EffectFade,
} from "swiper";
Swiper.use([Navigation, Pagination, EffectCoverflow, EffectFade]);

$.fancybox.defaults.arrows = false;
$.fancybox.defaults.smallBtn = false;

export function isInView(elem, full = false) {
	if (typeof jQuery === "function" && elem instanceof jQuery) {
		elem = elem[0];
	}

	const viewHeight = $(window).height();
	const docViewTop = $(window).scrollTop();
	const docViewBottom = docViewTop + viewHeight;

	const elemHeight = $(elem).height();
	const elemTop = $(elem).offset().top;
	const elemBottom = elemTop + elemHeight;

	console.log(docViewTop, docViewBottom, elemTop, elemBottom);

	if (full) {
		return elemBottom <= docViewBottom && elemTop >= docViewTop;
	} else {
		return (
			(elemBottom >= docViewTop && elemTop <= docViewBottom) ||
			(elemTop <= docViewBottom && elemTop >= docViewTop)
		);
	}
}

export const animateCSS = (element, animationName) => {
	if (typeof jQuery === "function" && element instanceof jQuery) {
		element = element[0];
	}
	// We create a Promise and return it
	return new Promise((resolve, reject) => {
		element.classList.add(`animate__animated`, animationName);

		// When the animation ends, we clean the classes and resolve the Promise
		function handleAnimationEnd(event) {
			event.stopPropagation();
			element.classList.remove(`animate__animated`, animationName);
			resolve("Animation ended");
		}

		element.addEventListener("animationend", handleAnimationEnd, {
			once: true,
		});
	});
};
