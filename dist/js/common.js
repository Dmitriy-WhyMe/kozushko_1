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
			adaptiveHeight: true,
			prevArrow: $('.arrow_prev'),
			nextArrow: $('.arrow_next')
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
		  
		  // SmartMenus mobile menu toggle button
		  $(function() {
			var $mainMenuState = $('#main-menu-state');
			if ($mainMenuState.length) {
			  // animate mobile menu
			  $mainMenuState.change(function(e) {
				var $menu = $('#main-menu');
				if (this.checked) {
				  $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
				} else {
				  $menu.show().slideUp(250, function() { $menu.css('display', ''); });
				}
			  });
			  // hide mobile menu beforeunload
			  $(window).bind('beforeunload unload', function() {
				if ($mainMenuState[0].checked) {
				  $mainMenuState[0].click();
				}
			  });
			}
		  });
		
	});
})(jQuery);


