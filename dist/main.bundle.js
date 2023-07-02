(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["main"],{

/***/ "./node_modules/scrollwatch/dist/ScrollWatch-2.0.1.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scrollwatch/dist/ScrollWatch-2.0.1.min.js ***!
  \****************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! scrollwatch v2.0.1 | (c) Mon Jan 01 2018 14:27:45 GMT-0500 (EST) Evan Dull <evandull@gmail.com> | License: MIT | https://github.com/edull24/ScrollWatch.git*/
!function(t,i){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function(){"use strict";var t=0,i={},e={container:window.document.documentElement,watch:"[data-scroll-watch]",watchOnce:!0,inViewClass:"scroll-watch-in-view",ignoreClass:"scroll-watch-ignore",debounce:!1,debounceTriggerLeading:!1,scrollDebounce:250,resizeDebounce:250,scrollThrottle:250,resizeThrottle:250,watchOffsetXLeft:0,watchOffsetXRight:0,watchOffsetYTop:0,watchOffsetYBottom:0,infiniteScroll:!1,infiniteOffset:0,onElementInView:function(){},onElementOutOfView:function(){},onInfiniteXInView:function(){},onInfiniteYInView:function(){}},n="scrollwatchinit",s=function(t){var i,e,n,s=arguments.length;for(t=t||{},i=1;s>i;i++)if(n=arguments[i])for(e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t},l=function(t,i,e){var n,s;return i=i||250,function(){var l=e||this,o=+new Date,c=arguments;n&&n+i>o?(window.clearTimeout(s),s=setTimeout(function(){n=o,t.apply(l,c)},i)):(n=o,t.apply(l,c))}},o=function(t,i,e){var n,s,l,o,c,r=function(){var a=(new Date).getTime()-o;i>a&&a>=0?n=setTimeout(r,i-a):(n=null,e||(c=t.apply(l,s),n||(l=s=null)))};return function(){var a=e&&!n;return l=this,s=arguments,o=(new Date).getTime(),n||(n=setTimeout(r,i)),a&&(c=t.apply(l,s),l=s=null),c}},c=function(){var t=i[this._id].config;"string"==typeof t.container&&(t.container=document.querySelector(t.container))},r=function(){i[this._id].elements=Array.prototype.slice.call(document.querySelectorAll(i[this._id].config.watch+":not(."+i[this._id].config.ignoreClass+")"))},a=function(){i[this._id].lastScrollPosition=p.call(this)},f=function(t){h.call(this,t),d.call(this,t),t!==n&&a.call(this)},h=function(t){var e,s,l=i[this._id],o=l.elements.length,c=l.config,r=c.inViewClass,a={eventType:t};for(s=0;o>s;s++)e=l.elements[s],a.el=e,"scroll"===t&&(a.direction=_.call(this,x.call(this))),T.call(this,e)?e.classList.contains(r)||(e.classList.add(r),c.onElementInView.call(this,a),c.watchOnce&&(l.elements.splice(s,1),o--,s--,e.classList.add(c.ignoreClass))):(e.classList.contains(r)||t===n)&&(e.classList.remove(r),c.onElementOutOfView.call(this,a))},d=function(t){var e,s,l,o,c,r,a,f=i[this._id],h=f.config;if(h.infiniteScroll&&!f.isInfiniteScrollPaused)for(s=["x","y"],r=["onInfiniteXInView","onInfiniteYInView"],l=h.container,o=m.call(this),c=[l.scrollWidth,l.scrollHeight],a={},e=0;2>e;e++)("scroll"===t&&O.call(this,s[e])||"resize"===t||"refresh"===t||t===n)&&o[s[e]].end+h.infiniteOffset>=c[e]&&(a.eventType=t,"scroll"===t&&(a.direction=_.call(this,s[e])),h[r[e]].call(this,a))},u=function(){var t=i[this._id],e=w.call(this);e.addEventListener("scroll",t.scrollHandler,!1),e.addEventListener("resize",t.resizeHandler,!1)},g=function(){var t=i[this._id],e=w.call(this);e.removeEventListener("scroll",t.scrollHandler),e.removeEventListener("resize",t.resizeHandler)},w=function(){return z.call(this)?window:i[this._id].config.container},y=function(){var t={w:i[this._id].config.container.clientWidth,h:i[this._id].config.container.clientHeight};return t},p=function(){var t,e={};return z.call(this)?(e.left=window.pageXOffset,e.top=window.pageYOffset):(t=i[this._id].config.container,e.left=t.scrollLeft,e.top=t.scrollTop),e},m=function(){var t={x:{},y:{}},i=p.call(this),e=y.call(this);return t.x.start=i.left,t.x.end=t.x.start+e.w,t.x.size=t.x.end-t.x.start,t.y.start=i.top,t.y.end=t.y.start+e.h,t.y.size=t.y.end-t.y.start,t},v=function(t){var e,n={x:{},y:{}},s=m.call(this),l=t.getBoundingClientRect();return z.call(this)?(n.x.start=l.left+s.x.start,n.x.end=l.right+s.x.start,n.y.start=l.top+s.y.start,n.y.end=l.bottom+s.y.start):(e=i[this._id].config.container.getBoundingClientRect(),n.x.start=l.left-e.left+s.x.start,n.x.end=n.x.start+l.width,n.y.start=l.top-e.top+s.y.start,n.y.end=n.y.start+l.height),n.x.size=n.x.end-n.x.start,n.y.size=n.y.end-n.y.start,n},x=function(){return O.call(this,"x")?"x":O.call(this,"y")?"y":void 0},_=function(t){var e={x:["right","left"],y:["down","up"]},n={x:"left",y:"top"},s=i[this._id].lastScrollPosition,l=p.call(this);return l[n[t]]>s[n[t]]?e[t][0]:e[t][1]},O=function(t){var e={x:"left",y:"top"},n=i[this._id].lastScrollPosition,s=p.call(this);return s[e[t]]!==n[e[t]]},T=function(t){var i=m.call(this),e=v.call(this,t);return L.call(this,e,i)&&b.call(this,e,i)},L=function(t,e){var n=i[this._id].config;return t.y.start<e.y.end+n.watchOffsetYBottom&&t.y.end>e.y.start-n.watchOffsetYTop},b=function(t,e){var n=i[this._id].config;return t.x.start<e.x.end+n.watchOffsetXRight&&t.x.end>e.x.start-n.watchOffsetXLeft},z=function(){return i[this._id].config.container===window.document.documentElement},I=function(t){s(i[this._id].config,e,t)},S=function(t){var e=t.type;i[this._id]&&("resize"===e||O.call(this,"x")||O.call(this,"y"))&&f.call(this,e)},X=function(e){var s;return this instanceof X?(Object.defineProperty(this,"_id",{value:t++}),s=i[this._id]={config:{},elements:[],lastScrollPosition:{top:0,left:0},isInfiniteScrollPaused:!1},I.call(this,e),s.config.debounce?(s.scrollHandler=o(S.bind(this),s.config.scrollDebounce,s.config.debounceTriggerLeading),s.resizeHandler=o(S.bind(this),s.config.resizeDebounce,s.config.debounceTriggerLeading)):(s.scrollHandler=l(S.bind(this),s.config.scrollThrottle,this),s.resizeHandler=l(S.bind(this),s.config.resizeThrottle,this)),c.call(this),u.call(this),r.call(this),f.call(this,n),void 0):new X(e)};return X.prototype={refresh:function(){r.call(this),f.call(this,"refresh")},destroy:function(){g.call(this),delete i[this._id]},updateWatchOffsetXLeft:function(t){i[this._id].config.watchOffsetXLeft=t},updateWatchOffsetXRight:function(t){i[this._id].config.watchOffsetXRight=t},updateWatchOffsetYTop:function(t){i[this._id].config.watchOffsetYTop=t},updateWatchOffsetYBottom:function(t){i[this._id].config.watchOffsetYBottom=t},pauseInfiniteScroll:function(){i[this._id].isInfiniteScrollPaused=!0},resumeInfiniteScroll:function(){i[this._id].isInfiniteScrollPaused=!1}},X});
//# sourceMappingURL=ScrollWatch-2.0.1.min.js.map

/***/ }),

/***/ "./src/components/Frame1/index.js":
/*!****************************************!*\
  !*** ./src/components/Frame1/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runFrame1: () => (/* binding */ runFrame1)
/* harmony export */ });
/* harmony import */ var _assets_frame1_bg_video_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/frame1_bg_video.mp4 */ "./src/components/Frame1/assets/frame1_bg_video.mp4");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function runFrame1() {
	let firstActionState = false;

	// video bg
	const video = $("#frame1-container video").get(0);
	const source = document.createElement("source");
	source.src = _assets_frame1_bg_video_mp4__WEBPACK_IMPORTED_MODULE_0__;
	video.appendChild(source);

	// --------------------------------------------
	// audio
	const audio = $("audio").get(0);
	let musicState = false;
	const musicButton = $("#frame1-music-button");
	const musicButtonMobile = $("#frame1-music-button-mobile");

	musicButton.on("click", function (event) {
		musicState = !musicState;
		musicButton.attr("active", musicState);
		musicButtonMobile.attr("active", musicState);
		firstActionState = true;
		if (musicState) {
			audio.play();
		} else {
			audio.pause();
		}
	});

	musicButtonMobile.on("click", function (event) {
		musicState = !musicState;
		musicButton.attr("active", musicState);
		musicButtonMobile.attr("active", musicState);
		firstActionState = true;
		if (musicState) {
			audio.play();
		} else {
			audio.pause();
		}
	});

	// create an Array from 1 to 12
	const excludedFnKeys = Array.from({ length: 12 }, (_, i) => i + 1).map(
		(i) => `F${i}`
	);
	const excludedKeys = [
		...excludedFnKeys,
		"Control",
		"Shift",
		"Escape",
		"Tab",
		"CapsLock",
		"OS",
		"Alt",
	];

	function trackFirstMovement(e) {
		if (!firstActionState) {
			console.log(e.key);
			if (e.type === "keydown" && excludedKeys.includes(e.key)) {
				return;
			}

			audio.play();
			firstActionState = true;
			musicState = !musicState;
			musicButton.attr("active", musicState);
			musicButtonMobile.attr("active", musicState);
		} else {
			window.removeEventListener("click", trackFirstMovement);
			window.removeEventListener("keydown", trackFirstMovement);
		}
	}

	window.addEventListener("click", trackFirstMovement);
	// window.addEventListener("keydown", trackFirstMovement);
}


