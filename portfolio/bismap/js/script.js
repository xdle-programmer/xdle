// Переменные для юзер агента и

var device;
var touch;
var apple;
var apple_browser;


// Глобальные переменные.
var $body;
var viewport_width;
var viewport_height;
var scroll_top;
var scroll_down;
var scroll_counter = 0;
var mobile_width = 768;


// Раскрывающиеся поля. Переменная объекта функции создания.
var search_expand_create = null;

// Раскрывающиеся поля. Переменная для массива функций.
var search_expand_fields = null;

// Поиск внутри блока. Переменная объекта функции создания.
var typing_search_create = null;

// Поиск внутри блока. Переменная для массива функций.
var search_fields = null;

// Сортировка блоков. Переменная объекта функции создания.
var blocks_order_create = null;

// Сортировка блоков. Переменная для массива функций.
var blocks_orders = null;

// Переключение вкладок. Переменная объекта функции создания.
var filter_blocks_create = null;

// Переключение вкладок. Переменная для массива функций.
var filter_blocks = null;

// Модальные окна. Переменная объекта функции создания.
var modals_create = null;

// Модальные окна. Переменная для массива функций.
var modals = null;

// Меню. Переменная объекта функции создания.
var menu_create = null;

// Меню. Переменная для массива функций.
var all_menu = null;

// Уведомления. Переменная объекта функции создания.
var handler_notifications_create = null;

// Уведомления. Переменная для массива функций.
var handler_notifications = null;

// Раскрывающиеся карточки. Переменная объекта функции создания.
var short_blocks_create = null;

// Раскрывающиеся карточки. Переменная для массива функций.
var short_blocks = null;

// Сворачивающиеся блоки. Переменная объекта функции создания.
var collapse_blocks_create = null;

// Сворачивающиеся блоки. Переменная для массива функций.
var collapse_blocks = null;

// Навигация по заметкам и чату. Переменная объекта функции создания.
var nav_content_create = null;

// Навигация по заметкам и чату. Переменная для массива функций.
var nav_content = null;

// Навигация по заметкам и чату. Переменные для таймеров
var scroll_check_timer;
var active_scroll_check_timer;
var scroll_chat_timer;

// Открытие фильтров. Переменная для функции создания.
var search_filter_create;

// Открытие фильтров. Переменная для массива функций.
var search_filter;

// Свайповое меню поиска. Переменная для функции создания.
var handler_search_create;

// Свайповое меню поиска. Переменная для массива функций.
var handler_search;


