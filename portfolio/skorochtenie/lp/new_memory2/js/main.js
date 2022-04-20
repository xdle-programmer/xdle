	jQuery(document).ready(function(){
		$('.bullets-item').click(function(e){
			var index = $(this).index();
			$('.owl-carousel').trigger('to.owl.carousel', index);
		});



		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});



		$(".fancybox").fancybox();




        $(".fancybox-popup").fancybox();






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

        $("#contact_form3").validate({
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

        $("#contact_form3").submit(function () {
            return $(this).valid() ? ($("#contact_submit3").button("loading"), send($(this))) : $("#contact_submit3").button("reset"), !1
        });

        $("#contact_form4").validate({
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

        $("#contact_form4").submit(function () {
            return $(this).valid() ? ($("#contact_submit4").button("loading"), send($(this))) : $("#contact_submit4").button("reset"), !1
        });


        $("#contact_form5").validate({
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

        $("#contact_form5").submit(function () {
            return $(this).valid() ? ($("#contact_submit5").button("loading"), send($(this))) : $("#contact_submit5").button("reset"), !1
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
	
