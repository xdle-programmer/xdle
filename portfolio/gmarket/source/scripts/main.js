
$(document).ready(function(){

	var sliders = (function(){
		var $productSlider = $('.product-slider__main-block').slick({
			arrows: false,
			slidesToShow: 1,
			fade: true,
	  		slidesToScroll: 1,
	  		dots: true,
	  		asNavFor: '.product-slider__controls-slider',
	  		customPaging: function(){
				return null;
			},
			responsive: [
			    {
			      breakpoint: 1040,
			      settings: {
			        dots: false
			      }
			    }
			    
		    ]
		});
		var $productSliderControls = $('.product-slider__controls-slider').slick({
			arrows: false,
			slidesToShow: 3,
			vertical: true,
	  		slidesToScroll: 1,
	  		swipeToSlide: true,
	  		focusOnSelect: true,
	  		asNavFor: '.product-slider__main-block',
	  		verticalSwiping: true,
	  		responsive: [
			    {
			      breakpoint: 1040,
			      settings: {
			        vertical: false,
			        verticalSwiping: false
			      }
			    }
			    
		    ]
		});

		var $relatedSlider = $('.related-slider').slick({
			arrows: true,
			slidesToShow: 6,
	  		slidesToScroll: 1,
	  		swipeToSlide: true,
	  		prevArrow: '<div class="slick-arrow slick-arrow_round slick-arrow_prev"></div>',
			nextArrow: '<div class="slick-arrow slick-arrow_round slick-arrow_next"></div>',
			dots: true,
	  		customPaging: function(){
				return null;
			},
			responsive: [
			    {
			      breakpoint: 1220,
			      settings: {
			        slidesToShow: 5,
			      }
			    },
			    {
			      breakpoint: 1020,
			      settings: {
			        slidesToShow: 4,
			      }
			    },
			    {
			      breakpoint: 820,
			      settings: {
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 650,
			      settings: {
			        slidesToShow: 3,
			        variableWidth: true,
			        arrows: false
			      }
			    }
		    ]
		});

		var cardSlider = $('.card-slider'),
			tabSlider = $('.tab-nav');
		
		var initSlider = function(){
			if (!cardSlider.hasClass('slick-initialized')) {
				var onThreeOpions = {
					arrows: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					swipeToSlide: true,
					prevArrow: '<div class="slick-arrow slick-arrow_prev"></div>',
					nextArrow: '<div class="slick-arrow slick-arrow_next"></div>',
					dots: true,
			  		customPaging: function(){
						return null;
					},
					responsive: [
					    {
					      breakpoint: 1190,
					      settings: {
					        slidesToShow: 3,
					      }
					    },
					    {
					      breakpoint: 930,
					      settings: {
					        slidesToShow: 2,
					      }
					    },
						{
							breakpoint: 400,
							settings: {
								slidesToShow: 3,
								variableWidth: true,
								arrows: false,
								centerMode: true,
							}
						}
				    ]
				},
				onFourOpions = {
					arrows: true,
					slidesToShow: 4,
					slidesToScroll: 1,
					swipeToSlide: true,
					prevArrow: '<div class="slick-arrow slick-arrow_prev"></div>',
					nextArrow: '<div class="slick-arrow slick-arrow_next"></div>',
					responsive: [
					    {
					      breakpoint: 1190,
					      settings: {
					        slidesToShow: 3,
					      }
					    },
					    {
					      breakpoint: 930,
					      settings: {
					        slidesToShow: 2,
					      }
					    },
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								arrows: false,
								variableWidth: true,
							}
						}
				    ]
				},
				sliderOptions;

				cardSlider.each(function(){
					if (!$(this).hasClass('slick-initialized')) {
						if ($(this).hasClass('card-slider_start-quater')) {
							sliderOptions = onFourOpions;
						} else if ($(this).hasClass('card-slider_start-third')){
							sliderOptions = onThreeOpions;
						}
						cardSlider.slick(sliderOptions);
					}
				});
				
				
			} else if (cardSlider.hasClass('slick-initialized') && window.matchMedia("(max-width:650px)").matches) {
				cardSlider.slick("unslick");
			}
		};
		initSlider();
		return {
			reinit: initSlider
		}
	})();

	var resizer = (function(){
		var freqHandler;
		$(window).on('resize', function(){
			if (freqHandler) {
				clearTimeout(freqHandler);
			}
			freqHandler = setTimeout(function(){
				toDo();
			},500);
			function toDo(){
				sliders.reinit();
				footerList.resize();
				sideMenu.resize();
				hintModal.calcPosition();
			}		
		});
	})();

	var viewSlider = $('.quick-view__view-slider').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-arrow quick-view__arrow slick-arrow_round slick-arrow_prev"></div>',
		nextArrow: '<div class="slick-arrow quick-view__arrow slick-arrow_round slick-arrow_next"></div>',
		dots: true,
		customPaging: function(){
			return null;
		},
	});

	$('.acordeon').acordeon({
 		handle: '.acordeon__handle',
 		list: '.acordeon__content',
 		connected: $('.acordeon').data('connected')

 	});

	var footerList = (function(){
		var $accHandle = $('.nav-list__title'),
			$accWrap = $('.nav-list'),
			inited = false,
			$accList = $('.nav-list__content');
		
		function resize(){
			if (window.matchMedia("(max-width:1000px)").matches && !inited){
				$accWrap.acordeon({
			 		handle: '.nav-list__title',
			 		list: '.nav-list__content'
			 	});
			 	inited = true;
			} else if (window.matchMedia("(min-width:1000px)").matches && inited){
				$accWrap.acordeon('destroy');
				inited = false;
			}
		}
		resize();
		return {
			resize: resize
		}
	})();

	

	var mainMenu = (function(){
		var $menuItem = $('.main-list__cat-row'),
			$menuList = $('.catalog-menu__main-list'),
			enterState = true;
			$menuList.menuAim({
				activate: function(item){
					$(item).addClass('main-list__cat-row_on-hover');
				},
				deactivate: function(item){
					$(item).removeClass('main-list__cat-row_on-hover');
				},
				enter: function(item) {
					if (enterState) {
						$(item).addClass('main-list__cat-row_on-hover');
						enterState = false;
					}
				},
				exitMenu: function() {
					$menuItem.removeClass('main-list__cat-row_on-hover');
					enterState = true;
				},
				rowSelector: $menuItem
			});
	})();
	
	var scrollTrack = this.scrollTrack = (function(){
		var $window = $(window),
			scrolled = $window[0].pageYOffset || document.documentElement.scrollTop,
			$pannel = $('.head-pannel'),
			$header = $('.header'),
			headSize = $header.outerHeight(),
			goTo = function(target, margin){
				if (target) {
					var wrapper = $('html, body'),
						pannelHeight = $pannel.outerHeight() || 0,
						spaceMargin = margin || 0,
						targetDistance  = target.offset().top - spaceMargin;

					if ($window[0].matchMedia("(max-width:1230px)").matches) {
						targetDistance -= pannelHeight
					} 

					wrapper.animate({
				        scrollTop: targetDistance
				    }, 1000);
				}
			};

		$window.on('scroll', function() {
			scrolled = $window[0].pageYOffset || document.documentElement.scrollTop;
			pannelTrack();
			loader.loaderPosition(scrolled);
			comparePage.fixPannel(scrolled);
		});
		function pannelTrack(){
			if ($window[0].matchMedia("(max-width:1230px)").matches && scrolled > headSize) {
				$pannel.addClass('head-pannel_active');
			} else {
				$pannel.removeClass('head-pannel_active');
			}
		}
		pannelTrack();

		return {
			scrolled : scrolled,
			go: goTo
		}
	})();
	var clickers = (function(){
		$('.js-open-side-menu, [data-menu]').click(function(){
			var targetMenu = $(this).data('menu');
			if (targetMenu == 'menu-mobile') {
				menuToggle.openSideMenu('menu-mobile', true);
			} else {
				menuToggle.openSideMenu(targetMenu);
			}
			
		});
		$('.js-mob-search').click(function(e){
			e.stopPropagation();
			$('.search-mobile').toggleClass('search-mobile_active');
			$('body').toggleClass('stop-scroll');
			isNoTarget($('.search-mobile'), function(){
			 	$('.search-mobile').removeClass('search-mobile_active');
			}, $(this));
		});

		$('.catalog-menu__head').click(function(){
			var $menu = $('.catalog-menu'),
				$menuList = $('.catalog-menu__main-list')
			if(!$menu.hasClass('catalog-menu_unwraped')){
				$menu.addClass('catalog-menu_active');
				$menuList.slideDown(200, function(){
					isNoTarget($menuList, function(){
					 	$menuList.slideUp(200);
					 	$menu.removeClass('catalog-menu_active');
					});
				});
			}
		});

		$('.filter-section__title').click(function(){
			$(this).closest('.filter-section')
				   .toggleClass('filter-section_wrapped')
				   .find('.filter-section__content')
				   .slideToggle(200);
		});

		$('.filter-section__content').acordeon({
			handle: '.js-hidden-filter',
			list: '.filter-section__hidden',
			connected:false
   
		});
		sideFilter.init();

		$(document).on('click','.toggle-text__handle',function(){
			$(this).closest('.toggle-text').toggleClass('toggle-text__shown');
			return false;
		}).on('click','[data-popup]',function(e){
			e.preventDefault();
			popuper.open($(this).data('popup'))
		}).on('click','[data-popup-info]',function(e){
			e.preventDefault();
			popuper.info($(this).data('popup-info'))
		}).on('click','.input-clear', function(){
			$(this).parent().find('input').val(null);
		});

		comparePage.init();
		hintModal.init();
	})();

	var formTabSwitch = (function(){
		var tabs = $('.form-tab'),
			showTab = function(index, fromevent){
				tabs.css('display', 'none').eq(index).css('display','block');
				if (!fromevent) {
					$('.js-tab-switch').eq(index).find('input').prop('checked','true');
				}
				
			};
		$('.js-tab-switch input').change(function(){
			var index = $(this).closest('.checkbox').index();
			showTab(index, true);
			location.hash = 'formSwitch&=' + index;
		});
		
		return{
			showTab: showTab
		}
	})();

	var urlControl = (function(){
		var anchorType = location.hash.split('&=')[0].replace('#',''),
			anchorValue = location.hash.split('&=')[1];
		
		reactTypes = {
			formSwitch: function (){
				formTabSwitch.showTab(anchorValue)
			},
			acordeon: function(){
				var targetAccordeon = $('#' + anchorValue);
				
				if (targetAccordeon[0]) {
					targetAccordeon.acordeon('open');
					scrollTrack.go(targetAccordeon, 10);
					
				}
			}

		};
		if (anchorType) {
			reactTypes[anchorType]();
		}
		
	})();

	var videoBlock = (function(){
		var $vidBlock = $('.video-block');

		$vidBlock.each(function(){
			$(this).css({
				'background-image': 'url(https://img.youtube.com/vi/'+ $(this).data('video') +'/0.jpg)'
			})
		});
		$vidBlock.click(function(){
			insertVideo($(this));
		});
		
		function insertVideo(that){

			if (!that.hasClass('video-item_loaded')) {
				that.addClass('video-item_loaded');

				var iframe = document.createElement("iframe"),
					iframeAttrs = {
						"src": 'https://www.youtube.com/embed/' + that.data('video') + '?autoplay=1',
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
		}

		return {
			destroy: destroy
		}
	})();

	$(document).on('change input','[data-validation]', function(){
		validation.isValid($(this));
	}).on('click keydown input', '[data-validation="code"]', function(e){
		validation.codeControl(e, $(this));
	});

	var memoryForm = (function(){
		var form = $('.js-memory-form'),
			inputs = form.find('input[type="text"]'),
			storageMemory = sessionStorage.formMemory;
		inputs.on('input',function(){
			var memoryArr = [];
			inputs.each(function(){
				memoryArr.push($(this).val());
			});
			sessionStorage.formMemory = memoryArr;
		});
		if (storageMemory) {
			inputs.each(function(i){
				var itVal = storageMemory.split(',')[i]
				if (itVal) {
					$(this).val(itVal).change()
				}
				
			});
		}
	})();	


});