$(document).ready(function () {
    $body = $('html, body');
    viewport_height = $(window).height();
    viewport_width = $(window).width();
    scroll_top = $(window).scrollTop();

    // Установка глобального класса на бади
    if (navigator.userAgent.toUpperCase().indexOf('android'.toUpperCase()) + 1) {
        device = 'android';
    } else if (navigator.userAgent.toUpperCase().indexOf('iphone'.toUpperCase()) + 1) {
        device = 'iphone';
    } else if (navigator.userAgent.toUpperCase().indexOf('ipad'.toUpperCase()) + 1) {
        device = 'ipad';
    } else if (navigator.userAgent.toUpperCase().indexOf('macintosh'.toUpperCase()) + 1) {
        device = 'macintosh';
    } else if (navigator.userAgent.toUpperCase().indexOf('windows'.toUpperCase()) + 1) {
        device = 'windows';
    } else {
        device = 'windows';
    }

    if (device === 'iphone' || device === 'ipad') {
        touch = true;
        apple = true;

        if (navigator.userAgent.toUpperCase().indexOf('crios'.toUpperCase()) + 1 || navigator.userAgent.toUpperCase().indexOf('chrome'.toUpperCase()) + 1) {
            apple_browser = 'chrome';
            document.getElementsByTagName("body")[0].setAttribute("class", "apple-device apple-chrome touch-device");
        } else {
            apple_browser = 'safari';
            document.getElementsByTagName("body")[0].setAttribute("class", "apple-device apple-safari touch-device");
        }


    } else if (device === 'android') {
        document.getElementsByTagName("body")[0].setAttribute("class", "touch-device");
        touch = true;
    } else if (device === 'macintosh') {
        apple = true;
        document.getElementsByTagName("body")[0].setAttribute("class", "apple-device");
    }

    var style = document.createElement("style");

    document.getElementsByTagName("body")[0].appendChild(style);

    function addStyle(style_value) {
        var current_styles = style.textContent;
        style.textContent = current_styles + style_value;
    }

    $(window).scroll(function () {
        scroll_top = $(window).scrollTop();
    });

    $(window).resize(function () {
        viewport_height = $(window).height();
        viewport_width = $(window).width();
    });


    // Раскрывающиеся поля. Создание нового объекта
    search_expand_create = new expandSearchCreate();

    // Поиск внутри блока. Создание нового объекта
    typing_search_create = new typingSearchCreate();

    // Сортировка блоков. Создание нового объекта
    blocks_order_create = new blocksOrderCreate();

    // Переключение вкладок. Создание нового объекта
    filter_blocks_create = new blockSwitchCreate();

    // Модальные окна. Создание нового объекта
    modals_create = new modalToggleCreate();

    // Меню. Создание нового объекта
    menu_create = new menuCreate();

    // Уведомления. Создание нового объекта
    handler_notifications_create = new handlerNotificationCreate();

    // Раскрывающиеся карточки. Переменная объекта функции создания.
    short_blocks_create = new shortCheckCreate();

    // Сворачивающиеся блоки. Переменная объекта функции создания.
    collapse_blocks_create = new collapseBlockCreate();

    // Навигация по заметкам и чату. Переменная объекта функции создания.
    nav_content_create = new navContentCreate();

    // Открытие фильтров. Переменная объекта функции создания.
    search_filter_create = new toggleSearchFilterCreate();

    // Свайповое меню поиска. Переменная объекта функции создания.
    handler_search_create = new handlerSearchMenuCreate();

    // --------------------
    // --------------------
    // --------------------
    // --------------------
    // --------------------
    // --------------------

    $('.hide-block__title').on('click', function () {
        var $button = $(this);
        var $wrapper = $button.closest('.hide-block');
        var $block = $wrapper.find('.hide-block__item');
        $block.removeClass('hide');
        $button.addClass('hide');
    });


    if ($('.youtube')) {
        $('.youtube').each(function () {
            youtubeDownload($(this));
        });
    }

    function youtubeDownload($player) {
        var embed = $player.data('youtube');
        var $button = $player.find('.youtube__button');
        $player.css('background', 'url(//img.youtube.com/vi/' + embed + '/maxresdefault.jpg)');
        $button.on('click', function () {
            $button.remove();
            $player.css('background', 'black');
            $player.append('<div class="youtube__load"></div>');
            $player.append('<div id="' + embed + '"></div>');
            var player;

            function onYouTubeIframeAPIReady() {
                player = new YT.Player(embed, {
                    videoId: embed,
                    events: {
                        'onReady': onPlayerReady
                    }
                });

                function onPlayerReady(event) {
                    event.target.playVideo();
                }
            }

            onYouTubeIframeAPIReady();
        });
    }

    if ($('.dropzone__input').length > 0) {
        $('.dropzone__input').each(function () {
            $(this).dropzone({url: "/file/post"});
        });
    }

    if ($('.select')) {
        $('.select').each(function () {
            var options_filds = [];


            $(this).find('option').each(function () {


                if ($(this).data('new-input-id')) {
                    var text = $(this).text();
                    var new_input_id = $(this).data('new-input-id');
                    var new_input = [text, new_input_id];

                    options_filds.push(new_input);
                }
            });


            $(this).selectmenu({
                classes: {
                    "ui-selectmenu-button-open": "select__button select__button--open",
                    "ui-selectmenu-button-closed": "select__button",
                    "ui-selectmenu-icon": "select__icon",
                    "ui-selectmenu-text": "select__text",
                    "ui-selectmenu-menu": "select__menu"
                },
                change: function (event, ui) {
                    if (options_filds) {
                        var current_option = ui.item.value;

                        for (var i = 0; i < options_filds.length; i++) {
                            if (options_filds[i][0] === current_option) {
                                var show_fild = options_filds[i][1];
                                $(show_fild).removeClass('hide');
                            }
                        }
                    }
                }
            });
        });
    }

    if ($('.select-multi')) {
        $('.select-multi').each(function () {
            var $select_multi = $(this);

            $select_multi.picker({containerClass: 'select-multi__block'});
            $select_multi.on('sp-open', function () {
                $select_multi.next('.select-multi__block').addClass('active');
            });

            $select_multi.on('sp-close, sp-change', function () {
                $select_multi.next('.select-multi__block').removeClass('active');
            });
        });

    }

    var datepicker_width = 0;

    $('.input.datapicker').on('click', function () {
        datepicker_width = parseInt($(this).css('width'));
        addStyle('.ui-datepicker {width: ' + datepicker_width + 'px!important}');
    });

    if ($('.datapicker')) {
        $('.datapicker').each(function () {
            var $datapicker = $(this);
            $datapicker.datepicker({
                onChangeMonthYear: function (year, month, datepicker) {
                    addStyle('.ui-datepicker {width: ' + datepicker_width + 'px!important}');
                }
            });
        });
    }

    if ($('.copy-block')) {
        $('.copy-block').each(function () {
            var $item = $(this).find('.copy-block__item');
            var $button = $(this).find('.copy-block__button');
            var $block = $(this).find('.copy-block__items');

            $button.on('click', function () {
                $item.clone().appendTo($block);
            });
        });
    }


    // Временный код для теста
    $(document).on('click', function (e) {
        if ($(e.target).prop('id') === 'test_notification_without_link') {
            handler_notifications.add('Уведомление', 'Изменение успешно сохранено');
        } else if ($(e.target).prop('id') === 'test_notification_with_link') {
            handler_notifications.add('Новое сообщение', 'Офигеть, я наконец-то накатил все правки, не могу поверить', '#');
        }
    });


    function openRecommendation($wrapper) {

        $wrapper.off('click.recommendation');

        if (viewport_width < mobile_width) {

            $wrapper.on('click.recommendation', function () {
                var $modal = $('.recommendation__modal');
                var $modal_background = $('.recommendation__modal-background');
                var $modal_button = $('.recommendation__button');
                var $modal_inner = $modal.find('.recommendation__modal-inner');
                var $style_block = $('.recommendation__style');
                var $short;
                var $photo_short;
                var $item = $wrapper.find('.layout__block');
                var $modal_item = $item.clone();
                var width = $item.innerWidth();
                var height = $item.innerHeight();
                var top = $item.offset().top - scroll_top;
                var left = $item.offset().left;
                var right = viewport_width - left - width;
                var bottom = viewport_height - top - height;
                var recommend_style = document.createElement("style");
                var recommend_style_value;
                var time_delay = 30;
                var time_duration = 350;

                document.getElementsByClassName("recommendation__style")[0].appendChild(recommend_style);

                function addStyle(style_value) {
                    recommend_style.textContent = style_value;
                }


                recommend_style_value = '' +
                    '.recommendation__modal.active {' +
                    '   animation-duration: ' + time_duration + 'ms;' +
                    '}' +
                    '.recommendation__modal.hide {' +
                    '   animation-duration: ' + parseInt(time_duration / 2) + 'ms;' +
                    '}' +
                    '@keyframes rec-scale {' +
                    '   0% {' +
                    '       top:' + top + 'px' +
                    '       bottom:' + (bottom + 50) + 'px' +
                    '       left:' + left + 'px' +
                    '       right:' + right + 'px' +
                    '   }' +
                    '   40% {' +
                    '       top: -10px;' +
                    '       bottom:' + (viewport_height - 10 - height) + 'px' +
                    '       left:' + left + 'px' +
                    '       right:' + right + 'px' +
                    '   }' +
                    '   70% {' +
                    '       top: -10px;' +
                    '       bottom: -10px' +
                    '       left: -10px;' +
                    '       right: -10px;' +
                    '   }' +
                    '   100% {' +
                    '       top: 0;' +
                    '       left: 0;' +
                    '       right: 0;' +
                    '       bottom: 0;' +
                    '   }' +
                    '}' +
                    '@keyframes rec-hide {' +
                    '   0% {' +
                    '       top: 0;' +
                    '       left: 0;' +
                    '       right: 0;' +
                    '       bottom: 0;' +
                    '   }' +
                    '   100% {' +
                    '       top:' + top + 'px' +
                    '       bottom:' + (bottom + 50) + 'px' +
                    '       left:' + left + 'px' +
                    '       right:' + right + 'px' +
                    '   }' +
                    '}';


                $modal.css({
                    'display': 'block',
                    'top': top + 'px',
                    'bottom': (bottom + 50) + 'px',
                    'left': left + 'px',
                    'right': right + 'px'
                });

                addStyle(recommend_style_value);

                var temp_scroll_top = scroll_top;
                $modal.append($modal_item);
                $modal_inner.append($modal_item);
                $short = $modal_inner.find('.short-block');
                $photo_short = $modal_inner.find('.recommendation__item-photo');
                $short.removeClass('collapse');
                $photo_short.removeClass('collapse');

                setTimeout(function () {
                    $modal.addClass('active');
                    $photo_short.addClass('open');
                }, time_delay);

                setTimeout(function () {
                    $modal_background.addClass('active');
                    $modal_button.addClass('active');
                }, (time_delay * 2) + time_duration);

                $modal_button.off('click.recommendation');

                $modal_button.on('click.recommendation', function () {
                    $(window).scrollTop(temp_scroll_top);
                    $modal_background.removeClass('active');
                    $modal_button.removeClass('active');
                    $modal.addClass('hide');

                    setTimeout(function () {
                        $modal.css({
                            'display': 'none'
                        });
                        $modal.removeClass('active');
                        $modal.removeClass('hide');
                        $modal_inner.empty();
                        $style_block.empty();
                    }, parseInt(time_duration / 2));
                });
            });

        }
    }

    $('.recommendation__item').each(function () {
        openRecommendation($(this));
    });


});


