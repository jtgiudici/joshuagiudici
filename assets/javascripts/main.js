$(document).ready(function() {
	$("#header .icon.menu").click(function() {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open").addClass("close");
			$("#header .icon").addClass("dark");
			$("#nav").css("height", "350px");
		}
		else if ($(this).hasClass("close")) {
			$(this).removeClass("close").addClass("open");
			$("#nav").css("height", "0");
			$("#header .icon").removeClass("dark");
			
			if ($(document).scrollTop() >= $("#about").offset().top) {
				$("header .icon").addClass("dark");
			}
			else if ($(document).scrollTop() < $("#about").offset().top) {
				$("header .icon").removeClass("dark");
			}
			if ($(document).scrollTop() >= $("#skills").offset().top) {
				$("header .icon").removeClass("dark");
			}
		}
	});
	$("#nav a").click(function() {
		$("#header .icon.menu").removeClass("close").addClass("open");
		$("#nav").css("height", "0");
		$("#header .icon").removeClass("dark");
		if ($(this).hasClass("about")) {
			$("#header .icon").addClass("dark");
		}
	});
});
$(document).scroll(function(){
	if ($("#nav").height() < 1) {
		if ($(this).scrollTop() >= $("#about").offset().top) {
			$("header .icon").addClass("dark");
		}
		else if ($(this).scrollTop() < $("#about").offset().top) {
			$("header .icon").removeClass("dark");
		}
		if ($(this).scrollTop() >= $("#skills").offset().top) {
			$("header .icon").removeClass("dark");
		}
	}
});

