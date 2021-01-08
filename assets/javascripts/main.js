$(document).ready(function() {
	$(".side-scroll nav a").click(function() {
		var sectionName = $(this).attr("class");
		$("html, body").animate({
			scrollTop: $("section." + sectionName).position().top
		}, 1000);
		$(".side-scroll").addClass("animate");
		setTimeout(function() {
       $(".side-scroll").removeClass("animate");
   }, 1000);

		$(".side-scroll nav a").removeClass("active");
		$(this).addClass("active");
	});
	$(window).scroll(function() {
    var position = $(window).scrollTop();
		var menu = $(".side-scroll")

    $('section.project').each(function() {
        var target = $(this).position().top - $(window).scrollTop();
        var id = $(this).attr('id');

				if ( target <= 0 && !menu.hasClass("animate") ) {
					 $('.side-scroll nav a').removeClass('active');
					 $('.side-scroll nav a.' + id + "").addClass('active');
			 }
    });

		if (position >= 490) {
			$(".side-scroll").addClass("scrolling");
		} else if (position < 490) {
			$(".side-scroll").removeClass("scrolling");
		}
		if (position >= 440) {
			$("body.project-page header").addClass("scrolling");
		} else if (position < 440) {
			$("body.project-page header").removeClass("scrolling");
		}
		if (position >= 100) {
			$("body.home header").addClass("scrolling");
		} else if (position < 100) {
			$("body.home header").removeClass("scrolling");
		}
	});
});
