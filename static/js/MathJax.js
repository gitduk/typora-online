document.getElementById && document.childNodes && document.createElement && (window.MathJax && MathJax.Hub || (window.MathJax ? window.MathJax = {AuthorConfig: window.MathJax} : window.MathJax = {}, MathJax.version = "2.7.5", MathJax.fileversion = "2.7.5", MathJax.cdnVersion = "2.7.5", MathJax.cdnFileVersions = {}, function (t) {
    var e = window.MathJax;
    e || (e = window.MathJax = {});
    var i = [], n = function (t) {
        var e = t.constructor;
        for (var i in e || (e = function () {
        }), t) "constructor" !== i && t.hasOwnProperty(i) && (e[i] = t[i]);
        return e
    };
    e.Object = n({
        constructor: function () {
            return arguments.callee.Init.call(this, arguments)
        }, Subclass: function (t, e) {
            var n = function () {
                return arguments.callee.Init.call(this, arguments)
            };
            return n.SUPER = this, n.Init = this.Init, n.Subclass = this.Subclass, n.Augment = this.Augment, n.protoFunction = this.protoFunction, n.can = this.can, n.has = this.has, n.isa = this.isa, n.prototype = new this(i), n.prototype.constructor = n, n.Augment(t, e), n
        }, Init: function (t) {
            var e = this;
            return 1 === t.length && t[0] === i ? e : (e instanceof t.callee || (e = new t.callee(i)), e.Init.apply(e, t) || e)
        }, Augment: function (t, e) {
            var i;
            if (null != t) {
                for (i in t) t.hasOwnProperty(i) && this.protoFunction(i, t[i]);
                t.toString !== this.prototype.toString && t.toString !== {}.toString && this.protoFunction("toString", t.toString)
            }
            if (null != e) for (i in e) e.hasOwnProperty(i) && (this[i] = e[i]);
            return this
        }, protoFunction: function (t, e) {
            this.prototype[t] = e, "function" == typeof e && (e.SUPER = this.SUPER.prototype)
        }, prototype: {
            Init: function () {
            }, SUPER: function (t) {
                return t.callee.SUPER
            }, can: function (t) {
                return "function" == typeof this[t]
            }, has: function (t) {
                return void 0 !== this[t]
            }, isa: function (t) {
                return t instanceof Object && this instanceof t
            }
        }, can: function (t) {
            return this.prototype.can.call(this, t)
        }, has: function (t) {
            return this.prototype.has.call(this, t)
        }, isa: function (t) {
            for (var e = this; e;) {
                if (e === t) return !0;
                e = e.SUPER
            }
            return !1
        }, SimpleSUPER: n({
            constructor: function (t) {
                return this.SimpleSUPER.define(t)
            }, define: function (t) {
                var e = {};
                if (null != t) {
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = this.wrap(i, t[i]));
                    t.toString !== this.prototype.toString && t.toString !== {}.toString && (e.toString = this.wrap("toString", t.toString))
                }
                return e
            }, wrap: function (t, e) {
                if ("function" != typeof e || !e.toString().match(/\.\s*SUPER\s*\(/)) return e;
                var i = function () {
                    this.SUPER = i.SUPER[t];
                    try {
                        var n = e.apply(this, arguments)
                    } catch (t) {
                        throw delete this.SUPER, t
                    }
                    return delete this.SUPER, n
                };
                return i.toString = function () {
                    return e.toString.apply(e, arguments)
                }, i
            }
        })
    }), e.Object.isArray = Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }, e.Object.Array = Array
}(), function (t) {
    var e = window.MathJax;
    e || (e = window.MathJax = {});
    var i = e.Object.isArray, n = function (t) {
        var e = function () {
            return arguments.callee.execute.apply(arguments.callee, arguments)
        };
        for (var i in n.prototype) n.prototype.hasOwnProperty(i) && (e[i] = void 0 !== t[i] ? t[i] : n.prototype[i]);
        return e.toString = n.prototype.toString, e
    };
    n.prototype = {
        isCallback: !0, hook: function () {
        }, data: [], object: window, execute: function () {
            if (!this.called || this.autoReset) return this.called = !this.autoReset, this.hook.apply(this.object, this.data.concat([].slice.call(arguments, 0)))
        }, reset: function () {
            delete this.called
        }, toString: function () {
            return this.hook.toString.apply(this.hook, arguments)
        }
    };
    var a = function (t) {
        return "function" == typeof t && t.isCallback
    }, s = function (t) {
        return eval.call(window, t)
    }, r = function () {
        if (s("var __TeSt_VaR__ = 1"), window.__TeSt_VaR__) try {
            delete window.__TeSt_VaR__
        } catch (t) {
            window.__TeSt_VaR__ = null
        } else s = window.execScript ? function (t) {
            e.__code = t, t = "try {MathJax.__result = eval(MathJax.__code)} catch(err) {MathJax.__result = err}", window.execScript(t);
            var i = e.__result;
            if (delete e.__result, delete e.__code, i instanceof Error) throw i;
            return i
        } : function (t) {
            e.__code = t, t = "try {MathJax.__result = eval(MathJax.__code)} catch(err) {MathJax.__result = err}";
            var i = document.getElementsByTagName("head")[0];
            i || (i = document.body);
            var n = document.createElement("script");
            n.appendChild(document.createTextNode(t)), i.appendChild(n), i.removeChild(n);
            var a = e.__result;
            if (delete e.__result, delete e.__code, a instanceof Error) throw a;
            return a
        };
        r = null
    }, o = function (t, e) {
        if (arguments.length > 1 && (t = 2 === arguments.length && "function" != typeof arguments[0] && arguments[0] instanceof Object && "number" == typeof arguments[1] ? [].slice.call(t, e) : [].slice.call(arguments, 0)), i(t) && 1 === t.length && "function" == typeof t[0] && (t = t[0]), "function" == typeof t) return t.execute === n.prototype.execute ? t : n({hook: t});
        if (i(t)) {
            if ("string" == typeof t[0] && t[1] instanceof Object && "function" == typeof t[1][t[0]]) return n({
                hook: t[1][t[0]],
                object: t[1],
                data: t.slice(2)
            });
            if ("function" == typeof t[0]) return n({hook: t[0], data: t.slice(1)});
            if ("function" == typeof t[1]) return n({hook: t[1], object: t[0], data: t.slice(2)})
        } else {
            if ("string" == typeof t) return r && r(), n({hook: s, data: [t]});
            if (t instanceof Object) return n(t);
            if (void 0 === t) return n({})
        }
        throw Error("Can't make callback from given data")
    }, h = function (t, e) {
        (t = o(t)).called || (u(t, e), e.pending++)
    }, l = function () {
        var t = this.signal;
        delete this.signal, this.execute = this.oldExecute, delete this.oldExecute;
        var e = this.execute.apply(this, arguments);
        if (a(e) && !e.called) u(e, t); else for (var i = 0, n = t.length; i < n; i++) t[i].pending--, t[i].pending <= 0 && t[i].call()
    }, u = function (t, e) {
        i(e) || (e = [e]), t.signal ? 1 === e.length ? t.signal.push(e[0]) : t.signal = t.signal.concat(e) : (t.oldExecute = t.execute, t.execute = l, t.signal = e)
    }, c = function (t) {
        (t = o(t)).pending = 0;
        for (var e = 1, i = arguments.length; e < i; e++) arguments[e] && h(arguments[e], t);
        if (0 === t.pending) {
            var n = t();
            a(n) && (t = n)
        }
        return t
    }, p = MathJax.Object.Subclass({
        Init: function (t) {
            this.hooks = [], this.remove = [], this.reset = t, this.running = !1
        }, Add: function (t, e) {
            null == e && (e = 10), a(t) || (t = o(t)), t.priority = e;
            for (var i = this.hooks.length; i > 0 && e < this.hooks[i - 1].priority;) i--;
            return this.hooks.splice(i, 0, t), t
        }, Remove: function (t) {
            for (var e = 0, i = this.hooks.length; e < i; e++) if (this.hooks[e] === t) return void (this.running ? this.remove.push(e) : this.hooks.splice(e, 1))
        }, Execute: function () {
            var t = [{}];
            this.running = !0;
            for (var e = 0, i = this.hooks.length; e < i; e++) {
                this.reset && this.hooks[e].reset();
                var n = this.hooks[e].apply(window, arguments);
                a(n) && !n.called && t.push(n)
            }
            return this.running = !1, this.remove.length && this.RemovePending(), 1 === t.length ? null : 2 === t.length ? t[1] : c.apply({}, t)
        }, RemovePending: function () {
            this.remove = this.remove.sort();
            for (var t = this.remove.length - 1; t >= 0; t--) this.hooks.splice(t, 1);
            this.remove = []
        }
    }), d = e.Object.Subclass({
        Init: function () {
            this.pending = this.running = 0, this.queue = [], this.Push.apply(this, arguments)
        }, Push: function () {
            for (var t, e = 0, i = arguments.length; e < i; e++) (t = o(arguments[e])) !== arguments[e] || t.called || (t = o(["wait", this, t])), this.queue.push(t);
            return this.running || this.pending || this.Process(), t
        }, Process: function (t) {
            for (; !this.running && !this.pending && this.queue.length;) {
                var e = this.queue[0];
                t = this.queue.slice(1), this.queue = [], this.Suspend();
                var i = e();
                this.Resume(), t.length && (this.queue = t.concat(this.queue)), a(i) && !i.called && h(i, this)
            }
        }, Suspend: function () {
            this.running++
        }, Resume: function () {
            this.running && this.running--
        }, call: function () {
            this.Process.apply(this, arguments)
        }, wait: function (t) {
            return t
        }
    }), f = d.Subclass({
        Init: function (t) {
            d.prototype.Init.call(this), this.name = t, this.posted = [], this.listeners = p(!0), this.posting = !1, this.callback = null
        }, Post: function (t, e, i) {
            if (e = o(e), this.posting || this.pending) this.Push(["Post", this, t, e, i]); else {
                this.callback = e, e.reset(), i || this.posted.push(t), this.Suspend(), this.posting = !0;
                var n = this.listeners.Execute(t);
                a(n) && !n.called && h(n, this), this.Resume(), this.posting = !1, this.pending || this.call()
            }
            return e
        }, Clear: function (t) {
            return t = o(t), this.posting || this.pending ? t = this.Push(["Clear", this, t]) : (this.posted = [], t()), t
        }, call: function () {
            this.callback(this), this.Process()
        }, Interest: function (t, e, i) {
            if (t = o(t), this.listeners.Add(t, i), !e) for (var n = 0, s = this.posted.length; n < s; n++) {
                t.reset();
                var r = t(this.posted[n]);
                a(r) && n === this.posted.length - 1 && h(r, this)
            }
            return t
        }, NoInterest: function (t) {
            this.listeners.Remove(t)
        }, MessageHook: function (t, e, i) {
            e = o(e), this.hooks || (this.hooks = {}, this.Interest(["ExecuteHooks", this])), this.hooks[t] || (this.hooks[t] = p(!0)), this.hooks[t].Add(e, i);
            for (var n = 0, a = this.posted.length; n < a; n++) this.posted[n] == t && (e.reset(), e(this.posted[n]));
            return e.msg = t, e
        }, ExecuteHooks: function (t) {
            var e = i(t) ? t[0] : t;
            return this.hooks[e] ? this.hooks[e].Execute(t) : null
        }, RemoveHook: function (t) {
            this.hooks[t.msg].Remove(t)
        }
    }, {
        signals: {}, find: function (t) {
            return f.signals[t] || (f.signals[t] = new f(t)), f.signals[t]
        }
    });
    e.Callback = e.CallBack = o, e.Callback.Delay = function (t, e) {
        return (e = o(e)).timeout = setTimeout(e, t), e
    }, e.Callback.After = c, e.Callback.Queue = d, e.Callback.Signal = f.find, e.Callback.Hooks = p, e.Callback.ExecuteHooks = function (t, e, n) {
        if (!t) return null;
        i(t) || (t = [t]), i(e) || (e = null == e ? [] : [e]);
        for (var a = p(n), s = 0, r = t.length; s < r; s++) a.Add(t[s]);
        return a.Execute.apply(a, e)
    }
}(), function (t) {
    var e = window.MathJax;
    e || (e = window.MathJax = {});
    var i = "Apple Computer, Inc." === navigator.vendor && void 0 === navigator.vendorSub, n = 0, a = function (t) {
        return document.styleSheets && document.styleSheets.length > n && (n = document.styleSheets.length), t || (t = document.head || document.getElementsByTagName("head")[0]) || (t = document.body), t
    }, s = [], r = function () {
        for (var t = 0, i = s.length; t < i; t++) e.Ajax.head.removeChild(s[t]);
        s = []
    }, o = {MathJax: "", a11y: "[MathJax]/extensions/a11y", Contrib: "https://cdn.mathjax.org/mathjax/contrib"};
    e.Ajax = {
        loaded: {},
        loading: {},
        loadHooks: {},
        timeout: 15e3,
        styleDelay: 1,
        config: {root: "", path: o},
        params: {},
        STATUS: {OK: 1, ERROR: -1},
        fileURL: function (t) {
            for (var e; (e = t.match(/^\[([-._a-z0-9]+)\]/i)) && o.hasOwnProperty(e[1]);) t = (o[e[1]] || this.config.root) + t.substr(e[1].length + 2);
            return t
        },
        fileName: function (t) {
            var e = this.config.root;
            t.substr(0, e.length) === e && (t = "[MathJax]" + t.substr(e.length));
            do {
                var i = !1;
                for (var n in o) if (o.hasOwnProperty(n) && o[n] && t.substr(0, o[n].length) === o[n]) {
                    t = "[" + n + "]" + t.substr(o[n].length), i = !0;
                    break
                }
            } while (i);
            return t
        },
        fileRev: function (t) {
            var i = e.cdnFileVersions[t] || e.cdnVersion || "";
            return i && (i = "?V=" + i), i
        },
        urlRev: function (t) {
            return this.fileURL(t) + this.fileRev(t)
        },
        Require: function (t, i) {
            var n;
            if (i = e.Callback(i), t instanceof Object) for (var a in t) t.hasOwnProperty(a) && (n = a.toUpperCase(), t = t[a]); else n = t.split(/\./).pop().toUpperCase();
            if (this.params.noContrib && "[Contrib]" === t.substr(0, 9)) i(this.STATUS.ERROR); else if (t = this.fileURL(t), this.loaded[t]) i(this.loaded[t]); else {
                var s = {};
                s[n] = t, this.Load(s, i)
            }
            return i
        },
        Load: function (t, i) {
            var n;
            if (i = e.Callback(i), t instanceof Object) for (var s in t) t.hasOwnProperty(s) && (n = s.toUpperCase(), t = t[s]); else n = t.split(/\./).pop().toUpperCase();
            if (t = this.fileURL(t), this.loading[t]) this.addHook(t, i); else {
                if (this.head = a(this.head), !this.loader[n]) throw Error("Can't load files of type " + n);
                this.loader[n].call(this, t, i)
            }
            return i
        },
        LoadHook: function (t, i, n) {
            if (i = e.Callback(i), t instanceof Object) for (var a in t) t.hasOwnProperty(a) && (t = t[a]);
            return t = this.fileURL(t), this.loaded[t] ? i(this.loaded[t]) : this.addHook(t, i, n), i
        },
        addHook: function (t, e, i) {
            this.loadHooks[t] || (this.loadHooks[t] = MathJax.Callback.Hooks()), this.loadHooks[t].Add(e, i), e.file = t
        },
        removeHook: function (t) {
            this.loadHooks[t.file] && (this.loadHooks[t.file].Remove(t), this.loadHooks[t.file].hooks.length || delete this.loadHooks[t.file])
        },
        Preloading: function () {
            for (var t = 0, e = arguments.length; t < e; t++) {
                var i = this.fileURL(arguments[t]);
                this.loading[i] || (this.loading[i] = {preloaded: !0})
            }
        },
        loader: {
            JS: function (t, i) {
                var n = this.fileName(t), a = document.createElement("script"),
                    s = e.Callback(["loadTimeout", this, t]);
                this.loading[t] = {
                    callback: i,
                    timeout: setTimeout(s, this.timeout),
                    status: this.STATUS.OK,
                    script: a
                }, this.loading[t].message = e.Message.File(n), a.onerror = s, a.type = "text/javascript", a.src = t + this.fileRev(n), this.head.appendChild(a)
            }, CSS: function (t, i) {
                var n = this.fileName(t), a = document.createElement("link");
                a.rel = "stylesheet", a.type = "text/css", a.href = t + this.fileRev(n), this.loading[t] = {
                    callback: i,
                    message: e.Message.File(n),
                    status: this.STATUS.OK
                }, this.head.appendChild(a), this.timer.create.call(this, [this.timer.file, t], a)
            }
        },
        timer: {
            create: function (t, a) {
                return t = e.Callback(t), "STYLE" === a.nodeName && a.styleSheet && void 0 !== a.styleSheet.cssText ? t(this.STATUS.OK) : window.chrome && "LINK" === a.nodeName ? t(this.STATUS.OK) : i ? this.timer.start(this, [this.timer.checkSafari2, n++, t], this.styleDelay) : this.timer.start(this, [this.timer.checkLength, a, t], this.styleDelay), t
            }, start: function (t, i, n, a) {
                (i = e.Callback(i)).execute = this.execute, i.time = this.time, i.STATUS = t.STATUS, i.timeout = a || t.timeout, i.delay = i.total = n || 0, n ? setTimeout(i, n) : i()
            }, time: function (t) {
                return this.total += this.delay, this.delay = Math.floor(1.05 * this.delay + 5), this.total >= this.timeout ? (t(this.STATUS.ERROR), 1) : 0
            }, file: function (t, i) {
                i < 0 ? e.Ajax.loadTimeout(t) : e.Ajax.loadComplete(t)
            }, execute: function () {
                this.hook.call(this.object, this, this.data[0], this.data[1])
            }, checkSafari2: function (t, e, i) {
                t.time(i) || (document.styleSheets.length > e && document.styleSheets[e].cssRules && document.styleSheets[e].cssRules.length ? i(t.STATUS.OK) : setTimeout(t, t.delay))
            }, checkLength: function (t, i, n) {
                if (!t.time(n)) {
                    var a = 0, s = i.sheet || i.styleSheet;
                    try {
                        (s.cssRules || s.rules || []).length > 0 && (a = 1)
                    } catch (t) {
                        t.message.match(/protected variable|restricted URI/) ? a = 1 : t.message.match(/Security error/) && (a = 1)
                    }
                    a ? setTimeout(e.Callback([n, t.STATUS.OK]), 0) : setTimeout(t, t.delay)
                }
            }
        },
        loadComplete: function (t) {
            t = this.fileURL(t);
            var i = this.loading[t];
            return i && !i.preloaded ? (e.Message.Clear(i.message), clearTimeout(i.timeout), i.script && (0 === s.length && setTimeout(r, 0), s.push(i.script)), this.loaded[t] = i.status, delete this.loading[t], this.addHook(t, i.callback)) : (i && delete this.loading[t], this.loaded[t] = this.STATUS.OK, i = {status: this.STATUS.OK}), this.loadHooks[t] ? this.loadHooks[t].Execute(i.status) : null
        },
        loadTimeout: function (t) {
            this.loading[t].timeout && clearTimeout(this.loading[t].timeout), this.loading[t].status = this.STATUS.ERROR, this.loadError(t), this.loadComplete(t)
        },
        loadError: function (t) {
            e.Message.Set(["LoadFailed", "File failed to load: %1", t], null, 2e3), e.Hub.signal.Post(["file load error", t])
        },
        Styles: function (t, i) {
            var n = this.StyleString(t);
            if ("" === n) (i = e.Callback(i))(); else {
                var s = document.createElement("style");
                s.type = "text/css", this.head = a(this.head), this.head.appendChild(s), s.styleSheet && void 0 !== s.styleSheet.cssText ? s.styleSheet.cssText = n : s.appendChild(document.createTextNode(n)), i = this.timer.create.call(this, i, s)
            }
            return i
        },
        StyleString: function (t) {
            if ("string" == typeof t) return t;
            var i, n, a = "";
            for (i in t) if (t.hasOwnProperty(i)) if ("string" == typeof t[i]) a += i + " {" + t[i] + "}\n"; else if (e.Object.isArray(t[i])) for (var s = 0; s < t[i].length; s++) (n = {})[i] = t[i][s], a += this.StyleString(n); else if ("@media" === i.substr(0, 6)) a += i + " {" + this.StyleString(t[i]) + "}\n"; else if (null != t[i]) {
                for (var r in n = [], t[i]) t[i].hasOwnProperty(r) && null != t[i][r] && (n[n.length] = r + ": " + t[i][r]);
                a += i + " {" + n.join("; ") + "}\n"
            }
            return a
        }
    }
}(), MathJax.HTML = {
    Element: function (t, e, i) {
        var n, a = document.createElement(t);
        if (e) {
            if (e.hasOwnProperty("style")) {
                var s = e.style;
                for (n in e.style = {}, s) s.hasOwnProperty(n) && (e.style[n.replace(/-([a-z])/g, this.ucMatch)] = s[n])
            }
            for (n in MathJax.Hub.Insert(a, e), e) "role" !== n && "aria-" !== n.substr(0, 5) || a.setAttribute(n, e[n])
        }
        if (i) {
            MathJax.Object.isArray(i) || (i = [i]);
            for (var r = 0, o = i.length; r < o; r++) MathJax.Object.isArray(i[r]) ? a.appendChild(this.Element(i[r][0], i[r][1], i[r][2])) : "script" === t ? this.setScript(a, i[r]) : a.appendChild(document.createTextNode(i[r]))
        }
        return a
    }, ucMatch: function (t, e) {
        return e.toUpperCase()
    }, addElement: function (t, e, i, n) {
        return t.appendChild(this.Element(e, i, n))
    }, TextNode: function (t) {
        return document.createTextNode(t)
    }, addText: function (t, e) {
        return t.appendChild(this.TextNode(e))
    }, setScript: function (t, e) {
        if (this.setScriptBug) t.text = e; else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            this.addText(t, e)
        }
    }, getScript: function (t) {
        return ("" === t.text ? t.innerHTML : t.text).replace(/^\s+/, "").replace(/\s+$/, "")
    }, Cookie: {
        prefix: "mjx", expires: 365, Set: function (t, e) {
            var i = [];
            if (e) for (var n in e) e.hasOwnProperty(n) && i.push(n + ":" + e[n].toString().replace(/&/g, "&&"));
            var a = this.prefix + "." + t + "=" + escape(i.join("&;"));
            if (this.expires) {
                var s = new Date;
                s.setDate(s.getDate() + this.expires), a += "; expires=" + s.toGMTString()
            }
            try {
                document.cookie = a + "; path=/"
            } catch (t) {
            }
        }, Get: function (t, e) {
            e || (e = {});
            var i, n = new RegExp("(?:^|;\\s*)" + this.prefix + "\\." + t + "=([^;]*)(?:;|$)");
            try {
                i = n.exec(document.cookie)
            } catch (t) {
            }
            if (i && "" !== i[1]) for (var a = unescape(i[1]).split("&;"), s = 0, r = a.length; s < r; s++) {
                var o = (i = a[s].match(/([^:]+):(.*)/))[2].replace(/&&/g, "&");
                "true" === o ? o = !0 : "false" === o ? o = !1 : o.match(/^-?(\d+(\.\d+)?|\.\d+)$/) && (o = parseFloat(o)), e[i[1]] = o
            }
            return e
        }
    }
}, MathJax.Localization = {
    locale: "en",
    directory: "[MathJax]/localization",
    strings: {
        ar: {menuTitle: "العربية"},
        ast: {menuTitle: "asturianu"},
        bg: {menuTitle: "български"},
        bcc: {menuTitle: "بلوچی"},
        br: {menuTitle: "brezhoneg"},
        ca: {menuTitle: "català"},
        cdo: {menuTitle: "Mìng-dĕ̤ng-ngṳ̄"},
        cs: {menuTitle: "čeština"},
        da: {menuTitle: "dansk"},
        de: {menuTitle: "Deutsch"},
        diq: {menuTitle: "Zazaki"},
        en: {menuTitle: "English", isLoaded: !0},
        eo: {menuTitle: "Esperanto"},
        es: {menuTitle: "español"},
        fa: {menuTitle: "فارسی"},
        fi: {menuTitle: "suomi"},
        fr: {menuTitle: "français"},
        gl: {menuTitle: "galego"},
        he: {menuTitle: "עברית"},
        ia: {menuTitle: "interlingua"},
        it: {menuTitle: "italiano"},
        ja: {menuTitle: "日本語"},
        kn: {menuTitle: "ಕನ್ನಡ"},
        ko: {menuTitle: "한국어"},
        lb: {menuTitle: "Lëtzebuergesch"},
        lki: {menuTitle: "لەکی"},
        lt: {menuTitle: "lietuvių"},
        mk: {menuTitle: "македонски"},
        nl: {menuTitle: "Nederlands"},
        oc: {menuTitle: "occitan"},
        pl: {menuTitle: "polski"},
        pt: {menuTitle: "português"},
        "pt-br": {menuTitle: "português do Brasil"},
        ru: {menuTitle: "русский"},
        sco: {menuTitle: "Scots"},
        scn: {menuTitle: "sicilianu"},
        sk: {menuTitle: "slovenčina"},
        sl: {menuTitle: "slovenščina"},
        sv: {menuTitle: "svenska"},
        th: {menuTitle: "ไทย"},
        tr: {menuTitle: "Türkçe"},
        uk: {menuTitle: "українська"},
        vi: {menuTitle: "Tiếng Việt"},
        "zh-hans": {menuTitle: "中文（简体）"},
        "zh-hant": {menuTitle: "汉语"}
    },
    pattern: /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g,
    SPLIT: 3 === "axb".split(/(x)/).length ? function (t, e) {
        return t.split(e)
    } : function (t, e) {
        var i, n = [], a = 0;
        for (e.lastIndex = 0; i = e.exec(t);) n.push(t.substr(a, i.index - a)), n.push.apply(n, i.slice(1)), a = i.index + i[0].length;
        return n.push(t.substr(a)), n
    },
    _: function (t, e) {
        return MathJax.Object.isArray(e) ? this.processSnippet(t, e) : this.processString(this.lookupPhrase(t, e), [].slice.call(arguments, 2))
    },
    processString: function (t, e, i) {
        var n, a, s = MathJax.Object.isArray;
        for (n = 0, a = e.length; n < a; n++) i && s(e[n]) && (e[n] = this.processSnippet(i, e[n]));
        var r = this.SPLIT(t, this.pattern);
        for (n = 1, a = r.length; n < a; n += 2) {
            var o = r[n].charAt(0);
            if (o >= "0" && o <= "9") r[n] = e[r[n] - 1], "number" == typeof r[n] && (r[n] = this.number(r[n])); else if ("{" === o) if ((o = r[n].substr(1)) >= "0" && o <= "9") r[n] = e[r[n].substr(1, r[n].length - 2) - 1], "number" == typeof r[n] && (r[n] = this.number(r[n])); else {
                var h = r[n].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/);
                if (h) if ("plural" === h[1]) {
                    var l = e[h[2] - 1];
                    if (void 0 === l) r[n] = "???"; else {
                        l = this.plural(l) - 1;
                        var u = h[3].replace(/(^|[^%])(%%)*%\|/g, "$1$2%").split(/\|/);
                        l >= 0 && l < u.length ? r[n] = this.processString(u[l].replace(/\uEFEF/g, "|"), e, i) : r[n] = "???"
                    }
                } else r[n] = "%" + r[n]
            }
            null == r[n] && (r[n] = "???")
        }
        if (!i) return r.join("");
        var c = [], p = "";
        for (n = 0; n < a; n++) p += r[n], ++n < a && (s(r[n]) ? (c.push(p), c = c.concat(r[n]), p = "") : p += r[n]);
        return "" !== p && c.push(p), c
    },
    processSnippet: function (t, e) {
        for (var i = [], n = 0, a = e.length; n < a; n++) if (MathJax.Object.isArray(e[n])) {
            var s = e[n];
            if ("string" == typeof s[1]) {
                var r = s[0];
                MathJax.Object.isArray(r) || (r = [t, r]);
                var o = this.lookupPhrase(r, s[1]);
                i = i.concat(this.processMarkdown(o, s.slice(2), t))
            } else MathJax.Object.isArray(s[1]) ? i = i.concat(this.processSnippet.apply(this, s)) : s.length >= 3 ? i.push([s[0], s[1], this.processSnippet(t, s[2])]) : i.push(e[n])
        } else i.push(e[n]);
        return i
    },
    markdownPattern: /(%.)|(\*{1,3})((?:%.|.)+?)\2|(`+)((?:%.|.)+?)\4|\[((?:%.|.)+?)\]\(([^\s\)]+)\)/,
    processMarkdown: function (t, e, i) {
        for (var n, a = [], s = t.split(this.markdownPattern), r = s[0], o = 1, h = s.length; o < h; o += 8) s[o + 1] ? (n = this.processString(s[o + 2], e, i), MathJax.Object.isArray(n) || (n = [n]), n = [["b", "i", "i"][s[o + 1].length - 1], {}, n], 3 === s[o + 1].length && (n = ["b", {}, n])) : s[o + 3] ? (n = this.processString(s[o + 4].replace(/^\s/, "").replace(/\s$/, ""), e, i), MathJax.Object.isArray(n) || (n = [n]), n = ["code", {}, n]) : s[o + 5] ? (n = this.processString(s[o + 5], e, i), MathJax.Object.isArray(n) || (n = [n]), n = ["a", {
            href: this.processString(s[o + 6], e),
            target: "_blank"
        }, n]) : (r += s[o], n = null), n && ((a = this.concatString(a, r, e, i)).push(n), r = ""), "" !== s[o + 7] && (r += s[o + 7]);
        return a = this.concatString(a, r, e, i)
    },
    concatString: function (t, e, i, n) {
        return "" != e && (e = this.processString(e, i, n), MathJax.Object.isArray(e) || (e = [e]), t = t.concat(e)), t
    },
    lookupPhrase: function (t, e, i) {
        i || (i = "_"), MathJax.Object.isArray(t) && (i = t[0] || "_", t = t[1] || "");
        var n = this.loadDomain(i);
        n && MathJax.Hub.RestartAfter(n);
        var a = this.strings[this.locale];
        if (a && a.domains && i in a.domains) {
            var s = a.domains[i];
            s.strings && t in s.strings && (e = s.strings[t])
        }
        return e
    },
    loadFile: function (t, e, i) {
        (i = MathJax.Callback(i), (t = e.file || t).match(/\.js$/) || (t += ".js"), t.match(/^([a-z]+:|\[MathJax\])/)) || (t = (this.strings[this.locale].directory || this.directory + "/" + this.locale || "[MathJax]/localization/" + this.locale) + "/" + t);
        var n = MathJax.Ajax.Require(t, function () {
            return e.isLoaded = !0, i()
        });
        return n.called ? null : n
    },
    loadDomain: function (t, e) {
        var i, n = this.strings[this.locale];
        if (n) {
            if (!n.isLoaded && (i = this.loadFile(this.locale, n))) return MathJax.Callback.Queue(i, ["loadDomain", this, t]).Push(e || {});
            if (n.domains && t in n.domains) {
                var a = n.domains[t];
                if (!a.isLoaded && (i = this.loadFile(t, a))) return MathJax.Callback.Queue(i).Push(e)
            }
        }
        return MathJax.Callback(e)()
    },
    Try: function (t) {
        (t = MathJax.Callback(t)).autoReset = !0;
        try {
            t()
        } catch (e) {
            if (!e.restart) throw e;
            MathJax.Callback.After(["Try", this, t], e.restart)
        }
    },
    resetLocale: function (t) {
        if (t) {
            for (t = t.toLowerCase(); !this.strings[t];) {
                var e = t.lastIndexOf("-");
                if (-1 === e) return;
                t = t.substring(0, e)
            }
            var i = this.strings[t].remap;
            this.locale = i || t, MathJax.Callback.Signal("Hub").Post(["Locale Reset", this.locale])
        }
    },
    setLocale: function (t) {
        this.resetLocale(t), MathJax.Menu && this.loadDomain("MathMenu")
    },
    addTranslation: function (t, e, i) {
        var n = this.strings[t], a = !1;
        n || (n = this.strings[t] = {}, a = !0), n.domains || (n.domains = {}), e && (n.domains[e] || (n.domains[e] = {}), n = n.domains[e]), MathJax.Hub.Insert(n, i), a && MathJax.Menu.menu && MathJax.Menu.CreateLocaleMenu()
    },
    setCSS: function (t) {
        var e = this.strings[this.locale];
        return e && (e.fontFamily && (t.style.fontFamily = e.fontFamily), e.fontDirection && (t.style.direction = e.fontDirection, "rtl" === e.fontDirection && (t.style.textAlign = "right"))), t
    },
    fontFamily: function () {
        var t = this.strings[this.locale];
        return t ? t.fontFamily : null
    },
    fontDirection: function () {
        var t = this.strings[this.locale];
        return t ? t.fontDirection : null
    },
    plural: function (t) {
        var e = this.strings[this.locale];
        return e && e.plural ? e.plural(t) : 1 == t ? 1 : 2
    },
    number: function (t) {
        var e = this.strings[this.locale];
        return e && e.number ? e.number(t) : t
    }
}, MathJax.Message = {
    ready: !1,
    log: [{}],
    current: null,
    textNodeBug: "Apple Computer, Inc." === navigator.vendor && void 0 === navigator.vendorSub || window.hasOwnProperty && window.hasOwnProperty("konqueror"),
    styles: {
        "#MathJax_Message": {
            position: "fixed",
            left: "1px",
            bottom: "2px",
            "background-color": "#E6E6E6",
            border: "1px solid #959595",
            margin: "0px",
            padding: "2px 8px",
            "z-index": "102",
            color: "black",
            "font-size": "80%",
            width: "auto",
            "white-space": "nowrap"
        },
        "#MathJax_MSIE_Frame": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "0px",
            "z-index": 101,
            border: "0px",
            margin: "0px",
            padding: "0px"
        }
    },
    browsers: {
        MSIE: function (t) {
            MathJax.Message.msieFixedPositionBug = (document.documentMode || 0) < 7, MathJax.Message.msieFixedPositionBug && (MathJax.Hub.config.styles["#MathJax_Message"].position = "absolute"), MathJax.Message.quirks = "BackCompat" === document.compatMode
        }, Chrome: function (t) {
            MathJax.Hub.config.styles["#MathJax_Message"].bottom = "1.5em", MathJax.Hub.config.styles["#MathJax_Message"].left = "1em"
        }
    },
    Init: function (t) {
        if (t && (this.ready = !0), !document.body || !this.ready) return !1;
        if (this.div && null == this.div.parentNode && (this.div = document.getElementById("MathJax_Message"), this.text = this.div ? this.div.firstChild : null), !this.div) {
            var e = document.body;
            this.msieFixedPositionBug && window.attachEvent && ((e = this.frame = this.addDiv(document.body)).removeAttribute("id"), e.style.position = "absolute", e.style.border = e.style.margin = e.style.padding = "0px", e.style.zIndex = "101", e.style.height = "0px", (e = this.addDiv(e)).id = "MathJax_MSIE_Frame", window.attachEvent("onscroll", this.MoveFrame), window.attachEvent("onresize", this.MoveFrame), this.MoveFrame()), this.div = this.addDiv(e), this.div.style.display = "none"
        }
        return this.text || (this.text = this.div.appendChild(document.createTextNode(""))), !0
    },
    addDiv: function (t) {
        var e = document.createElement("div");
        return e.id = "MathJax_Message", t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e), e
    },
    MoveFrame: function () {
        var t = MathJax.Message.quirks ? document.body : document.documentElement, e = MathJax.Message.frame;
        e.style.left = t.scrollLeft + "px", e.style.top = t.scrollTop + "px", e.style.width = t.clientWidth + "px", (e = e.firstChild).style.height = t.clientHeight + "px"
    },
    localize: function (t) {
        return MathJax.Localization._(t, t)
    },
    filterText: function (t, e, i) {
        return "simple" === MathJax.Hub.config.messageStyle && ("LoadFile" === i ? (this.loading || (this.loading = this.localize("Loading") + " "), t = this.loading, this.loading += ".") : "ProcessMath" === i ? (this.processing || (this.processing = this.localize("Processing") + " "), t = this.processing, this.processing += ".") : "TypesetMath" === i && (this.typesetting || (this.typesetting = this.localize("Typesetting") + " "), t = this.typesetting, this.typesetting += ".")), t
    },
    clearCounts: function () {
        delete this.loading, delete this.processing, delete this.typesetting
    },
    Set: function (t, e, i) {
        null == e && (e = this.log.length, this.log[e] = {});
        var n = "";
        if (MathJax.Object.isArray(t)) {
            n = t[0], MathJax.Object.isArray(n) && (n = n[1]);
            try {
                t = MathJax.Localization._.apply(MathJax.Localization, t)
            } catch (n) {
                if (!n.restart) throw n;
                if (!n.restart.called) return null == this.log[e].restarted && (this.log[e].restarted = 0), this.log[e].restarted++, delete this.log[e].cleared, MathJax.Callback.After(["Set", this, t, e, i], n.restart), e
            }
        }
        return this.timer && (clearTimeout(this.timer), delete this.timer), this.log[e].text = t, this.log[e].filteredText = t = this.filterText(t, e, n), void 0 === this.log[e].next && (this.log[e].next = this.current, null != this.current && (this.log[this.current].prev = e), this.current = e), this.current === e && "none" !== MathJax.Hub.config.messageStyle && (this.Init() ? (this.textNodeBug ? this.div.innerHTML = t : this.text.nodeValue = t, this.div.style.display = "", this.status && (window.status = "", delete this.status)) : (window.status = t, this.status = !0)), this.log[e].restarted && (this.log[e].cleared && (i = 0), 0 == --this.log[e].restarted && delete this.log[e].cleared), i ? setTimeout(MathJax.Callback(["Clear", this, e]), i) : 0 == i && this.Clear(e, 0), e
    },
    Clear: function (t, e) {
        null != this.log[t].prev && (this.log[this.log[t].prev].next = this.log[t].next), null != this.log[t].next && (this.log[this.log[t].next].prev = this.log[t].prev), this.current === t && (this.current = this.log[t].next, this.text ? (null == this.div.parentNode && this.Init(), null == this.current ? (this.timer && (clearTimeout(this.timer), delete this.timer), null == e && (e = 600), 0 === e ? this.Remove() : this.timer = setTimeout(MathJax.Callback(["Remove", this]), e)) : "none" !== MathJax.Hub.config.messageStyle && (this.textNodeBug ? this.div.innerHTML = this.log[this.current].filteredText : this.text.nodeValue = this.log[this.current].filteredText), this.status && (window.status = "", delete this.status)) : this.status && (window.status = null == this.current ? "" : this.log[this.current].text)), delete this.log[t].next, delete this.log[t].prev, delete this.log[t].filteredText, this.log[t].restarted && (this.log[t].cleared = !0)
    },
    Remove: function () {
        this.text.nodeValue = "", this.div.style.display = "none"
    },
    File: function (t) {
        return this.Set(["LoadFile", "Loading %1", t], null, null)
    },
    Log: function () {
        for (var t = [], e = 1, i = this.log.length; e < i; e++) t[e] = this.log[e].text;
        return t.join("\n")
    }
}, MathJax.Hub = {
    config: {
        root: "",
        config: [],
        styleSheets: [],
        styles: {".MathJax_Preview": {color: "#888"}},
        jax: [],
        extensions: [],
        preJax: null,
        postJax: null,
        displayAlign: "center",
        displayIndent: "0",
        preRemoveClass: "MathJax_Preview",
        showProcessingMessages: !0,
        messageStyle: "normal",
        delayStartupUntil: "none",
        skipStartupTypeset: !1,
        elements: [],
        positionToHash: !0,
        showMathMenu: !0,
        showMathMenuMSIE: !0,
        menuSettings: {
            zoom: "None",
            CTRL: !1,
            ALT: !1,
            CMD: !1,
            Shift: !1,
            discoverable: !1,
            zscale: "200%",
            renderer: null,
            font: "Auto",
            context: "MathJax",
            locale: null,
            mpContext: !1,
            mpMouse: !1,
            texHints: !0,
            FastPreview: null,
            assistiveMML: null,
            inTabOrder: !0,
            semantics: !1
        },
        errorSettings: {
            message: ["[", ["MathProcessingError", "Math Processing Error"], "]"],
            style: {color: "#CC0000", "font-style": "italic"}
        },
        ignoreMMLattributes: {}
    },
    preProcessors: MathJax.Callback.Hooks(!0),
    inputJax: {},
    outputJax: {order: {}},
    processSectionDelay: 50,
    processUpdateTime: 250,
    processUpdateDelay: 10,
    signal: MathJax.Callback.Signal("Hub"),
    Config: function (t) {
        this.Insert(this.config, t), this.config.Augment && this.Augment(this.config.Augment)
    },
    CombineConfig: function (t, e) {
        for (var i, n, a = this.config, s = 0, r = (t = t.split(/\./)).length; s < r; s++) a[i = t[s]] || (a[i] = {}), n = a, a = a[i];
        return n[i] = a = this.Insert(e, a), a
    },
    Register: {
        PreProcessor: function () {
            return MathJax.Hub.preProcessors.Add.apply(MathJax.Hub.preProcessors, arguments)
        }, MessageHook: function () {
            return MathJax.Hub.signal.MessageHook.apply(MathJax.Hub.signal, arguments)
        }, StartupHook: function () {
            return MathJax.Hub.Startup.signal.MessageHook.apply(MathJax.Hub.Startup.signal, arguments)
        }, LoadHook: function () {
            return MathJax.Ajax.LoadHook.apply(MathJax.Ajax, arguments)
        }
    },
    UnRegister: {
        PreProcessor: function (t) {
            MathJax.Hub.preProcessors.Remove(t)
        }, MessageHook: function (t) {
            MathJax.Hub.signal.RemoveHook(t)
        }, StartupHook: function (t) {
            MathJax.Hub.Startup.signal.RemoveHook(t)
        }, LoadHook: function (t) {
            MathJax.Ajax.removeHook(t)
        }
    },
    getAllJax: function (t) {
        for (var e = [], i = this.elementScripts(t), n = 0, a = i.length; n < a; n++) i[n].MathJax && i[n].MathJax.elementJax && e.push(i[n].MathJax.elementJax);
        return e
    },
    getJaxByType: function (t, e) {
        for (var i = [], n = this.elementScripts(e), a = 0, s = n.length; a < s; a++) n[a].MathJax && n[a].MathJax.elementJax && n[a].MathJax.elementJax.mimeType === t && i.push(n[a].MathJax.elementJax);
        return i
    },
    getJaxByInputType: function (t, e) {
        for (var i = [], n = this.elementScripts(e), a = 0, s = n.length; a < s; a++) n[a].MathJax && n[a].MathJax.elementJax && n[a].type && n[a].type.replace(/ *;(.|\s)*/, "") === t && i.push(n[a].MathJax.elementJax);
        return i
    },
    getJaxFor: function (t) {
        if ("string" == typeof t && (t = document.getElementById(t)), t && t.MathJax) return t.MathJax.elementJax;
        if (this.isMathJaxNode(t)) {
            for (t.isMathJax || (t = t.firstChild); t && !t.jaxID;) t = t.parentNode;
            if (t) return MathJax.OutputJax[t.jaxID].getJaxFromMath(t)
        }
        return null
    },
    isJax: function (t) {
        if ("string" == typeof t && (t = document.getElementById(t)), this.isMathJaxNode(t)) return 1;
        if (t && "script" === (t.tagName || "").toLowerCase()) {
            if (t.MathJax) return t.MathJax.state === MathJax.ElementJax.STATE.PROCESSED ? 1 : -1;
            if (t.type && this.inputJax[t.type.replace(/ *;(.|\s)*/, "")]) return -1
        }
        return 0
    },
    isMathJaxNode: function (t) {
        return !!t && (t.isMathJax || "MathJax_MathML" === (t.className || ""))
    },
    setRenderer: function (t, e) {
        if (t) {
            var i = MathJax.OutputJax[t];
            if (i) {
                this.config.menuSettings.renderer = t, null == e && (e = "jax/mml"), i.isUnknown && i.Register(e);
                var n = this.outputJax;
                return n[e] && n[e].length && t !== n[e][0].id ? (n[e].unshift(i), this.signal.Post(["Renderer Selected", t])) : null
            }
            MathJax.OutputJax[t] = MathJax.OutputJax({
                id: "unknown",
                version: "1.0.0",
                isUnknown: !0
            }), this.config.menuSettings.renderer = "";
            var a = "[MathJax]/jax/output/" + t + "/config.js";
            return MathJax.Ajax.Require(a, ["setRenderer", this, t, e])
        }
    },
    Queue: function () {
        return this.queue.Push.apply(this.queue, arguments)
    },
    Typeset: function (t, e) {
        if (!MathJax.isReady) return null;
        var i = this.elementCallback(t, e);
        if (i.count) var n = MathJax.Callback.Queue(["PreProcess", this, i.elements], ["Process", this, i.elements]);
        return n.Push(i.callback)
    },
    PreProcess: function (t, e) {
        var i = this.elementCallback(t, e), n = MathJax.Callback.Queue();
        if (i.count) {
            var a = 1 === i.count ? [i.elements] : i.elements;
            n.Push(["Post", this.signal, ["Begin PreProcess", i.elements]]);
            for (var s = 0, r = a.length; s < r; s++) a[s] && n.Push(["Execute", this.preProcessors, a[s]]);
            n.Push(["Post", this.signal, ["End PreProcess", i.elements]])
        }
        return n.Push(i.callback)
    },
    Process: function (t, e) {
        return this.takeAction("Process", t, e)
    },
    Update: function (t, e) {
        return this.takeAction("Update", t, e)
    },
    Reprocess: function (t, e) {
        return this.takeAction("Reprocess", t, e)
    },
    Rerender: function (t, e) {
        return this.takeAction("Rerender", t, e)
    },
    takeAction: function (t, e, i) {
        var n = this.elementCallback(e, i), a = n.elements, s = MathJax.Callback.Queue(["Clear", this.signal]),
            r = {scripts: [], start: (new Date).getTime(), i: 0, j: 0, jax: {}, jaxIDs: []};
        if (n.count) {
            var o = ["Delay", MathJax.Callback, this.processSectionDelay];
            o[2] || (o = {}), s.Push(["clearCounts", MathJax.Message], ["Post", this.signal, ["Begin " + t, a]], ["Post", this.signal, ["Begin Math", a, t]], ["prepareScripts", this, t, a, r], ["Post", this.signal, ["Begin Math Input", a, t]], ["processInput", this, r], ["Post", this.signal, ["End Math Input", a, t]], o, ["prepareOutput", this, r, "preProcess"], o, ["Post", this.signal, ["Begin Math Output", a, t]], ["processOutput", this, r], ["Post", this.signal, ["End Math Output", a, t]], o, ["prepareOutput", this, r, "postProcess"], o, ["Post", this.signal, ["End Math", a, t]], ["Post", this.signal, ["End " + t, a]], ["clearCounts", MathJax.Message])
        }
        return s.Push(n.callback)
    },
    scriptAction: {
        Process: function (t) {
        }, Update: function (t) {
            var e = t.MathJax.elementJax;
            e && e.needsUpdate() ? (e.Remove(!0), t.MathJax.state = e.STATE.UPDATE) : t.MathJax.state = e.STATE.PROCESSED
        }, Reprocess: function (t) {
            var e = t.MathJax.elementJax;
            e && (e.Remove(!0), t.MathJax.state = e.STATE.UPDATE)
        }, Rerender: function (t) {
            var e = t.MathJax.elementJax;
            e && (e.Remove(!0), t.MathJax.state = e.STATE.OUTPUT)
        }
    },
    prepareScripts: function (t, e, i) {
        if (!arguments.callee.disabled) for (var n = this.elementScripts(e), a = MathJax.ElementJax.STATE, s = 0, r = n.length; s < r; s++) {
            var o = n[s];
            o.type && this.inputJax[o.type.replace(/ *;(.|\n)*/, "")] && (o.MathJax && (o.MathJax.elementJax && o.MathJax.elementJax.hover && MathJax.Extension.MathEvents.Hover.ClearHover(o.MathJax.elementJax), o.MathJax.state !== a.PENDING && this.scriptAction[t](o)), o.MathJax || (o.MathJax = {state: a.PENDING}), o.MathJax.error && delete o.MathJax.error, o.MathJax.state !== a.PROCESSED && i.scripts.push(o))
        }
    },
    checkScriptSiblings: function (t) {
        if (!t.MathJax.checked) {
            var e = this.config, i = t.previousSibling;
            if (i && "#text" === i.nodeName) {
                var n, a, s = t.nextSibling;
                s && "#text" !== s.nodeName && (s = null), e.preJax && ("string" == typeof e.preJax && (e.preJax = new RegExp(e.preJax + "$")), n = i.nodeValue.match(e.preJax)), e.postJax && s && ("string" == typeof e.postJax && (e.postJax = new RegExp("^" + e.postJax)), a = s.nodeValue.match(e.postJax)), !n || e.postJax && !a || (i.nodeValue = i.nodeValue.replace(e.preJax, n.length > 1 ? n[1] : ""), i = null), !a || e.preJax && !n || (s.nodeValue = s.nodeValue.replace(e.postJax, a.length > 1 ? a[1] : "")), i && !i.nodeValue.match(/\S/) && (i = i.previousSibling)
            }
            e.preRemoveClass && i && i.className === e.preRemoveClass && (t.MathJax.preview = i), t.MathJax.checked = 1
        }
    },
    processInput: function (t) {
        var e, i, n, a = MathJax.ElementJax.STATE, s = t.scripts.length;
        try {
            for (; t.i < s;) if (i = t.scripts[t.i]) if ((n = i.previousSibling) && "MathJax_Error" === n.className && n.parentNode.removeChild(n), i.parentNode && i.MathJax && i.MathJax.state !== a.PROCESSED) {
                if (i.MathJax.elementJax && i.MathJax.state !== a.UPDATE) i.MathJax.state === a.OUTPUT && this.saveScript(i.MathJax.elementJax, t, i, a); else {
                    this.checkScriptSiblings(i);
                    var r = i.type.replace(/ *;(.|\s)*/, ""), o = this.inputJax[r];
                    if (this.signal.Post("Begin Attach MathJax"), "function" == typeof (e = o.Process(i, t))) {
                        if (e.called) continue;
                        this.RestartAfter(e)
                    }
                    e = e.Attach(i, o.id), this.signal.Post(["End Attach MathJax", i]), this.saveScript(e, t, i, a), this.postInputHooks.Execute(e, o.id, i)
                }
                t.i++;
                var h = (new Date).getTime();
                h - t.start > this.processUpdateTime && t.i < t.scripts.length && (t.start = h, this.RestartAfter(MathJax.Callback.Delay(1)))
            } else t.i++; else t.i++
        } catch (e) {
            return this.processError(e, t, "Input")
        }
        return t.scripts.length && this.config.showProcessingMessages && MathJax.Message.Set(["ProcessMath", "Processing math: %1%%", 100], 0), t.start = (new Date).getTime(), t.i = t.j = 0, null
    },
    postInputHooks: MathJax.Callback.Hooks(!0),
    saveScript: function (t, e, i, n) {
        if (!this.outputJax[t.mimeType]) throw i.MathJax.state = n.UPDATE, Error("No output jax registered for " + t.mimeType);
        t.outputJax = this.outputJax[t.mimeType][0].id, e.jax[t.outputJax] || (0 === e.jaxIDs.length ? e.jax[t.outputJax] = e.scripts : (1 === e.jaxIDs.length && (e.jax[e.jaxIDs[0]] = e.scripts.slice(0, e.i)), e.jax[t.outputJax] = []), e.jaxIDs.push(t.outputJax)), e.jaxIDs.length > 1 && e.jax[t.outputJax].push(i), i.MathJax.state = n.OUTPUT
    },
    prepareOutput: function (t, e) {
        for (; t.j < t.jaxIDs.length;) {
            var i = t.jaxIDs[t.j], n = MathJax.OutputJax[i];
            if (n[e]) try {
                var a = n[e](t);
                if ("function" == typeof a) {
                    if (a.called) continue;
                    this.RestartAfter(a)
                }
            } catch (n) {
                return n.restart || (MathJax.Message.Set(["PrepError", "Error preparing %1 output (%2)", i, e], null, 600), MathJax.Hub.lastPrepError = n, t.j++), MathJax.Callback.After(["prepareOutput", this, t, e], n.restart)
            }
            t.j++
        }
        return null
    },
    processOutput: function (t) {
        var e, i = MathJax.ElementJax.STATE, n = t.scripts.length;
        try {
            for (; t.i < n;) if ((e = t.scripts[t.i]) && e.parentNode && e.MathJax && !e.MathJax.error) {
                var a = e.MathJax.elementJax;
                if (a) {
                    !1 !== MathJax.OutputJax[a.outputJax].Process(e, t) && (e.MathJax.state = i.PROCESSED, e.MathJax.preview && (e.MathJax.preview.innerHTML = "", e.MathJax.preview.style.display = "none"), this.signal.Post(["New Math", a.inputID])), t.i++;
                    var s = (new Date).getTime();
                    s - t.start > this.processUpdateTime && t.i < t.scripts.length && (t.start = s, this.RestartAfter(MathJax.Callback.Delay(this.processUpdateDelay)))
                } else t.i++
            } else t.i++
        } catch (e) {
            return this.processError(e, t, "Output")
        }
        return t.scripts.length && this.config.showProcessingMessages && (MathJax.Message.Set(["TypesetMath", "Typesetting math: %1%%", 100], 0), MathJax.Message.Clear(0)), t.i = t.j = 0, null
    },
    processMessage: function (t, e) {
        var i = Math.floor(t.i / t.scripts.length * 100),
            n = "Output" === e ? ["TypesetMath", "Typesetting math: %1%%"] : ["ProcessMath", "Processing math: %1%%"];
        this.config.showProcessingMessages && MathJax.Message.Set(n.concat(i), 0)
    },
    processError: function (t, e, i) {
        if (!t.restart) {
            if (!this.config.errorSettings.message) throw t;
            this.formatError(e.scripts[e.i], t), e.i++
        }
        return this.processMessage(e, i), MathJax.Callback.After(["process" + i, this, e], t.restart)
    },
    formatError: function (t, e) {
        var i = function (t, e, i, n) {
            return MathJax.Localization._(t, e, i, n)
        }, n = i("ErrorMessage", "Error: %1", e.message) + "\n";
        (e.sourceURL || e.fileName) && (n += "\n" + i("ErrorFile", "file: %1", e.sourceURL || e.fileName)), (e.line || e.lineNumber) && (n += "\n" + i("ErrorLine", "line: %1", e.line || e.lineNumber)), n += "\n\n" + i("ErrorTips", "Debugging tips: use %1, inspect %2 in the browser console", "'unpacked/MathJax.js'", "'MathJax.Hub.lastError'"), t.MathJax.error = MathJax.OutputJax.Error.Jax(n, t), t.MathJax.elementJax && (t.MathJax.error.inputID = t.MathJax.elementJax.inputID);
        var a = this.config.errorSettings, s = i(a.messageId, a.message), r = MathJax.HTML.Element("span", {
            className: "MathJax_Error",
            jaxID: "Error",
            isMathJax: !0,
            id: t.MathJax.error.inputID + "-Frame"
        }, [["span", null, s]]);
        MathJax.Ajax.Require("[MathJax]/extensions/MathEvents.js", function () {
            var e = MathJax.Extension.MathEvents.Event, i = MathJax.Hub;
            r.oncontextmenu = e.Menu, r.onmousedown = e.Mousedown, r.onkeydown = e.Keydown, r.tabIndex = i.getTabOrder(i.getJaxFor(t))
        });
        var o = document.getElementById(r.id);
        o && o.parentNode.removeChild(o), t.parentNode && t.parentNode.insertBefore(r, t), t.MathJax.preview && (t.MathJax.preview.innerHTML = "", t.MathJax.preview.style.display = "none"), this.lastError = e, this.signal.Post(["Math Processing Error", t, e])
    },
    RestartAfter: function (t) {
        throw this.Insert(Error("restart"), {restart: MathJax.Callback(t)})
    },
    elementCallback: function (t, e) {
        if (null == e && (MathJax.Object.isArray(t) || "function" == typeof t)) try {
            MathJax.Callback(t), e = t, t = null
        } catch (t) {
        }
        null == t && (t = this.config.elements || []), this.isHTMLCollection(t) && (t = this.HTMLCollection2Array(t)), MathJax.Object.isArray(t) || (t = [t]);
        for (var i = 0, n = (t = [].concat(t)).length; i < n; i++) "string" == typeof t[i] && (t[i] = document.getElementById(t[i]));
        return document.body || (document.body = document.getElementsByTagName("body")[0]), 0 == t.length && t.push(document.body), e || (e = {}), {
            count: t.length,
            elements: 1 === t.length ? t[0] : t,
            callback: e
        }
    },
    elementScripts: function (t) {
        var e = [];
        if (MathJax.Object.isArray(t) || this.isHTMLCollection(t)) {
            for (var i = 0, n = t.length; i < n; i++) {
                for (var a = 0, s = 0; s < i && !a; s++) a = t[s].contains(t[i]);
                a || e.push.apply(e, this.elementScripts(t[i]))
            }
            return e
        }
        return "string" == typeof t && (t = document.getElementById(t)), document.body || (document.body = document.getElementsByTagName("body")[0]), null == t && (t = document.body), null != t.tagName && "script" === t.tagName.toLowerCase() ? [t] : (e = t.getElementsByTagName("script"), this.msieHTMLCollectionBug && (e = this.HTMLCollection2Array(e)), e)
    },
    isHTMLCollection: function (t) {
        return "HTMLCollection" in window && "object" == typeof t && t instanceof HTMLCollection
    },
    HTMLCollection2Array: function (t) {
        if (!this.msieHTMLCollectionBug) return [].slice.call(t);
        for (var e = [], i = 0, n = t.length; i < n; i++) e[i] = t[i];
        return e
    },
    Insert: function (t, e) {
        for (var i in e) e.hasOwnProperty(i) && ("object" != typeof e[i] || MathJax.Object.isArray(e[i]) || "object" != typeof t[i] && "function" != typeof t[i] ? t[i] = e[i] : this.Insert(t[i], e[i]));
        return t
    },
    getTabOrder: function (t) {
        return this.config.menuSettings.inTabOrder ? 0 : -1
    },
    SplitList: "trim" in String.prototype ? function (t) {
        return t.trim().split(/\s+/)
    } : function (t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "").split(/\s+/)
    }
}, MathJax.Hub.Insert(MathJax.Hub.config.styles, MathJax.Message.styles), MathJax.Hub.Insert(MathJax.Hub.config.styles, {".MathJax_Error": MathJax.Hub.config.errorSettings.style}), MathJax.Extension = {}, MathJax.Hub.Configured = MathJax.Callback({}), MathJax.Hub.Startup = {
    script: "",
    queue: MathJax.Callback.Queue(),
    signal: MathJax.Callback.Signal("Startup"),
    params: {},
    Config: function () {
        if (this.queue.Push(["Post", this.signal, "Begin Config"]), MathJax.AuthorConfig && MathJax.AuthorConfig.root && (MathJax.Ajax.config.root = MathJax.AuthorConfig.root), this.params.locale && (MathJax.Localization.resetLocale(this.params.locale), MathJax.Hub.config.menuSettings.locale = this.params.locale), this.params.config) for (var t = this.params.config.split(/,/), e = 0, i = t.length; e < i; e++) t[e].match(/\.js$/) || (t[e] += ".js"), this.queue.Push(["Require", MathJax.Ajax, this.URL("config", t[e])]);
        this.queue.Push(["Config", MathJax.Hub, MathJax.AuthorConfig]), this.script.match(/\S/) && this.queue.Push(this.script + ";\n1;"), this.queue.Push(["ConfigDelay", this], ["ConfigBlocks", this], [function (t) {
            return t.loadArray(MathJax.Hub.config.config, "config", null, !0)
        }, this], ["Post", this.signal, "End Config"])
    },
    ConfigDelay: function () {
        var t = this.params.delayStartupUntil || MathJax.Hub.config.delayStartupUntil;
        return "onload" === t ? this.onload : "configured" === t ? MathJax.Hub.Configured : t
    },
    ConfigBlocks: function () {
        for (var t = document.getElementsByTagName("script"), e = MathJax.Callback.Queue(), i = 0, n = t.length; i < n; i++) {
            var a = String(t[i].type).replace(/ /g, "");
            a.match(/^text\/x-mathjax-config(;.*)?$/) && !a.match(/;executed=true/) && (t[i].type += ";executed=true", e.Push(t[i].innerHTML + ";\n1;"))
        }
        return e.Push(function () {
            MathJax.Ajax.config.root = MathJax.Hub.config.root
        })
    },
    Cookie: function () {
        return this.queue.Push(["Post", this.signal, "Begin Cookie"], ["Get", MathJax.HTML.Cookie, "menu", MathJax.Hub.config.menuSettings], [function (t) {
            var e = t.menuSettings;
            e.locale && MathJax.Localization.resetLocale(e.locale);
            var i = t.menuSettings.renderer, n = t.jax;
            if (i) {
                var a = "output/" + i;
                n.sort();
                for (var s = 0, r = n.length; s < r && "output/" !== n[s].substr(0, 7); s++) ;
                if (s == r - 1) n.pop(); else for (; s < r;) {
                    if (n[s] === a) {
                        n.splice(s, 1);
                        break
                    }
                    s++
                }
                n.unshift(a)
            }
            null != e.CHTMLpreview && (null == e.FastPreview && (e.FastPreview = e.CHTMLpreview), delete e.CHTMLpreview), e.FastPreview && !MathJax.Extension["fast-preview"] && MathJax.Hub.config.extensions.push("fast-preview.js"), t.menuSettings.assistiveMML && !MathJax.Extension.AssistiveMML && MathJax.Hub.config.extensions.push("AssistiveMML.js")
        }, MathJax.Hub.config], ["Post", this.signal, "End Cookie"])
    },
    Styles: function () {
        return this.queue.Push(["Post", this.signal, "Begin Styles"], ["loadArray", this, MathJax.Hub.config.styleSheets, "config"], ["Styles", MathJax.Ajax, MathJax.Hub.config.styles], ["Post", this.signal, "End Styles"])
    },
    Jax: function () {
        for (var t = MathJax.Hub.config, e = MathJax.Hub.outputJax, i = 0, n = t.jax.length, a = 0; i < n; i++) {
            var s = t.jax[i].substr(7);
            "output/" === t.jax[i].substr(0, 7) && null == e.order[s] && (e.order[s] = a, a++)
        }
        return MathJax.Callback.Queue().Push(["Post", this.signal, "Begin Jax"], ["loadArray", this, t.jax, "jax", "config.js"], ["Post", this.signal, "End Jax"])
    },
    Extensions: function () {
        return MathJax.Callback.Queue().Push(["Post", this.signal, "Begin Extensions"], ["loadArray", this, MathJax.Hub.config.extensions, "extensions"], ["Post", this.signal, "End Extensions"])
    },
    Message: function () {
        MathJax.Message.Init(!0)
    },
    Menu: function () {
        var t, e = MathJax.Hub.config.menuSettings, i = MathJax.Hub.outputJax;
        for (var n in i) if (i.hasOwnProperty(n) && i[n].length) {
            t = i[n];
            break
        }
        t && t.length && (e.renderer && e.renderer !== t[0].id && t.unshift(MathJax.OutputJax[e.renderer]), e.renderer = t[0].id)
    },
    Hash: function () {
        if (MathJax.Hub.config.positionToHash && document.location.hash && document.body && document.body.scrollIntoView) {
            var t = decodeURIComponent(document.location.hash.substr(1)), e = document.getElementById(t);
            if (!e) for (var i = document.getElementsByTagName("a"), n = 0, a = i.length; n < a; n++) if (i[n].name === t) {
                e = i[n];
                break
            }
            if (e) {
                for (; !e.scrollIntoView;) e = e.parentNode;
                (e = this.HashCheck(e)) && e.scrollIntoView && setTimeout(function () {
                    e.scrollIntoView(!0)
                }, 1)
            }
        }
    },
    HashCheck: function (t) {
        var e = MathJax.Hub.getJaxFor(t);
        return e && MathJax.OutputJax[e.outputJax].hashCheck && (t = MathJax.OutputJax[e.outputJax].hashCheck(t)), t
    },
    MenuZoom: function () {
        MathJax.Hub.config.showMathMenu && (MathJax.Extension.MathMenu ? setTimeout(MathJax.Callback(["loadDomain", MathJax.Localization, "MathMenu"]), 1e3) : setTimeout(function () {
            MathJax.Callback.Queue(["Require", MathJax.Ajax, "[MathJax]/extensions/MathMenu.js", {}], ["loadDomain", MathJax.Localization, "MathMenu"])
        }, 1e3), MathJax.Extension.MathZoom || setTimeout(MathJax.Callback(["Require", MathJax.Ajax, "[MathJax]/extensions/MathZoom.js", {}]), 2e3))
    },
    onLoad: function () {
        var t = this.onload = MathJax.Callback(function () {
            MathJax.Hub.Startup.signal.Post("onLoad")
        });
        if (document.body && document.readyState) if (MathJax.Hub.Browser.isMSIE) {
            if ("complete" === document.readyState) return [t]
        } else if ("loading" !== document.readyState) return [t];
        return window.addEventListener ? (window.addEventListener("load", t, !1), this.params.noDOMContentEvent || window.addEventListener("DOMContentLoaded", t, !1)) : window.attachEvent ? window.attachEvent("onload", t) : window.onload = t, t
    },
    Typeset: function (t, e) {
        return MathJax.Hub.config.skipStartupTypeset ? function () {
        } : this.queue.Push(["Post", this.signal, "Begin Typeset"], ["Typeset", MathJax.Hub, t, e], ["Post", this.signal, "End Typeset"])
    },
    URL: function (t, e) {
        return e.match(/^([a-z]+:\/\/|\[|\/)/) || (e = "[MathJax]/" + t + "/" + e), e
    },
    loadArray: function (t, e, i, n) {
        if (t && (MathJax.Object.isArray(t) || (t = [t]), t.length)) {
            for (var a, s = MathJax.Callback.Queue(), r = {}, o = 0, h = t.length; o < h; o++) a = this.URL(e, t[o]), i && (a += "/" + i), n ? s.Push(["Require", MathJax.Ajax, a, r]) : s.Push(MathJax.Ajax.Require(a, r));
            return s.Push({})
        }
        return null
    }
}, function (t) {
    var e = window.MathJax, i = "[MathJax]", n = e.Hub, a = e.Ajax, s = e.Callback, r = MathJax.Object.Subclass({
        JAXFILE: "jax.js", require: null, config: {}, Init: function (t, e) {
            return 0 === arguments.length ? this : this.constructor.Subclass(t, e)()
        }, Augment: function (t, e) {
            var i = this.constructor, a = {};
            if (null != t) {
                for (var s in t) t.hasOwnProperty(s) && ("function" == typeof t[s] ? i.protoFunction(s, t[s]) : a[s] = t[s]);
                t.toString !== i.prototype.toString && t.toString !== {}.toString && i.protoFunction("toString", t.toString)
            }
            return n.Insert(i.prototype, a), i.Augment(null, e), this
        }, Translate: function (t, e) {
            throw Error(this.directory + "/" + this.JAXFILE + " failed to define the Translate() method")
        }, Register: function (t) {
        }, Config: function () {
            this.config = n.CombineConfig(this.id, this.config), this.config.Augment && this.Augment(this.config.Augment)
        }, Startup: function () {
        }, loadComplete: function (t) {
            if ("config.js" === t) return a.loadComplete(this.directory + "/" + t);
            var e = s.Queue();
            return e.Push(n.Register.StartupHook("End Config", {}), ["Post", n.Startup.signal, this.id + " Jax Config"], ["Config", this], ["Post", n.Startup.signal, this.id + " Jax Require"], [function (t) {
                return MathJax.Hub.Startup.loadArray(t.require, this.directory)
            }, this], [function (t, e) {
                return MathJax.Hub.Startup.loadArray(t.extensions, "extensions/" + e)
            }, this.config || {}, this.id], ["Post", n.Startup.signal, this.id + " Jax Startup"], ["Startup", this], ["Post", n.Startup.signal, this.id + " Jax Ready"]), this.copyTranslate && e.Push([function (t) {
                t.preProcess = t.preTranslate, t.Process = t.Translate, t.postProcess = t.postTranslate
            }, this.constructor.prototype]), e.Push(["loadComplete", a, this.directory + "/" + t])
        }
    }, {id: "Jax", version: "2.7.5", directory: i + "/jax", extensionDir: i + "/extensions"});
    e.InputJax = r.Subclass({
        elementJax: "mml",
        sourceMenuTitle: ["Original", "Original Form"],
        copyTranslate: !0,
        Process: function (t, i) {
            var r, o = s.Queue(), h = this.elementJax;
            e.Object.isArray(h) || (h = [h]);
            for (var l = 0, u = h.length; l < u; l++) r = e.ElementJax.directory + "/" + h[l] + "/" + this.JAXFILE, this.require ? e.Object.isArray(this.require) || (this.require = [this.require]) : this.require = [], this.require.push(r), o.Push(a.Require(r));
            r = this.directory + "/" + this.JAXFILE;
            var c = o.Push(a.Require(r));
            return c.called || (this.constructor.prototype.Process = function () {
                if (!c.called) return c;
                throw Error(r + " failed to load properly")
            }), (h = n.outputJax["jax/" + h[0]]) && o.Push(a.Require(h[0].directory + "/" + this.JAXFILE)), o.Push({})
        },
        needsUpdate: function (t) {
            var i = t.SourceElement();
            return t.originalText !== e.HTML.getScript(i)
        },
        Register: function (t) {
            n.inputJax || (n.inputJax = {}), n.inputJax[t] = this
        }
    }, {
        id: "InputJax",
        version: "2.7.5",
        directory: r.directory + "/input",
        extensionDir: r.extensionDir
    }), e.OutputJax = r.Subclass({
        copyTranslate: !0, preProcess: function (t) {
            var e, i = this.directory + "/" + this.JAXFILE;
            return this.constructor.prototype.preProcess = function (t) {
                if (!e.called) return e;
                throw Error(i + " failed to load properly")
            }, e = a.Require(i)
        }, Process: function (t) {
            throw Error(this.id + " output jax failed to load properly")
        }, Register: function (t) {
            var i = n.outputJax;
            i[t] || (i[t] = []), i[t].length && (this.id === n.config.menuSettings.renderer || (i.order[this.id] || 0) < (i.order[i[t][0].id] || 0)) ? i[t].unshift(this) : i[t].push(this), this.require ? e.Object.isArray(this.require) || (this.require = [this.require]) : this.require = [], this.require.push(e.ElementJax.directory + "/" + t.split(/\//)[1] + "/" + this.JAXFILE)
        }, Remove: function (t) {
        }
    }, {
        id: "OutputJax",
        version: "2.7.5",
        directory: r.directory + "/output",
        extensionDir: r.extensionDir,
        fontDir: i + (e.isPacked ? "" : "/..") + "/fonts",
        imageDir: i + (e.isPacked ? "" : "/..") + "/images"
    }), e.ElementJax = r.Subclass({
        Init: function (t, e) {
            return this.constructor.Subclass(t, e)
        },
        inputJax: null,
        outputJax: null,
        inputID: null,
        originalText: "",
        mimeType: "",
        sourceMenuTitle: ["MathMLcode", "MathML Code"],
        Text: function (t, i) {
            var a = this.SourceElement();
            return e.HTML.setScript(a, t), a.MathJax.state = this.STATE.UPDATE, n.Update(a, i)
        },
        Reprocess: function (t) {
            var e = this.SourceElement();
            return e.MathJax.state = this.STATE.UPDATE, n.Reprocess(e, t)
        },
        Update: function (t) {
            return this.Rerender(t)
        },
        Rerender: function (t) {
            var e = this.SourceElement();
            return e.MathJax.state = this.STATE.OUTPUT, n.Process(e, t)
        },
        Remove: function (t) {
            this.hover && this.hover.clear(this), e.OutputJax[this.outputJax].Remove(this), t || (n.signal.Post(["Remove Math", this.inputID]), this.Detach())
        },
        needsUpdate: function () {
            return e.InputJax[this.inputJax].needsUpdate(this)
        },
        SourceElement: function () {
            return document.getElementById(this.inputID)
        },
        Attach: function (t, i) {
            var n = t.MathJax.elementJax;
            return t.MathJax.state === this.STATE.UPDATE ? n.Clone(this) : (n = t.MathJax.elementJax = this, t.id ? this.inputID = t.id : (t.id = this.inputID = e.ElementJax.GetID(), this.newID = 1)), n.originalText = e.HTML.getScript(t), n.inputJax = i, n.root && (n.root.inputID = n.inputID), n
        },
        Detach: function () {
            var t = this.SourceElement();
            if (t) {
                try {
                    delete t.MathJax
                } catch (e) {
                    t.MathJax = null
                }
                this.newID && (t.id = "")
            }
        },
        Clone: function (t) {
            var e;
            for (e in this) this.hasOwnProperty(e) && void 0 === t[e] && "newID" !== e && delete this[e];
            for (e in t) t.hasOwnProperty(e) && (void 0 === this[e] || this[e] !== t[e] && "inputID" !== e) && (this[e] = t[e])
        }
    }, {
        id: "ElementJax",
        version: "2.7.5",
        directory: r.directory + "/element",
        extensionDir: r.extensionDir,
        ID: 0,
        STATE: {PENDING: 1, PROCESSED: 2, UPDATE: 3, OUTPUT: 4},
        GetID: function () {
            return this.ID++, "MathJax-Element-" + this.ID
        },
        Subclass: function () {
            var t = r.Subclass.apply(this, arguments);
            return t.loadComplete = this.prototype.loadComplete, t
        }
    }), e.ElementJax.prototype.STATE = e.ElementJax.STATE, e.OutputJax.Error = {
        id: "Error",
        version: "2.7.5",
        config: {},
        errors: 0,
        ContextMenu: function () {
            return e.Extension.MathEvents.Event.ContextMenu.apply(e.Extension.MathEvents.Event, arguments)
        },
        Mousedown: function () {
            return e.Extension.MathEvents.Event.AltContextMenu.apply(e.Extension.MathEvents.Event, arguments)
        },
        getJaxFromMath: function (t) {
            return (t.nextSibling.MathJax || {}).error
        },
        Jax: function (t, e) {
            var i = MathJax.Hub.inputJax[e.type.replace(/ *;(.|\s)*/, "")];
            return this.errors++, {
                inputJax: (i || {id: "Error"}).id,
                outputJax: "Error",
                inputID: "MathJax-Error-" + this.errors,
                sourceMenuTitle: ["ErrorMessage", "Error Message"],
                sourceMenuFormat: "Error",
                originalText: MathJax.HTML.getScript(e),
                errorText: t
            }
        }
    }, e.InputJax.Error = {id: "Error", version: "2.7.5", config: {}, sourceMenuTitle: ["Original", "Original Form"]}
}(), function (t) {
    var e = window.MathJax;
    e || (e = window.MathJax = {});
    var i = e.Hub, n = i.Startup, a = i.config, s = document.head || document.getElementsByTagName("head")[0];
    s || (s = document.childNodes[0]);
    var r = (document.documentElement || document).getElementsByTagName("script");
    0 === r.length && s.namespaceURI && (r = document.getElementsByTagNameNS(s.namespaceURI, "script"));
    for (var o = new RegExp("(^|/)MathJax\\.js(\\?.*)?$"), h = r.length - 1; h >= 0; h--) if ((r[h].src || "").match(o)) {
        if (n.script = r[h].innerHTML, RegExp.$2) for (var l = RegExp.$2.substr(1).split(/\&/), u = 0, c = l.length; u < c; u++) {
            var p = l[u].match(/(.*)=(.*)/);
            p ? n.params[unescape(p[1])] = unescape(p[2]) : n.params[l[u]] = !0
        }
        a.root = r[h].src.replace(/(^|\/)[^\/]*(\?.*)?$/, ""), e.Ajax.config.root = a.root, e.Ajax.params = n.params;
        break
    }
    var d = navigator.userAgent, f = {
            isMac: "Mac" === navigator.platform.substr(0, 3),
            isPC: "Win" === navigator.platform.substr(0, 3),
            isMSIE: "ActiveXObject" in window && "clipboardData" in window,
            isEdge: "MSGestureEvent" in window && "chrome" in window && null == window.chrome.loadTimes,
            isFirefox: !!d.match(/Gecko\//) && !d.match(/like Gecko/),
            isSafari: !(!d.match(/ (Apple)?WebKit\//) || d.match(/ like iPhone /) || window.chrome && null != window.chrome.app),
            isChrome: "chrome" in window && null != window.chrome.loadTimes,
            isOpera: "opera" in window && null != window.opera.version,
            isKonqueror: "konqueror" in window && "KDE" == navigator.vendor,
            versionAtLeast: function (t) {
                for (var e = this.version.split("."), i = 0, n = (t = new String(t).split(".")).length; i < n; i++) if (e[i] != t[i]) return parseInt(e[i] || "0") >= parseInt(t[i]);
                return !0
            },
            Select: function (t) {
                var e = t[i.Browser];
                return e ? e(i.Browser) : null
            }
        },
        g = d.replace(/^Mozilla\/(\d+\.)+\d+ /, "").replace(/[a-z][-a-z0-9._: ]+\/\d+[^ ]*-[^ ]*\.([a-z][a-z])?\d+ /i, "").replace(/Gentoo |Ubuntu\/(\d+\.)*\d+ (\([^)]*\) )?/, "");
    for (var x in i.Browser = i.Insert(i.Insert(new String("Unknown"), {version: "0.0"}), f), f) if (f.hasOwnProperty(x) && f[x] && "is" === x.substr(0, 2)) {
        if ("Mac" === (x = x.slice(2)) || "PC" === x) continue;
        i.Browser = i.Insert(new String(x), f);
        var m = new RegExp(".*(Version/| Trident/.*; rv:)((?:\\d+\\.)+\\d+)|.*(" + x + ")" + ("MSIE" == x ? " " : "/") + "((?:\\d+\\.)*\\d+)|(?:^|\\(| )([a-z][-a-z0-9._: ]+|(?:Apple)?WebKit)/((?:\\d+\\.)+\\d+)").exec(g) || ["", "", "", "unknown", "0.0"];
        i.Browser.name = "" != m[1] ? x : m[3] || m[5], i.Browser.version = m[2] || m[4] || m[6];
        break
    }
    try {
        i.Browser.Select({
            Safari: function (t) {
                var e = parseInt(String(t.version).split(".")[0]);
                e > 85 && (t.webkit = t.version), e >= 538 ? t.version = "8.0" : e >= 537 ? t.version = "7.0" : e >= 536 ? t.version = "6.0" : e >= 534 ? t.version = "5.1" : e >= 533 ? t.version = "5.0" : e >= 526 ? t.version = "4.0" : e >= 525 ? t.version = "3.1" : e > 500 ? t.version = "3.0" : e > 400 ? t.version = "2.0" : e > 85 && (t.version = "1.0"), t.webkit = navigator.appVersion.match(/WebKit\/(\d+)\./)[1], t.isMobile = null != navigator.appVersion.match(/Mobile/i), t.noContextMenu = t.isMobile
            }, Firefox: function (t) {
                if (("0.0" === t.version || null == d.match(/Firefox/)) && "Gecko" === navigator.product) {
                    var e = d.match(/[\/ ]rv:(\d+\.\d.*?)[\) ]/);
                    if (e) t.version = e[1]; else {
                        var i = (navigator.buildID || navigator.productSub || "0").substr(0, 8);
                        i >= "20111220" ? t.version = "9.0" : i >= "20111120" ? t.version = "8.0" : i >= "20110927" ? t.version = "7.0" : i >= "20110816" ? t.version = "6.0" : i >= "20110621" ? t.version = "5.0" : i >= "20110320" ? t.version = "4.0" : i >= "20100121" ? t.version = "3.6" : i >= "20090630" ? t.version = "3.5" : i >= "20080617" ? t.version = "3.0" : i >= "20061024" && (t.version = "2.0")
                    }
                }
                t.isMobile = null != navigator.appVersion.match(/Android/i) || null != d.match(/ Fennec\//) || null != d.match(/Mobile/)
            }, Chrome: function (t) {
                t.noContextMenu = t.isMobile = !!navigator.userAgent.match(/ Mobile[ \/]/)
            }, Opera: function (t) {
                t.version = opera.version()
            }, Edge: function (t) {
                t.isMobile = !!navigator.userAgent.match(/ Phone/)
            }, MSIE: function (t) {
                if (t.isMobile = !!navigator.userAgent.match(/ Phone/), t.isIE9 = !(!document.documentMode || !window.performance && !window.msPerformance), MathJax.HTML.setScriptBug = !t.isIE9 || document.documentMode < 9, MathJax.Hub.msieHTMLCollectionBug = document.documentMode < 9, document.documentMode < 10 && !n.params.NoMathPlayer) {
                    try {
                        new ActiveXObject("MathPlayer.Factory.1"), t.hasMathPlayer = !0
                    } catch (t) {
                    }
                    try {
                        if (t.hasMathPlayer) {
                            var e = document.createElement("object");
                            e.id = "mathplayer", e.classid = "clsid:32F66A20-7614-11D4-BD11-00104BD3F987", s.appendChild(e), document.namespaces.add("m", "http://www.w3.org/1998/Math/MathML"), t.mpNamespace = !0, !document.readyState || "loading" !== document.readyState && "interactive" !== document.readyState || (document.write('<?import namespace="m" implementation="#MathPlayer">'), t.mpImported = !0)
                        } else document.namespaces.add("mjx_IE_fix", "http://www.w3.org/1999/xlink")
                    } catch (t) {
                    }
                }
            }
        })
    } catch (t) {
        console.error(t.message)
    }
    i.Browser.Select(MathJax.Message.browsers), e.AuthorConfig && "function" == typeof e.AuthorConfig.AuthorInit && e.AuthorConfig.AuthorInit(), i.queue = e.Callback.Queue(), i.queue.Push(["Post", n.signal, "Begin"], ["Config", n], ["Cookie", n], ["Styles", n], ["Message", n], function () {
        return e.Callback.Queue(n.Jax(), n.Extensions()).Push({})
    }, ["Menu", n], n.onLoad(), function () {
        MathJax.isReady = !0
    }, ["Typeset", n], ["Hash", n], ["MenuZoom", n], ["Post", n.signal, "End"])
}()));