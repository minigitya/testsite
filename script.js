$('.holder section:nth-child(1) .title, .slider, .slider-nav, .bottom-scroll').animate({opacity: 1}, 1500);
$(document).ready(function(){
	
	$('form').submit(function(){
		$(this).addClass('current');
		$.ajax({
			type: "POST",
			url: "form.php",
			data: $(this).serialize(),
			dataType: 'script'
		});
		
		return false;
	});
	
	$('header .callback, header .order').click(function(){
		$('.popup-form').css({opacity: 0, display: 'block'});
		$('.popup-form').animate({opacity: 1}, 500);
		return false;
	});
	
	$('.popup-form .close').click(function(){
		$('.popup-form').animate({opacity: 0}, 500, function(){
			$('.popup-form').toggle();
		});
	});
	
	var positions = {
		'1': {
			'opacity': 0,
			'margin-left': '-100%'
		}
	};
	
	/*pages scroll*/
	$(".holder").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 900,
		loop: true
	});
	
	/* uberslider! */
	$('.slider-nav a.left').click(function(){
		$('.autoimage').remove();
		$('.p-shadow').remove();
		$('body').append('<img class="autoimage" src="'+$('.slider li:last-child img').attr('src')+'"><img class="autoimage" src="'+$('.slider li:nth-child(1) img').attr('src')+'"><img class="autoimage" src="'+$('.slider li:nth-child(2) img').attr('src')+'"><img class="autoimage" src="'+$('.slider li:nth-child(3) img').attr('src')+'"><img class="autoimage" src="'+$('.slider li:nth-child(4) img').attr('src')+'"><img class="autoimage" src="'+$('.slider li:nth-child(5) img').attr('src')+'"><div class="p-shadow"></div><div class="p-shadow"></div><div class="p-shadow"></div><div class="p-shadow"></div><div class="p-shadow"></div><div class="p-shadow"></div>');
		
		$('.slider img').css({opacity: 0});
		$('.slider div').css({opacity: 0});
		
$('body').find('.autoimage').eq(0).css({left: 0, top: $('.slider li:nth-child(1) img').offset().top, width: $('.slider li:nth-child(1) img').width(), height: $('.slider li:nth-child(1) img').height(), opacity: 0});
$('body').find('.autoimage').eq(1).css({left: $('.slider li:nth-child(1) img').offset().left, top: $('.slider li:nth-child(1) img').offset().top, width: $('.slider li:nth-child(1) img').width(), height: $('.slider li:nth-child(1) img').height()});
$('body').find('.autoimage').eq(2).css({left: $('.slider li:nth-child(2) img').offset().left, top: $('.slider li:nth-child(2) img').offset().top, width: $('.slider li:nth-child(2) img').width(), height: $('.slider li:nth-child(2) img').height()});
$('body').find('.autoimage').eq(3).css({left: $('.slider li:nth-child(3) img').offset().left, top: $('.slider li:nth-child(3) img').offset().top ,width: $('.slider li:nth-child(3) img').width(), height: $('.slider li:nth-child(3) img').height()});
$('body').find('.autoimage').eq(4).css({left: $('.slider li:nth-child(4) img').offset().left, top: $('.slider li:nth-child(4) img').offset().top, width: $('.slider li:nth-child(4) img').width(), height: $('.slider li:nth-child(4) img').height()});
$('body').find('.autoimage').eq(5).css({left: $('.slider li:nth-child(5) img').offset().left, top: $('.slider li:nth-child(5) img').offset().top, width: $('.slider li:nth-child(5) img').width(), height: $('.slider li:nth-child(5) img').height()});
		
$('body').find('.p-shadow').eq(0).css({left: 0, top: $('.slider li:nth-child(1) div').offset().top, width: $('.slider li:nth-child(1) div').innerWidth(), height: $('.slider li:nth-child(1) div').innerHeight(), opacity: 0});
$('body').find('.p-shadow').eq(1).css({left: $('.slider li:nth-child(1) div').offset().left, top: $('.slider li:nth-child(1) div').offset().top, width: $('.slider li:nth-child(1) div').innerWidth(), height: $('.slider li:nth-child(1) div').innerHeight()});
$('body').find('.p-shadow').eq(2).css({left: $('.slider li:nth-child(2) div').offset().left, top: $('.slider li:nth-child(2) div').offset().top, width: $('.slider li:nth-child(2) div').innerWidth(), height: $('.slider li:nth-child(2) div').innerHeight()});
$('body').find('.p-shadow').eq(3).css({left: $('.slider li:nth-child(3) div').offset().left, top: $('.slider li:nth-child(3) div').offset().top ,width: $('.slider li:nth-child(3) div').innerWidth(), height: $('.slider li:nth-child(3) div').innerHeight()});
$('body').find('.p-shadow').eq(4).css({left: $('.slider li:nth-child(4) div').offset().left, top: $('.slider li:nth-child(4) div').offset().top, width: $('.slider li:nth-child(4) div').innerWidth(), height: $('.slider li:nth-child(4) div').innerHeight()});
$('body').find('.p-shadow').eq(5).css({left: $('.slider li:nth-child(5) div').offset().left, top: $('.slider li:nth-child(5) div').offset().top, width: $('.slider li:nth-child(5) div').innerWidth(), height: $('.slider li:nth-child(5) div').innerHeight()});
		

$('body').find('.p-shadow').eq(0).animate({left: $('.slider li:nth-child(1) div').offset().left, top: $('.slider li:nth-child(1) div').offset().top, width: $('.slider li:nth-child(1) div').innerWidth(), height: $('.slider li:nth-child(1) div').innerHeight()}, 300);
$('body').find('.p-shadow').eq(1).animate({left: $('.slider li:nth-child(2) div').offset().left, top: $('.slider li:nth-child(2) div').offset().top, width: $('.slider li:nth-child(2) div').innerWidth(), height: $('.slider li:nth-child(2) div').innerHeight()}, 300);
$('body').find('.p-shadow').eq(2).animate({left: $('.slider li:nth-child(3) div').offset().left, top: $('.slider li:nth-child(3) div').offset().top, width: $('.slider li:nth-child(3) div').innerWidth(), height: $('.slider li:nth-child(3) div').innerHeight()}, 300);
$('body').find('.p-shadow').eq(3).animate({left: $('.slider li:nth-child(4) div').offset().left, top: $('.slider li:nth-child(4) div').offset().top, width: $('.slider li:nth-child(4) div').innerWidth(), height: $('.slider li:nth-child(4) div').innerHeight()}, 300);
$('body').find('.p-shadow').eq(4).animate({left: $('.slider li:nth-child(5) div').offset().left, top: $('.slider li:nth-child(5) div').offset().top, width: $('.slider li:nth-child(5) div').innerWidth(), height: $('.slider li:nth-child(5) div').innerHeight()}, 300);
$('body').find('.p-shadow').eq(5).animate({right: 0, top: $('.slider li:nth-child(5) div').offset().top, width: $('.slider li:nth-child(5) div').innerWidth(), height: $('.slider li:nth-child(5) div').innerHeight(), opacity: 0
}, 300);	


$('body').find('.autoimage').eq(0).animate({left: $('.slider li:nth-child(1) img').offset().left, top: $('.slider li:nth-child(1) img').offset().top, width: $('.slider li:nth-child(1) img').width(), height: $('.slider li:nth-child(1) img').height(), opacity: 1}, 300);
$('body').find('.autoimage').eq(1).animate({left: $('.slider li:nth-child(2) img').offset().left, top: $('.slider li:nth-child(2) img').offset().top, width: $('.slider li:nth-child(2) img').width(), height: $('.slider li:nth-child(2) img').height()}, 300);
$('body').find('.autoimage').eq(2).animate({left: $('.slider li:nth-child(3) img').offset().left, top: $('.slider li:nth-child(3) img').offset().top, width: $('.slider li:nth-child(3) img').width(), height: $('.slider li:nth-child(3) img').height()}, 300);
$('body').find('.autoimage').eq(3).animate({left: $('.slider li:nth-child(4) img').offset().left, top: $('.slider li:nth-child(4) img').offset().top, width: $('.slider li:nth-child(4) img').width(), height: $('.slider li:nth-child(4) img').height()}, 300);
$('body').find('.autoimage').eq(4).animate({left: $('.slider li:nth-child(5) img').offset().left, top: $('.slider li:nth-child(5) img').offset().top, width: $('.slider li:nth-child(5) img').width(), height: $('.slider li:nth-child(5) img').height()}, 300);
$('body').find('.autoimage').eq(5).animate({left: Number($(document).innerWidth())-Number($('.slider li:nth-child(5) div').innerWidth()), top: $('.slider li:nth-child(5) img').offset().top, width: $('.slider li:nth-child(5) img').width(), height: $('.slider li:nth-child(5) img').height(), opacity: 0
}, 300, function(){
			$('.slider').prepend($('.slider li:last-child'));
			$('.slider img').css({opacity: 1});
			$('.slider div').css({opacity: 1});
			$('.autoimage').remove();
			$('.p-shadow').remove();
		});
		
		
	});
	
	$('.slider-nav a.right').click(function(){
		$('.autoimage').remove();
		$('.p-shadow').remove();
		
		if($('.slider li').length > 5){
			var lImg = $('.slider li:nth-child(6) img').attr('src');
		}else{
			var lImg = $('.slider li:first-child img').attr('src');
		}
		
		$('body').append('<img class="autoimage" src="'+$('.slider li:nth-child(1) img').attr('src')+'"><img class="autoimage" src="'+$('.slider li:nth-child(2) img').attr('src')+'"><img class="autoimage" src="'+$('.slider li:nth-child(3) img').attr('src')+'"><img class="autoimage" src="'+$('.slider li:nth-child(4) img').attr('src')+'"><img class="autoimage" src="'+$('.slider li:nth-child(5) img').attr('src')+'"><img class="autoimage" src="'+lImg+'"><div class="p-shadow"></div><div class="p-shadow"></div><div class="p-shadow"></div><div class="p-shadow"></div><div class="p-shadow"></div><div class="p-shadow"></div>');
		
		$('.slider img').css({opacity: 0});
		$('.slider div').css({opacity: 0});
		
$('body').find('.autoimage').eq(0).css({left: $('.slider li:nth-child(1) img').offset().left, top: $('.slider li:nth-child(1) img').offset().top, width: $('.slider li:nth-child(1) img').width(), height: $('.slider li:nth-child(1) img').height()});
$('body').find('.autoimage').eq(1).css({left: $('.slider li:nth-child(2) img').offset().left, top: $('.slider li:nth-child(2) img').offset().top, width: $('.slider li:nth-child(2) img').width(), height: $('.slider li:nth-child(2) img').height()});
$('body').find('.autoimage').eq(2).css({left: $('.slider li:nth-child(3) img').offset().left, top: $('.slider li:nth-child(3) img').offset().top, width: $('.slider li:nth-child(3) img').width(), height: $('.slider li:nth-child(3) img').height()});
$('body').find('.autoimage').eq(3).css({left: $('.slider li:nth-child(4) img').offset().left, top: $('.slider li:nth-child(4) img').offset().top ,width: $('.slider li:nth-child(4) img').width(), height: $('.slider li:nth-child(4) img').height()});
$('body').find('.autoimage').eq(4).css({left: $('.slider li:nth-child(5) img').offset().left, top: $('.slider li:nth-child(5) img').offset().top, width: $('.slider li:nth-child(5) img').width(), height: $('.slider li:nth-child(5) img').height()});
$('body').find('.autoimage').eq(5).css({left: Number($(document).width())-Number($('.slider li:nth-child(5) img').width()), top: $('.slider li:nth-child(5) img').offset().top, width: $('.slider li:nth-child(5) img').width(), height: $('.slider li:nth-child(5) img').height(), opacity: 0});
		
$('body').find('.p-shadow').eq(0).css({left: $('.slider li:nth-child(1) div').offset().left, top: $('.slider li:nth-child(1) div').offset().top, width: $('.slider li:nth-child(1) div').innerWidth(), height: $('.slider li:nth-child(1) div').innerHeight()});
$('body').find('.p-shadow').eq(1).css({left: $('.slider li:nth-child(2) div').offset().left, top: $('.slider li:nth-child(2) div').offset().top, width: $('.slider li:nth-child(2) div').innerWidth(), height: $('.slider li:nth-child(2) div').innerHeight()});
$('body').find('.p-shadow').eq(2).css({left: $('.slider li:nth-child(3) div').offset().left, top: $('.slider li:nth-child(3) div').offset().top, width: $('.slider li:nth-child(3) div').innerWidth(), height: $('.slider li:nth-child(3) div').innerHeight()});
$('body').find('.p-shadow').eq(3).css({left: $('.slider li:nth-child(4) div').offset().left, top: $('.slider li:nth-child(4) div').offset().top ,width: $('.slider li:nth-child(4) div').innerWidth(), height: $('.slider li:nth-child(4) div').innerHeight()});
$('body').find('.p-shadow').eq(4).css({left: $('.slider li:nth-child(5) div').offset().left, top: $('.slider li:nth-child(5) div').offset().top, width: $('.slider li:nth-child(5) div').innerWidth(), height: $('.slider li:nth-child(5) div').innerHeight()});
$('body').find('.p-shadow').eq(5).css({left: Number($(document).innerWidth())-Number($('.slider li:nth-child(5) div').innerWidth()), top: $('.slider li:nth-child(5) div').offset().top, width: $('.slider li:nth-child(5) div').innerWidth(), height: $('.slider li:nth-child(5) div').innerHeight(), opacity: 0});
		

$('body').find('.p-shadow').eq(0).animate({left: 0, opacity: 0}, 300);
$('body').find('.p-shadow').eq(1).animate({left: $('.slider li:nth-child(1) div').offset().left, top: $('.slider li:nth-child(1) div').offset().top, width: $('.slider li:nth-child(1) div').innerWidth(), height: $('.slider li:nth-child(1) div').innerHeight()}, 300);
$('body').find('.p-shadow').eq(2).animate({left: $('.slider li:nth-child(2) div').offset().left, top: $('.slider li:nth-child(2) div').offset().top, width: $('.slider li:nth-child(2) div').innerWidth(), height: $('.slider li:nth-child(2) div').innerHeight()}, 300);
$('body').find('.p-shadow').eq(3).animate({left: $('.slider li:nth-child(3) div').offset().left, top: $('.slider li:nth-child(3) div').offset().top, width: $('.slider li:nth-child(3) div').innerWidth(), height: $('.slider li:nth-child(3) div').innerHeight()}, 300);
$('body').find('.p-shadow').eq(4).animate({left: $('.slider li:nth-child(4) div').offset().left, top: $('.slider li:nth-child(4) div').offset().top, width: $('.slider li:nth-child(4) div').innerWidth(), height: $('.slider li:nth-child(4) div').innerHeight()}, 300);
$('body').find('.p-shadow').eq(5).animate({left: $('.slider li:nth-child(5) div').offset().left, top: $('.slider li:nth-child(5) div').offset().top, width: $('.slider li:nth-child(5) div').innerWidth(), height: $('.slider li:nth-child(5) div').innerHeight(), opacity: 1
}, 300);		
		
		
		
$('body').find('.autoimage').eq(0).animate({left: 0, opacity: 0}, 300);
$('body').find('.autoimage').eq(1).animate({left: $('.slider li:nth-child(1) img').offset().left, top: $('.slider li:nth-child(1) img').offset().top, width: $('.slider li:nth-child(1) img').width(), height: $('.slider li:nth-child(1) img').height()}, 300);
$('body').find('.autoimage').eq(2).animate({left: $('.slider li:nth-child(2) img').offset().left, top: $('.slider li:nth-child(2) img').offset().top, width: $('.slider li:nth-child(2) img').width(), height: $('.slider li:nth-child(2) img').height()}, 300);
$('body').find('.autoimage').eq(3).animate({left: $('.slider li:nth-child(3) img').offset().left, top: $('.slider li:nth-child(3) img').offset().top, width: $('.slider li:nth-child(3) img').width(), height: $('.slider li:nth-child(3) img').height()}, 300);
$('body').find('.autoimage').eq(4).animate({left: $('.slider li:nth-child(4) img').offset().left, top: $('.slider li:nth-child(4) img').offset().top, width: $('.slider li:nth-child(4) img').width(), height: $('.slider li:nth-child(4) img').height()}, 300);
$('body').find('.autoimage').eq(5).animate({left: $('.slider li:nth-child(5) img').offset().left, top: $('.slider li:nth-child(5) img').offset().top, width: $('.slider li:nth-child(5) img').width(), height: $('.slider li:nth-child(5) img').height(), opacity: 1
}, 300, function(){
			$('.slider').append($('.slider li:first-child'));
			$('.slider img').css({opacity: 1});
			$('.slider div').css({opacity: 1});
			$('.autoimage').remove();
			$('.p-shadow').remove();
		});
		
		
	});
	/* autoalign briefing */
	if($('section.briefing').length > 0){
		$('section.briefing .hands-holder').css({
			height: ($('section.briefing').height()+parseInt($('section.briefing').css('padding-bottom')) - $('section.briefing .title').innerHeight() - $('section.briefing .nums').innerHeight()) - 100,
			marginTop: 100
		});
	}
	/* autoalign collection */
	if($('section.collection').length > 0){
		$('section.collection .animate-holder, section.collection .animate-holder > *').css({
			height: ($('section.collection').height()+parseInt($('section.collection').css('padding-bottom')) - $('section.collection .title').innerHeight() - $('section.collection .nums').innerHeight())
		});
		
		var ht = (($('section.collection').height()+parseInt($('section.collection').css('padding-bottom')) - $('section.collection .title').innerHeight() - $('section.collection .nums').innerHeight()));
		
		$('section.collection .animate-holder > .l-hand, section.collection .animate-holder > .r-hand').css({
			height: ht*0.75,
			marginTop: ht*0.35,
		});
	}
	/* autoalign lamp */
	if($('section.lamp').length > 0){
		$('section.lamp .lamp-holder').css({
			height: ($('section.lamp').height()+parseInt($('section.lamp').css('padding-bottom')) - $('section.lamp .title').innerHeight() - $('section.lamp .nums').innerHeight())
		});
	}
	/* autoalign concept */
	if($('section.concept').length > 0){
		$('section.concept .concept-animation').css({
			height: ($('section.concept').height()+parseInt($('section.concept').css('padding-bottom')) - $('section.concept .title').innerHeight() - $('section.concept .nums').innerHeight())
		});
	}
	/* autoalign print */
	if($('section.print').length > 0){
		$('section.print .print-animation').css({
			height: ($('section.print').height()+parseInt($('section.print').css('padding-bottom')) - $('section.print .title').innerHeight() - $('section.print .nums').innerHeight())
		});
		$('section.print .print-animation > *').css({
			height: ($('section.print').height()+parseInt($('section.print').css('padding-bottom')) - $('section.print .title').innerHeight() - $('section.print .nums').innerHeight())*0.6
		});
		
		$('section.print .print-animation > div:nth-child(1)').css({
			marginTop: ($('section.print').height()+parseInt($('section.print').css('padding-bottom')) - $('section.print .title').innerHeight() - $('section.print .nums').innerHeight()) - ($('section.print').height()+parseInt($('section.print').css('padding-bottom')) - $('section.print .title').innerHeight() - $('section.print .nums').innerHeight())*0.7
		});
		$('section.print .print-animation > div:nth-child(2)').css({
			marginTop: (($('section.print').height()+parseInt($('section.print').css('padding-bottom')) - $('section.print .title').innerHeight() - $('section.print .nums').innerHeight()) - ($('section.print').height()+parseInt($('section.print').css('padding-bottom')) - $('section.print .title').innerHeight() - $('section.print .nums').innerHeight())*0.7)*0.66,
		});
		$('section.print .print-animation > div:nth-child(3)').css({
			marginTop: (($('section.print').height()+parseInt($('section.print').css('padding-bottom')) - $('section.print .title').innerHeight() - $('section.print .nums').innerHeight()) - ($('section.print').height()+parseInt($('section.print').css('padding-bottom')) - $('section.print .title').innerHeight() - $('section.print .nums').innerHeight())*0.7)*0.33,
		});
	}
	/* autoalign itog */
	if($('section.itog').length > 0){
		$('section.itog .itog-animation').css({
			height: ($('section.itog').height()+parseInt($('section.itog').css('padding-bottom')) - $('section.itog .title').innerHeight() - $('section.itog .nums').innerHeight())
		});
	}
if($('ul.slider').length > 0){
	
	
	$('ul.slider').css({
		height: $('.holder section:first-child').height() - $('.holder section:first-child .title').innerHeight() - 200
	});
	
	var hh = Number($('ul.slider').height());
	var ww = Number($('ul.slider').width());
	
	var oof = 3.37;
	
	$('ul.slider').css({
		width: oof*hh,
		marginLeft: 'auto',
		marginRight: 'auto'
	});
	
	
	$('ul.slider').css({
		marginTop: (Number($('.slider-nav').offset().top) - (Number($('ul.slider').offset().top)+Number($('ul.slider').height())))/2
	});
}
});

/* autoalign slider */

/* autoalign form */
if($('section.pageorder form').length > 0){
	$('section.pageorder form').css({
		marginTop: ($('section.pageorder').height() - $('section.pageorder .title').innerHeight() - $('section.pageorder .nums').innerHeight())/6
	});
}


/* autoalign form2 */
if($('section.finish-form form').length > 0){
	$('section.finish-form form').css({
		marginTop: ($('section.finish-form').height() - $('section.finish-form .title').innerHeight() - $('section.finish-form .nums').innerHeight())/6
	});
}
