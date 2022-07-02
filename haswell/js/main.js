/*--------------------------MINIFIED/COMPRESSED---------------------------

FULL VERSIONS OF THE FILES HAS DETAILED COMMENTS, IS DIVIDED INTO SECTIONS
 AND HAS A CLEAR STRUCTURE, YOU WILL FIND THEM IN YOUR DOWNLOAD PACK.

THIS IS A PREMIUM PRODUCT AVAILABLE EXCLUSIVELY AT:
https://themeforest.net/user/abcgomel/portfolio 
 
Author: Abcgomel
Site: https://themeforest.net/user/abcgomel/portfolio
------------------------------------------------------------------------*/

function initMenu() {
    "use strict";
    var t = jQuery,
        e = t("body");
    t("#main-menu").find(".parent > a .open-sub, .megamenu .title .open-sub").remove(), t("#main-menu").find(".parent > a, .megamenu .title").append('<span class="open-sub"></span>'), t("#main-menu").on("click", ".open-sub", function(e) {
        e.preventDefault();
        var i = t(this).closest("li, .box");
        if (t(i).hasClass("active")) t(i).children().last().slideUp(150), t(i).removeClass("active");
        else {
            var n = t(this).closest("li, .box").parent("ul, .sub-list").children("li, .box");
            t(n).is(".active") && t(n).removeClass("active").children("ul").slideUp(150), t(i).children().last().slideDown(150), t(i).addClass("active")
        }
    }), t("#main-menu").find(".parent > a").click(function(i) {
        if (e.width() > 979 && navigator.userAgent.match(/iPad|iPhone|Android/i)) {
            var n = t(this);
            n.parent().hasClass("open") ? (n.parent().removeClass("open"), i.preventDefault()) : (i.preventDefault(), n.parent().addClass("open"))
        }
    })
}
$(document).ready(function() {
    "use strict";
    var t = 1170;
    $(".cd-search-trigger").on("click", function(e) {
        var i;
        e.preventDefault(), "close" == i ? ($(".cd-search").removeClass("is-visible"), $(".cd-search-trigger").removeClass("search-is-visible"), $(".cd-overlay").removeClass("search-is-visible")) : ($(".cd-search").toggleClass("is-visible"), $(".cd-search-trigger").toggleClass("search-is-visible"), $(".cd-overlay").toggleClass("search-is-visible"), windowT.width() > t && $(".cd-search").hasClass("is-visible") && $(".cd-search").find('input[type="search"]').focus(), $(".cd-search").hasClass("is-visible") ? $(".cd-overlay").addClass("is-visible") : $(".cd-overlay").removeClass("is-visible"))
    }), $("#back-top").hide(), $(function() {
        windowT.scroll(function() {
            $(this).scrollTop() > 100 ? $("#back-top").fadeIn() : $("#back-top").fadeOut()
        }), $("#back-top a").click(function() {
            return $("body,html").animate({
                scrollTop: 0
            }, 600), !1
        })
    }), $(".toggle-view-custom li").click(function() {
        var t = $(this).children("div.panel");
        t.is(":hidden") ? (t.slideDown("10"), $(this).children(".ui-accordion-header").addClass("ui-accordion-header-active")) : (t.slideUp("10"), $(this).children(".ui-accordion-header").removeClass("ui-accordion-header-active"))
    }), $('a.smooth-scroll[href^="#"]').on("click", function(t) {
        var e = $($(this).attr("href"));
        e.length && (t.preventDefault(), $("html, body").animate({
            scrollTop: e.offset().top
        }, 600))
    }), 0 == mobileDetect && ($(".opacity-scroll2").length && windowT.on("scroll", function() {
        $(".opacity-scroll2").css("opacity", function() {
            return 1 - windowT.scrollTop() / windowT.height() * 1.5
        })
    }), $(".parallax-section").length && $.stellar({
        horizontalScrolling: !1
    })), $(".skillbar").appear(function() {
        $(".skillbar").each(function() {
            $(this).find(".skillbar-bar").animate({
                width: $(this).attr("data-percent")
            }, 2e3)
        })
    }), $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    }), $(function() {
        $('[data-toggle="popover"]').popover()
    });
    var e = $(".accordion > dd").hide();
    e.first().slideDown("easeOutExpo"), $(".accordion > dt > a").first().addClass("active"), $(".accordion > dt > a").click(function() {
        var t = $(this).parent().next("dd");
        return $(".accordion > dt > a").removeClass("active"), $(this).addClass("active"), e.not(t).slideUp("easeInExpo"), $(this).parent().next().slideDown("easeOutExpo"), !1
    }), $(".toggle > dd").hide(), $(".toggle > dt > a").click(function() {
        if ($(this).hasClass("active")) $(this).parent().next().slideUp("easeOutExpo"), $(this).removeClass("active");
        else {
            $(this).parent().next("dd");
            $(this).addClass("active"), $(this).parent().next().slideDown("easeOutExpo")
        }
        return !1
    }), initMenu(), initMagnPopup(), initCounters(), initMap(), initPageSliders(), initImgHeight(), initLeftMenu(), $("#flickr-feeds").length && initFlickrFeeds(), $("#twitter-feeds").length && initTwitterFeeds(), $("#nav").length && initAffixCheck(), $("#items-grid").length && initWorkFilter(), $(".masonry").length && initMasonry(), $(".wow").length && initWow(), $("#nav-stick2").length && initNavStick2(), windowT.resize(function() {
        $("#nav").length && initAffixCheck(), initImgHeight(), initLeftMenu()
    });
    var i = windowT.width();
    windowT.resize(function() {
        $(this).width() != i && (i = $(this).width(), initLeftMenu())
    })
});
var htmlT = $("html"),
    windowT = $(window),
    ieDetect = !1,
    mobileDetect = !1,
    ua = window.navigator.userAgent,
    old_ie = ua.indexOf("MSIE "),
    new_ie = ua.indexOf("Trident/");

