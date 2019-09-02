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
		let header = $('#js-header');
		let navigation = $('#js-navigation');
		let navigationList = $('#js-navigation .navigation__list');
		let navigationHeight = navigation.innerHeight();

		let reimbursabile = $("#js-reimbursabile");
		let history = $("#js-history");
		let partners = $("#js-partners");
		let consultation = $("#js-consultation");
		let contacts = $("#js-footer");

		$(document).on('scroll', function () {
			if(
				(navigation.offset().top > reimbursabile.offset().top && navigation.offset().top < (reimbursabile.offset().top + reimbursabile.innerHeight())) ||
				(navigation.offset().top > history.offset().top && navigation.offset().top < (history.offset().top + history.innerHeight())) ||
				(navigation.offset().top > partners.offset().top && navigation.offset().top < (partners.offset().top + partners.innerHeight())) ||
				(navigation.offset().top > consultation.offset().top && navigation.offset().top < (consultation.offset().top + consultation.innerHeight()))
			){
				if(!navigation.hasClass('light')){
					navigation.addClass('light');
				}
			}else{
				navigation.removeClass('light');
			}

			if(
				(navigation.offset().top > reimbursabile.offset().top && navigation.offset().top < (reimbursabile.offset().top + reimbursabile.innerHeight()))
			){
				let iranbursabileA = $('#js-navigation a[href="#js-reimbursabile"]');
				if(!iranbursabileA.hasClass('active')){
					iranbursabileA.addClass('active');
				}
				iranbursabileA.addClass('active');
			} else if((navigation.offset().top > history.offset().top && navigation.offset().top < (history.offset().top + history.innerHeight()))){
				let iranbursabileA = $('#js-navigation a[href="#js-history"]');
				if(!iranbursabileA.hasClass('active')){
					iranbursabileA.addClass('active');
				}
				iranbursabileA.addClass('active');
			} else if((navigation.offset().top > contacts.offset().top && navigation.offset().top < (contacts.offset().top + contacts.innerHeight()))){
				let iranbursabileA = $('#js-navigation a[href="#js-footer"]');
				if(!iranbursabileA.hasClass('active')){
					iranbursabileA.addClass('active');
				}
				iranbursabileA.addClass('active');
			}else {
				$('#js-navigation a').removeClass('active');
			}

		});

		$('#js-navigation a').on('click', function (e) {
			let target = $( $(this).attr('href') );

			if( target.length ) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
			}
		});
	};
	navigation();

	let popup = function () {
		$('.popup-btn').on('click', function (e) {
			e.preventDefault();
			$('#js-popup').fadeIn();
		});

		$('.close_popup').on('click',function (e) {
			e.preventDefault();

			$('#js-popup').fadeOut();
		});
	};
	popup();
});



