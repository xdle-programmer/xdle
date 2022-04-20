$(document).ready(function(){


	//placeholder
	$('input, textarea').placeholder();

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	
	//popup block
	$('.js-popup-wrap .js-btn-toggle').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
		}
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    event.stopPropagation();
	});


	//main menu
	$('.main-menu-wrap li a').on('click', function() {
		if ($(this).next('ul').length>0) {
			$(this).parent('li').toggleClass('open');
		}
		if ($(window).innerWidth()<1024) {
			return false;
		}
	})


	//main slider
	if ($('.main-slider-box .sl-item').size()>1) {
		$('.main-slider-box .slider').owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: true,
			smartSpeed: 1000,
			fluidSpeed: 1000,
			autoplaySpeed: 1000,
			navSpeed: 1000,
			dotsSpeed: 1000,
			dragEndSpeed: 1000,
			responsiveRefreshRate: 100,
			autoHeight: false,
			autoplay: false,
			autoplayTimeout: 5000,
			responsive: {
				640: {nav: true, dots: false}
			}
		})
	}




	//header fixed
	$(window).scroll(function(){
		var windowTop = $(window).scrollTop();
		if ($(window).innerWidth()<1024) {
			if (windowTop>0){
				$('.wrap').addClass('fixed');
			}
			else {
				$('.wrap').removeClass('fixed');
			}
		}
	});


	//reviews slider
	$('.main-reviews-box .slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		smartSpeed: 1000,
		fluidSpeed: 1000,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dotsSpeed: 1000,
		dragEndSpeed: 1000,
		responsiveRefreshRate: 100,
		autoheight: true,
		autoplay: false,
		autoplayTimeout: 5000,
		responsive: {
			0: {items: 1},
			640: {items: 1, nav: true, dots: true},
			1024: {items: 2, nav: true, dots: true},
		},
		onResized: function() {
			var owlHeight=0;
			$('.main-reviews-box').find('.owl-item.active').each(function() {
				if ($(this).height()>owlHeight) {
					owlHeight=$(this).height();
				}
			});
			$('.main-reviews-box').find('.owl-height').css('height', owlHeight);
		},
		onInitialized: function() {
			var owlHeight=0;
			$('.main-reviews-box').find('.owl-item.active').each(function() {
				if ($(this).height()>owlHeight) {
					owlHeight=$(this).height();
				}
			});
			$('.main-reviews-box').find('.owl-height').css('height', owlHeight);
		},
		onTranslated: function() {
			var owlHeight=0;
			$('.main-reviews-box').find('.owl-item.active').each(function() {
				if ($(this).height()>owlHeight) {
					owlHeight=$(this).height();
				}
			});
			$('.main-reviews-box').find('.owl-height').css('height', owlHeight);
		}
	})


	//calc
	$('#range').slider({
		range: 'min',
		min: 10,
		max: 200,
		value: 16,
		slide: function( event, ui ) {
			$('#min').val(ui.value);
	  }
	})
	$('#min').val($('#range').slider('value'));
	$('#min').bind('focusout', function() {
		if ($(this).val()>$('#range').slider('value')) {
			$(this).val($('#range').slider('value'));
		}
		$('#range').slider('value', $(this).val());
	})
	$('#min').bind('keypress', function(e) {
		if (e.keyCode==13) {
			if ($(this).val()>$('#range').slider('value')) {
				$(this).val($('#range').slider('value'));
			}
			$('#range').slider('value', $(this).val());
		}
	})
	$('#widget').draggable();


	//popup callback
	$('#popup-callback').dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		draggable: false,
		width: 300,
		show: { effect: "fade", duration: 400 },
		hide: { effect: "fade", duration: 400 },
		dialogClass: '',
		title: 'Обратный звонок'
	})
	$('.btn-popup-callback').on('click', function() {
		$('#popup-callback').dialog('open');
		return false;
	})


	//popup order
	$('#popup-order').dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		draggable: false,
		width: 300,
		show: { effect: "fade", duration: 400 },
		hide: { effect: "fade", duration: 400 },
		dialogClass: '',
		title: 'Сделать заказ'
	})
	$('.btn-popup-order').on('click', function() {
		$('#popup-order').dialog('open');
		return false;
	})

	
});
$(window).load(function() {
      $('[data-fancybox]').fancybox({
      	onComplete: function() {
			$('.fancybox-button--left').each(function() {
				$(this).attr('title', 'Предыдущая');
			})
			$('.fancybox-button--play').each(function() {
				$(this).attr('title', 'Слайдшоу (P)');
			})
			$('.fancybox-button--right').each(function() {
				$(this).attr('title', 'Следующая');
			})
			$('.fancybox-button--fullscreen').each(function() {
				$(this).attr('title', 'На весь экран (F)');
			})
			$('.fancybox-button--thumbs').each(function() {
				$(this).attr('title', 'Предосмотр (G)');
			})
			$('.fancybox-button--close').each(function() {
				$(this).attr('title', 'Закрыть (Esc)');
			})
      	}
      })
});