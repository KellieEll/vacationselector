$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		var filter = button.data("filter");

		button.toggleClass("active");

		if (filter == "reset") {
			$(".item.active").removeClass("active");
			$(".filter.active").removeClass("active");
		} else {
			$(".item.active").removeClass("active");

			$(".filter.active").each(function () {
				var this_filter = $(this);
				var filter = this_filter.data("filter");
				$("." + filter).addClass("active");
			});
		}
	});
});


//needs to have another condition. For everything that is active needs to show.//
