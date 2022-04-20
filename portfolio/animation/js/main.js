var $body;
var viewport_height;
var viewport_width;
var scroll_top;
var scroll_down;
var scroll_counter;
var mobile_width;


$(document).ready(function () {

    $body = $('html, body');
    viewport_height = $(window).height();
    viewport_width = $(window).width();
    scroll_top = $(window).scrollTop();
    scroll_counter = 0;
    mobile_width = 768;

    $(window).resize(function () {
        viewport_height = $(window).height();
        viewport_width = $(window).width();
    });

    var $section = $('.section');
    var $sections = $('.section__block');
    var sections_options = [];
    var html_height = 0;

    if (viewport_width > 1279) {
        for (var i = 0; i < $sections.length; i++) {
            var text_height = $sections.eq(i).find('.section__text').outerHeight();
            var text_inner_height = $sections.eq(i).find('.section__text-inner').outerHeight();
            var hidden_height = text_inner_height - text_height;
            var hidden_heights = 0;
            var section_height = viewport_height + hidden_height;
            var border_bottom = 0;
            var border_top = 0;

            // Определение границ секций
            if (i === 0) {
                border_bottom = section_height;
                border_top = 0;
                hidden_heights = hidden_height;
            } else {
                for (var k = 0; k < i; k++) {
                    border_top += sections_options[k].height;
                    border_bottom = border_top + section_height;
                }

                hidden_heights = sections_options[i - 1].hidden_heights + hidden_height;
            }

            var section = {
                scroll_height: hidden_height,
                hidden_heights: hidden_heights,
                border_top: border_top,
                border_bottom: border_bottom,
                height: section_height
            };

            sections_options[i] = section;


        }

        $(window).scroll(function () {
            scroll_top = $(window).scrollTop();

            function checkSection() {
                var active_section;

                if (scroll_top >= sections_options[0].border_top && scroll_top < sections_options[0].border_bottom) {
                    active_section = 0;
                } else if (scroll_top >= sections_options[1].border_top && scroll_top < sections_options[1].border_bottom) {
                    active_section = 1;
                } else if (scroll_top >= sections_options[2].border_top && scroll_top < sections_options[2].border_bottom) {
                    active_section = 2;
                } else if (scroll_top >= sections_options[3].border_top && scroll_top < sections_options[3].border_bottom) {
                    active_section = 3;
                }

                return active_section;
            }

            var border_top = sections_options[checkSection()].border_top;

            var inner_scroll = scroll_top - border_top;

            var scroll_height = sections_options[checkSection()].scroll_height;
            var shift = sections_options[checkSection()].hidden_heights + -scroll_top;

            if (inner_scroll >= scroll_height) {
                $section.css({
                    'transform': 'translateY(' + shift + 'px)'
                });
            } else {
                var position_top = 0;

                if (checkSection() !== 0) {
                    position_top = sections_options[(checkSection() - 1)].border_bottom - sections_options[(checkSection() - 1)].hidden_heights;
                }

                $section.css({
                    'transform': 'translateY(' + -position_top + 'px)'
                });

            }


            $sections.eq(checkSection()).find('.section__text').scrollTop(inner_scroll);

            // console.log(checkSection());
            // console.log($sections.length);

            for (var l = 0; l < $sections.length; l++) {

                if (l > checkSection()) {
                    $sections.eq(l).find('.section__text').scrollTop(0);
                }
            }

        });

        for (var i = 0; i < sections_options.length; i++) {
            html_height += sections_options[i].height;
        }

        function animationFirst() {
            var $el_1 = $('.animation-first__el.animation-first__el--1');
            var $el_2 = $('.animation-first__el.animation-first__el--2');
            var $el_3 = $('.animation-first__el.animation-first__el--3');
            var $el_4 = $('.animation-first__el.animation-first__el--4');
            var $el_5 = $('.animation-first__el.animation-first__el--5');
            var $el_6 = $('.animation-first__el.animation-first__el--6');
            var $el_7 = $('.animation-first__el.animation-first__el--7');
            var $el_8 = $('.animation-first__el.animation-first__el--8');
            var $el_9 = $('.animation-first__el.animation-first__el--9');
            var $el_1_final = $('.animation-first__el.animation-first__el--1--final');
            var $el_2_final = $('.animation-first__el.animation-first__el--2--final');
            var $el_3_final = $('.animation-first__el.animation-first__el--3--final');
            var $el_4_final = $('.animation-first__el.animation-first__el--4--final');
            var $el_5_final = $('.animation-first__el.animation-first__el--5--final');
            var $el_6_final = $('.animation-first__el.animation-first__el--6--final');
            var $el_7_final = $('.animation-first__el.animation-first__el--7--final');
            var $el_8_final = $('.animation-first__el.animation-first__el--8--final');
            var $el_9_final = $('.animation-first__el.animation-first__el--9--final');
            var $el_final_line = $('.animation-first__final-line');

            var el_1_start_top = $el_1.offset().top;
            var el_1_final_top = $el_1_final.offset().top;
            var el_1_start_left = $el_1.offset().left;
            var el_1_final_left = $el_1_final.offset().left;
            var el_1_dif_top = el_1_final_top - el_1_start_top;
            var el_1_dif_left = el_1_final_left - el_1_start_left;

            var el_2_start_top = $el_2.offset().top;
            var el_2_final_top = $el_2_final.offset().top;
            var el_2_start_left = $el_2.offset().left;
            var el_2_final_left = $el_2_final.offset().left;
            var el_2_dif_top = el_2_final_top - el_2_start_top;
            var el_2_dif_left = el_2_final_left - el_2_start_left;

            var el_3_start_top = $el_3.offset().top;
            var el_3_final_top = $el_3_final.offset().top;
            var el_3_start_left = $el_3.offset().left;
            var el_3_final_left = $el_3_final.offset().left;
            var el_3_dif_top = el_3_final_top - el_3_start_top;
            var el_3_dif_left = el_3_final_left - el_3_start_left;

            var el_4_start_top = $el_4.offset().top;
            var el_4_final_top = $el_4_final.offset().top;
            var el_4_start_left = $el_4.offset().left;
            var el_4_final_left = $el_4_final.offset().left;
            var el_4_dif_top = el_4_final_top - el_4_start_top;
            var el_4_dif_left = el_4_final_left - el_4_start_left;

            var el_5_start_top = $el_5.offset().top;
            var el_5_final_top = $el_5_final.offset().top;
            var el_5_start_left = $el_5.offset().left;
            var el_5_final_left = $el_5_final.offset().left;
            var el_5_dif_top = el_5_final_top - el_5_start_top;
            var el_5_dif_left = el_5_final_left - el_5_start_left;

            var el_6_start_top = $el_6.offset().top;
            var el_6_final_top = $el_6_final.offset().top;
            var el_6_start_left = $el_6.offset().left;
            var el_6_final_left = $el_6_final.offset().left;
            var el_6_dif_top = el_6_final_top - el_6_start_top;
            var el_6_dif_left = el_6_final_left - el_6_start_left;

            var el_7_start_top = $el_7.offset().top;
            var el_7_final_top = $el_7_final.offset().top;
            var el_7_start_left = $el_7.offset().left;
            var el_7_final_left = $el_7_final.offset().left;
            var el_7_dif_top = el_7_final_top - el_7_start_top;
            var el_7_dif_left = el_7_final_left - el_7_start_left;

            var el_8_start_top = $el_8.offset().top;
            var el_8_final_top = $el_8_final.offset().top;
            var el_8_start_left = $el_8.offset().left;
            var el_8_final_left = $el_8_final.offset().left;
            var el_8_dif_top = el_8_final_top - el_8_start_top;
            var el_8_dif_left = el_8_final_left - el_8_start_left;

            var el_9_start_top = $el_9.offset().top;
            var el_9_final_top = $el_9_final.offset().top;
            var el_9_start_left = $el_9.offset().left;
            var el_9_final_left = $el_9_final.offset().left;
            var el_9_dif_top = el_9_final_top - el_9_start_top;
            var el_9_dif_left = el_9_final_left - el_9_start_left;

            $(window).scroll(function () {
                var percent = $el_final_line.offset().top / 100;
                var progress = 100 - (($el_final_line.offset().top - scroll_top) / percent);

                if (progress <= 100) {

                    var el_1_shift_top = (el_1_dif_top / 100) * progress;
                    var el_1_shift_left = (el_1_dif_left / 100) * progress;

                    var el_2_shift_top = (el_2_dif_top / 100) * progress;
                    var el_2_shift_left = (el_2_dif_left / 100) * progress;

                    var el_3_shift_top = (el_3_dif_top / 100) * progress;
                    var el_3_shift_left = (el_3_dif_left / 100) * progress;

                    var el_4_shift_top = (el_4_dif_top / 100) * progress;
                    var el_4_shift_left = (el_4_dif_left / 100) * progress;

                    var el_5_shift_top = (el_5_dif_top / 100) * progress;
                    var el_5_shift_left = (el_5_dif_left / 100) * progress;

                    var el_6_shift_top = (el_6_dif_top / 100) * progress;
                    var el_6_shift_left = (el_6_dif_left / 100) * progress;

                    var el_7_shift_top = (el_7_dif_top / 100) * progress;
                    var el_7_shift_left = (el_7_dif_left / 100) * progress;

                    var el_8_shift_top = (el_8_dif_top / 100) * progress;
                    var el_8_shift_left = (el_8_dif_left / 100) * progress;

                    var el_9_shift_top = (el_9_dif_top / 100) * progress;
                    var el_9_shift_left = (el_9_dif_left / 100) * progress;

                    $el_1.css('transform', 'translate(' + el_1_shift_left + 'px,' + el_1_shift_top + 'px)');
                    $el_2.css('transform', 'translate(' + el_2_shift_left + 'px,' + el_2_shift_top + 'px)');
                    $el_3.css('transform', 'translate(' + el_3_shift_left + 'px,' + el_3_shift_top + 'px)');
                    $el_4.css('transform', 'translate(' + el_4_shift_left + 'px,' + el_4_shift_top + 'px)');
                    $el_5.css('transform', 'translate(' + el_5_shift_left + 'px,' + el_5_shift_top + 'px)');
                    $el_6.css('transform', 'translate(' + el_6_shift_left + 'px,' + el_6_shift_top + 'px)');
                    $el_7.css('transform', 'translate(' + el_7_shift_left + 'px,' + el_7_shift_top + 'px)');
                    $el_8.css('transform', 'translate(' + el_8_shift_left + 'px,' + el_8_shift_top + 'px)');
                    $el_9.css('transform', 'translate(' + el_9_shift_left + 'px,' + el_9_shift_top + 'px)');
                } else if (progress > 100) {

                    $el_1.css('transform', 'translate(' + el_1_dif_left + 'px,' + el_1_dif_top + 'px)');
                    $el_2.css('transform', 'translate(' + el_2_dif_left + 'px,' + el_2_dif_top + 'px)');
                    $el_3.css('transform', 'translate(' + el_3_dif_left + 'px,' + el_3_dif_top + 'px)');
                    $el_4.css('transform', 'translate(' + el_4_dif_left + 'px,' + el_4_dif_top + 'px)');
                    $el_5.css('transform', 'translate(' + el_5_dif_left + 'px,' + el_5_dif_top + 'px)');
                    $el_6.css('transform', 'translate(' + el_6_dif_left + 'px,' + el_6_dif_top + 'px)');
                    $el_7.css('transform', 'translate(' + el_7_dif_left + 'px,' + el_7_dif_top + 'px)');
                    $el_8.css('transform', 'translate(' + el_8_dif_left + 'px,' + el_8_dif_top + 'px)');
                    $el_9.css('transform', 'translate(' + el_9_dif_left + 'px,' + el_9_dif_top + 'px)');
                } else if (progress < 0) {
                    $el_1.css('transform', 'none');
                    $el_2.css('transform', 'none');
                    $el_3.css('transform', 'none');
                    $el_4.css('transform', 'none');
                    $el_5.css('transform', 'none');
                    $el_6.css('transform', 'none');
                    $el_7.css('transform', 'none');
                    $el_8.css('transform', 'none');
                    $el_9.css('transform', 'none');
                }


            });


        }

        function animationSecond() {
            var el_class = 'animation-second__el animation-second__el--';
            var step_count = $('.animation-second').length;
            var $wrapper = $('.animation-second');
            var element_class = '.animation-second__el';
            var elements_count = $('.animation-second').eq(0).find('.animation-second__el').length;
            var elements = [];

            for (var i = 0; i < step_count; i++) {

                var elements_block = [];

                for (var k = 0; k < elements_count; k++) {
                    var $el = $wrapper.eq(i).find(element_class).eq(k);

                    var start_top = $el.offset().top;
                    var start_left = $el.offset().left;

                    var element = {
                        el: $el,
                        start_top: start_top,
                        start_left: start_left
                    };

                    elements_block.push(element);

                    elements[i] = (elements_block);

                    if (i == step_count - 1 && k == elements_count - 1) {
                        checkDiff();
                    }
                }


            }

            function checkDiff() {

                // for (var i = 0; i < step_count - 1; i++) {

                for (var k = 0; k < elements_count; k++) {

                    var el_start_top = elements[0][k].start_top;
                    var el_start_left = elements[0][k].start_left;
                    var el_2_top = elements[0 + 1][k].start_top;
                    var el_2_left = elements[0 + 1][k].start_left;
                    var el_2_dif_top = el_2_top - el_start_top;
                    var el_2_dif_left = el_2_left - el_start_left;
                    var el_3_top = elements[0 + 2][k].start_top;
                    var el_3_left = elements[0 + 2][k].start_left;
                    var el_3_dif_top = el_3_top - el_2_top;
                    var el_3_dif_left = el_3_left - el_2_left;
                    var el_4_top = elements[0 + 3][k].start_top;
                    var el_4_left = elements[0 + 3][k].start_left;
                    var el_4_dif_top = el_4_top - el_3_top;
                    var el_4_dif_left = el_4_left - el_3_left;
                    var el_5_top = elements[0 + 4][k].start_top;
                    var el_5_left = elements[0 + 4][k].start_left;
                    var el_5_dif_top = el_5_top - el_4_top;
                    var el_5_dif_left = el_5_left - el_4_left;

                    var el_6_top = elements[0 + 5][k].start_top;
                    var el_6_left = elements[0 + 5][k].start_left;
                    var el_6_dif_top = el_6_top - el_5_top;
                    var el_6_dif_left = el_6_left - el_5_left;

                    var el_7_top = elements[0 + 6][k].start_top;
                    var el_7_left = elements[0 + 6][k].start_left;
                    var el_7_dif_top = el_7_top - el_6_top;
                    var el_7_dif_left = el_7_left - el_6_left;


                    elements[0][k].el_2_dif_top = el_2_dif_top;
                    elements[0][k].el_2_dif_left = el_2_dif_left;
                    elements[0][k].el_3_dif_top = el_3_dif_top;
                    elements[0][k].el_3_dif_left = el_3_dif_left;
                    elements[0][k].el_4_dif_top = el_4_dif_top;
                    elements[0][k].el_4_dif_left = el_4_dif_left;
                    elements[0][k].el_5_dif_top = el_5_dif_top;
                    elements[0][k].el_5_dif_left = el_5_dif_left;
                    elements[0][k].el_6_dif_top = el_6_dif_top;
                    elements[0][k].el_6_dif_left = el_6_dif_left;
                    elements[0][k].el_7_dif_top = el_7_dif_top;
                    elements[0][k].el_7_dif_left = el_7_dif_left;
                }
                // }

            }

            var start_line_pos = sections_options[1].border_top;
            var final_line_pos = sections_options[2].border_bottom - viewport_height;
            var path = final_line_pos - start_line_pos;
            var percent = path / 100;
            var progress = 0;
            var double_progress = 0;

            var step_1 = 10;
            var step_2 = 15;
            var step_3 = 30;
            var step_4 = 35;
            var step_5 = 45;
            var step_6 = 100;

            $(window).scroll(function () {

                progress = 100 - ((path - (scroll_top - start_line_pos)) / percent);

                double_progress = progress - 10;

                if (progress <= 0) {
                    for (var k = 0; k < elements_count; k++) {
                        elements[0][k].el.css('transform', 'none');
                    }
                } else if (progress > 0 && progress <= step_1) {
                    for (var k = 0; k < elements_count; k++) {
                        var el_shift_top = (elements[0][k].el_2_dif_top / 100) * progress * step_1;
                        var el_shift_left = (elements[0][k].el_2_dif_left / 100) * progress * step_1;

                        elements[0][k].el.css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (progress > step_1 && progress <= step_2) {

                    for (var k = 0; k < elements_count; k++) {
                        var sub_progress = (progress - step_1) * (100 / (step_2 - step_1));
                        var start_shift_top = elements[0][k].el_2_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_3_dif_top / 100) * sub_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_3_dif_left / 100) * sub_progress);
                        elements[0][k].el.css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (progress > step_2 && progress <= step_3) {

                    for (var k = 0; k < elements_count; k++) {
                        var sub_progress = (progress - step_2) * (100 / (step_3 - step_2));
                        var start_shift_top = elements[0][k].el_2_dif_top + elements[0][k].el_3_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left + elements[0][k].el_3_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_4_dif_top / 100) * sub_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_4_dif_left / 100) * sub_progress);
                        elements[0][k].el.css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (progress > step_3 && progress <= step_4) {

                    for (var k = 0; k < elements_count; k++) {
                        var sub_progress = (progress - step_3) * (100 / (step_4 - step_3));
                        var start_shift_top = elements[0][k].el_2_dif_top + elements[0][k].el_3_dif_top + elements[0][k].el_4_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left + elements[0][k].el_3_dif_left + elements[0][k].el_4_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_5_dif_top / 100) * sub_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_5_dif_left / 100) * sub_progress);
                        elements[0][k].el.css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (progress > step_4 && progress <= step_5) {

                    for (var k = 0; k < elements_count; k++) {
                        var sub_progress = (progress - step_4) * (100 / (step_5 - step_4));
                        var start_shift_top = elements[0][k].el_2_dif_top + elements[0][k].el_3_dif_top + elements[0][k].el_4_dif_top + elements[0][k].el_5_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left + elements[0][k].el_3_dif_left + elements[0][k].el_4_dif_left + elements[0][k].el_5_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_6_dif_top / 100) * sub_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_6_dif_left / 100) * sub_progress);
                        elements[0][k].el.css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (progress > step_5 && progress <= step_6) {

                    for (var k = 0; k < elements_count; k++) {
                        var sub_progress = (progress - step_5) * (100 / (step_6 - step_5));
                        var start_shift_top = elements[0][k].el_2_dif_top + elements[0][k].el_3_dif_top + elements[0][k].el_4_dif_top + elements[0][k].el_5_dif_top + elements[0][k].el_6_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left + elements[0][k].el_3_dif_left + elements[0][k].el_4_dif_left + elements[0][k].el_5_dif_left + elements[0][k].el_6_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_7_dif_top / 100) * sub_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_7_dif_left / 100) * sub_progress);
                        elements[0][k].el.css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (progress > 100) {
                    for (var k = 0; k < elements_count; k++) {
                        var sub_progress = (100 - step_5) * (100 / (step_6 - step_5));
                        var start_shift_top = elements[0][k].el_2_dif_top + elements[0][k].el_3_dif_top + elements[0][k].el_4_dif_top + elements[0][k].el_5_dif_top + elements[0][k].el_6_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left + elements[0][k].el_3_dif_left + elements[0][k].el_4_dif_left + elements[0][k].el_5_dif_left + elements[0][k].el_6_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_7_dif_top / 100) * sub_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_7_dif_left / 100) * sub_progress);
                        elements[0][k].el.css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                }

                if (double_progress <= 0) {
                    for (var k = 0; k < elements_count; k++) {
                        $('.animation-second-double__el').eq(k).css('transform', 'none');

                    }
                } else if (double_progress > 0 && double_progress <= step_1) {
                    for (var k = 0; k < elements_count; k++) {
                        var el_shift_top = (elements[0][k].el_2_dif_top / 100) * double_progress * step_1;
                        var el_shift_left = (elements[0][k].el_2_dif_left / 100) * double_progress * step_1;

                        $('.animation-second-double__el').eq(k).css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');

                    }
                } else if (double_progress > step_1 && double_progress <= step_2) {

                    for (var k = 0; k < elements_count; k++) {
                        var sub_double_progress = (double_progress - step_1) * (100 / (step_2 - step_1));
                        var start_shift_top = elements[0][k].el_2_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_3_dif_top / 100) * sub_double_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_3_dif_left / 100) * sub_double_progress);
                        $('.animation-second-double__el').eq(k).css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (double_progress > step_2 && double_progress <= step_3) {

                    for (var k = 0; k < elements_count; k++) {
                        var sub_double_progress = (double_progress - step_2) * (100 / (step_3 - step_2));
                        var start_shift_top = elements[0][k].el_2_dif_top + elements[0][k].el_3_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left + elements[0][k].el_3_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_4_dif_top / 100) * sub_double_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_4_dif_left / 100) * sub_double_progress);
                        $('.animation-second-double__el').eq(k).css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (double_progress > step_3 && double_progress <= step_4) {

                    for (var k = 0; k < elements_count; k++) {
                        var sub_double_progress = (double_progress - step_3) * (100 / (step_4 - step_3));
                        var start_shift_top = elements[0][k].el_2_dif_top + elements[0][k].el_3_dif_top + elements[0][k].el_4_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left + elements[0][k].el_3_dif_left + elements[0][k].el_4_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_5_dif_top / 100) * sub_double_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_5_dif_left / 100) * sub_double_progress);
                        $('.animation-second-double__el').eq(k).css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (double_progress > step_4 && double_progress <= step_5) {

                    for (var k = 0; k < elements_count; k++) {
                        var sub_double_progress = (double_progress - step_4) * (100 / (step_5 - step_4));
                        var start_shift_top = elements[0][k].el_2_dif_top + elements[0][k].el_3_dif_top + elements[0][k].el_4_dif_top + elements[0][k].el_5_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left + elements[0][k].el_3_dif_left + elements[0][k].el_4_dif_left + elements[0][k].el_5_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_6_dif_top / 100) * sub_double_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_6_dif_left / 100) * sub_double_progress);
                        $('.animation-second-double__el').eq(k).css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (double_progress > step_5 && double_progress <= step_6) {

                    for (var k = 0; k < elements_count; k++) {
                        var sub_double_progress = (double_progress - step_5) * (100 / (step_6 - step_5));
                        var start_shift_top = elements[0][k].el_2_dif_top + elements[0][k].el_3_dif_top + elements[0][k].el_4_dif_top + elements[0][k].el_5_dif_top + elements[0][k].el_6_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left + elements[0][k].el_3_dif_left + elements[0][k].el_4_dif_left + elements[0][k].el_5_dif_left + elements[0][k].el_6_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_7_dif_top / 100) * sub_double_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_7_dif_left / 100) * sub_double_progress);
                        $('.animation-second-double__el').eq(k).css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (double_progress > 100) {
                    for (var k = 0; k < elements_count; k++) {
                        var sub_double_progress = (100 - step_5) * (100 / (step_6 - step_5));
                        var start_shift_top = elements[0][k].el_2_dif_top + elements[0][k].el_3_dif_top + elements[0][k].el_4_dif_top + elements[0][k].el_5_dif_top + elements[0][k].el_6_dif_top;
                        var start_shift_left = elements[0][k].el_2_dif_left + elements[0][k].el_3_dif_left + elements[0][k].el_4_dif_left + elements[0][k].el_5_dif_left + elements[0][k].el_6_dif_left;

                        var el_shift_top = start_shift_top + ((elements[0][k].el_7_dif_top / 100) * sub_double_progress);
                        var el_shift_left = start_shift_left + ((elements[0][k].el_7_dif_left / 100) * sub_double_progress);
                        $('.animation-second-double__el').eq(k).css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                }

            });
        }

        function animationThird() {
            var $el_1 = $('.animation-third__el--1');
            var $el_2 = $('.animation-third__el--2');
            var $el_3 = $('.animation-third__el--3');
            var $el_4 = $('.animation-third__el--4');

            var start_line_pos = sections_options[2].border_bottom - viewport_height;
            var final_line_pos = sections_options[3].border_bottom - viewport_height;
            var path = final_line_pos - start_line_pos;
            var percent = path / 100;
            var progress = 0;

            $(window).scroll(function () {

                progress = 87 - ((path - (scroll_top - start_line_pos)) / percent);

                if (progress > 0) {
                    $el_1.css('transform', 'rotate(' + (progress * (2.7)) + 'deg)');
                    $el_2.css('transform', 'rotate(' + (progress * (2.7)) + 'deg)');
                    $el_3.css('transform', 'rotate(' + (progress * (-2.7)) + 'deg)');
                    $el_4.css('transform', 'rotate(' + (progress * (-2.7)) + 'deg)');
                } else {
                    $el_1.css('transform', 'rotate(0deg)');
                    $el_2.css('transform', 'rotate(0deg)');
                    $el_3.css('transform', 'rotate(0deg)');
                    $el_4.css('transform', 'rotate(0deg)');
                }

            });
        }

        function animationFourth() {
            var el_class = 'animation-fourth__el animation-fourth__el--';
            var step_count = $('.animation-fourth').length;
            var $wrapper = $('.animation-fourth');
            var element_class = '.animation-fourth__el';
            var elements_count = $('.animation-fourth').eq(0).find('.animation-fourth__el').length;
            var elements = [];

            for (var i = 0; i < step_count; i++) {

                var elements_block = [];

                for (var k = 0; k < elements_count; k++) {
                    var $el = $wrapper.eq(i).find(element_class).eq(k);

                    var start_top = $el.offset().top;
                    var start_left = $el.offset().left;

                    var element = {
                        el: $el,
                        start_top: start_top,
                        start_left: start_left
                    };

                    elements_block.push(element);

                    elements[i] = (elements_block);

                    if (i == step_count - 1 && k == elements_count - 1) {
                        checkDiff();
                    }
                }


            }

            function checkDiff() {

                for (var k = 0; k < elements_count; k++) {

                    var el_start_top = elements[0][k].start_top;
                    var el_start_left = elements[0][k].start_left;
                    var el_2_top = elements[0 + 1][k].start_top;
                    var el_2_left = elements[0 + 1][k].start_left;
                    var el_2_dif_top = el_2_top - el_start_top;
                    var el_2_dif_left = el_2_left - el_start_left;


                    elements[0][k].el_2_dif_top = el_2_dif_top;
                    elements[0][k].el_2_dif_left = el_2_dif_left;
                }
                // }

            }


            var start_line_pos = sections_options[3].border_top;
            var final_line_pos = sections_options[3].border_bottom - viewport_height;

            var path = final_line_pos - start_line_pos;
            var percent = path / 100;
            var progress = 0;
            var double_progress = 0;

            var step_1 = 100;
            var step_2 = 100;

            $(window).scroll(function () {

                progress = 100 - ((path - (scroll_top - start_line_pos)) / percent);

                if (progress > 0 && progress <= step_1) {
                    $('.animation-fourth').eq(0).removeClass('hidden');

                    for (var k = 0; k < elements_count; k++) {
                        var el_shift_top = (elements[0][k].el_2_dif_top / 100) * progress;
                        var el_shift_left = (elements[0][k].el_2_dif_left / 100) * progress;

                        elements[0][k].el.css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (progress > 100) {

                    for (var k = 0; k < elements_count; k++) {
                        var el_shift_top = (elements[0][k].el_2_dif_top / 100) * 100;
                        var el_shift_left = (elements[0][k].el_2_dif_left / 100) * 100;

                        elements[0][k].el.css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }
                } else if (progress < 0) {
                    for (var k = 0; k < elements_count; k++) {
                        var el_shift_top = (elements[0][k].el_2_dif_top / 100) * 0;
                        var el_shift_left = (elements[0][k].el_2_dif_left / 100) * 0;

                        elements[0][k].el.css('transform', 'translate(' + el_shift_left + 'px,' + el_shift_top + 'px)');
                    }

                    $('.animation-fourth').eq(0).addClass('hidden');
                }

                var slide_number = parseInt(progress / 5);

                if (slide_number > 0 && slide_number < 20) {
                    for (var k = 1; k <= slide_number; k++) {
                        $('.animation-fourth__background--slide').eq(k).removeClass('hidden');
                    }

                    for (var l = 19; l > slide_number; l--) {
                        $('.animation-fourth__background--slide').eq(l).addClass('hidden');
                    }

                }
            });
        }

        var footer_height = $('footer').outerHeight();

        $('body').height(html_height + 30 + footer_height);


        console.log(footer_height);
        console.log(footer_height);

        $(".section__block--1").mousemove(function (e) {
            var $dust = $(".first__top");

            var x = -(e.pageX + this.offsetLeft) / 50;
            var y = -(e.pageY + this.offsetTop) / 50;
            $dust.css('background-position', x + 'px ' + y + 'px');
        });
    }

    $(window).on('load', function () {

        if (viewport_width > 1279) {

            animationFirst();

            animationSecond();

            // animationThird();

            animationFourth();

        }

        if ($('.preloader').length > 0) {
            $('.preloader').addClass('hide');
        }

    });

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    });

    if (viewport_width < 1280) {
        var count = $('.section__text-inner').length;
        var texts = [];

        for (var r = 0; r < count; r++) {
            var full_text = $('.section__text-inner').find('.section__text-inner-content').eq(r).text().replace(/\s+/g, ' ').trim();
            var short_text = full_text.slice(0, 300).split(' ').slice(0, -1);
            var short_text_clear = '';

            for (var z = 0; z < short_text.length; z++) {
                short_text_clear += short_text[z] + ' ';
            }

            var text = {
                full_text: full_text,
                short_text: short_text_clear
            };

            $('.section__text').eq(r).addClass('collapse');
            $('.section__text-inner-content').eq(r).text(short_text_clear);

            texts[r] = text;

            if (r === (count - 1)) {
                $('.section__text-inner-button-wrapper').on('click', function () {
                    var number = $(this).index('.section__text-inner-button-wrapper');

                    var $wrapper = $(this).closest('.section__text');

                    var full_text = texts[number].full_text;
                    var short_text = texts[number].short_text;

                    // console.log($wrapper);

                    if ($wrapper.hasClass('collapse') === true) {
                        // console.log(full_text);
                        // console.log(short_text);

                        $wrapper.removeClass('collapse');
                        $wrapper.find('.section__text-inner-content').text(texts[number].full_text);
                    } else {
                        // console.log(full_text);
                        // console.log(short_text);

                        $wrapper.addClass('collapse');
                        $wrapper.find('.section__text-inner-content').text(texts[number].short_text);
                    }
                });
            }
        }


    }

    $('.burger-menu').click(function() {
        $(this).find('.burger-menu__btn').toggleClass('open');
        $('.main-menu-wrapper').toggleClass('opened');
        $('html').toggleClass('open-html');
    });

});