// Раскрывающиеся поля. Функция создания объектов для всех полей поиска на странице
function expandSearchCreate() {
    search_expand_fields = null;
    search_expand_fields = new Map();

    for (var i = 0; i < $('.search--expand').length; i++) {
        var $search_expand_field = $($('.search--expand')[i]);
        var func = new expandSearch($search_expand_field);
        var name;

        if ($search_expand_field.attr('id')) {
            name = $search_expand_field.attr('id');
        } else {
            name = 'search_expand_' + i;
        }

        search_expand_fields.set(name, func);
    }
}

// Раскрывающиеся поля. Функция раскрытия поля поиска
function expandSearch($search_panel) {
    var $search_panel_wrapper = $search_panel.closest('.layout__block-header-control');
    var $search_input = $search_panel.find('.search__input');
    var $search_button = $search_panel.find('.search__button');
    var $wrapper = $search_panel_wrapper.parent();
    var $title = $wrapper.find('.layout__block-header-title');
    var expand_class = 'expand';
    var hide_class = 'hide';
    var state = $search_panel.hasClass(expand_class);
    var focus_state = $search_input.is(':focus');
    var result_wrapper = $search_panel.data('wrapper');
    var result_item = $search_panel.data('item');
    var $no_result = $(result_wrapper).find('.not_found_result');

    $search_button.on('click', function () {
        toggleExpandSearch();
    });

    $search_input.on('click', function () {
        openExpandSearch();
    });

    function toggleExpandSearch() {
        if (!state) {
            openExpandSearch();
        } else {
            hideExpandSearch();
        }
    }

    function openExpandSearch() {
        state = true;
        $title.addClass(hide_class);
        $search_panel.addClass(expand_class);
        $search_panel_wrapper.addClass(expand_class);

        focus_state = $search_input.is(':focus');

        if (!focus_state) {
            $search_input.focus();
        }
    }


    function hideExpandSearch() {
        state = false;
        $title.removeClass(hide_class);
        $search_input.val('');
        $search_panel.removeClass(expand_class);
        $search_panel_wrapper.removeClass(expand_class);
        $(result_wrapper).find(result_item).show();
        $no_result.remove();
    }

}

// Поиск внутри блока. Функция создания объектов для всех полей поиска на странице
function typingSearchCreate() {
    search_fields = null;
    search_fields = new Map();

    for (var i = 0; i < $('.search__input').length; i++) {
        var $search_panel = $($('.search__input')[i]).parent();
        var func = new typingSearch($search_panel);
        var name;

        if ($search_panel.attr('id')) {
            name = $search_panel.attr('id');
        } else {
            name = 'typing_search_' + i;
        }

        search_fields.set(name, func);
    }
}

