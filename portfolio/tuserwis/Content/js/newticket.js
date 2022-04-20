var statuses = Object.freeze({
    "ok": 1,
    "warning": 2,
    "error": 3
});
var imgs = [];


$(document).ready(function () {
    if ($('#upload').length > 0) {
        createGalleryAppDownload('#upload');
    }

    if ($('#address').length > 0) {
        addAutocomplere();
    }

    // Array form
    var quizes = new Map();

    if ($('.quizes').length > 0) {
        for (var i = 0; i < $('.quizes').length; i++) {
            var $quizes = $($('.quizes')[i]);
            var func = new quisesCreate($quizes);
            var name;

            if ($quizes.attr('id')) {
                name = $quizes.attr('id');
            } else {
                name = 'quizes_' + i;
            }

            quizes.set(name, func);
        }
    }

    // Quizes
    function quisesCreate($quiz) {
        var quiz_item_count = $quiz.find('.quizes__item').length;
        var quiz_item_width = $quiz.find('.quizes__item').width();
        var quiz_header_width = $quiz.find('.quizes__header').width();
        var $quiz_wrapper = $quiz.find('.quizes__items');
        var $quiz_items = $quiz.find('.quizes__item');
        var quiz_item_gap = parseInt($quiz_wrapper.css('column-gap'));
        var $quiz_pointer = $quiz.find('.quizes__header-pointer');
        var $change_button = $quiz.find($('.quizes-change'));
        var quiz_pointer_width = $quiz_pointer.width();
        var start_quiz = $quiz_items.index($quiz_wrapper.find('.quizes__item.active'));
        var header_count = $quiz.find('.quizes__header-step').length;

        function changePointer(goal) {

            if (!goal) {
                goal = 0;
            }

            var quiz_header_goal = $quiz_wrapper.find('.quizes__item').eq(goal).data('name-goal');
            $quiz_wrapper.css('transform', 'translateX(-' + (quiz_item_width + quiz_item_gap) * goal + 'px)');
            $quiz_wrapper.css('height', $quiz_items.eq(goal).innerHeight() + 'px');
            $('html').animate({
                scrollTop: 0
            }, 200);
            var header_index = parseInt($('.quizes__header-step[data-name="' + quiz_header_goal + '"]').data('order'));
            $quiz_pointer.css('transform', 'translateX(' + (quiz_header_width - quiz_pointer_width) / (header_count - 1) * header_index + 'px)');

            if ($('.quizes__header-back[data-current="' + goal + '"]').length > 0) {
                $('.quizes__header-back').removeClass('active');
                $('.quizes__header-back[data-current="' + goal + '"]').addClass('active');
            }

            current_quiz = goal;
        }

        changePointer(start_quiz);

        $change_button.on('click', function () {
            if ($(this).hasClass('form-check__button')) {
                validateForm($(this));
            }

            if ($(this).closest('.quizes__item').hasClass('failed') === false) {
                var goal = $(this).data('quiz-goal');
                changePointer(goal);
            }
        });

    }


    $('#show-code').on('click', function () {
        if ($(this).closest('.form-check').hasClass('failed') === false) {
            $(this).hide();
            $('.modern-form__input-block--white').removeClass('modern-form__input-block--white');
            $('#code-form').addClass('active');
            $('#phoneNumber').prop('disabled', true);

        }
    });

    $('#current-car-select').on('change', function () {
        var val = $(this).val();
        var $current_car_button = $('#current-car-button');
        var $new_car_button = $('#new-car-button');
        var $new_car = $('#new-car');

        if (val === 'option-placeholder') {
            $current_car_button.addClass('hide');
            $new_car_button.removeClass('hide');
            $new_car.removeClass('disabled');
            removeVIN();
        } else {
            var vin = $('option:selected', this).attr('vin');
            $current_car_button.removeClass('hide');
            $new_car_button.addClass('hide');
            $new_car.find('.warning').removeClass('active');
            $new_car.closest('.quizes__item').removeClass('failed');
            $new_car.addClass('disabled');
            addVIN(vin);
        }

    });


    $("#Model").append(new Option("", "option-placeholder"));
    $("#CarYear").append(new Option("", "option-placeholder"));


    var desc = getUrlParameter('desc');
    $("#WhatToRepair").text(desc);

    $("#Make").change(function () {
        $(this).find("option[value=option-placeholder]").remove();
        $("#Model").next().find("input").val("");
        $("#CarYear").next().find("input").val("");
        var selectedMake = $("#Make").val();
        var modelsSelect = $('#Model');
        modelsSelect.empty();
        if (selectedMake != null && selectedMake != '') {
            $.getJSON('/home/GetModelsAsync', {MakeId: selectedMake}, function (models) {
                if (models != null && !jQuery.isEmptyObject(models)) {
                    $.each(models, function (index, model) {
                        modelsSelect.append($('<option/>', {
                            value: model.Value,
                            text: model.Text
                        }));
                    });
                }
            });
        }

    });


    $('#Model').change(function () {
        $(this).find("option[value=option-placeholder]").remove();
        $("#CarYear").next().find("input").val("");
        var selectedModel = $("#Model").val();
        var caryearsSelect = $('#CarYear');
        caryearsSelect.empty();
        if (selectedModel != null && selectedModel != '') {
            $.getJSON('/home/GetCarYearsAsync', {ModelId: selectedModel}, function (caryears) {
                if (caryears != null && !jQuery.isEmptyObject(caryears)) {
                    $.each(caryears, function (index, caryear) {
                        caryearsSelect.append($('<option/>', {
                            value: caryear.Value,
                            text: caryear.Text
                        }));
                    });
                }
            });
        }
    });

    $('#CarYear').change(function () {
        $(this).find("option[value=option-placeholder]").remove();
    });

    $.getJSON('/home/GetAuthUserCarsAsync', function (cars) {
        if (cars != null && !jQuery.isEmptyObject(cars)) {
            var userCarsSelect = $("#current-car-select");
            $.each(cars, function (index, car) {
                userCarsSelect.append($('<option/>', {
                    value: car.Id,
                    text: `${car.MakeName} ${car.ModelName} ${car.Year}`,
                    vin: car.VIN
                }));
            });
        }
    });

    $("#gen_pc").click(function () {
        var tmp_phone = document.getElementById('phonenumber').value;
        var form = document.getElementById('form');
        var token = $('input[name="__RequestVerificationToken"]', form).val();
        var model = {
            __RequestVerificationToken: token,
            PhoneNumber: tmp_phone
        };
        var url = "/user/sendmsg";
        $.post(url, model, function (res) {
            if (res.status == statuses.ok) {
                $("#code").removeClass("hide");
                console.log(res['passCode']);

                $("#send-code-again").addClass("hide");
                $("#time-count-down").removeClass("hide");
                countDown(res.resendTimeOut, $("#send-code-again"));

                document.getElementById("gen_pc").style.display = "none";
                document.getElementById("sbmt").style.display = "flex";
                $(".modern-form__input-code").first().focus();
            } else {
                addWarning(res.message, res.buttonTxt);
            }
        });

    });

    $("#sbmt_auth").click(function () {
        var $butt = $(this);
        validateForm($butt);
        if (!$("#step_3").hasClass("failed")) {
            var form = document.getElementById('form');
            var token = $('input[name="__RequestVerificationToken"]', form).val();
            var car_year_id = document.getElementById('CarYear').value;
            var car_id = document.getElementById('current-car-select').value;
            var what_to_repair = document.getElementById('WhatToRepair').value;
            var vin_code = document.getElementById('VinCode').value;
            var desired_repair_date = document.getElementById('RepairDate').value;
            var need_wrecker = $('#checkbox_1').is(':checked');
            var own_spares = $('#checkbox_2').is(':checked');
            var user_city = document.getElementById('user_city').value;
            var user_address = document.getElementById('address').value;

            var model = {
                __RequestVerificationToken: token,
                CarYearId: car_year_id,
                CarId: car_id,
                WhatToRepair: what_to_repair,
                Images: imgs,
                VINCode: vin_code,
                DesiredRepairDate: desired_repair_date,
                OwnSpares: own_spares,
                NeedWrecker: need_wrecker,
                Address: {
                    FullAddress: user_address,
                    CityId: user_city,
                }
            };

            var url = "/home/CreateNewTicketForAuthUser";
            $.post(url, model, function (res) {
                if (res.status == statuses.ok) {
                    window.location.href = res.redirectUrl;
                } else {
                    addWarning(res.title, res.buttonTxt);
                }
            });
        }
    });

    $("#send-code-again").click(function () {

        var tmp_phone = document.getElementById('phonenumber').value;
        var form = document.getElementById('form');
        var token = $('input[name="__RequestVerificationToken"]', form).val();
        var model = {
            __RequestVerificationToken: token,
            PhoneNumber: tmp_phone
        };
        var url = "/home/ResendPassCode";
        $.post(url, model, function (res) {
            if (res.status == statuses.ok) {
                console.log(res['passCode']);

                $("#send-code-again").addClass("hide");
                $("#time-count-down").removeClass("hide");
                countDown(res.resendTimeOut, $("#send-code-again"));
            } else {
                addWarning(res.title, res.buttonTxt);
            }
        });

    });

    $("#sbmt").click(function () {
        var $butt = $(this);
        validateForm($butt);
        if (!$("#step_3").hasClass("failed")) {
            var form = document.getElementById('form');
            var token = $('input[name="__RequestVerificationToken"]', form).val();
            var car_year_id = document.getElementById('CarYear').value;
            var what_to_repair = document.getElementById('WhatToRepair').value;
            var vin_code = document.getElementById('VinCode').value;
            var desired_repair_date = document.getElementById('RepairDate').value;
            var need_wrecker = $('#checkbox_1').is(':checked');
            var own_spares = $('#checkbox_2').is(':checked');
            var user_city = document.getElementById('user_city').value;
            var user_address = document.getElementById('address').value;
            var phone_number = document.getElementById('phonenumber').value;
            var pass_code = document.getElementById('verCode').value;

            var model = {
                __RequestVerificationToken: token,
                CarYearId: car_year_id,
                WhatToRepair: what_to_repair,
                Images: imgs,
                VINCode: vin_code,
                DesiredRepairDate: desired_repair_date,
                OwnSpares: own_spares,
                NeedWrecker: need_wrecker,
                Address: {
                    FullAddress: user_address,
                    CityId: user_city,
                },
                UserPhoneNumber: phone_number,
                UserSMSPassword: pass_code
            };
            var url = "/home/CreateNewTicket";
            $.post(url, model, function (res) {
                if (res.status == statuses.ok) {
                    window.location.href = res.redirectUrl;
                } else {
                    addWarning(res.title, res.buttonTxt);
                }
            });
        }
    });

    $(".destroy-warn").click(function () {
        $(".modal-warn").remove();
        //$('.modal__background').renoveClass('active');
    });


    $('.search-selection').each(function () {
        let $wrapper = $(this);
        let $items = $wrapper.find('.search-selection__item');
        let $search;

        if ($wrapper.find('.search-selection__input').length > 0) {
            $search = $wrapper.find('.search-selection__input');

            $search.on('change, input', function () {
                let search = $search.val().toLowerCase();

                if (search.length > 0) {
                    for (let index = 0; index < $items.length; index++) {
                        let text = $items.eq(index).data('search').toLowerCase();

                        if (text.indexOf(search) === -1) {
                            $items.eq(index).addClass('hide');
                        }
                    }
                } else {
                    $items.removeClass('hide');
                }
            });
        }


        $(document).on('click', function (e) {
            let $button;
            if ($(e.target).hasClass('search-selection__item')) {
                $button = $(e.target);
            }
            if ($(e.target).closest('.search-selection__item').length > 0) {
                $button = $(e.target).closest('.search-selection__item');
            }

            if ($button) {
                let $result = $button.closest('.search-selection').find('.search-selection__input-result');
                $result.val($button.data('search'));
            }
        });
    });

});

