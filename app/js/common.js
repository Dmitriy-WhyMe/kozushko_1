(function ($) {
	$(document).ready(function () {
		
		$('.single-item').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true
		  });
		$('.multiple-items').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			prevArrow: $('.arrow_prev'),
			nextArrow: $('.arrow_next')
		});

		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav'
		  });
		  $('.slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			focusOnSelect: true,
			prevArrow: $('.arrow_prev_1'),
			nextArrow: $('.arrow_next_1')
		  });
	});
})(jQuery);