// Поиск внутри блока. Функция поиска внутри блока
function typingSearch($search_panel) {
    var result_wrapper = $search_panel.data('wrapper');
    var result_item = $search_panel.data('item');
    var $search_input = $search_panel.find('.search__input');
    var val;
    var $no_result;
    var no_result_template = '<div id="no_result" class="not_found_result">Контактов не найдено</div>';
    var result_collapse_class = 'collapse';
    var search_process_class = 'search_process_class';

    $search_input.on('input', function () {
        val = $search_input.val().toLowerCase();
        $no_result = $(result_wrapper).find('.not_found_result');

        if (val.length > 0) {
            $(result_wrapper).addClass(search_process_class);
            $(result_wrapper).removeClass(result_collapse_class);
        } else {
            $(result_wrapper).removeClass(search_process_class);
            $(result_wrapper).addClass(result_collapse_class);
        }

        $($(result_wrapper).find(result_item)).each(function () {

            var cyr_search = true;
            var latin_search = true;
            var search_title = $(this).data('search-title').toLowerCase();

            if (search_title.split(val.toLowerCase()).length <= 1) {
                cyr_search = false;
            }

            if (cyrill_to_latin(search_title).split(val).length <= 1) {
                latin_search = false;
            }

            if (!latin_search && !cyr_search) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });

        //проверяем количество оставшихся
        if ($(result_wrapper).find(result_item).is(':visible')) {
            $no_result.remove();
        } else {
            $no_result.remove();
            $(result_wrapper).append(no_result_template);
        }

    });
}

// Сортировка блоков. Функция создания объектов для сортируемых блоков
function blocksOrderCreate() {
    blocks_orders = null;
    blocks_orders = new Map();


    for (var i = 0; i < $('.layout__columns').length; i++) {
        var $block_order = $($('.layout__columns')[i]);

        var func = new blocksOrder($block_order, '.layout__half');
        var name;

        if ($block_order.attr('id')) {
            name = $block_order.attr('id');
        } else {
            name = 'block_order_' + i;
        }

        blocks_orders.set(name, func);
    }
}

// Сортировка блоков. Функция сортировки блоков
function blocksOrder($wrapper, columns_class) {
    var $table = $wrapper;
    var $columns = $table.find(columns_class);
    var $cell_1 = $columns.eq(0).children();
    var $cell_2 = $columns.eq(1).children();
    var remove_state = false;

    function cellsDetach() {
        if (viewport_width < mobile_width) {
            $cell_1.detach().appendTo($columns.eq(0));
            $cell_2.detach().appendTo($columns.eq(0));
            $table.css('opacity', 1);
            remove_state = true;

            cellsSort($columns.eq(0).children());

        } else {
            if (remove_state === true) {
                $cell_1.detach().appendTo($columns.eq(0));
                $cell_2.detach().appendTo($columns.eq(1));
            }

            cellsSort($columns.eq(0).children());
            cellsSort($columns.eq(1).children());
        }
    }

    cellsDetach();

    function cellsSort($blocks) {

        var parameter;

        if (viewport_width < mobile_width) {
            parameter = 'order-mobile';
        } else {
            parameter = 'order-desktop';
        }

        var orders = [];
        var empty_name = 'np';

        for (var i = 0; i < $blocks.length; i++) {
            if (!orders[i]) {
                orders[i] = empty_name;
            }

            if ($blocks.eq(i).data(parameter)) {
                var number = parseInt($blocks.eq(i).data(parameter)) - 1;
                orders[number] = number;
            }
        }

        for (var i = 0; i < $blocks.length; i++) {
            var number;
            if ($blocks.eq(i).data(parameter)) {
                number = parseInt($blocks.eq(i).data(parameter)) - 1;
                $blocks.eq(i).css('order', number);
            } else {
                var record = false;

                for (var k = 0; k < orders.length; k++) {
                    if (record === false && orders[k] === empty_name) {
                        orders[k] = k;
                        number = k;
                        record = true;
                    }
                }
            }

            $blocks.eq(i).css('order', number);
        }
    }
}

// Переключение вкладок. Функция создания объектов для переключаемых вкладок
function blockSwitchCreate() {
    filter_blocks = null;
    filter_blocks = new Map();

    var i = 0;

    for (i = 0; i < $('.switch').length; i++) {
        var $filter_block = $($('.switch')[i]);

        var func = new blockSwitch($filter_block, '.switch__button', '.switch__item');
        var name;

        if ($filter_block.attr('id')) {
            name = $filter_block.attr('id');
        } else {
            name = 'filter_block_switch_' + i;
        }

        filter_blocks.set(name, func);
    }

    for (i = 0; i < $('.layout__switch').length; i++) {
        var $filter_block = $($('.layout__switch')[i]);

        var func = new blockSwitch($filter_block, '.layout__switch-button', '.layout__block');
        var name;

        if ($filter_block.attr('id')) {
            name = $filter_block.attr('id');
        } else {
            name = 'filter_block_layout__switch_' + i;
        }

        filter_blocks.set(name, func);
    }

    for (i = 0; i < $('.news').length; i++) {
        var $filter_block = $($('.news')[i]);

        var func = new blockSwitch($filter_block, '.news__header-button', '.layout__icon-row');
        var name;

        if ($filter_block.attr('id')) {
            name = $filter_block.attr('id');
        } else {
            name = 'filter_block_news_' + i;
        }

        filter_blocks.set(name, func);
    }

    for (i = 0; i < $('.modal__switch').length; i++) {
        var $filter_block = $($('.modal__switch')[i]);

        var func = new blockSwitch($filter_block, '.modal__switch-button', '.modal__switch-item');
        var name;

        if ($filter_block.attr('id')) {
            name = $filter_block.attr('id');
        } else {
            name = 'filter_block_modal__switch_' + i;
        }

        filter_blocks.set(name, func);
    }
}

