export function runHeaderMobile() {
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