/***/ }),

/***/ "./src/components/Frame2/index.js":
/*!****************************************!*\
  !*** ./src/components/Frame2/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runFrame2: () => (/* binding */ runFrame2)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _cycjimmy_swiper_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cycjimmy/swiper-animation */ "./node_modules/@cycjimmy/swiper-animation/dist/swiper-animation.esm.js");
/* harmony import */ var _Frame1_assets_frame1_bg_video_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Frame1/assets/frame1_bg_video.mp4 */ "./src/components/Frame1/assets/frame1_bg_video.mp4");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




function runFrame2() {
	// buttons and decor balls
	const decorBalls = $(".decor-ball");
	const maleButton = $("#frame2-male-button");
	const femaleButton = $("#frame2-female-button");

	const swiperAnimation = new _cycjimmy_swiper_animation__WEBPACK_IMPORTED_MODULE_1__["default"]();
	const frame2CharacterSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".frame2-swiper-character", {
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
	src.src = _Frame1_assets_frame1_bg_video_mp4__WEBPACK_IMPORTED_MODULE_2__;
	src.type = "video/mp4";
	video.append(src);
}


/***/ }),

/***/ "./src/components/Frame3/index.js":
/*!****************************************!*\
  !*** ./src/components/Frame3/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runFrame3: () => (/* binding */ runFrame3)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


function runFrame3() {
	const frame3Swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".frame3-swiper", {
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


/***/ }),

/***/ "./src/components/Frame5/index.js":
/*!****************************************!*\
  !*** ./src/components/Frame5/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runFrame5: () => (/* binding */ runFrame5)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


function runFrame5() {
	const frame5Swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".frame5-swiper", {
		direction: "horizontal",
		slidesPerView: 3,
		grabCursor: true,
		pagination: {
			el: ".frame5-swiper .swiper-pagination",
			clickable: true,
		},
	});
}


/***/ }),

/***/ "./src/components/HeaderMobile/index.js":
/*!**********************************************!*\
  !*** ./src/components/HeaderMobile/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runHeaderMobile: () => (/* binding */ runHeaderMobile)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function runHeaderMobile() {
	const seeMoreMobile = $("#header-see-more-button-mobile");
	const hiddenMobile = $("#header-hidden-mobile");

	// hiddenMobile.on("click", function (event) {
	// 	event.stopPropagation();
	// });

	let menuState = seeMoreMobile.attr("active") === "true";
	let transitioning = false;

	seeMoreMobile.on("click", function (event) {
		if (transitioning) return;
		menuState = !menuState;
		seeMoreMobile.attr("active", menuState);

		if (menuState) {
			transitioning = true;
			hiddenMobile.slideDown(350, function () {
				transitioning = false;
			});
		} else {
			transitioning = true;
			hiddenMobile.slideUp(350, function () {
				transitioning = false;
			});
		}
	});
}


/***/ }),

/***/ "./src/components/Popup/index.js":
/*!***************************************!*\
  !*** ./src/components/Popup/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initiatePopup: () => (/* binding */ initiatePopup)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function initiatePopup() {
	const closeButtons = $(".popup-close-button");
	closeButtons.each(function (index, element) {
		$(element).on("click", function (event) {
			$.fancybox.close();
		});
	});
	const cancelButton = $("#popup-dangky #dangky-cancel-button");
	cancelButton.on("click", function (event) {
		$.fancybox.close();
	});
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrollwatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollwatch */ "./node_modules/scrollwatch/dist/ScrollWatch-2.0.1.min.js");
/* harmony import */ var scrollwatch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scrollwatch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Popup */ "./src/components/Popup/index.js");
/* harmony import */ var _components_HeaderMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HeaderMobile */ "./src/components/HeaderMobile/index.js");
/* harmony import */ var _components_Frame1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Frame1 */ "./src/components/Frame1/index.js");
/* harmony import */ var _components_Frame2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Frame2 */ "./src/components/Frame2/index.js");
/* harmony import */ var _components_Frame3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Frame3 */ "./src/components/Frame3/index.js");
/* harmony import */ var _components_Frame5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Frame5 */ "./src/components/Frame5/index.js");
/* harmony import */ var _import_assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./import_assets */ "./src/import_assets.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 *
 *
 *
 *
 *
 *
 */
// scale root










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

$(function () {
	// ready

	(0,_components_Popup__WEBPACK_IMPORTED_MODULE_1__.initiatePopup)();
	(0,_components_HeaderMobile__WEBPACK_IMPORTED_MODULE_2__.runHeaderMobile)();
	(0,_components_Frame1__WEBPACK_IMPORTED_MODULE_3__.runFrame1)();
	(0,_components_Frame2__WEBPACK_IMPORTED_MODULE_4__.runFrame2)();
	(0,_components_Frame3__WEBPACK_IMPORTED_MODULE_5__.runFrame3)();
	(0,_components_Frame5__WEBPACK_IMPORTED_MODULE_6__.runFrame5)();

	const frame2Info = $("#frame2-info");
	const frame2Swiper = $(".frame2-swiper-character");
	const frame2Video = $("#frame2-video-container");

	const frame3Swiper = $(".frame3-swiper");
	const frame4Buttons = $("#frame4-button-container .frame4-button");

	const sw = new (scrollwatch__WEBPACK_IMPORTED_MODULE_0___default())({
		onElementInView: function (data) {
			switch (data.el) {
				case frame2Info.get(0):
					(0,_import_assets__WEBPACK_IMPORTED_MODULE_7__.animateCSS)(frame2Info, "animate__fadeInLeftBig");
					return;
				case frame2Swiper.get(0):
					(0,_import_assets__WEBPACK_IMPORTED_MODULE_7__.animateCSS)(frame2Swiper, "animate__fadeInUpBig");
					return;
				case frame2Video.get(0):
					(0,_import_assets__WEBPACK_IMPORTED_MODULE_7__.animateCSS)(frame2Video, "animate__fadeInRightBig");
					return;
				// frame 3
				case frame3Swiper.get(0):
					(0,_import_assets__WEBPACK_IMPORTED_MODULE_7__.animateCSS)(frame3Swiper, "animate__fadeInUpBig");
					return;
			}

			let done = false;
			frame4Buttons.each(function (index, el) {
				if (data.el === el) {
					(0,_import_assets__WEBPACK_IMPORTED_MODULE_7__.animateCSS)(el, "animate__fadeInLeftBig");
					done = true;
					return false;
				}
			});
			if (done) return;
		},
	});
});

window.addEventListener("load", scaleRoot);
window.addEventListener("resize", scaleRoot);


/***/ }),

/***/ "./src/components/Frame1/assets/frame1_bg_video.mp4":
/*!**********************************************************!*\
  !*** ./src/components/Frame1/assets/frame1_bg_video.mp4 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "videos/frame1_bg_video.mp4";

/***/ }),

/***/ "./node_modules/@cycjimmy/swiper-animation/dist/swiper-animation.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@cycjimmy/swiper-animation/dist/swiper-animation.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var PROMISE_POLYFILL_URL = 'https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js';
var appendedPromisePolyfill = false;
/**
 * isPromiseReady
 * @returns {boolean}
 */

var isPromiseReady = function isPromiseReady() {
  return !!window.Promise;
};
/**
 * promisePolyfill
 */

var promisePolyfill = function promisePolyfill() {
  if (appendedPromisePolyfill) {
    return;
  }

  if (isPromiseReady()) {
    return;
  }

  var oScript = document.createElement('script');
  oScript.type = 'text/javascript';
  oScript.src = PROMISE_POLYFILL_URL;
  document.querySelector('head').appendChild(oScript);
  appendedPromisePolyfill = true;
};

/**
 * determine nodeList type
 * @param nodeList
 */
var isNodeList = (nodeList => Object.prototype.toString.call(nodeList) === '[object NodeList]');

/**
 * determine an array type
 * @param arr
 * @returns {boolean}
 */
var isArray = (arr => Object.prototype.toString.call(arr).slice(8, -1) === 'Array');

/**
 * nodeList into array
 * @param nodeList
 * @returns {Array}
 */

var nodeListToArray = (nodeList => {
  if (isArray(nodeList)) {
    return nodeList;
  }

  if (!isNodeList(nodeList)) {
    return new Array(nodeList);
  }

  return Array.from ? Array.from(nodeList) : Array.prototype.slice.call(nodeList);
});

var sHidden = 'visibility: hidden;';
/**
 * cacheAnimations
 * @param elements[HTMLElement]
 */

var cacheAnimations = (function (elements) {
  elements.forEach(function (el) {
    el.animationData = {
      styleCache: el.attributes.style ? sHidden + el.style.cssText : sHidden,
      effect: el.dataset.swiperAnimation || el.dataset.swiperAnimationOnce || '',
      duration: el.dataset.duration || '.5s',
      delay: el.dataset.delay || '.5s',
      outEffect: el.dataset.swiperOutAnimation || '',
      outDuration: el.dataset.outDuration || '.5s',
      isRecovery: true,
      runOnce: !!el.dataset.swiperAnimationOnce
    };
    el.style.cssText = el.animationData.styleCache;
  });
});

/**
 * determine a promise type
 * @param promise
 * @returns {boolean}
 */
var isPromise = (promise => Object.prototype.toString.call(promise).slice(8, -1) === 'Promise');

/**
 * function to promise
 * @param normalFunction
 * @param timeout
 * @returns {Promise<any>}
 */

var functionToPromise = (function (normalFunction) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (isPromise(normalFunction)) {
    return normalFunction;
  } // eslint-disable-next-line no-undef


  return new Promise(resolve => {
    normalFunction();
    setTimeout(resolve, timeout);
  });
});

var constants = {
  /**
   * className `animated` for Animate.css
   * @type {string[]}
   */
  AnimateCssAnimated: ['animated', 'animate__animated']
};

/**
 * runAnimations
 * @param activeElements[HTMLElement]
 * @returns {Promise<unknown[]>}
 */

