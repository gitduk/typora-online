(this.webpackJsonpsetting = this.webpackJsonpsetting || []).push([[1], {
    1: function (e, t, n) {
        "use strict";
        n.d(t, "m", (function () {
            return v
        })), n.d(t, "g", (function () {
            return E
        })), n.d(t, "b", (function () {
            return C
        })), n.d(t, "j", (function () {
            return x
        })), n.d(t, "p", (function () {
            return S
        })), n.d(t, "c", (function () {
            return O
        })), n.d(t, "r", (function () {
            return N
        })), n.d(t, "o", (function () {
            return _
        })), n.d(t, "a", (function () {
            return j
        })), n.d(t, "q", (function () {
            return F
        })), n.d(t, "s", (function () {
            return P
        })), n.d(t, "l", (function () {
            return L
        })), n.d(t, "e", (function () {
            return D
        })), n.d(t, "d", (function () {
            return M
        })), n.d(t, "f", (function () {
            return V
        })), n.d(t, "n", (function () {
            return I
        })), n.d(t, "i", (function () {
            return W
        })), n.d(t, "t", (function () {
            return R
        })), n.d(t, "u", (function () {
            return H
        })), n.d(t, "h", (function () {
            return T
        })), n.d(t, "k", (function () {
            return U
        }));
        var a = n(6), o = n(3), i = n(5), r = n(13), l = n(14), c = n(7), s = n(16), u = n(15), d = n(0), m = n.n(d),
            p = n(8), h = n.n(p), g = n(9), f = n(2), b = n(4);

        function w(e) {
            return function (t) {
                Object(s.a)(a, t);
                var n = Object(u.a)(a);

                function a(e) {
                    var t;
                    return Object(r.a)(this, a), (t = n.call(this, e)).onMouseEnter = t.onMouseEnter.bind(Object(c.a)(t)), t.onMouseLeave = t.onMouseLeave.bind(Object(c.a)(t)), t.targetRef = m.a.createRef(), t
                }

                return Object(l.a)(a, [{
                    key: "componentDidMount", value: function () {
                        this.tooltip = document.querySelector("#ty-tooltip")
                    }
                }, {
                    key: "_adjustPosition", value: function (e) {
                        var t = this.targetRef.current, n = t.getBoundingClientRect(), a = this.tooltip.clientWidth,
                            o = {top: n.top + document.body.scrollTop, left: n.left + document.body.scrollLeft};
                        "bottom" === e ? (o.top = n.bottom + 8, o.right = n.right + (a - n.width) / 2) : "top" === e ? (o.top = n.top - 36, o.right = n.right + (a - n.width) / 2) : (o.right = o.left - 8, o.top = o.top + t.clientHeight / 2 - this.tooltip.clientHeight / 2), a > window.innerWidth - 30 ? o.left = 8 : o.left = o.right - a, this.tooltip.style.top = o.top + "px", this.tooltip.style.left = o.left + "px", o.right && (this.tooltip.style.right = window.innerWidth - o.right - 4 + "px")
                    }
                }, {
                    key: "onMouseEnter", value: function () {
                        var e = this.props, t = e.hintPosition, n = e.hint;
                        n && (this.tooltip.style.right = "auto", this.tooltip.innerHTML = n, this.tooltip.classList.add("shown"), this._adjustPosition(t))
                    }
                }, {
                    key: "onMouseLeave", value: function () {
                        this.tooltip.classList.remove("shown")
                    }
                }, {
                    key: "render", value: function () {
                        return m.a.createElement(e, Object.assign({}, this.props, {
                            ref: this.targetRef,
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave
                        }))
                    }
                }]), a
            }(m.a.Component)
        }

        var v = function (e) {
            var t = e.active, n = e.children, a = Object(i.a)(e, ["active", "children"]), o = m.a.useRef(null);
            return m.a.useEffect((function () {
                if (t && o.current) {
                    var e = o.current, n = e.querySelector(".search-hit, .blink-area");
                    if (n) {
                        var a = n.getBoundingClientRect();
                        a.top + 20 > e.parentElement.scrollTop + window.innerHeight && (e.parentElement.scrollTop = a.top - 20)
                    }
                }
            })), m.a.createElement("div", Object.assign({
                ref: o,
                className: "content" + (t ? "" : " display-none")
            }, a), n)
        }, y = function (e) {
            var t = e.text, n = e.link;
            return n ? m.a.createElement("a", {
                href: n, target: "_blank", onClick: function (e) {
                    window.Setting.openLink(n), e.preventDefault()
                }
            }, Object(f.a)(t)) : Object(f.a)(t)
        }, E = function (e) {
            var t = e.hint, n = e.displayHint, a = e.inlineHint, o = e.hintLink,
                r = Object(i.a)(e, ["hint", "displayHint", "inlineHint", "hintLink"]);
            return n ? m.a.createElement("div", {className: "panel-content-hint row"}, t) : a ? m.a.createElement("div", {className: "inline-hint"}, m.a.createElement(y, {
                link: o,
                text: t || Object(f.a)("Learn More\u2026", "Front")
            })) : m.a.createElement(k, Object.assign({hint: t ? Object(f.a)(t) : o}, r))
        }, k = w(m.a.forwardRef((function (e, t) {
            var n = e.hint, a = (e.forwardedRef, Object(i.a)(e, ["hint", "forwardedRef"]));
            return m.a.createElement("span", Object.assign({
                ref: t,
                className: "label-hint",
                hint: n
            }, a), m.a.createElement(g.c, null))
        }))), C = function (e) {
            var t = e.keyName, n = e.label, a = e.dictGroup, o = e.checked, r = e.reverse, l = e.onChange, c = e.hint,
                s = e.hintLink, u = e.inlineHint, d = e.isCell, p = e.disabled,
                h = Object(i.a)(e, ["keyName", "label", "dictGroup", "checked", "reverse", "onChange", "hint", "hintLink", "inlineHint", "isCell", "disabled"]),
                g = m.a.useContext(b.a),
                w = !d && g && (Object(b.c)(g, n, a) || Object(b.c)(g, c)) ? " search-hit" : "";
            return m.a.createElement("div", Object.assign({className: "checkbox" + (d ? "" : " row") + w + (p ? " disabled" : "")}, h), m.a.createElement("label", null, m.a.createElement("input", {
                type: "checkbox",
                onChange: function (e) {
                    l(t, r ? !e.target.checked : e.target.checked)
                },
                checked: !!o,
                disabled: p
            }), Object(f.a)(n, a)), c || s ? m.a.createElement(E, {hint: c, inlineHint: u, hintLink: s}) : null)
        }, x = m.a.memo((function (e) {
            var t = e.title, n = e.dictGroup, a = e.hint, o = e.hintLink, i = e.breakBeforeHint, r = e.children,
                l = e.headerStyle, c = e.keyWords, s = e.highlight, u = m.a.useContext(b.a),
                d = Object(b.c)(u, t, n) || Object(b.c)(u, a) || c && Object(b.d)(u, c);
            return m.a.createElement("div", {className: "input-group" + (d ? " search-hit" : "") + (s ? " blink-area" : "")}, m.a.createElement("h5", {
                className: "input-group-header",
                style: l
            }, m.a.createElement("span", {className: "input-group-header-title"}, Object(f.a)(t, n)), a || o ? m.a.createElement("span", {className: "input-group-header-hint" + (i ? " hint-break-before" : "")}, m.a.createElement(y, {
                link: o,
                text: a || Object(f.a)("Learn More\u2026")
            })) : null), m.a.createElement("div", {className: "input-group-content"}, r))
        })), S = function (e) {
            var t = e.keyName, n = e.isCell, a = e.options, o = e.value, r = e.type, l = e.hint, c = e.inlineHint,
                s = e.optionsDict, u = e.onChange, d = e.disabled,
                p = Object(i.a)(e, ["keyName", "isCell", "options", "value", "type", "hint", "inlineHint", "optionsDict", "onChange", "disabled"]),
                h = m.a.useContext(b.a),
                g = h && !n && (Object(b.d)(h, Object.values(a), s) || Object(b.c)(h, l)) ? " search-hit" : "";
            return m.a.createElement("div", Object.assign({className: (n ? "cell" : "row") + g}, p), m.a.createElement("select", {
                onChange: function (e) {
                    var n = e.target.value;
                    "number" == r ? n = e.target.value - 0 : "boolean" == r && (n = e.target.value + "" == "true"), u(t, n)
                }, value: o, disabled: d
            }, function () {
                var e = [];
                for (var t in a) "_seperator" == t ? e.push(m.a.createElement("option", {
                    key: t,
                    disabled: !0
                }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")) : e.push(m.a.createElement("option", {
                    key: t,
                    value: t
                }, Object(f.a)(a[t], s)));
                return e
            }()), l ? m.a.createElement(E, {hint: l, inlineHint: c}) : null)
        }, O = function (e) {
            var t = e.forMac, n = e.forWin, a = e.forLinux, o = e.visible, i = e.children;
            return function (e) {
                return (e = e || t && window.isMac || n && window.isWin || a && window.isLinux) ? m.a.createElement(m.a.Fragment, null, i) : null
            }(o)
        }, N = function (e) {
            var t = e.label, n = e.style;
            return m.a.createElement("span", {style: n}, Object(f.a)(t))
        }, _ = function (e) {
            var t = e.keyWords, n = e.style, a = e.children, o = m.a.useContext(b.a),
                i = o && t && Object(b.d)(o, t) ? " search-hit" : "";
            return m.a.createElement("div", {className: "row" + i, style: n}, a)
        }, j = function (e) {
            var t = e.label, n = e.style, a = Object(i.a)(e, ["label", "style"]);
            return m.a.createElement("button", Object.assign({
                "aria-label": Object(f.a)(t),
                style: Object(o.a)({}, n),
                className: "btn btn-default"
            }, a), Object(f.a)(t))
        }, F = function (e) {
            var t = e.label, n = e.style, a = e.options, r = e.onExtra,
                l = Object(i.a)(e, ["label", "style", "options", "onExtra"]), c = m.a.useRef(null);
            return m.a.createElement("div", {className: "btn-split-group"}, m.a.createElement("button", Object.assign({
                "aria-label": Object(f.a)(t),
                style: Object(o.a)({}, n),
                className: "btn btn-default btn-split-left"
            }, l), m.a.createElement("span", {className: "btn-split-main"}, Object(f.a)(t))), m.a.createElement("button", {
                "tab-index": -1,
                "aria-label": Object(f.a)(t),
                style: Object(o.a)({}, n),
                className: "btn btn-default btn-split-right",
                onClick: function (e) {
                    e.currentTarget.focus();
                    var t = c.current.classList;
                    t.contains("shown") ? t.remove("shown") : t.add("shown")
                },
                onBlur: function () {
                    c.current.classList.remove("shown")
                }
            }, m.a.createElement("span", {className: "icon icon-down-dir"})), m.a.createElement("ul", {
                className: "dropdown-menu",
                ref: c
            }, Object.keys(a).map((function (e) {
                return m.a.createElement("li", {
                    key: e, onMouseDown: function () {
                        r(e - 0), c.current.classList.remove("shown")
                    }
                }, Object(f.a)(a[e]))
            }))))
        }, P = function (e) {
            var t = e.className, n = Object(i.a)(e, ["className"]);
            return m.a.createElement("input", Object.assign({type: "text", className: "ty-text-input " + (t || "")}, n))
        }, L = function (e) {
            var t = e.value, n = e.keyName, a = e.onChange, o = Object(i.a)(e, ["value", "keyName", "onChange"]);
            return m.a.createElement("input", Object.assign({
                type: "number", value: t, onChange: function (e) {
                    var t = e.target.value - 0;
                    isNaN(t) ? a(n, "382") : t < o.min ? a(n, "1") : t > o.max ? a(n, "999") : a(n, t)
                }
            }, o))
        }, T = w(m.a.forwardRef((function (e, t) {
            var n = e.icon, a = (e.label, e.hint), o = (e.hintPosition, e.disabled),
                r = Object(i.a)(e, ["icon", "label", "hint", "hintPosition", "disabled"]);
            return m.a.createElement("span", Object.assign({
                role: "button",
                className: "icon-button icon icon-" + n + (o ? " button-disabled" : ""),
                "aria-label": a,
                ref: t
            }, r))
        }))), M = function (e) {
            var t = e.keyName, n = e.value, a = e.defaultPath, o = e.placeholder, i = e.onChange, r = e.option;
            return m.a.createElement("div", {className: "file-input"}, m.a.createElement("input", {
                type: "text",
                value: n || "",
                onChange: function (e) {
                    i(t, e.target.value)
                },
                placeholder: o
            }), m.a.createElement(T, {
                hint: "Select",
                icon: "folder",
                style: {marginLeft: "1ch", cursor: "pointer"},
                onClick: function () {
                    var e = n || a;
                    window.Setting.selectFile(e, [r], (function (e) {
                        e && i(t, e)
                    }))
                },
                hintPosition: "bottom"
            }))
        }, A = w(m.a.forwardRef((function (e, t) {
            var n = e.value, a = e.onSelect,
                o = (e.hintPosition, Object(i.a)(e, ["value", "onSelect", "hintPosition"])),
                r = (n || "").replace(/[\\\/]\s*$/, "").replace(/.*[\\\/]/, "");
            return "/" == n && (r = "/"), m.a.createElement("span", Object.assign({
                ref: t,
                type: "text",
                className: "dir-path",
                placeholder: Object(f.a)("Select Custom Folder..."),
                readOnly: !0,
                onClick: function () {
                    n ? window.Setting.openFolder(n) : a()
                }
            }, o), r || Object(f.a)("Select Custom Folder..."))
        }))), D = function (e) {
            var t = e.hidden, n = e.value, a = e.keyName, o = e.onChange,
                r = (Object(i.a)(e, ["hidden", "value", "keyName", "onChange"]), function () {
                    window.Setting.selectFolder(n, (function (e) {
                        var t = e || n;
                        t && o(a, t)
                    }))
                });
            return t ? null : m.a.createElement("div", {className: "row"}, m.a.createElement("div", {className: "select-pin-input-group"}, m.a.createElement(A, {
                hint: n,
                value: n,
                onSelect: r,
                hintPosition: "bottom"
            }), m.a.createElement(T, {
                icon: "folder",
                onClick: r,
                hint: Object(f.a)("Select custom folder"),
                hintPosition: "bottom"
            })))
        }, V = function (e) {
            var t = e.value, n = e.customValue, o = e.onChange, i = m.a.useState(n || 14), r = Object(a.a)(i, 2),
                l = r[0], c = r[1];
            var s, u = function (e) {
                "radio" === e.target.type && o("useCustomFontSize", e.target.value + "" === "true")
            };
            return m.a.createElement("div", {className: "row"}, m.a.createElement("span", {
                className: "radio",
                style: {minWidth: "40%", paddingRight: "8px", height: "26px"}
            }, m.a.createElement("label", {style: {overflow: "visible"}}, m.a.createElement("input", {
                type: "radio",
                name: "useCustomFontSize",
                value: !1,
                checked: !1 === t,
                onChange: u
            }), Object(f.a)("Auto ( Recommended )"))), m.a.createElement("span", {
                className: "radio",
                style: {width: "40%", height: "26px"}
            }, m.a.createElement("label", {
                style: {
                    overflow: "visible",
                    whiteSpace: "nowrap"
                }
            }, m.a.createElement("input", {
                type: "radio",
                name: "useCustomFontSize",
                value: !0,
                checked: !0 === t,
                onChange: u
            }), Object(f.a)("Customized"), (s = t + "" === "true", m.a.createElement("span", {
                className: "custom-font-input",
                style: {visibility: s ? "visible" : "hidden"}
            }, m.a.createElement("input", {
                style: {marginLeft: "8px", marginTop: "-4px"},
                step: "1",
                type: "number",
                max: "24",
                size: "2",
                min: "9",
                value: l,
                onChange: function (e) {
                    var t = e.target.value - 0;
                    isNaN(t) || (c(Math.floor(t)), t <= 24 && t >= 9 && o("customFontSize", t))
                },
                onBlur: function () {
                    var e = l;
                    e > 24 && (e = 24), e < 9 && (e = 9), c(e), o("customFontSize", e)
                }
            }), " ", m.a.createElement("span", null, "px"))))))
        }, I = function (e) {
            var t = e.keyName, n = e.value, a = e.type, o = e.options, r = e.onChange;
            Object(i.a)(e, ["keyName", "value", "type", "options", "onChange"]);
            return m.a.createElement("div", {
                className: "row", onChange: function (e) {
                    var n = e.target.value;
                    "number" == a ? n = e.target.value - 0 : "boolean" == a && (n = e.target.value + "" == "true"), r(t, n)
                }, value: n
            }, function () {
                var e = [];
                for (var a in o) e.push(m.a.createElement("span", {
                    key: a,
                    className: "radio",
                    style: {width: "40%"}
                }, m.a.createElement("label", null, m.a.createElement("input", {
                    type: "radio",
                    name: t,
                    value: a,
                    defaultChecked: n + "" == a
                }), Object(f.a)(o[a]))));
                return e
            }())
        }, W = function (e) {
            var t, n, a = e.indentSize, o = e.prettyIndent, r = Object(i.a)(e, ["indentSize", "prettyIndent"]);
            return a -= 0, o = o + "" === "true", m.a.createElement(x, {
                title: "Indent Size on Save",
                breakBeforeHint: !0,
                hint: "only apply to quotes and lists created from menu bar or hybrid view",
                headerStyle: {marginBottom: "0"}
            }, m.a.createElement(R, {
                rows: [[m.a.createElement("div", null, m.a.createElement(S, Object.assign({
                    keyName: "indentSize",
                    style: {width: "80px", minHeight: "25px"},
                    options: {0: "Auto", 2: "2", 3: "3", 4: "4", 5: "5", "-1": "Tab"},
                    isCell: !0
                }, r, {
                    onChange: function (e, t) {
                        r.onChange(e, t - 0)
                    }, value: (a || 0) + ""
                })), m.a.createElement(C, Object.assign({
                    keyName: "prettyIndent",
                    style: {marginTop: "8px"},
                    label: "Pretty indentation",
                    isCell: !0
                }, r, {checked: !!o}))), m.a.createElement("div", {
                    style: {
                        marginTop: "4px",
                        border: "1px solid",
                        padding: "0 8px"
                    }
                }, m.a.createElement("pre", {
                    style: {
                        margin: "0",
                        lineHeight: "1.5"
                    }
                }, (t = a, n = o, (t = t || 2) < 0 ? "> Quote\n- List item\n\t1. sub-bullet\n\t\tline2" : (n ? ["> Quote\n- List item\n  1. sub-bullet\n     line2", ">  Quote\n-  List item\n   1. sub-bullet\n      line2", ">   Quote\n-   List item\n    1.  sub-bullet\n        line2", ">    Quote\n-    List item\n     1.   sub-bullet\n          line2"] : ["> Quote\n- List item\n  1. sub-bullet\n     line2", "> Quote\n- List item\n   1. sub-bullet\n      line2", "> Quote\n- List item\n    1. sub-bullet\n        line2", "> Quote\n- List item\n     1. sub-bullet\n          line2"])[(t || 2) - 2])))]]
            }))
        }, R = function (e) {
            var t = e.className, n = e.rows, a = m.a.useContext(b.a);
            return m.a.createElement("table", {className: "label-input-group " + (t || "")}, m.a.createElement("tbody", null, n.map((function (e, t) {
                var n = e[2] || e[0], o = a && "string" == typeof n && Object(b.c)(a, n) ? "search-hit" : "";
                return m.a.createElement("tr", {
                    key: t,
                    className: o
                }, m.a.createElement("td", null, "string" == typeof e[0] ? Object(f.a)(e[0]) : e[0]), m.a.createElement("td", null, e[1]), e[2] ? m.a.createElement(E, {hint: e[2]}) : null)
            }))))
        }, H = function () {
            return m.a.createElement("header", {className: "window-header"}, m.a.createElement("div", {className: "window-header-content"}, m.a.createElement("div", {className: "window-header-title"}, m.a.createElement("button", {
                className: "window-header-back",
                onClick: window.Setting.close
            }, m.a.createElement("span", {className: "icon"}, m.a.createElement(g.a, null))), m.a.createElement("h2", null, Object(f.a)("Preferences")))), m.a.createElement("button", {
                className: "header-close",
                onClick: window.Setting.close
            }, m.a.createElement("span", {className: "icon"}, m.a.createElement(g.b, null))))
        }, U = function (e) {
            return h.a.createPortal(m.a.createElement("div", {className: "modal-backdrop"}, m.a.createElement("div", {
                className: "modal-content " + (e.className || ""),
                onKeyDown: e.onKeyDown
            }, void 0 === e.title ? null : m.a.createElement("div", {className: "modal-title"}, m.a.createElement("h3", null, Object(f.a)(e.title))), m.a.createElement("div", {className: "modal-body"}, e.children), m.a.createElement("div", {className: "modal-footer"}, e.footer ? e.footer : m.a.createElement("div", null, m.a.createElement("button", {
                className: "btn btn-primary",
                onClick: e.closeAction
            }, Object(f.a)("OK")))))), document.querySelector("#modal"))
        }
    }, 2: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return a
        }));
        var a = function (e, t) {
            return e = e.replace(/\\n/g, "\n"), /((\.\.\.)|(\u2026))$/.exec(e) ? window.Dict.get(e.replace(/((\.\.\.)|(\u2026))$/, ""), t).replace(/\n/g, " ") + "\u2026" : window.Dict.get(e, t).replace(/\n/g, " ")
        }
    }, 21: function (e, t, n) {
    }, 22: function (e, t) {
        Object.values = Object.values || function (e) {
            return Object.keys(e).map((function (t) {
                return e[t]
            }))
        }
    }, 23: function (e, t, n) {
        e.exports = n(37)
    }, 24: function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (a) {
            "object" === typeof window && (n = window)
        }
        e.exports = n
    }, 26: function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return f
            }));
            var a = n(23), o = n.n(a), i = n(27), r = n(6), l = n(0), c = n.n(l), s = n(1), u = n(2), d = function (e) {
                var t = e.command, n = e.rawOutput, a = e.rawError, o = e.images, i = e.finalError, r = e.closeAction;
                return c.a.createElement(s.k, {
                    title: null === i ? "Validating\u2026" : i ? "Validation Failed" : "Validation Succeed",
                    className: i ? "modal-error" : !1 === i ? "modal-success" : "",
                    footer: c.a.createElement("div", null, c.a.createElement("button", {
                        className: "btn btn-primary",
                        disabled: null === i,
                        onClick: r,
                        style: {marginRight: "16px"}
                    }, Object(u.a)("OK")), c.a.createElement("button", {
                        className: "btn btn-default",
                        onClick: r
                    }, Object(u.a)("Cancel"))),
                    onKeyDown: function (e) {
                        if (null !== i && 27 == e.keyCode) return r(), e.stopPropagation(), !1
                    }
                }, t ? c.a.createElement("h6", {className: "console-label"}, Object(u.a)("Testing image uploading using command:")) : null, t ? c.a.createElement("pre", {className: "console-command"}, t) : null, null === i ? c.a.createElement("h6", {className: "console-label"}, Object(u.a)("Running\u2026 Waiting for results.")) : c.a.createElement(c.a.Fragment, null, c.a.createElement("h6", {className: "console-label " + (a ? "console-label-error" : "")}, Object(u.a)(a ? "Error from the console:" : "Output from the console:")), c.a.createElement("pre", {className: "console-" + (a ? "error" : "info")}, n), a || !o ? null : c.a.createElement("h6", {className: "console-label " + (i ? "console-label-error" : "console-label-success")}, Object(u.a)(i ? "Failed to fetch uploaded image from command output." : "Successfully get uploaded image url.")), o && o.length ? c.a.createElement("pre", {className: "console-command"}, o.map((function (e) {
                    return c.a.createElement("a", {
                        target: "__blank",
                        href: "i",
                        style: {display: "block"},
                        onClick: function () {
                            return window.Setting.openLink(e), !1
                        }
                    }, e)
                }))) : null))
            }, m = function (e) {
                var t = e.value, n = e.validatePath, a = e.customPath, o = e.onChange, i = c.a.useRef(null),
                    l = c.a.useState(n && n(a)), d = Object(r.a)(l, 2), m = d[0], p = d[1], h = null;
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(s.p, {
                    keyName: "image_save_location",
                    value: t,
                    onChange: function (e, t) {
                        "custom" == t && (setTimeout((function () {
                            i.current && i.current.focus()
                        }), 100), o("custom_image_save_location", a || "./${filename}"), p(null)), o(e, t || "")
                    },
                    options: {
                        "": "No special action",
                        folder: "Copy image to current folder (./)",
                        "per-file-assert": "Copy image to ./${filename}.assets",
                        ipic: "Upload image",
                        custom: "Copy image to custom folder"
                    }
                }), "custom" !== t ? null : c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                    className: "row",
                    style: {display: "flex", alignItems: "center"}
                }, c.a.createElement("input", {
                    className: m ? "on-error" : "",
                    ref: i,
                    type: "text",
                    value: a,
                    onChange: function (e) {
                        p(null), o("custom_image_save_location", e.target.value)
                    },
                    onBlur: function (e) {
                        h = setTimeout((function () {
                            p(n && n(a))
                        }), 50)
                    },
                    style: {paddingLeft: "4px", flexGrow: "1", maxWidth: "80%"},
                    onFocus: function (e) {
                        h && clearTimeout(h), e.target.select()
                    }
                }), c.a.createElement(s.h, {
                    hint: Object(u.a)("Select custom folder"),
                    icon: "folder",
                    style: {marginLeft: "1ch", cursor: "pointer"},
                    onClick: function () {
                        h && clearTimeout(h);
                        var e = /^[\/]/.exec(a) || /^[a-z]+:\\/i.exec(a) ? a : null;
                        window.Setting.selectFolder(e, (function (e) {
                            e && o("custom_image_save_location", e)
                        }))
                    },
                    hintPosition: "bottom"
                }), c.a.createElement(s.h, {
                    icon: "cancel-circled", style: {marginLeft: "8px"}, onClick: function () {
                        p(null), o("custom_image_save_location", "./${filename}")
                    }, hint: Object(u.a)("Reset to Default"), hintPosition: "bottom"
                })), m ? c.a.createElement("div", {
                    className: "row on-error",
                    style: {
                        opacity: "0.8",
                        marginTop: "4px",
                        fontSize: "12px",
                        marginRight: "16px",
                        minHeight: "initial",
                        userSelect: "text"
                    }
                }, m) : null, c.a.createElement("div", {
                    className: "row",
                    style: {
                        opacity: "0.8",
                        marginTop: "4px",
                        fontSize: "12px",
                        marginRight: "16px",
                        userSelect: "text",
                        lineHeight: "1.2"
                    }
                }, " ", Object(u.a)("Please specify a relative path to current folder which begins with './' or '../', or an absolute folder path. (`${filename}` representing for currents filename.)"))))
            }, p = function (e) {
                var t = e.app;
                return c.a.createElement(s.j, {
                    title: Object(u.a)("When Insert\u2026"),
                    hintLink: "https://support.typora.io/Images/#when-insert-images",
                    dictGroup: "Menu"
                }, c.a.createElement(m, {
                    value: t.getValue("image_save_location") || "",
                    onChange: t.onChange,
                    customPath: t.getValue("custom_image_save_location"),
                    validatePath: t.imageFolderIsInvalid
                }), c.a.createElement(s.b, {
                    style: {marginTop: "8px"},
                    keyName: "no_image_move_for_local",
                    label: "Apply above rules to local images",
                    checked: !t.getValue("no_image_move_for_local"),
                    onChange: t.onChange,
                    reverse: !0
                }), c.a.createElement(s.b, {
                    keyName: "apply_image_move_for_web",
                    label: "Apply above rules to online images",
                    checked: !!t.getValue("apply_image_move_for_web"),
                    onChange: t.onChange
                }), c.a.createElement(s.b, {
                    keyName: "use_relative_path_for_img",
                    label: "Use relative path if possible",
                    checked: !!t.getValue("use_relative_path_for_img"),
                    onChange: t.onChange
                }), c.a.createElement(s.b, {
                    keyName: "allow_image_upload",
                    label: "Allow upload images automatically based on YAML settings",
                    checked: !!t.getValue("allow_image_upload"),
                    onChange: t.onChange
                }), c.a.createElement(s.b, {
                    keyName: "autoEscapeImageURL",
                    label: "Auto escape image URL when insert",
                    checked: !!t.getValue("autoEscapeImageURL"),
                    onChange: t.onChange,
                    hint: "For example, if you insert a file at 'img/example file.png', it will become 'img/example%20file.png'. Enable this for better compatibility with other Markdown engines, or disable this for better readability."
                }))
            }, h = function () {
                if (!e.require) return "";
                var t = window.isWin ? "\\" : "/";
                return window.Setting.userDataPath() + t + "picgo" + t + (window.isWin ? "x64" == e.process.arch ? "win64" : "win32" : "linux") + t + "picgo" + (window.isWin ? ".exe" : "")
            }, g = function (e) {
                var t = e.app, n = c.a.useState(null), a = Object(r.a)(n, 2), o = a[0], i = a[1],
                    l = c.a.useState(null), m = Object(r.a)(l, 2), p = m[0], g = m[1], f = t.getValue("image_uploader"),
                    b = "zh-Hans" == (window.Setting.locale() || ""), E = {
                        "": "None",
                        ipic: "iPic",
                        upic: "uPic",
                        "picgo-intro": "PicGo-Core (command line)",
                        "picgo-cli": "PicGo-Core (command line)",
                        "picgo-app": "PicGo.app",
                        custom: "Custom Command"
                    };
                window.isNodeHtml ? (E["picgo-app"] = "PicGo (app)", window.isMacNode || (delete E.upic, delete E.ipic), delete E["picgo-intro"]) : delete E["picgo-cli"], b || window.isDebug || "picgo-app" === f || delete E["picgo-app"];
                var k = [["Image Uploader", c.a.createElement(s.p, {
                    onChange: t.onChange,
                    keyName: "image_uploader",
                    value: t.getValue("image_uploader"),
                    options: E
                })]], C = {
                    ipic: "iPic",
                    "picgo-cli": "PicGo-Core CLI",
                    "picgo-intro": "PicGo-Core CLI",
                    "picgo-app": "PicGo.app",
                    upic: "uPic"
                };
                window.isNodeHtml && (C["picgo-app"] = "PicGo (app)");
                var x = f;
                "custom" == f ? x = t.getValue("custom_image_uploader") : "ipic" == f ? x = "ipic" : "upic" == f ? x = "/Applications/uPic.app/Contents/MacOS/uPic -o url -u" : "picgo-cli" == f && (x = h() + " u", window.isWin && (x = "@chcp 65001 >nul & cmd /d/s/c " + x));
                var S = null, O = function () {
                    "ipic" == f && window.Setting.openLink(b ? "https://itunes.apple.com/cn/app/id1101244278" : "https://itunes.apple.com/app/id1101244278"), "upic" == f && window.Setting.openLink(b ? "https://blog.svend.cc/upic/" : "https://blog.svend.cc/upic/en/"), "picgo-cli" == f && g(!0), "picgo-intro" == f && window.Setting.openLink("https://support.typora.io/Upload-Image/#option-2-config-via-cli"), "picgo-app" == f && window.Setting.openLink("https://molunerfinn.com/PicGo/")
                }, N = "https://support.typora.io/Upload-Image/";
                "ipic" == f && (N += "#ipic-macos-freemium"), "upic" == f && (N += "#upic-macos-opensource"), "picgo-cli" == f && (N += "#picgo-core-command-line-opensource"), "picgo-app" == f && (N += "#picgoapp-chinese-language-only");
                var _ = C[f] ? Object(u.a)("Download %@").replace("%@", C[f]) : null;
                if ("picgo-intro" == f) k.splice(1, 0, [null, c.a.createElement("span", null, c.a.createElement(s.a, {
                    label: Object(u.a)("Instructions"),
                    onClick: O
                }))]); else if (f) {
                    "picgo-cli" == f && (_ = Object(u.a)("Download or Upgrade"), k.splice(1, 0, [null, c.a.createElement(s.a, {
                        label: Object(u.a)("Open Config File"),
                        onClick: y
                    })]));
                    var j = c.a.createElement(s.a, {
                        label: Object(u.a)("Test Uploader"), onClick: function () {
                            S = window.Setting.testImageUploader(x, i, t.getValue("picgo_app_path"))
                        }, disabled: !x
                    }), F = c.a.createElement(s.g, {hint: "Instructions", inlineHint: !0, hintLink: N});
                    k.splice(1, 0, "custom" == f ? [j, F] : [j, c.a.createElement("span", null, c.a.createElement(s.a, {
                        label: _,
                        onClick: O
                    }), "\xa0\xa0", F)])
                }
                "custom" == f && k.splice(1, 0, [Object(u.a)("Command"), c.a.createElement("input", {
                    type: "text",
                    value: t.getValue("custom_image_uploader") || "",
                    onChange: function (e) {
                        t.onChange("custom_image_uploader", e.target.value)
                    },
                    placeholder: Object(u.a)("e.g: %@").replace("%@", '"/usr/bin/uploader" --upload'),
                    style: {paddingLeft: "4px", flexGrow: "1", width: "90%"}
                })]), "picgo-app" == f && window.isNodeHtml && k.splice(1, 0, [Object(u.a)("PicGo Path"), c.a.createElement(s.d, {
                    keyName: "picgo_app_path",
                    value: t.getValue("picgo_app_path") || "",
                    defaultPath: window.isWin ? "C:\\Program Files\\PicGo\\PicGo.exe" : "",
                    placeholder: Object(u.a)("e.g: %@").replace("%@", window.isWin ? "C:\\Program Files\\PicGo\\PicGo.exe" : "/usr/bin/picgo"),
                    onChange: t.onChange,
                    option: {name: Object(u.a)("Executable"), extensions: [window.isWin ? "exe" : ""]}
                })]);
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(s.j, {
                    title: Object(u.a)("Image Upload Setting"),
                    hintLink: "https://support.typora.io/Upload-Image/",
                    dictGroup: "Menu"
                }, c.a.createElement(s.t, {
                    rows: k,
                    className: "image-upload-group"
                })), p ? c.a.createElement(w, {
                    onCancel: function () {
                        g(null)
                    }, onStartDownload: function () {
                        g(null), v(t)
                    }
                }) : null, o ? c.a.createElement(d, Object.assign({
                    closeAction: function () {
                        S && S(), i(null)
                    }
                }, o)) : null)
            };

            function f() {
                return c.a.createElement(s.m, {
                    active: 3 == this.state.activeTab,
                    "data-index": "3"
                }, this.panelHeader(Object(u.a)("Image", "Menu")), c.a.createElement(p, {app: this}), c.a.createElement(g, {app: this}))
            }

            var b = function (t) {
                return new Promise((function (n) {
                    var a = e.require("fs");
                    a.access(t, a.F_OK, (function (a) {
                        a ? n(null) : e.require("child_process").execFile(t, ["--version"], (function (e, t, a) {
                            n(e ? "x" + (e.message || a) : t)
                        }))
                    }))
                }))
            }, w = function (e) {
                var t = e.onCancel, n = e.onStartDownload, a = c.a.useState(Object(u.a)("Checking\u2026")),
                    o = Object(r.a)(a, 2), i = o[0], l = o[1], d = c.a.useState(void 0), m = Object(r.a)(d, 2),
                    p = m[0], g = m[1], f = c.a.useState("Download"), w = Object(r.a)(f, 2), v = w[0], y = w[1];
                return c.a.useEffect((function () {
                    var e = h();
                    Promise.all([b(e), fetch("https://github.com/typora/PicGo-cli/releases/download/latest/version").then((function (e) {
                        return e.text()
                    })).catch((function (e) {
                        return Promise.resolve("x" + e.message)
                    }))]).then((function (e) {
                        var t = e[0], n = e[1];
                        return null == t ? (g(Object(u.a)("Download %@").replace("%@", "PicGo-Core (command line)")), l(Object(u.a)("Loading PicGo-Core License\u2026")), fetch("https://raw.githubusercontent.com/PicGo/PicGo-Core/dev/License").then((function (e) {
                            return e.text()
                        })).then((function (e) {
                            l(c.a.createElement(c.a.Fragment, null, c.a.createElement("div", null, "PicGo-Core (command line) is a pre-built command line wrapper of PicGo-Core, license info for PicGo-Core is:"), c.a.createElement("pre", null, e)))
                        })), void y(Object(u.a)("Agree and Download"))) : "x" == t[0] ? (g("Failed to get installed version of PicGo-Core (command line)"), l(c.a.createElement("pre", null, t.substr(1))), void y(Object(u.a)("Download and Reinstall"))) : "x" == n[0] ? (g("Failed to get latest version of PicGo-Core (command line)"), l(c.a.createElement("pre", null, "Fetch https://github.com/typora/PicGo-cli/releases/download/latest/version return:", c.a.createElement("br", null), n.substr(1))), void y("Download")) : (l(Object(u.a)("Latest version is $1, your version is $2").replace("$2", t).replace("$1", n)), void (t.trim() == n.trim() ? (g("You have the latest PicGo-Core (CLI)"), y(Object(u.a)("Download and Reinstall"))) : (g("Newer version is available"), y(Object(u.a)("Download")))))
                    }))
                }), []), c.a.createElement(s.k, {
                    title: p,
                    footer: c.a.createElement("div", null, c.a.createElement("button", {
                        className: "btn btn-primary",
                        onClick: n
                    }, Object(u.a)(v)), c.a.createElement("button", {
                        className: "btn btn-default",
                        onClick: t
                    }, Object(u.a)("Cancel")))
                }, i)
            }, v = function () {
                window.Setting.invoke("setting.doDownloadPicgo")
            }, y = function () {
                var t = Object(i.a)(o.a.mark((function t() {
                    var n, a, i, r;
                    return o.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return n = e.require("fs-extra"), a = e.require("fs-plus"), i = e.require("electron"), r = e.require("path").normalize(window._options.userPath + "/.picgo/config.json"), a.isFileSync(r) || (n.ensureFileSync(r), n.writeFileSync(r, "{\n\n}")), t.next = 7, i.shell.openPath(r);
                            case 7:
                                t.sent && (window.isWin ? e.require("child_process").spawn("C:\\windows\\notepad.exe", [r]) : i.shell.showItemInFolder(r));
                            case 9:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function () {
                    return t.apply(this, arguments)
                }
            }()
        }).call(this, n(24))
    }, 27: function (e, t, n) {
        "use strict";

        function a(e, t, n, a, o, i, r) {
            try {
                var l = e[i](r), c = l.value
            } catch (s) {
                return void n(s)
            }
            l.done ? t(c) : Promise.resolve(c).then(a, o)
        }

        function o(e) {
            return function () {
                var t = this, n = arguments;
                return new Promise((function (o, i) {
                    var r = e.apply(t, n);

                    function l(e) {
                        a(r, o, i, l, c, "next", e)
                    }

                    function c(e) {
                        a(r, o, i, l, c, "throw", e)
                    }

                    l(void 0)
                }))
            }
        }

        n.d(t, "a", (function () {
            return o
        }))
    }, 29: function (e, t, n) {
        "use strict";
        var a = n(3), o = n(7), i = n(5), r = n(13), l = n(14), c = n(16), s = n(15), u = n(0), d = n.n(u), m = n(8),
            p = n.n(m), h = (n(21), n(36), n(2)), g = n(4), f = n(1), b = n(26);

        function w() {
            var e = this;
            return d.a.createElement(f.m, {
                active: 1 == this.state.activeTab,
                "data-index": "1"
            }, this.panelHeader("Appearance"), d.a.createElement(f.c, {visible: !(window._options.osVersion - 0 >= 10.16) && window.isMac}, d.a.createElement(f.j, {
                title: "Window Style",
                keyWords: ["Classic", "Seamless"]
            }, d.a.createElement(f.n, {
                keyName: "use_seamless_window",
                value: !!this.getValue("use_seamless_window") + "",
                options: {false: "Classic", true: "Seamless"},
                onChange: function (t, n) {
                    e.onChange(t, n + "" === "true")
                }
            }))), d.a.createElement(f.c, {
                forWin: !0,
                visible: window.isMacNode
            }, d.a.createElement(f.j, {
                title: "Window Style",
                keyWords: ["Classic", "Unibody"],
                hint: "(applied after restart)",
                breakBeforeHint: !0
            }, d.a.createElement(f.n, {
                keyName: "framelessWindow",
                value: !!this.getValue("framelessWindow") + "",
                options: {false: "Classic", true: "Unibody"},
                onChange: function (t, n) {
                    e.onChange(t, n + "" === "true")
                }
            }))), d.a.createElement(f.j, {title: "Font Size"}, d.a.createElement(f.f, {
                value: !!this.getValue("useCustomFontSize"),
                customValue: this.getValue("customFontSize"),
                onChange: this.onChange
            })), d.a.createElement(f.c, {forMac: !0}, d.a.createElement(f.j, {title: "Word Count"}, d.a.createElement(f.b, {
                label: "Always Show Word Count",
                keyName: "always_show_wordcount",
                checked: !!this.getValue("always_show_wordcount"),
                onChange: this.onChange
            }), d.a.createElement(f.o, {
                style: {marginBottom: "0"},
                keyWords: ["Reading Speed"]
            }, d.a.createElement(f.r, {label: "Reading Speed"}), ":", d.a.createElement(f.l, {
                keyName: "wordsPerMinute",
                style: {width: "60px", margin: "0 8px", paddingLeft: "8px"},
                value: this.getValue("wordsPerMinute") || 382,
                onChange: this.onChange,
                size: 3,
                min: 1,
                max: 999
            }), d.a.createElement(f.r, {
                label: "words / min",
                style: {width: "60px", marginRight: "12px"}
            }), d.a.createElement(f.q, {
                label: "Reset to Default",
                onClick: function () {
                    e.resetWordsPerMinute()
                },
                options: {
                    120: "120  words/minute (Slow)",
                    240: "240  words/minute (Medium)",
                    382: "382  words/minute (Fast)"
                },
                onExtra: function (t) {
                    e.resetWordsPerMinute(t - 0)
                }
            })))), d.a.createElement(f.c, {
                forWin: !0,
                forLinux: !0
            }, d.a.createElement(f.j, {title: "Status Bar"}, d.a.createElement(f.b, {
                label: "Show status bar",
                keyName: "showStatusBar",
                checked: !!this.getValue("showStatusBar"),
                onChange: this.onChange
            })), d.a.createElement(f.j, {title: "Reading Speed"}, d.a.createElement(f.o, {style: {marginTop: "-4px"}}, d.a.createElement(f.l, {
                keyName: "wordsPerMinute",
                style: {width: "60px", margin: "0 8px 0 0", paddingLeft: "8px"},
                value: this.getValue("wordsPerMinute") || 382,
                onChange: this.onChange,
                size: 3,
                min: 1,
                max: 999
            }), d.a.createElement(f.r, {
                label: "words / min",
                style: {width: "60px", marginRight: "12px"}
            }), d.a.createElement(f.q, {
                label: "Reset to Default",
                onClick: function () {
                    e.resetWordsPerMinute()
                },
                options: {
                    120: "120  words/minute (Slow)",
                    240: "240  words/minute (Medium)",
                    382: "382  words/minute (Fast)"
                },
                onExtra: function (t) {
                    e.resetWordsPerMinute(t - 0)
                }
            })))), d.a.createElement(f.j, {title: "Left Panel"}, d.a.createElement(f.b, {
                label: "Collapsible Outline on Left Panel",
                keyName: "can_collapse_outline_panel",
                checked: !!this.getValue("canCollapseOutlinePanel", "can_collapse_outline_panel"),
                onChange: this.onChange
            })), d.a.createElement(f.j, {
                title: "Themes",
                hintLink: "https://support.typora.io/About-Themes/"
            }, function () {
                var t = e.getValue("allThemes") || [];
                if (window.isNode || window.webkit || (t = ["themeA", "themeB"]), !t.length) return null;
                var n = {};
                t.forEach((function (e) {
                    n[e] = e.replace(/\.css$/, "").replace(/(^|-|_)(\w)/g, (function (e, t, n, a) {
                        return (t ? " " : "") + n.toUpperCase()
                    }))
                }));
                var a = window.isWin || window.isMacNode || window._options.canUseDarkMode,
                    o = a && !!e.getValue("useSeparateDarkTheme"),
                    i = [[d.a.createElement(f.r, {label: o ? "Light Theme" : "Theme"}), d.a.createElement(f.p, {
                        onChange: e.onChange,
                        keyName: "theme",
                        value: e.getValue("theme"),
                        options: n
                    })]];
                return o && i.push([d.a.createElement(f.r, {label: "Dark Theme"}), d.a.createElement(f.p, {
                    onChange: e.onChange,
                    keyName: "darkTheme",
                    value: e.getValue("darkTheme") || e.getValue("theme"),
                    options: n
                })]), d.a.createElement(d.a.Fragment, null, d.a.createElement(f.t, {rows: i}), a ? d.a.createElement(f.b, {
                    label: "Use separate theme in dark mode",
                    keyName: "useSeparateDarkTheme",
                    checked: o,
                    onChange: e.onChange,
                    hint: "Supported on macOS \u2265 10.15 or Windows 10 \u2265 1903"
                }) : null)
            }(), d.a.createElement(f.o, {
                keyWords: ["Open Theme Folder", "Get Themes"],
                style: {marginTop: "6px"}
            }, d.a.createElement("span", {
                style: {
                    minWidth: "40%",
                    display: "inline-block",
                    marginRight: "8px"
                }
            }, d.a.createElement(f.a, {
                label: "Open Theme Folder", onClick: function () {
                    window.Setting.openFolder(e.getValue("currentThemeFolder"))
                }
            })), d.a.createElement(f.a, {
                label: "Get Themes", onClick: function () {
                    window.Setting.openLink("http://theme.typora.io")
                }
            }))))
        }

        var v = n(18);
        var y = n(17);

        function E(e) {
            return function (e) {
                if (Array.isArray(e)) return Object(v.a)(e)
            }(e) || function (e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || Object(y.a)(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        var k = n(6), C = {
                A5: {name: "A5", pt: [420, 595], mm: [148, 210]},
                A4: {name: "A4", pt: [595, 842], mm: [210, 297]},
                A3: {name: "A3", pt: [842, 1191], mm: [297, 420]},
                Letter: {name: "US Letter", pt: [612, 791], mm: [216, 279]},
                Legal: {name: "US Legal", pt: [612, 1009], mm: [216, 356]},
                Tabloid: {name: "Tabloid", pt: [791, 1225], mm: [279, 432]}
            }, x = {
                engine: {
                    type: "select",
                    options: {"": "Typora / Webkit", latex: "Pandoc / LaTeX"},
                    label: "Export Engine"
                },
                "pdf-engine": {
                    label: "LaTeX Engine", type: "string", visible: function (e) {
                        return "latex" == e.engine
                    }
                },
                template: {
                    type: "file", extension: "latex context ms", label: "Template", visible: function (e) {
                        return "latex" == e.engine
                    }
                },
                paper: {
                    type: "paper", label: "Paper Size", default: window.isMac ? "" : "A4", visible: function (e) {
                        return !e.engine
                    }
                },
                header: {
                    type: "string",
                    label: "Header",
                    default: "",
                    placeholder: "None",
                    presetOptions: ["${title}", "${pageNo}", "${today}"],
                    visible: function (e) {
                        return !e.engine
                    }
                },
                footer: {
                    type: "string",
                    label: "Footer",
                    default: "",
                    placeholder: "None",
                    presetOptions: ["${title}", "No. ${pageNo} / ${totalPages}", "Written in Typora", "CONFIDENTIAL"],
                    visible: function (e) {
                        return !e.engine
                    }
                },
                author: {type: "string", label: "Author", placeholder: "Empty"}
            }, S = {
                afterHeader: {type: "textarea", label: "Append in <head />"},
                afterBody: {type: "textarea", label: "Append in <body />"},
                openExportLocation: !0
            }, O = Object(a.a)({
                sidebar: {
                    type: "checkbox",
                    checkboxLabel: "Include Outline Sidebar",
                    label: "Outline"
                }
            }, S), N = {width: {type: "number", unit: "px", default: 640, withReset: !0}}, _ = {
                command: {type: "string", label: "Command"},
                noSaveDialog: {type: "checkbox", label: "Show Save File Dialog", reverse: !0},
                extensions: {
                    type: "string", label: "File Extensions for Export", visible: function (e) {
                        return !e.noSaveDialog
                    }
                }
            }, j = {arguments: {type: "string", label: "Arguments"}},
            F = {extraArguments: {default: "", type: "string", label: "Extra Arguments"}}, P = Object(a.a)(Object(a.a)({
                arg: {
                    default: "-f native -s -o ${outputPath} -t docx",
                    type: "string",
                    label: "Arguments",
                    disabled: !0
                }
            }, F), {}, {"reference-doc": {type: "file", extension: "docx", label: "Style Reference"}}),
            L = Object(a.a)(Object(a.a)({
                arg: {
                    default: "-f native -s -o ${outputPath} -t odt",
                    type: "string",
                    label: "Arguments",
                    disabled: !0
                }
            }, F), {}, {template: {type: "file", extension: "opendocument", label: "Template"}}), T = Object(a.a)({
                arg: {
                    default: "-f native -s -o ${outputPath} -t rtf",
                    type: "string",
                    label: "Arguments",
                    disabled: !0
                }
            }, F), M = Object(a.a)(Object(a.a)({
                arg: {
                    default: "-f native -s -o ${outputPath} -t epub",
                    type: "string",
                    label: "Arguments",
                    disabled: !0
                }
            }, F), {}, {
                css: {type: "file", extension: "css", label: "Custom CSS"},
                "epub-chapter-level": {label: "Chapter Level", type: "select", options: {1: "1", 2: "2", 3: "3", 4: "4"}}
            }), A = Object(a.a)({
                arg: {
                    default: "-f native -s -o ${outputPath} -t latex",
                    type: "string",
                    label: "Arguments",
                    disabled: !0
                }
            }, F), D = Object(a.a)({
                arg: {
                    default: "-f native -s -o ${outputPath} -t mediawiki",
                    type: "string",
                    label: "Arguments",
                    disabled: !0
                }
            }, F), V = Object(a.a)({
                arg: {
                    default: "-f native -s -o ${outputPath} -t rst",
                    type: "string",
                    label: "Arguments",
                    disabled: !0
                }
            }, F), I = Object(a.a)({
                arg: {
                    default: "-f native -s -o ${outputPath} -t textile",
                    type: "string",
                    label: "Arguments",
                    disabled: !0
                }
            }, F), W = Object(a.a)({
                arg: {
                    default: "-f native -s -o ${outputPath} -t opml",
                    type: "string",
                    label: "Arguments",
                    disabled: !0
                }
            }, F), R = [{name: "Word (.docx)", type: "docx", key: "docx"}, {
                name: "OpenOffice",
                type: "odt",
                key: "odt"
            }, {name: "RTF", type: "rtf", key: "rtf"}, {name: "Epub", type: "epub", key: "epub"}, {
                name: "LaTeX",
                type: "latex",
                key: "latex"
            }, {name: "Media Wiki", type: "wiki", key: "wiki"}, {
                name: "reStructuredText",
                type: "rst",
                key: "rst"
            }, {name: "Textile", type: "textile", key: "textile"}, {name: "OPML", type: "opml", key: "opml"}],
            H = function (e) {
                var t = e.label, n = e.active, a = e.onClick, o = e.onRename, i = e.rename, r = e.tab,
                    l = function (e) {
                        var t = e.target.value.trim().replace(/[&\u2192]/g, "");
                        t.length ? o(r, t) : (e.target.select(), e.preventDefault(), e.stopPropagation())
                    };
                return i && n == r ? d.a.createElement("input", {
                    className: "export-item",
                    type: "text",
                    defaultValue: t,
                    autoFocus: "autofocus",
                    onFocus: function (e) {
                        e.target.select()
                    },
                    onKeyDown: function (e) {
                        13 == e.keyCode && l(e)
                    },
                    onBlur: l
                }) : d.a.createElement("span", {
                    className: "export-item" + (n == r ? " active" : ""),
                    onClick: function () {
                        a(r)
                    }
                }, Object(h.a)(t))
            }, U = function (e) {
                var t = e.keyName, n = e.value, a = e.onChange, o = e.defaultValue;
                e.validatePath;
                return d.a.createElement("div", {
                    className: "row",
                    style: {display: "flex", alignItems: "center"}
                }, d.a.createElement("input", {
                    type: "text",
                    className: !n && o ? "default-value-input" : "",
                    value: n || o || "",
                    onChange: function (e) {
                        a(t, e.target.value)
                    }
                }), d.a.createElement(f.h, {
                    hint: Object(h.a)("Select custom folder"),
                    icon: "folder",
                    style: {marginLeft: "1ch", cursor: "pointer"},
                    onClick: function () {
                        var e = /^[\/]/.exec(n) || /^[a-z]+:\\/i.exec(n) ? n : null;
                        window.Setting.selectFolder(e, (function (e) {
                            e && a("custom_image_save_location", e)
                        }))
                    },
                    hintPosition: "bottom"
                }))
            }, G = function (e, t) {
                return function (n, a) {
                    var o = e.getValue("export." + t) || {}, i = Object.assign({}, o);
                    i[n] = a, e.onChange("export." + t, i)
                }
            }, B = function (e) {
                var t = e.app, n = t.getValue("export.general") || {};
                return d.a.createElement("div", null, d.a.createElement(f.j, {title: "Default Folder for Exported File"}, d.a.createElement(f.p, {
                    keyName: "exportFolder",
                    value: n.exportFolder || "",
                    onChange: G(t, "general"),
                    options: {"": "Auto", same: "Same folder with current file", custom: "Custom location"}
                }), "custom" === n.exportFolder ? d.a.createElement(U, {
                    keyName: "customExportPath",
                    value: n.customExportPath,
                    defaultValue: window.Setting.documentPath(),
                    onChange: G(t, "general")
                }) : null), d.a.createElement(f.j, {title: "Pandoc Path"}, d.a.createElement("div", {className: "row text-input"}, d.a.createElement(f.d, {
                    keyName: "pandocPath",
                    value: t.getValue("pandocPath"),
                    placeholder: "(Auto Detect)",
                    onChange: t.onChange,
                    defaultPath: window.isWin ? "C:\\Program Files\\Pandoc\\pandoc.exe" : "",
                    option: {name: Object(h.a)("Executable"), extensions: [window.isWin ? "exe" : ""]}
                }))), d.a.createElement(f.j, {title: "After Export"}, d.a.createElement(f.b, {
                    label: "Open exported file location",
                    keyName: "openExportLocation",
                    checked: !!n.openExportLocation,
                    onChange: G(t, "general")
                })))
            }, q = function (e) {
                var t, n, a = e.app, o = e.groupId, i = a.getValue("export.general") || {},
                    r = a.getValue("export." + o) || {}, l = ((a.getValue("customExport") || R).find((function (e) {
                        return e.key === o
                    })) || {}).type || o, c = function (e) {
                        switch (e) {
                            case"pdf":
                                return x;
                            case"html":
                                return O;
                            case"html-plain":
                                return S;
                            case"image":
                                return N;
                            case"docx":
                                return P;
                            case"odt":
                                return L;
                            case"rtf":
                                return T;
                            case"epub":
                                return M;
                            case"latex":
                                return A;
                            case"wiki":
                                return D;
                            case"rst":
                                return V;
                            case"textile":
                                return I;
                            case"opml":
                                return W;
                            case"pandoc":
                                return j;
                            case"custom":
                                return _
                        }
                    }(r.schema || l);
                return c ? d.a.createElement("div", null, Object.keys(c).map((function (e) {
                    var t = c[e];
                    return t && t.type ? t.visible && !t.visible(r) ? null : d.a.createElement(f.j, {
                        key: e,
                        title: t.label || e.charAt(0).toUpperCase() + e.slice(1)
                    }, "group" == t.type ? t.content.map((function (e) {
                        return d.a.createElement(K, {
                            app: a,
                            groupId: o,
                            conf: r,
                            key: e.key,
                            keyName: e.key,
                            inputSchema: e
                        })
                    })) : d.a.createElement(K, {app: a, groupId: o, conf: r, inputSchema: t, keyName: e})) : null
                })), d.a.createElement(f.j, {title: "After Export"}, d.a.createElement(f.b, {
                    label: "Open exported file location",
                    keyName: "openExportLocation",
                    checked: (t = r.openExportLocation, n = c.openExportLocation, i.openExportLocation, !!(void 0 === t ? n : t)),
                    onChange: G(a, o)
                }), d.a.createElement(f.b, {
                    label: "Open exported file",
                    keyName: "openExportFile",
                    checked: !!r.openExportFile,
                    onChange: G(a, o)
                }))) : null
            }, z = function (e) {
                var t = e.keyName, n = e.value, a = e.placeholder, o = e.onChange, i = e.disabled, r = e.presetOptions,
                    l = null;
                if (r) {
                    var c = {};
                    r.map((function (e) {
                        return c[e] = e
                    })), l = d.a.createElement(d.a.Fragment, null, d.a.createElement(f.h, {icon: "dot-3"}), d.a.createElement("select", {
                        onChange: function (e) {
                            "_none" === e.target.value ? o(t, "") : e.target.value && o(t, e.target.value)
                        }, value: r.indexOf(n) > -1 ? n : n ? "" : "_none"
                    }, d.a.createElement("option", {value: ""}, "Custom"), r.map((function (e) {
                        return d.a.createElement("option", {key: e, value: e}, e)
                    })), d.a.createElement("option", {value: "_none"}, "None")))
                }
                return d.a.createElement("div", {className: "row text-input"}, d.a.createElement("input", {
                    type: "text",
                    value: n,
                    onChange: function (e) {
                        return o(t, e.target.value)
                    },
                    disabled: i,
                    placeholder: a
                }), l || null)
            }, $ = function (e) {
                var t = e.keyName, n = e.value, a = e.onChange;
                return d.a.createElement("div", {className: "row text-input"}, d.a.createElement("textarea", {
                    type: "text",
                    value: n,
                    onChange: function (e) {
                        return a(t, e.target.value)
                    },
                    style: {width: "100%", height: "80px"}
                }))
            }, Q = function (e) {
                var t = e.keyName, n = e.value, a = e.conf, o = e.onChange, i = (C[n] || {}).mm || a[t + ".custom"], r = {};
                window.isMac && (r[""] = "Default"), Object.keys(C).forEach((function (e) {
                    return r[e] = C[e].name
                }));
                var l = "custom" != n, c = {};
                l && (c.background = "transparent"), r.custom = Object(h.a)("Custom"), i = i || [210, 297];
                var s = function (e) {
                    var t = e - 0;
                    return isNaN(t) && (t = 0), t
                }, u = function (e, t) {
                    var n = a[e];
                    return "" === n || void 0 === n ? t : n
                }, m = [], p = a[t + ".margin"] || "";
                return m.push([d.a.createElement(f.r, {label: "Margin"}), d.a.createElement(f.p, {
                    keyName: t + ".margin",
                    value: p,
                    onChange: o,
                    options: {"": "Default", custom: "Custom"}
                })]), "custom" == p && ["Top", "Bottom", "Left", "Right"].forEach((function (e) {
                    m.push([d.a.createElement(f.r, {label: "Margin " + e}), d.a.createElement("span", null, d.a.createElement("input", {
                        type: "number",
                        value: u(t + ".margin" + e, 16),
                        onChange: function (n) {
                            return o(t + ".margin" + e, s(n.target.value))
                        }
                    }), " mm")])
                })), m.push([d.a.createElement(f.r, {label: "Width x Height"}), d.a.createElement("span", null, d.a.createElement("input", {
                    type: "number",
                    value: i[0],
                    readOnly: l,
                    style: c,
                    onChange: function (e) {
                        return o(t + ".custom", [s(e.target.value), i[1]])
                    }
                }), " mm x ", " ", d.a.createElement("input", {
                    type: "number",
                    value: i[1],
                    readOnly: l,
                    style: c,
                    onChange: function (e) {
                        return o(t + ".custom", [i[0], s(e.target.value)])
                    }
                }), " mm")]), d.a.createElement(d.a.Fragment, null, d.a.createElement(f.p, {
                    keyName: t,
                    value: n,
                    onChange: o,
                    options: r
                }), d.a.createElement(f.t, {rows: m}))
            }, K = function (e) {
                var t = e.app, n = e.groupId, a = e.conf, o = e.keyName, i = e.inputSchema;
                switch (i.type) {
                    case"select":
                        return d.a.createElement(f.p, {
                            keyName: o,
                            value: a[o] || i.default,
                            onChange: G(t, n),
                            options: i.options
                        });
                    case"string":
                        var r = a[o] || i.default;
                        return r instanceof Array && (r = r.join(" ")), d.a.createElement(z, {
                            keyName: o,
                            value: r,
                            onChange: G(t, n),
                            placeholder: i.placeholder,
                            disabled: i.disabled,
                            presetOptions: i.presetOptions
                        });
                    case"paper":
                        var l = a[o] || i.default;
                        return d.a.createElement(Q, {keyName: o, value: l, conf: a, onChange: G(t, n)});
                    case"textarea":
                        return d.a.createElement($, {keyName: o, value: a[o] || i.default, onChange: G(t, n)});
                    case"checkbox":
                        var c = !(!a[o] && !i.default);
                        return d.a.createElement(f.b, {
                            label: i.checkboxLabel || i.label,
                            keyName: o,
                            checked: i.reverse ? !c : c,
                            onChange: G(t, n),
                            reverse: i.reverse
                        });
                    case"number":
                        return d.a.createElement("div", {className: "row"}, d.a.createElement(f.l, {
                            keyName: o,
                            value: a[o] || i.default,
                            onChange: G(t, n)
                        }), " ", i.unit, " ", i.withReset ? d.a.createElement(f.a, {
                            style: {marginLeft: "24px"},
                            label: "Reset",
                            onClick: function () {
                                G(t, n)(o, i.default)
                            }
                        }) : null);
                    case"file":
                        return d.a.createElement("div", {className: "row text-input"}, d.a.createElement(f.d, {
                            keyName: o,
                            value: a[o] || i.default,
                            onChange: G(t, n),
                            option: {extensions: [i.extension.split(" ")]}
                        }))
                }
                return null
            }, J = [{name: "PDF", type: "pdf"}, {name: "HTML", type: "html"}, {
                name: "HTML (without Styles)",
                type: "html-plain"
            }, {name: "Image", type: "image"}].concat(R, [{name: "Pandoc", type: "pandoc"}, {
                name: "Custom",
                type: "custom"
            }]), X = function (e) {
                var t = e.app, n = d.a.useState("general"), a = Object(k.a)(n, 2), o = a[0], i = a[1], r = d.a.useState(!1),
                    l = Object(k.a)(r, 2), c = l[0], s = l[1], u = d.a.useState(null), m = Object(k.a)(u, 2), p = m[0],
                    g = m[1], b = "general" == o ? B : q, w = ["general", "pdf", "html", "html-plain", "image"],
                    v = w.indexOf(o) > -1, y = t.getValue("customExport") || R, C = function () {
                        var e, n = J[p], a = w.indexOf(n.type) > -1 ? 1 : 0;
                        for (y = E(y); e = n.type + (a || ""), y.find((function (t) {
                            return t.key === e
                        }));) a++;
                        var o = {key: e, name: n.name + (a ? "-" + a : ""), type: n.type};
                        y.push(o), t.onChange("customExport", y), g(null), i(e), s(!0)
                    }, x = function (e, n) {
                        (y = E(y)).find((function (t) {
                            return t.key === e
                        })).name = n, t.onChange("customExport", y), s(!1)
                    }, S = function () {
                        s(!1)
                    }, O = y.map((function (e) {
                        return e.key
                    })), N = O.indexOf(o) <= 0, _ = O.indexOf(o) >= O.length - 1;
                return d.a.createElement("div", {className: "export-config"}, d.a.createElement("div", null, d.a.createElement("ul", {className: "export-items-list"}, d.a.createElement("li", null, d.a.createElement(H, {
                    label: "General",
                    tab: "general",
                    onClick: i,
                    active: o
                })), d.a.createElement("li", {className: "separator"}), d.a.createElement("li", null, d.a.createElement(H, {
                    label: "PDF",
                    tab: "pdf",
                    onClick: i,
                    active: o
                }), d.a.createElement(H, {
                    label: "HTML",
                    tab: "html",
                    onClick: i,
                    active: o
                }), d.a.createElement(H, {
                    label: "HTML (without Styles)",
                    tab: "html-plain",
                    onClick: i,
                    active: o
                }), d.a.createElement(H, {
                    label: "Image",
                    tab: "image",
                    onClick: i,
                    active: o
                })), d.a.createElement("li", {className: "separator"}), y.map((function (e) {
                    return d.a.createElement(H, {
                        key: e.key,
                        label: e.name,
                        tab: e.key,
                        onClick: i,
                        active: o,
                        rename: c,
                        onRename: x,
                        onCancelRename: S
                    })
                }))), d.a.createElement("div", {className: "export-items-list-control"}, d.a.createElement(f.h, {
                    icon: "plus",
                    hint: "Add",
                    hintPosition: "top",
                    onClick: function (e) {
                        g(0)
                    }
                }), d.a.createElement(f.h, {
                    icon: "minus",
                    hint: "Delete",
                    hintPosition: "top",
                    disabled: v,
                    onClick: function () {
                        window.Setting.showConfirm("Delete this export option ?").then((function (e) {
                            if (e) {
                                var n = y.findIndex((function (e) {
                                    return e.key === o
                                }));
                                (y = E(y)).splice(n, 1), t.onChange("customExport", y)
                            }
                        }))
                    }
                }), d.a.createElement(f.h, {
                    style: {float: "right"},
                    icon: "pencil",
                    hint: "Rename",
                    hintPosition: "top",
                    onClick: function () {
                        s(!0)
                    },
                    disabled: v || c
                }), d.a.createElement(f.h, {
                    style: {float: "right"},
                    icon: "down",
                    hint: "Move Down",
                    hintPosition: "top",
                    disabled: v || _,
                    onClick: function () {
                        var e = y.findIndex((function (e) {
                            return e.key === o
                        }));
                        if (e < y.length - 1) {
                            var n = y[e];
                            (y = E(y)).splice(e, 1), y.splice(e + 1, 0, n), t.onChange("customExport", y)
                        }
                    }
                }), d.a.createElement(f.h, {
                    style: {float: "right"},
                    icon: "up",
                    hint: "Move Up",
                    hintPosition: "top",
                    disabled: v || N,
                    onClick: function () {
                        var e = y.findIndex((function (e) {
                            return e.key === o
                        }));
                        if (e > 0) {
                            var n = y[e];
                            (y = E(y)).splice(e, 1), y.splice(e - 1, 0, n), t.onChange("customExport", y)
                        }
                    }
                }))), d.a.createElement("div", {style: {flex: 2}}, d.a.createElement("div", {className: "export-detail"}, d.a.createElement(b, {
                    app: t,
                    groupId: o
                }))), null == p ? null : function () {
                    var e = {};
                    return J.forEach((function (t, n) {
                        e[n] = t.name
                    })), d.a.createElement(f.k, {
                        title: "Add From a Template",
                        footer: d.a.createElement("div", null, d.a.createElement("button", {
                            className: "btn btn-primary",
                            onClick: C
                        }, Object(h.a)("Add")), d.a.createElement("button", {
                            className: "btn", onClick: function () {
                                g(null)
                            }
                        }, Object(h.a)("Cancel")))
                    }, d.a.createElement(f.p, {
                        options: e, value: p, onChange: function (e, t) {
                            g(t)
                        }
                    }))
                }())
            };

        function Y() {
            return d.a.createElement(f.m, {
                active: 5 == this.state.activeTab,
                "data-index": "5"
            }, this.panelHeader("Export"), d.a.createElement(X, {app: this}))
        }

        var Z = ["General", "Appearance", "Editor", "Image", "Markdown"], ee = function (e) {
            Object(c.a)(n, e);
            var t = Object(s.a)(n);

            function n() {
                return Object(r.a)(this, n), t.apply(this, arguments)
            }

            return Object(l.a)(n, [{
                key: "getSnapshotBeforeUpdate", value: function (e, t) {
                    return p.a.findDOMNode(this).classList.contains("no-search-hit")
                }
            }, {
                key: "componentDidUpdate", value: function (e, t, n) {
                    if (n) return p.a.findDOMNode(this).classList.add("no-search-hit")
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.label, n = e.active, a = e.onClick,
                        o = Object(i.a)(e, ["label", "active", "onClick"]);
                    return d.a.createElement("span", Object.assign({
                        className: "nav-group-item " + (n ? "active" : ""),
                        onClick: a
                    }, o), Object(h.a)(t, "Image" == t ? "Menu" : void 0))
                }
            }]), n
        }(d.a.PureComponent), te = function (e) {
            var t = e.activeTab, n = e.onSwitchTab, a = e.onSearch;
            return d.a.createElement("ul", {className: "list-group"}, d.a.createElement("li", {className: "list-group-header"}, d.a.createElement(g.b, {onSearch: a})), d.a.createElement("li", {className: "list-group-content"}, Z.map((function (e, a) {
                return d.a.createElement(ee, {
                    label: e, key: a, "data-index": a, active: t == a, onClick: function () {
                        n(a)
                    }
                })
            }))))
        }, ne = function (e) {
            Object(c.a)(n, e);
            var t = Object(s.a)(n);

            function n(e) {
                var a;
                return Object(r.a)(this, n), (a = t.call(this, e)).state = {
                    activeTab: 0,
                    search: "",
                    highlightId: ""
                }, a.onChange = a.onChange.bind(Object(o.a)(a)), a.onSwitchTab = a.onSwitchTab.bind(Object(o.a)(a)), a.onSearch = a.onSearch.bind(Object(o.a)(a)), a.getValue = a.getValue.bind(Object(o.a)(a)), a.resetWordsPerMinute = a.resetWordsPerMinute.bind(Object(o.a)(a)), a.onChangeLaunchAction = a.onChangeLaunchAction.bind(Object(o.a)(a)), a.onResetDialogWarning = a.onResetDialogWarning.bind(Object(o.a)(a)), a.container = d.a.createRef(), window.makeHighlight = a.makeHighlight.bind(Object(o.a)(a)), a
            }

            return Object(l.a)(n, [{
                key: "makeHighlight", value: function (e) {
                    var t = this, n = {highlightId: e};
                    "image-setting-group" == e && this.setState(Object(a.a)({activeTab: 3}, n)), "smart-punctuation-group" == e && this.setState(Object(a.a)({activeTab: 4}, n)), setTimeout((function () {
                        t.setState({highlightId: ""})
                    }), 4e3)
                }
            }, {
                key: "getValue", value: function (e, t, n) {
                    return t = t || e, void 0 !== this.state[t] ? void 0 === this.state[t] ? n : this.state[t] : void 0 === this.props[e] ? n : this.props[t]
                }
            }, {
                key: "componentDidUpdate", value: function (e, t) {
                    if (e === this.props) {
                        if (t.search != this.state.search) {
                            var n = this.state.search, o = this.container.current;
                            if (n.trim()) {
                                var i = o.querySelectorAll(".content"), r = Array.prototype.slice.call(i), l = [],
                                    c = -1;
                                r.forEach((function (e) {
                                    var t = e.getAttribute("data-index") - 0;
                                    if (!isNaN(t)) {
                                        var n = e.querySelectorAll(".search-hit").length - e.querySelectorAll(".search-hit .search-hit").length;
                                        l[t] = n;
                                        var a = o.querySelector(".nav-group-item[data-index='" + t + "']").classList;
                                        n > 0 ? (c = c < 0 ? t : Math.min(c, t), a.remove("no-search-hit")) : a.add("no-search-hit")
                                    }
                                })), o.classList.add("on-performance-search"), l[this.state.activeTab] || this.setState({activeTab: c})
                            } else o.classList.remove("on-performance-search"), this.state.activeTab < 0 && this.setState({activeTab: 0})
                        }
                    } else this.setState(Object(a.a)({activeTab: this.state.activeTab}, this.props))
                }
            }, {
                key: "onSwitchTab", value: function (e) {
                    this.setState({activeTab: e})
                }
            }, {
                key: "onSearch", value: function (e) {
                    this.setState({search: e})
                }
            }, {
                key: "resetWordsPerMinute", value: function (e) {
                    this.onChange("wordsPerMinute", e || 382)
                }
            }, {
                key: "onChange", value: function (e, t) {
                    console.debug(e + " change to ", t);
                    var n = {};
                    n[e] = t, this.setState(n), this.onChangeExtraActions(e, t)
                }
            }, {
                key: "argsFromString", value: function (e) {
                    if (!(e || "").trim()) return null;
                    for (var t, n = /("[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|\/[^\/\\]*(?:\\[\S\s][^\/\\]*)*\/[gimy]*(?=\s|$)|(?:\\\s|\S)+)/g, a = []; t = n.exec(e);) {
                        var o = t[0].replace(/\\(\s)/g, "$1");
                        /"$/.exec(o) ? o = o.replace(/(^|[^\\])"/g, "$1") : /'$/.exec(o) && (o = o.replace(/(^|[^\\])'/g, "$1")), a.push(o)
                    }
                    return a
                }
            }, {
                key: "onChangeExtraActions", value: function (e, t) {
                    if (e && ("image_uploader" !== e || "picgo-intro" != t)) {
                        var n, o = window.Setting;
                        switch (t && t.extraArguments ? o.put(e, Object(a.a)(Object(a.a)({}, t), {}, {extraArguments: this.argsFromString(t.extraArguments)})) : o.put(e, t), e) {
                            case"WebKitDeveloperExtras":
                                o.updateEnableDebug(t);
                                break;
                            case"use_seamless_window":
                                o.updateWindowStyle(t);
                                break;
                            case"useCustomFontSize":
                                o.execCommand("File.option.useCustomFontSize=%@".replace("%@", t ? "true" : "false")), t ? o.execCommand("document.body.parentElement.style.fontSize = '" + (this.getValue("customFontSize") || 14) + "px'") : o.execCommand("document.body.parentElement.style.fontSize = ''");
                                break;
                            case"customFontSize":
                                this.getValue("useCustomFontSize") && (o.execCommand("File.option.customFontSize=%@".replace("%@", t)), o.execCommand("document.body.parentElement.style.fontSize = '" + (t || 14) + "px'"));
                                break;
                            case"always_show_wordcount":
                                o.updateAlwaysShowWordCount(t);
                                break;
                            case"wordsPerMinute":
                                o.put("customWordsPerMinute", !0), o.execCommand("File.option.customWordsPerMinute = true; File.option.wordsPerMinute = $2;".replace("$2", t));
                                break;
                            case"can_collapse_outline_panel":
                                o.execCommand("File.setCanCollapsePinnedOutline(%@);".replace("%@", t));
                                break;
                            case"indentSize":
                                o.execCommand("File.setIndentSize(%@);".replace("%@", t));
                                break;
                            case"prettyIndent":
                                o.execCommand("File.option.prettyIndent = %@;".replace("%@", t));
                                break;
                            case"no_pairing_match":
                                o.execCommand("File.option.noPairingMatch = %@;".replace("%@", !t));
                                break;
                            case"match_pari_markdown":
                                o.execCommand("File.option.autoPairExtendSymbol = %@;".replace("%@", t));
                                break;
                            case"auto_expand_block":
                                o.execCommand("File.option.expandSimpleBlock = %@;".replace("%@", t));
                                break;
                            case"copy_markdown_by_default":
                                o.execCommand("File.option.copyMarkdownByDefault = %@;".replace("%@", t));
                                break;
                            case"no_mid_caret":
                                o.execCommand("File.option.scrollWithCursor = %@;".replace("%@", !t));
                                break;
                            case"image_save_location":
                                "custom" !== t ? o.updateImageSaveLocation(t) : (n = this.getValue("custom_image_save_location")) && n.trim().length && o.execCommand("File.setDefaultImageStorage(%@)".replace("%@", JSON.stringify(n.trim())));
                                break;
                            case"custom_image_save_location":
                                t.trim().length && o.execCommand("File.setDefaultImageStorage(%@)".replace("%@", JSON.stringify(t.trim())));
                                break;
                            case"picgo_app_path":
                                t.trim().length && o.execCommand("File.option.picgoAppPath=%@".replace("%@", JSON.stringify(t.trim())));
                                break;
                            case"image_uploader":
                                t.trim().length && o.execCommand("File.option.imageUploader=%@".replace("%@", JSON.stringify(t.trim())));
                                break;
                            case"custom_image_uploader":
                                t.trim().length && o.execCommand("File.option.customImageUploader=%@".replace("%@", JSON.stringify(t.trim())));
                                break;
                            case"no_image_move_for_local":
                                o.execCommand("File.option.applyImageMoveForLocal = %@".replace("%@", !t));
                                break;
                            case"apply_image_move_for_web":
                                o.execCommand("File.option.applyImageMoveForWeb = %@".replace("%@", t));
                                break;
                            case"use_relative_path_for_img":
                                o.execCommand("File.option.useRelativePathForImg = %@".replace("%@", t));
                                break;
                            case"allow_image_upload":
                                o.execCommand("File.option.allowImageUpload = %@".replace("%@", t));
                                break;
                            case"heading_style":
                                o.execCommand("File.option.headingStyle = %@".replace("%@", t));
                                break;
                            case"ul_style":
                                o.execCommand("File.option.ulStyle = %@".replace("%@", t));
                                break;
                            case"ol_style":
                                o.execCommand("File.option.olStyle = %@".replace("%@", t));
                                break;
                            case"smartQuote":
                                o.setSmartQuote(t);
                                break;
                            case"smartDash":
                                o.setSmartDash(t);
                                break;
                            case"SmartyPantsOnRendering":
                                o.setConvertOnRendering(t);
                                break;
                            case"remapPunctuation":
                                o.setRemapPunctuation(t);
                                break;
                            case"userQuotesArray":
                                o.execCommand("File.option.userQuotesArray = %@".replace("%@", JSON.stringify(t)));
                                break;
                            case"codeIndentSize":
                                o.execCommand("File.option.codeIndentSize = %@".replace("%@", t));
                                break;
                            case"ignoreLineBreak":
                                o.execCommand("File.setIgnoreLineBreak(%@, true)".replace("%@", t));
                                break;
                            case"preLinebreakOnExport":
                                o.execCommand("File.option.preLinebreakOnExport = %@".replace("%@", t));
                                break;
                            case"showStatusBar":
                                o.execCommand(t ? function () {
                                    document.body.classList.add("show-footer"), document.body.classList.remove("hide-footer")
                                } : function () {
                                    document.body.classList.remove("show-footer"), document.body.classList.add("hide-footer")
                                });
                                break;
                            case"debug":
                                o.execCommand(t ? "function() {$(\"[data-group='dev-tool']\").show();}" : "function() {$(\"[data-group='dev-tool']\").hide();}");
                                break;
                            case"preset_spell_check":
                                o.evaluateInHost("File.option.presetSpellCheck = '" + t + "';File.editor.spellChecker.setLangMode('" + t + "');");
                                break;
                            case"line_ending_crlf":
                                o.execCommand("function(){File.option.preferCRLF = " + t + ";}");
                                break;
                            case"enableAutoSave":
                                o.execCommand("function(){File.option.enableAutoSave = " + t + ";}");
                                break;
                            case"save_file_on_switch":
                                window.isNode && o.execCommand("function(){File.option.saveFileOnSwitch = " + t + ";}");
                                break;
                            case"indentFirstLine":
                                o.execCommand("File.setIndentFirstLine(" + t + ", true);");
                                break;
                            case"hideBrAndLineBreak":
                                o.execCommand("File.setHideBrAndLineBreak(" + t + ", true);");
                                break;
                            case"autoEscapeImageURL":
                                o.execCommand("File.option.autoEscapeImageURL=" + t + ";");
                                break;
                            case"mathFormatOnCopy":
                                o.evaluateInHost("File.option.mathFormatOnCopy = '" + t + "';");
                                break;
                            case"image_uploader":
                                o.execCommand("File.option.imageUploader = " + JSON.stringify(t) + ";");
                                break;
                            case"custom_image_uploader":
                                o.execCommand("File.option.customImageUploader = " + JSON.stringify(t) + ";");
                                break;
                            case"send_usage_info":
                                t || o.execCommand("File.option.sendAnonymousUsage = false;");
                                break;
                            case"theme":
                                o.setTheme(t, !1);
                                break;
                            case"darkTheme":
                                o.setTheme(t, !0);
                                break;
                            case"useSeparateDarkTheme":
                                window.isNode && o.invoke("theme.setThemeSource", "system"), o.setTheme(this.getValue("theme"), !1)
                        }
                    }
                }
            }, {
                key: "imageFolderIsInvalid", value: function (e) {
                    if (/^\.\.?[\/\\]/.exec(e = e || "")) return !1;
                    var t = e.indexOf("${filename}"), n = e;
                    return t > -1 && (n = e.substr(0, t)), n ? "/" == n ? Object(h.a)("Cannot use root path.") : !window.Setting.existsDir(n) && Object(h.a)("Folder not exist at %@, please input another path.").replace("%@", n) : Object(h.a)("Please input the folder path for images.")
                }
            }, {
                key: "onChangeLaunchAction", value: function (e, t) {
                    var n = this;
                    if (3 == t) {
                        var a = this.getValue("pinFolder");
                        a ? this.onChange(e, t) : window.Setting.selectFolder(null, (function (o) {
                            o && (a = o, n.onChange("pinFolder", a), n.onChange(e, t))
                        }))
                    } else this.onChange(e, t)
                }
            }, {
                key: "onResetDialogWarning", value: function () {
                    this.onChange("noWarnigForMoveFile", !1), this.onChange("noWarnigForMoveFileToList", !1), this.onChange("noWarnigForDeleteFile", !1), this.onChange("pass_upload_confirm", !1), this.onChange("noWarnigForTypeWriterMode", !1), this.onChange("noWarnigForFocusMode", !1), this.onChange("noWarningForPathWatchError", !1), this.onChange("noWarnigUploadDisabled", !1), window.Setting.execCommand("File.option.noWarnigForMoveFile = false; File.option.noWarnigForMoveFileToList = false; File.option.noWarnigForDeleteFile = false; File.option.pass_upload_confirm = false; File.option.noWarnigForTypeWriterMode = false; File.option.noWarnigForFocusMode = false; File.option.noWarningForPathWatchError = false; File.option.noWarnigUploadDisabled = false;"), window.Setting.showAlert(Object(h.a)("Dialog warnings have been reset."))
                }
            }, {
                key: "onOpenAdvancedSettings", value: function () {
                    var e = window.Setting.userDataPath() + "/conf", t = e + "/conf.user.json";
                    window.require("fs-plus").isFileSync(t) ? window.isWin ? window.Setting.openFolder(e) : window.Setting.openFolder(t) : window.Setting.doResetAdvancedSettings(!0)
                }
            }, {
                key: "onResetAdvancedSettings", value: function () {
                    window.Setting.showConfirm(Object(h.a)("Revert advanced setting file to default one ?", "Front")).then((function (e) {
                        e && window.Setting.doResetAdvancedSettings()
                    }))
                }
            }, {
                key: "noFondPanel", value: function () {
                    return d.a.createElement(f.m, {
                        active: -1 == this.state.activeTab,
                        style: {display: "flex", alignItems: "center", marginTop: "40%"}
                    }, d.a.createElement("div", {
                        style: {
                            textAlign: "center",
                            margin: "auto"
                        }
                    }, Object(h.a)('No results found for "%@"').replace("%@", this.state.search)))
                }
            }, {
                key: "panelHeader", value: function (e) {
                    return window.isNodeHtml && e ? d.a.createElement("h3", {className: "panel-header"}, Object(h.a)(e)) : null
                }
            }, {
                key: "generalPanel", value: function () {
                    return d.a.createElement(f.m, {
                        active: 0 == this.state.activeTab,
                        "data-index": "0"
                    }, this.panelHeader("General"), d.a.createElement(f.j, {title: "On Launch"}, d.a.createElement(f.p, {
                        keyName: "restoreWhenLaunch",
                        value: this.getValue("restoreWhenLaunch"),
                        onChange: this.onChangeLaunchAction,
                        options: {
                            0: "Open new file",
                            1: "Restore last closed folders",
                            2: "Restore last closed files and folders",
                            3: "Open custom folder"
                        },
                        hint: window.isMac ? 'This option may be overridden by "Close windows when quitting an application" in System Preferences' : null
                    }), d.a.createElement(f.e, {
                        hidden: this.getValue("restoreWhenLaunch") + "" != "3",
                        keyName: "pinFolder",
                        value: this.getValue("pinFolder"),
                        onChange: this.onChange
                    })), window.isMac ? d.a.createElement(f.j, {title: "Quit"}, d.a.createElement(f.b, {
                        label: "Quit Typora when last window is closed",
                        keyName: "quitAfterWindowClose",
                        checked: !!this.getValue("quitAfterWindowClose"),
                        onChange: this.onChange
                    })) : null, d.a.createElement(f.j, {title: "Save & Recover"}, window.isNodeHtml ? d.a.createElement(f.b, {
                        label: "Auto Save",
                        keyName: "enableAutoSave",
                        checked: !!this.getValue("enableAutoSave"),
                        onChange: this.onChange
                    }) : null, d.a.createElement(f.b, {
                        label: "Save without asking when\\nswitch files on side panel",
                        keyName: "save_file_on_switch",
                        checked: !!this.getValue("save_file_on_switch") || window.isMac && !this.getValue("NSCloseAlwaysConfirmsChanges") || window.isNodeHtml && !!this.getValue("enableAutoSave"),
                        disabled: !!this.getValue("enableAutoSave") || window.isMac && !this.getValue("NSCloseAlwaysConfirmsChanges"),
                        onChange: this.onChange,
                        hint: window.isMac ? Object(h.a)('Edited files will be saved without asking when switch files in left panel. \nWhen "Ask to keep changes when closing documents" is enabled in System Preference, this is always enabled.') : null
                    }), window.isNodeHtml ? d.a.createElement(f.o, {keyWords: ["Recover Unsaved Drafts"]}, d.a.createElement(f.a, {
                        label: "Recover Unsaved Drafts",
                        onClick: window.Setting.openUnsavedDraft
                    })) : null), d.a.createElement(f.j, {
                        title: "Language",
                        hint: "(applied after restart)"
                    }, d.a.createElement(f.p, {
                        keyName: "userLanguage",
                        value: this.getValue("userLanguage") || "",
                        onChange: this.onChange,
                        options: {
                            "": "System Language",
                            "cs-CZ": "\u010ce\u0161tina",
                            "ca-ES": "Catal\xe0",
                            "da-DK": "Dansk",
                            "de-DE": "Deutsch",
                            Base: "English",
                            "es-ES": "Espa\xf1ol",
                            "el-GR": "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
                            "fr-FR": "Fran\xe7ais",
                            "gl-ES": "Galego",
                            "hr-HR": "Hrvatski",
                            "id-ID": "Bahasa Indonesia",
                            "it-IT": "Italiano",
                            "nl-NL": "Nederlands",
                            "hu-HU": "Magyar",
                            "pl-PL": "Polski",
                            "pt-BR": "Portugu\xeas (Brasil)",
                            "pt-PT": "Portugu\xeas (Portugal)",
                            "ru-RU": "\u0420\u0443\u0301\u0441\u0441\u043a\u0438\u0439 \u042f\u0437\u044b\u0301\u043a",
                            "de-CH": "Schweizerdeutsch",
                            "sk-SK": "Sloven\u010dina",
                            "sv-SE": "Svenska",
                            "vi-VN": "Ti\u1ebfng Vi\u1ec7t",
                            "tr-TR": "T\xfcrk\xe7e",
                            "uk-UA": "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430 \u043c\u043e\u0432\u0430",
                            "fa-IR": "\u0641\u0627\u0631\u0633\u06cc",
                            "ar-SA": "\u0627\u064e\u0644\u0652\u0639\u064e\u0631\u064e\u0628\u0650\u064a\u064e\u0651\u0629\u064f",
                            "zh-Hans": "\u7b80\u4f53\u4e2d\u6587",
                            "zh-Hant": "\u7e41\u9ad4\u4e2d\u6587",
                            "ja-JP": "\u65e5\u672c\u8a9e",
                            "ko-KR": "\ud55c\uad6d\uc5b4"
                        }
                    })), d.a.createElement(f.c, {forWin: !0}, d.a.createElement(f.j, {title: "Update"}, d.a.createElement(f.o, {keyWords: ["Check Updates"]}, d.a.createElement(f.a, {
                        label: "Check Updates",
                        onClick: window.Setting.checkUpdates
                    })), d.a.createElement(f.b, {
                        keyName: "enableAutoUpdate",
                        onChange: this.onChange,
                        checked: !1 !== this.getValue("enableAutoUpdate"),
                        label: "Check updates automatically"
                    }))), d.a.createElement(f.j, {title: "Shortcut Keys"}, d.a.createElement(f.o, {keyWords: ["Key Binding"]}, d.a.createElement(f.a, {
                        label: "Custom Shortcut Keys",
                        onClick: function () {
                            window.Setting.openLink("http://support.typora.io/Shortcut-Keys/#change-shortcut-keys")
                        }
                    }))), d.a.createElement(f.j, {title: "Dialogs"}, d.a.createElement(f.o, {keyWords: ["Reset All Dialog Warnings"]}, d.a.createElement(f.a, {
                        label: "Reset All Dialog Warnings",
                        onClick: this.onResetDialogWarning
                    }))), d.a.createElement(f.j, {title: "Advanced Settings"}, d.a.createElement(f.b, {
                        keyName: window.isMac ? "WebKitDeveloperExtras" : "debug",
                        label: "Enable Debug",
                        checked: !!this.getValue(window.isMac ? "WebKitDeveloperExtras" : "debug"),
                        onChange: this.onChange
                    }), d.a.createElement(f.b, {
                        keyName: "send_usage_info",
                        label: "Send Anonymous Usage Info",
                        checked: !!this.getValue("send_usage_info"),
                        onChange: this.onChange
                    }), d.a.createElement(f.c, {
                        forLinux: !0,
                        forWin: !0
                    }, d.a.createElement(f.o, {keyWords: ["Open Advanced Settings", "Reset Advanced Settings"]}, d.a.createElement(f.a, {
                        label: "Open Advanced Settings",
                        onClick: this.onOpenAdvancedSettings,
                        style: {marginRight: "16px"}
                    }), d.a.createElement(f.a, {
                        label: "Reset Advanced Settings",
                        onClick: this.onResetAdvancedSettings
                    })))))
                }
            }, {
                key: "editorPanel", value: function () {
                    return d.a.createElement(f.m, {
                        active: 2 == this.state.activeTab,
                        "data-index": "2"
                    }, this.panelHeader("Editor"), d.a.createElement(f.i, {
                        onChange: this.onChange,
                        indentSize: this.getValue("indentSize"),
                        prettyIndent: !!this.getValue("prettyIndent")
                    }), d.a.createElement(f.j, {title: "Auto Pair"}, d.a.createElement(f.b, {
                        keyName: "no_pairing_match",
                        onChange: this.onChange,
                        checked: !this.getValue("no_pairing_match"),
                        label: "Auto pair brackets and quotes",
                        reverse: !0
                    }), d.a.createElement(f.b, {
                        keyName: "match_pari_markdown",
                        onChange: this.onChange,
                        checked: !!this.getValue("match_pari_markdown") && !this.getValue("no_pairing_match"),
                        label: "Auto pair common Markdown syntax",
                        disabled: this.getValue("no_pairing_match")
                    })), d.a.createElement(f.j, {title: "Live Rendering"}, d.a.createElement(f.b, {
                        keyName: "auto_expand_block",
                        onChange: this.onChange,
                        checked: !!this.getValue("auto_expand_block"),
                        label: "Display source for simple blocks\\n(including headings, etc.) on focus"
                    })), d.a.createElement(f.j, {
                        title: "Default Copy Behavior",
                        hint: window.isMac ? "( \u2318C )" : "(ctrl+c)"
                    }, d.a.createElement(f.b, {
                        keyName: "copy_markdown_by_default",
                        onChange: this.onChange,
                        checked: !!this.getValue("copy_markdown_by_default"),
                        label: "Copy Markdown source as plain text"
                    })), window.isMac ? null : d.a.createElement(f.j, {
                        title: "Default Line Ending",
                        hint: "Line ending for new file",
                        breakBeforeHint: !0
                    }, d.a.createElement(f.n, {
                        keyName: "line_ending_crlf",
                        type: "boolean",
                        options: {false: "LF (Unix Style)", true: "CRLF (Windows Style)"},
                        onChange: this.onChange,
                        value: !!this.getValue("line_ending_crlf")
                    })), d.a.createElement(f.c, {
                        forWin: !0,
                        forLinux: !0
                    }, d.a.createElement(f.j, {
                        title: "Spell Check",
                        breakBeforeHint: !0,
                        hint: Object(h.a)("(Default spell check option)", "Front")
                    }, d.a.createElement(f.p, {
                        keyName: "preset_spell_check",
                        options: {
                            auto: Object(h.a)("Auto Detect Language", "Front"),
                            disabled: Object(h.a)("Disable Spell Check", "Front"),
                            _seperator: "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
                            "en-US": "English (US)",
                            "en-GB": "English (UK)",
                            cs: "\u010ce\u0161tina",
                            de: "Deutsch",
                            es: "Espa\xf1ol",
                            el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
                            fr: "Fran\xe7ais",
                            gl: "Galego",
                            hr: "Hrvatski",
                            it: "Italiano",
                            nl: "Nederlands",
                            hu: "Magyar",
                            pl: "Polski",
                            "pt-BR": "Portugu\xeas (Brasil)",
                            pt: "Portugu\xeas (Portugal)",
                            ru: "\u0420\u0443\u0301\u0441\u0441\u043a\u0438\u0439",
                            sv: "Svenska",
                            fa: "\u0641\u0627\u0631\u0633\u06cc",
                            ar: "\u0627\u064e\u0644\u0652\u0639\u064e\u0631\u064e\u0628\u0650\u064a\u064e\u0651\u0629\u064f",
                            ko: "\ud55c\uad6d\uc5b4",
                            zh: "\u4e2d\u6587",
                            ja: "\u65e5\u672c\u8a9e"
                        },
                        onChange: this.onChange,
                        value: this.getValue("preset_spell_check")
                    }))), d.a.createElement(f.j, {title: "Typewriter Mode"}, d.a.createElement(f.b, {
                        keyName: "no_mid_caret",
                        onChange: this.onChange,
                        checked: !this.getValue("no_mid_caret"),
                        label: "Always keep caret in middle of screen\\nwhen typewriter mode is enabled",
                        reverse: !0
                    }), d.a.createElement(f.o, {
                        keyWords: ["Turn off Typewriter / Focus Mode"],
                        style: {lineHeight: "1", paddingTop: "6px", paddingBottom: "4px"}
                    }, d.a.createElement(f.a, {
                        label: "Turn off Typewriter / Focus Mode",
                        onClick: window.Setting.exitFocusAndTypewriterMode
                    }))))
                }
            }, {
                key: "markdownPanel", value: function () {
                    var e = this,
                        t = !this.getValue("SmartyPantsOnRendering") && (this.getValue("smartDash") || this.getValue("smartQuote"));
                    return d.a.createElement(f.m, {
                        active: 4 == this.state.activeTab,
                        "data-index": "4"
                    }, this.panelHeader("Markdown"), d.a.createElement("div", {
                        className: "panel-content-hint row",
                        style: {marginLeft: 0}
                    }, Object(h.a)("(Following preferences will be applied after restart.)")), d.a.createElement(f.j, {
                        title: "Syntax Preference",
                        breakBeforeHint: !0,
                        hint: "only apply to quotes and lists created from menu bar or hybrid view"
                    }, d.a.createElement(f.t, {
                        rows: [[d.a.createElement(f.b, {
                            checked: !!this.getValue("strict_mode"),
                            keyName: "strict_mode",
                            onChange: this.onChange,
                            label: "Strict Mode"
                        }), d.a.createElement(f.g, {
                            hintLink: "https://support.typora.io/Strict-Mode/",
                            inlineHint: !0
                        }), "Strict Mode"], ["Heading Style", d.a.createElement(f.p, {
                            onChange: this.onChange,
                            keyName: "heading_style",
                            value: this.getValue("heading_style") || 0,
                            type: "number",
                            options: {
                                0: "atx (#)",
                                2: "atx with suffix (# \u22ef #)",
                                1: "setext (===)",
                                3: "variable-width setext (=====)"
                            }
                        })], ["Unordered List", d.a.createElement(f.p, {
                            onChange: this.onChange,
                            keyName: "ul_style",
                            value: this.getValue("ul_style") || 0,
                            type: "number",
                            options: {0: "-", 1: "+", 2: "*"}
                        })], ["Ordered List", d.a.createElement(f.p, {
                            onChange: this.onChange,
                            keyName: "ol_style",
                            value: this.getValue("ol_style") || 0,
                            type: "number",
                            options: {0: "1. \u22ef 2. \u22ef 3. \u22ef", 1: "1. \u22ef 1. \u22ef 1. \u22ef"}
                        })]]
                    })), d.a.createElement(f.j, {title: "Syntax Support"}, d.a.createElement(f.b, {
                        keyName: "enable_inline_math",
                        label: "Inline Math  ( e.g: $\\LaTeX$ )",
                        checked: !!this.getValue("enable_inline_math"),
                        onChange: this.onChange
                    }), d.a.createElement(f.b, {
                        keyName: "enable_subscript",
                        label: "Subscript    ( e.g: H~2~O )",
                        checked: !!this.getValue("enable_subscript"),
                        onChange: this.onChange
                    }), d.a.createElement(f.b, {
                        keyName: "enable_superscript",
                        label: "Superscript ( e.g: X^2^ )",
                        checked: !!this.getValue("enable_superscript"),
                        onChange: this.onChange
                    }), d.a.createElement(f.b, {
                        keyName: "enable_highlight",
                        label: "Highlight     (e.g: ==key==)",
                        checked: !!this.getValue("enable_highlight"),
                        onChange: this.onChange
                    }), d.a.createElement(f.b, {
                        keyName: "enable_diagram",
                        label: "Diagrams",
                        checked: !!this.getValue("enable_diagram"),
                        onChange: this.onChange,
                        hint: "(Sequence, Flowchart and Mermaid)",
                        inlineHint: !0
                    })), d.a.createElement(f.j, {
                        highlight: "smart-punctuation-group" === this.state.highlightId,
                        title: "Smart Punctuation",
                        hintLink: "https://support.typora.io/SmartyPants/",
                        dictGroup: "Menu",
                        inlineHint: !0,
                        breakBeforeHint: !0
                    }, d.a.createElement(f.p, {
                        keyName: "SmartyPantsOnRendering",
                        optionsDict: "Menu",
                        options: {false: "Convert on Input", true: "Convert on Rendering"},
                        value: !!this.getValue("SmartyPantsOnRendering"),
                        onChange: this.onChange,
                        type: "boolean",
                        hint: "<div><strong>Convert on Input</strong>: Input ASCII dashes or quotes, converted and saved as curly quotes or unicode dashes.<br/><strong>Convert on Rendering</strong>: Input and saved as ASCII dashes or quotes, render as curly quotes or unicode dashes.</div>"
                    }), d.a.createElement(f.b, {
                        keyName: "smartDash",
                        label: "Smart Dashes",
                        checked: !!this.getValue("smartDash"),
                        onChange: this.onChange,
                        dictGroup: "Menu"
                    }), !window.isMac && this.getValue("smartDash") ? d.a.createElement(f.p, {
                        keyName: "twoHyphensToEm",
                        options: {
                            false: "Convert -- to \u2013 (en dash), and --- to \u2014 (em dash)",
                            true: "Convert -- and --- to \u2014 (em dash)"
                        },
                        value: !!this.getValue("twoHyphensToEm"),
                        type: "boolean",
                        onChange: this.onChange
                    }) : null, window.isMac ? d.a.createElement(f.b, {
                        keyName: "smartDash",
                        label: "Smart Quotes",
                        checked: !!this.getValue("smartQuote"),
                        onChange: this.onChange,
                        dictGroup: "Menu",
                        hint: "You could set quote patterns in System Preferences \u2192 Keyboard \u2192 Text. If it is changed, Typora will need a restart to apply it."
                    }) : d.a.createElement(f.o, {
                        keyWords: ["Smart Quotes"],
                        style: {height: "29px"}
                    }, d.a.createElement(f.b, {
                        keyName: "smartQuote",
                        label: "Smart Quotes",
                        checked: !!this.getValue("smartQuote"),
                        onChange: this.onChange,
                        dictGroup: "Menu",
                        isCell: !0,
                        style: {display: "inline-block", margin: "2px 0 0 0"}
                    }), d.a.createElement(f.p, {
                        disabled: !this.getValue("smartQuote"),
                        options: {
                            "\u201c\u201d": "\u201cabc\u201d",
                            "\u201e\u201c": "\u201eabc\u201c",
                            "\u201e\u201d": "\u201eabc\u201d",
                            "\u201d\u201d": "\u201dabc\u201d",
                            "\xab\xbb": "\xababc\xbb",
                            "\xbb\xab": "\xbbabc\xab",
                            '""': '"abc"'
                        },
                        isCell: !0,
                        value: function () {
                            var t = e.getValue("userQuotesArray");
                            return t ? t[0] + t[1] : "\u201c\u201d"
                        }(),
                        keyName: "userQuotesArray",
                        onChange: function (t, n) {
                            var a = e.getValue("userQuotesArray");
                            a || (a = ["\u201c", "\u201d", "\u2018", "\u2019"]), a[0] = n.substr(0, n.length / 2), a[1] = n.substr(n.length / 2), e.onChange("userQuotesArray", a)
                        }
                    }), d.a.createElement(f.p, {
                        disabled: !this.getValue("smartQuote"),
                        options: {
                            "\u2018\u2019": "\u2018abc\u2019",
                            "\u201a\u2018": "\u201aabc\u2018",
                            "\u201a\u2019": "\u201aabc\u2019",
                            "\u2019\u2019": "\u2019abc\u2019",
                            "\u2039\u203a": "\u2039abc\u203a",
                            "\u203a\u2039": "\u203aabc\u2039",
                            "''": "'abc'"
                        },
                        isCell: !0,
                        value: function () {
                            var t = e.getValue("userQuotesArray");
                            return t ? t[2] + t[3] : "\u2018\u2019"
                        }(),
                        keyName: "userQuotesArray",
                        onChange: function (t, n) {
                            var a = e.getValue("userQuotesArray");
                            a || (a = ["\u201c", "\u201d", "\u2018", "\u2019"]), a[2] = n[0], a[3] = n[1], e.onChange("userQuotesArray", a)
                        }
                    })), d.a.createElement(f.b, {
                        label: "Remap Unicode Punctuation on Parse",
                        dictGroup: "Menu",
                        hint: "<div>Recognize unicode punctuations as ASCII ones when parse markdown, e.g:<br/> <pre> \u300b blockquote \u2192 > blockquote <br/> [link](src \u2019title\u2019) \u2192 [link](src 'title')</pre>It will be turned on automatically if smart quotes/dashes will be converted on input.<div>",
                        keyName: "remapPunctuation",
                        checked: !!this.getValue("remapPunctuation") || t,
                        onChange: this.onChange,
                        disabled: t
                    })), d.a.createElement(f.j, {title: "Code Fences"}, d.a.createElement(f.b, {
                        label: "Display line numbers for code fences",
                        keyName: "show_line_numbers_for_fence",
                        checked: !!this.getValue("show_line_numbers_for_fence"),
                        onChange: this.onChange
                    }), d.a.createElement(f.b, {
                        label: "Auto wrap long lines",
                        keyName: "no_line_wrapping",
                        checked: !this.getValue("no_line_wrapping"),
                        onChange: this.onChange,
                        reverse: !0
                    }), d.a.createElement(f.t, {
                        rows: [["Indent Size for Code", d.a.createElement(f.p, {
                            keyName: "codeIndentSize",
                            onChange: this.onChange,
                            value: this.getValue("codeIndentSize") || 4,
                            options: {2: "2", 3: "3", 4: "4", 5: "5"}
                        })]]
                    })), d.a.createElement(f.j, {
                        title: "Math",
                        dictGroup: "Menu",
                        hintLink: "https://support.typora.io/Math/"
                    }, d.a.createElement(f.b, {
                        keyName: "auto_numbering_for_math",
                        checked: !!this.getValue("auto_numbering_for_math"),
                        label: "Auto Numbering Math Equations",
                        onChange: this.onChange
                    }), d.a.createElement(f.t, {
                        rows: [["When copy / export as HTML (without style)", d.a.createElement(f.p, {
                            keyName: "mathFormatOnCopy",
                            value: this.getValue("mathFormatOnCopy") || "svg",
                            options: {svg: "Use Rendered SVG", latex: "Use LaTeX Source"},
                            onChange: this.onChange
                        }), "<div>Take effects when export as HTML (without styles) or copy as HTML code, or copy without theme style.<br/>When <strong>Use LaTeX Source</strong> is selected, Typora will put the raw LaTeX source (e.g: $X^2$),<br/>When <strong>Use Rendered SVG</strong> is selected, the rendered SVG will be used, if you paste to other app, SVG may get ignored.</div>"]]
                    })), d.a.createElement(f.j, {
                        title: "Whitespace / Line Break",
                        hintLink: "https://support.typora.io/Line-Break/",
                        breakBeforeHint: !0
                    }, d.a.createElement(f.b, {
                        label: "Indent first line of paragraphs",
                        dictGroup: "Menu",
                        keyName: "indentFirstLine",
                        onChange: this.onChange,
                        checked: !!this.getValue("indentFirstLine"),
                        hint: 'These options can also be changed under "Edit\u2192Whitespace and Line Breaks" menu'
                    }), d.a.createElement(f.t, {
                        className: "whitespace-table-input",
                        rows: [["When Writing", d.a.createElement(d.a.Fragment, null, d.a.createElement(f.b, {
                            isCell: !0,
                            label: "Visible <br/>",
                            dictGroup: "Menu",
                            keyName: "hideBrAndLineBreak",
                            onChange: this.onChange,
                            checked: !this.getValue("hideBrAndLineBreak"),
                            reverse: !0
                        }), d.a.createElement(f.p, {
                            keyName: "ignoreLineBreak",
                            value: !!this.getValue("ignoreLineBreak"),
                            type: "boolean",
                            options: {
                                false: "Preserve sequential whitespace and single line break",
                                true: "Ignore sequential whitespace and single line break"
                            },
                            onChange: this.onChange
                        }))], ["Export / Print", d.a.createElement(f.p, {
                            keyName: "preLinebreakOnExport",
                            value: !!this.getValue("preLinebreakOnExport"),
                            type: "boolean",
                            options: {
                                true: "Preserve sequential whitespace and single line break",
                                false: "Ignore sequential whitespace and single line break"
                            },
                            onChange: this.onChange
                        })]]
                    })))
                }
            }, {
                key: "render", value: function () {
                    return d.a.createElement(g.a.Provider, {value: this.state.search}, d.a.createElement("div", {className: "window"}, window.isNodeHtml ? d.a.createElement(f.u, null) : null, d.a.createElement("div", {className: "window-content"}, d.a.createElement("div", {
                        className: "pane-group",
                        ref: this.container
                    }, d.a.createElement("div", {className: "pane-sm sidebar"}, d.a.createElement(te, {
                        activeTab: this.state.activeTab,
                        onSwitchTab: this.onSwitchTab,
                        onSearch: this.onSearch
                    })), d.a.createElement("div", {className: "pane"}, this.noFondPanel(), 0 === this.state.activeTab ? this.generalPanel() : null, 1 === this.state.activeTab ? w.call(this) : null, 2 === this.state.activeTab ? this.editorPanel() : null, 3 === this.state.activeTab ? b.a.call(this) : null, 4 === this.state.activeTab ? this.markdownPanel() : null, 5 === this.state.activeTab ? Y.call(this) : null)))))
                }
            }]), n
        }(u.Component);
        t.a = ne
    }, 31: function (e, t, n) {
        "use strict";
        n.r(t), function (e) {
            var t = n(3), a = n(0), o = n.n(a), i = n(8), r = n.n(i), l = n(29), c = n(20), s = n(12);
            n(22);
            window.isNode = window.require;
            var u, d, m, p = null, h = !1, g = function () {
                return window.isNode ? window._options.userLocale : window._options.locale
            };
            window.loadDict = function (e) {
                return window.location.href.match(/localhost/) ? new Promise((function (e) {
                    setTimeout((function () {
                        e({Front: {}, Menu: {}, Panel: {"Word Count": "\u5b57\u6570\u7edf\u8ba1"}})
                    }), 100)
                })) : Promise.all([fetch("../locales/" + e + ".lproj/Front.json"), fetch("../locales/" + e + ".lproj/Menu.json"), fetch("../locales/" + e + ".lproj/Panel.json")]).then((function (e) {
                    return Promise.all(e.map((function (e) {
                        return e.json()
                    })))
                })).then((function (e) {
                    return Promise.resolve({Front: e[0], Menu: e[1], Panel: e[2]})
                }))
            };
            var f = {
                Front: {}, Menu: {}, Panel: {}, get: function (e, t) {
                    return f[t || "Panel"][e] || e
                }
            };
            window.Dict = f;
            var b = function () {
                console.log("render..."), r.a.render(o.a.createElement(l.a, window._options), document.getElementById("root"))
            };
            if (window.reloadData = function () {
                console.log("window.reloadData"), p.invoke("setting.getExtraOption").then((function (e) {
                    if (console.log("setting.getExtraOption done"), window._options = JSON.parse(e), m = window._options.tempPath, u = window._options.userDataPath, d = window._options.documentsPath, !h) {
                        h = !0;
                        var n = g();
                        "Base" !== n && n ? window.loadDict(n).then((function (e) {
                            f = Object(t.a)(Object(t.a)({}, f), e), b()
                        })) : h && b()
                    }
                }))
            }, window.isNode) {
                !function () {
                    var e = window.require("module"), t = window.require("path");
                    e.globalPaths.push(t.join(window.__dirname, "../node_modules.asar"));
                    var n = e.prototype.require;
                    e.prototype.require = function (e) {
                        return /(\.node$)|(\/build\/Release)/.exec(e) && "." == e[0] && (e = t.resolve(t.dirname(this.id), e).replace(/\bnode_modules\.asar\b/, "node_modules")), n.call(this, e)
                    }
                }();
                var w = window.require("electron");
                p = w.ipcRenderer, window.reloadData(), p.on("executeJavaScript", (function (e, t) {
                    window.eval(t)
                }))
            }
            window.webkit && (d = window._options._documentPath), window._options = Object(t.a)({}, window._options), window.fetch || (fetch = c.a);
            var v = function (e, t) {
                window.webkit && window.webkit.messageHandlers._setting.postMessage({name: e, data: t})
            }, y = 0, E = {};
            if (window.onMessageCallback = function (e) {
                var t = E[e.id];
                t && t.apply(null, e.data), delete E[e.id]
            }, window.Setting = {
                locale: function () {
                    return g()
                }, userDataPath: function () {
                    return u
                }, documentPath: function () {
                    return d
                }, close: function () {
                    p.sendToHost("close")
                }, put: function (e, t) {
                    window.webkit ? v("put", {key: e, value: t}) : window.isNode && p.invoke("setting.put", e, t)
                }, invoke: function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                    return p.invoke.apply(null, [e].concat(n))
                }, execCommand: function (e) {
                    window.webkit ? v("execCommand", e) : window.isNode && p.send("execForAll", e.toString())
                }, evaluateInHost: function (e) {
                    window.isNode && p.sendToHost("evaluateInHost", e)
                }, syncToPreference: function (e) {
                    window.isNode && p.send("syncToPreference", e)
                }, checkUpdates: function () {
                    window.isWin && p.invoke("updater.checkForUpdates", !0)
                }, selectFolder: function (e, t) {
                    window.isNode ? p.invoke("dialog.showOpenDialog", {
                        defaultPath: e || void 0,
                        properties: ["openDirectory", "promptToCreate", "dontAddToRecent"]
                    }).then((function (e) {
                        var n = e.filePaths;
                        t((n || [null])[0] || null)
                    })) : window.webkit ? (y++, v("selectFolderOrFile", {
                        dir: !0,
                        defaultPath: e,
                        id: y
                    }), E[y] = t) : t(prompt("selectFolder", e))
                }, selectFile: function (e, t, n) {
                    window.isNode ? p.invoke("dialog.showOpenDialog", {
                        defaultPath: e || void 0,
                        filters: t,
                        properties: ["openFile", "dontAddToRecent"]
                    }).then((function (e) {
                        var t = e.filePaths;
                        n((t || [null])[0] || null)
                    })) : window.webkit ? (y++, v("selectFolderOrFile", {
                        dir: !1,
                        defaultPath: e,
                        filters: t,
                        id: y
                    }), E[y] = n) : n(prompt("selectFile", e))
                }, openFolder: function (e) {
                    window.webkit ? v("openFolder", e) : window.isNode && p.invoke("shell.openItem", e)
                }, openLink: function (e) {
                    window.webkit ? v("openLink", e) : window.isNode ? p.invoke("shell.openExternal", e) : window.open(e)
                }, showAlert: function (e) {
                    window.isNode ? p.invoke("dialog.showMessageBox", {message: e, buttons: ["OK"]}) : alert(e)
                }, showConfirm: function (e) {
                    if (!window.isNode) {
                        var t = window.confirm(e);
                        return Promise.resolve(t)
                    }
                    p.invoke("dialog.showMessageBox", {
                        title: window.Dict.get("Confirm"),
                        message: e,
                        buttons: [window.Dict.get("OK"), window.Dict.get("Cancel")],
                        cancelId: 1
                    }).then((function (e) {
                        return 0 === e.response
                    }))
                }, exitFocusAndTypewriterMode: function () {
                    window.webkit ? v("exitFocusAndTypewriterMode") : window.isNode && (window.Setting.put("isFocusMode", !1), window.Setting.put("isTypeWriterMode", !1), window.Setting.execCommand("function(){File.isFocusMode = false; File.isTypeWriterMode = false; File.editor.updateFocusMode(false); File.editor.setTypeWriterMode(false, true);$('#md-notification').fadeOut();}"), window.Setting.evaluateInHost("ClientCommand.refreshViewMenu()")), window.Setting.showAlert(window.Dict.get("Typewriter / Focus Mode have been turned off."))
                }, updateEnableDebug: function (e) {
                    window.webkit && v("updateDebugMode", e)
                }, updateWindowStyle: function (e) {
                    window.webkit && v("updateWindowStyle", e)
                }, updateAlwaysShowWordCount: function (e) {
                    window.webkit && v("updateAlwaysShowWordCount", e)
                }, updateImageSaveLocation: function (e) {
                    window.webkit ? v("updateImageSaveLocation", e) : window.isNode && window.Setting.execCommand("function(){File.setDefaultImageStorage(" + JSON.stringify(e) + ");}")
                }, setSmartQuote: function (e) {
                    window.webkit ? v("setSmartQuote", e) : window.isNode && window.Setting.evaluateInHost("File.megaMenu.setSmartQuote(" + e + ")")
                }, setSmartDash: function (e) {
                    window.webkit ? v("setSmartDash", e) : window.Setting.evaluateInHost("File.megaMenu.setSmartDash(" + e + ")")
                }, updateMenuForNode: function (e) {
                    window.require("electron").ipcRenderer.send("menu.updateMenu", JSON.stringify(e))
                }, setConvertOnRendering: function (e) {
                    window.webkit ? v("setConvertOnRendering", e) : window.isNode && window.Setting.evaluateInHost("File.megaMenu.setSmartyPantsTiming(" + e + ")")
                }, setRemapPunctuation: function (e) {
                    window.webkit ? v("setRemapPunctuation", e) : window.isNode && window.Setting.evaluateInHost("File.megaMenu.setRemapPunctuation(" + e + ")")
                }, setTheme: function () {
                    window.isNode && window.Setting.invoke("theme.apply"), window.isMac && v("applyTheme")
                }, openUnsavedDraft: function () {
                    p.sendToHost("openUnsavedDraft")
                }, doResetAdvancedSettings: function (e) {
                    window.Setting.invoke("setting.resetAdvancedSettings", e)
                }, existsDir: function (e) {
                    if (window.isNode) {
                        var t = window.require("fs-extra");
                        try {
                            return t.lstatSync(e).isDirectory()
                        } catch (n) {
                        }
                        return !1
                    }
                    return !0
                }, testImageUploader: function (t, n, a) {
                    var o = function (e, t, a) {
                        if (!r) if (t) {
                            var o = function (e) {
                                for (var t = e.split(/\r?\n/), n = [], a = t.length - 1; a >= 0; a--) {
                                    var o = t[a].trim();
                                    if (o) if (/^(https?|ftp|file):\//.exec(o)) n.unshift(o); else if (n.length) break
                                }
                                return n
                            }(t);
                            2 != o.length ? n({
                                command: e,
                                rawOutput: t || a,
                                rawError: !1,
                                finalError: !0
                            }) : n({command: e, rawOutput: t, rawError: !1, finalError: !1, images: o})
                        } else n({command: e, rawOutput: a || "(none)", rawError: !0, finalError: !0})
                    }, i = function (e, t, a) {
                        if (!r) if (a) n({command: e, rawOutput: a, rawError: !0, finalError: !0}); else {
                            var o = [];
                            try {
                                o = JSON.parse(t)
                            } catch (i) {
                            }
                            o.success && 2 == o.result.length ? n({
                                command: e,
                                rawOutput: t,
                                rawError: !1,
                                finalError: !1,
                                images: o
                            }) : n({command: e, rawOutput: t, rawError: !1, finalError: !0})
                        }
                    };
                    var r = !1;
                    if (window.isNode) {
                        var l = e.require("path").normalize(e.__dirname + "/../asserts/icon"),
                            c = e.require("fs-extra").copy, s = {overwrite: !1, errorOnExist: !1};
                        Promise.all([c(l + "/icon_512x512@2x.png", m.replace(/\/$/, "") + "/typora-icon2.png", s), c(l + "/icon_256x256@2x.png", m.replace(/\/$/, "") + "/typora-icon.png", s)]).then((function () {
                            var e, l;
                            r || (e = "picgo-app" == t ? "using http://127.0.0.1:36677/upload" : (t || "").replace("${filepath}", "").replace("${filename}", "") + " " + JSON.stringify(m.replace(/\/$/, "") + "/typora-icon2.png") + " " + JSON.stringify(m.replace(/\/$/, "") + "/typora-icon.png"), n({
                                command: e,
                                finalError: null
                            }), "picgo-app" == t ? (l = [m.replace(/\/$/, "") + "/typora-icon2.png", m.replace(/\/$/, "") + "/typora-icon.png"], a ? function e(t) {
                                return window.fetch("http://127.0.0.1:36677/upload", {
                                    method: "POST",
                                    body: JSON.stringify({list: l})
                                }).then((function (e) {
                                    return 200 === e.status ? e.text() : Promise.reject(e.text())
                                }), (function (n) {
                                    return t ? Promise.reject(n.message) : new Promise((function (t, n) {
                                        var o = setTimeout((function () {
                                            o = null, e(!0).then(t, n)
                                        }), 5e3);
                                        window.require("child_process").exec(JSON.stringify(a), (function (e, t, a) {
                                            o && e && (n("failed to launch PicGo app: " + e.message), clearTimeout(o))
                                        }))
                                    }))
                                }))
                            }(!1) : Promise.reject("Path for PicGo (app) is invalid.")).then((function (t) {
                                console.log(t), i(e, t, null)
                            })).catch((function (t) {
                                console.error(t), i(e, null, t)
                            })) : window.require("child_process").exec(e, {windowsHide: !0}, (function (t, n, a) {
                                o(e, n, t ? a || t.message : null)
                            })))
                        })).catch((function () {
                        }))
                    } else y++, v("testImageUploader", [t, y]), n({finalError: null}), E[y] = function (e, a, r) {
                        "ipic" == t ? n({
                            rawOutput: r || a,
                            rawError: !!r,
                            finalError: !!r
                        }) : "picgo-app" == t ? i(e, a, r) : o(e, a, r)
                    };
                    return function () {
                        r = !0
                    }
                }
            }, window.isUnibody && document.body.classList.add("unibody-window"), window.isNode && p.on("syncToPreference", (function (e, t) {
                window.eval(t)
            })), Object(s.a)("esc", (function (e, t) {
                "INPUT" === e.target.nodeName || document.querySelector(".modal-backdrop") || (e.preventDefault(), window.Setting.close())
            })), window.isMac) {
                var k = !1;
                window.loadDict(g()).then((function (e) {
                    f = Object(t.a)(Object(t.a)({}, f), e), k = !0, b()
                })), setTimeout((function () {
                    !k && b()
                }), 1e3)
            } else window.isNode || b()
        }.call(this, n(24))
    }, 36: function (e, t, n) {
    }, 37: function (e, t, n) {
        var a = function (e) {
            "use strict";
            var t = Object.prototype, n = t.hasOwnProperty, a = "function" === typeof Symbol ? Symbol : {},
                o = a.iterator || "@@iterator", i = a.asyncIterator || "@@asyncIterator",
                r = a.toStringTag || "@@toStringTag";

            function l(e, t, n) {
                return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                l({}, "")
            } catch (O) {
                l = function (e, t, n) {
                    return e[t] = n
                }
            }

            function c(e, t, n, a) {
                var o = t && t.prototype instanceof d ? t : d, i = Object.create(o.prototype), r = new C(a || []);
                return i._invoke = function (e, t, n) {
                    var a = "suspendedStart";
                    return function (o, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === o) throw i;
                            return S()
                        }
                        for (n.method = o, n.arg = i; ;) {
                            var r = n.delegate;
                            if (r) {
                                var l = y(r, n);
                                if (l) {
                                    if (l === u) continue;
                                    return l
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var c = s(e, t, n);
                            if ("normal" === c.type) {
                                if (a = n.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                return {value: c.arg, done: n.done}
                            }
                            "throw" === c.type && (a = "completed", n.method = "throw", n.arg = c.arg)
                        }
                    }
                }(e, n, r), i
            }

            function s(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (O) {
                    return {type: "throw", arg: O}
                }
            }

            e.wrap = c;
            var u = {};

            function d() {
            }

            function m() {
            }

            function p() {
            }

            var h = {};
            h[o] = function () {
                return this
            };
            var g = Object.getPrototypeOf, f = g && g(g(x([])));
            f && f !== t && n.call(f, o) && (h = f);
            var b = p.prototype = d.prototype = Object.create(h);

            function w(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    l(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function v(e, t) {
                var a;
                this._invoke = function (o, i) {
                    function r() {
                        return new t((function (a, r) {
                            !function a(o, i, r, l) {
                                var c = s(e[o], e, i);
                                if ("throw" !== c.type) {
                                    var u = c.arg, d = u.value;
                                    return d && "object" === typeof d && n.call(d, "__await") ? t.resolve(d.__await).then((function (e) {
                                        a("next", e, r, l)
                                    }), (function (e) {
                                        a("throw", e, r, l)
                                    })) : t.resolve(d).then((function (e) {
                                        u.value = e, r(u)
                                    }), (function (e) {
                                        return a("throw", e, r, l)
                                    }))
                                }
                                l(c.arg)
                            }(o, i, a, r)
                        }))
                    }

                    return a = a ? a.then(r, r) : r()
                }
            }

            function y(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = void 0, y(e, t), "throw" === t.method)) return u;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var a = s(n, e.iterator, t.arg);
                if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, u;
                var o = a.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
            }

            function E(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function k(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function C(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(E, this), this.reset(!0)
            }

            function x(e) {
                if (e) {
                    var t = e[o];
                    if (t) return t.call(e);
                    if ("function" === typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var a = -1, i = function t() {
                            for (; ++a < e.length;) if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return i.next = i
                    }
                }
                return {next: S}
            }

            function S() {
                return {value: void 0, done: !0}
            }

            return m.prototype = b.constructor = p, p.constructor = m, m.displayName = l(p, r, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                var t = "function" === typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, l(e, r, "GeneratorFunction")), e.prototype = Object.create(b), e
            }, e.awrap = function (e) {
                return {__await: e}
            }, w(v.prototype), v.prototype[i] = function () {
                return this
            }, e.AsyncIterator = v, e.async = function (t, n, a, o, i) {
                void 0 === i && (i = Promise);
                var r = new v(c(t, n, a, o), i);
                return e.isGeneratorFunction(n) ? r : r.next().then((function (e) {
                    return e.done ? e.value : r.next()
                }))
            }, w(b), l(b, r, "Generator"), b[o] = function () {
                return this
            }, b.toString = function () {
                return "[object Generator]"
            }, e.keys = function (e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(), function n() {
                    for (; t.length;) {
                        var a = t.pop();
                        if (a in e) return n.value = a, n.done = !1, n
                    }
                    return n.done = !0, n
                }
            }, e.values = x, C.prototype = {
                constructor: C, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function a(n, a) {
                        return r.type = "throw", r.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                    }

                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], r = i.completion;
                        if ("root" === i.tryLoc) return a("end");
                        if (i.tryLoc <= this.prev) {
                            var l = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (l && c) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                            } else if (l) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var o = this.tryEntries[a];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var r = i ? i.completion : {};
                    return r.type = e, r.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(r)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), k(n), u
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var a = n.completion;
                            if ("throw" === a.type) {
                                var o = a.arg;
                                k(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, n) {
                    return this.delegate = {
                        iterator: x(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, e
        }(e.exports);
        try {
            regeneratorRuntime = a
        } catch (o) {
            Function("r", "regeneratorRuntime = r")(a)
        }
    }, 4: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return m
        })), n.d(t, "d", (function () {
            return p
        })), n.d(t, "a", (function () {
            return s
        })), n.d(t, "b", (function () {
            return h
        }));
        var a = n(6), o = n(19), i = n(0), r = n.n(i), l = n(2), c = n(12), s = r.a.createContext(""), u = null,
            d = function (e, t) {
                return u && (clearTimeout(u), u = null), u = setTimeout((function () {
                    u = null, t(e)
                }), 100), e
            }, m = function (e, t, n) {
                if (!e || !t) return !1;
                if (t.toLowerCase().indexOf(e.toLowerCase()) > -1) return !0;
                if ("Base" !== (window.Setting.locale() || "Base") && Object(l.a)(t, n).toLowerCase().indexOf(e.toLowerCase()) > -1) return !0;
                return !1
            }, p = function (e, t, n) {
                if (!e) return !1;
                var a, i = Object(o.a)(t);
                try {
                    for (i.s(); !(a = i.n()).done;) {
                        var r = a.value;
                        if (m(e, r, n)) return !0
                    }
                } catch (l) {
                    i.e(l)
                } finally {
                    i.f()
                }
                return !1
            }, h = function (e) {
                var t = e.onSearch, n = r.a.useRef(null),
                    o = r.a.useState((Object(c.a)(window.isMac ? "command+f" : "ctrl+f", (function (e, t) {
                        e.preventDefault(), window.searchOnPreferencePanel()
                    })), "")), i = Object(a.a)(o, 2), s = i[0], u = i[1];
                return window.searchOnPreferencePanel = function () {
                    n.current && (n.current.focus(), n.current.select())
                }, r.a.createElement("div", {
                    style: {position: "relative"},
                    className: s ? " show-clear-icon" : ""
                }, r.a.createElement("input", {
                    ref: n,
                    className: "search-input",
                    type: "search",
                    placeholder: Object(l.a)("Search for\u2026", "Panel"),
                    value: s,
                    onChange: function (e) {
                        u(d(e.target.value, t))
                    }
                }), r.a.createElement("span", {
                    className: "clear-btn-icon icon icon-cancel-circled",
                    onMouseDown: function (e) {
                        u(d("", t)), e.preventDefault(), e.stopPropagation()
                    }
                }))
            }
    }, 58: function (e, t, n) {
        e.exports = n(31)
    }, 9: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return i
        })), n.d(t, "b", (function () {
            return r
        })), n.d(t, "a", (function () {
            return l
        }));
        var a = n(0), o = n.n(a), i = function (e) {
            return o.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
            }, o.a.createElement("path", {d: "M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}), o.a.createElement("path", Object.assign({d: "M235 339h42v42h-42zM276.8 318h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z"}, e)))
        }, r = function (e) {
            return o.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
            }, o.a.createElement("path", Object.assign({d: "M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}, e)))
        }, l = function (e) {
            return o.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
            }, o.a.createElement("path", Object.assign({d: "M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"}, e)))
        }
    }
}]);
//# sourceMappingURL=1.304e4a41.chunk.js.map