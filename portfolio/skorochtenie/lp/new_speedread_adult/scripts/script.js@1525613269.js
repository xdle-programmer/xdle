var text;

function message(text) {

	$('#message .message').html(text);
	$('#message').modal();

}


$( window ).load(function()
{
	// if(captcha_key)
	// {
	// 	var captcha = grecaptcha.render
	// 	(
	// 		'captcha',
	// 		{
	// 			"sitekey": captcha_key,
	// 			"theme": "light"
	// 		}
	// 	);
    //
	// 	var captcha2 = grecaptcha.render
	// 	(
	// 		'captcha2',
	// 		{
	// 			"sitekey": captcha_key,
	// 			"theme": "light"
	// 		}
	// 	);
    //
	// 	var captcha3 = grecaptcha.render
	// 	(
	// 		'captcha3',
	// 		{
	// 			"sitekey": captcha_key,
	// 			"theme": "light"
	// 		}
	// 	);
	// }
    //
	// $.ajax(
	// {
	// 	method: "POST",
	// 	type: 'POST',
	// 	url: baseurl,
	// 	cache: false,
	// 	data: { my_token: my_token, ajax: true, option: 'setToken' }
	// })
	// .done(function( msg )
	// {
	// 	if(msg)
	// 		my_token = msg;
	// });
	

	$("#students .owl-carousel,#videos .owl-carousel").owlCarousel(
	{

		items:1,
		loop:true,
		nav:true,
		dots:false,
		responsive:
		{ 
		
			480:{
		
			items:1
		
			},
		
			 
		
			600:{
		
			items:2
		
			},
		
			 
		
			960:{
		
			items:3
		
			}/*,

			1100:{
			
			items:4
			
			}*/
		
		}

	});


	// $('body').on('submit','form',function(e){
	// 	var error = 0;
	// 	var t = $(this);
    //
	// 	$('.required,.r',this).each(function()
	// 	{
	// 		if($(this).attr('id') == 'agree' && !$(this).is(":checked"))
	// 		{
	// 			alert('Необходимо принять согласие на обработку персональных данных!');
	// 			error++;
	// 		}
	// 		if($(this).val().length < 1)
	// 		{
	// 			var tagname = $(this).context.tagName;
	// 			$(this).addClass('invalid');
	// 			if(tagname == 'SELECT')
	// 			{
	// 				var select_id = $(this).attr('id') + '_chosen';
	// 				$('#' + select_id + '.chosen-container').addClass('invalid');
	// 			}
	// 			error++;
	// 		}
	// 		else
	// 		{
	// 			var tagname = $(this).context.tagName;
	// 			$(this).removeClass('invalid');
	// 			if(tagname == 'SELECT')
	// 			{
	// 				var select_id = $(this).attr('id') + '_chosen';
	// 				$('#' + select_id + '.chosen-container').removeClass('invalid');
	// 			}
	// 		}
	// 	});
	// 	if(error > 0)
	// 	{
	// 		e.preventDefault();
	// 	}
	// 	else
	// 	{
	// 		e.preventDefault();
    //
	// 		var name = $('[name="name"]',this).length ? $('[name="name"]',this).val() : '';
	// 		var phone = $('[name="phone"]',this).length ? $('[name="phone"]',this).val() : '';
	// 		var email = $('[name="email"]',this).length ? $('[name="email"]',this).val() : '';
	// 		var text = $('[name="text"]',this).length ? $('[name="text"]',this).val() : '';
	// 		var city = $('[name="city"]',this).length ? $('[name="city"]',this).val() : '';
	// 		var g_recaptcha_response = $('[name="g-recaptcha-response"]',this).length ? $('[name="g-recaptcha-response"]',this).val() : '';
    //
	// 		t.find('button').attr('disabled','disabled');
    //
	// 		$.ajax(
	// 		{
	// 			method: "POST",
	// 			type: 'POST',
	// 			url: baseurl,
	// 			cache: false,
	// 			data: { name: name, phone: phone, email: email, text: text, city: city, g_recaptcha_response: g_recaptcha_response,my_token: my_token, ajax: true, option: 'sendMail' }
	// 		})
	// 		.done(function( msg )
	// 		{
	// 			if(msg)
	// 			{
	// 				message('<h2 class="text-center">Сообщение</h2><p class="text-center">Ваше сообщение успешно отправлено.<br />Мы свяжемся с вами в ближайшее время.</p>');
	// 			}
	// 			else
	// 			{
	// 				message('<h2 class="text-center">Ошибка</h2><p class="text-center">Произошла ошибка при отправке сообщения.<br />Попробуйте отправить письмо позже.</p>');
	// 			}
    //
	// 			if(captcha_key)
	// 			{
	// 				grecaptcha.reset(captcha);
	// 				grecaptcha.reset(captcha2);
	// 				grecaptcha.reset(captcha3);
    //
	// 				$('#form-modal').modal('hide');
	// 			}
    //
	//
	// 			t.find('button').removeAttr('disabled');
	// 			console.log(msg);
	// 		});
    //
	// 		console.log(city);
	// 	}
	// });

	$('.show-video').click(function(e)
	{
		if($(window).width() > 768) 
		{
			e.preventDefault();

			var href = $(this).attr('href');
			var title = $(this).attr('data-title');

			var content = '';

			content+= '<video width="560" height="560" controls autoplay>';
			content+= '		<source src="' + href + '" type="video/mp4">';
			content+= '		Your browser does not support the video tag.';
			content+= '</video> ';

			$('#video-modal .content-video').html(content);
			$('#video-modal .modal-header').html('<p class="text-blue text-center h4"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + title + '</p>');
			$('#video-modal').modal();
		}
		
	});

	$('#video-modal').on('hidden.bs.modal', function () 
	{
	    $('#video-modal .content-video').empty();
	});
});



$(function () {
    $("input, textarea").placeholder();
    // $(".fancybox").fancybox();
    // $(".bxslider").bxSlider({
    //     pager: false,
    //     slideWidth: 190,
    //     maxSlides: 5,
    //     moveSlides: 1,
    //     minSlides: 1
    // });
    //
    // function scrollToDiv(element) {
    //     element = $(element);
    //     var offset = element.offset();
    //     var offsetTop = offset.top;
    //     var totalScroll = offsetTop - 90;
    //     $('html,body').animate({
    //         scrollTop: totalScroll
    //     }, 1000);
    // }
    //
    // $('.goto').click(function () {
    //     var elWrapped = $(this).attr('href');
    //     scrollToDiv(elWrapped);
    //     return false;
    // });


    $("#contact_form").validate({
        onfocusout: !1,
        onkeyup: !1,
        rules: {name: "required", phone: {number: !0, required: !0}},
        errorPlacement: function (t, e) {
            e.attr("placeholder", t[0].innerText)
        },
        messages: {name: "Напишите ваше имя", phone: "Введите ваш телефон"},
        highlight: function (t) {
            $(t).text("").addClass("error")
        },
        success: function (t) {
            t.text("").addClass("valid")
        }
    });

    $("#contact_form").submit(function () {
        return $(this).valid() ? ($("#contact_submit").button("loading"), send($(this))) : $("#contact_submit").button("reset"), !1
    });


    $("#contact_form2").validate({
        onfocusout: !1,
        onkeyup: !1,
        rules: {name: "required", phone: {number: !0, required: !0}},
        errorPlacement: function (t, e) {
            e.attr("placeholder", t[0].innerText)
        },
        messages: {name: "Напишите ваше имя", phone: "Введите ваш телефон"},
        highlight: function (t) {
            $(t).text("").addClass("error")
        },
        success: function (t) {
            t.text("").addClass("valid")
        }
    });

    $("#contact_form2").submit(function () {
        return $(this).valid() ? ($("#contact_submit2").button("loading"), send($(this))) : $("#contact_submit2").button("reset"), !1
    });




    jQuery(function($){
        $("#phone01").mask("+38(999) 999-9999");
        $("#phone02").mask("+38(999) 999-9999");
        $("#phone03").mask("+38(999) 999-9999");
        $("#phone04").mask("+38(999) 999-9999");
        $("#phone05").mask("+38(999) 999-9999");
        $("#phone06").mask("+38(999) 999-9999");


    });



    $("form").submit(function(e) {

        var ref = $(this).find("[required]");

        $(ref).each(function(){
            if ( $(this).val() == '' )
            {
                alert("Укажите номер телефона");

                $(this).focus();

                e.preventDefault();
                return false;
            }
        });  return true;
    });


    $(".policy-popup").on('click', function () {
        $(".policy-popup-text").toggle();
    });


});