var menuToggle = (function(){
	var $body = $('body'),
		currentMenu;

	function openSideMenu(menu, init) {
		if (!$body.hasClass('show-side-menu')) {
			$body.addClass('show-side-menu active-'+ menu);
			currentMenu = menu;
			setTimeout(function() {
				isNoTarget($('.'+menu), function(){
					closeSideMenu();
				}, $('.js-close-side-menu'));
			}, 100);
			if (init) {
				sideMenu.init();
			}
		}
	}
	function closeSideMenu(){
		$body.removeClass();
		if (currentMenu == 'menu-mobile') {
			sideMenu.clear();
		}
	}
	return {
		openSideMenu: openSideMenu,
		closeSideMenu: closeSideMenu
	}
})();

var sideMenu = (function(){
	var $dropLinks = $('.menu-row_has-drop > .menu-row__inner'),
		$backLinks = $('.menu-row__inner_go-back'),
		$moveMask = $('.menu-mobile__area'),
		$menuSection = $('.menu-section'),
		$menuMainHeight = $('.menu-mobile').outerHeight(),
		$menuMainWidth = $('.menu-mobile').outerWidth(),
		wrapLength = 0;

	function init(){
		if (!$moveMask.hasClass('inited')) {
			for (var i = $menuSection.length - 1; i >= 0; i--) {
				var iterLenght = $menuSection.eq(i).parents('.menu-section').length;
				if (iterLenght > wrapLength) {
					wrapLength = iterLenght;
				}
			}
			$moveMask.addClass('inited').css('width', (wrapLength + 1)*$menuMainWidth + 10 + 'px');
		}

		$dropLinks.click(function(e){
			e.preventDefault();
			$(this).closest($menuSection).prop('scrollTop', 0);
			moveMenu($(this).next(), 'forward');
		});

		$backLinks.click(function(){
			var currentMenuSection = $(this).parents('.menu-section').eq(1);
			moveMenu(currentMenuSection, false);
		});
	}
	function resize(){

		if (window.matchMedia("(max-width: 1230px)").matches) {
			$menuMainHeight = $('.menu-mobile').outerHeight();
			$menuMainWidth = $('.menu-mobile').outerWidth();
			$moveMask.removeClass('inited');
			clear();
			init();
		}
	}
	function moveMenu(currentMenuSection, forward){
		var menuLvl = currentMenuSection.parents('.menu-section').length;
		if (forward) {
			currentMenuSection.css({
				'height': $menuMainHeight,
				'top': -1 * currentMenuSection.closest('.menu-row').offset().top + 'px',
				'display': 'block',
				'overflow': 'auto'
			}).parents('.menu-section').css({
				'height': 'auto',
				'overflow': 'visible'
			});
		} else {
			currentMenuSection.css({
				'height': $menuMainHeight,
				'overflow': 'auto'
			}).find('.menu-section').css({
				'top': '',
				'display':'none'
			});
		}
		$moveMask.css({
			'transform': 'translateX('+(-$menuMainWidth)*menuLvl+'px)',
		});
	}

	function clear(){
		moveMenu($menuSection.eq(0), false);
		$backLinks.add($dropLinks).off('click');
	}
	return {
		clear : clear,
		init: init,
		resize: resize
	}
})();

