
window.onload = function(){
	$('.phone-mask').mask('+7 (999) 999-99-99');
	 if (window.matchMedia("(min-width:1000px)").matches) {
		 $('.custom-scroll').mCustomScrollbar({
		    axis:"y" 
		});
	}
	function isNoTarget(selector, doFunc, exception){
		var outsideClick = function(event){
			if (!$(event.target).closest(selector)[0] || $(event.target).closest(exception)[0]) {
				reset();
				if (doFunc) {
					return doFunc();
				}
			}
		}
		function reset(){
			$(document).off('click', outsideClick);
		}
		$(document).on('click', outsideClick);
		return {
			reset: reset,
		}
	}
	
	$('.mobile-toggle-search').click(function(){
		$(this).closest('.search-module').toggleClass('active');
		$('body').toggleClass('body_fixed');
	});
	this.cityPick = (function(){
		var open = false,
			openModal = function(){
				open = true
				$('.modal-city-pick').addClass('active');
				$('body').addClass('pointer')
			},
			closeModal = function(){
				open = false
				$('.modal-city-pick').removeClass('active');
				$('body').removeClass('pointer');
				$('.modal-city-pick__drop-menu').removeClass('suggest-active');
			},
			chooseCity = function(cityName){
				$('.js-city-place').html(cityName)
				closeModal();
			}
		
		$(document).on('click','.modal-city-pick__value', function(e){

			e.stopPropagation();
			
			if (open) {
				closeModal()
				$(document).off('click', closeModal);
			} else {
				openModal();
				$(document).on('click', closeModal);
				
			}
		});
		$(document).on('click','.modal-city-pick__drop-menu', function(e){
			e.stopPropagation();
		});
		
		$(document).on('input','.city-search__input', function(){
			var valueLg = $(this).val().length,
				parentModal = $(this).closest('.modal-city-pick__drop-menu');
			if (valueLg > 0) {
				parentModal.addClass('suggest-active')
			} else {
				parentModal.removeClass('suggest-active')
			}
			
		});

		return {
			set: chooseCity
		}
	})();
	
	
	$(document).on('click','.js-call-popup, [data-popup]', function(e){
		
		e.preventDefault();
		$('body').addClass('body_fixed');
		var attrData = $(this).attr('href');
		if (!attrData) {
			attrData = $(this).attr('data-popup');
		}
		$('.popup.' + attrData).find('.js-additional-value').val($(this).data('add-info'));
		window.openPopup(attrData);
	}).on('click','.popup', function(e){
		 if (e.target !== this)
		 	return;
		 closePopup();
	}).on('click','.close-popup, .js-close-popup', function(e){
		closePopup();
	});
	function closePopup(){
		$('body').removeClass('body_fixed');
		$('.popup').fadeOut(300);
	}
	window.openPopup = function (name, text){
		closePopup();
		var popTarget = '.popup.' + name;
		$(popTarget).fadeIn(300);
		$('body').addClass('body_fixed');
		if(name == 'popup_text' && text){
			$('.popup__service-text').text(text);
		}
	}
	var $select = $('.regular-select').click(function(){
		$select.not($(this)).removeClass('regular-select_dropped');
		$('.regular-select__option-list').slideUp(200);
		$(this).toggleClass('regular-select_dropped')
			   .find('.regular-select__option-list')
			   .stop(true,false)
			   .slideToggle(200);
	}).on('click', '.option-list__item', function(){
		selectOption($(this));
	});
	var selectOption = this.selectOption = function(item){
		var text = $(item).html();
		$('.option-list__item').removeClass('option-list__item_selected');
		$(item).addClass('option-list__item_selected')
			   .closest('.regular-select')
			   .find('.regular-select__val')
			   .html(text);
	}
	$('.card-product__add-compare').click(function(){
		if (!$('.card-product__add-compare input[type="checkbox"]:checked').length > 1) {
			$('.compare-link').removeClass('compare-link_visible');
		}
	});
	$('.advantage').click(function(){
		if (window.matchMedia("(max-width:1045px)").matches) {
			window.openPopup('popup_advantage');
			$('#advantage-title').text($(this).find('.advantage__title').text())
			$('#advantage-text').html($(this).find('.advantage__pop-text').html())
		}
	});
	
	var $mobileMenu = $('.mobile-menu');

	$(document).click(function(e){
		if(!$(e.target).is('.regular-select') && !$(e.target).parents('.regular-select')[0]){
			$select.removeClass('regular-select_dropped')
				        .find('.regular-select__option-list')
				        .stop(true,false)
				        .slideUp(200);
		}
		if(!$(e.target).is('.mobile-menu') &&
		   !$(e.target).parents('.mobile-menu')[0] && 
		   !$(e.target).is('.js-toggle-menu') && 
		   !$(e.target).parents('.js-toggle-menu')[0]
		){
			$mobileMenu.removeClass('mobile-menu_active');
		}
		if(!$(e.target).is('.search-button') && $(e.target).parents('.search-button').length < 1){
			$('.search-menu').removeClass('search-menu_active');
			$('.search-menu .suggest-block').css('display','none');
		}
	});

	$('.js-toggle-menu').click(function(e){
		e.preventDefault();
		var menuTarget = $(this).attr('data-menu');
		$mobileMenu.removeClass('mobile-menu_active');
		$('.' + menuTarget).addClass('mobile-menu_active');
	});
	

	var $bannerSlider = $('.banner-slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		autoplay: true,
  		pauseOnHover: true,
  		autoplaySpeed: 4000,
  		dots: true,
  		customPaging: function(){
  			return '<div class="dot-point"></div>';
  		},
	});
	var arrowPrevHtml = '<div class="arrow-button arrow-button_prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
		arrowNextHtml = '<div class="arrow-button arrow-button_next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>';
	
	var $productSlider = $('.product-slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		asNavFor: '.controls-slider',
  		arrows: false
	}).on('beforeChange', function(){
		videoBlock.destroy();
	});
	var $controlsSlider = $('.controls-slider').slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		arrows: true,
  		swipeToSlide: true,
  		centerMode: true,
  		centerPadding: '0px',
  		focusOnSelect: true,
  		vertical: true,
  		verticalSwiping: true,
  		asNavFor: '.product-slider',
  		nextArrow: '<div class="arrow-button arrow-button_vertical arrow-button_next"><i class="fa fa-angle-down" aria-hidden="true"></i></div>',
		prevArrow: '<div class="arrow-button arrow-button_vertical arrow-button_prev"><i class="fa fa-angle-up" aria-hidden="true"></i></div>',
		responsive: [
		    {
		      breakpoint: 720,
		      settings: {
		        slidesToShow: 3,
		        vertical: false,
		        verticalSwiping: false,
		        arrows: true,
		        nextArrow: '<div class="arrow-button arrow-button_new arrow-button_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
				prevArrow: '<div class="arrow-button arrow-button_new arrow-button_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		      }
		    }
	    ]
	});
	if ($('.related-slider__slide').length > 2 || window.matchMedia("(max-width:1120px)").matches) {
		var $relatedSlider = $('.related-slider').slick({
			slidesToShow: 3,
	  		slidesToScroll: 1,
	  		arrows: true,
	  		verticalSwiping: true,
	  		swipeToSlide: true,
	  		vertical: true,
	  		nextArrow: '<div class="arrow-button arrow-button_vertical arrow-button_next"><i class="fa fa-angle-down" aria-hidden="true"></i></div>',
			prevArrow: '<div class="arrow-button arrow-button_vertical arrow-button_prev"><i class="fa fa-angle-up" aria-hidden="true"></i></div>',
			responsive: [
			    {
			      breakpoint: 1120,
			      settings: {
			        slidesToShow: 3,
			        vertical: false,
			        verticalSwiping: false,
			        arrows: true,
			        nextArrow: '<div class="arrow-button arrow-button_new arrow-button_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
					prevArrow: '<div class="arrow-button arrow-button_new arrow-button_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
			      }
			    },{
			      breakpoint: 610,
			      settings: {
			        slidesToShow: 2,
			        vertical: false,
			        verticalSwiping: false,
			        arrows: true,
			        nextArrow: '<div class="arrow-button arrow-button_new arrow-button_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
					prevArrow: '<div class="arrow-button arrow-button_new arrow-button_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
			      }
			    }
		    ]
		});
	}
	

	var reinitableSlider = (function(){
		var init = function(){
				$('.regular-slider').each(function(){
					if (!$(this).hasClass('slick-slider')) {
						$(this).slick({
							slidesToShow: 4,
					  		slidesToScroll: 1,
					  		arrows: true,
					  		swipeToSlide: true,
					  		nextArrow: '<div class="arrow-button arrow-button_new arrow-button_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
							prevArrow: '<div class="arrow-button arrow-button_new arrow-button_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
							responsive: [
							    {
							      breakpoint: 1120,
							      settings: {
							        slidesToShow: 3,
							        vertical: false
							      }
							    },{
							      breakpoint: 610,
							      settings: {
							        slidesToShow: 2,
							        vertical: false,
							        arrows: true,
							        nextArrow: '<div class="arrow-button arrow-button_new arrow-button_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
									prevArrow: '<div class="arrow-button arrow-button_new arrow-button_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
							      }
							    }
						    ]
						});
					}
				});
				
			}
		init();
		$(document).ajaxSuccess(function() {
			
			init();
		});

	})();
	
	var $newsSlider = $('.news-slider').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		arrows: true,
  		swipeToSlide: true,
  		nextArrow: arrowNextHtml,
		prevArrow: arrowPrevHtml,
		responsive: [
		    {
		      breakpoint: 1170,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 890,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 570,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
	    ]
	});
	if (window.matchMedia("(max-width:610px)").matches) {
		var $tabsSlider = $('.tabs-data__controls').slick({
			infinite: false,
	  		arrows: false,
	  		swipeToSlide: true,
	  		focusOnSelect: true,
	  		variableWidth: true
		});
	}
	// (function( $ ){
	// 	$.fn.accordeon = function(classHolderName, listName) {
	// 		$(document).on('click', '.' + $(this).attr('class'), function(){
	// 				var classHolder = $(classHolderName),
	// 					list = $(listName),
	// 					$currentItem = $(this).closest(classHolder);
				

	// 			if ($currentItem.hasClass('list-active')) {
	// 				classHolder.removeClass('list-active');
	// 				list.slideUp(300);
	// 			} else {
	// 				classHolder.removeClass('list-active');
	// 				list.slideUp(300);
	// 				$currentItem.addClass('list-active');
	// 				$currentItem.find(list)
	// 							.slideDown(300);
	// 			}
	// 		});
	//    	}; 
	// })(jQuery);
	
	
	acordeonManage.init();
	landingFade.init();
	//$('.accordeon-menu__title').accordeon($('.accordeon-menu'), $('.accordeon-menu__content'));
	
	
	$('.search-button__toggle').click(function(e){
		$('.search-menu').toggleClass('search-menu_active');
	});
	$('.search-menu .search-line__input').on('input',function(){
		$('.search-menu .suggest-block').slideDown(300);
	});


	var $tableHider = $('.table-overflow');
	if ($tableHider[0]) {
		var $showTable = $('.js-wrap-table');
		if ($('.characteristics-table').outerHeight() > 451) {
			$showTable.addClass('js-wrap-table_active').click(function(){
				$('.table-overflow').toggleClass('table-overflow_show');
				$(this).toggleClass('js-wrap-table_in-state');
			});
		}
	}
	var $header = $('.header'),
		$compareItems = $('.compare-items'),
		headerHeigth = $header.outerHeight();
	$(window).on('resize', function(){
		landingFade.scroll(scrolled);
	});
	window.onscroll = function() {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		loader.loaderPosition(scrolled);
		if (scrolled > 0) {
			$header.addClass('header_fixed');
		} else {
			$header.removeClass('header_fixed');
		}
		landingFade.scroll(scrolled);
		if ($compareItems[0] && window.matchMedia("(min-width:935px)").matches) {
			if (scrolled >=  $compareItems.offset().top + $compareItems.outerHeight() - headerHeigth) {
				$compareItems.addClass('compare-items__fixed');
			} else {
				$compareItems.removeClass('compare-items__fixed');
			}
		}
	};
	function checkUserType(targetVal){
		var $toggleField = $('.additional-field');
		if (targetVal == 2) {
			$toggleField.addClass('additional-field_shown');
		} else {
			$toggleField.removeClass('additional-field_shown');
		}
	}
	checkUserType($('.switch-input:checked').val());
	$('.switch-input').on('change',function(){
		var targetVal = $(this).val();
		checkUserType(targetVal)
	});
	var $contactsMap = $('.contacts-map');
	if ($contactsMap[0]){
		var markerGeo = {
				lat: +$contactsMap.attr('data-geo-marker').split(',')[0],
				lng: +$contactsMap.attr('data-geo-marker').split(',')[1]
			},
	        map = new google.maps.Map(document.getElementById('contacts-map'), {
	          zoom: 15,
	          center: markerGeo,
		      disableDefaultUI: true
	        }),
        	marker = new google.maps.Marker({
				position: markerGeo,
				map: map,
	    		icon: '/local/templates/main/img/pin.png'
			});
	}

	var $counter = $('.counter');
	$counter.on('click', '.counter__button', function(){
		changeValue($(this).closest('.counter'), $(this))
	}).on('keyup', 'input[type="text"]',function(){
		changeValue($(this).closest('.counter'))
	});
	function changeValue(counter, trigger){
		var min = +counter.attr('min-val'),
			max = +counter.attr('max-val'),
			field = counter.find('input[type="text"]'),
			startValue = +field.val();

		if (trigger && trigger.hasClass('minus') && (startValue - 1) >= min) {
			field.val(startValue - 1);
		}
		if (trigger && trigger.hasClass('plus') && (startValue + 1) <= max) {
			field.val(startValue + 1);
		}
		if (startValue > max) {
			field.val(max);
		}
		if (startValue  < min) {
			field.val(min);
		}
		if (isNaN(startValue)) {
			field.val((min + max)/2);
		}
	}
	$compareProduct = $('.compare-product');
	$comparePage = $('.compare');

	var	$compareSells = $('.comare-data__cell');

	if ($comparePage[0]) {
		
		function difCompareHighlight(){
			var $dataRow = $('.row__compare-data').each(function(){
				var rowArr = []
				var dataCells = $(this).find($compareSells).each(function(){
					var cellText = $(this).text();
					if (!cellText) {
						$(this).text('—')
					}
					rowArr.push($(this).text());
				});
				if (!rowArr.every(function(n){ return n === rowArr[0] })) {
					$(this).addClass('compare-table__row_highlight');
				}
			});
			
		}

		difCompareHighlight();
		if ($compareProduct.length > 2) {
			$('.compare-items__slider').slick({
				arrows: true,
				infinite: false,
				slidesToShow: 3,
	  			slidesToScroll: 1,
				prevArrow: '<div class="arrow-button arrow-button_prev arrow_hidden"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
				nextArrow: arrowNextHtml,
				variableWidth: true,
				responsive: [
					{
				      breakpoint: 1225,
				      settings: {
				      	slidesToShow: 3,
	  					slidesToScroll: 1,
	  					variableWidth: false
				      }
				    },
				    {
				      breakpoint: 1200,
				      settings: {
				        slidesToShow: 2,
	  					slidesToScroll: 1,
	  					variableWidth: false
				      }
				    },
				    {
				      breakpoint: 935,
				      settings: {
				        slidesToShow: 2,
	  					slidesToScroll: 1,
						variableWidth: false
				      }
				    }
			    ]
			}).on('afterChange', function(slick, currentSlide, nextSlide){
				checkVisability();
				arrowShowControl($(this),currentSlide)
			});
			checkVisability();
		} else {
			checkCompareLenght();
			
		}
		function arrowShowControl(slider, currentSlide){
			slider.find('.slick-arrow').removeClass('arrow_hidden');
			if ($(slider).find('.slick-slide:last-child').hasClass('slick-active')) {
				slider.find('.arrow-button_next').addClass('arrow_hidden');
			}
			if (currentSlide.currentSlide === 0) {
				slider.find('.arrow-button_prev').addClass('arrow_hidden');
			}
		};
		$('.compare-product').on('click','.compare-product__delete',function(){
			removeCompareItem($(this).closest('.compare-product'));
		});
		
	}

	if (typeof checkCompare == 'function') { 
	  	checkCompare();
		checkCompareBlock();  
	}
	if ($('input[required]')[0]) {
		$(document).on('input blur change','input[required]', function(){
			if(!$(this).hasClass('valid-value')){
				validateField($(this));
			}
		});
	}
	$(document).on('click','.more-text__button',function(){
		$(this).closest('.more-text').toggleClass('more-text__shown');
		return false;
	});

	$('.js-change-state').click(function(){
		$('.auth-box__state').css('display', 'none');
		$('.' + $(this).attr('data-state')).fadeIn(200);
	});

	
	
	var textOverflow = (function(){
		var initHeight,
			wrap = $('.text-overflow__wrap');
			autoWrap = $('')
		if (window.matchMedia("(min-width:1000px)").matches) {
			initHeight = 688;
		} else {
			initHeight = 220;
		}
		function checkWraps(){
			wrap.each(function(){
				var rowsData = $(this).data('rows'),
					rowsHeight = +$(this).css('line-height').replace('px','') * +rowsData;

				if (rowsData && $(this).outerHeight()   >= rowsHeight) {
					$(this).closest('.text-overflow').addClass('inited');
					$(this).css('height',rowsHeight + 'px');

				} else if($(this).outerHeight() >= initHeight){
					$(this).closest('.text-overflow').addClass('inited');
				}
				
			});
		}
		checkWraps();
		$('.js-unwrap-overflow').click(function(){
			$(this).closest('.text-overflow').addClass('unwrap').find(wrap).css('height','');
			
		});
		return {
			check: checkWraps
		}
	})();
	var tabswitcher = (function(){
		var tabHandle = $('.js-tab-switch');

		function init(){
			$('.js-tab-switch:first-child').addClass('js-tab-switch_active');
			$('.js-tab-item:first-child').addClass('js-tab-item_current');
			tabHandle.click(function(){
				switchTabs.call($(this));
			});
			textOverflow.check();
		}
		
		function switchTabs(){
			var tabModule = $(this).closest('.js-tab-module'),
				tabs = tabModule.find('> .js-tab-container > .js-tab-item');
				handles = tabModule.find('> .js-tab-controls .js-tab-switch');
			
			$(handles).removeClass('js-tab-switch_active');
			$(this).addClass('js-tab-switch_active');
			tabs.removeClass('js-tab-item_current').eq($(this).index()).addClass('js-tab-item_current');
			textOverflow.check();
		}
		init();
	})();
	var videoBlock = (function(){
		var $vidBlock = $('.video-item'),
			$sliderModule = $('.slider-module'); 

		function init(){
			$vidBlock.each(function(){
				$(this).css({
					'background-image': 'url(https://img.youtube.com/vi/'+ $(this).data('video') +'/0.jpg)'
				})
			});
			$vidBlock.click(function(){
				if (!$(this).hasClass('video-item_preview-only')) {
					insertVideo($(this));
				}
			});
		}
		init();
		function insertVideo(that){

			if (!that.hasClass('video-item_loaded')) {
				that.addClass('video-item_loaded');

				var iframe = document.createElement("iframe"),
					iframeAttrs = {
						"src": 'https://www.youtube.com/embed/' + that.data('video') + '?autoplay=1&rel=0',
						'id': 'ytplayer',
						'allowfullscreen': '1'
					};

				for(var key in iframeAttrs) {
					iframe.setAttribute(key, iframeAttrs[key]);
				}
				that.append(iframe);
			}
			
		}
		function destroy(){
			$vidBlock.removeClass('video-item_loaded').html(null);
			$sliderModule.removeClass('slider-module_show-video');
		}
		function call(){
			if($sliderModule[0]){
				$sliderModule.addClass('slider-module_show-video');
			}
		}

		$('.slider-module__video-button').click(function(){
			call();
		});
		return {
			destroy: destroy,
			call: call
		}
	})();
	
	var storageOperate = (function (){
		var $infoPlate = $('.info-plate');
		var $popupInfo = $('.popup_info');

		if(!localStorage.cookieInfo && $infoPlate[0]){
			$infoPlate.slideDown(200);
		}
		if(!localStorage.popupInfo && $popupInfo[0]){
			window.openPopup('popup_info');
		}
		$popupInfo.on('click', '.close-popup, .js-close-popup', function(){
			localStorage.popupInfo = 1;
		});
		$('#js-ok-cookie').click(function(){
			$infoPlate.slideUp(200);
			localStorage.cookieInfo = 1;
		});
	})();

	var returnPage = (function(){
		var wrap = $('.return-page'),
			stepButton = $('#next-step'),
			checks = wrap.find($('input[type=radio]')),
			
			stepUrl = function(){
				var checkedLabel = $('input[type=radio]:checked').closest('label');
				stepButton.attr('href', checkedLabel.data('url'));
			};

		stepUrl();
		checks.on('change', function(){
			stepUrl();
		});
	})();
	serviceMapModule.init();
	

	
}
var $compareProduct;
var $comparePage;

