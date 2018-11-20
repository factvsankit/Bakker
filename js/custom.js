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

	// Home Arrow Down
	$('.arrow-down a').click(function(e){
		e.preventDefault();
		$('body, html').animate({
			scrollTop: $(window).height()
		},500)
	});

	// Filter Dropdowns
	$('.spl-filter ul.sf-options > li > a').click(function(e){
		e.preventDefault();
		findIfAlreadyOpen= $(this).parent().find('ul').css('display');
		if(findIfAlreadyOpen == 'block'){
			$(this).parent().find('ul').stop().slideUp(350);
			$(this).parent().removeClass('filter-open');
		}
		else{
			$(this).parent().find('ul').stop().slideDown(350);
			$(this).parent().addClass('filter-open');
		}
	});

	// Counter in Store Page
	// Set counter default to zero


	var counter;

	$(".pi-in-dc .pi-btn").click(function(){
		currentCount = $(this).closest('.pi-in-dc').find('.pi-count>input').val();
		console.log(currentCount)
		subtractCase = $(this).hasClass('pi-dc');
		additionCase = $(this).hasClass('pi-in');

			if(subtractCase){
				if(currentCount > 0){
					currentCount--;
					$(this).closest('.pi-in-dc').find('.pi-count>input').val(currentCount)
				}
			}
			if(additionCase){
				currentCount++;
				$(this).closest('.pi-in-dc').find('.pi-count>input').val(currentCount)
			}

	});


	// Store Grid View
	$('.sg-grid > a').click(function(e){
		e.preventDefault();
		ifSingle = $(this).parent().hasClass('sg-single');
		$('.sg-grid').removeClass('active');
		if(ifSingle){
			$('.sg-grid.sg-single').addClass('active');
			$('.p-listings > .row').addClass('single-line-item');
			$('.pl-item').each(function(){
				$(this).children('.wrap-single').wrapAll('<div class="mytable"></div>');
				$(this).find('.pi-img').wrapAll('<div class="wrapped-img table-cell va-middle"></div>');
				$(this).find('.pi-title,.pi-desc,.pi-icons,.pi-price-cart').wrapAll('<div class="wrapped-detail table-cell va-middle"></div>');
			});
		}
		else{
			$('.sg-grid.sg-multiple').addClass('active');
			$('.p-listings > .row').removeClass('single-line-item');
			$('.pl-item').each(function(){
				$(this).children('.wrap-single').unwrap('<div class="mytable"></div>');
				$(this).find('.pi-img').unwrap('<div class="wrapped-img table-cell va-middle"></div>');
				$(this).find('.pi-title,.pi-desc,.pi-icons,.pi-price-cart').unwrap('<div class="wrapped-detail table-cell va-middle"></div>');
			});
		}
	});

	// Select to Dropdown
	if($('.selectpicker').length>0){
		$('.selectpicker').selectpicker();
	}


})