function createGalleryAppDownload(input) {
    $(input).fileuploader({
        theme: 'application',
        addMore: true,
        canvasImage: {width: 180, height: 180},
        afterRender: function (listEl, parentEl, newInputEl, inputEl) {

            var $input_wrapper = $(input).closest('.fileuploader').find('.fileuploader-input');
            var item_template = '<div class="fileuploader-input-button-custom">Załącz zdjęcia</div>';
            $(item_template).appendTo($input_wrapper);
        },
        upload: {
            url: '/image/uploadticketfile',
            data: null, // should be null
            type: 'POST',
            enctype: 'multipart/form-data',
            start: true,
            onSuccess: function (result, item, listEl, parentEl, newInputEl, inputEl) {
                var data = {};

                if (result)
                    data = result;
                else
                    data.hasWarnings = true;


                // if success
                if (data.isSuccess && data.name) {
                    item.name = data.name;
                    imgs.push(data.model);
                }

                // if warnings
                if (data.hasWarnings) {
                    for (var warning in data.warnings) {
                        alert(data.warnings[warning]);
                    }

                    item.html.removeClass('upload-successful').addClass('upload-failed');
                    return this.onError ? this.onError(item) : null;
                }
            }
        },
        onRemove: function (item) {
            imgs.splice(imgs.indexOf(imgs.find(x => x.Name === item.name)), 1);
        },
        captions: 'pl'
    });
}

function addWarning(warningText, buttonText) {
    $(`<div class="modal__block modal-warn" data-modal-name="modal_warning">

        <div class="modal__content modal__content--short">

            <div class="modal__title">
                ${warningText}
            </div>

            <img class="modal__payment-img" src="../../../img/modern-error-orange.png">

            <div class="form__footer form__footer--modal">
                <div class="form__footer-button-big close-modal destroy-warn">${buttonText}</div>
            </div>

        </div>

    </div>`).insertAfter(".modal__background");
    var modals = new modalToggle();
    modals.open("modal_warning");
}

function addVIN(vin) {
    if (vin) {
        $("#VinCode").val(vin);
        $("#VinCode").prop('disabled', true);
    }
}

function removeVIN() {
    $("#VinCode").val("");
    $("#VinCode").prop('disabled', false);
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};