function checkCompareLenght(){
	
	if ($('.compare-product').length === 2) {
		
		$comparePage.addClass('compare_two-items');
		if ($('.slick-slider')[0]) {
			$('.slick-slider').slick('unslick').slick('destroy');
		}
	}
}
function checkVisability(){
	$('.comare-data__cell').css('display','none');
	var $visibleSlide = $('.slick-active');
	if ($visibleSlide[0]) {
		$visibleSlide.each(function(){

			var visibleIndex = $(this).index() + 1,
				$currentCell = $('.comare-data__cell:nth-child('+ visibleIndex +')').removeClass('last-visible');

			if (window.matchMedia("(max-width:935px)").matches) {
				$currentCell.css('display','table-cell');
				if (visibleIndex === ($visibleSlide.last().index() + 1)) {
					$currentCell.addClass('last-visible');
				}
			} else {
				$currentCell.css('display','table');
			}
			
			$(this).removeClass('last-visible');
		}).last().next().addClass('last-visible');
	}
	
}
function removeCompareItem(item){
	var delIndex = item.index();
	$('.comare-data__cell:nth-child('+ (delIndex + 1) +')').remove();
	if (!$comparePage.hasClass('compare_two-items')) {
		$('.compare-items__slider').slick('slickRemove',delIndex);
		checkVisability();
	} 
	item.remove();
	checkCompareLenght();
	
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateField(input){
	var $currentInput = $(input);
	var $inputWrap = $currentInput.closest('.regular-input');
	var valid = true;
	if ($currentInput.is('[type="text"]:visible')) {
		if ($currentInput.hasClass('valid-phone')) {
			if ($currentInput.val().length === 18) {
				valid = true;
			} else {
				valid = false;
			}
		}

		if ($currentInput.hasClass('valid-value')) {
			if ($currentInput.hasClass('valid-value_true')) {
				valid = true;
			} else {
				valid = false;
			}
		}

		if ($currentInput.hasClass('valid-text')) {
			if ($currentInput.val().length > 0) {
				valid = true;
			} else {
				valid = false;
			}
		} 
		
		if ($currentInput.hasClass('valid-email')) {
			if (validateEmail($currentInput.val())) {
				valid = true;
			} else {
				valid = false;
			}
		}
	}
	if ($currentInput.is('[type="checkbox"]')) {
		if ($currentInput.prop('checked')) {
			valid = true;
		} else {
			valid = false;
		}
	}
	if(valid){
		$currentInput.addClass('filled').removeClass('valid-error');
		$inputWrap.removeClass('regular-input_error').addClass('regular-input_filled');
	} else {
		$currentInput.addClass('valid-error');
		$inputWrap.addClass('regular-input_error');
	}
}

function formIsValid(form){
		
	if (form[0]) {
		if (checkInputs(form) && pvzMap.validate()) {
			return true;
		}
		scrollTo($('.valid-error'));
	}
	return false;	
	
}
function checkInputs(form){
	var requiredInputs = form.find('input[required]');
	requiredInputs.each(function(){
		validateField($(this));
	});
	if (!requiredInputs.hasClass('valid-error')) {
		return true;
	} 
	return false;
}
function checkCustomScroll(){
	if (window.matchMedia("(min-width:1000px)").matches) {
		 $('.custom-scroll').mCustomScrollbar({
		    axis:"y" 
		});
	}
}
checkCustomScroll();
function checkMask(){
	$('.phone-mask').mask('+7 (999) 999-99-99');
}
function scrollTo(target){
	if (target[0] && target.is(':visible')) {
			var scrollDistance = target.offset().top - 20;
		
		if (window.matchMedia("(max-width:1045px)").matches) {
			scrollDistance -= $('.header').outerHeight();
			
		}
		$('html, body').animate({
	        scrollTop: scrollDistance
	    }, 1000);
    }
};

function successAdd(text){
	if ($('.popup_cart-add')[0]) {
		window.openPopup('popup_cart-add');
		$('#prod-name').text(text);
	}
	
}
function servicePopup(title, text, button){
	if ($('.popup_info')[0]) {
		$('#service-title').text(title);
		$('#service-text').text(text);
		$('#service-button').text(button);
		window.openPopup('popup_service');
		
	}
	
} 
var test = [
	{
		"cityCoords": "56.85237874030841,53.20274949999994",
		"objs": [
			{
				"coords": "56.876112067836935, 53.29310249999993",
				"info": '<h1>Boxberry Москва Лубянский_7715_С</h1><div class="pvz-data pvz-data_address">Адрес: 101000, Москва г, Лубянский проезд, д.15, строение 4, оф. 12</div><div class="pvz-data pvz-data_mode">Режим работы: пн-пт:10.00-21.00, сб:10.00-18.00</div><div class="pvz-data pvz-data_phone">Телефон: +7(499)391-56-22</div><div class="pvz-data pvz-data_info"> <br>Информация:Проезд: маршрут.такси №№ - т25,м3,122,Н3. Остановка: "Ильинские ворота". Остановка метро: "Китай-город". Метро "Китай-Город", последний вагон из центра, выход на улицу Марасейка из стеклянных дверей направо, на улице повернуть направо, пройти 10 метров и завернуть в арку, над аркой надпись "ОТЕЛЬ", далее во дворе повернуть налево, пройти ещё 10 метров вперед, после вывески на доме "МОСЦВЕТТОРГ 2" двери под большим козырьком, звонить в домофон в правую дверь с вывеской ПУНКТ ВЫДАЧИ ЗАКАЗОВ, офис 12  ".</div>',
				"value": "pvz1",
				"address": "Адрес Ижевск  Автозаводская ул  д.62"
			},
			{
				"coords": "56.82827106789506, 53.13368699999995",
				"info": "<h1>Пвз2</h1>  Ижевск  Клубная ул  д.67 Режим работы: пн-пт:10.00-19.30",
				"value": "pvz2",
				"address": "Адрес 2",
				"function": "testfunc(1)"
			},
			{
				"coords": "56.82285806788111, 53.20870549999993",
				"info": "<h1>Москва Щербаковская_9948_С </h1>105318, г.Москва м.Семёновская, ул.Щербаковская, д.7 Время работы: пн-вс: 09.00-22.00",
				"value": "pvz3",
				"address": "Адрес 3"
			}
		]
	}
]; 

var pvzMap = (function(){
	var deliveryMap,
		$mapBlock,
		memoryAddress,
		memoryId,
		memoryInfo;
	function init(data){
		if (memoryId && memoryAddress && memoryInfo) {
			outputData(memoryId,memoryAddress, memoryInfo);
		}
		var city = data[0];
		ymaps.ready(function(){
			$mapBlock = $('.map-place');
			if ($mapBlock[0] && !$mapBlock.hasClass('map-init')) {
				$mapBlock.addClass('map-init');
				deliveryMap = new ymaps.Map("delivery-map", {
	            	center: [+city.cityCoords.split(',')[0],+city.cityCoords.split(',')[1]],
	            	zoom: 12,
	            	controls: ['zoomControl',]
	        	});

	        	var constructs = {
	        		balloonLayout : function(pvzId, pvzaddress, pvzfunc){
	        			return ymaps.templateLayoutFactory.createClass(
							    '<div class="custom-baloon">'+
							            '<div class="custom-baloon__close-button"><i class="fa fa-times" aria-hidden="true"></i></div>'+
							            '$[[options.contentLayout]]' +
							            '<div class="button custom-baloon__button js-choose-pvz" data-pvz="'+ pvzId +'" data-address="'+ pvzaddress +'" data-function="'+ pvzfunc +'">Выбрать</div>' +
							            '<div class="custom-baloon__arrow"></div>'+
							    '</div>'
							    ,{
								    build: function () {
								        this.constructor.superclass.build.call(this);

								        this._$element = $('.custom-baloon', this.getParentElement());

								        this.applyElementOffset();

								        this._$element.find('.custom-baloon__close-button')
								            .on('click', $.proxy(this.onCloseClick, this));
								    },
								    clear: function () {
								        this._$element.find('.custom-baloon__close-button')
								            .off('click');

								        this.constructor.superclass.clear.call(this);
								    },
								    onSublayoutSizeChange: function () {
								        constructs.balloonLayout().superclass.onSublayoutSizeChange.apply(this, arguments);

								        if(!this._isElement(this._$element)) {
								            return;
								        }

								        this.applyElementOffset();

								        this.events.fire('shapechange');
								    },
								    applyElementOffset: function () {
								        this._$element.css({
								            left: -(this._$element[0].offsetWidth / 2),
								            top: -(this._$element[0].offsetHeight + this._$element.find('.custom-baloon__arrow')[0].offsetHeight)
								        });
								    },
								    onCloseClick: function (e) {
								        e.preventDefault();

								        this.events.fire('userclose');
								    },
								    getShape: function () {
								        if(!this._isElement(this._$element)) {
								            return constructs.balloonLayout().superclass.getShape.call(this);
								        }

								        var position = this._$element.position();

								        return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
								            [position.left, position.top], [
								                position.left + this._$element[0].offsetWidth,
								                position.top + this._$element[0].offsetHeight + this._$element.find('.custom-baloon__arrow')[0].offsetHeight
								            ]
								        ]));
								    },
								    _isElement: function (element) {
								        return element && element[0] && element.find('.custom-baloon__arrow')[0];
								    }
								}
							)
	        		},
			        balloonContentLayout : ymaps.templateLayoutFactory.createClass(
						'<div class="custom-baloon__content">$[properties.balloonContent]</div>'
			        ),
			        placemarkLayout :  function(){
						var layout;
			        	if(+pvz.value !== memoryId){
			        		layout = ymaps.templateLayoutFactory.createClass(
								'<svg class="ymaps-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 33.33h26.667V0H0z"/></defs><g transform="matrix(1 0 0 -1 0 33.33)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g mask="url(#b)"><path d="M13.333 14.664a5.334 5.334 0 1 0 0 10.667 5.334 5.334 0 0 0 0-10.667m0 18.667C5.972 33.33 0 27.36 0 19.997 0 8 10.667 0 13.333 0c2.667 0 13.334 8 13.334 19.998 0 7.364-5.972 13.334-13.334 13.334" fill="#00AEEF" fill-rule="nonzero"/></g></g></svg>'
					        );
			        	} else {
			        		layout = ymaps.templateLayoutFactory.createClass(
								'<svg class="ymaps-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 33.33h26.667V0H0z"/></defs><g transform="matrix(1 0 0 -1 0 33.33)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g mask="url(#b)"><path d="M13.333 14.664a5.334 5.334 0 1 0 0 10.667 5.334 5.334 0 0 0 0-10.667m0 18.667C5.972 33.33 0 27.36 0 19.997 0 8 10.667 0 13.333 0c2.667 0 13.334 8 13.334 19.998 0 7.364-5.972 13.334-13.334 13.334" fill="#dd2a1b" fill-rule="nonzero"/></g></g></svg>'
					        );
			        	}
			        	return layout;
			        }
	        	},
		        deliveryMapObjs = new ymaps.GeoObjectCollection({});
		   
		        for (var i = city.objs.length - 1; i >= 0; i--) {
					var pvz = city.objs[i],
						markerCoords = [+pvz.coords.split(',')[0],+pvz.coords.split(',')[1]]
						marker = new ymaps.Placemark(markerCoords ,
				    		{
					    		balloonContent: pvz.info
					    	},
					    	{
					    		iconLayout: constructs.placemarkLayout(),
					    		iconShape: {
					                type: 'Rectangle',
					                coordinates: [
					                    [-20, -20], [20, 20]
					                ]
					            },
					            balloonLayout: constructs.balloonLayout(pvz.value, pvz.address, pvz.function),
					            balloonContentLayout: constructs.balloonContentLayout,
					            balloonPanelMaxMapArea: 0,
					            balloonAutoPan: true,
					            balloonOffset: [0, 100]
				    	});
				    deliveryMapObjs.add(marker);
				}
				deliveryMap.geoObjects.add(deliveryMapObjs);
				//центрировать на балуне
				// deliveryMap.geoObjects.events.add('click', function(e){
				// 	var eMap = e.get('target');
				//     deliveryMap.panTo(eMap.geometry._coordinates)
				// });
				// var lastMarker;
				// 	touchedMarkers = [];

				// deliveryMap.geoObjects.events.add('click', function(e){
				// 	var eMap = e.get('target');

				//    	lastMarker = eMap;
				//    	touchedMarkers.push(eMap);
				// });
				$mapBlock.on('click','.js-choose-pvz', function(){
					var info = $(this).closest('.custom-baloon').find('.custom-baloon__content').html(),
						passFunc = $(this).data('function');

					// touchedMarkers.forEach(function(el){
					// 	el.options.set({
					// 		iconLayout: constructs.placemarkLayout
					// 	});	
					// });
					// lastMarker.options.set({
					// 	iconLayout: constructs.placemarkLayoutActive
					// });	
					selectPvz($(this).data('pvz'), $(this).data('address'), info);
					if (passFunc != 'undefined') {
						var funcName = passFunc.split('(')[0],
							funcArgs = passFunc.match(/\((.*?)\)/)[1].split(',')[0];

						window[funcName](funcArgs);
					}
				}).on('click', '.grey-info__handle', function(){
					$(this).closest('.grey-info').addClass('grey-info_shown-info');
				});
				
			}
			
			
		});
	}
	function validate(){
		if ($('.map-place')[0]) {
			if (!memoryAddress && !memoryId) {
				$mapBlock.addClass('valid-error');
				return false;
			}
			$('.map-place').removeClass('valid-error');
		} 
		return true;
	}
	function selectPvz(id,address, info){
		memoryAddress = address;
		memoryId = id;
		memoryInfo = info;
		outputData(id,address, info);
		validate();
		deliveryMap.balloon.close();
	}
	function outputData(id,address, info){
		$('#delivery-value').val(id);
		$('#address-value').val(address);
		$('#pvz-info').html(info).closest('.grey-info').addClass('map-place__value');
	}
	function clear(){
		memoryAddress = undefined;
		memoryId = undefined;
		memoryInfo = undefined;
		$('#delivery-value').val(null);
		$('#address-value').val(null);
		$('#pvz-info').html(null).closest('.grey-info').removeClass('map-place__value');
		
	}
	return {
		init: init,
		validate: validate,
		clear: clear,
		selectPvz: selectPvz
	}
	
})();