function initMagnPopup() {
    $("#inline-popups").magnificPopup({
        delegate: "a",
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr("data-effect")
            }
        },
        midClick: !0
    }), $(".lightbox").magnificPopup({
        type: "image",
        mainClass: "mfp-3d-unfold",
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
            }
        },
        closeOnContentClick: !0,
        midClick: !0
    }), $("a.hinge").magnificPopup({
        mainClass: "mfp-with-fade",
        removalDelay: 1e3,
        callbacks: {
            beforeClose: function() {
                this.content.addClass("hinge")
            },
            close: function() {
                this.content.removeClass("hinge")
            }
        },
        midClick: !0
    }), $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-3d-unfold",
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
            }
        },
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    }), $(".popup-gallery2").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-3d-unfold",
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
            }
        },
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    }), $(".popup-multi-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-3d-unfold",
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
                }
            },
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        })
    }), $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    })
}

function initAffixCheck() {
    "use strict";
    var t = $("#nav");
    t.affix({
        offset: {
            top: 1
        }
    }), windowT.width() < 1025 && !$("#nav").hasClass("affix-on-mobile") && (windowT.off(".affix"), t.removeData("bs.affix").removeClass("affix affix-top affix-bottom")), $("#nav").hasClass("affix-on-mobile") && $(".nav.navbar-nav").css("max-height", $(window).height() - $(".logo-row").height() - 20 + "px")
}

function initTwitterFeeds() {
    $("#twitter-feeds").tweet({
        username: "abcgomel",
        modpath: "./js/twitter/",
        avatar_size: !1,
        count: 2,
        loading_text: "loading tweets..."
    })
}

