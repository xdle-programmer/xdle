var button_menu_class = 'cars-edit__item-header-menu-button';
var menu_class = 'cars-edit__item-header-menu-items';
var wrapper_class = 'cars-edit__item-header-menu';
var active_class = 'active';
var newCarBlock = 0;
var carItems = 0;

$(document).ready(function () {
    $.getJSON('/home/GetAuthUserCarsAsync', function (cars) {
        if (cars != null && !jQuery.isEmptyObject(cars)) {
            $.each(cars, function (index, car) {
                $(createCarItem(carItems, car.MakeName, car.ModelName, car.Year, car.VIN, car.LogoUrl, car.Id)).insertBefore(".cars-edit__item--copy");
                carItems++;
            });
        };
    });

    $(document).on("change", function (e) {
        var $select = $(e.target);

        if ($select.hasClass('select-makes')) {
            $select.find("option[value=option-placeholder]").remove();
            var selectedMake = $select.val();
            var modelsSelect = $select.closest('.cars-edit__item-new').find('.select-models');
            var yearsSelect = $select.closest('.cars-edit__item-new').find('.select-years');
            modelsSelect.next().find("input").val("");
            yearsSelect.next().find("input").val("");
            modelsSelect.empty();
            if (selectedMake != null && selectedMake != '') {
                $.getJSON('/home/GetModelsAsync', { MakeId: selectedMake }, function (models) {
                    console.log(models);
                    console.log(modelsSelect);
                    if (models != null && !jQuery.isEmptyObject(models)) {
                        $.each(models, function (index, model) {
                            modelsSelect.append($('<option/>', {
                                value: model.Value,
                                text: model.Text
                            }));
                        });
                    };
                });
            }
        }

        if ($select.hasClass('select-models')) {
            $select.find("option[value=option-placeholder]").remove();
            var selectedModel = $select.val();
            var caryearsSelect = $select.closest('.cars-edit__item-new').find('.select-years');
            caryearsSelect.next().find("input").val("");
            caryearsSelect.empty();
            if (selectedModel != null && selectedModel != '') {
                $.getJSON('/home/GetCarYearsAsync', { ModelId: selectedModel }, function (caryears) {
                    if (caryears != null && !jQuery.isEmptyObject(caryears)) {
                        $.each(caryears, function (index, caryear) {
                            caryearsSelect.append($('<option/>', {
                                value: caryear.Value,
                                text: caryear.Text
                            }));
                        });
                    };
                });
            }
        }
    });

    $(document).on('click', function (e) {
        var $click = $(e.target);

        if ($click.hasClass('car-save') && !$click.hasClass('in-progress')) {
            disableButton($click);
            refreshValidation();
            validateForm($click);
            var $form = $click.closest('.form-check');
            if (!$form.hasClass("failed")) {
                var vin = $form.find('.car_vin').first().val();
                var $carForm = $click.closest('.cars-edit__item--car');
                var model = {
                    Id: $carForm.attr('id'),
                    VIN: vin
                };
                if (vin) {
                    var url = "/user/UpdateCarForUser";
                    $.post(url, model, function (res) {
                        if (res.success) {
                            $form.parent().find('.cars-edit__item-desc-vin span').first().text(vin);
                            toogleEditableBlock($click);
                        }
                    });
                } else {
                    toogleEditableBlock($click);
                }
            }
            enableButton($click);
        } else if ($click.hasClass('car-block-edit')) {
            toogleEditableBlock($click);
            $(document).find('.' + menu_class).removeClass(active_class);
            $(document).find('.' + button_menu_class).removeClass(active_class);
        } else if ($click.hasClass('car-block-remove')) {
            var $carForm = $click.closest('.cars-edit__item--car');
            var model = {
                Id: $carForm.attr('id')
            };
            var url = "/user/RemoveUserCar";
            $.post(url, model, function (res) {
                if (res.success) {
                    $carForm.remove();
                }
            });
        } else if ($click.hasClass('add-car') && !$click.hasClass('in-progress')) {
            disableButton($click);
            validateForm($click);
            var $form = $click.closest('.form-check');
            if (!$form.hasClass("failed")) {
                var carYearId = $form.find('.select-years').val();
                var vin = $form.find('.car_vin').first().val();

                var model = {
                    CarYearId: carYearId,
                    VIN: vin
                };
                var url = "/user/AddUserCar";
                $.post(url, model, function (res) {
                    if (res.success) {
                        $form.replaceWith(createCarItem(carItems, res.make, res.model, res.year, res.vin, res.logoUrl, res.id));
                        carItems++;
                    }
                });
            }
            enableButton($click);
        } else if ($click.hasClass('cars-edit__item--copy')) {
            var template_class = 'cars-edit__item--template';
            var car_class = 'cars-edit__item--car';
            var $copy = $(e.target);
            var $copy_sample = $copy.clone();
            var $wrapper = $('.cars-edit__items');
            var id_prexix = 'car_item_';

            var sample_id = id_prexix + newCarBlock;
            newCarBlock++;

            var $sample = $('.' + template_class)
                .clone()
                .removeClass(template_class)
                .addClass(car_class)
                .prop('id', sample_id)
                .addClass('form-check');

            $sample
                .find('.select-autocomplete-sample')
                .addClass('select-autocomplete')
                .removeClass('select-autocomplete-sample');

            $.getJSON('/home/GetMakesAsync', function (makes) {
                if (makes != null && !jQuery.isEmptyObject(makes)) {
                    var makesSelect = $sample.find('.select-makes');
                    $.each(makes, function (index, make) {
                        makesSelect.append($('<option/>', {
                            value: make.Value,
                            text: make.Text
                        }));
                    });
                };
            });

            $copy.remove();
            $sample.appendTo($wrapper);
            $copy_sample.appendTo($wrapper);

            $(document).find('.select-autocomplete').each(function () {
                var $default_select = $(this).find('select');

                $default_select.combobox();

                $default_select.on('change', function () {
                    if (viewport_width < mobile_width) {
                        var $default_input = $default_select.closest('.select-autocomplete').find('input');
                        var val = $default_select.find('option:selected').text();
                        $default_input.val(val);
                    }
                });
            });
            refreshValidation();
        } else if ($click.hasClass('cars-create-ticket')) {
            window.location.href = '/newticket';
        } else {
            var button_click = $click.hasClass(button_menu_class);
            var menu_click = $click.hasClass(menu_class) || $click.closest('.' + menu_class).length > 0;

            if (button_click === false && menu_click === false) {
                $(document).find('.' + menu_class).removeClass(active_class);
            } else if (button_click === true) {
                var $menu = $click.closest('.' + wrapper_class).find('.' + menu_class);
                var $button = $click.closest('.' + wrapper_class).find('.' + button_menu_class);

                if ($button.hasClass(active_class) === true) {
                    $(document).find('.' + menu_class).removeClass(active_class);
                    $(document).find('.' + button_menu_class).removeClass(active_class);
                } else {
                    $(document).find('.' + menu_class).removeClass(active_class);
                    $menu.addClass(active_class);
                    $button.addClass(active_class);
                }

            }
        }

    });
});

