(function ($) {
	$(document).ready(function () {
		
		$('.single-item').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			arrows: true,
			prevArrow: '<div class="arrow_prev_single"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 14L3 8L9 2" stroke="#44B2FC" stroke-width="3"/></svg></div>',
			nextArrow: '<div class="arrow_next_single"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14L8 8L2 2" stroke="#44B2FC" stroke-width="3"/></svg></div>'
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
				  breakpoint: 1600,
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

		jQuery(document).ready(function($) {
			$('.popup-content').magnificPopup({
				type: 'inline'
			});
		});

		
		  
		
	});
})(jQuery);