var runAnimations = (function (activeElements) {
  var runAnimateTasks = activeElements.map(function (el) {
    if (!el.animationData) {
      return Promise.resolve();
    }

    return functionToPromise(function () {
      var _el$classList;

      el.style.visibility = 'visible';
      el.style.cssText += " animation-duration:".concat(el.animationData.duration, "; -webkit-animation-duration:").concat(el.animationData.duration, "; animation-delay:").concat(el.animationData.delay, "; -webkit-animation-delay:").concat(el.animationData.delay, ";");

      (_el$classList = el.classList).add.apply(_el$classList, [el.animationData.effect].concat(_toConsumableArray(constants.AnimateCssAnimated)));

      el.animationData.isRecovery = false;
    });
  });
  return Promise.all(runAnimateTasks);
});

/**
 * runOutAnimations
 * @param activeElements[HTMLElement]
 * @returns {Promise<unknown[]>}
 */

var runOutAnimations = (function (activeElements) {
  var runOutTasks = activeElements.map(function (el) {
    if (el.animationData.isRecovery) {
      return Promise.resolve();
    }

    if (!el.animationData.outEffect) {
      return Promise.resolve();
    }

    return functionToPromise(function () {
      el.style.cssText = el.animationData.styleCache;
      el.style.visibility = 'visible';
      el.style.cssText += " animation-duration:".concat(el.animationData.outDuration, "; -webkit-animation-duration:").concat(el.animationData.outDuration, ";");
      el.classList.add(el.animationData.outEffect, 'animated');
    }, 500);
  });
  return Promise.all(runOutTasks);
});

/**
 * clearAnimations
 * @param activeElements[HTMLElement]
 * @returns {Promise<unknown[]>}
 */

var clearAnimations = (function (activeElements) {
  var runClearTasks = activeElements.map(function (el) {
    if (el.animationData.isRecovery) {
      return Promise.resolve();
    }

    if (el.animationData.runOnce) {
      return Promise.resolve();
    }

    return functionToPromise(function () {
      var _el$classList;

      // recovery
      el.style.cssText = el.animationData.styleCache;

      (_el$classList = el.classList).remove.apply(_el$classList, _toConsumableArray([el.animationData.effect, el.animationData.outEffect].concat(_toConsumableArray(constants.AnimateCssAnimated)).filter(function (str) {
        return !!str;
      })));

      el.animationData.isRecovery = true;
    });
  });
  return Promise.all(runClearTasks);
});

/**
 * getSwiperContainer
 * @param swiper
 * @returns {null|*|Object}
 */

var getSwiperContainer = function getSwiperContainer(swiper) {
  if (swiper.el) {
    // swiper 4+
    return swiper.el;
  }

  if (swiper.container) {
    // swiper 3.x
    // eslint-disable-next-line prefer-destructuring
    return swiper.container[0];
  }

  throw new Error('Illegal swiper instance');
};

var _default$1 = /*#__PURE__*/function () {
  function _default(swiper) {
    _classCallCheck(this, _default);

    this.swiper = swiper;
    this.container = getSwiperContainer(this.swiper);
    this.animationElements = [].concat(_toConsumableArray(nodeListToArray(this.container.querySelectorAll('[data-swiper-animation]'))), _toConsumableArray(nodeListToArray(this.container.querySelectorAll('[data-swiper-animation-once]'))));
    this.activeElements = [];
    cacheAnimations(this.animationElements);
  }
  /**
   * animate
   * @returns {Promise<unknown[]>}
   */


  _createClass(_default, [{
    key: "animate",
    value: function animate() {
      var _this = this;

      return Promise.resolve().then(function () {
        return runOutAnimations(_this.activeElements);
      }).then(function () {
        return clearAnimations(_this.activeElements);
      }).then(function () {
        return runAnimations(_this._updateActiveElements());
      });
    }
    /**
     * update activeElements
     * @returns {[]|*[]|*}
     * @private
     */

  }, {
    key: "_updateActiveElements",
    value: function _updateActiveElements() {
      this.activeElements = [].concat(_toConsumableArray(nodeListToArray(this.swiper.slides[this.swiper.activeIndex].querySelectorAll('[data-swiper-animation]'))), _toConsumableArray(nodeListToArray(this.swiper.slides[this.swiper.activeIndex].querySelectorAll('[data-swiper-animation-once]'))));
      return this.activeElements;
    }
  }]);

  return _default;
}();

