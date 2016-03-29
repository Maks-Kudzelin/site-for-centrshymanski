$(document).ready(function () {
	$('.carousel-indicators').hide();
	$('.hide_block_all_specialists').hide();



	$('.open_all').click(function(){	

				$('.hide_block_all_specialists').slideDown(1000);
				$('.open_all').text('Закрыть всех');
				});


	});