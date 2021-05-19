$(function () {
	var actionContainer = $(".app");

  // Test
  $("body").css("background-color", "rgba(0, 0, 0, 0.2)");
  actionContainer.html('<object type="text/html" data="static/tablet/app.html" style="position: absolute; box-sizing: border-box; width: 100%; height: 100%"></object>');
  actionContainer.fadeIn();
  // End Test

	window.addEventListener("message", function (event) {
		var item = event.data;

		if (item.showTablet) {
			$("body").css("background-color", "rgba(0, 0, 0, 0.2)");
      actionContainer.html('<object type="text/html" data="static/tablet/app.html"></object>');
			actionContainer.fadeIn();
		} else {
      $("body").css("background-color", "transparent");
			actionContainer.fadeOut();
    }
	});
});
