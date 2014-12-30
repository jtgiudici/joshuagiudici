$(document).ready(function() {
	$("header .icon.menu").click(function() {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open").addClass("close");
			$("header .icon").addClass("dark");
			$("#nav").css("height", "350px");
		}
		else if ($(this).hasClass("close")) {
			$(this).removeClass("close").addClass("open");
			if ($(document).scrollTop() >= 350 && $(window).width() > 900) {
				$("#nav").css("height", "50px");
				$("header .icon").addClass("dark");
			}
			else if ($(document).scrollTop() >= 262.5 && $(window).width() < 900 && $(window).width() > 600) {
				$("#nav").css("height", "50px");
				$("header .icon").addClass("dark");
			}
			else if ($(document).scrollTop() >= 175 && $(window).width() < 600) {
				$("#nav").css("height", "50px");
				$("header .icon").addClass("dark");
			}
			else if ($(document).scrollTop() < 350) {
				$("#nav").css("height", "0");
				$("header .icon").removeClass("dark");
			}
			
			if ($(document).scrollTop() < 350 && $(window).width() > 900) {
				$("#nav").css("height", "0");
				$("header .icon").removeClass("dark");
			}
			else if ($(document).scrollTop() < 262.5 && $(window).width() < 900 && $(window).width() > 600) {
				$("#nav").css("height", "0");
				$("header .icon").removeClass("dark");
			}
			else if ($(document).scrollTop() < 175 && $(window).width() < 600) {
				$("#nav").css("height", "0");
				$("header .icon").removeClass("dark");
			}
		}
	});
	$("#nav a").click(function() {
		$("header .icon.menu").removeClass("close").addClass("open");
		$("#nav").css("height", "50px");
	});
});

$(document).scroll(function(){
	if ($(document).scrollTop() >= 350 && $(window).width() > 900 && $("#nav").height() < 350) {
		$("#nav").css("height", "50px");
		$("header .icon").addClass("dark");
	}
	else if ($(document).scrollTop() >= 262.5 && $(window).width() < 900 && $(window).width() > 600 && $("#nav").height() < 350) {
		$("#nav").css("height", "50px");
		$("header .icon").addClass("dark");
	}
	else if ($(document).scrollTop() >= 175 && $(window).width() < 600 && $("#nav").height() < 350) {
		$("#nav").css("height", "50px");
		$("header .icon").addClass("dark");
	}
	
	if ($(document).scrollTop() < 350 && $(window).width() > 900 && $("#nav").height() < 350) {
		$("#nav").css("height", "0");
		$("header .icon").removeClass("dark");
	}
	else if ($(document).scrollTop() < 262.5 && $(window).width() < 900 && $(window).width() > 600 && $("#nav").height() < 350) {
		$("#nav").css("height", "0");
		$("header .icon").removeClass("dark");
	}
	else if ($(document).scrollTop() < 175 && $(window).width() < 600 && $("#nav").height() < 350) {
		$("#nav").css("height", "0");
		$("header .icon").removeClass("dark");
	}
});