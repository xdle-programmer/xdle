var $compareProduct, $comparePage;

function checkCompareLenght() {
    2 === $(".compare-product").length && ($comparePage.addClass("compare_two-items"), $(".slick-slider")[0] && $(".slick-slider").slick("unslick").slick("destroy"));
}

function checkVisability() {
    $(".comare-data__cell").css("display", "none");
    var e = $(".slick-active");
    e[0] && e.each(function () {
        var t = $(this).index() + 1, o = $(".comare-data__cell:nth-child(" + t + ")").removeClass("last-visible");
        window.matchMedia("(max-width:935px)").matches ? (o.css("display", "table-cell"), t === e.last().index() + 1 && o.addClass("last-visible")) : o.css("display", "table"), $(this).removeClass("last-visible");
    }).last().next().addClass("last-visible");
}

function removeCompareItem(e) {
    var t = e.index();
    $(".comare-data__cell:nth-child(" + (t + 1) + ")").remove(), $comparePage.hasClass("compare_two-items") || ($(".compare-items__slider").slick("slickRemove", t), checkVisability()), e.remove(), checkCompareLenght();
}

function validateEmail(e) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e);
}

function validateField(e) {
    var t = $(e), o = t.closest(".regular-input"), a = !0;
    t.is('[type="text"]:visible') && (t.hasClass("valid-phone") && (a = 18 === t.val().length), t.hasClass("valid-value") && (a = !!t.hasClass("valid-value_true")), t.hasClass("valid-text") && (a = t.val().length > 0), t.hasClass("valid-email") && (a = !!validateEmail(t.val()))), t.is('[type="checkbox"]') && (a = !!t.prop("checked")), a ? (t.addClass("filled").removeClass("valid-error"), o.removeClass("regular-input_error").addClass("regular-input_filled")) : (t.addClass("valid-error"), o.addClass("regular-input_error"));
}

function formIsValid(e) {
    if (e[0]) {
        if (checkInputs(e)) return !0;
        scrollTo($(".valid-error"));
    }
    return !1;
}

function checkInputs(e) {
    var t = e.find("input[required]");
    return t.each(function () {
        validateField($(this));
    }), !t.hasClass("valid-error");
}

function checkCustomScroll() {
    window.matchMedia("(min-width:1000px)").matches && $(".custom-scroll").mCustomScrollbar({axis: "y"});
}

function checkMask() {
    $(".phone-mask").mask("+7 (999) 999-99-99");
}

function scrollTo(e) {
    if (e[0] && e.is(":visible")) {
        var t = e.offset().top - 20;
        window.matchMedia("(max-width:1045px)").matches && (t -= $(".header").outerHeight()), $("html, body").animate({scrollTop: t}, 1e3);
    }
}

function successAdd(e) {
    $(".popup_cart-add")[0] && (window.openPopup("popup_cart-add"), $("#prod-name").text(e));
}

function servicePopup(e, t, o) {
    $(".popup_info")[0] && ($("#service-title").text(e), $("#service-text").text(t), $("#service-button").text(o), window.openPopup("popup_service"));
}

