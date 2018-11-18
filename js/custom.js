$(function(){
	$('.toggle a').click(function(e){
		$('.mynav').addClass('show-menu');
		$('.body-inactive').fadeIn(250);
		e.preventDefault();
	});
	$('.body-inactive, .close-menu').click(function(e){
		$('.mynav').removeClass('show-menu');
		$('.body-inactive').fadeOut(250);
		e.preventDefault();
	});
	// scrollbar js initialization
	$(".nano").nanoScroller();


	$('.owl-latest-listings').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots: true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	// Fixed Header
	// $(window).scroll(function(){
	// 	findScrolled = $(this).scrollTop();
	// 	if(findScrolled >= 50){
	// 		$('.header').addClass('sticky');
	// 	}
	// 	else{
	// 		$('.header').removeClass('sticky');
	// 	}
	// })

})
