!function (e) {
    var t = {};

    function i(a) {
        if (t[a]) return t[a].exports;
        var n = t[a] = {i: a, l: !1, exports: {}};
        return e[a].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }

    i.m = e, i.c = t, i.d = function (e, t, a) {
        i.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: a})
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 291)
}({
    109: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.getObjectProperty = function (e, t) {
            return e.split(".").reduce(function (e, t) {
                return e ? e[t] : void 0
            }, t || self)
        }, t.serializeObject = function (e) {
            var t = {};
            return $.map(e.serializeArray(), function (e, i) {
                t[e.name] = e.value
            }), t
        }
    }, 291: function (e, t, i) {
        i(292), e.exports = i(297)
    }, 292: function (e, t, i) {
        "use strict";
        var a = l(i(293)), n = l(i(294)), o = i(109), r = i(295), s = i(296);

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function c() {
            var e = $(".reviews__content"), t = e.length;
            e.each(function (e) {
                if ($(this).html().length > 300) {
                    var i = $(this).find("p").eq(0).text().substr(0, 300), a = $("<p>" + i + "...</p>"),
                        n = $('<a href="#">Читать полностью</a>'),
                        o = $(this).parent().siblings(".reviews__title_slide"),
                        r = '<div class="white-popup-block zoom-anim-dialog"><h4>' + o.find(".name").text() + '</h4><p class="font-weight-normal">' + o.find(".position").text() + '</p><div class="font-weight-light">' + $(this).html() + '</div><button title="Close (Esc)" type="button" class="mfp-close">×</button></div>';
                    n.magnificPopup({
                        items: {src: $(r), type: "inline"},
                        removalDelay: 500,
                        callbacks: {
                            beforeOpen: function () {
                                this.st.mainClass = "mfp-zoom-in"
                            }
                        }
                    }), $(this).empty().append(a).append(n)
                }
                e >= t - 1 && new Swiper(".reviews__slider", {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30,
                    loop: !1,
                    loopFillGroupWithBlank: !0,
                    pagination: {el: ".reviews__slider .swiper-pagination", clickable: !0},
                    breakpoints: {
                        768: {slidesPerView: 1, slidesPerGroup: 1},
                        992: {slidesPerView: 2, slidesPerGroup: 2},
                        1200: {slidesPerView: 3}
                    }
                }).update()
            })
        }

        function p(e) {
            this.state = e, this.active = 0, this.swiper = new Swiper(".timing__slider", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !1,
                pagination: !1,
                navigation: {
                    nextEl: ".timing__slider .swiper-button-next",
                    prevEl: ".timing__slider .swiper-button-prev"
                },
                on: {
                    transitionEnd: function () {
                        $(".timing__date").text($(".swiper-slide-active").data("date")), $(".timing__city-title").text($(".swiper-slide-active").data("city")), $(".timing__title").text($(".swiper-slide-active").data("name"))
                    }
                }
            })
        }

        function d(e) {
            this.queryParams = {}, this.container = $(e.container), this.button = $(e.button), this.categories = $(e.category), this.categoryAttr = e.categoryAttr || "data-category-id", this.template = e.template, this.source = e.source, this.transform = e.transform, this.page = 1, this.pages = 1, this.loading = !1;
            var t = this;
            if (this.container.length) {
                var i = (0, s.getUrlParameter)("category");
                i ? this.setActiveCategoryById(i) : this.fetch(!0), this.button.hide(), this.button.on("click", function (e) {
                    e.preventDefault(), t.loading || t.next()
                })
            }
            this.categories.on("click", function (e) {
                e.preventDefault(), t.setActiveCategory($(this))
            })
        }

        function u(e) {
            this.state = e, this.active = 0
        }

        function m() {
            var e = "api/service/events";
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (e = "api/service/events@old=Y"), $.get(e).done(function (e) {
                var t = new p(e);
                t.state.length && t.renderPopup()
            })
        }

        function f(e) {
            var t = $(".map__navigaton"), i = $(".map__search > input"), n = $(".map__variants"),
                o = {cache: {0: []}, objects: {}, markersIds: [], cities: [], keyword: "", simplebar: null}, r = "";
            r = $(window).outerWidth() > 425 ? '<div class="map__navigation_item" data-bla="{{mapImg}}" data-id="{{ id }}"><div class="photo bg-image" data-image="{{ big_img }}" style="background-image: url(\'{{ mapImage }}\');"></div><div class="map__navigation__info"><div class="map__navigation__info_city"><img src="images/icon-pin-blue.png" style="display: none" alt="icon-pin-blue">{{ city }}</div><div class="map__navigation__info_date"><img src="images/icon-calendar-blue.png" style="display: none" alt="icon-calendar-blue">{{ formattedDate }}</div><p class="map__navigation__info_descr">{{ name }}</p>@if(can_join_full)<a href="{{ url }}" target="_blank" data-can-join="{{can_join}}" data-can-join-full="{{can_join_full}}" class="map__navigation__info_join has-underline">Принять участие</a>@endif;</div></div>' : '<div class="map__navigation_item" data-bla="{{mapImg}}" data-id="{{ id }}"><div class="map__navigation__info"><div class="map__navigation__info_city"><img src="images/icon-pin-blue.png" style="display: none" alt="icon-pin-blue">{{ city }}</div><div class="map__navigation__info_date"><img src="images/icon-calendar-blue.png" style="display: none" alt="icon-calendar-blue">{{ formattedDate }}</div><p class="map__navigation__info_descr">{{ name }}</p><a href="{{ url }}" target="_blank" data-can-join="{{can_join}}" data-can-join-full="{{can_join_full}}" class="map__navigation__info_join has-underline">Принять участие</a></div></div>';
            var s = function (e) {
                var t = [], i = [], a = new Date;
                return a.setHours(0), a.setMinutes(0), a = a.getTime(), e.forEach(function (e) {
                    new Date(o.objects[e].date.replace(/-/g, "default.htm")).getTime() < a ? i.push(e) : t.push(e)
                }), t.sort(function (e, t) {
                    var i = new Date(o.objects[e].date.replace(/-/g, "default.htm")).getTime(),
                        a = new Date(o.objects[t].date.replace(/-/g, "default.htm")).getTime();
                    return i < a ? -1 : i > a ? 1 : 0
                }), i.sort(function (e, t) {
                    var i = new Date(o.objects[e].date.replace(/-/g, "default.htm")).getTime(),
                        a = new Date(o.objects[t].date.replace(/-/g, "default.htm")).getTime();
                    return i < a ? 1 : i > a ? -1 : 0
                }), {future: t, past: i}
            }, l = function (i) {
                var n = i ? o.cache[i] : o.cache[0];
                t.empty(), o.markersIds.forEach(function (e) {
                    o.objects[e].marker.setMap(null)
                });
                var l = s(n), c = l.future.concat(l.past).map(function (t, n) {
                    var s, c = o.objects[t].coordinates.split(",");
                    if (o.objects[t].marker) i || o.objects[t].marker.setMap(e); else {
                        var p = new google.maps.Marker({
                            map: e,
                            title: o.objects[t].city,
                            icon: (s = o.objects[t].status, {
                                url: 1 == s ? "/images/icon-pin-cyan.png" : "images/icon-pin-red.png",
                                size: new google.maps.Size(70, 60),
                                origin: new google.maps.Point(0, 0),
                                anchor: new google.maps.Point(17, 34),
                                scaledSize: new google.maps.Size(18, 25)
                            }),
                            zIndex: -1 !== l.future.indexOf(t) ? 20 : 10,
                            position: {lat: Number(c[0]), lng: Number(c[1])}
                        });
                        new google.maps.InfoWindow({
                            content: "<div><p>" + o.objects[t].name + '</p><img width="300" src="' + o.objects[t].mapImage + '"></div>',
                            pixelOffset: new google.maps.Size(-30, 0)
                        });
                        p.addListener("click", function () {
                            e.setZoom(9), e.setCenter(p.getPosition()), $(".map__search input").val(this.title).keyup(), $(".map__variants-item").click()
                        }), o.objects[t].marker = p, o.markersIds.push(t)
                    }
                    var d = new Date(o.objects[t].date);
                    o.objects[t].can_join_full = o.objects[t].url && new Date < d, o.objects[t].big_img = o.objects[t].images[0], o.objects[t].mapImage = o.objects[t].mapImage.replace("96_96", "210_210"), console.log(o.objects[t]);
                    var u = $((0, a.default)(r, o.objects[t]));
                    return u.on("click", function (i) {
                        e.setZoom(9), e.setCenter(o.objects[t].marker.getPosition())
                    }), o.objects[t].element = u, u
                });
                if (i) {
                    var p = o.objects[n[0]];
                    p.marker.setMap(e), e.setCenter(p.marker.getPosition()), e.setZoom(9), $(".map__select_pin").hide()
                } else $(".map__select_pin").show(), e.setZoom(3), e.setCenter({lat: 61.52401, lng: 90.625714});
                t.append(c), new SimpleBar(t[0], {autoHide: !1}), setTimeout(function () {
                    $('.map__navigation_item[data-id="' + l.past[0] + '"]').before('<p style="text-align: center">Прошедшие</p><hr>')
                }, 5e3)
            };
            $.get("api/service/events/map", function (e) {
                var t, i;
                e.forEach(function (e) {
                    o.objects[e.id] = e, o.cache[0].push(e.id)
                }), l(), t = s(o.cache[0]), i = t.future.concat(t.past).map(function (e, t) {
                    return $((0, a.default)('<div class="event_modal_row row pb-3"><div class="col-12 mb-3 mb-md-0 col-md-3">{{ formattedDate }}</div><div class="col-12 mb-3 mb-md-0 col-md-3">{{ city }}</div><div class="col-12 mb-3 mb-md-0 col-md-6"><a href="{{ url }}" target="_blank" class="event_modal_link d-inline-block has-underline">{{ name }}</a></div></div>', o.objects[e]))
                }), $("#events-popup-items").append(i)
            }), $.get("api/service/events/cities", function (e) {
                o.cities = e
            });
            var c = function (t) {
                o.keyword = "", e.setZoom(3), e.setCenter({
                    lat: 61.52401,
                    lng: 90.625714
                }), o.cache[0].forEach(function (i) {
                    o.objects[i].status == t ? (o.objects[i].marker.setMap(null), o.objects[i].element.hide()) : (o.objects[i].marker.setMap(e), o.objects[i].element.show())
                })
            };
            $(".newTrainings").click(c.bind(this, 0)), $(".oldTrainings").click(c.bind(this, 1)), $(document).on("click", ".photo.bg-image", function () {
                $("#photo-events-popup img").attr("src", "storage/" + $(this).data("image")), $(".photo-events-popup-open").magnificPopup({
                    items: [{
                        src: "../https@vladimiryakuba.ru/storage/" + $(this).data("image"),
                        title: ""
                    }], gallery: {enabled: !0}, type: "image"
                }).click()
            }), i.on("keyup", function (e) {
                e.target.value ? (n.show().addClass("in"), o.keyword = e.target.value) : o.keyword && (n.removeClass("in"), setTimeout(function () {
                    n.hide()
                }), o.keyword = "", l()), n.empty();
                var t = o.cities.filter(function (e) {
                    return e.toLowerCase().includes(o.keyword.toLowerCase())
                });
                t.length ? n.append(t.map(function (e) {
                    var t = $('<div class="map__variants-item">' + e + "</div>");
                    return t.on("click", function (t) {
                        o.cache[e] ? l(e) : $.get("/api/service/events/map?keyword=" + e, function (t) {
                            o.cache[e] = [], t.forEach(function (t) {
                                o.objects[t.id] || (o.objects[t.id] = t), o.cache[e].push(t.id)
                            }), l(e)
                        }), o.keyword = e, i.val(e), n.removeClass("in"), setTimeout(function () {
                            n.hide()
                        })
                    }), t
                })) : n.append('<div class="pt-4 pb-4 text-center">Пусто</div>')
            })
        }

        p.prototype.renderPopup = function () {
            var e, t, i = 0;
            for (e = 0, t = this.state.length; e < t; e += 12) this.state.slice(e, e + 12).forEach(function (e) {
                $("#future-events-popup .event-column:eq(" + i + ")").append('<div class="training-list-item clearfix"><div class="schedule__top"><div class="schedule__date">' + e.formattedDate + '</div><div class="schedule__place">/ ' + e.city + '</div></div><div class="schedule__title"><a href="' + e.url + '">' + e.name + "</a></div></div>")
            }), i++
        }, p.prototype.select = function (e) {
            this.active = e;
            var t = this.state[e];
            this.refreshSwiper(), $(".timing__lists .timing__one_list").removeClass("active"), $(".timing__lists .timing__one_list").eq(e).addClass("active"), $(".timing__date").text(t.formattedDate), $(".timing__city-title").text(t.city), $(".timing__title").text(t.name);
            var i = $(".timing__popup");
            if (i.empty(), t.video_intro) {
                var a = $('<a class="d-block w-100 h-100" href="' + t.video_intro + '" data-video-popup><img src="images/icon-play-white.png" alt="icon-p"></a>');
                i.append(a), a.magnificPopup(window.iframeVideoCfg)
            }
        }, p.prototype.refreshSwiper = function () {
            var e = this, t = this.state[this.active];
            this.swiper.removeAllSlides();
            var i = function (t) {
                e.swiper.appendSlide(t.map(function (e) {
                    return '<div class="swiper-slide bg-image" style="background-image: url(' + e + ');"></div>'
                }))
            };
            t && (t.images.length ? i(t.images.map(function (e) {
                return "storage/" + e
            })) : i([t.primaryImage])), this.swiper.slideTo(0), this.swiper.pagination.render(), this.swiper.pagination.update()
        }, p.prototype.renderList = function () {
            $(".timing__lists").html(""), $(".timing__lists").append(this.state.map(function (e, t) {
                e.index = t, e.can_join && !e.join_url && (e.join_url = "events/" + e.id);
                var i = new Date(e.date);
                return e.can_join_full = e.url && new Date < i, (0, a.default)('<div class="timing__one_list" data-index="{{ index }}"><div class="list__info"><div class="list__date"><img src="images/icon-calendar-blue.png" style="display: none" alt="icon-calendar">{{ formattedDate }}</div><div class="list__city"><img src="images/icon-pin-blue.png" style="display: none" alt="icon-pin-blue">{{ city }}</div>\x3c!--div class="list__place"><img src="images/icon-build-blue.png" alt="icon-build">{{ place }}</div--\x3e</div><div class="list__trening"><div class="list__trening"><div class="list__name">{{ name }}</div></div>@if(url)<div class="list__join"><a href="{{ url }}" data-can-join="{{can_join}}" target="_blank">Принять участие</a></div>@endif;</div></div>', e)
            }))
        }, d.prototype.setActiveCategory = function (e) {
            this.categories.removeClass("active"), e.addClass("active");
            var t = e.attr(this.categoryAttr);
            t ? this.fetchCategory(t) : (this.queryParams = {}, this.fetch(!0))
        }, d.prototype.setActiveCategoryById = function (e) {
            var t = $("[" + this.categoryAttr + '="' + e + '"]').first();
            t && this.setActiveCategory(t)
        }, d.prototype.render = function (e, t) {
            t && this.container.empty(), "function" == typeof this.transform && (e = e.map(this.transform));
            var i = this;
            this.container.append(e.map(function (e) {
                return (0, a.default)(i.template, e)
            }))
        }, d.prototype.fetch = function (e) {
            var t = this;
            t.loading = !0, $.get(this.getUrl(), function (i) {
                t.render(i.objects, e), t.setPagination(i.pagination), t.loading = !1
            })
        }, d.prototype.next = function () {
            this.setQuery({page: this.page + 1}), this.fetch()
        }, d.prototype.setPagination = function (e) {
            this.page = e.current_page, this.pages = e.pages, this.pages > this.page ? this.button.show() : this.button.hide()
        }, d.prototype.fetchCategory = function (e) {
            this.setQuery({category: e, page: 1}), this.fetch(!0)
        }, d.prototype.getUrl = function () {
            return this.source + this.getQuery()
        }, d.prototype.getQuery = function () {
            var e = "", t = [];
            for (var i in this.queryParams) t.push({key: i, value: this.queryParams[i]});
            return t.length && (e = "?" + t.map(function (e) {
                return e.key + "=" + e.value
            }).join("&")), e
        }, d.prototype.setQuery = function (e) {
            Object.assign(this.queryParams, e)
        }, u.prototype.select = function (e) {
            this.active = e;
            var t = '<iframe src="' + this.state[e].video + '" frameborder="0" allowfullscreen></iframe>',
                i = $(".preloader_video");
            i.show(), $(".video .video__frame iframe").remove(), $(".video .video__frame").append(t), $(".video .video__frame iframe").hide(), setTimeout(function () {
                i.hide(), $(".video .video__frame iframe").show()
            }, 1500)
        }, u.prototype.renderList = function () {
            this.state.forEach(function (e, t) {
                var i = 0 == t ? '<div class="video__list_item bg-image active" data-index="' + t + '" style="background-image: url(\'' + e.thumb + "');\"></div>" : '<div class="video__list_item bg-image" data-index="' + t + '" style="background-image: url(\'' + e.thumb + "');\"></div>";
                $(".video .video__list").append(i)
            })
        }, window.mapInit = function () {
            var e = document.getElementById("eventsMap");
            if (e) {
                f(new google.maps.Map(e, {
                    center: {lat: 61.52401, lng: 90.625714},
                    zoom: 4,
                    mapTypeId: "roadmap",
                    scrollwheel: !1,
                    zoomControl: !0,
                    mapTypeControl: !1,
                    scaleControl: !1,
                    streetViewControl: !1,
                    rotateControl: !1,
                    fullscreenControl: !1,
                    styles: [{
                        featureType: "administrative",
                        elementType: "all",
                        stylers: [{saturation: "-100"}]
                    }, {
                        featureType: "administrative.province",
                        elementType: "all",
                        stylers: [{visibility: "off"}]
                    }, {
                        featureType: "landscape",
                        elementType: "all",
                        stylers: [{saturation: -100}, {lightness: 65}, {visibility: "on"}]
                    }, {
                        featureType: "poi",
                        elementType: "all",
                        stylers: [{saturation: -100}, {lightness: "50"}, {visibility: "simplified"}]
                    }, {
                        featureType: "road",
                        elementType: "all",
                        stylers: [{saturation: "-100"}]
                    }, {
                        featureType: "road.highway",
                        elementType: "all",
                        stylers: [{visibility: "simplified"}]
                    }, {
                        featureType: "road.arterial",
                        elementType: "all",
                        stylers: [{lightness: "30"}]
                    }, {
                        featureType: "road.local",
                        elementType: "all",
                        stylers: [{lightness: "40"}]
                    }, {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [{saturation: -100}, {visibility: "simplified"}]
                    }, {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{hue: "#ffff00"}, {lightness: -25}, {saturation: -97}]
                    }, {featureType: "water", elementType: "labels", stylers: [{lightness: -25}, {saturation: -100}]}]
                }))
            }
        }, $(document).ready(function () {
            var e, t, i;
            !function () {
                var e = $(".header");
                e.show();
                var t = function () {
                    $(window).scrollTop() >= 1 ? e.addClass("sticky") : e.removeClass("sticky")
                };
                $(window).scroll(t), t()
            }(), $(".main > section:first-child").css("padding-top"), $(".navbar-toggler").on("click", function () {
            }), function () {
                window.cfgGalery = {
                    delegate: "a",
                    type: "image",
                    tLoading: "Loading image #%curr%...",
                    mainClass: "mfp-img-mobile",
                    gallery: {enabled: !0, navigateByImgClick: !0, preload: [0, 2]},
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                        titleSrc: function (e) {
                            return e.el.attr("title") || ""
                        }
                    }
                }, window.iframeVideoCfg = {
                    disableOn: 700,
                    type: "iframe",
                    iframe: {
                        patterns: {
                            youtube: {
                                index: "youtube.com/",
                                id: "v=",
                                src: "../https@www.youtube.com/embed/_25id_25@autoplay=1"
                            },
                            vimeo: {index: "vimeo.com/", id: "/", src: "../player.vimeo.com/video/_25id_25@autoplay=1"}
                        }
                    },
                    overflowY: "auto",
                    removalDelay: 300,
                    preloader: !1,
                    fixedContentPos: !1,
                    mainClass: "mfp-fade"
                }, $(".press-gallery").magnificPopup(Object.assign({}, window.cfgGalery, {delegate: ".bg-image"})), $(".event-gallery").magnificPopup(Object.assign({}, window.cfgGalery, {delegate: ".col-6 a"})), $(".popup-gallery-partners").magnificPopup(window.cfgGalery), $(".popup-gallery-recomendations").magnificPopup(window.cfgGalery), $("[data-video-popup]").magnificPopup(window.iframeVideoCfg);
                var e = {
                    type: "inline", removalDelay: 500, callbacks: {
                        beforeOpen: function () {
                            this.st.mainClass = "mfp-zoom-in"
                        }
                    }
                };
                $("[data-form-popup]").magnificPopup(e), $("[data-personal-popup]").magnificPopup(e), $(document).on("click", 'a[data-can-join="false"]', function (e) {
                    e.preventDefault(), $.magnificPopup.open({
                        items: {src: $("#cant-join-form")},
                        type: "inline",
                        removalDelay: 500,
                        callbacks: {
                            beforeOpen: function () {
                                this.st.mainClass = "mfp-zoom-in"
                            }
                        }
                    })
                }), $(".popup-press-video").each(function () {
                    $(this).css("background-image", 'url("' + (0, r.getVideoThumb)($(this).attr("href")) + '")')
                }), $(".popup-youtube-page").each(function () {
                    $(this).children("img").attr("src", (0, r.getVideoThumb)($(this).attr("href")))
                }), $('[class*="training__page"] .red-button').click(function () {
                    var e = $(".training__page_top .block-1 span:eq(0)").text(),
                        t = $(".training__page_top .block-1 span:eq(1)").text();
                    $("#join-form form").append('<input type="hidden" name="event_date" value="' + t + '"> <input type="hidden" name="event_city" value="' + e + '">')
                }), $("form[data-action]").on("submit", function (e) {
                    e.preventDefault();
                    var t = $(this), i = t.siblings(".popup__preloader"), a = t.attr("data-action"),
                        n = t.find(".form-message");
                    i.fadeIn();
                    var r = function () {
                        n.empty().slideUp().removeClass("success").removeClass("error"), n.prev().show(), n.prev().prev().show()
                    }, s = function (e) {
                        var t = "success" === e ? "Сообщение успешно отправлено!" : "Ошибка отправки сообщения!";
                        n.text(t).addClass(e).slideDown(), n.prev().hide(), n.prev().prev().hide(), setTimeout(r, 4e3)
                    };
                    r();
                    var l = $.post("api/" + a, (0, o.serializeObject)(t));
                    l.done(function (e) {
                        e.success ? (s("success"), t.find(".form-field").val("")) : s("error")
                    }), l.fail(function (e) {
                        s("error")
                    }), l.always(function (e) {
                        i.fadeOut()
                    })
                })
            }(), function () {
                new Swiper(".primary__swiper", {
                    direction: "vertical",
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    slideActiveClass: "active",
                    pagination: {el: ".primary__swiper .swiper-pagination", clickable: !0}
                });
                var e = new Swiper(".blog__slider", {
                    spaceBetween: 30,
                    loop: !0,
                    pagination: {el: ".blog__slider .swiper-pagination", clickable: !0},
                    navigation: {
                        nextEl: ".blog__slider .swiper-button-next",
                        prevEl: ".blog__slider .swiper-button-prev"
                    }
                }), t = $(".blog__right .bg-image");
                e.on("slideChange", function () {
                    var e = $(this)[0], i = "url('" + e.slides[e.activeIndex].getAttribute("data-image") + "')";
                    t.css("background-image", i)
                }), new Swiper(".best-interview-slider", {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: ".best-interview .swiper-button-next",
                        prevEl: ".best-interview .swiper-button-prev"
                    },
                    breakpoints: {1024: {slidesPerView: 1, slidesPerColumn: 1}}
                }), $(".insta__list li").hover(function () {
                    $("p", this).fadeIn()
                }, function () {
                    $("p", this).fadeOut()
                })
            }(), c(), function () {
                var e = $(".store__item-link");
                if (e.length) {
                    $(document).on("submit", "[data-payment-form]", function (e, t, i) {
                        e.preventDefault();
                        var a = (0, o.serializeObject)($(this));
                        $.post("payments", a, function (e) {
                            e.confirmationUrl && (window.location.href = e.confirmationUrl)
                        })
                    });
                    var t = {}, i = (0, s.getUrlParameter)("product"), r = function (e) {
                        var i = t[e];
                        if (!i) return !0;
                        if ($("#product-image").attr("src", i.preview), $("#product-title").text(i.title), $("#product-price").text(i.price), $("#product-intro").html(i.introtext), $("#product-inner").html(i.inner), $("#product-data-1").fadeIn(), $("#product-data-2").fadeIn(), console.log(i), i.preview_soruce) switch (i.category_id) {
                            case 10:
                                $("#product-preview").html('<a href="storage/' + i.preview_soruce + '" class="fragment" download><img src="images/icon-pdf.png" alt="pdf"><span class="has-underline">Скачать ознакомительный фрагмент</span></a>');
                                break;
                            case 11:
                                $("#product-preview").html('<a href="storage/' + i.preview_soruce + '" class="fragment" download><img src="images/icon-pdf.png" alt="pdf"><span class="has-underline">Скачать ознакомительный фрагмент</span></a>');
                                var o = $('<a href="' + i.preview_soruce + '" class="fragment"><img src="images/play-blue.png" alt="play-blue"><span class="has-underline">Смотреть превью</span></a>');
                                $("#product-preview").empty(), $("#product-preview").append(o), o.magnificPopup(window.iframeVideoCfg);
                                break;
                            case 12:
                                $("#product-preview").html('<audio src="storage/' + i.preview_soruce + '" preload="auto" controls></audio>');
                                break;
                            default:
                                $("#product-preview").empty()
                        } else $("#product-preview").empty();
                        var r = $("#tab-review .row");
                        r.empty(), i.comments && Array.isArray(i.comments) ? (r.append(i.comments.map(function (e) {
                            if (e.published) return (0, a.default)('<div class="reviews__descr_slide comment__descr_slide"><span class="name">{{ name }}</span><br><p style="font-size: smaller">{{ created_at }}</p><div class="reviews__content">{{ text }}</div></div></div>', e)
                        })), $("[data-review-popup]").magnificPopup(window.iframeVideoCfg)) : i.reviews && Array.isArray(i.reviews) && (r.append(i.reviews.map(function (e) {
                            return (0, a.default)('<div class="col-lg-6 page-store__review_item"><div class="reviews__title_slide d-flex align-items-center"><div class="reviews__image bg-image" style="background-image: url(\'{{ image }}\');"></div><div><span class="name">{{ fullname }}</span><br><span class="position">{{ position }}</span></div></div><div class="reviews__descr_slide"><div class="reviews__content">{{ content }}</div>@if(video)<a href="{{ video }}" class="has-underline show-video popup-vimeo">Смотреть видео</a>@endif;</div></div>', e)
                        })), $("[data-review-popup]").magnificPopup(window.iframeVideoCfg)), $(".store-page__descr-block")[0] && (0, n.default)($(".store-page__descr-block"));
                        var s, l,
                            c = (s = i.id, l = i.title, i.price, '<div class="white-popup-block zoom-anim-dialog"><h4 class="pr-5">' + l + '</h4><form method="get" data-payment-form><input name="productId" type="hidden" value="' + s + '"><div class="form-group"><label class="col-form-label">Выберите способ оплаты</label><select name="paymentType" class="form-control custom-select"><option selected value="bank_card">Банковской картой</option><option value="yandex_money">Яндекс.Деньги</option><option value="sberbank"> Сбербанк Онлайн</option><option value="qiwi">QIWI Wallet</option><option value="webmoney">Webmoney</option><option value="alfabank">Альфа-Клик</option></select></div><div class="form-group mb-5"><label class="col-form-label">Укажите ваш E-mail</label><input name="email" type="email" class="form-control" placeholder="Ваш e-mail" required /><small class="form-text text-muted">На этот адрес будет отправлено уведомление со ссылкой на ваш заказ.</small></div><div class="mt-2 mb-2 text-center"><button type="submit" class="btn btn-success">К оплате</submit></div></form></div>'),
                            p = $(".store-page__buy_price"), d = p.find(".buy");
                        d.length && d.remove(), d = $('<a href="#" class="buy red-button">Купить</a>'), p.append(d), i.source && i.source.length ? $(d).on("click", function () {
                            window.location = i.source
                        }) : 22 == i.category_id ? $(d).on("click", function () {
                            $("#feedback-form textarea").val('Хочу заказать услугу "' + $("#product-title").text().trim() + '"'), $([document.documentElement, document.body]).animate({scrollTop: $("#feedback-form").offset().top + 150}, 500)
                        }) : d.magnificPopup({
                            items: {src: $(c), type: "inline"},
                            removalDelay: 500,
                            callbacks: {
                                beforeOpen: function () {
                                    this.st.mainClass = "mfp-zoom-in"
                                }
                            }
                        })
                    };
                    $("[data-product-id]").click(function (e) {
                        e.preventDefault(), r($(this).attr("data-product-id"))
                    }), e.length && $.get("api/service/products", function (e) {
                        e.forEach(function (e) {
                            t[e.id] = e, i && r(i)
                        })
                    })
                } else $("[data-product-id]").click(function (e) {
                    e.preventDefault();
                    var t = $(this).attr("data-product-id");
                    window.location.href = "/store?product=" + t
                })
            }(), m(), function () {
                var e = {}, t = $(".trainings__page .trainings__link");
                $(".trainings__page .program__link").click(function (e) {
                    e.stopPropagation()
                });
                var i = function (t) {
                    var i = e[t];
                    i && ($("#training-title").text(i.title), $("#training-content").html(i.content), i.program ? $("#training-program").attr("href", i.program_url).show() : $("#training-program").hide(), $("#training-inner").fadeIn(), (0, n.default)($("#training-inner")))
                };
                if (t.length) {
                    var a = (0, s.getUrlParameter)("training");
                    $.get("api/service/trainings", function (t) {
                        t.forEach(function (t) {
                            e[t.id] = t, a && i(a)
                        })
                    }), $(".trainings__join").click(function (e) {
                        e.preventDefault(), $("#nav-reg-tab").tab("show"), (0, n.default)($("#training-inner"))
                    })
                }
                $(".t-link").click(function (e) {
                    e.preventDefault(), e.stopPropagation(), t.length ? i($(this).attr("data-id")) : window.location.href = "/master-classes?training=" + $(this).attr("data-id")
                })
            }(), e = ["green", "blue", "purple", "yellow", "red"], t = {}, (i = $("[data-blog-category]")).length > 1 && i.slice(1).each(function (i) {
                var a = $(this).attr("data-blog-category"), n = e[i] || "black";
                t[a] = n, $(this).addClass(n)
            }), $(".blog-page__content_articles").magnificPopup(Object.assign({}, window.iframeVideoCfg, {delegate: "[data-tv]"})), new d({
                container: "[data-blog-items]",
                button: "[data-blog-button]",
                category: "[data-blog-category]",
                categoryAttr: "data-blog-category",
                template: "{{html}}",
                source: "api/service/blog",
                transform: function (e) {
                    var i = {html: ""};
                    return e.source ? i.html = (0, a.default)('<div class="col-lg-6 col-md-12 blog__article"><a class="d-block" href="{{url}}" data-tv><img class="img-fluid" src="{{preview}}" alt="{{title}}"><img class="play" src="images/youtube-2.png" alt="Play"></a><p class="pt-3 pb-3">{{title}}</p></div>', {
                        preview: (0, r.getVideoThumb)(e.source),
                        url: e.source,
                        title: e.title
                    }) : i.html = (0, a.default)('<div class="col-lg-6 col-md-12 blog__article"><a class="d-block" href="{{url}}"><img class="img-fluid" src="{{preview}}" alt="{{title}}"></a><div class="blog__article_info d-flex justify-content-between">@if(is_new)<span class="new">New</span>@endif;<span class="category {{color}}">{{category_name}}</span><span class="views"><img src="images/icon-views.png" alt="views">{{views_count}}</span></div><p>{{title}}</p><a class="article-url" href="{{url}}">Читать далее</a></div>', {
                        preview: e.preview,
                        url: "blog/" + e.id,
                        title: e.title,
                        category_name: e.category.label,
                        category_id: e.category.id,
                        is_new: e.is_new,
                        color: t[e.category_id] || "black",
                        views_count: e.views_count + 211 || 211
                    }), i
                }
            }), new d({
                container: "[data-press-items]",
                button: "[data-press-button]",
                template: '<article><div class="col-lg-4 pl-lg-0"><a class="d-block" href="{{url}}"><img src="{{ preview }}" alt="smi-article"></a></div><div class="col-lg-8 pr-lg-0"><a href="/press/{{id}}"><h3>{{ title }}</h3></a><i> {{ press_title }}</i><p>{{ introtext }}</p><a href="/press/{{id}}" class="has-underline">Читать полностью</a></div></article>',
                source: "api/service/press"
            }), $(".video .video__list").length && $.get("api/service/videos").done(function (e) {
                var t = new u(e.map(function (e) {
                    return {id: e.id, thumb: (0, r.getVideoThumb)(e.source), video: (0, r.getVideoEmbed)(e.source)}
                }));
                t.renderList(), t.select(0), $(".video__list .video__list_item").on("click", function () {
                    $(".video__list .video__list_item").removeClass("active"), $(this).addClass("active");
                    var e = $(this).attr("data-index");
                    t.select(e)
                }), new SimpleBar($(".video__list")[0], {autoHide: !1})
            }), $(".request__form").submit(function (e) {
                e.preventDefault(), $(".request__form-preloader").fadeIn(), $.post("api/service/feedback", (0, o.serializeObject)($(this)), function (e) {
                    var t;
                    t = e.success ? '<div class="white-popup-block zoom-anim-dialog"><h4 class="text-success">Спасибо!</h4><p class="font-weight-normal">Мои коллеги свяжутся с Вами!<br>Также, вы можете позвонить прямо сейчас по номеру 8 901 8000 000!</p>' : '<div class="white-popup-block zoom-anim-dialog"><h4 class="text-danger">Ошибка отправки сообешения.</h4></div>', $(".request__form input").val(""), $(".request__form textarea").val(""), $.magnificPopup.open({
                        items: {
                            src: $(t),
                            type: "inline"
                        }, removalDelay: 500, callbacks: {
                            beforeOpen: function () {
                                this.st.mainClass = "mfp-zoom-in"
                            }
                        }
                    })
                }).always(function (e) {
                    $(".request__form-preloader").fadeOut()
                })
            }), $(".review__form").submit(function (e) {
                e.preventDefault(), $(".review__form-preloader").fadeIn(), $.post("api/service/review", (0, o.serializeObject)($(this)), function (e) {
                    var t;
                    t = e.success ? '<div class="white-popup-block zoom-anim-dialog"><h4 class="text-success">Спасибо!</h4><p class="font-weight-normal">Ваш отзыв появится в списке сразу после модерации</p>' : '<div class="white-popup-block zoom-anim-dialog"><h4 class="text-danger">Ошибка отправки сообешения.</h4></div>', $(".review__form input").val(""), $(".review__form textarea").val(""), $.magnificPopup.open({
                        items: {
                            src: $(t),
                            type: "inline"
                        }, removalDelay: 500, callbacks: {
                            beforeOpen: function () {
                                this.st.mainClass = "mfp-zoom-in"
                            }
                        }
                    })
                }).always(function (e) {
                    $(".review__form-preloader").fadeOut()
                })
            }), $(".oldTrainings").click(function () {
                m(!0)
            })
        })
    }, 293: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function e(t, i) {
            return t.replace(/\@foreach\(([\w\.]*)\sas\s([\w\.]*)\)(.+)\@endforeach;/g, function (t, n, o, r) {
                var s = (0, a.getObjectProperty)(n, i);
                return Array.isArray(s) || console.error('"' + key + '" property must be array'), s.map(function (t) {
                    var i = {};
                    return i[o] = t, e(r, i)
                }).join("")
            }).replace(/\@if\(([\w\.]*)\)(.+)\@endif;/g, function (t, n, o) {
                return (0, a.getObjectProperty)(n, i) ? e(o, i) : ""
            }).replace(/\{\{\s?([\w\.]*)\s?\}\}/g, function (e, t) {
                var n = (0, a.getObjectProperty)(t, i);
                return void 0 !== n && null !== n ? n : ""
            })
        };
        var a = i(109)
    }, 294: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            $("html, body").scrollTop(e.offset().top)
        }
    }, 295: function (e, t, i) {
        "use strict";

        function a(e) {
            return void 0 !== (e = e.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? e[2].split(/[^0-9a-z_\-]/i)[0] : e[0]
        }

        function n(e) {
            return e.match(/(videos|video|channels|\.com)\/([\d]+)/)[2]
        }

        function o(e) {
            return -1 !== e.search(/youtube.com|youtu.be/i)
        }

        function r(e) {
            return -1 !== e.search(/vimeo.com/i)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.youTubeId = a, t.vimeoId = n, t.isYouTubeUrl = o, t.isVimeoUrl = r, t.getVideoId = function (e) {
            if (o(e)) return a(e);
            if (r(e)) return n(e);
            return null
        }, t.getVideoEmbed = function (e, t) {
            if (o(e)) return "https://www.youtube.com/embed/" + a(e) + (t ? "?autoplay=1" : "");
            if (r(e)) return "https://player.vimeo.com/video/" + n(e) + (t ? "?autoplay=1" : "");
            return null
        }, t.getVideoNormalized = function (e) {
            if (o(e)) return "http://www.youtube.com/watch?v=" + a(e);
            if (r(e)) return "http://vimeo.com/" + n(e);
            return null
        }, t.getVideoThumb = function (e) {
            if (o(e)) return "https://img.youtube.com/vi/" + a(e) + "/0.jpg";
            if (r(e)) return "/images/video-1.png";
            return null
        }
    }, 296: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.getUrlParameter = function (e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
            return null === t ? null : decodeURIComponent(t[1].replace(/\+/g, " "))
        }, t.getUrlParams = function (e) {
            var t = {};
            return decodeURIComponent(window.location.href.slice(window.location.href.indexOf("?") + 1)).split("&").forEach(function (e, i) {
                var a = e.split("=", 2);
                t[a[0]] = a[1]
            }), e && e in t ? t[e] : t
        }
    }, 297: function (e, t) {
    }
});