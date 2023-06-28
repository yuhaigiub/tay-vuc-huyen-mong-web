export function initiatePopup() {
	const closeButtons = $(".popup-close-button");
	closeButtons.each(function (index, element) {
		$(element).on("click", function (event) {
			$.fancybox.close();
		});
	});
	const cancelButton = $("#popup-dangky #dangky-cancel-button");
	console.log("cancelButton");
	cancelButton.on("click", function (event) {
		console.log("hello");
		$.fancybox.close();
	});
}