// Переключение вкладок. Функция переключения вкладок
function blockSwitch($filter_block, button_class, elem_class) {

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    var filter_block_id = randomInteger(0, 10000);
    $filter_block.attr('id', filter_block_id);
    var filter_option_mobile = 'switch-mobile';
    var filter_option_desktop = 'switch-desktop';
    var goal_option = 'switch-goal';

    var active_class = 'active';
    var hide_class = 'hide';

    var names = [];
    var $mobile_blocks = [];
    var $desktop_blocks = [];
    var $all_mobile_blocks = [];
    var $all_desktop_blocks = [];
    var $buttons = [];

    $filter_block.find(button_class).each(function () {
        names.push($(this).data(goal_option));
        $buttons.push($(this));
    });

    for (var i = 0; i < names.length; i++) {
        $mobile_blocks.push([]);
        $desktop_blocks.push([]);
    }

    $(elem_class).each(function () {
        if ($(this).data(filter_option_mobile)) {
            $all_mobile_blocks.push($(this));

            var filters_options = $(this).data(filter_option_mobile).split(', ');

            for (var i = 0; i < names.length; i++) {
                for (var k = 0; k < filters_options.length; k++) {
                    if (filters_options[k] === names[i]) {
                        $mobile_blocks[i].push($(this));
                    }
                }
            }
        }

        if ($(this).data(filter_option_desktop)) {
            $all_desktop_blocks.push($(this));

            var filters_options = $(this).data(filter_option_desktop).split(', ');

            for (var i = 0; i < names.length; i++) {
                for (var k = 0; k < filters_options.length; k++) {
                    if (filters_options[k] === names[i]) {
                        $desktop_blocks[i].push($(this));
                    }
                }
            }
        }
    });


    function blockSwitchActive() {
        var active_goal = names.indexOf($filter_block.find(button_class + '.' + active_class).data(goal_option));

        $($all_mobile_blocks).each(function () {
            $(this).addClass(hide_class);
        });

        $($all_desktop_blocks).each(function () {
            $(this).addClass(hide_class);
        });

        if (viewport_width < mobile_width) {

            for (var i = 0; i < $mobile_blocks[active_goal].length; i++) {
                $mobile_blocks[active_goal][i].removeClass(hide_class);
            }


        } else {

            for (var i = 0; i < $desktop_blocks[active_goal].length; i++) {
                $desktop_blocks[active_goal][i].removeClass(hide_class);
            }


        }
    }

    blockSwitchActive();

    $('#' + filter_block_id + ' ' + button_class).on('click', function () {
        $filter_block.find(button_class).removeClass(active_class);
        $(this).addClass(active_class);
        blockSwitchActive();
    });
}

// Модальные окна. Функция создания объектов для модальных окон
function modalToggleCreate() {
    modals = null;

    if ($('.modal__background').length > 0 && $('.modal__block').length > 0) {
        modals = new modalToggle();
    }
}

// Модальные окна. Функция открытия/закрытия
function modalToggle() {
    var state = false;
    var $open_buttons = $('.open-modal');
    var $close_buttons = $('.close-modal');
    var $background = $('.modal__background');
    var $modals = $('.modal__block');
    var active_class = 'active';

    this.open = function (modal_name) {
        openModal(modal_name);
    };

    this.close = function () {
        console.log('CLOSED');
        closeModal();
    };

    this.state = function () {
        return state;
    };

    function openModal(modal_name, button) {
        state = true;
        var $modal = $(modal_name);
        $background.addClass(active_class);
        $modals.removeClass(active_class);
        $modal.addClass(active_class);
    }

    function closeModal() {
        state = false;
        $background.removeClass(active_class);
        $modals.removeClass(active_class);
    }

    $open_buttons.on('click', function () {
        openModal($(this).data('modal'), $(this));
    });

    $close_buttons.on('click', function () {
        closeModal();
    });

    if (state === false) {
        $modals.css('top', (scroll_top + (viewport_height / 2)) + 'px');
    }

    $(window).scroll(function () {
        if (state === false) {
            $modals.css('top', (scroll_top + (viewport_height / 2)) + 'px');
        }
    });

}

// Меню. Функция создания объектов для меню
function menuCreate() {
    all_menu = null;
    all_menu = new Map();
    $(document).unbind('.menu');

    var i = 0;

    for (i = 0; i < $('.menu').length; i++) {
        var menu = '.menu , .menu__head, .header__main-login-submenu';
        var button = '.header__mobile-accordion-button';

        var func = new Menu(button, menu);
        var name = 'menu_main_' + i;

        all_menu.set(name, func);
    }

    for (i = 0; i < $('.tools-block').length; i++) {
        var menu = '.tools-block';
        var button = '.header__main-button';

        var func = new Menu(button, menu);
        var name = 'menu_tools_' + i;

        all_menu.set(name, func);
    }
}

// Меню. Функция открытия/закрытия
function Menu(button, menu, background, active_class) {
    var state = false;
    var buttons = button.split(', ');
    var menu_blocks = menu.split(', ');

    if (background) {
        var backgrounds = background.split(', ');
    }

    if (!active_class) {
        active_class = 'active';
    }

    this.open = function () {
        openMenu();
    };

    this.close = function () {
        closeMenu();
    };

    this.state = function () {
        return state;
    };

    function openMenu() {
        state = true;

        for (var i = 0; i < buttons.length; i++) {
            $(buttons[i]).addClass(active_class);
        }

        for (var i = 0; i < menu_blocks.length; i++) {
            $(menu_blocks[i]).addClass(active_class);
        }

        if (background) {
            for (var i = 0; i < backgrounds.length; i++) {
                $(backgrounds[i]).addClass(active_class);
            }
        }
    }

    function closeMenu() {
        state = false;

        for (var i = 0; i < buttons.length; i++) {
            $(buttons[i]).removeClass(active_class);
        }

        for (var i = 0; i < menu_blocks.length; i++) {
            $(menu_blocks[i]).removeClass(active_class);
        }

        if (background) {
            for (var i = 0; i < backgrounds.length; i++) {
                $(backgrounds[i]).removeClass(active_class);
            }
        }

    }

    $(document).bind('click.menu', checkAction);

    function checkAction(e) {
        var button_click = false;
        var menu_click = false;

        var i;

        for (i = 0; i < buttons.length; i++) {
            if ($(e.target).closest(buttons[i]).length === 1) {
                button_click = true;
            }
        }

        for (i = 0; i < menu_blocks.length; i++) {
            if ($(e.target).closest(menu_blocks[i]).length === 1) {
                menu_click = true;
            }
        }

        if (state === false) {
            if (button_click === true) {
                openMenu();
            }
        } else {
            if (menu_click === false || button_click === true) {
                closeMenu();
            }
        }
    }
}

