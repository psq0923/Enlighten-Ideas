webpackJsonp([24],{

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(21), __webpack_require__(105) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, e, t) {
    "use strict";
    var n = e.extend({
        init: function() {
            this._super.apply(this, arguments), this.listenTo(this._view, {
                postrender: function(i) {
                    this._bindHide(i);
                },
                hide: function() {
                    this._unbindHide();
                }
            }), this._keepAlive = this._keepAlive.bind(this), this._setDeath = this._setDeath.bind(this);
        },
        _unbindHide: function() {
            this.$context.off(".miniprofile");
        },
        _bindHide: function(i) {
            i.on({
                "mouseenter.miniprofile": this._keepAlive,
                "mouseleave.miniprofile": this._setDeath,
                "click.miniprofile": this._setDeath
            });
        },
        setContext: function(i) {
            this.$context = i, this._unbindHide(), this._bindHide(this.$context);
        },
        _keepAlive: function() {
            clearTimeout(this._hideTimeout);
        },
        _setDeath: function() {
            this._hideTimeout = setTimeout(function() {
                this._view.hide();
            }.bind(this), this.constructor.HIDE_TIMEOUT);
        }
    }, {
        VIEW_CLASS: t,
        HIDE_TIMEOUT: 500
    });
    return n;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(157), __webpack_require__(41), __webpack_require__(42), __webpack_require__(97) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, o, e, i, s) {
    "use strict";
    var n = i.extend({
        mustache: s,
        template: function(o) {
            return this._super(t.extend({
                classes: [ "mini-profile", "hide-tablet", "hide-phone" ]
            }, o));
        },
        position: function() {
            var t, o, e, i = this._controller.$context.width() / 2, s = this.constructor.NUB_OFFSET - i, n = s < 0 ? "+" : "-";
            this._super(this._controller.$context, {
                my: "left top",
                at: "left" + n + Math.abs(s) + " bottom+" + this.constructor.NUB_HEIGHT,
                collision: "flipfit",
                within: this._model.get("within")
            }), t = this._controller.$context.offset(), o = this.$view.offset(), this._model.get("bottom") && o.top + this.$view.height() > this._model.get("bottom").offset().top ? (this._super(this._controller.$context, {
                my: "left" + n + Math.abs(s) + " bottom-" + this.constructor.NUB_HEIGHT,
                at: "left top",
                collision: "flipfit none",
                within: this._model.get("within")
            }), e = "bottom") : e = t.top > o.top ? "bottom" : "top", e += Math.floor(t.left) > o.left + Math.abs(s) ? "-right" : "-left", 
            this.$view.removeClass("top-right top-left bottom-right bottom-left").addClass(e);
        },
        rendered: function() {
            this._super(), e.init(this.$view);
        },
        show: function() {
            this.$view && (this.$view.removeClass("hide"), this.position()), this._super(), 
            this._controller.$context.closest(":focusable").focus();
        },
        hide: function() {
            this._super(), this.destroy();
        },
        _bind: t.noop,
        _unbind: t.noop
    }, {
        NUB_OFFSET: 55,
        NUB_HEIGHT: 12
    });
    return n;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(19), __webpack_require__(15), __webpack_require__(16), __webpack_require__(39), __webpack_require__(31), __webpack_require__(5), __webpack_require__(2), __webpack_require__(25), __webpack_require__(8) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, r, i, s, n, o, u, h) {
    "use strict";
    return r.extend({
        xhr: u,
        hideButtonText: o.translate("form_template_saving", "Saving..."),
        validator: [ i.trimIfEmpty, i.validateForm ],
        _submitSelector: ".form-submit:not([type=submit]):not([disabled]), .js-submit:not([type=submit]):not([disabled])",
        _displayError: function(t, e) {
            var r = {
                errors: {}
            };
            return r.errors[t.attr("name")] = o.translateErrorMessage(e), s.displayAll(this.$form)(r);
        },
        init: function(t) {
            this._super(t), this.$context = t, this.on({
                "error:show": this._displayError.bind(this),
                "error:hide": s.removeErrors,
                error: function() {
                    this.showButtons();
                },
                before: function() {
                    this.hideButtons();
                }
            }), this.handlers.push(this.showMessages.bind(this)), this.bind();
        },
        reset: function() {
            return this._super(), this.$form.find("select").each(function() {
                var e = this.value;
                t(this).changeInput("value", "").changeInput("value", e);
            }), this.showButtons(), this;
        },
        _getMessageContainer: function() {
            return this.$form;
        },
        showMessages: function(t) {
            if (t = n.error(t), !t.messages) throw t;
            e(this._getMessageContainer(), t.messages);
        },
        submit: function(t) {
            return this.wasSubmittedFromButton = !!t, s.removeAll(this.$form), this._super.apply(this, arguments);
        },
        commit: function(t) {
            return u(t);
        },
        showButtons: function() {
            h.show(this._getButtonContainer());
        },
        hideButtons: function() {
            var t = this.hideButtonText;
            "function" == typeof t && (t = t()), h.hide(this._getButtonContainer(), t);
        },
        _getButtonContainer: function() {
            var t = this.$context.find(this._submitSelector).closest(".form-item").parent();
            if (!t.length && this.wasSubmittedFromButton) throw new Error("Unable to find button container:" + this.$context.html());
            return t;
        },
        _findFormError: function(t) {
            var e = n.error(t);
            if (!e.errors && "object" == typeof t.responseJSON) throw t;
            return this._super(e.errors || e);
        },
        bind: function() {
            return this.alreadyBound ? this : (this.alreadyBound = !0, this.$context.on("click keydown", this._submitSelector, this._normalizeSubmitter), 
            this.$form.on("submit", this.submit), this);
        },
        unbind: function() {
            return this.$context.off("click keydown", this._submitSelector, this._normalizeSubmitter), 
            this.$form.off("submit", this.submit), this;
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    function i(i, t) {
        t = t || {}, i.each(function() {
            function i() {
                return o.css("height", "auto").removeClass("hide"), {
                    extended: o.height(),
                    short: n.height()
                };
            }
            var n = e(this), o = n.next(), l = n.find(".variable-text-link, .js-more-toggle-link"), r = o.find(".variable-text-link, .js-more-toggle-link"), s = "speed" in t ? t.speed : 250;
            o.css({
                overflow: "hidden"
            }), l.on("click.be-moretoggle", function() {
                var e = i();
                n.addClass("hide"), o.css("height", e.short + "px").animate({
                    height: e.extended + "px"
                }, s);
            }), r.on("click.be-moretoggle", function() {
                o.animate({
                    height: i().short + "px"
                }, s, function() {
                    n.removeClass("hide"), o.addClass("hide");
                });
            });
        });
    }
    return i.off = function(i) {
        i.each(function() {
            var i = e(this), t = i.next(), n = i.find(".variable-text-link, .js-more-toggle-link"), o = t.find(".variable-text-link, .js-more-toggle-link");
            n.off("click.be-moretoggle"), o.off("click.be-moretoggle");
        });
    }, i.init = function(e) {
        i(e.find(".js-more-toggle"));
    }, i.destroy = function(e) {
        i.off(e.find(".js-more-toggle"));
    }, i;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    "use strict";
    function e(e) {
        var s, t, a = !1, u = 0, i = [];
        for (s = 0; s < e.length; ++s) "[" !== e[s] ? "]" !== e[s] ? "," !== e[s] || a || (t = e.substring(u, s), 
        t && i.push(t), u = s + 1) : a = !1 : a = !0;
        return t = e.substring(u), t && i.push(t), i;
    }
    function s(a, u) {
        return delete s.message, u = u ? e(u) : [], null == a && (a = ""), u.indexOf("required") === -1 && "" === a || u.every(t, a);
    }
    var t, a = RegExp.prototype.test, u = {
        Generic: {
            test: a.bind(/^[^<>]+$/),
            message: "This field may not contain less than signs (&lt) or greater than signs (&gt;)"
        },
        AlphaNumeric: {
            test: a.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F]+$/),
            message: "This field must contain only alphanumeric characters"
        },
        Alpha: {
            test: a.bind(/^[A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F]+$/),
            message: "This field must contain only alpha characters"
        },
        AlphaDash: {
            test: a.bind(/^[A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\-]+$/),
            message: "This field must contain only alpha characters or dashes"
        },
        ANDash: {
            test: a.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\-]+$/),
            message: "This field must contain only alphanumeric characters or dashes"
        },
        ANUnder: {
            test: a.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F_]+$/),
            message: "This field must contain only alphanumeric characters with or without underscores"
        },
        ANUSpace: {
            test: a.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F_ ]+$/),
            message: "This field must contain only alphanumeric characters with or without underscores and spaces"
        },
        ANEmail: {
            test: a.bind(/^([_\dA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\-]+|[\w\.\+\-]+@(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]))$/),
            message: "This field must contain a valid username or email"
        },
        Integer: {
            test: a.bind(/^\-?\d+$/),
            message: "This field must only contain numbers, without any spaces"
        },
        CreditCardNumber: {
            test: a.bind(/^\d{13,16}$/),
            message: "This field must only contain numbers, without any spaces or dashes"
        },
        Decimal: {
            test: a.bind(/^\-?\d+(\.\d+)?$/),
            message: "This field must be a valid decimal number"
        },
        Date: {
            test: a.bind(/^\d{1,2}\-\d{1,2}-\d{4}( \d{2}:\d{2}:\d{2})?$/),
            message: "This field must be a valid date"
        },
        SqlDate: {
            test: a.bind(/^\d{4}\-\d{2}\-\d{2}$/),
            message: "This field must be a valid date"
        },
        SqlDateTime: {
            test: a.bind(/^\d{4}\-\d{2}\-\d{2}\s\d{2}\:\d{2}\:\d{2}$/),
            message: "This field must be a valid datetime"
        },
        SlashDate: {
            test: a.bind(/^\d{1,2}\/\d{1,2}\/\d{4}$/),
            message: "This field must be a valid date"
        },
        Email: {
            test: a.bind(/^[a-zA-Z0-9_.+\-]+@(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2,63}$/),
            message: "This field must be a valid email address"
        },
        Name: {
            test: a.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\'. \-]{2,50}$/),
            message: "This field must be a valid name"
        },
        Username: {
            test: a.bind(/^[A-Za-z0-9_\-]+$/),
            message: "This field contains invalid characters. Please use only letters (a-z, A-Z), numbers, dash or underscore characters."
        },
        Password: {
            test: a.bind(/^\S{6,32}$/),
            message: "This field must be between 6 and 32 characters"
        },
        Address: {
            test: a.bind(/^[\w0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F# \' \.\,\&\-]+$/),
            message: "This field must be a valid address"
        },
        City: {
            test: a.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F \' \. \/ \-]+$/),
            message: "This field must be a valid city"
        },
        Province: {
            test: a.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F ]+$/),
            message: "This field must be a valid province"
        },
        IntZip: {
            test: a.bind(/^[A-Za-z0-9#\. \-]+$/),
            message: "This field must be a valid zipcode"
        },
        UsZip: {
            test: a.bind(/^\d{5}(\-\d{4})?$/),
            message: "This field must be a valid US zipcode"
        },
        Country: {
            test: a.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\'. \-]{2,50}$/),
            message: "This field must be a valid country"
        },
        IntPhone: {
            test: a.bind(/^[0-9\+ \(\)\#\-]+$/),
            message: "This field must be a valid phone"
        },
        UsPhone: {
            test: a.bind(/^\d{3}\-\d{3}\-\d{4}$/),
            message: "This field must be a valid US phone"
        },
        PicExt: {
            test: a.bind(/^((jpg)|(jpeg)|(png)|(gif)){1}$/),
            message: "This field must be a valid image extension"
        },
        VideoExt: {
            test: a.bind(/^((mpg)|(mpeg)|(mov)|(avi)|(dv)|(qt)|(asf)|(flv)){1}$/),
            message: "This field must be a valid video extension"
        },
        Url: {
            test: a.bind(/^(http(?:s)?:\/\/|www\.)[^<>"]*$/),
            message: "This field must be a URL starting with http:// or www."
        },
        UrlWithProtocol: {
            test: a.bind(/^https?:\/\/(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?\.)+(?:(?:[Xx][Nn]--)?[a-zA-Z0-9]{2,63}|\d{1,3})[^<>"]*$/),
            message: "This field must be a URL starting with http:// or https://"
        },
        UrlExt: {
            test: a.bind(/^((?:https?):\/\/)?(?:(?:(?:[\w\.\-\+!$&\'\(\)*\+,;=_]|%[0-9a-f]{2})+:)*(?:[\w\.\-\+%!$&\'\(\)*\+,;=]|%[0-9a-f]{2})+@)?(?:[A-Za-z0-9_\-]+\.)(?:[A-Za-z0-9\-\._])+(?::\d+)?(?:[\/|\?](?:[\w#!:\.\?\+=&@$\'~*,;_\/\(\)\[\]\-]|%[0-9a-f]{2})*)?$/),
            message: "This field must be a valid URL"
        },
        ContainsUrl: {
            test: a.bind(/(https?:\/\/|www\.)/i),
            message: "This field contains a URL"
        },
        Html: {
            test: function() {
                return !a.apply(/<((?!\/?span|\/?h1|\/?h2|\/?h3|\/?h4|\/?h5|\/?h6|\/?a|\/?b|\/?ol|\/?ul|\/?li|\/?i|\/?u|\/?strong|\/?em(?!bed)|\/?p|\/?div|\/?br|\/?unb|\/?uni|\/?\s|\/?\>)[^\>]*\>)/i, arguments);
            },
            message: "This field must be properly formed HTML"
        },
        Twitter: {
            test: a.bind(/^[A-Za-z0-9_\-]{1,15}$/),
            message: "This field must be a valid twitter username (without the @ character)"
        },
        required: {
            test: a.bind(/.+/),
            message: "This field is required"
        },
        requireTrimmed: {
            test: function(e) {
                return "" !== e.trim();
            },
            message: "This field must not be blank"
        },
        length: {
            test: function(e, s) {
                var t = /\[(,?\d+(?:,\d+)?)\]/.exec(s);
                return e = String(e).replace(/[\s]+/g, " "), !!t && new RegExp("^.{" + t[1] + "}$").test(e);
            },
            message: function(e, s) {
                var t;
                return (t = /\[(\d+),(\d+)\]/.exec(s)) ? "Must be between " + t[1] + " and " + t[2] + " characters." : (t = /\[,(\d+)\]/.exec(s)) ? "Must be at most " + t[1] + " characters." : (t = /\[(\d+),\]/.exec(s)) ? "Must be at least " + t[1] + " characters." : (t = /\[(\d+)\]/.exec(s), 
                t ? "Must be exactly " + t[1] + " characters." : void 0);
            }
        }
    }, i = /(\w+)(.*)/;
    return t = function(e) {
        var t, a = i.exec(e);
        return a && (e = a[1], t = a[2]), !u[e] || !u[e].test || (a = u[e].test(this, t), 
        a || (s.message = "function" == typeof u[e].message ? u[e].message(this, t) : u[e].message), 
        a);
    }, s.tests = u, s;
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 1421:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(711) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, r) {
    "use strict";
    new r().render(e(".js-job-container"));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(7), __webpack_require__(3), __webpack_require__(18), __webpack_require__(4), __webpack_require__(37), __webpack_require__(17) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, i, r, n, e, o) {
    "use strict";
    function s(t) {
        return t.reduce(function(t, i) {
            var r = t[i.name];
            return t[i.name] = r ? [].concat(r, i.value) : i.value, t;
        }, {});
    }
    var h = function(t) {
        switch (t.which) {
          case 1:
          case 13:
          case 32:
            this.$form.submit();
        }
    }, c = function(i) {
        var r = new t(), n = r.thenable(), e = "function" == typeof this.commit ? this.commit.call(n, i) : this.commit;
        return r.resolve(e === n ? this.xhr(i) : e), this.trigger("commit"), r;
    }, u = n.extend({
        xhr: e,
        init: function(t) {
            if (!t) throw new Error("The context of the form cannot be empty");
            if (this.$form = t.is("form") ? t : t.find("form"), !this.$form.length) throw new Error("Unable to find form within context");
            this._normalizeSubmitter = h.bind(this), this.submit = this.submit.bind(this), Object.defineProperty(this, "handlers", {
                value: [ this._handleFormError.bind(this) ]
            });
        },
        destroy: function() {
            if (!this.$form) throw new Error("Cannot destroy null form");
            this._super(), this.$form = null;
        },
        reset: function() {
            return this.$form[0].reset(), this;
        },
        validator: function(t) {
            return !0;
        },
        commit: function(t) {
            return this;
        },
        _handleFormError: function(t) {
            if (!(t instanceof u.Error)) throw t;
            Object.keys(t).forEach(function(i) {
                var r = this.$form.find("[name=" + i + "], #" + i).first(), n = this;
                r.length && (r.one("input change", function t() {
                    r.off("input change", t), n.trigger("error:hide", r);
                }), this.trigger("error:show", r, t[i]));
            }, this);
        },
        _handleError: function(t) {
            return this.trigger("error", t), o.call(this.handlers, t).catch(o).finally(function() {
                delete this._cacheMeta;
            }.bind(this));
        },
        _findFormError: function(t) {
            if (!(t instanceof Object)) throw t;
            var i, r = this._cacheMeta || this.toJSON(), n = {};
            for (i in r.data) t.hasOwnProperty(i) && (n[i] = t[i]);
            if (Object.keys(n).length) throw new this.constructor.Error(n);
            throw t;
        },
        submit: function(t) {
            if (!this.$form) throw new Error("The form cannot be null");
            this.trigger("before", t);
            var i = this._submit(t);
            return i.catch(this._findFormError.bind(this)).then(this.trigger.bind(this, "success"), this._handleError.bind(this)).finally(this.trigger.bind(this, "after")), 
            i;
        },
        _submit: function(i) {
            var n, e, o, s = Array.isArray(this.validator) ? r.apply(null, this.validator.map(function(t) {
                return t.bind(this);
            }, this)) : this.validator.bind(this), h = new t();
            this._cacheMeta = n = this.toJSON();
            try {
                e = s(n.data);
            } catch (t) {
                e = !1, o = t;
            }
            return e = e !== !1, !i || e && "function" != typeof this.commit || i.preventDefault(), 
            e ? h.resolve(n) : h.reject(o), h.then(c.bind(this));
        },
        toJSON: function() {
            return {
                url: this.$form.attr("action"),
                type: this.$form.attr("method") || "POST",
                data: this.constructor.decompose(this.$form.serializeArray())
            };
        },
        _submitSelector: ".js-submit:not([type=submit])",
        bind: function() {
            return this.$form.on("click keydown", this._submitSelector, this._normalizeSubmitter).on("submit", this.submit), 
            this;
        },
        unbind: function() {
            return this.$form.off("click keydown", this._submitSelector, this._normalizeSubmitter).off("submit", this.submit), 
            this;
        }
    }, {
        decompose: s,
        Error: function(t) {
            i(this, t);
        }
    });
    return u;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(12) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, r) {
    "use strict";
    return {
        trimIfEmpty: function(t) {
            return Object.keys(t).forEach(function(r) {
                var e, i = t[r];
                "string" == typeof i && (e = i.trim(), t[r] = 0 === e.length ? e : i);
            }), t;
        },
        validateForm: function(e) {
            var i = this.$form.find("[data-validate]:not(:disabled)").toArray();
            if (this.errors = i.reduce(function(i, a) {
                var n = t(a), o = n.data("validate"), s = n.attr("name") || n.attr("id");
                return r(e[s], o) || (i[s] = r.message), i;
            }, {}), Object.keys(this.errors).length) throw this.errors;
            return e;
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(7) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    var r = [], n = function(n) {
        var t = new e();
        return t.reject(n), (this || r).reduce(function(e, r) {
            return e.catch(r);
        }, t);
    };
    return Object.defineProperty(n, "handlers", {
        value: r
    }), n;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(3), __webpack_require__(22), __webpack_require__(74), __webpack_require__(47), __webpack_require__(48) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(n, t, o, e, i, l) {
    "use strict";
    var r, u = {};
    return r = {
        init: function(t) {
            n(".js-action-follow", t).each(function() {
                var t = n(this), o = t.data("followee"), e = t.data("following"), l = t.data("entity");
                i.isLoggedIn() ? r._bindFollow(t, l, o, e) : r._bindSignupDialog(t);
            });
        },
        destroy: function() {
            u = {};
        },
        _bindFollow: function(n, t, o, e) {
            u[t] || (u[t] = {}), u[t][o] || (u[t][o] = r._create(t, o, e)), u[t][o].add(n);
        },
        _bindSignupDialog: function(n) {
            var t = n.data(), o = new l({
                id: t.followee,
                entity: t.entity,
                action: "follow"
            });
            o.setContext(n);
        },
        _create: function(n, t, o) {
            var i = new e(t, o, n);
            return this.listenTo(i, "following", function(o) {
                this.trigger("following", t, o, n);
            }).listenTo(i, "request", function(o) {
                this.trigger("request", t, o, n);
            }), "project" === n && this.listenTo(i, "request", this._updateUsersOnProjectFollow), 
            i;
        },
        _updateUsersOnProjectFollow: function(n) {
            n.then(function(n) {
                n.owner_ids.forEach(function(t) {
                    u.user[t] && u.user[t].setFollowing(n.following);
                });
            });
        }
    }, t(r, o), r;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(21), __webpack_require__(28), __webpack_require__(20), __webpack_require__(13), __webpack_require__(2), __webpack_require__(80) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, n, r, a, o) {
    "use strict";
    return e.extend({
        _readData: function() {
            var t = {
                project: this._readProject,
                user: this._readUser,
                team: this._readTeam,
                collection: this._readCollection,
                curated_category: this._readCuratedCategory,
                site: this._readSite
            };
            return t[this.data.entity].call(this);
        },
        _projectTransform: function(t, e) {
            return {
                title: e,
                img1x: t.covers[202],
                img2x: t.covers[404],
                imgWidth: 202,
                imgHeight: 158
            };
        },
        _profileTransform: function(t) {
            return {
                title: t.display_name,
                img1x: t.images[115],
                img2x: t.images[230],
                imgWidth: 115,
                imgHeight: 115
            };
        },
        _readProject: function() {
            return a({
                url: "/v2/projects/" + this.data.id
            }).then(function(t) {
                var e = t.project.owners, i = "follow" === this.data.action && e.length > 1 ? e[0].display_name + " and " + e[1].display_name : t.project.name;
                return this._projectTransform(t.project, i);
            }.bind(this));
        },
        _readUser: function() {
            return a({
                url: "/user/mini/" + this.data.id
            }).then(function(t) {
                return this._profileTransform(t.user);
            }.bind(this));
        },
        _readTeam: function() {
            return a({
                url: "/v2/teams/" + this.data.id
            }).then(function(t) {
                return this._profileTransform(t.team);
            }.bind(this));
        },
        _readCollection: function() {
            return a({
                url: "/v2/collections/" + this.data.id
            }).then(function(t) {
                var e = t.collection.title, i = t.collection.latest_projects.find(function(t) {
                    return 0 === t.mature_content;
                });
                return i ? this._projectTransform(i, e) : {
                    title: e
                };
            }.bind(this));
        },
        _readSite: function() {
            return a({
                url: "/v2/partners"
            }).then(function(t) {
                var e, i = this.data.id;
                return t.networks.concat(t.galleries).forEach(function(t) {
                    t.id === i && (e = t.name);
                }), {
                    title: e
                };
            }.bind(this));
        },
        _readCuratedCategory: function() {
            return a({
                url: "/v2/galleries/" + this.data.id
            }).then(function(t) {
                return this._projectTransform(t.entities[0], t.gallery.label);
            }.bind(this));
        },
        render: function(e) {
            return this._readData().then(function(e) {
                var i = this.data;
                r.info("onboarding", "Sign up popup displayed", {
                    action: i.action,
                    entity: i.entity
                }), e.destination = encodeURIComponent("/onboarding?" + t.param({
                    id: i.id,
                    entity: i.entity,
                    action: i.action,
                    title: e.title
                })), this._model.set(e);
            }.bind(this)).then(this._super.bind(this, e));
        }
    }, {
        VIEW_CLASS: {
            phone: i.extend(o),
            tablet: n.extend(o),
            desktop: n.extend(o)
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div ");if(t.s(t.f("instant_backfill",c,p,1),c,p,0,90,113,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("data-backfill=\"instant\"");});c.pop();}t.b(" class=\"");t.sub("classes",c,p,i);t.b(" js-action-follow follow-button-container");if(t.s(t.f("is_following",c,p,1),c,p,0,224,234,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" following");});c.pop();}t.b("\" data-followee=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-entity=\"");t.sub("type",c,p,i);t.b("\" ");if(t.s(t.f("is_following",c,p,1),c,p,0,326,347,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("data-following=\"true\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("  <a class=\"form-button js-form-button-follow form-button-follow ");t.sub("size",c,p,i);t.b(" form-button-default\">");t.sub("follow",c,p,i);t.b("</a>");t.b("\n" + i);t.b("  <a class=\"form-button form-button-following ");t.sub("size",c,p,i);t.b(" form-button-light-and-grey\">");t.sub("following",c,p,i);t.b("</a>");t.b("\n" + i);t.b("  <a class=\"form-button js-form-button-unfollow form-button-unfollow ");t.sub("size",c,p,i);t.b(" form-button-red\">");t.sub("unfollow",c,p,i);t.b("</a>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: { "classes": function(c,p,t,i) {},"type": function(c,p,t,i) {},"size": function(c,p,t,i) {},"follow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,496,516,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_follow|Follow");});c.pop();}t.b(t.v(t.f("follow_label_postfix",c,p,0)));},"following": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,691,717,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_following|Following");});c.pop();}t.b(t.v(t.f("follow_label_postfix",c,p,0)));},"unfollow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,906,930,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_unfollow|Unfollow");});c.pop();}t.b("&nbsp;");t.b(t.v(t.f("follow_label_postfix",c,p,0)));} }}, "{{! TODO: investigate removal of form-button-(un)follow(ing) }}\n<div {{#instant_backfill}}data-backfill=\"instant\"{{/instant_backfill}} class=\"{{$classes}}{{/classes}} js-action-follow follow-button-container{{#is_following}} following{{/is_following}}\" data-followee=\"{{id}}\" data-entity=\"{{$type}}{{/type}}\" {{#is_following}}data-following=\"true\"{{/is_following}}>\n  <a class=\"form-button js-form-button-follow form-button-follow {{$size}}{{/size}} form-button-default\">{{$follow}}{{#translate}}button_follow|Follow{{/translate}}{{follow_label_postfix}}{{/follow}}</a>\n  <a class=\"form-button form-button-following {{$size}}{{/size}} form-button-light-and-grey\">{{$following}}{{#translate}}button_following|Following{{/translate}}{{follow_label_postfix}}{{/following}}</a>\n  <a class=\"form-button js-form-button-unfollow form-button-unfollow {{$size}}{{/size}} form-button-red\">{{$unfollow}}{{#translate}}button_unfollow|Unfollow{{/translate}}&nbsp;{{follow_label_postfix}}{{/unfollow}}</a>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(jQuery);
}(function(t) {
    var e = 0, i = Array.prototype.slice;
    return t.cleanData = function(e) {
        return function(i) {
            var n, s, o;
            for (o = 0; null != (s = i[o]); o++) try {
                n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove");
            } catch (t) {}
            e(i);
        };
    }(t.cleanData), t.widget = function(e, i, n) {
        var s, o, r, a, u = {}, d = e.split(".")[0];
        return e = e.split(".")[1], s = d + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
            return !!t.data(e, s);
        }, t[d] = t[d] || {}, o = t[d][e], r = t[d][e] = function(t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new r(t, e);
        }, t.extend(r, o, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
            return t.isFunction(n) ? void (u[e] = function() {
                var t = function() {
                    return i.prototype[e].apply(this, arguments);
                }, s = function(t) {
                    return i.prototype[e].apply(this, t);
                };
                return function() {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, 
                    this._superApply = o, e;
                };
            }()) : void (u[e] = n);
        }), r.prototype = t.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix || e : e
        }, u, {
            constructor: r,
            namespace: d,
            widgetName: e,
            widgetFullName: s
        }), o ? (t.each(o._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, r, i._proto);
        }), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r), 
        r;
    }, t.widget.extend = function(e) {
        for (var n, s, o = i.call(arguments, 1), r = 0, a = o.length; r < a; r++) for (n in o[r]) s = o[r][n], 
        o[r].hasOwnProperty(n) && void 0 !== s && (t.isPlainObject(s) ? e[n] = t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], s) : t.widget.extend({}, s) : e[n] = s);
        return e;
    }, t.widget.bridge = function(e, n) {
        var s = n.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var r = "string" == typeof o, a = i.call(arguments, 1), u = this;
            return r ? this.each(function() {
                var i, n = t.data(this, s);
                return "instance" === o ? (u = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a), 
                i !== n && void 0 !== i ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'");
            }) : (a.length && (o = t.widget.extend.apply(null, [ o ].concat(a))), this.each(function() {
                var e = t.data(this, s);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new n(o, this));
            })), u;
        };
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(i, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), 
            this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy();
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), 
            this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function() {
            return this.element;
        },
        option: function(e, i) {
            var n, s, o, r = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (r = {}, n = e.split("."), e = n.shift(), n.length) {
                for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, 
                s = s[n[o]];
                if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                s[e] = i;
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                r[e] = i;
            }
            return this._setOptions(r), this;
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this;
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), 
            e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), 
            this;
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _on: function(e, i, n) {
            var s, o = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, 
            i = this.element, s = this.widget()), t.each(n, function(n, r) {
                function a() {
                    if (e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? o[r] : r).apply(o, arguments);
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                var u = n.match(/^([\w:-]*)\s*(.*)$/), d = u[1] + o.eventNamespace, h = u[2];
                h ? s.delegate(h, d, a) : i.bind(d, a);
            });
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), 
            this.hoverable = t(this.hoverable.not(e).get());
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments);
            }
            var n = this;
            return setTimeout(i, e || 0);
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(e, i, n) {
            var s, o, r = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
            i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [ i ].concat(n)) === !1 || i.isDefaultPrevented());
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            "string" == typeof s && (s = {
                effect: s
            });
            var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
            s = s || {}, "number" == typeof s && (s = {
                duration: s
            }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                t(this)[e](), o && o.call(n[0]), i();
            });
        };
    }), t.widget;
});

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_button": __webpack_require__(54).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(!t.s(t.f("is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<lib/_follow/_button0",c,p,""));};return t.fl(); },partials: {"<lib/_follow/_button0":{name:"lib/_follow/_button", partials: {}, subs: { "classes": function(c,p,t,i) {t.b("user-follow");},"type": function(c,p,t,i) {t.b("user");},"size": function(c,p,t,i) {t.b("form-button-small");} }}}, subs: {  }}, "{{^is_profile_owner}}\n  {{<lib/_follow/_button}}\n    {{$classes}}user-follow{{/classes}}\n    {{$type}}user{{/type}}\n    {{$size}}form-button-small{{/size}}\n  {{/lib/_follow/_button}}\n{{/is_profile_owner}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(53), __webpack_require__(2), __webpack_require__(104), __webpack_require__(99) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, n, t, i) {
    "use strict";
    function o(e) {
        o._cache = o._cache || {};
        var i, r;
        return (r = o._cache[e]) ? (i = new n(), i.resolve(r), i) : t({
            url: "/user/mini/" + e
        }).then(function(n) {
            return o._cache[e] = n, n;
        });
    }
    function r(n, t) {
        var o = new i(t);
        n.parents(".popup").length ? (t.within = e(window), t.bottom = null) : (t.within = a, 
        t.bottom = c), o.setContext(n), o.render(n), o._view.show();
    }
    function u(n, t, i) {
        n = n || e(document.body), a = t || e(window), c = i;
        var u, s, f;
        n.on("mouseenter", ".js-mini-profile", function() {
            var n = e(this);
            u = n.data("id"), clearTimeout(s), s = setTimeout(function() {
                n.addClass("wait"), f = o(u), f.then(function(e) {
                    n.removeClass("wait"), r(n, e);
                }, function() {
                    n.removeClass("wait");
                });
            }, l);
        }).on("mouseleave", ".js-mini-profile", function() {
            clearTimeout(s), f && (f.reject(), f = null);
        });
    }
    function s(n) {
        n = n || e(document.body), n.off("mouseenter mouseleave", ".js-mini-profile"), e.each(f, function(e, n) {
            n.destroy();
        });
    }
    var c, a, l = 500, f = {};
    return {
        init: u,
        destroy: s,
        loadUser: o
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 711:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(30), __webpack_require__(2), __webpack_require__(857) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, n, t) {
    "use strict";
    var r = e.extend({
        submit: function(e) {
            return n(e);
        }
    }, {
        VIEW_CLASS: t
    });
    return r;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(30), __webpack_require__(32), __webpack_require__(22), __webpack_require__(13), __webpack_require__(75), __webpack_require__(35), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, n, o, s, l, r) {
    "use strict";
    var u = e.extend({
        init: function(t, e, n) {
            this.views = [], this.type = n || "user", this._model = new i(t, {
                blocking: !1,
                following: e || !1
            }), this.listenTo(this._model, "all", this.trigger);
        },
        _initView: function(t) {
            var e = new s(t, this._model);
            return e._controller = this, e;
        },
        add: function(t) {
            if (t.data("befollow")) return this;
            var e = this._initView(t);
            return t.data("befollow", e), this.views.push(e), this;
        },
        setFollowing: function(t) {
            this._model.set("following", t);
        },
        follow: function(t) {
            function e() {
                n.set("blocking", !1);
            }
            if (!this._model.get("blocking")) {
                var i, n = this._model, o = this._model.get("following");
                return this._model.set("blocking", !0), i = this.constructor.send(this.type, this.id, !o, t).then(function(t) {
                    return n.set("following", !o), t.following = !o, t;
                }, function(t) {
                    var e;
                    429 === t.status && (t.responseJSON && t.responseJSON.messages && (e = t.responseJSON.messages.pop().message), 
                    s.rateLimitPopup(e));
                }), this.trigger("request", i), i.then(e, e), i;
            }
        },
        destroy: function() {
            this.views.forEach(function(t) {
                t.destroy();
            }), this.views = [], this._model.destroy(), this._model = null;
        }
    }, {
        sendBackfill: function(t, e) {
            return this.send(t, e, !0, {
                backfill: "instant"
            });
        },
        send: function(t, e, i, n) {
            return r({
                url: "/relations/" + t + "/" + e + l.getLocation("search"),
                type: i ? "POST" : "DELETE",
                data: n
            }).then(function(n) {
                return o.info("follow_click_tracker", i ? "Followed" : "Unfollowed", {
                    followee: e,
                    type: t
                }), n;
            });
        }
    }).mixin(n);
    return u;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(24), __webpack_require__(5), __webpack_require__(38) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, o, l, t) {
    "use strict";
    var e = o.extend({
        init: function(i, o) {
            this.$view = i, this._model = o, this.rendered();
        },
        destroy: function() {
            this._model.off(null, null, this);
        },
        rendered: function() {
            var o = this;
            this._model.on("following", function(o) {
                this.$view.toggleClass("following", o), this.$view.data("following", o), o && this.$view.addClass("following-hold").one("mouseleave", function() {
                    i(this).removeClass("following-hold");
                });
            }, this), this.$view.on("click", function(l) {
                l.stopPropagation();
                var t = i(this).data(), e = {
                    backfill: t.backfill
                };
                o._controller.follow(e);
            });
        }
    }, {
        rateLimitPopup: function(i) {
            var o = i ? i + "<br /><br />" : "";
            t({
                title: l.translate("following_limit", "Following Limit"),
                html: o + 'Please read about our <a href="https://help.behance.net/entries/48445480-Following-limits-on-Behance">following limits</a>.',
                buttons: []
            });
        }
    });
    return e;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(9) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    e.fn.changeInput = function(t, a, d) {
        var c = "object" == typeof d && "undefined" != typeof d.extra_event_args ? d.extra_event_args : [];
        return "undefined" != typeof t && e(this).each(function(d) {
            var s, i, n, l, o, r = e(this);
            if (r.is("input, button, textarea, select, optgroup, option") && (s = r.val(), "undefined" == typeof a || "val" !== t && "value" !== t || (r.data("uiSelectmenuold") || r.data("selectmenu") ? r.selectmenuold("value", a) : (r.val(a), 
            r.triggerHandler("change", c)))), r.is("input:not([type=hidden]), button, textarea, select, optgroup, option, .form-button")) {
                switch (i = this.disabled || r.attr("disabled"), o = !1, t) {
                  case "disable":
                    o = !0;
                    break;

                  case "enable":
                    o = !1;
                    break;

                  case "toggleDisabled":
                    o = "undefined" != typeof a ? Boolean(a) : !this.disabled;
                }
                o != i && (n = r.is("[type=submit], [type=button], button, .form-button, .form-submit") ? "disabled form-button-disabled" : "disabled", 
                o ? (r.addClass(n).trigger("disable", c).attr("disabled", !0), r.is("select") && r.next().addClass(n), 
                (r.data("uiSelectmenuold") || r.data("selectmenu")) && r.selectmenuold("disable")) : (r.removeClass(n).attr("disabled", !1).trigger("enable", c), 
                r.is("select") && r.next().removeClass(n), (r.data("uiSelectmenuold") || r.data("selectmenu")) && r.selectmenuold("enable")));
            }
            if (r.is("[type=checkbox], [type=radio]")) {
                switch (l = this.checked, t) {
                  case "check":
                    this.checked = !0;
                    break;

                  case "uncheck":
                    this.checked = !1;
                    break;

                  case "toggleChecked":
                    "undefined" != typeof a ? this.checked = Boolean(a) : this.checked = !this.checked;
                }
                this.checked != l && (r.triggerHandler("click", c), this.checked ? r.addClass("checked").attr("checked", !0).trigger("check", c) : r.removeClass("checked").attr("checked", !1).trigger("uncheck", c));
            }
        }), this;
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3), __webpack_require__(13), __webpack_require__(81) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, n, i) {
    "use strict";
    return {
        mustache: i,
        _signUp: function() {
            n.info("onboarding", "Sign up dialog click", {
                action: this._controller.data.action,
                entity: this._controller.data.entity
            });
        },
        events: {
            click: {
                ".js-adobeid-signup": "_signUp"
            }
        },
        templateData: function() {
            var n = t({
                classes: [ "popup--onboarding" ],
                displayAction: {}
            }, this._super());
            return n.displayAction[n.action] = !0, n;
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"onboarding-dialog__content\">");t.b("\n" + i);if(t.s(t.f("img1x",c,p,1),c,p,0,53,224,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"onboarding-dialog__image\">");t.b("\n" + i);t.b("      <img width=\"");t.b(t.v(t.f("imgWidth",c,p,0)));t.b("\" height=\"");t.b(t.v(t.f("imgHeight",c,p,0)));t.b("\" src=\"");t.b(t.v(t.f("img1x",c,p,0)));t.b("\" ");if(t.s(t.f("img2x",c,p,1),c,p,0,178,199,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("srcset=\"");t.b(t.v(t.f("img2x",c,p,0)));t.b(" 2x\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("  <div class=\"onboarding-dialog__copy\">");t.b("\n" + i);if(t.s(t.d("displayAction.collection",c,p,1),c,p,0,308,421,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,329,402,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_collection|Join Behance to add this project to a collection");});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.d("displayAction.follow",c,p,1),c,p,0,480,573,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,501,554,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_follow|Join Behance to follow ");t.b(t.v(t.f("title",c,p,0)));});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.d("displayAction.message",c,p,1),c,p,0,629,724,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,650,705,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_message|Join Behance to message ");t.b(t.v(t.f("title",c,p,0)));});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.d("displayAction.comment",c,p,1),c,p,0,781,882,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,802,863,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_comment|Join Behance to comment on this project");});c.pop();}t.b("\n" + i);});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("  <button class=\"form-button form-button-default form-button-xlarge js-adobeid-signup\" data-adobeid-signup-destination=\"");t.b(t.v(t.f("destination",c,p,0)));t.b("\" data-signup-from=\"Dialog_JoinBehance\">");if(t.s(t.f("translate",c,p,1),c,p,0,1107,1138,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_join|Join Behance");});c.pop();}t.b("</button>");t.b("\n" + i);t.b("  <div class=\"onboarding-dialog__link\">");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,1220,1306,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("signup_dialog_signin|Already a member? <a class=\"js-adobeid-signin\">Sign in &rarr;</a>");});c.pop();}t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"onboarding-dialog__content\">\n  {{#img1x}}\n    <div class=\"onboarding-dialog__image\">\n      <img width=\"{{imgWidth}}\" height=\"{{imgHeight}}\" src=\"{{img1x}}\" {{#img2x}}srcset=\"{{img2x}} 2x\"{{/img2x}}>\n    </div>\n  {{/img1x}}\n  <div class=\"onboarding-dialog__copy\">\n    {{#displayAction.collection}}\n      {{#translate}}signup_dialog_collection|Join Behance to add this project to a collection{{/translate}}\n    {{/displayAction.collection}}\n    {{#displayAction.follow}}\n      {{#translate}}signup_dialog_follow|Join Behance to follow {{title}}{{/translate}}\n    {{/displayAction.follow}}\n    {{#displayAction.message}}\n      {{#translate}}signup_dialog_message|Join Behance to message {{title}}{{/translate}}\n    {{/displayAction.message}}\n    {{#displayAction.comment}}\n      {{#translate}}signup_dialog_comment|Join Behance to comment on this project{{/translate}}\n    {{/displayAction.comment}}\n  </div>\n  <button class=\"form-button form-button-default form-button-xlarge js-adobeid-signup\" data-adobeid-signup-destination=\"{{destination}}\" data-signup-from=\"Dialog_JoinBehance\">{{#translate}}signup_dialog_join|Join Behance{{/translate}}</button>\n  <div class=\"onboarding-dialog__link\">\n    {{#translate}}signup_dialog_signin|Already a member? <a class=\"js-adobeid-signin\">Sign in &rarr;</a>{{/translate}}\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 857:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(10), __webpack_require__(23), __webpack_require__(2), __webpack_require__(24), __webpack_require__(19), __webpack_require__(31), __webpack_require__(25), __webpack_require__(11), __webpack_require__(41), __webpack_require__(5), __webpack_require__(117), __webpack_require__(66), __webpack_require__(291), __webpack_require__(38), __webpack_require__(976) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(i, t, e, n, o, s, a, r, l, c, d, h, p, b, m, u) {
    "use strict";
    var f, v = 250, _ = "Submitting Your Application...", j = 37, g = 39, y = i(document.body);
    return f = o.extend({
        events: {
            click: {
                ".js-apply-button": "_showApplyForm",
                ".js-back-to-post": "_hideApplyForm",
                ".js-submit-application": "_submitApplyForm"
            }
        },
        render: function(i) {
            this.$view = i, this.$view && this.rendered();
        },
        rendered: function() {
            this.$applyBtns = this.$view.find(".js-apply-button"), this.$form = this.$view.find(".js-job-apply"), 
            this.$description = this.$view.find(".js-job-description"), this.$location = this.$view.find(".js-location-widget"), 
            this.$submitBtn = this.$form.find(".js-submit-application"), this._bindKeyboardShortcuts(), 
            this._bindTeamAdminArchive(), p.init(), c.init(), this._initMoreToggle(), this._mapEvents();
        },
        _bindKeyboardShortcuts: function() {
            var i = y.find(".js-job-prev")[0], t = y.find(".js-job-next")[0];
            y.on("keyup", function(e) {
                var n = y.is(".is-applying");
                n || (e.which === j && i ? i.click() : e.which === g && t && t.click());
            });
        },
        _bindTeamAdminArchive: function() {
            var i = y.find(".js-team-archive");
            i.on("click", function(i) {
                i.preventDefault(), m({
                    title: d.translate("joblist_dialog_remove_post_from_team", "Remove This Post From Your Team Page"),
                    html: u({
                        team: t.team,
                        job: t.job,
                        creator: t.creator
                    }),
                    classes: [ "team-admin-archive" ],
                    buttons: [ {
                        label: d.translate("joblist_dialog_button_remove_post", "Remove Post"),
                        classes: [ "form-button-default", "js-confirm" ]
                    }, {
                        label: d.translate("joblist_dialog_button_cancel", "Cancel"),
                        classes: [ "form-button-cancel", "js-cancel" ]
                    } ]
                }).then(function() {
                    return n({
                        url: e.JOBS_URL + "/" + t.job.id,
                        type: "PATCH",
                        data: {
                            archive: 1
                        }
                    });
                }).then(function() {
                    window.location.href = e.JOBLIST_URL;
                });
            });
        },
        _initMoreToggle: function() {
            h(y.find(".variable-text-short"), {
                speed: 0
            });
        },
        _submitApplyForm: function() {
            r.hide(this.$submitBtn, _), this._controller.submit({
                url: e.APPLY_URL.replace("%d", t.job.id),
                type: "POST"
            }).then(function() {
                this._hideApplyForm(), this.$submitBtn.remove(), this.$view.addClass("has-applied");
            }.bind(this), function(i) {
                var t = a.error(i);
                t && t.messages && s(this.$form, t.messages);
            }.bind(this));
        },
        _hideApplyForm: function(i) {
            i && i.preventDefault(), y.animate({
                scrollTop: 0
            }, function() {
                this.$form.fadeOut(v, function() {
                    y.removeClass("is-applying"), this.$description.removeClass("hide").hide().fadeIn(v);
                }.bind(this));
            }.bind(this));
        },
        _showApplyForm: function(i) {
            i && i.preventDefault(), y.animate({
                scrollTop: 0
            }, function() {
                this.$description.fadeOut(v, function() {
                    y.addClass("is-applying"), this.$form.removeClass("hide").hide().fadeIn(v);
                }.bind(this));
            }.bind(this));
        }
    }).mixin(b);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    function t(t) {
        if (t.length) for (var i, s, n = e(t[0]); n.length && n[0] !== document; ) {
            if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), 
            !isNaN(s) && 0 !== s)) return s;
            n = n.parent();
        }
        return 0;
    }
    e.widget("ui.selectmenuold", {
        options: {
            transferClasses: !0,
            appendTo: "body",
            typeAhead: 1e3,
            style: "dropdown",
            positionOptions: {
                my: "left top",
                at: "left bottom",
                offset: null
            },
            width: null,
            menuWidth: null,
            handleWidth: 26,
            maxHeight: null,
            icons: null,
            format: null,
            escapeHtml: !1,
            bgImage: function() {}
        },
        _create: function() {
            var t = this, i = this.options, s = (this.element.attr("id") || "ui-selectmenu-" + Math.random().toString(16).slice(2, 10)).replace(/(:|\.)/g, "");
            this.ids = [ s, s + "-button", s + "-menu" ], this._safemouseup = !0, this.isOpen = !1, 
            this.newelement = e("<a />", {
                class: "ui-selectmenu ui-widget ui-state-default ui-corner-all",
                id: this.ids[1],
                role: "button",
                href: "#nogo",
                tabindex: this.element.attr("disabled") ? 1 : 0,
                "aria-haspopup": !0,
                "aria-owns": this.ids[2]
            }), this.newelement.insertAfter(this.element);
            var n = this.element.attr("tabindex");
            n && this.newelement.attr("tabindex", n), this.newelement.data("selectelement", this.element), 
            this.selectmenuIcon = e('<span class="ui-selectmenu-icon ui-icon"></span>').prependTo(this.newelement), 
            this.newelement.prepend('<span class="ui-selectmenu-status" />'), this.element.bind({
                "click.selectmenu": function(e) {
                    t.newelement.focus(), e.preventDefault();
                }
            }), this.newelement.bind("mousedown.selectmenu", function(e) {
                return t._toggle(e, !0), "popup" == i.style && (t._safemouseup = !1, setTimeout(function() {
                    t._safemouseup = !0;
                }, 300)), !1;
            }).bind("click.selectmenu", function() {
                return !1;
            }).bind("keydown.selectmenu", function(i) {
                var s = !1;
                switch (i.keyCode) {
                  case e.ui.keyCode.ENTER:
                    s = !0;
                    break;

                  case e.ui.keyCode.SPACE:
                    t._toggle(i);
                    break;

                  case e.ui.keyCode.UP:
                    i.altKey ? t.open(i) : t._moveSelection(-1);
                    break;

                  case e.ui.keyCode.DOWN:
                    i.altKey ? t.open(i) : t._moveSelection(1);
                    break;

                  case e.ui.keyCode.LEFT:
                    t._moveSelection(-1);
                    break;

                  case e.ui.keyCode.RIGHT:
                    t._moveSelection(1);
                    break;

                  case e.ui.keyCode.TAB:
                    s = !0;
                    break;

                  case e.ui.keyCode.PAGE_UP:
                  case e.ui.keyCode.HOME:
                    t.index(0);
                    break;

                  case e.ui.keyCode.PAGE_DOWN:
                  case e.ui.keyCode.END:
                    t.index(t._optionLis.length);
                    break;

                  default:
                    s = !0;
                }
                return s;
            }).bind("keypress.selectmenu", function(e) {
                return e.which > 0 && t._typeAhead(e.which, "mouseup"), !0;
            }).bind("mouseover.selectmenu", function() {
                i.disabled || e(this).addClass("ui-selectmenu-hover ui-state-hover");
            }).bind("mouseout.selectmenu", function() {
                i.disabled || e(this).removeClass("ui-selectmenu-hover ui-state-hover");
            }).bind("focus.selectmenu", function() {
                i.disabled || e(this).addClass("ui-selectmenu-focus ui-state-focus");
            }).bind("blur.selectmenu", function() {
                i.disabled || e(this).removeClass("ui-selectmenu-focus ui-state-focus");
            }), e(document).bind("mousedown.selectmenu-" + this.ids[0], function(e) {
                t.isOpen && t.close(e);
            }), this.element.bind("click.selectmenu", function() {
                t._refreshValue();
            }).bind("focus.selectmenu", function() {
                t.newelement && t.newelement[0].focus();
            }), i.width || (i.width = this.element.outerWidth()), this.newelement.width(i.width), 
            this.element.hide(), this.list = e("<ul />", {
                class: "ui-selectmenu-menu ui-widget ui-widget-content",
                "aria-hidden": !0,
                role: "listbox",
                "aria-labelledby": this.ids[1],
                id: this.ids[2]
            }).appendTo(i.appendTo), this.list.bind("keydown.selectmenu", function(i) {
                var s = !1;
                switch (i.keyCode) {
                  case e.ui.keyCode.UP:
                    i.altKey ? t.close(i, !0) : t._moveFocus(-1);
                    break;

                  case e.ui.keyCode.DOWN:
                    i.altKey ? t.close(i, !0) : t._moveFocus(1);
                    break;

                  case e.ui.keyCode.LEFT:
                    t._moveFocus(-1);
                    break;

                  case e.ui.keyCode.RIGHT:
                    t._moveFocus(1);
                    break;

                  case e.ui.keyCode.HOME:
                    t._moveFocus(":first");
                    break;

                  case e.ui.keyCode.PAGE_UP:
                    t._scrollPage("up");
                    break;

                  case e.ui.keyCode.PAGE_DOWN:
                    t._scrollPage("down");
                    break;

                  case e.ui.keyCode.END:
                    t._moveFocus(":last");
                    break;

                  case e.ui.keyCode.ENTER:
                  case e.ui.keyCode.SPACE:
                    t.close(i, !0), e(i.target).parents("li:eq(0)").trigger("mouseup");
                    break;

                  case e.ui.keyCode.TAB:
                    s = !0, t.close(i, !0), e(i.target).parents("li:eq(0)").trigger("mouseup");
                    break;

                  case e.ui.keyCode.ESCAPE:
                    t.close(i, !0);
                    break;

                  default:
                    s = !0;
                }
                return s;
            }).bind("keypress.selectmenu", function(e) {
                return e.which > 0 && t._typeAhead(e.which, "focus"), !0;
            }), this.list.bind("mousedown.selectmenu mouseup.selectmenu", !1), e(window).bind("resize.selectmenu-" + this.ids[0], e.proxy(t.close, this)), 
            this.refreshPosition = e.proxy(t._refreshPosition, this);
        },
        _init: function() {
            var t = this, i = this.options, s = [];
            this.element.find("option").each(function() {
                var n = e(this);
                s.push({
                    value: n.attr("value"),
                    text: t._formatText(n.text(), n),
                    selected: n.prop("selected"),
                    disabled: n.attr("disabled"),
                    classes: n.attr("class"),
                    typeahead: n.attr("typeahead"),
                    parentOptGroup: n.parent("optgroup"),
                    bgImage: i.bgImage.call(n)
                });
            });
            var n = "popup" == t.options.style ? " ui-state-active" : "";
            if (this.list.html(""), s.length) for (var a = 0; a < s.length; a++) {
                var o = {
                    role: "presentation"
                };
                s[a].disabled && (o.class = this.namespace + "-state-disabled");
                var l = {
                    html: s[a].text || "&nbsp;",
                    href: "#nogo",
                    tabindex: -1,
                    role: "option",
                    "aria-selected": !1
                };
                s[a].disabled && (l["aria-disabled"] = s[a].disabled), s[a].typeahead && (l.typeahead = s[a].typeahead);
                var d = e("<a/>", l).bind("focus.selectmenu", function() {
                    e(this).parent().mouseover();
                }).bind("blur.selectmenu", function() {
                    e(this).parent().mouseout();
                }), u = e("<li/>", o).append(d).data("index", a).addClass(s[a].classes).data("optionClasses", s[a].classes || "").bind("mouseup.selectmenu", function(i) {
                    return !t._safemouseup || t._disabled(i.currentTarget) || t._disabled(e(i.currentTarget).parents("ul>li.ui-selectmenu-group ")) || (t.index(e(this).data("index")), 
                    t.select(i), t.close(i, !0)), !1;
                }).bind("click.selectmenu", function() {
                    return !1;
                }).bind("mouseover.selectmenu", function() {
                    e(this).hasClass(t.namespace + "-state-disabled") || e(this).parent("ul").parent("li").hasClass(t.namespace + "-state-disabled") || (t._selectedOptionLi().addClass(n), 
                    t._focusedOptionLi().removeClass("ui-selectmenu-item-focus ui-state-hover"), e(this).removeClass("ui-state-active").addClass("ui-selectmenu-item-focus ui-state-hover"));
                }).bind("mouseout.selectmenu", function() {
                    e(this).is(t._selectedOptionLi()) && e(this).addClass(n), e(this).removeClass("ui-selectmenu-item-focus ui-state-hover");
                });
                if (s[a].parentOptGroup.length) {
                    var r = "ui-selectmenu-group-" + this.element.find("optgroup").index(s[a].parentOptGroup);
                    this.list.find("li." + r).length ? this.list.find("li." + r + ":last ul").append(u) : e(' <li role="presentation" class="ui-selectmenu-group ' + r + (s[a].parentOptGroup.attr("disabled") ? " " + this.namespace + '-state-disabled" aria-disabled="true"' : '"') + '><span class="ui-selectmenu-group-label">' + s[a].parentOptGroup.attr("label") + "</span><ul></ul></li> ").appendTo(this.list).find("ul").append(u);
                } else u.appendTo(this.list);
                if (i.icons) for (var c in i.icons) if (u.is(i.icons[c].find)) {
                    u.data("optionClasses", s[a].classes + " ui-selectmenu-hasIcon").addClass("ui-selectmenu-hasIcon");
                    var h = i.icons[c].icon || "";
                    u.find("a:eq(0)").prepend('<span class="ui-selectmenu-item-icon ui-icon ' + h + '"></span>'), 
                    s[a].bgImage && u.find("span").css("background-image", s[a].bgImage);
                }
            } else e('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list);
            var p = "dropdown" == i.style;
            if (this.newelement.toggleClass("ui-selectmenu-dropdown", p).toggleClass("ui-selectmenu-popup", !p), 
            this.list.toggleClass("ui-selectmenu-menu-dropdown ui-corner-bottom", p).toggleClass("ui-selectmenu-menu-popup ui-corner-all", !p).find("li:first").toggleClass("ui-corner-top", !p).end().find("li:last").addClass("ui-corner-bottom"), 
            this.selectmenuIcon.toggleClass("ui-icon-triangle-1-s", p).toggleClass("ui-icon-triangle-2-n-s", !p), 
            i.transferClasses) {
                var m = this.element.attr("class") || "";
                this.newelement.add(this.list).addClass(m);
            }
            this._computeWidth(), this.list.css("height", "auto");
            var f = this.list.height(), _ = e(window).height(), b = i.maxHeight ? Math.min(i.maxHeight, _) : _ / 3;
            f > b && this.list.height(b), this._optionLis = this.list.find("li:not(.ui-selectmenu-group)"), 
            this.element.attr("disabled") ? this.disable() : this.enable(), this._refreshValue(), 
            this._selectedOptionLi().addClass("ui-selectmenu-item-focus"), clearTimeout(this.refreshTimeout), 
            this.refreshTimeout = window.setTimeout(function() {
                t._refreshPosition();
            }, 200);
        },
        _computeWidth: function() {
            var e = this.options, t = this.newelement.width();
            "dropdown" === e.style ? this.list.width(e.menuWidth || t) : this.list.width(e.menuWidth || t - e.handleWidth);
        },
        destroy: function() {
            this.element.removeData(this.widgetName).removeClass("ui-selectmenu-disabled " + this.namespace + "-state-disabled").removeAttr("aria-disabled").unbind(".selectmenu"), 
            e(window).unbind(".selectmenu-" + this.ids[0]), e(document).unbind(".selectmenu-" + this.ids[0]), 
            this.newelement.remove(), this.list.remove(), this.element.unbind(".selectmenu").show(), 
            e.Widget.prototype.destroy.apply(this, arguments);
        },
        _typeAhead: function(e, t) {
            var i = this, s = String.fromCharCode(e).toLowerCase(), n = null, a = null;
            i._typeAhead_timer && (window.clearTimeout(i._typeAhead_timer), i._typeAhead_timer = void 0), 
            i._typeAhead_chars = (void 0 === i._typeAhead_chars ? "" : i._typeAhead_chars).concat(s), 
            i._typeAhead_chars.length < 2 || i._typeAhead_chars.substr(-2, 1) === s && i._typeAhead_cycling ? (i._typeAhead_cycling = !0, 
            n = s) : (i._typeAhead_cycling = !1, n = i._typeAhead_chars);
            for (var o = ("focus" !== t ? this._selectedOptionLi().data("index") : this._focusedOptionLi().data("index")) || 0, l = 0; l < this._optionLis.length; l++) {
                var d = this._optionLis.eq(l).text().substr(0, n.length).toLowerCase();
                if (d === n) if (i._typeAhead_cycling) {
                    if (null === a && (a = l), l > o) {
                        a = l;
                        break;
                    }
                } else a = l;
            }
            null !== a && this._optionLis.eq(a).find("a").trigger(t), i._typeAhead_timer = window.setTimeout(function() {
                i._typeAhead_timer = void 0, i._typeAhead_chars = void 0, i._typeAhead_cycling = void 0;
            }, i.options.typeAhead);
        },
        _uiHash: function() {
            var t = this.index();
            return {
                index: t,
                option: e("option", this.element).get(t),
                value: this.element[0].value
            };
        },
        open: function(t) {
            var i = this, s = this.options;
            if ("true" != i.newelement.attr("aria-disabled")) {
                i._closeOthers(t), i.newelement.addClass("ui-state-active"), i.list.attr("aria-hidden", !1), 
                i.list.addClass("ui-selectmenu-open");
                var n = this._selectedOptionLi();
                "dropdown" == s.style ? i.newelement.removeClass("ui-corner-all").addClass("ui-corner-top") : this.list.css("left", -5e3).scrollTop(this.list.scrollTop() + n.position().top - this.list.outerHeight() / 2 + n.outerHeight() / 2).css("left", "auto"), 
                i._refreshPosition(), i._computeWidth();
                var a = n.find("a");
                a.length && a[0].focus(), i.isOpen = !0, i._trigger("open", t, i._uiHash()), e(window).on("resize.selectmenu scroll.selectmenu", this.refreshPosition);
            }
        },
        close: function(t, i) {
            this.newelement.is(".ui-state-active") && (this.newelement.removeClass("ui-state-active"), 
            this.list.removeClass("ui-selectmenu-open"), this.list.attr("aria-hidden", !0), 
            "dropdown" == this.options.style && this.newelement.removeClass("ui-corner-top").addClass("ui-corner-all"), 
            i && this.newelement.focus(), this.isOpen = !1, this._trigger("close", t, this._uiHash()), 
            e(window).off("resize.selectmenu scroll.selectmenu", this.refreshPosition));
        },
        change: function(e) {
            this.element.trigger("change"), this._trigger("change", e, this._uiHash());
        },
        select: function(e) {
            return !this._disabled(e.currentTarget) && void this._trigger("select", e, this._uiHash());
        },
        widget: function() {
            return this.list.add(this.newelement);
        },
        _closeOthers: function(t) {
            e(".ui-selectmenu.ui-state-active").not(this.newelement).each(function() {
                e(this).data("selectelement").selectmenuold("close", t);
            }), e(".ui-selectmenu.ui-state-hover").trigger("mouseout");
        },
        _toggle: function(e, t) {
            this.isOpen ? this.close(e, t) : this.open(e);
        },
        _formatText: function(t, i) {
            return this.options.format ? t = this.options.format(t, i) : this.options.escapeHtml && (t = e("<div />").text(t).html()), 
            t;
        },
        _selectedIndex: function() {
            return this.element[0].selectedIndex;
        },
        _selectedOptionLi: function() {
            return this._optionLis.eq(this._selectedIndex());
        },
        _focusedOptionLi: function() {
            var e = this.list.find("a:focus").closest("li");
            return e.length || (e = this.list.find(".ui-selectmenu-item-focus")), e;
        },
        _moveSelection: function(e, t) {
            if (!this.options.disabled) {
                var i = parseInt(this._selectedOptionLi().data("index") || 0, 10), s = i + e;
                if (s < 0 && (s = 0), s > this._optionLis.size() - 1 && (s = this._optionLis.size() - 1), 
                s === t) return !1;
                this._optionLis.eq(s).hasClass(this.namespace + "-state-disabled") ? (e > 0 ? ++e : --e, 
                this._moveSelection(e, s)) : this._optionLis.eq(s).trigger("mouseover").trigger("mouseup");
            }
        },
        _moveFocus: function(e, t) {
            if (isNaN(e)) var i = parseInt(this._optionLis.filter(e).data("index"), 10); else var s = parseInt(this._focusedOptionLi().data("index") || 0, 10), i = s + e;
            if (i < 0 && (i = 0), i > this._optionLis.size() - 1 && (i = this._optionLis.size() - 1), 
            i === t) return !1;
            var n = "ui-selectmenu-item-" + Math.round(1e3 * Math.random());
            this._focusedOptionLi().find("a:eq(0)").attr("id", ""), this._optionLis.eq(i).hasClass(this.namespace + "-state-disabled") ? (e > 0 ? ++e : --e, 
            this._moveFocus(e, i)) : this._optionLis.eq(i).find("a:eq(0)").attr("id", n).focus(), 
            this.list.attr("aria-activedescendant", n);
        },
        _scrollPage: function(e) {
            var t = Math.floor(this.list.outerHeight() / this._optionLis.first().outerHeight());
            t = "up" == e ? -t : t, this._moveFocus(t);
        },
        _setOption: function(e, t) {
            this.options[e] = t, "disabled" == e && (t && this.close(), this.element.add(this.newelement).add(this.list)[t ? "addClass" : "removeClass"]("ui-selectmenu-disabled " + this.namespace + "-state-disabled").attr("aria-disabled", t));
        },
        disable: function(e, t) {
            "undefined" == typeof e ? this._setOption("disabled", !0) : "optgroup" == t ? this._disableOptgroup(e) : this._disableOption(e);
        },
        enable: function(e, t) {
            "undefined" == typeof e ? this._setOption("disabled", !1) : "optgroup" == t ? this._enableOptgroup(e) : this._enableOption(e);
        },
        _disabled: function(t) {
            return e(t).hasClass(this.namespace + "-state-disabled");
        },
        _disableOption: function(e) {
            var t = this._optionLis.eq(e);
            t && (t.addClass(this.namespace + "-state-disabled").find("a").attr("aria-disabled", !0), 
            this.element.find("option").eq(e).attr("disabled", "disabled"));
        },
        _enableOption: function(e) {
            var t = this._optionLis.eq(e);
            t && (t.removeClass(this.namespace + "-state-disabled").find("a").attr("aria-disabled", !1), 
            this.element.find("option").eq(e).removeAttr("disabled"));
        },
        _disableOptgroup: function(e) {
            var t = this.list.find("li.ui-selectmenu-group-" + e);
            t && (t.addClass(this.namespace + "-state-disabled").attr("aria-disabled", !0), 
            this.element.find("optgroup").eq(e).attr("disabled", "disabled"));
        },
        _enableOptgroup: function(e) {
            var t = this.list.find("li.ui-selectmenu-group-" + e);
            t && (t.removeClass(this.namespace + "-state-disabled").attr("aria-disabled", !1), 
            this.element.find("optgroup").eq(e).removeAttr("disabled"));
        },
        index: function(t) {
            return arguments.length ? !this._disabled(e(this._optionLis[t])) && t != this._selectedIndex() && (this.element[0].selectedIndex = t, 
            this._refreshValue(), this.change(), void 0) : this._selectedIndex();
        },
        getList: function() {
            return this.list;
        },
        getNewElement: function() {
            return this.newelement;
        },
        value: function(e) {
            return arguments.length ? void (e != this.element[0].value && (this.element[0].value = e, 
            this._refreshValue(), this.change())) : this.element[0].value;
        },
        _refreshValue: function() {
            var e = "popup" == this.options.style ? " ui-state-active" : "", t = "ui-selectmenu-item-" + Math.round(1e3 * Math.random());
            this._focusedOptionLi().removeClass("ui-selectmenu-item-focus"), this.list.find(".ui-selectmenu-item-selected").removeClass("ui-selectmenu-item-selected" + e).find("a").attr("aria-selected", "false").attr("id", ""), 
            this._selectedOptionLi().addClass("ui-selectmenu-item-selected" + e).find("a").attr("aria-selected", "true").attr("id", t);
            var i = this.newelement.data("optionClasses") ? this.newelement.data("optionClasses") : "", s = this._selectedOptionLi().data("optionClasses") ? this._selectedOptionLi().data("optionClasses") : "";
            this.newelement.removeClass(i).data("optionClasses", s).addClass(s).find(".ui-selectmenu-status").html(this._selectedOptionLi().find("a:eq(0)").html()), 
            this.list.attr("aria-activedescendant", t);
        },
        _refreshPosition: function() {
            var e = this.options;
            if ("popup" == e.style && !e.positionOptions.offset) var i = this._selectedOptionLi(), s = "0 " + (this.list.offset().top - i.offset().top - (this.newelement.outerHeight() + i.outerHeight()) / 2);
            this.list.css("zIndex", t(this.element) + 1).position({
                of: e.positionOptions.of || this.newelement,
                my: e.positionOptions.my,
                at: e.positionOptions.at,
                offset: e.positionOptions.offset || s,
                collision: e.positionOptions.collision || ("popup" == e.style ? "fit" : "flip")
            });
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)();
// imports


// module
exports.push([module.i, ".popup.mini-profile:before {\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  box-shadow: -2px -2px 4px -2px rgba(0, 0, 0, 0.4);\n  content: '';\n  position: absolute;\n  z-index: -1;\n}\n.popup.mini-profile.top-right:before, .popup.mini-profile.top-left:before {\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n  top: -8px;\n}\n.popup.mini-profile.bottom-right:before, .popup.mini-profile.bottom-left:before {\n  -webkit-transform: rotate(-134deg);\n  -moz-transform: rotate(-134deg);\n  -ms-transform: rotate(-134deg);\n  -o-transform: rotate(-134deg);\n  transform: rotate(-134deg);\n  bottom: -8px;\n}\n.popup.mini-profile.top-right:before, .popup.mini-profile.bottom-right:before {\n  right: 45px;\n}\n.popup.mini-profile.top-left:before, .popup.mini-profile.bottom-left:before {\n  left: 45px;\n}\n\n.mini-profile-wrap {\n  width: 331px;\n}\n.mini-profile-wrap .gallery-projects-wrap {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  padding: 4px 3px 4px 1px;\n  position: relative;\n  text-decoration: none;\n  width: 361px;\n}\n.mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay {\n  background: #0088f5;\n  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 156, 252, 0.75)), to(rgba(0, 116, 238, 0.75)));\n  background: -webkit-linear-gradient(0% 0%, 0% 100%, from(rgba(0, 156, 252, 0.75)), to(rgba(0, 116, 238, 0.75)));\n  background: -moz-linear-gradient(center top, rgba(0, 156, 252, 0.75), rgba(0, 116, 238, 0.75));\n  background: linear-gradient(rgba(0, 156, 252, 0.75), rgba(0, 116, 238, 0.75));\n  -webkit-transition: opacity 0.15s ease-in;\n  transition: opacity 0.15s ease-in;\n  border: 1px solid #356bca;\n  border-radius: 4px;\n  bottom: 0;\n  color: #fff;\n  font-size: 16px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  text-decoration: none !important;\n  text-shadow: 1px 2px 0 #0a4fb9;\n  text-transform: uppercase;\n  top: 0;\n}\n.ie .mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay {\n  display: none;\n  font-weight: bold;\n}\n.mini-profile-wrap .gallery-projects-wrap:hover .gallery-cover-overlay {\n  opacity: 1;\n}\n.ie .mini-profile-wrap .gallery-projects-wrap:hover .gallery-cover-overlay {\n  background: rgba(0, 156, 252, 0.75);\n  display: block;\n}\n.mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay-text {\n  -ms-transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  position: absolute;\n  top: 50%;\n  width: 100%;\n}\n.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  background: #f3f3f3;\n  border-left: 3px solid #fff;\n  float: left;\n  height: 90px;\n  overflow: hidden;\n  width: 33.3%;\n}\n.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap .project-cover {\n  border-radius: 0;\n  box-shadow: none;\n  margin: 0;\n  vertical-align: top;\n  visibility: visible;\n  width: 100%;\n}\n.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap.empty .project-cover {\n  display: none;\n}\n.mini-profile-wrap .gallery-projects-wrap-4 {\n  width: 479px;\n}\n.mini-profile-wrap .gallery-projects-wrap-4 .project-cover-wrap {\n  width: 25%;\n}\n.mini-profile-wrap .gallery-projects-wrap-4 .project-cover-wrap:nth-child(n+5) {\n  display: none;\n}\n.mini-profile-wrap .gallery-projects-wrap-2 {\n  width: 242px;\n}\n.mini-profile-wrap .gallery-projects-wrap-2 .project-cover-wrap {\n  width: 50%;\n}\n.mini-profile-wrap .gallery-projects-wrap-2 .project-cover-wrap:nth-child(n+3) {\n  display: none;\n}\n.mini-profile-wrap .user-image-wrap,\n.mini-profile-wrap .user-image {\n  width: 35px;\n  height: 35px;\n}\n.mini-profile-wrap .user-image-wrap {\n  background: #f3f3f3;\n  display: block;\n  float: left;\n  margin: 0 10px 0 0;\n  padding: 0;\n}\n.mini-profile-wrap .user-info {\n  display: inline-block;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.mini-profile-wrap .user-name {\n  color: #3c3c3c;\n  display: block;\n  font-size: 14px;\n  padding-bottom: 3px;\n}\n.mini-profile-wrap .location-link {\n  color: #6f6f6f;\n  font-size: 13px;\n}\n.mini-profile-wrap .location-link:before {\n  margin-right: 3px;\n}\n.mini-profile-wrap .follow-button-container {\n  float: right;\n  width: auto !important;\n}\n.mini-profile-wrap .gallery-projects-wrap {\n  float: left;\n  margin: 0 0 10px;\n  width: 331px;\n}\n.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap {\n  display: block !important;\n  height: 82px;\n  width: 108px;\n}\n.mini-profile-wrap .user-stats-followed {\n  float: inherit;\n}\n.mini-profile-wrap .user-info-container {\n  display: inline-block;\n}\n.mini-profile-wrap .stats-wrap {\n  color: #adadad;\n  font-size: 13px;\n  font-weight: bold;\n  margin-bottom: -2px;\n}\n.mini-profile-wrap .cover-stat {\n  margin-right: 10px;\n}\n.mini-profile-wrap .cover-stat:before {\n  margin-right: 2px;\n}\n\n\n", ""]);

// exports


/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_buttonUserSmall": __webpack_require__(60).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("user",c,p,1),c,p,0,9,1814,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"mini-profile-wrap hide-phone hide-tablet cfix\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"user-info-container cfix\">");t.b("\n" + i);t.b("    <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"user-image-wrap user-image-link\">");t.b("\n" + i);t.b("      <img src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" class=\"user-image\">");t.b("\n" + i);t.b("    </a>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"user-info\">");t.b("\n" + i);t.b("      <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"user-name\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("      <a target=\"_blank\" href=\"");t.b(t.v(t.f("location_link",c,p,0)));t.b("\" class=\"location-link beicons-pre beicons-pre-location\">");if(t.s(t.f("city",c,p,1),c,p,0,474,484,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("city",c,p,0)));t.b(", ");});c.pop();}if(t.s(t.f("state",c,p,1),c,p,0,503,514,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("state",c,p,0)));t.b(", ");});c.pop();}if(t.s(t.f("country",c,p,1),c,p,0,536,547,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("country",c,p,0)));});c.pop();}t.b("</a>");t.b("\n" + i);t.b("    </div> <!-- .user-info -->");t.b("\n" + i);t.b("  </div> <!-- .user-info-container -->");t.b("\n");t.b("\n" + i);t.b(t.rp("<lib/_follow/_buttonUserSmall0",c,p,"  "));t.b("\n" + i);if(t.s(t.f("has_latest_projects",c,p,1),c,p,0,698,1327,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"cfix user-view-link gallery-projects-wrap\">");t.b("\n" + i);t.b("      <ul class=\"project-cover-container\">");t.b("\n" + i);if(t.s(t.f("latest_projects",c,p,1),c,p,0,855,1003,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li class=\"project-cover-wrap\">");t.b("\n" + i);t.b("          ");if(t.s(t.d("covers.115",c,p,1),c,p,0,921,969,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<img src=\"");t.b(t.v(t.d("covers.115",c,p,0)));t.b("\" class=\"project-cover\">");});c.pop();}t.b("\n" + i);t.b("        </li>");t.b("\n" + i);});c.pop();}t.b("      </ul> <!-- .project-cover-container -->");t.b("\n" + i);t.b("      <span class=\"gallery-cover-overlay\">");t.b("\n" + i);t.b("        <div class=\"gallery-cover-overlay-text\">");if(t.s(t.f("translate",c,p,1),c,p,0,1175,1211,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("user_cover_view_profile|View Profile");});c.pop();}t.b("&nbsp;<span class=\"rarr\">&rarr;</span></div>");t.b("\n" + i);t.b("      </span>");t.b("\n" + i);t.b("    </a> <!-- .gallery-projects-wrap -->");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("stats",c,p,1),c,p,0,1365,1768,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"stats-wrap\">");t.b("\n");t.b("\n" + i);t.b("    <span class=\"cover-stat beicons-pre beicons-pre-eye cover-stat-views\">");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("views",c,p,0)));t.b("\n" + i);t.b("    </span>");t.b("\n");t.b("\n" + i);t.b("    <span class=\"cover-stat beicons-pre beicons-pre-thumb cover-stat-appreciations\">");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("appreciations",c,p,0)));t.b("\n" + i);t.b("    </span>");t.b("\n");t.b("\n" + i);t.b("    <span class=\"cover-stat beicons-pre beicons-pre-followers user-stats-followed\">");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("followers",c,p,0)));t.b("\n" + i);t.b("    </span>");t.b("\n" + i);t.b("  </div> <!-- .stats-wrap -->");t.b("\n" + i);});c.pop();}t.b("</div> <!-- .mini-profile-wrap -->");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {"<lib/_follow/_buttonUserSmall0":{name:"lib/_follow/_buttonUserSmall", partials: {}, subs: {  }}}, subs: {  }}, "{{#user}}\n<div class=\"mini-profile-wrap hide-phone hide-tablet cfix\">\n\n  <div class=\"user-info-container cfix\">\n    <a target=\"_blank\" href=\"{{url}}\" class=\"user-image-wrap user-image-link\">\n      <img src=\"{{images.115}}\" class=\"user-image\">\n    </a>\n\n    <div class=\"user-info\">\n      <a target=\"_blank\" href=\"{{url}}\" class=\"user-name\">{{display_name}}</a>\n      <a target=\"_blank\" href=\"{{location_link}}\" class=\"location-link beicons-pre beicons-pre-location\">{{#city}}{{city}}, {{/city}}{{#state}}{{state}}, {{/state}}{{#country}}{{country}}{{/country}}</a>\n    </div> <!-- .user-info -->\n  </div> <!-- .user-info-container -->\n\n  {{>lib/_follow/_buttonUserSmall}}\n\n  {{#has_latest_projects}}\n    <a target=\"_blank\" href=\"{{url}}\" class=\"cfix user-view-link gallery-projects-wrap\">\n      <ul class=\"project-cover-container\">\n    {{#latest_projects}}\n        <li class=\"project-cover-wrap\">\n          {{#covers.115}}<img src=\"{{covers.115}}\" class=\"project-cover\">{{/covers.115}}\n        </li>\n    {{/latest_projects}}\n      </ul> <!-- .project-cover-container -->\n      <span class=\"gallery-cover-overlay\">\n        <div class=\"gallery-cover-overlay-text\">{{#translate}}user_cover_view_profile|View Profile{{/translate}}&nbsp;<span class=\"rarr\">&rarr;</span></div>\n      </span>\n    </a> <!-- .gallery-projects-wrap -->\n  {{/has_latest_projects}}\n\n  {{#stats}}\n  <div class=\"stats-wrap\">\n\n    <span class=\"cover-stat beicons-pre beicons-pre-eye cover-stat-views\">\n      {{views}}\n    </span>\n\n    <span class=\"cover-stat beicons-pre beicons-pre-thumb cover-stat-appreciations\">\n      {{appreciations}}\n    </span>\n\n    <span class=\"cover-stat beicons-pre beicons-pre-followers user-stats-followed\">\n      {{followers}}\n    </span>\n  </div> <!-- .stats-wrap -->\n  {{/stats}}\n</div> <!-- .mini-profile-wrap -->\n{{/user}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 976:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div>");t.b("\n" + i);t.b("  <h5>");t.b(t.v(t.d("job.title",c,p,0)));t.b("</h5>");t.b("\n" + i);t.b("  <br/>");t.b("\n" + i);t.b("  <p>");if(t.s(t.f("translate",c,p,1),c,p,0,58,296,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("joblist_job_archive_message|This post made by <a href=\"");t.b(t.v(t.d("creator.url",c,p,0)));t.b("\" target=\"_blank\">");t.b(t.v(t.d("creator.display_name",c,p,0)));t.b("</a>, will immediately be removed from Behance and your team page \"");t.b(t.v(t.d("team.name",c,p,0)));t.b("\". The poster will be notified of the removal.");});c.pop();}t.b("</p>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div>\n  <h5>{{job.title}}</h5>\n  <br/>\n  <p>{{#translate}}joblist_job_archive_message|This post made by <a href=\"{{creator.url}}\" target=\"_blank\">{{creator.display_name}}</a>, will immediately be removed from Behance and your team page \"{{team.name}}\". The poster will be notified of the removal.{{/translate}}</p>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(59)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./mini.css", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js!./mini.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

},[1421]);