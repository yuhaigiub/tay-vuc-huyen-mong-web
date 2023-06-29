"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["main"],{

/***/ "./src/components/Frame1/index.js":
/*!****************************************!*\
  !*** ./src/components/Frame1/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runFrame2: () => (/* binding */ runFrame2)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _cycjimmy_swiper_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cycjimmy/swiper-animation */ "./node_modules/@cycjimmy/swiper-animation/dist/swiper-animation.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



function runFrame2() {
	const swiperAnimation = new _cycjimmy_swiper_animation__WEBPACK_IMPORTED_MODULE_1__["default"]();
	console.log(swiperAnimation);
	const frame2CharacterSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".frame2-swiper-character", {
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


/***/ }),

/***/ "./src/components/Frame3/index.js":
/*!****************************************!*\
  !*** ./src/components/Frame3/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Popup */ "./src/components/Popup/index.js");
/* harmony import */ var _components_HeaderMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HeaderMobile */ "./src/components/HeaderMobile/index.js");
/* harmony import */ var _components_Frame1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Frame1 */ "./src/components/Frame1/index.js");
/* harmony import */ var _components_Frame2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Frame2 */ "./src/components/Frame2/index.js");
/* harmony import */ var _components_Frame3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Frame3 */ "./src/components/Frame3/index.js");
/* harmony import */ var _components_Frame5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Frame5 */ "./src/components/Frame5/index.js");
/* harmony import */ var _import_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import_assets */ "./src/import_assets.js");
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

	(0,_components_Popup__WEBPACK_IMPORTED_MODULE_0__.initiatePopup)();
	(0,_components_HeaderMobile__WEBPACK_IMPORTED_MODULE_1__.runHeaderMobile)();
	(0,_components_Frame1__WEBPACK_IMPORTED_MODULE_2__.runFrame1)();
	(0,_components_Frame2__WEBPACK_IMPORTED_MODULE_3__.runFrame2)();
	(0,_components_Frame3__WEBPACK_IMPORTED_MODULE_4__.runFrame3)();
	(0,_components_Frame5__WEBPACK_IMPORTED_MODULE_5__.runFrame5)();

	window.addEventListener("load", scaleRoot);
	window.addEventListener("resize", scaleRoot);

	function frame2InView() {
		const frame2Info = $("#frame2-info");
		const frame2Swiper = $(".frame2-swiper-character");
		const frame2Video = $("#frame2-video-container");
		if ((0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.isInView)(frame2Info, $(window))) {
			(0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.animateCSS)(frame2Info, "animate__fadeInLeftBig");
			(0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.animateCSS)(frame2Swiper, "animate__fadeInUpBig");
			(0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.animateCSS)(frame2Video, "animate__fadeInRightBig");

			window.removeEventListener("load", frame2InView);
			window.removeEventListener("scroll", frame2InView);
		}
	}

	function frame3InView() {
		const frame3Swiper = $(".frame3-swiper");
		if ((0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.isInView)(frame3Swiper, $(window))) {
			(0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.animateCSS)(frame3Swiper, "animate__fadeInUpBig");

			window.removeEventListener("load", frame3InView);
			window.removeEventListener("scroll", frame3InView);
		}
	}

	function frame4InView() {
		const frame4ButtonContainer = $("#frame4-button-container");
		const frame4Buttons = $("#frame4-button-container .frame4-button");

		if ((0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.isInView)(frame4ButtonContainer, $(window)) && $(window).width() >= 750) {
			frame4Buttons.hide();
			frame4Buttons.each(function (index, element) {
				setTimeout(() => {
					$(element).show();
					(0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.animateCSS)(element, "animate__fadeInLeftBig");
				}, index * 100);
			});

			window.removeEventListener("load", frame4InView);
			window.removeEventListener("scroll", frame4InView);
		}
	}

	function frame5InView() {
		const frame5ButtonContainer = $("#frame5-button-container");
		const frame5Buttons = $("#frame5-button-container .frame5-button");

		if ((0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.isInView)(frame5ButtonContainer, $(window)) && $(window).width() >= 750) {
			frame5Buttons.hide();
			frame5Buttons.each(function (index, element) {
				setTimeout(() => {
					$(element).show();
					(0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.animateCSS)(element, "animate__fadeInUpBig");
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


/***/ }),

/***/ "./src/components/Frame1/assets/frame1_bg_video.mp4":
/*!**********************************************************!*\
  !*** ./src/components/Frame1/assets/frame1_bg_video.mp4 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "videos/frame1_bg_video.mp4";

/***/ }),

/***/ "./node_modules/@cycjimmy/swiper-animation/dist/swiper-animation.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@cycjimmy/swiper-animation/dist/swiper-animation.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0ZBQXNGLG1FQUFtRSxxREFBcUQsNERBQTREOztBQUUxUTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYscUVBQXFFO0FBQzlKO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUU4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRnJhbWUxL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRnJhbWUyL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRnJhbWUzL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRnJhbWU1L2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyTW9iaWxlL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvQGN5Y2ppbW15L3N3aXBlci1hbmltYXRpb24vZGlzdC9zd2lwZXItYW5pbWF0aW9uLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmlkZW9CZyBmcm9tIFwiLi9hc3NldHMvZnJhbWUxX2JnX3ZpZGVvLm1wNFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkZyYW1lMSgpIHtcclxuXHRsZXQgZmlyc3RBY3Rpb25TdGF0ZSA9IGZhbHNlO1xyXG5cclxuXHQvLyB2aWRlbyBiZ1xyXG5cdGNvbnN0IHZpZGVvID0gJChcIiNmcmFtZTEtY29udGFpbmVyIHZpZGVvXCIpLmdldCgwKTtcclxuXHRjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xyXG5cdHNvdXJjZS5zcmMgPSB2aWRlb0JnO1xyXG5cdHZpZGVvLmFwcGVuZENoaWxkKHNvdXJjZSk7XHJcblxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gYXVkaW9cclxuXHRjb25zdCBhdWRpbyA9ICQoXCJhdWRpb1wiKS5nZXQoMCk7XHJcblx0bGV0IG11c2ljU3RhdGUgPSBmYWxzZTtcclxuXHRjb25zdCBtdXNpY0J1dHRvbiA9ICQoXCIjZnJhbWUxLW11c2ljLWJ1dHRvblwiKTtcclxuXHRjb25zdCBtdXNpY0J1dHRvbk1vYmlsZSA9ICQoXCIjZnJhbWUxLW11c2ljLWJ1dHRvbi1tb2JpbGVcIik7XHJcblxyXG5cdG11c2ljQnV0dG9uLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRtdXNpY1N0YXRlID0gIW11c2ljU3RhdGU7XHJcblx0XHRtdXNpY0J1dHRvbi5hdHRyKFwiYWN0aXZlXCIsIG11c2ljU3RhdGUpO1xyXG5cdFx0bXVzaWNCdXR0b25Nb2JpbGUuYXR0cihcImFjdGl2ZVwiLCBtdXNpY1N0YXRlKTtcclxuXHRcdGZpcnN0QWN0aW9uU3RhdGUgPSB0cnVlO1xyXG5cdFx0aWYgKG11c2ljU3RhdGUpIHtcclxuXHRcdFx0YXVkaW8ucGxheSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YXVkaW8ucGF1c2UoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0bXVzaWNCdXR0b25Nb2JpbGUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdG11c2ljU3RhdGUgPSAhbXVzaWNTdGF0ZTtcclxuXHRcdG11c2ljQnV0dG9uLmF0dHIoXCJhY3RpdmVcIiwgbXVzaWNTdGF0ZSk7XHJcblx0XHRtdXNpY0J1dHRvbk1vYmlsZS5hdHRyKFwiYWN0aXZlXCIsIG11c2ljU3RhdGUpO1xyXG5cdFx0Zmlyc3RBY3Rpb25TdGF0ZSA9IHRydWU7XHJcblx0XHRpZiAobXVzaWNTdGF0ZSkge1xyXG5cdFx0XHRhdWRpby5wbGF5KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhdWRpby5wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyBjcmVhdGUgYW4gQXJyYXkgZnJvbSAxIHRvIDEyXHJcblx0Y29uc3QgZXhjbHVkZWRGbktleXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMiB9LCAoXywgaSkgPT4gaSArIDEpLm1hcChcclxuXHRcdChpKSA9PiBgRiR7aX1gXHJcblx0KTtcclxuXHRjb25zdCBleGNsdWRlZEtleXMgPSBbXHJcblx0XHQuLi5leGNsdWRlZEZuS2V5cyxcclxuXHRcdFwiQ29udHJvbFwiLFxyXG5cdFx0XCJTaGlmdFwiLFxyXG5cdFx0XCJFc2NhcGVcIixcclxuXHRcdFwiVGFiXCIsXHJcblx0XHRcIkNhcHNMb2NrXCIsXHJcblx0XHRcIk9TXCIsXHJcblx0XHRcIkFsdFwiLFxyXG5cdF07XHJcblxyXG5cdGZ1bmN0aW9uIHRyYWNrRmlyc3RNb3ZlbWVudChlKSB7XHJcblx0XHRpZiAoIWZpcnN0QWN0aW9uU3RhdGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZS5rZXkpO1xyXG5cdFx0XHRpZiAoZS50eXBlID09PSBcImtleWRvd25cIiAmJiBleGNsdWRlZEtleXMuaW5jbHVkZXMoZS5rZXkpKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhdWRpby5wbGF5KCk7XHJcblx0XHRcdGZpcnN0QWN0aW9uU3RhdGUgPSB0cnVlO1xyXG5cdFx0XHRtdXNpY1N0YXRlID0gIW11c2ljU3RhdGU7XHJcblx0XHRcdG11c2ljQnV0dG9uLmF0dHIoXCJhY3RpdmVcIiwgbXVzaWNTdGF0ZSk7XHJcblx0XHRcdG11c2ljQnV0dG9uTW9iaWxlLmF0dHIoXCJhY3RpdmVcIiwgbXVzaWNTdGF0ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyYWNrRmlyc3RNb3ZlbWVudCk7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0cmFja0ZpcnN0TW92ZW1lbnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0cmFja0ZpcnN0TW92ZW1lbnQpO1xyXG5cdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0cmFja0ZpcnN0TW92ZW1lbnQpO1xyXG59XHJcbiIsImltcG9ydCBTd2lwZXIgZnJvbSBcInN3aXBlclwiO1xyXG5pbXBvcnQgU3dpcGVyQW5pbWF0aW9uIGZyb20gXCJAY3ljamltbXkvc3dpcGVyLWFuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkZyYW1lMigpIHtcclxuXHRjb25zdCBzd2lwZXJBbmltYXRpb24gPSBuZXcgU3dpcGVyQW5pbWF0aW9uKCk7XHJcblx0Y29uc29sZS5sb2coc3dpcGVyQW5pbWF0aW9uKTtcclxuXHRjb25zdCBmcmFtZTJDaGFyYWN0ZXJTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmZyYW1lMi1zd2lwZXItY2hhcmFjdGVyXCIsIHtcclxuXHRcdGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0ZWZmZWN0OiBcImZhZGVcIixcclxuXHRcdGZhZGVFZmZlY3Q6IHtcclxuXHRcdFx0Y3Jvc3NGYWRlOiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdG9uOiB7XHJcblx0XHRcdHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c3dpcGVyQW5pbWF0aW9uLmluaXQodGhpcykuYW5pbWF0ZSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0Ly8gYnV0dG9ucyBhbmQgZGVjb3IgYmFsbHNcclxuXHRjb25zdCBkZWNvckJhbGxzID0gJChcIi5kZWNvci1iYWxsXCIpO1xyXG5cdGNvbnN0IG1hbGVCdXR0b24gPSAkKFwiI2ZyYW1lMi1tYWxlLWJ1dHRvblwiKTtcclxuXHRjb25zdCBmZW1hbGVCdXR0b24gPSAkKFwiI2ZyYW1lMi1mZW1hbGUtYnV0dG9uXCIpO1xyXG5cclxuXHRtYWxlQnV0dG9uLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRtYWxlQnV0dG9uLmF0dHIoXCJhY3RpdmVcIiwgdHJ1ZSk7XHJcblx0XHRmZW1hbGVCdXR0b24uYXR0cihcImFjdGl2ZVwiLCBmYWxzZSk7XHJcblx0XHRkZWNvckJhbGxzLmVxKDApLnNob3coKTtcclxuXHRcdGRlY29yQmFsbHMuZXEoMykuc2hvdygpO1xyXG5cdFx0ZGVjb3JCYWxscy5lcSgxKS5oaWRlKCk7XHJcblx0XHRkZWNvckJhbGxzLmVxKDIpLmhpZGUoKTtcclxuXHRcdGZyYW1lMkNoYXJhY3RlclN3aXBlci5zbGlkZVRvKDApO1xyXG5cdH0pO1xyXG5cclxuXHRmZW1hbGVCdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdG1hbGVCdXR0b24uYXR0cihcImFjdGl2ZVwiLCBmYWxzZSk7XHJcblx0XHRmZW1hbGVCdXR0b24uYXR0cihcImFjdGl2ZVwiLCB0cnVlKTtcclxuXHRcdGRlY29yQmFsbHMuZXEoMCkuaGlkZSgpO1xyXG5cdFx0ZGVjb3JCYWxscy5lcSgzKS5oaWRlKCk7XHJcblx0XHRkZWNvckJhbGxzLmVxKDEpLnNob3coKTtcclxuXHRcdGRlY29yQmFsbHMuZXEoMikuc2hvdygpO1xyXG5cdFx0ZnJhbWUyQ2hhcmFjdGVyU3dpcGVyLnNsaWRlVG8oMSk7XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IFN3aXBlciBmcm9tIFwic3dpcGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcnVuRnJhbWUzKCkge1xyXG5cdGNvbnN0IGZyYW1lM1N3aXBlciA9IG5ldyBTd2lwZXIoXCIuZnJhbWUzLXN3aXBlclwiLCB7XHJcblx0XHRlZmZlY3Q6IFwiY292ZXJmbG93XCIsXHJcblx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblx0XHRjb3ZlcmZsb3dFZmZlY3Q6IHtcclxuXHRcdFx0cm90YXRlOiAwLFxyXG5cdFx0XHRzdHJldGNoOiAwLFxyXG5cdFx0XHRkZXB0aDogNTAsXHJcblx0XHRcdG1vZGlmaWVyOiAyLjUsXHJcblx0XHR9LFxyXG5cdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRlbDogXCIuZnJhbWUzLXN3aXBlciAuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiBcIi5mcmFtZTMtc3dpcGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuXHRcdFx0cHJldkVsOiBcIi5mcmFtZTMtc3dpcGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuXHRcdH0sXHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IFN3aXBlciBmcm9tIFwic3dpcGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcnVuRnJhbWU1KCkge1xyXG5cdGNvbnN0IGZyYW1lNVN3aXBlciA9IG5ldyBTd2lwZXIoXCIuZnJhbWU1LXN3aXBlclwiLCB7XHJcblx0XHRkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiBcIi5mcmFtZTUtc3dpcGVyIC5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG5cdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBydW5IZWFkZXJNb2JpbGUoKSB7XHJcblx0Y29uc3Qgc2VlTW9yZU1vYmlsZSA9ICQoXCIjaGVhZGVyLXNlZS1tb3JlLWJ1dHRvbi1tb2JpbGVcIik7XHJcblx0Y29uc3QgaGlkZGVuTW9iaWxlID0gJChcIiNoZWFkZXItaGlkZGVuLW1vYmlsZVwiKTtcclxuXHJcblx0Ly8gaGlkZGVuTW9iaWxlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0Ly8gXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHQvLyB9KTtcclxuXHJcblx0bGV0IG1lbnVTdGF0ZSA9IHNlZU1vcmVNb2JpbGUuYXR0cihcImFjdGl2ZVwiKSA9PT0gXCJ0cnVlXCI7XHJcblx0bGV0IHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcblx0c2VlTW9yZU1vYmlsZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0aWYgKHRyYW5zaXRpb25pbmcpIHJldHVybjtcclxuXHRcdG1lbnVTdGF0ZSA9ICFtZW51U3RhdGU7XHJcblx0XHRzZWVNb3JlTW9iaWxlLmF0dHIoXCJhY3RpdmVcIiwgbWVudVN0YXRlKTtcclxuXHJcblx0XHRpZiAobWVudVN0YXRlKSB7XHJcblx0XHRcdHRyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG5cdFx0XHRoaWRkZW5Nb2JpbGUuc2xpZGVEb3duKDM1MCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuXHRcdFx0aGlkZGVuTW9iaWxlLnNsaWRlVXAoMzUwLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaW5pdGlhdGVQb3B1cCgpIHtcclxuXHRjb25zdCBjbG9zZUJ1dHRvbnMgPSAkKFwiLnBvcHVwLWNsb3NlLWJ1dHRvblwiKTtcclxuXHRjbG9zZUJ1dHRvbnMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcclxuXHRcdCQoZWxlbWVudCkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0JC5mYW5jeWJveC5jbG9zZSgpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0Y29uc3QgY2FuY2VsQnV0dG9uID0gJChcIiNwb3B1cC1kYW5na3kgI2RhbmdreS1jYW5jZWwtYnV0dG9uXCIpO1xyXG5cdGNhbmNlbEJ1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0JC5mYW5jeWJveC5jbG9zZSgpO1xyXG5cdH0pO1xyXG59XHJcbiIsIi8qKlxyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKi9cclxuLy8gc2NhbGUgcm9vdFxyXG5cclxuaW1wb3J0IHsgaW5pdGlhdGVQb3B1cCB9IGZyb20gXCIuL2NvbXBvbmVudHMvUG9wdXBcIjtcclxuXHJcbmltcG9ydCB7IHJ1bkhlYWRlck1vYmlsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyTW9iaWxlXCI7XHJcbmltcG9ydCB7IHJ1bkZyYW1lMSB9IGZyb20gXCIuL2NvbXBvbmVudHMvRnJhbWUxXCI7XHJcbmltcG9ydCB7IHJ1bkZyYW1lMiwgY2hlY2tJblZpZXdGcmFtZTIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZyYW1lMlwiO1xyXG5pbXBvcnQgeyBydW5GcmFtZTMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZyYW1lM1wiO1xyXG5pbXBvcnQgeyBydW5GcmFtZTUgfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZyYW1lNVwiO1xyXG5pbXBvcnQgeyBpc0luVmlldywgYW5pbWF0ZUNTUyB9IGZyb20gXCIuL2ltcG9ydF9hc3NldHNcIjtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdC8vIHJlYWR5XHJcblxyXG5cdC8vIGN1c3RvbVxyXG5cdGNvbnN0IG1vYmlsZUhlYWRlckNvbnRhaW5lciA9ICQoXCIjbW9iaWxlLWhlYWRlci1jb250YWluZXJcIikuZ2V0KDApO1xyXG5cdG1vYmlsZUhlYWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcInRvcCBsZWZ0XCI7XHJcblxyXG5cdC8vXHJcblx0Y29uc3Qgb3V0ZXJSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRlci1yb290XCIpO1xyXG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9IDA7XHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAwO1xyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCI7XHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBcImZpdC1jb250ZW50XCI7XHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiO1xyXG5cclxuXHRvdXRlclJvb3Quc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XHJcblx0b3V0ZXJSb290LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcblx0cm9vdC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcInRvcCBsZWZ0XCI7XHJcblx0cm9vdC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG5cdGxldCBtb2RlLCB3aWR0aCwgaGVpZ2h0LCByYXRpbztcclxuXHJcblx0ZnVuY3Rpb24gc2NhbGVSb290KCkge1xyXG5cdFx0Ly8gY2hlY2sgb24gZXZlcnkgdHJpZ2dlclxyXG5cdFx0bW9kZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCA/IFwibW9iaWxlXCIgOiBcInBjXCI7XHJcblx0XHR3aWR0aCA9IHJvb3Qub2Zmc2V0V2lkdGg7XHJcblx0XHRoZWlnaHQgPSByb290Lm9mZnNldEhlaWdodDtcclxuXHRcdHJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XHJcblxyXG5cdFx0Y29uc3QgZGVzaXJlZFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjb25zdCBkZXNpcmVkSGVpZ2h0ID0gZGVzaXJlZFdpZHRoIC8gcmF0aW87XHJcblxyXG5cdFx0Y29uc3QgcmF0aW9XID0gZGVzaXJlZFdpZHRoIC8gd2lkdGg7XHJcblx0XHRjb25zdCByYXRpb0ggPSBkZXNpcmVkSGVpZ2h0IC8gaGVpZ2h0O1xyXG5cclxuXHRcdG91dGVyUm9vdC5zdHlsZS53aWR0aCA9IGAke2Rlc2lyZWRXaWR0aH1weGA7XHJcblx0XHRvdXRlclJvb3Quc3R5bGUuaGVpZ2h0ID0gYCR7ZGVzaXJlZEhlaWdodH1weGA7XHJcblxyXG5cdFx0cm9vdC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtyYXRpb1d9LCAke3JhdGlvSH0pYDtcclxuXHRcdG1vYmlsZUhlYWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtyYXRpb1d9LCAke3JhdGlvSH0pYDtcclxuXHR9XHJcblxyXG5cdGluaXRpYXRlUG9wdXAoKTtcclxuXHRydW5IZWFkZXJNb2JpbGUoKTtcclxuXHRydW5GcmFtZTEoKTtcclxuXHRydW5GcmFtZTIoKTtcclxuXHRydW5GcmFtZTMoKTtcclxuXHRydW5GcmFtZTUoKTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHNjYWxlUm9vdCk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgc2NhbGVSb290KTtcclxuXHJcblx0ZnVuY3Rpb24gZnJhbWUySW5WaWV3KCkge1xyXG5cdFx0Y29uc3QgZnJhbWUySW5mbyA9ICQoXCIjZnJhbWUyLWluZm9cIik7XHJcblx0XHRjb25zdCBmcmFtZTJTd2lwZXIgPSAkKFwiLmZyYW1lMi1zd2lwZXItY2hhcmFjdGVyXCIpO1xyXG5cdFx0Y29uc3QgZnJhbWUyVmlkZW8gPSAkKFwiI2ZyYW1lMi12aWRlby1jb250YWluZXJcIik7XHJcblx0XHRpZiAoaXNJblZpZXcoZnJhbWUySW5mbywgJCh3aW5kb3cpKSkge1xyXG5cdFx0XHRhbmltYXRlQ1NTKGZyYW1lMkluZm8sIFwiYW5pbWF0ZV9fZmFkZUluTGVmdEJpZ1wiKTtcclxuXHRcdFx0YW5pbWF0ZUNTUyhmcmFtZTJTd2lwZXIsIFwiYW5pbWF0ZV9fZmFkZUluVXBCaWdcIik7XHJcblx0XHRcdGFuaW1hdGVDU1MoZnJhbWUyVmlkZW8sIFwiYW5pbWF0ZV9fZmFkZUluUmlnaHRCaWdcIik7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnJhbWUySW5WaWV3KTtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnJhbWUySW5WaWV3KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGZyYW1lM0luVmlldygpIHtcclxuXHRcdGNvbnN0IGZyYW1lM1N3aXBlciA9ICQoXCIuZnJhbWUzLXN3aXBlclwiKTtcclxuXHRcdGlmIChpc0luVmlldyhmcmFtZTNTd2lwZXIsICQod2luZG93KSkpIHtcclxuXHRcdFx0YW5pbWF0ZUNTUyhmcmFtZTNTd2lwZXIsIFwiYW5pbWF0ZV9fZmFkZUluVXBCaWdcIik7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnJhbWUzSW5WaWV3KTtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnJhbWUzSW5WaWV3KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGZyYW1lNEluVmlldygpIHtcclxuXHRcdGNvbnN0IGZyYW1lNEJ1dHRvbkNvbnRhaW5lciA9ICQoXCIjZnJhbWU0LWJ1dHRvbi1jb250YWluZXJcIik7XHJcblx0XHRjb25zdCBmcmFtZTRCdXR0b25zID0gJChcIiNmcmFtZTQtYnV0dG9uLWNvbnRhaW5lciAuZnJhbWU0LWJ1dHRvblwiKTtcclxuXHJcblx0XHRpZiAoaXNJblZpZXcoZnJhbWU0QnV0dG9uQ29udGFpbmVyLCAkKHdpbmRvdykpICYmICQod2luZG93KS53aWR0aCgpID49IDc1MCkge1xyXG5cdFx0XHRmcmFtZTRCdXR0b25zLmhpZGUoKTtcclxuXHRcdFx0ZnJhbWU0QnV0dG9ucy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0JChlbGVtZW50KS5zaG93KCk7XHJcblx0XHRcdFx0XHRhbmltYXRlQ1NTKGVsZW1lbnQsIFwiYW5pbWF0ZV9fZmFkZUluTGVmdEJpZ1wiKTtcclxuXHRcdFx0XHR9LCBpbmRleCAqIDEwMCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZyYW1lNEluVmlldyk7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZyYW1lNEluVmlldyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmcmFtZTVJblZpZXcoKSB7XHJcblx0XHRjb25zdCBmcmFtZTVCdXR0b25Db250YWluZXIgPSAkKFwiI2ZyYW1lNS1idXR0b24tY29udGFpbmVyXCIpO1xyXG5cdFx0Y29uc3QgZnJhbWU1QnV0dG9ucyA9ICQoXCIjZnJhbWU1LWJ1dHRvbi1jb250YWluZXIgLmZyYW1lNS1idXR0b25cIik7XHJcblxyXG5cdFx0aWYgKGlzSW5WaWV3KGZyYW1lNUJ1dHRvbkNvbnRhaW5lciwgJCh3aW5kb3cpKSAmJiAkKHdpbmRvdykud2lkdGgoKSA+PSA3NTApIHtcclxuXHRcdFx0ZnJhbWU1QnV0dG9ucy5oaWRlKCk7XHJcblx0XHRcdGZyYW1lNUJ1dHRvbnMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdCQoZWxlbWVudCkuc2hvdygpO1xyXG5cdFx0XHRcdFx0YW5pbWF0ZUNTUyhlbGVtZW50LCBcImFuaW1hdGVfX2ZhZGVJblVwQmlnXCIpO1xyXG5cdFx0XHRcdH0sIGluZGV4ICogMTAwKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnJhbWU1SW5WaWV3KTtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnJhbWU1SW5WaWV3KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmcmFtZTJJblZpZXcpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZyYW1lMkluVmlldyk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmcmFtZTNJblZpZXcpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZyYW1lM0luVmlldyk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmcmFtZTRJblZpZXcpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZyYW1lNEluVmlldyk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmcmFtZTVJblZpZXcpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZyYW1lNUluVmlldyk7XHJcbn0pO1xyXG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgUFJPTUlTRV9QT0xZRklMTF9VUkwgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wcm9taXNlLXBvbHlmaWxsQDgvZGlzdC9wb2x5ZmlsbC5taW4uanMnO1xudmFyIGFwcGVuZGVkUHJvbWlzZVBvbHlmaWxsID0gZmFsc2U7XG4vKipcbiAqIGlzUHJvbWlzZVJlYWR5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG52YXIgaXNQcm9taXNlUmVhZHkgPSBmdW5jdGlvbiBpc1Byb21pc2VSZWFkeSgpIHtcbiAgcmV0dXJuICEhd2luZG93LlByb21pc2U7XG59O1xuLyoqXG4gKiBwcm9taXNlUG9seWZpbGxcbiAqL1xuXG52YXIgcHJvbWlzZVBvbHlmaWxsID0gZnVuY3Rpb24gcHJvbWlzZVBvbHlmaWxsKCkge1xuICBpZiAoYXBwZW5kZWRQcm9taXNlUG9seWZpbGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNQcm9taXNlUmVhZHkoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBvU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIG9TY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICBvU2NyaXB0LnNyYyA9IFBST01JU0VfUE9MWUZJTExfVVJMO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQob1NjcmlwdCk7XG4gIGFwcGVuZGVkUHJvbWlzZVBvbHlmaWxsID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogZGV0ZXJtaW5lIG5vZGVMaXN0IHR5cGVcbiAqIEBwYXJhbSBub2RlTGlzdFxuICovXG52YXIgaXNOb2RlTGlzdCA9IChub2RlTGlzdCA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobm9kZUxpc3QpID09PSAnW29iamVjdCBOb2RlTGlzdF0nKTtcblxuLyoqXG4gKiBkZXRlcm1pbmUgYW4gYXJyYXkgdHlwZVxuICogQHBhcmFtIGFyclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnZhciBpc0FycmF5ID0gKGFyciA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKS5zbGljZSg4LCAtMSkgPT09ICdBcnJheScpO1xuXG4vKipcbiAqIG5vZGVMaXN0IGludG8gYXJyYXlcbiAqIEBwYXJhbSBub2RlTGlzdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5cbnZhciBub2RlTGlzdFRvQXJyYXkgPSAobm9kZUxpc3QgPT4ge1xuICBpZiAoaXNBcnJheShub2RlTGlzdCkpIHtcbiAgICByZXR1cm4gbm9kZUxpc3Q7XG4gIH1cblxuICBpZiAoIWlzTm9kZUxpc3Qobm9kZUxpc3QpKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheShub2RlTGlzdCk7XG4gIH1cblxuICByZXR1cm4gQXJyYXkuZnJvbSA/IEFycmF5LmZyb20obm9kZUxpc3QpIDogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xufSk7XG5cbnZhciBzSGlkZGVuID0gJ3Zpc2liaWxpdHk6IGhpZGRlbjsnO1xuLyoqXG4gKiBjYWNoZUFuaW1hdGlvbnNcbiAqIEBwYXJhbSBlbGVtZW50c1tIVE1MRWxlbWVudF1cbiAqL1xuXG52YXIgY2FjaGVBbmltYXRpb25zID0gKGZ1bmN0aW9uIChlbGVtZW50cykge1xuICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGVsLmFuaW1hdGlvbkRhdGEgPSB7XG4gICAgICBzdHlsZUNhY2hlOiBlbC5hdHRyaWJ1dGVzLnN0eWxlID8gc0hpZGRlbiArIGVsLnN0eWxlLmNzc1RleHQgOiBzSGlkZGVuLFxuICAgICAgZWZmZWN0OiBlbC5kYXRhc2V0LnN3aXBlckFuaW1hdGlvbiB8fCBlbC5kYXRhc2V0LnN3aXBlckFuaW1hdGlvbk9uY2UgfHwgJycsXG4gICAgICBkdXJhdGlvbjogZWwuZGF0YXNldC5kdXJhdGlvbiB8fCAnLjVzJyxcbiAgICAgIGRlbGF5OiBlbC5kYXRhc2V0LmRlbGF5IHx8ICcuNXMnLFxuICAgICAgb3V0RWZmZWN0OiBlbC5kYXRhc2V0LnN3aXBlck91dEFuaW1hdGlvbiB8fCAnJyxcbiAgICAgIG91dER1cmF0aW9uOiBlbC5kYXRhc2V0Lm91dER1cmF0aW9uIHx8ICcuNXMnLFxuICAgICAgaXNSZWNvdmVyeTogdHJ1ZSxcbiAgICAgIHJ1bk9uY2U6ICEhZWwuZGF0YXNldC5zd2lwZXJBbmltYXRpb25PbmNlXG4gICAgfTtcbiAgICBlbC5zdHlsZS5jc3NUZXh0ID0gZWwuYW5pbWF0aW9uRGF0YS5zdHlsZUNhY2hlO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIGRldGVybWluZSBhIHByb21pc2UgdHlwZVxuICogQHBhcmFtIHByb21pc2VcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG52YXIgaXNQcm9taXNlID0gKHByb21pc2UgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb21pc2UpLnNsaWNlKDgsIC0xKSA9PT0gJ1Byb21pc2UnKTtcblxuLyoqXG4gKiBmdW5jdGlvbiB0byBwcm9taXNlXG4gKiBAcGFyYW0gbm9ybWFsRnVuY3Rpb25cbiAqIEBwYXJhbSB0aW1lb3V0XG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5cbnZhciBmdW5jdGlvblRvUHJvbWlzZSA9IChmdW5jdGlvbiAobm9ybWFsRnVuY3Rpb24pIHtcbiAgdmFyIHRpbWVvdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG5cbiAgaWYgKGlzUHJvbWlzZShub3JtYWxGdW5jdGlvbikpIHtcbiAgICByZXR1cm4gbm9ybWFsRnVuY3Rpb247XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cblxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgbm9ybWFsRnVuY3Rpb24oKTtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXQpO1xuICB9KTtcbn0pO1xuXG52YXIgY29uc3RhbnRzID0ge1xuICAvKipcbiAgICogY2xhc3NOYW1lIGBhbmltYXRlZGAgZm9yIEFuaW1hdGUuY3NzXG4gICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICovXG4gIEFuaW1hdGVDc3NBbmltYXRlZDogWydhbmltYXRlZCcsICdhbmltYXRlX19hbmltYXRlZCddXG59O1xuXG4vKipcbiAqIHJ1bkFuaW1hdGlvbnNcbiAqIEBwYXJhbSBhY3RpdmVFbGVtZW50c1tIVE1MRWxlbWVudF1cbiAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd25bXT59XG4gKi9cblxudmFyIHJ1bkFuaW1hdGlvbnMgPSAoZnVuY3Rpb24gKGFjdGl2ZUVsZW1lbnRzKSB7XG4gIHZhciBydW5BbmltYXRlVGFza3MgPSBhY3RpdmVFbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbC5hbmltYXRpb25EYXRhKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9Qcm9taXNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZWwkY2xhc3NMaXN0O1xuXG4gICAgICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgZWwuc3R5bGUuY3NzVGV4dCArPSBcIiBhbmltYXRpb24tZHVyYXRpb246XCIuY29uY2F0KGVsLmFuaW1hdGlvbkRhdGEuZHVyYXRpb24sIFwiOyAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjpcIikuY29uY2F0KGVsLmFuaW1hdGlvbkRhdGEuZHVyYXRpb24sIFwiOyBhbmltYXRpb24tZGVsYXk6XCIpLmNvbmNhdChlbC5hbmltYXRpb25EYXRhLmRlbGF5LCBcIjsgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6XCIpLmNvbmNhdChlbC5hbmltYXRpb25EYXRhLmRlbGF5LCBcIjtcIik7XG5cbiAgICAgIChfZWwkY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0KS5hZGQuYXBwbHkoX2VsJGNsYXNzTGlzdCwgW2VsLmFuaW1hdGlvbkRhdGEuZWZmZWN0XS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNvbnN0YW50cy5BbmltYXRlQ3NzQW5pbWF0ZWQpKSk7XG5cbiAgICAgIGVsLmFuaW1hdGlvbkRhdGEuaXNSZWNvdmVyeSA9IGZhbHNlO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHJ1bkFuaW1hdGVUYXNrcyk7XG59KTtcblxuLyoqXG4gKiBydW5PdXRBbmltYXRpb25zXG4gKiBAcGFyYW0gYWN0aXZlRWxlbWVudHNbSFRNTEVsZW1lbnRdXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx1bmtub3duW10+fVxuICovXG5cbnZhciBydW5PdXRBbmltYXRpb25zID0gKGZ1bmN0aW9uIChhY3RpdmVFbGVtZW50cykge1xuICB2YXIgcnVuT3V0VGFza3MgPSBhY3RpdmVFbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLmFuaW1hdGlvbkRhdGEuaXNSZWNvdmVyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGlmICghZWwuYW5pbWF0aW9uRGF0YS5vdXRFZmZlY3QpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb25Ub1Byb21pc2UoZnVuY3Rpb24gKCkge1xuICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IGVsLmFuaW1hdGlvbkRhdGEuc3R5bGVDYWNoZTtcbiAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBlbC5zdHlsZS5jc3NUZXh0ICs9IFwiIGFuaW1hdGlvbi1kdXJhdGlvbjpcIi5jb25jYXQoZWwuYW5pbWF0aW9uRGF0YS5vdXREdXJhdGlvbiwgXCI7IC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOlwiKS5jb25jYXQoZWwuYW5pbWF0aW9uRGF0YS5vdXREdXJhdGlvbiwgXCI7XCIpO1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChlbC5hbmltYXRpb25EYXRhLm91dEVmZmVjdCwgJ2FuaW1hdGVkJyk7XG4gICAgfSwgNTAwKTtcbiAgfSk7XG4gIHJldHVybiBQcm9taXNlLmFsbChydW5PdXRUYXNrcyk7XG59KTtcblxuLyoqXG4gKiBjbGVhckFuaW1hdGlvbnNcbiAqIEBwYXJhbSBhY3RpdmVFbGVtZW50c1tIVE1MRWxlbWVudF1cbiAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd25bXT59XG4gKi9cblxudmFyIGNsZWFyQW5pbWF0aW9ucyA9IChmdW5jdGlvbiAoYWN0aXZlRWxlbWVudHMpIHtcbiAgdmFyIHJ1bkNsZWFyVGFza3MgPSBhY3RpdmVFbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLmFuaW1hdGlvbkRhdGEuaXNSZWNvdmVyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGlmIChlbC5hbmltYXRpb25EYXRhLnJ1bk9uY2UpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb25Ub1Byb21pc2UoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9lbCRjbGFzc0xpc3Q7XG5cbiAgICAgIC8vIHJlY292ZXJ5XG4gICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gZWwuYW5pbWF0aW9uRGF0YS5zdHlsZUNhY2hlO1xuXG4gICAgICAoX2VsJGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdCkucmVtb3ZlLmFwcGx5KF9lbCRjbGFzc0xpc3QsIF90b0NvbnN1bWFibGVBcnJheShbZWwuYW5pbWF0aW9uRGF0YS5lZmZlY3QsIGVsLmFuaW1hdGlvbkRhdGEub3V0RWZmZWN0XS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNvbnN0YW50cy5BbmltYXRlQ3NzQW5pbWF0ZWQpKS5maWx0ZXIoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gISFzdHI7XG4gICAgICB9KSkpO1xuXG4gICAgICBlbC5hbmltYXRpb25EYXRhLmlzUmVjb3ZlcnkgPSB0cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHJ1bkNsZWFyVGFza3MpO1xufSk7XG5cbi8qKlxuICogZ2V0U3dpcGVyQ29udGFpbmVyXG4gKiBAcGFyYW0gc3dpcGVyXG4gKiBAcmV0dXJucyB7bnVsbHwqfE9iamVjdH1cbiAqL1xuXG52YXIgZ2V0U3dpcGVyQ29udGFpbmVyID0gZnVuY3Rpb24gZ2V0U3dpcGVyQ29udGFpbmVyKHN3aXBlcikge1xuICBpZiAoc3dpcGVyLmVsKSB7XG4gICAgLy8gc3dpcGVyIDQrXG4gICAgcmV0dXJuIHN3aXBlci5lbDtcbiAgfVxuXG4gIGlmIChzd2lwZXIuY29udGFpbmVyKSB7XG4gICAgLy8gc3dpcGVyIDMueFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgIHJldHVybiBzd2lwZXIuY29udGFpbmVyWzBdO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIHN3aXBlciBpbnN0YW5jZScpO1xufTtcblxudmFyIF9kZWZhdWx0JDEgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfZGVmYXVsdChzd2lwZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgdGhpcy5zd2lwZXIgPSBzd2lwZXI7XG4gICAgdGhpcy5jb250YWluZXIgPSBnZXRTd2lwZXJDb250YWluZXIodGhpcy5zd2lwZXIpO1xuICAgIHRoaXMuYW5pbWF0aW9uRWxlbWVudHMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG5vZGVMaXN0VG9BcnJheSh0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2lwZXItYW5pbWF0aW9uXScpKSksIF90b0NvbnN1bWFibGVBcnJheShub2RlTGlzdFRvQXJyYXkodGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpcGVyLWFuaW1hdGlvbi1vbmNlXScpKSkpO1xuICAgIHRoaXMuYWN0aXZlRWxlbWVudHMgPSBbXTtcbiAgICBjYWNoZUFuaW1hdGlvbnModGhpcy5hbmltYXRpb25FbGVtZW50cyk7XG4gIH1cbiAgLyoqXG4gICAqIGFuaW1hdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bltdPn1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiBcImFuaW1hdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJ1bk91dEFuaW1hdGlvbnMoX3RoaXMuYWN0aXZlRWxlbWVudHMpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbGVhckFuaW1hdGlvbnMoX3RoaXMuYWN0aXZlRWxlbWVudHMpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBydW5BbmltYXRpb25zKF90aGlzLl91cGRhdGVBY3RpdmVFbGVtZW50cygpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB1cGRhdGUgYWN0aXZlRWxlbWVudHNcbiAgICAgKiBAcmV0dXJucyB7W118KltdfCp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVBY3RpdmVFbGVtZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlQWN0aXZlRWxlbWVudHMoKSB7XG4gICAgICB0aGlzLmFjdGl2ZUVsZW1lbnRzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShub2RlTGlzdFRvQXJyYXkodGhpcy5zd2lwZXIuc2xpZGVzW3RoaXMuc3dpcGVyLmFjdGl2ZUluZGV4XS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2lwZXItYW5pbWF0aW9uXScpKSksIF90b0NvbnN1bWFibGVBcnJheShub2RlTGlzdFRvQXJyYXkodGhpcy5zd2lwZXIuc2xpZGVzW3RoaXMuc3dpcGVyLmFjdGl2ZUluZGV4XS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2lwZXItYW5pbWF0aW9uLW9uY2VdJykpKSk7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVFbGVtZW50cztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBudWxsO1xuXG4gICAgaWYgKCFpc1Byb21pc2VSZWFkeSgpKSB7XG4gICAgICBwcm9taXNlUG9seWZpbGwoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIGluaXRcbiAgICogQHBhcmFtIHN3aXBlclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgaWYgKCF0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gbmV3IF9kZWZhdWx0JDEoc3dpcGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHJ1biBhbmltYXRpb25zXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFuaW1hdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghaXNQcm9taXNlUmVhZHkoKSkge1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgfSwgNWUyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9ucy5hbmltYXRlKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufSgpO1xuXG5leHBvcnQgeyBfZGVmYXVsdCBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=