// Уведомления. Функция создания объектов для уведомлений
function handlerNotificationCreate() {
    handler_notifications = new handlerNotification();
}

// Уведомления. Функция обработчика
function handlerNotification() {
    var $wrapper = $('.notification');
    var $items = $('.notification__item');
    var active_class = 'active';
    var duration = 7;
    var max_count;
    var notification_template;


    if (viewport_width < mobile_width) {
        max_count = 1;
    } else {
        max_count = 5;
    }

    this.add = function (title, text, link) {
        addNotification(title, text, link);
    };

    function addNotification(title, text, link) {
        $items = $('.notification__item');

        if (link) {
            notification_template = '<div class="notification__item">' +
                '<div class="notification__close"></div>' +
                '<a href="' + link + '" class="notification__item-inner">' +
                '<div class="notification__item-title notification__item-title--link">' + title + '</div>' +
                '<div class="notification__item-text">' + text + '</div>' +
                '</a>' +
                '</div>';
        } else {
            notification_template = '<div class="notification__item">' +
                '<div class="notification__close"></div>' +
                '<div class="notification__item-inner">' +
                '<div class="notification__item-title">' + title + '</div>' +
                '<div class="notification__item-text">' + text + '</div>' +
                '</div>' +
                '</div>';
        }

        var $notification = $(notification_template);

        $wrapper.append($notification);

        $notification.css('animation-duration', duration + 's');

        $notification.addClass(active_class);

        setTimeout(function () {
            $notification.remove();
        }, duration * 1000);

        for (var i = max_count - 1; i < $items.length; i++) {
            $items.eq(i).remove();
        }
    }

    $(document).on('click', function (e) {
        if ($(e.target).hasClass('notification__close')) {
            var $notification = $(e.target).closest('.notification__item');
            delNotification($notification);
        }
    });

    function delNotification($notification) {
        $notification.remove();
        $items = $('.notification__item');
    }
}

// Раскрывающиеся карточки. Функция объектов для карточек
function shortCheckCreate() {

    var $news_reload_button = $('.news__header-button');

    function shortCheckCreateSubfunction() {
        short_blocks = null;
        short_blocks = new Map();

        for (var i = 0; i < $('.short-block').length; i++) {
            var $short_block = $($('.short-block')[i]);
            var func = new shortCheck($short_block);
            var name;

            if ($short_block.attr('id')) {
                name = $short_block.attr('id');
            } else {
                name = 'short_block_' + i;
            }

            short_blocks.set(name, func);
        }

        console.log(short_blocks);
    }

    shortCheckCreateSubfunction();

    // Раскрывающиеся карточки. Переделение при переключении вкладок новостей
    $news_reload_button.on('click', function () {
        shortCheckCreateSubfunction();
    });
}

// Раскрывающиеся карточки. Функция обработки
function shortCheck($short_block) {
    var block_classes = $short_block.attr('class').split(' ');
    var $button = $short_block.find('.short-block__button');
    var count;
    var count_item = -1;

    for (var i = 0; i < block_classes.length; i++) {
        var block_class = block_classes[i];
        if (block_class.match(/short-block--/i)) {
            var block_class_elem = block_class.split('--');
            count = block_class_elem[1];
        }
    }


    $short_block.children().each(function () {
        count_item = count_item + 1;
    });

    if (count >= count_item) {
        $short_block.removeClass('collapse');
        $button.addClass('hide');
    } else {
        $short_block.addClass('collapse');
        $button.removeClass('hide');
    }

    $button.off('click.short_block');

    $button.on('click.short_block', function () {
        $short_block.toggleClass('collapse');
    });
}

// Сворачивающиеся блоки. Функция объектов для блоков
function collapseBlockCreate() {
    collapse_blocks = null;
    collapse_blocks = new Map();

    for (var i = 0; i < $('.layout__block-header-hide').length; i++) {
        var $collapse_button = $($('.layout__block-header-hide')[i]);
        var func = new collapseBlock($collapse_button);
        var name;

        if ($collapse_button.attr('id')) {
            name = $collapse_button.attr('id');
        } else {
            name = 'collapse_block_' + i;
        }

        collapse_blocks.set(name, func);
    }
}

// Сворачивающиеся блоки. Функция сворачивания и разворачивания блоков
function collapseBlock($button) {
    $button.off('click.collapse_block');

    $button.on('click.collapse_block', function () {
        var $block = $(this).closest('.layout__block');
        var $content = $block.find('.layout__block-content');

        if ($block.hasClass('collapse') === true) {
            $content.show(0);
            $block.removeClass('collapse');
        } else {
            $content.hide(0);
            $block.addClass('collapse');
        }
    });
}

// Навигация по заметкам и чату. Функция создания
function navContentCreate() {
    nav_content = null;
    nav_content = new Map();

    for (var i = 0; i < $('.contents').length; i++) {
        var $contents = $($('.contents')[i]);
        var func = new navContent($contents);
        var name;

        if ($contents.attr('id')) {
            name = $contents.attr('id');
        } else {
            name = 'contents_' + i;
        }

        nav_content.set(name, func);
    }
}