var serviceMapModule = (function(){
	var currentCityId,
		cityList = [],
		serviceMap,
		orderCounter = 0,
		$servicesContainer,
	    $typeContainer,
	    $mapPopup,
		defaultCity = {
			name: decodeURI(document.URL.split('=')[1]),
			index : 0
		},
		markerCollection,
		init = function(){
			if($('#service-map')[0]){

				$servicesContainer = $('#loc-services');
				$typeContainer = $('.office-type');
				$mapPopup = $('.map-container-sv');

				ymaps.ready(function(){
					markerCollection = new ymaps.GeoObjectCollection({});
					serviceMap = new ymaps.Map("service-map", {
			        	center: [55.76, 37.64],
			        	zoom: 12,
			        	controls: ['zoomControl', 'typeSelector']
			    	});
			    	var constructs = {
		        		balloonLayout : function(pvzId, pvzaddress, pvzfunc){
		        			return ymaps.templateLayoutFactory.createClass(
								    '<div class="custom-baloon custom-baloon_service-map">'+
								            '<div class="custom-baloon__close-button"><i class="fa fa-times" aria-hidden="true"></i></div>'+
								            '$[[options.contentLayout]]' +
								            '<div class="custom-baloon__arrow"></div>'+
								    '</div>'
								    ,{
									    build: function () {
									        this.constructor.superclass.build.call(this);

									        this._$element = $('.custom-baloon', this.getParentElement());

									        this.applyElementOffset();

									        this._$element.find('.custom-baloon__close-button')
									            .on('click', $.proxy(this.onCloseClick, this));
									    },
									    clear: function () {
									        this._$element.find('.custom-baloon__close-button')
									            .off('click');

									        this.constructor.superclass.clear.call(this);
									    },
									    onSublayoutSizeChange: function () {
									        constructs.balloonLayout().superclass.onSublayoutSizeChange.apply(this, arguments);

									        if(!this._isElement(this._$element)) {
									            return;
									        }

									        this.applyElementOffset();

									        this.events.fire('shapechange');
									    },
									    applyElementOffset: function () {
									        this._$element.css({
									            left: -(this._$element[0].offsetWidth / 2),
									            top: -(this._$element[0].offsetHeight + this._$element.find('.custom-baloon__arrow')[0].offsetHeight)
									        });
									    },
									    onCloseClick: function (e) {
									        e.preventDefault();

									        this.events.fire('userclose');
									    },
									    getShape: function () {
									        if(!this._isElement(this._$element)) {
									            return constructs.balloonLayout().superclass.getShape.call(this);
									        }

									        var position = this._$element.position();

									        return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
									            [position.left, position.top], [
									                position.left + this._$element[0].offsetWidth,
									                position.top + this._$element[0].offsetHeight + this._$element.find('.custom-baloon__arrow')[0].offsetHeight
									            ]
									        ]));
									    },
									    _isElement: function (element) {
									        return element && element[0] && element.find('.custom-baloon__arrow')[0];
									    }
									}
								)
		        		},
				        balloonContentLayout : ymaps.templateLayoutFactory.createClass(
							'<div class="custom-baloon__content">$[properties.balloonContent]</div>'
				        ),
				        placemarkLayout : ymaps.templateLayoutFactory.createClass(
							'<svg class="ymaps-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 33.33h26.667V0H0z"/></defs><g transform="matrix(1 0 0 -1 0 33.33)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g mask="url(#b)"><path d="M13.333 14.664a5.334 5.334 0 1 0 0 10.667 5.334 5.334 0 0 0 0-10.667m0 18.667C5.972 33.33 0 27.36 0 19.997 0 8 10.667 0 13.333 0c2.667 0 13.334 8 13.334 19.998 0 7.364-5.972 13.334-13.334 13.334" fill="#00AEEF" fill-rule="nonzero"/></g></g></svg>'
				        )
		        	};
		        	var urlReq;
		        	if ((document.URL).indexOf('localhost') > 0) {
		        		urlReq = 'map_neoline.json';
		        	} else {
		        		urlReq = '/installation_centers.php';
		        	}
		        	console.log(urlReq)
			    	$.ajax({
						url: urlReq,
						dataType: 'json',
						type: 'GET',
					   	error: function (jqXHR, exception) {
					        var msg = '';
					        if (jqXHR.status === 0) {
					            msg = 'Not connect.\n Verify Network.';
					        } else if (jqXHR.status == 404) {
					            msg = 'Requested page not found. [404]';
					        } else if (jqXHR.status == 500) {
					            msg = 'Internal Server Error [500].';
					        } else if (exception === 'parsererror') {
					            msg = 'Requested JSON parse failed.';
					        } else if (exception === 'timeout') {
					            msg = 'Time out error.';
					        } else if (exception === 'abort') {
					            msg = 'Ajax request aborted.';
					        } else {
					            msg = 'Uncaught Error.\n' + jqXHR.responseText;
					        }
					        console.log('%cAn error has occurred in map ajax data:', 'color: red',msg);
					        $('section.location-map').html(`
					        	<div class="map-error">
					        		Мы сожалеем, но по техническим причинам карта Сервисных центров временно недоступна.<br>
					        		We are sorry service map currently unavailable.<br>
					        		код ошибки: <span>`+ msg +`</span>
					        	</div>
					        `).addClass('location-map_error');
					    },
					   	success(data) {
					   		console.log(data)
					   		console.log('%c ajax-data-succes', 'color: #bada55');
					   		for (var cityI = 0; cityI < data.length; cityI++) {
					   			var cityElm = document.createElement('div');
					   				cityElm.className = 'option-list__item';
					   				cityElm.dataCoords = [+data[cityI].cityCoords.split(',')[0], +data[cityI].cityCoords.split(',')[1]];
					   				cityElm.innerHTML = data[cityI].cityName;
					   				cityElm.mapObjs = [];
					   				cityElm.id = 'city' + cityI;
				   				if (defaultCity.name == data[cityI].cityName) {

				   					defaultCity.index = cityI;
				   					console.log(defaultCity.index)
				   				}
				   				if (data[cityI].objects && data[cityI].objects[0]) {
									for (var objI = 0; objI < data[cityI].objects.length; objI++) {
					   					orderCounter += 1;
					   					var mapObj = data[cityI].objects[objI];
					   						mapObj.coords = [+mapObj.objectCoords.split(',')[0], +mapObj.objectCoords.split(',')[1]];
					   						mapObj.id = orderCounter;
					   					
					   					cityElm.mapObjs.push(mapObj);
					   					
					   					var MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
								            '<div class="custom-baloon-content">$[properties.balloonContent]</div>'
								        );
					   					var marker = new ymaps.Placemark(mapObj.coords ,
							    		{
								    		dataInfo: mapObj.objectInfo,
								    		dataCityId: cityI,
								    		dataOfficeId: mapObj.id,
								    		balloonContent: mapObj.objectBaloon

								    	},
								    	{
								            iconLayout: constructs.placemarkLayout,
								    		iconShape: {
								                type: 'Rectangle',
								                coordinates: [
								                    [0, 0], [40, 40]
								                ]
								            },
								            balloonLayout: constructs.balloonLayout(),
								            balloonContentLayout: constructs.balloonContentLayout,
								            balloonPanelMaxMapArea: 0,
								            balloonAutoPan: true,
								    	});
								    	
								    	markerCollection.add(marker);
					   				}
					   				
				   				} else {
				   					cityElm = null;
				   				}
				   				cityList.push(cityElm);
							   }
							   
							if(cityList.length > 1){
								$('#city-list').html(cityList);
							} else {
								$('#city-list').closest('.location-map').addClass('location-map_one-city');
							}
					   		
					   		
					   		serviceMap.geoObjects.add(markerCollection);
					   		//console.log(cityList);
					   		//console.log('defaultCity', defaultCity.index, cityList[defaultCity.index])
					   		changeCity(cityList[defaultCity.index])
					   		currentCityId = cityList[defaultCity.index].id;
					   		setListners();
					   	}
					   	
					});
				});
			}
		},
		setListners = function(){
			if (window.matchMedia("(min-width:975px)").matches) {
	        	$('.location-map__places').on('click','.office-item', function(){
	        		
	        		var $this = $(this),
	        			targetId = $this.attr('id'),
	        			numId = targetId.replace(/\D/g,'');

	        		markerCollection.each(function (item) {
						if(numId == item.properties._data.dataOfficeId){
							
							item.balloon.open();
							serviceMap.setCenter(item.geometry._coordinates, 16, {
							    checkZoomRange: true
							});

						}
					});
					highlightOffice(numId);
	        	});
	    	}
	    	$('.js-show-map').click(function(){
				$('body').addClass('body_fix');
				var numId = currentCityId.replace(/\D/g,'') || 0;

				$mapPopup.fadeIn(200, function(){
					serviceMap.container.fitToViewport();
				});
				
			});	

			$('#js-close-map').click(function(){
				$mapPopup.fadeOut(200);
				$('body').removeClass('body_fix');
			});
	    	serviceMap.geoObjects.events.add('click', function (e) {
			    var eMap = e.get('target'),
			    infoData = eMap.properties._data;
			    serviceMap.panTo(eMap.geometry._coordinates)
			   	highlightOffice(infoData.dataOfficeId);
			   	if (infoData.dataCityId !== +currentCityId.replace(/\D/g,'')) {
			   		changeCity(cityList[infoData.dataCityId])
			   	}
			   	
			}).add('balloonclose', function(){
				$('.office-item').removeClass('office-item_active');
			});
			$('.city-select').on('click', '.option-list__item', function(){
				changeCity(this);
			});
		}, 
		changeCity = function(city){
				servicesHtml(city);
				serviceMap.setCenter(city.dataCoords, 11, {
				    checkZoomRange: true
				});
				currentCityId = city.id;
				window.selectOption($('#' + currentCityId));
		},
		highlightOffice = function(id){

			setTimeout(function(){
				$('.office-item').removeClass('office-item_active');
				var targetOficce = $('#pin' + id),
					targetOficceOffset = targetOficce.offset().top - $servicesContainer.offset().top;

				targetOficce.addClass('office-item_active');
				
				$servicesContainer.animate({
					scrollTop: targetOficce.outerHeight() * targetOficce.index() + 10 * targetOficce.index()
				}, 300);
				
				
				
			},100);
		}, 
		servicesHtml = function(city){
			//console.log('servicesHtml-city',city)
			$typeContainer.removeClass('office-type_empty');
			var services = [];
			var objs = city.mapObjs;

			for (var i = 0; i < objs.length; i++) {
				var officeItem = document.createElement('div');
				officeItem.className = 'office-item';
				officeItem.innerHTML = "<div class='office-item__inner'>" + objs[i].objectInfo + "</div>";
				officeItem.id = 'pin' + objs[i].id;
				services.push(officeItem);
			}
			//console.log('servicesHtml-servs',services);
			if (!services[0]) {
				$servicesContainer.closest($typeContainer).addClass('office-type_empty');
			}
			//console.log('servicesHtml-container',$servicesContainer);
			$servicesContainer.html(services);
		}
		return {
			init: init
		}
})();

