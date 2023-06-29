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
	document.body.style.height = "100vh";
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

		if (
			(0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.isInView)(frame4ButtonContainer, $(window)) &&
			$(window).width() >= 750
		) {
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

		if (
			(0,_import_assets__WEBPACK_IMPORTED_MODULE_6__.isInView)(frame5ButtonContainer, $(window)) &&
			$(window).width() >= 750
		) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0ZyYW1lMS9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0ZyYW1lMi9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0ZyYW1lMy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0ZyYW1lNS9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlck1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL1BvcHVwL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL0BjeWNqaW1teS9zd2lwZXItYW5pbWF0aW9uL2Rpc3Qvc3dpcGVyLWFuaW1hdGlvbi5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZpZGVvQmcgZnJvbSBcIi4vYXNzZXRzL2ZyYW1lMV9iZ192aWRlby5tcDRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBydW5GcmFtZTEoKSB7XHJcblx0bGV0IGZpcnN0QWN0aW9uU3RhdGUgPSBmYWxzZTtcclxuXHJcblx0Ly8gdmlkZW8gYmdcclxuXHRjb25zdCB2aWRlbyA9ICQoXCIjZnJhbWUxLWNvbnRhaW5lciB2aWRlb1wiKS5nZXQoMCk7XHJcblx0Y29uc3Qgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcclxuXHRzb3VyY2Uuc3JjID0gdmlkZW9CZztcclxuXHR2aWRlby5hcHBlbmRDaGlsZChzb3VyY2UpO1xyXG5cclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGF1ZGlvXHJcblx0Y29uc3QgYXVkaW8gPSAkKFwiYXVkaW9cIikuZ2V0KDApO1xyXG5cdGxldCBtdXNpY1N0YXRlID0gZmFsc2U7XHJcblx0Y29uc3QgbXVzaWNCdXR0b24gPSAkKFwiI2ZyYW1lMS1tdXNpYy1idXR0b25cIik7XHJcblx0Y29uc3QgbXVzaWNCdXR0b25Nb2JpbGUgPSAkKFwiI2ZyYW1lMS1tdXNpYy1idXR0b24tbW9iaWxlXCIpO1xyXG5cclxuXHRtdXNpY0J1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0bXVzaWNTdGF0ZSA9ICFtdXNpY1N0YXRlO1xyXG5cdFx0bXVzaWNCdXR0b24uYXR0cihcImFjdGl2ZVwiLCBtdXNpY1N0YXRlKTtcclxuXHRcdG11c2ljQnV0dG9uTW9iaWxlLmF0dHIoXCJhY3RpdmVcIiwgbXVzaWNTdGF0ZSk7XHJcblx0XHRmaXJzdEFjdGlvblN0YXRlID0gdHJ1ZTtcclxuXHRcdGlmIChtdXNpY1N0YXRlKSB7XHJcblx0XHRcdGF1ZGlvLnBsYXkoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGF1ZGlvLnBhdXNlKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdG11c2ljQnV0dG9uTW9iaWxlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRtdXNpY1N0YXRlID0gIW11c2ljU3RhdGU7XHJcblx0XHRtdXNpY0J1dHRvbi5hdHRyKFwiYWN0aXZlXCIsIG11c2ljU3RhdGUpO1xyXG5cdFx0bXVzaWNCdXR0b25Nb2JpbGUuYXR0cihcImFjdGl2ZVwiLCBtdXNpY1N0YXRlKTtcclxuXHRcdGZpcnN0QWN0aW9uU3RhdGUgPSB0cnVlO1xyXG5cdFx0aWYgKG11c2ljU3RhdGUpIHtcclxuXHRcdFx0YXVkaW8ucGxheSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YXVkaW8ucGF1c2UoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8gY3JlYXRlIGFuIEFycmF5IGZyb20gMSB0byAxMlxyXG5cdGNvbnN0IGV4Y2x1ZGVkRm5LZXlzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTIgfSwgKF8sIGkpID0+IGkgKyAxKS5tYXAoXHJcblx0XHQoaSkgPT4gYEYke2l9YFxyXG5cdCk7XHJcblx0Y29uc3QgZXhjbHVkZWRLZXlzID0gW1xyXG5cdFx0Li4uZXhjbHVkZWRGbktleXMsXHJcblx0XHRcIkNvbnRyb2xcIixcclxuXHRcdFwiU2hpZnRcIixcclxuXHRcdFwiRXNjYXBlXCIsXHJcblx0XHRcIlRhYlwiLFxyXG5cdFx0XCJDYXBzTG9ja1wiLFxyXG5cdFx0XCJPU1wiLFxyXG5cdFx0XCJBbHRcIixcclxuXHRdO1xyXG5cclxuXHRmdW5jdGlvbiB0cmFja0ZpcnN0TW92ZW1lbnQoZSkge1xyXG5cdFx0aWYgKCFmaXJzdEFjdGlvblN0YXRlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUua2V5KTtcclxuXHRcdFx0aWYgKGUudHlwZSA9PT0gXCJrZXlkb3duXCIgJiYgZXhjbHVkZWRLZXlzLmluY2x1ZGVzKGUua2V5KSkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXVkaW8ucGxheSgpO1xyXG5cdFx0XHRmaXJzdEFjdGlvblN0YXRlID0gdHJ1ZTtcclxuXHRcdFx0bXVzaWNTdGF0ZSA9ICFtdXNpY1N0YXRlO1xyXG5cdFx0XHRtdXNpY0J1dHRvbi5hdHRyKFwiYWN0aXZlXCIsIG11c2ljU3RhdGUpO1xyXG5cdFx0XHRtdXNpY0J1dHRvbk1vYmlsZS5hdHRyKFwiYWN0aXZlXCIsIG11c2ljU3RhdGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0cmFja0ZpcnN0TW92ZW1lbnQpO1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdHJhY2tGaXJzdE1vdmVtZW50KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHJhY2tGaXJzdE1vdmVtZW50KTtcclxuXHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdHJhY2tGaXJzdE1vdmVtZW50KTtcclxufVxyXG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gXCJzd2lwZXJcIjtcclxuaW1wb3J0IFN3aXBlckFuaW1hdGlvbiBmcm9tIFwiQGN5Y2ppbW15L3N3aXBlci1hbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBydW5GcmFtZTIoKSB7XHJcblx0Y29uc3Qgc3dpcGVyQW5pbWF0aW9uID0gbmV3IFN3aXBlckFuaW1hdGlvbigpO1xyXG5cdGNvbnNvbGUubG9nKHN3aXBlckFuaW1hdGlvbik7XHJcblx0Y29uc3QgZnJhbWUyQ2hhcmFjdGVyU3dpcGVyID0gbmV3IFN3aXBlcihcIi5mcmFtZTItc3dpcGVyLWNoYXJhY3RlclwiLCB7XHJcblx0XHRkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdGVmZmVjdDogXCJmYWRlXCIsXHJcblx0XHRmYWRlRWZmZWN0OiB7XHJcblx0XHRcdGNyb3NzRmFkZTogdHJ1ZSxcclxuXHRcdH0sXHJcblx0fSk7XHJcblxyXG5cdC8vIGJ1dHRvbnMgYW5kIGRlY29yIGJhbGxzXHJcblx0Y29uc3QgZGVjb3JCYWxscyA9ICQoXCIuZGVjb3ItYmFsbFwiKTtcclxuXHRjb25zdCBtYWxlQnV0dG9uID0gJChcIiNmcmFtZTItbWFsZS1idXR0b25cIik7XHJcblx0Y29uc3QgZmVtYWxlQnV0dG9uID0gJChcIiNmcmFtZTItZmVtYWxlLWJ1dHRvblwiKTtcclxuXHJcblx0bWFsZUJ1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0bWFsZUJ1dHRvbi5hdHRyKFwiYWN0aXZlXCIsIHRydWUpO1xyXG5cdFx0ZmVtYWxlQnV0dG9uLmF0dHIoXCJhY3RpdmVcIiwgZmFsc2UpO1xyXG5cdFx0ZGVjb3JCYWxscy5lcSgwKS5zaG93KCk7XHJcblx0XHRkZWNvckJhbGxzLmVxKDMpLnNob3coKTtcclxuXHRcdGRlY29yQmFsbHMuZXEoMSkuaGlkZSgpO1xyXG5cdFx0ZGVjb3JCYWxscy5lcSgyKS5oaWRlKCk7XHJcblx0XHRmcmFtZTJDaGFyYWN0ZXJTd2lwZXIuc2xpZGVUbygwKTtcclxuXHR9KTtcclxuXHJcblx0ZmVtYWxlQnV0dG9uLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRtYWxlQnV0dG9uLmF0dHIoXCJhY3RpdmVcIiwgZmFsc2UpO1xyXG5cdFx0ZmVtYWxlQnV0dG9uLmF0dHIoXCJhY3RpdmVcIiwgdHJ1ZSk7XHJcblx0XHRkZWNvckJhbGxzLmVxKDApLmhpZGUoKTtcclxuXHRcdGRlY29yQmFsbHMuZXEoMykuaGlkZSgpO1xyXG5cdFx0ZGVjb3JCYWxscy5lcSgxKS5zaG93KCk7XHJcblx0XHRkZWNvckJhbGxzLmVxKDIpLnNob3coKTtcclxuXHRcdGZyYW1lMkNoYXJhY3RlclN3aXBlci5zbGlkZVRvKDEpO1xyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCBTd2lwZXIgZnJvbSBcInN3aXBlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkZyYW1lMygpIHtcclxuXHRjb25zdCBmcmFtZTNTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmZyYW1lMy1zd2lwZXJcIiwge1xyXG5cdFx0ZWZmZWN0OiBcImNvdmVyZmxvd1wiLFxyXG5cdFx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRcdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG5cdFx0Y292ZXJmbG93RWZmZWN0OiB7XHJcblx0XHRcdHJvdGF0ZTogMCxcclxuXHRcdFx0c3RyZXRjaDogMCxcclxuXHRcdFx0ZGVwdGg6IDUwLFxyXG5cdFx0XHRtb2RpZmllcjogMi41LFxyXG5cdFx0fSxcclxuXHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ZWw6IFwiLmZyYW1lMy1zd2lwZXIgLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcblx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdH0sXHJcblx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdG5leHRFbDogXCIuZnJhbWUzLXN3aXBlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcblx0XHRcdHByZXZFbDogXCIuZnJhbWUzLXN3aXBlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCBTd2lwZXIgZnJvbSBcInN3aXBlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkZyYW1lNSgpIHtcclxuXHRjb25zdCBmcmFtZTVTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmZyYW1lNS1zd2lwZXJcIiwge1xyXG5cdFx0ZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcclxuXHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRlbDogXCIuZnJhbWU1LXN3aXBlciAuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0fSxcclxuXHR9KTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcnVuSGVhZGVyTW9iaWxlKCkge1xyXG5cdGNvbnN0IHNlZU1vcmVNb2JpbGUgPSAkKFwiI2hlYWRlci1zZWUtbW9yZS1idXR0b24tbW9iaWxlXCIpO1xyXG5cdGNvbnN0IGhpZGRlbk1vYmlsZSA9ICQoXCIjaGVhZGVyLWhpZGRlbi1tb2JpbGVcIik7XHJcblxyXG5cdC8vIGhpZGRlbk1vYmlsZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdC8vIFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0Ly8gfSk7XHJcblxyXG5cdGxldCBtZW51U3RhdGUgPSBzZWVNb3JlTW9iaWxlLmF0dHIoXCJhY3RpdmVcIikgPT09IFwidHJ1ZVwiO1xyXG5cdGxldCB0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblxyXG5cdHNlZU1vcmVNb2JpbGUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdGlmICh0cmFuc2l0aW9uaW5nKSByZXR1cm47XHJcblx0XHRtZW51U3RhdGUgPSAhbWVudVN0YXRlO1xyXG5cdFx0c2VlTW9yZU1vYmlsZS5hdHRyKFwiYWN0aXZlXCIsIG1lbnVTdGF0ZSk7XHJcblxyXG5cdFx0aWYgKG1lbnVTdGF0ZSkge1xyXG5cdFx0XHR0cmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuXHRcdFx0aGlkZGVuTW9iaWxlLnNsaWRlRG93bigzNTAsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0cmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dHJhbnNpdGlvbmluZyA9IHRydWU7XHJcblx0XHRcdGhpZGRlbk1vYmlsZS5zbGlkZVVwKDM1MCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRpYXRlUG9wdXAoKSB7XHJcblx0Y29uc3QgY2xvc2VCdXR0b25zID0gJChcIi5wb3B1cC1jbG9zZS1idXR0b25cIik7XHJcblx0Y2xvc2VCdXR0b25zLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XHJcblx0XHQkKGVsZW1lbnQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdCQuZmFuY3lib3guY2xvc2UoKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdGNvbnN0IGNhbmNlbEJ1dHRvbiA9ICQoXCIjcG9wdXAtZGFuZ2t5ICNkYW5na3ktY2FuY2VsLWJ1dHRvblwiKTtcclxuXHRjYW5jZWxCdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCQuZmFuY3lib3guY2xvc2UoKTtcclxuXHR9KTtcclxufVxyXG4iLCIvKipcclxuICpcclxuICpcclxuICpcclxuICpcclxuICpcclxuICpcclxuICovXHJcbi8vIHNjYWxlIHJvb3RcclxuXHJcbmltcG9ydCB7IGluaXRpYXRlUG9wdXAgfSBmcm9tIFwiLi9jb21wb25lbnRzL1BvcHVwXCI7XHJcblxyXG5pbXBvcnQgeyBydW5IZWFkZXJNb2JpbGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlck1vYmlsZVwiO1xyXG5pbXBvcnQgeyBydW5GcmFtZTEgfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZyYW1lMVwiO1xyXG5pbXBvcnQgeyBydW5GcmFtZTIsIGNoZWNrSW5WaWV3RnJhbWUyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9GcmFtZTJcIjtcclxuaW1wb3J0IHsgcnVuRnJhbWUzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9GcmFtZTNcIjtcclxuaW1wb3J0IHsgcnVuRnJhbWU1IH0gZnJvbSBcIi4vY29tcG9uZW50cy9GcmFtZTVcIjtcclxuaW1wb3J0IHsgaXNJblZpZXcsIGFuaW1hdGVDU1MgfSBmcm9tIFwiLi9pbXBvcnRfYXNzZXRzXCI7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQvLyByZWFkeVxyXG5cclxuXHQvLyBjdXN0b21cclxuXHRjb25zdCBtb2JpbGVIZWFkZXJDb250YWluZXIgPSAkKFwiI21vYmlsZS1oZWFkZXItY29udGFpbmVyXCIpLmdldCgwKTtcclxuXHRtb2JpbGVIZWFkZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCJ0b3AgbGVmdFwiO1xyXG5cclxuXHQvL1xyXG5cdGNvbnN0IG91dGVyUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0ZXItcm9vdFwiKTtcclxuXHRjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAwO1xyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gMDtcclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dYID0gXCJoaWRkZW5cIjtcclxuXHJcblx0b3V0ZXJSb290LnN0eWxlLndpZHRoID0gXCJmaXQtY29udGVudFwiO1xyXG5cdG91dGVyUm9vdC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG5cdHJvb3Quc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCJ0b3AgbGVmdFwiO1xyXG5cdHJvb3Quc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuXHRsZXQgbW9kZSwgd2lkdGgsIGhlaWdodCwgcmF0aW87XHJcblxyXG5cdGZ1bmN0aW9uIHNjYWxlUm9vdCgpIHtcclxuXHRcdC8vIGNoZWNrIG9uIGV2ZXJ5IHRyaWdnZXJcclxuXHRcdG1vZGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjggPyBcIm1vYmlsZVwiIDogXCJwY1wiO1xyXG5cdFx0d2lkdGggPSByb290Lm9mZnNldFdpZHRoO1xyXG5cdFx0aGVpZ2h0ID0gcm9vdC5vZmZzZXRIZWlnaHQ7XHJcblx0XHRyYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xyXG5cclxuXHRcdGNvbnN0IGRlc2lyZWRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0Y29uc3QgZGVzaXJlZEhlaWdodCA9IGRlc2lyZWRXaWR0aCAvIHJhdGlvO1xyXG5cclxuXHRcdGNvbnN0IHJhdGlvVyA9IGRlc2lyZWRXaWR0aCAvIHdpZHRoO1xyXG5cdFx0Y29uc3QgcmF0aW9IID0gZGVzaXJlZEhlaWdodCAvIGhlaWdodDtcclxuXHJcblx0XHRvdXRlclJvb3Quc3R5bGUud2lkdGggPSBgJHtkZXNpcmVkV2lkdGh9cHhgO1xyXG5cdFx0b3V0ZXJSb290LnN0eWxlLmhlaWdodCA9IGAke2Rlc2lyZWRIZWlnaHR9cHhgO1xyXG5cclxuXHRcdHJvb3Quc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7cmF0aW9XfSwgJHtyYXRpb0h9KWA7XHJcblx0XHRtb2JpbGVIZWFkZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7cmF0aW9XfSwgJHtyYXRpb0h9KWA7XHJcblx0fVxyXG5cclxuXHRpbml0aWF0ZVBvcHVwKCk7XHJcblx0cnVuSGVhZGVyTW9iaWxlKCk7XHJcblx0cnVuRnJhbWUxKCk7XHJcblx0cnVuRnJhbWUyKCk7XHJcblx0cnVuRnJhbWUzKCk7XHJcblx0cnVuRnJhbWU1KCk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBzY2FsZVJvb3QpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNjYWxlUm9vdCk7XHJcblxyXG5cdGZ1bmN0aW9uIGZyYW1lMkluVmlldygpIHtcclxuXHRcdGNvbnN0IGZyYW1lMkluZm8gPSAkKFwiI2ZyYW1lMi1pbmZvXCIpO1xyXG5cdFx0Y29uc3QgZnJhbWUyU3dpcGVyID0gJChcIi5mcmFtZTItc3dpcGVyLWNoYXJhY3RlclwiKTtcclxuXHRcdGNvbnN0IGZyYW1lMlZpZGVvID0gJChcIiNmcmFtZTItdmlkZW8tY29udGFpbmVyXCIpO1xyXG5cdFx0aWYgKGlzSW5WaWV3KGZyYW1lMkluZm8sICQod2luZG93KSkpIHtcclxuXHRcdFx0YW5pbWF0ZUNTUyhmcmFtZTJJbmZvLCBcImFuaW1hdGVfX2ZhZGVJbkxlZnRCaWdcIik7XHJcblx0XHRcdGFuaW1hdGVDU1MoZnJhbWUyU3dpcGVyLCBcImFuaW1hdGVfX2ZhZGVJblVwQmlnXCIpO1xyXG5cdFx0XHRhbmltYXRlQ1NTKGZyYW1lMlZpZGVvLCBcImFuaW1hdGVfX2ZhZGVJblJpZ2h0QmlnXCIpO1xyXG5cclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZyYW1lMkluVmlldyk7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZyYW1lMkluVmlldyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmcmFtZTNJblZpZXcoKSB7XHJcblx0XHRjb25zdCBmcmFtZTNTd2lwZXIgPSAkKFwiLmZyYW1lMy1zd2lwZXJcIik7XHJcblx0XHRpZiAoaXNJblZpZXcoZnJhbWUzU3dpcGVyLCAkKHdpbmRvdykpKSB7XHJcblx0XHRcdGFuaW1hdGVDU1MoZnJhbWUzU3dpcGVyLCBcImFuaW1hdGVfX2ZhZGVJblVwQmlnXCIpO1xyXG5cclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZyYW1lM0luVmlldyk7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZyYW1lM0luVmlldyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmcmFtZTRJblZpZXcoKSB7XHJcblx0XHRjb25zdCBmcmFtZTRCdXR0b25Db250YWluZXIgPSAkKFwiI2ZyYW1lNC1idXR0b24tY29udGFpbmVyXCIpO1xyXG5cdFx0Y29uc3QgZnJhbWU0QnV0dG9ucyA9ICQoXCIjZnJhbWU0LWJ1dHRvbi1jb250YWluZXIgLmZyYW1lNC1idXR0b25cIik7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHRpc0luVmlldyhmcmFtZTRCdXR0b25Db250YWluZXIsICQod2luZG93KSkgJiZcclxuXHRcdFx0JCh3aW5kb3cpLndpZHRoKCkgPj0gNzUwXHJcblx0XHQpIHtcclxuXHRcdFx0ZnJhbWU0QnV0dG9ucy5oaWRlKCk7XHJcblx0XHRcdGZyYW1lNEJ1dHRvbnMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdCQoZWxlbWVudCkuc2hvdygpO1xyXG5cdFx0XHRcdFx0YW5pbWF0ZUNTUyhlbGVtZW50LCBcImFuaW1hdGVfX2ZhZGVJbkxlZnRCaWdcIik7XHJcblx0XHRcdFx0fSwgaW5kZXggKiAxMDApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmcmFtZTRJblZpZXcpO1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmcmFtZTRJblZpZXcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZnJhbWU1SW5WaWV3KCkge1xyXG5cdFx0Y29uc3QgZnJhbWU1QnV0dG9uQ29udGFpbmVyID0gJChcIiNmcmFtZTUtYnV0dG9uLWNvbnRhaW5lclwiKTtcclxuXHRcdGNvbnN0IGZyYW1lNUJ1dHRvbnMgPSAkKFwiI2ZyYW1lNS1idXR0b24tY29udGFpbmVyIC5mcmFtZTUtYnV0dG9uXCIpO1xyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0aXNJblZpZXcoZnJhbWU1QnV0dG9uQ29udGFpbmVyLCAkKHdpbmRvdykpICYmXHJcblx0XHRcdCQod2luZG93KS53aWR0aCgpID49IDc1MFxyXG5cdFx0KSB7XHJcblx0XHRcdGZyYW1lNUJ1dHRvbnMuaGlkZSgpO1xyXG5cdFx0XHRmcmFtZTVCdXR0b25zLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHQkKGVsZW1lbnQpLnNob3coKTtcclxuXHRcdFx0XHRcdGFuaW1hdGVDU1MoZWxlbWVudCwgXCJhbmltYXRlX19mYWRlSW5VcEJpZ1wiKTtcclxuXHRcdFx0XHR9LCBpbmRleCAqIDEwMCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZyYW1lNUluVmlldyk7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZyYW1lNUluVmlldyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnJhbWUySW5WaWV3KTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmcmFtZTJJblZpZXcpO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnJhbWUzSW5WaWV3KTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmcmFtZTNJblZpZXcpO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnJhbWU0SW5WaWV3KTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmcmFtZTRJblZpZXcpO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnJhbWU1SW5WaWV3KTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmcmFtZTVJblZpZXcpO1xyXG59KTtcclxuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIFBST01JU0VfUE9MWUZJTExfVVJMID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcHJvbWlzZS1wb2x5ZmlsbEA4L2Rpc3QvcG9seWZpbGwubWluLmpzJztcbnZhciBhcHBlbmRlZFByb21pc2VQb2x5ZmlsbCA9IGZhbHNlO1xuLyoqXG4gKiBpc1Byb21pc2VSZWFkeVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxudmFyIGlzUHJvbWlzZVJlYWR5ID0gZnVuY3Rpb24gaXNQcm9taXNlUmVhZHkoKSB7XG4gIHJldHVybiAhIXdpbmRvdy5Qcm9taXNlO1xufTtcbi8qKlxuICogcHJvbWlzZVBvbHlmaWxsXG4gKi9cblxudmFyIHByb21pc2VQb2x5ZmlsbCA9IGZ1bmN0aW9uIHByb21pc2VQb2x5ZmlsbCgpIHtcbiAgaWYgKGFwcGVuZGVkUHJvbWlzZVBvbHlmaWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzUHJvbWlzZVJlYWR5KCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgb1NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBvU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgb1NjcmlwdC5zcmMgPSBQUk9NSVNFX1BPTFlGSUxMX1VSTDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLmFwcGVuZENoaWxkKG9TY3JpcHQpO1xuICBhcHBlbmRlZFByb21pc2VQb2x5ZmlsbCA9IHRydWU7XG59O1xuXG4vKipcbiAqIGRldGVybWluZSBub2RlTGlzdCB0eXBlXG4gKiBAcGFyYW0gbm9kZUxpc3RcbiAqL1xudmFyIGlzTm9kZUxpc3QgPSAobm9kZUxpc3QgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5vZGVMaXN0KSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJyk7XG5cbi8qKlxuICogZGV0ZXJtaW5lIGFuIGFycmF5IHR5cGVcbiAqIEBwYXJhbSBhcnJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG52YXIgaXNBcnJheSA9IChhcnIgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikuc2xpY2UoOCwgLTEpID09PSAnQXJyYXknKTtcblxuLyoqXG4gKiBub2RlTGlzdCBpbnRvIGFycmF5XG4gKiBAcGFyYW0gbm9kZUxpc3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuXG52YXIgbm9kZUxpc3RUb0FycmF5ID0gKG5vZGVMaXN0ID0+IHtcbiAgaWYgKGlzQXJyYXkobm9kZUxpc3QpKSB7XG4gICAgcmV0dXJuIG5vZGVMaXN0O1xuICB9XG5cbiAgaWYgKCFpc05vZGVMaXN0KG5vZGVMaXN0KSkge1xuICAgIHJldHVybiBuZXcgQXJyYXkobm9kZUxpc3QpO1xuICB9XG5cbiAgcmV0dXJuIEFycmF5LmZyb20gPyBBcnJheS5mcm9tKG5vZGVMaXN0KSA6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVMaXN0KTtcbn0pO1xuXG52YXIgc0hpZGRlbiA9ICd2aXNpYmlsaXR5OiBoaWRkZW47Jztcbi8qKlxuICogY2FjaGVBbmltYXRpb25zXG4gKiBAcGFyYW0gZWxlbWVudHNbSFRNTEVsZW1lbnRdXG4gKi9cblxudmFyIGNhY2hlQW5pbWF0aW9ucyA9IChmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBlbC5hbmltYXRpb25EYXRhID0ge1xuICAgICAgc3R5bGVDYWNoZTogZWwuYXR0cmlidXRlcy5zdHlsZSA/IHNIaWRkZW4gKyBlbC5zdHlsZS5jc3NUZXh0IDogc0hpZGRlbixcbiAgICAgIGVmZmVjdDogZWwuZGF0YXNldC5zd2lwZXJBbmltYXRpb24gfHwgZWwuZGF0YXNldC5zd2lwZXJBbmltYXRpb25PbmNlIHx8ICcnLFxuICAgICAgZHVyYXRpb246IGVsLmRhdGFzZXQuZHVyYXRpb24gfHwgJy41cycsXG4gICAgICBkZWxheTogZWwuZGF0YXNldC5kZWxheSB8fCAnLjVzJyxcbiAgICAgIG91dEVmZmVjdDogZWwuZGF0YXNldC5zd2lwZXJPdXRBbmltYXRpb24gfHwgJycsXG4gICAgICBvdXREdXJhdGlvbjogZWwuZGF0YXNldC5vdXREdXJhdGlvbiB8fCAnLjVzJyxcbiAgICAgIGlzUmVjb3Zlcnk6IHRydWUsXG4gICAgICBydW5PbmNlOiAhIWVsLmRhdGFzZXQuc3dpcGVyQW5pbWF0aW9uT25jZVxuICAgIH07XG4gICAgZWwuc3R5bGUuY3NzVGV4dCA9IGVsLmFuaW1hdGlvbkRhdGEuc3R5bGVDYWNoZTtcbiAgfSk7XG59KTtcblxuLyoqXG4gKiBkZXRlcm1pbmUgYSBwcm9taXNlIHR5cGVcbiAqIEBwYXJhbSBwcm9taXNlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzUHJvbWlzZSA9IChwcm9taXNlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9taXNlKS5zbGljZSg4LCAtMSkgPT09ICdQcm9taXNlJyk7XG5cbi8qKlxuICogZnVuY3Rpb24gdG8gcHJvbWlzZVxuICogQHBhcmFtIG5vcm1hbEZ1bmN0aW9uXG4gKiBAcGFyYW0gdGltZW91dFxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqL1xuXG52YXIgZnVuY3Rpb25Ub1Byb21pc2UgPSAoZnVuY3Rpb24gKG5vcm1hbEZ1bmN0aW9uKSB7XG4gIHZhciB0aW1lb3V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuXG4gIGlmIChpc1Byb21pc2Uobm9ybWFsRnVuY3Rpb24pKSB7XG4gICAgcmV0dXJuIG5vcm1hbEZ1bmN0aW9uO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIG5vcm1hbEZ1bmN0aW9uKCk7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lb3V0KTtcbiAgfSk7XG59KTtcblxudmFyIGNvbnN0YW50cyA9IHtcbiAgLyoqXG4gICAqIGNsYXNzTmFtZSBgYW5pbWF0ZWRgIGZvciBBbmltYXRlLmNzc1xuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqL1xuICBBbmltYXRlQ3NzQW5pbWF0ZWQ6IFsnYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fYW5pbWF0ZWQnXVxufTtcblxuLyoqXG4gKiBydW5BbmltYXRpb25zXG4gKiBAcGFyYW0gYWN0aXZlRWxlbWVudHNbSFRNTEVsZW1lbnRdXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx1bmtub3duW10+fVxuICovXG5cbnZhciBydW5BbmltYXRpb25zID0gKGZ1bmN0aW9uIChhY3RpdmVFbGVtZW50cykge1xuICB2YXIgcnVuQW5pbWF0ZVRhc2tzID0gYWN0aXZlRWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICghZWwuYW5pbWF0aW9uRGF0YSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvblRvUHJvbWlzZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2VsJGNsYXNzTGlzdDtcblxuICAgICAgZWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIGVsLnN0eWxlLmNzc1RleHQgKz0gXCIgYW5pbWF0aW9uLWR1cmF0aW9uOlwiLmNvbmNhdChlbC5hbmltYXRpb25EYXRhLmR1cmF0aW9uLCBcIjsgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246XCIpLmNvbmNhdChlbC5hbmltYXRpb25EYXRhLmR1cmF0aW9uLCBcIjsgYW5pbWF0aW9uLWRlbGF5OlwiKS5jb25jYXQoZWwuYW5pbWF0aW9uRGF0YS5kZWxheSwgXCI7IC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OlwiKS5jb25jYXQoZWwuYW5pbWF0aW9uRGF0YS5kZWxheSwgXCI7XCIpO1xuXG4gICAgICAoX2VsJGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdCkuYWRkLmFwcGx5KF9lbCRjbGFzc0xpc3QsIFtlbC5hbmltYXRpb25EYXRhLmVmZmVjdF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjb25zdGFudHMuQW5pbWF0ZUNzc0FuaW1hdGVkKSkpO1xuXG4gICAgICBlbC5hbmltYXRpb25EYXRhLmlzUmVjb3ZlcnkgPSBmYWxzZTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBQcm9taXNlLmFsbChydW5BbmltYXRlVGFza3MpO1xufSk7XG5cbi8qKlxuICogcnVuT3V0QW5pbWF0aW9uc1xuICogQHBhcmFtIGFjdGl2ZUVsZW1lbnRzW0hUTUxFbGVtZW50XVxuICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bltdPn1cbiAqL1xuXG52YXIgcnVuT3V0QW5pbWF0aW9ucyA9IChmdW5jdGlvbiAoYWN0aXZlRWxlbWVudHMpIHtcbiAgdmFyIHJ1bk91dFRhc2tzID0gYWN0aXZlRWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC5hbmltYXRpb25EYXRhLmlzUmVjb3ZlcnkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoIWVsLmFuaW1hdGlvbkRhdGEub3V0RWZmZWN0KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9Qcm9taXNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSBlbC5hbmltYXRpb25EYXRhLnN0eWxlQ2FjaGU7XG4gICAgICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgZWwuc3R5bGUuY3NzVGV4dCArPSBcIiBhbmltYXRpb24tZHVyYXRpb246XCIuY29uY2F0KGVsLmFuaW1hdGlvbkRhdGEub3V0RHVyYXRpb24sIFwiOyAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjpcIikuY29uY2F0KGVsLmFuaW1hdGlvbkRhdGEub3V0RHVyYXRpb24sIFwiO1wiKTtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoZWwuYW5pbWF0aW9uRGF0YS5vdXRFZmZlY3QsICdhbmltYXRlZCcpO1xuICAgIH0sIDUwMCk7XG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5hbGwocnVuT3V0VGFza3MpO1xufSk7XG5cbi8qKlxuICogY2xlYXJBbmltYXRpb25zXG4gKiBAcGFyYW0gYWN0aXZlRWxlbWVudHNbSFRNTEVsZW1lbnRdXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx1bmtub3duW10+fVxuICovXG5cbnZhciBjbGVhckFuaW1hdGlvbnMgPSAoZnVuY3Rpb24gKGFjdGl2ZUVsZW1lbnRzKSB7XG4gIHZhciBydW5DbGVhclRhc2tzID0gYWN0aXZlRWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC5hbmltYXRpb25EYXRhLmlzUmVjb3ZlcnkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoZWwuYW5pbWF0aW9uRGF0YS5ydW5PbmNlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9Qcm9taXNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZWwkY2xhc3NMaXN0O1xuXG4gICAgICAvLyByZWNvdmVyeVxuICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IGVsLmFuaW1hdGlvbkRhdGEuc3R5bGVDYWNoZTtcblxuICAgICAgKF9lbCRjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3QpLnJlbW92ZS5hcHBseShfZWwkY2xhc3NMaXN0LCBfdG9Db25zdW1hYmxlQXJyYXkoW2VsLmFuaW1hdGlvbkRhdGEuZWZmZWN0LCBlbC5hbmltYXRpb25EYXRhLm91dEVmZmVjdF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjb25zdGFudHMuQW5pbWF0ZUNzc0FuaW1hdGVkKSkuZmlsdGVyKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuICEhc3RyO1xuICAgICAgfSkpKTtcblxuICAgICAgZWwuYW5pbWF0aW9uRGF0YS5pc1JlY292ZXJ5ID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBQcm9taXNlLmFsbChydW5DbGVhclRhc2tzKTtcbn0pO1xuXG4vKipcbiAqIGdldFN3aXBlckNvbnRhaW5lclxuICogQHBhcmFtIHN3aXBlclxuICogQHJldHVybnMge251bGx8KnxPYmplY3R9XG4gKi9cblxudmFyIGdldFN3aXBlckNvbnRhaW5lciA9IGZ1bmN0aW9uIGdldFN3aXBlckNvbnRhaW5lcihzd2lwZXIpIHtcbiAgaWYgKHN3aXBlci5lbCkge1xuICAgIC8vIHN3aXBlciA0K1xuICAgIHJldHVybiBzd2lwZXIuZWw7XG4gIH1cblxuICBpZiAoc3dpcGVyLmNvbnRhaW5lcikge1xuICAgIC8vIHN3aXBlciAzLnhcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICByZXR1cm4gc3dpcGVyLmNvbnRhaW5lclswXTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBzd2lwZXIgaW5zdGFuY2UnKTtcbn07XG5cbnZhciBfZGVmYXVsdCQxID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX2RlZmF1bHQoc3dpcGVyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9kZWZhdWx0KTtcblxuICAgIHRoaXMuc3dpcGVyID0gc3dpcGVyO1xuICAgIHRoaXMuY29udGFpbmVyID0gZ2V0U3dpcGVyQ29udGFpbmVyKHRoaXMuc3dpcGVyKTtcbiAgICB0aGlzLmFuaW1hdGlvbkVsZW1lbnRzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShub2RlTGlzdFRvQXJyYXkodGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpcGVyLWFuaW1hdGlvbl0nKSkpLCBfdG9Db25zdW1hYmxlQXJyYXkobm9kZUxpc3RUb0FycmF5KHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN3aXBlci1hbmltYXRpb24tb25jZV0nKSkpKTtcbiAgICB0aGlzLmFjdGl2ZUVsZW1lbnRzID0gW107XG4gICAgY2FjaGVBbmltYXRpb25zKHRoaXMuYW5pbWF0aW9uRWxlbWVudHMpO1xuICB9XG4gIC8qKlxuICAgKiBhbmltYXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd25bXT59XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogXCJhbmltYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBydW5PdXRBbmltYXRpb25zKF90aGlzLmFjdGl2ZUVsZW1lbnRzKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xlYXJBbmltYXRpb25zKF90aGlzLmFjdGl2ZUVsZW1lbnRzKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcnVuQW5pbWF0aW9ucyhfdGhpcy5fdXBkYXRlQWN0aXZlRWxlbWVudHMoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogdXBkYXRlIGFjdGl2ZUVsZW1lbnRzXG4gICAgICogQHJldHVybnMge1tdfCpbXXwqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdXBkYXRlQWN0aXZlRWxlbWVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZUFjdGl2ZUVsZW1lbnRzKCkge1xuICAgICAgdGhpcy5hY3RpdmVFbGVtZW50cyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobm9kZUxpc3RUb0FycmF5KHRoaXMuc3dpcGVyLnNsaWRlc1t0aGlzLnN3aXBlci5hY3RpdmVJbmRleF0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpcGVyLWFuaW1hdGlvbl0nKSkpLCBfdG9Db25zdW1hYmxlQXJyYXkobm9kZUxpc3RUb0FycmF5KHRoaXMuc3dpcGVyLnNsaWRlc1t0aGlzLnN3aXBlci5hY3RpdmVJbmRleF0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpcGVyLWFuaW1hdGlvbi1vbmNlXScpKSkpO1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlRWxlbWVudHM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufSgpO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgdGhpcy5hbmltYXRpb25zID0gbnVsbDtcblxuICAgIGlmICghaXNQcm9taXNlUmVhZHkoKSkge1xuICAgICAgcHJvbWlzZVBvbHlmaWxsKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBpbml0XG4gICAqIEBwYXJhbSBzd2lwZXJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIGlmICghdGhpcy5hbmltYXRpb25zKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IG5ldyBfZGVmYXVsdCQxKHN3aXBlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBydW4gYW5pbWF0aW9uc1xuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbmltYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIWlzUHJvbWlzZVJlYWR5KCkpIHtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIH0sIDVlMik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbnMuYW5pbWF0ZSgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oKTtcblxuZXhwb3J0IHsgX2RlZmF1bHQgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9