// Навигация по заметкам и чату. Функция обработки
function navContent($wrapper) {
    var $chat_wrapper = $wrapper.find('.dialog_lists');
    var $links = $wrapper.find('.contents__link');
    var $items = $wrapper.find('.contents__inner-item');
    var $block = $wrapper.find('.contents__block');
    var $preview = $wrapper.find('.preview_chat_select');
    var $back = $wrapper.find('.contents__inner-item-header-back');

    var fit_content_class = 'fit-content';
    var block_fit_content_class = 'contents__block--fit-content';
    var active_class = 'active';


    $links.off('click.chat_menu');

    $links.on('click.chat_menu', function () {


        $preview.hide();

        var fit_content = false;

        if ($block.hasClass(block_fit_content_class) === true) {
            fit_content = true;
        }

        var goal = $(this).data('contents-goal');
        var $chat_wrapper = $wrapper.find('[data-contents="' + goal + '"]');
        var $chat_scroll = $chat_wrapper.find('.chat__block.chat__block--fill');
        var $chat_scroll_inner = $chat_scroll.find('.chat_list_scroll');
        $links.removeClass(active_class);
        $items.removeClass(active_class);
        $block.removeClass(active_class);
        $(this).addClass(active_class);

        if (fit_content === true) {
            $('.wrapper').addClass('not-menu');
            $('html').addClass(fit_content_class);
            $('body').addClass(fit_content_class);

            if (viewport_width < mobile_width) {
                $chat_wrapper.css('height', viewport_height + 'px');
            }
        }

        $chat_wrapper.addClass(active_class);

        $back.off('click.chat_menu');

        $back.on('click.chat_menu', function () {
            $block.addClass(active_class);
            $('.wrapper').removeClass('not-menu');
            $('html').removeClass(fit_content_class);
            $('body').removeClass(fit_content_class);

            if (viewport_width < mobile_width) {
                $chat_wrapper.css('height', 'auto');
            }
        });

        var content_chat;
        var active_touch = false;
        var active_scroll = false;
        var active_bottom = false;
        var chat_height = $chat_scroll.height();
        var chat_inner_height = $chat_scroll_inner.height();
        var chat_header_height = $('.contents__inner-item-header').height();


        clearInterval(scroll_chat_timer);

        scroll_chat_timer = setInterval(function () {

            if ($chat_scroll_inner.height() > 0) {

                if (viewport_width < mobile_width) {
                    $chat_scroll.animate({
                        scrollTop: $chat_scroll_inner.height() - viewport_height + chat_header_height - 1
                    }, 30);
                } else {
                    $chat_scroll.animate({
                        scrollTop: $chat_scroll_inner.height() + 250 - viewport_height + chat_header_height - 1
                    }, 30);
                }

                clearInterval(scroll_chat_timer);
            }
        }, 50);


        // Проверка активного тача
        $chat_scroll.on('touchstart', function () {
            active_touch = true;
        });

        $chat_scroll.on('touchend', function () {
            active_touch = false;
        });

        clearInterval(active_scroll_check_timer);

        // Проверка активного скролла
        var scroll_checker = new scrollCheck();
        var scroll_event_checker = new scrollEventCheck();
        var current_scroll_chat;

        function scrollCheck() {
            var last_scroll = 0;

            active_scroll_check_timer = setInterval(function () {
                if ($chat_scroll.scrollTop() !== last_scroll) {
                    last_scroll = $chat_scroll.scrollTop();
                    active_scroll = true;
                } else {
                    active_scroll = false;
                    scroll_checker = null;
                }
            }, 100);
        }

        function scrollEventCheck() {
            $chat_scroll.off('scroll.chat_menu');

            $chat_scroll.on('scroll.chat_menu', function () {
                chat_inner_height = $chat_scroll_inner.height();
                checkScrollToBottom();

                if (scroll_checker === null) {
                    scroll_checker = new scrollCheck();
                }
            });
        }

        function checkScrollToBottom() {
            current_scroll_chat = $chat_scroll.scrollTop();
            if (current_scroll_chat >= $chat_scroll_inner.height() + chat_header_height - viewport_height) {
                active_bottom = true;
            }
        }

        clearInterval(scroll_check_timer);


        if (viewport_width < mobile_width) {
            scroll_check_timer = setInterval(function () {
                if (active_scroll === false && active_bottom === true && active_touch === false) {
                    active_bottom = false;
                    $chat_scroll.animate({
                        scrollTop: chat_inner_height - viewport_height + chat_header_height - 2
                    }, 50);
                }
            }, 50);
        }
    });
}

// Открытие фильтров. Функция создания
function toggleSearchFilterCreate() {
    search_filter = null;
    search_filter = new Map();

    for (var i = 0; i < $('.search-page__input-block').length; i++) {
        var $search_filter = $($('.search-page__input-block')[i]);
        var func = new toggleSearchFilter($search_filter);
        var name;

        if ($search_filter.attr('id')) {
            name = $search_filter.attr('id');
        } else {
            name = 'search_filter_' + i;
        }

        search_filter.set(name, func);
    }
}

// Открытие фильтров. Функция открытия/закрытия
function toggleSearchFilter($wrapper) {
    var $inputs_block = $('.search-page__input-block');
    var $filter_block = $('.search-page__filter-block');
    var $filter_button = $('.search-page__filter');
    var $mobile_button = $('.search-page__filter-block-mobile-button');

    var active_class = 'active';
    var state = false;

    if ($inputs_block.hasClass(active_class)) {
        state = true;
    }

    $filter_button.off('click.search_page');

    $filter_button.on('click.search_page', function () {
        if (state) {
            $inputs_block.removeClass(active_class);
            state = false;
        } else {
            $inputs_block.addClass(active_class);
            state = true;
        }
    });

    $mobile_button.off('click.search_page');

    $mobile_button.on('click.search_page', function () {
        $inputs_block.removeClass(active_class);
        state = false;
    });
}

