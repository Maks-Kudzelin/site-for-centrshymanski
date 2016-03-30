$(document).ready(function () {
	$('.carousel-indicators').hide();
	$('.hide_block_all_specialists').hide();
	$('.close_all').hide();
	$('.jcarousel-control-prev').hide();
	$('.jcarousel-control-next').hide();
	
	$('.open_all').click(function(){	

				$('.hide_block_all_specialists').slideDown(1000);
				$('.open_all').hide();
				$('.close_all').show();
				});
	$('.close_all').click(function(){	

				$('.hide_block_all_specialists').slideUp(1000);
				$('.close_all').hide();
				$('.open_all').show();
				});

	});