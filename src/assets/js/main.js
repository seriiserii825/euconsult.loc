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
			responsive: [{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}

			}]
		});

		$('.partners__arrow-left').on('click', function (e) {
			$('#js-partners__slider').slick('slickNext');
		});

		$('.partners__arrow-right').on('click', function (e) {
			$('#js-partners__slider').slick('slickPrev');
		});
	};
	partnersSlider();

	let ideaSlider = function () {
		$('#js-idea__slider').slick({
			arrows: false,
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			responsive: [{
				breakpoint: 1088,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}

			}]
		});

		$('.idea .slider__arrow-left').on('click', function (e) {
			$('#js-idea__slider').slick('slickNext');
		});

		$('.idea .slider__arrow-right').on('click', function (e) {
			$('#js-idea__slider').slick('slickPrev');
		});
	};
	ideaSlider();

	let sandwitch = function () {
		$('.sandwitch-wrap').on('click', function () {
			$('.main-menu').toggleClass('active');

			$(this).find('.sandwitch').toggleClass('sandwitch--active');
		});
	};
	sandwitch();

	let navigation = function () {
		let navigationLi = $('#js-navigation li');
		navigationLi.on('mouseenter', function(){
			if(!$(this).hasClass('active')){
				$(this).find('a').addClass('active');
			}
		});

		navigationLi.on('mouseout', function(){
			if(!$(this).hasClass('active')){
				$(this).find('a').removeClass('active');
			}
		});

		let header = $('#js-header');
		let headerHeight = header.innerHeight();
		let indexIntro = $('#js-index-intro');
		let introHeight = indexIntro.innerHeight();
		let introOffsetTop = indexIntro.offset().top;
		let navigation = $('#js-navigation');
		let navigationList = $('#js-navigation .navigation__list');
		let navigationHeight = navigation.innerHeight();

		let darkSection = headerHeight + introHeight;

		$(document).on('scroll', function () {
			let navigationOffsetTopOnScroll = navigation.offset().top + navigationHeight;

			console.log('navSect: '  + navigationOffsetTopOnScroll);
			console.log('darkSect: ' + darkSection);

			if(navigationOffsetTopOnScroll > (darkSection)){
				navigationList.addClass('light');
			}else{
				navigationList.removeClass('light');
			}

		});

	};
	navigation();
});