var validation = (function(){
	var currentInput, inputWrap, currentValue,
	validateEmail = function(){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(currentValue);
	},
	validatePhone = function(){
		var masks = ['+7(000)000-00-00', '8(000)000-00-00'];

		function setMask(type){
			currentInput.mask(masks[type]);
			currentInput[0].phoneType = type;
			if (currentInput.is(':focus')) {
				setCaretPosition(currentInput, currentInput.val().length)
			}
		}
		if (currentValue.length > 0) {
			currentValue[0] == '+' || currentValue[0] == '7' ? setMask(0) : setMask(1);
			if(currentInput.val().length == masks[currentInput[0].phoneType].length){
				return true
			} else {
				return false
			}
		} else {
			currentInput.unmask();
		}
	},
	validatePassword = function(){
		
		var form = currentInput.closest('form'),
			otherPasswords = form.find('input[type="password"]'), //все инпуты тип пароль в форме 
			isLast;
			
		// перебираю все исходя из логики что в 1 форме, только 2 инпута
		// и если индекс нуль - false, если индекс 1 - true 	
		otherPasswords.each(function(index, elm){
			if(currentInput.is(elm)){
				isLast = index;
			}
		});
		
		if (isLast && currentValue === otherPasswords.first().val() && otherPasswords.first().hasClass('filled')) {
			return true;
			
		} else if(!isLast){
			var passHint = inputWrap.find('.password-hint');
			if (passHint[0]) {
				passwordHelpHint(passHint)
			}
			//финальная валидация пароля
			return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~]{5,}$/.test(currentValue);

		}
		return false;
	},
	passwordHelpHint = function(passHint){
		//проверка всех шагов ниже
		function toggleStep(val,name){
			val ? passHint.find(name).addClass('step-check') : passHint.find(name).removeClass('step-check');
		}
		toggleStep(currentValue.length >= 5, '.password-steps_length'); //более 5 символов
		toggleStep(/[A-Z]/.test(currentValue), '.password-steps_upper-letter'); //хотя бы 1 большая буква
		toggleStep(/[a-z]/.test(currentValue), '.password-steps_lower-letter'); //одна маленькая
		toggleStep(/\d/.test(currentValue), '.password-steps_num'); //хотя бы 1 цифра
		
	},
	validateLogin = function(e){
		if(currentValue.length < 1){
			currentInput.unmask();
		}
		if (!currentInput.is(':focus')) {
			 if (validateEmail()) {
				return true;
			} else if (
				(/[+7-8]/).test(currentValue[0]) &&
				!(/\@/).test(currentValue) &&
				validatePhone()
			) {
				return true
			}
		}
		return false;
	},
	validateCode = function(){
		if(currentInput[0].actualValue.length == currentInput.attr('maxlength')){
			return true;
		} else {
			return false;
		}
	},
	codeControl = function(e, input){
		
		var currentInput = input,
			value = currentInput.val(),
			filler = "–",
			maxLength = currentInput.attr('maxlength');
			
		currentInput[0].actualValue = value.split(filler).join('');

		var filledValue = currentInput[0].actualValue;
		while(filledValue.length < maxLength){
			filledValue += filler;
			
		}
		if(e.type == 'keydown'){
			currentInput.val(currentInput[0].actualValue);
		} else if(e.type == 'input'){
			currentInput.val(filledValue);
		} else if(e.type == 'click'){
			setCaretPosition(currentInput, 0);
			currentInput.val(null);
		}
		setCaretPosition(currentInput, currentInput[0].actualValue.length)
			
		if(currentInput[0].actualValue.length == maxLength){
			currentInput.blur();
		}
	},
	validateField = function(input){
		
			currentInput = $(input);
			inputWrap = currentInput.closest('.regular-input');
			currentValue = currentInput.val();

		var	inputType = currentInput.attr('type'),
			validType = currentInput.data('validation'),
			valid = false;
			switch (validType) {
				case 'phone':
					valid = validatePhone();
					break;
				case 'email':
					valid = validateEmail();
					break;
				case 'password':
					valid = validatePassword();
					break;
				case 'login':
					valid = validateLogin();
					break;
				case 'text':
					valid = currentValue.length > 0;
					break;
				case 'check':
					valid =  currentInput.prop('checked');
					break;
				case 'code':
					valid = validateCode();
					break;
				default: 

					return false;
			}
			
		if(valid){
			currentInput.addClass('filled').removeClass('valid-error');
			inputWrap.removeClass('regular-input_error').addClass('regular-input_filled');
		} else {
			currentInput.addClass('valid-error').removeClass('filled');
			inputWrap.addClass('regular-input_error').removeClass('regular-input_filled');
		}
		return valid;
	},
	validateForm = function(form, scrolltoError){
		var valid = true,
			requiredInputs = form.find('[data-validation]');
			

			requiredInputs.each(function(){
				if(!validateField($(this))){
					valid = false;
				}
			});

			if (scrolltoError && !valid && !$('body').hasClass('stop-scroll')) {
				$('.valid-error').each(function(){
					if ($(this).is(':visible')) {
						document.scrollTrack.go($(this), 35);
						return false;
					} else if($(this).is('[type="checkbox"]')){
						document.scrollTrack.go($(this).closest('label'), 35);
						return false;
					}
				});
				
			}
		return valid;
	},
	setCaretPosition = function(elm, caretPos) {
		//передвижение каретки ввода текста
	    var elem = $(elm)[0]

	    if(elem != null) {
	        if(elem.createTextRange) {
	            var range = elem.createTextRange();
	            range.move('character', caretPos);
	            range.select();
	        }
	        else {
	            if(elem.selectionStart) {
	                elem.focus();
	                elem.setSelectionRange(caretPos, caretPos);
	            }
	            else{
	                elem.focus();
	            }
	        }
	    }
	},
	isValid = function(elm, scrolltoError){
		var target = $(elm);
		if (scrolltoError == undefined) {
			scrolltoError = true;
		}
		if (target[0]) {
			if (target.is('input') || target.is('textarea')){
				return validateField(target);
			}
			else if (target.is('form')) {
				return validateForm(target, scrolltoError);
			} else {

				return false;
				
			}
		} else {

		}
		return false;
		
	};
	
	return {
		isValid: isValid,
		codeControl: codeControl
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
		};
	return {
		init: init,
		loaderPosition: loaderPosition,
		destroy: destroy
	}


})();

