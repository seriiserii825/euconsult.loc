$(function () {
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
});
