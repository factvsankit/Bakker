$(function(){

	// scrollbar js initialization
	$(".nano").nanoScroller();

	// Mobile Nav

	if($('.etx-links').length>0){
		$storeNav = jQuery('<div id="storeNav"></div>').appendTo('.offcanvas .nano .nano-content');
		$storeNav.append(jQuery('.header .etx-links ul').clone());
	}

	if($('.navigation-items').length>0){
		$mainNav = jQuery('<div id="mainNav"></div>').appendTo('.offcanvas .nano .nano-content');
		$mainNav.append(jQuery('.header .mynav .navigation-items').clone());
	}

	if($('.select-language').length>0){
		$mblLang = jQuery('<div id="mblLang"></div>').appendTo('.offcanvas .nano .nano-content .ext-elements');
		$mblLang.append(jQuery('.header .mynav .select-language').clone());
	}

	if($('.cart-selected').length>0){
		$mblCart = jQuery('<div id="mblCart"></div>').appendTo('.offcanvas .nano .nano-content .ext-elements');
		$mblCart.append(jQuery('.header .mynav .cart-selected').clone());
	}

	jQuery('.toggle a').click(function(e) {
			jQuery('.offcanvas').addClass('show-offcanvas');
			jQuery('body').addClass('pushed');
			jQuery('.body-inactive').fadeIn(350);
			e.preventDefault();
	});
	jQuery('.body-inactive, .coff a').click(function(e) {
			jQuery('.offcanvas').removeClass('show-offcanvas');
			jQuery('.body-inactive').fadeOut(350);
			e.preventDefault();
	});

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

	// Carousel
	$('.owl-latest-listings').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots: true,
		responsive:{
			0:{
				items:1
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
				$(this).children('.wrap-single').wrapAll('<div class="row"></div>');
				$(this).find('.pi-img').wrapAll('<div class="wrapped-img col-md-2"></div>');
				$(this).find('.pi-title,.pi-desc,.pi-icons').wrapAll('<div class="wrapped-detail col-md-6"></div>');
				$(this).find('.pi-price-cart').wrapAll('<div class="wrapped-carts col-md-4"></div>');
			});
		}
		else{
			$('.sg-grid.sg-multiple').addClass('active');
			$('.p-listings > .row').removeClass('single-line-item');
			$('.pl-item').each(function(){
				$(this).children('.wrap-single').unwrap('<div class="row"></div>');
				$(this).find('.pi-img').unwrap('<div class="wrapped-img col-md-2"></div>');
				$(this).find('.pi-title,.pi-desc,.pi-icons').unwrap('<div class="wrapped-detail col-md-6"></div>');
				$(this).find('.pi-price-cart').unwrap('<div class="wrapped-carts col-md-4"></div>');
			});
		}
	});

	// Select to Dropdown
	if($('.selectpicker').length>0){
		$('.selectpicker').selectpicker();
	}

	// Language Dropdown
	$('.select-language > li > a').click(function(e){

		ifThisHasDD = $(this).parent().children('ul').length;
		ifThisIsAlreadyOpen = $(this).parent().children('ul').css('display');
		if(ifThisHasDD === 1){
			e.preventDefault();
			if(ifThisIsAlreadyOpen == 'none'){
				$(this).parent().children('ul').stop().slideDown(300);
				$('<div class="lang-dd"></div>').prependTo('body');
			}
			else{
				$(this).parent().children('ul').stop().slideUp(300);
				$('.lang-dd').remove();
			}
		}
	})

	// closing Language on clicking outside
	$(document).on('click','.lang-dd',function(){
		$('.languages').stop().slideUp(300);
		$('.lang-dd').remove();
	})

	// Changing Language Flag
	$('.select-language .languages button').click(function(){
		currentFlag = $(this).children('img').attr('src');
		$('.select-language > li > a').find('img').attr('src',currentFlag);
	})

	//Allocating top space, when there is information bar in Store Page
	if($('.top_header').length>0){
		findBarHeight = $('.top_header').height();
		$('header.absolute').css('top',findBarHeight);
	}
	$('.top_header .th-content .tc-close').click(function(){
		$('.top_header .th-content').slideUp(200);
		$('header.absolute').css('top',0);
	});

	// Added to cart Button
	var cartIsAdded;
	function addToCartFunction() {
	    setTimeout(function(){ $('.pi-cart').removeClass('added-to-cart') }, 1500);
	}
	$('.pi-cart button').click(function(e){
		clearTimeout(cartIsAdded)
		e.preventDefault();
		$(this).parent('.pi-cart').addClass('added-to-cart');
		addToCartFunction();
	});

	// Allergens Filter
	$('.allergen-listings ul li span input[type="checkbox"]').click(function(){
		findTarget = $(this).attr('data-allergen-type');
		console.log(findTarget)
		if($(this).is(':checked')){
			$(this).parent().addClass('checked');
		}
		else{
			$(this).parent().removeClass('checked');
		}
	})

})
