$(document).ready(function () {
	$('.carousel-indicators').hide();
	$('.hide_block_all_specialists').hide();
	$('.close_all').hide();
	$('.list-services').hide();

	$('.title_about_us').hide();
	$('.all_about_us_big_block').hide();
	$('.title_all_services').hide();
	$('.all_mini_blocks').hide();
	$('.our_specialists_block').hide();
	$('.all_big_recalls').hide();
	$('.time_work').hide();


	$('.main_text_about_us').hide();
	$('.main_text_services').hide();
	$('.main_text_news').hide();
	$('.main_text_recalls').hide();
	$('.main_internal_service_page').hide();
	$('.scroll_top_block').hide();

	$('.list-services').fadeIn(2000);
	$('.main_text_about_us').fadeIn(2000);
	$('.main_text_services').fadeIn(2000);
	$('.main_text_news').fadeIn(2000);
	$('.main_text_recalls').fadeIn(2000);
	$('.main_internal_service_page').fadeIn(2000);

	/* slide all blocks*/
	$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
	$('.title_about_us').slideDown(1000);

    }
    
    if ($(this).scrollTop() > 200) {
     $('.all_about_us_big_block').fadeIn(2000);
    }
	if ($(this).scrollTop() > 400) {
	$('.title_all_services').slideDown(1000);
    }

    if ($(this).scrollTop() > 600) {
     $('.all_mini_blocks').fadeIn(2000);
    }
     if ($(this).scrollTop() > 700) {
     $('.our_specialists_block').fadeIn(2000);
    }
      if ($(this).scrollTop() > 1000) {
     $('.all_big_recalls').fadeIn(1000);
    }
    });
	/* END slide all blocks*/

	/*scroll_top to 0*/
	$(function() {
    $('.scroll_top_block').click(function(){
       $('html, body').animate({scrollTop:0}, 'slow');
      
   });
});

	$(window).scroll(function () {
	if ($(this).scrollTop() < 200) {
	$('.scroll_top_block').fadeOut(1000);

    } 
    if ($(this).scrollTop() > 200) {
	$('.scroll_top_block').fadeIn(500);

    } 
    });
    /*End scroll_top to 0*/

	/* Open all specialists*/
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
/* END Open all specialists*/

/* Hover block time_work of specialists*/
$('.specialist').hover(
      function () {
        $(this).children('.time_work').slideDown(500);
      },
      function () {
        $(this).children('.time_work').slideUp(500);
      }
    );
/* END Hover block time_work of specialists*/

$('input').focus(function(){
		alt = $(this).attr('alt');
		val = $(this).attr('value');
		if (val == alt) $(this).attr('value', '');
	});

	$('input').blur(function(){
		alt = $(this).attr('alt');
		val = $(this).attr('value');
		if (val == '') $(this).attr('value', alt);
	});


});


	