function initFlickrFeeds() {
    $("#flickr-feeds").jflickrfeed({
        limit: 6,
        qstrings: {
            id: "91212552@N07"
        },
        itemTemplate: '<li><a class="lightbox" rel="colorbox" href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    })
}

function initLeftMenu() {
    var t = $("#header-left-nav");
    windowT.width() < 1025 && t.removeClass("in"), windowT.width() > 1024 && !t.hasClass("in") && t.addClass("in")
}

function initWow() {
    new WOW({
        mobile: !1
    }).init()
}

function initCounters() {
    $(".count-number").appear(function() {
        var t = $(this);
        t.countTo({
            from: 0,
            to: t.html(),
            speed: 1300,
            refreshInterval: 60
        })
    })
}

function initWorkFilter() {
    var t = 0,
        e = $("#items-grid");
    ! function(i) {
        "use strict";
        var n;
        n = e.hasClass("masonry") ? "masonry" : "fitRows", e.imagesLoaded(function() {
            e.isotope({
                itemSelector: ".mix",
                layoutMode: n,
                filter: t
            })
        }), i(".filter").click(function() {
            return i(".filter").removeClass("active"), i(this).addClass("active"), t = i(this).attr("data-filter"), e.isotope({
                itemSelector: ".mix",
                layoutMode: n,
                filter: t
            }), !1
        })
    }(jQuery)
}

function initImgHeight() {
    var t;
    (t = jQuery)(".js-height-fullscr").height(t(window).height())
}

function initMasonry() {
    var t;
    (t = jQuery)(".masonry").imagesLoaded(function() {
        t(".masonry").masonry()
    })
}
/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ? (mobileDetect = !0, htmlT.addClass("mobile")) : htmlT.addClass("no-mobile"), (old_ie > -1 || new_ie > -1) && (ieDetect = !0), $("body").imagesLoaded(function() {
    $("#loader3").fadeOut(), $("#loader-overflow").delay(200).fadeOut(700)
});
var gmMapDiv = $("#google-map");

function initMap() {
    ! function(t) {
        if (gmMapDiv.length) {
            gmMapDiv.attr("data-address"), gmMapDiv.attr("data-address");
            var e = gmMapDiv.attr("data-latitude"),
                i = gmMapDiv.attr("data-longitude");
            gmMapDiv.gmap3({
                action: "init",
                marker: {
                    latLng: [e, i],
                    options: {
                        icon: "images/loc-marker.png"
                    }
                },
                map: {
                    options: {
                        zoom: 18,
                        zoomControl: !0,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.SMALL
                        },
                        mapTypeControl: !1,
                        scaleControl: !1,
                        scrollwheel: !1,
                        streetViewControl: !1,
                        draggable: !0,
                        styles: [{
                            stylers: [{
                                invert_lightness: !0
                            }, {
                                saturation: -100
                            }, {
                                lightness: 10
                            }]
                        }]
                    }
                }
            })
        }
    }(jQuery)
}

function initPageSliders() {
    ! function(t) {
        "use strict";
        t(".fullwidth-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: !0,
            navigation: !0,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"]
        }), t(".fullwidth-slider-auto").owlCarousel({
            autoPlay: 4e3,
            singleItem: !0,
            navigation: !0,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"]
        }), t("#owl-clients").owlCarousel({
            autoPlay: 6e3,
            items: 5,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [768, 3],
            itemsTablet: [480, 2],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1
        }), t(".owl-clients-auto").owlCarousel({
            autoPlay: 5e3,
            items: 5,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1
        }), t(".owl-clients-no-auto").owlCarousel({
            items: 5,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !0,
            paginationNumbers: !1
        }), t(".owl-3items-nav").owlCarousel({
            items: 4,
            itemsDesktop: [1e3, 3],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1,
            navigation: !0,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"],
            rewindNav: !0,
            scrollPerPage: !1
        }), t(".owl-clients-nav").owlCarousel({
            items: 5,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1,
            navigation: !0,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"],
            rewindNav: !0,
            scrollPerPage: !1
        }), t(".owl-1-pag").owlCarousel({
            items: 1,
            itemsDesktop: [1e3, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !0,
            paginationNumbers: !1
        }), t(".owl-1-pag-auto").owlCarousel({
            autoPlay: 5e3,
            items: 1,
            itemsDesktop: [1e3, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !0,
            paginationNumbers: !1
        });
        var e = t(".fullwidth-slideshow").data("owlCarousel");
        (t(document.documentElement).keyup(function(t) {
            37 == t.keyCode ? e.prev() : 39 == t.keyCode && e.next()
        }), t(".owl-carousel").lenth) && (e = t(".owl-carousel").data("owlCarousel")).reinit()
    }(jQuery)
}

function register(t) {
    $.ajax({
        type: t.attr("method"),
        url: t.attr("action"),
        data: t.serialize(),
        cache: !1,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        error: function(t) {
            $("#notification_container").html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Could not connect to server. Please try again later.</div>')
        },
        success: function(t) {
            if ("success" != t.result) {
                var e = t.msg;
                $("#notification_container").html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + e + "</div>")
            } else {
                e = t.msg;
                $("#notification_container").html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + e + "</div>")
            }
        }
    })
}

