$(document).ready(function() {
	$(".icon.menu").click(function() {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open").addClass("close");
			$("header nav").addClass("full");
		}
		else if ($(this).hasClass("close")) {
			$(this).removeClass("close").addClass("open");
			$("header nav").removeClass("full");
		}
	});

	$("nav.controls a").click(function() {
		if ($(this).hasClass("next") && !$(".desktop-screen .slide:visible").next(".slide").length == 0) {
			$(".desktop-screen .slide:visible").hide().next(".slide").show();
			$(".iphone-screen .slide:visible").hide().next(".slide").show();
			number = $(".desktop-screen .slide:visible").index() + 1;
			$("nav.dots .dot").removeClass("active");
			$("nav.dots .dot:nth-child(" + number + ")").addClass("active");
		}
		else if ($(this).hasClass("next") && $(".desktop-screen .slide:visible").next(".slide").length == 0) {
			$(".desktop-screen .slide:visible").hide();
			$(".iphone-screen .slide:visible").hide()
			$(".desktop-screen .slide:first-child").show();
			$(".iphone-screen .slide:first-child").show();
			number = $(".desktop-screen .slide:visible").index() + 1;
			$("nav.dots .dot").removeClass("active");
			$("nav.dots .dot:nth-child(" + number + ")").addClass("active");
		}
		else if ($(this).hasClass("prev") && !$(".desktop-screen .slide:visible").prev(".slide").length == 0) {
			$(".desktop-screen .slide:visible").hide().prev(".slide").show();
			$(".iphone-screen .slide:visible").hide().prev(".slide").show();
			number = $(".desktop-screen .slide:visible").index() + 1;
			$("nav.dots .dot").removeClass("active");
			$("nav.dots .dot:nth-child(" + number + ")").addClass("active");
		}
		else if ($(this).hasClass("prev") && $(".desktop-screen .slide:visible").prev(".slide").length == 0) {
			$(".desktop-screen .slide:visible").hide();
			$(".iphone-screen .slide:visible").hide();
			$(".desktop-screen .slide:last-child").show();
			$(".iphone-screen .slide:last-child").show();
			number = $(".desktop-screen .slide:visible").index() + 1;
			$("nav.dots .dot").removeClass("active");
			$("nav.dots .dot:nth-child(" + number + ")").addClass("active");
		}
	});

	$("nav.dots .dot").click(function() {
		number = $(this).index() + 1;
		$("nav.dots .dot").removeClass("active");
		$(this).addClass("active");
		$(".desktop-screen .slide:visible").hide();
		$(".iphone-screen .slide:visible").hide();
		$(".desktop-screen .slide:nth-child(" + number + ")").show();
		$(".iphone-screen .slide:nth-child(" + number + ")").show();
	});

	$('.desktop-screen.scroll').on('scroll', function () {
		$('.iphone-screen.scroll').scrollTop($(this).scrollTop());
	});
	$('.iphone-screen.scroll').on('scroll', function () {
		$('.desktop-screen.scroll').scrollTop($(this).scrollTop());
	});

	$.fn.scrollView = function () {
		return this.each(function () {
		$('html, body').animate({
			scrollTop: $(this).offset().top
		}, 1000);
		});
	}
	$("header nav a").click(function() {
		if ($(this).hasClass("work")) {
			$('section.work').scrollView();
		}
		else if ($(this).hasClass("contact")) {
			$('section.contact').scrollView();
		}

	});
	$("body.home header nav a").click(function() {
		if ($(this).hasClass("about")) {
			$('section.about').scrollView();
		}
		else if ($(this).hasClass("skills")) {
			$('section.skills').scrollView();
		}
	});

	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		nextEffect: "none",
		prevEffect: "none"
	});
});
