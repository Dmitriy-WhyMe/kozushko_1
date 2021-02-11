(function ($) {
	$(document).ready(function () {
		
		$('.single-item').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			arrows: true,
			prevArrow: $('.arrow_prev_single'),
			nextArrow: $('.arrow_next_single')
		  });
		$('.multiple-items').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			adaptiveHeight: true,
			prevArrow: $('.arrow_prev'),
			nextArrow: $('.arrow_next'),
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
		});

		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			adaptiveHeight: true,
			asNavFor: '.slider-nav'
		  });
		  $('.slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			focusOnSelect: true,
			adaptiveHeight: true,
			prevArrow: $('.arrow_prev_1'),
			nextArrow: $('.arrow_next_1')
		  });



		  $(function() {
			$('#main-menu').smartmenus({
			  mainMenuSubOffsetX: -1,
			  mainMenuSubOffsetY: 4,
			  subMenusSubOffsetX: 6,
			  subMenusSubOffsetY: -6
			});
		  });
		  
		  
		
	});
})(jQuery);