function initNavStick2() {
    $(window).scroll(function() {
        $(window).scrollTop() > 10 ? $("#nav-stick2").removeClass("transparent").addClass("has-bg") : $("#nav-stick2").addClass("transparent").removeClass("has-bg")
    })
}
0 !== $(".date-picker").length && $(function() {
        $(".date-picker").datetimepicker({
            format: "DD/MM/YYYY"
        })
    }), 0 !== $(".time-picker").length && $(function() {
        $(".time-picker").datetimepicker({
            format: "LT"
        })
    }), $(function() {
        "use strict";
        var t = $("#mc-embedded-subscribe-form");
        $("#mc-embedded-subscribe").on("click", function(e) {
            e && e.preventDefault(), register(t)
        })
    }),
    function() {
        var t, e, i, n, a, o = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var i, n;
                for (i in e) n = e[i], null == t[i] && (t[i] = n);
                return t
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.createEvent = function(t, e, i, n) {
                var a;
                return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (a = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, n) : null != document.createEventObject ? (a = document.createEventObject()).eventType = t : a.eventName = t, a
            }, t.prototype.emitEvent = function(t, e) {
                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
            }, t.prototype.addEvent = function(t, e, i) {
                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
            }, t.prototype.removeEvent = function(t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
            }, t.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function(t) {
                var e, i, n, a;
                for (e = i = 0, n = (a = this.keys).length; n > i; e = ++i)
                    if (a[e] === t) return this.values[e]
            }, t.prototype.set = function(t, e) {
                var i, n, a, o;
                for (i = n = 0, a = (o = this.keys).length; a > n; i = ++n)
                    if (o[i] === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return t.notSupported = !0, t.prototype.observe = function() {}, t
        }()), n = this.getComputedStyle || function(t) {
            return this.getPropertyValue = function(e) {
                var i;
                return "float" === e && (e = "styleFloat"), a.test(e) && e.replace(a, function(t, e) {
                    return e.toUpperCase()
                }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
            }, this
        }, a = /(\-([a-z]){1})/g, this.WOW = function() {
            function a(t) {
                null == t && (t = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return a.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null
            }, a.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, a.prototype.start = function() {
                var e, i, n, a;
                if (this.stopped = !1, this.boxes = function() {
                        var t, i, n, a;
                        for (a = [], t = 0, i = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; i > t; t++) e = n[t], a.push(e);
                        return a
                    }.call(this), this.all = function() {
                        var t, i, n, a;
                        for (a = [], t = 0, i = (n = this.boxes).length; i > t; t++) e = n[t], a.push(e);
                        return a
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (i = 0, n = (a = this.boxes).length; n > i; i++) e = a[i], this.applyStyle(e, !0);
                return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                    return function(e) {
                        var i, n, a, o, s;
                        for (s = [], i = 0, n = e.length; n > i; i++) o = e[i], s.push(function() {
                            var t, e, i, n;
                            for (n = [], t = 0, e = (i = o.addedNodes || []).length; e > t; t++) a = i[t], n.push(this.doSync(a));
                            return n
                        }.call(t));
                        return s
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, a.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, a.prototype.sync = function() {
                return t.notSupported ? this.doSync(this.element) : void 0
            }, a.prototype.doSync = function(t) {
                var e, i, n, a, o;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (o = [], i = 0, n = (a = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; n > i; i++) e = a[i], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                    return o
                }
            }, a.prototype.show = function(t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
            }, a.prototype.applyStyle = function(t, e) {
                var i, n, a, o;
                return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), a = t.getAttribute("data-wow-iteration"), this.animate((o = this, function() {
                    return o.customStyle(t, e, n, i, a)
                }))
            }, a.prototype.animate = "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t)
            } : function(t) {
                return t()
            }, a.prototype.resetStyle = function() {
                var t, e, i, n, a;
                for (a = [], e = 0, i = (n = this.boxes).length; i > e; e++) t = n[e], a.push(t.style.visibility = "visible");
                return a
            }, a.prototype.resetAnimation = function(t) {
                var e;
                return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
            }, a.prototype.customStyle = function(t, e, i, n, a) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                }), n && this.vendorSet(t.style, {
                    animationDelay: n
                }), a && this.vendorSet(t.style, {
                    animationIterationCount: a
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, a.prototype.vendors = ["moz", "webkit"], a.prototype.vendorSet = function(t, e) {
                var i, n, a, o;
                for (i in n = [], e) a = e[i], t["" + i] = a, n.push(function() {
                    var e, n, s, r;
                    for (r = [], e = 0, n = (s = this.vendors).length; n > e; e++) o = s[e], r.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = a);
                    return r
                }.call(this));
                return n
            }, a.prototype.vendorCSS = function(t, e) {
                var i, a, o, s, r, l;
                for (s = (r = n(t)).getPropertyCSSValue(e), i = 0, a = (o = this.vendors).length; a > i; i++) l = o[i], s = s || r.getPropertyCSSValue("-" + l + "-" + e);
                return s
            }, a.prototype.animationName = function(t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (i) {
                    e = n(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, a.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, a.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t)
            }, a.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, a.prototype.scrollCallback = function() {
                var t;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var e, i, n, a;
                    for (a = [], e = 0, i = (n = this.boxes).length; i > e; e++)(t = n[e]) && (this.isVisible(t) ? this.show(t) : a.push(t));
                    return a
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, a.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, a.prototype.isVisible = function(t) {
                var e, i, n, a, o;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, a = (o = window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, e = (n = this.offsetTop(t)) + t.clientHeight, a >= n && e >= o
            }, a.prototype.util = function() {
                return null != this._util ? this._util : this._util = new e
            }, a.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, a
        }()
    }.call(this);