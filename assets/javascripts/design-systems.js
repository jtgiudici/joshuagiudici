$(document).ready(function() {
	$("nav#mainNav li:first-child a").addClass("active")

	$("nav#mainNav li a").click(function() {
		var sectionName = $(this).attr("class");
		$("#main").animate({
			scrollTop: $("section#" + sectionName + "").position().top
		}, 250);
	});

	$("#main").scroll(function() {
		var sliderDistance = Math.abs($('.slider').position().top);
		$("section").each(function() {
			var sectionDistance = $(this).position().top - 60
			var sectionHeight = $(this).height()
			if ( sliderDistance >= sectionDistance && sliderDistance < sectionDistance + sectionHeight) {
				var sectionName = $(this).attr("id");
				$("nav#mainNav li a").removeClass("active");
				$("nav#mainNav li a." + sectionName + "").addClass("active");
			}
		});
	});

	$("#sidebar .sub-menu a.active").each(function() {
		var el = $(this).parents(".sub-menu").find("ul");
				curHeight = el.height(),
				autoHeight = el.css('height', 'auto').height();
		el.height(curHeight).height(autoHeight);
		$(this).parents("li").find("a.expand").addClass("open");
	});
	$("#sidebar a.expand").click(function() {
		$("#sidebar .sub-menu ul").css("height", "0");
		$("#sidebar a.expand").removeClass("open");

		var el = $(this).next(".sub-menu").find("ul");
				curHeight = el.height(),
				autoHeight = el.css('height', 'auto').height();
		el.height(curHeight).height(autoHeight);
		$(this).addClass("open");
	});
});
