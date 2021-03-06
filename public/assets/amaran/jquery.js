(function() {
    !function(t, i) {
        var n, e;
        return n = function(i) {
            var n;
            n = {
                position: "bottom right",
                content: " ",
                delay: 3e3,
                sticky: !1,
                inEffect: "fadeIn",
                outEffect: "fadeOut",
                theme: "default",
                themeTemplate: null,
                closeOnClick: !0,
                closeButton: !1,
                clearAll: !1,
                cssanimationIn: !1,
                cssanimationOut: !1,
                beforeStart: function() {},
                afterEnd: function() {},
                onClick: function() {},
                wrapper: ".amaran-wrapper"
            },
            this.config = t.extend({}, n, i),
            this.config.beforeStart(),
            this.init(),
            this.close()
        }
        ,
        n.prototype = {
            init: function() {
                var i, n, o, a, s, c, h, r;
                h = null,
                r = null,
                o = this.config.position.split(" "),
                t(this.config.wrapper).length && t(this.config.wrapper).hasClass(this.config.position) ? (h = t(this.config.wrapper + "." + o[0] + "." + o[1]),
                s = h.find(".amaran-wrapper-inner")) : (h = t("<div>", {
                    "class": this.config.wrapper.substr(1, this.config.wrapper.length) + " " + this.config.position
                }).appendTo("body"),
                s = t("<div>", {
                    "class": "amaran-wrapper-inner"
                }).appendTo(h)),
                "object" == typeof this.config.content ? c = null != this.config.themeTemplate ? this.config.themeTemplate(this.config.content) : e[this.config.theme.split(" ")[0] + "Theme"](this.config.content) : (this.config.content = {},
                this.config.content.message = this.config.message,
                this.config.content.color = "#27ae60",
                c = e.defaultTheme(this.config.content)),
                i = {
                    "class": this.config.themeTemplate ? "amaran " + this.config.content.themeName : this.config.theme && !this.config.themeTemplate ? "amaran " + this.config.theme : "amaran",
                    html: this.config.closeButton ? '<span class="amaran-close" data-amaran-close="true"></span>' + c : c
                },
                this.config.clearAll && t(".amaran").remove(),
                a = t("<div>", i).appendTo(s),
                "center" === o[0] && this.centerCalculate(h, s),
                this.animation(this.config.inEffect, a, "show"),
                this.config.onClick && (n = this,
                t(a).on("click", function(i) {
                    return t(i.target).is(".amaran-close") ? void i.preventDefault() : void n.config.onClick()
                })),
                this.config.sticky !== !0 && this.hideDiv(a)
            },
            centerCalculate: function(t, i) {
                var n, e, o;
                e = i.find(".amaran").length,
                o = i.height(),
                n = (t.height() - o) / 2,
                i.find(".amaran:first-child").animate({
                    "margin-top": n
                }, 200)
            },
            animation: function(t, i, n) {
                return "fadeIn" === t || "fadeOut" === t ? this.fade(i, n) : "show" === t ? this.cssanimate(i, n) : this.slide(t, i, n)
            },
            fade: function(t, i) {
                var n;
                return n = this,
                "show" === i ? this.config.cssanimationIn ? t.addClass("animated " + this.config.cssanimationIn).show() : t.fadeIn() : this.config.cssanimationOut ? (t.addClass("animated " + this.config.cssanimationOut),
                t.css({
                    "min-height": 0,
                    height: t.outerHeight()
                }),
                void t.animate({
                    opacity: 0
                }, function() {
                    t.animate({
                        height: 0
                    }, function() {
                        n.removeIt(t)
                    })
                })) : (t.css({
                    "min-height": 0,
                    height: t.outerHeight()
                }),
                void t.animate({
                    opacity: 0
                }, function() {
                    t.animate({
                        height: 0
                    }, function() {
                        n.removeIt(t)
                    })
                }))
            },
            removeIt: function(i) {
                var n, e;
                clearTimeout(this.timeout),
                i.remove(),
                e = t(this.config.wrapper + "." + this.config.position.split(" ")[0] + "." + this.config.position.split(" ")[1]),
                n = e.find(".amaran-wrapper-inner"),
                "center" === this.config.position.split(" ")[0] && this.centerCalculate(e, n),
                this.config.afterEnd()
            },
            getWidth: function(t) {
                var i, n;
                return i = t.clone().hide().appendTo("body"),
                n = i.outerWidth() + i.outerWidth() / 2,
                i.remove(),
                n
            },
            getInfo: function(i) {
                var n, e;
                return n = i.offset(),
                e = t(this.config.wrapper).offset(),
                {
                    t: n.top,
                    l: n.left,
                    h: i.height(),
                    w: i.outerWidth(),
                    wT: e.top,
                    wL: e.left,
                    wH: t(this.config.wrapper).outerHeight(),
                    wW: t(this.config.wrapper).outerWidth()
                }
            },
            getPosition: function(n, e) {
                var o, a, s;
                return o = this.getInfo(n),
                a = this.config.position.split(" ")[1],
                s = {
                    slideTop: {
                        start: {
                            top: -(o.wT + o.wH + 2 * o.h)
                        },
                        move: {
                            top: 0
                        },
                        hide: {
                            top: -(o.t + 2 * o.h)
                        },
                        height: o.h
                    },
                    slideBottom: {
                        start: {
                            top: t(i).height() - o.wH + 2 * o.h
                        },
                        move: {
                            top: 0
                        },
                        hide: {
                            top: t(i).height() - o.wH + 2 * o.h
                        },
                        height: o.h
                    },
                    slideLeft: {
                        start: {
                            left: "left" === a ? 1.5 * -o.w : -t(i).width()
                        },
                        move: {
                            left: 0
                        },
                        hide: {
                            left: "left" === a ? 1.5 * -o.w : -t(i).width()
                        },
                        height: o.h
                    },
                    slideRight: {
                        start: {
                            left: "right" === a ? 1.5 * o.w : t(i).width()
                        },
                        move: {
                            left: 0
                        },
                        hide: {
                            left: "right" === a ? 1.5 * o.w : t(i).width()
                        },
                        height: o.h
                    }
                },
                s[e] ? s[e] : 0
            },
            slide: function(t, i, n) {
                var e, o;
                return o = this.getPosition(i, t),
                "show" !== n ? (e = this,
                i.animate(o.hide, function() {
                    i.css({
                        "min-height": 0,
                        height: o.height
                    }, function() {
                        i.html(" ")
                    })
                }).animate({
                    height: 0
                }, function() {
                    return e.removeIt(i)
                })) : void i.show().css(o.start).animate(o.move)
            },
            close: function() {
                var i;
                return i = this,
                t("[data-amaran-close]").on("click", function() {
                    i.animation(i.config.outEffect, t(this).closest("div.amaran"), "hide")
                }),
                !this.config.closeOnClick && this.config.closeButton ? void i.animation(i.config.outEffect, t(this).parent("div.amaran"), "hide") : void (this.config.closeOnClick && t(".amaran").on("click", function() {
                    i.animation(i.config.outEffect, t(this), "hide")
                }))
            },
            hideDiv: function(t) {
                var i;
                i = this,
                i.timeout = setTimeout(function() {
                    i.animation(i.config.outEffect, t, "hide")
                }, i.config.delay)
            }
        },
        e = {
            defaultTheme: function(t) {
                var i;
                return i = "",
                "undefined" != typeof t.color && (i = t.color),
                "<div class='default-spinner'><span style='background-color:" + t.color + "'></span></div><div class='default-message'><span>" + t.message + "</span></div>"
            },
            awesomeTheme: function(t) {
                return '<i class="icon ' + t.icon + ' icon-large"></i><p class="bold">' + t.title + "</p><p><span>" + t.message + '</span><span class="light">' + t.info + "</span></p>"
            },
            userTheme: function(t) {
                return '<div class="icon"><img src="' + t.img + '" alt="" /></div><div class="info"><b>' + t.user + "</b>" + t.message + "</div>"
            },
            colorfulTheme: function(t) {
                var i, n;
                return "undefined" != typeof t.color && (n = t.color),
                "undefined" != typeof t.bgcolor && (i = t.bgcolor),
                "<div class='colorful-inner' style='background-color:" + t.bgcolor + ";color:" + t.color + "'>" + t.message + "</div>"
            },
            tumblrTheme: function(t) {
                return '<div class="title">' + t.title + '</div><div class="content">' + t.message + "</div>"
            }
        },
        t.amaran = function(t) {
            var i;
            return i = new n(t)
        }
        ,
        t.amaran.close = function() {
            return t(".amaran-wrapper").remove(),
            !1
        }
    }(jQuery, window, document)
}
).call(this);