var loader = (function(){
	var target,
		trackPositon = false,
		loader = $('<div class="loader"></div>'),
		windowHeight,
		loaderPosition = function(scrolled){
			if (trackPositon) {
				var loaderPlace = windowHeight/2 + scrolled - target.offset().top;
				if (loaderPlace > 50 &&
					loaderPlace < target.outerHeight() - 50) {
					loader.css({
						'background-position' : 'center ' + loaderPlace + 'px'
					});
				}
			}
			
		},
		destroy = function(selector){
			if (selector) {
				$(selector).removeClass('in-load').find(loader).remove();
			} else if (target){
				target.removeClass('in-load').find(loader).remove();
			}
			trackPositon = false;
		},
		init = function(selector){
			target = $(selector);
			target.addClass('in-load').append(loader); 
			windowHeight = $(window).height();
			if (target.outerHeight() > windowHeight) {
				trackPositon = true;
				loaderPosition($(window).pageYOffset || document.documentElement.scrollTop);
			}
		}
	return {
		init: init,
		loaderPosition: loaderPosition,
		destroy: destroy
	}


})();

var visualTimer = (function(){
	var timer, circleTimer, initValue,timerCounter,
	run = function(){
		initValue = $('.timout-container__timeout').text(),
		circleTimer = $('.circle-timer');

		circleTimer.addClass('circle-timer_active').css({
			'animation-duration': initValue +'s'
		});

		timer = setInterval(function() {
			timerCounter = $('.timout-container__timeout'),
			timerCounterVal = +timerCounter.text();

			if (timerCounterVal > 0) {
				timerCounter.html( timerCounterVal - 1);
			} else {
				stop();
			}
		}, 1000);
	},
	stop = function(){
		clearInterval(timer);
		circleTimer.removeClass('circle-timer_active').css({
			'animation-duration': null
		});
		
		if (typeof orderLoaderResult == 'function') { 
		  	orderLoaderResult();
		}
		timerCounter.html(initValue);
	}
	return {
		run: run
	}
})();


