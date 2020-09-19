var ww, wh, ws, portfoIndex, projNoCount;

function us() {
	ww = $(window).width(), wh = $(window).height(), ws = $(window).scrollTop()
}

function checkResize() {
	us()
}

function checkFont() {
	return $("body").hasClass("pace-done") ? (fontResult = !0, $(".global-container, #mouse").addClass("--active")) : fontResult = !1, fontResult
}

function mouse_text_move(e) {
	var s = 100 * e,
		o = 100 * (e - 1);
	$(".mouse__text-item").css({
			transform: "translateY(-" + s + "%)"
		}),
		$(".mouse__text-item").removeClass("--active"),
		$(".mouse__text-item").eq(e).addClass("--active"),
		$(".m-indicator .mouse__text-item").eq(e).addClass("--active"),
		$(".proj-wrap__item").css({
			transform: "translateY(-" + o + "%)"
		}),
		$(".proj-wrap__item").removeClass("--active"),
		$(".proj-wrap__item").eq(e - 1).addClass("--active")
}

$(function () {
	checkResize(),
		$(window).resize(checkResize),
		$("body").addClass("hashover"),
		window.addEventListener("touchstart", function () {
			$("body").removeClass("hashover")
		});
	var e = setInterval(function () {
		0 == checkFont() ? checkFont() : clearInterval(e)
	}, 600);
	console.log("Oh, hi Mark!"),
		$(window).mousemove(function (e) {
			if ($("body").hasClass("hashover")) {
				us();
				var s = $("#mouse");
				s.css({
					left: e.pageX - s.outerWidth() / 2,
					top: e.pageY - s.outerHeight() / 2 - ws
				})
			}
		});
	var s, o, a, t = -1,
		r = 0,
		n = ["Senior at UChicago", "Proficient in Python, JS, mySQL, HTML/CSS", "Currently exploring: interactive UI/UX", "Experience in data science and ML", "From Arkansas", "All projects on GitHub", "Resume available upon request"];
	$(".info").on("click", function () {
		if (0 == (t += 1) && $(".mouse__text-item").addClass("--up"), 7 != t ? (r = 100 * t, $(".mouse__text-no span").css({
				transform: "translateY(-" + r + "%)"
			})) : 7 == t && (t = 0, $(".mouse__text-no span").css({
				transform: "translateY(0)"
			}), $(".info").empty()), (s = (ww - event.pageX) / ww * 100) > 46 && ww > 768 && (s = 46), o = event.pageX / ww * 100, a = ww >= 1500 ? (event.pageY - 28) / wh * 100 : ww >= 768 ? (event.pageY - 40) / wh * 100 : event.pageY / wh * 100 - 3, Math.random() >= .5) var e = Math.ceil(8 * Math.random());
		else e = Math.ceil(-8 * Math.random());
		$(this).append('<p style="left:' + o + "vw; top:" + a + "vh; max-width:" + s + "vw; transform:rotate(" + e + 'deg)"> ' + n[t] + "</p>")
	}), $(".btm").mouseenter(function () {
		$("body").hasClass("hashover") && $("#mouse").addClass("--btm")
	}), $(".btm").mouseleave(function () {
		$("#mouse").removeClass("--btm")
	}), $(".btm__a").mouseenter(function () {
		$("body").hasClass("hashover") && ($("#mouse").addClass("--redirect"), $("body").addClass("--black")), $(this).hasClass("--ig") && $("body").hasClass("hashover") ? $(".ig").addClass("--active") : $(this).hasClass("--email") && $("body").hasClass("hashover") && $(".email").addClass("--active")
	}), $(".btm__a").mouseleave(function () {
		$("#mouse").removeClass("--redirect"), $("body").removeClass("--black"), $(".ig, .email").removeClass("--active")
	}), $(".portfo").mouseenter(function () {
		$("#mouse").addClass("--white")
	});
	var i = 0;
	portfoIndex = -1, projNoCount = -1, $(".portfo-wrapper").on("click", function () {
		0 == (portfoIndex += 1) ? (mouse_text_move(1), $(".proj-wrap").removeClass("--active"), $(".proj-slider-wrap").addClass("--active"), $(".top").fadeOut(), projNoCount = -1) : 4 == portfoIndex ? (projNoCount = -1, mouse_text_move(2)) : 11 == portfoIndex ? (projNoCount = -1, mouse_text_move(3), $("body").addClass("--grey")) : 16 == portfoIndex ? (projNoCount = -1, mouse_text_move(4)) : 22 == portfoIndex && (portfoIndex = -1, mouse_text_move(0), $("body").removeClass("--grey"), $(".proj-slider-wrap").removeClass("--active"), $(".mouse__text-no span").css({
			transform: "none"
		}), $(".top").fadeIn(), setTimeout(function () {
			$(".proj-wrap").addClass("--active"), $(".proj-wrap__item").removeClass("--active"), $(".proj-wrap__item").css({
				transform: "none"
			})
		}, 300)), 0 != portfoIndex && 22 != portfoIndex && $(".proj-slider").slick("slickNext"), 22 != portfoIndex && (i = 100 * (projNoCount += 1), $(".mouse__text-item.--active .mouse__text-no span").css({
			transform: "translateY(-" + i + "%)"
		}))
	}), $(".proj-wrap").mouseenter(function () {
		$(".proj-slider-wrap").hasClass("--active") && $("body").hasClass("hashover") && ($(this).addClass("--active"), $(".proj-slider-wrap").addClass("--dim"), $(".proj-wrap__item").css({
			transform: "none"
		}))
	}), $(".proj-wrap").mouseleave(function () {
		if ($(".proj-slider-wrap").hasClass("--active") && $("body").hasClass("hashover")) {
			$(this).removeClass("--active"), $(".proj-slider-wrap").removeClass("--dim");
			var e = 100 * $(".proj-wrap__item.--active").attr("data-index");
			$(".proj-wrap__item").css({
				transform: "translateY(-" + e + "%)"
			})
		}
	}), $(".proj-wrap__item").mouseenter(function () {
		$("body").hasClass("hashover") && ($(".proj-wrap__item").addClass("--dim"), $(this).removeClass("--dim"))
	}), $(".proj-wrap__item").mouseleave(function () {
		$("body").hasClass("hashover") && $(".proj-wrap__item").removeClass("--dim")
	}), $(".proj-slider").slick({
		dots: !1,
		arrows: !1,
		infinite: !0,
		speed: 500,
		slidesToShow: 1,
		fade: !0,
		asNavFor: ".caption-slider",
		adaptiveHeight: !1,
		responsive: [{
			breakpoint: 768,
			settings: {
				adaptiveHeight: !0
			}
		}]
	}), $(".caption-slider").slick({
		dots: !1,
		arrows: !1,
		infinite: !0,
		speed: 500,
		slidesToShow: 1,
		fade: !0,
		asNavFor: ".proj-slider"
	}), $(".proj-slider").on("afterChange", function (e, s, o) {
		$(".slick-current").hasClass("--hasvid") && $(".slick-current .proj-slider__vid").get(0).play()
	}), $(".proj-slider").on("beforeChange", function (e, s, o, a) {
		$(".slick-current").hasClass("--hasvid") && ($(".slick-current .proj-slider__vid").get(0).pause(), $(".slick-current .proj-slider__vid").get(0).currentTime = 0)
	}), $(".proj-wrap__item").on("click", function () {
		$(this).hasClass("--grey") ? $("body").addClass("--grey") : $("body").removeClass("--grey");
		var e = $(this).attr("data-slick");
		mouse_text_move(parseInt($(this).attr("data-index")) + 1), $(".proj-slider").slick("slickGoTo", e), $(".proj-wrap").removeClass("--active"), $(".proj-slider-wrap").removeClass("--dim").addClass("--active"), projNoCount = 0, $(".mouse__text-no span").css({
			transform: "none"
		}), portfoIndex = parseInt(e), $(".top").fadeOut()
	}), $(".top__btn").mouseenter(function () {
		$("body").hasClass("hashover") && ($("#mouse").addClass("--btm"), $("body").addClass("--natural"), $(".portfo-wrapper, .proj-wrap").fadeOut(200), $(".back").addClass("--active"))
	}), $(".top__btn").mouseleave(function () {
		$("#mouse").removeClass("--btm"), $("body").removeClass("--natural"), $(".portfo-wrapper, .proj-wrap").fadeIn(), $(".back").removeClass("--active")
	}), $(".link_a").mouseenter(function () {
		$("body").hasClass("hashover") && $("#mouse").addClass("--btm")
	}), $(".link_a").mouseleave(function () {
		$("#mouse").removeClass("--btm")
	})
});