function createCarItem(id, make, model, year, vin, logo, carId) {
    return `<div class="cars-edit__item editable-block not-edit form-check cars-edit__item--car" id="${carId}">
                    <div class="editable-block__view">
                        <div class="cars-edit__item-view">
                            <div class="cars-edit__item-header">
                                <div class="cars-edit__item-header-menu">
                                    <div class="cars-edit__item-header-menu-button cars-edit__item-header-menu-button--blue"></div>
                                    <div class="cars-edit__item-header-menu-items">
                                        <div class="cars-edit__item-header-menu-item cars-edit__item-header-menu-item--edit car-block-edit">
                                            Edytuj
                                        </div>
                                        <div class="cars-edit__item-header-menu-item cars-edit__item-header-menu-item--remove open-modal car-block-remove" data-modal="modal_remove">
                                            Usuń
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cars-edit__item-logo">
                                <img class="cars-edit__item-logo-img" src="${logo}">
                            </div>
                            <div class="cars-edit__item-desc">
                                <div class="cars-edit__item-desc-inner">${make}</div>
                                <div class="cars-edit__item-desc-inner">${model}</div>
                                <div class="cars-edit__item-desc-inner">${year}</div>
                            </div>
                            <div class="cars-edit__item-desc-vin"><span>${checkVIN(vin)}</span></div>
                            <div class="cars-edit__item-desc-button cars-create-ticket">Utwórz zgłoszenie</div>
                        </div>
                    </div>
                    <div class="editable-block__edit form-check" id="${id}">
                        <div class="cars-edit__item-edit">

                            <div class="form__field-title form__field-title--left">kod Vin</div>
                            <div class="input form-check__field"
                                 data-check-type="input"
                                 data-check="vin-code">
                                <div class="input__button">
                                    <input type="text" class="input__text car_vin"
                                           placeholder="VIN" value="${checkVIN(vin)}">
                                </div>
                            </div>

                            <div class="cars-edit__item-desc-button form-check__button editable-block__switch car-save">Zapisz</div>

                        </div>
                    </div>
                </div>`
}

function checkVIN(vin) {
    if (vin) {
        return vin;
    }
    return "";
}

function disableButton($butt) {
    $butt.addClass('in-progress');
}

function enableButton($butt) {
    $butt.removeClass('in-progress');
}