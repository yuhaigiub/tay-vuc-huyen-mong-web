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