function isNoTarget(selector, doFunc, exception){
	var outsideClick = function(event){
		if (!$(event.target).closest(selector)[0] || $(event.target).closest(exception)[0]) {
			reset();
			if (doFunc) {
				return doFunc();
			}
		}
	};
	function reset(){
		$(document).off('click', outsideClick);
	}
	$(document).on('click', outsideClick);
	return {
		reset: reset,
	}
}

var popuper = (function(){
	var activePops = false,
	openPopup = function(target, noTransition){

		var popTarget = $('.popup.' + target);

		if (activePops || noTransition) {
			closePopup(true);
			popTarget.css('display','block');
		} else {
			closePopup();
			popTarget.fadeIn(200);
		}
		$('body').addClass('stop-scroll');
		activePops = true;
		isNoTarget($('.popup__block'), function(){
		 	closePopup();
		}, $('.js-close-popup'));
	},
	closePopup = function(noTransition){
		$('body').removeClass('stop-scroll');
		if (noTransition) {
			$('.popup').css('display','none');
		} else {
			$('.popup').fadeOut(200);
		}
		activePops = false;
	},
	popupInfo = function(info){
		openPopup('popup_info');
		$('.popup_info').find('.popup__info-msg').text(info);
	};

	return {
		open: openPopup,
		close: closePopup,
		info: popupInfo
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

var test = [
	{
		"cityCoords": "56.85237874030841,53.20274949999994",
		"objs": [
			{
				"coords": "56.876112067836935, 53.29310249999993",
				"info": "<h1>Москва Щербаковская_9948_С </h1> 105318, г.Москва м.Семёновская, ул.Щербаковская, д.7 Время работы: пн-вс: 09.00-22.00",
				"options": {
					"value": "pvz"
				}
			},
			{
				"coords": "56.82827106789506, 53.13368699999995",
				"info": "<h1>Пвз2</h1>  Ижевск  Клубная ул  д.67 Режим работы: пн-пт:10.00-19.30",
				"options": {
					"value": "pvz"
				}
			},
			{
				"coords": "56.82285806788111, 53.20870549999993",
				"info": "<h1>Москва Щербаковская_9948_С </h1> 123",
				"options": {
					"value": "pvz"
				}
			}
		]
	}
]

var pvzMap = (function() {
  var deliveryMap,
		$mapBlock,
		callbackFunc,
    mapData = {};
  function init(data) {
		$mapBlock = $(".map-module");
		$('.js-map-unwrap').click(function(){
			$mapBlock.removeClass('map-wrapped').addClass('map-unwrapped');
			deliveryMap.container.fitToViewport();
		});
		$('.js-close-map').click(function(){
			mapClose();
		});
    if (mapData && mapData.info) {
      selectPvz(mapData);
    }
    var city = data[0];
    ymaps.ready(function() {
      if ($mapBlock[0] && !$mapBlock.hasClass("map-init")) {
        $mapBlock.addClass("map-init");
        deliveryMap = new ymaps.Map("delivery-map", {
          center: [
            +city.cityCoords.split(",")[0],
            +city.cityCoords.split(",")[1]
          ],
          zoom: 12,
          controls: ["zoomControl"]
        });

        var constructs = {
            balloonLayout: function(data) {
              return ymaps.templateLayoutFactory.createClass(
                '<div class="custom-baloon">' +
                  '<div class="custom-baloon__close-button"><i class="fa fa-times" aria-hidden="true"></i></div>' +
                  "$[[options.contentLayout]]" +
                  '<div class="button custom-baloon__button js-choose-pvz" onclick="window.DPD.Pickup.selectPoint(' + data.options + ')"  data-options="' +
                  data.options +
                  '">Выбрать</div>' +
                  '<div class="custom-baloon__arrow"></div>' +
                  "</div>",
                {
                  build: function() {
                    this.constructor.superclass.build.call(this);

                    this._$element = $(
                      ".custom-baloon",
                      this.getParentElement()
                    );

                    this.applyElementOffset();

                    this._$element
                      .find(".custom-baloon__close-button")
                      .on("click", $.proxy(this.onCloseClick, this));
                  },
                  clear: function() {
                    this._$element
                      .find(".custom-baloon__close-button")
                      .off("click");

                    this.constructor.superclass.clear.call(this);
                  },
                  onSublayoutSizeChange: function() {
                    constructs
                      .balloonLayout()
                      .superclass.onSublayoutSizeChange.apply(this, arguments);

                    if (!this._isElement(this._$element)) {
                      return;
                    }

                    this.applyElementOffset();

                    this.events.fire("shapechange");
                  },
                  applyElementOffset: function() {
                    this._$element.css({
                      left: -(this._$element[0].offsetWidth / 2),
                      top: -(
                        this._$element[0].offsetHeight +
                        this._$element.find(".custom-baloon__arrow")[0]
                          .offsetHeight
                      )
                    });
                  },
                  onCloseClick: function(e) {
                    e.preventDefault();

                    this.events.fire("userclose");
                  },
                  getShape: function() {
                    if (!this._isElement(this._$element)) {
                      return constructs
                        .balloonLayout()
                        .superclass.getShape.call(this);
                    }

                    var position = this._$element.position();

                    return new ymaps.shape.Rectangle(
                      new ymaps.geometry.pixel.Rectangle([
                        [position.left, position.top],
                        [
                          position.left + this._$element[0].offsetWidth,
                          position.top +
                            this._$element[0].offsetHeight +
                            this._$element.find(".custom-baloon__arrow")[0]
                              .offsetHeight
                        ]
                      ])
                    );
                  },
                  _isElement: function(element) {
                    return (
                      element &&
                      element[0] &&
                      element.find(".custom-baloon__arrow")[0]
                    );
                  }
								}
              );
            },
            balloonContentLayout: ymaps.templateLayoutFactory.createClass(
              '<div class="custom-baloon__content">$[properties.balloonContent]</div>'
            ),
            placemarkLayout: ymaps.templateLayoutFactory.createClass(
              '<svg class="ymaps-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 33.33h26.667V0H0z"/></defs><g transform="matrix(1 0 0 -1 0 33.33)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g mask="url(#b)"><path d="M13.333 14.664a5.334 5.334 0 1 0 0 10.667 5.334 5.334 0 0 0 0-10.667m0 18.667C5.972 33.33 0 27.36 0 19.997 0 8 10.667 0 13.333 0c2.667 0 13.334 8 13.334 19.998 0 7.364-5.972 13.334-13.334 13.334" fill="#ff5859" fill-rule="nonzero"/></g></g></svg>'
            )
          },
          deliveryMapObjs = new ymaps.GeoObjectCollection({});

        for (var i = city.objs.length - 1; i >= 0; i--) {
          var pvz = city.objs[i],
            markerCoords = [
              +pvz.coords.split(",")[0],
              +pvz.coords.split(",")[1]
						];
          marker = new ymaps.Placemark(
            markerCoords,
            {
              balloonContent: pvz.info
            },
            {
              iconLayout: constructs.placemarkLayout,
              iconShape: {
                type: "Rectangle",
                coordinates: [[0, 0], [28, 38]]
              },
              balloonLayout: constructs.balloonLayout({
                options: JSON.stringify(pvz.options).split('"').join("'")
							}
                
              ),
              balloonContentLayout: constructs.balloonContentLayout,
              balloonPanelMaxMapArea: 0,
              balloonAutoPan: true,
              balloonOffset: [0, 100]
            }
          );
          deliveryMapObjs.add(marker);
        }
        deliveryMap.geoObjects.add(deliveryMapObjs);
        //центрировать на балуне
        // deliveryMap.geoObjects.events.add('click', function(e){
        // 	var eMap = e.get('target');
        //     deliveryMap.panTo(eMap.geometry._coordinates)
        // });

        $mapBlock.on("click", ".js-choose-pvz", function() {
          var info = $(this)
              .closest(".custom-baloon")
              .find(".custom-baloon__content")
							.html();
          selectPvz({
						info: info,
						options: JSON.parse($(this).data("options").split("'").join('"'))
					});
        });
      }
    });
  }
  function validate() {
    if ($(".map-place")[0]) {
      if (!mapData.adress) {
        $mapBlock.addClass("valid-error");
        return false;
      }
      $mapBlock.removeClass("valid-error");
    }
    return true;
	}
	function mapClose(){
		$mapBlock.addClass('map-wrapped').removeClass('map-unwrapped');
	}
  function selectPvz(data) {
		mapData = data;
		mapClose();
		$mapBlock.addClass('pvz-selected');
    outputData(data.info);
		validate();
		deliveryMap.balloon.close();
		if(typeof callbackFunc === 'function'){
			callbackFunc(data)
		}
  }
  function outputData(info) {
    $("#pvz-info").html(info);
	}
	function setCallback(f){
		callbackFunc = f;
	}
  return {
    init: init,
		validate: validate,
		select: setCallback
  };
})();

var comparePage = (function(){
	var dataRow, compareModule, dataCell, compareProduct, compareHead, compareSlider,
		init = function(){
			compareModule = $('.js-compare-module');
			dataRow = $('.compare-table__row');
			dataCell = $('.compare-table__cell');
			compareProduct = $('.compare-slider__slide');
			compareHead = $('.compare-products:visible');
			compareSlider = $('.compare-slider');

			compareData();
			checkProdlength();

		},
		sliderFix = function(){
			compareSlider.slick('setPosition');
			compareHead = $('.compare-products:visible');
		},
		checkProdlength = function(currentModule){
			if(currentModule && currentModule[0]){
				currentModule.each(function(){
					var moduleProds = $(this).find(compareProduct),
						moduleSlider = $(this).find(compareSlider);
					if (moduleProds.length > 0 && !moduleSlider[0].sliderInited) {
						setSlider(moduleSlider);
					} else if (moduleProds.length === 0){
						moduleProds.add($(this).find(dataCell)).addClass('half-wrap');
						if (moduleSlider[0].sliderInited) {
							moduleSlider.slick('unslick').slick('destroy');
							moduleSlider[0].sliderInited = false;
						}
					}
				});
			} else {
				compareModule.each(function(){
					checkProdlength($(this));
				});
			}
			
		},
		setSlider = function(slider){
			var parentModule = slider.closest(compareModule);
			slider.slick({
				arrows: true,
				infinite: false,
				slidesToShow: 3,
	  			slidesToScroll: 1,
				prevArrow: '<div class="slick-arrow compare-arrow slick-arrow_prev"></div>',
				nextArrow: '<div class="slick-arrow compare-arrow slick-arrow_next"></div>',
				responsive: [
					{
						breakpoint: 890,
						settings: {
							slidesToShow: 2
						}
					},
				]
			}).on('afterChange', function(slick, currentSlide, nextSlide){
				changeDataCells(parentModule);
			});
			slider[0].sliderInited = true;
			changeDataCells(parentModule);
		},
		deleteCompare = function(item){
			
			var target = $(item),
				delIndex = target.index(),
				parentModule = target.closest(compareModule),
				currentSlider = parentModule.find(compareSlider);

			parentModule.find('.compare-table__cell:nth-child('+ (delIndex + 1) +')').remove();
			if (currentSlider[0].sliderInited) {
				currentSlider.slick('slickRemove', delIndex);
			} 
			target.remove();
			compareProduct = $('.compare-slider__slide');
			dataCell = $('.compare-table__cell');
			checkProdlength();
			changeDataCells(parentModule);
		},
		changeDataCells = function(currentModule){
			if(currentModule && currentModule[0]){
				var currentDataCell = currentModule.find(dataCell),
					currentSlider = currentModule.find(compareSlider),
					currentProds = currentModule.find(compareProduct);

				currentDataCell.removeClass('compare-table__cell_hidden');
				if (currentSlider[0].sliderInited) {
					currentProds.each(function(index){
						if (!$(this).is('.slick-active')) {
							currentModule.find('.compare-table__cell:nth-child('+ (index + 1) +')').addClass('compare-table__cell_hidden');
						}
					});
				}
			} else {
				compareModule.each(function(){
					changeDataCells($(this));
				});
			}
			
			
		},
		compareData = function(){
			dataRow.each(function(){
				var rowArr = []
				$(this).find(dataCell).each(function(){
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
		},
		fixPannel = function(scrolled){
			if(compareHead && compareHead[0]){
				if (compareHead.offset().top + compareHead.outerHeight() - 60 <= scrolled) {
					compareHead.addClass('compare-products_fixed');
				} else {
					compareHead.removeClass('compare-products_fixed');
				}
			}
			
		};
		
		return {
			init: init,
			delete: deleteCompare,
			check: changeDataCells,
			fixPannel: fixPannel,
			sliderFix: sliderFix,
		}
})();

var hintModal = (function(){
	var hintBlock, balloon, tail,
	init = function(){
		hintBlock = $('.hint-mark');
		balloon = hintBlock.find('.hint-mark__modal');
		tail = $('.hint-mark__tail');
		$('.hint-mark__icon').click(function(){
			open($(this).closest(hintBlock));
		});
	},
	calcPosition = function(block){
		$('.hint-mark_opened').each(function(){
			var balloon = $(this).find('.hint-mark__modal'),
				parent = $(this).offsetParent(),
				screenWidth =  $(window).outerWidth(),
				baloonWidth = balloon.outerWidth();

				if(baloonWidth + 40 > screenWidth ){
					balloon.css({
						'width': screenWidth - 40 + 'px',
						'margin-left': (screenWidth - 40)/2*-1 + 'px',
					});
				} else {
					balloon.css({
						'width': null,
						'margin-left': null,
					});
				}

				var delta = parent.offset().left + 20 - balloon.offset().left;
				if (delta > 0) {
					balloon.css({
						'transform': 'translateX('+ delta +'px)'
					}).find(tail).css({
						'transform': 'translateX('+ delta*(-1) +'px) rotate(-45deg)'
					});
				}
				
		});
	},
	open = function(block){
		
		block.addClass('hint-mark_opened');
		calcPosition();
		isNoTarget(block, function(){
		 	close();
		}, $('.hint-mark__close'));
	},
	close = function(){
		hintBlock.removeClass('hint-mark_opened');
	};
	return {
		init: init,
		calcPosition: calcPosition
	}
})();
var sideFilter = (function(){

	var triggerChecks, button, buttonHeight, filter, timerData, lastPosition, showTimer,
	init = function(){
		if(window.matchMedia("(max-width:1230px)").matches){
			return false;
		}
		filter = $('.js-float-button-show');
		triggerChecks = filter.find('.checkbox__hidden-input');
		button = $('.float-button');
		buttonHeight = button.outerHeight();
		timerData = button.data('timer');
		$(document).on('change', '.js-float-button-show .checkbox__hidden-input', function(){
			
			calcPosition($(this).closest('.filter-section__check-line'));
			showButton(timerData);
		}).on('click', '.float-button__close', function(){
			hideButton();
		});
		
	},
	calcPosition = function(item){
		lastPosition = item.offset().top - filter.offset().top - buttonHeight/2 + item.outerHeight() / 2;
	},
	hideButton = function(){
		button.removeClass('float-button_shown');
	},
	showButton = function(timer){
		clearTimeout(showTimer);
		hideButton();
		button.addClass('float-button_shown').css({
			top: lastPosition + 'px'
		});
		if(timer){
			showTimer = setTimeout(function(){
				hideButton();
			}, timer);
		}
	};
	return {
		init: init,
		showButton: showButton,
		hideButton: hideButton
	}
})();