(function( $ ){

	$.fn.acordeon = function(opts) {

		var acordeons = function(element,opts){
			var that = this,
				currentItem = $(element),
				relativeItems = $('.' + $(element).attr('class')),
				handle = $(element).find(opts.handle),
				list = $(opts.list),
				connected = true,
				toggle = function(){
					if(currentItem.hasClass('list-active')){
	 					
	 					that.close();
	 				} else {	
	 					if(connected){
	 						closeAll();
	 					}
	 					that.open();
	 				}
				},
				closeAll = function(){
					relativeItems.removeClass('list-active');
					list.slideUp(200);
				}
				if(opts.connected != undefined){
					connected = opts.connected;
				}
				that.open = function(){
					currentItem.addClass('list-active').find(list).slideDown(200);
				};
				that.close = function(){
					currentItem.removeClass('list-active').find(list).slideUp(200);
				};
				that.forceOpen = function(){
					currentItem.addClass('list-active').find(list).css('display','block');
				}
				that.destroy = function(){
					handle.off('click', toggle);
					currentItem.removeClass('acc-inited list-active');
					list.fadeIn(50);
				};
				list.css('display','none')
				currentItem.addClass('acc-inited');
				handle.on('click', toggle);
		};

		var that = this,
            l = that.length,
            i;
        for (i = 0; i < l; i++) {
            if (typeof opts == 'object'){
            	that[i].acordeon = new acordeons(that[i], opts);
            } else {
            	that[i].acordeon[opts]();
            }
        }
   	}; 
})(jQuery);

