;(function($) {
	"use strict";

	$('.ba-tab').on('click', function(e){
		$('.ba-tab').removeClass('show');
		$(this).addClass('show');

		var name = $(this).find('a').attr('href');

		$('.ba-far__body').removeClass('show');
		$(name).addClass('show');
	});










})(jQuery);