var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    this.animations = null;

    if (!isPromiseReady()) {
      promisePolyfill();
    }
  }
  /**
   * init
   * @param swiper
   */


  _createClass(_default, [{
    key: "init",
    value: function init(swiper) {
      if (!this.animations) {
        this.animations = new _default$1(swiper);
      }

      return this;
    }
    /**
     * run animations
     * @return {*}
     */

  }, {
    key: "animate",
    value: function animate() {
      var _this = this;

      if (!isPromiseReady()) {
        return setTimeout(function () {
          return _this.animate();
        }, 5e2);
      }

      return this.animations.animate();
    }
  }]);

  return _default;
}();




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["assets"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc2Nyb2xsd2F0Y2gvZGlzdC9TY3JvbGxXYXRjaC0yLjAuMS5taW4uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9GcmFtZTEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9GcmFtZTIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9GcmFtZTMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9GcmFtZTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9IZWFkZXJNb2JpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9AY3ljamltbXkvc3dpcGVyLWFuaW1hdGlvbi9kaXN0L3N3aXBlci1hbmltYXRpb24uZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBzY3JvbGx3YXRjaCB2Mi4wLjEgfCAoYykgTW9uIEphbiAwMSAyMDE4IDE0OjI3OjQ1IEdNVC0wNTAwIChFU1QpIEV2YW4gRHVsbCA8ZXZhbmR1bGxAZ21haWwuY29tPiB8IExpY2Vuc2U6IE1JVCB8IGh0dHBzOi8vZ2l0aHViLmNvbS9lZHVsbDI0L1Njcm9sbFdhdGNoLmdpdCovXG4hZnVuY3Rpb24odCxpKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGkpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWkoKTp0LlNjcm9sbFdhdGNoPWkoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTAsaT17fSxlPXtjb250YWluZXI6d2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx3YXRjaDpcIltkYXRhLXNjcm9sbC13YXRjaF1cIix3YXRjaE9uY2U6ITAsaW5WaWV3Q2xhc3M6XCJzY3JvbGwtd2F0Y2gtaW4tdmlld1wiLGlnbm9yZUNsYXNzOlwic2Nyb2xsLXdhdGNoLWlnbm9yZVwiLGRlYm91bmNlOiExLGRlYm91bmNlVHJpZ2dlckxlYWRpbmc6ITEsc2Nyb2xsRGVib3VuY2U6MjUwLHJlc2l6ZURlYm91bmNlOjI1MCxzY3JvbGxUaHJvdHRsZToyNTAscmVzaXplVGhyb3R0bGU6MjUwLHdhdGNoT2Zmc2V0WExlZnQ6MCx3YXRjaE9mZnNldFhSaWdodDowLHdhdGNoT2Zmc2V0WVRvcDowLHdhdGNoT2Zmc2V0WUJvdHRvbTowLGluZmluaXRlU2Nyb2xsOiExLGluZmluaXRlT2Zmc2V0OjAsb25FbGVtZW50SW5WaWV3OmZ1bmN0aW9uKCl7fSxvbkVsZW1lbnRPdXRPZlZpZXc6ZnVuY3Rpb24oKXt9LG9uSW5maW5pdGVYSW5WaWV3OmZ1bmN0aW9uKCl7fSxvbkluZmluaXRlWUluVmlldzpmdW5jdGlvbigpe319LG49XCJzY3JvbGx3YXRjaGluaXRcIixzPWZ1bmN0aW9uKHQpe3ZhciBpLGUsbixzPWFyZ3VtZW50cy5sZW5ndGg7Zm9yKHQ9dHx8e30saT0xO3M+aTtpKyspaWYobj1hcmd1bWVudHNbaV0pZm9yKGUgaW4gbiluLmhhc093blByb3BlcnR5KGUpJiYodFtlXT1uW2VdKTtyZXR1cm4gdH0sbD1mdW5jdGlvbih0LGksZSl7dmFyIG4scztyZXR1cm4gaT1pfHwyNTAsZnVuY3Rpb24oKXt2YXIgbD1lfHx0aGlzLG89K25ldyBEYXRlLGM9YXJndW1lbnRzO24mJm4raT5vPyh3aW5kb3cuY2xlYXJUaW1lb3V0KHMpLHM9c2V0VGltZW91dChmdW5jdGlvbigpe249byx0LmFwcGx5KGwsYyl9LGkpKToobj1vLHQuYXBwbHkobCxjKSl9fSxvPWZ1bmN0aW9uKHQsaSxlKXt2YXIgbixzLGwsbyxjLHI9ZnVuY3Rpb24oKXt2YXIgYT0obmV3IERhdGUpLmdldFRpbWUoKS1vO2k+YSYmYT49MD9uPXNldFRpbWVvdXQocixpLWEpOihuPW51bGwsZXx8KGM9dC5hcHBseShsLHMpLG58fChsPXM9bnVsbCkpKX07cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGE9ZSYmIW47cmV0dXJuIGw9dGhpcyxzPWFyZ3VtZW50cyxvPShuZXcgRGF0ZSkuZ2V0VGltZSgpLG58fChuPXNldFRpbWVvdXQocixpKSksYSYmKGM9dC5hcHBseShsLHMpLGw9cz1udWxsKSxjfX0sYz1mdW5jdGlvbigpe3ZhciB0PWlbdGhpcy5faWRdLmNvbmZpZztcInN0cmluZ1wiPT10eXBlb2YgdC5jb250YWluZXImJih0LmNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQuY29udGFpbmVyKSl9LHI9ZnVuY3Rpb24oKXtpW3RoaXMuX2lkXS5lbGVtZW50cz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGlbdGhpcy5faWRdLmNvbmZpZy53YXRjaCtcIjpub3QoLlwiK2lbdGhpcy5faWRdLmNvbmZpZy5pZ25vcmVDbGFzcytcIilcIikpfSxhPWZ1bmN0aW9uKCl7aVt0aGlzLl9pZF0ubGFzdFNjcm9sbFBvc2l0aW9uPXAuY2FsbCh0aGlzKX0sZj1mdW5jdGlvbih0KXtoLmNhbGwodGhpcyx0KSxkLmNhbGwodGhpcyx0KSx0IT09biYmYS5jYWxsKHRoaXMpfSxoPWZ1bmN0aW9uKHQpe3ZhciBlLHMsbD1pW3RoaXMuX2lkXSxvPWwuZWxlbWVudHMubGVuZ3RoLGM9bC5jb25maWcscj1jLmluVmlld0NsYXNzLGE9e2V2ZW50VHlwZTp0fTtmb3Iocz0wO28+cztzKyspZT1sLmVsZW1lbnRzW3NdLGEuZWw9ZSxcInNjcm9sbFwiPT09dCYmKGEuZGlyZWN0aW9uPV8uY2FsbCh0aGlzLHguY2FsbCh0aGlzKSkpLFQuY2FsbCh0aGlzLGUpP2UuY2xhc3NMaXN0LmNvbnRhaW5zKHIpfHwoZS5jbGFzc0xpc3QuYWRkKHIpLGMub25FbGVtZW50SW5WaWV3LmNhbGwodGhpcyxhKSxjLndhdGNoT25jZSYmKGwuZWxlbWVudHMuc3BsaWNlKHMsMSksby0tLHMtLSxlLmNsYXNzTGlzdC5hZGQoYy5pZ25vcmVDbGFzcykpKTooZS5jbGFzc0xpc3QuY29udGFpbnMocil8fHQ9PT1uKSYmKGUuY2xhc3NMaXN0LnJlbW92ZShyKSxjLm9uRWxlbWVudE91dE9mVmlldy5jYWxsKHRoaXMsYSkpfSxkPWZ1bmN0aW9uKHQpe3ZhciBlLHMsbCxvLGMscixhLGY9aVt0aGlzLl9pZF0saD1mLmNvbmZpZztpZihoLmluZmluaXRlU2Nyb2xsJiYhZi5pc0luZmluaXRlU2Nyb2xsUGF1c2VkKWZvcihzPVtcInhcIixcInlcIl0scj1bXCJvbkluZmluaXRlWEluVmlld1wiLFwib25JbmZpbml0ZVlJblZpZXdcIl0sbD1oLmNvbnRhaW5lcixvPW0uY2FsbCh0aGlzKSxjPVtsLnNjcm9sbFdpZHRoLGwuc2Nyb2xsSGVpZ2h0XSxhPXt9LGU9MDsyPmU7ZSsrKShcInNjcm9sbFwiPT09dCYmTy5jYWxsKHRoaXMsc1tlXSl8fFwicmVzaXplXCI9PT10fHxcInJlZnJlc2hcIj09PXR8fHQ9PT1uKSYmb1tzW2VdXS5lbmQraC5pbmZpbml0ZU9mZnNldD49Y1tlXSYmKGEuZXZlbnRUeXBlPXQsXCJzY3JvbGxcIj09PXQmJihhLmRpcmVjdGlvbj1fLmNhbGwodGhpcyxzW2VdKSksaFtyW2VdXS5jYWxsKHRoaXMsYSkpfSx1PWZ1bmN0aW9uKCl7dmFyIHQ9aVt0aGlzLl9pZF0sZT13LmNhbGwodGhpcyk7ZS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdC5zY3JvbGxIYW5kbGVyLCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0LnJlc2l6ZUhhbmRsZXIsITEpfSxnPWZ1bmN0aW9uKCl7dmFyIHQ9aVt0aGlzLl9pZF0sZT13LmNhbGwodGhpcyk7ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdC5zY3JvbGxIYW5kbGVyKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0LnJlc2l6ZUhhbmRsZXIpfSx3PWZ1bmN0aW9uKCl7cmV0dXJuIHouY2FsbCh0aGlzKT93aW5kb3c6aVt0aGlzLl9pZF0uY29uZmlnLmNvbnRhaW5lcn0seT1mdW5jdGlvbigpe3ZhciB0PXt3OmlbdGhpcy5faWRdLmNvbmZpZy5jb250YWluZXIuY2xpZW50V2lkdGgsaDppW3RoaXMuX2lkXS5jb25maWcuY29udGFpbmVyLmNsaWVudEhlaWdodH07cmV0dXJuIHR9LHA9ZnVuY3Rpb24oKXt2YXIgdCxlPXt9O3JldHVybiB6LmNhbGwodGhpcyk/KGUubGVmdD13aW5kb3cucGFnZVhPZmZzZXQsZS50b3A9d2luZG93LnBhZ2VZT2Zmc2V0KToodD1pW3RoaXMuX2lkXS5jb25maWcuY29udGFpbmVyLGUubGVmdD10LnNjcm9sbExlZnQsZS50b3A9dC5zY3JvbGxUb3ApLGV9LG09ZnVuY3Rpb24oKXt2YXIgdD17eDp7fSx5Ont9fSxpPXAuY2FsbCh0aGlzKSxlPXkuY2FsbCh0aGlzKTtyZXR1cm4gdC54LnN0YXJ0PWkubGVmdCx0LnguZW5kPXQueC5zdGFydCtlLncsdC54LnNpemU9dC54LmVuZC10Lnguc3RhcnQsdC55LnN0YXJ0PWkudG9wLHQueS5lbmQ9dC55LnN0YXJ0K2UuaCx0Lnkuc2l6ZT10LnkuZW5kLXQueS5zdGFydCx0fSx2PWZ1bmN0aW9uKHQpe3ZhciBlLG49e3g6e30seTp7fX0scz1tLmNhbGwodGhpcyksbD10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3JldHVybiB6LmNhbGwodGhpcyk/KG4ueC5zdGFydD1sLmxlZnQrcy54LnN0YXJ0LG4ueC5lbmQ9bC5yaWdodCtzLnguc3RhcnQsbi55LnN0YXJ0PWwudG9wK3MueS5zdGFydCxuLnkuZW5kPWwuYm90dG9tK3MueS5zdGFydCk6KGU9aVt0aGlzLl9pZF0uY29uZmlnLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuLnguc3RhcnQ9bC5sZWZ0LWUubGVmdCtzLnguc3RhcnQsbi54LmVuZD1uLnguc3RhcnQrbC53aWR0aCxuLnkuc3RhcnQ9bC50b3AtZS50b3Arcy55LnN0YXJ0LG4ueS5lbmQ9bi55LnN0YXJ0K2wuaGVpZ2h0KSxuLnguc2l6ZT1uLnguZW5kLW4ueC5zdGFydCxuLnkuc2l6ZT1uLnkuZW5kLW4ueS5zdGFydCxufSx4PWZ1bmN0aW9uKCl7cmV0dXJuIE8uY2FsbCh0aGlzLFwieFwiKT9cInhcIjpPLmNhbGwodGhpcyxcInlcIik/XCJ5XCI6dm9pZCAwfSxfPWZ1bmN0aW9uKHQpe3ZhciBlPXt4OltcInJpZ2h0XCIsXCJsZWZ0XCJdLHk6W1wiZG93blwiLFwidXBcIl19LG49e3g6XCJsZWZ0XCIseTpcInRvcFwifSxzPWlbdGhpcy5faWRdLmxhc3RTY3JvbGxQb3NpdGlvbixsPXAuY2FsbCh0aGlzKTtyZXR1cm4gbFtuW3RdXT5zW25bdF1dP2VbdF1bMF06ZVt0XVsxXX0sTz1mdW5jdGlvbih0KXt2YXIgZT17eDpcImxlZnRcIix5OlwidG9wXCJ9LG49aVt0aGlzLl9pZF0ubGFzdFNjcm9sbFBvc2l0aW9uLHM9cC5jYWxsKHRoaXMpO3JldHVybiBzW2VbdF1dIT09bltlW3RdXX0sVD1mdW5jdGlvbih0KXt2YXIgaT1tLmNhbGwodGhpcyksZT12LmNhbGwodGhpcyx0KTtyZXR1cm4gTC5jYWxsKHRoaXMsZSxpKSYmYi5jYWxsKHRoaXMsZSxpKX0sTD1mdW5jdGlvbih0LGUpe3ZhciBuPWlbdGhpcy5faWRdLmNvbmZpZztyZXR1cm4gdC55LnN0YXJ0PGUueS5lbmQrbi53YXRjaE9mZnNldFlCb3R0b20mJnQueS5lbmQ+ZS55LnN0YXJ0LW4ud2F0Y2hPZmZzZXRZVG9wfSxiPWZ1bmN0aW9uKHQsZSl7dmFyIG49aVt0aGlzLl9pZF0uY29uZmlnO3JldHVybiB0Lnguc3RhcnQ8ZS54LmVuZCtuLndhdGNoT2Zmc2V0WFJpZ2h0JiZ0LnguZW5kPmUueC5zdGFydC1uLndhdGNoT2Zmc2V0WExlZnR9LHo9ZnVuY3Rpb24oKXtyZXR1cm4gaVt0aGlzLl9pZF0uY29uZmlnLmNvbnRhaW5lcj09PXdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnR9LEk9ZnVuY3Rpb24odCl7cyhpW3RoaXMuX2lkXS5jb25maWcsZSx0KX0sUz1mdW5jdGlvbih0KXt2YXIgZT10LnR5cGU7aVt0aGlzLl9pZF0mJihcInJlc2l6ZVwiPT09ZXx8Ty5jYWxsKHRoaXMsXCJ4XCIpfHxPLmNhbGwodGhpcyxcInlcIikpJiZmLmNhbGwodGhpcyxlKX0sWD1mdW5jdGlvbihlKXt2YXIgcztyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIFg/KE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX2lkXCIse3ZhbHVlOnQrK30pLHM9aVt0aGlzLl9pZF09e2NvbmZpZzp7fSxlbGVtZW50czpbXSxsYXN0U2Nyb2xsUG9zaXRpb246e3RvcDowLGxlZnQ6MH0saXNJbmZpbml0ZVNjcm9sbFBhdXNlZDohMX0sSS5jYWxsKHRoaXMsZSkscy5jb25maWcuZGVib3VuY2U/KHMuc2Nyb2xsSGFuZGxlcj1vKFMuYmluZCh0aGlzKSxzLmNvbmZpZy5zY3JvbGxEZWJvdW5jZSxzLmNvbmZpZy5kZWJvdW5jZVRyaWdnZXJMZWFkaW5nKSxzLnJlc2l6ZUhhbmRsZXI9byhTLmJpbmQodGhpcykscy5jb25maWcucmVzaXplRGVib3VuY2Uscy5jb25maWcuZGVib3VuY2VUcmlnZ2VyTGVhZGluZykpOihzLnNjcm9sbEhhbmRsZXI9bChTLmJpbmQodGhpcykscy5jb25maWcuc2Nyb2xsVGhyb3R0bGUsdGhpcykscy5yZXNpemVIYW5kbGVyPWwoUy5iaW5kKHRoaXMpLHMuY29uZmlnLnJlc2l6ZVRocm90dGxlLHRoaXMpKSxjLmNhbGwodGhpcyksdS5jYWxsKHRoaXMpLHIuY2FsbCh0aGlzKSxmLmNhbGwodGhpcyxuKSx2b2lkIDApOm5ldyBYKGUpfTtyZXR1cm4gWC5wcm90b3R5cGU9e3JlZnJlc2g6ZnVuY3Rpb24oKXtyLmNhbGwodGhpcyksZi5jYWxsKHRoaXMsXCJyZWZyZXNoXCIpfSxkZXN0cm95OmZ1bmN0aW9uKCl7Zy5jYWxsKHRoaXMpLGRlbGV0ZSBpW3RoaXMuX2lkXX0sdXBkYXRlV2F0Y2hPZmZzZXRYTGVmdDpmdW5jdGlvbih0KXtpW3RoaXMuX2lkXS5jb25maWcud2F0Y2hPZmZzZXRYTGVmdD10fSx1cGRhdGVXYXRjaE9mZnNldFhSaWdodDpmdW5jdGlvbih0KXtpW3RoaXMuX2lkXS5jb25maWcud2F0Y2hPZmZzZXRYUmlnaHQ9dH0sdXBkYXRlV2F0Y2hPZmZzZXRZVG9wOmZ1bmN0aW9uKHQpe2lbdGhpcy5faWRdLmNvbmZpZy53YXRjaE9mZnNldFlUb3A9dH0sdXBkYXRlV2F0Y2hPZmZzZXRZQm90dG9tOmZ1bmN0aW9uKHQpe2lbdGhpcy5faWRdLmNvbmZpZy53YXRjaE9mZnNldFlCb3R0b209dH0scGF1c2VJbmZpbml0ZVNjcm9sbDpmdW5jdGlvbigpe2lbdGhpcy5faWRdLmlzSW5maW5pdGVTY3JvbGxQYXVzZWQ9ITB9LHJlc3VtZUluZmluaXRlU2Nyb2xsOmZ1bmN0aW9uKCl7aVt0aGlzLl9pZF0uaXNJbmZpbml0ZVNjcm9sbFBhdXNlZD0hMX19LFh9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNjcm9sbFdhdGNoLTIuMC4xLm1pbi5qcy5tYXAiLCJpbXBvcnQgdmlkZW9CZyBmcm9tIFwiLi9hc3NldHMvZnJhbWUxX2JnX3ZpZGVvLm1wNFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkZyYW1lMSgpIHtcclxuXHRsZXQgZmlyc3RBY3Rpb25TdGF0ZSA9IGZhbHNlO1xyXG5cclxuXHQvLyB2aWRlbyBiZ1xyXG5cdGNvbnN0IHZpZGVvID0gJChcIiNmcmFtZTEtY29udGFpbmVyIHZpZGVvXCIpLmdldCgwKTtcclxuXHRjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xyXG5cdHNvdXJjZS5zcmMgPSB2aWRlb0JnO1xyXG5cdHZpZGVvLmFwcGVuZENoaWxkKHNvdXJjZSk7XHJcblxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gYXVkaW9cclxuXHRjb25zdCBhdWRpbyA9ICQoXCJhdWRpb1wiKS5nZXQoMCk7XHJcblx0bGV0IG11c2ljU3RhdGUgPSBmYWxzZTtcclxuXHRjb25zdCBtdXNpY0J1dHRvbiA9ICQoXCIjZnJhbWUxLW11c2ljLWJ1dHRvblwiKTtcclxuXHRjb25zdCBtdXNpY0J1dHRvbk1vYmlsZSA9ICQoXCIjZnJhbWUxLW11c2ljLWJ1dHRvbi1tb2JpbGVcIik7XHJcblxyXG5cdG11c2ljQnV0dG9uLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRtdXNpY1N0YXRlID0gIW11c2ljU3RhdGU7XHJcblx0XHRtdXNpY0J1dHRvbi5hdHRyKFwiYWN0aXZlXCIsIG11c2ljU3RhdGUpO1xyXG5cdFx0bXVzaWNCdXR0b25Nb2JpbGUuYXR0cihcImFjdGl2ZVwiLCBtdXNpY1N0YXRlKTtcclxuXHRcdGZpcnN0QWN0aW9uU3RhdGUgPSB0cnVlO1xyXG5cdFx0aWYgKG11c2ljU3RhdGUpIHtcclxuXHRcdFx0YXVkaW8ucGxheSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YXVkaW8ucGF1c2UoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0bXVzaWNCdXR0b25Nb2JpbGUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdG11c2ljU3RhdGUgPSAhbXVzaWNTdGF0ZTtcclxuXHRcdG11c2ljQnV0dG9uLmF0dHIoXCJhY3RpdmVcIiwgbXVzaWNTdGF0ZSk7XHJcblx0XHRtdXNpY0J1dHRvbk1vYmlsZS5hdHRyKFwiYWN0aXZlXCIsIG11c2ljU3RhdGUpO1xyXG5cdFx0Zmlyc3RBY3Rpb25TdGF0ZSA9IHRydWU7XHJcblx0XHRpZiAobXVzaWNTdGF0ZSkge1xyXG5cdFx0XHRhdWRpby5wbGF5KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhdWRpby5wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyBjcmVhdGUgYW4gQXJyYXkgZnJvbSAxIHRvIDEyXHJcblx0Y29uc3QgZXhjbHVkZWRGbktleXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMiB9LCAoXywgaSkgPT4gaSArIDEpLm1hcChcclxuXHRcdChpKSA9PiBgRiR7aX1gXHJcblx0KTtcclxuXHRjb25zdCBleGNsdWRlZEtleXMgPSBbXHJcblx0XHQuLi5leGNsdWRlZEZuS2V5cyxcclxuXHRcdFwiQ29udHJvbFwiLFxyXG5cdFx0XCJTaGlmdFwiLFxyXG5cdFx0XCJFc2NhcGVcIixcclxuXHRcdFwiVGFiXCIsXHJcblx0XHRcIkNhcHNMb2NrXCIsXHJcblx0XHRcIk9TXCIsXHJcblx0XHRcIkFsdFwiLFxyXG5cdF07XHJcblxyXG5cdGZ1bmN0aW9uIHRyYWNrRmlyc3RNb3ZlbWVudChlKSB7XHJcblx0XHRpZiAoIWZpcnN0QWN0aW9uU3RhdGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZS5rZXkpO1xyXG5cdFx0XHRpZiAoZS50eXBlID09PSBcImtleWRvd25cIiAmJiBleGNsdWRlZEtleXMuaW5jbHVkZXMoZS5rZXkpKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhdWRpby5wbGF5KCk7XHJcblx0XHRcdGZpcnN0QWN0aW9uU3RhdGUgPSB0cnVlO1xyXG5cdFx0XHRtdXNpY1N0YXRlID0gIW11c2ljU3RhdGU7XHJcblx0XHRcdG11c2ljQnV0dG9uLmF0dHIoXCJhY3RpdmVcIiwgbXVzaWNTdGF0ZSk7XHJcblx0XHRcdG11c2ljQnV0dG9uTW9iaWxlLmF0dHIoXCJhY3RpdmVcIiwgbXVzaWNTdGF0ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyYWNrRmlyc3RNb3ZlbWVudCk7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0cmFja0ZpcnN0TW92ZW1lbnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0cmFja0ZpcnN0TW92ZW1lbnQpO1xyXG5cdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0cmFja0ZpcnN0TW92ZW1lbnQpO1xyXG59XHJcbiIsImltcG9ydCBTd2lwZXIgZnJvbSBcInN3aXBlclwiO1xyXG5pbXBvcnQgU3dpcGVyQW5pbWF0aW9uIGZyb20gXCJAY3ljamltbXkvc3dpcGVyLWFuaW1hdGlvblwiO1xyXG5pbXBvcnQgYmdWaWRlbyBmcm9tIFwiLi4vRnJhbWUxL2Fzc2V0cy9mcmFtZTFfYmdfdmlkZW8ubXA0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcnVuRnJhbWUyKCkge1xyXG5cdC8vIGJ1dHRvbnMgYW5kIGRlY29yIGJhbGxzXHJcblx0Y29uc3QgZGVjb3JCYWxscyA9ICQoXCIuZGVjb3ItYmFsbFwiKTtcclxuXHRjb25zdCBtYWxlQnV0dG9uID0gJChcIiNmcmFtZTItbWFsZS1idXR0b25cIik7XHJcblx0Y29uc3QgZmVtYWxlQnV0dG9uID0gJChcIiNmcmFtZTItZmVtYWxlLWJ1dHRvblwiKTtcclxuXHJcblx0Y29uc3Qgc3dpcGVyQW5pbWF0aW9uID0gbmV3IFN3aXBlckFuaW1hdGlvbigpO1xyXG5cdGNvbnN0IGZyYW1lMkNoYXJhY3RlclN3aXBlciA9IG5ldyBTd2lwZXIoXCIuZnJhbWUyLXN3aXBlci1jaGFyYWN0ZXJcIiwge1xyXG5cdFx0ZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcblx0XHRlZmZlY3Q6IFwiZmFkZVwiLFxyXG5cdFx0ZmFkZUVmZmVjdDoge1xyXG5cdFx0XHRjcm9zc0ZhZGU6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0b246IHtcclxuXHRcdFx0aW5pdDogZnVuY3Rpb24gKHN3aXBlcikge1xyXG5cdFx0XHRcdHN3aXBlckFuaW1hdGlvbi5pbml0KHRoaXMpLmFuaW1hdGUoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2xpZGVDaGFuZ2U6IGZ1bmN0aW9uIChzd2lwZXIpIHtcclxuXHRcdFx0XHRzd2lwZXJBbmltYXRpb24uaW5pdCh0aGlzKS5hbmltYXRlKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIpIHtcclxuXHRcdFx0XHRjb25zdCBjdXJyZW50SW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRJbmRleCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0bWFsZUJ1dHRvbi5hdHRyKFwiYWN0aXZlXCIsIGZhbHNlKTtcclxuXHRcdFx0XHRcdGZlbWFsZUJ1dHRvbi5hdHRyKFwiYWN0aXZlXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0ZGVjb3JCYWxscy5lcSgwKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRkZWNvckJhbGxzLmVxKDMpLmhpZGUoKTtcclxuXHRcdFx0XHRcdGRlY29yQmFsbHMuZXEoMSkuc2hvdygpO1xyXG5cdFx0XHRcdFx0ZGVjb3JCYWxscy5lcSgyKS5zaG93KCk7XHJcblx0XHRcdFx0XHRmcmFtZTJDaGFyYWN0ZXJTd2lwZXIuc2xpZGVUbygxKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bWFsZUJ1dHRvbi5hdHRyKFwiYWN0aXZlXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0ZmVtYWxlQnV0dG9uLmF0dHIoXCJhY3RpdmVcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0ZGVjb3JCYWxscy5lcSgwKS5zaG93KCk7XHJcblx0XHRcdFx0XHRkZWNvckJhbGxzLmVxKDMpLnNob3coKTtcclxuXHRcdFx0XHRcdGRlY29yQmFsbHMuZXEoMSkuaGlkZSgpO1xyXG5cdFx0XHRcdFx0ZGVjb3JCYWxscy5lcSgyKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRmcmFtZTJDaGFyYWN0ZXJTd2lwZXIuc2xpZGVUbygwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRtYWxlQnV0dG9uLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRtYWxlQnV0dG9uLmF0dHIoXCJhY3RpdmVcIiwgdHJ1ZSk7XHJcblx0XHRmZW1hbGVCdXR0b24uYXR0cihcImFjdGl2ZVwiLCBmYWxzZSk7XHJcblx0XHRkZWNvckJhbGxzLmVxKDApLnNob3coKTtcclxuXHRcdGRlY29yQmFsbHMuZXEoMykuc2hvdygpO1xyXG5cdFx0ZGVjb3JCYWxscy5lcSgxKS5oaWRlKCk7XHJcblx0XHRkZWNvckJhbGxzLmVxKDIpLmhpZGUoKTtcclxuXHRcdGZyYW1lMkNoYXJhY3RlclN3aXBlci5zbGlkZVRvKDApO1xyXG5cdH0pO1xyXG5cclxuXHRmZW1hbGVCdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdG1hbGVCdXR0b24uYXR0cihcImFjdGl2ZVwiLCBmYWxzZSk7XHJcblx0XHRmZW1hbGVCdXR0b24uYXR0cihcImFjdGl2ZVwiLCB0cnVlKTtcclxuXHRcdGRlY29yQmFsbHMuZXEoMCkuaGlkZSgpO1xyXG5cdFx0ZGVjb3JCYWxscy5lcSgzKS5oaWRlKCk7XHJcblx0XHRkZWNvckJhbGxzLmVxKDEpLnNob3coKTtcclxuXHRcdGRlY29yQmFsbHMuZXEoMikuc2hvdygpO1xyXG5cdFx0ZnJhbWUyQ2hhcmFjdGVyU3dpcGVyLnNsaWRlVG8oMSk7XHJcblx0fSk7XHJcblxyXG5cdC8vXHJcblx0Y29uc3QgdmlkZW8gPSAkKFwiI2ZyYW1lMi12aWRlby1jb250YWluZXIgdmlkZW9cIik7XHJcblx0Y29uc3Qgc3JjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcclxuXHRzcmMuc3JjID0gYmdWaWRlbztcclxuXHRzcmMudHlwZSA9IFwidmlkZW8vbXA0XCI7XHJcblx0dmlkZW8uYXBwZW5kKHNyYyk7XHJcbn1cclxuIiwiaW1wb3J0IFN3aXBlciBmcm9tIFwic3dpcGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcnVuRnJhbWUzKCkge1xyXG5cdGNvbnN0IGZyYW1lM1N3aXBlciA9IG5ldyBTd2lwZXIoXCIuZnJhbWUzLXN3aXBlclwiLCB7XHJcblx0XHRlZmZlY3Q6IFwiY292ZXJmbG93XCIsXHJcblx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblx0XHRjb3ZlcmZsb3dFZmZlY3Q6IHtcclxuXHRcdFx0cm90YXRlOiAwLFxyXG5cdFx0XHRzdHJldGNoOiAwLFxyXG5cdFx0XHRkZXB0aDogNTAsXHJcblx0XHRcdG1vZGlmaWVyOiAyLjUsXHJcblx0XHR9LFxyXG5cdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRlbDogXCIuZnJhbWUzLXN3aXBlciAuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiBcIi5mcmFtZTMtc3dpcGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuXHRcdFx0cHJldkVsOiBcIi5mcmFtZTMtc3dpcGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuXHRcdH0sXHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IFN3aXBlciBmcm9tIFwic3dpcGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcnVuRnJhbWU1KCkge1xyXG5cdGNvbnN0IGZyYW1lNVN3aXBlciA9IG5ldyBTd2lwZXIoXCIuZnJhbWU1LXN3aXBlclwiLCB7XHJcblx0XHRkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiBcIi5mcmFtZTUtc3dpcGVyIC5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG5cdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBydW5IZWFkZXJNb2JpbGUoKSB7XHJcblx0Y29uc3Qgc2VlTW9yZU1vYmlsZSA9ICQoXCIjaGVhZGVyLXNlZS1tb3JlLWJ1dHRvbi1tb2JpbGVcIik7XHJcblx0Y29uc3QgaGlkZGVuTW9iaWxlID0gJChcIiNoZWFkZXItaGlkZGVuLW1vYmlsZVwiKTtcclxuXHJcblx0Ly8gaGlkZGVuTW9iaWxlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0Ly8gXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHQvLyB9KTtcclxuXHJcblx0bGV0IG1lbnVTdGF0ZSA9IHNlZU1vcmVNb2JpbGUuYXR0cihcImFjdGl2ZVwiKSA9PT0gXCJ0cnVlXCI7XHJcblx0bGV0IHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcblx0c2VlTW9yZU1vYmlsZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0aWYgKHRyYW5zaXRpb25pbmcpIHJldHVybjtcclxuXHRcdG1lbnVTdGF0ZSA9ICFtZW51U3RhdGU7XHJcblx0XHRzZWVNb3JlTW9iaWxlLmF0dHIoXCJhY3RpdmVcIiwgbWVudVN0YXRlKTtcclxuXHJcblx0XHRpZiAobWVudVN0YXRlKSB7XHJcblx0XHRcdHRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG5cdFx0XHRoaWRkZW5Nb2JpbGUuc2xpZGVEb3duKDM1MCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuXHRcdFx0aGlkZGVuTW9iaWxlLnNsaWRlVXAoMzUwLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaW5pdGlhdGVQb3B1cCgpIHtcclxuXHRjb25zdCBjbG9zZUJ1dHRvbnMgPSAkKFwiLnBvcHVwLWNsb3NlLWJ1dHRvblwiKTtcclxuXHRjbG9zZUJ1dHRvbnMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcclxuXHRcdCQoZWxlbWVudCkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0JC5mYW5jeWJveC5jbG9zZSgpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0Y29uc3QgY2FuY2VsQnV0dG9uID0gJChcIiNwb3B1cC1kYW5na3kgI2RhbmdreS1jYW5jZWwtYnV0dG9uXCIpO1xyXG5cdGNhbmNlbEJ1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0JC5mYW5jeWJveC5jbG9zZSgpO1xyXG5cdH0pO1xyXG59XHJcbiIsIi8qKlxyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKi9cclxuLy8gc2NhbGUgcm9vdFxyXG5pbXBvcnQgU2Nyb2xsV2F0Y2ggZnJvbSBcInNjcm9sbHdhdGNoXCI7XHJcbmltcG9ydCB7IGluaXRpYXRlUG9wdXAgfSBmcm9tIFwiLi9jb21wb25lbnRzL1BvcHVwXCI7XHJcblxyXG5pbXBvcnQgeyBydW5IZWFkZXJNb2JpbGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlck1vYmlsZVwiO1xyXG5pbXBvcnQgeyBydW5GcmFtZTEgfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZyYW1lMVwiO1xyXG5pbXBvcnQgeyBydW5GcmFtZTIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZyYW1lMlwiO1xyXG5pbXBvcnQgeyBydW5GcmFtZTMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZyYW1lM1wiO1xyXG5pbXBvcnQgeyBydW5GcmFtZTUgfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZyYW1lNVwiO1xyXG5pbXBvcnQgeyBhbmltYXRlQ1NTIH0gZnJvbSBcIi4vaW1wb3J0X2Fzc2V0c1wiO1xyXG5cclxuLy8gY3VzdG9tXHJcbmNvbnN0IG1vYmlsZUhlYWRlckNvbnRhaW5lciA9ICQoXCIjbW9iaWxlLWhlYWRlci1jb250YWluZXJcIikuZ2V0KDApO1xyXG5tb2JpbGVIZWFkZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCJ0b3AgbGVmdFwiO1xyXG5cclxuY29uc3QgYmFja1RvVG9wID0gJChcIiNiYWNrLXRvLXRvcC1idXR0b25cIikuZ2V0KDApO1xyXG5cclxuLy9cclxuY29uc3Qgb3V0ZXJSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRlci1yb290XCIpO1xyXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gMDtcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAwO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IFwiZml0LWNvbnRlbnRcIjtcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiO1xyXG5cclxub3V0ZXJSb290LnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiO1xyXG5vdXRlclJvb3Quc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxucm9vdC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcInRvcCBsZWZ0XCI7XHJcbnJvb3Quc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxubGV0IG1vZGUsIHdpZHRoLCBoZWlnaHQsIHJhdGlvO1xyXG5cclxuZnVuY3Rpb24gc2NhbGVSb290KCkge1xyXG5cdC8vIGNoZWNrIG9uIGV2ZXJ5IHRyaWdnZXJcclxuXHRtb2RlID0gd2luZG93LmlubmVyV2lkdGggPD0gNzY4ID8gXCJtb2JpbGVcIiA6IFwicGNcIjtcclxuXHR3aWR0aCA9IHJvb3Qub2Zmc2V0V2lkdGg7XHJcblx0aGVpZ2h0ID0gcm9vdC5vZmZzZXRIZWlnaHQ7XHJcblx0cmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcclxuXHJcblx0Y29uc3QgZGVzaXJlZFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0Y29uc3QgZGVzaXJlZEhlaWdodCA9IGRlc2lyZWRXaWR0aCAvIHJhdGlvO1xyXG5cclxuXHRjb25zdCByYXRpb1cgPSBkZXNpcmVkV2lkdGggLyB3aWR0aDtcclxuXHRjb25zdCByYXRpb0ggPSBkZXNpcmVkSGVpZ2h0IC8gaGVpZ2h0O1xyXG5cclxuXHRvdXRlclJvb3Quc3R5bGUud2lkdGggPSBgJHtkZXNpcmVkV2lkdGh9cHhgO1xyXG5cdG91dGVyUm9vdC5zdHlsZS5oZWlnaHQgPSBgJHtkZXNpcmVkSGVpZ2h0fXB4YDtcclxuXHJcblx0cm9vdC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtyYXRpb1d9LCAke3JhdGlvSH0pYDtcclxuXHRtb2JpbGVIZWFkZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7cmF0aW9XfSwgJHtyYXRpb0h9KWA7XHJcblx0YmFja1RvVG9wLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3JhdGlvV30sICR7cmF0aW9IfSlgO1xyXG59XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQvLyByZWFkeVxyXG5cclxuXHRpbml0aWF0ZVBvcHVwKCk7XHJcblx0cnVuSGVhZGVyTW9iaWxlKCk7XHJcblx0cnVuRnJhbWUxKCk7XHJcblx0cnVuRnJhbWUyKCk7XHJcblx0cnVuRnJhbWUzKCk7XHJcblx0cnVuRnJhbWU1KCk7XHJcblxyXG5cdGNvbnN0IGZyYW1lMkluZm8gPSAkKFwiI2ZyYW1lMi1pbmZvXCIpO1xyXG5cdGNvbnN0IGZyYW1lMlN3aXBlciA9ICQoXCIuZnJhbWUyLXN3aXBlci1jaGFyYWN0ZXJcIik7XHJcblx0Y29uc3QgZnJhbWUyVmlkZW8gPSAkKFwiI2ZyYW1lMi12aWRlby1jb250YWluZXJcIik7XHJcblxyXG5cdGNvbnN0IGZyYW1lM1N3aXBlciA9ICQoXCIuZnJhbWUzLXN3aXBlclwiKTtcclxuXHRjb25zdCBmcmFtZTRCdXR0b25zID0gJChcIiNmcmFtZTQtYnV0dG9uLWNvbnRhaW5lciAuZnJhbWU0LWJ1dHRvblwiKTtcclxuXHJcblx0Y29uc3Qgc3cgPSBuZXcgU2Nyb2xsV2F0Y2goe1xyXG5cdFx0b25FbGVtZW50SW5WaWV3OiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cdFx0XHRzd2l0Y2ggKGRhdGEuZWwpIHtcclxuXHRcdFx0XHRjYXNlIGZyYW1lMkluZm8uZ2V0KDApOlxyXG5cdFx0XHRcdFx0YW5pbWF0ZUNTUyhmcmFtZTJJbmZvLCBcImFuaW1hdGVfX2ZhZGVJbkxlZnRCaWdcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0Y2FzZSBmcmFtZTJTd2lwZXIuZ2V0KDApOlxyXG5cdFx0XHRcdFx0YW5pbWF0ZUNTUyhmcmFtZTJTd2lwZXIsIFwiYW5pbWF0ZV9fZmFkZUluVXBCaWdcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0Y2FzZSBmcmFtZTJWaWRlby5nZXQoMCk6XHJcblx0XHRcdFx0XHRhbmltYXRlQ1NTKGZyYW1lMlZpZGVvLCBcImFuaW1hdGVfX2ZhZGVJblJpZ2h0QmlnXCIpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdC8vIGZyYW1lIDNcclxuXHRcdFx0XHRjYXNlIGZyYW1lM1N3aXBlci5nZXQoMCk6XHJcblx0XHRcdFx0XHRhbmltYXRlQ1NTKGZyYW1lM1N3aXBlciwgXCJhbmltYXRlX19mYWRlSW5VcEJpZ1wiKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IGRvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZnJhbWU0QnV0dG9ucy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcclxuXHRcdFx0XHRpZiAoZGF0YS5lbCA9PT0gZWwpIHtcclxuXHRcdFx0XHRcdGFuaW1hdGVDU1MoZWwsIFwiYW5pbWF0ZV9fZmFkZUluTGVmdEJpZ1wiKTtcclxuXHRcdFx0XHRcdGRvbmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGlmIChkb25lKSByZXR1cm47XHJcblx0XHR9LFxyXG5cdH0pO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBzY2FsZVJvb3QpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBzY2FsZVJvb3QpO1xyXG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgUFJPTUlTRV9QT0xZRklMTF9VUkwgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wcm9taXNlLXBvbHlmaWxsQDgvZGlzdC9wb2x5ZmlsbC5taW4uanMnO1xudmFyIGFwcGVuZGVkUHJvbWlzZVBvbHlmaWxsID0gZmFsc2U7XG4vKipcbiAqIGlzUHJvbWlzZVJlYWR5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG52YXIgaXNQcm9taXNlUmVhZHkgPSBmdW5jdGlvbiBpc1Byb21pc2VSZWFkeSgpIHtcbiAgcmV0dXJuICEhd2luZG93LlByb21pc2U7XG59O1xuLyoqXG4gKiBwcm9taXNlUG9seWZpbGxcbiAqL1xuXG52YXIgcHJvbWlzZVBvbHlmaWxsID0gZnVuY3Rpb24gcHJvbWlzZVBvbHlmaWxsKCkge1xuICBpZiAoYXBwZW5kZWRQcm9taXNlUG9seWZpbGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNQcm9taXNlUmVhZHkoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBvU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIG9TY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICBvU2NyaXB0LnNyYyA9IFBST01JU0VfUE9MWUZJTExfVVJMO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQob1NjcmlwdCk7XG4gIGFwcGVuZGVkUHJvbWlzZVBvbHlmaWxsID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogZGV0ZXJtaW5lIG5vZGVMaXN0IHR5cGVcbiAqIEBwYXJhbSBub2RlTGlzdFxuICovXG52YXIgaXNOb2RlTGlzdCA9IChub2RlTGlzdCA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobm9kZUxpc3QpID09PSAnW29iamVjdCBOb2RlTGlzdF0nKTtcblxuLyoqXG4gKiBkZXRlcm1pbmUgYW4gYXJyYXkgdHlwZVxuICogQHBhcmFtIGFyclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnZhciBpc0FycmF5ID0gKGFyciA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKS5zbGljZSg4LCAtMSkgPT09ICdBcnJheScpO1xuXG4vKipcbiAqIG5vZGVMaXN0IGludG8gYXJyYXlcbiAqIEBwYXJhbSBub2RlTGlzdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5cbnZhciBub2RlTGlzdFRvQXJyYXkgPSAobm9kZUxpc3QgPT4ge1xuICBpZiAoaXNBcnJheShub2RlTGlzdCkpIHtcbiAgICByZXR1cm4gbm9kZUxpc3Q7XG4gIH1cblxuICBpZiAoIWlzTm9kZUxpc3Qobm9kZUxpc3QpKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheShub2RlTGlzdCk7XG4gIH1cblxuICByZXR1cm4gQXJyYXkuZnJvbSA/IEFycmF5LmZyb20obm9kZUxpc3QpIDogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xufSk7XG5cbnZhciBzSGlkZGVuID0gJ3Zpc2liaWxpdHk6IGhpZGRlbjsnO1xuLyoqXG4gKiBjYWNoZUFuaW1hdGlvbnNcbiAqIEBwYXJhbSBlbGVtZW50c1tIVE1MRWxlbWVudF1cbiAqL1xuXG52YXIgY2FjaGVBbmltYXRpb25zID0gKGZ1bmN0aW9uIChlbGVtZW50cykge1xuICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGVsLmFuaW1hdGlvbkRhdGEgPSB7XG4gICAgICBzdHlsZUNhY2hlOiBlbC5hdHRyaWJ1dGVzLnN0eWxlID8gc0hpZGRlbiArIGVsLnN0eWxlLmNzc1RleHQgOiBzSGlkZGVuLFxuICAgICAgZWZmZWN0OiBlbC5kYXRhc2V0LnN3aXBlckFuaW1hdGlvbiB8fCBlbC5kYXRhc2V0LnN3aXBlckFuaW1hdGlvbk9uY2UgfHwgJycsXG4gICAgICBkdXJhdGlvbjogZWwuZGF0YXNldC5kdXJhdGlvbiB8fCAnLjVzJyxcbiAgICAgIGRlbGF5OiBlbC5kYXRhc2V0LmRlbGF5IHx8ICcuNXMnLFxuICAgICAgb3V0RWZmZWN0OiBlbC5kYXRhc2V0LnN3aXBlck91dEFuaW1hdGlvbiB8fCAnJyxcbiAgICAgIG91dER1cmF0aW9uOiBlbC5kYXRhc2V0Lm91dER1cmF0aW9uIHx8ICcuNXMnLFxuICAgICAgaXNSZWNvdmVyeTogdHJ1ZSxcbiAgICAgIHJ1bk9uY2U6ICEhZWwuZGF0YXNldC5zd2lwZXJBbmltYXRpb25PbmNlXG4gICAgfTtcbiAgICBlbC5zdHlsZS5jc3NUZXh0ID0gZWwuYW5pbWF0aW9uRGF0YS5zdHlsZUNhY2hlO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIGRldGVybWluZSBhIHByb21pc2UgdHlwZVxuICogQHBhcmFtIHByb21pc2VcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG52YXIgaXNQcm9taXNlID0gKHByb21pc2UgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb21pc2UpLnNsaWNlKDgsIC0xKSA9PT0gJ1Byb21pc2UnKTtcblxuLyoqXG4gKiBmdW5jdGlvbiB0byBwcm9taXNlXG4gKiBAcGFyYW0gbm9ybWFsRnVuY3Rpb25cbiAqIEBwYXJhbSB0aW1lb3V0XG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5cbnZhciBmdW5jdGlvblRvUHJvbWlzZSA9IChmdW5jdGlvbiAobm9ybWFsRnVuY3Rpb24pIHtcbiAgdmFyIHRpbWVvdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG5cbiAgaWYgKGlzUHJvbWlzZShub3JtYWxGdW5jdGlvbikpIHtcbiAgICByZXR1cm4gbm9ybWFsRnVuY3Rpb247XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cblxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgbm9ybWFsRnVuY3Rpb24oKTtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXQpO1xuICB9KTtcbn0pO1xuXG52YXIgY29uc3RhbnRzID0ge1xuICAvKipcbiAgICogY2xhc3NOYW1lIGBhbmltYXRlZGAgZm9yIEFuaW1hdGUuY3NzXG4gICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICovXG4gIEFuaW1hdGVDc3NBbmltYXRlZDogWydhbmltYXRlZCcsICdhbmltYXRlX19hbmltYXRlZCddXG59O1xuXG4vKipcbiAqIHJ1bkFuaW1hdGlvbnNcbiAqIEBwYXJhbSBhY3RpdmVFbGVtZW50c1tIVE1MRWxlbWVudF1cbiAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd25bXT59XG4gKi9cblxudmFyIHJ1bkFuaW1hdGlvbnMgPSAoZnVuY3Rpb24gKGFjdGl2ZUVsZW1lbnRzKSB7XG4gIHZhciBydW5BbmltYXRlVGFza3MgPSBhY3RpdmVFbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbC5hbmltYXRpb25EYXRhKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9Qcm9taXNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZWwkY2xhc3NMaXN0O1xuXG4gICAgICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgZWwuc3R5bGUuY3NzVGV4dCArPSBcIiBhbmltYXRpb24tZHVyYXRpb246XCIuY29uY2F0KGVsLmFuaW1hdGlvbkRhdGEuZHVyYXRpb24sIFwiOyAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjpcIikuY29uY2F0KGVsLmFuaW1hdGlvbkRhdGEuZHVyYXRpb24sIFwiOyBhbmltYXRpb24tZGVsYXk6XCIpLmNvbmNhdChlbC5hbmltYXRpb25EYXRhLmRlbGF5LCBcIjsgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6XCIpLmNvbmNhdChlbC5hbmltYXRpb25EYXRhLmRlbGF5LCBcIjtcIik7XG5cbiAgICAgIChfZWwkY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0KS5hZGQuYXBwbHkoX2VsJGNsYXNzTGlzdCwgW2VsLmFuaW1hdGlvbkRhdGEuZWZmZWN0XS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNvbnN0YW50cy5BbmltYXRlQ3NzQW5pbWF0ZWQpKSk7XG5cbiAgICAgIGVsLmFuaW1hdGlvbkRhdGEuaXNSZWNvdmVyeSA9IGZhbHNlO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHJ1bkFuaW1hdGVUYXNrcyk7XG59KTtcblxuLyoqXG4gKiBydW5PdXRBbmltYXRpb25zXG4gKiBAcGFyYW0gYWN0aXZlRWxlbWVudHNbSFRNTEVsZW1lbnRdXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx1bmtub3duW10+fVxuICovXG5cbnZhciBydW5PdXRBbmltYXRpb25zID0gKGZ1bmN0aW9uIChhY3RpdmVFbGVtZW50cykge1xuICB2YXIgcnVuT3V0VGFza3MgPSBhY3RpdmVFbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLmFuaW1hdGlvbkRhdGEuaXNSZWNvdmVyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGlmICghZWwuYW5pbWF0aW9uRGF0YS5vdXRFZmZlY3QpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb25Ub1Byb21pc2UoZnVuY3Rpb24gKCkge1xuICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IGVsLmFuaW1hdGlvbkRhdGEuc3R5bGVDYWNoZTtcbiAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBlbC5zdHlsZS5jc3NUZXh0ICs9IFwiIGFuaW1hdGlvbi1kdXJhdGlvbjpcIi5jb25jYXQoZWwuYW5pbWF0aW9uRGF0YS5vdXREdXJhdGlvbiwgXCI7IC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOlwiKS5jb25jYXQoZWwuYW5pbWF0aW9uRGF0YS5vdXREdXJhdGlvbiwgXCI7XCIpO1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChlbC5hbmltYXRpb25EYXRhLm91dEVmZmVjdCwgJ2FuaW1hdGVkJyk7XG4gICAgfSwgNTAwKTtcbiAgfSk7XG4gIHJldHVybiBQcm9taXNlLmFsbChydW5PdXRUYXNrcyk7XG59KTtcblxuLyoqXG4gKiBjbGVhckFuaW1hdGlvbnNcbiAqIEBwYXJhbSBhY3RpdmVFbGVtZW50c1tIVE1MRWxlbWVudF1cbiAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd25bXT59XG4gKi9cblxudmFyIGNsZWFyQW5pbWF0aW9ucyA9IChmdW5jdGlvbiAoYWN0aXZlRWxlbWVudHMpIHtcbiAgdmFyIHJ1bkNsZWFyVGFza3MgPSBhY3RpdmVFbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLmFuaW1hdGlvbkRhdGEuaXNSZWNvdmVyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGlmIChlbC5hbmltYXRpb25EYXRhLnJ1bk9uY2UpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb25Ub1Byb21pc2UoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9lbCRjbGFzc0xpc3Q7XG5cbiAgICAgIC8vIHJlY292ZXJ5XG4gICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gZWwuYW5pbWF0aW9uRGF0YS5zdHlsZUNhY2hlO1xuXG4gICAgICAoX2VsJGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdCkucmVtb3ZlLmFwcGx5KF9lbCRjbGFzc0xpc3QsIF90b0NvbnN1bWFibGVBcnJheShbZWwuYW5pbWF0aW9uRGF0YS5lZmZlY3QsIGVsLmFuaW1hdGlvbkRhdGEub3V0RWZmZWN0XS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNvbnN0YW50cy5BbmltYXRlQ3NzQW5pbWF0ZWQpKS5maWx0ZXIoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gISFzdHI7XG4gICAgICB9KSkpO1xuXG4gICAgICBlbC5hbmltYXRpb25EYXRhLmlzUmVjb3ZlcnkgPSB0cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHJ1bkNsZWFyVGFza3MpO1xufSk7XG5cbi8qKlxuICogZ2V0U3dpcGVyQ29udGFpbmVyXG4gKiBAcGFyYW0gc3dpcGVyXG4gKiBAcmV0dXJucyB7bnVsbHwqfE9iamVjdH1cbiAqL1xuXG52YXIgZ2V0U3dpcGVyQ29udGFpbmVyID0gZnVuY3Rpb24gZ2V0U3dpcGVyQ29udGFpbmVyKHN3aXBlcikge1xuICBpZiAoc3dpcGVyLmVsKSB7XG4gICAgLy8gc3dpcGVyIDQrXG4gICAgcmV0dXJuIHN3aXBlci5lbDtcbiAgfVxuXG4gIGlmIChzd2lwZXIuY29udGFpbmVyKSB7XG4gICAgLy8gc3dpcGVyIDMueFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgIHJldHVybiBzd2lwZXIuY29udGFpbmVyWzBdO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIHN3aXBlciBpbnN0YW5jZScpO1xufTtcblxudmFyIF9kZWZhdWx0JDEgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfZGVmYXVsdChzd2lwZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgdGhpcy5zd2lwZXIgPSBzd2lwZXI7XG4gICAgdGhpcy5jb250YWluZXIgPSBnZXRTd2lwZXJDb250YWluZXIodGhpcy5zd2lwZXIpO1xuICAgIHRoaXMuYW5pbWF0aW9uRWxlbWVudHMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG5vZGVMaXN0VG9BcnJheSh0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2lwZXItYW5pbWF0aW9uXScpKSksIF90b0NvbnN1bWFibGVBcnJheShub2RlTGlzdFRvQXJyYXkodGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpcGVyLWFuaW1hdGlvbi1vbmNlXScpKSkpO1xuICAgIHRoaXMuYWN0aXZlRWxlbWVudHMgPSBbXTtcbiAgICBjYWNoZUFuaW1hdGlvbnModGhpcy5hbmltYXRpb25FbGVtZW50cyk7XG4gIH1cbiAgLyoqXG4gICAqIGFuaW1hdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bltdPn1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiBcImFuaW1hdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJ1bk91dEFuaW1hdGlvbnMoX3RoaXMuYWN0aXZlRWxlbWVudHMpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbGVhckFuaW1hdGlvbnMoX3RoaXMuYWN0aXZlRWxlbWVudHMpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBydW5BbmltYXRpb25zKF90aGlzLl91cGRhdGVBY3RpdmVFbGVtZW50cygpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB1cGRhdGUgYWN0aXZlRWxlbWVudHNcbiAgICAgKiBAcmV0dXJucyB7W118KltdfCp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVBY3RpdmVFbGVtZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlQWN0aXZlRWxlbWVudHMoKSB7XG4gICAgICB0aGlzLmFjdGl2ZUVsZW1lbnRzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShub2RlTGlzdFRvQXJyYXkodGhpcy5zd2lwZXIuc2xpZGVzW3RoaXMuc3dpcGVyLmFjdGl2ZUluZGV4XS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2lwZXItYW5pbWF0aW9uXScpKSksIF90b0NvbnN1bWFibGVBcnJheShub2RlTGlzdFRvQXJyYXkodGhpcy5zd2lwZXIuc2xpZGVzW3RoaXMuc3dpcGVyLmFjdGl2ZUluZGV4XS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2lwZXItYW5pbWF0aW9uLW9uY2VdJykpKSk7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVFbGVtZW50cztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBudWxsO1xuXG4gICAgaWYgKCFpc1Byb21pc2VSZWFkeSgpKSB7XG4gICAgICBwcm9taXNlUG9seWZpbGwoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIGluaXRcbiAgICogQHBhcmFtIHN3aXBlclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgaWYgKCF0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gbmV3IF9kZWZhdWx0JDEoc3dpcGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHJ1biBhbmltYXRpb25zXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFuaW1hdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghaXNQcm9taXNlUmVhZHkoKSkge1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgfSwgNWUyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9ucy5hbmltYXRlKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufSgpO1xuXG5leHBvcnQgeyBfZGVmYXVsdCBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=