var acordeonManage = (function(){
	var init = function(){
		$('.accordion-coupon').acordeon({
	 		handle: '.accordion-coupon__handle',
	 		list: '.accordion-coupon__content'
	 	});
		$('.quest-accordeon').acordeon({
	 		handle: '.quest-accordeon__handle',
	 		list: '.quest-accordeon__text'
	 	});

	 	if (window.matchMedia("(max-width:1120px)").matches) {
			
			$('.footer-list').acordeon({
		 		handle: '.footer-list__title',
		 		list: '.footer-list__list'
		 	});
		}
	}
	return {
		init: init
	}
})();
var landingFade = (function(){
	$.fn.inView = function(scrolled) {
		var that = $(this);
		return scrolled <= that.offset().top + that.outerHeight()/2  && scrolled + window.innerHeight > that.offset().top + that.outerHeight()/2;
	};
	var fadeBlocks;
	init = function(){
		fadeBlocks = $('.land-gallery__item');
		scrollShow(window.pageYOffset || document.documentElement.scrollTop);
	},
	scrollShow = function(scrolled){
		fadeBlocks.each(function(index,elm){
			currentBlock = $(this);
			if(currentBlock.inView(scrolled)){
				var dataSrc;
				window.matchMedia("(max-width:935px)").matches ? dataSrc = currentBlock.data('mobile-src') : dataSrc = currentBlock.data('desktop-src');
				currentBlock.addClass('shown').find('img').attr('src', dataSrc);
				console.log()
			}
		});
	}
	return {
		scroll: scrollShow,
		init: init
	}
})()