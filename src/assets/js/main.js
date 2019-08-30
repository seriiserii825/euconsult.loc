$(function () {
	/*
		https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
		===========================*/
	$("html").easeScroll({
		frameRate: 60,
		animationTime: 1000,
		stepSize: 90,
		pulseAlgorithm: 1,
		pulseScale: 8,
		pulseNormalize: 1,
		accelerationDelta: 20,
		accelerationMax: 1,
		keyboardSupport: true,
		arrowScroll: 50,
		touchpadSupport: true,
		fixedBackground: true
	});

	let historySlider = function () {
		$('#js-history-slider').slick({
			arrows: false,
			fade: true,
			dots: true
		});

		$('.history__buttons .history-arow--left').on('click', function (e) {
			$('#js-history-slider').slick('slickNext');
		});

		$('.history__buttons .history-arow--right').on('click', function (e) {
			$('#js-history-slider').slick('slickPrev');
		});
	};
	historySlider();

	let partnersSlider = function () {
		$('#js-partners__slider').slick({
			arrows: false,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 2,
		});

		$('.partners__arrow-left').on('click', function (e) {
			$('#js-partners__slider').slick('slickNext');
		});

		$('.partners__arrow-right').on('click', function (e) {
			$('#js-partners__slider').slick('slickPrev');
		});
	};
	partnersSlider();
});