// Свайповое меню поиска. Функция создания
function handlerSearchMenuCreate() {
    handler_search = null;
    handler_search = new Map();

    for (var i = 0; i < $('.search-page__category-filter-items-wrapper').length; i++) {
        var $search_menu_wrapper = $($('.search-page__category-filter-items-wrapper')[i]);
        var func = new handlerSearchMenu($search_menu_wrapper);
        var name;

        if ($search_menu_wrapper.attr('id')) {
            name = $search_menu_wrapper.attr('id');
        } else {
            name = 'handler_search_' + i;
        }

        handler_search.set(name, func);
    }
}

// Свайповое меню поиска. Функция свайпа и скрола
function handlerSearchMenu($wrapper) {

    // Общие переменные фильтра
    var block_class = 'search-page__category-filter-items-block';
    var $block = $('.' + block_class);
    var button_class = 'search-page__category-filter-item';
    var $button = $('.' + button_class);
    var buttons_array = [];
    var line_class = 'search-page__category-filter-line';
    var $line = $('.' + line_class);
    var width_items = 0;
    var start_mouse_pos;
    var start_block_scroll = $block.scrollLeft();
    var scroll_timeout = false;
    var edge_width = $('.search-page__category-filter-items-wrapper-edge').width();
    var $left_button = $('.search-page__category-filter-items-wrapper-edge-arrow--left');
    var $right_button = $('.search-page__category-filter-items-wrapper-edge-arrow--right');


    // Расстановка ширины итемам фильтра
    function filter_width() {
        var n = 0;

        $button.each(function () {
            var width_button = $(this).width();
            var outer_width_button = $(this).outerWidth(true);
            $(this).css('width', width_button + 'px');
            buttons_array.push(n);
            buttons_array[n] = {left_edge: width_items, right_edge: width_items + width_button};
            width_items = width_items + outer_width_button;

            n++;
        });

        width_items = parseInt(width_items);
    }

    // Расстановка мягких краев
    function soft_edge() {
        if (width_items > parseInt($block.width())) {
            if ($block.scrollLeft() > 0) {
                if ($wrapper.hasClass('left-edge') === false) {
                    $wrapper.addClass('left-edge');
                }
            } else {
                $wrapper.removeClass('left-edge');
            }
            if ($block.scrollLeft() < (width_items - parseInt($block.width()))) {
                if ($wrapper.hasClass('right-edge') === false) {
                    $wrapper.addClass('right-edge');
                }
            } else {
                $wrapper.removeClass('right-edge');
            }

        }
    }

    // Позиция линии под фильтрами
    function filter_line() {
        var $active_button = $('.' + button_class + '.active');
        var $line = $('.' + line_class);
        var shift = $active_button.position().left;
        var width = $active_button.width();
        $line.css({
            'transform': 'translateX(' + shift + 'px)',
            'width': width + 'px'
        });
    }

    // Функция доводчика
    function end_move(right_move) {

        var button_index;
        var shift;

        if (right_move === false) {
            $.each(buttons_array, function (index, value) {
                if (value["left_edge"] < $block.scrollLeft() && value["right_edge"] > $block.scrollLeft()) {
                    shift = value["left_edge"] - edge_width;
                }
            });

            $block.animate({
                scrollLeft: shift
            }, 500);

        } else {
            $.each(buttons_array, function (index, value) {
                if (value["left_edge"] < ($block.scrollLeft() + $block.width()) && value["right_edge"] > ($block.scrollLeft() + $block.width())) {
                    shift = value["right_edge"] - $block.width() + edge_width;
                }
            });
            $block.animate({
                scrollLeft: shift
            }, 500);
        }


    }

    // Переключение активных кнопок
    $button.off('click.handler_search');

    $button.on('click.handler_search', function () {
        if ($(this).hasClass('active') === false) {
            $button.removeClass('active');
            $(this).addClass('active');
            filter_line();
        }
    });

    $right_button.off('click.handler_search');

    $right_button.on('click.handler_search', function () {
        $('.search-page__category-filter-items-block').animate({
            scrollLeft: (width_items - $block.width())
        }, 500);
    });

    $left_button.off('click.handler_search');

    $left_button.on('click.handler_search', function () {
        $('.search-page__category-filter-items-block').animate({
            scrollLeft: 0
        }, 500);
    });

    // Эмуляция скрола для нетачевых устройств
    $(document).mousedown(function (e) {
        if ($(e.target).hasClass(block_class) === true || $(e.target).parent().hasClass(block_class)) {
            start_mouse_pos = e.pageX;
            start_block_scroll = parseInt($block.scrollLeft());

            $(document).on('mousemove.shift', function (e) {
                $block.scrollLeft(start_block_scroll - (e.pageX - start_mouse_pos));
            });
        }
    }).mouseup(function () {
        $(document).off('mousemove.shift');
        var block_shift = start_block_scroll - parseInt($block.scrollLeft());
        if (block_shift > 20 || block_shift < -20) {
            if (start_block_scroll > parseInt($block.scrollLeft())) {
                end_move(false);
            } else {
                end_move(true);
            }
        }
    });


    // События при скроле
    $block.scroll(function () {

        $line.css('transition', 'none');
        filter_line();

        if (scroll_timeout !== false) {
            clearTimeout(scroll_timeout);
        }

        scroll_timeout = setTimeout(function () {
            $line.css('transition', 'all .2s ease-in');
        }, 1);

        soft_edge();
    });

    filter_line();

    filter_width();

    soft_edge();
}