window.onload = function () {
    var e, t;

    function o() {
        $("body").removeClass("body_fixed"), $(".popup").fadeOut(300);
    }

    $(".phone-mask").mask("+7 (999) 999-99-99"), window.matchMedia("(min-width:1000px)").matches && $(".custom-scroll").mCustomScrollbar({axis: "y"}), $(".mobile-toggle-search").click(function () {
        $(this).closest(".search-module").toggleClass("active"), $("body").toggleClass("body_fixed");
    }), this.cityPick = (e = !1, t = function () {
        e = !1, $(".modal-city-pick").removeClass("active"), $("body").removeClass("pointer"), $(".modal-city-pick__drop-menu").removeClass("suggest-active");
    }, $(document).on("click", ".modal-city-pick__value", function (o) {
        o.stopPropagation(), e ? (t(), $(document).off("click", t)) : (e = !0, $(".modal-city-pick").addClass("active"), $("body").addClass("pointer"), $(document).on("click", t));
    }), $(document).on("click", ".modal-city-pick__drop-menu", function (e) {
        e.stopPropagation();
    }), $(document).on("input", ".city-search__input", function () {
        var e = $(this).val().length, t = $(this).closest(".modal-city-pick__drop-menu");
        e > 0 ? t.addClass("suggest-active") : t.removeClass("suggest-active");
    }), {
        set: function (e) {
            $(".js-city-place").html(e), t();
        }
    }), $(document).on("click", ".js-call-popup, [data-popup]", function (e) {
        e.preventDefault(), $("body").addClass("body_fixed");
        var t = $(this).attr("href");
        t || (t = $(this).attr("data-popup")), $(".popup." + t).find(".js-additional-value").val($(this).data("add-info")), window.openPopup(t);
    }).on("click", ".popup", function (e) {
        e.target === this && o();
    }).on("click", ".close-popup, .js-close-popup", function (e) {
        o();
    }), window.openPopup = function (e, t) {
        o(), $(".popup." + e).fadeIn(300), $("body").addClass("body_fixed"), "popup_text" == e && t && $(".popup__service-text").text(t);
    };
    var a = $(".regular-select").click(function () {
        a.not($(this)).removeClass("regular-select_dropped"), $(".regular-select__option-list").slideUp(200), $(this).toggleClass("regular-select_dropped").find(".regular-select__option-list").stop(!0, !1).slideToggle(200);
    }).on("click", ".option-list__item", function () {
        i($(this));
    }), i = this.selectOption = function (e) {
        var t = $(e).html();
        $(".option-list__item").removeClass("option-list__item_selected"), $(e).addClass("option-list__item_selected").closest(".regular-select").find(".regular-select__val").html(t);
    };
    $(".card-product__add-compare").click(function () {
        !$('.card-product__add-compare input[type="checkbox"]:checked').length > 1 && $(".compare-link").removeClass("compare-link_visible");
    }), $(".advantage").click(function () {
        window.matchMedia("(max-width:1045px)").matches && (window.openPopup("popup_advantage"), $("#advantage-title").text($(this).find(".advantage__title").text()), $("#advantage-text").html($(this).find(".advantage__pop-text").html()));
    });
    var s = $(".mobile-menu");
    $(document).click(function (e) {
        $(e.target).is(".regular-select") || $(e.target).parents(".regular-select")[0] || a.removeClass("regular-select_dropped").find(".regular-select__option-list").stop(!0, !1).slideUp(200), $(e.target).is(".mobile-menu") || $(e.target).parents(".mobile-menu")[0] || $(e.target).is(".js-toggle-menu") || $(e.target).parents(".js-toggle-menu")[0] || s.removeClass("mobile-menu_active"), !$(e.target).is(".search-button") && $(e.target).parents(".search-button").length < 1 && ($(".search-menu").removeClass("search-menu_active"), $(".search-menu .suggest-block").css("display", "none"));
    }), $(".js-toggle-menu").click(function (e) {
        e.preventDefault();
        var t = $(this).attr("data-menu");
        s.removeClass("mobile-menu_active"), $("." + t).addClass("mobile-menu_active");
    });
    $(".banner-slider").slick({
        slidesToShow: 1, slidesToScroll: 1, arrows: !1, autoplay: !0, pauseOnHover: !0, autoplaySpeed: 4e3, dots: !0, customPaging: function () {
            return '<div class="dot-point"></div>';
        }
    });
    var n = '<div class="arrow-button arrow-button_next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>';
    $(".product-slider").slick({slidesToShow: 1, slidesToScroll: 1, asNavFor: ".controls-slider", arrows: !1}).on("beforeChange", function () {
        S.destroy();
    }), $(".controls-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !0,
        swipeToSlide: !0,
        centerMode: !0,
        centerPadding: "0px",
        focusOnSelect: !0,
        vertical: !0,
        verticalSwiping: !0,
        asNavFor: ".product-slider",
        nextArrow: '<div class="arrow-button arrow-button_vertical arrow-button_next"><i class="fa fa-angle-down" aria-hidden="true"></i></div>',
        prevArrow: '<div class="arrow-button arrow-button_vertical arrow-button_prev"><i class="fa fa-angle-up" aria-hidden="true"></i></div>',
        responsive: [{
            breakpoint: 720,
            settings: {
                slidesToShow: 3,
                vertical: !1,
                verticalSwiping: !1,
                arrows: !0,
                nextArrow: '<div class="arrow-button arrow-button_new arrow-button_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
                prevArrow: '<div class="arrow-button arrow-button_new arrow-button_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>'
            }
        }]
    });
    if ($(".related-slider__slide").length > 2 || window.matchMedia("(max-width:1120px)").matches) $(".related-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !0,
        verticalSwiping: !0,
        swipeToSlide: !0,
        vertical: !0,
        nextArrow: '<div class="arrow-button arrow-button_vertical arrow-button_next"><i class="fa fa-angle-down" aria-hidden="true"></i></div>',
        prevArrow: '<div class="arrow-button arrow-button_vertical arrow-button_prev"><i class="fa fa-angle-up" aria-hidden="true"></i></div>',
        responsive: [{
            breakpoint: 1120,
            settings: {
                slidesToShow: 3,
                vertical: !1,
                verticalSwiping: !1,
                arrows: !0,
                nextArrow: '<div class="arrow-button arrow-button_new arrow-button_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
                prevArrow: '<div class="arrow-button arrow-button_new arrow-button_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>'
            }
        }, {
            breakpoint: 610,
            settings: {
                slidesToShow: 2,
                vertical: !1,
                verticalSwiping: !1,
                arrows: !0,
                nextArrow: '<div class="arrow-button arrow-button_new arrow-button_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
                prevArrow: '<div class="arrow-button arrow-button_new arrow-button_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>'
            }
        }]
    });
    var l;
    (l = function () {
        $(".regular-slider").each(function () {
            $(this).hasClass("slick-slider") || $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: !0,
                swipeToSlide: !0,
                nextArrow: '<div class="arrow-button arrow-button_new arrow-button_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
                prevArrow: '<div class="arrow-button arrow-button_new arrow-button_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
                responsive: [{breakpoint: 1120, settings: {slidesToShow: 3, vertical: !1}}, {
                    breakpoint: 610,
                    settings: {
                        slidesToShow: 2,
                        vertical: !1,
                        arrows: !0,
                        nextArrow: '<div class="arrow-button arrow-button_new arrow-button_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
                        prevArrow: '<div class="arrow-button arrow-button_new arrow-button_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>'
                    }
                }]
            });
        });
    })(), $(document).ajaxSuccess(function () {
        l();
    }), $(".news-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !0,
        swipeToSlide: !0,
        nextArrow: n,
        prevArrow: '<div class="arrow-button arrow-button_prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
        responsive: [{breakpoint: 1170, settings: {slidesToShow: 3}}, {breakpoint: 890, settings: {slidesToShow: 2}}, {breakpoint: 570, settings: {slidesToShow: 1}}]
    });
    if (window.matchMedia("(max-width:610px)").matches) $(".tabs-data__controls").slick({infinite: !1, arrows: !1, swipeToSlide: !0, focusOnSelect: !0, variableWidth: !0});
    if (acordeonManage.init(), landingFade.init(), $(".search-button__toggle").click(function (e) {
        $(".search-menu").toggleClass("search-menu_active");
    }), $(".search-menu .search-line__input").on("input", function () {
        $(".search-menu .suggest-block").slideDown(300);
    }), $(".table-overflow")[0]) {
        var r = $(".js-wrap-table");
        $(".characteristics-table").outerHeight() > 451 && r.addClass("js-wrap-table_active").click(function () {
            $(".table-overflow").toggleClass("table-overflow_show"), $(this).toggleClass("js-wrap-table_in-state");
        });
    }
    var c = $(".header"), d = $(".compare-items"), u = c.outerHeight();

    function p(e) {
        var t = $(".additional-field");
        2 == e ? t.addClass("additional-field_shown") : t.removeClass("additional-field_shown");
    }

    $(window).on("resize", function () {
        landingFade.scroll(scrolled);
    }), window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop, loader.loaderPosition(scrolled), scrolled > 0 ? c.addClass("header_fixed") : c.removeClass("header_fixed"), landingFade.scroll(scrolled), d[0] && window.matchMedia("(min-width:935px)").matches && (scrolled >= d.offset().top + d.outerHeight() - u ? d.addClass("compare-items__fixed") : d.removeClass("compare-items__fixed"));
    }, p($(".switch-input:checked").val()), $(".switch-input").on("change", function () {
        p($(this).val());
    });
    var f = $(".contacts-map");
    if (f[0]) {
        var m = {lat: +f.attr("data-geo-marker").split(",")[0], lng: +f.attr("data-geo-marker").split(",")[1]},
            h = new google.maps.Map(document.getElementById("contacts-map"), {zoom: 15, center: m, disableDefaultUI: !0});
        new google.maps.Marker({position: m, map: h, icon: "/local/templates/main/img/pin.png"});
    }

    function v(e, t) {
        var o = +e.attr("min-val"), a = +e.attr("max-val"), i = e.find('input[type="text"]'), s = +i.val();
        t && t.hasClass("minus") && s - 1 >= o && i.val(s - 1), t && t.hasClass("plus") && s + 1 <= a && i.val(s + 1), s > a && i.val(a), s < o && i.val(o), isNaN(s) && i.val((o + a) / 2);
    }

    $(".counter").on("click", ".counter__button", function () {
        v($(this).closest(".counter"), $(this));
    }).on("keyup", 'input[type="text"]', function () {
        v($(this).closest(".counter"));
    }), $compareProduct = $(".compare-product"), $comparePage = $(".compare");
    var _ = $(".comare-data__cell");
    if ($comparePage[0]) {
        $(".row__compare-data").each(function () {
            var e = [];
            $(this).find(_).each(function () {
                $(this).text() || $(this).text("—"), e.push($(this).text());
            }), e.every(function (t) {
                return t === e[0];
            }) || $(this).addClass("compare-table__row_highlight");
        }), $compareProduct.length > 2 ? ($(".compare-items__slider").slick({
            arrows: !0,
            infinite: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="arrow-button arrow-button_prev arrow_hidden"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
            nextArrow: n,
            variableWidth: !0,
            responsive: [{breakpoint: 1225, settings: {slidesToShow: 3, slidesToScroll: 1, variableWidth: !1}}, {
                breakpoint: 1200,
                settings: {slidesToShow: 2, slidesToScroll: 1, variableWidth: !1}
            }, {breakpoint: 935, settings: {slidesToShow: 2, slidesToScroll: 1, variableWidth: !1}}]
        }).on("afterChange", function (e, t, o) {
            checkVisability(), function (e, t) {
                e.find(".slick-arrow").removeClass("arrow_hidden"), $(e).find(".slick-slide:last-child").hasClass("slick-active") && e.find(".arrow-button_next").addClass("arrow_hidden");
                0 === t.currentSlide && e.find(".arrow-button_prev").addClass("arrow_hidden");
            }($(this), t);
        }), checkVisability()) : checkCompareLenght(), $(".compare-product").on("click", ".compare-product__delete", function () {
            removeCompareItem($(this).closest(".compare-product"));
        });
    }
    "function" == typeof checkCompare && (checkCompare(), checkCompareBlock()), $("input[required]")[0] && $(document).on("input blur change", "input[required]", function () {
        $(this).hasClass("valid-value") || validateField($(this));
    }), $(document).on("click", ".more-text__button", function () {
        return $(this).closest(".more-text").toggleClass("more-text__shown"), !1;
    }), $(".js-change-state").click(function () {
        $(".auth-box__state").css("display", "none"), $("." + $(this).attr("data-state")).fadeIn(200);
    });
    var w, g, b, y, C, k, x = function () {
        var e, t = $(".text-overflow__wrap");

        function o() {
            t.each(function () {
                var t = $(this).data("rows"), o = +$(this).css("line-height").replace("px", "") * +t;
                t && $(this).outerHeight() >= o ? ($(this).closest(".text-overflow").addClass("inited"), $(this).css("height", o + "px")) : $(this).outerHeight() >= e && $(this).closest(".text-overflow").addClass("inited");
            });
        }

        return autoWrap = $(""), e = window.matchMedia("(min-width:1000px)").matches ? 688 : 220, o(), $(".js-unwrap-overflow").click(function () {
            $(this).closest(".text-overflow").addClass("unwrap").find(t).css("height", "");
        }), {check: o};
    }(), S = (function () {
        var e = $(".js-tab-switch");
        $(".js-tab-switch:first-child").addClass("js-tab-switch_active"), $(".js-tab-item:first-child").addClass("js-tab-item_current"), e.click(function () {
            (function () {
                var e = $(this).closest(".js-tab-module"), t = e.find("> .js-tab-container > .js-tab-item");
                handles = e.find("> .js-tab-controls .js-tab-switch"), $(handles).removeClass("js-tab-switch_active"), $(this).addClass("js-tab-switch_active"), t.removeClass("js-tab-item_current").eq($(this).index()).addClass("js-tab-item_current"), x.check();
            }).call($(this));
        }), x.check();
    }(), function () {
        var e = $(".video-item"), t = $(".slider-module");

        function o() {
            t[0] && t.addClass("slider-module_show-video");
        }

        return e.each(function () {
            $(this).css({"background-image": "url(https://img.youtube.com/vi/" + $(this).data("video") + "/0.jpg)"});
        }), e.click(function () {
            $(this).hasClass("video-item_preview-only") || function (e) {
                if (!e.hasClass("video-item_loaded")) {
                    e.addClass("video-item_loaded");
                    var t = document.createElement("iframe"),
                        o = {src: "https://www.youtube.com/embed/" + e.data("video") + "?autoplay=1&rel=0", id: "ytplayer", allowfullscreen: "1"};
                    for (var a in o) t.setAttribute(a, o[a]);
                    e.append(t);
                }
            }($(this));
        }), $(".slider-module__video-button").click(function () {
            o();
        }), {
            destroy: function () {
                e.removeClass("video-item_loaded").html(null), t.removeClass("slider-module_show-video");
            }, call: o
        };
    }());
    w = $(".info-plate"), g = $(".popup_info"), !localStorage.cookieInfo && w[0] && w.slideDown(200), !localStorage.popupInfo && g[0] && window.openPopup("popup_info"), g.on("click", ".close-popup, .js-close-popup", function () {
        localStorage.popupInfo = 1;
    }), $("#js-ok-cookie").click(function () {
        w.slideUp(200), localStorage.cookieInfo = 1;
    }), b = $(".return-page"), y = $("#next-step"), C = b.find($("input[type=radio]")), (k = function () {
        var e = $("input[type=radio]:checked").closest("label");
        y.attr("href", e.data("url"));
    })(), C.on("change", function () {
        k();
    });
    serviceMapModule.init();
}, checkCustomScroll();
var test = [{
    cityCoords: "56.85237874030841,53.20274949999994",
    objs: [{
        coords: "56.876112067836935, 53.29310249999993",
        info: '<h1>Boxberry Москва Лубянский_7715_С</h1><div class="pvz-data pvz-data_address">Адрес: 101000, Москва г, Лубянский проезд, д.15, строение 4, оф. 12</div><div class="pvz-data pvz-data_mode">Режим работы: пн-пт:10.00-21.00, сб:10.00-18.00</div><div class="pvz-data pvz-data_phone">Телефон: +7(499)391-56-22</div><div class="pvz-data pvz-data_info"> <br>Информация:Проезд: маршрут.такси №№ - т25,м3,122,Н3. Остановка: "Ильинские ворота". Остановка метро: "Китай-город". Метро "Китай-Город", последний вагон из центра, выход на улицу Марасейка из стеклянных дверей направо, на улице повернуть направо, пройти 10 метров и завернуть в арку, над аркой надпись "ОТЕЛЬ", далее во дворе повернуть налево, пройти ещё 10 метров вперед, после вывески на доме "МОСЦВЕТТОРГ 2" двери под большим козырьком, звонить в домофон в правую дверь с вывеской ПУНКТ ВЫДАЧИ ЗАКАЗОВ, офис 12  ".</div>',
        value: "pvz1",
        address: "Адрес Ижевск  Автозаводская ул  д.62"
    }, {
        coords: "56.82827106789506, 53.13368699999995",
        info: "<h1>Пвз2</h1>  Ижевск  Клубная ул  д.67 Режим работы: пн-пт:10.00-19.30",
        value: "pvz2",
        address: "Адрес 2",
        function: "testfunc(1)"
    }, {
        coords: "56.82285806788111, 53.20870549999993",
        info: "<h1>Москва Щербаковская_9948_С </h1>105318, г.Москва м.Семёновская, ул.Щербаковская, д.7 Время работы: пн-вс: 09.00-22.00",
        value: "pvz3",
        address: "Адрес 3"
    }]
}], pvzMap = function () {
    var e, t, o, a, i;

    function n(t, n, r) {
        o = n, a = t, i = r, l(t, n, r), e.balloon.close();
    }

    function l(e, t, o) {
        $("#delivery-value").val(e), $("#address-value").val(t), $("#pvz-info").html(o).closest(".grey-info").addClass("map-place__value");
    }

    return {
        init: function (s) {
            a && o && i && l(a, o, i);
            var r = s[0];
            ymaps.ready(function () {
                if ((t = $(".map-place"))[0] && !t.hasClass("map-init")) {
                    t.addClass("map-init"), e = new ymaps.Map("delivery-map", {
                        center: [+r.cityCoords.split(",")[0], +r.cityCoords.split(",")[1]],
                        zoom: 12,
                        controls: ["zoomControl"]
                    });
                    for (var o = {
                        balloonLayout: function (e, t, a) {
                            return ymaps.templateLayoutFactory.createClass('<div class="custom-baloon"><div class="custom-baloon__close-button"><i class="fa fa-times" aria-hidden="true"></i></div>$[[options.contentLayout]]<div class="button custom-baloon__button js-choose-pvz" data-pvz="' + e + '" data-address="' + t + '" data-function="' + a + '">Выбрать</div><div class="custom-baloon__arrow"></div></div>', {
                                build: function () {
                                    this.constructor.superclass.build.call(this), this._$element = $(".custom-baloon", this.getParentElement()), this.applyElementOffset(), this._$element.find(".custom-baloon__close-button").on("click", $.proxy(this.onCloseClick, this));
                                }, clear: function () {
                                    this._$element.find(".custom-baloon__close-button").off("click"), this.constructor.superclass.clear.call(this);
                                }, onSublayoutSizeChange: function () {
                                    o.balloonLayout().superclass.onSublayoutSizeChange.apply(this, arguments), this._isElement(this._$element) && (this.applyElementOffset(), this.events.fire("shapechange"));
                                }, applyElementOffset: function () {
                                    this._$element.css({
                                        left: -this._$element[0].offsetWidth / 2,
                                        top: -(this._$element[0].offsetHeight + this._$element.find(".custom-baloon__arrow")[0].offsetHeight)
                                    });
                                }, onCloseClick: function (e) {
                                    e.preventDefault(), this.events.fire("userclose");
                                }, getShape: function () {
                                    if (!this._isElement(this._$element)) return o.balloonLayout().superclass.getShape.call(this);
                                    var e = this._$element.position();
                                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[e.left, e.top], [e.left + this._$element[0].offsetWidth, e.top + this._$element[0].offsetHeight + this._$element.find(".custom-baloon__arrow")[0].offsetHeight]]));
                                }, _isElement: function (e) {
                                    return e && e[0] && e.find(".custom-baloon__arrow")[0];
                                }
                            });
                        },
                        balloonContentLayout: ymaps.templateLayoutFactory.createClass('<div class="custom-baloon__content">$[properties.balloonContent]</div>'),
                        placemarkLayout: function () {
                            return +l.value !== a ? ymaps.templateLayoutFactory.createClass('<svg class="ymaps-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 33.33h26.667V0H0z"/></defs><g transform="matrix(1 0 0 -1 0 33.33)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g mask="url(#b)"><path d="M13.333 14.664a5.334 5.334 0 1 0 0 10.667 5.334 5.334 0 0 0 0-10.667m0 18.667C5.972 33.33 0 27.36 0 19.997 0 8 10.667 0 13.333 0c2.667 0 13.334 8 13.334 19.998 0 7.364-5.972 13.334-13.334 13.334" fill="#00AEEF" fill-rule="nonzero"/></g></g></svg>') : ymaps.templateLayoutFactory.createClass('<svg class="ymaps-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 33.33h26.667V0H0z"/></defs><g transform="matrix(1 0 0 -1 0 33.33)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g mask="url(#b)"><path d="M13.333 14.664a5.334 5.334 0 1 0 0 10.667 5.334 5.334 0 0 0 0-10.667m0 18.667C5.972 33.33 0 27.36 0 19.997 0 8 10.667 0 13.333 0c2.667 0 13.334 8 13.334 19.998 0 7.364-5.972 13.334-13.334 13.334" fill="#dd2a1b" fill-rule="nonzero"/></g></g></svg>');
                        }
                    }, i = new ymaps.GeoObjectCollection({}), s = r.objs.length - 1; s >= 0; s--) {
                        var l = r.objs[s], c = [+l.coords.split(",")[0], +l.coords.split(",")[1]];
                        marker = new ymaps.Placemark(c, {balloonContent: l.info}, {
                            iconLayout: o.placemarkLayout(),
                            iconShape: {type: "Rectangle", coordinates: [[-20, -20], [20, 20]]},
                            balloonLayout: o.balloonLayout(l.value, l.address, l.function),
                            balloonContentLayout: o.balloonContentLayout,
                            balloonPanelMaxMapArea: 0,
                            balloonAutoPan: !0,
                            balloonOffset: [0, 100]
                        }), i.add(marker);
                    }
                    e.geoObjects.add(i), t.on("click", ".js-choose-pvz", function () {
                        var e = $(this).closest(".custom-baloon").find(".custom-baloon__content").html(), t = $(this).data("function");
                        if (n($(this).data("pvz"), $(this).data("address"), e), "undefined" != t) {
                            var o = t.split("(")[0], a = t.match(/\((.*?)\)/)[1].split(",")[0];
                            window[o](a);
                        }
                    }).on("click", ".grey-info__handle", function () {
                        $(this).closest(".grey-info").addClass("grey-info_shown-info");
                    });
                }
            });
        }, validate: s, clear: function () {
            o = void 0, a = void 0, i = void 0, $("#delivery-value").val(null), $("#address-value").val(null), $("#pvz-info").html(null).closest(".grey-info").removeClass("map-place__value");
        }, selectPvz: n
    };
}(), serviceMapModule = function () {
    var e, t, o, a, i, s, n = [], l = 0, r = {name: decodeURI(document.URL.split("=")[1]), index: 0}, c = function () {
        window.matchMedia("(min-width:975px)").matches && $(".location-map__places").on("click", ".office-item", function () {
            var e = $(this).attr("id").replace(/\D/g, "");
            s.each(function (o) {
                e == o.properties._data.dataOfficeId && (o.balloon.open(), t.setCenter(o.geometry._coordinates, 16, {checkZoomRange: !0}));
            }), u(e);
        }), $(".js-show-map").click(function () {
            $("body").addClass("body_fix");
            e.replace(/\D/g, "");
            i.fadeIn(200, function () {
                t.container.fitToViewport();
            });
        }), $("#js-close-map").click(function () {
            i.fadeOut(200), $("body").removeClass("body_fix");
        }), t.geoObjects.events.add("click", function (o) {
            var a = o.get("target"), i = a.properties._data;
            t.panTo(a.geometry._coordinates), u(i.dataOfficeId), i.dataCityId !== +e.replace(/\D/g, "") && d(n[i.dataCityId]);
        }).add("balloonclose", function () {
            $(".office-item").removeClass("office-item_active");
        }), $(".city-select").on("click", ".option-list__item", function () {
            d(this);
        });
    }, d = function (o) {
        p(o), t.setCenter(o.dataCoords, 11, {checkZoomRange: !0}), e = o.id, window.selectOption($("#" + e));
    }, u = function (e) {
        setTimeout(function () {
            $(".office-item").removeClass("office-item_active");
            var t = $("#pin" + e);
            t.offset().top, o.offset().top;
            t.addClass("office-item_active"), o.animate({scrollTop: t.outerHeight() * t.index() + 10 * t.index()}, 300);
        }, 100);
    }, p = function (e) {
        a.removeClass("office-type_empty");
        for (var t = [], i = e.mapObjs, s = 0; s < i.length; s++) {
            var n = document.createElement("div");
            n.className = "office-item", n.innerHTML = "<div class='office-item__inner'>" + i[s].objectInfo + "</div>", n.id = "pin" + i[s].id, t.push(n);
        }
        t[0] || o.closest(a).addClass("office-type_empty"), o.html(t);
    };
    return {
        init: function () {
            $("#service-map")[0] && (o = $("#loc-services"), a = $(".office-type"), i = $(".map-container-sv"), ymaps.ready(function () {
                s = new ymaps.GeoObjectCollection({}), t = new ymaps.Map("service-map", {center: [55.76, 37.64], zoom: 12, controls: ["zoomControl", "typeSelector"]});
                var o, a = {
                    balloonLayout: function (e, t, o) {
                        return ymaps.templateLayoutFactory.createClass('<div class="custom-baloon custom-baloon_service-map"><div class="custom-baloon__close-button"><i class="fa fa-times" aria-hidden="true"></i></div>$[[options.contentLayout]]<div class="custom-baloon__arrow"></div></div>', {
                            build: function () {
                                this.constructor.superclass.build.call(this), this._$element = $(".custom-baloon", this.getParentElement()), this.applyElementOffset(), this._$element.find(".custom-baloon__close-button").on("click", $.proxy(this.onCloseClick, this));
                            }, clear: function () {
                                this._$element.find(".custom-baloon__close-button").off("click"), this.constructor.superclass.clear.call(this);
                            }, onSublayoutSizeChange: function () {
                                a.balloonLayout().superclass.onSublayoutSizeChange.apply(this, arguments), this._isElement(this._$element) && (this.applyElementOffset(), this.events.fire("shapechange"));
                            }, applyElementOffset: function () {
                                this._$element.css({
                                    left: -this._$element[0].offsetWidth / 2,
                                    top: -(this._$element[0].offsetHeight + this._$element.find(".custom-baloon__arrow")[0].offsetHeight)
                                });
                            }, onCloseClick: function (e) {
                                e.preventDefault(), this.events.fire("userclose");
                            }, getShape: function () {
                                if (!this._isElement(this._$element)) return a.balloonLayout().superclass.getShape.call(this);
                                var e = this._$element.position();
                                return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[e.left, e.top], [e.left + this._$element[0].offsetWidth, e.top + this._$element[0].offsetHeight + this._$element.find(".custom-baloon__arrow")[0].offsetHeight]]));
                            }, _isElement: function (e) {
                                return e && e[0] && e.find(".custom-baloon__arrow")[0];
                            }
                        });
                    },
                    balloonContentLayout: ymaps.templateLayoutFactory.createClass('<div class="custom-baloon__content">$[properties.balloonContent]</div>'),
                    placemarkLayout: ymaps.templateLayoutFactory.createClass('<svg class="ymaps-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 33.33h26.667V0H0z"/></defs><g transform="matrix(1 0 0 -1 0 33.33)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g mask="url(#b)"><path d="M13.333 14.664a5.334 5.334 0 1 0 0 10.667 5.334 5.334 0 0 0 0-10.667m0 18.667C5.972 33.33 0 27.36 0 19.997 0 8 10.667 0 13.333 0c2.667 0 13.334 8 13.334 19.998 0 7.364-5.972 13.334-13.334 13.334" fill="#00AEEF" fill-rule="nonzero"/></g></g></svg>')
                };
                o = document.URL.indexOf("localhost") > 0 ? "map_neoline.json" : "/installation_centers.php", console.log(o), $.ajax({
                    url: o, dataType: "json", type: "GET", error: function (e, t) {
                        var o = "";
                        o = 0 === e.status ? "Not connect.\n Verify Network." : 404 == e.status ? "Requested page not found. [404]" : 500 == e.status ? "Internal Server Error [500]." : "parsererror" === t ? "Requested JSON parse failed." : "timeout" === t ? "Time out error." : "abort" === t ? "Ajax request aborted." : "Uncaught Error.\n" + e.responseText, console.log("%cAn error has occurred in map ajax data:", "color: red", o), $("section.location-map").html('\n\t\t\t\t\t        \t<div class="map-error">\n\t\t\t\t\t        \t\tМы сожалеем, но по техническим причинам карта Сервисных центров временно недоступна.<br>\n\t\t\t\t\t        \t\tWe are sorry service map currently unavailable.<br>\n\t\t\t\t\t        \t\tкод ошибки: <span>' + o + "</span>\n\t\t\t\t\t        \t</div>\n\t\t\t\t\t        ").addClass("location-map_error");
                    }, success(o) {
                        console.log(o), console.log("%c ajax-data-succes", "color: #bada55");
                        for (var i = 0; i < o.length; i++) {
                            var u = document.createElement("div");
                            if (u.className = "option-list__item", u.dataCoords = [+o[i].cityCoords.split(",")[0], +o[i].cityCoords.split(",")[1]], u.innerHTML = o[i].cityName, u.mapObjs = [], u.id = "city" + i, r.name == o[i].cityName && (r.index = i, console.log(r.index)), o[i].objects && o[i].objects[0]) for (var p = 0; p < o[i].objects.length; p++) {
                                l += 1;
                                var f = o[i].objects[p];
                                f.coords = [+f.objectCoords.split(",")[0], +f.objectCoords.split(",")[1]], f.id = l, u.mapObjs.push(f), ymaps.templateLayoutFactory.createClass('<div class="custom-baloon-content">$[properties.balloonContent]</div>');
                                var m = new ymaps.Placemark(f.coords, {
                                    dataInfo: f.objectInfo,
                                    dataCityId: i,
                                    dataOfficeId: f.id,
                                    balloonContent: f.objectBaloon
                                }, {
                                    iconLayout: a.placemarkLayout,
                                    iconShape: {type: "Rectangle", coordinates: [[0, 0], [40, 40]]},
                                    balloonLayout: a.balloonLayout(),
                                    balloonContentLayout: a.balloonContentLayout,
                                    balloonPanelMaxMapArea: 0,
                                    balloonAutoPan: !0
                                });
                                s.add(m);
                            } else u = null;
                            n.push(u);
                        }
                        n.length > 1 ? $("#city-list").html(n) : $("#city-list").closest(".location-map").addClass("location-map_one-city"), t.geoObjects.add(s), d(n[r.index]), e = n[r.index].id, c();
                    }
                });
            }));
        }
    };
}(), loader = function () {
    var e, t, o = !1, a = $('<div class="loader"></div>'), i = function (i) {
        if (o) {
            var s = t / 2 + i - e.offset().top;
            s > 50 && s < e.outerHeight() - 50 && a.css({"background-position": "center " + s + "px"});
        }
    };
    return {
        init: function (s) {
            (e = $(s)).addClass("in-load").append(a), t = $(window).height(), e.outerHeight() > t && (o = !0, i($(window).pageYOffset || document.documentElement.scrollTop));
        }, loaderPosition: i, destroy: function (t) {
            t ? $(t).removeClass("in-load").find(a).remove() : e && e.removeClass("in-load").find(a).remove(), o = !1;
        }
    };
}(), visualTimer = function () {
    var e, t, o, a, i = function () {
        clearInterval(e), t.removeClass("circle-timer_active").css({"animation-duration": null}), "function" == typeof orderLoaderResult && orderLoaderResult(), a.html(o);
    };
    return {
        run: function () {
            o = $(".timout-container__timeout").text(), (t = $(".circle-timer")).addClass("circle-timer_active").css({"animation-duration": o + "s"}), e = setInterval(function () {
                a = $(".timout-container__timeout"), timerCounterVal = +a.text(), timerCounterVal > 0 ? a.html(timerCounterVal - 1) : i();
            }, 1e3);
        }
    };
}();
!function (e) {
    e.fn.acordeon = function (t) {
        var o, a = function (t, o) {
            var a = this, i = e(t), s = e("." + e(t).attr("class")), n = e(t).find(o.handle), l = e(o.list), r = !0, c = function () {
                i.hasClass("list-active") ? a.close() : (r && d(), a.open());
            }, d = function () {
                s.removeClass("list-active"), l.slideUp(200);
            };
            void 0 != o.connected && (r = o.connected), a.open = function () {
                i.addClass("list-active").find(l).slideDown(200);
            }, a.close = function () {
                i.removeClass("list-active").find(l).slideUp(200);
            }, a.forceOpen = function () {
                i.addClass("list-active").find(l).css("display", "block");
            }, a.destroy = function () {
                n.off("click", c), i.removeClass("acc-inited list-active"), l.fadeIn(50);
            }, l.css("display", "none"), i.addClass("acc-inited"), n.on("click", c);
        }, i = this.length;
        for (o = 0; o < i; o++) "object" == typeof t ? this[o].acordeon = new a(this[o], t) : this[o].acordeon[t]();
    };
}(jQuery);
var acordeonManage = {
    init: function () {
        $(".accordion-coupon").acordeon({
            handle: ".accordion-coupon__handle",
            list: ".accordion-coupon__content"
        }), $(".quest-accordeon").acordeon({
            handle: ".quest-accordeon__handle",
            list: ".quest-accordeon__text"
        }), window.matchMedia("(max-width:1120px)").matches && $(".footer-list").acordeon({handle: ".footer-list__title", list: ".footer-list__list"});
    }
}, landingFade = function () {
    var e;
    return $.fn.inView = function (e) {
        var t = $(this);
        return e <= t.offset().top + t.outerHeight() / 2 && e + window.innerHeight > t.offset().top + t.outerHeight() / 2;
    }, init = function () {
        e = $(".land-gallery__item"), scrollShow(window.pageYOffset || document.documentElement.scrollTop);
    }, scrollShow = function (t) {
        e.each(function (e, o) {
            var a;
            (currentBlock = $(this), currentBlock.inView(t)) && (a = window.matchMedia("(max-width:935px)").matches ? currentBlock.data("mobile-src") : currentBlock.data("desktop-src"), currentBlock.addClass("shown").find("img").attr("src", a), console.log());
        });
    }, {scroll: scrollShow, init: init};
}();