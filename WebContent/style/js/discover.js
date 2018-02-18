webpackJsonp([4],{

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getZIndex(e) {
    if (e.length) for (var t, i, s = (0, _jquery2.default)(e[0]); s.length && s[0] !== document; ) {
        if (t = s.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(s.css("zIndex"), 10), 
        !isNaN(i) && 0 !== i)) return i;
        s = s.parent();
    }
    return 0;
}

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(6), _jquery2.default.widget("ui.selectmenuold", {
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
        var e = this, t = this.options, i = (this.element.attr("id") || "ui-selectmenu-" + Math.random().toString(16).slice(2, 10)).replace(/(:|\.)/g, "");
        this.ids = [ i, i + "-button", i + "-menu" ], this._safemouseup = !0, this.isOpen = !1, 
        this.newelement = (0, _jquery2.default)("<a />", {
            class: "ui-selectmenu ui-widget ui-state-default ui-corner-all",
            id: this.ids[1],
            role: "button",
            href: "#nogo",
            tabindex: this.element.attr("disabled") ? 1 : 0,
            "aria-haspopup": !0,
            "aria-owns": this.ids[2]
        }), this.newelement.insertAfter(this.element);
        var s = this.element.attr("tabindex");
        s && this.newelement.attr("tabindex", s), this.newelement.data("selectelement", this.element), 
        this.selectmenuIcon = (0, _jquery2.default)('<span class="ui-selectmenu-icon ui-icon"></span>').prependTo(this.newelement), 
        this.newelement.prepend('<span class="ui-selectmenu-status" />'), this.element.bind({
            "click.selectmenu": function(t) {
                e.newelement.focus(), t.preventDefault();
            }
        }), this.newelement.bind("mousedown.selectmenu", function(i) {
            return e._toggle(i, !0), "popup" == t.style && (e._safemouseup = !1, setTimeout(function() {
                e._safemouseup = !0;
            }, 300)), !1;
        }).bind("click.selectmenu", function() {
            return !1;
        }).bind("keydown.selectmenu", function(t) {
            var i = !1;
            switch (t.keyCode) {
              case _jquery2.default.ui.keyCode.ENTER:
                i = !0;
                break;

              case _jquery2.default.ui.keyCode.SPACE:
                e._toggle(t);
                break;

              case _jquery2.default.ui.keyCode.UP:
                t.altKey ? e.open(t) : e._moveSelection(-1);
                break;

              case _jquery2.default.ui.keyCode.DOWN:
                t.altKey ? e.open(t) : e._moveSelection(1);
                break;

              case _jquery2.default.ui.keyCode.LEFT:
                e._moveSelection(-1);
                break;

              case _jquery2.default.ui.keyCode.RIGHT:
                e._moveSelection(1);
                break;

              case _jquery2.default.ui.keyCode.TAB:
                i = !0;
                break;

              case _jquery2.default.ui.keyCode.PAGE_UP:
              case _jquery2.default.ui.keyCode.HOME:
                e.index(0);
                break;

              case _jquery2.default.ui.keyCode.PAGE_DOWN:
              case _jquery2.default.ui.keyCode.END:
                e.index(e._optionLis.length);
                break;

              default:
                i = !0;
            }
            return i;
        }).bind("keypress.selectmenu", function(t) {
            return t.which > 0 && e._typeAhead(t.which, "mouseup"), !0;
        }).bind("mouseover.selectmenu", function() {
            t.disabled || (0, _jquery2.default)(this).addClass("ui-selectmenu-hover ui-state-hover");
        }).bind("mouseout.selectmenu", function() {
            t.disabled || (0, _jquery2.default)(this).removeClass("ui-selectmenu-hover ui-state-hover");
        }).bind("focus.selectmenu", function() {
            t.disabled || (0, _jquery2.default)(this).addClass("ui-selectmenu-focus ui-state-focus");
        }).bind("blur.selectmenu", function() {
            t.disabled || (0, _jquery2.default)(this).removeClass("ui-selectmenu-focus ui-state-focus");
        }), (0, _jquery2.default)(document).bind("mousedown.selectmenu-" + this.ids[0], function(t) {
            e.isOpen && e.close(t);
        }), this.element.bind("click.selectmenu", function() {
            e._refreshValue();
        }).bind("focus.selectmenu", function() {
            e.newelement && e.newelement[0].focus();
        }), t.width || (t.width = this.element.outerWidth()), this.newelement.width(t.width), 
        this.element.hide(), this.list = (0, _jquery2.default)("<ul />", {
            class: "ui-selectmenu-menu ui-widget ui-widget-content",
            "aria-hidden": !0,
            role: "listbox",
            "aria-labelledby": this.ids[1],
            id: this.ids[2]
        }).appendTo(t.appendTo), this.list.bind("keydown.selectmenu", function(t) {
            var i = !1;
            switch (t.keyCode) {
              case _jquery2.default.ui.keyCode.UP:
                t.altKey ? e.close(t, !0) : e._moveFocus(-1);
                break;

              case _jquery2.default.ui.keyCode.DOWN:
                t.altKey ? e.close(t, !0) : e._moveFocus(1);
                break;

              case _jquery2.default.ui.keyCode.LEFT:
                e._moveFocus(-1);
                break;

              case _jquery2.default.ui.keyCode.RIGHT:
                e._moveFocus(1);
                break;

              case _jquery2.default.ui.keyCode.HOME:
                e._moveFocus(":first");
                break;

              case _jquery2.default.ui.keyCode.PAGE_UP:
                e._scrollPage("up");
                break;

              case _jquery2.default.ui.keyCode.PAGE_DOWN:
                e._scrollPage("down");
                break;

              case _jquery2.default.ui.keyCode.END:
                e._moveFocus(":last");
                break;

              case _jquery2.default.ui.keyCode.ENTER:
              case _jquery2.default.ui.keyCode.SPACE:
                e.close(t, !0), (0, _jquery2.default)(t.target).parents("li:eq(0)").trigger("mouseup");
                break;

              case _jquery2.default.ui.keyCode.TAB:
                i = !0, e.close(t, !0), (0, _jquery2.default)(t.target).parents("li:eq(0)").trigger("mouseup");
                break;

              case _jquery2.default.ui.keyCode.ESCAPE:
                e.close(t, !0);
                break;

              default:
                i = !0;
            }
            return i;
        }).bind("keypress.selectmenu", function(t) {
            return t.which > 0 && e._typeAhead(t.which, "focus"), !0;
        }), this.list.bind("mousedown.selectmenu mouseup.selectmenu", !1), (0, _jquery2.default)(window).bind("resize.selectmenu-" + this.ids[0], _jquery2.default.proxy(e.close, this)), 
        this.refreshPosition = _jquery2.default.proxy(e._refreshPosition, this);
    },
    _init: function() {
        var e = this, t = this.options, i = [];
        this.element.find("option").each(function() {
            var s = (0, _jquery2.default)(this);
            i.push({
                value: s.attr("value"),
                text: e._formatText(s.text(), s),
                selected: s.prop("selected"),
                disabled: s.attr("disabled"),
                classes: s.attr("class"),
                typeahead: s.attr("typeahead"),
                parentOptGroup: s.parent("optgroup"),
                bgImage: t.bgImage.call(s)
            });
        });
        var s = "popup" == e.options.style ? " ui-state-active" : "";
        if (this.list.html(""), i.length) for (var n = 0; n < i.length; n++) {
            var a = {
                role: "presentation"
            };
            i[n].disabled && (a.class = this.namespace + "-state-disabled");
            var o = {
                html: i[n].text || "&nbsp;",
                href: "#nogo",
                tabindex: -1,
                role: "option",
                "aria-selected": !1
            };
            i[n].disabled && (o["aria-disabled"] = i[n].disabled), i[n].typeahead && (o.typeahead = i[n].typeahead);
            var l = (0, _jquery2.default)("<a/>", o).bind("focus.selectmenu", function() {
                (0, _jquery2.default)(this).parent().mouseover();
            }).bind("blur.selectmenu", function() {
                (0, _jquery2.default)(this).parent().mouseout();
            }), u = (0, _jquery2.default)("<li/>", a).append(l).data("index", n).addClass(i[n].classes).data("optionClasses", i[n].classes || "").bind("mouseup.selectmenu", function(t) {
                return !e._safemouseup || e._disabled(t.currentTarget) || e._disabled((0, _jquery2.default)(t.currentTarget).parents("ul>li.ui-selectmenu-group ")) || (e.index((0, 
                _jquery2.default)(this).data("index")), e.select(t), e.close(t, !0)), !1;
            }).bind("click.selectmenu", function() {
                return !1;
            }).bind("mouseover.selectmenu", function() {
                (0, _jquery2.default)(this).hasClass(e.namespace + "-state-disabled") || (0, _jquery2.default)(this).parent("ul").parent("li").hasClass(e.namespace + "-state-disabled") || (e._selectedOptionLi().addClass(s), 
                e._focusedOptionLi().removeClass("ui-selectmenu-item-focus ui-state-hover"), (0, 
                _jquery2.default)(this).removeClass("ui-state-active").addClass("ui-selectmenu-item-focus ui-state-hover"));
            }).bind("mouseout.selectmenu", function() {
                (0, _jquery2.default)(this).is(e._selectedOptionLi()) && (0, _jquery2.default)(this).addClass(s), 
                (0, _jquery2.default)(this).removeClass("ui-selectmenu-item-focus ui-state-hover");
            });
            if (i[n].parentOptGroup.length) {
                var d = "ui-selectmenu-group-" + this.element.find("optgroup").index(i[n].parentOptGroup);
                this.list.find("li." + d).length ? this.list.find("li." + d + ":last ul").append(u) : (0, 
                _jquery2.default)(' <li role="presentation" class="ui-selectmenu-group ' + d + (i[n].parentOptGroup.attr("disabled") ? " " + this.namespace + '-state-disabled" aria-disabled="true"' : '"') + '><span class="ui-selectmenu-group-label">' + i[n].parentOptGroup.attr("label") + "</span><ul></ul></li> ").appendTo(this.list).find("ul").append(u);
            } else u.appendTo(this.list);
            if (t.icons) for (var r in t.icons) if (u.is(t.icons[r].find)) {
                u.data("optionClasses", i[n].classes + " ui-selectmenu-hasIcon").addClass("ui-selectmenu-hasIcon");
                var c = t.icons[r].icon || "";
                u.find("a:eq(0)").prepend('<span class="ui-selectmenu-item-icon ui-icon ' + c + '"></span>'), 
                i[n].bgImage && u.find("span").css("background-image", i[n].bgImage);
            }
        } else (0, _jquery2.default)('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list);
        var h = "dropdown" == t.style;
        if (this.newelement.toggleClass("ui-selectmenu-dropdown", h).toggleClass("ui-selectmenu-popup", !h), 
        this.list.toggleClass("ui-selectmenu-menu-dropdown ui-corner-bottom", h).toggleClass("ui-selectmenu-menu-popup ui-corner-all", !h).find("li:first").toggleClass("ui-corner-top", !h).end().find("li:last").addClass("ui-corner-bottom"), 
        this.selectmenuIcon.toggleClass("ui-icon-triangle-1-s", h).toggleClass("ui-icon-triangle-2-n-s", !h), 
        t.transferClasses) {
            var p = this.element.attr("class") || "";
            this.newelement.add(this.list).addClass(p);
        }
        this._computeWidth(), this.list.css("height", "auto");
        var m = this.list.height(), f = (0, _jquery2.default)(window).height(), _ = t.maxHeight ? Math.min(t.maxHeight, f) : f / 3;
        m > _ && this.list.height(_), this._optionLis = this.list.find("li:not(.ui-selectmenu-group)"), 
        this.element.attr("disabled") ? this.disable() : this.enable(), this._refreshValue(), 
        this._selectedOptionLi().addClass("ui-selectmenu-item-focus"), clearTimeout(this.refreshTimeout), 
        this.refreshTimeout = window.setTimeout(function() {
            e._refreshPosition();
        }, 200);
    },
    _computeWidth: function() {
        var e = this.options, t = this.newelement.width();
        "dropdown" === e.style ? this.list.width(e.menuWidth || t) : this.list.width(e.menuWidth || t - e.handleWidth);
    },
    destroy: function() {
        this.element.removeData(this.widgetName).removeClass("ui-selectmenu-disabled " + this.namespace + "-state-disabled").removeAttr("aria-disabled").unbind(".selectmenu"), 
        (0, _jquery2.default)(window).unbind(".selectmenu-" + this.ids[0]), (0, _jquery2.default)(document).unbind(".selectmenu-" + this.ids[0]), 
        this.newelement.remove(), this.list.remove(), this.element.unbind(".selectmenu").show(), 
        _jquery2.default.Widget.prototype.destroy.apply(this, arguments);
    },
    _typeAhead: function(e, t) {
        var i = this, s = String.fromCharCode(e).toLowerCase(), n = null, a = null;
        i._typeAhead_timer && (window.clearTimeout(i._typeAhead_timer), i._typeAhead_timer = void 0), 
        i._typeAhead_chars = (void 0 === i._typeAhead_chars ? "" : i._typeAhead_chars).concat(s), 
        i._typeAhead_chars.length < 2 || i._typeAhead_chars.substr(-2, 1) === s && i._typeAhead_cycling ? (i._typeAhead_cycling = !0, 
        n = s) : (i._typeAhead_cycling = !1, n = i._typeAhead_chars);
        for (var o = ("focus" !== t ? this._selectedOptionLi().data("index") : this._focusedOptionLi().data("index")) || 0, l = 0; l < this._optionLis.length; l++) {
            var u = this._optionLis.eq(l).text().substr(0, n.length).toLowerCase();
            if (u === n) if (i._typeAhead_cycling) {
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
        var e = this.index();
        return {
            index: e,
            option: (0, _jquery2.default)("option", this.element).get(e),
            value: this.element[0].value
        };
    },
    open: function(e) {
        var t = this, i = this.options;
        if ("true" != t.newelement.attr("aria-disabled")) {
            t._closeOthers(e), t.newelement.addClass("ui-state-active"), t.list.attr("aria-hidden", !1), 
            t.list.addClass("ui-selectmenu-open");
            var s = this._selectedOptionLi();
            "dropdown" == i.style ? t.newelement.removeClass("ui-corner-all").addClass("ui-corner-top") : this.list.css("left", -5e3).scrollTop(this.list.scrollTop() + s.position().top - this.list.outerHeight() / 2 + s.outerHeight() / 2).css("left", "auto"), 
            t._refreshPosition(), t._computeWidth();
            var n = s.find("a");
            n.length && n[0].focus(), t.isOpen = !0, t._trigger("open", e, t._uiHash()), (0, 
            _jquery2.default)(window).on("resize.selectmenu scroll.selectmenu", this.refreshPosition);
        }
    },
    close: function(e, t) {
        this.newelement.is(".ui-state-active") && (this.newelement.removeClass("ui-state-active"), 
        this.list.removeClass("ui-selectmenu-open"), this.list.attr("aria-hidden", !0), 
        "dropdown" == this.options.style && this.newelement.removeClass("ui-corner-top").addClass("ui-corner-all"), 
        t && this.newelement.focus(), this.isOpen = !1, this._trigger("close", e, this._uiHash()), 
        (0, _jquery2.default)(window).off("resize.selectmenu scroll.selectmenu", this.refreshPosition));
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
    _closeOthers: function(e) {
        (0, _jquery2.default)(".ui-selectmenu.ui-state-active").not(this.newelement).each(function() {
            (0, _jquery2.default)(this).data("selectelement").selectmenuold("close", e);
        }), (0, _jquery2.default)(".ui-selectmenu.ui-state-hover").trigger("mouseout");
    },
    _toggle: function(e, t) {
        this.isOpen ? this.close(e, t) : this.open(e);
    },
    _formatText: function(e, t) {
        return this.options.format ? e = this.options.format(e, t) : this.options.escapeHtml && (e = (0, 
        _jquery2.default)("<div />").text(e).html()), e;
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
    _disabled: function(e) {
        return (0, _jquery2.default)(e).hasClass(this.namespace + "-state-disabled");
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
    index: function(e) {
        return arguments.length ? !this._disabled((0, _jquery2.default)(this._optionLis[e])) && e != this._selectedIndex() && (this.element[0].selectedIndex = e, 
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
        if ("popup" == e.style && !e.positionOptions.offset) var t = this._selectedOptionLi(), i = "0 " + (this.list.offset().top - t.offset().top - (this.newelement.outerHeight() + t.outerHeight()) / 2);
        this.list.css("zIndex", getZIndex(this.element) + 1).position({
            of: e.positionOptions.of || this.newelement,
            my: e.positionOptions.my,
            at: e.positionOptions.at,
            offset: e.positionOptions.offset || i,
            collision: e.positionOptions.collision || ("popup" == e.style ? "fit" : "flip")
        });
    }
});

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function report(e, t, a) {
    return (0, _simple2.default)({
        title: _localization2.default.translate("report_spam_mark_as", "Mark as Spam"),
        html: _localization2.default.translate("report_spam_are_you_sure", "Are you sure you want to mark this as spam?"),
        buttons: [ {
            label: _localization2.default.translate("report_spam_button_okay", "Okay"),
            classes: [ "form-button-default", "js-confirm" ]
        }, {
            label: _localization2.default.translate("report_spam_button_cancel", "Cancel"),
            classes: [ "form-button-cancel", "js-cancel" ]
        } ]
    }).then(function() {
        return (0, _xhr2.default)({
            type: "POST",
            url: BASE + e + "/" + t
        }).then(function(e) {
            return a && a.text(_localization2.default.translate("report_spam_marked_as", "Marked as Spam")).on("click", !1), 
            {
                response: e,
                $context: a
            };
        });
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _simple = __webpack_require__(45), _simple2 = _interopRequireDefault(_simple), BASE = "/v2/report/spam/";

exports.default = {
    report: report,
    delegate: function(e, t) {
        t = t || _jquery2.default.noop, e.on("click.be-spam", ".js-action-spam", function(e) {
            var a = (0, _jquery2.default)(e.target), r = a.data("type"), l = a.data("id");
            report(r, l, a).then(t), e.preventDefault();
        });
    },
    undelegate: function(e) {
        e.off("click.be-spam");
    }
}, module.exports = exports.default;

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Controller = __webpack_require__(30), _Controller2 = _interopRequireDefault(_Controller), _View = __webpack_require__(26), _View2 = _interopRequireDefault(_View), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _remoteLogger = __webpack_require__(14), _remoteLogger2 = _interopRequireDefault(_remoteLogger), _pulsePoint = __webpack_require__(147), _pulsePoint2 = _interopRequireDefault(_pulsePoint), pulseView = _View2.default.extend({
    mustache: _pulsePoint2.default,
    fadeTime: 250,
    displayTime: 5e3,
    _hover: function() {
        this.pulseHovered || (this.pulseHovered = !0, this._controller._pulsePointViewed(this._model.get("from"))), 
        _remoteLogger2.default.info("onboarding", "Pulse Point Hovered", {
            from: this._model.get("from")
        });
    },
    _showClickedMessage: function() {
        var e = this;
        return this.destroyTimer ? (clearTimeout(this.destroyTimer), this.destroyTimer = null, 
        void this.destroy()) : (this._model.set("clicked", !0), _remoteLogger2.default.info("onboarding", "Pulse Point Clicked", {
            from: this._model.get("from")
        }), this.destroyTimer = setTimeout(function() {
            e.$view.fadeOut(e.fadeTime, e.destroy.bind(e));
        }, this.displayTime), void this.render());
    },
    rendered: function(e) {
        this.destroyTimer || e.on("mouseenter", this._hover.bind(this));
    },
    events: {
        click: "_showClickedMessage"
    },
    templateData: function() {
        var e = this._super();
        return e.from = this._model.get("from"), e.follow = "follow" === e.from, e.appreciate = "appreciate" === e.from, 
        e;
    }
});

exports.default = _Controller2.default.extend({
    _pulsePointViewed: function(e) {
        return (0, _xhr2.default)({
            url: "/v2/users/me/flags/" + e + "_pulse_point",
            type: "POST"
        });
    }
}, {
    displayName: "PulsePoint",
    VIEW_CLASS: pulseView
}), module.exports = exports.default;

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ajax(e, r) {
    var t = _jquery2.default.isFunction(r.back) ? r.back : _jquery2.default.noop, a = r.a;
    if (delete r.a, delete r.back, "s" === a && !r.ids) throw new Error("be/stats called without ids");
    return (0, _xhr2.default)({
        url: e + "/" + a,
        data: r
    }).then(t);
}

function transform(e) {
    var r, t = {};
    document.referrer && (e.referrer = document.referrer);
    for (r in e) e.hasOwnProperty(r) && argmap.hasOwnProperty(r) && (t[argmap[r]] = e[r]);
    return t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), get, format, api, endpoint = "/c", argmap = {
    action: "a",
    callback: "back",
    entity: "e",
    ids: "ids",
    id: "id",
    type: "t",
    time: "ti",
    contest: "c",
    source: "s",
    referrer: "r"
};

get = function(e) {
    return ajax(endpoint, transform(e));
}, format = function(e, r, t, a) {
    return get({
        action: e,
        entity: r,
        id: t,
        callback: a
    }), this;
}, api = {
    get: get,
    view: format.bind(api, "v"),
    appreciate: format.bind(api, "a"),
    unappreciate: format.bind(api, "u")
}, exports.default = api, module.exports = exports.default;

/***/ },

/***/ 1034:
/***/ function(module, exports) {

$.fn.readMoreBox = function(h) {
    var i = this, e = i.height(), t = i.css("max-height", "").height("auto").height(), a = !1;
    i.height(e), h.hide(), e !== t && (t < e ? i.height(t) : h.show().find(".fake-link").on("click", function() {
        var n = e, g = "remove";
        a || (n = t, g = "add"), i.animate({
            height: n
        }), h[g + "Class"]("viewing-all"), a = !a;
    }));
};

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_savingSpinner": __webpack_require__(50).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"form-item form-item-checkbox");if(t.s(t.f("containerClasses",c,p,1),c,p,0,61,67,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b("\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("-container\">");t.b("\n" + i);t.b("  <label for=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"form-label checkbox\">");t.b("\n" + i);t.b("    <input type=\"checkbox\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));if(!t.s(t.f("name",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.f("id",c,p,0)));};t.b("\" class=\"form-checkbox");if(t.s(t.f("classes",c,p,1),c,p,0,275,281,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}if(t.s(t.f("validate",c,p,1),c,p,0,306,329,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" validate[");t.b(t.v(t.f("validate",c,p,0)));t.b("]");});c.pop();}t.b("\" value=\"");t.b(t.v(t.f("value",c,p,0)));t.b("\"");if(t.s(t.f("checked",c,p,1),c,p,0,373,381,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" checked");});c.pop();}if(t.s(t.f("disabled",c,p,1),c,p,0,406,415,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" disabled");});c.pop();}if(t.s(t.f("validate",c,p,1),c,p,0,441,470,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" data-validate=\"");t.b(t.v(t.f("validate",c,p,0)));t.b("\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("    <div class=\"checkbox-checkmark\"></div>");t.b("\n" + i);t.b("    ");t.b(t.t(t.f("label",c,p,0)));if(t.s(t.f("saving_spinner",c,p,1),c,p,0,562,586,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_savingSpinner0",c,p,""));});c.pop();}t.b("\n" + i);t.b("  </label>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_savingSpinner0":{name:"lib/_savingSpinner", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"form-item form-item-checkbox{{#containerClasses}} {{.}}{{/containerClasses}}\" id=\"{{id}}-container\">\n  <label for=\"{{id}}\" class=\"form-label checkbox\">\n    <input type=\"checkbox\" id=\"{{id}}\" name=\"{{name}}{{^name}}{{id}}{{/name}}\" class=\"form-checkbox{{#classes}} {{.}}{{/classes}}{{#validate}} validate[{{validate}}]{{/validate}}\" value=\"{{value}}\"{{#checked}} checked{{/checked}}{{#disabled}} disabled{{/disabled}}{{#validate}} data-validate=\"{{validate}}\"{{/validate}}>\n    <div class=\"checkbox-checkmark\"></div>\n    {{{label}}}{{#saving_spinner}}{{> lib/_savingSpinner}}{{/saving_spinner}}\n  </label>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"share-link-input\">");t.b("\n" + i);t.b("  <div class=\"input-group js-share-link\">");t.b("\n" + i);t.b("    <div class=\"input-group-addon beicons-pre beicons-pre-link js-share-url-icon\"></div>");t.b("\n" + i);t.b("    <input type=\"text\" class=\"form-text form-text-normal js-share-input\" value=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" readonly=\"readonly\" />");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"share-link-input\">\n  <div class=\"input-group js-share-link\">\n    <div class=\"input-group-addon beicons-pre beicons-pre-link js-share-url-icon\"></div>\n    <input type=\"text\" class=\"form-text form-text-normal js-share-input\" value=\"{{url}}\" readonly=\"readonly\" />\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(56)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../css-loader/index.js!./../../sass-loader/index.js?includePaths[]=/app/node_modules/bourbon/app/assets/stylesheets!./lightbox.scss", function() {
			var newContent = require("!!./../../css-loader/index.js!./../../sass-loader/index.js?includePaths[]=/app/node_modules/bourbon/app/assets/stylesheets!./lightbox.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 107:
/***/ function(module, exports) {

!function(e) {
    e.fn.lazyload = function(t) {
        var o = {
            threshold: 0,
            failurelimit: 0,
            event: "scroll",
            effect: "show",
            container: window,
            enabled: !0
        };
        t && e.extend(o, t);
        var r = this;
        return "scroll" == o.event && e(o.container).bind("scroll", function(t) {
            var i = 0;
            r.each(function() {
                if (e.abovethetop(this, o) || e.leftofbegin(this, o)) ; else if (e.belowthefold(this, o) || e.rightoffold(this, o)) {
                    if (i++ > o.failurelimit) return !1;
                } else e(this).trigger("appear");
            });
            var n = e.grep(r, function(e) {
                return !e.loaded;
            });
            r = e(n);
        }), this.each(function() {
            var t = this;
            if (void 0 == e(t).attr("original") && e(t).attr("original", e(t).attr("src")), 
            "scroll" != o.event || void 0 == e(t).attr("src") || o.placeholder == e(t).attr("src") || e.abovethetop(t, o) || e.leftofbegin(t, o) || e.belowthefold(t, o) || e.rightoffold(t, o) ? (o.placeholder ? e(t).attr("src", o.placeholder) : e(t).removeAttr("src"), 
            t.loaded = !1) : t.loaded = !0, "IMG" == t.tagName && e(t).one("appear", function() {
                this.loaded || e("<img />").bind("load", function() {
                    e(t).hide().attr("src", e(t).attr("original"))[o.effect](o.effectspeed), t.loaded = !0;
                }).attr("src", e(t).attr("original"));
            }), "scroll" != o.event && e(t).bind(o.event, function(o) {
                t.loaded || e(t).trigger("appear");
            }), !o.enabled) return void e(this).trigger("appear");
        }), e(o.container).trigger(o.event), this;
    }, e.belowthefold = function(t, o) {
        if (void 0 === o.container || o.container === window) var r = e(window).height() + e(window).scrollTop(); else var r = e(o.container).offset().top + e(o.container).height();
        return r <= e(t).offset().top - o.threshold;
    }, e.rightoffold = function(t, o) {
        if (void 0 === o.container || o.container === window) var r = e(window).width() + e(window).scrollLeft(); else var r = e(o.container).offset().left + e(o.container).width();
        return r <= e(t).offset().left - o.threshold;
    }, e.abovethetop = function(t, o) {
        if (void 0 === o.container || o.container === window) var r = e(window).scrollTop(); else var r = e(o.container).offset().top;
        return r >= e(t).offset().top + o.threshold + e(t).height();
    }, e.leftofbegin = function(t, o) {
        if (void 0 === o.container || o.container === window) var r = e(window).scrollLeft(); else var r = e(o.container).offset().left;
        return r >= e(t).offset().left + o.threshold + e(t).width();
    }, e.extend(e.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    });
}(jQuery);

/***/ },

/***/ 1072:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Roulette = __webpack_require__(408), _Roulette2 = _interopRequireDefault(_Roulette), _Browse = __webpack_require__(1076), _Browse2 = _interopRequireDefault(_Browse), _Browse3 = __webpack_require__(1080), _Browse4 = _interopRequireDefault(_Browse3), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), constructor = _Roulette2.default.extend({
    init: function() {
        this._super.apply(this, arguments), _Filters2.default.on("sort", function(e) {
            this._model.set("sort", e), this._updateSort(e);
        }, this).on("time", function(e) {
            this._model.set("time", e);
        }, this), this._model.on("sort", this.commit);
    },
    destroy: function() {
        _Filters2.default.off(null, null, this), this._super();
    },
    setContext: function() {
        this._super.apply(this, arguments), this.commit(this._model.get("sort"));
    },
    commit: function(e) {
        this.$context && (e = _page_constants2.default.SORTS[e], this.$context.find(".js-sort-label").text(e));
    },
    _updateSort: function(e) {
        if (this.$context) {
            var t = this._model.get("sorts"), o = this.$context.find(".js-sort-label");
            t.forEach(function(t) {
                t.id === e && o.text(t.value);
            });
        }
    }
}, {
    VIEW_CLASS: {
        phone: _Browse2.default,
        tablet: _Browse4.default,
        desktop: _Browse4.default
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1073:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _coordinator = __webpack_require__(369), _coordinator2 = _interopRequireDefault(_coordinator), _Roulette = __webpack_require__(408), _Roulette2 = _interopRequireDefault(_Roulette), _Content = __webpack_require__(1077), _Content2 = _interopRequireDefault(_Content), _Content3 = __webpack_require__(1081), _Content4 = _interopRequireDefault(_Content3), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), constructor = _Roulette2.default.extend({
    init: function() {
        this._super.apply(this, arguments), _Filters2.default.on("content", function(e, t) {
            this._model.set("content", e), this.update(e, t);
        }, this);
    },
    destroy: function() {
        _Filters2.default.off(null, null, this), this._super();
    },
    setContext: function() {
        this._super.apply(this, arguments), this.commit(this._model.get("content"));
    },
    commit: function(e) {
        _coordinator2.default.trigger("content.type", e);
    },
    update: function(e, t) {
        if (this.$context) {
            var o = this._model.get("contentMap"), n = this.$context.find(".js-sort-label");
            t && n.removeClass("beicons-pre-" + o[t].icon), n.addClass("beicons-pre-" + o[e].icon).text(o[e].label);
        }
    }
}, {
    VIEW_CLASS: {
        phone: _Content2.default,
        tablet: _Content4.default,
        desktop: _Content4.default
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1074:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Roulette = __webpack_require__(408), _Roulette2 = _interopRequireDefault(_Roulette), _Fields = __webpack_require__(1078), _Fields2 = _interopRequireDefault(_Fields), _Fields3 = __webpack_require__(1082), _Fields4 = _interopRequireDefault(_Fields3), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), constructor = _Roulette2.default.extend({
    init: function() {
        this._super.apply(this, arguments), _Filters2.default.on("field", function(e) {
            this._model.set("field", e);
        }, this), this._model.on("field", this.commit);
    },
    destroy: function() {
        _Filters2.default.off(null, null, this), this._super();
    },
    setContext: function() {
        this._super.apply(this, arguments), this.commit(this._model.get("field"));
    },
    commit: function(e) {
        this.$context && (e = _page_constants2.default.FIELDS[e], this.$context.find(".js-sort-label").toggleClass("active", !!e).text(e || _page_constants2.default.FIELDS_ALL));
    }
}, {
    VIEW_CLASS: {
        phone: _Fields2.default,
        tablet: _Fields4.default,
        desktop: _Fields4.default
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1075:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _async = __webpack_require__(53), _async2 = _interopRequireDefault(_async), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _Roulette = __webpack_require__(408), _Roulette2 = _interopRequireDefault(_Roulette), _Locate = __webpack_require__(1079), _Locate2 = _interopRequireDefault(_Locate), _Locate3 = __webpack_require__(1083), _Locate4 = _interopRequireDefault(_Locate3), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), constructor = _Roulette2.default.extend({
    init: function() {
        this._super.apply(this, arguments), _Filters2.default.on("country", function(e) {
            this._model.set("country", e);
        }, this).on("state", function(e) {
            this._model.set("state", e);
        }, this).on("city", function(e) {
            this._model.set("city", e);
        }, this).on("sort field", this.underflow, this), this._model.on("country state city", this.commit), 
        this.underflow();
    },
    commit: function() {
        if (this.$context) {
            var e = this._model.data(), t = [ e.city, e.state, e.country ].filter(Boolean).join(", ");
            this.$context.find(".js-sort-label").text(t || _localization2.default.translate("discover_location_option_worldwide", "Worldwide")), 
            this.underflow();
        }
    },
    underflow: function e() {
        var t = this;
        e.count = e.count || 0, 0 === e.count++ && (0, _async2.default)(function() {
            var o = t.$context.find(".js-sort-label").css("width", ""), i = t.$context.siblings().addBack().get().reduce(function(e, t) {
                return e + (0, _jquery2.default)(t).outerWidth(!0);
            }, 10 - (0, _jquery2.default)(".js-sorts").width());
            i > 0 && o.css("width", "-=" + i), e.count = 0;
        });
    }
}, {
    VIEW_CLASS: {
        phone: _Locate2.default,
        tablet: _Locate4.default,
        desktop: _Locate4.default
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1076:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _Layover = __webpack_require__(367), _Layover2 = _interopRequireDefault(_Layover), _fields = __webpack_require__(410), _fields2 = _interopRequireDefault(_fields), _sortBrowse = __webpack_require__(554), _sortBrowse2 = _interopRequireDefault(_sortBrowse), constructor = _Layover2.default.extend({
    init: function() {
        this._super.apply(this, arguments), this._model.on("sort", this.onChange, this), 
        this._model.on("time", this.onChange, this);
    },
    destroy: function() {
        this._model.off(null, null, this), this._super();
    },
    mustache: _sortBrowse2.default,
    templateData: function() {
        return (0, _extend2.default)({
            phone: !0
        }, this._model.data());
    },
    rendered: function() {
        this._super(), this.$view.find("[data-key=" + this._model.get("sort") + "] a").addClass("active"), 
        this.$view.find("[data-key=" + this._model.get("time") + "] a").addClass("active"), 
        this.followed(), this.correctTime(), this.handleSimilar();
    }
}).mixin(_fields2.default);

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1077:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Layover = __webpack_require__(367), _Layover2 = _interopRequireDefault(_Layover), _content = __webpack_require__(582), _content2 = _interopRequireDefault(_content), _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend);

exports.default = _Layover2.default.extend(_content2.default).extend({
    templateData: function() {
        return (0, _extend2.default)({
            phone: !0
        }, this._model.data());
    }
}, {
    displayName: "discover/View/Layover/Content"
}), module.exports = exports.default;

/***/ },

/***/ 1078:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _Layover = __webpack_require__(367), _Layover2 = _interopRequireDefault(_Layover), _fields = __webpack_require__(410), _fields2 = _interopRequireDefault(_fields), _sortFields = __webpack_require__(339), _sortFields2 = _interopRequireDefault(_sortFields), constructor = _Layover2.default.extend({
    init: function() {
        this._super.apply(this, arguments), this._model.on("field", this.onChange, this);
    },
    destroy: function() {
        this._model.off(null, null, this), this._super();
    },
    mustache: _sortFields2.default,
    templateData: function() {
        return (0, _extend2.default)({
            phone: !0
        }, this._model.data());
    },
    rendered: function() {
        this._super(), this.$view.find("[data-key=" + this._model.get("field") + "] a").addClass("active");
    }
}).mixin(_fields2.default);

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1079:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Layover = __webpack_require__(367), _Layover2 = _interopRequireDefault(_Layover), _locate = __webpack_require__(583), _locate2 = _interopRequireDefault(_locate);

exports.default = _Layover2.default.extend(_locate2.default, {
    displayName: "discover/View/Layover/Locate"
}), module.exports = exports.default;

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _remoteLogger = __webpack_require__(14), _remoteLogger2 = _interopRequireDefault(_remoteLogger), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window);

exports.default = {
    open: function(e, t, r) {
        var o = t.url, i = t.text, u = t.image;
        _remoteLogger2.default.info("social_sharing", "Social Network Button Clicked", {
            service: e,
            from: r
        }), "facebook" === e ? _window2.default.open("http://www.facebook.com/sharer/sharer.php?" + _jquery2.default.param({
            u: o,
            t: i
        }), "", "toolbar=0, status=0, width=900, height=500") : "twitter" === e ? _window2.default.open("https://twitter.com/intent/tweet?" + _jquery2.default.param({
            text: i
        }), "", "toolbar=0, status=0, width=650, height=360") : "linkedin" === e ? _window2.default.open("https://www.linkedin.com/cws/share?" + _jquery2.default.param({
            url: o,
            token: "",
            isFramed: "true"
        }), "", "toolbar=no,width=550,height=550") : "pinterest" === e && _window2.default.open("http://pinterest.com/pin/create/button/?" + _jquery2.default.param({
            url: o,
            media: u,
            description: i
        }), "", "toolbar=no,width=700,height=300");
    }
}, module.exports = exports.default;

/***/ },

/***/ 1080:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Menu = __webpack_require__(368), _Menu2 = _interopRequireDefault(_Menu), _fields = __webpack_require__(410), _fields2 = _interopRequireDefault(_fields), _sortBrowse = __webpack_require__(554), _sortBrowse2 = _interopRequireDefault(_sortBrowse), constructor = _Menu2.default.extend({
    init: function() {
        this._super.apply(this, arguments), this._model.on("sort", this.onChange, this), 
        this._model.on("time", this.onChange, this), this._model.on("time", this.onTime, this);
    },
    destroy: function() {
        this._model.off(null, null, this), this._super();
    },
    mustache: _sortBrowse2.default,
    rendered: function() {
        this._super();
        var e = this.$view.find("#time-list").on("click", "a", function() {
            if (e.hasClass("collapsed")) return e.removeClass("collapsed"), !1;
        });
        this.$view.find("[data-key=" + this._model.get("sort") + "] a").addClass("active"), 
        this.$view.find("[data-key=" + this._model.get("time") + "]").addClass("active-time").find("a").addClass("active"), 
        this.followed(), this.correctTime(), this.handleSimilar();
    },
    onTime: function(e, i) {
        this.$view && this.$view.find("[data-key=" + i + "]").removeClass("active-time").end().find("[data-key=" + e + "]").addClass("active-time");
    },
    hide: function() {
        this.$view && (this.$view.find("#time-list").addClass("collapsed"), this._super());
    },
    toggle: function() {
        this.$view && (this.$view.find("#time-list").addClass("collapsed"), this._super());
    }
}).mixin(_fields2.default);

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1081:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Menu = __webpack_require__(368), _Menu2 = _interopRequireDefault(_Menu), _content = __webpack_require__(582), _content2 = _interopRequireDefault(_content);

exports.default = _Menu2.default.extend(_content2.default, {
    displayName: "discover/View/Menu/Content"
}), module.exports = exports.default;

/***/ },

/***/ 1082:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Menu = __webpack_require__(368), _Menu2 = _interopRequireDefault(_Menu), _fields = __webpack_require__(410), _fields2 = _interopRequireDefault(_fields), _scrollpoint = __webpack_require__(389), _scrollpoint2 = _interopRequireDefault(_scrollpoint), _sortFields = __webpack_require__(339), _sortFields2 = _interopRequireDefault(_sortFields), constructor = _Menu2.default.extend({
    init: function() {
        this._super.apply(this, arguments), this.scrollpoint = this.scrollpoint.bind(this), 
        this._model.on("field", this.onChange, this);
    },
    destroy: function() {
        _scrollpoint2.default.off(this.scrollpoint), this._model.off(null, null, this), 
        this._super();
    },
    mustache: _sortFields2.default,
    rendered: function() {
        this._super(), this.$view.find("[data-key=" + this._model.get("field") + "] a").addClass("active"), 
        this.$view.addClass("creative-fields");
    },
    scrollpoint: function(e) {
        var t = this.$parent || this._controller.$context;
        t && t.find(".js-sort-label").toggleClass("active", e || !!this._model.get("field"));
    }
}).mixin(_fields2.default);

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1083:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Menu = __webpack_require__(368), _Menu2 = _interopRequireDefault(_Menu), _locate = __webpack_require__(583), _locate2 = _interopRequireDefault(_locate);

exports.default = _Menu2.default.extend(_locate2.default, {
    displayName: "discover/View/Menu/Locate"
}), module.exports = exports.default;

/***/ },

/***/ 1084:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _diff = __webpack_require__(285), _diff2 = _interopRequireDefault(_diff), _Element = __webpack_require__(57), _Element2 = _interopRequireDefault(_Element), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _School = __webpack_require__(1090), _School2 = _interopRequireDefault(_School), _Tool = __webpack_require__(1091), _Tool2 = _interopRequireDefault(_Tool), _Color = __webpack_require__(1088), _Color2 = _interopRequireDefault(_Color), _Clients = __webpack_require__(1087), _Clients2 = _interopRequireDefault(_Clients), _Rank = __webpack_require__(1089), _Rank2 = _interopRequireDefault(_Rank), _Awards = __webpack_require__(1086), _Awards2 = _interopRequireDefault(_Awards), _Fields = __webpack_require__(1085), _Fields2 = _interopRequireDefault(_Fields), _Search = __webpack_require__(1092), _Search2 = _interopRequireDefault(_Search), _Tag = __webpack_require__(1093), _Tag2 = _interopRequireDefault(_Tag), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window);

__webpack_require__(114);

var constructor = _Element2.default.extend({
    template: _jquery2.default,
    lastTags: !1,
    getTags: function() {
        var e = this, t = _Filters2.default.get("field"), i = _Filters2.default.get("content"), r = _page_constants2.default.TOPTAGS.CATEGORIES[i], n = _page_constants2.default.TOPTAGS.ENTITIES[i], o = {
            entity: n,
            category: r
        };
        return this.tags.empty(), t ? (t && (o.field = t), void (this.lastTags && !Object.keys((0, 
        _diff2.default)(o, this.lastTags)).length || (this.lastTags = _jquery2.default.extend({}, o), 
        (0, _xhr2.default)({
            url: "/tags/getTopTags",
            data: o
        }).then(function(t) {
            return t.json && "object" === _typeof(t.json) ? void e.tags.populate(t.json) : void e.tags.hide();
        })))) : (this.lastTags = {}, void this.tags.hide());
    },
    rendered: function() {
        var e, t, i, r, n, o, a = this.$parent.find("#sidebar-fields"), l = this.$parent.find(".filter-schools").parent(), s = this.$parent.find(".filter-tools").parent(), u = this.$parent.find(".filter-color").parent(), d = this.$parent.find(".filter-index").parent(), _ = this.$parent.find(".js-ts-mode-toggle"), f = this.$parent.find(".filter-clients").parent(), c = this.$parent.find(".filter-awards").parent(), p = this.$parent.find("#related-tags"), g = this.$parent.find("#search-container");
        e = new _School2.default(l), l.on("click", e.toggle.bind(e)), t = new _Tool2.default(s), 
        s.on("click", t.toggle.bind(t)), i = new _Color2.default(u), u.on("click", i.toggle.bind(i)), 
        r = new _Rank2.default(d), d.on("click", r.toggle.bind(r)), n = new _Clients2.default(f), 
        f.on("click", n.toggle.bind(n)), o = new _Awards2.default(c), c.on("click", o.toggle.bind(o)), 
        new _Fields2.default(a), new _Search2.default(g), this.tags = new _Tag2.default(p), 
        _Filters2.default.on("field content", this.getTags, this), _.on("change", this.tsToggle), 
        this.$parent.find("input[type=checkbox]").customInput(), this.getTags();
    },
    tsToggle: function() {
        var e = (0, _jquery2.default)(this).is(":checked") ? 1 : 0;
        (0, _xhr2.default)({
            type: "POST",
            url: "/user/talent_search_toggle",
            data: {
                on: e
            }
        }).then(function() {
            var e = "/search";
            _window2.default.location.pathname !== e || _window2.default.location.search ? _window2.default.location.setLocation(e) : _window2.default.reloadLocation();
        });
    },
    destroy: function() {
        _Filters2.default.off(null, null, this), this._super();
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1085:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Element = __webpack_require__(57), _Element2 = _interopRequireDefault(_Element), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), constructor = _Element2.default.extend({
    init: function(e) {
        this._super.apply(this, arguments), this.$view = e, _Filters2.default.on("field", function(e) {
            this.$view.toggleClass("menu-mode", !!e);
        }, this), this.rendered();
    },
    destroy: function() {
        _Filters2.default.off(null, null, this), this._super();
    },
    rendered: function() {
        this.$view.toggleClass("menu-mode", !!_Filters2.default.get("field")).on("click", ".list-header", this.toggle.bind(this)), 
        this.hide();
    },
    show: function() {
        return this.$view && this.$view.removeClass("menu-closed");
    },
    hide: function() {
        return this.$view && this.$view.addClass("menu-closed");
    },
    toggle: function() {
        return this.$view && this.$view.toggleClass("menu-closed");
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1086:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Autoselect = __webpack_require__(409), _Autoselect2 = _interopRequireDefault(_Autoselect), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants);

exports.default = _Autoselect2.default.extend({
    save: function(e) {
        return _page_constants2.default.AWARDS = e;
    }
}, {
    TITLE: _page_constants2.default.FILTER_HEADERS.AWARDS,
    TYPE: _page_constants2.default.FILTER_KEY_AWARDS,
    ENDPOINT_TYPE: _page_constants2.default.FILTER_AWARDS_ENDPOINT_TYPE,
    LIMIT: _page_constants2.default.FILTER_LIMIT,
    LIMIT_MESSAGE: _page_constants2.default.FILTER_LIMIT_MESSAGES.AWARDS
}), module.exports = exports.default;

/***/ },

/***/ 1087:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Autoselect = __webpack_require__(409), _Autoselect2 = _interopRequireDefault(_Autoselect), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), constructor = _Autoselect2.default.extend({
    save: function(e) {
        return _page_constants2.default.CLIENTS = e;
    }
}, {
    TITLE: _page_constants2.default.FILTER_HEADERS.CLIENTS,
    TYPE: _page_constants2.default.FILTER_KEY_CLIENTS,
    LIMIT: _page_constants2.default.FILTER_LIMIT,
    LIMIT_MESSAGE: _page_constants2.default.FILTER_LIMIT_MESSAGES.CLIENTS
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1088:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _coordinator = __webpack_require__(369), _coordinator2 = _interopRequireDefault(_coordinator), _Menu = __webpack_require__(484), _Menu2 = _interopRequireDefault(_Menu), _color = __webpack_require__(810), _color2 = _interopRequireDefault(_color), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters);

__webpack_require__(463);

var DEFAULT_RANGE = 20, constructor;

constructor = _Menu2.default.extend({
    hex: null,
    range: null,
    $confirmation: null,
    init: function() {
        this._super.apply(this, arguments), this.hex = _Filters2.default.get("color_hex"), 
        this.range = _Filters2.default.get("color_range") || DEFAULT_RANGE;
    },
    search: function() {
        _Filters2.default.change({
            color_hex: this.hex,
            color_range: this.range
        }), this.hide(!0);
    },
    _checkHex: function(e) {
        return e.match("rgb") && (e = "#" + this._rgbString2hex(e)), e.match(/^#/) && (e = e.substr(1)), 
        e;
    },
    _toHex: function(e) {
        var r = "0123456789ABCDEF";
        return r.charAt((e - e % 16) / 16) + r.charAt(e % 16);
    },
    _rgbString2hex: function(e) {
        var r = e.replace("rgba", "").replace("rgb", "").replace("(", "").replace(")", "").replace(/\s+/g, "").split(",");
        return r = r.map(function(e) {
            return parseInt(e, 10) || 0;
        }), this._toHex(r[0]) + this._toHex(r[1]) + this._toHex(r[2]);
    },
    rendered: function() {
        this._super();
        var e = this, r = this.$view.find(".hex"), t = this.$view.find(".variance"), i = this.$view.find(".swatch"), o = this.$view.find(".variance-input"), n = this.$confirmation = this.$view.find(".search-option-confirm");
        this.$view.addClass("color-popup"), t.attr("id", "sidebar-color-variance"), o.data("forslider", "sidebar-color-variance"), 
        this.$view.on("click", ".color", function() {
            t.slider("value", DEFAULT_RANGE).trigger("slide", [ {
                value: DEFAULT_RANGE
            } ]), e.range = DEFAULT_RANGE, e.hex = e._checkHex((0, _jquery2.default)(this).css("background-color")), 
            e.search(), r.html("#" + e.hex), i.css("background-color", "#" + e.hex), n.hasClass("hide") && e._toggleVariance(!0);
        }), t.fancyslider({
            max: 40,
            min: 0,
            value: this.range,
            step: 2,
            input: "percentage"
        }).on("slidestop", function(r, t) {
            e.range = t.value, e.search();
        }), this.hex && this._toggleVariance(!0), this.listenTo(_coordinator2.default, "crumbs:removeall", this._deselectColor).listenTo(_coordinator2.default, "crumbs:remove", function(r) {
            r.id === Number(e.hex) && e._deselectColor();
        });
    },
    _deselectColor: function() {
        this.hex = null, this.range = DEFAULT_RANGE, this._toggleVariance(!1);
    },
    _toggleVariance: function(e) {
        this.$confirmation.toggleClass("hide", !e), this.$view.toggleClass("search-option-no-confirm", !e), 
        this.position();
    },
    templateData: function(e) {
        return {
            content: (0, _color2.default)(e)
        };
    }
}), exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1089:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _coordinator = __webpack_require__(369), _coordinator2 = _interopRequireDefault(_coordinator), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _Menu = __webpack_require__(484), _Menu2 = _interopRequireDefault(_Menu), _creativeRank = __webpack_require__(811), _creativeRank2 = _interopRequireDefault(_creativeRank);

__webpack_require__(8), exports.default = _Menu2.default.extend({
    templateData: function() {
        return {
            title: _page_constants2.default.FILTER_HEADERS.RANKS,
            classes: [ "talent-search-rank-popup" ],
            content: (0, _creativeRank2.default)({
                options: _page_constants2.default.RANKS
            })
        };
    },
    rendered: function() {
        var e = this.$view.find("input");
        e.on("change", function() {
            var t = e.filter(":checked").toArray(), n = t.map(function(e) {
                return e.value;
            }).join("|");
            _Filters2.default.change(_page_constants2.default.FILTER_KEY_RANK, n);
        }), this.listenTo(_coordinator2.default, "crumbs:remove", function(e) {
            e.key === _page_constants2.default.FILTER_KEY_RANK && this._uncheckAll();
        }), this.listenTo(_coordinator2.default, "crumbs:removeall", this._uncheckAll), 
        this._super();
    },
    _uncheckAll: function() {
        this.$view.find("input").changeInput("uncheck");
    },
    position: function() {
        this._super();
    }
}), module.exports = exports.default;

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function swapAttr(e, t) {
    e.attr("data-" + t) && e.attr(t, e.data(t)).removeAttr("data-" + t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component);

__webpack_require__(107), exports.default = _Component2.default.extend({
    init: function(e, t) {
        this._$elem = e, this._options = t;
    },
    bind: function() {
        var e = this;
        this._$elem.on("appear", function() {
            var e = (0, _jquery2.default)(this), t = e.is("img") ? e : e.find("img"), r = e.find("source");
            t.one("load", function() {
                t.removeAttr("height").removeAttr("width").removeAttr("style").addClass("image-loaded");
            }), swapAttr(t, "srcset"), swapAttr(t, "src"), swapAttr(t, "sizes"), r.each(function(e, t) {
                var r = (0, _jquery2.default)(t);
                swapAttr(r, "srcset"), swapAttr(r, "media");
            });
        }), this._$elem.lazyload(this._options), (0, _jquery2.default)(window).one("resize.be-lazypicture", function() {
            e._$elem.trigger("appear");
        });
    },
    unbind: function() {
        (0, _jquery2.default)(window).off("resize.be-lazypicture"), this._$elem.off("appear");
    }
}), module.exports = exports.default;

/***/ },

/***/ 1090:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Autoselect = __webpack_require__(409), _Autoselect2 = _interopRequireDefault(_Autoselect), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), constructor = _Autoselect2.default.extend({
    save: function(e) {
        return _page_constants2.default.SCHOOLS = e;
    }
}, {
    TITLE: _page_constants2.default.FILTER_HEADERS.SCHOOLS,
    TYPE: _page_constants2.default.FILTER_KEY_SCHOOLS,
    LIMIT: _page_constants2.default.FILTER_LIMIT,
    LIMIT_MESSAGE: _page_constants2.default.FILTER_LIMIT_MESSAGES.SCHOOLS
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1091:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _autosource = __webpack_require__(58), _autosource2 = _interopRequireDefault(_autosource), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _Autoselect = __webpack_require__(409), _Autoselect2 = _interopRequireDefault(_Autoselect);

exports.default = _Autoselect2.default.extend({
    save: function(e) {
        _page_constants2.default.TOOLS = _page_constants2.default.TOOLS || {}, e.forEach(function(e) {
            _page_constants2.default.TOOLS[e.id] = {
                c: this.constructor.TYPE,
                n: e.title,
                value: e.title,
                id: e.id
            };
        }, this);
    },
    _createSource: function() {
        var e = (0, _autosource2.default)({
            maxLocal: 5
        }), t = this.constructor.TYPE, u = this;
        return e.addRemote(function(e) {
            return (0, _xhr2.default)({
                url: _page_constants2.default.URLS.TAGS_SEARCH,
                data: {
                    type: t,
                    q: e.term
                }
            }).then(function(e) {
                return u.save(e.tags), e.tags.map(function(e) {
                    return e.value = e.title, e.type = t, e;
                });
            });
        }), e;
    }
}, {
    TITLE: _page_constants2.default.FILTER_HEADERS.TOOLS,
    TYPE: _page_constants2.default.FILTER_KEY_TOOLS,
    LIMIT: _page_constants2.default.FILTER_LIMIT,
    LIMIT_MESSAGE: _page_constants2.default.FILTER_LIMIT_MESSAGES.TOOLS
}), module.exports = exports.default;

/***/ },

/***/ 1092:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _View = __webpack_require__(25), _View2 = _interopRequireDefault(_View), _async = __webpack_require__(53), _async2 = _interopRequireDefault(_async), _autosource = __webpack_require__(58), _autosource2 = _interopRequireDefault(_autosource), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _suggestItem = __webpack_require__(115), _suggestItem2 = _interopRequireDefault(_suggestItem), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants);

__webpack_require__(31);

var fieldsArray = _jquery2.default.map(_page_constants2.default.FIELDS, function(e, t) {
    return {
        id: t,
        value: e,
        type: "field"
    };
}), constructor = _View2.default.extend({
    labels: {
        field: "Creative Fields"
    },
    init: function(e) {
        this.$view = e, this.rendered();
    },
    template: _suggestItem2.default,
    templater: function() {
        var e = null, t = function() {
            e = null;
        }, u = function(u) {
            return null === e && (0, _async2.default)(t), e !== u.type && (u = _jquery2.default.extend({
                divider: !0,
                typelabel: this.labels[u.type]
            }, u), e = u.type), this.template(u);
        };
        return u;
    },
    rendered: function() {
        function e(e) {
            t.autosuggest(e === _page_constants2.default.CONTENT_KEY_PROJECTS ? "enable" : "disable");
        }
        this.$view.addClass("ui-front");
        var t = this.$view.find("#search"), u = (0, _autosource2.default)({
            maxLocal: 5,
            caseInsensitive: !0
        }).addLocal(fieldsArray), r = function(e, t) {
            var u = t.item, r = (0, _jquery2.default)(this);
            if (u) return _Filters2.default.change(u.type, u.id || u.value), "search" !== u.type ? (r.val(""), 
            !1) : void r.autosuggest("close");
        };
        t.autosuggest({
            source: u,
            position: {
                at: "left+1 center"
            },
            itemTemplate: this.templater().bind(this),
            width: t.outerWidth() - 2,
            minLength: 2
        }).on({
            autosuggestselect: r,
            keydown: function(e) {
                if (!(e.isDefaultPrevented() || e.keyCode !== _jquery2.default.ui.keyCode.ENTER && e.keyCode !== _jquery2.default.ui.keyCode.NUMPAD_ENTER)) return r.call(this, e, {
                    item: {
                        type: "search",
                        value: this.value
                    }
                });
            }
        }), e(_Filters2.default.get("content")), _Filters2.default.on("content", e);
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1093:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Element = __webpack_require__(57), _Element2 = _interopRequireDefault(_Element), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants);

__webpack_require__(1034);

var constructor = _Element2.default.extend({
    init: function() {
        this._super.apply(this, arguments), this.rendered();
    },
    rendered: function() {
        this.$list = this.$parent.find("#object-tags"), this.$list_all = this.$parent.find("#object-tags-see-all"), 
        this.$count = this.$parent.find(".tags-number"), this.$list.on("click", ".object-tag", function() {
            var e, t = _Filters2.default.get("user_tags"), s = t ? t.toString().split("|") : [], i = (0, 
            _jquery2.default)(this).attr("value"), l = s.indexOf(i), r = l === -1;
            r ? s.push(i) : s.splice(l, 1), e = s && s.length ? s.join("|") : void 0, _Filters2.default.set("user_tags", e);
        }), _Filters2.default.on("user_tags", function(e) {
            var t = this;
            e = e || "";
            var s = e.toString().split("|");
            this.$list.find(".selected").removeClass("selected"), s.forEach(function(e) {
                t.$list.find("[value=" + e + "]").addClass("selected");
            });
        }, this);
    },
    destroy: function() {
        _Filters2.default.off(this), this._super();
    },
    empty: function() {
        this.$list.empty(), this.$list_all.hide();
    },
    hide: function() {
        this.$parent.hide(), this.$list_all.hide();
    },
    show: function() {
        this.$parent.show(), this.$list_all.show();
    },
    populate: function(e) {
        var t = this, s = Object.keys(e).length, i = _Filters2.default.get("user_tags") ? _Filters2.default.get("user_tags").toString() : "";
        return s ? (this.show(), _jquery2.default.each(e, function(e, s) {
            _page_constants2.default.TAGS[e] = s;
            var l = (0, _jquery2.default)('<div class="object-tag left" value="' + e + '">' + s.n + "</div>");
            i.indexOf(e) !== -1 && l.addClass("selected"), t.$list.append(l);
        }), this.$count.html(s), this.$list.css({
            maxHeight: "125px",
            height: ""
        }), this.$list_all.find(".fake-link").off("click"), void this.$list.readMoreBox(this.$list_all)) : void this.hide();
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 1094:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Element = __webpack_require__(57), _Element2 = _interopRequireDefault(_Element), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _Browse = __webpack_require__(1072), _Browse2 = _interopRequireDefault(_Browse), _Content = __webpack_require__(1073), _Content2 = _interopRequireDefault(_Content), _Fields = __webpack_require__(1074), _Fields2 = _interopRequireDefault(_Fields), _Locate = __webpack_require__(1075), _Locate2 = _interopRequireDefault(_Locate), constructor = _Element2.default.extend({
    fields: null,
    browse: null,
    locate: null,
    content: null,
    init: function() {
        function t(t, e) {
            return {
                id: e,
                value: _page_constants2.default[t][e]
            };
        }
        this._super.apply(this, arguments), this.$view = this.$parent.find("#sorts");
        var e = [];
        Object.keys(_page_constants2.default.FIELDS_GROUPED).map(function(a) {
            e.push({
                entries: _page_constants2.default.FIELDS_GROUPED[a].map(t.bind(null, "FIELDS")),
                name: a
            });
        }), this.fields_data = e, this.popular_data = _page_constants2.default.FIELDS_ORDER.map(t.bind(null, "FIELDS")), 
        this.sorts_data = _page_constants2.default.SORTS_ORDER.map(t.bind(null, "SORTS")), 
        this.times_data = _page_constants2.default.TIMES_ORDER.map(t.bind(null, "TIMES")), 
        this.countries_data = Object.keys(_page_constants2.default.LOCATION.COUNTRIES).map(function(t) {
            return {
                id: t,
                value: _page_constants2.default.LOCATION.COUNTRIES[t]
            };
        }).sort(function(t, e) {
            return "US" === t.id ? -1 : "US" === e.id ? 1 : t.value > e.value ? 1 : -1;
        }), this.states_data = _page_constants2.default.LOCATION.STATES.map(function(t, e) {
            return {
                id: _page_constants2.default.LOCATION.STATE_CODES[e],
                abbrev: _page_constants2.default.LOCATION.STATE_ABBREVIATIONS[e],
                value: t
            };
        }), this.provinces_data = _page_constants2.default.LOCATION.PROVINCES.map(function(t, e) {
            return {
                id: _page_constants2.default.LOCATION.PROVINCE_CODES[e],
                value: t
            };
        }), this.content_types = _page_constants2.default.CONTENT_KEYS.reduce(function(t, e) {
            return t[e.content] = {
                label: e.label,
                icon: e.icon
            }, t;
        }, {});
    },
    destroy: function() {
        _Filters2.default.off(null, null, this), this._super();
    },
    template: _jquery2.default,
    rendered: function() {
        this.projectRoulettes(this.$view);
    },
    projectRoulettes: function(t) {
        var e = t.find(".js-sort-content"), a = t.find(".js-sort-fields"), s = t.find(".js-sort-featured"), n = t.find(".js-sort-location");
        this.fields = new _Fields2.default({
            field: _Filters2.default.get("field"),
            fields: this.fields_data,
            populars: this.popular_data,
            title: _localization2.default.translate("discover_label_creative_fields", "Creative Fields")
        }), this.fields.setContext(a), this.browse = new _Browse2.default({
            time: _Filters2.default.get("time"),
            sort: _Filters2.default.get("sort"),
            sorts: this.sorts_data,
            times: this.times_data,
            title: _localization2.default.translate("discover_label_sort", "Sort")
        }), this.browse.setContext(s), this.locate = new _Locate2.default({
            title: _page_constants2.default.LOCATION.LABEL,
            country: _Filters2.default.get("country"),
            state: _Filters2.default.get("state"),
            city: _Filters2.default.get("city"),
            countries: this.countries_data,
            states: this.states_data,
            provinces: this.provinces_data,
            proximity: _Filters2.default.get("proximity"),
            defaultProximity: 30,
            max: 500
        }), this.locate.setContext(n), this.content = new _Content2.default({
            content: _Filters2.default.get("content"),
            contentTypes: _page_constants2.default.CONTENT_KEYS,
            contentMap: this.content_types
        }), this.content.setContext(e);
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _showMessages2 = __webpack_require__(20), _showMessages3 = _interopRequireDefault(_showMessages2), _Form = __webpack_require__(16), _Form2 = _interopRequireDefault(_Form), _validators = __webpack_require__(17), _validators2 = _interopRequireDefault(_validators), _errors = __webpack_require__(41), _errors2 = _interopRequireDefault(_errors), _handleResponse = __webpack_require__(34), _handleResponse2 = _interopRequireDefault(_handleResponse), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _buttons = __webpack_require__(28), _buttons2 = _interopRequireDefault(_buttons);

__webpack_require__(8), exports.default = _Form2.default.extend({
    xhr: _xhr2.default,
    hideButtonText: _localization2.default.translate("form_template_saving", "Saving..."),
    validator: [ _validators2.default.trimIfEmpty, _validators2.default.validateForm ],
    _submitSelector: ".form-submit:not([type=submit]):not([disabled]), .js-submit:not([type=submit]):not([disabled])",
    _displayError: function(t, e) {
        var r = {
            errors: {}
        };
        return r.errors[t.attr("name")] = _localization2.default.translateErrorMessage(e), 
        _errors2.default.displayAll(this.$form)(r);
    },
    init: function(t) {
        this._super(t), this.$context = t, this.on({
            "error:show": this._displayError.bind(this),
            "error:hide": _errors2.default.removeErrors,
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
            var t = this.value;
            (0, _jquery2.default)(this).changeInput("value", "").changeInput("value", t);
        }), this.showButtons(), this;
    },
    _getMessageContainer: function() {
        return this.$form;
    },
    showMessages: function(t) {
        if (t = _handleResponse2.default.error(t), !t.messages) throw t;
        (0, _showMessages3.default)(this._getMessageContainer(), t.messages);
    },
    submit: function(t) {
        return this.wasSubmittedFromButton = !!t, _errors2.default.removeAll(this.$form), 
        this._super.apply(this, arguments);
    },
    commit: function(t) {
        return (0, _xhr2.default)(t);
    },
    showButtons: function() {
        _buttons2.default.show(this._getButtonContainer());
    },
    hideButtons: function() {
        var t = this.hideButtonText;
        "function" == typeof t && (t = t()), _buttons2.default.hide(this._getButtonContainer(), t);
    },
    _getButtonContainer: function() {
        var t = this.$context.find(this._submitSelector).closest(".form-item").parent();
        if (!t.length && this.wasSubmittedFromButton) throw new Error("Unable to find button container:" + this.$context.html());
        return t;
    },
    _findFormError: function(t) {
        var e = _handleResponse2.default.error(t);
        if (!e.errors && "object" === _typeof(t.responseJSON)) throw t;
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
}), module.exports = exports.default;

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _moment = __webpack_require__(36), _moment2 = _interopRequireDefault(_moment), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component);

exports.default = _Component2.default.extend({
    init: function(e, t) {
        t = t || "l", e.find(".js-format-date").each(function(e, o) {
            var r = (0, _jquery2.default)(o), u = (0, _moment2.default)(r.data("date"), "MM/DD/YYYY"), n = u.format(t);
            n && r.text(n);
        });
    }
}), module.exports = exports.default;

/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function decode(e) {
    return ~e.indexOf("&lt;") ? $sanitizer.html(e).text() : e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Element = __webpack_require__(57), _Element2 = _interopRequireDefault(_Element), _pipe = __webpack_require__(24), _pipe2 = _interopRequireDefault(_pipe), _error = __webpack_require__(132), _error2 = _interopRequireDefault(_error), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window), $sanitizer = (0, 
_jquery2.default)("<div>"), Errorline = _Element2.default.extend({
    template: (0, _pipe2.default)(_error2.default, _jquery2.default),
    templateData: function() {
        return {
            message: "Oops, an error occurred. | <a class='js-reload'>Please Refesh.</a>"
        };
    },
    render: function(e) {
        return e = e ? {
            message: decode(e)
        } : null, this._super(e);
    },
    rendered: function() {
        this.$view.on("click", ".js-reload", function() {
            _window2.default.reloadLocation();
        }).show();
    },
    hide: function() {
        return this.$view && this.$view.hide();
    }
}), err, api = {
    init: function(e) {
        return err = new Errorline(e);
    },
    show: function(e) {
        err && err.render(e);
    },
    hide: function() {
        err && err.hide();
    },
    Errorline: Errorline
};

exports.default = api, module.exports = exports.default;

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function moreToggle(e, o) {
    o = o || {}, e.each(function() {
        function e() {
            return i.css("height", "auto").removeClass("hide"), {
                extended: i.height(),
                short: t.height()
            };
        }
        var t = (0, _jquery2.default)(this), i = t.next(), r = t.find(".variable-text-link, .js-more-toggle-link"), n = i.find(".variable-text-link, .js-more-toggle-link"), l = "speed" in o ? o.speed : 250;
        i.css({
            overflow: "hidden"
        }), r.on("click.be-moretoggle", function() {
            var o = e();
            t.addClass("hide"), i.css("height", o.short + "px").animate({
                height: o.extended + "px"
            }, l);
        }), n.on("click.be-moretoggle", function() {
            i.animate({
                height: e().short + "px"
            }, l, function() {
                t.removeClass("hide"), i.addClass("hide");
            });
        });
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery);

moreToggle.off = function(e) {
    e.each(function() {
        var e = (0, _jquery2.default)(this), o = e.next(), t = e.find(".variable-text-link, .js-more-toggle-link"), i = o.find(".variable-text-link, .js-more-toggle-link");
        t.off("click.be-moretoggle"), i.off("click.be-moretoggle");
    });
}, moreToggle.init = function(e) {
    moreToggle(e.find(".js-more-toggle"));
}, moreToggle.destroy = function(e) {
    moreToggle.off(e.find(".js-more-toggle"));
}, exports.default = moreToggle, module.exports = exports.default;

/***/ },

/***/ 114:
/***/ function(module, exports) {

!function(e) {
    function t(e) {
        return String(e.attr("name")).replace(/([\[\]])/g, "\\$1");
    }
    e.fn.customInput = function(c) {
        return c = e.extend({
            container: e(document.body)
        }, c), e(this).each(function() {
            if (e(this).is("[type=checkbox],[type=radio]") && 0 === e(this).parent(".custom-" + e(this).attr("type")).length) {
                var i = e(this), n = c.container.find("label[for=" + i.attr("id") + "]");
                if (!n.length) return;
                var a = i.is("[type=checkbox]") ? "checkbox" : "radio";
                e('<div class="custom-' + a + '"></div>').insertBefore(i).append(i, n);
                var s = c.container.find("input[name=" + t(i) + "]"), o = n.find("a[target=_blank]");
                o.each(function() {
                    var t = this.href;
                    e(this).bind("click", function(e) {
                        return e.stopPropagation(), e.preventDefault(), window.open(t, "_blank"), !1;
                    }), this.href = "#", this.removeAttribute("target");
                }), n.hover(function() {
                    e(this).addClass("hover"), "checkbox" == a ? i.trigger("customOver") : c.container.find("[name=" + t(i) + "]").each(function() {
                        e(this).trigger("customOverName");
                    }), "checkbox" == a && i.is(":checked") && e(this).addClass("checkedHover");
                }, function() {
                    e(this).removeClass("hover checkedHover"), "checkbox" == a ? i.trigger("customOut") : c.container.find("[name=" + t(i) + "]").each(function() {
                        e(this).trigger("customOutName");
                    });
                }), i.bind("updateState", function() {
                    s = c.container.find("input[name=" + t(i) + "]"), i.is(":checked") ? (i.is(":radio") && s.each(function() {
                        c.container.find("label[for=" + e(this).attr("id") + "]").removeClass("checked");
                    }), n.addClass("checked")) : n.removeClass("checked checkedHover checkedFocus");
                }).bind("updateState disable enable", function(e) {
                    i.is(":disabled") || e && "disable" === e.type ? (n.addClass("disabled"), i.is(":checked") && n.addClass("checkedDisabled")) : n.removeClass("disabled checkedDisabled");
                }).trigger("updateState").click(function() {
                    e(this).trigger("updateState");
                }).focus(function() {
                    n.addClass("focus"), "checkbox" == a && i.is(":checked") && n.addClass("checkedFocus");
                }).blur(function() {
                    n.removeClass("focus checkedFocus");
                });
            }
        }), this;
    };
}(jQuery);

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("divider",c,p,1),c,p,0,12,104,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"ui-menu-divider\"></div>");t.b("\n" + i);t.b("<div class=\"ui-menu-divider-label\">");t.b(t.v(t.f("typelabel",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("<li class=\"ui-menu-item-");t.b(t.v(t.f("type",c,p,0)));t.b("\"><a class=\"text-ellipsis\">");t.b(t.v(t.f("value",c,p,0)));t.b("</a></li>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "{{#divider}}\n<div class=\"ui-menu-divider\"></div>\n<div class=\"ui-menu-divider-label\">{{typelabel}}</div>\n{{/divider}}\n<li class=\"ui-menu-item-{{type}}\"><a class=\"text-ellipsis\">{{value}}</a></li>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getRequestParam(e, t) {
    return _jquery2.default.extend(e, t ? {
        data: {
            client_id: t
        }
    } : {});
}

function getUserProjects(e, t) {
    var r = getRequestParam({
        url: "/v2/users/" + e + "/projects",
        type: "GET"
    }, t);
    return (0, _xhr2.default)(r);
}

function getUserData(e, t) {
    var r = getRequestParam({
        url: "/v2/users/" + e,
        type: "GET"
    }, t);
    return (0, _xhr2.default)(r);
}

function scale(e, t, r, n) {
    r = r || 1;
    var o = e.width() / t.width() * r;
    return n ? void t.css({
        zoom: 100 * o + "%"
    }) : void t.css({
        transform: "scale(" + o + ")"
    });
}

function autoScaleDesktopContent(e, t) {
    var r = e.find(".js-desktop-screenshot"), n = r.find(".js-project");
    scale(r, n, t);
}

function autoScaleMobileContent(e, t) {
    var r = e.find(".js-mobile-screenshot"), n = r.find(".js-header");
    scale(r, n, null, t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr);

exports.default = {
    getData: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = t && t.username ? t.username : "me", o = e && e.client_id ? e.client_id : null, a = getUserProjects(n, o), i = getUserData(n, o);
        return Promise.all([ a, i ]).then(function(t) {
            var n = t[0].projects, o = t[1].user;
            return {
                paidCC: e ? e.paidCC : null,
                first_name: o.first_name,
                displayName: o.display_name,
                cover_1: n[0].covers[404],
                cover_2: n[1].covers[404],
                field_1: o.fields[0] || "",
                field_2: o.fields[1] || "",
                projectSrc: r ? _window2.default.getLocation("href").replace("share=1", "iframe=1&minimal=1") : n[0].url + "?iframe=1&minimal=1",
                numProjects: n.length
            };
        });
    },
    autoScaleContent: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .9, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "zoom" in document.body.style;
        autoScaleDesktopContent(e, t), autoScaleMobileContent(e, r);
    }
}, module.exports = exports.default;

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(jQuery);
}(function(e) {
    var t = !1;
    return e(document).mouseup(function() {
        t = !1;
    }), e.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e);
            }).bind("click." + this.widgetName, function(s) {
                if (!0 === e.data(s.target, t.widgetName + ".preventClickEvent")) return e.removeData(s.target, t.widgetName + ".preventClickEvent"), 
                s.stopImmediatePropagation(), !1;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(s) {
            if (!t) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(s), this._mouseDownEvent = s;
                var i = this, o = 1 === s.which, u = !("string" != typeof this.options.cancel || !s.target.nodeName) && e(s.target).closest(this.options.cancel).length;
                return !(o && !u && this._mouseCapture(s)) || (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(s) && this._mouseDelayMet(s) && (this._mouseStarted = this._mouseStart(s) !== !1, 
                !this._mouseStarted) ? (s.preventDefault(), !0) : (!0 === e.data(s.target, this.widgetName + ".preventClickEvent") && e.removeData(s.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e);
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e);
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                s.preventDefault(), t = !0, !0));
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t);
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), 
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, 
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
        },
        _mouseUp: function(s) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, s.target === this._mouseDownEvent.target && e.data(s.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(s)), t = !1, !1;
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    });
});

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_button": __webpack_require__(48).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_follow/_button0",c,p,""));return t.fl(); },partials: {"<lib/_follow/_button0":{name:"lib/_follow/_button", partials: {}, subs: { "follow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,52,80,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_follow_all|Follow All");});c.pop();}},"following": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,136,170,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_following_all|Following All");});c.pop();}},"unfollow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,228,260,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_unfollow_all|Unfollow All");});c.pop();}},"type": function(c,p,t,i) {t.b("project");} }}}, subs: {  }}, "{{<lib/_follow/_button}}\n  {{$follow}}{{#translate}}button_follow_all|Follow All{{/translate}}{{/follow}}\n  {{$following}}{{#translate}}button_following_all|Following All{{/translate}}{{/following}}\n  {{$unfollow}}{{#translate}}button_unfollow_all|Unfollow All{{/translate}}{{/unfollow}}\n  {{$type}}project{{/type}}\n{{/lib/_follow/_button}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_button": __webpack_require__(48).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_follow/_button0",c,p,""));return t.fl(); },partials: {"<lib/_follow/_button0":{name:"lib/_follow/_button", partials: {}, subs: { "size": function(c,p,t,i) {t.b("form-button-small");},"follow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,90,118,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_follow_all|Follow All");});c.pop();}},"following": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,174,208,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_following_all|Following All");});c.pop();}},"unfollow": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,266,298,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_unfollow_all|Unfollow All");});c.pop();}},"type": function(c,p,t,i) {t.b("project");} }}}, subs: {  }}, "{{<lib/_follow/_button}}\n  {{$size}}form-button-small{{/size}}\n  {{$follow}}{{#translate}}button_follow_all|Follow All{{/translate}}{{/follow}}\n  {{$following}}{{#translate}}button_following_all|Following All{{/translate}}{{/following}}\n  {{$unfollow}}{{#translate}}button_unfollow_all|Unfollow All{{/translate}}{{/unfollow}}\n  {{$type}}project{{/type}}\n{{/lib/_follow/_button}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_button": __webpack_require__(48).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(!t.s(t.f("is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<lib/_follow/_button0",c,p,""));};return t.fl(); },partials: {"<lib/_follow/_button0":{name:"lib/_follow/_button", partials: {}, subs: { "classes": function(c,p,t,i) {t.b("user-follow");},"type": function(c,p,t,i) {t.b("user");} }}}, subs: {  }}, "{{^is_profile_owner}}\n  {{<lib/_follow/_button}}\n    {{$classes}}user-follow{{/classes}}\n    {{$type}}user{{/type}}\n  {{/lib/_follow/_button}}\n{{/is_profile_owner}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<a class=\"profile-item__link follow-button-container ");if(t.s(t.f("is_following",c,p,1),c,p,0,70,79,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("following");});c.pop();}t.b(" js-action-follow\" data-followee=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-entity=\"");t.sub("type",c,p,i);t.b("\" data-following=\"");if(t.s(t.f("is_following",c,p,1),c,p,0,204,208,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("true");});c.pop();}if(!t.s(t.f("is_following",c,p,1),c,p,1,0,0,"")){t.b("false");};t.b("\">");t.b("\n" + i);t.b("  <span class=\"follow\">+ ");if(t.s(t.f("translate",c,p,1),c,p,0,306,326,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_follow|Follow");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("  <span class=\"unfollow\">- ");if(t.s(t.f("translate",c,p,1),c,p,0,389,413,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_unfollow|Unfollow");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("  <span class=\"following\">");if(t.s(t.f("translate",c,p,1),c,p,0,475,501,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_following|Following");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("</a>");return t.fl(); },partials: {}, subs: { "type": function(c,p,t,i) {} }}, "<a class=\"profile-item__link follow-button-container {{#is_following}}following{{/is_following}} js-action-follow\" data-followee=\"{{id}}\" data-entity=\"{{$type}}{{/type}}\" data-following=\"{{#is_following}}true{{/is_following}}{{^is_following}}false{{/is_following}}\">\n  <span class=\"follow\">+ {{#translate}}button_follow|Follow{{/translate}}</span>\n  <span class=\"unfollow\">- {{#translate}}button_unfollow|Unfollow{{/translate}}</span>\n  <span class=\"following\">{{#translate}}button_following|Following{{/translate}}</span>\n</a>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_profileListItem": __webpack_require__(77).template,"lib/_follow/_buttonUser": __webpack_require__(122).template,"lib/_message/_button": __webpack_require__(224).template,"lib/_follow/_buttonUserSmall": __webpack_require__(51).template,"lib/_message/_buttonSmall": __webpack_require__(173).template,"lib/_follow/_buttonAll": __webpack_require__(120).template,"lib/_follow/_buttonAllSmall": __webpack_require__(121).template,"project/_blocks/_ownerEditButton": __webpack_require__(238).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"project-owner-info");if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,180,200,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" multiple-owner-info");});c.pop();}if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){t.b(" single-owner-info");};t.b(" ");t.sub("ownerInfoClasses",c,p,i);t.b("\">");t.b("\n" + i);if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,378,1233,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"profile-list\">");t.b("\n" + i);t.b("          <a class=\"normal-link profile-list-image-wrap js-mini-profile\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" ");t.sub("attr",c,p,i);t.b("><img class=\"profile-list-image\" src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" /></a>");t.b("\n" + i);t.b("          <div class=\"profile-list-info\">");t.b("\n" + i);t.b("          <div class=\"profile-list-name\">");t.b("\n" + i);t.b("            <a target=\"_blank\" class=\"normal-link js-mini-profile\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" ");t.sub("attr",c,p,i);t.b(">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("          </div><!-- /.profile-list-name -->");t.b("\n" + i);if(t.s(t.f("location",c,p,1),c,p,0,889,1132,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <div class=\"profile-location\">");t.b("\n" + i);t.b("              <a target=\"_blank\" class=\"profile-list-location-link beicons-pre beicons-pre-location\" href=\"");t.b(t.v(t.f("location_link",c,p,0)));t.b("\">");t.b(t.v(t.f("location",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("            </div><!-- /.profile-location -->");t.b("\n" + i);});c.pop();}t.b("          </div><!-- /.profile-list-info -->");t.b("\n" + i);t.b("        </div><!-- /.profile-list -->");t.b("\n" + i);});c.pop();}};if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,1298,1753,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"project-owner-avatar\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,1355,1427,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <img src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" class=\"multiple-owner-avatar\">");t.b("\n" + i);});c.pop();}t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"tooltip--container\">");t.b("\n" + i);t.b("      <a class=\"profile-list-name multiple-owners-name\">");if(t.s(t.f("translate",c,p,1),c,p,0,1557,1596,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_multiple_owners|Multiple Owners");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("      <div class=\"tooltip--main\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,1666,1711,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_profileListItem0",c,p,"          "));});c.pop();}t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(!t.s(t.f("is_owner",c,p,1),c,p,1,0,0,"")){if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,1841,2773,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"project-owner-actions ");t.sub("ownerActionClasses",c,p,i);t.b("\">");t.b("\n" + i);t.b("          <div class=\"hide-phone js-hide-phone\">");t.b("\n" + i);if(t.s(t.d(".",c,p,1),c,p,0,1998,2112,"{{ }}")){t.rs(c,p,function(c,p,t){t.sub("followButton",c,p,i);});c.pop();}if(t.s(t.d(".",c,p,1),c,p,0,2135,2288,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_message/_button2",c,p,""));});c.pop();}t.b("          </div>");t.b("\n" + i);t.b("          <div class=\"show-phone\">");t.b("\n" + i);if(t.s(t.d(".",c,p,1),c,p,0,2365,2426,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_follow/_buttonUserSmall3",c,p,"              "));});c.pop();}if(t.s(t.d(".",c,p,1),c,p,0,2451,2728,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("              <div class=\"profile-action user-message\">");t.b("\n" + i);t.b(t.rp("<lib/_message/_buttonSmall4",c,p,""));t.b("              </div>");t.b("\n" + i);});c.pop();}t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);});c.pop();}};t.b("\n" + i);if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,2843,3226,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"project-owner-actions follow-all-container ");t.sub("ownerActionClasses",c,p,i);t.b("\">");t.b("\n" + i);t.b("        <div class=\"hide-phone js-hide-phone\">");t.b("\n" + i);t.sub("followButtonAll",c,p,i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"show-phone\">");t.b("\n" + i);t.b(t.rp("<lib/_follow/_buttonAllSmall6",c,p,"          "));t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}};t.b("\n" + i);if(!t.s(t.f("is_editor",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("is_owner",c,p,1),c,p,0,3302,3505,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"project-owner-actions ");t.sub("ownerActionClasses",c,p,i);t.b("\">");t.b("\n" + i);t.sub("editButton",c,p,i);t.b("      </div>");t.b("\n" + i);});c.pop();}};if(t.s(t.f("is_editor",c,p,1),c,p,0,3552,3917,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"project-owner-actions\">");t.b("\n" + i);if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){t.sub("followButton",c,p,i);};if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,3776,3879,"{{ }}")){t.rs(c,p,function(c,p,t){t.sub("followButtonAll",c,p,i);});c.pop();}t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_profileListItem0":{name:"lib/_profileListItem", partials: {}, subs: {  }},"<followButtonlib/_follow/_buttonUser1":{name:"lib/_follow/_buttonUser", partials: {}, subs: {  }},"<lib/_message/_button2":{name:"lib/_message/_button", partials: {}, subs: { "classes": function(c,p,t,i) {t.b("project-action user-message");} }},"<lib/_follow/_buttonUserSmall3":{name:"lib/_follow/_buttonUserSmall", partials: {}, subs: {  }},"<lib/_message/_buttonSmall4":{name:"lib/_message/_buttonSmall", partials: {}, subs: { "classes": function(c,p,t,i) {t.b("form-button-light-and-grey form-button form-button-small");} }},"<followButtonAlllib/_follow/_buttonAll5":{name:"lib/_follow/_buttonAll", partials: {}, subs: {  }},"<lib/_follow/_buttonAllSmall6":{name:"lib/_follow/_buttonAllSmall", partials: {}, subs: {  }},"<editButtonproject/_blocks/_ownerEditButton7":{name:"project/_blocks/_ownerEditButton", partials: {}, subs: {  }},"<followButtonlib/_follow/_buttonUser8":{name:"lib/_follow/_buttonUser", partials: {}, subs: {  }},"<followButtonAlllib/_follow/_buttonAll9":{name:"lib/_follow/_buttonAll", partials: {}, subs: {  }}}, subs: { "ownerInfoClasses": function(c,p,t,i) {},"attr": function(c,p,t,i) {},"ownerActionClasses": function(c,p,t,i) {},"followButton": function(c,p,t,i) {t.b(t.rp("<followButtonlib/_follow/_buttonUser8",c,p,"          "));},"followButtonAll": function(c,p,t,i) {t.b(t.rp("<followButtonAlllib/_follow/_buttonAll9",c,p,"          "));},"editButton": function(c,p,t,i) {t.b(t.rp("<editButtonproject/_blocks/_ownerEditButton7",c,p,"          "));} }}, "{{!this template is also used within the owner bar in the project footer}}\n{{!TODO: account for looking at your own project}}\n<div class=\"project-owner-info{{#has_multiple_owners}} multiple-owner-info{{/has_multiple_owners}}{{^has_multiple_owners}} single-owner-info{{/has_multiple_owners}} {{$ownerInfoClasses}}{{/ownerInfoClasses}}\">\n  {{^has_multiple_owners}}\n    {{#owners}}\n        <div class=\"profile-list\">\n          <a class=\"normal-link profile-list-image-wrap js-mini-profile\" href=\"{{url}}\" data-id=\"{{id}}\" {{$attr}}{{/attr}}><img class=\"profile-list-image\" src=\"{{images.115}}\" /></a>\n          <div class=\"profile-list-info\">\n          <div class=\"profile-list-name\">\n            <a target=\"_blank\" class=\"normal-link js-mini-profile\" href=\"{{url}}\" data-id=\"{{id}}\" {{$attr}}{{/attr}}>{{display_name}}</a>\n          </div><!-- /.profile-list-name -->\n          {{#location}}\n            <div class=\"profile-location\">\n              <a target=\"_blank\" class=\"profile-list-location-link beicons-pre beicons-pre-location\" href=\"{{location_link}}\">{{location}}</a>\n            </div><!-- /.profile-location -->\n          {{/location}}\n          </div><!-- /.profile-list-info -->\n        </div><!-- /.profile-list -->\n    {{/owners}}\n  {{/has_multiple_owners}}\n  {{#has_multiple_owners}}\n    <div class=\"project-owner-avatar\">\n      {{#owners}}\n        <img src=\"{{images.115}}\" class=\"multiple-owner-avatar\">\n      {{/owners}}\n    </div>\n    <div class=\"tooltip--container\">\n      <a class=\"profile-list-name multiple-owners-name\">{{#translate}}project_multiple_owners|Multiple Owners{{/translate}}</a>\n      <div class=\"tooltip--main\">\n      {{#owners}}\n          {{>lib/_profileListItem}}\n        {{/owners}}\n        </div>\n      </div>\n  {{/has_multiple_owners}}\n\n  {{^is_owner}}\n    {{^has_multiple_owners}}\n      {{#owners}}\n        <div class=\"project-owner-actions {{$ownerActionClasses}}{{/ownerActionClasses}}\">\n          <div class=\"hide-phone js-hide-phone\">\n          {{#.}}\n            {{$followButton}}\n              {{>lib/_follow/_buttonUser}}\n            {{/followButton}}\n          {{/.}}\n          {{#.}}\n            {{<lib/_message/_button}}\n              {{$classes}}project-action user-message{{/classes}}\n            {{/lib/_message/_button}}\n          {{/.}}\n          </div>\n          <div class=\"show-phone\">\n            {{#.}}\n              {{>lib/_follow/_buttonUserSmall}}\n            {{/.}}\n            {{#.}}\n              <div class=\"profile-action user-message\">\n              {{<lib/_message/_buttonSmall}}\n                {{$classes}}form-button-light-and-grey form-button form-button-small{{/classes}}\n              {{/lib/_message/_buttonSmall}}\n              </div>\n            {{/.}}\n          </div>\n        </div>\n      {{/owners}}\n    {{/has_multiple_owners}}\n\n    {{#has_multiple_owners}}\n      <div class=\"project-owner-actions follow-all-container {{$ownerActionClasses}}{{/ownerActionClasses}}\">\n        <div class=\"hide-phone js-hide-phone\">\n          {{$followButtonAll}}\n            {{>lib/_follow/_buttonAll}}\n          {{/followButtonAll}}\n        </div>\n        <div class=\"show-phone\">\n          {{>lib/_follow/_buttonAllSmall}}\n        </div>\n      </div>\n    {{/has_multiple_owners}}\n  {{/is_owner}}\n\n  {{^is_editor}}\n    {{#is_owner}}\n      <div class=\"project-owner-actions {{$ownerActionClasses}}{{/ownerActionClasses}}\">\n        {{$editButton}}\n          {{>project/_blocks/_ownerEditButton}}\n        {{/editButton}}\n      </div>\n    {{/is_owner}}\n  {{/is_editor}}\n  {{#is_editor}}\n    <div class=\"project-owner-actions\">\n      {{^has_multiple_owners}}\n        {{$followButton}}\n          {{>lib/_follow/_buttonUser}}\n        {{/followButton}}\n      {{/has_multiple_owners}}\n      {{#has_multiple_owners}}\n        {{$followButtonAll}}\n          {{>lib/_follow/_buttonAll}}\n        {{/followButtonAll}}\n      {{/has_multiple_owners}}\n    </div>\n  {{/is_editor}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(60).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.d("features.0",c,p,1),c,p,0,15,807,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_block0",c,p,""));});c.pop();}return t.fl(); },partials: {"<project/_blocks/_block0":{name:"project/_blocks/_block", partials: {}, subs: { "class": function(c,p,t,i) {t.b("project-block--featured");},"content": function(c,p,t,i) {t.b("      <div class=\"featured\">");t.b("\n" + i);if(t.s(t.f("features",c,p,1),c,p,0,161,733,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <div class=\"featured__ribbon tooltipi-container\">");t.b("\n" + i);t.b("            <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("              <img src=\"");t.b(t.v(t.d("site.ribbon.image",c,p,0)));t.b("\" srcset=\"");t.b(t.v(t.d("site.ribbon.image",c,p,0)));t.b(", ");t.b(t.v(t.d("site.ribbon.image_2x",c,p,0)));t.b(" 2x\">");t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("            <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b("              <div class=\"project-block-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,490,530,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_featured_on|Project Featured On:");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("              <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b(t.v(t.d("site.name",c,p,0)));t.b("</a> &mdash; <span class=\"js-format-date\" data-date=\"");t.b(t.v(t.f("featured_on",c,p,0)));t.b("\">");t.b(t.v(t.f("featured_on",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);});c.pop();}t.b("      </div>");t.b("\n" + i);} }}}, subs: {  }}, "{{#features.0}}\n  {{<project/_blocks/_block}}\n    {{$class}}project-block--featured{{/class}}\n    {{$content}}\n      <div class=\"featured\">\n        {{#features}}\n          <div class=\"featured__ribbon tooltipi-container\">\n            <a href=\"{{url}}\">\n              <img src=\"{{site.ribbon.image}}\" srcset=\"{{site.ribbon.image}}, {{site.ribbon.image_2x}} 2x\">\n            </a>\n            <div class=\"tooltipi tooltipi-white\">\n              <div class=\"project-block-header\">{{#translate}}project_featured_on|Project Featured On:{{/translate}}</div>\n              <a href=\"{{url}}\">{{site.name}}</a> &mdash; <span class=\"js-format-date\" data-date=\"{{featured_on}}\">{{featured_on}}</span>\n            </div>\n          </div>\n        {{/features}}\n      </div>\n    {{/content}}\n  {{/project/_blocks/_block}}\n{{/features.0}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(60).template,"project/_blocks/_owner": __webpack_require__(124).template,"lib/_follow/_buttonUserSmall": __webpack_require__(51).template,"lib/_follow/_buttonAllSmall": __webpack_require__(121).template,"project/_blocks/_ownerEditButtonSmall": __webpack_require__(239).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_block4",c,p,""));return t.fl(); },partials: {"<project/_blocks/_block4":{name:"project/_blocks/_block", partials: {"<contentproject/_blocks/_owner3":{name:"project/_blocks/_owner", partials: {"<followButtonlib/_follow/_buttonUserSmall0":{name:"lib/_follow/_buttonUserSmall", partials: {}, subs: {  }},"<followButtonAlllib/_follow/_buttonAllSmall1":{name:"lib/_follow/_buttonAllSmall", partials: {}, subs: {  }},"<editButtonproject/_blocks/_ownerEditButtonSmall2":{name:"project/_blocks/_ownerEditButtonSmall", partials: {}, subs: {  }}}, subs: { "ownerInfoClasses": function(c,p,t,i) {t.b("project-owner-info--header");},"followButton": function(c,p,t,i) {t.b(t.rp("<followButtonlib/_follow/_buttonUserSmall0",c,p,"        "));},"followButtonAll": function(c,p,t,i) {t.b(t.rp("<followButtonAlllib/_follow/_buttonAllSmall1",c,p,"        "));},"editButton": function(c,p,t,i) {t.b(t.rp("<editButtonproject/_blocks/_ownerEditButtonSmall2",c,p,"        "));} }}}, subs: { "class": function(c,p,t,i) {t.b("project-block--owner");},"content": function(c,p,t,i) {t.b(t.rp("<contentproject/_blocks/_owner3",c,p,""));} }}}, subs: {  }}, "{{<project/_blocks/_block}}\n  {{$class}}project-block--owner{{/class}}\n  {{$content}}\n    {{<project/_blocks/_owner}}\n      {{$ownerInfoClasses}}project-owner-info--header{{/ownerInfoClasses}}\n\n      {{$followButton}}\n        {{>lib/_follow/_buttonUserSmall}}\n      {{/followButton}}\n\n      {{$followButtonAll}}\n        {{>lib/_follow/_buttonAllSmall}}\n      {{/followButtonAll}}\n\n      {{$editButton}}\n        {{>project/_blocks/_ownerEditButtonSmall}}\n      {{/editButton}}\n\n    {{/project/_blocks/_owner}}\n  {{/content}}\n{{/project/_blocks/_block}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(60).template,"project/_blocks/_stats": __webpack_require__(243).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_block1",c,p,""));return t.fl(); },partials: {"<project/_blocks/_block1":{name:"project/_blocks/_block", partials: {"<contentproject/_blocks/_stats0":{name:"project/_blocks/_stats", partials: {}, subs: {  }}}, subs: { "class": function(c,p,t,i) {t.b("project-block--info");},"content": function(c,p,t,i) {t.b("    <div class=\"project-title\">");t.b(t.v(t.f("name",c,p,0)));t.b("</div>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"project-fields js-project-fields\">");t.b("\n" + i);t.b("      <ul id=\"project-fields-list\">");t.b("\n" + i);if(t.s(t.f("fields",c,p,1),c,p,0,236,320,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li class=\"project-fields-field\"><a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("      </ul>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b(t.rp("<contentproject/_blocks/_stats0",c,p,"    "));t.b("    <div class=\"project-published\">");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,443,476,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_published_date|Published:");});c.pop();}t.b(" <span class=\"js-format-timestamp\" data-timestamp=\"");t.b(t.v(t.f("published_on",c,p,0)));t.b("\"></span>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_block}}\n  {{$class}}project-block--info{{/class}}\n  {{$content}}\n    <div class=\"project-title\">{{name}}</div>\n\n    <div class=\"project-fields js-project-fields\">\n      <ul id=\"project-fields-list\">\n      {{#fields}}\n        <li class=\"project-fields-field\"><a href=\"{{url}}\">{{name}}</a></li>\n      {{/fields}}\n      </ul>\n    </div>\n    {{>project/_blocks/_stats}}\n    <div class=\"project-published\">\n      {{#translate}}project_published_date|Published:{{/translate}} <span class=\"js-format-timestamp\" data-timestamp=\"{{published_on}}\"></span>\n    </div>\n  {{/content}}\n{{/project/_blocks/_block}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function extract(t) {
    return t.value = t.n, t;
}

function transform(t) {
    return t.map(extract);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _has = __webpack_require__(96), _has2 = _interopRequireDefault(_has), _async = __webpack_require__(53), _async2 = _interopRequireDefault(_async), _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _autosource = __webpack_require__(58), _autosource2 = _interopRequireDefault(_autosource), _tooltip = __webpack_require__(67), _tooltip2 = _interopRequireDefault(_tooltip), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _suggestItem = __webpack_require__(115), _suggestItem2 = _interopRequireDefault(_suggestItem);

__webpack_require__(68), __webpack_require__(31), 
__webpack_require__(8), __webpack_require__(54);

var touch = (0, _has2.default)("touch");

exports.default = _Component2.default.extend({
    init: function(t, e) {
        this._options = (0, _extend2.default)({
            country: ".country, .js-country",
            state: ".state, .js-state",
            province: ".province, .js-province",
            hidden_state: ".hidden-state, .js-hidden-state",
            city: ".city, .js-city",
            hidden_city: ".js-hidden-city",
            showErrors: !0,
            disableState: !1,
            autoSelectMenu: !1
        }, e);
        var i = t.find(this._options.city), n = t.find(this._options.hidden_city);
        n.length || (n = (0, _jquery2.default)("<input>", {
            type: "hidden",
            name: "location_id"
        }).insertAfter(i)), this._$context = t, this._$country = t.find(this._options.country), 
        this._$state = t.find(this._options.state), this._$province = t.find(this._options.province), 
        this._$stateProvince = this._$state.add(this._$province), this._$hiddenState = t.find(this._options.hidden_state), 
        this._$city = i, this._lastSelected = this._$city.val() || !1, this._$locationId = n, 
        this._$cityAndLocationId = i.add(n);
    },
    bind: function() {
        var t = this, e = this.getStateOrProvinceField();
        this._$country.on("change", function(e) {
            t._reset(), t._countryChanged(e.target.value);
        }), this._$stateProvince.on("change", function(e) {
            t._resetCityValue(), t._stateChanged(e.target.value);
        }), this._autoselect(), this._options.disableState && (this._$stateProvince.changeInput("disable"), 
        e && e.changeInput("enable")), this.refresh(), this._$city.add(this._$state, this._$province, this._$country).on("change selectmenuoldchange", function() {
            t.trigger("change", t.get());
        });
    },
    get: function(t) {
        var e = this._$country.find('[value="' + this._$country.val() + '"]');
        return {
            country: t ? this._$country.val() || e.data("code") || e.attr("code") : e.data("code") || e.attr("code") || this._$country.val(),
            state: this._$hiddenState.val(),
            location_id: this._$locationId.val(),
            city: this._$city.val()
        };
    },
    toString: function() {
        var t = this.get();
        return [ "city", "state", "country" ].reduce(function(e, i) {
            return t[i] && e.push(t[i]), e;
        }, []).join(", ");
    },
    refresh: function() {
        var t = this._$country.val(), e = this.getStateOrProvinceField();
        this._countryChanged(t), this._requiresStateOrProvince(t) && this._stateChanged(e && e.length ? e.val() : ""), 
        this._shouldAutoSelect() && this._$context.find("select").autoselectmenu(), this._$city.autosuggest("option", "width", this._$city.outerWidth());
    },
    getStateOrProvinceField: function() {
        var t = this._$country.val();
        return this._isUnitedStates(t) ? this._$state : this._isCanada(t) ? this._$province : void 0;
    },
    getCityField: function() {
        return this._$city;
    },
    getCountryField: function() {
        return this._$country;
    },
    getCountryFromISOCode: function(t) {
        return this._$country.find('[data-code="' + t + '"]').val() || this._$country.find('[value="' + t + '"]').val() || "";
    },
    setLocationId: function(t) {
        this._$locationId.val(t);
    },
    setCity: function(t, e) {
        this._$city.val(t), this._$context.toggleClass("city-selected", !!t), this._lastSelected = t || !1, 
        void 0 !== e && this.setLocationId(e), this.trigger("change", this.get());
    },
    _countryChanged: function(t) {
        var e = this.getStateOrProvinceField(t);
        e ? this._toggleStateOrProvince(e) : "" !== t && this._enableCity(), this._$context.toggleClass("showing-stateprov", !!e);
    },
    _stateChanged: function(t) {
        this._$hiddenState.val(t), this._toggleCity(!!t);
    },
    _requiresStateOrProvince: function(t) {
        return this._isUnitedStates(t) || this._isCanada(t);
    },
    _isUnitedStates: function(t) {
        return "US" === t || "United States" === t;
    },
    _isCanada: function(t) {
        return "CA" === t || "Canada" === t;
    },
    _toggleStateOrProvince: function(t) {
        var e = t.closest(t.data("containerSelector"));
        e = e.length ? e : t.parent(), e.removeClass("hide"), t.changeInput("enable"), this._shouldAutoSelect() && t.autoselectmenu();
    },
    _toggleCity: function(t) {
        t ? this._enableCity() : this._disableCity();
    },
    _disableCity: function() {
        this._$cityAndLocationId.addClass("disabled").prop("disabled", !0);
    },
    _enableCity: function() {
        (this._$cityAndLocationId.is(".disabled") || this._$cityAndLocationId.is(":disabled")) && this._$cityAndLocationId.removeClass("disabled").removeAttr("disabled");
    },
    _shouldAutoSelect: function() {
        return this._options.autoSelectMenu && !touch;
    },
    _reset: function() {
        this._resetValues(), this._resetVisibility();
    },
    _resetVisibility: function() {
        var t, e = this._$stateProvince;
        this._disableCity(), e && (t = e.closest(e.data("containerSelector")), t = t.length ? t : e.parent(), 
        t.addClass("hide"), this._options.disableState && e.changeInput("disable"));
    },
    _resetCityValue: function() {
        this._$city.is(".autocomplete") && this._$city.autoselect("empty"), this.setCity("", "");
    },
    _resetValues: function() {
        this._$stateProvince.changeInput("value", ""), this._$hiddenState.val(""), this._removeErrors(this._$city), 
        this._resetCityValue();
    },
    _removeErrors: function(t) {
        t.siblings(".form-error").remove(), t.parent().removeClass("form-item-error");
    },
    _autoselect: function() {
        var t = (0, _autosource2.default)({
            caseInsensitive: !0
        }), e = this._$hiddenState, i = this._$country, n = this._$stateProvince, o = this._$city, s = this;
        t.addRemote(function(t) {
            var o = t.term, s = i.find('option[value="' + i.val() + '"]'), a = n.find('option[value="' + e.val() + '"]'), r = s.data("code") || s.attr("code") || i.val(), u = a.data("code") || a.attr("code") || e.val();
            return (0, _xhr2.default)({
                url: "/utilities/location",
                data: {
                    level: "3",
                    country: r,
                    stateprov: u,
                    city: o
                }
            }).then(transform);
        }), o.on("keyup", function() {
            s._lastSelected !== !1 && s._lastSelected !== this.value && (s._$context.removeClass("city-selected"), 
            s._lastSelected = !1, s.trigger("pendingChange", s.get()));
        }), o.autosuggest({
            source: t,
            position: {
                my: "right top",
                at: "right bottom"
            },
            itemTemplate: _suggestItem2.default,
            minLength: 2,
            width: o.outerWidth()
        }).on({
            autosuggestselect: function(t, e) {
                (0, _async2.default)(function() {
                    s.setCity(e.item.value, e.item.location_id);
                });
            },
            autosuggestchange: function(t, e) {
                var i = e.item, n = (0, _jquery2.default)(this).data("beAutosuggest");
                s._removeErrors(o), i || n.widget().children().each(function() {
                    var t = (0, _jquery2.default)(this).data("ui-autocomplete-item");
                    if (new RegExp("^" + t.value + "$", "gi").test(n.term)) return i = t, !1;
                }), !i && s._options.showErrors && (0, _tooltip2.default)(o, _localization2.default.translate("error_city", "Please type in your city."), [ "form-error" ]), 
                s.setLocationId(i && i.location_id), s.setCity(i && i.value), n._trigger("changevalidated", null, {
                    valid: !!i
                });
            },
            blur: function() {
                "" === o.val().trim() && (s._removeErrors(o), s._resetCityValue(), s._options.showErrors && (0, 
                _tooltip2.default)(o, _localization2.default.translate("error_city", "Please type in your city."), [ "form-error" ]));
            }
        });
    }
}), module.exports = exports.default;

/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function forward(e) {
    var t = e.data.touch, o = e.originalEvent.changedTouches[0];
    if (!(Math.sqrt(Math.pow(t.pageX - o.pageX, 2) + Math.pow(t.pageY - o.pageY, 2)) > threshold)) {
        var i = this.$view.find("a:visible").first().get(0);
        i.click ? i.click() : _window2.default.setLocation(i.href);
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window), threshold = 30, decay = 300;

exports.default = {
    fatclick: function(e) {
        if (e = e || this.$view) {
            var t = forward.bind(this);
            e.on("touchstart", function(o) {
                function i() {
                    e.off({
                        touchend: t,
                        touchcancel: i
                    });
                }
                e.one("touchend", {
                    touch: o.originalEvent.changedTouches[0]
                }, t).on("touchmove", i).on("touchcancel", i), setTimeout(i, decay);
            });
        }
    }
}, module.exports = exports.default;

/***/ },

/***/ 13:
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

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

var __st0 = __webpack_require__(260);

!function(e, t, n) {
    var o = n(e), i = n(t), a = n.fancybox = function() {
        a.open.apply(this, arguments);
    }, r = !1, c = navigator.userAgent.match(/msie/i), s = null;
    n.extend(a, {
        version: "2.0.4",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 9999,
            maxHeight: 9999,
            autoSize: !0,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            fixed: !1 in t.documentElement || t,
            scrolling: "auto",
            wrapCSS: "fancybox-default",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            modal: !1,
            loop: !0,
            ajax: {},
            keys: {
                next: [ 13, 32, 34, 39, 40 ],
                prev: [ 8, 33, 37, 38 ],
                close: [ 27 ]
            },
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0" ' + (c ? 'allowtransparency="true""' : "") + ' scrolling="{scrolling}" src="{href}"></iframe>',
                swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
                next: '<a title="Next" class="fancybox-item fancybox-next"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-item fancybox-prev"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 300,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 300,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: {
                    speedIn: 0,
                    speedOut: 300,
                    opacity: .8,
                    css: {
                        cursor: "pointer"
                    },
                    closeClick: !0
                },
                title: {
                    type: "float"
                }
            },
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        coming: null,
        current: null,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(e, t) {
            n.isArray(e) || (e = [ e ]), e.length && (a.close(!0), a.opts = n.extend(!0, {}, a.defaults, t), 
            a.group = e, a._start(a.opts.index || 0));
        },
        cancel: function() {
            a.coming && !1 === a.trigger("onCancel") || (a.coming = null, a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), 
            a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onabort = a.imgPreload.onerror = null));
        },
        close: function(e) {
            a.cancel(), a.current && !1 !== a.trigger("beforeClose") && (a.unbindEvents(), !a.isOpen || e && e[0] === !0 ? (n(".fancybox-wrap").stop().trigger("onReset").remove(), 
            a._afterZoomOut()) : (a.isOpen = a.isOpened = !1, n(".fancybox-item").remove(), 
            a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), 
            a.transitions[a.current.closeMethod]()));
        },
        play: function(e) {
            var t = function() {
                clearTimeout(a.player.timer);
            }, o = function() {
                t(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed));
            }, i = function() {
                t(), n("body").unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd");
            }, r = function() {
                a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, 
                n("body").bind({
                    "afterShow.player onUpdate.player": o,
                    "onCancel.player beforeClose.player": i,
                    "beforeLoad.player": t
                }), o(), a.trigger("onPlayStart"));
            };
            a.player.isActive || e && e[0] === !1 ? i() : r();
        },
        next: function() {
            a.current && a.jumpto(a.current.index + 1);
        },
        prev: function() {
            a.current && a.jumpto(a.current.index - 1);
        },
        jumpto: function(e) {
            a.current && (e = parseInt(e, 10), a.group.length > 1 && a.current.loop && (e >= a.group.length ? e = 0 : e < 0 && (e = a.group.length - 1)), 
            "undefined" != typeof a.group[e] && (a.cancel(), a._start(e)));
        },
        reposition: function(e) {
            a.isOpen && a.wrap.css(a._getPosition(e));
        },
        update: function() {
            a.isOpen && (r || (s = setInterval(function() {
                r && (r = !1, clearTimeout(s), a.current && (a.current.autoSize && (a.inner.height("auto"), 
                a.current.height = a.inner.height()), a._setDimension(), a.current.canGrow && a.inner.height("auto"), 
                a.reposition(), a.trigger("onUpdate")));
            }, 100)), r = !0);
        },
        toggle: function() {
            a.isOpen && (a.current.fitToView = !a.current.fitToView, a.update());
        },
        hideLoading: function() {
            n("#fancybox-loading").remove();
        },
        showLoading: function() {
            a.hideLoading(), n('<div id="fancybox-loading"></div>').click(a.cancel).appendTo("body");
        },
        getViewport: function() {
            return {
                x: o.scrollLeft(),
                y: o.scrollTop(),
                w: o.width(),
                h: o.height()
            };
        },
        unbindEvents: function() {
            a.wrap && a.wrap.unbind(".fb"), i.unbind(".fb"), o.unbind(".fb");
        },
        bindEvents: function() {
            var e = a.current, t = e.keys;
            e && (o.bind("resize.fb, orientationchange.fb", a.update), t && i.bind("keydown.fb", function(e) {
                var o;
                e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || !(n.inArray(e.target.tagName.toLowerCase(), [ "input", "textarea", "select", "button" ]) < 0) || (o = e.keyCode, 
                n.inArray(o, t.close) > -1 ? (a.close(), e.preventDefault()) : n.inArray(o, t.next) > -1 ? (a.next(), 
                e.preventDefault()) : n.inArray(o, t.prev) > -1 && (a.prev(), e.preventDefault()));
            }), n.fn.mousewheel && e.mouseWheel && a.group.length > 1 && a.wrap.bind("mousewheel.fb", function(e, t) {
                var o = n(e.target).get(0);
                0 !== o.clientHeight && o.scrollHeight !== o.clientHeight || (e.preventDefault(), 
                a[t > 0 ? "prev" : "next"]());
            }));
        },
        trigger: function(e) {
            var t, o = a[n.inArray(e, [ "onCancel", "beforeLoad", "afterLoad" ]) > -1 ? "coming" : "current"];
            if (o) {
                if (n.isFunction(o[e]) && (t = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), 
                t === !1) return !1;
                o.helpers && n.each(o.helpers, function(t, i) {
                    i && "undefined" != typeof a.helpers[t] && n.isFunction(a.helpers[t][e]) && a.helpers[t][e](i, o);
                }), n.event.trigger(e + ".fb");
            }
        },
        isImage: function(e) {
            return e && e.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i);
        },
        isSWF: function(e) {
            return e && e.match(/\.(swf)(.*)?$/i);
        },
        _start: function(e) {
            var t, o, i, r, c = {}, s = a.group[e] || null;
            return "object" == typeof s && (s.nodeType || s instanceof n) && (t = !0, n.metadata && (c = n(s).metadata())), 
            c = n.extend(!0, {}, a.opts, {
                index: e,
                element: s
            }, n.isPlainObject(s) ? s : c), n.each([ "href", "title", "content", "type" ], function(e, o) {
                c[o] = a.opts[o] || t && n(s).attr(o) || c[o] || null;
            }), "number" == typeof c.margin && (c.margin = [ c.margin, c.margin, c.margin, c.margin ]), 
            c.modal && n.extend(!0, c, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        css: {
                            cursor: "auto"
                        },
                        closeClick: !1
                    }
                }
            }), a.coming = c, !1 === a.trigger("beforeLoad") ? void (a.coming = null) : (i = c.type, 
            o = c.href, i || (t && (r = n(s).data("fancybox-type"), !r && s.className && (r = s.className.match(/fancybox\.(\w+)/), 
            i = r ? r[1] : null)), !i && o && (a.isImage(o) ? i = "image" : a.isSWF(o) ? i = "swf" : o.match(/^#/) && (i = "inline")), 
            i || (i = t ? "inline" : "html"), c.type = i), "inline" === i || "html" === i ? (c.content = c.content || ("inline" === i && o ? n(o) : s), 
            c.content.length || (i = null)) : (c.href = o || s, c.href || (i = null)), c.group = a.group, 
            void ("image" === i ? a._loadImage() : "ajax" === i ? a._loadAjax() : i ? a._afterLoad() : a._error("type")));
        },
        _error: function(e) {
            n.extend(a.coming, {
                type: "html",
                autoSize: !0,
                minHeight: "0",
                hasError: e,
                content: a.coming.tpl.error
            }), a._afterLoad();
        },
        _loadImage: function() {
            a.imgPreload = new Image(), a.imgPreload.onload = function() {
                this.onload = this.onerror = null, a.coming.width = this.width, a.coming.height = this.height, 
                a._afterLoad();
            }, a.imgPreload.onerror = function() {
                this.onload = this.onerror = null, a._error("image");
            }, a.imgPreload.src = a.coming.href, a.imgPreload.complete || a.showLoading();
        },
        _loadAjax: function() {
            a.showLoading(), a.ajaxLoad = n.ajax(n.extend({}, a.coming.ajax, {
                url: a.coming.href,
                error: function(e, t) {
                    "abort" !== t ? a._error("ajax", e) : a.hideLoading();
                },
                success: function(e, t) {
                    "success" === t && (a.coming.content = e, a._afterLoad());
                }
            }));
        },
        _preload: function() {
            var e = a.group, t = a.current.index, o = function(e) {
                e && a.isImage(e) && (new Image().src = e);
            };
            e.length > 1 && (o(n(e[t + 1] || e[0]).attr("href")), o(n(e[t - 1] || e[e.length - 1]).attr("href")));
        },
        _afterLoad: function() {
            return a.hideLoading(), a.coming && !1 !== a.trigger("afterLoad", a.current) ? (a.isOpened ? (n(".fancybox-item").remove(), 
            a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), 
            a.transitions[a.current.prevMethod]()) : (n(".fancybox-wrap").stop().trigger("onReset").remove(), 
            a.trigger("afterClose")), a.unbindEvents(), a.isOpen = !1, a.current = a.coming, 
            a.coming = !1, a.wrap = n(a.current.tpl.wrap).addClass("fancybox-tmp " + a.current.wrapCSS).appendTo("body"), 
            a.outer = n(".fancybox-outer", a.wrap).css("padding", a.current.padding + "px"), 
            a.inner = n(".fancybox-inner", a.wrap), a._setContent(), a.trigger("beforeShow"), 
            a._setDimension(), a.wrap.hide().removeClass("fancybox-tmp"), a.bindEvents(), a._preload(), 
            void a.transitions[a.isOpened ? a.current.nextMethod : a.current.openMethod]()) : void (a.coming = !1);
        },
        _setContent: function() {
            var e, t, o = a.current, i = o.type;
            switch (i) {
              case "inline":
              case "ajax":
              case "html":
                e = o.content, "inline" === i && e instanceof n && (e = e.show().detach(), e.parent().hasClass("fancybox-inner") && e.parents(".fancybox-wrap").trigger("onReset").remove(), 
                n(a.wrap).bind("onReset", function() {
                    e.appendTo("body").hide();
                })), o.autoSize && (t = n('<div class="fancybox-tmp"></div>').appendTo(n("body")).append(e), 
                o.width = t.outerWidth(), o.height = t.outerHeight(!0), e = t.contents().detach(), 
                t.remove());
                break;

              case "image":
                e = o.tpl.image.replace("{href}", o.href), o.aspectRatio = !0;
                break;

              case "swf":
                e = o.tpl.swf.replace(/\{width\}/g, o.width).replace(/\{height\}/g, o.height).replace(/\{href\}/g, o.href);
                break;

              case "iframe":
                e = o.tpl.iframe.replace("{href}", o.href).replace("{scrolling}", o.scrolling).replace("{rnd}", new Date().getTime());
            }
            n.inArray(i, [ "image", "swf", "iframe" ]) > -1 && (o.autoSize = !1, o.scrolling = !1), 
            a.inner.append(e);
        },
        _setDimension: function() {
            var e, t, o = a.wrap, i = a.outer, r = a.inner, c = a.current, s = a.getViewport(), l = c.margin, p = 2 * c.padding, d = c.width + p, f = c.height + p, h = c.width / c.height, u = c.maxWidth, g = c.maxHeight, m = c.minWidth, y = c.minHeight;
            if (s.w -= l[1] + l[3], s.h -= l[0] + l[2], d.toString().indexOf("%") > -1 && (d = s.w * parseFloat(d) / 100), 
            f.toString().indexOf("%") > -1 && (f = s.h * parseFloat(f) / 100), c.fitToView && (u = Math.min(s.w, u), 
            g = Math.min(s.h, g)), m = Math.min(d, m), y = Math.min(d, y), u = Math.max(m, u), 
            g = Math.max(y, g), c.aspectRatio ? (d > u && (d = u, f = (d - p) / h + p), f > g && (f = g, 
            d = (f - p) * h + p), d < m && (d = m, f = (d - p) / h + p), f < y && (f = y, d = (f - p) * h + p)) : (d = Math.max(m, Math.min(d, u)), 
            f = Math.max(y, Math.min(f, g))), d = Math.round(d), f = Math.round(f), n(o.add(i).add(r)).width("auto").height("auto"), 
            r.width(d - p).height(f - p), o.width(d), e = o.height(), d > u || e > g) for (;(d > u || e > g) && d > m && e > y; ) f -= 10, 
            c.aspectRatio ? (d = Math.round((f - p) * h + p), d < m && (d = m, f = (d - p) / h + p)) : d -= 10, 
            r.width(d - p).height(f - p), o.width(d), e = o.height();
            c.dim = {
                width: d,
                height: e
            }, c.canGrow = c.autoSize && f > y && f < g, c.canShrink = !1, c.canExpand = !1, 
            d - p < c.width || f - p < c.height ? c.canExpand = !0 : (d > s.w || e > s.h) && d > m && f > y && (c.canShrink = !0), 
            t = e - p, a.innerSpace = t - r.height(), a.outerSpace = t - i.height();
        },
        _getPosition: function(e) {
            var t = a.current, n = a.getViewport(), o = t.margin, i = a.wrap.width() + o[1] + o[3], r = a.wrap.height() + o[0] + o[2], c = {
                position: "absolute",
                top: o[0] + n.y,
                left: o[3] + n.x
            };
            return t.fixed && (!e || e[0] === !1) && r <= n.h && i <= n.w && (c = {
                position: "fixed",
                top: o[0],
                left: o[3]
            }), c.top = Math.ceil(Math.max(c.top, c.top + (n.h - r) * t.topRatio)) + "px", c.left = Math.ceil(Math.max(c.left, c.left + .5 * (n.w - i))) + "px", 
            c;
        },
        _afterZoomIn: function() {
            var e = a.current;
            a.isOpen = a.isOpened = !0, a.wrap.addClass("fancybox-opened").css("overflow", "visible"), 
            a.update(), a.inner.css("overflow", "auto" === e.scrolling ? "auto" : "yes" === e.scrolling ? "scroll" : "hidden"), 
            (e.closeClick || e.nextClick) && a.inner.css("cursor", "pointer").bind("click.fb", e.nextClick ? a.next : a.close), 
            e.closeBtn && n(e.tpl.closeBtn).appendTo(a.wrap).bind("click.fb", a.close), e.arrows && a.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(a.wrap).bind("click.fb", a.prev), 
            (e.loop || e.index < a.group.length - 1) && n(e.tpl.next).appendTo(a.wrap).bind("click.fb", a.next)), 
            a.trigger("afterShow"), a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, 
            a.play());
        },
        _afterZoomOut: function() {
            a.trigger("afterClose"), a.wrap.trigger("onReset").remove(), n.extend(a, {
                group: {},
                opts: {},
                current: null,
                isOpened: !1,
                isOpen: !1,
                wrap: null,
                outer: null,
                inner: null
            });
        }
    }), a.transitions = {
        getOrigPosition: function() {
            var e, t, o = a.current.element, i = {}, r = 50, c = 50;
            return o && o.nodeName && n(o).is(":visible") ? (e = n(o).find("img:first"), e.length ? (i = e.offset(), 
            r = e.outerWidth(), c = e.outerHeight()) : i = n(o).offset()) : (t = a.getViewport(), 
            i.top = t.y + .5 * (t.h - c), i.left = t.x + .5 * (t.w - r)), i = {
                top: Math.ceil(i.top) + "px",
                left: Math.ceil(i.left) + "px",
                width: Math.ceil(r) + "px",
                height: Math.ceil(c) + "px"
            };
        },
        step: function(e, t) {
            var n, o, i;
            "width" !== t.prop && "height" !== t.prop || (o = i = Math.ceil(e - 2 * a.current.padding), 
            "height" === t.prop && (n = (e - t.start) / (t.end - t.start), t.start > t.end && (n = 1 - n), 
            o -= a.innerSpace * n, i -= a.outerSpace * n), a.inner[t.prop](o), a.outer[t.prop](i));
        },
        zoomIn: function() {
            var e, t, o = a.wrap, i = a.current, r = i.dim;
            "elastic" === i.openEffect ? (t = n.extend({}, r, a._getPosition(!0)), delete t.position, 
            e = this.getOrigPosition(), i.openOpacity && (e.opacity = 0, t.opacity = 1), o.css(e).show().animate(t, {
                duration: i.openSpeed,
                easing: i.openEasing,
                step: this.step,
                complete: a._afterZoomIn
            })) : (o.css(n.extend({}, r, a._getPosition())), "fade" === i.openEffect ? o.fadeIn(i.openSpeed, a._afterZoomIn) : (o.show(), 
            a._afterZoomIn()));
        },
        zoomOut: function() {
            var e, t = a.wrap, n = a.current;
            "elastic" === n.closeEffect ? ("fixed" === t.css("position") && t.css(a._getPosition(!0)), 
            e = this.getOrigPosition(), n.closeOpacity && (e.opacity = 0), t.animate(e, {
                duration: n.closeSpeed,
                easing: n.closeEasing,
                step: this.step,
                complete: a._afterZoomOut
            })) : t.fadeOut("fade" === n.closeEffect ? n.closeSpeed : 0, a._afterZoomOut);
        },
        changeIn: function() {
            var e, t = a.wrap, n = a.current;
            "elastic" === n.nextEffect ? (e = a._getPosition(!0), e.opacity = 0, e.top = parseInt(e.top, 10) - 200 + "px", 
            t.css(e).show().animate({
                opacity: 1,
                top: "+=200px"
            }, {
                duration: n.nextSpeed,
                complete: a._afterZoomIn
            })) : (t.css(a._getPosition()), "fade" === n.nextEffect ? t.hide().fadeIn(n.nextSpeed, a._afterZoomIn) : (t.show(), 
            a._afterZoomIn()));
        },
        changeOut: function() {
            var e = a.wrap, t = a.current, o = function() {
                n(this).trigger("onReset").remove();
            };
            e.removeClass("fancybox-opened"), "elastic" === t.prevEffect ? e.animate({
                opacity: 0,
                top: "+=200px"
            }, {
                duration: t.prevSpeed,
                complete: o
            }) : e.fadeOut("fade" === t.prevEffect ? t.prevSpeed : 0, o);
        }
    }, a.helpers.overlay = {
        overlay: null,
        update: function() {
            var e, n, a;
            this.overlay.width(0).height(0), c ? (n = Math.max(t.documentElement.scrollWidth, t.body.scrollWidth), 
            a = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), e = n < a ? o.width() : n) : e = i.width(), 
            this.overlay.width(e).height(i.height());
        },
        beforeShow: function(e) {
            this.overlay || (this.overlay = n('<div id="fancybox-overlay"></div>').css(e.css || {
                background: "black"
            }).appendTo("body"), this.update(), e.closeClick && this.overlay.bind("click.fb", a.close), 
            o.bind("resize.fb", n.proxy(this.update, this)), this.overlay.fadeTo(e.speedIn || "fast", e.opacity || 1));
        },
        onUpdate: function() {
            this.update();
        },
        afterClose: function(e) {
            this.overlay && this.overlay.fadeOut(e.speedOut || "fast", function() {
                n(this).remove();
            }), this.overlay = null;
        }
    }, a.helpers.title = {
        beforeShow: function(e) {
            var t, o = a.current.title;
            o && (t = n('<div class="fancybox-title fancybox-title-' + e.type + '-wrap">' + o + "</div>").appendTo("body"), 
            "float" === e.type && (t.width(t.width()), t.wrapInner('<span class="child"></span>'), 
            a.current.margin[2] += Math.abs(parseInt(t.css("margin-bottom"), 10))), t.appendTo("over" === e.type ? a.inner : "outside" === e.type ? a.wrap : a.outer));
        }
    }, n.fn.fancybox = function(e) {
        function t(e) {
            var t, i, c = [], s = this.rel;
            e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault(), i = n(this).data("fancybox-group"), 
            "undefined" != typeof i ? t = !!i && "data-fancybox-group" : s && "" !== s && "nofollow" !== s && (i = s, 
            t = "rel"), t && (c = r.length ? n(r).filter("[" + t + '="' + i + '"]') : n("[" + t + '="' + i + '"]')), 
            c.length ? (o.index = c.index(this), a.open(c.get(), o)) : a.open(this, o));
        }
        var o = e || {}, r = this.selector || "";
        return r ? i.undelegate(r, "click.fb-start").delegate(r, "click.fb-start", t) : n(this).unbind("click.fb-start").bind("click.fb-start", t), 
        this;
    };
}(window, document, jQuery);

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function formFormat(e, r) {
    var t = e[r.name];
    return e[r.name] = t ? [].concat(t, r.value) : r.value, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _promise = __webpack_require__(49), _promise2 = _interopRequireDefault(_promise), _media = __webpack_require__(35), _media2 = _interopRequireDefault(_media), _validate = __webpack_require__(13), _validate2 = _interopRequireDefault(_validate), _tooltip = __webpack_require__(67), _tooltip2 = _interopRequireDefault(_tooltip), _showMessages = __webpack_require__(20), _showMessages2 = _interopRequireDefault(_showMessages), validate = function(e) {
    var r = {};
    if (Object.keys(e).forEach(function(t) {
        var i = this.find('[name="' + t + '"]').data("validate");
        (0, _validate2.default)(e[t], i) || (r[t] = _validate2.default.message);
    }, this), Object.keys(r).length) throw r;
    return e;
};

exports.default = {
    onSubmit: function(e, r, t) {
        r = r || this.$view;
        var i = r.is("form") ? r : r.find("form");
        r.on("click keydown", ".form-submit:not([type=submit])", function(e) {
            switch (e.which) {
              case 1:
              case 13:
              case 32:
                i.submit();
            }
        }), i.on("submit", function(r) {
            var o = new _promise2.default(), a = i.serializeArray().reduce(formFormat, {}), n = {
                url: i.attr("action"),
                type: i.attr("method") || "POST"
            };
            return r.originalEvent = r.originalEvent || {}, i.find(".form-error").remove(), 
            i.find(".form-item-error").removeClass("form-item-error"), r.originalEvent.promise = (r.isDefaultPrevented() && !i.attr("onsubmit") ? o : o.then(validate.bind(i))).then(function(r) {
                if (n.data = r, "function" != typeof e) return (0, _xhr2.default)(n);
                var t = new _promise2.default(), i = t.thenable(), o = e.call(i, r);
                return t.resolve(o === i ? (0, _xhr2.default)(n) : o), t;
            }).then(function() {
                t || i.find(":input").val("").removeAttr("checked selected");
            }, function(e) {
                var r, t;
                if (e instanceof Error) return void console.error(e);
                throw e.responseJSON && (e = e.responseJSON), e.messages && (0, _showMessages2.default)(i, e.messages), 
                console.warn(e), r = e.errors || e, t = _media2.default.is("desktop") ? [ "form-error" ] : [ "form-error", "form-error-right" ], 
                Object.keys(r).forEach(function(e) {
                    (0, _tooltip2.default)(i.find("[name=" + e + "]"), r[e], t);
                }), e;
            }), o.resolve(a), !1;
        });
    },
    onCancel: function(e) {
        var r = this;
        this.$view.on("click", ".form-button-cancel", function() {
            r.$view.find(".form-text, .form-textarea").val(""), "function" == typeof e && e();
        });
    }
}, module.exports = exports.default;

/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"error");if(t.s(t.f("containerClasses",c,p,1),c,p,0,38,44,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b("\">");t.b("\n" + i);t.b("  <span class=\"error__copy\">");t.b(t.t(t.f("message",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"error{{#containerClasses}} {{.}}{{/containerClasses}}\">\n  <span class=\"error__copy\">{{{message}}}</span>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _Model = __webpack_require__(32), _Model2 = _interopRequireDefault(_Model), _Roulette = __webpack_require__(21), _Roulette2 = _interopRequireDefault(_Roulette), _AddToTalentSearch = __webpack_require__(149), _AddToTalentSearch2 = _interopRequireDefault(_AddToTalentSearch), constructor = _Roulette2.default.extend({
    endpoint: function() {
        return "/v2/jobs/discovered/" + this.id;
    },
    read: function() {
        var e = this;
        return (0, _xhr2.default)(this.endpoint()).then(function(t) {
            e._model.set("options", t.jobs.sort(function(e, t) {
                return t.is_discovered + t.is_shortlisted + t.is_recommended - (e.is_discovered + e.is_shortlisted + e.is_recommended);
            }));
        });
    },
    update: function(e) {
        return (0, _xhr2.default)({
            url: this.endpoint(),
            type: "PATCH",
            data: e
        });
    },
    render: function e(t) {
        var e = this._super.bind(this);
        return this.read().then(function() {
            return t;
        }).then(e);
    }
}, {
    VIEW_CLASS: _AddToTalentSearch2.default,
    MODEL_CLASS: _Model2.default.extend({
        preselected: function() {
            return this.get("options").map(function(e) {
                if (e.is_discovered || e.is_shortlisted || e.is_recommended) return e.id;
            }).filter(Boolean);
        }
    })
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(n) {
    "use strict";
    function o(n) {
        n();
    }
    function i(n) {
        var o, i;
        return n.is(t) ? (o = window.innerHeight || t.height(), i = c.height() - o - t.scrollTop()) : (o = n.prop("clientHeight"), 
        i = n.prop("scrollHeight") - o - n.scrollTop()), i / o;
    }
    function e(e) {
        var r = "window" === e ? t : n(e), c = "window" === e ? n("html,body") : r;
        return function() {
            var t, l = c.toArray().every(function(o) {
                return "hidden" !== n(o).css("overflowY");
            }), u = i(r);
            for (t in f[e]) u <= Number(t) && l && f[e][t].wrapped.forEach(o);
        };
    }
    function r(o, i, r) {
        function c() {
            if (!c.blocking) {
                c.blocking = !0;
                var n = i.apply(null, arguments);
                n && "function" == typeof n.then ? n.then(function() {
                    c.blocking = !1, l[r]();
                }) : c.blocking = !1;
            }
        }
        "function" == typeof o && (r = i, i = o, o = 1), r = r || "window", o = Number(o).toString();
        var u, w = "window" === r ? t : n(r);
        f[r] || (f[r] = {}, l[r] = e(r), w.on("scroll", l[r])), u = f[r][o], u || (u = f[r][o] = {
            wrapped: [],
            original: []
        }), u.original.push(i), u.wrapped.push(c), l[r]();
    }
    var t = n(window), c = n(document), l = {}, f = {};
    return r.on = r, r.off = function(o, i) {
        i = i || "window";
        var e, r, c, u = "window" === i ? t : n(i);
        for (e in f[i]) r = f[i][e], c = r.original.indexOf(o), ~c && (r.original.splice(c, 1), 
        r.wrapped.splice(c, 1), r.original.length || delete f[i][e]);
        Object.keys(f[i]).length || (u.off("scroll", l[i]), delete f[i]);
    }, r.check = function(n) {
        n = n || "window", l[n]();
    }, r;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"portfolio-device-container\">");t.b("\n" + i);t.b("  <div class=\"devices\">");t.b("\n" + i);t.b("    <div class=\"desktop\">");t.b("\n" + i);t.b("      <div class=\"screenshot js-desktop-screenshot\">");t.b("\n" + i);t.b("        <div class=\"project js-project\">");t.b("\n" + i);t.b("          <header class=\"portfolio-header\">");t.b("\n" + i);t.b("            <div class=\"portfolio-name\">");t.b("\n" + i);t.b("              ");t.b(t.v(t.f("displayName",c,p,0)));t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"portfolio-nav\">");t.b("\n" + i);t.b("              <div class=\"portfolio-nav-item\">");t.b(t.v(t.f("field_1",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("              <div class=\"portfolio-nav-item\">");t.b(t.v(t.f("field_2",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("              <div class=\"portfolio-nav-item\">");if(t.s(t.f("translate",c,p,1),c,p,0,547,579,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_nav_1|About Me");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("              <div class=\"portfolio-nav-item\">");if(t.s(t.f("translate",c,p,1),c,p,0,660,691,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_nav_2|Contact");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </header>");t.b("\n" + i);t.b("          <iframe class=\"portfolio-iframe\" src=\"");t.b(t.v(t.f("projectSrc",c,p,0)));t.b("\"></iframe>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"device\"></div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"mobile\">");t.b("\n" + i);t.b("      <div class=\"screenshot js-mobile-screenshot\">");t.b("\n" + i);t.b("        <header class=\"portfolio-header js-header\">");t.b("\n" + i);t.b("          <div class=\"portfolio-name\">");t.b("\n" + i);t.b("            ");t.b(t.v(t.f("displayName",c,p,0)));t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("          <div class=\"hamburger-icon\">");t.b("\n" + i);t.b("            <div class=\"hamburger-part\"></div>");t.b("\n" + i);t.b("            <div class=\"hamburger-part\"></div>");t.b("\n" + i);t.b("            <div class=\"hamburger-part\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </header>");t.b("\n" + i);t.b("        <div class=\"cover cover-1\" style=\"background-image: url('");t.b(t.v(t.f("cover_1",c,p,0)));t.b("')\"></div>");t.b("\n" + i);t.b("        <div class=\"cover cover-2\" style=\"background-image: url('");t.b(t.v(t.f("cover_2",c,p,0)));t.b("')\"></div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"device\"></div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"portfolio-device-container\">\n  <div class=\"devices\">\n    <div class=\"desktop\">\n      <div class=\"screenshot js-desktop-screenshot\">\n        <div class=\"project js-project\">\n          <header class=\"portfolio-header\">\n            <div class=\"portfolio-name\">\n              {{displayName}}\n            </div>\n            <div class=\"portfolio-nav\">\n              <div class=\"portfolio-nav-item\">{{field_1}}</div>\n              <div class=\"portfolio-nav-item\">{{field_2}}</div>\n              <div class=\"portfolio-nav-item\">{{#translate}}project_portfolio_nav_1|About Me{{/translate}}</div>\n              <div class=\"portfolio-nav-item\">{{#translate}}project_portfolio_nav_2|Contact{{/translate}}</div>\n            </div>\n          </header>\n          <iframe class=\"portfolio-iframe\" src=\"{{projectSrc}}\"></iframe>\n        </div>\n      </div>\n      <div class=\"device\"></div>\n    </div>\n    <div class=\"mobile\">\n      <div class=\"screenshot js-mobile-screenshot\">\n        <header class=\"portfolio-header js-header\">\n          <div class=\"portfolio-name\">\n            {{displayName}}\n          </div>\n          <div class=\"hamburger-icon\">\n            <div class=\"hamburger-part\"></div>\n            <div class=\"hamburger-part\"></div>\n            <div class=\"hamburger-part\"></div>\n          </div>\n        </header>\n        <div class=\"cover cover-1\" style=\"background-image: url('{{cover_1}}')\"></div>\n        <div class=\"cover cover-2\" style=\"background-image: url('{{cover_2}}')\"></div>\n      </div>\n      <div class=\"device\"></div>\n    </div>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"js-controls-overlay-reorder controls-overlay-action controls-overlay-reorder\">");t.b("\n" + i);t.b("    <span class=\"beicons-pre beicons-pre-hamburger edit-icon\"></span>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"js-controls-overlay-reorder controls-overlay-action controls-overlay-reorder\">\n    <span class=\"beicons-pre beicons-pre-hamburger edit-icon\"></span>\n</div>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _login = __webpack_require__(33), _login2 = _interopRequireDefault(_login), _Roulette = __webpack_require__(21), _Roulette2 = _interopRequireDefault(_Roulette), _Layover = __webpack_require__(27), _Layover2 = _interopRequireDefault(_Layover), _Menu = __webpack_require__(40), _Menu2 = _interopRequireDefault(_Menu), _Popup = __webpack_require__(23), _Popup2 = _interopRequireDefault(_Popup), _message = __webpack_require__(151), _message2 = _interopRequireDefault(_message), _Dialog = __webpack_require__(44), _Dialog2 = _interopRequireDefault(_Dialog), INBOX_CREATE_ENDPOINT = "/v2/inbox/threads", constructor;

constructor = _Roulette2.default.extend({
    create: function(e, t) {
        var r, i = this;
        return r = (0, _xhr2.default)({
            url: INBOX_CREATE_ENDPOINT,
            type: "POST",
            data: {
                recipients: this._model.get("id"),
                message: e,
                is_job: t
            }
        }), r.then(function() {
            i.trigger("sent");
        }), r;
    },
    setContext: function(e) {
        var t;
        return _login2.default.isLoggedIn() ? this._super(e) : (t = new _Dialog2.default({
            id: e.data("contact_id"),
            entity: "user",
            action: "message"
        }), void t.setContext(e));
    },
    render: function(e) {
        this.$source = (0, _jquery2.default)(e), this._model.set({
            id: this.$source.data("contact_id"),
            name: this.$source.data("contact_name")
        }), this._super(e);
    }
}, {
    HIDE_DELAY: 1500,
    init: function(e, t) {
        var r = new this(t);
        return r.setContext(e.find(".js-action-message-user")), r;
    },
    VIEW_CLASS: {
        phone: _Layover2.default.extend(_message2.default),
        tablet: _Menu2.default.extend(_message2.default),
        desktop: _Popup2.default.extend(_message2.default).extend({
            templateData: function() {
                var e = this._super();
                return e.title = _localization2.default.translate("message_dialog_header_named", "Send Message to ") + e.name, 
                e;
            }
        })
    }
}), exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Roulette = __webpack_require__(21), _Roulette2 = _interopRequireDefault(_Roulette), _Popup = __webpack_require__(23), _Popup2 = _interopRequireDefault(_Popup), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window), _history = __webpack_require__(52), _history2 = _interopRequireDefault(_history), _socialSharePopup = __webpack_require__(108), _socialSharePopup2 = _interopRequireDefault(_socialSharePopup), _remoteLogger = __webpack_require__(14), _remoteLogger2 = _interopRequireDefault(_remoteLogger), _share = __webpack_require__(168), _share2 = _interopRequireDefault(_share), ShareView = _Popup2.default.extend({
    mustache: _share2.default,
    shareUrl: _window2.default.getLocation().href.replace(/\?share=1$/, "").replace(/share=1&?/, ""),
    hide: function() {
        this._super(), _history2.default.replaceState(_history2.default.getState(), document.title, _window2.default.getLocation("search").replace(/share=1&?/, ""));
    },
    templateData: function() {
        return {
            header: this._model.get("header"),
            url: this.shareUrl,
            classes: [ "promote-dialog" ],
            fullBleed: !0
        };
    },
    rendered: function() {
        this._super();
        var e = this.shareUrl, t = this._model.get("text"), r = this._model.get("image"), o = this._model.get("loggedLocation"), i = this;
        this._log("Share Popup Rendered", o), this.$view.find(".js-viral-share-buttons").each(function() {
            (0, _jquery2.default)(this).on("click.beff-util-social", function() {
                var i = (0, _jquery2.default)(this).data("service");
                _socialSharePopup2.default.open(i, {
                    loggedLocation: o,
                    url: e,
                    text: t,
                    image: r
                });
            });
        }), this.$view.find(".js-share-link").on("click", function() {
            i._log("Copy Link Clicked", o), (0, _jquery2.default)(this).find("input").focus().select();
        });
    },
    _log: function(e, t) {
        _remoteLogger2.default.info("social_sharing", e, {
            location: t
        });
    }
});

exports.default = _Roulette2.default.extend({}, {
    VIEW_CLASS: {
        desktop: ShareView
    }
}), module.exports = exports.default;

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Model = __webpack_require__(32), _Model2 = _interopRequireDefault(_Model), _Promise = __webpack_require__(9), _Promise2 = _interopRequireDefault(_Promise), _Controller = __webpack_require__(30), _Controller2 = _interopRequireDefault(_Controller), _remoteLogger = __webpack_require__(14), _remoteLogger2 = _interopRequireDefault(_remoteLogger), _stats = __webpack_require__(103), _stats2 = _interopRequireDefault(_stats), _PulsePoint = __webpack_require__(102), _PulsePoint2 = _interopRequireDefault(_PulsePoint), _Appreciate = __webpack_require__(152), _Appreciate2 = _interopRequireDefault(_Appreciate);

exports.default = _Controller2.default.extend({
    init: function(e, t) {
        var r = this;
        this.views = [], this._model = new _Model2.default(e.id, {
            appreciatedOn: 0,
            thanks: !1,
            renderPulsePoint: e.renderPulsePoint
        }), t.each(function(e, t) {
            r.views.push(r._initView((0, _jquery2.default)(t)));
        });
    },
    _initView: function(e) {
        var t = new _Appreciate2.default(this._model);
        return t.$view = e, t._controller = this, t;
    },
    render: function() {
        var e = this, t = new _Promise2.default();
        return _stats2.default.view("project", this.id, function(r) {
            var i = r.t || 0;
            e._model.set("canUnappreciate", Boolean(parseInt(r.u, 10))), e._model.set("appreciatedOn", i), 
            e.views.forEach(function(t) {
                t.render(), 0 === i && e._model.get("renderPulsePoint") && t.$view.data("renderPulsePoint") && (e.pulsePoint = new _PulsePoint2.default({
                    from: "appreciate"
                }), e.pulsePoint.render(t.$view));
            }), t.resolve();
        }), t;
    },
    appreciate: function(e) {
        _stats2.default.appreciate("project", this._model.id()), this._model.set("newAppreciation", !0), 
        this._model.set("appreciatedOn", Date.now()), _remoteLogger2.default.info("bane", "Appreciate Action created", {
            from: e
        }), this.trigger("appreciate");
    },
    unappreciate: function() {
        _stats2.default.unappreciate("project", this._model.id()), this._model.set("appreciatedOn", 0), 
        this.trigger("unappreciate");
    },
    destroy: function() {
        this.views.forEach(function(e) {
            e.destroy();
        }), this.views = [], this._model.destroy(), this._model = null, this.pulsePoint && this.pulsePoint.destroy();
    }
}), module.exports = exports.default;

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _popupSession = __webpack_require__(267), _popupSession2 = _interopRequireDefault(_popupSession), _Project = __webpack_require__(263), _Project2 = _interopRequireDefault(_Project);

exports.default = (0, _extend2.default)({
    selector: ".cover-name-link, .cover-img-link, a.cover-img",
    entity: "project",
    Dialog: _Project2.default
}, _popupSession2.default), module.exports = exports.default;

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<form action=\"");t.b(t.v(t.f("action",c,p,0)));t.b("\" method=\"");t.b(t.v(t.f("method",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.d("options.0",c,p,1),c,p,0,63,415,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <ul id=\"searches\" class=\"divided-list menu-section\">");t.b("\n" + i);if(t.s(t.f("options",c,p,1),c,p,0,139,212,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li class=\"divided-item\" data-value=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("title",c,p,0)));t.b("</li>");t.b("\n" + i);});c.pop();}t.b("    </ul>");t.b("\n" + i);t.b("    <div>");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,265,293,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_candidate_popup_or|or");});c.pop();}t.b(" <a href=\"/talent/create\">");if(t.s(t.f("translate",c,p,1),c,p,0,347,383,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_sidebar_post_a_job|Post a Job");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("options",c,p,1),c,p,1,0,0,"")){t.b("    <div class=\"no-searches\">");t.b("\n" + i);t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,498,564,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_sidebar_empty_no_active_jobs|You Don't Have Any Active Jobs");});c.pop();}t.b("</p>");t.b("\n" + i);t.b("      <p><a href=\"/talent/create\">");if(t.s(t.f("translate",c,p,1),c,p,0,631,679,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_sidebar_post_a_job_rarr|Post a Job &rarr;");});c.pop();}t.b("</a></p>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);};t.b("</form>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<form action=\"{{action}}\" method=\"{{method}}\">\n  {{#options.0}}\n    <ul id=\"searches\" class=\"divided-list menu-section\">\n      {{#options}}\n      <li class=\"divided-item\" data-value=\"{{id}}\">{{title}}</li>\n      {{/options}}\n    </ul>\n    <div>\n      {{#translate}}talent_candidate_popup_or|or{{/translate}} <a href=\"/talent/create\">{{#translate}}talent_sidebar_post_a_job|Post a Job{{/translate}}</a>\n    </div>\n  {{/options.0}}\n  {{^options}}\n    <div class=\"no-searches\">\n      <p>{{#translate}}talent_sidebar_empty_no_active_jobs|You Don't Have Any Active Jobs{{/translate}}</p>\n      <p><a href=\"/talent/create\">{{#translate}}talent_sidebar_post_a_job_rarr|Post a Job &rarr;{{/translate}}</a></p>\n    </div>\n  {{/options}}\n</form>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"form/textarea": __webpack_require__(81).template,"form/_checkbox": __webpack_require__(104).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<form class=\"send-message js-send-message\">");t.b("\n" + i);if(t.s(t.f("recipient",c,p,1),c,p,0,60,527,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"message-label\">");if(t.s(t.f("translate",c,p,1),c,p,0,104,143,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("message_popup_label_recipient|Recipient");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("  <div class=\"recipient\">");t.b("\n" + i);t.b("    <img src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" class=\"recipient-image\">");t.b("\n" + i);t.b("    <div class=\"recipient-info\">");t.b("\n" + i);t.b("      <div class=\"recipient-name\">");t.b(t.v(t.f("name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("      <div class=\"recipient-meta beicons-pre beicons-pre-");t.b(t.v(t.f("icon",c,p,0)));t.b("\">");t.b(t.v(t.f("status",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"message-label\">");if(t.s(t.f("translate",c,p,1),c,p,0,469,504,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("message_popup_label_message|Message");});c.pop();}t.b("</div>");t.b("\n" + i);});c.pop();}if(t.s(t.f("body",c,p,1),c,p,0,553,572,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/textarea0",c,p,""));});c.pop();}if(t.s(t.f("has_talent_search",c,p,1),c,p,0,606,680,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("job_checkbox",c,p,1),c,p,0,628,660,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/_checkbox1",c,p,"      "));});c.pop();}});c.pop();}t.b("</form>");t.b("\n");return t.fl(); },partials: {"<form/textarea0":{name:"form/textarea", partials: {}, subs: {  }},"<form/_checkbox1":{name:"form/_checkbox", partials: {}, subs: {  }}}, subs: {  }}, "<form class=\"send-message js-send-message\">\n  {{#recipient}}\n  <div class=\"message-label\">{{#translate}}message_popup_label_recipient|Recipient{{/translate}}</div>\n  <div class=\"recipient\">\n    <img src=\"{{image}}\" class=\"recipient-image\">\n    <div class=\"recipient-info\">\n      <div class=\"recipient-name\">{{name}}</div>\n      <div class=\"recipient-meta beicons-pre beicons-pre-{{icon}}\">{{status}}</div>\n    </div>\n  </div>\n  <div class=\"message-label\">{{#translate}}message_popup_label_message|Message{{/translate}}</div>\n  {{/recipient}}\n  {{#body}}{{> form/textarea}}{{/body}}\n  {{#has_talent_search}}\n    {{#job_checkbox}}\n      {{> form/_checkbox}}\n    {{/job_checkbox}}\n  {{/has_talent_search}}\n</form>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"onboarding/tooltip": __webpack_require__(148).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"tooltipi-container tooltip_container--pulse js-container-tooltip\" >");t.b("\n" + i);t.b("  <div class=\"pulse\">");t.b("\n" + i);t.b("    <div class=\"pulse__dot\"></div>");t.b("\n" + i);t.b("    <div class=\"pulse__ring\"></div>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b(t.rp("<onboarding/tooltip0",c,p,"  "));t.b("</div>");t.b("\n");return t.fl(); },partials: {"<onboarding/tooltip0":{name:"onboarding/tooltip", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"tooltipi-container tooltip_container--pulse js-container-tooltip\" >\n  <div class=\"pulse\">\n    <div class=\"pulse__dot\"></div>\n    <div class=\"pulse__ring\"></div>\n  </div>\n\n  {{>onboarding/tooltip}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"tooltipi tooltipi-white tooltip--pulse\">");t.b("\n" + i);t.b("  <h1 class=\"");if(t.s(t.f("clicked",c,p,1),c,p,0,78,114,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("beicons-pre beicons-pre-check-circle");});c.pop();}t.b("\">");t.b("\n" + i);if(t.s(t.f("follow",c,p,1),c,p,0,144,393,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(!t.s(t.f("clicked",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("translate",c,p,1),c,p,0,177,232,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_follow_creatives|Follow Creatives");});c.pop();}};t.b("\n" + i);t.b("      ");if(t.s(t.f("clicked",c,p,1),c,p,0,277,376,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("translate",c,p,1),c,p,0,291,353,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_follow_nice|Nice, you are now following ");});c.pop();}t.b(t.v(t.f("user",c,p,0)));t.b("!");});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.f("appreciate",c,p,1),c,p,0,424,671,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(!t.s(t.f("clicked",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("translate",c,p,1),c,p,0,457,528,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_appreciate_projects|Appreciate Projects You Like!");});c.pop();}};t.b("\n" + i);t.b("      ");if(t.s(t.f("clicked",c,p,1),c,p,0,573,654,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("translate",c,p,1),c,p,0,587,640,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_appreciate_good_work|Good work!");});c.pop();}});c.pop();}t.b("\n" + i);});c.pop();}t.b("  </h1>");t.b("\n");t.b("\n" + i);if(t.s(t.f("follow",c,p,1),c,p,0,709,1080,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("clicked",c,p,1),c,p,1,0,0,"")){t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,750,830,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_follow_p1|Follow creatives to see their work in your feed.");});c.pop();}t.b("</p>");t.b("\n" + i);t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,872,1042,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_follow_p2|You'll see their projects as they update and publish them, as well as all the work they appreciate, so you can see what's inspiring them. ");});c.pop();}t.b("</p>");t.b("\n" + i);};});c.pop();}t.b("\n" + i);if(t.s(t.f("appreciate",c,p,1),c,p,0,1110,1657,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("clicked",c,p,1),c,p,1,0,0,"")){t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,1151,1303,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_appreciate_p1|Appreciating projects gives them more exposure. Your followers will see the work you appreciate in their home feeds.");});c.pop();}t.b("</p>");t.b("\n" + i);t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,1345,1418,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_appreciate_p2|Also, it’s just a nice thing to do :)");});c.pop();}t.b("</p>");t.b("\n" + i);};if(t.s(t.f("clicked",c,p,1),c,p,0,1470,1642,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <p>");if(t.s(t.f("translate",c,p,1),c,p,0,1494,1619,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("onboarding_pulsePoint_appreciated_p1|Pro tip: You can see a complete list of the projects you’ve appreciated in your profile.");});c.pop();}t.b("</p>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"tooltipi tooltipi-white tooltip--pulse\">\n  <h1 class=\"{{#clicked}}beicons-pre beicons-pre-check-circle{{/clicked}}\">\n    {{#follow}}\n      {{^clicked}}{{#translate}}onboarding_pulsePoint_follow_creatives|Follow Creatives{{/translate}}{{/clicked}}\n      {{#clicked}}{{#translate}}onboarding_pulsePoint_follow_nice|Nice, you are now following {{/translate}}{{user}}!{{/clicked}}\n    {{/follow}}\n    {{#appreciate}}\n      {{^clicked}}{{#translate}}onboarding_pulsePoint_appreciate_projects|Appreciate Projects You Like!{{/translate}}{{/clicked}}\n      {{#clicked}}{{#translate}}onboarding_pulsePoint_appreciate_good_work|Good work!{{/translate}}{{/clicked}}\n    {{/appreciate}}\n  </h1>\n\n  {{#follow}}\n    {{^clicked}}\n      <p>{{#translate}}onboarding_pulsePoint_follow_p1|Follow creatives to see their work in your feed.{{/translate}}</p>\n      <p>{{#translate}}onboarding_pulsePoint_follow_p2|You'll see their projects as they update and publish them, as well as all the work they appreciate, so you can see what's inspiring them. {{/translate}}</p>\n    {{/clicked}}\n  {{/follow}}\n\n  {{#appreciate}}\n    {{^clicked}}\n      <p>{{#translate}}onboarding_pulsePoint_appreciate_p1|Appreciating projects gives them more exposure. Your followers will see the work you appreciate in their home feeds.{{/translate}}</p>\n      <p>{{#translate}}onboarding_pulsePoint_appreciate_p2|Also, it’s just a nice thing to do :){{/translate}}</p>\n    {{/clicked}}\n    {{#clicked}}\n      <p>{{#translate}}onboarding_pulsePoint_appreciated_p1|Pro tip: You can see a complete list of the projects you’ve appreciated in your profile.{{/translate}}</p>\n    {{/clicked}}\n  {{/appreciate}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _Layover = __webpack_require__(27), _Layover2 = _interopRequireDefault(_Layover), _Menu = __webpack_require__(40), _Menu2 = _interopRequireDefault(_Menu), _Popup = __webpack_require__(23), _Popup2 = _interopRequireDefault(_Popup), _list = __webpack_require__(95), _list2 = _interopRequireDefault(_list), _form = __webpack_require__(11), _form2 = _interopRequireDefault(_form), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _addToTalentSearch = __webpack_require__(145), _addToTalentSearch2 = _interopRequireDefault(_addToTalentSearch);

__webpack_require__(8);

var impl = {
    mustache: _addToTalentSearch2.default,
    templateData: function e() {
        var e = (0, _extend2.default)({
            title: _localization2.default.translate("talent_sidebar_save_as_candidate", "Save as Candidate"),
            classes: [ "list-popup", "add-to-ts-popup" ],
            buttons: [ {
                label: _localization2.default.translate("talent_sidebar_button_save", "Save"),
                classes: [ "form-button-default", "js-submit" ]
            } ]
        }, this._super());
        return e.options.length || (e.buttons = [ {
            label: _localization2.default.translate("talent_sidebar_button_okay", "Okay"),
            classes: [ "form-button-default", "js-close" ]
        } ]), e;
    },
    rendered: function() {
        var e = this, t = new _form2.default(this.$view), a = this.$view.find(".js-submit");
        this.form = t, t.on("success", function() {
            this.showButtons();
        }), t.commit = function(t) {
            var a, i, r = e._model.preselected(), n = Array.isArray(t.data.searches) ? t.data.searches : [ t.data.searches ];
            return n = n.filter(Boolean).map(Number), a = n.filter(function(e) {
                return !~r.indexOf(+e);
            }), i = r.filter(function(e) {
                return !~n.indexOf(e);
            }), e._controller.update({
                add: a,
                remove: i
            }).then(function(t) {
                e._model.data().options.forEach(function(e) {
                    ~t.added.indexOf(e.id) ? e.is_discovered = !0 : ~t.removed.indexOf(e.id) && (e.is_discovered = e.is_shortlisted = e.is_recommended = !1);
                });
            }).then(e.hide.bind(e)).then(function() {
                var t = e._model.data(), a = t.options, i = [];
                a.forEach(function(e) {
                    e.is_discovered && i.push(e.title);
                }), e._controller.trigger("update", i);
            });
        }, this._super(), this.multiList().on("click", function() {
            a.changeInput("enable");
        }), this._model.preselected().forEach(function(e) {
            this.$view.find("li[data-value=" + e + "]").click();
        }, this), a.changeInput("disable");
    }
};

exports.default = {
    desktop: _Popup2.default.extend(impl).mixin(_list2.default),
    tablet: _Menu2.default.extend(impl).mixin(_list2.default),
    phone: _Layover2.default.extend(impl).mixin(_list2.default)
}, module.exports = exports.default;

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(jQuery);
}(function(t) {
    function e(e, i) {
        var r, o, u, s = e.nodeName.toLowerCase();
        return "area" === s ? (r = e.parentNode, o = r.name, !(!e.href || !o || "map" !== r.nodeName.toLowerCase()) && (u = t("img[usemap='#" + o + "']")[0], 
        !!u && n(u))) : (/^(input|select|textarea|button|object)$/.test(s) ? !e.disabled : "a" === s ? e.href || i : i) && n(e);
    }
    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility");
        }).length;
    }
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        scrollParent: function(e) {
            var n = this.css("position"), i = "absolute" === n, r = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function() {
                var e = t(this);
                return (!i || "static" !== e.css("position")) && r.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
            }).eq(0);
            return "fixed" !== n && o.length ? o : t(this[0].ownerDocument || document);
        },
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t);
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
            });
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(n) {
                return !!t.data(n, e);
            };
        }) : function(e, n, i) {
            return !!t.data(e, i[3]);
        },
        focusable: function(n) {
            return e(n, !isNaN(t.attr(n, "tabindex")));
        },
        tabbable: function(n) {
            var i = t.attr(n, "tabindex"), r = isNaN(i);
            return (r || i >= 0) && e(n, !r);
        }
    }), t("<a>").outerWidth(1).jquery || t.each([ "Width", "Height" ], function(e, n) {
        function i(e, n, i, o) {
            return t.each(r, function() {
                n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), 
                o && (n -= parseFloat(t.css(e, "margin" + this)) || 0);
            }), n;
        }
        var r = "Width" === n ? [ "Left", "Right" ] : [ "Top", "Bottom" ], o = n.toLowerCase(), u = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + n] = function(e) {
            return void 0 === e ? u["inner" + n].call(this) : this.each(function() {
                t(this).css(o, i(this, e) + "px");
            });
        }, t.fn["outer" + n] = function(e, r) {
            return "number" != typeof e ? u["outer" + n].call(this, e) : this.each(function() {
                t(this).css(o, i(this, e, !0, r) + "px");
            });
        };
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(n) {
            return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this);
        };
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), 
    t.fn.extend({
        focus: function(e) {
            return function(n, i) {
                return "number" == typeof n ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), i && i.call(e);
                    }, n);
                }) : e.apply(this, arguments);
            };
        }(t.fn.focus),
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(t + ".ui-disableSelection", function(t) {
                    t.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        },
        zIndex: function(e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length) for (var n, i, r = t(this[0]); r.length && r[0] !== document; ) {
                if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (i = parseInt(r.css("zIndex"), 10), 
                !isNaN(i) && 0 !== i)) return i;
                r = r.parent();
            }
            return 0;
        }
    }), t.ui.plugin = {
        add: function(e, n, i) {
            var r, o = t.ui[e].prototype;
            for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([ n, i[r] ]);
        },
        call: function(t, e, n, i) {
            var r, o = t.plugins[e];
            if (o && (i || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (r = 0; r < o.length; r++) t.options[o[r][0]] && o[r][1].apply(t.element, n);
        }
    };
});

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _list = __webpack_require__(95), _list2 = _interopRequireDefault(_list), _submit = __webpack_require__(131), _submit2 = _interopRequireDefault(_submit);

exports.default = (0, _extend2.default)({}, _submit2.default, _list2.default), module.exports = exports.default;

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_config = __webpack_require__(12), _page_config2 = _interopRequireDefault(_page_config), _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _form = __webpack_require__(11), _form2 = _interopRequireDefault(_form), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _showMessages = __webpack_require__(20), _showMessages2 = _interopRequireDefault(_showMessages), _message = __webpack_require__(146), _message2 = _interopRequireDefault(_message);

exports.default = {
    mustache: _message2.default,
    templateData: function() {
        var e = this._super();
        return (0, _extend2.default)({
            classes: [ "message" ],
            title: _localization2.default.translate("message_dialog_header_default", "Message"),
            has_talent_search: _page_config2.default.has_talent_search,
            buttons: [ {
                label: _localization2.default.translate("message_dialog_button_send", "Send Message"),
                classes: [ "form-button-default", "form-submit" ]
            } ],
            job_checkbox: {
                label: _localization2.default.translate("message_dialog_label_job_opportunity", 'Mark as "Job Opportunity" to recipient'),
                id: "is_job",
                name: "is_job",
                value: 1,
                containerClasses: [ "cfix" ]
            },
            body: {
                id: "message",
                name: "message",
                placeholder: _localization2.default.translate("message_dialog_label_placeholder_named", "Your message to ") + e.name,
                containerClasses: [ "message-body" ],
                validate: "required,Generic",
                classes: [ "form-text-normal", "js-body" ]
            }
        }, e);
    },
    show: function() {
        this._super.apply(this, arguments), this._$body && this._$body.focus();
    },
    hide: function() {
        this._super.apply(this, arguments), this._$body && this._$body.val("");
    },
    rendered: function() {
        var e = this;
        this._form = new _form2.default(this.$view), this._$body = this.$view.find(".js-body"), 
        this._form.commit = function(s) {
            return e._controller.create(s.data.message, s.data.is_job);
        }, this._form.on("success", function() {
            var s = this;
            (0, _showMessages2.default)(e.$view.find(".js-send-message"), [ {
                message: _localization2.default.translate("message_dialog_message_success", "Message Sent"),
                type: "success"
            } ]), setTimeout(function() {
                s.showButtons(), e.hide();
            }, e._controller.constructor.HIDE_DELAY);
        }), this._super.apply(this, arguments);
    }
}, module.exports = exports.default;

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _moment = __webpack_require__(36), _moment2 = _interopRequireDefault(_moment), _View = __webpack_require__(26), _View2 = _interopRequireDefault(_View);

exports.default = _View2.default.extend({
    init: function() {
        this._super.apply(this, arguments), this.listenTo(this._model, "appreciatedOn", this._appreciationUpdate);
    },
    render: function() {
        var e = this._model.get("appreciatedOn"), t = this._model.get("canUnappreciate");
        e && this._showAppreciation(), this.$view.toggleClass("can-unappreciate", t), this._bindAppreciationClick();
    },
    _bindAppreciationClick: function() {
        var e = this;
        this.$view.on("click", function() {
            var t = Boolean(e._model.get("appreciatedOn")), i = e._model.get("canUnappreciate");
            t ? i && e._controller.unappreciate() : e._controller.appreciate(e.$view.data("appreciate-from"));
        });
    },
    _appreciationUpdate: function() {
        var e = this._model.get("appreciatedOn");
        e ? this._showAppreciation() : this._resetAppreciation();
    },
    _showAppreciation: function() {
        var e = this._model.get("newAppreciation"), t = this._model.get("appreciatedOn");
        e || !t ? this.$view.addClass("thanks") : this.$view.addClass("appreciated").find(".js-appreciation-date").text(_moment2.default.unix(t).format("LL"));
    },
    _resetAppreciation: function() {
        this.$view.removeClass("appreciated thanks").find(".js-appreciation-date").text("");
    }
}), module.exports = exports.default;

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("searches_added_to",c,p,1),c,p,0,22,171,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"ts-added\">");t.b("\n" + i);t.b("      <strong>");if(t.s(t.f("translate",c,p,1),c,p,0,78,114,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("talent_post_label_added_to|ADDED TO:");});c.pop();}t.b("</strong> ");t.b(t.v(t.f("searches_added_to",c,p,0)));t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }}, "{{#searches_added_to}}\n    <div class=\"ts-added\">\n      <strong>{{#translate}}talent_post_label_added_to|ADDED TO:{{/translate}}</strong> {{searches_added_to}}\n    </div>\n{{/searches_added_to}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _Roulette = __webpack_require__(21), _Roulette2 = _interopRequireDefault(_Roulette), _Layover = __webpack_require__(27), _Layover2 = _interopRequireDefault(_Layover), _Menu = __webpack_require__(40), _Menu2 = _interopRequireDefault(_Menu), _Popup = __webpack_require__(23), _Popup2 = _interopRequireDefault(_Popup), _form = __webpack_require__(150), _form2 = _interopRequireDefault(_form), _report = __webpack_require__(189), _report2 = _interopRequireDefault(_report);

exports.default = _Roulette2.default.extend({
    init: function() {
        this._super.apply(this, arguments), this.path = this._model.get("CONSTANTS").REPORT_URL + this.id;
    },
    create: function(e) {
        return (0, _xhr2.default)({
            url: this.path,
            type: "POST",
            data: e
        });
    },
    read: function() {
        var e = (0, _xhr2.default)({
            url: this.path
        });
        return e.then(this._model.set.bind(this._model)), e;
    },
    render: function() {
        var e = this, t = this._super, r = arguments;
        this.read().then(function() {
            t.apply(e, r);
        }).then(this._view.show.bind(this._view));
    }
}, {
    VIEW_CLASS: {
        phone: _Layover2.default.extend(_report2.default).mixin(_form2.default),
        tablet: _Menu2.default.extend(_report2.default).mixin(_form2.default),
        desktop: _Popup2.default.extend(_report2.default).mixin(_form2.default)
    },
    init: function(e) {
        var t = e.find(".js-action-report"), r = t.data("id"), i = t.data("type"), u = "/report/" + i + "/", o = {
            CONSTANTS: {
                REPORT_URL: u
            }
        }, a = new this(r, o);
        return a.setContext(t), a;
    }
}), module.exports = exports.default;

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _moment = __webpack_require__(36), _moment2 = _interopRequireDefault(_moment), _Roulette = __webpack_require__(21), _Roulette2 = _interopRequireDefault(_Roulette), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _login = __webpack_require__(33), _login2 = _interopRequireDefault(_login), _Layover = __webpack_require__(27), _Layover2 = _interopRequireDefault(_Layover), _Menu = __webpack_require__(40), _Menu2 = _interopRequireDefault(_Menu), _Popup = __webpack_require__(23), _Popup2 = _interopRequireDefault(_Popup), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _collection = __webpack_require__(203), _collection2 = _interopRequireDefault(_collection), _Dialog = __webpack_require__(44), _Dialog2 = _interopRequireDefault(_Dialog);

exports.default = _Roulette2.default.extend({
    setContext: function(e) {
        if (_login2.default.isLoggedIn()) return this._super(e);
        var t = new _Dialog2.default({
            id: this.id,
            entity: "project",
            action: "collection"
        });
        t.setContext(e);
    },
    create: function(e) {
        var t = this;
        return (0, _xhr2.default)({
            url: "/collection/create",
            type: "POST",
            data: {
                collection_name: e
            }
        }).then(function(t) {
            var o = t.id, i = +(0, _moment2.default)().format("X");
            if (!o) throw t;
            return {
                id: o,
                title: e,
                owners: [],
                url: "/collection/" + encodeURIComponent(e) + "/" + o,
                created_on: i,
                modified_on: i
            };
        }).then(function(e) {
            return t._model.get("collections").unshift(e), t._model.get("project_collection_ids").unshift(e.id), 
            t.update(), e;
        });
    },
    read: function() {
        var e = (0, _xhr2.default)({
            url: "/gallery/collections/" + this._model.id()
        }).then(function(e) {
            if (!e.project_collection_ids) throw e;
            return e.collections.sort(function(t, o) {
                return e.project_collection_ids.indexOf(+o.id) - e.project_collection_ids.indexOf(+t.id);
            }), e;
        });
        return e.then(this._model.set.bind(this._model)), e;
    },
    update: function() {
        return (0, _xhr2.default)({
            url: "/collection/project/" + this._model.id(),
            type: "POST",
            data: {
                collection_ids: this._model.get("project_collection_ids").join("|")
            }
        });
    },
    render: function() {
        var e = this, t = this._super, o = arguments;
        this.read().then(function() {
            t.apply(e, o);
        }).then(this._view.show.bind(this._view));
    }
}, {
    init: function(e) {
        var t = e.find(".js-action-collection"), o = t.data("id"), i = new this(o);
        return i.setContext(t), i;
    },
    VIEW_CLASS: {
        phone: _Layover2.default.extend(_collection2.default),
        tablet: _Menu2.default.extend(_collection2.default),
        desktop: _Popup2.default.extend(_collection2.default).mixin({
            title: _localization2.default.translate("collection_dialog_header", "Add to Collections")
        })
    }
}), module.exports = exports.default;

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(9), __webpack_require__(3), __webpack_require__(24), __webpack_require__(5), __webpack_require__(37), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, i, r, n, e, o) {
    "use strict";
    function s(t) {
        return t.reduce(function(t, i) {
            var r = t[i.name];
            return t[i.name] = r ? [].concat(r, i.value) : i.value, t;
        }, {});
    }
    function h(t) {
        switch (t.which) {
          case 1:
          case 13:
          case 32:
            this.$form.submit();
        }
    }
    function c(i) {
        var r = new t(), n = r.thenable(), e = "function" == typeof this.commit ? this.commit.call(n, i) : this.commit;
        return r.resolve(e === n ? this.xhr(i) : e), this.trigger("commit"), r;
    }
    var u = n.extend({
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
        validator: function() {
            return !0;
        },
        commit: function() {
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

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component), _miniprofile = __webpack_require__(61), _miniprofile2 = _interopRequireDefault(_miniprofile), _LazyLoadPicture = __webpack_require__(109), _LazyLoadPicture2 = _interopRequireDefault(_LazyLoadPicture), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _Cover = __webpack_require__(90), _Cover2 = _interopRequireDefault(_Cover), _PulsePoint = __webpack_require__(102), _PulsePoint2 = _interopRequireDefault(_PulsePoint), _Appreciate = __webpack_require__(143), _Appreciate2 = _interopRequireDefault(_Appreciate), _CommentSection = __webpack_require__(192), _CommentSection2 = _interopRequireDefault(_CommentSection), _DimensionClasses = __webpack_require__(193), _DimensionClasses2 = _interopRequireDefault(_DimensionClasses), _Lightbox = __webpack_require__(198), _Lightbox2 = _interopRequireDefault(_Lightbox), _mature = __webpack_require__(200), _mature2 = _interopRequireDefault(_mature), _Section = __webpack_require__(194), _Section2 = _interopRequireDefault(_Section), _SocialSharing = __webpack_require__(195), _SocialSharing2 = _interopRequireDefault(_SocialSharing), _Spam = __webpack_require__(196), _Spam2 = _interopRequireDefault(_Spam), _startup = __webpack_require__(201), _startup2 = _interopRequireDefault(_startup), _StickySidebarSocial = __webpack_require__(197), _StickySidebarSocial2 = _interopRequireDefault(_StickySidebarSocial), _updateTalent = __webpack_require__(202), _updateTalent2 = _interopRequireDefault(_updateTalent);

exports.default = _Component2.default.extend({
    init: function(t, e, i, o) {
        this._$context = t, this._$scrollContext = e, this._$project = this._$context.find(".js-project"), 
        this._$projectSidebar = this._$context.find(".js-project-sidebar"), this._isPopup = i, 
        this._config = o || {}, this._data = this._$project.data(), this._projectCoverViews = [];
    },
    bind: function() {
        var t = this._$context.find(".js-project-sidebar-wrap"), e = this._$context.find(".js-project-spam"), i = this._$context.find(".js-lazy"), o = this._$context.find(".js-social-sharing"), r = this._$context.find(".js-social-sharing-sticky"), n = this._$context.find(".js-sidebar-group");
        this.updateTalent(this._$projectSidebar), this._bindAppreciate(), this._bindOtherProjectsHover(), 
        this._bindBackToTop(), _mature2.default.init(this._data.id, "project", this._data), 
        this._lazyPicture = _LazyLoadPicture2.default.init(i, {
            threshold: 600,
            container: this._$scrollContext[0]
        }), this._sectionSidebar = _Section2.default.init(this._$projectSidebar), this._sectionMain = _Section2.default.init(this._$project), 
        this._lightbox = _Lightbox2.default.init(this._$project), this._socialSharing = _SocialSharing2.default.init(o), 
        this._spam = _Spam2.default.init(e), r.data("is-admin") || (this._stickySidebar = _StickySidebarSocial2.default.init(this._$scrollContext, r, t, this._isPopup, this._$project, n, (0, 
        _jquery2.default)(window))), this._dimensionClasses = _DimensionClasses2.default.init(this._$project, this._$project, "width", {
            "breakpoint-comments": 1259,
            "breakpoint-complete-profile": 634
        }), this._data.allow_comments && (this._comments = _CommentSection2.default.init(this._$project)), 
        this._isPopup || (_startup2.default.init(this._config), _miniprofile2.default.init(this._$context)), 
        this._renderFollowPulsePoint();
    },
    _bindOtherProjectsHover: function() {
        var t = this;
        this._$context.find(".js-project-cover").each(function() {
            var e = new _Cover2.default((0, _jquery2.default)(this));
            e.rendered(), t._projectCoverViews.push(e);
        });
    },
    _createFollowPulsePoint: function(t) {
        this.followPulse = new _PulsePoint2.default({
            from: "follow",
            user: t
        }), this.followPulse.render(this.$followButtonContainter);
    },
    _renderFollowPulsePoint: function() {
        var t = this;
        this.$followButtonContainter = this._$projectSidebar.find(".js-hide-phone>.js-action-follow");
        var e = this.$followButtonContainter.data();
        if (e && !e.following && this._data.pulse_points_follow) return "project" === e.entity ? void this._createFollowPulsePoint(_localization2.default.translate("pulsePoint_project", "multiple people")) : "user" === e.entity ? void _miniprofile2.default.loadUser(e.followee).then(function(e) {
            t._createFollowPulsePoint(e.user.display_name);
        }) : void 0;
    },
    _bindBackToTop: function() {
        var t = this, e = this._$scrollContext[0] === window ? (0, _jquery2.default)("body, html") : this._$scrollContext;
        this._$projectSidebar.find(".js-back-to-top").on("click", function() {
            e.animate({
                scrollTop: 0
            }, 250).promise().then(function() {
                t._$scrollContext.trigger("scroll");
            });
        });
    },
    _updateAppreciationCount: function() {
        var t = this._$context.find(".js-stats-appreciations"), e = this._appreciate._model.get("appreciatedOn");
        t.each(function() {
            var t = parseInt((0, _jquery2.default)(this).text(), 10) + (e ? 1 : -1);
            (0, _jquery2.default)(this).text(" " + t);
        });
    },
    _bindAppreciate: function() {
        var t = this._$context.find(".js-appreciate");
        this._appreciate = new _Appreciate2.default({
            id: this._data.id,
            renderPulsePoint: this._data.pulse_points_appreciate
        }, t), this._appreciate.render(), this.listenTo(this._appreciate, "appreciate unappreciate", this._updateAppreciationCount);
    },
    unbind: function() {
        this.talent && this.talent.destroy(), _mature2.default.destroy(), this._isPopup || (_startup2.default.destroy(), 
        _miniprofile2.default.destroy(this._$context)), this._projectCoverViews.forEach(function(t) {
            t.destroy();
        }), this._projectCoverViews = [], this._lightbox.destroy(), this._socialSharing.destroy(), 
        this._lazyPicture.destroy(), this._appreciate.destroy(), this._sectionSidebar.destroy(), 
        this._sectionMain.destroy(), this._spam.destroy(), this._stickySidebar && this._stickySidebar.destroy(), 
        this._dimensionClasses.destroy(), this._data.allow_comments && this._comments.destroy(), 
        this.followPulse && this.followPulse.destroy();
    }
}).extend(_updateTalent2.default), module.exports = exports.default;

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "html.lightbox-enabled,\nhtml.lightbox-enabled body {\n  overflow: hidden; }\n\nhtml.lightbox-zoomed .lightbox-content {\n  cursor: zoom-out;\n  overflow: auto; }\n  html.lightbox-zoomed .lightbox-content.zoomable-x {\n    justify-content: flex-start; }\n  html.lightbox-zoomed .lightbox-content.zoomable-y {\n    align-items: baseline; }\n\nhtml.lightbox-zoomed #lightbox-wrap img {\n  max-width: inherit;\n  max-height: inherit; }\n\nhtml.lightbox-zoomed #lightbox-img-wrap .lightbox-extra {\n  display: none; }\n\n.lightbox-link,\n.lightbox-content.zoomable {\n  cursor: zoom-in; }\n\n#lightbox-wrap .lightbox-contents {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.lightbox-content {\n  align-items: center;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  transition: opacity .4s;\n  width: 100vw; }\n\n#lightbox-blocking {\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1002; }\n  #lightbox-blocking .lightbox-spinner {\n    display: none; }\n\n#lightbox-wrap {\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1001; }\n  #lightbox-wrap .offscreen, #lightbox-wrap.offscreen {\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n    -webkit-transform: translateX(-99999px);\n    -ms-transform: translateX(-99999px);\n    transform: translateX(-99999px);\n    width: 0; }\n  #lightbox-wrap.loading .lightbox-spinner {\n    display: block; }\n  #lightbox-wrap .hidden {\n    opacity: 0; }\n  #lightbox-wrap .lightbox-contents {\n    display: inline-block;\n    max-height: 100%;\n    max-width: 100%; }\n  #lightbox-wrap.single .next, #lightbox-wrap.single .next:hover,\n  #lightbox-wrap.single .prev,\n  #lightbox-wrap.single .prev:hover {\n    display: none; }\n  #lightbox-wrap.extras-hidden #lightbox-img-wrap .lightbox-extra {\n    opacity: 0;\n    transition: opacity 1s; }\n  #lightbox-wrap img {\n    max-height: 100vh;\n    max-width: 100vw; }\n\n#lightbox-inner-wrap {\n  margin: auto;\n  position: relative;\n  z-index: 1003; }\n  #lightbox-inner-wrap .control {\n    cursor: pointer;\n    position: absolute;\n    z-index: 1003; }\n  #lightbox-inner-wrap svg .lightbox-icon-bg {\n    fill: #696969;\n    opacity: .2; }\n  #lightbox-inner-wrap svg:hover .lightbox-icon-bg {\n    opacity: .4; }\n  #lightbox-inner-wrap .next,\n  #lightbox-inner-wrap .prev {\n    height: 100vh;\n    opacity: 0;\n    top: 0;\n    width: 30vw; }\n    #lightbox-inner-wrap .next:hover,\n    #lightbox-inner-wrap .prev:hover {\n      opacity: 1; }\n    #lightbox-inner-wrap .next.hidden,\n    #lightbox-inner-wrap .prev.hidden {\n      cursor: default; }\n      #lightbox-inner-wrap .next.hidden svg,\n      #lightbox-inner-wrap .prev.hidden svg {\n        display: none; }\n    #lightbox-inner-wrap .next svg,\n    #lightbox-inner-wrap .prev svg {\n      top: -webkit-calc(50% - 30px) ;\n      top: calc(50% - 30px) ;\n      position: absolute; }\n      #lightbox-inner-wrap .next svg .lightbox-icon-arrow,\n      #lightbox-inner-wrap .prev svg .lightbox-icon-arrow {\n        fill: #FFFFFF; }\n  #lightbox-inner-wrap .next {\n    right: 0; }\n    #lightbox-inner-wrap .next svg {\n      right: 20px; }\n  #lightbox-inner-wrap .prev {\n    left: 0; }\n    #lightbox-inner-wrap .prev svg {\n      left: 20px; }\n  #lightbox-inner-wrap .close {\n    position: fixed;\n    height: 40px;\n    right: 20px;\n    top: 20px;\n    width: 40px; }\n    #lightbox-inner-wrap .close:hover {\n      cursor: pointer; }\n    #lightbox-inner-wrap .close .lightbox-icon-bg {\n      fill: #fff; }\n\n@media (max-width: 1024px) {\n  #lightbox-inner-wrap .close {\n    right: 0;\n    top: 0; }\n    #lightbox-inner-wrap .close circle {\n      display: none; }\n  #lightbox-inner-wrap .next:hover,\n  #lightbox-inner-wrap .prev:hover {\n    opacity: 0; } }\n\n@media (min-width: 1024px) {\n  .lightbox-link.hover-icon-enabled {\n    position: relative; }\n    .lightbox-link.hover-icon-enabled:hover::after {\n      background: rgba(105, 105, 105, 0.2) url(" + __webpack_require__(216) + ") no-repeat center;\n      background-size: 16px;\n      border-radius: 50%;\n      content: '';\n      display: block;\n      height: 36px;\n      position: absolute;\n      right: 10px;\n      top: 10px;\n      width: 36px;\n      z-index: 1000; } }\n\n@media all and (-ms-high-contrast: none) {\n  .lightbox-link,\n  .lightbox-content.zoomable {\n    cursor: pointer; } }\n", ""]);

// exports


/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes rotate-forever {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-moz-keyframes rotate-forever {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes rotate-forever {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.lightbox-spinner {\n  -webkit-animation-duration: 0.7s;\n  -moz-animation-duration: 0.7s;\n  animation-duration: 0.7s;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: rotate-forever;\n  -moz-animation-name: rotate-forever;\n  animation-name: rotate-forever;\n  -webkit-animation-timing-function: linear;\n  -moz-animation-timing-function: linear;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 4px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  opacity: 0.7; }\n", ""]);

// exports


/***/ },

/***/ 1629:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function preload() {
    (0, _jquery2.default)("#top-panel").addClass("loading");
}

function postload() {
    (0, _jquery2.default)("#top-panel").removeClass("loading");
}

function init() {
    var e = (0, _jquery2.default)(document.body), i = (0, _jquery2.default)("#content");
    _popup2.default.on("prerender", preload).on("postrender", postload).on("dataReceived", function(e) {
        _page_config2.default.viewingProject = e;
    }).init(), _Filters2.default.setLoadState(_window2.default.location.search.replace(/^\?/, "")), 
    _loader2.default.bind(_Filters2.default), _filter2.default.init(e), _content2.default.init(i), 
    _sidebar2.default.init(e), _url2.default.init("#top-panel a, .popup a"), _miniprofile2.default.init(e, i, (0, 
    _jquery2.default)("#infinity-footer"));
}

var _page_config = __webpack_require__(12), _page_config2 = _interopRequireDefault(_page_config), _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _filter = __webpack_require__(699), _filter2 = _interopRequireDefault(_filter), _content = __webpack_require__(698), _content2 = _interopRequireDefault(_content), _sidebar = __webpack_require__(701), _sidebar2 = _interopRequireDefault(_sidebar), _url = __webpack_require__(700), _url2 = _interopRequireDefault(_url), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _loader = __webpack_require__(338), _loader2 = _interopRequireDefault(_loader), _popup = __webpack_require__(144), _popup2 = _interopRequireDefault(_popup), _miniprofile = __webpack_require__(61), _miniprofile2 = _interopRequireDefault(_miniprofile), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window);

(0, _jquery2.default)(init);

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">");t.b("\n" + i);t.b("  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>");t.b("\n" + i);t.b("  <path class=\"icon\" d=\"M10.8,6.5c0-0.7,0.2-1.2,1-1.2h1.3L13.3,3c0,0-0.7-0.2-1.8-0.2C9,2.8,8,4.3,8,6c0,1.2,0,2.3,0,2.3H6.3v2.5H8");t.b("\n" + i);t.b("    V17h2.8v-6.2h2.3l0.2-2.5h-2.5V6.5z\"/>");t.b("\n" + i);t.b("</svg>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">\n  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>\n  <path class=\"icon\" d=\"M10.8,6.5c0-0.7,0.2-1.2,1-1.2h1.3L13.3,3c0,0-0.7-0.2-1.8-0.2C9,2.8,8,4.3,8,6c0,1.2,0,2.3,0,2.3H6.3v2.5H8\n    V17h2.8v-6.2h2.3l0.2-2.5h-2.5V6.5z\"/>\n</svg>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">");t.b("\n" + i);t.b("  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>");t.b("\n" + i);t.b("  <path class=\"icon\" d=\"M7.5,5.2c0-0.8-0.7-1.5-1.7-1.5S4.2,4.3,4.2,5.2s0.7,1.5,1.7,1.5l0,0C6.8,6.7,7.5,6,7.5,5.2z\"/>");t.b("\n" + i);t.b("  <rect class=\"icon\" x=\"4.7\" y=\"8\" width=\"2.5\" height=\"7\"/>");t.b("\n" + i);t.b("  <path class=\"icon\" d=\"M16.2,11.2c0-2.3-1.2-3.7-2.8-3.7c-1,0-1.8,0.7-2,1.5l-0.2-1H8.7c0,0.3,0,1.7,0,1.7V15h2.5v-3.8");t.b("\n" + i);t.b("    c0-1,0.5-1.7,1.2-1.7c0.8,0,1.3,0.3,1.3,1.7v3.7h2.5V11.2z\"/>");t.b("\n" + i);t.b("</svg>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">\n  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>\n  <path class=\"icon\" d=\"M7.5,5.2c0-0.8-0.7-1.5-1.7-1.5S4.2,4.3,4.2,5.2s0.7,1.5,1.7,1.5l0,0C6.8,6.7,7.5,6,7.5,5.2z\"/>\n  <rect class=\"icon\" x=\"4.7\" y=\"8\" width=\"2.5\" height=\"7\"/>\n  <path class=\"icon\" d=\"M16.2,11.2c0-2.3-1.2-3.7-2.8-3.7c-1,0-1.8,0.7-2,1.5l-0.2-1H8.7c0,0.3,0,1.7,0,1.7V15h2.5v-3.8\n    c0-1,0.5-1.7,1.2-1.7c0.8,0,1.3,0.3,1.3,1.7v3.7h2.5V11.2z\"/>\n</svg>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">");t.b("\n" + i);t.b("  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>");t.b("\n" + i);t.b("	<path class=\"icon\" d=\"M7.4,19.7c0,0,0.8-1.2,0.9-2C8.5,17.2,9,14.8,9,14.8c0.3,0.7,1.3,1.2,2.5,1.2c3.2,0,5.3-3,5.3-6.8");t.b("\n" + i);t.b("		c0-3-2.5-5.7-6.3-5.7c-4.8,0-7.2,3.3-7.2,6.2c0,1.7,0.7,3.3,2,3.8c0.2,0.2,0.5,0,0.5-0.3C5.8,13,6,12.5,6,12.3C6,12,6,12,5.8,11.8");t.b("\n" + i);t.b("		c-0.3-0.5-0.7-1.2-0.7-2C5.2,7.3,7,5,10.2,5c2.7,0,4.2,1.7,4.2,3.8c0,2.8-1.3,5.3-3.2,5.3c-1,0-1.8-0.8-1.5-2");t.b("\n" + i);t.b("		c0.3-1.3,0.8-2.7,0.8-3.5S10,7.2,9.2,7.2c-1,0-2,1.2-2,2.7c0,1,0.3,1.5,0.3,1.5S6.3,16,6.2,16.8C6,17.5,6,18.5,6,19.2");t.b("\n" + i);t.b("		c0,0,0.5,0.2,0.7,0.3c0.1,0,0.3,0.1,0.4,0.1C7.3,19.6,7.4,19.7,7.4,19.7z\"/>");t.b("\n" + i);t.b("</svg>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">\n  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>\n\t<path class=\"icon\" d=\"M7.4,19.7c0,0,0.8-1.2,0.9-2C8.5,17.2,9,14.8,9,14.8c0.3,0.7,1.3,1.2,2.5,1.2c3.2,0,5.3-3,5.3-6.8\n\t\tc0-3-2.5-5.7-6.3-5.7c-4.8,0-7.2,3.3-7.2,6.2c0,1.7,0.7,3.3,2,3.8c0.2,0.2,0.5,0,0.5-0.3C5.8,13,6,12.5,6,12.3C6,12,6,12,5.8,11.8\n\t\tc-0.3-0.5-0.7-1.2-0.7-2C5.2,7.3,7,5,10.2,5c2.7,0,4.2,1.7,4.2,3.8c0,2.8-1.3,5.3-3.2,5.3c-1,0-1.8-0.8-1.5-2\n\t\tc0.3-1.3,0.8-2.7,0.8-3.5S10,7.2,9.2,7.2c-1,0-2,1.2-2,2.7c0,1,0.3,1.5,0.3,1.5S6.3,16,6.2,16.8C6,17.5,6,18.5,6,19.2\n\t\tc0,0,0.5,0.2,0.7,0.3c0.1,0,0.3,0.1,0.4,0.1C7.3,19.6,7.4,19.7,7.4,19.7z\"/>\n</svg>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">");t.b("\n" + i);t.b("  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>");t.b("\n" + i);t.b("  <path class=\"icon\" d=\"M17.5,6.3c-0.5,0.2-1,0.3-1.7,0.5c0.7-0.3,1-0.8,1.2-1.5c-0.5,0.3-1.2,0.5-1.8,0.7c-0.5-0.5-1.2-0.8-2-0.8");t.b("\n" + i);t.b("    c-1.5,0-2.8,1.3-2.8,2.8c0,0.2,0,0.5,0,0.7C8,8.5,5.8,7.3,4.5,5.7c-0.2,0.5-0.3,1-0.3,1.5c0,1,0.5,1.8,1.3,2.3");t.b("\n" + i);t.b("    C5,9.5,4.7,9.3,4.2,9.2l0,0c0,1.3,1,2.5,2.3,2.8c-0.2,0-0.5,0.2-0.7,0.2s-0.3,0-0.5,0c0.3,1.2,1.3,1.8,2.7,2c-1,0.8-2.2,1.3-3.5,1.3");t.b("\n" + i);t.b("    c-0.2,0-0.5,0-0.7,0c1.3,0.8,2.8,1.2,4.3,1.2c5.2,0,8-4.3,8-8c0-0.2,0-0.3,0-0.3C16.7,7.5,17.2,7,17.5,6.3z\"/>");t.b("\n" + i);t.b("</svg>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<svg class=\"icon-social\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" xml:space=\"preserve\">\n  <path class=\"circle\" d=\"M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z\"/>\n  <path class=\"icon\" d=\"M17.5,6.3c-0.5,0.2-1,0.3-1.7,0.5c0.7-0.3,1-0.8,1.2-1.5c-0.5,0.3-1.2,0.5-1.8,0.7c-0.5-0.5-1.2-0.8-2-0.8\n    c-1.5,0-2.8,1.3-2.8,2.8c0,0.2,0,0.5,0,0.7C8,8.5,5.8,7.3,4.5,5.7c-0.2,0.5-0.3,1-0.3,1.5c0,1,0.5,1.8,1.3,2.3\n    C5,9.5,4.7,9.3,4.2,9.2l0,0c0,1.3,1,2.5,2.3,2.8c-0.2,0-0.5,0.2-0.7,0.2s-0.3,0-0.5,0c0.3,1.2,1.3,1.8,2.7,2c-1,0.8-2.2,1.3-3.5,1.3\n    c-0.2,0-0.5,0-0.7,0c1.3,0.8,2.8,1.2,4.3,1.2c5.2,0,8-4.3,8-8c0-0.2,0-0.3,0-0.3C16.7,7.5,17.2,7,17.5,6.3z\"/>\n</svg>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"be/portfolio-device": __webpack_require__(138).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"portfolio-popup-content-inner\">");t.b("\n" + i);t.b(t.rp("<be/portfolio-device0",c,p,"  "));t.b("  <div class=\"portfolio-details-container\">");t.b("\n" + i);t.b("    <div class=\"portfolio-title\">");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,170,286,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_title|Now that you've published a project, build a custom website in minutes with Adobe Portfolio.");});c.pop();}t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <ul class=\"portfolio-list\">");t.b("\n" + i);if(t.s(t.f("paidCC",c,p,1),c,p,0,361,524,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li class=\"cc\">");if(t.s(t.f("translate",c,p,1),c,p,0,399,498,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_list_1_alt|You're a Creative Cloud member, so Portfolio is FREE with your CC plan");});c.pop();}t.b("</li>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("paidCC",c,p,1),c,p,1,0,0,"")){t.b("        <li>");if(t.s(t.f("translate",c,p,1),c,p,0,580,644,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_list_1|Free with any Adobe Creative Cloud plan");});c.pop();}t.b("</li>");t.b("\n" + i);};t.b("      <li>");if(t.s(t.f("translate",c,p,1),c,p,0,706,749,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_list_2|Syncs with Behance");});c.pop();}t.b("</li>");t.b("\n" + i);t.b("      <li>");if(t.s(t.f("translate",c,p,1),c,p,0,793,836,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_list_3|Responsive layouts");});c.pop();}t.b("</li>");t.b("\n" + i);t.b("      <li>");if(t.s(t.f("translate",c,p,1),c,p,0,880,929,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_list_4|Access all Typekit fonts");});c.pop();}t.b("</li>");t.b("\n" + i);t.b("    </ul>");t.b("\n" + i);t.b("    <a href=\"https://myportfolio.com\" id=\"portfolio-button\" class=\"js-portfolio-button form-button form-button-massive form-button-default\">");if(t.s(t.f("translate",c,p,1),c,p,0,1113,1161,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_portfolio_start|Start Your Portfolio Now");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<be/portfolio-device0":{name:"be/portfolio-device", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"portfolio-popup-content-inner\">\n  {{> be/portfolio-device}}\n  <div class=\"portfolio-details-container\">\n    <div class=\"portfolio-title\">\n      {{#translate}}project_portfolio_title|Now that you've published a project, build a custom website in minutes with Adobe Portfolio.{{/translate}}\n    </div>\n    <ul class=\"portfolio-list\">\n      {{#paidCC}}\n        <li class=\"cc\">{{#translate}}project_portfolio_list_1_alt|You're a Creative Cloud member, so Portfolio is FREE with your CC plan{{/translate}}</li>\n      {{/paidCC}}\n      {{^paidCC}}\n        <li>{{#translate}}project_portfolio_list_1|Free with any Adobe Creative Cloud plan{{/translate}}</li>\n      {{/paidCC}}\n      <li>{{#translate}}project_portfolio_list_2|Syncs with Behance{{/translate}}</li>\n      <li>{{#translate}}project_portfolio_list_3|Responsive layouts{{/translate}}</li>\n      <li>{{#translate}}project_portfolio_list_4|Access all Typekit fonts{{/translate}}</li>\n    </ul>\n    <a href=\"https://myportfolio.com\" id=\"portfolio-button\" class=\"js-portfolio-button form-button form-button-massive form-button-default\">{{#translate}}project_portfolio_start|Start Your Portfolio Now{{/translate}}</a>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"be/socialShareButtons": __webpack_require__(86).template,"be/_shareLinkInput": __webpack_require__(105).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"promote-dialog\">");t.b("\n" + i);t.b("  <div class=\"promote-buttons\">");t.b("\n" + i);t.b("    <h2>");t.b("\n" + i);t.b("      ");if(t.s(t.f("header",c,p,1),c,p,0,84,94,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("header",c,p,0)));});c.pop();}t.b("\n" + i);t.b("      ");if(!t.s(t.f("header",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("translate",c,p,1),c,p,0,137,184,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("share_popup_promote_your_work|Promote Your Work");});c.pop();}};t.b("\n" + i);t.b("    </h2>");t.b("\n" + i);t.b(t.rp("<be/socialShareButtons0",c,p,"    "));t.b("  </div>");t.b("\n" + i);t.b(t.rp("<be/_shareLinkInput1",c,p,"  "));t.b("</div>");t.b("\n");return t.fl(); },partials: {"<be/socialShareButtons0":{name:"be/socialShareButtons", partials: {}, subs: {  }},"<be/_shareLinkInput1":{name:"be/_shareLinkInput", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"promote-dialog\">\n  <div class=\"promote-buttons\">\n    <h2>\n      {{#header}}{{header}}{{/header}}\n      {{^header}}{{#translate}}share_popup_promote_your_work|Promote Your Work{{/translate}}{{/header}}\n    </h2>\n    {{>be/socialShareButtons}}\n  </div>\n  {{>be/_shareLinkInput}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"be/_shareLinkInput": __webpack_require__(105).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"share-link-inner-dialog\">");t.b("\n" + i);t.b("  <div class=\"share-link-info\">");t.b("\n" + i);t.b("    <h1>");if(t.s(t.f("translate",c,p,1),c,p,0,92,141,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("be_share_link_copy_project_link|Copy Project Link");});c.pop();}t.b("</h1>");t.b("\n" + i);t.b("    <p>");if(t.s(t.f("translate",c,p,1),c,p,0,182,280,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("be_share_link_copy_project_link_with_others|Copy the link below to share this project with others.");});c.pop();}t.b("</p>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b(t.rp("<be/_shareLinkInput0",c,p,"  "));t.b("</div>");t.b("\n");return t.fl(); },partials: {"<be/_shareLinkInput0":{name:"be/_shareLinkInput", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"share-link-inner-dialog\">\n  <div class=\"share-link-info\">\n    <h1>{{#translate}}be_share_link_copy_project_link|Copy Project Link{{/translate}}</h1>\n    <p>{{#translate}}be_share_link_copy_project_link_with_others|Copy the link below to share this project with others.{{/translate}}</p>\n  </div>\n  {{>be/_shareLinkInput}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(13) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, r) {
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

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<li class=\"comment-container cfix ");if(t.s(t.d("user.owner",c,p,1),c,p,0,49,62,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("owner-comment");});c.pop();}if(!t.s(t.d("user.owner",c,p,1),c,p,1,0,0,"")){t.b("user-comment");};t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <a class=\"comment-user-image-link left\" href=\"");t.b(t.v(t.d("user.url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    <img class=\"comment-user-image js-mini-profile\" data-id=\"");t.b(t.v(t.d("user.id",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("user.image",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  </a>");t.b("\n" + i);t.b("  <div class=\"comment-text-container left relative\">");t.b("\n" + i);t.b("    <div class=\"comment-user-date-wrap ui-corner cfix\">");t.b("\n" + i);t.b("      <a class=\"user-name-link bold js-mini-profile\" data-id=\"");t.b(t.v(t.d("user.id",c,p,0)));t.b("\" href=\"");t.b(t.v(t.d("user.url",c,p,0)));t.b("\">");t.b(t.v(t.d("user.name",c,p,0)));t.b("</a>");t.b("\n" + i);if(t.s(t.f("replied_to",c,p,1),c,p,0,548,686,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <span class=\"bold\">");if(t.s(t.f("translate",c,p,1),c,p,0,588,658,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("comment_replied_to|replied to <a href=\"");t.b(t.v(t.d("user.url",c,p,0)));t.b("\">");t.b(t.v(t.d("user.name",c,p,0)));t.b("</a>");});c.pop();}t.b("</span>");t.b("\n" + i);});c.pop();}t.b("      <span class=\"comment-date ");if(t.s(t.f("timestamp",c,p,1),c,p,0,748,767,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("js-format-timestamp");});c.pop();}t.b("\" data-timestamp=\"");t.b(t.v(t.f("timestamp",c,p,0)));t.b("\">");t.b(t.v(t.f("posted_on",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"comment-text-wrap\"><div class=\"comment-text\">");t.b(t.t(t.f("comment",c,p,0)));t.b("</div></div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"comment-actions\">");t.b("\n" + i);if(t.s(t.d("permissions.flag",c,p,1),c,p,0,999,1112,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a class=\"comment-action comment-spam js-action-spam\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-type=\"");t.b(t.v(t.f("type",c,p,0)));t.b("comment\"></a>");t.b("\n" + i);});c.pop();}if(t.s(t.d("permissions.close",c,p,1),c,p,0,1160,1224,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a class=\"comment-action comment-close js-delete\"></a>");t.b("\n" + i);});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("</li>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<li class=\"comment-container cfix {{#user.owner}}owner-comment{{/user.owner}}{{^user.owner}}user-comment{{/user.owner}}\" data-id=\"{{id}}\">\n  <a class=\"comment-user-image-link left\" href=\"{{user.url}}\">\n    <img class=\"comment-user-image js-mini-profile\" data-id=\"{{user.id}}\" src=\"{{user.image}}\">\n  </a>\n  <div class=\"comment-text-container left relative\">\n    <div class=\"comment-user-date-wrap ui-corner cfix\">\n      <a class=\"user-name-link bold js-mini-profile\" data-id=\"{{user.id}}\" href=\"{{user.url}}\">{{user.name}}</a>\n      {{#replied_to}}\n      <span class=\"bold\">{{#translate}}comment_replied_to|replied to <a href=\"{{user.url}}\">{{user.name}}</a>{{/translate}}</span>\n      {{/replied_to}}\n      <span class=\"comment-date {{#timestamp}}js-format-timestamp{{/timestamp}}\" data-timestamp=\"{{timestamp}}\">{{posted_on}}</span>\n    </div>\n    <div class=\"comment-text-wrap\"><div class=\"comment-text\">{{& comment}}</div></div>\n  </div>\n  <div class=\"comment-actions\">\n    {{#permissions.flag}}\n    <a class=\"comment-action comment-spam js-action-spam\" data-id=\"{{id}}\" data-type=\"{{type}}comment\"></a>\n    {{/permissions.flag}}\n    {{#permissions.close}}\n    <a class=\"comment-action comment-close js-delete\"></a>\n    {{/permissions.close}}\n  </div>\n</li>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"unverified-modal-content\">");t.b("\n" + i);t.b("  <div class=\"unverified-message\">");t.b("\n" + i);t.b("    ");if(t.s(t.f("translate",c,p,1),c,p,0,92,212,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_unverified_popup_message|Your project is currently not visible publicly because your account<br />is unverified.");});c.pop();}t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"verify-warning notice-box\">");t.b("\n" + i);t.b("    <p class=\"verify-warning-body\">");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,335,460,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_unverified_popup_warning_inbox|Please check your inbox ");if(t.s(t.f("email",c,p,1),c,p,0,408,419,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("(");t.b(t.v(t.f("email",c,p,0)));t.b(")");});c.pop();}t.b(" and verify your email address.");});c.pop();}t.b("<br />");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,501,582,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_unverified_popup_warning_email|Haven't received a verification email yet?");});c.pop();}t.b("\n" + i);t.b("      <br />");t.b("\n" + i);t.b("      <a href=\"");t.b(t.v(t.f("verification_url",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,661,707,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_unverified_popup_click_here|Click Here");});c.pop();}t.b("</a>.");t.b("\n" + i);t.b("    </p>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"unverified-modal-content\">\n  <div class=\"unverified-message\">\n    {{#translate}}project_unverified_popup_message|Your project is currently not visible publicly because your account<br />is unverified.{{/translate}}\n  </div>\n\n  <div class=\"verify-warning notice-box\">\n    <p class=\"verify-warning-body\">\n      {{#translate}}project_unverified_popup_warning_inbox|Please check your inbox {{#email}}({{email}}){{/email}} and verify your email address.{{/translate}}<br />\n      {{#translate}}project_unverified_popup_warning_email|Haven't received a verification email yet?{{/translate}}\n      <br />\n      <a href=\"{{verification_url}}\">{{#translate}}project_unverified_popup_click_here|Click Here{{/translate}}</a>.\n    </p>\n  </div>\n</div>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<a title=\"");if(t.s(t.f("translate",c,p,1),c,p,0,24,56,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_message_user|Message User");});c.pop();}t.b("\" class=\"");t.sub("classes",c,p,i);t.b(" js-action-message-user beicons-pre beicons-pre-mail\" data-contact_name=\"");t.b(t.v(t.f("display_name",c,p,0)));t.b("\" data-contact_id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" unselectable=\"on\">");t.sub("label",c,p,i);t.b("</a>");t.b("\n");return t.fl(); },partials: {}, subs: { "classes": function(c,p,t,i) {},"label": function(c,p,t,i) {} }}, "<a title=\"{{#translate}}button_message_user|Message User{{/translate}}\" class=\"{{$classes}}{{/classes}} js-action-message-user beicons-pre beicons-pre-mail\" data-contact_name=\"{{display_name}}\" data-contact_id=\"{{id}}\" unselectable=\"on\">{{$label}}{{/label}}</a>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"form/textarea": __webpack_require__(81).template,"form/text": __webpack_require__(73).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"entity-report\">");t.b("\n" + i);t.b("  <form>");t.b("\n" + i);if(t.s(t.f("disclaimer",c,p,1),c,p,0,56,119,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <span class=\"disclaimer-wrap\">");t.b(t.t(t.f("disclaimer",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.d("options.0",c,p,1),c,p,0,154,336,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <ul id=\"reason\" class=\"divided-list menu-section\">");t.b("\n" + i);if(t.s(t.f("options",c,p,1),c,p,0,228,309,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li class=\"divided-item reason\" data-value=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("reason",c,p,0)));t.b("</li>");t.b("\n" + i);});c.pop();}t.b("    </ul>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <div class=\"menu-section\">");t.b("\n" + i);if(t.s(t.f("comments",c,p,1),c,p,0,402,421,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/textarea0",c,p,""));});c.pop();}t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"menu-section\">");t.b("\n" + i);if(t.s(t.f("email",c,p,1),c,p,0,494,509,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/text1",c,p,""));});c.pop();}t.b("    </div>");t.b("\n" + i);t.b("  </form>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<form/textarea0":{name:"form/textarea", partials: {}, subs: {  }},"<form/text1":{name:"form/text", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"entity-report\">\n  <form>\n    {{#disclaimer}}\n    <span class=\"disclaimer-wrap\">{{{disclaimer}}}</span>\n    {{/disclaimer}}\n\n    {{#options.0}}\n    <ul id=\"reason\" class=\"divided-list menu-section\">\n      {{#options}}\n      <li class=\"divided-item reason\" data-value=\"{{id}}\">{{reason}}</li>\n      {{/options}}\n    </ul>\n    {{/options.0}}\n\n    <div class=\"menu-section\">\n      {{#comments}}{{> form/textarea}}{{/comments}}\n    </div>\n\n    <div class=\"menu-section\">\n      {{#email}}{{> form/text}}{{/email}}\n    </div>\n  </form>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_reorderButton": __webpack_require__(139).template,"lib/_editButton": __webpack_require__(82).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"controls-overlay hide-phone hide-tablet\">");t.b("\n" + i);if(t.s(t.f("is_team",c,p,1),c,p,0,68,157,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_admin_editable",c,p,1),c,p,0,95,132,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_reorderButton0",c,p,"      "));});c.pop();}});c.pop();}if(!t.s(t.f("is_team",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<lib/_reorderButton1",c,p,"    "));};t.b("  <div class=\"controls-overlay-action controls-overlay-menu js-controls-overlay-menu tooltipi-container\">");t.b("\n" + i);t.b(t.rp("<lib/_editButton2",c,p,"    "));t.b("    <span class=\"js-spin overlay-spinner\"></span>");t.b("\n" + i);t.b("    <ul class=\"tooltipi tooltipi-white controls-overlay-menu-items\">");t.b("\n" + i);if(!t.s(t.f("is_team",c,p,1),c,p,1,0,0,"")){t.b("        <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("          <a href=\"");t.b(t.v(t.f("edit_url",c,p,0)));t.b("\" class=\"js-project-edit beicons-pre beicons-pre-edit\">");t.b("\n" + i);t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,662,687,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_edit|Edit");});c.pop();}t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);t.b("        <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("          <a href=\"#\" class=\"js-project-clone beicons-pre beicons-pre-clone\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,900,927,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_clone|Clone");});c.pop();}t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);if(t.s(t.f("share_url",c,p,1),c,p,0,993,1270,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("            <a href=\"");t.b(t.v(t.f("share_url",c,p,0)));t.b("\" class=\"js-project-promote beicons-pre beicons-pre-share\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,1183,1214,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_promote|Promote");});c.pop();}t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("          </li>");t.b("\n" + i);});c.pop();}t.b("        <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("          <a href=\"#\" class=\"js-project-unpublish beicons-pre beicons-pre-unpublish\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,1462,1497,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_unpublish|Unpublish");});c.pop();}t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);if(t.s(t.f("is_founder",c,p,1),c,p,0,1564,1895,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("            <a href=\"#\" class=\"js-project-delete beicons-pre beicons-pre-delete\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");if(t.s(t.f("multiple_owners",c,p,1),c,p,0,1732,1760,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" data-multiple-owners=\"true\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,1810,1839,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_delete|Delete");});c.pop();}t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("          </li>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("is_founder",c,p,1),c,p,1,0,0,"")){t.b("          <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("            <a href=\"#\" class=\"js-project-remove-owner beicons-pre beicons-pre-delete\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,2118,2153,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_remove_owner|Remove");});c.pop();}t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("          </li>");t.b("\n" + i);};};if(t.s(t.f("is_team",c,p,1),c,p,0,2262,2889,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_member_editable",c,p,1),c,p,0,2294,2543,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("            <a href=\"");t.b(t.v(t.f("edit_url",c,p,0)));t.b("\" class=\"js-project-edit beicons-pre beicons-pre-edit\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,2462,2487,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_edit|Edit");});c.pop();}t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("          </li>");t.b("\n" + i);});c.pop();}if(t.s(t.f("is_admin_editable",c,p,1),c,p,0,2597,2860,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <li class=\"controls-overlay-menu-item\">");t.b("\n" + i);t.b("            <a href=\"#\" class=\"js-project-remove beicons-pre beicons-pre-delete\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,2775,2804,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("profile_project_remove|Remove");});c.pop();}t.b("\n" + i);t.b("            </a>");t.b("\n" + i);t.b("          </li>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("    </ul>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_reorderButton0":{name:"lib/_reorderButton", partials: {}, subs: {  }},"<lib/_reorderButton1":{name:"lib/_reorderButton", partials: {}, subs: {  }},"<lib/_editButton2":{name:"lib/_editButton", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"controls-overlay hide-phone hide-tablet\">\n  {{#is_team}}\n    {{#is_admin_editable}}\n      {{> lib/_reorderButton }}\n    {{/is_admin_editable}}\n  {{/is_team}}\n  {{^is_team}}\n    {{> lib/_reorderButton }}\n  {{/is_team}}\n  <div class=\"controls-overlay-action controls-overlay-menu js-controls-overlay-menu tooltipi-container\">\n    {{> lib/_editButton }}\n    <span class=\"js-spin overlay-spinner\"></span>\n    <ul class=\"tooltipi tooltipi-white controls-overlay-menu-items\">\n      {{^is_team}}\n        <li class=\"controls-overlay-menu-item\">\n          <a href=\"{{edit_url}}\" class=\"js-project-edit beicons-pre beicons-pre-edit\">\n            {{#translate}}profile_project_edit|Edit{{/translate}}\n          </a>\n        </li>\n        <li class=\"controls-overlay-menu-item\">\n          <a href=\"#\" class=\"js-project-clone beicons-pre beicons-pre-clone\" data-id=\"{{id}}\">\n            {{#translate}}profile_project_clone|Clone{{/translate}}\n          </a>\n        </li>\n        {{#share_url}}\n          <li class=\"controls-overlay-menu-item\">\n            <a href=\"{{share_url}}\" class=\"js-project-promote beicons-pre beicons-pre-share\" data-id=\"{{id}}\">\n              {{#translate}}profile_project_promote|Promote{{/translate}}\n            </a>\n          </li>\n        {{/share_url}}\n        <li class=\"controls-overlay-menu-item\">\n          <a href=\"#\" class=\"js-project-unpublish beicons-pre beicons-pre-unpublish\" data-id=\"{{id}}\">\n            {{#translate}}profile_project_unpublish|Unpublish{{/translate}}\n          </a>\n        </li>\n        {{#is_founder}}\n          <li class=\"controls-overlay-menu-item\">\n            <a href=\"#\" class=\"js-project-delete beicons-pre beicons-pre-delete\" data-id=\"{{id}}\"{{#multiple_owners}} data-multiple-owners=\"true\"{{/multiple_owners}}>\n              {{#translate}}profile_project_delete|Delete{{/translate}}\n            </a>\n          </li>\n        {{/is_founder}}\n        {{^is_founder}}\n          <li class=\"controls-overlay-menu-item\">\n            <a href=\"#\" class=\"js-project-remove-owner beicons-pre beicons-pre-delete\" data-id=\"{{id}}\">\n              {{#translate}}profile_project_remove_owner|Remove{{/translate}}\n            </a>\n          </li>\n        {{/is_founder}}\n      {{/is_team}}\n      {{#is_team}}\n        {{#is_member_editable}}\n          <li class=\"controls-overlay-menu-item\">\n            <a href=\"{{edit_url}}\" class=\"js-project-edit beicons-pre beicons-pre-edit\">\n              {{#translate}}profile_project_edit|Edit{{/translate}}\n            </a>\n          </li>\n        {{/is_member_editable}}\n        {{#is_admin_editable}}\n          <li class=\"controls-overlay-menu-item\">\n            <a href=\"#\" class=\"js-project-remove beicons-pre beicons-pre-delete\" data-id=\"{{id}}\">\n              {{#translate}}profile_project_remove|Remove{{/translate}}\n            </a>\n          </li>\n        {{/is_admin_editable}}\n      {{/is_team}}\n    </ul>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<form>");t.b("\n" + i);t.b("  <div class=\"form-item form-item-text form-item-conjoined left\">");t.b("\n" + i);t.b("    <input type=\"text\" placeholder=\"");if(t.s(t.f("translate",c,p,1),c,p,0,123,188,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_create_new_collection_placeholder|Create a New Collection");});c.pop();}t.b("\" name=\"collection\" class=\"form-text\">");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"form-item form-item-a form-item-conjoined left\">");t.b("\n" + i);t.b("    <a class=\"form-button form-submit form-button-light-and-grey\">");if(t.s(t.f("translate",c,p,1),c,p,0,393,419,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_add_collection|Add");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <ul id=\"collection_ids\" class=\"divided-list");if(!t.s(t.f("collections",c,p,1),c,p,1,0,0,"")){t.b(" empty");};t.b("\">");t.b("\n" + i);if(t.s(t.f("collections",c,p,1),c,p,0,554,632,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <li class=\"divided-item collection\" data-key=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("title",c,p,0)));t.b("</li>");t.b("\n" + i);});c.pop();}t.b("  </ul>");t.b("\n" + i);t.b("</form>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<form>\n  <div class=\"form-item form-item-text form-item-conjoined left\">\n    <input type=\"text\" placeholder=\"{{#translate}}project_create_new_collection_placeholder|Create a New Collection{{/translate}}\" name=\"collection\" class=\"form-text\">\n  </div>\n  <div class=\"form-item form-item-a form-item-conjoined left\">\n    <a class=\"form-button form-submit form-button-light-and-grey\">{{#translate}}project_add_collection|Add{{/translate}}</a>\n  </div>\n\n  <ul id=\"collection_ids\" class=\"divided-list{{^collections}} empty{{/collections}}\">\n    {{#collections}}\n    <li class=\"divided-item collection\" data-key=\"{{id}}\">{{title}}</li>\n    {{/collections}}\n  </ul>\n</form>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"mature-message login-modal\">");t.b("\n" + i);t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,57,193,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_sign_in_mature|You must log in or sign up for Behance<span class=\"hide-phone\"> to view projects containing adult content.</span>");});c.pop();}t.b("\n" + i);if(t.s(t.f("login",c,p,1),c,p,0,220,231,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<button0",c,p,""));});c.pop();}t.b("</div>");t.b("\n");t.b("\n" + i);t.b("<div class=\"popup-buttons login-button\">");t.b("\n" + i);t.b("  ");if(t.s(t.f("translate",c,p,1),c,p,0,307,463,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_no_account_signup|Don't Have an Account? <a class=\"js-adobeid-signup signup\" data-signup-from=\"Mature_Content_SignUpBehance\">Sign up for Behance</a>");});c.pop();}t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<button0":{name:"button", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"mature-message login-modal\">\n  {{#translate}}project_sign_in_mature|You must log in or sign up for Behance<span class=\"hide-phone\"> to view projects containing adult content.</span>{{/translate}}\n  {{#login}}{{>button}}{{/login}}\n</div>\n\n<div class=\"popup-buttons login-button\">\n  {{#translate}}project_no_account_signup|Don't Have an Account? <a class=\"js-adobeid-signup signup\" data-signup-from=\"Mature_Content_SignUpBehance\">Sign up for Behance</a>{{/translate}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(56)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../css-loader/index.js!./../../sass-loader/index.js?includePaths[]=/app/node_modules/bourbon/app/assets/stylesheets!./spinner.scss", function() {
			var newContent = require("!!./../../css-loader/index.js!./../../sass-loader/index.js?includePaths[]=/app/node_modules/bourbon/app/assets/stylesheets!./spinner.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(31) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t) {
    "use strict";
    var e = /(?:^|[^\w])@(\w+)/;
    return t.widget("be.automention", t.be.autosuggest, {
        _create: function() {
            this._super(), this._on(this.element, {
                mouseup: this.check,
                input: this.check,
                keyup: this.check,
                blur: this._clear
            }), this.menu.element.addClass("mention-menu");
        },
        _mention: {
            value: "",
            start: 0,
            end: 0
        },
        _last: null,
        _value: function(t) {
            if (!t) return this._mention.value;
            var e = this._super(), n = e.indexOf("@", this._mention.start) + 1;
            t = e.substring(0, n) + t, " " !== e.charAt(this._mention.end) && (t += " "), t += e.substring(this._mention.end), 
            this._super(t), this.element.trigger("input");
        },
        _clear: function() {
            this._last = null;
        },
        check: function(t) {
            if (this.element.is(document.activeElement)) {
                var n, i, s, u = document.activeElement.value, a = document.activeElement.selectionStart;
                a && u && (i = u.lastIndexOf(" ", a - 1), s = u.indexOf(" ", a), s = ~s ? s : 1 / 0, 
                n = u.substring(i, s), n = e.exec(n), n = n && n[1], this._last !== n && (this._mention.value = n || "", 
                this._mention.start = i, this._mention.end = s, this.search(null, t), this._trigger("value", t, n)), 
                this._last = n);
            }
        }
    }), t.extend(t.be.automention, {
        usernameMatch: e
    }), t.be.automention;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(9) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
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

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Controller = __webpack_require__(29), _Controller2 = _interopRequireDefault(_Controller), _Model = __webpack_require__(32), _Model2 = _interopRequireDefault(_Model), _Comment = __webpack_require__(183), _Comment2 = _interopRequireDefault(_Comment), _pubsub = __webpack_require__(22), _pubsub2 = _interopRequireDefault(_pubsub), constructor = _Controller2.default.extend({
    _initView: function() {
        this._super.apply(this, arguments), this.listenTo(this._view, "all", this.trigger);
    },
    destroy: function() {
        this.stopListening(), this._super();
    }
}, {
    MODEL_CLASS: _Model2.default,
    VIEW_CLASS: _Comment2.default
}).mixin(_pubsub2.default);

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Roulette = __webpack_require__(21), _Roulette2 = _interopRequireDefault(_Roulette), _remoteLogger = __webpack_require__(14), _remoteLogger2 = _interopRequireDefault(_remoteLogger), _Popup = __webpack_require__(23), _Popup2 = _interopRequireDefault(_Popup), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window), _portfolioService = __webpack_require__(116), _portfolioService2 = _interopRequireDefault(_portfolioService), _portfolio = __webpack_require__(167), _portfolio2 = _interopRequireDefault(_portfolio), PortfolioView = _Popup2.default.extend({
    mustache: _portfolio2.default,
    templateData: function() {
        var e = this._model.data();
        return e.classes = [ "portfolio-modal", "hide-phone" ], e;
    },
    rendered: function() {
        this._super(), this._controller.log("portfolio_upsell_rendered"), this._bindClickEvents(), 
        this._autoScaleContent(), (0, _jquery2.default)(window).on("resize.be-controller-portfoliopopup", this._autoScaleContent.bind(this));
    },
    _autoScaleContent: function() {
        _portfolioService2.default.autoScaleContent(this.$view), this.position();
    },
    _bindClickEvents: function() {
        var e = this;
        (0, _jquery2.default)(".js-portfolio-button").click(function() {
            e._controller.log("portfolio_upsell_clicked"), _window2.default.open("https://myportfolio.com", "_blank"), 
            e.hide();
        });
    },
    hide: function() {
        this._super(), (0, _jquery2.default)(window).off("resize.be-controller-portfoliopopup");
    }
});

exports.default = _Roulette2.default.extend({
    init: function() {
        this._super.apply(this, arguments), this.relay(this._view, "hide");
    },
    log: function(e) {
        _remoteLogger2.default.info("project_publish", e, {
            paidCC: this._model.get("paidCC"),
            numProjects: this._model.get("numProjects")
        });
    },
    render: function(e) {
        var o = this, t = this._super.bind(this);
        return _portfolioService2.default.getData(e, !0).then(function(e) {
            return this._model.set(e), t();
        }.bind(this), function() {
            o.trigger("hide");
        });
    }
}, {
    VIEW_CLASS: {
        desktop: PortfolioView,
        tablet: PortfolioView,
        mobile: PortfolioView
    }
}), module.exports = exports.default;

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Roulette = __webpack_require__(21), _Roulette2 = _interopRequireDefault(_Roulette), _Popup = __webpack_require__(23), _Popup2 = _interopRequireDefault(_Popup), _remoteLogger = __webpack_require__(14), _remoteLogger2 = _interopRequireDefault(_remoteLogger), _shareLink = __webpack_require__(169), _shareLink2 = _interopRequireDefault(_shareLink), ShareLinkView = _Popup2.default.extend({
    mustache: _shareLink2.default,
    templateData: function() {
        return {
            url: this._model.get("url"),
            classes: [ "share-link-dialog" ],
            fullBleed: !0
        };
    },
    rendered: function() {
        this._super();
        var e = this.$view.find(".js-share-link"), t = e.find(".js-share-input");
        t.focus().select(), e.on("click", function() {
            t.select();
        }), _remoteLogger2.default.info("social_sharing", "Copy Link Clicked", {
            location: this._model.get("loggedLocation")
        });
    }
});

exports.default = _Roulette2.default.extend({}, {
    VIEW_CLASS: ShareLinkView
}), module.exports = exports.default;

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _View = __webpack_require__(25), _View2 = _interopRequireDefault(_View), _pipe = __webpack_require__(24), _pipe2 = _interopRequireDefault(_pipe), _timestampFormatter = __webpack_require__(65), _timestampFormatter2 = _interopRequireDefault(_timestampFormatter), _comment = __webpack_require__(170), _comment2 = _interopRequireDefault(_comment), permissions = {
    3e3: "close",
    5e3: "flag"
}, constructor = _View2.default.extend({
    template: (0, _pipe2.default)(_comment2.default, _jquery2.default),
    templateData: function() {
        var e = this._super();
        return e.permissions = e.permissions.reduce(function(e, t) {
            return e[permissions[t]] = !0, e;
        }, {}), e;
    },
    rendered: function() {
        var e = this;
        this.$view.hide().fadeIn().on("click", ".js-delete", function() {
            e.$view.fadeOut(e.trigger.bind(e, "remove"));
        }), _timestampFormatter2.default.init(this.$view, "LLL", {
            fromNow: !0
        });
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, r) {
    r = _jquery2.default.extend({
        maxMentions: 5
    }, r), _mentionSource2.default.init(r), e.length && e.parent().addClass("ui-front").end().one("focus", _mentionSource2.default.getLocal).automention({
        delay: 50,
        itemTemplate: _user2.default,
        source: _mentionSource2.default.source,
        appendTo: r.appendTo
    }).on("automentionopen", function() {
        var e, t, n = this.value, o = {}, u = (0, _jquery2.default)(this);
        n.replace(_globalUsernameMatch, function(e, r) {
            o[e] = r;
        }), Object.keys(o).length > r.maxMentions && (e = u.data("beAutomention"), t = u.data("errorbar") || new _error2.default.Errorline(e.menu.element), 
        t.render("<strong>You may only mention " + r.maxMentions + " users</strong>"), t.$view.prependTo(e.menu.element), 
        u.data("errorbar", t));
    });
};

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _error = __webpack_require__(111), _error2 = _interopRequireDefault(_error), _mentionSource = __webpack_require__(188), _mentionSource2 = _interopRequireDefault(_mentionSource), _user = __webpack_require__(72), _user2 = _interopRequireDefault(_user), _automention = __webpack_require__(179), _automention2 = _interopRequireDefault(_automention), _globalUsernameMatch = new RegExp(_automention2.default.usernameMatch.source, "g");

module.exports = exports.default;

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component), _spam = __webpack_require__(101), _spam2 = _interopRequireDefault(_spam), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _Comment = __webpack_require__(180), _Comment2 = _interopRequireDefault(_Comment);

exports.default = _Component2.default.extend({
    _posts: [],
    loading: !1,
    moreSelector: ".see-more-button-container",
    init: function(t, e, n) {
        var i = this, s = t.find(".js-comments-list");
        this.data = e || {}, this.callback = n, this.loading = !1, this.$content = s, this.$more = t.find(this.moreSelector), 
        this.get = this.more.bind(this, void 0), this.$more.on("click", this.get), _spam2.default.delegate(this.$content, function(t) {
            t.$context.remove(), i.trigger("spam");
        });
    },
    set: function(t) {
        return (0, _extend2.default)(this.data, t), this;
    },
    more: function(t) {
        var e;
        return this.loading = !0, e = this.load(t), e.then(this.render.bind(this)).catch(function(t) {
            return t;
        }).then(this.after.bind(this)), e.catch(function(t) {
            return t;
        }).then(this.callback), e;
    },
    destroy: function() {
        this.stopListening(), this.clear(), this.$more.off("click", this.get);
    },
    load: function(t) {
        return (0, _xhr2.default)({
            url: "/comments/" + this.data.type,
            data: (0, _extend2.default)({
                sort_order: "desc"
            }, this.data, t)
        });
    },
    render: function(t) {
        var e;
        return t && t.comments && (e = t.comments.map(this._makePost, this), this._posts = this._posts.concat(e)), 
        this._posts["asc" === this.data.order ? "reduceRight" : "reduce"](function(t, e) {
            return e.render(t.$content), t;
        }, this), t;
    },
    after: function() {
        this.data.offset = this._posts.length ? this._posts[this._posts.length - 1].id : void 0;
    },
    _makePost: function(t) {
        t.type = this.data.type;
        var e = new _Comment2.default(t.id, t);
        return this.listenTo(e, "remove", this.remove.bind(this, e)), e;
    },
    add: function(t) {
        var e = t instanceof _Comment2.default ? t : this._makePost(t);
        this._posts.unshift(e), this.render();
    },
    remove: function(t) {
        var e;
        ~(e = this._posts.indexOf(t)) && ((0, _xhr2.default)({
            type: "DELETE",
            url: "/comments/" + this.data.type + "?comment_id=" + t.id
        }), this._posts.splice(e, 1), t.destroy());
    },
    clear: function() {
        return this._posts.forEach(function(t) {
            t.destroy();
        }), this._posts = [], this;
    }
}), module.exports = exports.default;

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _form = __webpack_require__(11), _form2 = _interopRequireDefault(_form), constructor = _form2.default.extend({
    _submit: function(e) {
        var t = this;
        return this._super(e).then(function() {
            t.$form.find(":input").val("").removeAttr("checked selected");
        });
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function keyById(e) {
    for (var n = {}, r = 0; r < e.length; ++r) n[e[r].id] = e[r];
    return n;
}

function uniqueById(e) {
    var n = {};
    return e.filter(function(e) {
        return !(e.id in n) && (n[e.id] = e, !0);
    });
}

function storeLocal(e) {
    return localCache = keyById(e);
}

function getLocal() {
    var e;
    return localCache ? (e = new _promise2.default(), e.resolve(localCache)) : e = (0, 
    _xhr2.default)(source.local).then(storeLocal), e;
}

function page(e) {
    return getLocal().then(search.bind(e));
}

function dynamic(e, n) {
    dynamic._cache = dynamic._cache || {}, dynamic._cache[e] = dynamic._cache[e] || {};
    var r, t;
    return n.length < minLength && (t = []), dynamic._cache[e][n] && (t = dynamic._cache[e][n]), 
    t ? (r = new _promise2.default(), r.resolve(t), r) : (0, _xhr2.default)({
        url: e,
        data: {
            q: n
        }
    }).then(function(r) {
        return t = arraySearch.call(r, n), dynamic._cache[e][n] = t, t;
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _log = __webpack_require__(66), _log2 = _interopRequireDefault(_log), _promise = __webpack_require__(49), _promise2 = _interopRequireDefault(_promise), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), source = {
    global: "/mentions/search",
    following: "/mentions/search/following",
    local: ""
}, minLength = 2, maxResults = 5, localCache, values = function(e) {
    return this[e];
}, userSearch = function(e) {
    var n = this.toLocaleLowerCase();
    return 0 === e.first_name.toLocaleLowerCase().indexOf(n) || 0 === e.last_name.toLocaleLowerCase().indexOf(n) || 0 === e.username.toLocaleLowerCase().indexOf(n);
}, arraySearch = function(e) {
    return this.filter(userSearch, e);
}, objectSearch = function(e) {
    return Object.keys(this).map(values, this).filter(userSearch, e);
}, search = function(e) {
    return objectSearch.call(e, this);
}, log = _log2.default.get("be/mentionSource"), following = dynamic.bind(null, source.following), all = dynamic.bind(null, source.global);

exports.default = {
    init: function(e) {
        return e.maxResults && (maxResults = e.maxResults), e.minLength && (minLength = e.minLength), 
        e.local && (source.local = e.local), localCache = null, this;
    },
    getLocal: getLocal,
    source: function(e, n) {
        function r() {
            n(uniqueById(a).slice(0, maxResults));
        }
        var t = [ page, following, all ].map(function(n) {
            return n(e.term);
        }), a = [];
        t.reduce(function(e, n) {
            return (e ? e.then(function() {
                return n;
            }) : n).then(function(e) {
                e.forEach(function(e) {
                    e.value = e.username;
                }), a = a.concat(e), r();
            }, function(e) {
                log.error(e);
            });
        }, null).then(null, r);
    }
}, module.exports = exports.default;

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _report = __webpack_require__(174), _report2 = _interopRequireDefault(_report);

exports.default = {
    mustache: _report2.default,
    templateData: function() {
        return (0, _extend2.default)({
            title: _localization2.default.translate("report_popup_header_report", "Report"),
            classes: [ "report" ],
            buttons: [ {
                label: _localization2.default.translate("report_popup_button_send", "Send"),
                classes: [ "left", "form-button-default", "form-submit" ]
            }, {
                label: _localization2.default.translate("report_popup_button_cancel", "Cancel"),
                classes: [ "left", "form-button-cancel" ]
            } ],
            comments: {
                id: "message",
                placeholder: _localization2.default.translate("report_popup_placeholder_comments", "Comments"),
                classes: [ "form-text-normal" ]
            }
        }, this._model.data(), (0, _jquery2.default)(document.body).hasClass("logged-out") ? {
            email: {
                id: "email",
                placeholder: _localization2.default.translate("report_popup_placeholder_email_address", "Email Address"),
                classes: [ "form-text-normal" ]
            }
        } : {});
    },
    rendered: function() {
        var e = this;
        this.selectList(), this.onSubmit(function(t) {
            e._controller.create(t).then(e.hide.bind(e));
        }), this.onCancel(), this._super();
    },
    hide: function() {
        this._super.apply(this, arguments), this.$view = null;
    }
}, module.exports = exports.default;

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _Dialog = __webpack_require__(89), _Dialog2 = _interopRequireDefault(_Dialog), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window), _Layover = __webpack_require__(27), _Layover2 = _interopRequireDefault(_Layover), _Popup = __webpack_require__(23), _Popup2 = _interopRequireDefault(_Popup), _mature = __webpack_require__(204), _mature2 = _interopRequireDefault(_mature), popup = _Popup2.default.extend(_mature2.default), layover = _Layover2.default.extend(_mature2.default), constructor = _Dialog2.default.extend({
    render: function() {
        this._view && (this._view.render(document.body), this._view.position());
    },
    disableSafeBrowsing: function() {
        return (0, _xhr2.default)({
            type: "PATCH",
            url: "/account/safe_browsing_setting",
            data: {
                safe_browsing_setting: 0
            }
        }).then(function() {
            _window2.default.reloadLocation();
        }, console.error);
    }
}, {
    VIEW_CLASS: {
        phone: layover,
        tablet: popup,
        desktop: popup
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Dialog = __webpack_require__(89), _Dialog2 = _interopRequireDefault(_Dialog), _Layover = __webpack_require__(27), _Layover2 = _interopRequireDefault(_Layover), _Popup = __webpack_require__(23), _Popup2 = _interopRequireDefault(_Popup), _history = __webpack_require__(52), _history2 = _interopRequireDefault(_history), _matureLogin = __webpack_require__(177), _matureLogin2 = _interopRequireDefault(_matureLogin), mature = {
    mustache: _matureLogin2.default,
    hide: function() {
        _history2.default.back();
    }
}, popup = _Popup2.default.extend(mature), layover = _Layover2.default.extend(mature), constructor = _Dialog2.default.extend({
    render: function() {
        this._view && (this._view.render(document.body), this._view.position());
    }
}, {
    VIEW_CLASS: {
        phone: layover,
        tablet: popup,
        desktop: popup
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component), _validate = __webpack_require__(13), _validate2 = _interopRequireDefault(_validate), _automention = __webpack_require__(184), _automention2 = _interopRequireDefault(_automention), _comments = __webpack_require__(185), _comments2 = _interopRequireDefault(_comments), _Reset = __webpack_require__(186), _Reset2 = _interopRequireDefault(_Reset), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _login = __webpack_require__(33), _login2 = _interopRequireDefault(_login), _Dialog = __webpack_require__(44), _Dialog2 = _interopRequireDefault(_Dialog);

exports.default = _Component2.default.extend({
    _total: 0,
    init: function(t) {
        this._$context = t, this._id = t.data("id"), this._$view = t.find(".js-post-comment-block"), 
        this._$commentText = t.find(".js-comment-textarea"), this._$linkWarning = t.find(".js-comment-link-warning"), 
        this._commentContainer = this._initCommentContainer();
    },
    bind: function() {
        (0, _automention2.default)(this._$commentText, {
            local: "/mentions/project/" + this._id
        }), this._bindLinkWarning(), this._bindForm(), this._commentContainer.get(), _login2.default.isLoggedIn() || this._bindSignupDialog();
    },
    unbind: function() {
        this._form && this._form.destroy(), this._commentContainer.destroy(), this._$view && this._$view.remove();
    },
    _bindSignupDialog: function() {
        var t = this._$context.find(".js-comments-signup"), e = new _Dialog2.default({
            id: this._id,
            entity: "project",
            action: "comment"
        });
        e.setContext(t);
    },
    _bindLinkWarning: function() {
        var t = this;
        this._$commentText.on("keyup change", function() {
            t._toggleLinkWarning();
        });
    },
    _toggleLinkWarning: function() {
        var t = this._$commentText.val();
        this._$linkWarning.toggleClass("hide", !this._containsLink(t));
    },
    _containsLink: function(t) {
        if (t) return (0, _validate2.default)(t, "ContainsUrl");
    },
    _setTotal: function(t) {
        this._total = t;
        var e = this._$context.find(".js-comments-total");
        e.text(t ? "(" + t + ")" : "");
    },
    _initCommentContainer: function() {
        var t, e = this._id, i = this, n = ".js-see-more", o = this._$context.find(n);
        return t = _comments2.default.extend({
            moreSelector: n
        }).init(this._$context, {
            type: "project",
            entity_id: e
        }, function(t) {
            o.toggleClass("hide", !t.more), i._setTotal(+t.total);
        }), this.listenTo(t, "remove", function() {
            this._setTotal(this._total - 1);
        }), t;
    },
    _bindForm: function() {
        function t(t) {
            if (!t.id || !t.user) throw t;
            e._commentContainer.add({
                id: t.id,
                user: t.user,
                comment: t.comment,
                posted_on: _localization2.default.translate("comments_just_now", "Just now"),
                permissions: [ 3e3 ]
            }), e._setTotal(e._total + 1);
        }
        var e = this, i = this._id, n = this._$view.find(".js-submit");
        n.length && (this._form = _Reset2.default.extend({
            hideButtonText: _localization2.default.translate("comments_hidebutton_posting", "Posting...")
        }).init(this._$view).on("success", function() {
            e._toggleLinkWarning(), this.showButtons();
        }), this._form.commit = function(e) {
            return e.data.entity_id = i, this.then(t), this;
        });
    }
}), module.exports = exports.default;

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component);

exports.default = _Component2.default.extend({
    init: function(e, t, s, i) {
        this._$target = e, this._$sizer = t, this._classMap = i, this._measure = this._$sizer[s].bind(this._$sizer), 
        this._resizeCallback = this._applyBreakpointClasses.bind(this);
    },
    bind: function() {
        this._applyBreakpointClasses(), (0, _jquery2.default)(window).on("resize", this._resizeCallback);
    },
    _applyBreakpointClasses: function() {
        var e = this._measure();
        Object.keys(this._classMap).forEach(function(t) {
            this._$target.toggleClass(t, e < this._classMap[t]);
        }, this);
    },
    destroy: function() {
        (0, _jquery2.default)(window).off("resize", this._resizeCallback);
    }
}), module.exports = exports.default;

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component), _Message = __webpack_require__(140), _Message2 = _interopRequireDefault(_Message), _follow = __webpack_require__(38), _follow2 = _interopRequireDefault(_follow), _moreToggle = __webpack_require__(113), _moreToggle2 = _interopRequireDefault(_moreToggle), _timestampFormatter = __webpack_require__(65), _timestampFormatter2 = _interopRequireDefault(_timestampFormatter), _dateFormatter = __webpack_require__(110), _dateFormatter2 = _interopRequireDefault(_dateFormatter), _Collection = __webpack_require__(157), _Collection2 = _interopRequireDefault(_Collection);

exports.default = _Component2.default.extend({
    init: function(e) {
        this.$context = e;
    },
    bind: function() {
        this._message = _Message2.default.init(this.$context), this._collection = _Collection2.default.init(this.$context), 
        _follow2.default.init(this.$context), _moreToggle2.default.init(this.$context), 
        _timestampFormatter2.default.init(this.$context), _dateFormatter2.default.init(this.$context);
    },
    unbind: function() {
        this._message.destroy(), this._collection.destroy(), _moreToggle2.default.destroy(this.$context);
    }
}), module.exports = exports.default;

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component), _ShareLink = __webpack_require__(182), _ShareLink2 = _interopRequireDefault(_ShareLink), _socialSharePopup = __webpack_require__(108), _socialSharePopup2 = _interopRequireDefault(_socialSharePopup);

exports.default = _Component2.default.extend({
    init: function(e) {
        this.$context = e;
    },
    bind: function() {
        var e = this.$context.data();
        this.$context.on("click", ".js-viral-share-buttons", function(t) {
            _socialSharePopup2.default.open((0, _jquery2.default)(this).data("service"), e, (0, 
            _jquery2.default)(t.delegateTarget).data("from"));
        }), this._shareLink = _ShareLink2.default.init(e), this._shareLink.setContext(this.$context.find(".js-viral-copy-link"));
    },
    unbind: function() {
        this._shareLink.destroy();
    }
}), module.exports = exports.default;

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component), _Report = __webpack_require__(156), _Report2 = _interopRequireDefault(_Report), _spam = __webpack_require__(101), _spam2 = _interopRequireDefault(_spam);

exports.default = _Component2.default.extend({
    init: function(e) {
        this.$context = e;
    },
    bind: function() {
        this._report = _Report2.default.init(this.$context), _spam2.default.delegate(this.$context);
    },
    unbind: function() {
        this._report.destroy(), _spam2.default.undelegate(this.$context);
    }
}), module.exports = exports.default;

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _media = __webpack_require__(35), _media2 = _interopRequireDefault(_media), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component), _nav = __webpack_require__(271), _nav2 = _interopRequireDefault(_nav);

exports.default = _Component2.default.extend({
    init: function(t, i, o, e, s, n, r, _) {
        this._$scrollContext = t, this._$socialButtons = i, this._$sidebarSpacer = o, this._sidebarWidth = this._$sidebarSpacer.innerWidth(), 
        this._isPopup = e, this._$projectView = s, this._$sidebarGroup = n, this._$projectWrap = this._$scrollContext.find(".js-project-wrap"), 
        this._$window = r, this._interval = _ || 1e3, this._isPopup && (this._topPadding = this._$projectWrap.position().top, 
        this._windowOffset = this._$projectWrap.offset().top - this._topPadding);
    },
    bind: function() {
        var t = this;
        _media2.default.is("desktop") && t._initBindingsAndTimer(), _media2.default.on("desktop:enter", function() {
            t._initBindingsAndTimer();
        }), _media2.default.on("desktop:exit", function() {
            t._removeBindingAndTimer();
        });
    },
    _initBindingsAndTimer: function() {
        var t = this;
        t._calcHeights(), t._checkHeight(), t._positionSidebar(), t._timerId = setInterval(t._checkHeight.bind(t), t._interval), 
        t._$socialButtons.removeClass("hide"), t._$window.on("resize.project-lib-stickySocial", function() {
            t._scrollContextHeight = t._$scrollContext.height(), t._positionSidebar();
        }), t._$scrollContext.on("scroll.project-lib-stickySocial", function() {
            t._positionSidebar();
        });
    },
    _calcHeights: function() {
        this._navHeight = this._isPopup ? 0 : _nav2.default.getHeight(), this._isPopup || (this._topPadding = Math.round(this._$projectView.offset().top - this._navHeight)), 
        this._topSpacing = this._isPopup ? this._topPadding : this._topPadding + this._navHeight, 
        this._socialHeight = this._$socialButtons.outerHeight(), this._topOffset = this._topSpacing + this._socialHeight, 
        this._scrollContextHeight = this._$scrollContext.height();
    },
    _checkHeight: function() {
        var t = this._$projectView.height() + this._topSpacing, i = this._$sidebarGroup.outerHeight();
        t === this._bottomOfProject && i === this._sidebarGroupHeight || (this._bottomOfProject = t, 
        this._sidebarGroupHeight = i, this._positionSidebar());
    },
    _positionSidebar: function() {
        var t = this._$scrollContext.scrollTop();
        this._bottomOfProject = this._$projectView.height() + this._topSpacing, this._sidebarGroupHeight = this._$sidebarGroup.outerHeight(), 
        this._positionSidebarGroup(t), this._positionSocialButtons(t);
    },
    _positionSidebarGroup: function(t) {
        var i = this._sidebarGroupHeight + t + this._topSpacing + this._socialHeight;
        return i > this._bottomOfProject ? void this._$sidebarGroup.css({
            bottom: "",
            position: "absolute",
            top: t - this._topPadding + (this._bottomOfProject - i)
        }) : t > this._topPadding ? void this._$sidebarGroup.css({
            bottom: "",
            position: "fixed",
            width: this._sidebarWidth,
            top: this._navHeight
        }) : void this._$sidebarGroup.css({
            bottom: "",
            position: "",
            top: ""
        });
    },
    _positionSocialButtons: function(t) {
        var i = t + this._scrollContextHeight, o = this._sidebarGroupHeight + this._$sidebarGroup.offset().top + (this._isPopup ? t - this._windowOffset : 0), e = o + this._socialHeight;
        return this._bottomOfProject < i ? void this._$socialButtons.css({
            position: "absolute",
            top: "",
            bottom: 0
        }) : e >= i ? void this._$socialButtons.css({
            position: "absolute",
            top: o - this._topSpacing,
            bottom: ""
        }) : void this._$socialButtons.css({
            position: "fixed",
            top: "",
            bottom: 0
        });
    },
    _removeBindingAndTimer: function() {
        this._$window.add(this._$scrollContext).off(".project-lib-stickySocial"), clearInterval(this._timerId);
    },
    unbind: function() {
        _media2.default.off(null, null, this), this._removeBindingAndTimer();
    }
}), module.exports = exports.default;

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _lightbox = __webpack_require__(209), _lightbox2 = _interopRequireDefault(_lightbox), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component), _LightboxLastSlide = __webpack_require__(199), _LightboxLastSlide2 = _interopRequireDefault(_LightboxLastSlide), _follow = __webpack_require__(38), _follow2 = _interopRequireDefault(_follow), _remoteLogger = __webpack_require__(14), _remoteLogger2 = _interopRequireDefault(_remoteLogger), LOG_CHANNEL = "lightbox";

exports.default = _Component2.default.extend({
    init: function(e) {
        this._$project = e;
    },
    bind: function() {
        this._lightbox = _lightbox2.default.init({
            context: this._$project,
            slideSelector: ".js-project-lightbox-link",
            isCircular: !1,
            bgColor: "#000",
            opacity: "1"
        }), this._lazyAddLastSlide(), this._addLightboxTracking(this._lightbox), this._$project.on("click.lightbox", ".js-lightbox-caption", function(e) {
            return e.stopPropagation();
        });
    },
    unbind: function() {
        this._lightbox.destroy(), this._$project.off(".lightbox");
    },
    _lazyAddLastSlide: function() {
        var e = this, t = this._lightbox, o = t.slides, i = {
            id: o.length,
            data: {
                noZoom: !0
            },
            content: (0, _jquery2.default)("<div>")
        };
        o.push(i), t.on("activate", function(t) {
            if (t.id === i.id && !e._overlaySlide) {
                var r = o[o.length - 2].content, n = e._$project.find(".js-lightbox-overlay-slide").html();
                e._overlaySlide = _LightboxLastSlide2.default.init(i.content, n, r), e._overlaySlide.on("viewAgain", function() {
                    return e._lightbox.open(0);
                }), e._addOverlaySlideTracking();
            }
            _follow2.default.init();
        }), t.on("deactivate", function(t) {
            t.id === i.id && e._overlaySlide && (e._overlaySlide.destroy(), delete e._overlaySlide);
        });
    },
    _addLightboxTracking: function(e) {
        this._$project.on("click.lightbox", ".js-lightbox-caption a", function() {
            var e = (0, _jquery2.default)(this).data(), t = e.id, o = e.from;
            _remoteLogger2.default.info(LOG_CHANNEL, "profile", {
                id: t,
                from: o
            });
        }), e.on("open", function(e) {
            return _remoteLogger2.default.info(LOG_CHANNEL, "open", {
                ordinal: e.id
            });
        }), e.on("close", function() {
            return _remoteLogger2.default.info(LOG_CHANNEL, "close");
        }), e.on("activate", function(e, t) {
            if (t) {
                var o = t.id < e.id ? "right" : "left";
                _remoteLogger2.default.info(LOG_CHANNEL, "activate_" + o);
            }
        });
    },
    _addOverlaySlideTracking: function() {
        _remoteLogger2.default.info(LOG_CHANNEL, "end_state");
    }
}), module.exports = exports.default;

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component), _Cover = __webpack_require__(90), _Cover2 = _interopRequireDefault(_Cover);

exports.default = _Component2.default.extend({
    init: function(e, t, n) {
        this._$context = e, this._template = t, this._lastSlideContent = n, this._projectCoverViews = [];
    },
    bind: function() {
        var e = this;
        this._$context.append(this._getOverlaySlideContent()), this._$context.find(".js-view-again").on("click.lightbox-overlay", function(t) {
            t.stopPropagation(), e.trigger("viewAgain");
        }), this._$context.find(".js-project-cover").each(function(t, n) {
            var o = new _Cover2.default((0, _jquery2.default)(n));
            o.rendered(), e._projectCoverViews.push(o);
        });
    },
    unbind: function() {
        this._projectCoverViews.forEach(function(e) {
            return e.destroy();
        }), this._$context.add(".js-view-again", this._$context).off(".lightbox-overlay"), 
        this._$context.empty();
    },
    _getOverlaySlideContent: function() {
        var e = (0, _jquery2.default)(this._template);
        return e.find(".js-last-slide").append(this._lastSlideContent), e;
    }
}), module.exports = exports.default;

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _MatureContent = __webpack_require__(190), _MatureContent2 = _interopRequireDefault(_MatureContent), _MatureLogin = __webpack_require__(191), _MatureLogin2 = _interopRequireDefault(_MatureLogin), api = {
    init: function(e, t, a) {
        if (a.mature_content) {
            var n, o, r = {
                "restricted-geo": _localization2.default.translate("mature_content_restricted_geo", '<div class="mature-message">Because you live in a country where adult content is illegal you can\'t view this content on Behance.</div>'),
                "restricted-age": _localization2.default.translate("mature_content_restricted_age", '<div class="mature-message">Because you are under 18 years old, you can\'t access adult content on Behance.</div>'),
                "restricted-safe": _localization2.default.translate("mature_content_restricted_safe", '<div class="mature-message">You currently have Safe Browsing turned on. Would you like to turn off Safe Browsing to view content on Behance that contain adult content?</div>')
            };
            if ("logged-out" === a.mature_access) n = new _MatureLogin2.default({
                classes: [ "mature-blocker", "log-in" ],
                title: _localization2.default.translate("mature_content_log_in", "Log In"),
                login: {
                    classes: [ "form-button-default", "form-button-large", "js-adobeid-signin" ],
                    label: _localization2.default.translate("mature_content_log_in", "Log In")
                }
            }); else {
                if (o = r[a.mature_access], !o) return;
                n = new _MatureContent2.default(e, {
                    title: _localization2.default.translate("mature_content_restricted_project_title", "This project contains adult content"),
                    html: o,
                    access: a.mature_access
                });
            }
            n.render(), this.popup = n;
        }
    },
    destroy: function() {
        this.popup && (this.popup.destroy(), this.popup = null);
    }
};

exports.default = api, module.exports = exports.default;

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _media = __webpack_require__(35), _media2 = _interopRequireDefault(_media), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window), _simple = __webpack_require__(45), _simple2 = _interopRequireDefault(_simple), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _PortfolioPopup = __webpack_require__(181), _PortfolioPopup2 = _interopRequireDefault(_PortfolioPopup), _Share = __webpack_require__(141), _Share2 = _interopRequireDefault(_Share), _unverified = __webpack_require__(171), _unverified2 = _interopRequireDefault(_unverified);

exports.default = {
    _share: function(e) {
        _Share2.default.init({
            text: e.promote.share_text,
            image: e.promote.image,
            loggedLocation: "project/share_popup"
        }).render();
    },
    _portfolio: function(e) {
        var i = new _PortfolioPopup2.default();
        return i.on("hide", this._share.bind(this, e)).render({
            paidCC: e.portfolio.provisioned
        });
    },
    _fixBackButton: function() {
        var e = _window2.default.location.href;
        (0, _jquery2.default)(window).on("popstate.project-lib-startup", function(i) {
            i.originalEvent && e !== _window2.default.location.href && _window2.default.replaceLocation(_window2.default.location.href);
        });
    },
    destroy: function() {
        (0, _jquery2.default)(window).off("popstate.project-lib-startup");
    },
    init: function(e) {
        if (this._fixBackButton(), e.unverified) (0, _simple2.default)({
            title: _localization2.default.translate("project_unverified_popup_title", "Your project is private"),
            classes: [ "unverified-modal" ],
            html: (0, _unverified2.default)({
                verification_url: e.ADOBE_VERIFY,
                email: e.email
            })
        }); else {
            if (e.portfolio && (_media2.default.is("desktop") || _media2.default.is("tablet"))) return this._portfolio(e);
            if (e.promote && _media2.default.is("desktop")) return this._share(e);
        }
    }
}, module.exports = exports.default;

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _AddToTalentSearch = __webpack_require__(133), _AddToTalentSearch2 = _interopRequireDefault(_AddToTalentSearch), _addedTalentSearchList = __webpack_require__(155), _addedTalentSearchList2 = _interopRequireDefault(_addedTalentSearchList);

exports.default = {
    updateTalent: function(e) {
        var t = e.find(".js-add-talent");
        t.length && (this.talent = new _AddToTalentSearch2.default(t.data("id")), this.talent.setContext(t), 
        this.talent.on("update", function(t) {
            e.find(".js-added-talent-searches").html((0, _addedTalentSearchList2.default)({
                searches_added_to: t.join(", ")
            }));
        }));
    }
}, module.exports = exports.default;

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _collection = __webpack_require__(176), _collection2 = _interopRequireDefault(_collection);

__webpack_require__(8), exports.default = {
    mustache: _collection2.default,
    title: _localization2.default.translate("collections_title", "Collections"),
    templateData: function() {
        return _jquery2.default.extend({
            classes: [ "list-popup" ],
            title: this.title,
            buttons: [ {
                label: _localization2.default.translate("collection_dialog_button_save", "Save"),
                classes: [ "form-button-default", "collections-save" ]
            } ]
        }, this._model.data());
    },
    rendered: function() {
        this._$saveButton = this.$view.find(".collections-save"), this._super(), this.bindSelections(), 
        this.newCollection(), this.saveCollections();
    },
    saveCollections: function() {
        var e = this;
        this.$view.on("click", ".collections-save:not([disabled])", function() {
            e._controller.update(), e.hide(), e._$saveButton.changeInput("disable");
        });
    },
    newCollection: function() {
        var e = this, t = this.$view.find("form");
        t.on("submit", function() {
            var i = t.serializeArray(), o = i[0].value;
            return e._controller.create(o).then(function() {
                e.render(), e.show(), e.position(), e._$saveButton.changeInput("enable");
            }), !1;
        }).on("click", ".form-submit", function() {
            t.submit();
        });
    },
    bindSelections: function() {
        var e = this;
        this._$saveButton.changeInput("disable"), this.select(this._model.get("project_collection_ids")), 
        this.listenTo(this._model, "project_collection_ids", this.select), this.$view.on("click", ".collection", function() {
            var t, i = (0, _jquery2.default)(this).data("key"), o = e._model.get("project_collection_ids");
            ~(t = o.indexOf(i)) ? o.splice(t, 1) : o.push(i), e._model.trigger("project_collection_ids", o), 
            e._$saveButton.changeInput("enable");
        });
    },
    select: function(e) {
        return this.$view.find(".collection").removeClass("active"), e && e.forEach(function(e) {
            this.$view.find(".collection[data-key=" + e + "]").addClass("active");
        }, this);
    }
}, module.exports = exports.default;

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _html = __webpack_require__(172), _html2 = _interopRequireDefault(_html), buttons = {
    "restricted-safe": [ {
        label: _localization2.default.translate("adult_wall_dialog_button_submit", "Turn off Safe Browsing"),
        classes: [ "form-button-default", "form-submit" ]
    }, {
        label: _localization2.default.translate("adult_wall_dialog_button_cancel", "Cancel"),
        classes: [ "form-button-cancel" ]
    } ]
};

exports.default = {
    mustache: _html2.default,
    templateData: function() {
        var e = (0, _extend2.default)({
            classes: [ "mature-blocker", "safe" ]
        }, this._model.data());
        return e.buttons = buttons[e.access], e;
    },
    rendered: function() {
        var e = this;
        this.$view.on("click", ".form-submit", function() {
            e._controller.disableSafeBrowsing().then(e.hide.bind(e)).then(e.destroy.bind(e));
        }).filter(".blocking-div").on("click", function(e) {
            e.stopImmediatePropagation();
        }), this._super();
    }
}, module.exports = exports.default;

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}();

__webpack_require__(106);

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _idleTimer = __webpack_require__(213), _idleTimer2 = _interopRequireDefault(_idleTimer), _tinycolor = __webpack_require__(214), _tinycolor2 = _interopRequireDefault(_tinycolor), _vanillaTouchwipe = __webpack_require__(215), _vanillaTouchwipe2 = _interopRequireDefault(_vanillaTouchwipe), _templates = __webpack_require__(210), _onImgLoad = __webpack_require__(207), _zoomable = __webpack_require__(208), ESCAPE_KEYCODE = 27, LEFT_ARROW_KEYCODE = 37, RIGHT_ARROW_KEYCODE = 39, EXTRAS_HIDDEN_CLASS = "extras-hidden", CONTENT_CLASS = "lightbox-content", ENABLED_CLASS = "lightbox-enabled", ZOOMED_CLASS = "lightbox-zoomed", HIDDEN_CLASS = "hidden", OFFSCREEN_CLASS = "offscreen", TRANSITION_END = "webkitTransitionEnd ontransitionend msTransitionEnd transitionend", JS_SLIDE_CLASS = "js-slide", JS_SLIDE_CONTENT_CLASS = "js-slide-content", LOADING_CLASS = "loading", ChromeView = function() {
    function e(t, i, n) {
        _classCallCheck(this, e), this._$context = t, this._controller = i, this._props = n, 
        this._$view = (0, _jquery2.default)(_templates.lightbox).appendTo(t), this._$contents = this._$view.find(".js-contents"), 
        this._$prev = this._$view.find(".js-prev"), this._$next = this._$view.find(".js-next"), 
        this._bindToController();
    }
    return _createClass(e, [ {
        key: "open",
        value: function() {
            var e = this, t = (0, _jquery2.default)("html"), i = function(t, i) {
                i.stopImmediatePropagation(), e._controller[t]();
            };
            this._idleTimer = (0, _idleTimer2.default)({
                callback: function() {
                    return e.hideExtras();
                },
                activeCallback: function() {
                    return e.showExtras();
                },
                idleTime: this._props.idleTimeInMs
            }), this._touch = (0, _vanillaTouchwipe2.default)(this._$view[0], {
                wipeLeft: function(e) {
                    return i("next", e);
                },
                wipeRight: function(e) {
                    return i("prev", e);
                }
            }), this._$context.on("click.lightbox", ".js-next", function(e) {
                return i("next", e);
            }).on("click.lightbox", ".js-prev", function(e) {
                return i("prev", e);
            }).on("click.lightbox", ".js-close", function(e) {
                return i("close", e);
            }).on("click.lightbox", "." + JS_SLIDE_CONTENT_CLASS + "." + _zoomable.ZOOMABLE_CLASS, function() {
                t.toggleClass(ZOOMED_CLASS);
            }), (0, _jquery2.default)(document).on("mouseout.lightbox", function() {
                return e._idleTimer.idle();
            }).on("keydown.lightbox", function(t) {
                switch (t.keyCode) {
                  case LEFT_ARROW_KEYCODE:
                    e._idleTimer.idle(), i("prev", t);
                    break;

                  case RIGHT_ARROW_KEYCODE:
                    e._idleTimer.idle(), i("next", t);
                    break;

                  case ESCAPE_KEYCODE:
                    i("close", t);
                }
            }), t.addClass(ENABLED_CLASS), this._$view.find(".js-blocking").css({
                backgroundColor: this._props.bgColor,
                opacity: this._props.opacity
            }), this._$view.find(".js-close svg").attr("fill", (0, _tinycolor2.default)(this._props.bgColor).isLight() ? "#000" : "#FFF"), 
            this.showExtras(), this._$view.removeClass(OFFSCREEN_CLASS);
        }
    }, {
        key: "renderSlide",
        value: function(e) {
            var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
            this._maybeHidePrevNext(), this._appendSlide(e);
            var n = this._$contents.find("." + JS_SLIDE_CLASS + "[data-slide-is-active]"), o = this._$contents.find("." + JS_SLIDE_CLASS + '[data-slide-id="' + e.id + '"]');
            n.removeAttr("data-slide-is-active").find("." + JS_SLIDE_CONTENT_CLASS).addClass(HIDDEN_CLASS).one(TRANSITION_END, function() {
                var e = n.data();
                e.slideIsActive || (t._controller.deactivateSlide(t._controller.slides[e.slideId]), 
                n.remove());
            }), o.attr({
                "data-slide-is-active": !0
            }).removeClass(OFFSCREEN_CLASS);
            var r = o.find("." + JS_SLIDE_CONTENT_CLASS), s = r.find("img"), l = function() {
                r.removeClass(HIDDEN_CLASS), t._appendAdjacentSlides(n, o), i();
            };
            return s.length ? (this._$view.addClass(LOADING_CLASS), void (0, _onImgLoad.onImgLoad)(s, function() {
                t._$view.removeClass(LOADING_CLASS), e.data.noZoom || r.addClass((0, _zoomable.getZoomableClasses)(s[0], (0, 
                _jquery2.default)(window))), l();
            })) : l();
        }
    }, {
        key: "close",
        value: function() {
            this._$view.addClass(OFFSCREEN_CLASS), this._$contents.empty(), (0, _jquery2.default)(document).add(this._$context).off(".lightbox"), 
            (0, _jquery2.default)("html").removeClass(ENABLED_CLASS), this._idleTimer && this._idleTimer.destroy(), 
            this._touch && this._touch.unbind();
        }
    }, {
        key: "destroy",
        value: function() {
            this.close(), this._$view.remove();
        }
    }, {
        key: "hideExtras",
        value: function() {
            this._$view.addClass(EXTRAS_HIDDEN_CLASS);
        }
    }, {
        key: "showExtras",
        value: function() {
            this._$view.removeClass(EXTRAS_HIDDEN_CLASS);
        }
    }, {
        key: "_appendSlide",
        value: function(e) {
            if (e && !this._$contents.find('[data-slide-id="' + e.id + '"]').length) {
                var t = (0, _jquery2.default)("<div>").addClass(JS_SLIDE_CONTENT_CLASS + " " + CONTENT_CLASS + " " + HIDDEN_CLASS).html(this._getSlideContent(e));
                (0, _jquery2.default)("<div>", {
                    "data-slide-id": e.id,
                    class: JS_SLIDE_CLASS + " " + OFFSCREEN_CLASS
                }).append(t).appendTo(this._$contents);
            }
        }
    }, {
        key: "_appendAdjacentSlides",
        value: function(e, t) {
            0 === e.length ? (this._appendSlide(this._controller.getPrevSlide()), this._appendSlide(this._controller.getNextSlide())) : this._appendSlide(e.data("slide-id") < t.data("slide-id") ? this._controller.getNextSlide() : this._controller.getPrevSlide());
        }
    }, {
        key: "_bindToController",
        value: function() {
            var e = this;
            this._controller.on({
                open: function() {
                    return e.open();
                },
                close: function() {
                    return e.close();
                },
                destroy: function() {
                    return e.destroy();
                },
                activate: function(t) {
                    return e.renderSlide(t);
                },
                prefetch: function(t) {
                    return e._appendSlide(t);
                }
            });
        }
    }, {
        key: "_getSlideContent",
        value: function(e) {
            var t = e.data.src;
            return t ? (0, _jquery2.default)("<img />", {
                src: t
            }) : e.content;
        }
    }, {
        key: "_maybeHidePrevNext",
        value: function() {
            var e = this._controller.getPrevSlide(), t = this._controller.getNextSlide();
            this._props.isCircular && (e || t) || (e ? this._$prev.removeClass(HIDDEN_CLASS) : this._$prev.addClass(HIDDEN_CLASS), 
            t ? this._$next.removeClass(HIDDEN_CLASS) : this._$next.addClass(HIDDEN_CLASS));
        }
    } ]), e;
}();

exports.default = ChromeView, module.exports = exports.default;

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _hoverintent = __webpack_require__(212), _hoverintent2 = _interopRequireDefault(_hoverintent), SLIDE_ID_ATTR = "lightbox-slide-id", LINK_CLASS = "lightbox-link", HOVER_ICON_ENABLED_CLASS = "hover-icon-enabled", Controller = function() {
    function e(t, i) {
        _classCallCheck(this, e), this._props = i, this._$context = t, this._$eventNode = (0, 
        _jquery2.default)("<e/>"), this._$links = this._$context.find(":not(a) > " + this._props.slideSelector), 
        this._hoverlisteners = [], this.slides = this._createSlides(this._$links), this._isOpen = !1, 
        this._bind();
    }
    return _createClass(e, [ {
        key: "on",
        value: function(e, t) {
            var i = function(e) {
                return function(t) {
                    for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    return e.apply(null, n);
                };
            };
            "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && Object.keys(e).forEach(function(t) {
                return e[t] = i(e[t]);
            }), this._$eventNode.on(e, i(t));
        }
    }, {
        key: "off",
        value: function(e, t) {
            this._$eventNode.off(e, t);
        }
    }, {
        key: "open",
        value: function(e) {
            var t = this.slides[e];
            t && (this._isOpen = !0, this._trigger("open", t), this.activateSlide(t));
        }
    }, {
        key: "close",
        value: function() {
            this._isOpen = !1, this.deactivateSlide(this.activeSlide), delete this.activeSlide, 
            this._trigger("close");
        }
    }, {
        key: "next",
        value: function() {
            this.activateSlide(this.getNextSlide());
        }
    }, {
        key: "prev",
        value: function() {
            this.activateSlide(this.getPrevSlide());
        }
    }, {
        key: "getNextSlide",
        value: function() {
            return this._getSlideByDirection(1);
        }
    }, {
        key: "getPrevSlide",
        value: function() {
            return this._getSlideByDirection(-1);
        }
    }, {
        key: "activateSlide",
        value: function(e) {
            if (e) {
                var t = this.activeSlide;
                this.activeSlide = e, this._trigger("activate", [ e, t ]);
            }
        }
    }, {
        key: "deactivateSlide",
        value: function(e) {
            e && this._trigger("deactivate", e);
        }
    }, {
        key: "destroy",
        value: function() {
            this._isOpen && this.close(), this._removePrefetchOnHover(), this._$links.removeClass(LINK_CLASS).removeData(SLIDE_ID_ATTR).off(".lightbox"), 
            this._trigger("destroy"), this._$eventNode.off();
        }
    }, {
        key: "_bind",
        value: function() {
            var e = this, t = this;
            this._$links.addClass(LINK_CLASS).addClass(this._props.hoverIconEnabled && HOVER_ICON_ENABLED_CLASS).each(function(t, i) {
                e._addPrefetchOnHover(i, t), (0, _jquery2.default)(i).data(SLIDE_ID_ATTR, t);
            }).on("mousedown.lightbox", function() {
                t._trigger("prefetch", t.slides[(0, _jquery2.default)(this).data(SLIDE_ID_ATTR)]);
            }).on("click.lightbox", function(e) {
                e.stopPropagation(), t.open((0, _jquery2.default)(this).data(SLIDE_ID_ATTR));
            });
        }
    }, {
        key: "_trigger",
        value: function(e, t) {
            this._$eventNode.trigger(e, t);
        }
    }, {
        key: "_createSlides",
        value: function(e) {
            var t = this;
            return e.toArray().map(function(e, i) {
                var n = (0, _jquery2.default)(e);
                return {
                    id: i,
                    data: n.data(),
                    content: n.find(t._props.slideContentSelector).html()
                };
            });
        }
    }, {
        key: "_getSlideByDirection",
        value: function(e) {
            var t = this.activeSlide.id + e, i = this.slides[t];
            return i ? i : this._props.isCircular ? this.slides[e === -1 ? this.slides.length - 1 : 0] : void 0;
        }
    }, {
        key: "_addPrefetchOnHover",
        value: function(e, t) {
            var i = this;
            this._hoverlisteners.push((0, _hoverintent2.default)(e, function() {
                return i._trigger("prefetch", i.slides[t]);
            }, function() {}));
        }
    }, {
        key: "_removePrefetchOnHover",
        value: function() {
            this._hoverlisteners.forEach(function(e) {
                return e.remove();
            });
        }
    } ]), e;
}();

exports.default = Controller, module.exports = exports.default;

/***/ },

/***/ 207:
/***/ function(module, exports) {

"use strict";
"use strict";

function onImgLoad(e, o) {
    var t = e[0];
    return t.complete ? o() : e.load(o);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.onImgLoad = onImgLoad;

/***/ },

/***/ 208:
/***/ function(module, exports) {

"use strict";
"use strict";

function getZoomableClasses(e, o) {
    var s = {
        w: o.width(),
        h: o.height()
    }, t = {
        w: e.naturalWidth,
        h: e.naturalHeight
    }, O = [];
    if (!(s.w >= t.w && s.h >= t.h)) return O.push(ZOOMABLE_CLASS), s.w < t.w && O.push(ZOOMABLE_X_CLASS), 
    s.h < t.h && O.push(ZOOMABLE_Y_CLASS), O.join(" ");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getZoomableClasses = getZoomableClasses;

var ZOOMABLE_CLASS = exports.ZOOMABLE_CLASS = "zoomable", ZOOMABLE_X_CLASS = exports.ZOOMABLE_X_CLASS = "zoomable-x", ZOOMABLE_Y_CLASS = exports.ZOOMABLE_Y_CLASS = "zoomable-y";

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), __webpack_require__(106);

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Controller = __webpack_require__(206), _Controller2 = _interopRequireDefault(_Controller), _ChromeView = __webpack_require__(205), _ChromeView2 = _interopRequireDefault(_ChromeView);

exports.default = {
    init: function(e) {
        e = Object.assign({
            context: document.body,
            slideContentSelector: ".js-lightbox-slide-content",
            slideSelector: ".js-lightbox",
            bgColor: "#fff",
            opacity: "0.94",
            idleTimeInMs: 5e3,
            isCircular: !0,
            hoverIconEnabled: !0
        }, e);
        var r = (0, _jquery2.default)(e.context), t = new _Controller2.default(r, e);
        return new _ChromeView2.default(r, t, e), t;
    }
}, module.exports = exports.default;

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.lightbox = void 0, __webpack_require__(178);

var backdrop = '\n  <div class="js-blocking" id="lightbox-blocking">\n    <span class="lightbox-spinner"></span>\n  </div>\n', prevControl = '\n  <div class="lightbox-extra control prev js-control js-prev">\n    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="60" height="60" viewBox="0 0 60 60" xml:space="preserve">\n      <circle class="lightbox-icon-bg" cx="30" cy="30" r="30"/>\n      <path class="lightbox-icon-arrow" d="M36.8,36.4L30.3,30l6.5-6.4l-3.5-3.4l-10,9.8l10,9.8L36.8,36.4z"/>\n    </svg>\n  </div>\n', nextControl = '\n  <div class="lightbox-extra control next js-control js-next">\n    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="60" height="60" viewBox="0 0 60 60" xml:space="preserve">\n      <circle class="lightbox-icon-bg" cx="30" cy="30" r="30"/>\n      <path class="lightbox-icon-arrow" d="M24.2,23.5l6.6,6.5l-6.6,6.5l3.6,3.5L37.8,30l-10.1-9.9L24.2,23.5z"/>\n    </svg>\n  </div>\n', closeControl = '\n  <div class="lightbox-extra control close js-control js-close">\n    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">\n      <circle class="lightbox-icon-bg" cx="50" cy="50" r="47.5"/>\n      <polygon class="lightbox-icon-close" points="64.5,39.8 60.2,35.5 50,45.7 39.8,35.5 35.5,39.8 45.7,50 35.5,60.2 39.8,64.5 50,54.3 60.2,64.5 64.5,60.2 54.3,50"/>\n    </svg>\n  </div>\n', lightbox = exports.lightbox = '\n  <div class="js-lightbox-wrap offscreen" id="lightbox-wrap">\n    ' + backdrop + '\n    <div class="js-lightbox-inner-wrap" id="lightbox-inner-wrap">\n      <div class="js-img-wrap" id="lightbox-img-wrap">\n        ' + prevControl + "\n        " + nextControl + "\n        " + closeControl + '\n        <div class="lightbox-contents js-contents"></div>\n      </div>\n    </div>\n  </div>\n';

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

var require;var require;!function(e) {
    if (true) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, 
        t.hoverintent = e();
    }
}(function() {
    return function e(t, n, o) {
        function r(u, f) {
            if (!n[u]) {
                if (!t[u]) {
                    var s = "function" == typeof require && require;
                    if (!f && s) return require(u, !0);
                    if (i) return i(u, !0);
                    var c = new Error("Cannot find module '" + u + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                var v = n[u] = {
                    exports: {}
                };
                t[u][0].call(v.exports, function(e) {
                    var n = t[u][1][e];
                    return r(n ? n : e);
                }, v, v.exports, e, t, n, o);
            }
            return n[u].exports;
        }
        for (var i = "function" == typeof require && require, u = 0; u < o.length; u++) r(o[u]);
        return r;
    }({
        1: [ function(e, t, n) {
            !function(n) {
                "use strict";
                var o = e("xtend"), r = function(e, t, n) {
                    function r(e, t) {
                        return p && (p = clearTimeout(p)), m = 0, n.call(e, t);
                    }
                    function i(e) {
                        c = e.clientX, v = e.clientY;
                    }
                    function u(e, n) {
                        return p && (p = clearTimeout(p)), Math.abs(a - c) + Math.abs(l - v) < y.sensitivity ? (m = 1, 
                        t.call(e, n)) : (a = c, l = v, void (p = setTimeout(function() {
                            u(e, n);
                        }, y.interval)));
                    }
                    function f(t) {
                        return p && (p = clearTimeout(p)), e.removeEventListener("mousemove", i, !1), 1 !== m && (a = t.clientX, 
                        l = t.clientY, e.addEventListener("mousemove", i, !1), p = setTimeout(function() {
                            u(e, t);
                        }, y.interval)), this;
                    }
                    function s(t) {
                        return p && (p = clearTimeout(p)), e.removeEventListener("mousemove", i, !1), 1 === m && (p = setTimeout(function() {
                            r(e, t);
                        }, y.timeout)), this;
                    }
                    var c, v, a, l, d = {}, m = 0, p = 0, y = {
                        sensitivity: 7,
                        interval: 100,
                        timeout: 0
                    };
                    return d.options = function(e) {
                        return y = o({}, y, e), d;
                    }, d.remove = function() {
                        e && (e.removeEventListener("mouseover", f, !1), e.removeEventListener("mouseout", s, !1));
                    }, e && (e.addEventListener("mouseover", f, !1), e.addEventListener("mouseout", s, !1)), 
                    d;
                };
                n.hoverintent = r, "undefined" != typeof t && t.exports && (t.exports = r);
            }(this);
        }, {
            xtend: 2
        } ],
        2: [ function(e, t, n) {
            function o() {
                for (var e = {}, t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) r.call(n, o) && (e[o] = n[o]);
                }
                return e;
            }
            t.exports = o;
            var r = Object.prototype.hasOwnProperty;
        }, {} ]
    }, {}, [ 1 ])(1);
});

/***/ },

/***/ 213:
/***/ function(module, exports) {

function idleTimer(e) {
    function t(e) {
        window[e]("load", n), document[e]("mousemove", n), document[e]("scroll", n), document[e]("keypress", n);
    }
    function n() {
        d || (d = !0, l()), clearTimeout(c), c = setTimeout(i, r);
    }
    function i() {
        d && (d = !1, u());
    }
    function o() {
        clearTimeout(c), t("removeEventListener");
    }
    e = e || {};
    var c, u = e.callback || function() {}, l = e.activeCallback || function() {}, r = e.idleTime || 6e4, d = !0;
    return t("addEventListener"), n(), {
        activate: n,
        destroy: o,
        idle: i
    };
}

module.exports = idleTimer;

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!function(t) {
    function e(t, n) {
        if (t = t ? t : "", n = n || {}, t instanceof e) return t;
        if (!(this instanceof e)) return new e(t, n);
        var a = r(t);
        this._originalInput = t, this._r = a.r, this._g = a.g, this._b = a.b, this._a = a.a, 
        this._roundA = $(100 * this._a) / 100, this._format = n.format || a.format, this._gradientType = n.gradientType, 
        this._r < 1 && (this._r = $(this._r)), this._g < 1 && (this._g = $(this._g)), this._b < 1 && (this._b = $(this._b)), 
        this._ok = a.ok, this._tc_id = P++;
    }
    function r(t) {
        var e = {
            r: 0,
            g: 0,
            b: 0
        }, r = 1, a = null, s = null, f = null, h = !1, l = !1;
        return "string" == typeof t && (t = E(t)), "object" == typeof t && (z(t.r) && z(t.g) && z(t.b) ? (e = n(t.r, t.g, t.b), 
        h = !0, l = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : z(t.h) && z(t.s) && z(t.v) ? (a = I(t.s), 
        s = I(t.v), e = o(t.h, a, s), h = !0, l = "hsv") : z(t.h) && z(t.s) && z(t.l) && (a = I(t.s), 
        f = I(t.l), e = i(t.h, a, f), h = !0, l = "hsl"), t.hasOwnProperty("a") && (r = t.a)), 
        r = S(r), {
            ok: h,
            format: t.format || l,
            r: D(255, U(e.r, 0)),
            g: D(255, U(e.g, 0)),
            b: D(255, U(e.b, 0)),
            a: r
        };
    }
    function n(t, e, r) {
        return {
            r: 255 * H(t, 255),
            g: 255 * H(e, 255),
            b: 255 * H(r, 255)
        };
    }
    function a(t, e, r) {
        t = H(t, 255), e = H(e, 255), r = H(r, 255);
        var n, a, i = U(t, e, r), s = D(t, e, r), o = (i + s) / 2;
        if (i == s) n = a = 0; else {
            var f = i - s;
            switch (a = o > .5 ? f / (2 - i - s) : f / (i + s), i) {
              case t:
                n = (e - r) / f + (e < r ? 6 : 0);
                break;

              case e:
                n = (r - t) / f + 2;
                break;

              case r:
                n = (t - e) / f + 4;
            }
            n /= 6;
        }
        return {
            h: n,
            s: a,
            l: o
        };
    }
    function i(t, e, r) {
        function n(t, e, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
        }
        var a, i, s;
        if (t = H(t, 360), e = H(e, 100), r = H(r, 100), 0 === e) a = i = s = r; else {
            var o = r < .5 ? r * (1 + e) : r + e - r * e, f = 2 * r - o;
            a = n(f, o, t + 1 / 3), i = n(f, o, t), s = n(f, o, t - 1 / 3);
        }
        return {
            r: 255 * a,
            g: 255 * i,
            b: 255 * s
        };
    }
    function s(t, e, r) {
        t = H(t, 255), e = H(e, 255), r = H(r, 255);
        var n, a, i = U(t, e, r), s = D(t, e, r), o = i, f = i - s;
        if (a = 0 === i ? 0 : f / i, i == s) n = 0; else {
            switch (i) {
              case t:
                n = (e - r) / f + (e < r ? 6 : 0);
                break;

              case e:
                n = (r - t) / f + 2;
                break;

              case r:
                n = (t - e) / f + 4;
            }
            n /= 6;
        }
        return {
            h: n,
            s: a,
            v: o
        };
    }
    function o(e, r, n) {
        e = 6 * H(e, 360), r = H(r, 100), n = H(n, 100);
        var a = t.floor(e), i = e - a, s = n * (1 - r), o = n * (1 - i * r), f = n * (1 - (1 - i) * r), h = a % 6, l = [ n, o, s, s, f, n ][h], u = [ f, n, n, o, s, s ][h], c = [ s, s, f, n, n, o ][h];
        return {
            r: 255 * l,
            g: 255 * u,
            b: 255 * c
        };
    }
    function f(t, e, r, n) {
        var a = [ M($(t).toString(16)), M($(e).toString(16)), M($(r).toString(16)) ];
        return n && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
    }
    function h(t, e, r, n, a) {
        var i = [ M($(t).toString(16)), M($(e).toString(16)), M($(r).toString(16)), M(L(n)) ];
        return a && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
    }
    function l(t, e, r, n) {
        var a = [ M(L(n)), M($(t).toString(16)), M($(e).toString(16)), M($(r).toString(16)) ];
        return a.join("");
    }
    function u(t, r) {
        r = 0 === r ? 0 : r || 10;
        var n = e(t).toHsl();
        return n.s -= r / 100, n.s = R(n.s), e(n);
    }
    function c(t, r) {
        r = 0 === r ? 0 : r || 10;
        var n = e(t).toHsl();
        return n.s += r / 100, n.s = R(n.s), e(n);
    }
    function g(t) {
        return e(t).desaturate(100);
    }
    function b(t, r) {
        r = 0 === r ? 0 : r || 10;
        var n = e(t).toHsl();
        return n.l += r / 100, n.l = R(n.l), e(n);
    }
    function d(t, r) {
        r = 0 === r ? 0 : r || 10;
        var n = e(t).toRgb();
        return n.r = U(0, D(255, n.r - $(255 * -(r / 100)))), n.g = U(0, D(255, n.g - $(255 * -(r / 100)))), 
        n.b = U(0, D(255, n.b - $(255 * -(r / 100)))), e(n);
    }
    function _(t, r) {
        r = 0 === r ? 0 : r || 10;
        var n = e(t).toHsl();
        return n.l -= r / 100, n.l = R(n.l), e(n);
    }
    function p(t, r) {
        var n = e(t).toHsl(), a = (n.h + r) % 360;
        return n.h = a < 0 ? 360 + a : a, e(n);
    }
    function m(t) {
        var r = e(t).toHsl();
        return r.h = (r.h + 180) % 360, e(r);
    }
    function v(t) {
        var r = e(t).toHsl(), n = r.h;
        return [ e(t), e({
            h: (n + 120) % 360,
            s: r.s,
            l: r.l
        }), e({
            h: (n + 240) % 360,
            s: r.s,
            l: r.l
        }) ];
    }
    function y(t) {
        var r = e(t).toHsl(), n = r.h;
        return [ e(t), e({
            h: (n + 90) % 360,
            s: r.s,
            l: r.l
        }), e({
            h: (n + 180) % 360,
            s: r.s,
            l: r.l
        }), e({
            h: (n + 270) % 360,
            s: r.s,
            l: r.l
        }) ];
    }
    function A(t) {
        var r = e(t).toHsl(), n = r.h;
        return [ e(t), e({
            h: (n + 72) % 360,
            s: r.s,
            l: r.l
        }), e({
            h: (n + 216) % 360,
            s: r.s,
            l: r.l
        }) ];
    }
    function x(t, r, n) {
        r = r || 6, n = n || 30;
        var a = e(t).toHsl(), i = 360 / n, s = [ e(t) ];
        for (a.h = (a.h - (i * r >> 1) + 720) % 360; --r; ) a.h = (a.h + i) % 360, s.push(e(a));
        return s;
    }
    function k(t, r) {
        r = r || 6;
        for (var n = e(t).toHsv(), a = n.h, i = n.s, s = n.v, o = [], f = 1 / r; r--; ) o.push(e({
            h: a,
            s: i,
            v: s
        })), s = (s + f) % 1;
        return o;
    }
    function w(t) {
        var e = {};
        for (var r in t) t.hasOwnProperty(r) && (e[t[r]] = r);
        return e;
    }
    function S(t) {
        return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
    }
    function H(e, r) {
        C(e) && (e = "100%");
        var n = q(e);
        return e = D(r, U(0, parseFloat(e))), n && (e = parseInt(e * r, 10) / 100), t.abs(e - r) < 1e-6 ? 1 : e % r / parseFloat(r);
    }
    function R(t) {
        return D(1, U(0, t));
    }
    function F(t) {
        return parseInt(t, 16);
    }
    function C(t) {
        return "string" == typeof t && t.indexOf(".") != -1 && 1 === parseFloat(t);
    }
    function q(t) {
        return "string" == typeof t && t.indexOf("%") != -1;
    }
    function M(t) {
        return 1 == t.length ? "0" + t : "" + t;
    }
    function I(t) {
        return t <= 1 && (t = 100 * t + "%"), t;
    }
    function L(e) {
        return t.round(255 * parseFloat(e)).toString(16);
    }
    function N(t) {
        return F(t) / 255;
    }
    function z(t) {
        return !!X.CSS_UNIT.exec(t);
    }
    function E(t) {
        t = t.replace(j, "").replace(O, "").toLowerCase();
        var e = !1;
        if (G[t]) t = G[t], e = !0; else if ("transparent" == t) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var r;
        return (r = X.rgb.exec(t)) ? {
            r: r[1],
            g: r[2],
            b: r[3]
        } : (r = X.rgba.exec(t)) ? {
            r: r[1],
            g: r[2],
            b: r[3],
            a: r[4]
        } : (r = X.hsl.exec(t)) ? {
            h: r[1],
            s: r[2],
            l: r[3]
        } : (r = X.hsla.exec(t)) ? {
            h: r[1],
            s: r[2],
            l: r[3],
            a: r[4]
        } : (r = X.hsv.exec(t)) ? {
            h: r[1],
            s: r[2],
            v: r[3]
        } : (r = X.hsva.exec(t)) ? {
            h: r[1],
            s: r[2],
            v: r[3],
            a: r[4]
        } : (r = X.hex8.exec(t)) ? {
            r: F(r[1]),
            g: F(r[2]),
            b: F(r[3]),
            a: N(r[4]),
            format: e ? "name" : "hex8"
        } : (r = X.hex6.exec(t)) ? {
            r: F(r[1]),
            g: F(r[2]),
            b: F(r[3]),
            format: e ? "name" : "hex"
        } : (r = X.hex4.exec(t)) ? {
            r: F(r[1] + "" + r[1]),
            g: F(r[2] + "" + r[2]),
            b: F(r[3] + "" + r[3]),
            a: N(r[4] + "" + r[4]),
            format: e ? "name" : "hex8"
        } : !!(r = X.hex3.exec(t)) && {
            r: F(r[1] + "" + r[1]),
            g: F(r[2] + "" + r[2]),
            b: F(r[3] + "" + r[3]),
            format: e ? "name" : "hex"
        };
    }
    function T(t) {
        var e, r;
        return t = t || {
            level: "AA",
            size: "small"
        }, e = (t.level || "AA").toUpperCase(), r = (t.size || "small").toLowerCase(), "AA" !== e && "AAA" !== e && (e = "AA"), 
        "small" !== r && "large" !== r && (r = "small"), {
            level: e,
            size: r
        };
    }
    var j = /^\s+/, O = /\s+$/, P = 0, $ = t.round, D = t.min, U = t.max, B = t.random;
    e.prototype = {
        isDark: function() {
            return this.getBrightness() < 128;
        },
        isLight: function() {
            return !this.isDark();
        },
        isValid: function() {
            return this._ok;
        },
        getOriginalInput: function() {
            return this._originalInput;
        },
        getFormat: function() {
            return this._format;
        },
        getAlpha: function() {
            return this._a;
        },
        getBrightness: function() {
            var t = this.toRgb();
            return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
        },
        getLuminance: function() {
            var e, r, n, a, i, s, o = this.toRgb();
            return e = o.r / 255, r = o.g / 255, n = o.b / 255, a = e <= .03928 ? e / 12.92 : t.pow((e + .055) / 1.055, 2.4), 
            i = r <= .03928 ? r / 12.92 : t.pow((r + .055) / 1.055, 2.4), s = n <= .03928 ? n / 12.92 : t.pow((n + .055) / 1.055, 2.4), 
            .2126 * a + .7152 * i + .0722 * s;
        },
        setAlpha: function(t) {
            return this._a = S(t), this._roundA = $(100 * this._a) / 100, this;
        },
        toHsv: function() {
            var t = s(this._r, this._g, this._b);
            return {
                h: 360 * t.h,
                s: t.s,
                v: t.v,
                a: this._a
            };
        },
        toHsvString: function() {
            var t = s(this._r, this._g, this._b), e = $(360 * t.h), r = $(100 * t.s), n = $(100 * t.v);
            return 1 == this._a ? "hsv(" + e + ", " + r + "%, " + n + "%)" : "hsva(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHsl: function() {
            var t = a(this._r, this._g, this._b);
            return {
                h: 360 * t.h,
                s: t.s,
                l: t.l,
                a: this._a
            };
        },
        toHslString: function() {
            var t = a(this._r, this._g, this._b), e = $(360 * t.h), r = $(100 * t.s), n = $(100 * t.l);
            return 1 == this._a ? "hsl(" + e + ", " + r + "%, " + n + "%)" : "hsla(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHex: function(t) {
            return f(this._r, this._g, this._b, t);
        },
        toHexString: function(t) {
            return "#" + this.toHex(t);
        },
        toHex8: function(t) {
            return h(this._r, this._g, this._b, this._a, t);
        },
        toHex8String: function(t) {
            return "#" + this.toHex8(t);
        },
        toRgb: function() {
            return {
                r: $(this._r),
                g: $(this._g),
                b: $(this._b),
                a: this._a
            };
        },
        toRgbString: function() {
            return 1 == this._a ? "rgb(" + $(this._r) + ", " + $(this._g) + ", " + $(this._b) + ")" : "rgba(" + $(this._r) + ", " + $(this._g) + ", " + $(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function() {
            return {
                r: $(100 * H(this._r, 255)) + "%",
                g: $(100 * H(this._g, 255)) + "%",
                b: $(100 * H(this._b, 255)) + "%",
                a: this._a
            };
        },
        toPercentageRgbString: function() {
            return 1 == this._a ? "rgb(" + $(100 * H(this._r, 255)) + "%, " + $(100 * H(this._g, 255)) + "%, " + $(100 * H(this._b, 255)) + "%)" : "rgba(" + $(100 * H(this._r, 255)) + "%, " + $(100 * H(this._g, 255)) + "%, " + $(100 * H(this._b, 255)) + "%, " + this._roundA + ")";
        },
        toName: function() {
            return 0 === this._a ? "transparent" : !(this._a < 1) && (V[f(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function(t) {
            var r = "#" + l(this._r, this._g, this._b, this._a), n = r, a = this._gradientType ? "GradientType = 1, " : "";
            if (t) {
                var i = e(t);
                n = "#" + l(i._r, i._g, i._b, i._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + r + ",endColorstr=" + n + ")";
        },
        toString: function(t) {
            var e = !!t;
            t = t || this._format;
            var r = !1, n = this._a < 1 && this._a >= 0, a = !e && n && ("hex" === t || "hex6" === t || "hex3" === t || "hex4" === t || "hex8" === t || "name" === t);
            return a ? "name" === t && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === t && (r = this.toRgbString()), 
            "prgb" === t && (r = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (r = this.toHexString()), 
            "hex3" === t && (r = this.toHexString(!0)), "hex4" === t && (r = this.toHex8String(!0)), 
            "hex8" === t && (r = this.toHex8String()), "name" === t && (r = this.toName()), 
            "hsl" === t && (r = this.toHslString()), "hsv" === t && (r = this.toHsvString()), 
            r || this.toHexString());
        },
        clone: function() {
            return e(this.toString());
        },
        _applyModification: function(t, e) {
            var r = t.apply(null, [ this ].concat([].slice.call(e)));
            return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this;
        },
        lighten: function() {
            return this._applyModification(b, arguments);
        },
        brighten: function() {
            return this._applyModification(d, arguments);
        },
        darken: function() {
            return this._applyModification(_, arguments);
        },
        desaturate: function() {
            return this._applyModification(u, arguments);
        },
        saturate: function() {
            return this._applyModification(c, arguments);
        },
        greyscale: function() {
            return this._applyModification(g, arguments);
        },
        spin: function() {
            return this._applyModification(p, arguments);
        },
        _applyCombination: function(t, e) {
            return t.apply(null, [ this ].concat([].slice.call(e)));
        },
        analogous: function() {
            return this._applyCombination(x, arguments);
        },
        complement: function() {
            return this._applyCombination(m, arguments);
        },
        monochromatic: function() {
            return this._applyCombination(k, arguments);
        },
        splitcomplement: function() {
            return this._applyCombination(A, arguments);
        },
        triad: function() {
            return this._applyCombination(v, arguments);
        },
        tetrad: function() {
            return this._applyCombination(y, arguments);
        }
    }, e.fromRatio = function(t, r) {
        if ("object" == typeof t) {
            var n = {};
            for (var a in t) t.hasOwnProperty(a) && ("a" === a ? n[a] = t[a] : n[a] = I(t[a]));
            t = n;
        }
        return e(t, r);
    }, e.equals = function(t, r) {
        return !(!t || !r) && e(t).toRgbString() == e(r).toRgbString();
    }, e.random = function() {
        return e.fromRatio({
            r: B(),
            g: B(),
            b: B()
        });
    }, e.mix = function(t, r, n) {
        n = 0 === n ? 0 : n || 50;
        var a = e(t).toRgb(), i = e(r).toRgb(), s = n / 100, o = {
            r: (i.r - a.r) * s + a.r,
            g: (i.g - a.g) * s + a.g,
            b: (i.b - a.b) * s + a.b,
            a: (i.a - a.a) * s + a.a
        };
        return e(o);
    }, e.readability = function(r, n) {
        var a = e(r), i = e(n);
        return (t.max(a.getLuminance(), i.getLuminance()) + .05) / (t.min(a.getLuminance(), i.getLuminance()) + .05);
    }, e.isReadable = function(t, r, n) {
        var a, i, s = e.readability(t, r);
        switch (i = !1, a = T(n), a.level + a.size) {
          case "AAsmall":
          case "AAAlarge":
            i = s >= 4.5;
            break;

          case "AAlarge":
            i = s >= 3;
            break;

          case "AAAsmall":
            i = s >= 7;
        }
        return i;
    }, e.mostReadable = function(t, r, n) {
        var a, i, s, o, f = null, h = 0;
        n = n || {}, i = n.includeFallbackColors, s = n.level, o = n.size;
        for (var l = 0; l < r.length; l++) a = e.readability(t, r[l]), a > h && (h = a, 
        f = e(r[l]));
        return e.isReadable(t, f, {
            level: s,
            size: o
        }) || !i ? f : (n.includeFallbackColors = !1, e.mostReadable(t, [ "#fff", "#000" ], n));
    };
    var G = e.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    }, V = e.hexNames = w(G), X = function() {
        var t = "[-\\+]?\\d+%?", e = "[-\\+]?\\d*\\.\\d+%?", r = "(?:" + e + ")|(?:" + t + ")", n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", a = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
        return {
            CSS_UNIT: new RegExp(r),
            rgb: new RegExp("rgb" + n),
            rgba: new RegExp("rgba" + a),
            hsl: new RegExp("hsl" + n),
            hsla: new RegExp("hsla" + a),
            hsv: new RegExp("hsv" + n),
            hsva: new RegExp("hsva" + a),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
    }();
    "undefined" != typeof module && module.exports ? module.exports = e :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return e;
    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : window.tinycolor = e;
}(Math);

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

!function(e, t) {
     true ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.touchwipe = t();
}(this, function() {
    "use strict";
    function e(e, t) {
        return "undefined" != typeof e ? e : t;
    }
    function t(t, n) {
        function i() {
            t.removeEventListener("touchmove", o), f = null, r = !1;
        }
        function o(e) {
            if (c.preventDefaultEvents && e.preventDefault(), r) {
                var t = e.touches[0].pageX, n = e.touches[0].pageY, o = f - t, u = p - n;
                Math.abs(o) >= c.min_move_x ? (i(), o > 0 ? c.wipeLeft(e) : c.wipeRight(e)) : Math.abs(u) >= c.min_move_y && (i(), 
                u > 0 ? c.wipeDown(e) : c.wipeUp(e));
            }
        }
        function u(e) {
            1 === e.touches.length && (f = e.touches[0].pageX, p = e.touches[0].pageY, r = !0, 
            t.addEventListener("touchmove", o));
        }
        n = n || {};
        var f, p, c = {
            min_move_x: e(n.min_move_x, 20),
            min_move_y: e(n.min_move_y, 20),
            wipeLeft: n.wipeLeft || function() {},
            wipeRight: n.wipeRight || function() {},
            wipeUp: n.wipeUp || function() {},
            wipeDown: n.wipeDown || function() {},
            preventDefaultEvents: e(n.preventDefaultEvents, !0)
        }, r = !1;
        return t.addEventListener("touchstart", u), {
            unbind: function() {
                t.removeEventListener("touchstart", u);
            }
        };
    }
    return t;
});

/***/ },

/***/ 216:
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iZmlsbDogd2hpdGUiIHZpZXdCb3g9IjAgMCAyMSAyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8cGF0aCBkPSJNLTEuMjUyMjIyNTEsMTUuNjAzNDE5NyBDLTEuMzUyNTE5MjcsMTUuNjkzNjg2OCAtMS40MjUyMzMzMywxNS43OTg5OTY4IC0xLjQ3MDM2Njg3LDE1LjkxOTM1MjkgQy0xLjUxNTUwMDQxLDE2LjAzOTcwOSAtMS41MzgwNjY4NCwxNi4xNjAwNjMzIC0xLjUzODA2Njg0LDE2LjI4MDQxOTQgQy0xLjUzODA2Njg0LDE2LjQwMDc3NTUgLTEuNTE1NTAwNDEsMTYuNTIxMTI5OCAtMS40NzAzNjY4NywxNi42NDE0ODU5IEMtMS40MjUyMzMzMywxNi43NjE4NDIgLTEuMzUyNTE5MjcsMTYuODY3MTUyIC0xLjI1MjIyMjUxLDE2Ljk1NzQxOTEgTDMuNTYxOTk3NzEsMjEuNzcxNjM5MyBDMy43NTI1NjE1NSwyMS45NjIyMDMyIDMuOTgwNzMzMjQsMjIuMDU3NDgzNyA0LjI0NjUxOTY1LDIyLjA1NzQ4MzcgQzQuNTEyMzA2MDUsMjIuMDU3NDgzNyA0LjczNTQ2Mjk5LDIxLjk2MjIwMzIgNC45MTU5OTcxNSwyMS43NzE2MzkzIEM1LjEwNjU2MDk4LDIxLjU4MTA3NTUgNS4yMDE4NDE0NywyMS4zNTU0MTEyIDUuMjAxODQxNDcsMjEuMDk0NjM5NiBDNS4yMDE4NDE0NywyMC44MzM4NjggNS4xMDY1NjA5OCwyMC42MDgyMDM3IDQuOTE1OTk3MTUsMjAuNDE3NjM5OSBMMS43NTY2NjUxMywxNy4yNDMyNjM0IEwxMC4wMTYwNjE3LDE3LjI0MzI2MzQgQzEwLjI4Njg2MjksMTcuMjQzMjYzNCAxMC41MTUwMzQ2LDE3LjE1MDQ5MDMgMTAuNzAwNTgzNiwxNi45NjQ5NDEzIEMxMC44ODYxMzI2LDE2Ljc3OTM5MjMgMTAuOTc4OTA1NywxNi41NTEyMjA2IDEwLjk3ODkwNTcsMTYuMjgwNDE5NCBDMTAuOTc4OTA1NywxNi4wMDk2MTgyIDEwLjg4NjEzMjYsMTUuNzgxNDQ2NSAxMC43MDA1ODM2LDE1LjU5NTg5NzUgQzEwLjUxNTAzNDYsMTUuNDEwMzQ4NSAxMC4yODY4NjI5LDE1LjMxNzU3NTMgMTAuMDE2MDYxNywxNS4zMTc1NzUzIEwxLjc1NjY2NTEzLDE1LjMxNzU3NTMgTDQuOTE1OTk3MTUsMTIuMTQzMTk4OSBDNS4xMDY1NjA5OCwxMS45NTI2MzUxIDUuMjAxODQxNDcsMTEuNzI2OTcwNyA1LjIwMTg0MTQ3LDExLjQ2NjE5OTIgQzUuMjAxODQxNDcsMTEuMjA1NDI3NiA1LjEwNjU2MDk4LDEwLjk3OTc2MzMgNC45MTU5OTcxNSwxMC43ODkxOTk1IEM0LjczNTQ2Mjk5LDEwLjU5ODYzNTYgNC41MTIzMDYwNSwxMC41MDMzNTUxIDQuMjQ2NTE5NjUsMTAuNTAzMzU1MSBDMy45ODA3MzMyNCwxMC41MDMzNTUxIDMuNzUyNTYxNTUsMTAuNTk4NjM1NiAzLjU2MTk5NzcxLDEwLjc4OTE5OTUgTC0xLjI1MjIyMjUxLDE1LjYwMzQxOTcgWiIgaWQ9IngiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNzIwNDE5LCAxNi4yODA0MTkpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTQuNzIwNDE5LCAtMTYuMjgwNDE5KSAiPjwvcGF0aD4KICA8cGF0aCBkPSJNMTAuMzA3Nzc3NCw0LjA0MzQxOTczIEMxMC4yMDc0ODA3LDQuMTMzNjg2ODEgMTAuMTM0NzY2Niw0LjIzODk5NjgzIDEwLjA4OTYzMzEsNC4zNTkzNTI5MyBDMTAuMDQ0NDk5NSw0LjQ3OTcwOTA0IDEwLjAyMTkzMzEsNC42MDAwNjMzNCAxMC4wMjE5MzMxLDQuNzIwNDE5NDUgQzEwLjAyMTkzMzEsNC44NDA3NzU1NiAxMC4wNDQ0OTk1LDQuOTYxMTI5ODYgMTAuMDg5NjMzMSw1LjA4MTQ4NTk3IEMxMC4xMzQ3NjY2LDUuMjAxODQyMDcgMTAuMjA3NDgwNyw1LjMwNzE1MjA5IDEwLjMwNzc3NzQsNS4zOTc0MTkxNyBMMTUuMTIxOTk3NywxMC4yMTE2Mzk0IEMxNS4zMTI1NjE1LDEwLjQwMjIwMzIgMTUuNTQwNzMzMiwxMC40OTc0ODM3IDE1LjgwNjUxOTYsMTAuNDk3NDgzNyBDMTYuMDcyMzA2LDEwLjQ5NzQ4MzcgMTYuMjk1NDYyOSwxMC40MDIyMDMyIDE2LjQ3NTk5NzEsMTAuMjExNjM5NCBDMTYuNjY2NTYwOSwxMC4wMjEwNzU2IDE2Ljc2MTg0MTQsOS43OTU0MTEyNCAxNi43NjE4NDE0LDkuNTM0NjM5NjcgQzE2Ljc2MTg0MTQsOS4yNzM4NjgxMSAxNi42NjY1NjA5LDkuMDQ4MjAzNzkgMTYuNDc1OTk3MSw4Ljg1NzYzOTk1IEwxMy4zMTY2NjUxLDUuNjgzMjYzNDkgTDIxLjU3NjA2MTYsNS42ODMyNjM0OSBDMjEuODQ2ODYyOSw1LjY4MzI2MzQ5IDIyLjA3NTAzNDYsNS41OTA0OTAzOSAyMi4yNjA1ODM2LDUuNDA0OTQxMzkgQzIyLjQ0NjEzMjYsNS4yMTkzOTIzOSAyMi41Mzg5MDU3LDQuOTkxMjIwNjkgMjIuNTM4OTA1Nyw0LjcyMDQxOTQ1IEMyMi41Mzg5MDU3LDQuNDQ5NjE4MjEgMjIuNDQ2MTMyNiw0LjIyMTQ0NjUxIDIyLjI2MDU4MzYsNC4wMzU4OTc1MSBDMjIuMDc1MDM0NiwzLjg1MDM0ODUxIDIxLjg0Njg2MjksMy43NTc1NzU0MSAyMS41NzYwNjE2LDMuNzU3NTc1NDEgTDEzLjMxNjY2NTEsMy43NTc1NzU0MSBMMTYuNDc1OTk3MSwwLjU4MzE5ODk0NyBDMTYuNjY2NTYwOSwwLjM5MjYzNTExMSAxNi43NjE4NDE0LDAuMTY2OTcwNzk0IDE2Ljc2MTg0MTQsLTAuMDkzODAwNzcxNSBDMTYuNzYxODQxNCwtMC4zNTQ1NzIzMzcgMTYuNjY2NTYwOSwtMC41ODAyMzY2NTQgMTYuNDc1OTk3MSwtMC43NzA4MDA0OSBDMTYuMjk1NDYyOSwtMC45NjEzNjQzMjcgMTYuMDcyMzA2LC0xLjA1NjY0NDgyIDE1LjgwNjUxOTYsLTEuMDU2NjQ0ODIgQzE1LjU0MDczMzIsLTEuMDU2NjQ0ODIgMTUuMzEyNTYxNSwtMC45NjEzNjQzMjcgMTUuMTIxOTk3NywtMC43NzA4MDA0OSBMMTAuMzA3Nzc3NCw0LjA0MzQxOTczIFoiIGlkPSJ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4yODA0MTksIDQuNzIwNDE5KSByb3RhdGUoLTIyNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTYuMjgwNDE5LCAtNC43MjA0MTkpICI+PC9wYXRoPgo8L3N2Zz4K"

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "/*! fancyBox v2.0.4 fancyapps.com | fancyapps.com/fancybox/#license */.fancybox-tmp iframe,.fancybox-tmp object{vertical-align:top;padding:0;margin:0}.fancybox-wrap{position:absolute;top:0;left:0;z-index:1002}.fancybox-outer{padding:0;margin:0;background:#f9f9f9;color:#444;text-shadow:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.fancybox-opened{z-index:1003}.fancybox-opened .fancybox-outer{-webkit-box-shadow:0 10px 25px rgba(0,0,0,0.5);-moz-box-shadow:0 10px 25px rgba(0,0,0,0.5);box-shadow:0 10px 25px rgba(0,0,0,0.5)}.fancybox-inner{width:100%;height:100%;padding:0;margin:0;position:relative;outline:none;overflow:hidden}.fancybox-error{color:#444;font:14px/20px \"Helvetica Neue\",Helvetica,Arial,sans-serif;margin:0;padding:10px}.fancybox-image,.fancybox-iframe{display:block;width:100%;height:100%;border:0;padding:0;margin:0;vertical-align:top}.fancybox-image{max-width:100%;max-height:100%}#fancybox-loading{position:fixed;top:50%;left:50%;margin-top:-21px;margin-left:-21px;width:42px;height:42px;background:url(\"/assets/img/jquery/plugins/fancybox/loading.gif\");opacity:0.8;cursor:pointer;z-index:1010}.fancybox-close,.fancybox-prev span,.fancybox-next span{background-image:url(\"/assets/img/jquery/plugins/fancybox/sprite.png\")}.fancybox-close{position:absolute;top:-18px;right:-18px;width:36px;height:36px;cursor:pointer;z-index:1004}.fancybox-prev,.fancybox-next{position:absolute;top:0;width:40%;height:100%;cursor:pointer;background:transparent url(\"/assets/img/jquery/blank.gif\");z-index:1003}.fancybox-prev{left:0}.fancybox-next{right:0}.fancybox-prev span,.fancybox-next span{position:absolute;top:50%;left:-9999px;width:36px;height:36px;margin-top:-18px;cursor:pointer;z-index:1003}.fancybox-prev span{background-position:0 -36px}.fancybox-next span{background-position:0 -72px}.fancybox-prev:hover,.fancybox-next:hover{visibility:visible}.fancybox-prev:hover span{left:20px}.fancybox-next:hover span{left:auto;right:20px}.fancybox-tmp{position:absolute;top:-9999px;left:-9999px;padding:0;overflow:visible;visibility:hidden}#fancybox-overlay{position:absolute;top:0;left:0;overflow:hidden;display:none;z-index:1001;background:#000}.fancybox-title{visibility:hidden;font:normal 13px/20px \"Helvetica Neue\",Helvetica,Arial,sans-serif;position:relative;text-shadow:none;z-index:1005}.fancybox-opened .fancybox-title{visibility:visible}.fancybox-title-float-wrap{position:absolute;bottom:0;right:50%;margin-bottom:-35px;z-index:1003;text-align:center}.fancybox-title-float-wrap .child{display:inline-block;margin-right:-100%;padding:2px 20px;background:transparent;background:rgba(0,0,0,0.8);-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;text-shadow:0 1px 2px #222;color:#FFF;font-weight:bold;line-height:24px;white-space:nowrap}.fancybox-title-outside-wrap{position:relative;margin-top:10px;color:#fff}.fancybox-title-inside-wrap{margin-top:10px}.fancybox-title-over-wrap{position:absolute;bottom:0;left:0;color:#fff;padding:10px;background:#000;background:rgba(0,0,0,0.8)}\n\n/*# sourceMappingURL=jquery.fancybox.css.map */", ""]);

// exports


/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg class=\"rotate-icon\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 18 20\" xml:space=\"preserve\">");t.b("\n" + i);t.b("  <path d=\"M16,0c0.2,0,0.3,0,0.5,0.1c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.2,0.3,0.4s0.1,0.3,0.1,0.5v6.2c0,0.2,0,0.3-0.1,0.5");t.b("\n" + i);t.b("      S17,8.3,16.9,8.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.5,0.1H9.7c-0.2,0-0.3,0-0.5-0.1C9.1,8.6,8.9,8.5,8.8,8.4");t.b("\n" + i);t.b("      C8.7,8.3,8.6,8.1,8.6,8S8.5,7.7,8.5,7.5c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1");t.b("\n" + i);t.b("      h3.2C12.6,6,12.3,5.8,12,5.6c-0.3-0.2-0.7-0.4-1-0.5c-0.4-0.1-0.7-0.3-1.1-0.3C9.5,4.6,9.1,4.6,8.8,4.6c-0.9,0-1.7,0.2-2.4,0.5");t.b("\n" + i);t.b("      s-1.4,0.8-2,1.3s-1,1.2-1.3,2C2.7,9.2,2.5,10,2.5,10.9s0.2,1.7,0.5,2.4s0.8,1.4,1.3,2s1.2,1,2,1.3c0.8,0.3,1.6,0.5,2.4,0.5");t.b("\n" + i);t.b("      c0.5,0,1-0.1,1.5-0.2s1-0.3,1.4-0.5c0.4-0.2,0.8-0.5,1.2-0.8s0.7-0.7,1-1.1c0.1-0.1,0.2-0.3,0.4-0.3c0.1-0.1,0.3-0.1,0.4-0.2");t.b("\n" + i);t.b("      c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.3,0.2,0.3,0.4c0.1,0.1,0.1,0.3,0.2,0.4s0,0.3,0,0.5c0,0.2-0.1,0.3-0.2,0.5");t.b("\n" + i);t.b("      c-0.4,0.6-0.9,1.1-1.4,1.6c-0.5,0.5-1.1,0.8-1.7,1.2c-0.6,0.3-1.3,0.6-1.9,0.7s-1.4,0.3-2.1,0.3c-1.2,0-2.3-0.2-3.4-0.7");t.b("\n" + i);t.b("      c-1.1-0.5-2-1.1-2.8-1.9c-0.8-0.8-1.4-1.7-1.9-2.8C0.2,13.2,0,12.1,0,10.9c0-1.2,0.2-2.3,0.7-3.4c0.5-1.1,1.1-2,1.9-2.8");t.b("\n" + i);t.b("      c0.8-0.8,1.7-1.4,2.8-1.9c1.1-0.5,2.2-0.7,3.4-0.7c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,1.1,0.3,1.6,0.5c0.5,0.2,1,0.5,1.4,0.8");t.b("\n" + i);t.b("      c0.5,0.3,0.9,0.6,1.3,1h0V1.2c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3C15.6,0,15.8,0,16,0z\"/>");t.b("\n" + i);t.b("</svg>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<svg class=\"rotate-icon\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 18 20\" xml:space=\"preserve\">\n  <path d=\"M16,0c0.2,0,0.3,0,0.5,0.1c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.2,0.3,0.4s0.1,0.3,0.1,0.5v6.2c0,0.2,0,0.3-0.1,0.5\n      S17,8.3,16.9,8.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.5,0.1H9.7c-0.2,0-0.3,0-0.5-0.1C9.1,8.6,8.9,8.5,8.8,8.4\n      C8.7,8.3,8.6,8.1,8.6,8S8.5,7.7,8.5,7.5c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1\n      h3.2C12.6,6,12.3,5.8,12,5.6c-0.3-0.2-0.7-0.4-1-0.5c-0.4-0.1-0.7-0.3-1.1-0.3C9.5,4.6,9.1,4.6,8.8,4.6c-0.9,0-1.7,0.2-2.4,0.5\n      s-1.4,0.8-2,1.3s-1,1.2-1.3,2C2.7,9.2,2.5,10,2.5,10.9s0.2,1.7,0.5,2.4s0.8,1.4,1.3,2s1.2,1,2,1.3c0.8,0.3,1.6,0.5,2.4,0.5\n      c0.5,0,1-0.1,1.5-0.2s1-0.3,1.4-0.5c0.4-0.2,0.8-0.5,1.2-0.8s0.7-0.7,1-1.1c0.1-0.1,0.2-0.3,0.4-0.3c0.1-0.1,0.3-0.1,0.4-0.2\n      c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.3,0.2,0.3,0.4c0.1,0.1,0.1,0.3,0.2,0.4s0,0.3,0,0.5c0,0.2-0.1,0.3-0.2,0.5\n      c-0.4,0.6-0.9,1.1-1.4,1.6c-0.5,0.5-1.1,0.8-1.7,1.2c-0.6,0.3-1.3,0.6-1.9,0.7s-1.4,0.3-2.1,0.3c-1.2,0-2.3-0.2-3.4-0.7\n      c-1.1-0.5-2-1.1-2.8-1.9c-0.8-0.8-1.4-1.7-1.9-2.8C0.2,13.2,0,12.1,0,10.9c0-1.2,0.2-2.3,0.7-3.4c0.5-1.1,1.1-2,1.9-2.8\n      c0.8-0.8,1.7-1.4,2.8-1.9c1.1-0.5,2.2-0.7,3.4-0.7c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,1.1,0.3,1.6,0.5c0.5,0.2,1,0.5,1.4,0.8\n      c0.5,0.3,0.9,0.6,1.3,1h0V1.2c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3C15.6,0,15.8,0,16,0z\"/>\n</svg>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_button": __webpack_require__(63).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_button0",c,p,""));return t.fl(); },partials: {"<lib/_button0":{name:"lib/_button", partials: {}, subs: { "attrs": function(c,p,t,i) {t.b("data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");},"classes": function(c,p,t,i) {t.b("form-button-light-and-blue js-action-collection");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-collection");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,211,261,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_add_to_collection_button|Add to Collection");});c.pop();}} }}}, subs: {  }}, "{{<lib/_button}}\n  {{$attrs}}data-id=\"{{id}}\"{{/attrs}}\n  {{$classes}}form-button-light-and-blue js-action-collection{{/classes}}\n  {{$icon}}beicons-pre beicons-pre-collection{{/icon}}\n  {{$label}}{{#translate}}project_add_to_collection_button|Add to Collection{{/translate}}{{/label}}\n{{/lib/_button}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"profile-item\">");t.b("\n" + i);t.b("  <img class=\"profile-item__image\" src=\"/assets/img/profile/no-image-115.jpg\" />");t.b("\n" + i);t.b("  <div class=\"profile-item__info\">");t.b("\n" + i);t.b("    <a class=\"profile-item__name\">");t.b(t.v(t.f("first_name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"profile-item\">\n  <img class=\"profile-item__image\" src=\"/assets/img/profile/no-image-115.jpg\" />\n  <div class=\"profile-item__info\">\n    <a class=\"profile-item__name\">{{first_name}}</a>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_link": __webpack_require__(123).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(!t.s(t.f("is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<lib/_follow/_link0",c,p,""));};return t.fl(); },partials: {"<lib/_follow/_link0":{name:"lib/_follow/_link", partials: {}, subs: { "type": function(c,p,t,i) {t.b("user");} }}}, subs: {  }}, "{{^is_profile_owner}}\n{{<lib/_follow/_link}}\n    {{$type}}user{{/type}}\n{{/lib/_follow/_link}}\n{{/is_profile_owner}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div title=\"");if(t.s(t.f("translate",c,p,1),c,p,0,26,58,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_message_user|Message User");});c.pop();}t.b("\" class=\"");t.sub("classes",c,p,i);t.b(" js-action-message-user\" data-contact_name=\"");t.b(t.v(t.f("display_name",c,p,0)));t.b("\" data-contact_id=");t.b(t.v(t.f("id",c,p,0)));t.b(">");t.b("\n" + i);t.b("  <a class=\"form-button form-button-light-and-grey beicons-pre beicons-pre-mail\">");if(t.s(t.f("translate",c,p,1),c,p,0,300,322,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("button_message|Message");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: { "classes": function(c,p,t,i) {t.b("profile-action");} }}, "<div title=\"{{#translate}}button_message_user|Message User{{/translate}}\" class=\"{{$classes}}profile-action{{/classes}} js-action-message-user\" data-contact_name=\"{{display_name}}\" data-contact_id={{id}}>\n  <a class=\"form-button form-button-light-and-grey beicons-pre beicons-pre-mail\">{{#translate}}button_message|Message{{/translate}}</a>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"variable-text variable-text-short js-more-toggle\">");t.sub("shortened",c,p,i);t.b("&#8230; <span class=\"js-more-toggle-link fake-link\">");if(t.s(t.f("translate",c,p,1),c,p,0,156,186,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("moretoggle_read_more|Read More");});c.pop();}t.b("</span></div>");t.b("\n" + i);t.b("<div class=\"variable-text variable-text-full hide\">");t.sub("full",c,p,i);t.b(" <span class=\"js-more-toggle-link fake-link\">");if(t.s(t.f("translate",c,p,1),c,p,0,342,372,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("moretoggle_read_less|Read Less");});c.pop();}t.b("</span></div>");return t.fl(); },partials: {}, subs: { "shortened": function(c,p,t,i) {},"full": function(c,p,t,i) {} }}, "<div class=\"variable-text variable-text-short js-more-toggle\">{{$shortened}}{{/shortened}}&#8230; <span class=\"js-more-toggle-link fake-link\">{{#translate}}moretoggle_read_more|Read More{{/translate}}</span></div>\n<div class=\"variable-text variable-text-full hide\">{{$full}}{{/full}} <span class=\"js-more-toggle-link fake-link\">{{#translate}}moretoggle_read_less|Read Less{{/translate}}</span></div>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_link": __webpack_require__(123).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"profile-item\">");t.b("\n" + i);t.b("  <a class=\"profile-item__image\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" ");t.sub("attr",c,p,i);t.b("><img src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" /></a>");t.b("\n" + i);t.b("  <div class=\"profile-item__info\">");t.b("\n" + i);t.b("    <a class=\"profile-item__name\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" ");t.sub("attr",c,p,i);t.b(">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("    ");if(t.s(t.f("location",c,p,1),c,p,0,268,376,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a class=\"profile-item__location beicons-pre beicons-pre-location\" href=\"");t.b(t.v(t.f("location_link",c,p,0)));t.b("\">");t.b(t.v(t.f("location",c,p,0)));t.b("</a>");});c.pop();}t.b("\n" + i);t.b(t.rp("<lib/_follow/_link0",c,p,""));t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_follow/_link0":{name:"lib/_follow/_link", partials: {}, subs: { "type": function(c,p,t,i) {t.b("team");} }}}, subs: { "attr": function(c,p,t,i) {} }}, "<div class=\"profile-item\">\n  <a class=\"profile-item__image\" href=\"{{url}}\" {{$attr}}{{/attr}}><img src=\"{{images.115}}\" /></a>\n  <div class=\"profile-item__info\">\n    <a class=\"profile-item__name\" href=\"{{url}}\" {{$attr}}{{/attr}}>{{display_name}}</a>\n    {{#location}}<a class=\"profile-item__location beicons-pre beicons-pre-location\" href=\"{{location_link}}\">{{location}}</a>{{/location}}\n    {{<lib/_follow/_link}}\n    {{$type}}team{{/type}}\n    {{/lib/_follow/_link}}\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_layout/_sidebar": __webpack_require__(250).template,"project/_layout/_main": __webpack_require__(247).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("project",c,p,1),c,p,0,12,200,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div id=\"project-wrap\" class=\"js-project-wrap v-");t.b(t.v(t.f("editor_version",c,p,0)));t.b("\">");t.b("\n");t.b("\n" + i);if(!t.s(t.f("is_iframe",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<project/_layout/_sidebar0",c,p,"      "));};t.b("\n" + i);t.b(t.rp("<project/_layout/_main1",c,p,"    "));t.b("  </div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {"<project/_layout/_sidebar0":{name:"project/_layout/_sidebar", partials: {}, subs: {  }},"<project/_layout/_main1":{name:"project/_layout/_main", partials: {}, subs: {  }}}, subs: {  }}, "{{#project}}\n  <div id=\"project-wrap\" class=\"js-project-wrap v-{{editor_version}}\">\n\n    {{^is_iframe}}\n      {{>project/_layout/_sidebar}}\n    {{/is_iframe}}\n\n    {{>project/_layout/_main}}\n  </div>\n{{/project}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_moreToggle": __webpack_require__(225).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("description_shortened",c,p,1),c,p,0,26,169,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_moreToggle0",c,p,""));});c.pop();}if(!t.s(t.f("description_shortened",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.f("description",c,p,0)));};t.b("\n" + i);t.b("<div class=\"project-published\">");if(t.s(t.f("translate",c,p,1),c,p,0,309,342,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_published_date|Published:");});c.pop();}t.b(" <span class=\"js-format-timestamp\" data-timestamp=\"");t.b(t.v(t.f("published_on",c,p,0)));t.b("\"></span></div>");t.b("\n");return t.fl(); },partials: {"<lib/_moreToggle0":{name:"lib/_moreToggle", partials: {}, subs: { "shortened": function(c,p,t,i) {t.b(t.v(t.f("description_shortened",c,p,0)));},"full": function(c,p,t,i) {t.b(t.v(t.f("description",c,p,0)));} }}}, subs: {  }}, "{{#description_shortened}}\n  {{<lib/_moreToggle}}\n    {{$shortened}}{{description_shortened}}{{/shortened}}\n    {{$full}}{{description}}{{/full}}\n  {{/lib/_moreToggle}}\n{{/description_shortened}}\n{{^description_shortened}}{{description}}{{/description_shortened}}\n<div class=\"project-published\">{{#translate}}project_published_date|Published:{{/translate}} <span class=\"js-format-timestamp\" data-timestamp=\"{{published_on}}\"></span></div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(46).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader0",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader0":{name:"project/_blocks/_blockHeader", partials: {}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-basic-info");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,108,143,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_basic_info_label|Basic Info");});c.pop();}},"content": function(c,p,t,i) {t.b("    ");t.b(t.v(t.f("description",c,p,0)));t.b("\n" + i);t.b("    <div class=\"project-published\">");if(t.s(t.f("translate",c,p,1),c,p,0,252,285,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_published_date|Published:");});c.pop();}t.b(" <span class=\"js-format-timestamp\" data-timestamp=\"");t.b(t.v(t.f("published_on",c,p,0)));t.b("\"></span></div>");t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-basic-info{{/id}}\n  {{$title}}{{#translate}}project_basic_info_label|Basic Info{{/translate}}{{/title}}\n  {{$content}}\n    {{description}}\n    <div class=\"project-published\">{{#translate}}project_published_date|Published:{{/translate}} <span class=\"js-format-timestamp\" data-timestamp=\"{{published_on}}\"></span></div>\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(46).template,"project/_blocks/_footer/_commentsButton": __webpack_require__(231).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader1",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader1":{name:"project/_blocks/_blockHeader", partials: {"<contentproject/_blocks/_footer/_commentsButton0":{name:"project/_blocks/_footer/_commentsButton", partials: {}, subs: {  }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-comments");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,184,255,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_comments_title|Comments <span class=\"js-comments-total\"></span>");});c.pop();}},"content": function(c,p,t,i) {if(t.s(t.f("loggedIn",c,p,1),c,p,0,312,1369,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"comment-post-container js-post-comment-block cfix\">");t.b("\n" + i);t.b("        <img src=\"");t.b(t.v(t.d("loggedInUser.images.115",c,p,0)));t.b("\" class=\"comment-user-image-link comment-owner-image\">");t.b("\n" + i);t.b("        <div class=\"comment-post\">");t.b("\n" + i);t.b("          <form name=\"comments_form\" method=\"post\" class=\"form clear cfix relative comments-form\" accept-charset=\"utf-8\" id=\"comments_form\" action=\"/comments/project\">");t.b("\n" + i);t.b("            <div class=\"form-item form-item-textarea\" id=\"comment-container\">");t.b("\n" + i);t.b("              <textarea name=\"comment\" class=\"form-textarea js-characters-limited js-comment-textarea\" rows=\"10\" cols=\"60\" id=\"comment\" data-validate=\"required,Generic,length[0,800]\"></textarea>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"comment-link-warning js-comment-link-warning hide\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,1082,1180,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("comment_link_warning|Posting a link? Please note that links in comments will appear as plain text.");});c.pop();}t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b(t.rp("<contentproject/_blocks/_footer/_commentsButton0",c,p,"            "));t.b("          </form>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("loggedIn",c,p,1),c,p,1,0,0,"")){t.b("    <div class=\"post-comment-logged-out\">");if(t.s(t.f("translate",c,p,1),c,p,0,1456,1616,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_sign_up_to_comment|You must <a class=\"js-comments-signup link-login fake-link\" data-signup-from=\"Comments Section\">sign up</a> to join the conversation.");});c.pop();}t.b("</div>");t.b("\n" + i);};t.b("    <div>");t.b("\n" + i);t.b("      <ul class=\"js-comments-list comments-list\"></ul>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"js-see-more comments-pagination hide\">");if(t.s(t.f("translate",c,p,1),c,p,0,1799,1842,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_see_more_comments|See More Comments");});c.pop();}t.b(" <span class=\"beicons-pre beicons-pre-arrow-down\"></span></div>");t.b("\n" + i);} }}}, subs: {  }}, "{{!TODO: use actual form/_textarea form partial instead of regular textarea}}\n{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-comments{{/id}}\n  {{$title}}{{#translate}}project_comments_title|Comments <span class=\"js-comments-total\"></span>{{/translate}}{{/title}}\n  {{$content}}\n    {{#loggedIn}}\n      <div class=\"comment-post-container js-post-comment-block cfix\">\n        <img src=\"{{loggedInUser.images.115}}\" class=\"comment-user-image-link comment-owner-image\">\n        <div class=\"comment-post\">\n          <form name=\"comments_form\" method=\"post\" class=\"form clear cfix relative comments-form\" accept-charset=\"utf-8\" id=\"comments_form\" action=\"/comments/project\">\n            <div class=\"form-item form-item-textarea\" id=\"comment-container\">\n              <textarea name=\"comment\" class=\"form-textarea js-characters-limited js-comment-textarea\" rows=\"10\" cols=\"60\" id=\"comment\" data-validate=\"required,Generic,length[0,800]\"></textarea>\n            </div>\n            <div class=\"comment-link-warning js-comment-link-warning hide\">\n              {{#translate}}comment_link_warning|Posting a link? Please note that links in comments will appear as plain text.{{/translate}}\n            </div>\n            {{>project/_blocks/_footer/_commentsButton}}\n          </form>\n        </div>{{!/.comment-post}}\n      </div>{{!/.comment-post-container}}\n    {{/loggedIn}}\n    {{^loggedIn}}\n    <div class=\"post-comment-logged-out\">{{#translate}}project_sign_up_to_comment|You must <a class=\"js-comments-signup link-login fake-link\" data-signup-from=\"Comments Section\">sign up</a> to join the conversation.{{/translate}}</div>\n    {{/loggedIn}}\n    <div>\n      <ul class=\"js-comments-list comments-list\"></ul>\n    </div>\n    <div class=\"js-see-more comments-pagination hide\">{{#translate}}project_see_more_comments|See More Comments{{/translate}} <span class=\"beicons-pre beicons-pre-arrow-down\"></span></div>\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_button": __webpack_require__(63).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_button0",c,p,""));return t.fl(); },partials: {"<lib/_button0":{name:"lib/_button", partials: {}, subs: { "label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,43,85,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_post_comment_button|Post a Comment");});c.pop();}},"classes": function(c,p,t,i) {t.b("form-button-default js-submit");} }}}, subs: {  }}, "{{<lib/_button}}\n  {{$label}}{{#translate}}project_post_comment_button|Post a Comment{{/translate}}{{/label}}\n  {{$classes}}form-button-default js-submit{{/classes}}\n{{/lib/_button}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(46).template,"lib/_profileListItem": __webpack_require__(77).template,"lib/_fakeUserListItem": __webpack_require__(222).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader3",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader3":{name:"project/_blocks/_blockHeader", partials: {"<contentlib/_profileListItem0":{name:"lib/_profileListItem", partials: {}, subs: {  }},"<contentlib/_profileListItem1":{name:"lib/_profileListItem", partials: {}, subs: {  }},"<contentlib/_fakeUserListItem2":{name:"lib/_fakeUserListItem", partials: {}, subs: {  }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-credits");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,105,134,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_credits_label|Credits");});c.pop();}},"content": function(c,p,t,i) {if(t.s(t.f("owners",c,p,1),c,p,0,189,226,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<contentlib/_profileListItem0",c,p,"      "));});c.pop();}if(t.s(t.f("credits",c,p,1),c,p,0,254,408,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("username",c,p,1),c,p,0,274,315,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<contentlib/_profileListItem1",c,p,"        "));});c.pop();}if(!t.s(t.f("username",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<contentlib/_fakeUserListItem2",c,p,"        "));};});c.pop();}} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-credits{{/id}}\n  {{$title}}{{#translate}}project_credits_label|Credits{{/translate}}{{/title}}\n  {{$content}}\n    {{#owners}}\n      {{>lib/_profileListItem}}\n    {{/owners}}\n    {{#credits}}\n      {{#username}}\n        {{>lib/_profileListItem}}\n      {{/username}}\n      {{^username}}\n        {{>lib/_fakeUserListItem}}\n      {{/username}}\n    {{/credits}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"project-block-minimal\">");t.b("\n" + i);if(t.s(t.f("copyright",c,p,1),c,p,0,146,717,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div id=\"project-block-copyright\">");t.b("\n" + i);t.b("    <div class=\"tooltipi-container\">");t.b("\n" + i);if(t.s(t.d("info.images",c,p,1),c,p,0,243,274,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <img src=\"");t.b(t.v(t.d(".",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}t.b("      <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b("        <div class=\"project-block-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,391,434,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_copyright_info_label|Copyright Info");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("        <p>");t.b(t.v(t.d("info.text",c,p,0)));t.b("</p>");t.b("\n" + i);if(t.s(t.d("info.url",c,p,1),c,p,0,505,668,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <a href=\"");t.b(t.v(t.d("info.url",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,551,588,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_copyright_read_more|Read More");});c.pop();}t.b("<span class=\"beicons-pre beicons-pre-promote\"></span></a>");t.b("\n" + i);});c.pop();}t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.d("owners.0.is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b("    <div id=\"project-block-spam\" class=\"js-project-spam\">");if(t.s(t.f("loggedIn",c,p,1),c,p,0,835,992,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a class=\"js-action-spam beicons-pre beicons-pre-spam\" data-type=\"project\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,941,974,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_mark_as_spam|Mark as Spam");});c.pop();}t.b("</a>");});c.pop();}t.b("<a class=\"js-action-report beicons-pre beicons-pre-report\" data-type=\"project\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,1115,1136,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_report|Report");});c.pop();}t.b("</a></div>");t.b("\n" + i);};t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"project-block-minimal\">{{!need to wrap the following 2 children in a shared div for css columns to behave correctly}}\n  {{#copyright}}\n  <div id=\"project-block-copyright\">\n    <div class=\"tooltipi-container\">\n      {{#info.images}}\n      <img src=\"{{.}}\">\n      {{/info.images}}\n      <div class=\"tooltipi tooltipi-white\">\n        <div class=\"project-block-header\">{{#translate}}project_copyright_info_label|Copyright Info{{/translate}}</div>\n        <p>{{info.text}}</p>\n        {{#info.url}}\n        <a href=\"{{info.url}}\">{{#translate}}project_copyright_read_more|Read More{{/translate}}<span class=\"beicons-pre beicons-pre-promote\"></span></a>\n        {{/info.url}}\n      </div>\n    </div>\n  </div>\n  {{/copyright}}\n  {{^owners.0.is_profile_owner}}\n    <div id=\"project-block-spam\" class=\"js-project-spam\">{{#loggedIn}}<a class=\"js-action-spam beicons-pre beicons-pre-spam\" data-type=\"project\" data-id=\"{{id}}\">{{#translate}}project_mark_as_spam|Mark as Spam{{/translate}}</a>{{/loggedIn}}<a class=\"js-action-report beicons-pre beicons-pre-report\" data-type=\"project\" data-id=\"{{id}}\">{{#translate}}project_report|Report{{/translate}}</a></div>\n  {{/owners.0.is_profile_owner}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(46).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader0",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader0":{name:"project/_blocks/_blockHeader", partials: {}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-tags");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,102,125,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_tags_label|Tags");});c.pop();}},"content": function(c,p,t,i) {if(t.s(t.f("tags",c,p,1),c,p,0,178,240,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"object-tag\">");t.b(t.v(t.f("title",c,p,0)));t.b("</a>");t.b("\n" + i);});c.pop();}} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-tags{{/id}}\n  {{$title}}{{#translate}}project_tags_label|Tags{{/translate}}{{/title}}\n  {{$content}}\n    {{#tags}}\n      <a href=\"{{url}}\" class=\"object-tag\">{{title}}</a>\n    {{/tags}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(46).template,"lib/_teamListItem": __webpack_require__(226).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader1",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader1":{name:"project/_blocks/_blockHeader", partials: {"<contentlib/_teamListItem0":{name:"lib/_teamListItem", partials: {}, subs: {  }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-teams");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,103,142,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_made_for_label|Project Made For");});c.pop();}},"content": function(c,p,t,i) {if(t.s(t.f("teams",c,p,1),c,p,0,196,230,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<contentlib/_teamListItem0",c,p,"      "));});c.pop();}} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-teams{{/id}}\n  {{$title}}{{#translate}}project_made_for_label|Project Made For{{/translate}}{{/title}}\n  {{$content}}\n    {{#teams}}\n      {{>lib/_teamListItem}}\n    {{/teams}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(46).template,"project/_blocks/_tools": __webpack_require__(91).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader1",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader1":{name:"project/_blocks/_blockHeader", partials: {"<contentproject/_blocks/_tools0":{name:"project/_blocks/_tools", partials: {}, subs: {  }}}, subs: { "id": function(c,p,t,i) {t.b("project-block-footer-tools");},"title": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,103,138,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_tools_used_label|Tools Used");});c.pop();}},"content": function(c,p,t,i) {t.b(t.rp("<contentproject/_blocks/_tools0",c,p,"    "));} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-tools{{/id}}\n  {{$title}}{{#translate}}project_tools_used_label|Tools Used{{/translate}}{{/title}}\n  {{$content}}\n    {{>project/_blocks/_tools}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_sidebar/_header": __webpack_require__(126).template,"project/_blocks/_sidebar/_info": __webpack_require__(127).template,"project/_blocks/_sidebar/_features": __webpack_require__(125).template,"project/_blocks/_tools": __webpack_require__(91).template,"project/_blocks/_aboutInner": __webpack_require__(228).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"mobile-header\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"project-data\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_sidebar/_header0",c,p,"    "));t.b("\n" + i);t.b("    <div class=\"project-data__highlights features-");t.b(t.v(t.d("project.num_features",c,p,0)));t.b("\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_sidebar/_info1",c,p,"      "));t.b(t.rp("<project/_blocks/_sidebar/_features2",c,p,"      "));t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <ul class=\"mobile-header__actions\">");t.b("\n" + i);t.b("    <li class=\"mobile-header__action beicons-pre beicons-pre-add-projects js-action-collection\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,456,506,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_add_to_collection_button|Add to Collection");});c.pop();}t.b("\n" + i);t.b("    </li>");t.b("\n");t.b("\n" + i);if(t.s(t.f("has_tools",c,p,1),c,p,0,550,958,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li class=\"mobile-header__action mobile-header__action--tools beicons-pre beicons-pre-settings tooltipi-container\">");t.b("\n" + i);t.b("        ");if(t.s(t.f("translate",c,p,1),c,p,0,695,730,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_tools_used_label|Tools Used");});c.pop();}t.b("\n" + i);t.b("        <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b("          <h3 class=\"project-block-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,848,873,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_tools_label|Tools");});c.pop();}t.b("</h3>");t.b("\n" + i);t.b(t.rp("<project/_blocks/_tools3",c,p,"          "));t.b("        </div>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <li class=\"mobile-header__action mobile-header__action--about beicons-pre tooltipi-container\">");t.b("\n" + i);t.b("      ");if(t.s(t.f("translate",c,p,1),c,p,0,1093,1118,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_about_label|About");});c.pop();}t.b("\n" + i);t.b("      <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b("        <h3 class=\"project-block-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,1232,1257,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_about_label|About");});c.pop();}t.b("</h3>");t.b("\n" + i);t.b(t.rp("<project/_blocks/_aboutInner4",c,p,"        "));t.b("      </div>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("  </ul>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_blocks/_sidebar/_header0":{name:"project/_blocks/_sidebar/_header", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_info1":{name:"project/_blocks/_sidebar/_info", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_features2":{name:"project/_blocks/_sidebar/_features", partials: {}, subs: {  }},"<project/_blocks/_tools3":{name:"project/_blocks/_tools", partials: {}, subs: {  }},"<project/_blocks/_aboutInner4":{name:"project/_blocks/_aboutInner", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"mobile-header\">\n\n  <div class=\"project-data\">\n    {{>project/_blocks/_sidebar/_header}}\n\n    <div class=\"project-data__highlights features-{{project.num_features}}\">\n      {{>project/_blocks/_sidebar/_info}}\n      {{>project/_blocks/_sidebar/_features}}\n    </div>\n  </div>\n\n  <ul class=\"mobile-header__actions\">\n    <li class=\"mobile-header__action beicons-pre beicons-pre-add-projects js-action-collection\" data-id=\"{{id}}\">\n      {{#translate}}project_add_to_collection_button|Add to Collection{{/translate}}\n    </li>\n\n    {{#has_tools}}\n      <li class=\"mobile-header__action mobile-header__action--tools beicons-pre beicons-pre-settings tooltipi-container\">\n        {{#translate}}project_tools_used_label|Tools Used{{/translate}}\n        <div class=\"tooltipi tooltipi-white\">\n          <h3 class=\"project-block-header\">{{#translate}}project_tools_label|Tools{{/translate}}</h3>\n          {{>project/_blocks/_tools}}\n        </div>\n    </li>\n  {{/has_tools}}\n\n    <li class=\"mobile-header__action mobile-header__action--about beicons-pre tooltipi-container\">\n      {{#translate}}project_about_label|About{{/translate}}\n      <div class=\"tooltipi tooltipi-white\">\n        <h3 class=\"project-block-header\">{{#translate}}project_about_label|About{{/translate}}</h3>\n        {{>project/_blocks/_aboutInner}}\n      </div>\n    </li>\n  </ul>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_button": __webpack_require__(63).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_button0",c,p,""));return t.fl(); },partials: {"<lib/_button0":{name:"lib/_button", partials: {}, subs: { "attrs": function(c,p,t,i) {t.b("href=\"");t.b(t.v(t.d("URLS.edit",c,p,0)));t.b("\"");},"containerClasses": function(c,p,t,i) {t.b("edit-project-container hide-phone");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-edit");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,213,245,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_edit_button|Edit Project");});c.pop();}} }}}, subs: {  }}, "{{<lib/_button}}\n  {{$attrs}}href=\"{{URLS.edit}}\"{{/attrs}}\n  {{$containerClasses}}edit-project-container hide-phone{{/containerClasses}}\n  {{$icon}}beicons-pre beicons-pre-edit{{/icon}}\n  {{$label}}{{#translate}}project_edit_button|Edit Project{{/translate}}{{/label}}\n{{/lib/_button}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_button": __webpack_require__(63).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<lib/_button0",c,p,""));return t.fl(); },partials: {"<lib/_button0":{name:"lib/_button", partials: {}, subs: { "attrs": function(c,p,t,i) {t.b("href=\"");t.b(t.v(t.d("URLS.edit",c,p,0)));t.b("\"");},"containerClasses": function(c,p,t,i) {t.b("edit-project-container hide-phone");},"classes": function(c,p,t,i) {t.b("form-button-default form-button-small");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-edit");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,277,309,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_edit_button|Edit Project");});c.pop();}} }}}, subs: {  }}, "{{<lib/_button}}\n  {{$attrs}}href=\"{{URLS.edit}}\"{{/attrs}}\n  {{$containerClasses}}edit-project-container hide-phone{{/containerClasses}}\n  {{$classes}}form-button-default form-button-small{{/classes}}\n  {{$icon}}beicons-pre beicons-pre-edit{{/icon}}\n  {{$label}}{{#translate}}project_edit_button|Edit Project{{/translate}}{{/label}}\n{{/lib/_button}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_blockHeader": __webpack_require__(46).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_blockHeader0",c,p,""));return t.fl(); },partials: {"<project/_blocks/_blockHeader0":{name:"project/_blocks/_blockHeader", partials: {}, subs: { "id": function(c,p,t,i) {t.b("project-block-sidebar-admin-notice");},"title": function(c,p,t,i) {t.b("<span class=\"beicons-pre beicons-pre-report\">");t.b(t.v(t.f("title",c,p,0)));t.b("</span>");},"class": function(c,p,t,i) {t.b("hide-sticky");},"content": function(c,p,t,i) {t.b("    ");t.b(t.t(t.f("body",c,p,0)));t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-sidebar-admin-notice{{/id}}\n  {{$title}}<span class=\"beicons-pre beicons-pre-report\">{{title}}</span>{{/title}}\n  {{$class}}hide-sticky{{/class}}\n  {{$content}}\n    {{{body}}}\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(60).template,"lib/_button": __webpack_require__(63).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_block2",c,p,""));return t.fl(); },partials: {"<project/_blocks/_block2":{name:"project/_blocks/_block", partials: {"<contentlib/_button0":{name:"lib/_button", partials: {}, subs: { "containerClasses": function(c,p,t,i) {t.b("form-item-appreciate");},"classes": function(c,p,t,i) {t.b("thumb form-button-default form-button-large");},"icon": function(c,p,t,i) {t.b("beicons-pre beicons-pre-thumb");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,429,474,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_appreciate_project|Appreciate Project");});c.pop();}} }},"<contentlib/_button1":{name:"lib/_button", partials: {}, subs: { "icon": function(c,p,t,i) {},"containerClasses": function(c,p,t,i) {t.b("form-item-thanks");},"classes": function(c,p,t,i) {t.b("text form-button-dark form-button-large");},"label": function(c,p,t,i) {if(t.s(t.f("translate",c,p,1),c,p,0,838,877,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_appreciate_thank_you|Thank you!");});c.pop();}} }}}, subs: { "class": function(c,p,t,i) {t.b("project-block--buttons");},"content": function(c,p,t,i) {t.b("    <div class=\"appreciation-button js-appreciate\" data-render-pulse-point=\"true\">");t.b("\n" + i);t.b(t.rp("<contentlib/_button0",c,p,""));t.b(t.rp("<contentlib/_button1",c,p,""));t.b("      <div class=\"js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb\"></div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);} }}}, subs: {  }}, "{{<project/_blocks/_block}}\n  {{$class}}project-block--buttons{{/class}}\n  {{$content}}\n    <div class=\"appreciation-button js-appreciate\" data-render-pulse-point=\"true\">\n      {{<lib/_button}}\n        {{$containerClasses}}form-item-appreciate{{/containerClasses}}\n        {{$classes}}thumb form-button-default form-button-large{{/classes}}\n        {{$icon}}beicons-pre beicons-pre-thumb{{/icon}}\n        {{$label}}{{#translate}}project_appreciate_project|Appreciate Project{{/translate}}{{/label}}\n      {{/lib/_button}}\n      {{! need to set an empty icon value below, otherwise it inherits from the button above}}\n      {{<lib/_button}}\n        {{$icon}}{{/icon}}\n        {{$containerClasses}}form-item-thanks{{/containerClasses}}\n        {{$classes}}text form-button-dark form-button-large{{/classes}}\n        {{$label}}{{#translate}}project_appreciate_thank_you|Thank you!{{/translate}}{{/label}}\n      {{/lib/_button}}\n      <div class=\"js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb\"></div>\n    </div>\n  {{/content}}\n{{/project/_blocks/_block}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_block": __webpack_require__(60).template,"project/_blocks/_tools": __webpack_require__(91).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(t.rp("<project/_blocks/_block1",c,p,""));return t.fl(); },partials: {"<project/_blocks/_block1":{name:"project/_blocks/_block", partials: {"<contentproject/_blocks/_tools0":{name:"project/_blocks/_tools", partials: {}, subs: {  }}}, subs: { "content": function(c,p,t,i) {t.b(t.rp("<contentproject/_blocks/_tools0",c,p,"    "));} }}}, subs: {  }}, "{{<project/_blocks/_block}}\n  {{$content}}\n    {{>project/_blocks/_tools}}\n  {{/content}}\n{{/project/_blocks/_block}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project-stats\">");t.b("\n" + i);t.b("  <div class=\"project-stat beicons-pre beicons-pre-eye\">");t.b("\n" + i);t.b("    ");if(t.s(t.d("stats.views",c,p,1),c,p,0,102,117,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.d("stats.views",c,p,0)));});c.pop();}t.b("\n" + i);t.b("    ");if(!t.s(t.d("stats.views",c,p,1),c,p,1,0,0,"")){t.b("0");};t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"project-stat beicons-pre beicons-pre-thumb js-stats-appreciations\">");t.b("\n" + i);t.b("    ");if(t.s(t.d("stats.appreciations",c,p,1),c,p,0,292,315,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.d("stats.appreciations",c,p,0)));});c.pop();}t.b("\n" + i);t.b("    ");if(!t.s(t.d("stats.appreciations",c,p,1),c,p,1,0,0,"")){t.b("0");};t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"project-stat beicons-pre beicons-pre-comment\">");t.b("\n" + i);t.b("    ");if(t.s(t.d("stats.comments",c,p,1),c,p,0,488,506,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.d("stats.comments",c,p,0)));});c.pop();}t.b("\n" + i);t.b("    ");if(!t.s(t.d("stats.comments",c,p,1),c,p,1,0,0,"")){t.b("0");};t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"project-stats\">\n  <div class=\"project-stat beicons-pre beicons-pre-eye\">\n    {{#stats.views}}{{stats.views}}{{/stats.views}}\n    {{^stats.views}}0{{/stats.views}}\n  </div>\n\n  <div class=\"project-stat beicons-pre beicons-pre-thumb js-stats-appreciations\">\n    {{#stats.appreciations}}{{stats.appreciations}}{{/stats.appreciations}}\n    {{^stats.appreciations}}0{{/stats.appreciations}}\n  </div>\n\n  <div class=\"project-stat beicons-pre beicons-pre-comment\">\n    {{#stats.comments}}{{stats.comments}}{{/stats.comments}}\n    {{^stats.comments}}0{{/stats.comments}}\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_collection/_add": __webpack_require__(221).template,"lib/_follow/_buttonUser": __webpack_require__(122).template,"lib/_follow/_buttonAll": __webpack_require__(120).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"appreciation\" class=\"show-on-preview unclickable-mask appreciation-button js-appreciate\" data-appreciate-from=\"project\">");t.b("\n" + i);t.b("  <div id=\"sticker\">");t.b("\n" + i);t.b("    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\" width=\"180\" height=\"180\" viewBox=\"0 0 90 90\" fill=\"url('#appreciation-gradient')\">");t.b("\n" + i);t.b("  		<defs>");t.b("\n" + i);t.b("        <linearGradient id=\"appreciation-gradient\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\">");t.b("\n" + i);t.b("          <stop class=\"appreciation-stop-1\" offset=\"0%\"/>");t.b("\n" + i);t.b("          <stop class=\"appreciation-stop-2\" offset=\"100%\"/>");t.b("\n" + i);t.b("        </linearGradient>");t.b("\n" + i);t.b("      </defs>");t.b("\n" + i);t.b("      <path d=\"M89.999 45 C89.999 46.6 85.8 48 85.7 49.6 C85.481 51.2 89.2 53.5 88.9 55 C88.521 56.6 84.2 57 83.6 58.5 C83.096 60.1 86.2 63.1 85.5 64.5 C84.849 66 80.5 65.4 79.6 66.8 C78.791 68.1 81.2 71.8 80.2 73.1 C79.177 74.3 75.1 72.8 73.9 73.9 C72.794 75.1 74.3 79.2 73.1 80.2 C71.802 81.2 68.1 78.8 66.8 79.7 C65.411 80.5 66 84.9 64.5 85.6 C63.087 86.3 60 83.1 58.5 83.6 C57.008 84.2 56.6 88.5 55 88.9 C53.459 89.2 51.2 85.5 49.6 85.7 C48.002 85.8 46.6 90 45 90 C43.370 90 42 85.8 40.4 85.7 C38.799 85.5 36.5 89.2 35 88.9 C33.403 88.5 33 84.2 31.5 83.6 C29.953 83.1 26.9 86.3 25.5 85.6 C24.013 84.9 24.6 80.5 23.2 79.7 C21.863 78.8 18.2 81.2 16.9 80.2 C15.680 79.2 17.2 75.1 16.1 73.9 C14.927 72.8 10.8 74.3 9.8 73.1 C8.811 71.8 11.2 68.1 10.3 66.8 C9.491 65.4 5.1 66 4.4 64.5 C3.748 63.1 6.9 60.1 6.4 58.5 C5.837 57 1.5 56.6 1.1 55 C0.761 53.5 4.5 51.2 4.3 49.6 C4.157 48 -0 46.6 -0 45 C-0.005 43.4 4.2 42 4.3 40.4 C4.513 38.8 0.8 36.5 1.1 35 C1.473 33.4 5.8 33 6.4 31.5 C6.898 30 3.7 26.9 4.4 25.5 C5.144 24 9.5 24.6 10.3 23.2 C11.203 21.9 8.8 18.2 9.8 16.9 C10.817 15.7 14.9 17.2 16.1 16.1 C17.200 14.9 15.7 10.8 16.9 9.8 C18.191 8.8 21.9 11.2 23.2 10.4 C24.583 9.5 24 5.2 25.5 4.5 C26.907 3.8 30 6.9 31.5 6.4 C32.986 5.8 33.4 1.5 35 1.1 C36.535 0.8 38.8 4.5 40.4 4.3 C41.991 4.2 43.4 0 45 0 C46.623 0 48 4.2 49.6 4.3 C51.195 4.5 53.5 0.8 55 1.1 C56.591 1.5 57 5.8 58.5 6.4 C60.041 6.9 63.1 3.8 64.5 4.5 C65.981 5.2 65.4 9.5 66.8 10.4 C68.131 11.2 71.8 8.8 73.1 9.8 C74.314 10.8 72.8 14.9 73.9 16.1 C75.067 17.2 79.2 15.7 80.2 16.9 C81.183 18.2 78.8 21.9 79.6 23.2 C80.503 24.6 84.8 24 85.6 25.5 C86.246 26.9 83.1 30 83.6 31.5 C84.157 33 88.5 33.4 88.9 35 C89.233 36.5 85.5 38.8 85.7 40.4 C85.837 42 90 43.4 90 45 Z\"/>");t.b("\n" + i);t.b("    </svg>");t.b("\n" + i);t.b("    <div class=\"thumb beicons-pre beicons-pre-thumb\"></div>");t.b("\n" + i);t.b("    <div class=\"text\">");if(t.s(t.f("translate",c,p,1),c,p,0,2436,2476,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_apprecation_thank_you|Thank You!");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb\"></div>");t.b("\n" + i);t.b("  <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b(t.rp("<lib/_collection/_add0",c,p,"    "));if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,2714,2742,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_follow/_buttonUser1",c,p,""));});c.pop();}};if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,2806,2833,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_follow/_buttonAll2",c,p,""));});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_collection/_add0":{name:"lib/_collection/_add", partials: {}, subs: {  }},"<lib/_follow/_buttonUser1":{name:"lib/_follow/_buttonUser", partials: {}, subs: {  }},"<lib/_follow/_buttonAll2":{name:"lib/_follow/_buttonAll", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"appreciation\" class=\"show-on-preview unclickable-mask appreciation-button js-appreciate\" data-appreciate-from=\"project\">\n  <div id=\"sticker\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\" width=\"180\" height=\"180\" viewBox=\"0 0 90 90\" fill=\"url('#appreciation-gradient')\">\n  \t\t<defs>\n        <linearGradient id=\"appreciation-gradient\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\">\n          <stop class=\"appreciation-stop-1\" offset=\"0%\"/>\n          <stop class=\"appreciation-stop-2\" offset=\"100%\"/>\n        </linearGradient>\n      </defs>\n      <path d=\"M89.999 45 C89.999 46.6 85.8 48 85.7 49.6 C85.481 51.2 89.2 53.5 88.9 55 C88.521 56.6 84.2 57 83.6 58.5 C83.096 60.1 86.2 63.1 85.5 64.5 C84.849 66 80.5 65.4 79.6 66.8 C78.791 68.1 81.2 71.8 80.2 73.1 C79.177 74.3 75.1 72.8 73.9 73.9 C72.794 75.1 74.3 79.2 73.1 80.2 C71.802 81.2 68.1 78.8 66.8 79.7 C65.411 80.5 66 84.9 64.5 85.6 C63.087 86.3 60 83.1 58.5 83.6 C57.008 84.2 56.6 88.5 55 88.9 C53.459 89.2 51.2 85.5 49.6 85.7 C48.002 85.8 46.6 90 45 90 C43.370 90 42 85.8 40.4 85.7 C38.799 85.5 36.5 89.2 35 88.9 C33.403 88.5 33 84.2 31.5 83.6 C29.953 83.1 26.9 86.3 25.5 85.6 C24.013 84.9 24.6 80.5 23.2 79.7 C21.863 78.8 18.2 81.2 16.9 80.2 C15.680 79.2 17.2 75.1 16.1 73.9 C14.927 72.8 10.8 74.3 9.8 73.1 C8.811 71.8 11.2 68.1 10.3 66.8 C9.491 65.4 5.1 66 4.4 64.5 C3.748 63.1 6.9 60.1 6.4 58.5 C5.837 57 1.5 56.6 1.1 55 C0.761 53.5 4.5 51.2 4.3 49.6 C4.157 48 -0 46.6 -0 45 C-0.005 43.4 4.2 42 4.3 40.4 C4.513 38.8 0.8 36.5 1.1 35 C1.473 33.4 5.8 33 6.4 31.5 C6.898 30 3.7 26.9 4.4 25.5 C5.144 24 9.5 24.6 10.3 23.2 C11.203 21.9 8.8 18.2 9.8 16.9 C10.817 15.7 14.9 17.2 16.1 16.1 C17.200 14.9 15.7 10.8 16.9 9.8 C18.191 8.8 21.9 11.2 23.2 10.4 C24.583 9.5 24 5.2 25.5 4.5 C26.907 3.8 30 6.9 31.5 6.4 C32.986 5.8 33.4 1.5 35 1.1 C36.535 0.8 38.8 4.5 40.4 4.3 C41.991 4.2 43.4 0 45 0 C46.623 0 48 4.2 49.6 4.3 C51.195 4.5 53.5 0.8 55 1.1 C56.591 1.5 57 5.8 58.5 6.4 C60.041 6.9 63.1 3.8 64.5 4.5 C65.981 5.2 65.4 9.5 66.8 10.4 C68.131 11.2 71.8 8.8 73.1 9.8 C74.314 10.8 72.8 14.9 73.9 16.1 C75.067 17.2 79.2 15.7 80.2 16.9 C81.183 18.2 78.8 21.9 79.6 23.2 C80.503 24.6 84.8 24 85.6 25.5 C86.246 26.9 83.1 30 83.6 31.5 C84.157 33 88.5 33.4 88.9 35 C89.233 36.5 85.5 38.8 85.7 40.4 C85.837 42 90 43.4 90 45 Z\"/>\n    </svg>\n    <div class=\"thumb beicons-pre beicons-pre-thumb\"></div>\n    <div class=\"text\">{{#translate}}project_apprecation_thank_you|Thank You!{{/translate}}</div>\n  </div>\n  <div class=\"js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb\"></div>\n  <div class=\"tooltipi tooltipi-white\">\n    {{>lib/_collection/_add}}\n    {{^has_multiple_owners}}{{#owners}}{{>lib/_follow/_buttonUser}}{{/owners}}{{/has_multiple_owners}}\n    {{#has_multiple_owners}}{{>lib/_follow/_buttonAll}}{{/has_multiple_owners}}\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_layout/_spacer": __webpack_require__(252).template,"project/_modules/_text": __webpack_require__(259).template,"project/_modules/_image": __webpack_require__(255).template,"project/_modules/_embed": __webpack_require__(253).template,"project/_modules/_grid": __webpack_require__(254).template,"project/_modules/_lightbox/_lastSlide": __webpack_require__(258).template,"project/_layout/_appreciation": __webpack_require__(244).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project-canvas\" class=\"project-canvas-view");if(t.s(t.f("styles",c,p,1),c,p,0,62,77,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" project-styles");});c.pop();}t.b("\"");if(t.s(t.f("is_iframe",c,p,1),c,p,0,103,141,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("style=\"max-width: ");t.b(t.v(t.f("canvas_width",c,p,0)));t.b("px;\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("  <div id=\"project-modules\">");t.b("\n" + i);t.b(t.rp("<project/_layout/_spacer0",c,p,"  "));if(t.s(t.f("modules",c,p,1),c,p,0,231,949,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_text",c,p,1),c,p,0,248,287,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_text1",c,p,"      "));});c.pop();}t.b("\n" + i);if(t.s(t.f("is_image",c,p,1),c,p,0,318,358,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_image2",c,p,"      "));});c.pop();}t.b("\n" + i);if(t.s(t.f("is_audio",c,p,1),c,p,0,390,430,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_embed3",c,p,"      "));});c.pop();}t.b("\n" + i);if(t.s(t.f("is_video",c,p,1),c,p,0,462,502,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_embed4",c,p,"      "));});c.pop();}t.b("\n" + i);if(t.s(t.f("is_embed",c,p,1),c,p,0,534,574,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_embed5",c,p,"      "));});c.pop();}t.b("\n" + i);if(t.s(t.f("is_grid",c,p,1),c,p,0,605,644,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_modules/_grid6",c,p,"      "));});c.pop();}if(t.s(t.f("caption",c,p,1),c,p,0,673,864,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"project-module caption-container align-");t.b(t.v(t.f("caption_alignment",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <div class=\"module-caption caption caption-text-wrap\">");t.b("\n" + i);t.b("        ");t.b(t.t(t.f("caption",c,p,0)));t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("    <div class=\"spacer\">");t.b("\n" + i);t.b("      <div class=\"divider\"></div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b(t.rp("<project/_modules/_lightbox/_lastSlide7",c,p,"  "));t.b("  </div>");t.b("\n" + i);t.b(t.rp("<project/_layout/_appreciation8",c,p,"  "));t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_layout/_spacer0":{name:"project/_layout/_spacer", partials: {}, subs: {  }},"<project/_modules/_text1":{name:"project/_modules/_text", partials: {}, subs: {  }},"<project/_modules/_image2":{name:"project/_modules/_image", partials: {}, subs: {  }},"<project/_modules/_embed3":{name:"project/_modules/_embed", partials: {}, subs: {  }},"<project/_modules/_embed4":{name:"project/_modules/_embed", partials: {}, subs: {  }},"<project/_modules/_embed5":{name:"project/_modules/_embed", partials: {}, subs: {  }},"<project/_modules/_grid6":{name:"project/_modules/_grid", partials: {}, subs: {  }},"<project/_modules/_lightbox/_lastSlide7":{name:"project/_modules/_lightbox/_lastSlide", partials: {}, subs: {  }},"<project/_layout/_appreciation8":{name:"project/_layout/_appreciation", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"project-canvas\" class=\"project-canvas-view{{#styles}} project-styles{{/styles}}\"{{#is_iframe}}style=\"max-width: {{canvas_width}}px;\"{{/is_iframe}}>\n  <div id=\"project-modules\">\n  {{>project/_layout/_spacer}}\n  {{#modules}}\n    {{#is_text}}\n      {{>project/_modules/_text}}\n    {{/is_text}}\n\n    {{#is_image}}\n      {{>project/_modules/_image}}\n    {{/is_image}}\n\n    {{#is_audio}}\n      {{>project/_modules/_embed}}\n    {{/is_audio}}\n\n    {{#is_video}}\n      {{>project/_modules/_embed}}\n    {{/is_video}}\n\n    {{#is_embed}}\n      {{>project/_modules/_embed}}\n    {{/is_embed}}\n\n    {{#is_grid}}\n      {{>project/_modules/_grid}}\n    {{/is_grid}}\n    {{#caption}}\n    <div class=\"project-module caption-container align-{{caption_alignment}}\">\n      <div class=\"module-caption caption caption-text-wrap\">\n        {{{caption}}}\n      </div>\n    </div>\n    {{/caption}}\n    <div class=\"spacer\">\n      <div class=\"divider\"></div>\n    </div>\n  {{/modules}}\n  {{>project/_modules/_lightbox/_lastSlide}}\n  </div>\n  {{>project/_layout/_appreciation}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_footer/_comments": __webpack_require__(230).template,"project/_blocks/_footer/_basicInfo": __webpack_require__(229).template,"project/_blocks/_footer/_teams": __webpack_require__(235).template,"project/_blocks/_footer/_credits": __webpack_require__(232).template,"project/_blocks/_footer/_tags": __webpack_require__(234).template,"project/_blocks/_footer/_tools": __webpack_require__(236).template,"project/_blocks/_footer/_reportAndCopyright": __webpack_require__(233).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project-footer\" class=\"show-on-preview unclickable-mask cfix ");if(!t.s(t.f("allow_comments",c,p,1),c,p,1,0,0,"")){t.b("disabled-comments");};t.b("\">");t.b("\n" + i);t.b("  <div id=\"project-footer-inner\">");t.b("\n" + i);if(t.s(t.f("allow_comments",c,p,1),c,p,0,185,235,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_footer/_comments0",c,p,"      "));});c.pop();}t.b("    <div id=\"project-footer-info-wrap\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_footer/_basicInfo1",c,p,"      "));if(t.s(t.f("has_teams",c,p,1),c,p,0,361,396,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_footer/_teams2",c,p,""));});c.pop();}t.b(t.rp("<project/_blocks/_footer/_credits3",c,p,"      "));t.b(t.rp("<project/_blocks/_footer/_tags4",c,p,"      "));if(t.s(t.f("has_tools",c,p,1),c,p,0,516,551,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_footer/_tools5",c,p,""));});c.pop();}t.b(t.rp("<project/_blocks/_footer/_reportAndCopyright6",c,p,"      "));t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_blocks/_footer/_comments0":{name:"project/_blocks/_footer/_comments", partials: {}, subs: {  }},"<project/_blocks/_footer/_basicInfo1":{name:"project/_blocks/_footer/_basicInfo", partials: {}, subs: {  }},"<project/_blocks/_footer/_teams2":{name:"project/_blocks/_footer/_teams", partials: {}, subs: {  }},"<project/_blocks/_footer/_credits3":{name:"project/_blocks/_footer/_credits", partials: {}, subs: {  }},"<project/_blocks/_footer/_tags4":{name:"project/_blocks/_footer/_tags", partials: {}, subs: {  }},"<project/_blocks/_footer/_tools5":{name:"project/_blocks/_footer/_tools", partials: {}, subs: {  }},"<project/_blocks/_footer/_reportAndCopyright6":{name:"project/_blocks/_footer/_reportAndCopyright", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"project-footer\" class=\"show-on-preview unclickable-mask cfix {{^allow_comments}}disabled-comments{{/allow_comments}}\">\n  <div id=\"project-footer-inner\">\n    {{#allow_comments}}\n      {{>project/_blocks/_footer/_comments}}\n    {{/allow_comments}}\n    <div id=\"project-footer-info-wrap\">\n      {{>project/_blocks/_footer/_basicInfo}}\n      {{#has_teams}}{{>project/_blocks/_footer/_teams}}{{/has_teams}}\n      {{>project/_blocks/_footer/_credits}}\n      {{>project/_blocks/_footer/_tags}}\n      {{#has_tools}}{{>project/_blocks/_footer/_tools}}{{/has_tools}}\n      {{>project/_blocks/_footer/_reportAndCopyright}}\n    </div>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_headerMobile": __webpack_require__(237).template,"project/_layout/_canvas": __webpack_require__(245).template,"project/_layout/_socialSharing": __webpack_require__(251).template,"project/_layout/_ownerBar": __webpack_require__(248).template,"project/_layout/_projectGallery": __webpack_require__(249).template,"project/_layout/_footer": __webpack_require__(246).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project\" class=\"js-project\"");t.b("\n" + i);t.b("  data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  data-mature_content=\"");t.b(t.v(t.f("mature_content",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  data-mature_access=\"");t.b(t.v(t.f("mature_access",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  data-allow_comments=\"");t.b(t.v(t.f("allow_comments",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  data-appreciations=\"");t.b(t.v(t.d("stats.appreciations",c,p,0)));t.b("\"");t.b("\n" + i);if(t.s(t.f("pulse_points",c,p,1),c,p,0,314,451,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    data-pulse_points_follow=\"");t.b(t.v(t.d("pulse_points.display_follow",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    data-pulse_points_appreciate=\"");t.b(t.v(t.d("pulse_points.display_appreciate",c,p,0)));t.b("\"");t.b("\n" + i);});c.pop();}t.b("  ");if(!t.s(t.f("is_iframe",c,p,1),c,p,1,0,0,"")){t.b("style=\"max-width: ");t.b(t.v(t.f("canvas_width",c,p,0)));t.b("px;\"");};t.b(">");t.b("\n" + i);if(!t.s(t.f("is_iframe",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<project/_blocks/_headerMobile0",c,p,"    "));};t.b("  <div id=\"primary-project-content\" class=\"project-styles");if(!t.s(t.d("styles.spacing.project.top_margin",c,p,1),c,p,1,0,0,"")){t.b(" zero-top");};t.b("\">");t.b("\n" + i);t.b(t.rp("<project/_layout/_canvas1",c,p,"    "));t.b("  </div>");t.b("\n" + i);if(!t.s(t.f("is_iframe",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<project/_layout/_socialSharing2",c,p,"    "));t.b(t.rp("<project/_layout/_ownerBar3",c,p,"    "));t.b(t.rp("<project/_layout/_projectGallery4",c,p,"    "));t.b(t.rp("<project/_layout/_footer5",c,p,"    "));};t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_blocks/_headerMobile0":{name:"project/_blocks/_headerMobile", partials: {}, subs: {  }},"<project/_layout/_canvas1":{name:"project/_layout/_canvas", partials: {}, subs: {  }},"<project/_layout/_socialSharing2":{name:"project/_layout/_socialSharing", partials: {}, subs: {  }},"<project/_layout/_ownerBar3":{name:"project/_layout/_ownerBar", partials: {}, subs: {  }},"<project/_layout/_projectGallery4":{name:"project/_layout/_projectGallery", partials: {}, subs: {  }},"<project/_layout/_footer5":{name:"project/_layout/_footer", partials: {}, subs: {  }}}, subs: {  }}, "{{!inline max-width used to avoid JS flash of unstyled content}}\n<div id=\"project\" class=\"js-project\"\n  data-id=\"{{id}}\"\n  data-mature_content=\"{{mature_content}}\"\n  data-mature_access=\"{{mature_access}}\"\n  data-allow_comments=\"{{allow_comments}}\"\n  data-appreciations=\"{{stats.appreciations}}\"\n  {{#pulse_points}}\n    data-pulse_points_follow=\"{{pulse_points.display_follow}}\"\n    data-pulse_points_appreciate=\"{{pulse_points.display_appreciate}}\"\n  {{/pulse_points}}\n  {{^is_iframe}}style=\"max-width: {{canvas_width}}px;\"{{/is_iframe}}>\n  {{^is_iframe}}\n    {{>project/_blocks/_headerMobile}}\n  {{/is_iframe}}\n  <div id=\"primary-project-content\" class=\"project-styles{{^styles.spacing.project.top_margin}} zero-top{{/styles.spacing.project.top_margin}}\">\n    {{>project/_layout/_canvas}}\n  </div>\n  {{^is_iframe}}\n    {{>project/_layout/_socialSharing}}\n    {{>project/_layout/_ownerBar}}\n    {{>project/_layout/_projectGallery}}\n    {{>project/_layout/_footer}}\n  {{/is_iframe}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_owner": __webpack_require__(124).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project-owner-bar\" class=\"cfix show-on-preview unclickable-mask\">");t.b("\n" + i);t.b("  <div id=\"project-owner-bar-inner\">");t.b("\n" + i);t.b("    <div id=\"project-owner-bar-info\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_owner0",c,p,""));t.b("    </div>");t.b("\n" + i);if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,425,622,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"view-profile light-link hide-phone\">");if(t.s(t.f("translate",c,p,1),c,p,0,509,590,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_view_complete_profile|View <span class=\"complete\">Complete</span> Profile");});c.pop();}t.b(" &rarr;</a>");t.b("\n" + i);});c.pop();}};t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_blocks/_owner0":{name:"project/_blocks/_owner", partials: {}, subs: { "ownerInfoClasses": function(c,p,t,i) {t.b("project-owner-info--owner-bar");},"ownerActionClasses": function(c,p,t,i) {t.b("dark-background");} }}}, subs: {  }}, "<div id=\"project-owner-bar\" class=\"cfix show-on-preview unclickable-mask\">\n  <div id=\"project-owner-bar-inner\">\n    <div id=\"project-owner-bar-info\">\n      {{<project/_blocks/_owner}}\n        {{$ownerInfoClasses}}project-owner-info--owner-bar{{/ownerInfoClasses}}\n        {{$ownerActionClasses}}dark-background{{/ownerActionClasses}}\n      {{/project/_blocks/_owner}}\n    </div>\n    {{^has_multiple_owners}}\n      {{#owners}}\n        <a href=\"{{url}}\" class=\"view-profile light-link hide-phone\">{{#translate}}project_view_complete_profile|View <span class=\"complete\">Complete</span> Profile{{/translate}} &rarr;</a>\n      {{/owners}}\n    {{/has_multiple_owners}}\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_projectCover": __webpack_require__(98).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("hasOtherProjects",c,p,1),c,p,0,21,412,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div id=\"other-projects\" class=\"unclickable-mask\">");t.b("\n" + i);if(t.s(t.f("otherProjects",c,p,1),c,p,0,97,131,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_projectCover0",c,p,"      "));});c.pop();}if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,189,346,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"view-profile show-phone\">");if(t.s(t.f("translate",c,p,1),c,p,0,260,316,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_view_complete_profile_link|View Complete Profile");});c.pop();}t.b(" &rarr;</a>");t.b("\n" + i);});c.pop();}};t.b("  </div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {"<lib/_projectCover0":{name:"lib/_projectCover", partials: {}, subs: {  }}}, subs: {  }}, "{{#hasOtherProjects}}\n  <div id=\"other-projects\" class=\"unclickable-mask\">\n    {{#otherProjects}}\n      {{>lib/_projectCover}}\n    {{/otherProjects}}\n    {{^has_multiple_owners}}{{#owners}}\n      <a href=\"{{url}}\" class=\"view-profile show-phone\">{{#translate}}project_view_complete_profile_link|View Complete Profile{{/translate}} &rarr;</a>\n    {{/owners}}{{/has_multiple_owners}}\n  </div>{{!/#other-projects}}\n{{/hasOtherProjects}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_blocks/_sidebar/_administrativeNotice": __webpack_require__(240).template,"project/_blocks/_sidebar/_header": __webpack_require__(126).template,"project/_blocks/_sidebar/_info": __webpack_require__(127).template,"project/_blocks/_sidebar/_features": __webpack_require__(125).template,"project/_blocks/_sidebar/_tools": __webpack_require__(242).template,"project/_blocks/_sidebar/_buttons": __webpack_require__(241).template,"be/socialShareButtons": __webpack_require__(86).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project-sidebar\" class=\"show-on-preview unclickable-mask js-project-sidebar-wrap\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"js-project-sidebar sticky-project-sidebar\">");t.b("\n" + i);if(t.s(t.f("administrative_notices",c,p,1),c,p,0,182,328,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"sidebar-group hide-sticky administrative-notice\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_sidebar/_administrativeNotice0",c,p,"        "));t.b("      </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("    <div class=\"sidebar-group js-sidebar-group\">");t.b("\n" + i);t.b(t.rp("<project/_blocks/_sidebar/_header1",c,p,"      "));t.b(t.rp("<project/_blocks/_sidebar/_info2",c,p,"      "));t.b(t.rp("<project/_blocks/_sidebar/_features3",c,p,"      "));if(t.s(t.f("has_tools",c,p,1),c,p,0,558,594,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<project/_blocks/_sidebar/_tools4",c,p,""));});c.pop();}t.b(t.rp("<project/_blocks/_sidebar/_buttons5",c,p,"      "));t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"js-social-sharing-sticky social-sharing__sticky hide\" ");if(t.s(t.f("has_admin_sidebar",c,p,1),c,p,0,758,778,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("data-is-admin=\"true\"");});c.pop();}t.b(">");t.b("\n" + i);t.b(t.rp("<be/socialShareButtons6",c,p,""));t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_blocks/_sidebar/_administrativeNotice0":{name:"project/_blocks/_sidebar/_administrativeNotice", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_header1":{name:"project/_blocks/_sidebar/_header", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_info2":{name:"project/_blocks/_sidebar/_info", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_features3":{name:"project/_blocks/_sidebar/_features", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_tools4":{name:"project/_blocks/_sidebar/_tools", partials: {}, subs: {  }},"<project/_blocks/_sidebar/_buttons5":{name:"project/_blocks/_sidebar/_buttons", partials: {}, subs: {  }},"<be/socialShareButtons6":{name:"be/socialShareButtons", partials: {}, subs: { "from": function(c,p,t,i) {t.b("sidebar");} }}}, subs: {  }}, "<div id=\"project-sidebar\" class=\"show-on-preview unclickable-mask js-project-sidebar-wrap\">\n\n  <div class=\"js-project-sidebar sticky-project-sidebar\">\n    {{#administrative_notices}}\n      <div class=\"sidebar-group hide-sticky administrative-notice\">\n        {{>project/_blocks/_sidebar/_administrativeNotice}}\n      </div>\n    {{/administrative_notices}}\n\n    <div class=\"sidebar-group js-sidebar-group\">\n      {{>project/_blocks/_sidebar/_header}}\n      {{>project/_blocks/_sidebar/_info}}\n      {{>project/_blocks/_sidebar/_features}}\n      {{#has_tools}}{{>project/_blocks/_sidebar/_tools}}{{/has_tools}}\n      {{>project/_blocks/_sidebar/_buttons}}\n    </div>\n\n    <div class=\"js-social-sharing-sticky social-sharing__sticky hide\" {{#has_admin_sidebar}}data-is-admin=\"true\"{{/has_admin_sidebar}}>\n      {{<be/socialShareButtons}}\n        {{$from}}sidebar{{/from}}\n      {{/be/socialShareButtons}}\n    </div>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"be/socialShareButtons": __webpack_require__(86).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"social-sharing--project\">");t.b("\n");t.b("\n" + i);t.b(t.rp("<be/socialShareButtons0",c,p,""));t.b("\n" + i);t.b("  <div class=\"social-sharing__links\">");t.b("\n" + i);t.b("    <span class=\"social-sharing__link beicons-pre beicons-pre-add-projects\">");t.b("\n" + i);t.b("      <a class=\"js-action-collection hide-phone\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,330,380,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_add_to_collection_button|Add to Collection");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("      <a class=\"js-action-collection show-phone\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,479,515,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_collection_button|Collection");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("    </span>");t.b("\n");t.b("\n" + i);t.b("    <span class=\"social-sharing__link beicons-pre beicons-pre-link js-social-sharing\">");t.b("\n" + i);t.b("      <a class=\"js-viral-copy-link\">");if(t.s(t.f("translate",c,p,1),c,p,0,684,726,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_social_sharing_copy_link|Copy link");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("    </span>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<be/socialShareButtons0":{name:"be/socialShareButtons", partials: {}, subs: { "from": function(c,p,t,i) {t.b("project_middle");} }}}, subs: {  }}, "<div class=\"social-sharing--project\">\n\n  {{<be/socialShareButtons}}\n    {{$from}}project_middle{{/from}}\n  {{/be/socialShareButtons}}\n\n  <div class=\"social-sharing__links\">\n    <span class=\"social-sharing__link beicons-pre beicons-pre-add-projects\">\n      <a class=\"js-action-collection hide-phone\" data-id=\"{{id}}\">{{#translate}}project_add_to_collection_button|Add to Collection{{/translate}}</a>\n      <a class=\"js-action-collection show-phone\" data-id=\"{{id}}\">{{#translate}}project_collection_button|Collection{{/translate}}</a>\n    </span>\n\n    <span class=\"social-sharing__link beicons-pre beicons-pre-link js-social-sharing\">\n      <a class=\"js-viral-copy-link\">{{#translate}}project_social_sharing_copy_link|Copy link{{/translate}}</a>\n    </span>\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"project-spacer\">");t.b("\n" + i);t.b("  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABXgAAAABCAYAAABkHsaZAAAAH0lEQVRYw+3DAQkAAAwEoe9f+pZjoOCqqaqqqqr67wH2oViJHh1OqwAAAABJRU5ErkJggg==\">");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"project-spacer\">\n  {{!data uri is of public/assets/img/project/spacer.png}}\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABXgAAAABCAYAAABkHsaZAAAAH0lEQVRYw+3DAQkAAAwEoe9f+pZjoOCqqaqqqqr67wH2oViJHh1OqwAAAABJRU5ErkJggg==\">\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"project-module module ");t.b(t.v(t.f("type",c,p,0)));t.b(" project-module-");t.b(t.v(t.f("type",c,p,0)));if(!t.s(t.f("can_access",c,p,1),c,p,1,0,0,"")){t.b(" unsafe");};t.b("\">");t.b("\n" + i);if(t.s(t.f("can_access",c,p,1),c,p,0,123,142,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    ");t.b(t.t(t.f("embed",c,p,0)));t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"project-module module {{type}} project-module-{{type}}{{^can_access}} unsafe{{/can_access}}\">\n  {{#can_access}}\n    {{{embed}}}\n  {{/can_access}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"grid--main js-grid-main\">");t.b("\n" + i);if(t.s(t.f("components",c,p,1),c,p,0,55,346,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"grid__item-container js-grid-item-container\" style=\"width:");t.b(t.v(t.f("flexWidth",c,p,0)));t.b("px; flex-grow:");t.b(t.v(t.f("flexWidth",c,p,0)));t.b(";\" >");t.b("\n" + i);t.b("      <span style=\"padding-bottom:");t.b(t.v(t.f("flexHeight",c,p,0)));t.b("%; display: block;\"></span>");t.b("\n" + i);t.b("      <img class=\"grid__item-image\" src=\"");t.b(t.v(t.d("renditions.source",c,p,0)));t.b("\" alt=\"grid-image\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"grid--main js-grid-main\">\n  {{#components}}\n    <div class=\"grid__item-container js-grid-item-container\" style=\"width:{{flexWidth}}px; flex-grow:{{flexWidth}};\" >\n      <span style=\"padding-bottom:{{flexHeight}}%; display: block;\"></span>\n      <img class=\"grid__item-image\" src=\"{{renditions.source}}\" alt=\"grid-image\">\n    </div>\n  {{/components}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_modules/_lightbox/_content": __webpack_require__(257).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"project-module module ");t.b(t.v(t.f("type",c,p,0)));t.b(" project-module-");t.b(t.v(t.f("type",c,p,0)));if(t.s(t.f("full_bleed",c,p,1),c,p,0,81,118,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" image-full project-module-image-full");});c.pop();}if(!t.s(t.f("can_access",c,p,1),c,p,1,0,0,"")){t.b(" unsafe");};t.b("\">");t.b("\n" + i);t.b("  <div class=\"js-project-lightbox-link project-module-image-inner-wrap\">");t.b("\n" + i);t.b(t.rp("<project/_modules/_lightbox/_content0",c,p,"    "));if(!t.s(t.f("is_feature_queue_admin",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("can_access",c,p,1),c,p,0,344,1128,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_lazy",c,p,1),c,p,0,365,869,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("picture",c,p,1),c,p,0,388,848,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <img");t.b("\n" + i);t.b("              class=\"js-lazy\"");t.b("\n" + i);t.b("              src=\"");t.b(t.v(t.f("IMAGESURL",c,p,0)));t.b("site/blank.png\"");t.b("\n" + i);t.b("              data-src=\"");t.b(t.v(t.d("img.src",c,p,0)));t.b("\"");t.b("\n" + i);t.b("              data-srcset=\"");if(t.s(t.f("sources",c,p,1),c,p,0,560,582,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("srcset",c,p,0)));t.b(" ");t.b(t.v(t.f("width",c,p,0)));t.b("w,");});c.pop();}t.b("\"");t.b("\n" + i);t.b("              data-sizes=\"(max-width: ");t.b(t.v(t.d("img.width",c,p,0)));t.b("px) 100vw, ");t.b(t.v(t.d("img.width",c,p,0)));t.b("px\"");t.b("\n" + i);t.b("              width=\"");t.b(t.v(t.d("img.width",c,p,0)));t.b("\"");t.b("\n" + i);t.b("              height=\"0\"");t.b("\n" + i);t.b("              style=\"padding-bottom: ");t.b(t.v(t.f("aspect_ratio",c,p,0)));t.b("; background: rgba(0, 0, 0, 0.03)\"");t.b("\n" + i);t.b("            >");t.b("\n" + i);});c.pop();}});c.pop();}if(!t.s(t.f("is_lazy",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("picture",c,p,1),c,p,0,925,1088,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <img src=\"");t.b(t.v(t.d("img.src",c,p,0)));t.b("\" srcset=\"");if(t.s(t.f("sources",c,p,1),c,p,0,981,1003,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("srcset",c,p,0)));t.b(" ");t.b(t.v(t.f("width",c,p,0)));t.b("w,");});c.pop();}t.b("\" sizes=\"(max-width: ");t.b(t.v(t.d("img.width",c,p,0)));t.b("px) 100vw, ");t.b(t.v(t.d("img.width",c,p,0)));t.b("px\">");t.b("\n" + i);});c.pop();}};});c.pop();}};if(t.s(t.f("is_feature_queue_admin",c,p,1),c,p,0,1207,1400,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("picture",c,p,1),c,p,0,1226,1383,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <img src=\"");t.b(t.v(t.d("img.src",c,p,0)));t.b("\" srcset=\"");if(t.s(t.f("sources",c,p,1),c,p,0,1280,1302,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("srcset",c,p,0)));t.b(" ");t.b(t.v(t.f("width",c,p,0)));t.b("w,");});c.pop();}t.b("\" sizes=\"(max-width: ");t.b(t.v(t.d("img.width",c,p,0)));t.b("px) 100vw, ");t.b(t.v(t.d("img.width",c,p,0)));t.b("px\">");t.b("\n" + i);});c.pop();}});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<project/_modules/_lightbox/_content0":{name:"project/_modules/_lightbox/_content", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"project-module module {{type}} project-module-{{type}}{{#full_bleed}} image-full project-module-image-full{{/full_bleed}}{{^can_access}} unsafe{{/can_access}}\">\n  <div class=\"js-project-lightbox-link project-module-image-inner-wrap\">\n    {{>project/_modules/_lightbox/_content}}\n    {{^is_feature_queue_admin}}\n      {{#can_access}}\n        {{#is_lazy}}\n          {{#picture}}\n            <img\n              class=\"js-lazy\"\n              src=\"{{IMAGESURL}}site/blank.png\"\n              data-src=\"{{img.src}}\"\n              data-srcset=\"{{#sources}}{{srcset}} {{width}}w,{{/sources}}\"\n              data-sizes=\"(max-width: {{img.width}}px) 100vw, {{img.width}}px\"\n              width=\"{{img.width}}\"\n              height=\"0\"\n              style=\"padding-bottom: {{aspect_ratio}}; background: rgba(0, 0, 0, 0.03)\"\n            >\n          {{/picture}}\n        {{/is_lazy}}\n        {{^is_lazy}}\n          {{#picture}}\n            <img src=\"{{img.src}}\" srcset=\"{{#sources}}{{srcset}} {{width}}w,{{/sources}}\" sizes=\"(max-width: {{img.width}}px) 100vw, {{img.width}}px\">\n          {{/picture}}\n        {{/is_lazy}}\n      {{/can_access}}\n    {{/is_feature_queue_admin}}\n    {{#is_feature_queue_admin}}\n      {{#picture}}\n          <img src=\"{{img.src}}\" srcset=\"{{#sources}}{{srcset}} {{width}}w,{{/sources}}\" sizes=\"(max-width: {{img.width}}px) 100vw, {{img.width}}px\">\n      {{/picture}}\n    {{/is_feature_queue_admin}}\n  </div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_profileListItem": __webpack_require__(77).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"lightbox-caption lightbox-extra js-lightbox-caption\">");t.b("\n" + i);if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,108,273,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_profileListItem0",c,p,""));});c.pop();}};if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,338,1073,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"project-owners-container\">");t.b("\n" + i);t.b("    <div class=\"project-owner-avatars\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,437,509,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <img src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" class=\"multiple-owner-avatar\">");t.b("\n" + i);});c.pop();}t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"project-details multiple-owners-details\">");t.b("\n" + i);t.b("      <div class=\"tooltip--container\">");t.b("\n" + i);t.b("         <a class=\"multiple-owners-name profile-list-name\">");if(t.s(t.f("translate",c,p,1),c,p,0,702,741,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_multiple_owners|Multiple Owners");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("          <div class=\"tooltip--main\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,819,955,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_profileListItem1",c,p,""));});c.pop();}t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("      <div class=\"project-name\">");t.b(t.v(t.d("project.name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_profileListItem0":{name:"lib/_profileListItem", partials: {}, subs: { "attr": function(c,p,t,i) {t.b("data-from=\"lightbox\"");},"classes": function(c,p,t,i) {t.b("profile-item--light");} }},"<lib/_profileListItem1":{name:"lib/_profileListItem", partials: {}, subs: { "attr": function(c,p,t,i) {t.b("data-from=\"lightbox\"");} }}}, subs: {  }}, "<div class=\"lightbox-caption lightbox-extra js-lightbox-caption\">\n  {{^has_multiple_owners}}\n    {{#owners}}\n     {{<lib/_profileListItem}}\n       {{$attr}}data-from=\"lightbox\"{{/attr}}\n        {{$classes}}profile-item--light{{/classes}}\n     {{/lib/_profileListItem}}\n    {{/owners}}\n  {{/has_multiple_owners}}\n  {{#has_multiple_owners}}\n  <div class=\"project-owners-container\">\n    <div class=\"project-owner-avatars\">\n      {{#owners}}\n        <img src=\"{{images.115}}\" class=\"multiple-owner-avatar\">\n      {{/owners}}\n    </div>\n    <div class=\"project-details multiple-owners-details\">\n      <div class=\"tooltip--container\">\n         <a class=\"multiple-owners-name profile-list-name\">{{#translate}}project_multiple_owners|Multiple Owners{{/translate}}</a>\n          <div class=\"tooltip--main\">\n          {{#owners}}\n            {{<lib/_profileListItem}}\n              {{$attr}}data-from=\"lightbox\"{{/attr}}\n          {{/lib/_profileListItem}}\n        {{/owners}}\n        </div>\n      </div>\n\n      <div class=\"project-name\">{{project.name}}</div>\n    </div>\n  </div>\n  {{/has_multiple_owners}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"project/_modules/_lightbox/_caption": __webpack_require__(256).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<script type=\"text/html\" class=\"js-lightbox-slide-content\">");t.b("\n" + i);t.b("  ");if(t.s(t.f("picture_largest",c,p,1),c,p,0,82,221,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<img src=\"");t.b(t.v(t.d("img.src",c,p,0)));t.b("\" srcset=\"");if(t.s(t.f("sources",c,p,1),c,p,0,125,147,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("srcset",c,p,0)));t.b(" ");t.b(t.v(t.f("width",c,p,0)));t.b("w,");});c.pop();}t.b("\" sizes=\"(max-width: ");t.b(t.v(t.d("img.width",c,p,0)));t.b("px) 100vw, ");t.b(t.v(t.d("img.width",c,p,0)));t.b("px\">");});c.pop();}t.b("\n" + i);t.b(t.rp("<project/_modules/_lightbox/_caption0",c,p,"  "));t.b("</script>");t.b("\n");return t.fl(); },partials: {"<project/_modules/_lightbox/_caption0":{name:"project/_modules/_lightbox/_caption", partials: {}, subs: {  }}}, subs: {  }}, "<script type=\"text/html\" class=\"js-lightbox-slide-content\">\n  {{#picture_largest}}<img src=\"{{img.src}}\" srcset=\"{{#sources}}{{srcset}} {{width}}w,{{/sources}}\" sizes=\"(max-width: {{img.width}}px) 100vw, {{img.width}}px\">{{/picture_largest}}\n  {{>project/_modules/_lightbox/_caption}}\n</script>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_profileListItem": __webpack_require__(77).template,"lib/_projectCover": __webpack_require__(98).template,"_icons/_rotate": __webpack_require__(220).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<script type=\"text/html\" class=\"js-lightbox-overlay-slide\">");t.b("\n" + i);t.b("  <div class=\"lightbox-overlay-slide\">");t.b("\n" + i);t.b("    <div class=\"js-last-slide last-slide\"></div>");t.b("\n" + i);if(t.s(t.f("hasOtherProjects",c,p,1),c,p,0,173,1357,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"other-projects\">");t.b("\n" + i);t.b("        <div class=\"owners\">");t.b("\n" + i);t.b("          <span class=\"owners__by\">");if(t.s(t.f("translate",c,p,1),c,p,0,287,330,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_other_projects_by|Other projects by");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("          <div class=\"owners__name tooltip--container\">");t.b("\n" + i);if(t.s(t.f("has_multiple_owners",c,p,1),c,p,0,442,827,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <span class=\"multiple-owners-name\">");if(t.s(t.f("translate",c,p,1),c,p,0,504,543,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_multiple_owners|Multiple Owners");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("            <div class=\"tooltip--main\">");t.b("\n" + i);if(t.s(t.f("owners",c,p,1),c,p,0,630,786,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_profileListItem0",c,p,""));});c.pop();}t.b("            </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("has_multiple_owners",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("owners",c,p,1),c,p,0,910,1027,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <a class=\"owners-link js-mini-profile\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a>");t.b("\n" + i);});c.pop();}};t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n");t.b("\n" + i);t.b("        <div class=\"project-covers\">");t.b("\n" + i);if(t.s(t.f("otherProjects",c,p,1),c,p,0,1172,1306,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_projectCover1",c,p,""));});c.pop();}t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("hasOtherProjects",c,p,1),c,p,1,0,0,"")){t.b("    <div class=\"view-again-container\">");t.b("\n" + i);t.b(t.rp("<_icons/_rotate2",c,p,"      "));t.b("      <a class=\"view-again js-view-again\">");if(t.s(t.f("translate",c,p,1),c,p,0,1526,1563,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("view_project_again|View project again");});c.pop();}t.b("</a>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);};t.b("  </div>");t.b("\n" + i);t.b("</script>");t.b("\n");return t.fl(); },partials: {"<lib/_profileListItem0":{name:"lib/_profileListItem", partials: {}, subs: { "attr": function(c,p,t,i) {t.b("data-from=\"lightbox\"");} }},"<lib/_projectCover1":{name:"lib/_projectCover", partials: {}, subs: { "attr": function(c,p,t,i) {t.b("data-from=\"lightbox\"");} }},"<_icons/_rotate2":{name:"_icons/_rotate", partials: {}, subs: {  }}}, subs: {  }}, "<script type=\"text/html\" class=\"js-lightbox-overlay-slide\">\n  <div class=\"lightbox-overlay-slide\">\n    <div class=\"js-last-slide last-slide\"></div>\n    {{#hasOtherProjects}}\n      <div class=\"other-projects\">\n        <div class=\"owners\">\n          <span class=\"owners__by\">{{#translate}}project_other_projects_by|Other projects by{{/translate}}</span>\n          <div class=\"owners__name tooltip--container\">\n          {{#has_multiple_owners}}\n            <span class=\"multiple-owners-name\">{{#translate}}project_multiple_owners|Multiple Owners{{/translate}}</span>\n            <div class=\"tooltip--main\">\n              {{#owners}}\n                {{<lib/_profileListItem}}\n                  {{$attr}}data-from=\"lightbox\"{{/attr}}\n                {{/lib/_profileListItem}}\n              {{/owners}}\n            </div>\n          {{/has_multiple_owners}}\n          {{^has_multiple_owners}}\n            {{#owners}}\n            <a class=\"owners-link js-mini-profile\" data-id=\"{{id}}\" href=\"{{url}}\">{{display_name}}</a>\n            {{/owners}}\n          {{/has_multiple_owners}}\n          </div>\n        </div>\n\n        <div class=\"project-covers\">\n          {{#otherProjects}}\n            {{<lib/_projectCover}}\n              {{$attr}}data-from=\"lightbox\"{{/attr}}\n            {{/lib/_projectCover}}\n          {{/otherProjects}}\n        </div>\n      </div>\n    {{/hasOtherProjects}}\n    {{^hasOtherProjects}}\n    <div class=\"view-again-container\">\n      {{>_icons/_rotate}}\n      <a class=\"view-again js-view-again\">{{#translate}}view_project_again|View project again{{/translate}}</a>\n    </div>\n    {{/hasOtherProjects}}\n  </div>\n</script>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("can_access",c,p,1),c,p,0,15,154,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"project-module module project-module-text text align-");t.b(t.v(t.f("alignment",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <div class=\"main-text\">");t.b("\n" + i);t.b("    ");t.b(t.t(t.f("text",c,p,0)));t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }}, "{{#can_access}}\n<div class=\"project-module module project-module-text text align-{{alignment}}\">\n  <div class=\"main-text\">\n    {{{text}}}\n  </div>\n</div>\n{{/can_access}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(25), __webpack_require__(47), __webpack_require__(74) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e, i, n) {
    "use strict";
    return e.extend({
        init: function() {
            this._super.apply(this, arguments), this.on("postrender", this._mapEvents);
        },
        template: function(t) {
            return this.mustache && this.mustache(t, this.partials);
        },
        destroy: function() {
            this._undelegateEvents(), this._super();
        }
    }, {
        domify: t
    }).mixin(i).mixin(n);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(56)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./jquery.fancybox.css", function() {
			var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./jquery.fancybox.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(66) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    return e = e.get("adobeanalytics"), {
        page: function() {
            if ("undefined" != typeof s_adobe) try {
                s_adobe.pageName = (window.location.hostname + window.location.pathname).replace(/\//g, ":").replace(/^www\./, ""), 
                s_adobe.t();
            } catch (a) {
                e.error(a);
            }
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getRequirements(e) {
    if (!e.styles) return e;
    var t = e.styles.local || [], i = new _promise2.default();
    return t = t.filter(function(e) {
        return e;
    }), requirejs(t.map(function(e) {
        return "css!styles/" + e;
    }), i.resolve.bind(null, e), i.reject), i.thenable();
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _promise = __webpack_require__(49), _promise2 = _interopRequireDefault(_promise), _pubsub = __webpack_require__(22), _pubsub2 = _interopRequireDefault(_pubsub), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _Dialog = __webpack_require__(89), _Dialog2 = _interopRequireDefault(_Dialog), constructor = _Dialog2.default.extend({
    prefilter: function(e) {
        return e;
    },
    _initView: function() {
        this._super.apply(this, arguments), this._view && this.listenTo(this._view, "exit", function() {
            this.trigger("exit");
        });
    },
    open: function(e) {
        var t = this;
        this.trigger("preload", e);
        var i = (0, _xhr2.default)(e).then(this.prefilter).then(getRequirements).then(function(e) {
            t._model._data = {}, t._model.set(e), t.trigger("dataReceived", e);
        }).then(this.render.bind(this)), r = this.trigger.bind(this, "postload");
        return i.then(r, r), i;
    },
    close: function() {
        return this.visible() && this._view.hide(!0), this;
    },
    render: function() {
        var e, t;
        return this._view.$view || (e = document.body), t = this._view.render(e), this._view.show(), 
        t;
    },
    reset: function() {
        this.visible() && (this._view.hide(!0), this._view.destroy());
    },
    visible: function() {
        return this._view.$view && this._view.$view.hasClass("shown");
    }
}).mixin(_pubsub2.default);

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _EntityPopup = __webpack_require__(262), _EntityPopup2 = _interopRequireDefault(_EntityPopup), _Project = __webpack_require__(264), _Project2 = _interopRequireDefault(_Project), constructor = _EntityPopup2.default.extend({
    prefilter: function(e) {
        var t;
        return e.styles && (t = [].concat(e.styles.project, e.styles.local), e.styles.local = t), 
        e;
    },
    open: function() {
        return this._view && this._view.block(!0), this._super.apply(this, arguments);
    }
}, {
    VIEW_CLASS: {
        desktop: _Project2.default
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _media = __webpack_require__(35), _media2 = _interopRequireDefault(_media), _adobeanalytics = __webpack_require__(261), _adobeanalytics2 = _interopRequireDefault(_adobeanalytics), _Popup = __webpack_require__(23), _Popup2 = _interopRequireDefault(_Popup), _style = __webpack_require__(266), _style2 = _interopRequireDefault(_style), _bindings = __webpack_require__(160), _bindings2 = _interopRequireDefault(_bindings), _project = __webpack_require__(227), _project2 = _interopRequireDefault(_project);

__webpack_require__(130);

var constructor = _Popup2.default.extend({
    $styles: null,
    init: function() {
        this._super.apply(this, arguments), this.on("prerender", function() {
            document.title = this._model.get("title"), this.$styles = this.$styles || (0, _jquery2.default)("<style>", {
                type: "text/css"
            }).appendTo("head"), _style2.default.set(this.$styles[0], this._model.get("styles").inline[0]), 
            this.$view && this.$view.parent().length && this.innerDestroy();
        }, this);
    },
    destroy: function() {
        this.$styles && (this.$styles.remove(), this.$styles = null), _media2.default.off(null, null, this), 
        this.$view && (this.$view.remove(), this.$view = null);
    },
    innerInit: function() {
        this._bindings = _bindings2.default.init(this.$popup.find(".js-project-wrap"), this.$popup, !0);
    },
    innerDestroy: function() {
        this._bindings.destroy();
    },
    mustache: _project2.default,
    template: function() {
        var e = this._super.apply(this, arguments);
        return e = e.filter(function() {
            return "SCRIPT" !== this.tagName;
        }), e.filter(".popup").prepend(this._model.get("upsell")), e;
    },
    templateData: function() {
        return _jquery2.default.extend({
            toolbar: !1,
            classes: [ "project-view", "js-project-popup" ]
        }, this._super().view);
    },
    rendered: function() {
        this.$popup = this.$view.filter(".popup"), this._bindBlockingDivHide(), this._super(), 
        _jquery2.default.fancybox.hideLoading(), _adobeanalytics2.default.page();
    },
    _bindBlockingDivHide: function() {
        var e = this;
        this.$popup.find(".action-login").addClass("action-login-noremoval"), this.$popup.find(".js-project-sidebar-wrap, .js-project").on("click", function(t) {
            t.originalEvent.origin = e;
        }), this.$popup.find(".popup-inner-wrap").on("click", function(t) {
            t.originalEvent.origin !== e && e.hide();
        });
    },
    show: function() {
        this._super(), this.block(!0), this.$view.addClass("shown"), this.innerInit(), _media2.default.on("desktop:exit", function() {
            this.hide();
        }, this);
    },
    hide: function(e) {
        this.$view && (this._super(), _media2.default.off(null, null, this), this.block(!1), 
        this.$view.removeClass("shown"), this.innerDestroy(), e !== !0 && this.trigger("exit"));
    },
    block: function(e) {
        (0, _jquery2.default)(document.body).toggleClass("project-popup-open", e).add("html").css("overflow", e ? "hidden" : "");
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, t) {
    var r, i;
    return r = function(r) {
        var i = "function" == typeof e ? e.call(this) : e;
        _history2.default[(t ? "replace" : "push") + "State"](i || {}, document.title, r);
    }, i = function(e) {
        if (!(0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)) {
            var t = e.currentTarget.href;
            _window2.default.location.href !== t && (e.preventDefault(), r.call(this, t));
        }
    }, i.submit = r, i;
};

var _history = __webpack_require__(52), _history2 = _interopRequireDefault(_history), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window);

module.exports = exports.default;

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function add(e, t) {
    "undefined" != typeof e.styleSheet ? e.styleSheet.cssText = (e.styleSheet.cssText || "") + t : (0, 
    _jquery2.default)(e).append(t);
}

function set(e, t) {
    "string" == typeof t && t.length && (e.styleSheet && "undefined" != typeof e.styleSheet.cssText ? e.styleSheet.cssText = t : e.innerHTML = t);
}

function get(e) {
    return e.styleSheet && "undefined" != typeof e.styleSheet.cssText ? e.styleSheet.cssText : e.innerHTML;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery);

exports.default = {
    add: add,
    set: set,
    get: get
}, module.exports = exports.default;

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _has = __webpack_require__(96), _has2 = _interopRequireDefault(_has), _log = __webpack_require__(66), _log2 = _interopRequireDefault(_log), _pubsub = __webpack_require__(22), _pubsub2 = _interopRequireDefault(_pubsub), _media = __webpack_require__(35), _media2 = _interopRequireDefault(_media), _history = __webpack_require__(52), _history2 = _interopRequireDefault(_history), _onhistory = __webpack_require__(265), _onhistory2 = _interopRequireDefault(_onhistory), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window);

__webpack_require__(130);

var log = _log2.default.get("popupSession"), stateChange = function(t) {
    if (!this.singleton || !this.singleton._view) return void this._setEntrance();
    var e = _history2.default.get("state");
    e && e[t] ? _media2.default.is("desktop") ? this.show(_window2.default.getLocation("href")) : _window2.default.replaceLocation(_window2.default.getLocation("href")) : this.singleton.reset();
}, makeState = function(t) {
    var e = {};
    return e[t] = !0, e;
}, $blocking = (0, _jquery2.default)('<div class="blocking-div">'), api = {
    init: function(t) {
        if (this.singleton) return this.onhist;
        var e = (0, _onhistory2.default)(makeState.bind(this, this.entity)), i = this, o = !1;
        return this.onhist = function() {
            _media2.default.is("desktop") && !(0, _has2.default)("touch") && (o || i._setEntrance(), 
            e.apply(this, arguments), i.stateChange());
        }, this.singleton = new this.Dialog("object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) ? t : void 0), 
        this.singleton.on("preload", function() {
            o = !0, $blocking.appendTo(document.body), _jquery2.default.fancybox.showLoading();
        }).on("postload", function() {
            $blocking.remove();
        }).on("exit", function() {
            _history2.default.pushState(this.entrance.state, this.entrance.title, this.entrance.url), 
            this.stateChange(), o = !1;
        }, this), this.relay(this.singleton, "dataReceived postload"), this._setEntrance(), 
        this.stateChange = stateChange.bind(this, this.entity), (0, _jquery2.default)(window).on("popstate", this.stateChange), 
        (0, _jquery2.default)(document.body).on("click", this.selector, this.onhist), this.onhist;
    },
    show: function(t) {
        var e = this;
        return this.trigger("prerender"), this.singleton.close(), this.singleton.open(t).then(function(t) {
            e.trigger("postrender", t);
        }, function(e) {
            e && 404 === e.status ? (_history2.default.back(), _window2.default.setLocation(t)) : "readyState" in e && 0 === e.readyState || log.error(e);
        });
    },
    destroy: function() {
        this.singleton && this.singleton.destroy(), this.off(), (0, _jquery2.default)(document.body).off("click", this.onhist);
    },
    _setEntrance: function() {
        this.entrance = {
            state: _history2.default.getState(),
            title: document.title,
            url: _window2.default.getLocation("href")
        };
    }
};

exports.default = _jquery2.default.extend(api, _pubsub2.default), module.exports = exports.default;

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"crumb");if(t.s(t.f("type",c,p,1),c,p,0,26,41,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" crumb-");t.b(t.v(t.f("type",c,p,0)));});c.pop();}t.b(" js-crumb listselector-selection ui-textboxlist-bit left\"");if(t.s(t.f("id",c,p,1),c,p,0,114,131,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");});c.pop();}if(t.s(t.f("key",c,p,1),c,p,0,146,165,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" data-key=\"");t.b(t.v(t.f("key",c,p,0)));t.b("\"");});c.pop();}t.b(">");t.b("\n" + i);t.b("  <div class=\"listselector-selection-display ui-textboxlist-selection-display\">");t.b(t.v(t.f("value",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("  <div class=\"closeX close-btn ui-textboxlist-deletebutton js-remove\">X</div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"crumb{{#type}} crumb-{{type}}{{/type}} js-crumb listselector-selection ui-textboxlist-bit left\"{{#id}} data-id=\"{{id}}\"{{/id}}{{#key}} data-key=\"{{key}}\"{{/key}}>\n  <div class=\"listselector-selection-display ui-textboxlist-selection-display\">{{value}}</div>\n  <div class=\"closeX close-btn ui-textboxlist-deletebutton js-remove\">X</div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _Controller = __webpack_require__(29), _Controller2 = _interopRequireDefault(_Controller), _pubsub = __webpack_require__(22), _pubsub2 = _interopRequireDefault(_pubsub), _Breadcrumbs = __webpack_require__(291), _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

exports.default = _Controller2.default.extend({
    init: function(e) {
        this._initView(this.constructor.VIEW_CLASS, e);
    },
    nubbies: {},
    bind: function(e) {
        this._model = e, this.listenTo(e, "all", function() {
            this.render(e.data());
        }).listenTo(this._view, "all", this.trigger).listenTo(this._view, "remove", this.reset).listenTo(this._view, "removeall", this.removeAll), 
        this.render(e.data());
    },
    reset: function(e) {
        var t = e.key || e, i = this.nubbies[t];
        i && ("function" == typeof i.default ? this._model.set(i.default(e)) : this._model.set(t, i.default));
    },
    removeAll: function() {
        Object.keys(this._model.data()).filter(this.nubbies.hasOwnProperty.bind(this.nubbies)).forEach(this.reset, this);
    },
    destroy: function() {
        this._view.destroy(), this._view = null, this.stopListening();
    },
    render: function(e) {
        var t = Object.keys(e).filter(this.nubbies.hasOwnProperty.bind(this.nubbies)).map(function(t) {
            var i, r, n = e[t], o = this.nubbies[t];
            if (n && o) return i = "function" == typeof o ? o.call(t, n) : o[n], r = {
                id: n,
                key: t,
                type: t
            }, "string" == typeof i ? (r.value = i, r) : Array.isArray(i) ? i : "object" === ("undefined" == typeof i ? "undefined" : _typeof(i)) ? (0, 
            _extend2.default)(r, i) : i;
        }, this).filter(Boolean);
        this._view.render({
            label: this.label,
            breadcrumbs: Array.prototype.concat.apply([], t),
            empty: !!t.length
        });
    }
}, {
    VIEW_CLASS: _Breadcrumbs2.default,
    pipeMap: function(e, t) {
        return t.split("|").filter(Boolean).map(function(t) {
            return {
                id: t,
                key: this,
                type: this,
                value: e.call(this, t)
            };
        }, this);
    },
    resetPiped: function(e) {
        var t, i, r = {};
        return "string" == typeof e ? (r[e] = "", r) : (t = this.get(e.key).split("|"), 
        i = t.indexOf(String(e.id)), i !== -1 && t.splice(i, 1), r[e.key] = t.join("|"), 
        r);
    }
}).mixin(_pubsub2.default), module.exports = exports.default;

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_crumb": __webpack_require__(275).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"filter-crumbs\" class=\"listselector_selections\">");t.b("\n" + i);t.b("  ");if(t.s(t.f("label",c,p,1),c,p,0,69,116,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span class=\"selections-label\">");t.b(t.v(t.f("label",c,p,0)));t.b("</span>");});c.pop();}t.b("\n" + i);if(t.s(t.f("breadcrumbs",c,p,1),c,p,0,145,167,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_crumb0",c,p,"  "));});c.pop();}t.b("  <span class=\"clear-all-crumbs js-remove-all beicons-pre beicons-pre-x-circle\">");if(t.s(t.f("translate",c,p,1),c,p,0,278,328,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_label_clear_all_filters|Clear All Filters");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_crumb0":{name:"lib/_crumb", partials: {}, subs: {  }}}, subs: {  }}, "<div id=\"filter-crumbs\" class=\"listselector_selections\">\n  {{#label}}<span class=\"selections-label\">{{label}}</span>{{/label}}\n  {{#breadcrumbs}}\n  {{> lib/_crumb}}\n  {{/breadcrumbs}}\n  <span class=\"clear-all-crumbs js-remove-all beicons-pre beicons-pre-x-circle\">{{#translate}}discover_label_clear_all_filters|Clear All Filters{{/translate}}</span>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Element = __webpack_require__(57), _Element2 = _interopRequireDefault(_Element), _breadcrumbs = __webpack_require__(288), _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

exports.default = _Element2.default.extend({
    mustache: _breadcrumbs2.default,
    template: function(e) {
        return (0, _jquery2.default)(this.mustache(e));
    },
    rendered: function() {
        var e = this, r = this.$view.find(".js-crumb").on("click", ".js-remove", function(r) {
            e.trigger("remove", (0, _jquery2.default)(r.delegateTarget).data());
        });
        this.$view.find(".js-remove-all").on("click", this.trigger.bind(this, "removeall")), 
        this.$parent.toggleClass("hide", !r.length);
    }
}), module.exports = exports.default;

/***/ },

/***/ 294:
/***/ function(module, exports) {

!function(t) {
    var e = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: ""
    }, i = (t(document), []), n = function(e) {
        for (var n = e.scrollTop(), o = t(window).height(), s = e.is(t(window)) ? t(document).height() : e.height(), a = s - o, c = n > a ? a - n : 0, r = 0; r < i.length; r++) {
            var p = i[r], l = e.is(t(window)) ? p.stickyWrapper.offset().top : p.stickyWrapper.offset().top - e.offset().top, d = l - p.topSpacing - c;
            if (n <= d) null !== p.currentTop && (p.stickyElement.css("position", "").css("top", ""), 
            p.stickyElement.removeClass(p.className), p.currentTop = null); else {
                var h = s - p.stickyElement.outerHeight() - p.topSpacing - p.bottomSpacing - n - c;
                h < 0 ? h += p.topSpacing : h = p.topSpacing, p.currentTop != h && (p.stickyElement.css("position", "fixed").css("top", h), 
                "undefined" != typeof p.getWidthFrom && p.stickyElement.css("width", t(p.getWidthFrom).width()), 
                p.stickyElement.addClass(p.className), p.currentTop = h);
            }
        }
    }, o = {
        init: function(o, s) {
            s = s || t(window);
            var a = t.extend({}, e, o);
            return s.each(function() {
                this.addEventListener ? this.addEventListener("scroll", function() {
                    n(s);
                }, !1) : this.attachEvent && this.attachEvent("onscroll", function() {
                    n(s);
                });
            }), this.each(function() {
                var e = t(this), n = e.attr("id"), o = t("<div></div>").attr("id", n + "-sticky-wrapper").addClass(a.wrapperClassName);
                e.wrapAll(o), a.center && e.parent().css({
                    width: e.outerWidth(),
                    marginLeft: "auto",
                    marginRight: "auto"
                }), "right" == e.css("float") && e.css({
                    float: "none"
                }).parent().css({
                    float: "right"
                });
                var s = e.parent();
                s.css("height", e.outerHeight());
                var c = {
                    topSpacing: a.topSpacing,
                    bottomSpacing: a.bottomSpacing,
                    stickyElement: e,
                    currentTop: null,
                    stickyWrapper: s,
                    className: a.className,
                    getWidthFrom: a.getWidthFrom
                };
                e.data("sticky", c), i.push(c);
            });
        },
        update: function(e) {
            e = e || t(window), n(e);
        }
    };
    t.fn.sticky = function(e) {
        return o[e] ? o[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : o.init.apply(this, arguments);
    }, t(function() {
        setTimeout(function() {
            n(t(window));
        }, 0);
    });
}(jQuery);

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(3), __webpack_require__(47), __webpack_require__(97), __webpack_require__(29), __webpack_require__(26) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e, t, n, i, r, o) {
    "use strict";
    function d(e, t) {
        return "undefined" == typeof t || "object" == typeof e;
    }
    return r.extend({
        init: function(n, i) {
            var r, o;
            d(n, i) && (i = n, n = void 0), "string" == typeof i && (o = e(i), r = o[0]), i instanceof e && (o = i, 
            r = o[0]), i instanceof window.Element && (r = i, o = e(r)), o && (i = t({}, r.dataset || o.data())), 
            this._super(n, i), this._view.$view = o, o && this._view.trigger("postrender", o);
        }
    }, {
        VIEW_CLASS: o
    }).mixin(n).mixin(i);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(43) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t) {
    "use strict";
    function e() {
        return !1;
    }
    return t.widget("be.autosuggest", t.ui.autocomplete, {
        options: {
            focus: e,
            noMatchTemplate: null,
            hasMatch: function(t) {
                var e = this.term.toLowerCase();
                return t.some(function(t) {
                    return e === String(t.label || t.value || t).toLowerCase();
                });
            },
            prepend: !1
        },
        _noMatch: function(e, s) {
            var n = this.options.noMatchTemplate, i = this.options.prepend;
            t.isFunction(n) && t(n({
                term: this.term,
                items: s
            }))[i ? "prependTo" : "appendTo"](this.menu.element).on("mouseover", function() {
                t(this).parent().find(".ui-state-focus").removeClass("ui-state-focus");
            });
        },
        _hasNoMatch: function(t) {
            return this.options.noMatchTemplate && !this.options.hasMatch.call(this, t);
        },
        __response: function(t) {
            !this._hasNoMatch(t) || t && t.length || this.options.disabled || this.cancelSearch ? this._super(t) : (t = [], 
            this._trigger("response", null, {
                content: t
            }), this._suggest(t), this._trigger("open"));
        },
        _suggest: function(t) {
            this._super(t), this._hasNoMatch(t) && this._noMatch(t);
        },
        _create: function() {
            this._super(), this.options.messages && this.options.messages.placeholder && this.element.prop("placeholder", this.options.messages.placeholder);
        },
        _resizeMenu: function() {
            var e = this.menu.element, s = this.options.width;
            t.isNumeric(s) ? e.outerWidth(s) : this._super();
        },
        _renderItem: function(e, s) {
            var n = this.options.itemTemplate;
            return t.isFunction(n) ? t(n(s)).appendTo(e) : this._super(e, s);
        },
        clear: function() {
            this._value("");
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(15), __webpack_require__(117), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(jQuery);
}(function(e) {
    return e.widget("ui.slider", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
            this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), 
            this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function() {
            var t, i, s = this.options, a = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), n = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>", h = [];
            for (i = s.values && s.values.length || 1, a.length > i && (a.slice(i).remove(), 
            a = a.slice(0, i)), t = a.length; t < i; t++) h.push(n);
            this.handles = a.add(e(h.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), 
            this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t);
            });
        },
        _createRange: function() {
            var t = this.options, i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [ t.values[0], t.values[0] ] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), 
            this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), 
            this.range = null);
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(t) {
            var i, s, a, n, h, l, o, u, r = this, d = this.options;
            return !d.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            }, s = this._normValueFromMouse(i), a = this._valueMax() - this._valueMin() + 1, 
            this.handles.each(function(t) {
                var i = Math.abs(s - r.values(t));
                (a > i || a === i && (t === r._lastChangedValue || r.values(t) === d.min)) && (a = i, 
                n = e(this), h = t);
            }), l = this._start(t, h), l !== !1 && (this._mouseSliding = !0, this._handleIndex = h, 
            n.addClass("ui-state-active").focus(), o = n.offset(), u = !e(t.target).parents().addBack().is(".ui-slider-handle"), 
            this._clickOffset = u ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - o.left - n.width() / 2,
                top: t.pageY - o.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, h, s), this._animateOff = !0, 
            !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            }, i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1;
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), 
            this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, 
            this._animateOff = !1, !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(e) {
            var t, i, s, a, n;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, 
            i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
            s = i / t, s > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), 
            a = this._valueMax() - this._valueMin(), n = this._valueMin() + s * a, this._trimAlignValue(n);
        },
        _start: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), 
            i.values = this.values()), this._trigger("start", e, i);
        },
        _slide: function(e, t, i) {
            var s, a, n;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 
            2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && i < s) && (i = s), 
            i !== this.values(t) && (a = this.values(), a[t] = i, n = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: a
            }), s = this.values(t ? 0 : 1), n !== !1 && this.values(t, i))) : i !== this.value() && (n = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            }), n !== !1 && this.value(i));
        },
        _stop: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), 
            i.values = this.values()), this._trigger("stop", e, i);
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), 
                i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i);
            }
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), 
            void this._change(null, 0)) : this._value();
        },
        values: function(t, i) {
            var s, a, n;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), 
            this._refreshValue(), void this._change(null, t);
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (s = this.options.values, a = arguments[0], n = 0; n < s.length; n += 1) s[n] = this._trimAlignValue(a[n]), 
            this._change(null, n);
            this._refreshValue();
        },
        _setOption: function(t, i) {
            var s, a = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), e.isArray(this.options.values) && (a = this.options.values.length), 
            "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), 
            t) {
              case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), 
                this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), s = 0; s < a; s += 1) this._change(null, s);
                this._animateOff = !1;
                break;

              case "step":
              case "min":
              case "max":
                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                break;

              case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e);
        },
        _values: function(e) {
            var t, i, s;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i;
            }
            return [];
        },
        _trimAlignValue: function(e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1, i = (e - this._valueMin()) % t, s = e - i;
            return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5));
        },
        _calculateNewMax: function() {
            var e = this.options.max, t = this._valueMin(), i = this.options.step, s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
            e = s + t, this.max = parseFloat(e.toFixed(this._precision()));
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), 
            e;
        },
        _precisionOf: function(e) {
            var t = e.toString(), i = t.indexOf(".");
            return i === -1 ? 0 : t.length - i - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshValue: function() {
            var t, i, s, a, n, h = this.options.range, l = this.options, o = this, u = !this._animateOff && l.animate, r = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = (o.values(s) - o._valueMin()) / (o._valueMax() - o._valueMin()) * 100, r["horizontal" === o.orientation ? "left" : "bottom"] = i + "%", 
                e(this).stop(1, 1)[u ? "animate" : "css"](r, l.animate), o.options.range === !0 && ("horizontal" === o.orientation ? (0 === s && o.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: i + "%"
                }, l.animate), 1 === s && o.range[u ? "animate" : "css"]({
                    width: i - t + "%"
                }, {
                    queue: !1,
                    duration: l.animate
                })) : (0 === s && o.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: i + "%"
                }, l.animate), 1 === s && o.range[u ? "animate" : "css"]({
                    height: i - t + "%"
                }, {
                    queue: !1,
                    duration: l.animate
                }))), t = i;
            }) : (s = this.value(), a = this._valueMin(), n = this._valueMax(), i = n !== a ? (s - a) / (n - a) * 100 : 0, 
            r["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](r, l.animate), 
            "min" === h && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: i + "%"
            }, l.animate), "max" === h && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: l.animate
            }), "min" === h && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: i + "%"
            }, l.animate), "max" === h && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: l.animate
            }));
        },
        _handleEvents: {
            keydown: function(t) {
                var i, s, a, n, h = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                  case e.ui.keyCode.HOME:
                  case e.ui.keyCode.END:
                  case e.ui.keyCode.PAGE_UP:
                  case e.ui.keyCode.PAGE_DOWN:
                  case e.ui.keyCode.UP:
                  case e.ui.keyCode.RIGHT:
                  case e.ui.keyCode.DOWN:
                  case e.ui.keyCode.LEFT:
                    if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), 
                    i = this._start(t, h), i === !1)) return;
                }
                switch (n = this.options.step, s = a = this.options.values && this.options.values.length ? this.values(h) : this.value(), 
                t.keyCode) {
                  case e.ui.keyCode.HOME:
                    a = this._valueMin();
                    break;

                  case e.ui.keyCode.END:
                    a = this._valueMax();
                    break;

                  case e.ui.keyCode.PAGE_UP:
                    a = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case e.ui.keyCode.PAGE_DOWN:
                    a = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case e.ui.keyCode.UP:
                  case e.ui.keyCode.RIGHT:
                    if (s === this._valueMax()) return;
                    a = this._trimAlignValue(s + n);
                    break;

                  case e.ui.keyCode.DOWN:
                  case e.ui.keyCode.LEFT:
                    if (s === this._valueMin()) return;
                    a = this._trimAlignValue(s - n);
                }
                this._slide(t, h, a);
            },
            keyup: function(t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), 
                e(t.target).removeClass("ui-state-active"));
            }
        }
    });
});

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function fetchContent() {
    return isPending = !0, _before.fireWith(null, arguments), (0, _xhr2.default)({
        url: endpoint,
        data: filtersModel.toJSON()
    });
}

function load(e) {
    if (e && lastLoad) try {
        lastLoad.abort();
    } catch (e) {}
    if (e || !isPending && null !== filtersModel.offset()) return lastLoad = fetchContent(), 
    lastLoad.then(function() {
        isPending = !1;
    }, function() {
        isPending = !1;
    }), lastLoad.then(done.fire.bind(done), fail.fire.bind(fail)), lastLoad;
}

function loader() {
    loader.fired || ((0, _async2.default)(function() {
        filtersModel.offset(0), filtersModel.timestamp(_page_config2.default.timestamp), 
        load(!0), loader.fired = !1;
    }), loader.fired = !0);
}

function bind(e) {
    api._initialized || (filtersModel = e, e.on("all", loader), api._initialized = !0);
}

function unbind() {
    api._initialized = !1, filtersModel.off("all", loader), filtersModel = null;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_config = __webpack_require__(12), _page_config2 = _interopRequireDefault(_page_config), _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _async = __webpack_require__(53), _async2 = _interopRequireDefault(_async), _before = new _jquery2.default.Callbacks(), done = new _jquery2.default.Callbacks(), fail = new _jquery2.default.Callbacks(), endpoint = "/search", api = {}, filtersModel, lastLoad, isPending = !1;

_jquery2.default.extend(load, {
    before: function() {
        return _before.add.apply(_before, arguments), load;
    },
    then: function(e, i) {
        return done.add(e), fail.add(i), load;
    },
    remove: function(e) {
        return done.remove(e), fail.remove(e), load;
    },
    clear: function() {
        return done.empty(), fail.empty(), load;
    }
}), api = {
    load: load,
    bind: bind,
    unbind: unbind,
    _initialized: !1
}, exports.default = api, module.exports = exports.default;

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(!t.s(t.f("phone",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"cfix\" id=\"fields-menu\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"submenu left-menu left\">");t.b("\n" + i);t.b("    <div class=\"list-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,130,160,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_label_popular|Popular");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("    <ul id=\"popular-fields-list\" class=\"js-fields-list\">");t.b("\n" + i);if(!t.s(t.f("mustSelect",c,p,1),c,p,1,0,0,"")){t.b("      <li data-key=\"\"><a href=\"?field=\">");if(t.s(t.f("translate",c,p,1),c,p,0,314,366,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_field_option_all_fields|All Creative Fields");});c.pop();}t.b("</a></li>");t.b("\n" + i);};if(t.s(t.f("populars",c,p,1),c,p,0,425,497,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li data-key=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"><a href=\"?field=");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("value",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("    </ul>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"submenu right-menu left\">");t.b("\n" + i);t.b("    <div class=\"list-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,614,654,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_label_alphabetical|Alphabetical");});c.pop();}t.b("</div>");t.b("\n" + i);};t.b("    <ul class=\"js-fields-list js-fields-list-full divided-list ");if(t.s(t.f("phone",c,p,1),c,p,0,759,769,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("phone-list");});c.pop();}if(!t.s(t.f("phone",c,p,1),c,p,1,0,0,"")){t.b("desktop-list");};t.b("\" id=\"all-fields-list\">");t.b("\n" + i);if(t.s(t.f("phone",c,p,1),c,p,0,849,1239,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      ");if(!t.s(t.f("mustSelect",c,p,1),c,p,1,0,0,"")){t.b("<li data-key=\"\"><a href=\"?field=\">");if(t.s(t.f("translate",c,p,1),c,p,0,919,971,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_field_option_all_fields|All Creative Fields");});c.pop();}t.b("</a></li>");};t.b("\n" + i);t.b("      <li class=\"list-divider\">");if(t.s(t.f("translate",c,p,1),c,p,0,1055,1085,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_label_popular|Popular");});c.pop();}t.b("</li>");t.b("\n" + i);if(t.s(t.f("populars",c,p,1),c,p,0,1124,1221,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li class=\"list-field\" data-key=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"><a href=\"?field=");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("value",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}});c.pop();}if(t.s(t.f("fields",c,p,1),c,p,0,1265,1470,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li class=\"list-divider\">");t.b(t.v(t.f("name",c,p,0)));t.b("</li>");t.b("\n" + i);if(t.s(t.f("entries",c,p,1),c,p,0,1329,1453,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li class=\"list-field js-item\" data-key=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"><a href=\"?field=");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"js-label\">");t.b(t.v(t.f("value",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("    </ul>");t.b("\n" + i);if(!t.s(t.f("phone",c,p,1),c,p,1,0,0,"")){t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("</div>");t.b("\n" + i);};return t.fl(); },partials: {}, subs: {  }}, "{{^phone}}\n<div class=\"cfix\" id=\"fields-menu\">\n\n  <div class=\"submenu left-menu left\">\n    <div class=\"list-header\">{{#translate}}discover_label_popular|Popular{{/translate}}</div>\n    <ul id=\"popular-fields-list\" class=\"js-fields-list\">\n      {{^mustSelect}}\n      <li data-key=\"\"><a href=\"?field=\">{{#translate}}discover_field_option_all_fields|All Creative Fields{{/translate}}</a></li>\n      {{/mustSelect}}\n{{#populars}}\n      <li data-key=\"{{id}}\"><a href=\"?field={{id}}\">{{value}}</a></li>\n{{/populars}}\n    </ul>\n  </div>\n\n  <div class=\"submenu right-menu left\">\n    <div class=\"list-header\">{{#translate}}discover_label_alphabetical|Alphabetical{{/translate}}</div>\n{{/phone}}\n    <ul class=\"js-fields-list js-fields-list-full divided-list {{#phone}}phone-list{{/phone}}{{^phone}}desktop-list{{/phone}}\" id=\"all-fields-list\">\n    {{#phone}}\n      {{^mustSelect}}<li data-key=\"\"><a href=\"?field=\">{{#translate}}discover_field_option_all_fields|All Creative Fields{{/translate}}</a></li>{{/mustSelect}}\n      <li class=\"list-divider\">{{#translate}}discover_label_popular|Popular{{/translate}}</li>\n      {{#populars}}\n      <li class=\"list-field\" data-key=\"{{id}}\"><a href=\"?field={{id}}\">{{value}}</a></li>\n      {{/populars}}\n    {{/phone}}\n    {{#fields}}\n      <li class=\"list-divider\">{{name}}</li>\n      {{#entries}}\n        <li class=\"list-field js-item\" data-key=\"{{id}}\"><a href=\"?field={{id}}\" class=\"js-label\">{{value}}</a></li>\n      {{/entries}}\n    {{/fields}}\n    </ul>\n{{^phone}}\n  </div>\n\n</div>\n{{/phone}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function time(t) {
    var e = t[_page_constants2.default.FILTER_KEY_SORT], n = {
        time: _page_constants2.default.TIME_KEY_WEEK
    };
    return e && (e === _page_constants2.default.SORT_KEY_FEATURED_DATE || e === _page_constants2.default.SORT_KEY_PUBLISHED_DATE ? n.time = _page_constants2.default.TIME_KEY_ALL : e === _page_constants2.default.SORT_KEY_COMMENTS && (n.time = _page_constants2.default.TIME_KEY_TODAY)), 
    n;
}

function sort() {
    return {
        sort: _page_constants2.default.SORT_KEY_APPRECIATIONS
    };
}

function addToManualChange(t, e) {
    var n = [ _page_constants2.default.CONTENT_KEY_TEAMS, _page_constants2.default.CONTENT_KEY_USERS, _page_constants2.default.CONTENT_KEY_PROJECTS ];
    n.forEach(function(n) {
        manuallyChanged[n] || (manuallyChanged[n] = {}), manuallyChanged[n][t] = e[t];
    });
}

function initManuallyChanged(t, e) {
    manuallyChanged[e] = manuallyChanged[e] || {}, (0, _extend2.default)(manuallyChanged[e], t), 
    delete manuallyChanged[e].content;
}

function hasDiff(t, e) {
    var n;
    for (n in t) if (t[n] != e[n]) return !0;
    return !1;
}

function correctTags(t, e, n) {
    "undefined" != typeof t.field && t.field != e.field && (n.user_tags = void 0);
}

function correctTalentSearch(t) {
    _page_config2.default.ts_mode && (delete t.sort, delete t.time);
}

function correctSimilarTo(t, e, n) {
    e.similar_to && t.sort && t.sort !== _page_constants2.default.SORT_KEY_MOST_SIMILAR && (n.similar_to = void 0);
}

function run(t, e) {
    var n, a = e.content, _ = {};
    if (initManuallyChanged(t, a), !hasDiff(t, e)) return _;
    if ("undefined" != typeof t.content && t.content !== _page_constants2.default.CONTENT_KEY_USERS && t.content !== _page_constants2.default.CONTENT_KEY_TEAMS && e.sort === _page_constants2.default.SORT_KEY_FOLLOWED) _.sort = _page_constants2.default.SORT_KEY_FEATURED_DATE; else {
        if ("undefined" != typeof t.content && t.content != e.content) return _;
        manuallyChanged[a].sort || (0, _extend2.default)(_, sort());
    }
    manuallyChanged[a].time || (0, _extend2.default)(_, time((0, _extend2.default)({}, t, _))), 
    correctTags(t, e, _), correctSimilarTo(t, e, _), correctTalentSearch(_);
    for (n in _) addToManualChange(n, _);
    return _;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_config = __webpack_require__(12), _page_config2 = _interopRequireDefault(_page_config), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), manuallyChanged = {};

run.clear = function(t) {
    manuallyChanged = t || {};
}, run.changed = function() {
    return manuallyChanged;
}, run.coerceSimilar = function(t, e, n) {
    e.sort === _page_constants2.default.SORT_KEY_MOST_SIMILAR ? t === _page_constants2.default.CONTENT_KEY_TEAMS ? (e.sort = _page_constants2.default.SORT_KEY_FEATURED_DATE, 
    e.similar_to = void 0) : t === _page_constants2.default.CONTENT_KEY_PROJECTS && n.content == _page_constants2.default.CONTENT_KEY_USERS ? (e.sort = _page_constants2.default.SORT_KEY_FEATURED_DATE, 
    e.similar_to = void 0) : t === _page_constants2.default.CONTENT_KEY_USERS && n.content == _page_constants2.default.CONTENT_KEY_PROJECTS && (e.sort = _page_config2.default.ts_mode ? _page_constants2.default.SORT_KEY_RANK : _page_constants2.default.SORT_KEY_FEATURED_DATE, 
    e.similar_to = void 0) : e.similar_to = void 0;
}, run.coerce = function(t, e, n) {
    var a;
    for (a in manuallyChanged[t]) e[a] = manuallyChanged[t][a];
    return run.coerceSimilar(t, e, n), e.sort == _page_constants2.default.SORT_KEY_FOLLOWED && t === _page_constants2.default.CONTENT_KEY_PROJECTS && (e.sort = _page_constants2.default.SORT_KEY_FEATURED_DATE), 
    e.sort == _page_constants2.default.SORT_KEY_RANK && t === _page_constants2.default.CONTENT_KEY_TEAMS && (e.sort = _page_constants2.default.SORT_KEY_FEATURED_DATE), 
    e;
}, exports.default = run, module.exports = exports.default;

/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Layover = __webpack_require__(27), _Layover2 = _interopRequireDefault(_Layover), constructor = _Layover2.default.extend({
    rendered: function() {
        this.$view.on("click", "a", this.hide.bind(this)), this._super();
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Menu = __webpack_require__(40), _Menu2 = _interopRequireDefault(_Menu), _media = __webpack_require__(35), _media2 = _interopRequireDefault(_media), constructor = _Menu2.default.extend({
    attachment: ".sort",
    position: function(e) {
        var t, i = (0, _jquery2.default)(e), o = i.find(".beicons-pre"), r = this._controller.$context.width() / 2, s = this.constructor.NUB_OFFSET - r, u = this._controller.$context.offset(), n = this.$view.offset(), l = 20;
        try {
            (0, _media2.default)("small-tablet", "(max-width: 799px)"), _media2.default.is("small-tablet") && (l = 5);
        } catch (e) {}
        return t = Math.floor(u.left) > n.left + Math.abs(s) ? "nub-right" : "", this.$view.removeClass("nub-right").addClass(t), 
        o.length ? this._super(e, {
            my: "left top",
            at: "left+18 bottom-" + l,
            collision: "flip none"
        }) : this._super(e, {
            my: "left top",
            at: "left-12 bottom-" + l,
            collision: "flip none"
        });
    },
    rendered: function() {
        this.$view.on("click", "a", this.dismiss), this._super();
    },
    show: function() {
        this.position(), this._super();
    },
    toggle: function() {
        this.position(), this._super();
    }
}, {
    NUB_OFFSET: 20
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component);

exports.default = new _Component2.default(), module.exports = exports.default;

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _pubsub = __webpack_require__(22), _pubsub2 = _interopRequireDefault(_pubsub), _Follow = __webpack_require__(69), _Follow2 = _interopRequireDefault(_Follow), _login = __webpack_require__(33), _login2 = _interopRequireDefault(_login), _Dialog = __webpack_require__(44), _Dialog2 = _interopRequireDefault(_Dialog), cache = {}, api;

api = {
    init: function(e) {
        (0, _jquery2.default)(".js-action-follow", e).each(function() {
            var e = (0, _jquery2.default)(this), t = e.data("followee"), o = e.data("following"), i = e.data("entity");
            _login2.default.isLoggedIn() ? api._bindFollow(e, i, t, o) : api._bindSignupDialog(e);
        });
    },
    destroy: function() {
        cache = {};
    },
    _bindFollow: function(e, t, o, i) {
        cache[t] || (cache[t] = {}), cache[t][o] || (cache[t][o] = api._create(t, o, i)), 
        cache[t][o].add(e);
    },
    _bindSignupDialog: function(e) {
        var t = e.data(), o = new _Dialog2.default({
            id: t.followee,
            entity: t.entity,
            action: "follow"
        });
        o.setContext(e);
    },
    _create: function(e, t, o) {
        var i = new _Follow2.default(t, o, e);
        return this.listenTo(i, "following", function(o) {
            this.trigger("following", t, o, e);
        }).listenTo(i, "request", function(o) {
            this.trigger("request", t, o, e);
        }), "project" === e && this.listenTo(i, "request", this._updateUsersOnProjectFollow), 
        i;
    },
    _updateUsersOnProjectFollow: function(e) {
        e.then(function(e) {
            e.owner_ids.forEach(function(t) {
                cache.user[t] && cache.user[t].setFollowing(e.following);
            });
        });
    }
}, (0, _extend2.default)(api, _pubsub2.default), exports.default = api, module.exports = exports.default;

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Roulette = __webpack_require__(21), _Roulette2 = _interopRequireDefault(_Roulette), _Layover = __webpack_require__(367), _Layover2 = _interopRequireDefault(_Layover), _Menu = __webpack_require__(368), _Menu2 = _interopRequireDefault(_Menu), constructor = _Roulette2.default.extend({
    init: function() {
        this._super.apply(this, arguments), this.commit = this.commit.bind(this);
    },
    commit: function() {},
    switchView: function() {
        this._super.apply(this, arguments), this._view.hide();
    }
}, {
    VIEW_CLASS: {
        phone: _Layover2.default,
        tablet: _Menu2.default,
        desktop: _Menu2.default
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function extract(t) {
    return t.value = t.n, t;
}

function transform(t) {
    return _jquery2.default.map(t, extract);
}

function tag(t, e) {
    return e.forEach(function(e) {
        e.type = t;
    }), e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _async = __webpack_require__(53), _async2 = _interopRequireDefault(_async), _autosource = __webpack_require__(58), _autosource2 = _interopRequireDefault(_autosource), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _Menu = __webpack_require__(484), _Menu2 = _interopRequireDefault(_Menu), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _crumb = __webpack_require__(275), _crumb2 = _interopRequireDefault(_crumb), _suggestItem = __webpack_require__(115), _suggestItem2 = _interopRequireDefault(_suggestItem);

__webpack_require__(68);

var constructor = _Menu2.default.extend({
    rendered: function() {
        this._super();
        var t = this, e = this.$view.find(".search-option-content").addClass("ui-front search-option-" + this.constructor.TYPE).find("input"), r = (0, 
        _jquery2.default)("<ul>", {
            class: "listselector_selections autocomplete_selections"
        }).insertAfter(e.parent());
        r.render = function(e) {
            e.forEach(function(t) {
                this.append((0, _jquery2.default)((0, _crumb2.default)(t)).data("item", t));
            }, this.empty()), t.position();
        }, this.initAutoselect(e, r), this.bindAutoselect(e, r), this.$view.on("menu.show", function() {
            (0, _async2.default)(e.focus.bind(e));
        }).on("menu.hide", function() {
            e.val("");
        });
    },
    save: function() {},
    templateData: function() {
        return {
            title: this.constructor.TITLE,
            confirm: this.constructor.CONFIRM,
            field: "search-input-" + this.constructor.TYPE
        };
    },
    submit: function(t, e) {
        var r = e && e.value || t;
        _Filters2.default.change(this.constructor.TYPE, r.map(function(t) {
            return t.id;
        }).join("|") || void 0);
    },
    initAutoselect: function(t, e) {
        var r = this, u = _Filters2.default.get(r.constructor.TYPE);
        u && (u = u.split("|").map(function(t) {
            return _page_constants2.default[r.constructor.TYPE.toUpperCase()][t];
        }), e.render(tag(this.constructor.TYPE, transform(u)))), t.autoselect({
            autoFocus: !0,
            source: this._createSource(),
            itemTemplate: _suggestItem2.default,
            value: u,
            limit: r.constructor.LIMIT,
            width: t.outerWidth(),
            messages: {
                placeholder: _page_constants2.default.FILTER_PLACEHOLDER,
                limited: r.constructor.LIMIT_MESSAGE
            }
        });
    },
    _createSource: function() {
        var t = (0, _autosource2.default)({
            maxLocal: 5
        });
        return (0, _xhr2.default)({
            url: "/tags/getAutoList",
            data: {
                type: this.constructor.ENDPOINT_TYPE || this.constructor.TYPE
            }
        }).then(function(t) {
            return t.json;
        }).then(this.save).then(transform).then(tag.bind(null, this.constructor.TYPE)).then(t.addLocal.bind(t)), 
        t;
    },
    bindAutoselect: function(t, e) {
        var r = this.position.bind(this), u = this;
        t.on({
            autoselectvalue: function(t, r) {
                e.render(r.value);
            },
            autoselectopen: r,
            autoselectclose: r
        }).on("autoselectvalue", this.hide.bind(this)).on("autoselectvalue", this.submit.bind(this)), 
        e.on("click", ".js-remove", function() {
            t.autoselect("unselect", (0, _jquery2.default)(this).parent().data("item"));
        }), _Filters2.default.on(this.constructor.TYPE, function(e) {
            t.autoselect("empty"), e && t.autoselect("select", e.split("|").map(function(t) {
                return _page_constants2.default[u.constructor.TYPE.toUpperCase()][t];
            }));
        });
    },
    destroy: function() {
        _Filters2.default.off(null, null, this), this._super();
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters);

exports.default = {
    onChange: function(e, t) {
        this.$view && this.$view.find("[data-key=" + t + "] a").removeClass("active").end().find("[data-key=" + e + "] a").addClass("active");
    },
    followed: function() {
        this.$view.find("[data-key=followed]").toggleClass("hide", "projects" === _Filters2.default.get("content")), 
        _Filters2.default.on("content", function(e) {
            this.$view && this.$view.find("[data-key=followed]").toggleClass("hide", "projects" === e);
        }, this);
    },
    correctTime: function() {
        this.$view.find("#time-list").toggleClass("disabled", this._shouldDisableTime(this._model.get("sort"))), 
        this._model.on("sort", function(e) {
            this.$view.find("#time-list").toggleClass("disabled", this._shouldDisableTime(e));
        }, this);
    },
    handleSimilar: function() {
        this._toggleSimilar(this._model.get("sort")), this._model.on("sort", function(e) {
            this._toggleSimilar(e);
        }, this);
    },
    _toggleSimilar: function(e) {
        this.$view.find(".sort-item-most_similar").toggleClass("hide", e !== _page_constants2.default.SORT_KEY_MOST_SIMILAR);
    },
    _shouldDisableTime: function(e) {
        var t = [ _page_constants2.default.SORT_KEY_PUBLISHED_DATE, _page_constants2.default.SORT_KEY_MOST_SIMILAR, _page_constants2.default.SORT_KEY_RANK ];
        return t.indexOf(e) !== -1;
    }
}, module.exports = exports.default;

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(15), __webpack_require__(6), __webpack_require__(39) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(jQuery);
}(function(e) {
    return e.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), 
            this._on({
                "mousedown .ui-menu-item": function(e) {
                    e.preventDefault();
                },
                "click .ui-menu-item": function(t) {
                    var i = e(t.target);
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), 
                    i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(t) {
                    if (!this.previousFilter) {
                        var i = e(t.currentTarget);
                        i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i);
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(e, i);
                },
                blur: function(t) {
                    this._delay(function() {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), 
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove();
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
        },
        _keydown: function(t) {
            var i, s, n, a, u = !0;
            switch (t.keyCode) {
              case e.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;

              case e.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;

              case e.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;

              case e.ui.keyCode.END:
                this._move("last", "last", t);
                break;

              case e.ui.keyCode.UP:
                this.previous(t);
                break;

              case e.ui.keyCode.DOWN:
                this.next(t);
                break;

              case e.ui.keyCode.LEFT:
                this.collapse(t);
                break;

              case e.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;

              case e.ui.keyCode.ENTER:
              case e.ui.keyCode.SPACE:
                this._activate(t);
                break;

              case e.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;

              default:
                u = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, 
                clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), 
                i = a && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i, 
                i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), 
                i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter;
            }
            u && t.preventDefault();
        },
        _activate: function(e) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e));
        },
        refresh: function() {
            var t, i, s = this, n = this.options.icons.submenu, a = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), 
            a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = e(this), i = t.parent(), s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"));
            }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function() {
                var t = e(this);
                s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider");
            }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(e, t) {
            "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), 
            "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), 
            this._super(e, t);
        },
        focus: function(e, t) {
            var i, s;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), 
            s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), 
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), 
            this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            });
        },
        _scrollIntoView: function(t) {
            var i, s, n, a, u, o;
            this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, 
            a = this.activeMenu.scrollTop(), u = this.activeMenu.height(), o = t.outerHeight(), 
            n < 0 ? this.activeMenu.scrollTop(a + n) : n + o > u && this.activeMenu.scrollTop(a + n - u + o));
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), 
            this.active = null, this._trigger("blur", e, {
                item: this.active
            }));
        },
        _startOpening: function(e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(e);
            }, this.delay));
        },
        _open: function(t) {
            var i = e.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s;
            }, this.delay);
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active");
        },
        _closeOnDocumentClick: function(t) {
            return !e(t.target).closest(".ui-menu").length;
        },
        _isDivider: function(e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text());
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t));
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(e, t);
            }));
        },
        next: function(e) {
            this._move("next", "first", e);
        },
        previous: function(e) {
            this._move("prev", "last", e);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(e, t, i) {
            var s;
            this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), 
            s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), 
            this.focus(i, s);
        },
        nextPage: function(t) {
            var i, s, n;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, 
            n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = e(this), i.offset().top - s - n < 0;
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t);
        },
        previousPage: function(t) {
            var i, s, n;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, 
            n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = e(this), i.offset().top - s + n > 0;
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i);
        },
        _filterMenuItems: function(t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = new RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return s.test(e.trim(e(this).text()));
            });
        }
    });
});

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(15), __webpack_require__(6), __webpack_require__(39), __webpack_require__(42) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(jQuery);
}(function(e) {
    return e.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, u = "input" === n;
            this.isMultiLine = !!o || !u && this.element.prop("isContentEditable"), this.valueMethod = this.element[o || u ? "val" : "text"], 
            this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), 
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, void (i = !0);
                    t = !1, s = !1, i = !1;
                    var o = e.ui.keyCode;
                    switch (n.keyCode) {
                      case o.PAGE_UP:
                        t = !0, this._move("previousPage", n);
                        break;

                      case o.PAGE_DOWN:
                        t = !0, this._move("nextPage", n);
                        break;

                      case o.UP:
                        t = !0, this._keyEvent("previous", n);
                        break;

                      case o.DOWN:
                        t = !0, this._keyEvent("next", n);
                        break;

                      case o.ENTER:
                        this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                        break;

                      case o.TAB:
                        this.menu.active && this.menu.select(n);
                        break;

                      case o.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), 
                        this.close(n), n.preventDefault());
                        break;

                      default:
                        i = !0, this._searchTimeout(n);
                    }
                },
                keypress: function(s) {
                    if (t) return t = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || s.preventDefault());
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                          case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;

                          case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;

                          case n.UP:
                            this._keyEvent("previous", s);
                            break;

                          case n.DOWN:
                            this._keyEvent("next", s);
                        }
                    }
                },
                input: function(e) {
                    return s ? (s = !1, void e.preventDefault()) : void this._searchTimeout(e);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(e) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), 
                    this.close(e), void this._change(e));
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur;
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close();
                        });
                    });
                },
                menufocus: function(t, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), 
                    void this.document.one("mousemove", function() {
                        e(t.target).trigger(t.originalEvent);
                    })) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                        item: n
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), 
                    s = i.item.attr("aria-label") || n.value, void (s && e.trim(s).length && (this.liveRegion.children().hide(), 
                    e("<div>").text(s).appendTo(this.liveRegion))));
                },
                menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, 
                    this._delay(function() {
                        this.previous = s, this.selectedItem = i;
                    })), !1 !== this._trigger("select", e, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i;
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), 
            this.menu.element.remove(), this.liveRegion.remove();
        },
        _setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), 
            "disabled" === e && t && this.xhr && this.xhr.abort();
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), 
            t.length || (t = this.document[0].body), t;
        },
        _initSource: function() {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, s) {
                s(e.ui.autocomplete.filter(t, i.term));
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, n) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        n(e);
                    },
                    error: function() {
                        n([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var t = this.term === this._value(), i = this.menu.element.is(":visible"), s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                t && (!t || i || s) || (this.selectedItem = null, this.search(null, e));
            }, this.options.delay);
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0;
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
            this.source({
                term: e
            }, this._response());
        },
        _response: function() {
            var t = ++this.requestIndex;
            return e.proxy(function(e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading");
            }, this);
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), 
            this._trigger("open")) : this._close();
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e);
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), 
            this.isNewMenu = !0, this._trigger("close", e));
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            });
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                });
            });
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), 
            i.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next();
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(t, i) {
            var s = this;
            e.each(i, function(e, i) {
                s._renderItemData(t, i);
            });
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t);
        },
        _renderItem: function(t, i) {
            return e("<li>").text(i.label).appendTo(t);
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), 
            void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(e, t) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault());
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(t, i) {
            var s = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function(e) {
                return s.test(e.label || e.value || e);
            });
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(t) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, 
            this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion));
        }
    }), e.ui.autocomplete;
});

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function findFirst(e) {
    return e.first().addClass("first"), e;
}

function _setProjectDates(e) {
    (0, _jquery2.default)(".js-project-cover:not(.js-date-localized)").each(function() {
        var e = (0, _jquery2.default)(this);
        _timestampFormatter2.default.init(e, "ll"), e.addClass("js-date-localized");
    });
    for (var t in e) (0, _jquery2.default)('.js-project-cover[data-id="' + t + '"] .js-cover-stat-appreciations').text(e[t]["apps_" + statsTime]);
}

function loadStats(e) {
    var t, r, a;
    return t = {
        projects: ".project-cover",
        users: ".user-row"
    }, r = {
        projects: function(e) {
            if (_Filters2.default.get("sort") === _page_constants2.default.SORT_KEY_PUBLISHED_DATE) return void _setProjectDates(e);
            for (var t in e) (0, _jquery2.default)('.project-cover[data-id="' + t + '"]').find(".cover-stat-appreciations").text(e[t]["apps_" + statsTime]).end().find(".cover-stat-comments").text(e[t]["cmts_" + statsTime]).end().find(".cover-stat-views").text(e[t]["views_" + statsTime]).end();
        },
        users: function(e) {
            for (var t in e) (0, _jquery2.default)('.user-row[data-id="' + t + '"]').find(".js-cover-stat-appreciations").text(e[t]["apps_" + statsTime]).end().find(".js-cover-stat-comments").text(e[t]["cmts_" + statsTime]).end().find(".js-cover-stat-views").text(e[t]["views_" + statsTime]).end();
        }
    }, a = e.find(t[statsType]).map(function() {
        return (0, _jquery2.default)(this).data("id");
    }).toArray().join("|"), a ? _stats2.default.get({
        action: "s",
        entity: statsType,
        ids: a,
        time: statsTime,
        type: "all",
        callback: r[statsType]
    }) : _Promise2.default.resolve();
}

function view(e) {
    var t = null;
    e.each(function() {
        var e = (0, _jquery2.default)(this), r = new Item(e);
        r.rendered(), items.push(r), t = e.data("ordinal") || null;
    }), postview.fireWith(e, [ t ]);
}

function getItem(e) {
    switch (e) {
      case "projects":
        return _Cover2.default;

      case "users":
      case "teams":
        return _User2.default;
    }
}

function setItem(e) {
    statsType = e, Item = getItem(e);
}

function setTime(e) {
    statsTime = e;
}

function init(e, t, r) {
    return setItem(t), setTime(r), $context = e, view(findFirst($context.children(":not(.ignore-me)"))), 
    _dateFormatter2.default.init($context), loadStats($context);
}

function clear() {
    return clearAll = !1, garbage = items, items = [], (0, _async2.default)(function() {
        garbage.forEach(function(e) {
            e.destroy();
        }), garbage = [];
    }), $context.children(":not(.ignore-me)").remove(), postclear.fire(), $context;
}

function render(e) {
    var t = (0, _jquery2.default)(e);
    return clearAll && (clear(), findFirst(t)), view(t), $context.append(t), _dateFormatter2.default.init(t), 
    loadStats((0, _jquery2.default)("<div>" + e + "</div>"));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Promise = __webpack_require__(9), _Promise2 = _interopRequireDefault(_Promise), _async = __webpack_require__(53), _async2 = _interopRequireDefault(_async), _stats = __webpack_require__(103), _stats2 = _interopRequireDefault(_stats), _timestampFormatter = __webpack_require__(65), _timestampFormatter2 = _interopRequireDefault(_timestampFormatter), _dateFormatter = __webpack_require__(110), _dateFormatter2 = _interopRequireDefault(_dateFormatter), _Cover = __webpack_require__(90), _Cover2 = _interopRequireDefault(_Cover), _User = __webpack_require__(485), _User2 = _interopRequireDefault(_User), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), clearAll = !1, items = [], postview = new _jquery2.default.Callbacks(), postclear = new _jquery2.default.Callbacks(), statsTime, statsType, Item, $context, garbage;

Item = _Cover2.default, exports.default = {
    init: init,
    render: render,
    clear: clear,
    postview: postview,
    postclear: postclear,
    clearNext: function() {
        clearAll = !0;
    },
    setItem: setItem,
    setTime: setTime
}, module.exports = exports.default;

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _Roulette = __webpack_require__(21), _Roulette2 = _interopRequireDefault(_Roulette), _Layover = __webpack_require__(27), _Layover2 = _interopRequireDefault(_Layover), _Popup = __webpack_require__(23), _Popup2 = _interopRequireDefault(_Popup), _remoteLogger = __webpack_require__(14), _remoteLogger2 = _interopRequireDefault(_remoteLogger), _login = __webpack_require__(33), _login2 = _interopRequireDefault(_login), _gatekeeper = __webpack_require__(64), _gatekeeper2 = _interopRequireDefault(_gatekeeper), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _dialog = __webpack_require__(76), _dialog2 = _interopRequireDefault(_dialog);

exports.default = _Roulette2.default.extend({
    _readData: function() {
        var e = {
            project: this._readProject,
            user: this._readUser,
            team: this._readTeam,
            collection: this._readCollection,
            curated_category: this._readCuratedCategory,
            site: this._readSite
        };
        return e[this.data.entity].call(this);
    },
    _projectTransform: function(e, t) {
        return {
            title: t,
            img1x: e.covers[202],
            img2x: e.covers[404],
            imgWidth: 202,
            imgHeight: 158
        };
    },
    _profileTransform: function(e) {
        return {
            title: e.display_name,
            img1x: e.images[115],
            img2x: e.images[230],
            imgWidth: 115,
            imgHeight: 115
        };
    },
    _readProject: function() {
        var e = this;
        return (0, _xhr2.default)({
            url: "/v2/projects/" + this.data.id
        }).then(function(t) {
            var r = t.project.owners, i = "follow" === e.data.action && r.length > 1 ? r[0].display_name + " and " + r[1].display_name : t.project.name;
            return e._projectTransform(t.project, i);
        });
    },
    _readUser: function() {
        var e = this;
        return (0, _xhr2.default)({
            url: "/user/mini/" + this.data.id
        }).then(function(t) {
            return e._profileTransform(t.user);
        });
    },
    _readTeam: function() {
        var e = this;
        return (0, _xhr2.default)({
            url: "/v2/teams/" + this.data.id
        }).then(function(t) {
            return e._profileTransform(t.team);
        });
    },
    _readCollection: function() {
        var e = this;
        return (0, _xhr2.default)({
            url: "/v2/collections/" + this.data.id
        }).then(function(t) {
            var r = t.collection.title, i = t.collection.latest_projects.find(function(e) {
                return 0 === e.mature_content;
            });
            return i ? e._projectTransform(i, r) : {
                title: r
            };
        });
    },
    _readSite: function() {
        var e = this;
        return (0, _xhr2.default)({
            url: "/v2/partners"
        }).then(function(t) {
            var r, i = e.data.id;
            return t.networks.concat(t.galleries).forEach(function(e) {
                e.id === i && (r = e.name);
            }), {
                title: r
            };
        });
    },
    _readCuratedCategory: function() {
        var e = this;
        return (0, _xhr2.default)({
            url: "/v2/galleries/" + this.data.id
        }).then(function(t) {
            return e._projectTransform(t.entities[0], t.gallery.label);
        });
    },
    render: function(e) {
        function t(e) {
            return encodeURIComponent("/onboarding?" + _jquery2.default.param({
                id: i.id,
                entity: i.entity,
                action: i.action,
                title: e.title
            }));
        }
        var r = this, i = this.data, n = this;
        return _gatekeeper2.default.isOn("pre_susi_popup") ? this._readData().then(function(e) {
            _remoteLogger2.default.info("onboarding", "Sign up popup displayed", {
                action: i.action,
                entity: i.entity
            }), e.destination = t(e), r._model.set(e);
        }).then(this._super.bind(this, e)) : (_remoteLogger2.default.info("onboarding", "Redirect to Sign up", {
            action: i.action,
            entity: i.entity
        }), _remoteLogger2.default.send().then(null, function() {}).then(function() {
            return n._readData().then(function(e) {
                var r = {
                    redirect_uri: _page_constants2.default.SSO.URLS.LOGIN
                };
                r.redirect_uri += "?destination=" + t(e), _login2.default.signUp(r);
            });
        }));
    }
}, {
    VIEW_CLASS: {
        phone: _Layover2.default.extend(_dialog2.default),
        tablet: _Popup2.default.extend(_dialog2.default),
        desktop: _Popup2.default.extend(_dialog2.default)
    }
}), module.exports = exports.default;

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"");if(!t.s(t.d("proximity.show",c,p,1),c,p,1,0,0,"")){t.b("hide ");};t.b("proximity js-proximity\">");t.b("\n" + i);t.b("  <div class=\"sub-label\">");t.b("\n" + i);t.b("    <span class=\"sub-label-text\">");if(t.s(t.f("translate",c,p,1),c,p,0,153,179,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("search_proximity|Proximity");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("    <span class=\"sub-label-note\">");if(t.s(t.f("translate",c,p,1),c,p,0,248,345,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("search_proximity_note|Within <span class=\"js-mi\">0</span> Miles (<span class=\"js-km\">0</span> km)");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div id=\"proximity\" class=\"js-proximity-slider\"></div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"{{^proximity.show}}hide {{/proximity.show}}proximity js-proximity\">\n  <div class=\"sub-label\">\n    <span class=\"sub-label-text\">{{#translate}}search_proximity|Proximity{{/translate}}</span>\n    <span class=\"sub-label-note\">{{#translate}}search_proximity_note|Within <span class=\"js-mi\">0</span> Miles (<span class=\"js-km\">0</span> km){{/translate}}</span>\n  </div>\n  <div id=\"proximity\" class=\"js-proximity-slider\"></div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"");t.sub("id",c,p,i);t.b("\" class=\"project-block ");t.sub("class",c,p,i);t.b("\">");t.b("\n" + i);t.b("  <h3 class=\"project-block-header\">");t.sub("title",c,p,i);t.b("</h3>");t.b("\n" + i);t.sub("content",c,p,i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: { "id": function(c,p,t,i) {},"class": function(c,p,t,i) {},"title": function(c,p,t,i) {},"content": function(c,p,t,i) {} }}, "<div id=\"{{$id}}{{/id}}\" class=\"project-block {{$class}}{{/class}}\">\n  <h3 class=\"project-block-header\">{{$title}}{{/title}}</h3>\n  {{$content}}{{/content}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(333) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    e.fn.fancyslider = function(i) {
        function t(e, t) {
            function u() {
                return a > ("value" === i.input ? o : 100);
            }
            function n() {
                return a < ("value" === i.input ? d : 0);
            }
            var r, a = parseInt(e.target.value, 10), o = l.slider("option", "max"), d = l.slider("option", "min");
            parseInt(l.slider("value"), 10) === a && t !== !0 || (isNaN(a) && (a = "value" === i.input ? l.slider("value") : i.percent_default), 
            l.trigger("slidestart", {
                value: l.slider("value")
            }), s = !1, r = "value" === i.input ? a : Math.round(l.slider("option", "max") * (a / 100)), 
            u() && (r = o), n() && (r = d), l.slider("value", r), l.trigger("slide", {
                value: r
            }), r = l.slider("value"), l.trigger("slidestop", {
                value: r
            }), e.target.value = "value" === i.input ? r : r / o * 100);
        }
        function u(i) {
            var t = !1;
            switch (i.keyCode) {
              case e.ui.keyCode.ENTER:
                t = !0;
                break;

              case e.ui.keyCode.UP:
              case e.ui.keyCode.DOWN:
                c.val(parseInt(c.val(), 10) - 1), t = !0;
            }
            if (t) return c.trigger("blur").focus(), !1;
        }
        function n() {
            s && new Date() - s > 500 && c.val() && (c.trigger("blur").focus(), s = !1);
        }
        function r(i) {
            switch (i.keyCode) {
              case e.ui.keyCode.ENTER:
              case e.ui.keyCode.UP:
              case e.ui.keyCode.DOWN:
                return !1;
            }
            s = new Date(), setTimeout(n, 1e3);
        }
        function a(e) {
            var i = l.slider("option", "min"), t = l.slider("option", "max");
            return 100 * (e - i) / (t - i);
        }
        i = e.extend({
            animate: "fast",
            input: "value",
            value: 0,
            percent_default: 50
        }, i);
        var l = this, s = !1, o = 100 * i.value / i.max, d = e('<div class="ui-progress"/>'), v = "value" === i.input ? i.value : o, c = e("input[type=text]").filter(function() {
            return e(this).data("forslider") === l[0].id;
        });
        return o > 100 && (o = 100), d.css("width", o + "%"), this.slider(i).on("slide", function(e, t) {
            var u = a(t.value), n = "value" === i.input ? t.value : u;
            d.css("width", u + "%"), c.val(n);
        }).prepend(d), c.val(v), c.on("blur", t).on("keydown", u).on("keyup", r), this;
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function miToKm(e) {
    return (1.60934 * +e).toFixed(1);
}

function updateDisplay(e, t, i, s) {
    i = +i || 0, s = s || 0, e.find(".js-mi").text(i).end().find(".js-km").text(miToKm(i)), 
    t.css("width", i / s * 100 + "%");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component);

__webpack_require__(333), exports.default = _Component2.default.extend({
    init: function(e, t) {
        this.$progress = (0, _jquery2.default)('<div class="ui-progress"/>'), this.$slider = e.find(".js-proximity-slider"), 
        this.model = t, this.defaultProximity = this.model.get("defaultProximity") || this.model.get("proximity"), 
        this.updateDisplay = updateDisplay.bind(null, e, this.$progress), this.listenTo(this.model, "proximity", this.setValue), 
        this.$slider.on("slide slidechange", this._onChange.bind(this));
    },
    _onChange: function(e, t) {
        this.updateDisplay(t.value, this.model.get("max")), this.trigger("change");
    },
    bind: function() {
        var e = this.model.get("proximity") || this.defaultProximity, t = {
            value: e,
            max: this.model.get("max")
        };
        return this.$slider.slider(t).prepend(this.$progress), this.updateDisplay(e, this.model.get("max")), 
        this;
    },
    getValue: function() {
        return this.$slider.slider("value");
    },
    setValue: function(e) {
        return null == e && (e = this.defaultProximity), this.$slider.slider("value", e), 
        this;
    }
}), module.exports = exports.default;

/***/ },

/***/ 48:
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

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _Element = __webpack_require__(57), _Element2 = _interopRequireDefault(_Element), _pipe = __webpack_require__(24), _pipe2 = _interopRequireDefault(_pipe), _sidebarMenu = __webpack_require__(553), _sidebarMenu2 = _interopRequireDefault(_sidebarMenu), constructor = _Element2.default.extend({
    $nub: null,
    init: function() {
        this._super.apply(this, arguments), this.dismiss = this.dismiss.bind(this);
    },
    template: (0, _pipe2.default)(_sidebarMenu2.default, _jquery2.default),
    rendered: function() {
        this.$view.on("click", function(e) {
            e.stopPropagation();
        }), this.$nub = this.$view.find(".search-option-nub");
    },
    position: function() {
        var e = this.$view.outerHeight(), i = this.$nub.outerHeight(), t = parseFloat(this.$nub.css("bottom"));
        this.$view.css("top", i + t - e + "px");
    },
    dismiss: function(e) {
        this.$view && !this.$view.parent().find(e.target).length && this.hide();
    },
    show: function() {
        this.$view.trigger("menu.show"), (0, _jquery2.default)("html").on("click", this.dismiss), 
        this.$view.show(), this.position(), this.$view.addClass("shown");
    },
    hide: function(e) {
        this.$view.trigger("menu.hide", [ e ]), (0, _jquery2.default)("html").off("click", this.dismiss), 
        this.$view.removeClass("shown");
    },
    toggle: function() {
        return this.$view ? void (this.$view.hasClass("shown") ? this.hide() : this.show()) : (this.render(), 
        void this.show());
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_config = __webpack_require__(12), _page_config2 = _interopRequireDefault(_page_config), _Element = __webpack_require__(57), _Element2 = _interopRequireDefault(_Element), _follow = __webpack_require__(38), _follow2 = _interopRequireDefault(_follow), _AddToTalentSearch = __webpack_require__(133), _AddToTalentSearch2 = _interopRequireDefault(_AddToTalentSearch), constructor = _Element2.default.extend({
    init: function(e) {
        this._super.apply(this, arguments), this.$view = e;
    },
    rendered: function() {
        _follow2.default.init(this.$view), _page_config2.default.has_talent_search && this.talent();
    },
    talent: function() {
        var e = this.$view.find(".js-add-talent");
        e.length && (this.talent = new _AddToTalentSearch2.default(e.data("id")), this.talent.setContext(e));
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"js-spin label-spin\"></div>");t.b("\n" + i);t.b("<span class=\"js-spin-label-saving label-spin-status label-spin-status-saving hide\">");if(t.s(t.f("translate",c,p,1),c,p,0,136,166,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("form_template_saving|Saving...");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("<span class=\"js-spin-label-saved label-spin-status label-spin-status-saved beicons-pre beicons-pre-check-circle hide\">");if(t.s(t.f("translate",c,p,1),c,p,0,320,345,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("form_template_saved|Saved");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("<span class=\"js-spin-label-error label-spin-status label-spin-status-error beicons-pre beicons-pre-x-circle hide\">");if(t.s(t.f("translate",c,p,1),c,p,0,495,558,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("form_template_error_saving|Error saving: please try again later");});c.pop();}t.b("</span>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"js-spin label-spin\"></div>\n<span class=\"js-spin-label-saving label-spin-status label-spin-status-saving hide\">{{#translate}}form_template_saving|Saving...{{/translate}}</span>\n<span class=\"js-spin-label-saved label-spin-status label-spin-status-saved beicons-pre beicons-pre-check-circle hide\">{{#translate}}form_template_saved|Saved{{/translate}}</span>\n<span class=\"js-spin-label-error label-spin-status label-spin-status-error beicons-pre beicons-pre-x-circle hide\">{{#translate}}form_template_error_saving|Error saving: please try again later{{/translate}}</span>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_button": __webpack_require__(48).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(!t.s(t.f("is_profile_owner",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<lib/_follow/_button0",c,p,""));};return t.fl(); },partials: {"<lib/_follow/_button0":{name:"lib/_follow/_button", partials: {}, subs: { "classes": function(c,p,t,i) {t.b("user-follow");},"type": function(c,p,t,i) {t.b("user");},"size": function(c,p,t,i) {t.b("form-button-small");} }}}, subs: {  }}, "{{^is_profile_owner}}\n  {{<lib/_follow/_button}}\n    {{$classes}}user-follow{{/classes}}\n    {{$type}}user{{/type}}\n    {{$size}}form-button-small{{/size}}\n  {{/lib/_follow/_button}}\n{{/is_profile_owner}}", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(8), __webpack_require__(10), 
_jquery2.default.fn.autoselectmenu = function() {
    return this.each(function() {
        var e = (0, _jquery2.default)(this), t = (e.find("option").outerWidth(), {}), u = function() {
            e.changeInput("value", this.value);
        };
        !e.data("uiSelectmenuold") && e.is(":visible") && (t = {
            style: "dropdown",
            maxHeight: 200,
            menuWidth: e.outerWidth()
        }, e.hasClass("ui-selectmenu-dropdown-right") && (t.positionOptions = {
            my: "right top",
            at: "right bottom",
            offset: null
        }), e.width() > 0 && (t.width = "auto"), e.selectmenuold(t).on("change keyup", u));
    });
};

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"sort-menu search-option ");if(!t.s(t.f("confirm",c,p,1),c,p,1,0,0,"")){t.b("search-option-no-confirm");};t.b(" ");if(t.s(t.f("classes",c,p,1),c,p,0,97,102,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b("\">");t.b("\n");t.b("\n" + i);t.b("  ");if(t.s(t.f("title",c,p,1),c,p,0,130,179,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"search-option-header\">");t.b(t.v(t.f("title",c,p,0)));t.b("</div>");});c.pop();}t.b("\n");t.b("\n" + i);t.b("  <div class=\"search-option-content\">");t.b("\n" + i);if(t.s(t.f("field",c,p,1),c,p,0,241,318,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <input id=\"");t.b(t.v(t.f("field",c,p,0)));t.b("\" type=\"text\" class=\"form-text form-text-normal\">");t.b("\n" + i);});c.pop();}t.b("    ");t.b(t.t(t.f("content",c,p,0)));t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("confirm",c,p,1),c,p,0,371,712,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"search-option-confirm clear\">");t.b("\n" + i);t.b("    <span class=\"js-apply form-button form-button-small form-button-default left\">");if(t.s(t.f("translate",c,p,1),c,p,0,512,538,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_label_apply|Apply");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("    <span class=\"js-clear search-option-cancel discover-sprite-pre right hide\">");if(t.s(t.f("translate",c,p,1),c,p,0,653,679,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_label_clear|Clear");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("  <div class=\"search-option-nub\"></div>");t.b("\n");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"sort-menu search-option {{^confirm}}search-option-no-confirm{{/confirm}} {{#classes}}{{.}}{{/classes}}\">\n\n  {{#title}}<div class=\"search-option-header\">{{title}}</div>{{/title}}\n\n  <div class=\"search-option-content\">\n  {{#field}}\n    <input id=\"{{field}}\" type=\"text\" class=\"form-text form-text-normal\">\n  {{/field}}\n    {{{content}}}\n  </div>\n\n  {{#confirm}}\n  <div class=\"search-option-confirm clear\">\n    <span class=\"js-apply form-button form-button-small form-button-default left\">{{#translate}}discover_label_apply|Apply{{/translate}}</span>\n    <span class=\"js-clear search-option-cancel discover-sprite-pre right hide\">{{#translate}}discover_label_clear|Clear{{/translate}}</span>\n  </div>\n  {{/confirm}}\n\n  <div class=\"search-option-nub\"></div>\n\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"");if(!t.s(t.f("phone",c,p,1),c,p,1,0,0,"")){t.b("sort-menu");};t.b(" cfix ");if(t.s(t.f("phone",c,p,1),c,p,0,57,67,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("phone-list");});c.pop();}if(!t.s(t.f("phone",c,p,1),c,p,1,0,0,"")){t.b("desktop-list");};t.b("\" id=\"featured-menu\">");t.b("\n");t.b("\n" + i);if(!t.s(t.f("phone",c,p,1),c,p,1,0,0,"")){t.b("  <div class=\"list-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,186,214,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_label_browse|Browse");});c.pop();}t.b("</div>");t.b("\n" + i);};t.b("\n" + i);t.b("  <ul id=\"browse-list\" class=\"divided-list\">");t.b("\n" + i);if(t.s(t.f("sorts",c,p,1),c,p,0,304,474,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <li class=\"list-browse sort-item-");t.b(t.v(t.f("id",c,p,0)));t.b("\" data-key=");t.b(t.v(t.f("id",c,p,0)));t.b("><a href=\"?sort=");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"discover-sprite-pre discover-sprite sort-item sort-");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("value",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("  </ul>");t.b("\n");t.b("\n" + i);if(!t.s(t.f("phone",c,p,1),c,p,1,0,0,"")){t.b("  <div class=\"list-header hide-teams\">");if(t.s(t.f("translate",c,p,1),c,p,0,559,583,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_label_time|Time");});c.pop();}t.b("</div>");t.b("\n" + i);};t.b("\n" + i);t.b("  <ul id=\"time-list\" class=\"hide-teams divided-list ");if(!t.s(t.f("phone",c,p,1),c,p,1,0,0,"")){t.b("collapsed");};t.b("\">");t.b("\n" + i);if(t.s(t.f("times",c,p,1),c,p,0,712,835,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <li class=\"list-browse\" data-key=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"><a href=\"?time=");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"discover-sprite sort-item\">");t.b(t.v(t.f("value",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("  </ul>");t.b("\n");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"{{^phone}}sort-menu{{/phone}} cfix {{#phone}}phone-list{{/phone}}{{^phone}}desktop-list{{/phone}}\" id=\"featured-menu\">\n\n  {{^phone}}\n  <div class=\"list-header\">{{#translate}}discover_label_browse|Browse{{/translate}}</div>\n  {{/phone}}\n\n  <ul id=\"browse-list\" class=\"divided-list\">\n{{#sorts}}\n    <li class=\"list-browse sort-item-{{id}}\" data-key={{id}}><a href=\"?sort={{id}}\" class=\"discover-sprite-pre discover-sprite sort-item sort-{{id}}\">{{value}}</a></li>\n{{/sorts}}\n  </ul>\n\n  {{^phone}}\n  <div class=\"list-header hide-teams\">{{#translate}}discover_label_time|Time{{/translate}}</div>\n  {{/phone}}\n\n  <ul id=\"time-list\" class=\"hide-teams divided-list {{^phone}}collapsed{{/phone}}\">\n{{#times}}\n    <li class=\"list-browse\" data-key=\"{{id}}\"><a href=\"?time={{id}}\" class=\"discover-sprite sort-item\">{{value}}</a></li>\n{{/times}}\n  </ul>\n\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(78) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(t, e) {
    "use strict";
    function i(t) {
        var e = new c(t);
        return e.source;
    }
    var n = Array.prototype.push, s = function() {
        return n.apply(this._remotes, arguments), this.source;
    }, o = function() {
        return n.apply(this._local, arguments), this.source;
    }, r = function() {
        return Array.prototype.concat.apply([], arguments);
    }, l = function(t, e) {
        return this.filter([], t).concat(e);
    }, c = e.extend({
        _blacklist: "",
        options: {
            maxLocal: 1 / 0,
            caseInsensitive: !1,
            minLength: 1
        },
        init: function(e) {
            this._remotes = [], this._local = [], this.setOptions(e), this.source = t.extend(this.source.bind(this), {
                addRemote: s.bind(this),
                addLocal: o.bind(this)
            });
        },
        setOptions: function(e) {
            t.extend(this.options, e);
        },
        callRemote: function(e) {
            return t.isFunction(e) ? e(this) : e;
        },
        callLocal: function(e) {
            return t.isFunction(e) ? e(this) : e;
        },
        filter: function(t, e) {
            this._filterMemo = this._filterMemo || {};
            var i, n, s = [], o = this.options.maxLocal || 1 / 0, r = e.term;
            if (this.options.caseInsensitive && (r = r.toLocaleLowerCase()), this._filterMemo[r]) return this._filterMemo[r];
            for (i = 0; i < t.length && s.length < o; ++i) n = t[i].value, this.options.caseInsensitive && (n = n.toLocaleLowerCase()), 
            n.indexOf(r) >= 0 && s.push(t[i]);
            return this._filterMemo[r] = s;
        },
        source: function(e, i) {
            if (!(e.term.length < this.options.minLength)) {
                var n = this._local.length ? this.filter(r.apply(null, this._local.map(this.callLocal, e)), e) : [];
                this._remotes.length ? (n.length && i(n), t.when.apply(t, this._remotes.map(this.callRemote, e)).then(r).then(l.bind(this, e)).then(i)) : i(n);
            }
        },
        setBlacklist: function(t) {
            this._blacklist = t;
        }
    });
    return i.constructor = c, i.init = function(t) {
        return new c(t);
    }, i;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _sortContent = __webpack_require__(814), _sortContent2 = _interopRequireDefault(_sortContent);

exports.default = {
    init: function() {
        this._super.apply(this, arguments), this.listenTo(this._model, "content", this.onChange);
    },
    rendered: function() {
        var e = this;
        this._super(), this.$view.find("[data-key=" + this._model.get("content") + "]").addClass("active"), 
        this.$view.on("click", ".js-content-type", function(t) {
            var n = (0, _jquery2.default)(t.target).data("key");
            e._model.set("content", n), e._controller.commit(n);
        });
    },
    onChange: function(e, t) {
        this.$view && ((0, _jquery2.default)("#site-content").find(".js-discover-search").val(""), 
        this.$view.find("[data-key=" + t + "]").removeClass("active").end().find("[data-key=" + e + "]").addClass("active"));
    },
    mustache: _sortContent2.default
}, module.exports = exports.default;

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_config = __webpack_require__(12), _page_config2 = _interopRequireDefault(_page_config), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _has = __webpack_require__(96), _has2 = _interopRequireDefault(_has), _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _location = __webpack_require__(128), _location2 = _interopRequireDefault(_location), _ProximitySlider = __webpack_require__(473), _ProximitySlider2 = _interopRequireDefault(_ProximitySlider), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _sidebarMenu = __webpack_require__(553), _sidebarMenu2 = _interopRequireDefault(_sidebarMenu), _location3 = __webpack_require__(812), _location4 = _interopRequireDefault(_location3);

__webpack_require__(10), __webpack_require__(8), 
exports.default = {
    mustache: _sidebarMenu2.default,
    templateData: function() {
        var e = (0, _extend2.default)({
            has_talent_search: _page_config2.default.has_talent_search,
            labels: _page_constants2.default.LOCATION.LABELS,
            placeholders: _page_constants2.default.LOCATION.PLACEHOLDERS
        }, this._model.data());
        return (0, _extend2.default)({
            content: (0, _location4.default)(e),
            confirm: !0
        }, e);
    },
    rendered: function() {
        this.$proximity = this.$view.find(".js-proximity"), this.$apply = this.$view.find(".js-apply"), 
        this.$clear = this.$view.find(".js-clear"), this.$view.addClass("location-menu").on("click", ".ui-menu a", function(e) {
            e.stopImmediatePropagation();
        }), this._super(), this.location = _location2.default.init(this.$view.find(".search-option-content")), 
        (0, _has2.default)("touch") || this.$view.find("select").selectmenuold(), this.proximity(), 
        this.preload(), this.$apply.on("click", this.apply.bind(this)), this.$clear.on("click", this.reset.bind(this));
    },
    hide: function() {
        return this._super(), this.$view && this.$view.find(".form-error").remove();
    },
    proximity: function() {
        var e = this;
        this.$proximity.length && (this.proximitySlider = _ProximitySlider2.default.init(this.$proximity, this._model), 
        this.location.getCityField().on("autosuggestselect change", function() {
            e.$proximity.toggleClass("hide", !this.value);
        }));
    },
    preload: function() {
        var e, t, i, o, a;
        (e = _Filters2.default.get("country")) && this.location.getCountryField().changeInput("value", this.location.getCountryFromISOCode(e)), 
        (t = _Filters2.default.get("state")) && (i = this.location.getStateOrProvinceField(), 
        i && i.changeInput("value", t)), (o = _Filters2.default.get("city")) && (this.location.setCity(o), 
        this.$proximity.removeClass("hide")), (a = _Filters2.default.get("location_id")) && this.location.setLocationId(a), 
        this._toggleClearButton();
    },
    reset: function() {
        this.location.getCountryField().selectmenuold("value", ""), this.$proximity.addClass("hide"), 
        this._update({
            country: void 0,
            state: void 0,
            city: void 0,
            location_id: void 0,
            proximity: void 0
        });
    },
    _update: function(e) {
        this._model.set(e), _Filters2.default.change(e), this._toggleClearButton();
    },
    _toggleClearButton: function() {
        this.$clear.toggleClass("hide", !this._model.get("country"));
    },
    apply: function(e) {
        if (!this.$apply.hasClass("form-button-disabled") || e) {
            var t = this.location.get();
            this.proximitySlider && (t.proximity = +this.proximitySlider.getValue() || 0), this._update(t), 
            this.hide();
        }
    }
}, module.exports = exports.default;

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
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"");t.sub("id",c,p,i);t.b("\" class=\"project-block ");t.sub("class",c,p,i);t.b("\">");t.b("\n" + i);t.sub("content",c,p,i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: { "id": function(c,p,t,i) {},"class": function(c,p,t,i) {},"content": function(c,p,t,i) {} }}, "<div id=\"{{$id}}{{/id}}\" class=\"project-block {{$class}}{{/class}}\">\n  {{$content}}{{/content}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function loadUser(e) {
    loadUser._cache = loadUser._cache || {};
    var r, i;
    return (i = loadUser._cache[e]) ? (r = new _promise2.default(), r.resolve(i), r) : (0, 
    _xhr2.default)({
        url: "/user/mini/" + e
    }).then(function(r) {
        return loadUser._cache[e] = r, r;
    });
}

function popup(e, r) {
    var i = new _MiniProfile2.default(r);
    e.parents(".popup").length ? (r.within = (0, _jquery2.default)(window), r.bottom = null) : (r.within = within, 
    r.bottom = bottom), i.setContext(e), i.render(e), i._view.show();
}

function init(e, r, i) {
    e = e || (0, _jquery2.default)(document.body), within = r || (0, _jquery2.default)(window), 
    bottom = i;
    var t, o, u;
    e.on("mouseenter", ".js-mini-profile", function() {
        var e = (0, _jquery2.default)(this);
        t = e.data("id"), clearTimeout(o), o = setTimeout(function() {
            e.addClass("wait"), u = loadUser(t), u.then(function(r) {
                e.removeClass("wait"), popup(e, r);
            }, function() {
                e.removeClass("wait");
            });
        }, POPUP_DELAY);
    }).on("mouseleave", ".js-mini-profile", function() {
        clearTimeout(o), u && (u.reject(), u = null);
    });
}

function destroy(e) {
    e = e || (0, _jquery2.default)(document.body), e.off("mouseenter mouseleave", ".js-mini-profile"), 
    _jquery2.default.each(profiles, function(e, r) {
        r.destroy();
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _promise = __webpack_require__(49), _promise2 = _interopRequireDefault(_promise), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), _MiniProfile = __webpack_require__(93), _MiniProfile2 = _interopRequireDefault(_MiniProfile);

__webpack_require__(88);

var POPUP_DELAY = 500, profiles = {}, bottom, within;

exports.default = {
    init: init,
    destroy: destroy,
    loadUser: loadUser
}, module.exports = exports.default;

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_gates = __webpack_require__(71), _page_gates2 = _interopRequireDefault(_page_gates);

exports.default = {
    isOn: function(e) {
        return !!_page_gates2.default[e];
    }
}, module.exports = exports.default;

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _moment = __webpack_require__(36), _moment2 = _interopRequireDefault(_moment), _Component = __webpack_require__(5), _Component2 = _interopRequireDefault(_Component);

exports.default = _Component2.default.extend({
    formatter: function(e, t) {
        return e.format(t);
    },
    init: function(e, t, r) {
        var o = this.formatter;
        t = t || "LL", e.find(".js-format-timestamp").each(function(e, u) {
            var n, m = (0, _jquery2.default)(u), f = m.data("timestamp"), i = _moment2.default.unix(f);
            r && r.isUTC && (i = i.utc()), n = r && r.fromNow ? (0, _moment2.default)(i).fromNow() : o(i, t), 
            n && m.text(n);
        });
    }
}), module.exports = exports.default;

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(31) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(e) {
    "use strict";
    return e.widget("be.autoselect", e.be.autosuggest, {
        options: {
            limit: 0,
            toggle: !1,
            select: function(t, s) {
                return e(this).autoselect("clear"), !1;
            }
        },
        _selected: null,
        _create: function() {
            this._super();
            var t = this;
            this._on(this.menu.element, {
                menuselect: function(e, s) {
                    var i = s.item.data("ui-autocomplete-item");
                    t.select(i);
                }
            }), this._selected = e.isArray(this.options.value) ? this.options.value : [], this._selected.length && this._changeValue(!0);
        },
        select: function(t) {
            t = e.isArray(t) ? t : [ t ];
            var s, i, l, n = !1;
            for (i = 0; i < t.length; ++i) l = t[i], (s = this._selected.indexOf(l)) < 0 ? this._selected.length < (this.options.limit || 1 / 0) ? (this._selected.push(l), 
            n = !0) : this._trigger("limit", null, {
                item: l
            }) : this.options.toggle && (this._selected.splice(s, 1), n = !0);
            n && this._changeValue();
        },
        unselect: function(e) {
            var t;
            (t = this._selected.indexOf(e)) >= 0 && (this._selected.splice(t, 1), this._changeValue());
        },
        _changeValue: function(e) {
            var t = this._selected.length >= (this.options.limit || 1 / 0), s = this.options.messages[t ? "limited" : "placeholder"];
            this.element.prop("disabled", t).prop("aria-disabled", t).toggleClass("ui-state-disabled", t), 
            t && this.element.blur(), s && this.element.prop("placeholder", s), e || this._trigger("value", null, {
                value: this._selected
            });
        },
        value: function() {
            return this._selected;
        },
        empty: function() {
            this._selected = [], this._changeValue();
        }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Controller = __webpack_require__(29), _Controller2 = _interopRequireDefault(_Controller), _Model = __webpack_require__(32), _Model2 = _interopRequireDefault(_Model), _pubsub = __webpack_require__(22), _pubsub2 = _interopRequireDefault(_pubsub), _remoteLogger = __webpack_require__(14), _remoteLogger2 = _interopRequireDefault(_remoteLogger), _Follow = __webpack_require__(70), _Follow2 = _interopRequireDefault(_Follow), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window), _xhr = __webpack_require__(2), _xhr2 = _interopRequireDefault(_xhr), constructor = _Controller2.default.extend({
    init: function(e, t, o) {
        this.views = [], this.type = o || "user", this._model = new _Model2.default(e, {
            blocking: !1,
            following: t || !1
        }), this.listenTo(this._model, "all", this.trigger);
    },
    _initView: function(e) {
        var t = new _Follow2.default(e, this._model);
        return t._controller = this, t;
    },
    add: function(e) {
        if (e.data("befollow")) return this;
        var t = this._initView(e);
        return e.data("befollow", t), this.views.push(t), this;
    },
    setFollowing: function(e) {
        this._model.set("following", e);
    },
    follow: function(e) {
        function t() {
            r.set("blocking", !1);
        }
        if (!this._model.get("blocking")) {
            var o, r = this._model, i = this._model.get("following");
            return this._model.set("blocking", !0), o = this.constructor.send(this.type, this.id, !i, e).then(function(e) {
                return r.set("following", !i), e.following = !i, e;
            }, function(e) {
                var t;
                429 === e.status && (e.responseJSON && e.responseJSON.messages && (t = e.responseJSON.messages.pop().message), 
                _Follow2.default.rateLimitPopup(t));
            }), this.trigger("request", o), o.then(t, t), o;
        }
    },
    destroy: function() {
        this.views.forEach(function(e) {
            e.destroy();
        }), this.views = [], this._model.destroy(), this._model = null;
    }
}, {
    sendBackfill: function(e, t) {
        return this.send(e, t, !0, {
            backfill: "instant"
        });
    },
    send: function(e, t, o, r) {
        return (0, _xhr2.default)({
            url: "/relations/" + e + "/" + t + _window2.default.getLocation("search"),
            type: o ? "POST" : "DELETE",
            data: r
        }).then(function(r) {
            return _remoteLogger2.default.info("follow_click_tracker", o ? "Followed" : "Unfollowed", {
                followee: t,
                type: e
            }), r;
        });
    }
}).mixin(_pubsub2.default);

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 698:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function beforeload() {
    $spinner.show();
}

function onload(e) {
    $super.removeClass("loading"), _Filters2.default.timestamp(e.timestamp), _content2.default.render(e.html);
}

function onfail() {
    $super.removeClass("loading"), $spinner.hide();
}

function changeType() {
    var e = _Filters2.default.get("content");
    $body.hasClass("viewing-" + e) || $body.removeClass("viewing-users viewing-projects viewing-teams").addClass("viewing-" + e), 
    $context.hasClass(e) || $context.removeClass("projects users").addClass(e);
}

function layoutType() {
    $spinner.hide(), (0, _async2.default)(function() {
        _scrollfloat2.default.check();
    });
}

function switchTypes(e) {
    _Filters2.default.updateType(e);
}

function scrollfix() {
    (0, _async2.default)(function() {
        _window2.default.scrollTo(0, Math.min(contentTop, _window2.default.scrollY));
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _async = __webpack_require__(53), _async2 = _interopRequireDefault(_async), _media = __webpack_require__(35), _media2 = _interopRequireDefault(_media), _scrollfloat = __webpack_require__(136), _scrollfloat2 = _interopRequireDefault(_scrollfloat), _content = __webpack_require__(433), _content2 = _interopRequireDefault(_content), _login = __webpack_require__(33), _login2 = _interopRequireDefault(_login), _spinner = __webpack_require__(79), _spinner2 = _interopRequireDefault(_spinner), _coordinator = __webpack_require__(369), _coordinator2 = _interopRequireDefault(_coordinator), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _loader = __webpack_require__(338), _loader2 = _interopRequireDefault(_loader), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window), $context, $super, $spinner, $body, api, contentTop = 1;

api = {
    init: function(e) {
        _loader2.default.load.before(beforeload).then(onload, onfail), $context = e, $super = (0, 
        _jquery2.default)("#top-panel"), $body = (0, _jquery2.default)(document.body), $spinner = $context.find(".loading-spinner"), 
        _content2.default.postview.add(layoutType).add(_Filters2.default.offset.bind(_Filters2.default)), 
        _content2.default.postclear.add(scrollfix), _Filters2.default.on("content", changeType), 
        _Filters2.default.on("all", function() {
            $super.addClass("loading"), _content2.default.clearNext();
        }), _login2.default.isLoggedIn() || (_media2.default.on("desktop", function(e) {
            contentTop = e ? (0, _jquery2.default)("#showcase-and-discover").height() || 0 : null;
        }), contentTop = _media2.default.is("desktop") ? (0, _jquery2.default)("#showcase-and-discover").height() || 0 : null), 
        $context.on("click", ".cover-fields a, .site-message a", function() {
            _Filters2.default.reset();
        }), _Filters2.default.on("content", _content2.default.setItem), _Filters2.default.on("time", _content2.default.setTime), 
        _content2.default.init($context.find(".covers"), _Filters2.default.get("content"), _Filters2.default.get("time")), 
        _spinner2.default.create($spinner.hide().get(0)), _coordinator2.default.on("content.type", switchTypes), 
        (0, _scrollfloat2.default)(.8, _loader2.default.load);
    }
}, exports.default = api, module.exports = exports.default;

/***/ },

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _media = __webpack_require__(35), _media2 = _interopRequireDefault(_media), _Breadcrumbs = __webpack_require__(282), _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs), _coordinator = __webpack_require__(369), _coordinator2 = _interopRequireDefault(_coordinator), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _loader = __webpack_require__(338), _loader2 = _interopRequireDefault(_loader), _Sorts = __webpack_require__(1094), _Sorts2 = _interopRequireDefault(_Sorts);

__webpack_require__(294);

var constantsTransform = function(e) {
    return _page_constants2.default[this.toUpperCase()][e].n;
}, resetPiped = _Breadcrumbs2.default.resetPiped.bind(_Filters2.default);

exports.default = {
    _crumbs: null,
    init: function(e) {
        function t() {
            var e = _media2.default.is("desktop") ? (0, _jquery2.default)(".js-nav-primary").height() : 0;
            return n.data("sticky") ? (n.data("sticky").topSpacing = e, void n.sticky("update")) : void n.sticky({
                wrapperClassName: "sticky",
                topSpacing: e
            });
        }
        function a() {
            s.on("remove", function(e) {
                e.key === _page_constants2.default.FILTER_KEY_SIMILAR_TO && _Filters2.default.change({
                    sort: _Filters2.default.DEFAULTS.sort
                });
            }), s.on("removeall", function() {
                _Filters2.default.get("similar_to") || _Filters2.default.get("sort") !== _page_constants2.default.SORT_KEY_MOST_SIMILAR || _Filters2.default.change({
                    sort: _Filters2.default.DEFAULTS.sort
                });
            });
        }
        var r, s, n = (0, _jquery2.default)(".js-sorts-container", e);
        (0, _jquery2.default)(document.body).hasClass("logged-out") && _media2.default.is("desktop") && (t(), 
        _media2.default.on("all", t)), r = new _Sorts2.default(n), r.rendered(), this.crumbs = s = new _Breadcrumbs2.default((0, 
        _jquery2.default)("#breadcrumbs-container .grid-site", e)), s.nubbies = [ _page_constants2.default.FILTER_KEY_AWARDS, _page_constants2.default.FILTER_KEY_TOOLS, _page_constants2.default.FILTER_KEY_SCHOOLS, _page_constants2.default.FILTER_KEY_CLIENTS ].reduce(function(e, t) {
            return e[t] = _Breadcrumbs2.default.pipeMap.bind(t, constantsTransform), e[t].default = resetPiped, 
            e;
        }, {}), s.nubbies[_page_constants2.default.FILTER_KEY_USER_TAGS] = _Breadcrumbs2.default.pipeMap.bind(_page_constants2.default.FILTER_KEY_USER_TAGS, function(e) {
            return _page_constants2.default.TAGS[e] && _page_constants2.default.TAGS[e].n;
        }), s.nubbies[_page_constants2.default.FILTER_KEY_USER_TAGS].default = resetPiped, 
        s.nubbies[_page_constants2.default.FILTER_KEY_COLOR_HEX] = function(e) {
            return "#" + e;
        }, s.nubbies[_page_constants2.default.FILTER_KEY_COLOR_HEX].default = function() {
            var e = {};
            return e[_page_constants2.default.FILTER_KEY_COLOR_HEX] = void 0, e[_page_constants2.default.FILTER_KEY_COLOR_RANGE] = void 0, 
            e;
        }, s.nubbies[_page_constants2.default.FILTER_KEY_RANK] = function(e) {
            var t = [];
            return "all" !== e && (_page_constants2.default.RANKS.forEach(function(a) {
                e.indexOf(a.value) !== -1 && t.push(a.label);
            }), t.join(", "));
        }, s.nubbies[_page_constants2.default.FILTER_KEY_RANK].default = "", s.nubbies[_page_constants2.default.FILTER_KEY_SEARCH] = function(e) {
            return e && e.trim() || void 0;
        }, s.nubbies[_page_constants2.default.FILTER_KEY_SIMILAR_TO] = function() {
            return "Similar to: " + _page_constants2.default.SIMILAR_OBJECT_NAME;
        }, s._view.on("postrender", function(e) {
            (0, _jquery2.default)("#site-content").toggleClass("has-breadcrumbs", !!e.find(".js-crumb").length);
        }), s.bind(_Filters2.default), s.on({
            remove: _coordinator2.default.trigger.bind(_coordinator2.default, "crumbs:remove"),
            removeall: _coordinator2.default.trigger.bind(_coordinator2.default, "crumbs:removeall")
        }), _loader2.default.load.then(function(e) {
            _jquery2.default.extend(!0, _page_constants2.default, {
                SCHOOLS: e.search_schools,
                BRANDS: e.search_brands,
                TOOLS: e.search_tools,
                TAGS: e.search_tags
            }), s.render(_Filters2.default.data());
        }), a(), e.on("click", ".js-search-projects-similar", _Filters2.default.freshSimilarProjectsSearch.bind(_Filters2.default)).on("click", ".js-search-users-similar", _Filters2.default.freshSimilarUsersSearch.bind(_Filters2.default));
    }
}, module.exports = exports.default;

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _View = __webpack_require__(25), _View2 = _interopRequireDefault(_View), _localization = __webpack_require__(4), _localization2 = _interopRequireDefault(_localization), _simple = __webpack_require__(45), _simple2 = _interopRequireDefault(_simple), constructor = _View2.default.extend({
    init: function(e, i) {
        this.$view = e, this._model = i, this.rendered();
    },
    destroy: function() {
        this._model.off(null, null, this);
    },
    rendered: function() {
        var e = this;
        this._model.on("following", function(e) {
            this.$view.toggleClass("following", e), this.$view.data("following", e), e && this.$view.addClass("following-hold").one("mouseleave", function() {
                (0, _jquery2.default)(this).removeClass("following-hold");
            });
        }, this), this.$view.on("click", function(i) {
            i.stopPropagation();
            var l = (0, _jquery2.default)(this).data(), t = {
                backfill: l.backfill
            };
            e._controller.follow(t);
        });
    }
}, {
    rateLimitPopup: function(e) {
        var i = e ? e + "<br /><br />" : "";
        (0, _simple2.default)({
            title: _localization2.default.translate("following_limit", "Following Limit"),
            html: i + _localization2.default.translate("following_help_link", 'Please read about our <a href="https://help.behance.net/entries/48445480-Following-limits-on-Behance">following limits</a>.'),
            buttons: []
        });
    }
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getEncodedUrl(e) {
    var t = "/search?", r = {};
    return Object.keys(e).map(function(t) {
        r[t] = encodeURIComponent(e[t]);
    }), t += _jquery2.default.param(r);
}

function onPopstate(e) {
    if (e.originalEvent) {
        var t = _history2.default.getState();
        t && (!t.filters && Object.keys(t).length || (_Filters2.default.rectify(t.filters && t.filters.content), 
        _Filters2.default.DEFAULTS = t.defaults || _Filters2.default.DEFAULTS, _Filters2.default.reset(), 
        _correction2.default.clear(t.changed), _Filters2.default.change(t.filters)));
    }
}

function onFilter() {
    onFilter.count = onFilter.count || 0, onFilter.count++ || (0, _async2.default)(updateUrl);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _async = __webpack_require__(53), _async2 = _interopRequireDefault(_async), _diff = __webpack_require__(285), _diff2 = _interopRequireDefault(_diff), _deparam = __webpack_require__(334), _deparam2 = _interopRequireDefault(_deparam), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _correction = __webpack_require__(342), _correction2 = _interopRequireDefault(_correction), _history = __webpack_require__(52), _history2 = _interopRequireDefault(_history), _window = __webpack_require__(7), _window2 = _interopRequireDefault(_window), query = new RegExp("(?:" + _window2.default.location.pathname + "|search)\\?([^#]*)"), onLink, updateUrl;

onLink = function(e) {
    if (this.pathname === _window2.default.location.pathname) {
        var t = query.exec(decodeURIComponent(this.href));
        t && (e.preventDefault(), t = (0, _deparam2.default)(t[1]), _Filters2.default.change(t));
    }
}, updateUrl = function() {
    var e, t = _history2.default.getState().filters || (0, _deparam2.default)(_window2.default.location.search.replace(/^\?/, "")), r = _Filters2.default.getTruthyData();
    Object.keys((0, _diff2.default)(r, t)).length && (e = decodeURIComponent(getEncodedUrl(r)), 
    _history2.default.pushState({
        filters: r,
        changed: _correction2.default.changed(),
        defaults: _Filters2.default.DEFAULTS
    }, document.title, e)), onFilter.count = 0;
}, exports.default = {
    init: function(e) {
        (0, _jquery2.default)(window).on("popstate", onPopstate), (0, _jquery2.default)(document.body).on("click", e || "", onLink), 
        _Filters2.default.on("all", onFilter);
    },
    destroy: function() {
        (0, _jquery2.default)(window).off(onPopstate), (0, _jquery2.default)(document.body).off(onLink), 
        _Filters2.default.off(null, onFilter);
    }
}, module.exports = exports.default;

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _async = __webpack_require__(53), _async2 = _interopRequireDefault(_async), _media = __webpack_require__(35), _media2 = _interopRequireDefault(_media), _Filters = __webpack_require__(99), _Filters2 = _interopRequireDefault(_Filters), _Sidebar = __webpack_require__(1084), _Sidebar2 = _interopRequireDefault(_Sidebar);

__webpack_require__(294);

var api = {
    init: function(e) {
        var t, i = e.find("#filters"), a = this.sticky.bind(this, e), r = e.find(".js-discover-search");
        a(), _media2.default.on("all", a), _Filters2.default.on("search", r.val.bind(r)), 
        _Filters2.default.on([ _page_constants2.default.FILTER_KEY_SEARCH, _page_constants2.default.FILTER_KEY_USER_TAGS, _page_constants2.default.FILTER_KEY_SCHOOLS, _page_constants2.default.FILTER_KEY_TOOLS, _page_constants2.default.FILTER_KEY_CLIENTS, _page_constants2.default.FILTER_KEY_COLOR_HEX ].join(" "), function() {
            (0, _async2.default)(a);
        }, this), t = new _Sidebar2.default(i), t.rendered();
    },
    destroy: function() {
        _Filters2.default.off(null, null, this);
    },
    sticky: function(e) {
        var t = e.find(".js-sticky-filters"), i = t.length ? t : e.find("#sidebar-fixed"), a = (0, 
        _jquery2.default)(".js-nav-primary").height() + (0, _jquery2.default)(".js-sorts-container").height() + 20;
        return i.data("sticky") ? (i.data("sticky").topSpacing = a, void i.sticky("update")) : void i.sticky({
            wrapperClassName: "sticky",
            topSpacing: a
        }).parent().css("height", "");
    }
};

exports.default = api, module.exports = exports.default;

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _getPageJSON = __webpack_require__(112), _getPageJSON2 = _interopRequireDefault(_getPageJSON);

exports.default = (0, _getPageJSON2.default)("beconfig-page_gates"), module.exports = exports.default;

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<li class=\"ui-menu-item\">");t.b("\n" + i);t.b("  <a class=\"mention-user-wrap\">");t.b("\n" + i);t.b("    <img class=\"mention-user-image\" src=\"");t.b(t.v(t.d("images.50",c,p,0)));t.b("\" />");t.b("\n" + i);t.b("    <div class=\"mention-displayname\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    <div class=\"mention-minor\">@");t.b(t.v(t.f("username",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("  </a>");t.b("\n" + i);t.b("</li>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<li class=\"ui-menu-item\">\n  <a class=\"mention-user-wrap\">\n    <img class=\"mention-user-image\" src=\"{{images.50}}\" />\n    <div class=\"mention-displayname\">{{display_name}}</div>\n    <div class=\"mention-minor\">@{{username}}</div>\n  </a>\n</li>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"form/_textInner": __webpack_require__(83).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"");if(!t.s(t.f("unstyled",c,p,1),c,p,1,0,0,"")){t.b("form-item form-item-text");};t.b(" be-placeholder");if(t.s(t.f("containerClasses",c,p,1),c,p,0,98,104,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b("\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("-container\">");t.b("\n" + i);t.b(t.rp("<form/_textInner0",c,p,"  "));t.b("</div>");t.b("\n");return t.fl(); },partials: {"<form/_textInner0":{name:"form/_textInner", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"{{^unstyled}}form-item form-item-text{{/unstyled}} be-placeholder{{#containerClasses}} {{.}}{{/containerClasses}}\" id=\"{{id}}-container\">\n  {{>form/_textInner}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 75:
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

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _remoteLogger = __webpack_require__(14), _remoteLogger2 = _interopRequireDefault(_remoteLogger), _dialog = __webpack_require__(75), _dialog2 = _interopRequireDefault(_dialog);

exports.default = {
    mustache: _dialog2.default,
    _signUp: function() {
        _remoteLogger2.default.info("onboarding", "Sign up dialog click", {
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
        var e = (0, _extend2.default)({
            classes: [ "popup--onboarding" ],
            displayAction: {}
        }, this._super());
        return e.displayAction[e.action] = !0, e;
    }
}, module.exports = exports.default;

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_userLink": __webpack_require__(223).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"profile-item ");t.sub("classes",c,p,i);t.b("\">");t.b("\n" + i);t.b("  <a class=\"profile-item__image js-mini-profile\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" ");t.sub("attr",c,p,i);t.b(">");t.b("\n" + i);t.b("    <img src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" />");t.b("\n" + i);t.b("  </a>");t.b("\n" + i);t.b("  <div class=\"profile-item__info\">");t.b("\n" + i);t.b("    <a target=\"_blank\" class=\"profile-item__name js-mini-profile\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" ");t.sub("attr",c,p,i);t.b(">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a>");t.b("\n" + i);if(t.s(t.f("location",c,p,1),c,p,0,383,519,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <a target=\"_blank\" class=\"profile-item__location beicons-pre beicons-pre-location\" href=\"");t.b(t.v(t.f("location_link",c,p,0)));t.b("\">");t.b(t.v(t.f("location",c,p,0)));t.b("</a>");t.b("\n" + i);});c.pop();}t.b("  </div>");t.b("\n" + i);t.b(t.rp("<lib/_follow/_userLink0",c,p,"  "));t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_follow/_userLink0":{name:"lib/_follow/_userLink", partials: {}, subs: {  }}}, subs: { "classes": function(c,p,t,i) {},"attr": function(c,p,t,i) {} }}, "<div class=\"profile-item {{$classes}}{{/classes}}\">\n  <a class=\"profile-item__image js-mini-profile\" href=\"{{url}}\" data-id=\"{{id}}\" {{$attr}}{{/attr}}>\n    <img src=\"{{images.115}}\" />\n  </a>\n  <div class=\"profile-item__info\">\n    <a target=\"_blank\" class=\"profile-item__name js-mini-profile\" href=\"{{url}}\" data-id=\"{{id}}\" {{$attr}}{{/attr}}>{{display_name}}</a>\n    {{#location}}\n      <a target=\"_blank\" class=\"profile-item__location beicons-pre beicons-pre-location\" href=\"{{location_link}}\">{{location}}</a>\n    {{/location}}\n  </div>\n  {{>lib/_follow/_userLink}}\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(10), _jquery2.default.fn.changeInput = function(e, t, a) {
    var d = "object" === ("undefined" == typeof a ? "undefined" : _typeof(a)) && "undefined" != typeof a.extra_event_args ? a.extra_event_args : [];
    return "undefined" != typeof e && (0, _jquery2.default)(this).each(function(a) {
        var i, n, c, o, r, s = (0, _jquery2.default)(this);
        if (s.is("input, button, textarea, select, optgroup, option") && (i = s.val(), "undefined" == typeof t || "val" !== e && "value" !== e || (s.data("uiSelectmenuold") || s.data("selectmenu") ? s.selectmenuold("value", t) : (s.val(t), 
        s.triggerHandler("change", d)))), s.is("input:not([type=hidden]), button, textarea, select, optgroup, option, .form-button")) {
            switch (n = this.disabled || s.attr("disabled"), r = !1, e) {
              case "disable":
                r = !0;
                break;

              case "enable":
                r = !1;
                break;

              case "toggleDisabled":
                r = "undefined" != typeof t ? Boolean(t) : !this.disabled;
            }
            r != n && (c = s.is("[type=submit], [type=button], button, .form-button, .form-submit") ? "disabled form-button-disabled" : "disabled", 
            r ? (s.addClass(c).trigger("disable", d).attr("disabled", !0), s.is("select") && s.next().addClass(c), 
            (s.data("uiSelectmenuold") || s.data("selectmenu")) && s.selectmenuold("disable")) : (s.removeClass(c).attr("disabled", !1).trigger("enable", d), 
            s.is("select") && s.next().removeClass(c), (s.data("uiSelectmenuold") || s.data("selectmenu")) && s.selectmenuold("enable")));
        }
        if (s.is("[type=checkbox], [type=radio]")) {
            switch (o = this.checked, e) {
              case "check":
                this.checked = !0;
                break;

              case "uncheck":
                this.checked = !1;
                break;

              case "toggleChecked":
                "undefined" != typeof t ? this.checked = Boolean(t) : this.checked = !this.checked;
            }
            this.checked != o && (s.triggerHandler("click", d), this.checked ? s.addClass("checked").attr("checked", !0).trigger("check", d) : s.removeClass("checked").attr("checked", !1).trigger("uncheck", d));
        }
    }), this;
};

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_savingSpinner": __webpack_require__(50).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"form-item form-item-textarea");if(t.s(t.f("containerClasses",c,p,1),c,p,0,61,67,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b("\">");t.b("\n" + i);t.b("  ");if(t.s(t.f("label",c,p,1),c,p,0,103,204,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<label for=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.t(t.f("label",c,p,0)));if(t.s(t.f("saving_spinner",c,p,1),c,p,0,153,177,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_savingSpinner0",c,p,""));});c.pop();}t.b("</label>");});c.pop();}t.b("\n" + i);t.b("  <textarea id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" name=\"");t.b(t.v(t.f("name",c,p,0)));if(!t.s(t.f("name",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.f("id",c,p,0)));};t.b("\" class=\"form-textarea");if(t.s(t.f("classes",c,p,1),c,p,0,311,317,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b("\"");t.b("\n" + i);t.b("    ");if(t.s(t.f("maxlength",c,p,1),c,p,0,349,375,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" maxlength=\"");t.b(t.v(t.f("maxlength",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("    ");if(t.s(t.f("placeholder",c,p,1),c,p,0,410,440,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" placeholder=\"");t.b(t.v(t.f("placeholder",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("    ");if(t.s(t.f("autocomplete",c,p,1),c,p,0,478,510,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" autocomplete=\"");t.b(t.v(t.f("autocomplete",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("    data-validate=\"");t.b(t.v(t.f("validate",c,p,0)));t.b("\">");t.b(t.v(t.f("value",c,p,0)));t.b("</textarea>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_savingSpinner0":{name:"lib/_savingSpinner", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"form-item form-item-textarea{{#containerClasses}} {{.}}{{/containerClasses}}\">\n  {{#label}}<label for=\"{{id}}\">{{{label}}}{{#saving_spinner}}{{> lib/_savingSpinner}}{{/saving_spinner}}</label>{{/label}}\n  <textarea id=\"{{id}}\" name=\"{{name}}{{^name}}{{id}}{{/name}}\" class=\"form-textarea{{#classes}} {{.}}{{/classes}}\"\n    {{#maxlength}} maxlength=\"{{maxlength}}\"{{/maxlength}}\n    {{#placeholder}} placeholder=\"{{placeholder}}\"{{/placeholder}}\n    {{#autocomplete}} autocomplete=\"{{autocomplete}}\"{{/autocomplete}}\n    data-validate=\"{{validate}}\">{{value}}</textarea>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<ul class=\"colors cfix\">");t.b("\n" + i);t.b("  <li class=\"color color-0-0\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-0-1\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-0-2\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-0-3\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-0-4\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-0-5\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-0-6\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-0-7\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-0-8\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-0-9\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-0-10\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-0-11\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-0\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-1\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-2\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-3\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-4\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-5\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-6\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-7\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-8\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-9\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-10\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-1-11\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-0\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-1\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-2\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-3\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-4\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-5\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-6\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-7\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-8\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-9\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-10\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-2-11\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-0\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-1\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-2\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-3\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-4\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-5\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-6\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-7\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-8\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-9\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-10\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-3-11\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-0\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-1\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-2\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-3\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-4\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-5\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-6\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-7\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-8\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-9\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-10\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-4-11\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-0\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-1\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-2\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-3\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-4\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-5\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-6\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-7\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-8\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-9\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-10\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-5-11\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-0\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-1\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-2\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-3\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-4\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-5\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-6\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-7\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-8\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-9\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-10\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-6-11\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-0\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-1\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-2\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-3\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-4\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-5\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-6\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-7\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-8\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-9\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-10\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-7-11\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-0\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-1\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-2\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-3\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-4\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-5\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-6\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-7\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-8\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-9\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-10\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-8-11\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-0\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-1\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-2\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-3\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-4\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-5\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-6\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-7\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-8\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-9\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-10\"></li>");t.b("\n" + i);t.b("  <li class=\"color color-9-11\"></li>");t.b("\n" + i);t.b("</ul>");t.b("\n" + i);t.b("<div class=\"search-option-confirm hide\">");t.b("\n" + i);t.b("  <div class=\"segment first-segment\">");t.b("\n" + i);t.b("    <span class=\"swatch\" style=\"background-color:#ac1d1c\"></span>");t.b("\n" + i);t.b("    <span class=\"hex\">#AC1D1C</span>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"segment ui-slider-bordered\">");t.b("\n" + i);t.b("    <div class=\"left\">");if(t.s(t.f("translate",c,p,1),c,p,0,4641,4673,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_label_variance|Variance");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("    <div class=\"variance left\"></div>");t.b("\n" + i);t.b("    <div class=\"left\">");t.b("\n" + i);t.b("      <span class=\"left-percentage\">% </span><input type=\"text\" class=\"variance-input form-text form-text-slider-value\" /><span class=\"right-percentage\"> %</span>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<ul class=\"colors cfix\">\n  <li class=\"color color-0-0\"></li>\n  <li class=\"color color-0-1\"></li>\n  <li class=\"color color-0-2\"></li>\n  <li class=\"color color-0-3\"></li>\n  <li class=\"color color-0-4\"></li>\n  <li class=\"color color-0-5\"></li>\n  <li class=\"color color-0-6\"></li>\n  <li class=\"color color-0-7\"></li>\n  <li class=\"color color-0-8\"></li>\n  <li class=\"color color-0-9\"></li>\n  <li class=\"color color-0-10\"></li>\n  <li class=\"color color-0-11\"></li>\n  <li class=\"color color-1-0\"></li>\n  <li class=\"color color-1-1\"></li>\n  <li class=\"color color-1-2\"></li>\n  <li class=\"color color-1-3\"></li>\n  <li class=\"color color-1-4\"></li>\n  <li class=\"color color-1-5\"></li>\n  <li class=\"color color-1-6\"></li>\n  <li class=\"color color-1-7\"></li>\n  <li class=\"color color-1-8\"></li>\n  <li class=\"color color-1-9\"></li>\n  <li class=\"color color-1-10\"></li>\n  <li class=\"color color-1-11\"></li>\n  <li class=\"color color-2-0\"></li>\n  <li class=\"color color-2-1\"></li>\n  <li class=\"color color-2-2\"></li>\n  <li class=\"color color-2-3\"></li>\n  <li class=\"color color-2-4\"></li>\n  <li class=\"color color-2-5\"></li>\n  <li class=\"color color-2-6\"></li>\n  <li class=\"color color-2-7\"></li>\n  <li class=\"color color-2-8\"></li>\n  <li class=\"color color-2-9\"></li>\n  <li class=\"color color-2-10\"></li>\n  <li class=\"color color-2-11\"></li>\n  <li class=\"color color-3-0\"></li>\n  <li class=\"color color-3-1\"></li>\n  <li class=\"color color-3-2\"></li>\n  <li class=\"color color-3-3\"></li>\n  <li class=\"color color-3-4\"></li>\n  <li class=\"color color-3-5\"></li>\n  <li class=\"color color-3-6\"></li>\n  <li class=\"color color-3-7\"></li>\n  <li class=\"color color-3-8\"></li>\n  <li class=\"color color-3-9\"></li>\n  <li class=\"color color-3-10\"></li>\n  <li class=\"color color-3-11\"></li>\n  <li class=\"color color-4-0\"></li>\n  <li class=\"color color-4-1\"></li>\n  <li class=\"color color-4-2\"></li>\n  <li class=\"color color-4-3\"></li>\n  <li class=\"color color-4-4\"></li>\n  <li class=\"color color-4-5\"></li>\n  <li class=\"color color-4-6\"></li>\n  <li class=\"color color-4-7\"></li>\n  <li class=\"color color-4-8\"></li>\n  <li class=\"color color-4-9\"></li>\n  <li class=\"color color-4-10\"></li>\n  <li class=\"color color-4-11\"></li>\n  <li class=\"color color-5-0\"></li>\n  <li class=\"color color-5-1\"></li>\n  <li class=\"color color-5-2\"></li>\n  <li class=\"color color-5-3\"></li>\n  <li class=\"color color-5-4\"></li>\n  <li class=\"color color-5-5\"></li>\n  <li class=\"color color-5-6\"></li>\n  <li class=\"color color-5-7\"></li>\n  <li class=\"color color-5-8\"></li>\n  <li class=\"color color-5-9\"></li>\n  <li class=\"color color-5-10\"></li>\n  <li class=\"color color-5-11\"></li>\n  <li class=\"color color-6-0\"></li>\n  <li class=\"color color-6-1\"></li>\n  <li class=\"color color-6-2\"></li>\n  <li class=\"color color-6-3\"></li>\n  <li class=\"color color-6-4\"></li>\n  <li class=\"color color-6-5\"></li>\n  <li class=\"color color-6-6\"></li>\n  <li class=\"color color-6-7\"></li>\n  <li class=\"color color-6-8\"></li>\n  <li class=\"color color-6-9\"></li>\n  <li class=\"color color-6-10\"></li>\n  <li class=\"color color-6-11\"></li>\n  <li class=\"color color-7-0\"></li>\n  <li class=\"color color-7-1\"></li>\n  <li class=\"color color-7-2\"></li>\n  <li class=\"color color-7-3\"></li>\n  <li class=\"color color-7-4\"></li>\n  <li class=\"color color-7-5\"></li>\n  <li class=\"color color-7-6\"></li>\n  <li class=\"color color-7-7\"></li>\n  <li class=\"color color-7-8\"></li>\n  <li class=\"color color-7-9\"></li>\n  <li class=\"color color-7-10\"></li>\n  <li class=\"color color-7-11\"></li>\n  <li class=\"color color-8-0\"></li>\n  <li class=\"color color-8-1\"></li>\n  <li class=\"color color-8-2\"></li>\n  <li class=\"color color-8-3\"></li>\n  <li class=\"color color-8-4\"></li>\n  <li class=\"color color-8-5\"></li>\n  <li class=\"color color-8-6\"></li>\n  <li class=\"color color-8-7\"></li>\n  <li class=\"color color-8-8\"></li>\n  <li class=\"color color-8-9\"></li>\n  <li class=\"color color-8-10\"></li>\n  <li class=\"color color-8-11\"></li>\n  <li class=\"color color-9-0\"></li>\n  <li class=\"color color-9-1\"></li>\n  <li class=\"color color-9-2\"></li>\n  <li class=\"color color-9-3\"></li>\n  <li class=\"color color-9-4\"></li>\n  <li class=\"color color-9-5\"></li>\n  <li class=\"color color-9-6\"></li>\n  <li class=\"color color-9-7\"></li>\n  <li class=\"color color-9-8\"></li>\n  <li class=\"color color-9-9\"></li>\n  <li class=\"color color-9-10\"></li>\n  <li class=\"color color-9-11\"></li>\n</ul>\n<div class=\"search-option-confirm hide\">\n  <div class=\"segment first-segment\">\n    <span class=\"swatch\" style=\"background-color:#ac1d1c\"></span>\n    <span class=\"hex\">#AC1D1C</span>\n  </div>\n  <div class=\"segment ui-slider-bordered\">\n    <div class=\"left\">{{#translate}}discover_label_variance|Variance{{/translate}}</div>\n    <div class=\"variance left\"></div>\n    <div class=\"left\">\n      <span class=\"left-percentage\">% </span><input type=\"text\" class=\"variance-input form-text form-text-slider-value\" /><span class=\"right-percentage\"> %</span>\n    </div>\n  </div>\n</div>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"form/_checkbox": __webpack_require__(104).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<form class=\"creative-rank\">");t.b("\n" + i);if(t.s(t.f("options",c,p,1),c,p,0,41,61,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<form/_checkbox0",c,p,""));});c.pop();}t.b("</form>");t.b("\n");return t.fl(); },partials: {"<form/_checkbox0":{name:"form/_checkbox", partials: {}, subs: {  }}}, subs: {  }}, "<form class=\"creative-rank\">\n{{#options}}{{> form/_checkbox}}{{/options}}\n</form>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_proximity": __webpack_require__(445).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"country-container form-item cfix\">");t.b("\n" + i);t.b("  <label>");t.b(t.v(t.d("labels.COUNTRY",c,p,0)));t.b("</label>");t.b("\n" + i);t.b("  <select class=\"js-country country form-select ui-selectmenu-large\">");t.b("\n" + i);t.b("  <option class=\"form-option form-option-empty\" value=\"\">");t.b(t.v(t.d("placeholders.COUNTRY",c,p,0)));t.b("</option>");t.b("\n" + i);if(t.s(t.f("countries",c,p,1),c,p,0,260,349,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <option class=\"form-option\" data-code=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" value=\"");t.b(t.v(t.f("value",c,p,0)));t.b("\">");t.b(t.v(t.f("value",c,p,0)));t.b("</option>");t.b("\n" + i);});c.pop();}t.b("  </select>");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n" + i);t.b("<div class=\"state-container hide form-item cfix\">");t.b("\n" + i);t.b("  <label>");t.b(t.v(t.d("labels.STATE",c,p,0)));t.b("</label>");t.b("\n" + i);t.b("  <select class=\"js-state state form-select ui-selectmenu-large\">");t.b("\n" + i);t.b("  <option class=\"form-option form-option-empty\" value=\"\">");t.b(t.v(t.d("placeholders.STATE",c,p,0)));t.b("</option>");t.b("\n" + i);if(t.s(t.f("states",c,p,1),c,p,0,636,725,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <option class=\"form-option\" data-code=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" value=\"");t.b(t.v(t.f("value",c,p,0)));t.b("\">");t.b(t.v(t.f("value",c,p,0)));t.b("</option>");t.b("\n" + i);});c.pop();}t.b("  </select>");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n" + i);t.b("<div class=\"province-container hide form-item cfix\">");t.b("\n" + i);t.b("  <label>");t.b(t.v(t.d("labels.PROVINCE",c,p,0)));t.b("</label>");t.b("\n" + i);t.b("  <select class=\"js-province province form-select ui-selectmenu-large\">");t.b("\n" + i);t.b("  <option class=\"form-option form-option-empty\" value=\"\">");t.b(t.v(t.d("placeholders.PROVINCE",c,p,0)));t.b("</option>");t.b("\n" + i);if(t.s(t.f("provinces",c,p,1),c,p,0,1027,1116,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <option class=\"form-option\" data-code=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" value=\"");t.b(t.v(t.f("value",c,p,0)));t.b("\">");t.b(t.v(t.f("value",c,p,0)));t.b("</option>");t.b("\n" + i);});c.pop();}t.b("  </select>");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n" + i);t.b("<input type=\"hidden\" class=\"js-hidden-state hidden-state\" />");t.b("\n");t.b("\n" + i);t.b("<div class=\"city-container form-item cfix ui-front\">");t.b("\n" + i);t.b("  <label>");t.b(t.v(t.d("labels.CITY",c,p,0)));t.b("</label>");t.b("\n" + i);t.b("  <input type=\"text\" class=\"js-city city form-text form-text-normal disabled\" disabled=\"disabled\">");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("has_talent_search",c,p,1),c,p,0,1428,1448,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_proximity0",c,p,""));});c.pop();}return t.fl(); },partials: {"<lib/_proximity0":{name:"lib/_proximity", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"country-container form-item cfix\">\n  <label>{{labels.COUNTRY}}</label>\n  <select class=\"js-country country form-select ui-selectmenu-large\">\n  <option class=\"form-option form-option-empty\" value=\"\">{{placeholders.COUNTRY}}</option>\n  {{#countries}}\n  <option class=\"form-option\" data-code=\"{{id}}\" value=\"{{value}}\">{{value}}</option>\n  {{/countries}}\n  </select>\n</div>\n\n<div class=\"state-container hide form-item cfix\">\n  <label>{{labels.STATE}}</label>\n  <select class=\"js-state state form-select ui-selectmenu-large\">\n  <option class=\"form-option form-option-empty\" value=\"\">{{placeholders.STATE}}</option>\n  {{#states}}\n  <option class=\"form-option\" data-code=\"{{id}}\" value=\"{{value}}\">{{value}}</option>\n  {{/states}}\n  </select>\n</div>\n\n<div class=\"province-container hide form-item cfix\">\n  <label>{{labels.PROVINCE}}</label>\n  <select class=\"js-province province form-select ui-selectmenu-large\">\n  <option class=\"form-option form-option-empty\" value=\"\">{{placeholders.PROVINCE}}</option>\n  {{#provinces}}\n  <option class=\"form-option\" data-code=\"{{id}}\" value=\"{{value}}\">{{value}}</option>\n  {{/provinces}}\n  </select>\n</div>\n\n<input type=\"hidden\" class=\"js-hidden-state hidden-state\" />\n\n<div class=\"city-container form-item cfix ui-front\">\n  <label>{{labels.CITY}}</label>\n  <input type=\"text\" class=\"js-city city form-text form-text-normal disabled\" disabled=\"disabled\">\n</div>\n\n{{#has_talent_search}}{{> lib/_proximity}}{{/has_talent_search}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 814:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"list-header\">");if(t.s(t.f("translate",c,p,1),c,p,0,39,63,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("discover_label_view|View");});c.pop();}t.b("</div>");t.b("\n" + i);t.b("<ul class=\"sort-content-list ");if(t.s(t.f("phone",c,p,1),c,p,0,123,135,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("divided-list");});c.pop();}t.b("\">");t.b("\n" + i);if(t.s(t.f("contentTypes",c,p,1),c,p,0,167,286,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <li>");t.b("\n" + i);t.b("    <a class=\"beicons-pre beicons-pre-");t.b(t.v(t.f("icon",c,p,0)));t.b(" js-content-type\" data-key=\"");t.b(t.v(t.f("content",c,p,0)));t.b("\">");t.b(t.v(t.f("label",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("  </li>");t.b("\n" + i);});c.pop();}t.b("</ul>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"list-header\">{{#translate}}discover_label_view|View{{/translate}}</div>\n<ul class=\"sort-content-list {{#phone}}divided-list{{/phone}}\">\n  {{#contentTypes}}\n  <li>\n    <a class=\"beicons-pre beicons-pre-{{icon}} js-content-type\" data-key=\"{{content}}\">{{label}}</a>\n  </li>\n  {{/contentTypes}}\n</ul>", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<span class=\"js-edit-icon content-edit edit-icon beicons-pre beicons-pre-edit hide-tablet hide-phone\"></span>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<span class=\"js-edit-icon content-edit edit-icon beicons-pre beicons-pre-edit hide-tablet hide-phone\"></span>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_savingSpinner": __webpack_require__(50).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("  ");if(t.s(t.f("label",c,p,1),c,p,0,12,113,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<label for=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.t(t.f("label",c,p,0)));if(t.s(t.f("saving_spinner",c,p,1),c,p,0,62,86,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_savingSpinner0",c,p,""));});c.pop();}t.b("</label>");});c.pop();}t.b("\n" + i);t.b("  <input name=\"");t.b(t.v(t.f("name",c,p,0)));if(!t.s(t.f("name",c,p,1),c,p,1,0,0,"")){t.b(t.v(t.f("id",c,p,0)));};t.b("\" type=\"");if(t.s(t.f("type",c,p,1),c,p,0,188,196,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("type",c,p,0)));});c.pop();}if(!t.s(t.f("type",c,p,1),c,p,1,0,0,"")){t.b("text");};t.b("\" class=\"");if(!t.s(t.f("unstyled",c,p,1),c,p,1,0,0,"")){t.b("form-text");};if(t.s(t.f("classes",c,p,1),c,p,0,283,289,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.d(".",c,p,0)));});c.pop();}t.b(" validate[");t.b(t.v(t.f("validate",c,p,0)));t.b("]\" id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  ");if(t.s(t.f("disabled",c,p,1),c,p,0,353,373,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" disabled=\"disabled\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("placeholder",c,p,1),c,p,0,405,437,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" placeholder=\"");t.b(t.t(t.f("placeholder",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("autocomplete",c,p,1),c,p,0,473,505,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" autocomplete=\"");t.b(t.v(t.f("autocomplete",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("autocapitalize",c,p,1),c,p,0,544,580,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" autocapitalize=\"");t.b(t.v(t.f("autocapitalize",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("autocorrect",c,p,1),c,p,0,618,648,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" autocorrect=\"");t.b(t.v(t.f("autocorrect",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("value",c,p,1),c,p,0,677,695,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" value=\"");t.b(t.v(t.f("value",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  ");if(t.s(t.f("maxlength",c,p,1),c,p,0,722,748,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" maxlength=\"");t.b(t.v(t.f("maxlength",c,p,0)));t.b("\"");});c.pop();}t.b("\n" + i);t.b("  data-validate=\"");t.b(t.v(t.f("validate",c,p,0)));t.b("\">");t.b("\n");return t.fl(); },partials: {"<lib/_savingSpinner0":{name:"lib/_savingSpinner", partials: {}, subs: {  }}}, subs: {  }}, "  {{#label}}<label for=\"{{id}}\">{{{label}}}{{#saving_spinner}}{{> lib/_savingSpinner}}{{/saving_spinner}}</label>{{/label}}\n  <input name=\"{{name}}{{^name}}{{id}}{{/name}}\" type=\"{{#type}}{{type}}{{/type}}{{^type}}text{{/type}}\" class=\"{{^unstyled}}form-text{{/unstyled}}{{#classes}} {{.}}{{/classes}} validate[{{validate}}]\" id=\"{{id}}\"\n  {{#disabled}} disabled=\"disabled\"{{/disabled}}\n  {{#placeholder}} placeholder=\"{{{placeholder}}}\"{{/placeholder}}\n  {{#autocomplete}} autocomplete=\"{{autocomplete}}\"{{/autocomplete}}\n  {{#autocapitalize}} autocapitalize=\"{{autocapitalize}}\"{{/autocapitalize}}\n  {{#autocorrect}} autocorrect=\"{{autocorrect}}\"{{/autocorrect}}\n  {{#value}} value=\"{{value}}\"{{/value}}\n  {{#maxlength}} maxlength=\"{{maxlength}}\"{{/maxlength}}\n  data-validate=\"{{validate}}\">\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, ".popup.mini-profile:before{width:20px;height:20px;background:#fff;box-shadow:-2px -2px 4px -2px rgba(0,0,0,0.4);content:'';position:absolute;z-index:-1}.popup.mini-profile.top-right:before,.popup.mini-profile.top-left:before{-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-8px}.popup.mini-profile.bottom-right:before,.popup.mini-profile.bottom-left:before{-moz-transform:rotate(-134deg);-ms-transform:rotate(-134deg);-o-transform:rotate(-134deg);-webkit-transform:rotate(-134deg);transform:rotate(-134deg);bottom:-8px}.popup.mini-profile.top-right:before,.popup.mini-profile.bottom-right:before{right:45px}.popup.mini-profile.top-left:before,.popup.mini-profile.bottom-left:before{left:45px}.mini-profile-wrap{width:331px}.mini-profile-wrap .gallery-projects-wrap{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;border:1px solid #d9d9d9;border-radius:4px;padding:4px 3px 4px 1px;position:relative;text-decoration:none;width:361px}.mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay{background:#0088f5;background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0,156,252,0.75)), to(rgba(0,116,238,0.75)));background:-webkit-linear-gradient(0% 0%, 0% 100%, from(rgba(0,156,252,0.75)), to(rgba(0,116,238,0.75)));background:-moz-linear-gradient(center top, rgba(0,156,252,0.75), rgba(0,116,238,0.75));background:linear-gradient(rgba(0,156,252,0.75), rgba(0,116,238,0.75));-webkit-transition:opacity .15s ease-in;-moz-transition:opacity .15s ease-in;transition:opacity 0.15s ease-in;border:1px solid #356bca;border-radius:4px;bottom:0;color:#fff;font-size:16px;left:0;opacity:0;position:absolute;right:0;text-align:center;text-decoration:none !important;text-shadow:1px 2px 0 #0a4fb9;text-transform:uppercase;top:0}.ie .mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay{display:none;font-weight:bold}.mini-profile-wrap .gallery-projects-wrap:hover .gallery-cover-overlay{opacity:1}.ie .mini-profile-wrap .gallery-projects-wrap:hover .gallery-cover-overlay{background:rgba(0,156,252,0.75);display:block}.mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay-text{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);transform:translateY(-50%);position:absolute;top:50%;width:100%}.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;background:#f3f3f3;border-left:3px solid #fff;float:left;height:90px;overflow:hidden;width:33.3%}.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap .project-cover{border-radius:0;box-shadow:none;margin:0;vertical-align:top;visibility:visible;width:100%}.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap.empty .project-cover{display:none}.mini-profile-wrap .gallery-projects-wrap-4{width:479px}.mini-profile-wrap .gallery-projects-wrap-4 .project-cover-wrap{width:25%}.mini-profile-wrap .gallery-projects-wrap-4 .project-cover-wrap:nth-child(n+5){display:none}.mini-profile-wrap .gallery-projects-wrap-2{width:242px}.mini-profile-wrap .gallery-projects-wrap-2 .project-cover-wrap{width:50%}.mini-profile-wrap .gallery-projects-wrap-2 .project-cover-wrap:nth-child(n+3){display:none}.mini-profile-wrap .user-image-wrap,.mini-profile-wrap .user-image{width:35px;height:35px}.mini-profile-wrap .user-image-wrap{background:#f3f3f3;display:block;float:left;margin:0 10px 0 0;padding:0}.mini-profile-wrap .user-info{display:inline-block;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mini-profile-wrap .user-name{color:#3c3c3c;display:block;font-size:14px;padding-bottom:3px}.mini-profile-wrap .location-link{color:#6f6f6f;font-size:13px}.mini-profile-wrap .location-link:before{margin-right:3px}.mini-profile-wrap .follow-button-container{float:right;width:auto !important}.mini-profile-wrap .gallery-projects-wrap{float:left;margin:0 0 10px;width:331px}.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap{display:block !important;height:82px;width:108px}.mini-profile-wrap .user-stats-followed{float:inherit}.mini-profile-wrap .user-info-container{display:inline-block}.mini-profile-wrap .stats-wrap{color:#adadad;font-size:13px;font-weight:bold;margin-bottom:-2px}.mini-profile-wrap .cover-stat{margin-right:10px}.mini-profile-wrap .cover-stat:before{margin-right:2px}\n\n/*# sourceMappingURL=mini.css.map */", ""]);

// exports


/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"_icons/_social/_facebook": __webpack_require__(163).template,"_icons/_social/_twitter": __webpack_require__(166).template,"_icons/_social/_pinterest": __webpack_require__(165).template,"_icons/_social/_linkedin": __webpack_require__(164).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"social-sharing__icons js-social-sharing\"");t.b("\n" + i);t.b("  ");if(t.s(t.f("is_owner",c,p,1),c,p,0,68,188,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("data-text='");if(t.s(t.f("translate",c,p,1),c,p,0,93,173,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_social_sharing_my_text|Check out my @Behance project: \"");t.b(t.v(t.f("name",c,p,0)));t.b("\" ");t.b(t.v(t.f("url",c,p,0)));});c.pop();}t.b("'");});c.pop();}t.b("\n" + i);t.b("  ");if(!t.s(t.f("is_owner",c,p,1),c,p,1,0,0,"")){t.b("data-text='");if(t.s(t.f("translate",c,p,1),c,p,0,242,321,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_social_sharing_text|Check out this @Behance project: \"");t.b(t.v(t.f("name",c,p,0)));t.b("\" ");t.b(t.v(t.f("url",c,p,0)));});c.pop();}t.b("'");};t.b("\n" + i);t.b("  data-image='");t.b(t.v(t.d("covers.original",c,p,0)));t.b("'");t.b("\n" + i);t.b("  data-url=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  data-from=\"");t.sub("from",c,p,i);t.b("\">");t.b("\n" + i);t.b("  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--facebook\" data-service=\"facebook\">");t.b(t.rp("<_icons/_social/_facebook0",c,p,""));t.b("</div>");t.b("\n" + i);t.b("  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--twitter\" data-service=\"twitter\">");t.b(t.rp("<_icons/_social/_twitter1",c,p,""));t.b("</div>");t.b("\n" + i);t.b("  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--pinterest\" data-service=\"pinterest\">");t.b(t.rp("<_icons/_social/_pinterest2",c,p,""));t.b("</div>");t.b("\n" + i);t.b("  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--linkedin\" data-service=\"linkedin\">");t.b(t.rp("<_icons/_social/_linkedin3",c,p,""));t.b("</div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<_icons/_social/_facebook0":{name:"_icons/_social/_facebook", partials: {}, subs: {  }},"<_icons/_social/_twitter1":{name:"_icons/_social/_twitter", partials: {}, subs: {  }},"<_icons/_social/_pinterest2":{name:"_icons/_social/_pinterest", partials: {}, subs: {  }},"<_icons/_social/_linkedin3":{name:"_icons/_social/_linkedin", partials: {}, subs: {  }}}, subs: { "from": function(c,p,t,i) {} }}, "<div class=\"social-sharing__icons js-social-sharing\"\n  {{#is_owner}}data-text='{{#translate}}project_social_sharing_my_text|Check out my @Behance project: \"{{name}}\" {{url}}{{/translate}}'{{/is_owner}}\n  {{^is_owner}}data-text='{{#translate}}project_social_sharing_text|Check out this @Behance project: \"{{name}}\" {{url}}{{/translate}}'{{/is_owner}}\n  data-image='{{covers.original}}'\n  data-url=\"{{url}}\"\n  data-from=\"{{$from}}{{/from}}\">\n  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--facebook\" data-service=\"facebook\">{{>_icons/_social/_facebook}}</div>\n  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--twitter\" data-service=\"twitter\">{{>_icons/_social/_twitter}}</div>\n  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--pinterest\" data-service=\"pinterest\">{{>_icons/_social/_pinterest}}</div>\n  <div class=\"js-viral-share-buttons social-sharing__icon social-sharing__icon--linkedin\" data-service=\"linkedin\">{{>_icons/_social/_linkedin}}</div>\n</div>\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_follow/_buttonUserSmall": __webpack_require__(51).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("user",c,p,1),c,p,0,9,1814,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"mini-profile-wrap hide-phone hide-tablet cfix\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"user-info-container cfix\">");t.b("\n" + i);t.b("    <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"user-image-wrap user-image-link\">");t.b("\n" + i);t.b("      <img src=\"");t.b(t.v(t.d("images.115",c,p,0)));t.b("\" class=\"user-image\">");t.b("\n" + i);t.b("    </a>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"user-info\">");t.b("\n" + i);t.b("      <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"user-name\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("      <a target=\"_blank\" href=\"");t.b(t.v(t.f("location_link",c,p,0)));t.b("\" class=\"location-link beicons-pre beicons-pre-location\">");if(t.s(t.f("city",c,p,1),c,p,0,474,484,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("city",c,p,0)));t.b(", ");});c.pop();}if(t.s(t.f("state",c,p,1),c,p,0,503,514,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("state",c,p,0)));t.b(", ");});c.pop();}if(t.s(t.f("country",c,p,1),c,p,0,536,547,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.v(t.f("country",c,p,0)));});c.pop();}t.b("</a>");t.b("\n" + i);t.b("    </div> <!-- .user-info -->");t.b("\n" + i);t.b("  </div> <!-- .user-info-container -->");t.b("\n");t.b("\n" + i);t.b(t.rp("<lib/_follow/_buttonUserSmall0",c,p,"  "));t.b("\n" + i);if(t.s(t.f("has_latest_projects",c,p,1),c,p,0,698,1327,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a target=\"_blank\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"cfix user-view-link gallery-projects-wrap\">");t.b("\n" + i);t.b("      <ul class=\"project-cover-container\">");t.b("\n" + i);if(t.s(t.f("latest_projects",c,p,1),c,p,0,855,1003,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li class=\"project-cover-wrap\">");t.b("\n" + i);t.b("          ");if(t.s(t.d("covers.115",c,p,1),c,p,0,921,969,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<img src=\"");t.b(t.v(t.d("covers.115",c,p,0)));t.b("\" class=\"project-cover\">");});c.pop();}t.b("\n" + i);t.b("        </li>");t.b("\n" + i);});c.pop();}t.b("      </ul> <!-- .project-cover-container -->");t.b("\n" + i);t.b("      <span class=\"gallery-cover-overlay\">");t.b("\n" + i);t.b("        <div class=\"gallery-cover-overlay-text\">");if(t.s(t.f("translate",c,p,1),c,p,0,1175,1211,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("user_cover_view_profile|View Profile");});c.pop();}t.b("&nbsp;<span class=\"rarr\">&rarr;</span></div>");t.b("\n" + i);t.b("      </span>");t.b("\n" + i);t.b("    </a> <!-- .gallery-projects-wrap -->");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("stats",c,p,1),c,p,0,1365,1768,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"stats-wrap\">");t.b("\n");t.b("\n" + i);t.b("    <span class=\"cover-stat beicons-pre beicons-pre-eye cover-stat-views\">");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("views",c,p,0)));t.b("\n" + i);t.b("    </span>");t.b("\n");t.b("\n" + i);t.b("    <span class=\"cover-stat beicons-pre beicons-pre-thumb cover-stat-appreciations\">");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("appreciations",c,p,0)));t.b("\n" + i);t.b("    </span>");t.b("\n");t.b("\n" + i);t.b("    <span class=\"cover-stat beicons-pre beicons-pre-followers user-stats-followed\">");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("followers",c,p,0)));t.b("\n" + i);t.b("    </span>");t.b("\n" + i);t.b("  </div> <!-- .stats-wrap -->");t.b("\n" + i);});c.pop();}t.b("</div> <!-- .mini-profile-wrap -->");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {"<lib/_follow/_buttonUserSmall0":{name:"lib/_follow/_buttonUserSmall", partials: {}, subs: {  }}}, subs: {  }}, "{{#user}}\n<div class=\"mini-profile-wrap hide-phone hide-tablet cfix\">\n\n  <div class=\"user-info-container cfix\">\n    <a target=\"_blank\" href=\"{{url}}\" class=\"user-image-wrap user-image-link\">\n      <img src=\"{{images.115}}\" class=\"user-image\">\n    </a>\n\n    <div class=\"user-info\">\n      <a target=\"_blank\" href=\"{{url}}\" class=\"user-name\">{{display_name}}</a>\n      <a target=\"_blank\" href=\"{{location_link}}\" class=\"location-link beicons-pre beicons-pre-location\">{{#city}}{{city}}, {{/city}}{{#state}}{{state}}, {{/state}}{{#country}}{{country}}{{/country}}</a>\n    </div> <!-- .user-info -->\n  </div> <!-- .user-info-container -->\n\n  {{>lib/_follow/_buttonUserSmall}}\n\n  {{#has_latest_projects}}\n    <a target=\"_blank\" href=\"{{url}}\" class=\"cfix user-view-link gallery-projects-wrap\">\n      <ul class=\"project-cover-container\">\n    {{#latest_projects}}\n        <li class=\"project-cover-wrap\">\n          {{#covers.115}}<img src=\"{{covers.115}}\" class=\"project-cover\">{{/covers.115}}\n        </li>\n    {{/latest_projects}}\n      </ul> <!-- .project-cover-container -->\n      <span class=\"gallery-cover-overlay\">\n        <div class=\"gallery-cover-overlay-text\">{{#translate}}user_cover_view_profile|View Profile{{/translate}}&nbsp;<span class=\"rarr\">&rarr;</span></div>\n      </span>\n    </a> <!-- .gallery-projects-wrap -->\n  {{/has_latest_projects}}\n\n  {{#stats}}\n  <div class=\"stats-wrap\">\n\n    <span class=\"cover-stat beicons-pre beicons-pre-eye cover-stat-views\">\n      {{views}}\n    </span>\n\n    <span class=\"cover-stat beicons-pre beicons-pre-thumb cover-stat-appreciations\">\n      {{appreciations}}\n    </span>\n\n    <span class=\"cover-stat beicons-pre beicons-pre-followers user-stats-followed\">\n      {{followers}}\n    </span>\n  </div> <!-- .stats-wrap -->\n  {{/stats}}\n</div> <!-- .mini-profile-wrap -->\n{{/user}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(56)(content, {});
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

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _View = __webpack_require__(25), _View2 = _interopRequireDefault(_View), _remoteLogger = __webpack_require__(14), _remoteLogger2 = _interopRequireDefault(_remoteLogger), _fatclick = __webpack_require__(129), _fatclick2 = _interopRequireDefault(_fatclick), constructor = _View2.default.extend({
    init: function(e) {
        this.$view = e instanceof _jquery2.default ? e : (0, _jquery2.default)(".project-cover[data-id=" + e + "]");
    },
    rendered: function() {
        this.fatclick(), this.$view.on("mouseenter mouseleave", ".cover-name-link, .cover-img, .controls-overlay, .edit-icon", this.toggleHover).on("click", function() {
            _remoteLogger2.default.info("project_click_tracker", "Gallery project viewed", (0, 
            _jquery2.default)(this).data());
        });
    },
    toggleHover: function(e) {
        (0, _jquery2.default)(this).closest(".project-cover").toggleClass("hover", "mouseenter" === e.type);
    },
    destroy: function() {
        this.$view.off("mouseenter mouseleave", ".cover-name-link, .cover-img, .controls-overlay, .edit-icon", this.toggleHover), 
        this._super();
    }
}).mixin(_fatclick2.default);

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.d("tools_by_synonym.0",c,p,1),c,p,0,102,140,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"project-tools-image-wrap\">");});c.pop();}t.b("\n");t.b("\n" + i);if(t.s(t.f("tools_by_synonym",c,p,1),c,p,0,186,1186,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"tooltipi-container\">");t.b("\n" + i);t.b("    <a title=\"");t.b(t.v(t.f("title",c,p,0)));t.b("\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\"><img class=\"project-tools-image\" src=\"");t.b(t.v(t.f("icon_url",c,p,0)));t.b("\"></a>");t.b("\n" + i);t.b("    <div class=\"tooltipi tooltipi-white\">");t.b("\n" + i);t.b("      <p class=\"tool-title\">");t.b(t.v(t.f("title",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("      <p><a href=\"");t.b(t.v(t.f("gallery_url",c,p,0)));t.b("\" data-search-term=\"");t.b(t.v(t.f("search_term",c,p,0)));t.b("\">");if(t.s(t.f("translate",c,p,1),c,p,0,487,520,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_view_gallery|View Gallery");});c.pop();}t.b(" <span class=\"rarr\">&rarr;</span></a></p>");t.b("\n" + i);t.b("      <p>");t.b("\n" + i);t.b("        <a href=\"");t.b(t.v(t.f("download_url",c,p,0)));t.b("\"");if(t.s(t.f("authenticated",c,p,1),c,p,0,638,755,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" class=\"js-adobeid-signup\" data-adobeid-signup-destination=\"");t.b(t.v(t.f("download_url",c,p,0)));t.b("\" data-adobeid-signup-enable-login=\"true\"");});c.pop();}t.b(" data-signup-from=\"Tools_Used_Download_");t.b(t.v(t.f("title",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("is_web_app",c,p,1),c,p,0,849,965,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,876,907,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_get_started|Get Started");});c.pop();}t.b(" <span class=\"rarr\">&rarr;</span>");t.b("\n" + i);});c.pop();}if(!t.s(t.f("is_web_app",c,p,1),c,p,1,0,0,"")){t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,1033,1068,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_download_trial|Download Now");});c.pop();}t.b(" <span class=\"rarr\">&rarr;</span>");t.b("\n" + i);};t.b("        </a>");t.b("\n" + i);t.b("      </p>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);});c.pop();}if(t.s(t.d("tools_by_synonym.0",c,p,1),c,p,0,1231,1237,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("</div>");});c.pop();}t.b("\n" + i);if(t.s(t.f("has_tools_without_synonym",c,p,1),c,p,0,1291,1462,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"project-tools-text-wrap\">");t.b("\n" + i);if(t.s(t.f("tools_without_synonym",c,p,1),c,p,0,1362,1426,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <a href=\"");t.b(t.v(t.d("URLS.search",c,p,0)));t.b("?tools=");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("title",c,p,0)));t.b("</a>");t.b("\n" + i);});c.pop();}t.b("  </div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }}, "{{!Loop through tools twice, once for synonym (image) tools, once for others}}\n{{#tools_by_synonym.0}}<div class=\"project-tools-image-wrap\">{{/tools_by_synonym.0}}\n\n{{#tools_by_synonym}}\n  <div class=\"tooltipi-container\">\n    <a title=\"{{title}}\" href=\"{{url}}\"><img class=\"project-tools-image\" src=\"{{icon_url}}\"></a>\n    <div class=\"tooltipi tooltipi-white\">\n      <p class=\"tool-title\">{{title}}</p>\n      <p><a href=\"{{gallery_url}}\" data-search-term=\"{{search_term}}\">{{#translate}}project_view_gallery|View Gallery{{/translate}} <span class=\"rarr\">&rarr;</span></a></p>\n      <p>\n        <a href=\"{{download_url}}\"{{#authenticated}} class=\"js-adobeid-signup\" data-adobeid-signup-destination=\"{{download_url}}\" data-adobeid-signup-enable-login=\"true\"{{/authenticated}} data-signup-from=\"Tools_Used_Download_{{title}}\">\n          {{#is_web_app}}\n            {{#translate}}project_get_started|Get Started{{/translate}} <span class=\"rarr\">&rarr;</span>\n          {{/is_web_app}}\n          {{^is_web_app}}\n            {{#translate}}project_download_trial|Download Now{{/translate}} <span class=\"rarr\">&rarr;</span>\n          {{/is_web_app}}\n        </a>\n      </p>\n    </div>\n  </div>\n{{/tools_by_synonym}}\n{{#tools_by_synonym.0}}</div>{{/tools_by_synonym.0}}\n{{#has_tools_without_synonym}}\n  <div class=\"project-tools-text-wrap\">\n    {{#tools_without_synonym}}\n      <a href=\"{{URLS.search}}?tools={{id}}\">{{title}}</a>\n    {{/tools_without_synonym}}\n  </div>\n{{/has_tools_without_synonym}}\n", Hogan);
  function extend(target, source) { return Object.keys(source).reduce(function(t, p) { t[p] = source[p]; return t; }, target); }
  template.ri = function(context, partials, indent) {
    if (Hogan.helpers) context.unshift(Hogan.helpers);
    return this.r(context, extend(preloads, partials), indent);
  };
  module.exports = template.render.bind(template);
  module.exports.template = template;

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _Roulette = __webpack_require__(21), _Roulette2 = _interopRequireDefault(_Roulette), _MiniProfile = __webpack_require__(94), _MiniProfile2 = _interopRequireDefault(_MiniProfile), constructor = _Roulette2.default.extend({
    init: function() {
        this._super.apply(this, arguments), this.listenTo(this._view, {
            postrender: function(e) {
                this._bindHide(e);
            },
            hide: function() {
                this._unbindHide();
            }
        }), this._keepAlive = this._keepAlive.bind(this), this._setDeath = this._setDeath.bind(this);
    },
    _unbindHide: function() {
        this.$context.off(".miniprofile");
    },
    _bindHide: function(e) {
        e.on({
            "mouseenter.miniprofile": this._keepAlive,
            "mouseleave.miniprofile": this._setDeath,
            "click.miniprofile": this._setDeath
        });
    },
    setContext: function(e) {
        this.$context = e, this._unbindHide(), this._bindHide(this.$context);
    },
    _keepAlive: function() {
        clearTimeout(this._hideTimeout);
    },
    _setDeath: function() {
        var e = this;
        this._hideTimeout = setTimeout(function() {
            e._view.hide();
        }, this.constructor.HIDE_TIMEOUT);
    }
}, {
    VIEW_CLASS: _MiniProfile2.default,
    HIDE_TIMEOUT: 500
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery), _follow = __webpack_require__(38), _follow2 = _interopRequireDefault(_follow), _Menu = __webpack_require__(40), _Menu2 = _interopRequireDefault(_Menu), _miniProfile = __webpack_require__(87), _miniProfile2 = _interopRequireDefault(_miniProfile), constructor = _Menu2.default.extend({
    mustache: _miniProfile2.default,
    template: function(t) {
        return this._super(_jquery2.default.extend({
            classes: [ "mini-profile", "hide-tablet", "hide-phone" ]
        }, t));
    },
    position: function() {
        var t, e, o, i = this._controller.$context.width() / 2, r = this.constructor.NUB_OFFSET - i, l = r < 0 ? "+" : "-";
        this._super(this._controller.$context, {
            my: "left top",
            at: "left" + l + Math.abs(r) + " bottom+" + this.constructor.NUB_HEIGHT,
            collision: "flipfit",
            within: this._model.get("within")
        }), t = this._controller.$context.offset(), e = this.$view.offset(), this._model.get("bottom") && e.top + this.$view.height() > this._model.get("bottom").offset().top ? (this._super(this._controller.$context, {
            my: "left" + l + Math.abs(r) + " bottom-" + this.constructor.NUB_HEIGHT,
            at: "left top",
            collision: "flipfit none",
            within: this._model.get("within")
        }), o = "bottom") : o = t.top > e.top ? "bottom" : "top", o += Math.floor(t.left) > e.left + Math.abs(r) ? "-right" : "-left", 
        this.$view.removeClass("top-right top-left bottom-right bottom-left").addClass(o);
    },
    rendered: function() {
        this._super(), _follow2.default.init(this.$view);
    },
    show: function() {
        this.$view && (this.$view.removeClass("hide"), this.position()), this._super(), 
        this._controller.$context.closest(":focusable").focus();
    },
    hide: function() {
        this._super(), this.destroy();
    },
    _bind: _jquery2.default.noop,
    _unbind: _jquery2.default.noop
}, {
    NUB_OFFSET: 55,
    NUB_HEIGHT: 12
});

exports.default = constructor, module.exports = exports.default;

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function makeSelect(e, t) {
    var u = (0, _jquery2.default)("<select>", {
        name: e[0].id,
        multiple: t || !1
    }).hide();
    return t || (0, _jquery2.default)("<option>", {
        selected: !0,
        disabled: !0
    }).appendTo(u), e.children("li").each(function() {
        (0, _jquery2.default)("<option>", {
            value: (0, _jquery2.default)(this).data("value")
        }).appendTo(u);
    }), u.insertAfter(e), u;
}

function bindList(e, t) {
    return e.each(function() {
        var u = makeSelect((0, _jquery2.default)(this).on("click", ">li", function() {
            var i = (0, _jquery2.default)(this), l = i.data("value"), r = u.find('[value="' + l + '"]'), n = !r.prop("selected");
            r.prop("selected", n), n = r.prop("selected"), (t ? e.find('[data-value="' + l + '"]') : i.siblings().removeClass("active").end()).toggleClass("active", n);
        }), t);
    }), e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _jquery = __webpack_require__(0), _jquery2 = _interopRequireDefault(_jquery);

exports.default = {
    selectList: function(e) {
        return bindList(e || this.$view.find("ul,ol"), !1);
    },
    multiList: function(e) {
        return bindList(e || this.$view.find("ul,ol"), !0);
    }
}, module.exports = exports.default;

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

var Hogan = __webpack_require__(1),
  preloads = {"lib/_editButton": __webpack_require__(82).template,"profile/_overlays/_projectOverlay": __webpack_require__(175).template},
  template = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"js-item cover-block project-cover js-project-cover editable cfix\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\"");if(t.s(t.f("ordinal_id",c,p,1),c,p,0,109,139,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" data-ordinal=\"");t.b(t.v(t.f("ordinal_id",c,p,0)));t.b("\"");});c.pop();}t.b(" ");t.sub("attr",c,p,i);t.b(">");t.b("\n" + i);if(t.s(t.f("is_collection_editable",c,p,1),c,p,0,204,234,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<lib/_editButton0",c,p,"    "));});c.pop();}if(!t.s(t.f("is_collection_editable",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("is_editable",c,p,1),c,p,0,310,358,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<profile/_overlays/_projectOverlay1",c,p,"    "));});c.pop();}};t.b("  <div class=\"cover-img\">");t.b("\n" + i);t.b("    <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"cover-img-link\">");t.b("\n" + i);t.b("      <img src=\"");t.b(t.v(t.d("covers.202",c,p,0)));t.b("\" ");if(t.s(t.d("covers.404",c,p,1),c,p,0,524,566,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("srcset=\"");t.b(t.v(t.d("covers.202",c,p,0)));t.b(", ");t.b(t.v(t.d("covers.404",c,p,0)));t.b(" 2x\"");});c.pop();}t.b(" alt=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" title=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" class=\"cover-img-el\" data-pin-nopin=\"nopin\" />");t.b("\n" + i);t.b("    </a>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("private",c,p,1),c,p,0,694,1024,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("\n" + i);t.b("    <div class=\"tooltip--container project-private pointer\">");t.b("\n");t.b("\n" + i);t.b("      <div class=\"beicons-pre beicons-pre-privacy\"></div>");t.b("\n");t.b("\n" + i);t.b("      <div class=\"tooltip--main\">");t.b("\n" + i);t.b("        ");if(t.s(t.f("translate",c,p,1),c,p,0,873,936,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_cover_marked_private|This project is marked as private.");});c.pop();}t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div> <!-- .tooltip--container .project-private -->");t.b("\n");t.b("\n" + i);});c.pop();}t.b("\n");t.b("\n" + i);t.b("  <div class=\"cover-info-stats\">");t.b("\n");t.b("\n" + i);t.b("    <div class=\"cover-info\">");t.b("\n");t.b("\n" + i);t.b("      <div class=\"cover-name\">");t.b("\n" + i);t.b("        <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" class=\"projectName cover-name-link\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("      <div class=\"cover-by-wrap\">");t.b("\n" + i);t.b("        <div class=\"cover-by-link");if(!t.s(t.f("multiple_owners",c,p,1),c,p,1,0,0,"")){t.b(" text-ellipsis");};t.b(" ");if(t.s(t.f("multiple_owners",c,p,1),c,p,0,1365,1382,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("multiple-cover-by");});c.pop();}t.b("\">");t.b("\n" + i);t.b("          <span class=\"cover-by\">");if(t.s(t.f("translate",c,p,1),c,p,0,1452,1471,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_cover_by|by");});c.pop();}t.b("</span>");t.b("\n" + i);if(t.s(t.f("multiple_owners",c,p,1),c,p,0,1523,1725,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <span class=\"multiple-owners-list tooltip--container\">");t.b("\n" + i);t.b("            ");if(t.s(t.f("translate",c,p,1),c,p,0,1615,1663,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("collection_cover_multiple_owners|Multiple Owners");});c.pop();}t.b("\n" + i);t.b("          <ul class=\"tooltip--main\">");t.b("\n" + i);});c.pop();}if(t.s(t.f("owners",c,p,1),c,p,0,1769,2529,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("              ");if(t.s(t.f("multiple_owners",c,p,1),c,p,0,1804,1808,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<li>");});c.pop();}t.b("\n" + i);t.b("                <a class=\"");if(t.s(t.f("multiple_owners",c,p,1),c,p,0,1875,1894,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("multiple-owner-link");});c.pop();}if(!t.s(t.f("multiple_owners",c,p,1),c,p,1,0,0,"")){t.b("single-owner-link");};t.b("\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("multiple_owners",c,p,1),c,p,0,2028,2254,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                    <span class=\"multiple-owner-image-container\">");t.b("\n" + i);t.b("                        <img class=\"multiple-owner-image js-mini-profile\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("images.50",c,p,0)));t.b("\"/>");t.b("\n" + i);t.b("                    </span>");t.b("\n" + i);});c.pop();}t.b("                    <span class=\"js-mini-profile multiple-owner-display-name\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("display_name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("                </a>");t.b("\n");t.b("\n" + i);t.b("              ");if(t.s(t.f("multiple_owners",c,p,1),c,p,0,2491,2496,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("</li>");});c.pop();}t.b("\n" + i);});c.pop();}if(t.s(t.f("multiple_owners",c,p,1),c,p,0,2571,2616,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          </ul>");t.b("\n" + i);t.b("          </span>");t.b("\n" + i);});c.pop();}t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"cover-stat-fields-wrap\">");t.b("\n");t.b("\n" + i);t.b("      <div class=\"cover-stat-wrap\">");t.b("\n");t.b("\n" + i);t.b("        <span class=\"cover-stat cover-stat-");t.b(t.v(t.d("footer.top_title",c,p,0)));t.b(" js-cover-stat-");t.b(t.v(t.d("footer.top_title",c,p,0)));t.b(" ");if(t.s(t.d("footer.highlighted",c,p,1),c,p,0,2916,2938,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("cover-stat-highlighted");});c.pop();}if(t.s(t.d("footer.top_icon",c,p,1),c,p,0,2981,3025,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" beicons-pre beicons-pre-");t.b(t.v(t.d("footer.top_icon",c,p,0)));});c.pop();}t.b(" ");if(t.s(t.f("format_published_date",c,p,1),c,p,0,3072,3091,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("js-format-timestamp");});c.pop();}t.b("\" data-timestamp=\"");t.b(t.v(t.f("published_on",c,p,0)));t.b("\">");t.b(t.v(t.d("footer.top_value",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("        <span class=\"cover-stat cover-stat-");t.b(t.v(t.d("footer.bottom_title",c,p,0)));t.b(" beicons-pre beicons-pre-");t.b(t.v(t.d("footer.bottom_icon",c,p,0)));t.b(" hide-phone\">");t.b(t.v(t.d("footer.bottom_value",c,p,0)));t.b("</span>");t.b("\n");t.b("\n" + i);if(t.s(t.f("featured_on",c,p,1),c,p,0,3363,3720,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <div class=\"featured tooltipi-container beicons-pre beicons-pre-featured-small\">");t.b("\n");t.b("\n" + i);t.b("            <div class=\"tooltipi\">");t.b("\n" + i);t.b("              ");if(t.s(t.f("translate",c,p,1),c,p,0,3519,3557,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("project_cover_featured_on|Featured On:");});c.pop();}t.b(" <strong class=\"js-format-date\" data-date=\"");t.b(t.v(t.f("featured_on",c,p,0)));t.b("\">");t.b(t.v(t.f("featured_on",c,p,0)));t.b("</strong>");t.b("\n" + i);t.b("            </div>");t.b("\n");t.b("\n" + i);t.b("          </div> <!-- .featured -->");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("      </div><!-- .cover-stat-wrap -->");t.b("\n");t.b("\n" + i);t.b("      <div class=\"cover-fields\">");t.b("\n" + i);if(t.s(t.f("field_links",c,p,1),c,p,0,3834,3948,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" title=\"");t.b(t.v(t.f("name",c,p,0)));t.b("\" class=\"field-link\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a>");if(t.s(t.f("separate",c,p,1),c,p,0,3924,3926,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(", ");});c.pop();}t.b("\n" + i);});c.pop();}t.b("      </div><!-- .cover-fields -->");t.b("\n");t.b("\n" + i);t.b("    </div><!-- .cover-info -->");t.b("\n");t.b("\n" + i);t.b("  </div><!-- #cover-stat-fields-wrap -->");t.b("\n");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<lib/_editButton0":{name:"lib/_editButton", partials: {}, subs: {  }},"<profile/_overlays/_projectOverlay1":{name:"profile/_overlays/_projectOverlay", partials: {}, subs: {  }}}, subs: { "attr": function(c,p,t,i) {} }}, "<div class=\"js-item cover-block project-cover js-project-cover editable cfix\" data-id=\"{{id}}\"{{#ordinal_id}} data-ordinal=\"{{ordinal_id}}\"{{/ordinal_id}} {{$attr}}{{/attr}}>\n  {{#is_collection_editable}}\n    {{> lib/_editButton }}\n  {{/is_collection_editable}}\n  {{^is_collection_editable}}\n  {{#is_editable}}\n    {{> profile/_overlays/_projectOverlay }}\n  {{/is_editable}}\n  {{/is_collection_editable}}\n  <div class=\"cover-img\">\n    <a href=\"{{url}}\" class=\"cover-img-link\">\n      <img src=\"{{covers.202}}\" {{#covers.404}}srcset=\"{{covers.202}}, {{covers.404}} 2x\"{{/covers.404}} alt=\"{{name}}\" title=\"{{name}}\" class=\"cover-img-el\" data-pin-nopin=\"nopin\" />\n    </a>\n  </div>\n\n  {{#private}}\n\n    <div class=\"tooltip--container project-private pointer\">\n\n      <div class=\"beicons-pre beicons-pre-privacy\"></div>\n\n      <div class=\"tooltip--main\">\n        {{#translate}}project_cover_marked_private|This project is marked as private.{{/translate}}\n      </div>\n    </div> <!-- .tooltip--container .project-private -->\n\n  {{/private}}\n\n\n  <div class=\"cover-info-stats\">\n\n    <div class=\"cover-info\">\n\n      <div class=\"cover-name\">\n        <a href=\"{{url}}\" class=\"projectName cover-name-link\">{{name}}</a>\n      </div>\n\n      <div class=\"cover-by-wrap\">\n        <div class=\"cover-by-link{{^multiple_owners}} text-ellipsis{{/multiple_owners}} {{#multiple_owners}}multiple-cover-by{{/multiple_owners}}\">\n          <span class=\"cover-by\">{{#translate}}project_cover_by|by{{/translate}}</span>\n          {{#multiple_owners}}\n          <span class=\"multiple-owners-list tooltip--container\">\n            {{#translate}}collection_cover_multiple_owners|Multiple Owners{{/translate}}\n          <ul class=\"tooltip--main\">\n          {{/multiple_owners}}\n            {{#owners}}\n              {{#multiple_owners}}<li>{{/multiple_owners}}\n                <a class=\"{{#multiple_owners}}multiple-owner-link{{/multiple_owners}}{{^multiple_owners}}single-owner-link{{/multiple_owners}}\" href=\"{{url}}\">\n\n                  {{#multiple_owners}}\n                    <span class=\"multiple-owner-image-container\">\n                        <img class=\"multiple-owner-image js-mini-profile\" data-id=\"{{id}}\" src=\"{{images.50}}\"/>\n                    </span>\n                  {{/multiple_owners}}{{!this must touch to avoid extra space}}\n                    <span class=\"js-mini-profile multiple-owner-display-name\" data-id=\"{{id}}\">{{display_name}}</span>\n                </a>\n\n              {{#multiple_owners}}</li>{{/multiple_owners}}\n            {{/owners}}\n          {{#multiple_owners}}\n          </ul>\n          </span>\n          {{/multiple_owners}}\n        </div>\n      </div>{{!/.cover-by-wrap}}\n\n    </div>{{!/.cover-info}}\n\n    <div class=\"cover-stat-fields-wrap\">\n\n      <div class=\"cover-stat-wrap\">\n\n        <span class=\"cover-stat cover-stat-{{footer.top_title}} js-cover-stat-{{footer.top_title}} {{#footer.highlighted}}cover-stat-highlighted{{/footer.highlighted}}{{#footer.top_icon}} beicons-pre beicons-pre-{{footer.top_icon}}{{/footer.top_icon}} {{#format_published_date}}js-format-timestamp{{/format_published_date}}\" data-timestamp=\"{{published_on}}\">{{footer.top_value}}</span>\n        <span class=\"cover-stat cover-stat-{{footer.bottom_title}} beicons-pre beicons-pre-{{footer.bottom_icon}} hide-phone\">{{footer.bottom_value}}</span>\n\n        {{#featured_on}}\n          <div class=\"featured tooltipi-container beicons-pre beicons-pre-featured-small\">\n\n            <div class=\"tooltipi\">\n              {{#translate}}project_cover_featured_on|Featured On:{{/translate}} <strong class=\"js-format-date\" data-date=\"{{featured_on}}\">{{featured_on}}</strong>\n            </div>\n\n          </div> <!-- .featured -->\n        {{/featured_on}}\n\n      </div><!-- .cover-stat-wrap -->\n\n      <div class=\"cover-fields\">\n        {{#field_links}}\n          <a href=\"{{url}}\" title=\"{{name}}\" class=\"field-link\">{{name}}</a>{{#separate}}, {{/separate}}\n        {{/field_links}}\n      </div><!-- .cover-fields -->\n\n    </div><!-- .cover-info -->\n\n  </div><!-- #cover-stat-fields-wrap -->\n\n</div>\n", Hogan);
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

"use strict";
"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _page_config = __webpack_require__(12), _page_config2 = _interopRequireDefault(_page_config), _page_constants = __webpack_require__(19), _page_constants2 = _interopRequireDefault(_page_constants), _Model = __webpack_require__(32), _Model2 = _interopRequireDefault(_Model), _extend = __webpack_require__(3), _extend2 = _interopRequireDefault(_extend), _deparam = __webpack_require__(334), _deparam2 = _interopRequireDefault(_deparam), _diff = __webpack_require__(285), _diff2 = _interopRequireDefault(_diff), _correction = __webpack_require__(342), _correction2 = _interopRequireDefault(_correction), _history = __webpack_require__(52), _history2 = _interopRequireDefault(_history), Constructor = _Model2.default.extend({
    _offset: 0,
    _timestamp: 0,
    _perpage: 0,
    _stateLoaded: !1,
    init: function() {
        this._super.apply(this, arguments), this._perpage = _page_constants2.default.CONTENT_PER_PAGE, 
        this._timestamp = _page_config2.default.timestamp;
    },
    setLoadState: function(t) {
        if (!this._stateLoaded) {
            var e = this.getDefaultFilters(), a = (0, _deparam2.default)(t), n = a.content || e.content, _ = (0, 
            _extend2.default)({}, e, {
                content: n
            }), i = _correction2.default.coerce(n, a, _);
            this.rectify(i.content), this._data = (0, _extend2.default)({}, this.DEFAULTS, i), 
            (0, _extend2.default)(this.DEFAULTS, (0, _correction2.default)(i, this.DEFAULTS)), 
            (0, _extend2.default)(this._data, this.DEFAULTS, i), _history2.default.replaceState({
                filters: i
            }, document.title), this._stateLoaded = !0;
        }
    },
    rectify: function(t) {
        t = t || _page_constants2.default.CONTENT_KEY_PROJECTS, this.setDefaultFilters(t);
    },
    getDefaultFilters: function(t) {
        var e = (0, _extend2.default)({}, this.constructor[t] || this.constructor.projects);
        return t === _page_constants2.default.CONTENT_KEY_TEAMS && (e.sort = _page_constants2.default.SORT_KEY_FOLLOWED), 
        !_page_config2.default.ts_mode || t !== _page_constants2.default.CONTENT_KEY_USERS && t !== _page_constants2.default.CONTENT_KEY_PROJECTS || (e.content = _page_constants2.default.CONTENT_KEY_USERS, 
        e.time = _page_constants2.default.TIME_KEY_ALL, e.sort = _page_constants2.default.SORT_KEY_RANK), 
        e;
    },
    setDefaultFilters: function(t) {
        this.DEFAULTS = this.getDefaultFilters(t);
    },
    reset: function() {
        var t, e = this.data();
        for (t in e) this.DEFAULTS.hasOwnProperty(t) || delete e[t];
        (0, _extend2.default)(e, this.DEFAULTS);
    },
    updateType: function(t) {
        var e = this.data(), a = (0, _diff2.default)(e, this.DEFAULTS);
        return Object.keys(a).forEach(function(t) {
            a[t] = a[t][0];
        }), a.content = t, this.rectify(t), this.reset(), a = _correction2.default.coerce(t, a, e), 
        this.set(a), a;
    },
    freshSimilarProjectsSearch: function() {
        _page_constants2.default.SIMILAR_OBJECT_NAME = _page_config2.default.viewingProject.title, 
        this._freshSimilarSearch();
    },
    freshSimilarUsersSearch: function() {
        _page_constants2.default.SIMILAR_OBJECT_NAME = _page_config2.default.viewingProject.data.owners[0].display_name, 
        this._freshSimilarSearch();
    },
    change: function(t, e) {
        var a, n;
        return "string" == typeof t ? (a = {}, a[t] = e) : a = t, n = (0, _correction2.default)(a, this.data()), 
        a = (0, _extend2.default)(n, a), this.set(a), a;
    },
    offset: function(t) {
        return void 0 === t ? this._offset : this._offset = t;
    },
    timestamp: function(t) {
        return this._timestamp = t;
    },
    toJSON: function() {
        var t = this.data();
        return (0, _extend2.default)({
            ts: this._timestamp,
            ordinal: this._offset,
            per_page: this._perpage[t.content] || 12
        }, t);
    },
    getTruthyData: function() {
        var t, e = (0, _extend2.default)({}, this.data());
        for (t in e) e[t] || delete e[t];
        return e;
    },
    _freshSimilarSearch: function() {
        var t, e = (0, _extend2.default)({}, this._data), a = [ _page_constants2.default.FILTER_KEY_CONTENT, _page_constants2.default.FILTER_KEY_SORT, _page_constants2.default.FILTER_KEY_SIMILAR_TO ];
        for (t in e) a.indexOf(t) === -1 && (e[t] = void 0);
        this.change(e);
    }
}, {
    projects: {
        field: "",
        content: _page_constants2.default.CONTENT_KEY_PROJECTS,
        sort: _page_constants2.default.SORT_KEY_FEATURED_DATE,
        time: _page_constants2.default.TIME_KEY_ALL,
        location_id: ""
    }
});

exports.default = new Constructor(), module.exports = exports.default;

/***/ }

},[1629]);