(this.webpackJsonpsetting = this.webpackJsonpsetting || []).push([[3], {
    1: function (e, t, n) {
        "use strict";
        n.d(t, "m", (function () {
            return E
        })), n.d(t, "g", (function () {
            return y
        })), n.d(t, "b", (function () {
            return O
        })), n.d(t, "j", (function () {
            return N
        })), n.d(t, "p", (function () {
            return k
        })), n.d(t, "c", (function () {
            return C
        })), n.d(t, "r", (function () {
            return x
        })), n.d(t, "o", (function () {
            return S
        })), n.d(t, "a", (function () {
            return L
        })), n.d(t, "q", (function () {
            return P
        })), n.d(t, "s", (function () {
            return M
        })), n.d(t, "l", (function () {
            return D
        })), n.d(t, "e", (function () {
            return R
        })), n.d(t, "d", (function () {
            return F
        })), n.d(t, "f", (function () {
            return z
        })), n.d(t, "n", (function () {
            return T
        })), n.d(t, "i", (function () {
            return B
        })), n.d(t, "t", (function () {
            return q
        })), n.d(t, "u", (function () {
            return Q
        })), n.d(t, "h", (function () {
            return H
        })), n.d(t, "k", (function () {
            return W
        }));
        var a = n(6), i = n(3), l = n(5), r = n(13), o = n(14), c = n(7), s = n(16), u = n(15), d = n(0), m = n.n(d),
            b = n(8), h = n.n(b), f = n(9), p = n(2), w = n(4);

        function v(e) {
            return function (t) {
                Object(s.a)(a, t);
                var n = Object(u.a)(a);

                function a(e) {
                    var t;
                    return Object(r.a)(this, a), (t = n.call(this, e)).onMouseEnter = t.onMouseEnter.bind(Object(c.a)(t)), t.onMouseLeave = t.onMouseLeave.bind(Object(c.a)(t)), t.targetRef = m.a.createRef(), t
                }

                return Object(o.a)(a, [{
                    key: "componentDidMount", value: function () {
                        this.tooltip = document.querySelector("#ty-tooltip")
                    }
                }, {
                    key: "_adjustPosition", value: function (e) {
                        var t = this.targetRef.current, n = t.getBoundingClientRect(), a = this.tooltip.clientWidth,
                            i = {top: n.top + document.body.scrollTop, left: n.left + document.body.scrollLeft};
                        "bottom" === e ? (i.top = n.bottom + 8, i.right = n.right + (a - n.width) / 2) : "top" === e ? (i.top = n.top - 36, i.right = n.right + (a - n.width) / 2) : (i.right = i.left - 8, i.top = i.top + t.clientHeight / 2 - this.tooltip.clientHeight / 2), a > window.innerWidth - 30 ? i.left = 8 : i.left = i.right - a, this.tooltip.style.top = i.top + "px", this.tooltip.style.left = i.left + "px", i.right && (this.tooltip.style.right = window.innerWidth - i.right - 4 + "px")
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

        var E = function (e) {
            var t = e.active, n = e.children, a = Object(l.a)(e, ["active", "children"]), i = m.a.useRef(null);
            return m.a.useEffect((function () {
                if (t && i.current) {
                    var e = i.current, n = e.querySelector(".search-hit, .blink-area");
                    if (n) {
                        var a = n.getBoundingClientRect();
                        a.top + 20 > e.parentElement.scrollTop + window.innerHeight && (e.parentElement.scrollTop = a.top - 20)
                    }
                }
            })), m.a.createElement("div", Object.assign({
                ref: i,
                className: "content" + (t ? "" : " display-none")
            }, a), n)
        }, g = function (e) {
            var t = e.text, n = e.link;
            return n ? m.a.createElement("a", {
                href: n, target: "_blank", onClick: function (e) {
                    window.Setting.openLink(n), e.preventDefault()
                }
            }, Object(p.a)(t)) : Object(p.a)(t)
        }, y = function (e) {
            var t = e.hint, n = e.displayHint, a = e.inlineHint, i = e.hintLink,
                r = Object(l.a)(e, ["hint", "displayHint", "inlineHint", "hintLink"]);
            return n ? m.a.createElement("div", {className: "panel-content-hint row"}, t) : a ? m.a.createElement("div", {className: "inline-hint"}, m.a.createElement(g, {
                link: i,
                text: t || Object(p.a)("Learn More\u2026", "Front")
            })) : m.a.createElement(j, Object.assign({hint: t ? Object(p.a)(t) : i}, r))
        }, j = v(m.a.forwardRef((function (e, t) {
            var n = e.hint, a = (e.forwardedRef, Object(l.a)(e, ["hint", "forwardedRef"]));
            return m.a.createElement("span", Object.assign({
                ref: t,
                className: "label-hint",
                hint: n
            }, a), m.a.createElement(f.c, null))
        }))), O = function (e) {
            var t = e.keyName, n = e.label, a = e.dictGroup, i = e.checked, r = e.reverse, o = e.onChange, c = e.hint,
                s = e.hintLink, u = e.inlineHint, d = e.isCell, b = e.disabled,
                h = Object(l.a)(e, ["keyName", "label", "dictGroup", "checked", "reverse", "onChange", "hint", "hintLink", "inlineHint", "isCell", "disabled"]),
                f = m.a.useContext(w.a),
                v = !d && f && (Object(w.c)(f, n, a) || Object(w.c)(f, c)) ? " search-hit" : "";
            return m.a.createElement("div", Object.assign({className: "checkbox" + (d ? "" : " row") + v + (b ? " disabled" : "")}, h), m.a.createElement("label", null, m.a.createElement("input", {
                type: "checkbox",
                onChange: function (e) {
                    o(t, r ? !e.target.checked : e.target.checked)
                },
                checked: !!i,
                disabled: b
            }), Object(p.a)(n, a)), c || s ? m.a.createElement(y, {hint: c, inlineHint: u, hintLink: s}) : null)
        }, N = m.a.memo((function (e) {
            var t = e.title, n = e.dictGroup, a = e.hint, i = e.hintLink, l = e.breakBeforeHint, r = e.children,
                o = e.headerStyle, c = e.keyWords, s = e.highlight, u = m.a.useContext(w.a),
                d = Object(w.c)(u, t, n) || Object(w.c)(u, a) || c && Object(w.d)(u, c);
            return m.a.createElement("div", {className: "input-group" + (d ? " search-hit" : "") + (s ? " blink-area" : "")}, m.a.createElement("h5", {
                className: "input-group-header",
                style: o
            }, m.a.createElement("span", {className: "input-group-header-title"}, Object(p.a)(t, n)), a || i ? m.a.createElement("span", {className: "input-group-header-hint" + (l ? " hint-break-before" : "")}, m.a.createElement(g, {
                link: i,
                text: a || Object(p.a)("Learn More\u2026")
            })) : null), m.a.createElement("div", {className: "input-group-content"}, r))
        })), k = function (e) {
            var t = e.keyName, n = e.isCell, a = e.options, i = e.value, r = e.type, o = e.hint, c = e.inlineHint,
                s = e.optionsDict, u = e.onChange, d = e.disabled,
                b = Object(l.a)(e, ["keyName", "isCell", "options", "value", "type", "hint", "inlineHint", "optionsDict", "onChange", "disabled"]),
                h = m.a.useContext(w.a),
                f = h && !n && (Object(w.d)(h, Object.values(a), s) || Object(w.c)(h, o)) ? " search-hit" : "";
            return m.a.createElement("div", Object.assign({className: (n ? "cell" : "row") + f}, b), m.a.createElement("select", {
                onChange: function (e) {
                    var n = e.target.value;
                    "number" == r ? n = e.target.value - 0 : "boolean" == r && (n = e.target.value + "" == "true"), u(t, n)
                }, value: i, disabled: d
            }, function () {
                var e = [];
                for (var t in a) "_seperator" == t ? e.push(m.a.createElement("option", {
                    key: t,
                    disabled: !0
                }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")) : e.push(m.a.createElement("option", {
                    key: t,
                    value: t
                }, Object(p.a)(a[t], s)));
                return e
            }()), o ? m.a.createElement(y, {hint: o, inlineHint: c}) : null)
        }, C = function (e) {
            var t = e.forMac, n = e.forWin, a = e.forLinux, i = e.visible, l = e.children;
            return function (e) {
                return (e = e || t && window.isMac || n && window.isWin || a && window.isLinux) ? m.a.createElement(m.a.Fragment, null, l) : null
            }(i)
        }, x = function (e) {
            var t = e.label, n = e.style;
            return m.a.createElement("span", {style: n}, Object(p.a)(t))
        }, S = function (e) {
            var t = e.keyWords, n = e.style, a = e.children, i = m.a.useContext(w.a),
                l = i && t && Object(w.d)(i, t) ? " search-hit" : "";
            return m.a.createElement("div", {className: "row" + l, style: n}, a)
        }, L = function (e) {
            var t = e.label, n = e.style, a = Object(l.a)(e, ["label", "style"]);
            return m.a.createElement("button", Object.assign({
                "aria-label": Object(p.a)(t),
                style: Object(i.a)({}, n),
                className: "btn btn-default"
            }, a), Object(p.a)(t))
        }, P = function (e) {
            var t = e.label, n = e.style, a = e.options, r = e.onExtra,
                o = Object(l.a)(e, ["label", "style", "options", "onExtra"]), c = m.a.useRef(null);
            return m.a.createElement("div", {className: "btn-split-group"}, m.a.createElement("button", Object.assign({
                "aria-label": Object(p.a)(t),
                style: Object(i.a)({}, n),
                className: "btn btn-default btn-split-left"
            }, o), m.a.createElement("span", {className: "btn-split-main"}, Object(p.a)(t))), m.a.createElement("button", {
                "tab-index": -1,
                "aria-label": Object(p.a)(t),
                style: Object(i.a)({}, n),
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
                }, Object(p.a)(a[e]))
            }))))
        }, M = function (e) {
            var t = e.className, n = Object(l.a)(e, ["className"]);
            return m.a.createElement("input", Object.assign({type: "text", className: "ty-text-input " + (t || "")}, n))
        }, D = function (e) {
            var t = e.value, n = e.keyName, a = e.onChange, i = Object(l.a)(e, ["value", "keyName", "onChange"]);
            return m.a.createElement("input", Object.assign({
                type: "number", value: t, onChange: function (e) {
                    var t = e.target.value - 0;
                    isNaN(t) ? a(n, "382") : t < i.min ? a(n, "1") : t > i.max ? a(n, "999") : a(n, t)
                }
            }, i))
        }, H = v(m.a.forwardRef((function (e, t) {
            var n = e.icon, a = (e.label, e.hint), i = (e.hintPosition, e.disabled),
                r = Object(l.a)(e, ["icon", "label", "hint", "hintPosition", "disabled"]);
            return m.a.createElement("span", Object.assign({
                role: "button",
                className: "icon-button icon icon-" + n + (i ? " button-disabled" : ""),
                "aria-label": a,
                ref: t
            }, r))
        }))), F = function (e) {
            var t = e.keyName, n = e.value, a = e.defaultPath, i = e.placeholder, l = e.onChange, r = e.option;
            return m.a.createElement("div", {className: "file-input"}, m.a.createElement("input", {
                type: "text",
                value: n || "",
                onChange: function (e) {
                    l(t, e.target.value)
                },
                placeholder: i
            }), m.a.createElement(H, {
                hint: "Select",
                icon: "folder",
                style: {marginLeft: "1ch", cursor: "pointer"},
                onClick: function () {
                    var e = n || a;
                    window.Setting.selectFile(e, [r], (function (e) {
                        e && l(t, e)
                    }))
                },
                hintPosition: "bottom"
            }))
        }, _ = v(m.a.forwardRef((function (e, t) {
            var n = e.value, a = e.onSelect,
                i = (e.hintPosition, Object(l.a)(e, ["value", "onSelect", "hintPosition"])),
                r = (n || "").replace(/[\\\/]\s*$/, "").replace(/.*[\\\/]/, "");
            return "/" == n && (r = "/"), m.a.createElement("span", Object.assign({
                ref: t,
                type: "text",
                className: "dir-path",
                placeholder: Object(p.a)("Select Custom Folder..."),
                readOnly: !0,
                onClick: function () {
                    n ? window.Setting.openFolder(n) : a()
                }
            }, i), r || Object(p.a)("Select Custom Folder..."))
        }))), R = function (e) {
            var t = e.hidden, n = e.value, a = e.keyName, i = e.onChange,
                r = (Object(l.a)(e, ["hidden", "value", "keyName", "onChange"]), function () {
                    window.Setting.selectFolder(n, (function (e) {
                        var t = e || n;
                        t && i(a, t)
                    }))
                });
            return t ? null : m.a.createElement("div", {className: "row"}, m.a.createElement("div", {className: "select-pin-input-group"}, m.a.createElement(_, {
                hint: n,
                value: n,
                onSelect: r,
                hintPosition: "bottom"
            }), m.a.createElement(H, {
                icon: "folder",
                onClick: r,
                hint: Object(p.a)("Select custom folder"),
                hintPosition: "bottom"
            })))
        }, z = function (e) {
            var t = e.value, n = e.customValue, i = e.onChange, l = m.a.useState(n || 14), r = Object(a.a)(l, 2),
                o = r[0], c = r[1];
            var s, u = function (e) {
                "radio" === e.target.type && i("useCustomFontSize", e.target.value + "" === "true")
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
            }), Object(p.a)("Auto ( Recommended )"))), m.a.createElement("span", {
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
            }), Object(p.a)("Customized"), (s = t + "" === "true", m.a.createElement("span", {
                className: "custom-font-input",
                style: {visibility: s ? "visible" : "hidden"}
            }, m.a.createElement("input", {
                style: {marginLeft: "8px", marginTop: "-4px"},
                step: "1",
                type: "number",
                max: "24",
                size: "2",
                min: "9",
                value: o,
                onChange: function (e) {
                    var t = e.target.value - 0;
                    isNaN(t) || (c(Math.floor(t)), t <= 24 && t >= 9 && i("customFontSize", t))
                },
                onBlur: function () {
                    var e = o;
                    e > 24 && (e = 24), e < 9 && (e = 9), c(e), i("customFontSize", e)
                }
            }), " ", m.a.createElement("span", null, "px"))))))
        }, T = function (e) {
            var t = e.keyName, n = e.value, a = e.type, i = e.options, r = e.onChange;
            Object(l.a)(e, ["keyName", "value", "type", "options", "onChange"]);
            return m.a.createElement("div", {
                className: "row", onChange: function (e) {
                    var n = e.target.value;
                    "number" == a ? n = e.target.value - 0 : "boolean" == a && (n = e.target.value + "" == "true"), r(t, n)
                }, value: n
            }, function () {
                var e = [];
                for (var a in i) e.push(m.a.createElement("span", {
                    key: a,
                    className: "radio",
                    style: {width: "40%"}
                }, m.a.createElement("label", null, m.a.createElement("input", {
                    type: "radio",
                    name: t,
                    value: a,
                    defaultChecked: n + "" == a
                }), Object(p.a)(i[a]))));
                return e
            }())
        }, B = function (e) {
            var t, n, a = e.indentSize, i = e.prettyIndent, r = Object(l.a)(e, ["indentSize", "prettyIndent"]);
            return a -= 0, i = i + "" === "true", m.a.createElement(N, {
                title: "Indent Size on Save",
                breakBeforeHint: !0,
                hint: "only apply to quotes and lists created from menu bar or hybrid view",
                headerStyle: {marginBottom: "0"}
            }, m.a.createElement(q, {
                rows: [[m.a.createElement("div", null, m.a.createElement(k, Object.assign({
                    keyName: "indentSize",
                    style: {width: "80px", minHeight: "25px"},
                    options: {0: "Auto", 2: "2", 3: "3", 4: "4", 5: "5", "-1": "Tab"},
                    isCell: !0
                }, r, {
                    onChange: function (e, t) {
                        r.onChange(e, t - 0)
                    }, value: (a || 0) + ""
                })), m.a.createElement(O, Object.assign({
                    keyName: "prettyIndent",
                    style: {marginTop: "8px"},
                    label: "Pretty indentation",
                    isCell: !0
                }, r, {checked: !!i}))), m.a.createElement("div", {
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
                }, (t = a, n = i, (t = t || 2) < 0 ? "> Quote\n- List item\n\t1. sub-bullet\n\t\tline2" : (n ? ["> Quote\n- List item\n  1. sub-bullet\n     line2", ">  Quote\n-  List item\n   1. sub-bullet\n      line2", ">   Quote\n-   List item\n    1.  sub-bullet\n        line2", ">    Quote\n-    List item\n     1.   sub-bullet\n          line2"] : ["> Quote\n- List item\n  1. sub-bullet\n     line2", "> Quote\n- List item\n   1. sub-bullet\n      line2", "> Quote\n- List item\n    1. sub-bullet\n        line2", "> Quote\n- List item\n     1. sub-bullet\n          line2"])[(t || 2) - 2])))]]
            }))
        }, q = function (e) {
            var t = e.className, n = e.rows, a = m.a.useContext(w.a);
            return m.a.createElement("table", {className: "label-input-group " + (t || "")}, m.a.createElement("tbody", null, n.map((function (e, t) {
                var n = e[2] || e[0], i = a && "string" == typeof n && Object(w.c)(a, n) ? "search-hit" : "";
                return m.a.createElement("tr", {
                    key: t,
                    className: i
                }, m.a.createElement("td", null, "string" == typeof e[0] ? Object(p.a)(e[0]) : e[0]), m.a.createElement("td", null, e[1]), e[2] ? m.a.createElement(y, {hint: e[2]}) : null)
            }))))
        }, Q = function () {
            return m.a.createElement("header", {className: "window-header"}, m.a.createElement("div", {className: "window-header-content"}, m.a.createElement("div", {className: "window-header-title"}, m.a.createElement("button", {
                className: "window-header-back",
                onClick: window.Setting.close
            }, m.a.createElement("span", {className: "icon"}, m.a.createElement(f.a, null))), m.a.createElement("h2", null, Object(p.a)("Preferences")))), m.a.createElement("button", {
                className: "header-close",
                onClick: window.Setting.close
            }, m.a.createElement("span", {className: "icon"}, m.a.createElement(f.b, null))))
        }, W = function (e) {
            return h.a.createPortal(m.a.createElement("div", {className: "modal-backdrop"}, m.a.createElement("div", {
                className: "modal-content " + (e.className || ""),
                onKeyDown: e.onKeyDown
            }, void 0 === e.title ? null : m.a.createElement("div", {className: "modal-title"}, m.a.createElement("h3", null, Object(p.a)(e.title))), m.a.createElement("div", {className: "modal-body"}, e.children), m.a.createElement("div", {className: "modal-footer"}, e.footer ? e.footer : m.a.createElement("div", null, m.a.createElement("button", {
                className: "btn btn-primary",
                onClick: e.closeAction
            }, Object(p.a)("OK")))))), document.querySelector("#modal"))
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
    }, 38: function (e, t, n) {
        e.exports = n(44)
    }, 39: function (e, t, n) {
    }, 4: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return m
        })), n.d(t, "d", (function () {
            return b
        })), n.d(t, "a", (function () {
            return s
        })), n.d(t, "b", (function () {
            return h
        }));
        var a = n(6), i = n(19), l = n(0), r = n.n(l), o = n(2), c = n(12), s = r.a.createContext(""), u = null,
            d = function (e, t) {
                return u && (clearTimeout(u), u = null), u = setTimeout((function () {
                    u = null, t(e)
                }), 100), e
            }, m = function (e, t, n) {
                if (!e || !t) return !1;
                if (t.toLowerCase().indexOf(e.toLowerCase()) > -1) return !0;
                if ("Base" !== (window.Setting.locale() || "Base") && Object(o.a)(t, n).toLowerCase().indexOf(e.toLowerCase()) > -1) return !0;
                return !1
            }, b = function (e, t, n) {
                if (!e) return !1;
                var a, l = Object(i.a)(t);
                try {
                    for (l.s(); !(a = l.n()).done;) {
                        var r = a.value;
                        if (m(e, r, n)) return !0
                    }
                } catch (o) {
                    l.e(o)
                } finally {
                    l.f()
                }
                return !1
            }, h = function (e) {
                var t = e.onSearch, n = r.a.useRef(null),
                    i = r.a.useState((Object(c.a)(window.isMac ? "command+f" : "ctrl+f", (function (e, t) {
                        e.preventDefault(), window.searchOnPreferencePanel()
                    })), "")), l = Object(a.a)(i, 2), s = l[0], u = l[1];
                return window.searchOnPreferencePanel = function () {
                    n.current && (n.current.focus(), n.current.select())
                }, r.a.createElement("div", {
                    style: {position: "relative"},
                    className: s ? " show-clear-icon" : ""
                }, r.a.createElement("input", {
                    ref: n,
                    className: "search-input",
                    type: "search",
                    placeholder: Object(o.a)("Search for\u2026", "Panel"),
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
    }, 44: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(3), i = n(0), l = n.n(i), r = n(8), o = n.n(r), c = n(12), s = (n(22), n(20)), u = n(5), d = n(9),
            m = n(2), b = (n(39), n(59)), h = n(1), f = function (e) {
                var t = e.title, n = e.children;
                return l.a.createElement(l.a.Fragment, null, l.a.createElement("tr", null, l.a.createElement("td", {colspan: "2"}, l.a.createElement("h5", {className: "input-group-header"}, t))), n)
            }, p = function (e) {
                var t = e.left, n = e.right;
                return l.a.createElement("tr", null, l.a.createElement("td", null, t), l.a.createElement("td", null, n))
            }, w = function (e) {
                var t = e.label, n = (e.keywords, e.value);
                Object(u.a)(e, ["label", "keywords", "value"]);
                return l.a.createElement(p, {
                    left: l.a.createElement(h.r, {label: t}),
                    right: l.a.createElement(h.s, {value: n})
                })
            }, v = function () {
                return l.a.createElement("header", {className: "window-header"}, l.a.createElement("div", {className: "window-header-content"}, l.a.createElement("div", {className: "window-header-title"}, l.a.createElement("button", {
                    className: "window-header-back",
                    onClick: window.Setting.close
                }, l.a.createElement("span", {className: "icon"}, l.a.createElement(d.a, null))), l.a.createElement("div", {className: "window-header-title-tab active"}, l.a.createElement(b.a, null, Object(m.a)("Workspace Setting"))), l.a.createElement("div", {className: "window-header-title-tab"}, l.a.createElement(b.a, null, Object(m.a)("File Setting"))))), l.a.createElement("button", {
                    className: "header-close",
                    onClick: window.Setting.close
                }, l.a.createElement("span", {className: "icon"}, l.a.createElement(d.b, null))))
            }, E = function () {
                return l.a.createElement(f, {title: "Document"}, l.a.createElement(w, {label: "Title"}), l.a.createElement(w, {label: "Author"}))
            }, g = function () {
                return l.a.createElement(f, {title: "Editor"}, l.a.createElement(w, {label: "Default Code Language"}), l.a.createElement(w, {label: "Line Break"}), l.a.createElement(w, {label: "Image Root Folder"}), l.a.createElement(w, {label: "Copy Images to... (when insert)"}))
            }, y = function () {
                return l.a.createElement(f, {title: "PDF Export"}, l.a.createElement(w, {label: "Paper Size"}), l.a.createElement(w, {label: "Margin"}), l.a.createElement(w, {label: "Header"}), l.a.createElement(w, {label: "Footer"}))
            }, j = function () {
                return l.a.createElement(f, {title: "HTML Export"}, l.a.createElement(w, {label: "Append in <head />"}), l.a.createElement(w, {label: "Append in <body />"}))
            }, O = function () {
                return l.a.createElement("div", null, l.a.createElement(v, null), l.a.createElement("div", {className: "ty-local-setting-container"}, l.a.createElement("table", {className: "ty-local-setting-container-table"}, l.a.createElement("tbody", null, l.a.createElement(E, null), l.a.createElement(g, null), l.a.createElement(y, null), l.a.createElement(j, null)))))
            };
        n(21);
        window.isNode = window.require;
        var N = null, k = !1, C = function () {
            return window.isNode ? window._options.userLocale : window._options.locale
        };
        window.Setting = {
            close: function () {
            }
        }, window.loadDict = function (e) {
            return window.location.href.match(/localhost/) ? new Promise((function (e) {
                setTimeout((function () {
                    e({Front: {}, Menu: {}, Panel: {}})
                }), 100)
            })) : Promise.all([fetch("../locales/" + e + ".lproj/Front.json"), fetch("../locales/" + e + ".lproj/Menu.json"), fetch("../locales/" + e + ".lproj/Panel.json")]).then((function (e) {
                return Promise.all(e.map((function (e) {
                    return e.json()
                })))
            })).then((function (e) {
                return Promise.resolve({Front: e[0], Menu: e[1], Panel: e[2]})
            }))
        };
        var x = {
            Front: {}, Menu: {}, Panel: {}, get: function (e, t) {
                return x[t || "Panel"][e] || e
            }
        };
        window.Dict = x;
        var S = function () {
            console.log("render..."), o.a.render(l.a.createElement(O, window._options), document.getElementById("root"))
        };
        if (window.reloadData = function () {
            console.log("window.reloadData"), N.invoke("setting.getExtraOption").then((function (e) {
                if (console.log("setting.getExtraOption done"), window._options = JSON.parse(e), window._options.tempPath, window._options.userDataPath, window._options.documentsPath, !k) {
                    k = !0;
                    var t = C();
                    "Base" !== t && t ? window.loadDict(t).then((function (e) {
                        x = Object(a.a)(Object(a.a)({}, x), e), S()
                    })) : k && S()
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
            var L = window.require("electron");
            N = L.ipcRenderer, window.reloadData(), N.on("executeJavaScript", (function (e, t) {
                window.eval(t)
            }))
        }
        window.webkit && window._options._documentPath, window._options = Object(a.a)({}, window._options), window.fetch || (fetch = s.a);
        var P = {};
        if (window.onMessageCallback = function (e) {
            var t = P[e.id];
            t && t.apply(null, e.data), delete P[e.id]
        }, window.isUnibody && document.body.classList.add("unibody-window"), window.isNode && N.on("syncToPreference", (function (e, t) {
            window.eval(t)
        })), Object(c.a)("esc", (function (e, t) {
            "INPUT" === e.target.nodeName || document.querySelector(".modal-backdrop") || (e.preventDefault(), window.Setting.close())
        })), window.isMac) {
            var M = !1;
            window.loadDict(C()).then((function (e) {
                x = Object(a.a)(Object(a.a)({}, x), e), M = !0, S()
            })), setTimeout((function () {
                !M && S()
            }), 1e3)
        } else window.isNode || S()
    }, 9: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return l
        })), n.d(t, "b", (function () {
            return r
        })), n.d(t, "a", (function () {
            return o
        }));
        var a = n(0), i = n.n(a), l = function (e) {
            return i.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
            }, i.a.createElement("path", {d: "M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}), i.a.createElement("path", Object.assign({d: "M235 339h42v42h-42zM276.8 318h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z"}, e)))
        }, r = function (e) {
            return i.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
            }, i.a.createElement("path", Object.assign({d: "M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}, e)))
        }, o = function (e) {
            return i.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
            }, i.a.createElement("path", Object.assign({d: "M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"}, e)))
        }
    }
}, [[38, 6, 0, 8]]]);
//# sourceMappingURL=localSettingIndex.a2c75cbd.96b5a1a5.chunk.js.map