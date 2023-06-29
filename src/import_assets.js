import "./index.css";
import "./custom-fancybox.css";

import "./components/BackToTop/style.css";

import "./components/Popup/popup-general.css";
import "./components/Popup/components/DangKy/style.css";
import "./components/Popup/components/TheLe/style.css";

import "./components/HeaderMobile/style.css";

import "./components/Frame1/style.css";

import "./components/Frame2/style.css";
import "./components/Frame2/style-mobile.css";

import "./components/Frame3/style.css";
import "./components/Frame4/style.css";

import "./components/Frame5/style.css";
import "./components/Frame5/style-mobile.css";

import "./components/Footer/style.css";

//

import "animate.css";

import "@fancyapps/fancybox";
import "@fancyapps/fancybox/dist/jquery.fancybox.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";

import "lazysizes";

import Swiper, { Navigation, Pagination, EffectCoverflow, EffectFade } from "swiper";
Swiper.use([Navigation, Pagination, EffectCoverflow, EffectFade]);

$.fancybox.defaults.arrows = false;
$.fancybox.defaults.smallBtn = false;

export function isInView(elem, root, full = false) {
	if (typeof jQuery === "function" && elem instanceof jQuery) {
		elem = elem[0];
	}

	const viewHeight = root.height();
	const docViewTop = root.scrollTop();
	const docViewBottom = docViewTop + viewHeight;

	const elemHeight = $(elem).height();
	const elemTop = $(elem).offset().top;
	const elemBottom = elemTop + elemHeight;

	if (full) {
		return elemBottom <= docViewBottom && elemTop >= docViewTop;
	} else {
		return (
			(elemTop >= docViewTop && elemTop <= docViewBottom) || (elemBottom >= docViewTop && elemBottom <= docViewBottom)
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
