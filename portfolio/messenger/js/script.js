$(document).ready(function () {
    var viewport_height;
    var viewport_width;
    var scroll_top;

    var $body = $('html, body');
    viewport_height = $(window).height();
    viewport_width = $(window).width();
    scroll_top = $(document).scrollTop();
    var mobile_width = 768;
    var scroll_down;

    $(document).scroll(function () {
        scroll_top = $(window).scrollTop();
    });

    $(window).resize(function () {
        viewport_height = $(window).height();
    });


    // Проскролл чата в самый низ
    function chatScroll() {

        var height = $('.chat__item-inner-messages').height();

        var timerId = setInterval(function () {
            if (height > 0 && height === $('.chat__item-inner-messages').height()) {
                $('.chat__item-inner').scrollTop(height);
                clearInterval(timerId);
            } else {
                height = $('.chat__item-inner-messages').height();
            }
        }, 200);
    }

    chatScroll();


    // Увеличение размера инпута для сообщений
    function resizeArea($area, $area_hidden, $area_button) {
        var minHeight = 60;
        var maxHeight = 500;
        var padding_top = parseInt($area.css('padding-top'));
        var padding_bottom = parseInt($area.css('padding-top'));
        var border_top = parseInt($area.css('border-top-width'));
        var border_bottom = parseInt($area.css('border-bottom-width'));

        var padding = padding_top + padding_bottom + border_top + border_bottom;

        var text = $area.val();

        if ($area_button) {
            if ($area.val().length > 0) {
                $area_button.addClass('active');
            } else {
                $area_button.removeClass('active');
            }
        }

        $area_hidden.text(text);
        var height = $area_hidden.height() + padding;
        height = Math.max(minHeight, height);
        height = Math.min(maxHeight, height);
        $area.css('height', height + 'px');
    }

    $('.chat__item-input').on('input', function () {
        resizeArea($('.chat__item-input'), $('.chat__item-input-hidden'), $('.chat__item-button'));
    });


    // Фокус на первом поле
    $('input[name="title"]').focus();

    // Автозаполнения для инпутов в таблице
    function recipeInputAutocomplete($block, $input) {

        $block.find($input).each(function () {
            var $select_list_input = $(this);
            var select_list_options = [];
            var autocomplete = false;

            if ($select_list_input.hasClass('recipe__row-input--name') === true) {
                select_list_options = product_list;
                autocomplete = true;
            } else if ($select_list_input.hasClass('recipe__row-input--suffix') === true) {
                select_list_options = suffix_list;
                autocomplete = true;
            }

            if (autocomplete) {
                $select_list_input.autocomplete({
                    minLength: 0,
                    source: select_list_options,
                    classes: {
                        "ui-autocomplete": "recipe__autocomplete"
                    }
                });
            }

            $select_list_input.on('focus', function () {
                if (autocomplete) {
                    listShow($(this).val());
                }

            });

            $select_list_input.on("autocompleteselect", function (event, ui) {
                $(this).val(ui.item.value);
                tableInputCheck($(this));
            });

            function listShow(val) {
                $select_list_input.autocomplete("search", val);
            }
        });
    }

    if ($('.recipe__row-input')) {
        recipeInputAutocomplete($('.recipe__rows'), $('.recipe__row-input'));
    }

    // Фильтрация ввода для килокалорий
    $('input[name="kcal"]').keypress(function (event) {
        event = event || window.event;

        if (event.charCode && event.charCode != 0 && (event.charCode < 48 || event.charCode > 57))
            return false;
    });

    // Фильтрация ввода для количества

    $('.recipe__row-input--count').each(function () {
        numberCheck($(this));
    });


    $('.recipe__input--components').on('change', function () {
        var val = parseFloat($(this).val());

        if (val >= 0 && val <= 1) {

        } else {
            $(this).val('');
            $(this).addClass('error');
        }
    });

    $('.recipe__input--components').on('focus', function () {
        $(this).removeClass('error');
    });

    function numberCheck($input) {
        var dot;

        $input.keypress(function (event) {
            event = event || window.event;
            var str = $(this).val();
            var regexp = /\./ig;
            dot = regexp.test(str);

            if (event.charCode && event.charCode == 46 && dot === false) {

            } else if (event.charCode && event.charCode == 46 && dot === true) {
                return false;
            } else if (event.charCode && event.charCode != 0 && (event.charCode < 48 || event.charCode > 57)) {
                return false;
            }

        });
    }


    $.widget("custom.combobox", {
        _create: function () {
            this.wrapper = $("<span>")
                .addClass("custom-combobox")
                .insertAfter(this.element);

            this.element.hide();
            this._createAutocomplete();
        },

        _createAutocomplete: function () {
            var selected = this.element.children(":selected"),
                value = selected.val() ? selected.text() : "";

            this.input = $("<input>")
                .appendTo(this.wrapper)
                .val(value)
                .attr("title", "")
                .attr("name", "dietIdAuto")
                .addClass("recipe__input")
                .autocomplete({
                    delay: 0,
                    minLength: 0,
                    source: $.proxy(this, "_source")
                })
                .tooltip({
                    classes: {
                        "ui-tooltip": "ui-state-highlight"
                    }
                });

            this._on(this.input, {
                autocompleteselect: function (event, ui) {
                    ui.item.option.selected = true;
                    this._trigger("select", event, {
                        item: ui.item.option
                    });
                },
                autocompletechange: "_removeIfInvalid",
                focus: function (event, ui) {
                    this.input.removeClass("error");
                }
            });
        },

        _source: function (request, response) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
            response(this.element.children("option").map(function () {
                var text = $(this).text();
                if (this.value && (!request.term || matcher.test(text)))
                    return {
                        label: text,
                        value: text,
                        option: this
                    };
            }));
        },

        _removeIfInvalid: function (event, ui) {

            // Selected an item, nothing to do
            if (ui.item) {
                return;
            }

            // Search for a match (case-insensitive)
            var value = this.input.val(),
                valueLowerCase = value.toLowerCase(),
                valid = false;
            this.element.children("option").each(function () {
                if ($(this).text().toLowerCase() === valueLowerCase) {
                    this.selected = valid = true;
                    return false;
                }
            });

            // Found a match, nothing to do
            if (valid) {
                return;
            }

            // Remove invalid value
            this.input
                .val("")
                .attr("title", "Такой диеты не существует")
                .addClass("error")
                .tooltip("open");
            this.element.val("");
            this._delay(function () {
                this.input.tooltip("close").attr("title", "");
            }, 2500);
            this.input.autocomplete("instance").term = "";
        },

        _destroy: function () {
            this.wrapper.remove();
            this.element.show();
        }
    });

    $('select[name="dietId"]').combobox();

    // Запись названия загруженного файла
    $(".recipe__input-file input[type=file]").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        var $filename = $(this).closest('.recipe__input-file').find('.recipe__input-file-name');
        $filename.text(filename);
        $filename.addClass('active');
    });

    // Передача значения из радиобаттона в скрытый инпут
    $(".recipe__input-radio input[type=radio]").change(function () {
        var value = $(".recipe__input-radio input[type=radio]:checked").attr('id');
        var $input = $('input[name="mealType"]');
        $input.val(value);
    });


    $('.recipe__item-input-area').on('input', function () {
        resizeArea($('.recipe__item-input-area'), $('.recipe__item-input-area-hidden'));
    });


    $(".recipe__rows").on('change', 'input', function () {
        tableInputCheck($(this));
    });

    function tableInputCheck($input) {
        var $rows = $('.recipe__row--inputs');
        var $main_input = $('input[name="ingredients"]');
        var ingredients = '';
        for (var i = 0; i < $rows.length; i++) {
            if ($rows.eq(i).find('.recipe__row-input--name').val()) {
                var name = $rows.eq(i).find('.recipe__row-input--name').val();
                var name_rec = "\"title\": \"" + name + "\"";

                var count = $rows.eq(i).find('.recipe__row-input--count').val();
                var count_rec = '';

                if (count.length > 0) {
                    count_rec = ", \"count\": " + count;
                }

                var suffix = $rows.eq(i).find('.recipe__row-input--suffix').val();
                var suffix_rec = '';

                if (suffix.length > 0) {
                    suffix_rec = ", \"suffix\": \"" + suffix + "\"";
                }


                var new_ingredients = "{" + name_rec + count_rec + suffix_rec + "}";


                if (ingredients.length > 0) {
                    ingredients = ingredients + "," + new_ingredients;
                } else {
                    ingredients = new_ingredients;
                }
            }
        }
        $main_input.val("[" + ingredients + "]");

        var empty_row_count = $rows.length;

        for (var i = 0; i < $rows.length; i++) {
            var row_empty = true;

            if ($rows.eq(i).find('.recipe__row-input--name').val()) {
                row_empty = false;
            }
            if ($rows.eq(i).find('.recipe__row-input--count').val()) {
                row_empty = false;
            }
            if ($rows.eq(i).find('.recipe__row-input--suffix').val()) {
                row_empty = false;
            }

            if (row_empty === false) {
                empty_row_count = empty_row_count - 1;
            }

        }

        if (empty_row_count === 0) {
            newTableRow();

            if ($input.hasClass('recipe__row-input--name') === true) {
                $input.closest('.recipe__row').find('.recipe__row-input--count').focus();
            } else if ($input.hasClass('recipe__row-input--count') === true) {
                $input.closest('.recipe__row').find('.recipe__row-input--suffix').focus();
            }

        }
    }

    // Добавление новой строки в таблице
    $('.recipe__add-button').on('click', function () {
        newTableRow();
    });

    function newTableRow() {
        var $block = $('.recipe__rows');
        var $template = "<div class=\"recipe__row recipe__row--inputs\"><div class=\"recipe__cell\"><div class=\"recipe__row-number\">3</div></div><div class=\"recipe__cell recipe__cell--list\"><input class=\"recipe__row-input recipe__row-input--name\"></div><div class=\"recipe__cell\"><input class=\"recipe__row-input recipe__row-input--count\"></div><div class=\"recipe__cell recipe__cell--list\"><input class=\"recipe__row-input recipe__row-input--suffix\"></div></div>";
        $block.append($template).addClass('hide');
        var $new_item = $('.recipe__row').eq($('.recipe__row').length - 1);
        recipeInputAutocomplete($new_item, $('.recipe__row-input'));
        $new_item.find('.recipe__row-number').text($('.recipe__row').length - 1);
        $new_item.find('input').val('');
        $new_item.find('input').eq(0).focus();
    }


    // Временый код

    $('.chat__list-item-info-bookmark').on('click', function () {
        $(this).closest('.chat__list-item').toggleClass('chat__list-item--bookmark');
    });

    $('.layout__preloader').on('click', function () {
        $(this).addClass('show');
    });

    $('#console').on('click', function () {
        console.log($('input[name="title"]').val());
        console.log($('select[name="dietId"]').val());
        console.log($('input[name="mealType"]').val());
        console.log($('input[name="proteins"]').val());
        console.log($('input[name="fats"]').val());
        console.log($('input[name="carbohydrates"]').val());
        console.log($('input[name="cookingTimeInMinutes"]').val());
        console.log($('input[name="kcal"]').val());
        console.log($('input[name="ingredients"]').val());
        console.log($('textarea[name="description"]').val());
    });


});
