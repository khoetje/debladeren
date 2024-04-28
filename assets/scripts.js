! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
  return function(e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "dist/", t(0)
  }([function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
      },
      r = n(1),
      a = (o(r), n(6)),
      u = o(a),
      c = n(7),
      s = o(c),
      f = n(8),
      d = o(f),
      l = n(9),
      p = o(l),
      m = n(10),
      b = o(m),
      v = n(11),
      y = o(v),
      g = n(14),
      h = o(g),
      w = [],
      k = !1,
      x = {
        offset: 120,
        delay: 0,
        easing: "ease",
        duration: 400,
        disable: !1,
        once: !1,
        startEvent: "DOMContentLoaded",
        throttleDelay: 99,
        debounceDelay: 50,
        disableMutationObserver: !1
      },
      j = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w
      },
      O = function() {
        w = (0, h.default)(), j()
      },
      M = function() {
        w.forEach(function(e, t) {
          e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
        })
      },
      S = function(e) {
        return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
      },
      _ = function(e) {
        x = i(x, e), w = (0, h.default)();
        var t = document.all && !window.atob;
        return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
          j(!0)
        }) : document.addEventListener(x.startEvent, function() {
          j(!0)
        }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
          (0, b.default)(w, x.once)
        }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w)
      };
    e.exports = {
      init: _,
      refresh: j,
      refreshHard: O
    }
  }, function(e, t) {}, , , , , function(e, t) {
    (function(t) {
      "use strict";

      function n(e, t, n) {
        function o(t) {
          var n = b,
            o = v;
          return b = v = void 0, k = t, g = e.apply(o, n)
        }

        function r(e) {
          return k = e, h = setTimeout(f, t), M ? o(e) : g
        }

        function a(e) {
          var n = e - w,
            o = e - k,
            i = t - n;
          return S ? j(i, y - o) : i
        }

        function c(e) {
          var n = e - w,
            o = e - k;
          return void 0 === w || n >= t || n < 0 || S && o >= y
        }

        function f() {
          var e = O();
          return c(e) ? d(e) : void(h = setTimeout(f, a(e)))
        }

        function d(e) {
          return h = void 0, _ && b ? o(e) : (b = v = void 0, g)
        }

        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0
        }

        function p() {
          return void 0 === h ? g : d(O())
        }

        function m() {
          var e = O(),
            n = c(e);
          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), o(w)
          }
          return void 0 === h && (h = setTimeout(f, t)), g
        }
        var b, v, y, g, h, w, k = 0,
          M = !1,
          S = !1,
          _ = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m
      }

      function o(e, t, o) {
        var r = !0,
          a = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        })
      }

      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : c(e);
        return !!e && ("object" == t || "function" == t)
      }

      function r(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
      }

      function a(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
      }

      function u(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return f;
        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, "");
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e
      }
      var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        s = "Expected a function",
        f = NaN,
        d = "[object Symbol]",
        l = /^\s+|\s+$/g,
        p = /^[-+]0x[0-9a-f]+$/i,
        m = /^0b[01]+$/i,
        b = /^0o[0-7]+$/i,
        v = parseInt,
        y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
        g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
        h = y || g || Function("return this")(),
        w = Object.prototype,
        k = w.toString,
        x = Math.max,
        j = Math.min,
        O = function() {
          return h.Date.now()
        };
      e.exports = o
    }).call(t, function() {
      return this
    }())
  }, function(e, t) {
    (function(t) {
      "use strict";

      function n(e, t, n) {
        function i(t) {
          var n = b,
            o = v;
          return b = v = void 0, O = t, g = e.apply(o, n)
        }

        function r(e) {
          return O = e, h = setTimeout(f, t), M ? i(e) : g
        }

        function u(e) {
          var n = e - w,
            o = e - O,
            i = t - n;
          return S ? x(i, y - o) : i
        }

        function s(e) {
          var n = e - w,
            o = e - O;
          return void 0 === w || n >= t || n < 0 || S && o >= y
        }

        function f() {
          var e = j();
          return s(e) ? d(e) : void(h = setTimeout(f, u(e)))
        }

        function d(e) {
          return h = void 0, _ && b ? i(e) : (b = v = void 0, g)
        }

        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0
        }

        function p() {
          return void 0 === h ? g : d(j())
        }

        function m() {
          var e = j(),
            n = s(e);
          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), i(w)
          }
          return void 0 === h && (h = setTimeout(f, t)), g
        }
        var b, v, y, g, h, w, O = 0,
          M = !1,
          S = !1,
          _ = !0;
        if ("function" != typeof e) throw new TypeError(c);
        return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m
      }

      function o(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);
        return !!e && ("object" == t || "function" == t)
      }

      function i(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
      }

      function r(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f
      }

      function a(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return s;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, "");
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e
      }
      var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        c = "Expected a function",
        s = NaN,
        f = "[object Symbol]",
        d = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        p = /^0b[01]+$/i,
        m = /^0o[0-7]+$/i,
        b = parseInt,
        v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
        y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
        g = v || y || Function("return this")(),
        h = Object.prototype,
        w = h.toString,
        k = Math.max,
        x = Math.min,
        j = function() {
          return g.Date.now()
        };
      e.exports = n
    }).call(t, function() {
      return this
    }())
  }, function(e, t) {
    "use strict";

    function n(e) {
      var t = void 0,
        o = void 0,
        i = void 0;
      for (t = 0; t < e.length; t += 1) {
        if (o = e[t], o.dataset && o.dataset.aos) return !0;
        if (i = o.children && n(o.children)) return !0
      }
      return !1
    }

    function o() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    }

    function i() {
      return !!o()
    }

    function r(e, t) {
      var n = window.document,
        i = o(),
        r = new i(a);
      u = t, r.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      })
    }

    function a(e) {
      e && e.forEach(function(e) {
        var t = Array.prototype.slice.call(e.addedNodes),
          o = Array.prototype.slice.call(e.removedNodes),
          i = t.concat(o);
        if (n(i)) return u()
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = function() {};
    t.default = {
      isSupported: i,
      ready: r
    }
  }, function(e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || ""
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
          }
        }
        return function(t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t
        }
      }(),
      r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
      c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      s = function() {
        function e() {
          n(this, e)
        }
        return i(e, [{
          key: "phone",
          value: function() {
            var e = o();
            return !(!r.test(e) && !a.test(e.substr(0, 4)))
          }
        }, {
          key: "mobile",
          value: function() {
            var e = o();
            return !(!u.test(e) && !c.test(e.substr(0, 4)))
          }
        }, {
          key: "tablet",
          value: function() {
            return this.mobile() && !this.phone()
          }
        }]), e
      }();
    t.default = new s
  }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function(e, t, n) {
        var o = e.node.getAttribute("data-aos-once");
        t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
      },
      o = function(e, t) {
        var o = window.pageYOffset,
          i = window.innerHeight;
        e.forEach(function(e, r) {
          n(e, i + o, t)
        })
      };
    t.default = o
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(12),
      r = o(i),
      a = function(e, t) {
        return e.forEach(function(e, n) {
          e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset)
        }), e
      };
    t.default = a
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(13),
      r = o(i),
      a = function(e, t) {
        var n = 0,
          o = 0,
          i = window.innerHeight,
          a = {
            offset: e.getAttribute("data-aos-offset"),
            anchor: e.getAttribute("data-aos-anchor"),
            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
          };
        switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            n += e.offsetHeight / 2;
            break;
          case "bottom-bottom":
            n += e.offsetHeight;
            break;
          case "top-center":
            n += i / 2;
            break;
          case "bottom-center":
            n += i / 2 + e.offsetHeight;
            break;
          case "center-center":
            n += i / 2 + e.offsetHeight / 2;
            break;
          case "top-top":
            n += i;
            break;
          case "bottom-top":
            n += e.offsetHeight + i;
            break;
          case "center-top":
            n += e.offsetHeight / 2 + i
        }
        return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
      };
    t.default = a
  }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function(e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      return {
        top: n,
        left: t
      }
    };
    t.default = n
  }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function(e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
        return {
          node: e
        }
      })
    };
    t.default = n
  }])
});
! function(e) {
  var n;
  if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
    var t = window.Cookies,
      o = window.Cookies = e();
    o.noConflict = function() {
      return window.Cookies = t, o
    }
  }
}(function() {
  function e() {
    for (var e = 0, n = {}; e < arguments.length; e++) {
      var t = arguments[e];
      for (var o in t) n[o] = t[o]
    }
    return n
  }

  function n(e) {
    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
  }
  return function t(o) {
    function r() {}

    function i(n, t, i) {
      if ("undefined" != typeof document) {
        "number" == typeof(i = e({
          path: "/"
        }, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
        try {
          var c = JSON.stringify(t);
          /^[\{\[]/.test(c) && (t = c)
        } catch (e) {}
        t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
        var f = "";
        for (var u in i) i[u] && (f += "; " + u, !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
        return document.cookie = n + "=" + t + f
      }
    }

    function c(e, t) {
      if ("undefined" != typeof document) {
        for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
          var f = i[c].split("="),
            u = f.slice(1).join("=");
          t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
          try {
            var a = n(f[0]);
            if (u = (o.read || o)(u, a) || n(u), t) try {
              u = JSON.parse(u)
            } catch (e) {}
            if (r[a] = u, e === a) break
          } catch (e) {}
        }
        return e ? r[e] : r
      }
    }
    return r.set = i, r.get = function(e) {
      return c(e, !1)
    }, r.getJSON = function(e) {
      return c(e, !0)
    }, r.remove = function(n, t) {
      i(n, "", e(t, {
        expires: -1
      }))
    }, r.defaults = {}, r.withConverter = t, r
  }(function() {})
});
! function(e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EventEmitter3 = e()
  }
}(function() {
  return function i(s, f, c) {
    function u(t, e) {
      if (!f[t]) {
        if (!s[t]) {
          var n = "function" == typeof require && require;
          if (!e && n) return n(t, !0);
          if (a) return a(t, !0);
          var r = new Error("Cannot find module '" + t + "'");
          throw r.code = "MODULE_NOT_FOUND", r
        }
        var o = f[t] = {
          exports: {}
        };
        s[t][0].call(o.exports, function(e) {
          return u(s[t][1][e] || e)
        }, o, o.exports, i, s, f, c)
      }
      return f[t].exports
    }
    for (var a = "function" == typeof require && require, e = 0; e < c.length; e++) u(c[e]);
    return u
  }({
    1: [function(e, t, n) {
      "use strict";
      var r = Object.prototype.hasOwnProperty,
        v = "~";

      function o() {}

      function f(e, t, n) {
        this.fn = e, this.context = t, this.once = n || !1
      }

      function i(e, t, n, r, o) {
        if ("function" != typeof n) throw new TypeError("The listener must be a function");
        var i = new f(n, r || e, o),
          s = v ? v + t : t;
        return e._events[s] ? e._events[s].fn ? e._events[s] = [e._events[s], i] : e._events[s].push(i) : (e._events[s] = i, e._eventsCount++), e
      }

      function u(e, t) {
        0 == --e._eventsCount ? e._events = new o : delete e._events[t]
      }

      function s() {
        this._events = new o, this._eventsCount = 0
      }
      Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (v = !1)), s.prototype.eventNames = function() {
        var e, t, n = [];
        if (0 === this._eventsCount) return n;
        for (t in e = this._events) r.call(e, t) && n.push(v ? t.slice(1) : t);
        return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
      }, s.prototype.listeners = function(e) {
        var t = v ? v + e : e,
          n = this._events[t];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var r = 0, o = n.length, i = new Array(o); r < o; r++) i[r] = n[r].fn;
        return i
      }, s.prototype.listenerCount = function(e) {
        var t = v ? v + e : e,
          n = this._events[t];
        return n ? n.fn ? 1 : n.length : 0
      }, s.prototype.emit = function(e, t, n, r, o, i) {
        var s = v ? v + e : e;
        if (!this._events[s]) return !1;
        var f, c, u = this._events[s],
          a = arguments.length;
        if (u.fn) {
          switch (u.once && this.removeListener(e, u.fn, void 0, !0), a) {
            case 1:
              return u.fn.call(u.context), !0;
            case 2:
              return u.fn.call(u.context, t), !0;
            case 3:
              return u.fn.call(u.context, t, n), !0;
            case 4:
              return u.fn.call(u.context, t, n, r), !0;
            case 5:
              return u.fn.call(u.context, t, n, r, o), !0;
            case 6:
              return u.fn.call(u.context, t, n, r, o, i), !0
          }
          for (c = 1, f = new Array(a - 1); c < a; c++) f[c - 1] = arguments[c];
          u.fn.apply(u.context, f)
        } else {
          var l, p = u.length;
          for (c = 0; c < p; c++) switch (u[c].once && this.removeListener(e, u[c].fn, void 0, !0), a) {
            case 1:
              u[c].fn.call(u[c].context);
              break;
            case 2:
              u[c].fn.call(u[c].context, t);
              break;
            case 3:
              u[c].fn.call(u[c].context, t, n);
              break;
            case 4:
              u[c].fn.call(u[c].context, t, n, r);
              break;
            default:
              if (!f)
                for (l = 1, f = new Array(a - 1); l < a; l++) f[l - 1] = arguments[l];
              u[c].fn.apply(u[c].context, f)
          }
        }
        return !0
      }, s.prototype.on = function(e, t, n) {
        return i(this, e, t, n, !1)
      }, s.prototype.once = function(e, t, n) {
        return i(this, e, t, n, !0)
      }, s.prototype.removeListener = function(e, t, n, r) {
        var o = v ? v + e : e;
        if (!this._events[o]) return this;
        if (!t) return u(this, o), this;
        var i = this._events[o];
        if (i.fn) i.fn !== t || r && !i.once || n && i.context !== n || u(this, o);
        else {
          for (var s = 0, f = [], c = i.length; s < c; s++)(i[s].fn !== t || r && !i[s].once || n && i[s].context !== n) && f.push(i[s]);
          f.length ? this._events[o] = 1 === f.length ? f[0] : f : u(this, o)
        }
        return this
      }, s.prototype.removeAllListeners = function(e) {
        var t;
        return e ? (t = v ? v + e : e, this._events[t] && u(this, t)) : (this._events = new o, this._eventsCount = 0), this
      }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = v, s.EventEmitter = s, void 0 !== t && (t.exports = s)
    }, {}]
  }, {}, [1])(1)
});
! function(t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
  "use strict";
  var i = Array.prototype.slice,
    n = t.console,
    s = void 0 === n ? function() {} : function(t) {
      n.error(t)
    };

  function o(n, o, a) {
    (a = a || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
    }), a.fn[n] = function(t) {
      return "string" == typeof t ? function(t, e, i) {
        var o, r = "$()." + n + '("' + e + '")';
        return t.each(function(t, l) {
          var h = a.data(l, n);
          if (h) {
            var d = h[e];
            if (d && "_" != e.charAt(0)) {
              var c = d.apply(h, i);
              o = void 0 === o ? c : o
            } else s(r + " is not a valid method")
          } else s(n + " not initialized. Cannot call methods, i.e. " + r)
        }), void 0 !== o ? o : t
      }(this, t, i.call(arguments, 1)) : (function(t, e) {
        t.each(function(t, i) {
          var s = a.data(i, n);
          s ? (s.option(e), s._init()) : (s = new o(i, e), a.data(i, n, s))
        })
      }(this, t), this)
    }, r(a))
  }

  function r(t) {
    !t || t && t.bridget || (t.bridget = o)
  }
  return r(e || t.jQuery), o
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
  function t() {}
  var e = t.prototype;
  return e.on = function(t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this
    }
  }, e.once = function(t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {};
      return (i[t] = i[t] || {})[e] = !0, this
    }
  }, e.off = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this
    }
  }, e.emitEvent = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      i = i.slice(0), e = e || [];
      for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
        var o = i[s];
        n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
      }
      return this
    }
  }, e.allOff = function() {
    delete this._events, delete this._onceEvents
  }, t
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
  "use strict";

  function t(t) {
    var e = parseFloat(t);
    return -1 == t.indexOf("%") && !isNaN(e) && e
  }
  var e = "undefined" == typeof console ? function() {} : function(t) {
      console.error(t)
    },
    i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    n = i.length;

  function s(t) {
    var i = getComputedStyle(t);
    return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), i
  }
  var o, r = !1;
  return function e(a) {
    if (function() {
        if (!r) {
          r = !0;
          var i = document.createElement("div");
          i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
          var n = document.body || document.documentElement;
          n.appendChild(i);
          var a = s(i);
          o = 200 == Math.round(t(a.width)), e.isBoxSizeOuter = o, n.removeChild(i)
        }
      }(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
      var l = s(a);
      if ("none" == l.display) return function() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          }, e = 0; e < n; e++) t[i[e]] = 0;
        return t
      }();
      var h = {};
      h.width = a.offsetWidth, h.height = a.offsetHeight;
      for (var d = h.isBorderBox = "border-box" == l.boxSizing, c = 0; c < n; c++) {
        var u = i[c],
          f = l[u],
          p = parseFloat(f);
        h[u] = isNaN(p) ? 0 : p
      }
      var g = h.paddingLeft + h.paddingRight,
        v = h.paddingTop + h.paddingBottom,
        m = h.marginLeft + h.marginRight,
        y = h.marginTop + h.marginBottom,
        x = h.borderLeftWidth + h.borderRightWidth,
        b = h.borderTopWidth + h.borderBottomWidth,
        S = d && o,
        E = t(l.width);
      !1 !== E && (h.width = E + (S ? 0 : g + x));
      var C = t(l.height);
      return !1 !== C && (h.height = C + (S ? 0 : v + b)), h.innerWidth = h.width - (g + x), h.innerHeight = h.height - (v + b), h.outerWidth = h.width + m, h.outerHeight = h.height + y, h
    }
  }
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
  "use strict";
  var t = function() {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i] + "MatchesSelector";
      if (t[n]) return n
    }
  }();
  return function(e, i) {
    return e[t](i)
  }
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
  var i = {
      extend: function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
      },
      modulo: function(t, e) {
        return (t % e + e) % e
      }
    },
    n = Array.prototype.slice;
  i.makeArray = function(t) {
    return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
  }, i.removeFrom = function(t, e) {
    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
  }, i.getParent = function(t, i) {
    for (; t.parentNode && t != document.body;)
      if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function(t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.filterFindElements = function(t, n) {
    t = i.makeArray(t);
    var s = [];
    return t.forEach(function(t) {
      if (t instanceof HTMLElement)
        if (n) {
          e(t, n) && s.push(t);
          for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++) s.push(i[o])
        } else s.push(t)
    }), s
  }, i.debounceMethod = function(t, e, i) {
    i = i || 100;
    var n = t.prototype[e],
      s = e + "Timeout";
    t.prototype[e] = function() {
      var t = this[s];
      clearTimeout(t);
      var e = arguments,
        o = this;
      this[s] = setTimeout(function() {
        n.apply(o, e), delete o[s]
      }, i)
    }
  }, i.docReady = function(t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function(t) {
    return t.replace(/(.)([A-Z])/g, function(t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var s = t.console;
  return i.htmlInit = function(e, n) {
    i.docReady(function() {
      var o = i.toDashed(n),
        r = "data-" + o,
        a = document.querySelectorAll("[" + r + "]"),
        l = document.querySelectorAll(".js-" + o),
        h = i.makeArray(a).concat(i.makeArray(l)),
        d = r + "-options",
        c = t.jQuery;
      h.forEach(function(t) {
        var i, o = t.getAttribute(r) || t.getAttribute(d);
        try {
          i = o && JSON.parse(o)
        } catch (i) {
          return void(s && s.error("Error parsing " + r + " on " + t.className + ": " + i))
        }
        var a = new e(t, i);
        c && c.data(t, n, a)
      })
    })
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
}(window, function(t, e) {
  function i(t, e) {
    this.element = t, this.parent = e, this.create()
  }
  var n = i.prototype;
  return n.create = function() {
    this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
  }, n.destroy = function() {
    this.unselect(), this.element.style.position = "";
    var t = this.parent.originSide;
    this.element.style[t] = ""
  }, n.getSize = function() {
    this.size = e(this.element)
  }, n.setPosition = function(t) {
    this.x = t, this.updateTarget(), this.renderPosition(t)
  }, n.updateTarget = n.setDefaultTarget = function() {
    var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
    this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
  }, n.renderPosition = function(t) {
    var e = this.parent.originSide;
    this.element.style[e] = this.parent.getPositionValue(t)
  }, n.select = function() {
    this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
  }, n.unselect = function() {
    this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
  }, n.wrapShift = function(t) {
    this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
  }, n.remove = function() {
    this.element.parentNode.removeChild(this.element)
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
}(window, function() {
  "use strict";

  function t(t) {
    this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
  }
  var e = t.prototype;
  return e.addCell = function(t) {
    if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
      this.x = t.x;
      var e = this.isOriginLeft ? "marginLeft" : "marginRight";
      this.firstMargin = t.size[e]
    }
  }, e.updateTarget = function() {
    var t = this.isOriginLeft ? "marginRight" : "marginLeft",
      e = this.getLastCell(),
      i = e ? e.size[t] : 0,
      n = this.outerWidth - (this.firstMargin + i);
    this.target = this.x + this.firstMargin + n * this.parent.cellAlign
  }, e.getLastCell = function() {
    return this.cells[this.cells.length - 1]
  }, e.select = function() {
    this.cells.forEach(function(t) {
      t.select()
    })
  }, e.unselect = function() {
    this.cells.forEach(function(t) {
      t.unselect()
    })
  }, e.getCellElements = function() {
    return this.cells.map(function(t) {
      return t.element
    })
  }, t
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.fizzyUIUtils))
}(window, function(t, e) {
  return {
    startAnimation: function() {
      this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
    },
    animate: function() {
      this.applyDragForce(), this.applySelectedAttraction();
      var t = this.x;
      if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
        var e = this;
        requestAnimationFrame(function() {
          e.animate()
        })
      }
    },
    positionSlider: function() {
      var t = this.x;
      this.options.wrapAround && 1 < this.cells.length && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
    },
    setTranslateX: function(t, e) {
      t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
      var i = this.getPositionValue(t);
      this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
    },
    dispatchScrollEvent: function() {
      var t = this.slides[0];
      if (t) {
        var e = -this.x - t.target,
          i = e / this.slidesWidth;
        this.dispatchEvent("scroll", null, [i, e])
      }
    },
    positionSliderAtSelected: function() {
      this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
    },
    getPositionValue: function(t) {
      return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
    },
    settle: function(t) {
      this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, 2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
    },
    shiftWrapCells: function(t) {
      var e = this.cursorPosition + t;
      this._shiftCells(this.beforeShiftCells, e, -1);
      var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
      this._shiftCells(this.afterShiftCells, i, 1)
    },
    _shiftCells: function(t, e, i) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
          o = 0 < e ? i : 0;
        s.wrapShift(o), e -= s.size.outerWidth
      }
    },
    _unshiftCells: function(t) {
      if (t && t.length)
        for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
    },
    integratePhysics: function() {
      this.x += this.velocity, this.velocity *= this.getFrictionFactor()
    },
    applyForce: function(t) {
      this.velocity += t
    },
    getFrictionFactor: function() {
      return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
    },
    getRestingPosition: function() {
      return this.x + this.velocity / (1 - this.getFrictionFactor())
    },
    applyDragForce: function() {
      if (this.isDraggable && this.isPointerDown) {
        var t = this.dragX - this.x - this.velocity;
        this.applyForce(t)
      }
    },
    applySelectedAttraction: function() {
      if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
        var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
        this.applyForce(t)
      }
    }
  }
}),
function(t, e) {
  if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(i, n, s, o, r, a) {
    return e(t, i, n, s, o, r, a)
  });
  else if ("object" == typeof module && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
  else {
    var i = t.Flickity;
    t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
  }
}(window, function(t, e, i, n, s, o, r) {
  var a = t.jQuery,
    l = t.getComputedStyle,
    h = t.console;

  function d(t, e) {
    for (t = n.makeArray(t); t.length;) e.appendChild(t.shift())
  }
  var c = 0,
    u = {};

  function f(t, e) {
    var i = n.getQueryElement(t);
    if (i) {
      if (this.element = i, this.element.flickityGUID) {
        var s = u[this.element.flickityGUID];
        return s.option(e), s
      }
      a && (this.$element = a(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), this._create()
    } else h && h.error("Bad element for Flickity: " + (i || t))
  }
  f.defaults = {
    accessibility: !0,
    cellAlign: "center",
    freeScrollFriction: .075,
    friction: .28,
    namespaceJQueryEvents: !0,
    percentPosition: !0,
    resize: !0,
    selectedAttraction: .025,
    setGallerySize: !0
  }, f.createMethods = [];
  var p = f.prototype;
  n.extend(p, e.prototype), p._create = function() {
    var e = this.guid = ++c;
    for (var i in this.element.flickityGUID = e, (u[e] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
      var n = this.options.on[i];
      this.on(i, n)
    }
    f.createMethods.forEach(function(t) {
      this[t]()
    }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
  }, p.option = function(t) {
    n.extend(this.options, t)
  }, p.activate = function() {
    this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), d(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
  }, p._createSlider = function() {
    var t = document.createElement("div");
    t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
  }, p._filterFindCellElements = function(t) {
    return n.filterFindElements(t, this.options.cellSelector)
  }, p.reloadCells = function() {
    this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
  }, p._makeCells = function(t) {
    return this._filterFindCellElements(t).map(function(t) {
      return new s(t, this)
    }, this)
  }, p.getLastCell = function() {
    return this.cells[this.cells.length - 1]
  }, p.getLastSlide = function() {
    return this.slides[this.slides.length - 1]
  }, p.positionCells = function() {
    this._sizeCells(this.cells), this._positionCells(0)
  }, p._positionCells = function(t) {
    t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
    var e = 0;
    if (0 < t) {
      var i = this.cells[t - 1];
      e = i.x + i.size.outerWidth
    }
    for (var n = this.cells.length, s = t; s < n; s++) {
      var o = this.cells[s];
      o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
    }
    this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
  }, p._sizeCells = function(t) {
    t.forEach(function(t) {
      t.getSize()
    })
  }, p.updateSlides = function() {
    if (this.slides = [], this.cells.length) {
      var t = new o(this);
      this.slides.push(t);
      var e = "left" == this.originSide ? "marginRight" : "marginLeft",
        i = this._getCanCellFit();
      this.cells.forEach(function(n, s) {
        if (t.cells.length) {
          var r = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
          i.call(this, s, r) || (t.updateTarget(), t = new o(this), this.slides.push(t)), t.addCell(n)
        } else t.addCell(n)
      }, this), t.updateTarget(), this.updateSelectedSlide()
    }
  }, p._getCanCellFit = function() {
    var t = this.options.groupCells;
    if (!t) return function() {
      return !1
    };
    if ("number" == typeof t) {
      var e = parseInt(t, 10);
      return function(t) {
        return t % e != 0
      }
    }
    var i = "string" == typeof t && t.match(/^(\d+)%$/),
      n = i ? parseInt(i[1], 10) / 100 : 1;
    return function(t, e) {
      return e <= (this.size.innerWidth + 1) * n
    }
  }, p._init = p.reposition = function() {
    this.positionCells(), this.positionSliderAtSelected()
  }, p.getSize = function() {
    this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
  };
  var g = {
    center: {
      left: .5,
      right: .5
    },
    left: {
      left: 0,
      right: 1
    },
    right: {
      right: 0,
      left: 1
    }
  };
  return p.setCellAlign = function() {
    var t = g[this.options.cellAlign];
    this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
  }, p.setGallerySize = function() {
    if (this.options.setGallerySize) {
      var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
      this.viewport.style.height = t + "px"
    }
  }, p._getWrapShiftCells = function() {
    if (this.options.wrapAround) {
      this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
      var t = this.cursorPosition,
        e = this.cells.length - 1;
      this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
    }
  }, p._getGapCells = function(t, e, i) {
    for (var n = []; 0 < t;) {
      var s = this.cells[e];
      if (!s) break;
      n.push(s), e += i, t -= s.size.outerWidth
    }
    return n
  }, p._containSlides = function() {
    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
      var t = this.options.rightToLeft,
        e = t ? "marginRight" : "marginLeft",
        i = t ? "marginLeft" : "marginRight",
        n = this.slideableWidth - this.getLastCell().size[i],
        s = n < this.size.innerWidth,
        o = this.cursorPosition + this.cells[0].size[e],
        r = n - this.size.innerWidth * (1 - this.cellAlign);
      this.slides.forEach(function(t) {
        s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, r))
      }, this)
    }
  }, p.dispatchEvent = function(t, e, i) {
    var n = e ? [e].concat(i) : i;
    if (this.emitEvent(t, n), a && this.$element) {
      var s = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
      if (e) {
        var o = a.Event(e);
        o.type = t, s = o
      }
      this.$element.trigger(s, i)
    }
  }, p.select = function(t, e, i) {
    if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t])) {
      var s = this.selectedIndex;
      this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != s && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
    }
  }, p._wrapSelect = function(t) {
    var e = this.slides.length;
    if (!(this.options.wrapAround && 1 < e)) return t;
    var i = n.modulo(t, e),
      s = Math.abs(i - this.selectedIndex),
      o = Math.abs(i + e - this.selectedIndex),
      r = Math.abs(i - e - this.selectedIndex);
    !this.isDragSelect && o < s ? t += e : !this.isDragSelect && r < s && (t -= e), t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth)
  }, p.previous = function(t, e) {
    this.select(this.selectedIndex - 1, t, e)
  }, p.next = function(t, e) {
    this.select(this.selectedIndex + 1, t, e)
  }, p.updateSelectedSlide = function() {
    var t = this.slides[this.selectedIndex];
    t && (this.unselectSelectedSlide(), (this.selectedSlide = t).select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
  }, p.unselectSelectedSlide = function() {
    this.selectedSlide && this.selectedSlide.unselect()
  }, p.selectInitialIndex = function() {
    var t = this.options.initialIndex;
    if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
    else {
      if (t && "string" == typeof t && this.queryCell(t)) return void this.selectCell(t, !1, !0);
      var e = 0;
      t && this.slides[t] && (e = t), this.select(e, !1, !0)
    }
  }, p.selectCell = function(t, e, i) {
    var n = this.queryCell(t);
    if (n) {
      var s = this.getCellSlideIndex(n);
      this.select(s, e, i)
    }
  }, p.getCellSlideIndex = function(t) {
    for (var e = 0; e < this.slides.length; e++)
      if (-1 != this.slides[e].cells.indexOf(t)) return e
  }, p.getCell = function(t) {
    for (var e = 0; e < this.cells.length; e++) {
      var i = this.cells[e];
      if (i.element == t) return i
    }
  }, p.getCells = function(t) {
    t = n.makeArray(t);
    var e = [];
    return t.forEach(function(t) {
      var i = this.getCell(t);
      i && e.push(i)
    }, this), e
  }, p.getCellElements = function() {
    return this.cells.map(function(t) {
      return t.element
    })
  }, p.getParentCell = function(t) {
    return this.getCell(t) || (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t))
  }, p.getAdjacentCellElements = function(t, e) {
    if (!t) return this.selectedSlide.getCellElements();
    e = void 0 === e ? this.selectedIndex : e;
    var i = this.slides.length;
    if (i <= 1 + 2 * t) return this.getCellElements();
    for (var s = [], o = e - t; o <= e + t; o++) {
      var r = this.options.wrapAround ? n.modulo(o, i) : o,
        a = this.slides[r];
      a && (s = s.concat(a.getCellElements()))
    }
    return s
  }, p.queryCell = function(t) {
    if ("number" == typeof t) return this.cells[t];
    if ("string" == typeof t) {
      if (t.match(/^[#\.]?[\d\/]/)) return;
      t = this.element.querySelector(t)
    }
    return this.getCell(t)
  }, p.uiChange = function() {
    this.emitEvent("uiChange")
  }, p.childUIPointerDown = function(t) {
    "touchstart" != t.type && t.preventDefault(), this.focus()
  }, p.onresize = function() {
    this.watchCSS(), this.resize()
  }, n.debounceMethod(f, "onresize", 150), p.resize = function() {
    if (this.isActive) {
      this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
      var t = this.selectedElements && this.selectedElements[0];
      this.selectCell(t, !1, !0)
    }
  }, p.watchCSS = function() {
    this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
  }, p.onkeydown = function(t) {
    var e = document.activeElement && document.activeElement != this.element;
    if (this.options.accessibility && !e) {
      var i = f.keyboardHandlers[t.keyCode];
      i && i.call(this)
    }
  }, f.keyboardHandlers = {
    37: function() {
      var t = this.options.rightToLeft ? "next" : "previous";
      this.uiChange(), this[t]()
    },
    39: function() {
      var t = this.options.rightToLeft ? "previous" : "next";
      this.uiChange(), this[t]()
    }
  }, p.focus = function() {
    var e = t.pageYOffset;
    this.element.focus({
      preventScroll: !0
    }), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
  }, p.deactivate = function() {
    this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function(t) {
      t.destroy()
    }), this.element.removeChild(this.viewport), d(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
  }, p.destroy = function() {
    this.deactivate(), t.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), a && this.$element && a.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete u[this.guid]
  }, n.extend(p, r), f.data = function(t) {
    var e = (t = n.getQueryElement(t)) && t.flickityGUID;
    return e && u[e]
  }, n.htmlInit(f, "flickity"), a && a.bridget && a.bridget("flickity", f), f.setJQuery = function(t) {
    a = t
  }, f.Cell = s, f.Slide = o, f
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter)
}(window, function(t, e) {
  function i() {}
  var n = i.prototype = Object.create(e.prototype);
  n.bindStartEvent = function(t) {
    this._bindStartEvent(t, !0)
  }, n.unbindStartEvent = function(t) {
    this._bindStartEvent(t, !1)
  }, n._bindStartEvent = function(e, i) {
    var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener",
      s = "mousedown";
    t.PointerEvent ? s = "pointerdown" : "ontouchstart" in t && (s = "touchstart"), e[n](s, this)
  }, n.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, n.getTouch = function(t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      if (i.identifier == this.pointerIdentifier) return i
    }
  }, n.onmousedown = function(t) {
    var e = t.button;
    e && 0 !== e && 1 !== e || this._pointerDown(t, t)
  }, n.ontouchstart = function(t) {
    this._pointerDown(t, t.changedTouches[0])
  }, n.onpointerdown = function(t) {
    this._pointerDown(t, t)
  }, n._pointerDown = function(t, e) {
    t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
  }, n.pointerDown = function(t, e) {
    this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
  };
  var s = {
    mousedown: ["mousemove", "mouseup"],
    touchstart: ["touchmove", "touchend", "touchcancel"],
    pointerdown: ["pointermove", "pointerup", "pointercancel"]
  };
  return n._bindPostStartEvents = function(e) {
    if (e) {
      var i = s[e.type];
      i.forEach(function(e) {
        t.addEventListener(e, this)
      }, this), this._boundPointerEvents = i
    }
  }, n._unbindPostStartEvents = function() {
    this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
      t.removeEventListener(e, this)
    }, this), delete this._boundPointerEvents)
  }, n.onmousemove = function(t) {
    this._pointerMove(t, t)
  }, n.onpointermove = function(t) {
    t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
  }, n.ontouchmove = function(t) {
    var e = this.getTouch(t.changedTouches);
    e && this._pointerMove(t, e)
  }, n._pointerMove = function(t, e) {
    this.pointerMove(t, e)
  }, n.pointerMove = function(t, e) {
    this.emitEvent("pointerMove", [t, e])
  }, n.onmouseup = function(t) {
    this._pointerUp(t, t)
  }, n.onpointerup = function(t) {
    t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
  }, n.ontouchend = function(t) {
    var e = this.getTouch(t.changedTouches);
    e && this._pointerUp(t, e)
  }, n._pointerUp = function(t, e) {
    this._pointerDone(), this.pointerUp(t, e)
  }, n.pointerUp = function(t, e) {
    this.emitEvent("pointerUp", [t, e])
  }, n._pointerDone = function() {
    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
  }, n._pointerReset = function() {
    this.isPointerDown = !1, delete this.pointerIdentifier
  }, n.pointerDone = function() {}, n.onpointercancel = function(t) {
    t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
  }, n.ontouchcancel = function(t) {
    var e = this.getTouch(t.changedTouches);
    e && this._pointerCancel(t, e)
  }, n._pointerCancel = function(t, e) {
    this._pointerDone(), this.pointerCancel(t, e)
  }, n.pointerCancel = function(t, e) {
    this.emitEvent("pointerCancel", [t, e])
  }, i.getPointerPoint = function(t) {
    return {
      x: t.pageX,
      y: t.pageY
    }
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer)
}(window, function(t, e) {
  function i() {}
  var n = i.prototype = Object.create(e.prototype);
  n.bindHandles = function() {
    this._bindHandles(!0)
  }, n.unbindHandles = function() {
    this._bindHandles(!1)
  }, n._bindHandles = function(e) {
    for (var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", s = 0; s < this.handles.length; s++) {
      var o = this.handles[s];
      this._bindStartEvent(o, e), o[i]("click", this), t.PointerEvent && (o.style.touchAction = n)
    }
  }, n._touchActionValue = "none", n.pointerDown = function(t, e) {
    this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
  };
  var s = {
      TEXTAREA: !0,
      INPUT: !0,
      SELECT: !0,
      OPTION: !0
    },
    o = {
      radio: !0,
      checkbox: !0,
      button: !0,
      submit: !0,
      image: !0,
      file: !0
    };
  return n.okayPointerDown = function(t) {
    var e = s[t.target.nodeName],
      i = o[t.target.type],
      n = !e || i;
    return n || this._pointerReset(), n
  }, n.pointerDownBlur = function() {
    var t = document.activeElement;
    t && t.blur && t != document.body && t.blur()
  }, n.pointerMove = function(t, e) {
    var i = this._dragPointerMove(t, e);
    this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
  }, n._dragPointerMove = function(t, e) {
    var i = {
      x: e.pageX - this.pointerDownPointer.pageX,
      y: e.pageY - this.pointerDownPointer.pageY
    };
    return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
  }, n.hasDragStarted = function(t) {
    return 3 < Math.abs(t.x) || 3 < Math.abs(t.y)
  }, n.pointerUp = function(t, e) {
    this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
  }, n._dragPointerUp = function(t, e) {
    this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
  }, n._dragStart = function(t, e) {
    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
  }, n.dragStart = function(t, e) {
    this.emitEvent("dragStart", [t, e])
  }, n._dragMove = function(t, e, i) {
    this.isDragging && this.dragMove(t, e, i)
  }, n.dragMove = function(t, e, i) {
    t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
  }, n._dragEnd = function(t, e) {
    this.isDragging = !1, setTimeout(function() {
      delete this.isPreventingClicks
    }.bind(this)), this.dragEnd(t, e)
  }, n.dragEnd = function(t, e) {
    this.emitEvent("dragEnd", [t, e])
  }, n.onclick = function(t) {
    this.isPreventingClicks && t.preventDefault()
  }, n._staticClick = function(t, e) {
    this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
      delete this.isIgnoringMouseUp
    }.bind(this), 400)))
  }, n.staticClick = function(t, e) {
    this.emitEvent("staticClick", [t, e])
  }, i.getPointerPoint = e.getPointerPoint, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, s) {
    return e(t, i, n, s)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
  n.extend(e.defaults, {
    draggable: ">1",
    dragThreshold: 3
  }), e.createMethods.push("_createDrag");
  var s = e.prototype;
  n.extend(s, i.prototype), s._touchActionValue = "pan-y";
  var o = "createTouch" in document,
    r = !1;
  s._createDrag = function() {
    this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), o && !r && (t.addEventListener("touchmove", function() {}), r = !0)
  }, s.onActivateDrag = function() {
    this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
  }, s.onDeactivateDrag = function() {
    this.unbindHandles(), this.element.classList.remove("is-draggable")
  }, s.updateDraggable = function() {
    ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
  }, s.bindDrag = function() {
    this.options.draggable = !0, this.updateDraggable()
  }, s.unbindDrag = function() {
    this.options.draggable = !1, this.updateDraggable()
  }, s._uiChangeDrag = function() {
    delete this.isFreeScrolling
  }, s.pointerDown = function(e, i) {
    this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), t.addEventListener("scroll", this), this._pointerDownDefault(e, i)) : this._pointerDownDefault(e, i)
  }, s._pointerDownDefault = function(t, e) {
    this.pointerDownPointer = {
      pageX: e.pageX,
      pageY: e.pageY
    }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
  };
  var a = {
    INPUT: !0,
    TEXTAREA: !0,
    SELECT: !0
  };

  function l() {
    return {
      x: t.pageXOffset,
      y: t.pageYOffset
    }
  }
  return s.pointerDownFocus = function(t) {
    a[t.target.nodeName] || this.focus()
  }, s._pointerDownPreventDefault = function(t) {
    var e = "touchstart" == t.type,
      i = "touch" == t.pointerType,
      n = a[t.target.nodeName];
    e || i || n || t.preventDefault()
  }, s.hasDragStarted = function(t) {
    return Math.abs(t.x) > this.options.dragThreshold
  }, s.pointerUp = function(t, e) {
    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
  }, s.pointerDone = function() {
    t.removeEventListener("scroll", this), delete this.pointerDownScroll
  }, s.dragStart = function(e, i) {
    this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]))
  }, s.pointerMove = function(t, e) {
    var i = this._dragPointerMove(t, e);
    this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
  }, s.dragMove = function(t, e, i) {
    if (this.isDraggable) {
      t.preventDefault(), this.previousDragX = this.dragX;
      var n = this.options.rightToLeft ? -1 : 1;
      this.options.wrapAround && (i.x = i.x % this.slideableWidth);
      var s = this.dragStartPosition + i.x * n;
      if (!this.options.wrapAround && this.slides.length) {
        var o = Math.max(-this.slides[0].target, this.dragStartPosition);
        s = o < s ? .5 * (s + o) : s;
        var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
        s = s < r ? .5 * (s + r) : s
      }
      this.dragX = s, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
    }
  }, s.dragEnd = function(t, e) {
    if (this.isDraggable) {
      this.options.freeScroll && (this.isFreeScrolling = !0);
      var i = this.dragEndRestingSelect();
      if (this.options.freeScroll && !this.options.wrapAround) {
        var n = this.getRestingPosition();
        this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
      } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
      delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
    }
  }, s.dragEndRestingSelect = function() {
    var t = this.getRestingPosition(),
      e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
      i = this._getClosestResting(t, e, 1),
      n = this._getClosestResting(t, e, -1);
    return i.distance < n.distance ? i.index : n.index
  }, s._getClosestResting = function(t, e, i) {
    for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
        return t <= e
      } : function(t, e) {
        return t < e
      }; o(e, s) && (n += i, s = e, null !== (e = this.getSlideDistance(-t, n)));) e = Math.abs(e);
    return {
      distance: s,
      index: n - i
    }
  }, s.getSlideDistance = function(t, e) {
    var i = this.slides.length,
      s = this.options.wrapAround && 1 < i,
      o = s ? n.modulo(e, i) : e,
      r = this.slides[o];
    if (!r) return null;
    var a = s ? this.slideableWidth * Math.floor(e / i) : 0;
    return t - (r.target + a)
  }, s.dragEndBoostSelect = function() {
    if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime) return 0;
    var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
      e = this.previousDragX - this.dragX;
    return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0
  }, s.staticClick = function(t, e) {
    var i = this.getParentCell(t.target),
      n = i && i.element,
      s = i && this.cells.indexOf(i);
    this.dispatchEvent("staticClick", t, [e, n, s])
  }, s.onscroll = function() {
    var t = l(),
      e = this.pointerDownScroll.x - t.x,
      i = this.pointerDownScroll.y - t.y;
    (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone()
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(i, n, s) {
    return e(t, i, n, s)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
  "use strict";
  var s = "http://www.w3.org/2000/svg";

  function o(t, e) {
    this.direction = t, this.parent = e, this._create()
  }(o.prototype = Object.create(i.prototype))._create = function() {
    this.isEnabled = !0, this.isPrevious = -1 == this.direction;
    var t = this.parent.options.rightToLeft ? 1 : -1;
    this.isLeft = this.direction == t;
    var e = this.element = document.createElement("button");
    e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
    var i = this.createSVG();
    e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
  }, o.prototype.activate = function() {
    this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
  }, o.prototype.deactivate = function() {
    this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
  }, o.prototype.createSVG = function() {
    var t = document.createElementNS(s, "svg");
    t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
    var e = document.createElementNS(s, "path"),
      i = function(t) {
        return "string" != typeof t ? "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z" : t
      }(this.parent.options.arrowShape);
    return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
  }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function() {
    if (this.isEnabled) {
      this.parent.uiChange();
      var t = this.isPrevious ? "previous" : "next";
      this.parent[t]()
    }
  }, o.prototype.enable = function() {
    this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
  }, o.prototype.disable = function() {
    this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
  }, o.prototype.update = function() {
    var t = this.parent.slides;
    if (this.parent.options.wrapAround && 1 < t.length) this.enable();
    else {
      var e = t.length ? t.length - 1 : 0,
        i = this.isPrevious ? 0 : e;
      this[this.parent.selectedIndex == i ? "disable" : "enable"]()
    }
  }, o.prototype.destroy = function() {
    this.deactivate(), this.allOff()
  }, n.extend(e.defaults, {
    prevNextButtons: !0,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 70,
      y2: 40,
      x3: 30
    }
  }), e.createMethods.push("_createPrevNextButtons");
  var r = e.prototype;
  return r._createPrevNextButtons = function() {
    this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
  }, r.activatePrevNextButtons = function() {
    this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
  }, r.deactivatePrevNextButtons = function() {
    this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
  }, e.PrevNextButton = o, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(i, n, s) {
    return e(t, i, n, s)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
  function s(t) {
    this.parent = t, this._create()
  }(s.prototype = Object.create(i.prototype))._create = function() {
    this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
  }, s.prototype.activate = function() {
    this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
  }, s.prototype.deactivate = function() {
    this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
  }, s.prototype.setDots = function() {
    var t = this.parent.slides.length - this.dots.length;
    0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t)
  }, s.prototype.addDots = function(t) {
    for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + t, o = n; o < s; o++) {
      var r = document.createElement("li");
      r.className = "dot", r.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(r), i.push(r)
    }
    this.holder.appendChild(e), this.dots = this.dots.concat(i)
  }, s.prototype.removeDots = function(t) {
    this.dots.splice(this.dots.length - t, t).forEach(function(t) {
      this.holder.removeChild(t)
    }, this)
  }, s.prototype.updateSelected = function() {
    this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
  }, s.prototype.onTap = s.prototype.onClick = function(t) {
    var e = t.target;
    if ("LI" == e.nodeName) {
      this.parent.uiChange();
      var i = this.dots.indexOf(e);
      this.parent.select(i)
    }
  }, s.prototype.destroy = function() {
    this.deactivate(), this.allOff()
  }, e.PageDots = s, n.extend(e.defaults, {
    pageDots: !0
  }), e.createMethods.push("_createPageDots");
  var o = e.prototype;
  return o._createPageDots = function() {
    this.options.pageDots && (this.pageDots = new s(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
  }, o.activatePageDots = function() {
    this.pageDots.activate()
  }, o.updateSelectedPageDots = function() {
    this.pageDots.updateSelected()
  }, o.updatePageDots = function() {
    this.pageDots.setDots()
  }, o.deactivatePageDots = function() {
    this.pageDots.deactivate()
  }, e.PageDots = s, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, i, n) {
    return e(t, i, n)
  }) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function(t, e, i) {
  function n(t) {
    this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
  }(n.prototype = Object.create(t.prototype)).play = function() {
    "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
  }, n.prototype.tick = function() {
    if ("playing" == this.state) {
      var t = this.parent.options.autoPlay;
      t = "number" == typeof t ? t : 3e3;
      var e = this;
      this.clear(), this.timeout = setTimeout(function() {
        e.parent.next(!0), e.tick()
      }, t)
    }
  }, n.prototype.stop = function() {
    this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
  }, n.prototype.clear = function() {
    clearTimeout(this.timeout)
  }, n.prototype.pause = function() {
    "playing" == this.state && (this.state = "paused", this.clear())
  }, n.prototype.unpause = function() {
    "paused" == this.state && this.play()
  }, n.prototype.visibilityChange = function() {
    this[document.hidden ? "pause" : "unpause"]()
  }, n.prototype.visibilityPlay = function() {
    this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
  }, e.extend(i.defaults, {
    pauseAutoPlayOnHover: !0
  }), i.createMethods.push("_createPlayer");
  var s = i.prototype;
  return s._createPlayer = function() {
    this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
  }, s.activatePlayer = function() {
    this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
  }, s.playPlayer = function() {
    this.player.play()
  }, s.stopPlayer = function() {
    this.player.stop()
  }, s.pausePlayer = function() {
    this.player.pause()
  }, s.unpausePlayer = function() {
    this.player.unpause()
  }, s.deactivatePlayer = function() {
    this.player.stop(), this.element.removeEventListener("mouseenter", this)
  }, s.onmouseenter = function() {
    this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
  }, s.onmouseleave = function() {
    this.player.unpause(), this.element.removeEventListener("mouseleave", this)
  }, i.Player = n, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
    return e(t, i, n)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i) {
  var n = e.prototype;
  return n.insert = function(t, e) {
    var i = this._makeCells(t);
    if (i && i.length) {
      var n = this.cells.length;
      e = void 0 === e ? n : e;
      var s = function(t) {
          var e = document.createDocumentFragment();
          return t.forEach(function(t) {
            e.appendChild(t.element)
          }), e
        }(i),
        o = e == n;
      if (o) this.slider.appendChild(s);
      else {
        var r = this.cells[e].element;
        this.slider.insertBefore(s, r)
      }
      if (0 === e) this.cells = i.concat(this.cells);
      else if (o) this.cells = this.cells.concat(i);
      else {
        var a = this.cells.splice(e, n - e);
        this.cells = this.cells.concat(i).concat(a)
      }
      this._sizeCells(i), this.cellChange(e, !0)
    }
  }, n.append = function(t) {
    this.insert(t, this.cells.length)
  }, n.prepend = function(t) {
    this.insert(t, 0)
  }, n.remove = function(t) {
    var e = this.getCells(t);
    if (e && e.length) {
      var n = this.cells.length - 1;
      e.forEach(function(t) {
        t.remove();
        var e = this.cells.indexOf(t);
        n = Math.min(e, n), i.removeFrom(this.cells, t)
      }, this), this.cellChange(n, !0)
    }
  }, n.cellSizeChange = function(t) {
    var e = this.getCell(t);
    if (e) {
      e.getSize();
      var i = this.cells.indexOf(e);
      this.cellChange(i)
    }
  }, n.cellChange = function(t, e) {
    var i = this.selectedElement;
    this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
    var n = this.getCell(i);
    n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
    return e(t, i, n)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i) {
  "use strict";
  e.createMethods.push("_createLazyload");
  var n = e.prototype;

  function s(t, e) {
    this.img = t, this.flickity = e, this.load()
  }
  return n._createLazyload = function() {
    this.on("select", this.lazyLoad)
  }, n.lazyLoad = function() {
    var t = this.options.lazyLoad;
    if (t) {
      var e = "number" == typeof t ? t : 0,
        n = this.getAdjacentCellElements(e),
        o = [];
      n.forEach(function(t) {
        var e = function(t) {
          if ("IMG" == t.nodeName) {
            var e = t.getAttribute("data-flickity-lazyload"),
              n = t.getAttribute("data-flickity-lazyload-src"),
              s = t.getAttribute("data-flickity-lazyload-srcset");
            if (e || n || s) return [t]
          }
          var o = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
          return i.makeArray(o)
        }(t);
        o = o.concat(e)
      }), o.forEach(function(t) {
        new s(t, this)
      }, this)
    }
  }, s.prototype.handleEvent = i.handleEvent, s.prototype.load = function() {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this);
    var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
      e = this.img.getAttribute("data-flickity-lazyload-srcset");
    this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
  }, s.prototype.onload = function(t) {
    this.complete(t, "flickity-lazyloaded")
  }, s.prototype.onerror = function(t) {
    this.complete(t, "flickity-lazyerror")
  }, s.prototype.complete = function(t, e) {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    var i = this.flickity.getParentCell(this.img),
      n = i && i.element;
    this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
  }, e.LazyLoader = s, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function(t) {
  return t
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function(t, e) {
  t.createMethods.push("_createAsNavFor");
  var i = t.prototype;
  return i._createAsNavFor = function() {
    this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
    var t = this.options.asNavFor;
    if (t) {
      var e = this;
      setTimeout(function() {
        e.setNavCompanion(t)
      })
    }
  }, i.setNavCompanion = function(i) {
    i = e.getQueryElement(i);
    var n = t.data(i);
    if (n && n != this) {
      this.navCompanion = n;
      var s = this;
      this.onNavCompanionSelect = function() {
        s.navCompanionSelect()
      }, n.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
    }
  }, i.navCompanionSelect = function(t) {
    var e = this.navCompanion && this.navCompanion.selectedCells;
    if (e) {
      var i = e[0],
        n = this.navCompanion.cells.indexOf(i),
        s = n + e.length - 1,
        o = Math.floor(function(t, e, i) {
          return (e - t) * i + t
        }(n, s, this.navCompanion.cellAlign));
      if (this.selectCell(o, !1, t), this.removeNavSelectedElements(), !(o >= this.cells.length)) {
        var r = this.cells.slice(n, 1 + s);
        this.navSelectedElements = r.map(function(t) {
          return t.element
        }), this.changeNavSelectedClass("add")
      }
    }
  }, i.changeNavSelectedClass = function(t) {
    this.navSelectedElements.forEach(function(e) {
      e.classList[t]("is-nav-selected")
    })
  }, i.activateAsNavFor = function() {
    this.navCompanionSelect(!0)
  }, i.removeNavSelectedElements = function() {
    this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
  }, i.onNavStaticClick = function(t, e, i, n) {
    "number" == typeof n && this.navCompanion.selectCell(n)
  }, i.deactivateAsNavFor = function() {
    this.removeNavSelectedElements()
  }, i.destroyAsNavFor = function() {
    this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
  }, t
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function(t, e) {
  var i = t.jQuery,
    n = t.console;

  function s(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }
  var o = Array.prototype.slice;

  function r(t, e, a) {
    if (!(this instanceof r)) return new r(t, e, a);
    var l = t;
    "string" == typeof t && (l = document.querySelectorAll(t)), l ? (this.elements = function(t) {
      return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? o.call(t) : [t]
    }(l), this.options = s({}, this.options), "function" == typeof e ? a = e : s(this.options, e), a && this.on("always", a), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (l || t))
  }(r.prototype = Object.create(e.prototype)).options = {}, r.prototype.getImages = function() {
    this.images = [], this.elements.forEach(this.addElementImages, this)
  }, r.prototype.addElementImages = function(t) {
    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
    var e = t.nodeType;
    if (e && a[e]) {
      for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var s = i[n];
        this.addImage(s)
      }
      if ("string" == typeof this.options.background) {
        var o = t.querySelectorAll(this.options.background);
        for (n = 0; n < o.length; n++) {
          var r = o[n];
          this.addElementBackgroundImages(r)
        }
      }
    }
  };
  var a = {
    1: !0,
    9: !0,
    11: !0
  };

  function l(t) {
    this.img = t
  }

  function h(t, e) {
    this.url = t, this.element = e, this.img = new Image
  }
  return r.prototype.addElementBackgroundImages = function(t) {
    var e = getComputedStyle(t);
    if (e)
      for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
        var s = n && n[2];
        s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
      }
  }, r.prototype.addImage = function(t) {
    var e = new l(t);
    this.images.push(e)
  }, r.prototype.addBackground = function(t, e) {
    var i = new h(t, e);
    this.images.push(i)
  }, r.prototype.check = function() {
    var t = this;

    function e(e, i, n) {
      setTimeout(function() {
        t.progress(e, i, n)
      })
    }
    this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(t) {
      t.once("progress", e), t.check()
    }) : this.complete()
  }, r.prototype.progress = function(t, e, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, t, e)
  }, r.prototype.complete = function() {
    var t = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[e](this)
    }
  }, (l.prototype = Object.create(e.prototype)).check = function() {
    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
  }, l.prototype.getIsImageComplete = function() {
    return this.img.complete && this.img.naturalWidth
  }, l.prototype.confirm = function(t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
  }, l.prototype.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, l.prototype.onload = function() {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, l.prototype.onerror = function() {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, l.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, (h.prototype = Object.create(l.prototype)).check = function() {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, h.prototype.unbindEvents = function() {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, h.prototype.confirm = function(t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
  }, r.makeJQueryPlugin = function(e) {
    (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
      return new r(this, t, e).jqDeferred.promise(i(this))
    })
  }, r.makeJQueryPlugin(), r
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
    return e(t, i, n)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
}(window, function(t, e, i) {
  "use strict";
  e.createMethods.push("_createImagesLoaded");
  var n = e.prototype;
  return n._createImagesLoaded = function() {
    this.on("activate", this.imagesLoaded)
  }, n.imagesLoaded = function() {
    if (this.options.imagesLoaded) {
      var t = this;
      i(this.slider).on("progress", function(e, i) {
        var n = t.getParentCell(i.img);
        t.cellSizeChange(n && n.element), t.options.freeScroll || t.positionSliderAtSelected()
      })
    }
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : e(t.Flickity, t.fizzyUIUtils)
}(this, function(t, e) {
  var i = t.Slide,
    n = i.prototype.updateTarget;
  i.prototype.updateTarget = function() {
    if (n.apply(this, arguments), this.parent.options.fade) {
      var t = this.target - this.x,
        e = this.cells[0].x;
      this.cells.forEach(function(i) {
        var n = i.x - e - t;
        i.renderPosition(n)
      })
    }
  }, i.prototype.setOpacity = function(t) {
    this.cells.forEach(function(e) {
      e.element.style.opacity = t
    })
  };
  var s = t.prototype;
  t.createMethods.push("_createFade"), s._createFade = function() {
    this.fadeIndex = this.selectedIndex, this.prevSelectedIndex = this.selectedIndex, this.on("select", this.onSelectFade), this.on("dragEnd", this.onDragEndFade), this.on("settle", this.onSettleFade), this.on("activate", this.onActivateFade), this.on("deactivate", this.onDeactivateFade)
  };
  var o = s.updateSlides;
  s.updateSlides = function() {
    o.apply(this, arguments), this.options.fade && this.slides.forEach(function(t, e) {
      var i = e == this.selectedIndex ? 1 : 0;
      t.setOpacity(i)
    }, this)
  }, s.onSelectFade = function() {
    this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1), this.prevSelectedIndex = this.selectedIndex
  }, s.onSettleFade = function() {
    (delete this.didDragEnd, this.options.fade) && (this.selectedSlide.setOpacity(1), this.slides[this.fadeIndex] && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0))
  }, s.onDragEndFade = function() {
    this.didDragEnd = !0
  }, s.onActivateFade = function() {
    this.options.fade && this.element.classList.add("is-fade")
  }, s.onDeactivateFade = function() {
    this.options.fade && (this.element.classList.remove("is-fade"), this.slides.forEach(function(t) {
      t.setOpacity("")
    }))
  };
  var r = s.positionSlider;
  s.positionSlider = function() {
    this.options.fade ? (this.fadeSlides(), this.dispatchScrollEvent()) : r.apply(this, arguments)
  };
  var a = s.positionSliderAtSelected;
  s.positionSliderAtSelected = function() {
    this.options.fade && this.setTranslateX(0), a.apply(this, arguments)
  }, s.fadeSlides = function() {
    if (!(this.slides.length < 2)) {
      var t = this.getFadeIndexes(),
        e = this.slides[t.a],
        i = this.slides[t.b],
        n = this.wrapDifference(e.target, i.target),
        s = this.wrapDifference(e.target, -this.x);
      s /= n, e.setOpacity(1 - s), i.setOpacity(s);
      var o = t.a;
      this.isDragging && (o = s > .5 ? t.a : t.b), null != this.fadeHideIndex && this.fadeHideIndex != o && this.fadeHideIndex != t.a && this.fadeHideIndex != t.b && this.slides[this.fadeHideIndex].setOpacity(0), this.fadeHideIndex = o
    }
  }, s.getFadeIndexes = function() {
    return this.isDragging || this.didDragEnd ? this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes() : {
      a: this.fadeIndex,
      b: this.selectedIndex
    }
  }, s.getFadeDragWrapIndexes = function() {
    var t = this.slides.map(function(t, e) {
        return this.getSlideDistance(-this.x, e)
      }, this),
      i = t.map(function(t) {
        return Math.abs(t)
      }),
      n = Math.min.apply(Math, i),
      s = i.indexOf(n),
      o = t[s],
      r = this.slides.length,
      a = o >= 0 ? 1 : -1;
    return {
      a: s,
      b: e.modulo(s + a, r)
    }
  }, s.getFadeDragLimitIndexes = function() {
    for (var t = 0, e = 0; e < this.slides.length - 1; e++) {
      var i = this.slides[e];
      if (-this.x < i.target) break;
      t = e
    }
    return {
      a: t,
      b: t + 1
    }
  }, s.wrapDifference = function(t, e) {
    var i = e - t;
    if (!this.options.wrapAround) return i;
    var n = i + this.slideableWidth,
      s = i - this.slideableWidth;
    return Math.abs(n) < Math.abs(i) && (i = n), Math.abs(s) < Math.abs(i) && (i = s), i
  };
  var l = s._getWrapShiftCells;
  s._getWrapShiftCells = function() {
    this.options.fade || l.apply(this, arguments)
  };
  var h = s.shiftWrapCells;
  return s.shiftWrapCells = function() {
    this.options.fade || h.apply(this, arguments)
  }, t
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function(t, e) {
  "use strict";
  return t.createMethods.push("_createSync"), t.prototype._createSync = function() {
    this.syncers = {};
    var t = this.options.sync;
    if (this.on("destroy", this.unsyncAll), t) {
      var e = this;
      setTimeout(function() {
        e.sync(t)
      })
    }
  }, t.prototype.sync = function(i) {
    i = e.getQueryElement(i);
    var n = t.data(i);
    n && (this._syncCompanion(n), n._syncCompanion(this))
  }, t.prototype._syncCompanion = function(t) {
    var e = this;

    function i() {
      var i = e.selectedIndex;
      t.selectedIndex != i && t.select(i)
    }
    this.on("select", i), this.syncers[t.guid] = {
      flickity: t,
      listener: i
    }
  }, t.prototype.unsync = function(i) {
    i = e.getQueryElement(i);
    var n = t.data(i);
    this._unsync(n)
  }, t.prototype._unsync = function(t) {
    t && (this._unsyncCompanion(t), t._unsyncCompanion(this))
  }, t.prototype._unsyncCompanion = function(t) {
    var e = t.guid,
      i = this.syncers[e];
    this.off("select", i.listener), delete this.syncers[e]
  }, t.prototype.unsyncAll = function() {
    for (var t in this.syncers) {
      var e = this.syncers[t];
      this._unsync(e.flickity)
    }
  }, t
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : e(t.Flickity, t.fizzyUIUtils)
}(this, function(t, e) {
  var i = t.Slide,
    n = i.prototype.updateTarget;
  i.prototype.updateTarget = function() {
    var t, e;
    n.apply(this, arguments), this.parent.options.fade && (t = this.target - this.x, e = this.cells[0].x, this.cells.forEach(function(i) {
      var n = i.x - e - t;
      i.renderPosition(n)
    }))
  }, i.prototype.setOpacity = function(t) {
    this.cells.forEach(function(e) {
      e.element.style.opacity = t
    })
  };
  var s = t.prototype;
  t.createMethods.push("_createFade"), s._createFade = function() {
    this.fadeIndex = this.selectedIndex, this.prevSelectedIndex = this.selectedIndex, this.on("select", this.onSelectFade), this.on("dragEnd", this.onDragEndFade), this.on("settle", this.onSettleFade), this.on("activate", this.onActivateFade), this.on("deactivate", this.onDeactivateFade)
  };
  var o = s.updateSlides;
  s.updateSlides = function() {
    o.apply(this, arguments), this.options.fade && this.slides.forEach(function(t, e) {
      var i = e == this.selectedIndex ? 1 : 0;
      t.setOpacity(i)
    }, this)
  }, s.onSelectFade = function() {
    this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1), this.prevSelectedIndex = this.selectedIndex
  }, s.onSettleFade = function() {
    delete this.didDragEnd, this.options.fade && (this.selectedSlide.setOpacity(1), this.slides[this.fadeIndex] && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0))
  }, s.onDragEndFade = function() {
    this.didDragEnd = !0
  }, s.onActivateFade = function() {
    this.options.fade && this.element.classList.add("is-fade")
  }, s.onDeactivateFade = function() {
    this.options.fade && (this.element.classList.remove("is-fade"), this.slides.forEach(function(t) {
      t.setOpacity("")
    }))
  };
  var r = s.positionSlider;
  s.positionSlider = function() {
    this.options.fade ? (this.fadeSlides(), this.dispatchScrollEvent()) : r.apply(this, arguments)
  };
  var a = s.positionSliderAtSelected;
  s.positionSliderAtSelected = function() {
    this.options.fade && this.setTranslateX(0), a.apply(this, arguments)
  }, s.fadeSlides = function() {
    var t, e, i, n, s, o;
    this.slides.length < 2 || (t = this.getFadeIndexes(), e = this.slides[t.a], i = this.slides[t.b], n = this.wrapDifference(e.target, i.target), s = this.wrapDifference(e.target, -this.x), s /= n, e.setOpacity(1 - s), i.setOpacity(s), o = t.a, this.isDragging && (o = .5 < s ? t.a : t.b), null != this.fadeHideIndex && this.fadeHideIndex != o && this.fadeHideIndex != t.a && this.fadeHideIndex != t.b && this.slides[this.fadeHideIndex].setOpacity(0), this.fadeHideIndex = o)
  }, s.getFadeIndexes = function() {
    return this.isDragging || this.didDragEnd ? this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes() : {
      a: this.fadeIndex,
      b: this.selectedIndex
    }
  }, s.getFadeDragWrapIndexes = function() {
    var t = this.slides.map(function(t, e) {
        return this.getSlideDistance(-this.x, e)
      }, this),
      i = t.map(function(t) {
        return Math.abs(t)
      }),
      n = Math.min.apply(Math, i),
      s = i.indexOf(n),
      o = t[s],
      r = this.slides.length,
      a = 0 <= o ? 1 : -1;
    return {
      a: s,
      b: e.modulo(s + a, r)
    }
  }, s.getFadeDragLimitIndexes = function() {
    for (var t = 0, e = 0; e < this.slides.length - 1; e++) {
      var i = this.slides[e];
      if (-this.x < i.target) break;
      t = e
    }
    return {
      a: t,
      b: t + 1
    }
  }, s.wrapDifference = function(t, e) {
    var i = e - t;
    if (!this.options.wrapAround) return i;
    var n = i + this.slideableWidth,
      s = i - this.slideableWidth;
    return Math.abs(n) < Math.abs(i) && (i = n), Math.abs(s) < Math.abs(i) && (i = s), i
  };
  var l = s._getWrapShiftCells;
  s._getWrapShiftCells = function() {
    this.options.fade || l.apply(this, arguments)
  };
  var h = s.shiftWrapCells;
  return s.shiftWrapCells = function() {
    this.options.fade || h.apply(this, arguments)
  }, t
});
! function(e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
  function e() {}
  var t = e.prototype;
  return t.on = function(e, t) {
    if (e && t) {
      var i = this._events = this._events || {},
        n = i[e] = i[e] || [];
      return n.indexOf(t) == -1 && n.push(t), this
    }
  }, t.once = function(e, t) {
    if (e && t) {
      this.on(e, t);
      var i = this._onceEvents = this._onceEvents || {},
        n = i[e] = i[e] || {};
      return n[t] = !0, this
    }
  }, t.off = function(e, t) {
    var i = this._events && this._events[e];
    if (i && i.length) {
      var n = i.indexOf(t);
      return n != -1 && i.splice(n, 1), this
    }
  }, t.emitEvent = function(e, t) {
    var i = this._events && this._events[e];
    if (i && i.length) {
      i = i.slice(0), t = t || [];
      for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
        var r = i[o],
          s = n && n[r];
        s && (this.off(e, r), delete n[r]), r.apply(this, t)
      }
      return this
    }
  }, t.allOff = function() {
    delete this._events, delete this._onceEvents
  }, e
}),
function(e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
    return t(e, i)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
  function i(e, t) {
    for (var i in t) e[i] = t[i];
    return e
  }

  function n(e) {
    if (Array.isArray(e)) return e;
    var t = "object" == typeof e && "number" == typeof e.length;
    return t ? d.call(e) : [e]
  }

  function o(e, t, r) {
    if (!(this instanceof o)) return new o(e, t, r);
    var s = e;
    return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
  }

  function r(e) {
    this.img = e
  }

  function s(e, t) {
    this.url = e, this.element = t, this.img = new Image
  }
  var h = e.jQuery,
    a = e.console,
    d = Array.prototype.slice;
  o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
    this.images = [], this.elements.forEach(this.addElementImages, this)
  }, o.prototype.addElementImages = function(e) {
    "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
    var t = e.nodeType;
    if (t && u[t]) {
      for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o)
      }
      if ("string" == typeof this.options.background) {
        var r = e.querySelectorAll(this.options.background);
        for (n = 0; n < r.length; n++) {
          var s = r[n];
          this.addElementBackgroundImages(s)
        }
      }
    }
  };
  var u = {
    1: !0,
    9: !0,
    11: !0
  };
  return o.prototype.addElementBackgroundImages = function(e) {
    var t = getComputedStyle(e);
    if (t)
      for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
        var o = n && n[2];
        o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
      }
  }, o.prototype.addImage = function(e) {
    var t = new r(e);
    this.images.push(t)
  }, o.prototype.addBackground = function(e, t) {
    var i = new s(e, t);
    this.images.push(i)
  }, o.prototype.check = function() {
    function e(e, i, n) {
      setTimeout(function() {
        t.progress(e, i, n)
      })
    }
    var t = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
      t.once("progress", e), t.check()
    }) : void this.complete()
  }, o.prototype.progress = function(e, t, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
  }, o.prototype.complete = function() {
    var e = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t](this)
    }
  }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
    var e = this.getIsImageComplete();
    return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
  }, r.prototype.getIsImageComplete = function() {
    return this.img.complete && this.img.naturalWidth
  }, r.prototype.confirm = function(e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
  }, r.prototype.handleEvent = function(e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, r.prototype.onload = function() {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, r.prototype.onerror = function() {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, r.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
    var e = this.getIsImageComplete();
    e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, s.prototype.unbindEvents = function() {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype.confirm = function(e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
  }, o.makeJQueryPlugin = function(t) {
    t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
      var i = new o(this, e, t);
      return i.jqDeferred.promise(h(this))
    })
  }, o.makeJQueryPlugin(), o
});
! function(a, b) {
  var c = b(a, a.document);
  a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c)
}(window, function(a, b) {
  "use strict";
  if (b.getElementsByClassName) {
    var c, d, e = b.documentElement,
      f = a.Date,
      g = a.HTMLPictureElement,
      h = "addEventListener",
      i = "getAttribute",
      j = a[h],
      k = a.setTimeout,
      l = a.requestAnimationFrame || k,
      m = a.requestIdleCallback,
      n = /^picture$/i,
      o = ["load", "error", "lazyincluded", "_lazyloaded"],
      p = {},
      q = Array.prototype.forEach,
      r = function(a, b) {
        return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b]
      },
      s = function(a, b) {
        r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b)
      },
      t = function(a, b) {
        var c;
        (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "))
      },
      u = function(a, b, c) {
        var d = c ? h : "removeEventListener";
        c && u(a, b), o.forEach(function(c) {
          a[d](c, b)
        })
      },
      v = function(a, d, e, f, g) {
        var h = b.createEvent("CustomEvent");
        return e || (e = {}), e.instance = c, h.initCustomEvent(d, !f, !g, e), a.dispatchEvent(h), h
      },
      w = function(b, c) {
        var e;
        !g && (e = a.picturefill || d.pf) ? e({
          reevaluate: !0,
          elements: [b]
        }) : c && c.src && (b.src = c.src)
      },
      x = function(a, b) {
        return (getComputedStyle(a, null) || {})[b]
      },
      y = function(a, b, c) {
        for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;) c = b.offsetWidth, b = b.parentNode;
        return c
      },
      z = function() {
        var a, c, d = [],
          e = [],
          f = d,
          g = function() {
            var b = f;
            for (f = d.length ? e : d, a = !0, c = !1; b.length;) b.shift()();
            a = !1
          },
          h = function(d, e) {
            a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g)))
          };
        return h._lsFlush = g, h
      }(),
      A = function(a, b) {
        return b ? function() {
          z(a)
        } : function() {
          var b = this,
            c = arguments;
          z(function() {
            a.apply(b, c)
          })
        }
      },
      B = function(a) {
        var b, c = 0,
          e = 125,
          g = d.ricTimeout,
          h = function() {
            b = !1, c = f.now(), a()
          },
          i = m && d.ricTimeout ? function() {
            m(h, {
              timeout: g
            }), g !== d.ricTimeout && (g = d.ricTimeout)
          } : A(function() {
            k(h)
          }, !0);
        return function(a) {
          var d;
          (a = a === !0) && (g = 33), b || (b = !0, d = e - (f.now() - c), 0 > d && (d = 0), a || 9 > d && m ? i() : k(i, d))
        }
      },
      C = function(a) {
        var b, c, d = 99,
          e = function() {
            b = null, a()
          },
          g = function() {
            var a = f.now() - c;
            d > a ? k(g, d - a) : (m || e)(e)
          };
        return function() {
          c = f.now(), b || (b = k(g, d))
        }
      };
    ! function() {
      var b, c = {
        lazyClass: "lazyload",
        loadedClass: "lazyloaded",
        loadingClass: "lazyloading",
        preloadClass: "lazypreload",
        errorClass: "lazyerror",
        autosizesClass: "lazyautosizes",
        srcAttr: "data-src",
        srcsetAttr: "data-srcset",
        sizesAttr: "data-sizes",
        minSize: 40,
        customMedia: {},
        init: !0,
        expFactor: 1.5,
        hFac: .8,
        loadMode: 2,
        loadHidden: !0,
        ricTimeout: 300
      };
      d = a.lazySizesConfig || a.lazysizesConfig || {};
      for (b in c) b in d || (d[b] = c[b]);
      a.lazySizesConfig = d, k(function() {
        d.init && F()
      })
    }();
    var D = function() {
        var g, l, m, o, p, y, D, F, G, H, I, J, K, L, M = /^img$/i,
          N = /^iframe$/i,
          O = "onscroll" in a && !/glebot/.test(navigator.userAgent),
          P = 0,
          Q = 0,
          R = 0,
          S = -1,
          T = function(a) {
            R--, a && a.target && u(a.target, T), (!a || 0 > R || !a.target) && (R = 0)
          },
          U = function(a, c) {
            var d, f = a,
              g = "hidden" == x(b.body, "visibility") || "hidden" != x(a, "visibility");
            for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;) g = (x(f, "opacity") || 1) > 0, g && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1);
            return g
          },
          V = function() {
            var a, f, h, j, k, m, n, p, q, r = c.elements;
            if ((o = d.loadMode) && 8 > R && (a = r.length)) {
              f = 0, S++, null == K && ("expand" in d || (d.expand = e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370), J = d.expand, K = J * d.expFactor), K > Q && 1 > R && S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S > 1 && 6 > R ? J : P;
              for (; a > f; f++)
                if (r[f] && !r[f]._lazyRace)
                  if (O)
                    if ((p = r[f][i]("data-expand")) && (m = 1 * p) || (m = Q), q !== m && (y = innerWidth + m * L, D = innerHeight + m, n = -1 * m, q = m), h = r[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * L && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || "hidden" != x(r[f], "visibility")) && (l && 3 > R && !p && (3 > o || 4 > S) || U(r[f], m))) {
                      if (ba(r[f]), k = !0, R > 9) break
                    } else !k && l && !j && 4 > R && 4 > S && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != r[f][i](d.sizesAttr))) && (j = g[0] || r[f]);
              else ba(r[f]);
              j && !k && ba(j)
            }
          },
          W = B(V),
          X = function(a) {
            s(a.target, d.loadedClass), t(a.target, d.loadingClass), u(a.target, Z), v(a.target, "lazyloaded")
          },
          Y = A(X),
          Z = function(a) {
            Y({
              target: a.target
            })
          },
          $ = function(a, b) {
            try {
              a.contentWindow.location.replace(b)
            } catch (c) {
              a.src = b
            }
          },
          _ = function(a) {
            var b, c = a[i](d.srcsetAttr);
            (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c)
          },
          aa = A(function(a, b, c, e, f) {
            var g, h, j, l, o, p;
            (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = {
              target: a
            }, p && (u(a, T, !0), clearTimeout(m), m = k(T, 2500), s(a, d.loadingClass), u(a, Z, !0)), l && q.call(j.getElementsByTagName("source"), _), h ? a.setAttribute("srcset", h) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), f && (h || l) && w(a, {
              src: g
            })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function() {
              (!p || a.complete && a.naturalWidth > 1) && (p ? T(o) : R--, X(o))
            }, !0)
          }),
          ba = function(a) {
            var b, c = M.test(a.nodeName),
              e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
              f = "auto" == e;
            (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, c))
          },
          ca = function() {
            if (!l) {
              if (f.now() - p < 999) return void k(ca, 999);
              var a = C(function() {
                d.loadMode = 3, W()
              });
              l = !0, d.loadMode = 3, W(), j("scroll", function() {
                3 == d.loadMode && (d.loadMode = 2), a()
              }, !0)
            }
          };
        return {
          _: function() {
            p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), L = d.hFac, j("scroll", W, !0), j("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(e, {
              childList: !0,
              subtree: !0,
              attributes: !0
            }) : (e[h]("DOMNodeInserted", W, !0), e[h]("DOMAttrModified", W, !0), setInterval(W, 999)), j("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(a) {
              b[h](a, W, !0)
            }), /d$|^c/.test(b.readyState) ? ca() : (j("load", ca), b[h]("DOMContentLoaded", W), k(ca, 2e4)), c.elements.length ? (V(), z._lsFlush()) : W()
          },
          checkElems: W,
          unveil: ba
        }
      }(),
      E = function() {
        var a, c = A(function(a, b, c, d) {
            var e, f, g;
            if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || ""))
              for (e = b.getElementsByTagName("source"), f = 0, g = e.length; g > f; f++) e[f].setAttribute("sizes", d);
            c.detail.dataAttr || w(a, c.detail)
          }),
          e = function(a, b, d) {
            var e, f = a.parentNode;
            f && (d = y(a, f, d), e = v(a, "lazybeforesizes", {
              width: d,
              dataAttr: !!b
            }), e.defaultPrevented || (d = e.detail.width, d && d !== a._lazysizesWidth && c(a, f, e, d)))
          },
          f = function() {
            var b, c = a.length;
            if (c)
              for (b = 0; c > b; b++) e(a[b])
          },
          g = C(f);
        return {
          _: function() {
            a = b.getElementsByClassName(d.autosizesClass), j("resize", g)
          },
          checkElems: g,
          updateElem: e
        }
      }(),
      F = function() {
        F.i || (F.i = !0, E._(), D._())
      };
    return c = {
      cfg: d,
      autoSizer: E,
      loader: D,
      init: F,
      uP: w,
      aC: s,
      rC: t,
      hC: r,
      fire: v,
      gW: y,
      rAF: z
    }
  }
});
! function(a, b) {
  var c = function() {
    b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0)
  };
  b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0)
}(window, function(a, b, c) {
  "use strict";
  if (a.addEventListener) {
    var d = /\s+/g,
      e = /\s*\|\s+|\s+\|\s*/g,
      f = /^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,
      g = /\(|\)|'/,
      h = {
        contain: 1,
        cover: 1
      },
      i = function(a) {
        var b = c.gW(a, a.parentNode);
        return (!a._lazysizesWidth || b > a._lazysizesWidth) && (a._lazysizesWidth = b), a._lazysizesWidth
      },
      j = function(a) {
        var b;
        return b = (getComputedStyle(a) || {
          getPropertyValue: function() {}
        }).getPropertyValue("background-size"), !h[b] && h[a.style.backgroundSize] && (b = a.style.backgroundSize), b
      },
      k = function(a, c, g) {
        var h = b.createElement("picture"),
          i = c.getAttribute(lazySizesConfig.sizesAttr),
          j = c.getAttribute("data-ratio"),
          k = c.getAttribute("data-optimumx");
        c._lazybgset && c._lazybgset.parentNode == c && c.removeChild(c._lazybgset), Object.defineProperty(g, "_lazybgset", {
          value: c,
          writable: !0
        }), Object.defineProperty(c, "_lazybgset", {
          value: h,
          writable: !0
        }), a = a.replace(d, " ").split(e), h.style.display = "none", g.className = lazySizesConfig.lazyClass, 1 != a.length || i || (i = "auto"), a.forEach(function(a) {
          var c = b.createElement("source");
          i && "auto" != i && c.setAttribute("sizes", i), a.match(f) && (c.setAttribute(lazySizesConfig.srcsetAttr, RegExp.$1), RegExp.$2 && c.setAttribute("media", lazySizesConfig.customMedia[RegExp.$2] || RegExp.$2)), h.appendChild(c)
        }), i && (g.setAttribute(lazySizesConfig.sizesAttr, i), c.removeAttribute(lazySizesConfig.sizesAttr), c.removeAttribute("sizes")), k && g.setAttribute("data-optimumx", k), j && g.setAttribute("data-ratio", j), h.appendChild(g), c.appendChild(h)
      },
      l = function(a) {
        if (a.target._lazybgset) {
          var b = a.target,
            d = b._lazybgset,
            e = b.currentSrc || b.src;
          e && (d.style.backgroundImage = "url(" + (g.test(e) ? JSON.stringify(e) : e) + ")"), b._lazybgsetLoading && (c.fire(d, "_lazyloaded", {}, !1, !0), delete b._lazybgsetLoading)
        }
      };
    addEventListener("lazybeforeunveil", function(a) {
      var d, e, f;
      !a.defaultPrevented && (d = a.target.getAttribute("data-bgset")) && (f = a.target, e = b.createElement("img"), e.alt = "", e._lazybgsetLoading = !0, a.detail.firesLoad = !0, k(d, f, e), setTimeout(function() {
        c.loader.unveil(e), c.rAF(function() {
          c.fire(e, "_lazyloaded", {}, !0, !0), e.complete && l({
            target: e
          })
        })
      }))
    }), b.addEventListener("load", l, !0), a.addEventListener("lazybeforesizes", function(a) {
      if (a.detail.instance == c && a.target._lazybgset && a.detail.dataAttr) {
        var b = a.target._lazybgset,
          d = j(b);
        h[d] && (a.target._lazysizesParentFit = d, c.rAF(function() {
          a.target.setAttribute("data-parent-fit", d), a.target._lazysizesParentFit && delete a.target._lazysizesParentFit
        }))
      }
    }, !0), b.documentElement.addEventListener("lazybeforesizes", function(a) {
      !a.defaultPrevented && a.target._lazybgset && a.detail.instance == c && (a.detail.width = i(a.target._lazybgset))
    })
  }
});
! function(a, b) {
  var c = function() {
    b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0)
  };
  b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0)
}(window, function(a, b, c) {
  "use strict";

  function d(b, c) {
    var d, e, f, g, h = a.getComputedStyle(b);
    e = b.parentNode, g = {
      isPicture: !(!e || !m.test(e.nodeName || ""))
    }, f = function(a, c) {
      var d = b.getAttribute("data-" + a);
      if (!d) {
        var e = h.getPropertyValue("--ls-" + a);
        e && (d = e.trim())
      }
      if (d) {
        if ("true" == d) d = !0;
        else if ("false" == d) d = !1;
        else if (l.test(d)) d = parseFloat(d);
        else if ("function" == typeof j[a]) d = j[a](b, d);
        else if (q.test(d)) try {
          d = JSON.parse(d)
        } catch (f) {}
        g[a] = d
      } else a in j && "function" != typeof j[a] ? g[a] = j[a] : c && "function" == typeof j[a] && (g[a] = j[a](b, d))
    };
    for (d in j) f(d);
    return c.replace(p, function(a, b) {
      b in g || f(b, !0)
    }), g
  }

  function e(a, b) {
    var c = [],
      d = function(a, c) {
        return k[typeof b[c]] ? b[c] : a
      };
    return c.srcset = [], b.absUrl && (s.setAttribute("href", a), a = s.href), a = ((b.prefix || "") + a + (b.postfix || "")).replace(p, d), b.widths.forEach(function(d) {
      var e = b.widthmap[d] || d,
        f = {
          u: a.replace(n, e).replace(o, b.ratio ? Math.round(d * b.ratio) : ""),
          w: d
        };
      c.push(f), c.srcset.push(f.c = f.u + " " + d + "w")
    }), c
  }

  function f(a, c, d) {
    var f = 0,
      g = 0,
      h = d;
    if (a) {
      if ("container" === c.ratio) {
        for (f = h.scrollWidth, g = h.scrollHeight; !(f && g || h === b);) h = h.parentNode, f = h.scrollWidth, g = h.scrollHeight;
        f && g && (c.ratio = g / f)
      }
      a = e(a, c), a.isPicture = c.isPicture, u && "IMG" == d.nodeName.toUpperCase() ? d.removeAttribute(i.srcsetAttr) : d.setAttribute(i.srcsetAttr, a.srcset.join(", ")), Object.defineProperty(d, "_lazyrias", {
        value: a,
        writable: !0
      })
    }
  }

  function g(a, b) {
    var e = d(a, b);
    return j.modifyOptions.call(a, {
      target: a,
      details: e,
      detail: e
    }), c.fire(a, "lazyriasmodifyoptions", e), e
  }

  function h(a) {
    return a.getAttribute(a.getAttribute("data-srcattr") || j.srcAttr) || a.getAttribute(i.srcsetAttr) || a.getAttribute(i.srcAttr) || a.getAttribute("data-pfsrcset") || ""
  }
  var i, j, k = {
      string: 1,
      number: 1
    },
    l = /^\-*\+*\d+\.*\d*$/,
    m = /^picture$/i,
    n = /\s*\{\s*width\s*\}\s*/i,
    o = /\s*\{\s*height\s*\}\s*/i,
    p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,
    q = /^\[.*\]|\{.*\}$/,
    r = /^(?:auto|\d+(px)?)$/,
    s = b.createElement("a"),
    t = b.createElement("img"),
    u = "srcset" in t && !("sizes" in t),
    v = !!a.HTMLPictureElement && !u;
  ! function() {
    var b, d = function() {},
      e = {
        prefix: "",
        postfix: "",
        srcAttr: "data-src",
        absUrl: !1,
        modifyOptions: d,
        widthmap: {},
        ratio: !1
      };
    i = c && c.cfg || a.lazySizesConfig, i || (i = {}, a.lazySizesConfig = i), i.supportsType || (i.supportsType = function(a) {
      return !a
    }), i.rias || (i.rias = {}), j = i.rias, "widths" in j || (j.widths = [], function(a) {
      for (var b, c = 0; !b || 3e3 > b;) c += 5, c > 30 && (c += 1), b = 36 * c, a.push(b)
    }(j.widths));
    for (b in e) b in j || (j[b] = e[b])
  }(), addEventListener("lazybeforesizes", function(a) {
    if (a.detail.instance == c) {
      var b, d, e, k, l, m, o, p, q, s, t, u, x;
      if (b = a.target, a.detail.dataAttr && !a.defaultPrevented && !j.disabled && (q = b.getAttribute(i.sizesAttr) || b.getAttribute("sizes")) && r.test(q)) {
        if (d = h(b), e = g(b, d), t = n.test(e.prefix) || n.test(e.postfix), e.isPicture && (k = b.parentNode))
          for (l = k.getElementsByTagName("source"), m = 0, o = l.length; o > m; m++)(t || n.test(p = h(l[m]))) && (f(p, e, l[m]), u = !0);
        t || n.test(d) ? (f(d, e, b), u = !0) : u && (x = [], x.srcset = [], x.isPicture = !0, Object.defineProperty(b, "_lazyrias", {
          value: x,
          writable: !0
        })), u && (v ? b.removeAttribute(i.srcAttr) : "auto" != q && (s = {
          width: parseInt(q, 10)
        }, w({
          target: b,
          detail: s
        })))
      }
    }
  }, !0);
  var w = function() {
    var d = function(a, b) {
        return a.w - b.w
      },
      e = function(a) {
        var b, c, d = a.length,
          e = a[d - 1],
          f = 0;
        for (f; d > f; f++)
          if (e = a[f], e.d = e.w / a.w, e.d >= a.d) {
            !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b));
            break
          } return e
      },
      f = function(a, b) {
        var d;
        return !a._lazyrias && c.pWS && (d = c.pWS(a.getAttribute(i.srcsetAttr || ""))).length && (Object.defineProperty(a, "_lazyrias", {
          value: d,
          writable: !0
        }), b && a.parentNode && (d.isPicture = "PICTURE" == a.parentNode.nodeName.toUpperCase())), a._lazyrias
      },
      g = function(b) {
        var d = a.devicePixelRatio || 1,
          e = c.getX && c.getX(b);
        return Math.min(e || d, 2.4, d)
      },
      h = function(b, c) {
        var h, i, j, k, l, m;
        if (l = b._lazyrias, l.isPicture && a.matchMedia)
          for (i = 0, h = b.parentNode.getElementsByTagName("source"), j = h.length; j > i; i++)
            if (f(h[i]) && !h[i].getAttribute("type") && (!(k = h[i].getAttribute("media")) || (matchMedia(k) || {}).matches)) {
              l = h[i]._lazyrias;
              break
            } return (!l.w || l.w < c) && (l.w = c, l.d = g(b), m = e(l.sort(d))), m
      },
      j = function(d) {
        if (d.detail.instance == c) {
          var e, g = d.target;
          return !u && (a.respimage || a.picturefill || lazySizesConfig.pf) ? void b.removeEventListener("lazybeforesizes", j) : void(("_lazyrias" in g || d.detail.dataAttr && f(g, !0)) && (e = h(g, d.detail.width), e && e.u && g._lazyrias.cur != e.u && (g._lazyrias.cur = e.u, e.cached = !0, c.rAF(function() {
            g.setAttribute(i.srcAttr, e.u), g.setAttribute("src", e.u)
          }))))
        }
      };
    return v ? j = function() {} : addEventListener("lazybeforesizes", j), j
  }()
});;
(function() {
  function n(n) {
    return H(n) && pn.call(n, "callee") && !yn.call(n, "callee")
  }

  function t(n, t) {
    return n.push.apply(n, t), n
  }

  function r(n) {
    return function(t) {
      return null == t ? Z : t[n]
    }
  }

  function e(n, t, r, e, u) {
    return u(n, function(n, u, o) {
      r = e ? (e = false, n) : t(r, n, u, o)
    }), r
  }

  function u(n, t) {
    return j(t, function(t) {
      return n[t]
    })
  }

  function o(n) {
    return n instanceof i ? n : new i(n)
  }

  function i(n, t) {
    this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t
  }

  function c(n, t, r) {
    if (typeof n != "function") throw new TypeError("Expected a function");
    return setTimeout(function() {
      n.apply(Z, r)
    }, t)
  }

  function f(n, t) {
    var r = true;
    return mn(n, function(n, e, u) {
      return r = !!t(n, e, u)
    }), r
  }

  function a(n, t, r) {
    for (var e = -1, u = n.length; ++e < u;) {
      var o = n[e],
        i = t(o);
      if (null != i && (c === Z ? i === i : r(i, c))) var c = i,
        f = o
    }
    return f
  }

  function l(n, t) {
    var r = [];
    return mn(n, function(n, e, u) {
      t(n, e, u) && r.push(n)
    }), r
  }

  function p(n, r, e, u, o) {
    var i = -1,
      c = n.length;
    for (e || (e = R), o || (o = []); ++i < c;) {
      var f = n[i];
      0 < r && e(f) ? 1 < r ? p(f, r - 1, e, u, o) : t(o, f) : u || (o[o.length] = f)
    }
    return o
  }

  function s(n, t) {
    return n && On(n, t, Dn);
  }

  function h(n, t) {
    return l(t, function(t) {
      return U(n[t])
    })
  }

  function v(n, t) {
    return n > t
  }

  function b(n, t, r, e, u) {
    return n === t || (null == n || null == t || !H(n) && !H(t) ? n !== n && t !== t : y(n, t, r, e, b, u))
  }

  function y(n, t, r, e, u, o) {
    var i = Nn(n),
      c = Nn(t),
      f = i ? "[object Array]" : hn.call(n),
      a = c ? "[object Array]" : hn.call(t),
      f = "[object Arguments]" == f ? "[object Object]" : f,
      a = "[object Arguments]" == a ? "[object Object]" : a,
      l = "[object Object]" == f,
      c = "[object Object]" == a,
      a = f == a;
    o || (o = []);
    var p = An(o, function(t) {
        return t[0] == n
      }),
      s = An(o, function(n) {
        return n[0] == t
      });
    if (p && s) return p[1] == t;
    if (o.push([n, t]), o.push([t, n]), a && !l) {
      if (i) r = T(n, t, r, e, u, o);
      else n: {
        switch (f) {
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            r = J(+n, +t);
            break n;
          case "[object Error]":
            r = n.name == t.name && n.message == t.message;
            break n;
          case "[object RegExp]":
          case "[object String]":
            r = n == t + "";
            break n
        }
        r = false
      }
      return o.pop(), r
    }
    return 1 & r || (i = l && pn.call(n, "__wrapped__"), f = c && pn.call(t, "__wrapped__"), !i && !f) ? !!a && (r = B(n, t, r, e, u, o), o.pop(), r) : (i = i ? n.value() : n, f = f ? t.value() : t, r = u(i, f, r, e, o), o.pop(), r)
  }

  function g(n) {
    return typeof n == "function" ? n : null == n ? X : (typeof n == "object" ? d : r)(n)
  }

  function _(n, t) {
    return n < t
  }

  function j(n, t) {
    var r = -1,
      e = M(n) ? Array(n.length) : [];
    return mn(n, function(n, u, o) {
      e[++r] = t(n, u, o)
    }), e
  }

  function d(n) {
    var t = _n(n);
    return function(r) {
      var e = t.length;
      if (null == r) return !e;
      for (r = Object(r); e--;) {
        var u = t[e];
        if (!(u in r && b(n[u], r[u], 3))) return false
      }
      return true
    }
  }

  function m(n, t) {
    return n = Object(n), C(t, function(t, r) {
      return r in n && (t[r] = n[r]), t
    }, {})
  }

  function O(n) {
    return xn(I(n, void 0, X), n + "");
  }

  function x(n, t, r) {
    var e = -1,
      u = n.length;
    for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Array(u); ++e < u;) r[e] = n[e + t];
    return r
  }

  function A(n) {
    return x(n, 0, n.length)
  }

  function E(n, t) {
    var r;
    return mn(n, function(n, e, u) {
      return r = t(n, e, u), !r
    }), !!r
  }

  function w(n, r) {
    return C(r, function(n, r) {
      return r.func.apply(r.thisArg, t([n], r.args))
    }, n)
  }

  function k(n, t, r) {
    var e = !r;
    r || (r = {});
    for (var u = -1, o = t.length; ++u < o;) {
      var i = t[u],
        c = Z;
      if (c === Z && (c = n[i]), e) r[i] = c;
      else {
        var f = r,
          a = f[i];
        pn.call(f, i) && J(a, c) && (c !== Z || i in f) || (f[i] = c);
      }
    }
    return r
  }

  function N(n) {
    return O(function(t, r) {
      var e = -1,
        u = r.length,
        o = 1 < u ? r[u - 1] : Z,
        o = 3 < n.length && typeof o == "function" ? (u--, o) : Z;
      for (t = Object(t); ++e < u;) {
        var i = r[e];
        i && n(t, i, e, o)
      }
      return t
    })
  }

  function F(n) {
    return function() {
      var t = arguments,
        r = dn(n.prototype),
        t = n.apply(r, t);
      return V(t) ? t : r
    }
  }

  function S(n, t, r) {
    function e() {
      for (var o = -1, i = arguments.length, c = -1, f = r.length, a = Array(f + i), l = this && this !== on && this instanceof e ? u : n; ++c < f;) a[c] = r[c];
      for (; i--;) a[c++] = arguments[++o];
      return l.apply(t, a)
    }
    if (typeof n != "function") throw new TypeError("Expected a function");
    var u = F(n);
    return e
  }

  function T(n, t, r, e, u, o) {
    var i = n.length,
      c = t.length;
    if (i != c && !(1 & r && c > i)) return false;
    for (var c = -1, f = true, a = 2 & r ? [] : Z; ++c < i;) {
      var l = n[c],
        p = t[c];
      if (void 0 !== Z) {
        f = false;
        break
      }
      if (a) {
        if (!E(t, function(n, t) {
            if (!P(a, t) && (l === n || u(l, n, r, e, o))) return a.push(t)
          })) {
          f = false;
          break
        }
      } else if (l !== p && !u(l, p, r, e, o)) {
        f = false;
        break
      }
    }
    return f
  }

  function B(n, t, r, e, u, o) {
    var i = 1 & r,
      c = Dn(n),
      f = c.length,
      a = Dn(t).length;
    if (f != a && !i) return false;
    for (var l = f; l--;) {
      var p = c[l];
      if (!(i ? p in t : pn.call(t, p))) return false
    }
    for (a = true; ++l < f;) {
      var p = c[l],
        s = n[p],
        h = t[p];
      if (void 0 !== Z || s !== h && !u(s, h, r, e, o)) {
        a = false;
        break
      }
      i || (i = "constructor" == p)
    }
    return a && !i && (r = n.constructor, e = t.constructor, r != e && "constructor" in n && "constructor" in t && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (a = false)), a
  }

  function R(t) {
    return Nn(t) || n(t)
  }

  function D(n) {
    var t = [];
    if (null != n)
      for (var r in Object(n)) t.push(r);
    return t
  }

  function I(n, t, r) {
    return t = jn(t === Z ? n.length - 1 : t, 0),
      function() {
        for (var e = arguments, u = -1, o = jn(e.length - t, 0), i = Array(o); ++u < o;) i[u] = e[t + u];
        for (u = -1, o = Array(t + 1); ++u < t;) o[u] = e[u];
        return o[t] = r(i), n.apply(this, o)
      }
  }

  function $(n) {
    return (null == n ? 0 : n.length) ? p(n, 1) : []
  }

  function q(n) {
    return n && n.length ? n[0] : Z
  }

  function P(n, t, r) {
    var e = null == n ? 0 : n.length;
    r = typeof r == "number" ? 0 > r ? jn(e + r, 0) : r : 0, r = (r || 0) - 1;
    for (var u = t === t; ++r < e;) {
      var o = n[r];
      if (u ? o === t : o !== o) return r
    }
    return -1
  }

  function z(n, t) {
    return mn(n, g(t))
  }

  function C(n, t, r) {
    return e(n, g(t), r, 3 > arguments.length, mn)
  }

  function G(n, t) {
    var r;
    if (typeof t != "function") throw new TypeError("Expected a function");
    return n = Fn(n),
      function() {
        return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = Z), r
      }
  }

  function J(n, t) {
    return n === t || n !== n && t !== t
  }

  function M(n) {
    var t;
    return (t = null != n) && (t = n.length, t = typeof t == "number" && -1 < t && 0 == t % 1 && 9007199254740991 >= t), t && !U(n)
  }

  function U(n) {
    return !!V(n) && (n = hn.call(n), "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n)
  }

  function V(n) {
    var t = typeof n;
    return null != n && ("object" == t || "function" == t)
  }

  function H(n) {
    return null != n && typeof n == "object"
  }

  function K(n) {
    return typeof n == "number" || H(n) && "[object Number]" == hn.call(n)
  }

  function L(n) {
    return typeof n == "string" || !Nn(n) && H(n) && "[object String]" == hn.call(n)
  }

  function Q(n) {
    return typeof n == "string" ? n : null == n ? "" : n + ""
  }

  function W(n) {
    return null == n ? [] : u(n, Dn(n))
  }

  function X(n) {
    return n
  }

  function Y(n, r, e) {
    var u = Dn(r),
      o = h(r, u);
    null != e || V(r) && (o.length || !u.length) || (e = r, r = n, n = this, o = h(r, Dn(r)));
    var i = !(V(e) && "chain" in e && !e.chain),
      c = U(n);
    return mn(o, function(e) {
      var u = r[e];
      n[e] = u, c && (n.prototype[e] = function() {
        var r = this.__chain__;
        if (i || r) {
          var e = n(this.__wrapped__);
          return (e.__actions__ = A(this.__actions__)).push({
            func: u,
            args: arguments,
            thisArg: n
          }), e.__chain__ = r, e
        }
        return u.apply(n, t([this.value()], arguments))
      })
    }), n
  }
  var Z, nn = 1 / 0,
    tn = /[&<>"']/g,
    rn = RegExp(tn.source),
    en = /^(?:0|[1-9]\d*)$/,
    un = typeof self == "object" && self && self.Object === Object && self,
    on = typeof global == "object" && global && global.Object === Object && global || un || Function("return this")(),
    cn = (un = typeof exports == "object" && exports && !exports.nodeType && exports) && typeof module == "object" && module && !module.nodeType && module,
    fn = function(n) {
      return function(t) {
        return null == n ? Z : n[t]
      }
    }({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }),
    an = Array.prototype,
    ln = Object.prototype,
    pn = ln.hasOwnProperty,
    sn = 0,
    hn = ln.toString,
    vn = on._,
    bn = Object.create,
    yn = ln.propertyIsEnumerable,
    gn = on.isFinite,
    _n = function(n, t) {
      return function(r) {
        return n(t(r))
      }
    }(Object.keys, Object),
    jn = Math.max,
    dn = function() {
      function n() {}
      return function(t) {
        return V(t) ? bn ? bn(t) : (n.prototype = t, t = new n, n.prototype = Z, t) : {}
      }
    }();
  i.prototype = dn(o.prototype), i.prototype.constructor = i;
  var mn = function(n, t) {
      return function(r, e) {
        if (null == r) return r;
        if (!M(r)) return n(r, e);
        for (var u = r.length, o = t ? u : -1, i = Object(r);
          (t ? o-- : ++o < u) && false !== e(i[o], o, i););
        return r
      }
    }(s),
    On = function(n) {
      return function(t, r, e) {
        var u = -1,
          o = Object(t);
        e = e(t);
        for (var i = e.length; i--;) {
          var c = e[n ? i : ++u];
          if (false === r(o[c], c, o)) break
        }
        return t
      }
    }(),
    xn = X,
    An = function(n) {
      return function(t, r, e) {
        var u = Object(t);
        if (!M(t)) {
          var o = g(r);
          t = Dn(t), r = function(n) {
            return o(u[n], n, u)
          }
        }
        return r = n(t, r, e), -1 < r ? u[o ? t[r] : r] : Z
      }
    }(function(n, t, r) {
      var e = null == n ? 0 : n.length;
      if (!e) return -1;
      r = null == r ? 0 : Fn(r), 0 > r && (r = jn(e + r, 0));
      n: {
        for (t = g(t), e = n.length, r += -1; ++r < e;)
          if (t(n[r], r, n)) {
            n = r;
            break n
          } n = -1
      }
      return n
    }),
    En = O(function(n, t, r) {
      return S(n, t, r)
    }),
    wn = O(function(n, t) {
      return c(n, 1, t)
    }),
    kn = O(function(n, t, r) {
      return c(n, Sn(t) || 0, r)
    }),
    Nn = Array.isArray,
    Fn = Number,
    Sn = Number,
    Tn = N(function(n, t) {
      k(t, _n(t), n)
    }),
    Bn = N(function(n, t) {
      k(t, D(t), n)
    }),
    Rn = O(function(n, t) {
      n = Object(n);
      var r, e = -1,
        u = t.length,
        o = 2 < u ? t[2] : Z;
      if (r = o) {
        r = t[0];
        var i = t[1];
        if (V(o)) {
          var c = typeof i;
          if ("number" == c) {
            if (c = M(o)) var c = o.length,
              f = typeof i,
              c = null == c ? 9007199254740991 : c,
              c = !!c && ("number" == f || "symbol" != f && en.test(i)) && -1 < i && 0 == i % 1 && i < c;
          } else c = "string" == c && i in o;
          r = !!c && J(o[i], r)
        } else r = false
      }
      for (r && (u = 1); ++e < u;)
        for (o = t[e], r = In(o), i = -1, c = r.length; ++i < c;) {
          var f = r[i],
            a = n[f];
          (a === Z || J(a, ln[f]) && !pn.call(n, f)) && (n[f] = o[f])
        }
      return n
    }),
    Dn = _n,
    In = D,
    $n = function(n) {
      return xn(I(n, Z, $), n + "")
    }(function(n, t) {
      return null == n ? {} : m(n, t)
    });
  o.assignIn = Bn, o.before = G, o.bind = En, o.chain = function(n) {
    return n = o(n), n.__chain__ = true, n
  }, o.compact = function(n) {
    return l(n, Boolean)
  }, o.concat = function() {
    var n = arguments.length;
    if (!n) return [];
    for (var r = Array(n - 1), e = arguments[0]; n--;) r[n - 1] = arguments[n];
    return t(Nn(e) ? A(e) : [e], p(r, 1))
  }, o.create = function(n, t) {
    var r = dn(n);
    return null == t ? r : Tn(r, t)
  }, o.defaults = Rn, o.defer = wn, o.delay = kn, o.filter = function(n, t) {
    return l(n, g(t))
  }, o.flatten = $, o.flattenDeep = function(n) {
    return (null == n ? 0 : n.length) ? p(n, nn) : []
  }, o.iteratee = g, o.keys = Dn, o.map = function(n, t) {
    return j(n, g(t))
  }, o.matches = function(n) {
    return d(Tn({}, n))
  }, o.mixin = Y, o.negate = function(n) {
    if (typeof n != "function") throw new TypeError("Expected a function");
    return function() {
      return !n.apply(this, arguments)
    }
  }, o.once = function(n) {
    return G(2, n)
  }, o.pick = $n, o.slice = function(n, t, r) {
    var e = null == n ? 0 : n.length;
    return r = r === Z ? e : +r, e ? x(n, null == t ? 0 : +t, r) : []
  }, o.sortBy = function(n, t) {
    var e = 0;
    return t = g(t), j(j(n, function(n, r, u) {
      return {
        value: n,
        index: e++,
        criteria: t(n, r, u)
      }
    }).sort(function(n, t) {
      var r;
      n: {
        r = n.criteria;
        var e = t.criteria;
        if (r !== e) {
          var u = r !== Z,
            o = null === r,
            i = r === r,
            c = e !== Z,
            f = null === e,
            a = e === e;
          if (!f && r > e || o && c && a || !u && a || !i) {
            r = 1;
            break n
          }
          if (!o && r < e || f && u && i || !c && i || !a) {
            r = -1;
            break n
          }
        }
        r = 0
      }
      return r || n.index - t.index
    }), r("value"))
  }, o.tap = function(n, t) {
    return t(n), n
  }, o.thru = function(n, t) {
    return t(n)
  }, o.toArray = function(n) {
    return M(n) ? n.length ? A(n) : [] : W(n)
  }, o.values = W, o.extend = Bn, Y(o, o), o.clone = function(n) {
    return V(n) ? Nn(n) ? A(n) : k(n, _n(n)) : n
  }, o.escape = function(n) {
    return (n = Q(n)) && rn.test(n) ? n.replace(tn, fn) : n
  }, o.every = function(n, t, r) {
    return t = r ? Z : t, f(n, g(t))
  }, o.find = An, o.forEach = z, o.has = function(n, t) {
    return null != n && pn.call(n, t)
  }, o.head = q, o.identity = X, o.indexOf = P, o.isArguments = n, o.isArray = Nn, o.isBoolean = function(n) {
    return true === n || false === n || H(n) && "[object Boolean]" == hn.call(n);
  }, o.isDate = function(n) {
    return H(n) && "[object Date]" == hn.call(n)
  }, o.isEmpty = function(t) {
    return M(t) && (Nn(t) || L(t) || U(t.splice) || n(t)) ? !t.length : !_n(t).length
  }, o.isEqual = function(n, t) {
    return b(n, t)
  }, o.isFinite = function(n) {
    return typeof n == "number" && gn(n)
  }, o.isFunction = U, o.isNaN = function(n) {
    return K(n) && n != +n
  }, o.isNull = function(n) {
    return null === n
  }, o.isNumber = K, o.isObject = V, o.isRegExp = function(n) {
    return H(n) && "[object RegExp]" == hn.call(n)
  }, o.isString = L, o.isUndefined = function(n) {
    return n === Z
  }, o.last = function(n) {
    var t = null == n ? 0 : n.length;
    return t ? n[t - 1] : Z
  }, o.max = function(n) {
    return n && n.length ? a(n, X, v) : Z
  }, o.min = function(n) {
    return n && n.length ? a(n, X, _) : Z
  }, o.noConflict = function() {
    return on._ === this && (on._ = vn), this
  }, o.noop = function() {}, o.reduce = C, o.result = function(n, t, r) {
    return t = null == n ? Z : n[t], t === Z && (t = r), U(t) ? t.call(n) : t
  }, o.size = function(n) {
    return null == n ? 0 : (n = M(n) ? n : _n(n), n.length)
  }, o.some = function(n, t, r) {
    return t = r ? Z : t, E(n, g(t))
  }, o.uniqueId = function(n) {
    var t = ++sn;
    return Q(n) + t
  }, o.each = z, o.first = q, Y(o, function() {
    var n = {};
    return s(o, function(t, r) {
      pn.call(o.prototype, r) || (n[r] = t)
    }), n
  }(), {
    chain: false
  }), o.VERSION = "4.17.10", mn("pop join replace reverse split push shift sort splice unshift".split(" "), function(n) {
    var t = (/^(?:replace|split)$/.test(n) ? String.prototype : an)[n],
      r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
      e = /^(?:pop|join|replace|shift)$/.test(n);
    o.prototype[n] = function() {
      var n = arguments;
      if (e && !this.__chain__) {
        var u = this.value();
        return t.apply(Nn(u) ? u : [], n)
      }
      return this[r](function(r) {
        return t.apply(Nn(r) ? r : [], n);
      })
    }
  }), o.prototype.toJSON = o.prototype.valueOf = o.prototype.value = function() {
    return w(this.__wrapped__, this.__actions__)
  }, typeof define == "function" && typeof define.amd == "object" && define.amd ? (on._ = o, define(function() {
    return o
  })) : cn ? ((cn.exports = o)._ = o, un._ = o) : on._ = o
}).call(this);
! function(t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
  "use strict";

  function i(i, r, a) {
    function h(t, e, n) {
      var o, r = "$()." + i + '("' + e + '")';
      return t.each(function(t, h) {
        var u = a.data(h, i);
        if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
        var d = u[e];
        if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
        var l = d.apply(u, n);
        o = void 0 === o ? l : o
      }), void 0 !== o ? o : t
    }

    function u(t, e) {
      t.each(function(t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
      })
    }
    a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
    }), a.fn[i] = function(t) {
      if ("string" == typeof t) {
        var e = o.call(arguments, 1);
        return h(this, t, e)
      }
      return u(this, t), this
    }, n(a))
  }

  function n(t) {
    !t || t && t.bridget || (t.bridget = i)
  }
  var o = Array.prototype.slice,
    r = t.console,
    s = "undefined" == typeof r ? function() {} : function(t) {
      r.error(t)
    };
  return n(e || t.jQuery), i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
  function t() {}
  var e = t.prototype;
  return e.on = function(t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this
    }
  }, e.once = function(t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
        n = i[t] = i[t] || {};
      return n[e] = !0, this
    }
  }, e.off = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this
    }
  }, e.emitEvent = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      i = i.slice(0), e = e || [];
      for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
        var r = i[o],
          s = n && n[r];
        s && (this.off(t, r), delete n[r]), r.apply(this, e)
      }
      return this
    }
  }, e.allOff = function() {
    delete this._events, delete this._onceEvents
  }, t
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
      i = -1 == t.indexOf("%") && !isNaN(e);
    return i && e
  }

  function e() {}

  function i() {
    for (var t = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      }, e = 0; u > e; e++) {
      var i = h[e];
      t[i] = 0
    }
    return t
  }

  function n(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
  }

  function o() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var o = n(e);
      s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e)
    }
  }

  function r(e) {
    if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
      var r = n(e);
      if ("none" == r.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;
      for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
        var c = h[l],
          f = r[c],
          m = parseFloat(f);
        a[c] = isNaN(m) ? 0 : m
      }
      var p = a.paddingLeft + a.paddingRight,
        g = a.paddingTop + a.paddingBottom,
        y = a.marginLeft + a.marginRight,
        v = a.marginTop + a.marginBottom,
        _ = a.borderLeftWidth + a.borderRightWidth,
        z = a.borderTopWidth + a.borderBottomWidth,
        E = d && s,
        b = t(r.width);
      b !== !1 && (a.width = b + (E ? 0 : p + _));
      var x = t(r.height);
      return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
    }
  }
  var s, a = "undefined" == typeof console ? e : function(t) {
      console.error(t)
    },
    h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    u = h.length,
    d = !1;
  return r
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
  "use strict";
  var t = function() {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i],
        o = n + "MatchesSelector";
      if (t[o]) return o
    }
  }();
  return function(e, i) {
    return e[t](i)
  }
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
  var i = {};
  i.extend = function(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }, i.modulo = function(t, e) {
    return (t % e + e) % e
  };
  var n = Array.prototype.slice;
  i.makeArray = function(t) {
    if (Array.isArray(t)) return t;
    if (null === t || void 0 === t) return [];
    var e = "object" == typeof t && "number" == typeof t.length;
    return e ? n.call(t) : [t]
  }, i.removeFrom = function(t, e) {
    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
  }, i.getParent = function(t, i) {
    for (; t.parentNode && t != document.body;)
      if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function(t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.filterFindElements = function(t, n) {
    t = i.makeArray(t);
    var o = [];
    return t.forEach(function(t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t);
        e(t, n) && o.push(t);
        for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
      }
    }), o
  }, i.debounceMethod = function(t, e, i) {
    i = i || 100;
    var n = t.prototype[e],
      o = e + "Timeout";
    t.prototype[e] = function() {
      var t = this[o];
      clearTimeout(t);
      var e = arguments,
        r = this;
      this[o] = setTimeout(function() {
        n.apply(r, e), delete r[o]
      }, i)
    }
  }, i.docReady = function(t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function(t) {
    return t.replace(/(.)([A-Z])/g, function(t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var o = t.console;
  return i.htmlInit = function(e, n) {
    i.docReady(function() {
      var r = i.toDashed(n),
        s = "data-" + r,
        a = document.querySelectorAll("[" + s + "]"),
        h = document.querySelectorAll(".js-" + r),
        u = i.makeArray(a).concat(i.makeArray(h)),
        d = s + "-options",
        l = t.jQuery;
      u.forEach(function(t) {
        var i, r = t.getAttribute(s) || t.getAttribute(d);
        try {
          i = r && JSON.parse(r)
        } catch (a) {
          return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + a))
        }
        var h = new e(t, i);
        l && l.data(t, n, h)
      })
    })
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
  "use strict";

  function i(t) {
    for (var e in t) return !1;
    return e = null, !0
  }

  function n(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }

  function o(t) {
    return t.replace(/([A-Z])/g, function(t) {
      return "-" + t.toLowerCase()
    })
  }
  var r = document.documentElement.style,
    s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
    a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
    h = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    } [s],
    u = {
      transform: a,
      transition: s,
      transitionDuration: s + "Duration",
      transitionProperty: s + "Property",
      transitionDelay: s + "Delay"
    },
    d = n.prototype = Object.create(t.prototype);
  d.constructor = n, d._create = function() {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    })
  }, d.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, d.getSize = function() {
    this.size = e(this.element)
  }, d.css = function(t) {
    var e = this.element.style;
    for (var i in t) {
      var n = u[i] || i;
      e[n] = t[i]
    }
  }, d.getPosition = function() {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      n = t[e ? "left" : "right"],
      o = t[i ? "top" : "bottom"],
      r = parseFloat(n),
      s = parseFloat(o),
      a = this.layout.size; - 1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s
  }, d.layoutPosition = function() {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop"),
      o = i ? "paddingLeft" : "paddingRight",
      r = i ? "left" : "right",
      s = i ? "right" : "left",
      a = this.position.x + t[o];
    e[r] = this.getXValue(a), e[s] = "";
    var h = n ? "paddingTop" : "paddingBottom",
      u = n ? "top" : "bottom",
      d = n ? "bottom" : "top",
      l = this.position.y + t[h];
    e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
  }, d.getXValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
  }, d.getYValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
  }, d._transitionTo = function(t, e) {
    this.getPosition();
    var i = this.position.x,
      n = this.position.y,
      o = t == this.position.x && e == this.position.y;
    if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
    var r = t - i,
      s = e - n,
      a = {};
    a.transform = this.getTranslate(r, s), this.transition({
      to: a,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    })
  }, d.getTranslate = function(t, e) {
    var i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop");
    return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
  }, d.goTo = function(t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
    this.position.x = parseFloat(t), this.position.y = parseFloat(e)
  }, d._nonTransition = function(t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  }, d.transition = function(t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var n = this.element.offsetHeight;
      n = null
    }
    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
  };
  var l = "opacity," + o(a);
  d.enableTransition = function() {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(h, this, !1)
    }
  }, d.onwebkitTransitionEnd = function(t) {
    this.ontransitionend(t)
  }, d.onotransitionend = function(t) {
    this.ontransitionend(t)
  };
  var c = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function(t) {
    if (t.target === this.element) {
      var e = this._transn,
        n = c[t.propertyName] || t.propertyName;
      if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
        var o = e.onEnd[n];
        o.call(this), delete e.onEnd[n]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, d.disableTransition = function() {
    this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
  }, d._removeStyles = function(t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e)
  };
  var f = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function() {
    this.css(f)
  }, d.stagger = function(t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
  }, d.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this])
  }, d.remove = function() {
    return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, d.reveal = function() {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onRevealTransitionEnd = function() {
    this.isHidden || this.emitEvent("reveal")
  }, d.getHideRevealTransitionEndProperty = function(t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i
  }, d.hide = function() {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onHideTransitionEnd = function() {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"))
  }, d.destroy = function() {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, n
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
    return e(t, i, n, o, r)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
  "use strict";

  function r(t, e) {
    var i = n.getQueryElement(t);
    if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
    var o = ++l;
    this.element.outlayerGUID = o, c[o] = this, this._create();
    var r = this._getOption("initLayout");
    r && this.layout()
  }

  function s(t) {
    function e() {
      t.apply(this, arguments)
    }
    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
      i = e && e[1],
      n = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var o = m[n] || 1;
    return i * o
  }
  var h = t.console,
    u = t.jQuery,
    d = function() {},
    l = 0,
    c = {};
  r.namespace = "outlayer", r.Item = o, r.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var f = r.prototype;
  n.extend(f, e.prototype), f.option = function(t) {
    n.extend(this.options, t)
  }, f._getOption = function(t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
  }, r.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, f._create = function() {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
    var t = this._getOption("resize");
    t && this.bindResize()
  }, f.reloadItems = function() {
    this.items = this._itemize(this.element.children)
  }, f._itemize = function(t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
      var r = e[o],
        s = new i(r, this);
      n.push(s)
    }
    return n
  }, f._filterFindItemElements = function(t) {
    return n.filterFindElements(t, this.options.itemSelector)
  }, f.getItemElements = function() {
    return this.items.map(function(t) {
      return t.element
    })
  }, f.layout = function() {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), this._isLayoutInited = !0
  }, f._init = f.layout, f._resetLayout = function() {
    this.getSize()
  }, f.getSize = function() {
    this.size = i(this.element)
  }, f._getMeasurement = function(t, e) {
    var n, o = this.options[t];
    o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
  }, f.layoutItems = function(t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, f._getItemsForLayout = function(t) {
    return t.filter(function(t) {
      return !t.isIgnored
    })
  }, f._layoutItems = function(t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function(t) {
        var n = this._getItemLayoutPosition(t);
        n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
      }, this), this._processLayoutQueue(i)
    }
  }, f._getItemLayoutPosition = function() {
    return {
      x: 0,
      y: 0
    }
  }, f._processLayoutQueue = function(t) {
    this.updateStagger(), t.forEach(function(t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e)
    }, this)
  }, f.updateStagger = function() {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
  }, f._positionItem = function(t, e, i, n, o) {
    n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
  }, f._postLayout = function() {
    this.resizeContainer()
  }, f.resizeContainer = function() {
    var t = this._getOption("resizeContainer");
    if (t) {
      var e = this._getContainerSize();
      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }
  }, f._getContainerSize = d, f._setContainerMeasure = function(t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
    }
  }, f._emitCompleteOnItems = function(t, e) {
    function i() {
      o.dispatchEvent(t + "Complete", null, [e])
    }

    function n() {
      s++, s == r && i()
    }
    var o = this,
      r = e.length;
    if (!e || !r) return void i();
    var s = 0;
    e.forEach(function(e) {
      e.once(t, n)
    })
  }, f.dispatchEvent = function(t, e, i) {
    var n = e ? [e].concat(i) : i;
    if (this.emitEvent(t, n), u)
      if (this.$element = this.$element || u(this.element), e) {
        var o = u.Event(e);
        o.type = t, this.$element.trigger(o, i)
      } else this.$element.trigger(t, i)
  }, f.ignore = function(t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, f.unignore = function(t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, f.stamp = function(t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
  }, f.unstamp = function(t) {
    t = this._find(t), t && t.forEach(function(t) {
      n.removeFrom(this.stamps, t), this.unignore(t)
    }, this)
  }, f._find = function(t) {
    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
  }, f._manageStamps = function() {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, f._getBoundingRect = function() {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  }, f._manageStamp = d, f._getElementOffset = function(t) {
    var e = t.getBoundingClientRect(),
      n = this._boundingRect,
      o = i(t),
      r = {
        left: e.left - n.left - o.marginLeft,
        top: e.top - n.top - o.marginTop,
        right: n.right - e.right - o.marginRight,
        bottom: n.bottom - e.bottom - o.marginBottom
      };
    return r
  }, f.handleEvent = n.handleEvent, f.bindResize = function() {
    t.addEventListener("resize", this), this.isResizeBound = !0
  }, f.unbindResize = function() {
    t.removeEventListener("resize", this), this.isResizeBound = !1
  }, f.onresize = function() {
    this.resize()
  }, n.debounceMethod(r, "onresize", 100), f.resize = function() {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, f.needsResizeLayout = function() {
    var t = i(this.element),
      e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth
  }, f.addItems = function(t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e
  }, f.appended = function(t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, f.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, f.reveal = function(t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.reveal()
      })
    }
  }, f.hide = function(t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.hide()
      })
    }
  }, f.revealItemElements = function(t) {
    var e = this.getItems(t);
    this.reveal(e)
  }, f.hideItemElements = function(t) {
    var e = this.getItems(t);
    this.hide(e)
  }, f.getItem = function(t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i
    }
  }, f.getItems = function(t) {
    t = n.makeArray(t);
    var e = [];
    return t.forEach(function(t) {
      var i = this.getItem(t);
      i && e.push(i)
    }, this), e
  }, f.remove = function(t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
      t.remove(), n.removeFrom(this.items, t)
    }, this)
  }, f.destroy = function() {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
      t.destroy()
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
  }, r.data = function(t) {
    t = n.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && c[e]
  }, r.create = function(t, e) {
    var i = s(r);
    return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return r.Item = o, r
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var n = i.prototype;
  return n._resetLayout = function() {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    this.maxY = 0, this.horizontalColIndex = 0
  }, n.measureColumns = function() {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var n = this.columnWidth += this.gutter,
      o = this.containerWidth + this.gutter,
      r = o / n,
      s = n - o % n,
      a = s && 1 > s ? "round" : "floor";
    r = Math[a](r), this.cols = Math.max(r, 1)
  }, n.getContainerWidth = function() {
    var t = this._getOption("fitWidth"),
      i = t ? this.element.parentNode : this.element,
      n = e(i);
    this.containerWidth = n && n.innerWidth
  }, n._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = e && 1 > e ? "round" : "ceil",
      n = Math[i](t.size.outerWidth / this.columnWidth);
    n = Math.min(n, this.cols);
    for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
        x: this.columnWidth * r.col,
        y: r.y
      }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
    return s
  }, n._getTopColPosition = function(t) {
    var e = this._getTopColGroup(t),
      i = Math.min.apply(Math, e);
    return {
      col: e.indexOf(i),
      y: i
    }
  }, n._getTopColGroup = function(t) {
    if (2 > t) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
    return e
  }, n._getColGroupY = function(t, e) {
    if (2 > e) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i)
  }, n._getHorizontalColPosition = function(t, e) {
    var i = this.horizontalColIndex % this.cols,
      n = t > 1 && i + t > this.cols;
    i = n ? 0 : i;
    var o = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    }
  }, n._manageStamp = function(t) {
    var i = e(t),
      n = this._getElementOffset(t),
      o = this._getOption("originLeft"),
      r = o ? n.left : n.right,
      s = r + i.outerWidth,
      a = Math.floor(r / this.columnWidth);
    a = Math.max(0, a);
    var h = Math.floor(s / this.columnWidth);
    h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
    for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
  }, n._getContainerSize = function() {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
  }, n._getContainerFitWidth = function() {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  }, n.needsResizeLayout = function() {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth
  }, i
});

function floatToString(t, e) {
  var o = t.toFixed(e).toString();
  return o.match(/^\.\d+/) ? "0" + o : o
}
void 0 === window.Shopify && (window.Shopify = {}), Shopify.each = function(t, e) {
  for (var o = 0; o < t.length; o++) e(t[o], o)
}, Shopify.map = function(t, e) {
  for (var o = [], i = 0; i < t.length; i++) o.push(e(t[i], i));
  return o
}, Shopify.arrayIncludes = function(t, e) {
  for (var o = 0; o < t.length; o++)
    if (t[o] == e) return !0;
  return !1
}, Shopify.uniq = function(t) {
  for (var e = [], o = 0; o < t.length; o++) Shopify.arrayIncludes(e, t[o]) || e.push(t[o]);
  return e
}, Shopify.isDefined = function(t) {
  return void 0 !== t
}, Shopify.getClass = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1)
}, Shopify.extend = function(t, e) {
  function o() {}
  o.prototype = e.prototype, t.prototype = new o, (t.prototype.constructor = t).baseConstructor = e, t.superClass = e.prototype
}, Shopify.locationSearch = function() {
  return window.location.search
}, Shopify.locationHash = function() {
  return window.location.hash
}, Shopify.replaceState = function(t) {
  window.history.replaceState({}, document.title, t)
}, Shopify.urlParam = function(t) {
  var e = RegExp("[?&]" + t + "=([^&#]*)").exec(Shopify.locationSearch());
  return e && decodeURIComponent(e[1].replace(/\+/g, " "))
}, Shopify.newState = function(t, e) {
  return (Shopify.urlParam(t) ? Shopify.locationSearch().replace(RegExp("(" + t + "=)[^&#]+"), "$1" + e) : "" === Shopify.locationSearch() ? "?" + t + "=" + e : Shopify.locationSearch() + "&" + t + "=" + e) + Shopify.locationHash()
}, Shopify.setParam = function(t, e) {
  Shopify.replaceState(Shopify.newState(t, e))
}, Shopify.Product = function(t) {
  Shopify.isDefined(t) && this.update(t)
}, Shopify.Product.prototype.update = function(t) {
  for (property in t) this[property] = t[property]
}, Shopify.Product.prototype.optionNames = function() {
  return "Array" == Shopify.getClass(this.options) ? this.options : []
}, Shopify.Product.prototype.optionValues = function(t) {
  if (!Shopify.isDefined(this.variants)) return null;
  var e = Shopify.map(this.variants, function(e) {
    var o = "option" + (t + 1);
    return null == e[o] ? null : e[o]
  });
  return null == e[0] ? null : Shopify.uniq(e)
}, Shopify.Product.prototype.getVariant = function(t) {
  var e = null;
  return t.length != this.options.length || Shopify.each(this.variants, function(o) {
    for (var i = !0, r = 0; r < t.length; r++) o["option" + (r + 1)] != t[r] && (i = !1);
    1 != i || (e = o)
  }), e
}, Shopify.Product.prototype.getVariantById = function(t) {
  for (var e = 0; e < this.variants.length; e++) {
    var o = this.variants[e];
    if (t == o.id) return o
  }
  return null
}, Shopify.money_format = "${{amount}}", Shopify.formatMoney = function(t, e) {
  function o(t, e) {
    return void 0 === t ? e : t
  }

  function i(t, e, i, r) {
    if (e = o(e, 2), i = o(i, ","), r = o(r, "."), isNaN(t) || null == t) return 0;
    var n = (t = (t / 100).toFixed(e)).split(".");
    return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (n[1] ? r + n[1] : "")
  }
  "string" == typeof t && (t = t.replace(".", ""));
  var r = "",
    n = /\{\{\s*(\w+)\s*\}\}/,
    a = e || this.money_format;
  switch (a.match(n)[1]) {
    case "amount":
      r = i(t, 2);
      break;
    case "amount_no_decimals":
      r = i(t, 0);
      break;
    case "amount_with_comma_separator":
      r = i(t, 2, ".", ",");
      break;
    case "amount_with_space_separator":
      r = i(t, 2, " ", ",");
      break;
    case "amount_with_period_and_space_separator":
      r = i(t, 2, " ", ".");
      break;
    case "amount_no_decimals_with_comma_separator":
      r = i(t, 0, ".", ",");
      break;
    case "amount_no_decimals_with_space_separator":
      r = i(t, 0, " ");
      break;
    case "amount_with_apostrophe_separator":
      r = i(t, 2, "'", ".")
  }
  return a.replace(n, r)
}, Shopify.OptionSelectors = function(t, e) {
  return this.selectorDivClass = "selector-wrapper", this.selectorClass = "single-option-selector", this.variantIdFieldIdSuffix = "-variant-id", this.variantIdField = null, this.historyState = null, this.selectors = [], this.domIdPrefix = t, this.product = new Shopify.Product(e.product), this.onVariantSelected = Shopify.isDefined(e.onVariantSelected) ? e.onVariantSelected : function() {}, this.replaceSelector(t), this.initDropdown(), e.enableHistoryState && (this.historyState = new Shopify.OptionSelectors.HistoryState(this)), !0
}, Shopify.OptionSelectors.prototype.initDropdown = function() {
  var t = {
    initialLoad: !0
  };
  if (!this.selectVariantFromDropdown(t)) {
    var e = this;
    setTimeout(function() {
      e.selectVariantFromParams(t) || e.fireOnChangeForFirstDropdown.call(e, t)
    })
  }
}, Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown = function(t) {
  this.selectors[0].element.onchange(t)
}, Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown = function(t) {
  this.selectVariantFromParams(t) || this.selectVariantFromDropdown(t)
}, Shopify.OptionSelectors.prototype.replaceSelector = function(t) {
  var e = document.getElementById(t),
    o = e.parentNode;
  Shopify.each(this.buildSelectors(), function(t) {
    o.insertBefore(t, e)
  }), e.style.display = "none", this.variantIdField = e
}, Shopify.OptionSelectors.prototype.selectVariantFromDropdown = function(t) {
  var e = document.getElementById(this.domIdPrefix).querySelector("[selected]");
  if (e || (e = document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')), !e) return !1;
  var o = e.value;
  return this.selectVariant(o, t)
}, Shopify.OptionSelectors.prototype.selectVariantFromParams = function(t) {
  var e = Shopify.urlParam("variant");
  return this.selectVariant(e, t)
}, Shopify.OptionSelectors.prototype.selectVariant = function(t, e) {
  var o = this.product.getVariantById(t);
  if (null == o) return !1;
  for (var i = 0; i < this.selectors.length; i++) {
    var r = this.selectors[i].element,
      n = o[r.getAttribute("data-option")];
    null != n && this.optionExistInSelect(r, n) && (r.value = n)
  }
  return "undefined" != typeof jQuery ? jQuery(this.selectors[0].element).trigger("change", e) : this.selectors[0].element.onchange(e), !0
}, Shopify.OptionSelectors.prototype.optionExistInSelect = function(t, e) {
  for (var o = 0; o < t.options.length; o++)
    if (t.options[o].value == e) return !0
}, Shopify.OptionSelectors.prototype.insertSelectors = function(t, e) {
  Shopify.isDefined(e) && this.setMessageElement(e), this.domIdPrefix = "product-" + this.product.id + "-variant-selector";
  var o = document.getElementById(t);
  Shopify.each(this.buildSelectors(), function(t) {
    o.appendChild(t)
  })
}, Shopify.OptionSelectors.prototype.buildSelectors = function() {
  for (var t = 0; t < this.product.optionNames().length; t++) {
    var e = new Shopify.SingleOptionSelector(this, t, this.product.optionNames()[t], this.product.optionValues(t));
    e.element.disabled = !1, this.selectors.push(e)
  }
  var o = this.selectorDivClass,
    i = this.product.optionNames();
  return Shopify.map(this.selectors, function(t) {
    var e = document.createElement("div");
    if (e.setAttribute("class", o), 1 <= i.length) {
      var r = document.createElement("label");
      r.htmlFor = t.element.id, r.innerHTML = t.name, e.appendChild(r)
    }
    return e.appendChild(t.element), e
  })
}, Shopify.OptionSelectors.prototype.selectedValues = function() {
  for (var t = [], e = 0; e < this.selectors.length; e++) {
    var o = this.selectors[e].element.value;
    t.push(o)
  }
  return t
}, Shopify.OptionSelectors.prototype.updateSelectors = function(t, e) {
  var o = this.selectedValues(),
    i = this.product.getVariant(o);
  i ? (this.variantIdField.disabled = !1, this.variantIdField.value = i.id) : this.variantIdField.disabled = !0, this.onVariantSelected(i, this, e), null != this.historyState && this.historyState.onVariantChange(i, this, e)
}, Shopify.OptionSelectorsFromDOM = function(t, e) {
  var o = e.optionNames || [],
    i = e.priceFieldExists || !0,
    r = e.delimiter || "/",
    n = this.createProductFromSelector(t, o, i, r);
  e.product = n, Shopify.OptionSelectorsFromDOM.baseConstructor.call(this, t, e)
}, Shopify.extend(Shopify.OptionSelectorsFromDOM, Shopify.OptionSelectors), Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector = function(t, e, o, i) {
  Shopify.isDefined(o) || (o = !0), Shopify.isDefined(i) || (i = "/");
  var r = document.getElementById(t),
    n = r.childNodes,
    a = (r.parentNode, e.length),
    s = [];
  Shopify.each(n, function(t) {
    if (1 == t.nodeType && "option" == t.tagName.toLowerCase()) {
      var r = t.innerHTML.split(new RegExp("\\s*\\" + i + "\\s*"));
      0 == e.length && (a = r.length - (o ? 1 : 0));
      var n = r.slice(0, a),
        p = o ? r[a] : "",
        l = (t.getAttribute("value"), {
          available: !t.disabled,
          id: parseFloat(t.value),
          price: p,
          option1: n[0],
          option2: n[1],
          option3: n[2]
        });
      s.push(l)
    }
  });
  var p = {
    variants: s
  };
  if (0 == e.length) {
    p.options = [];
    for (var l = 0; l < a; l++) p.options[l] = "option " + (l + 1)
  } else p.options = e;
  return p
}, Shopify.SingleOptionSelector = function(t, e, o, i) {
  this.multiSelector = t, this.values = i, this.index = e, this.name = o, this.element = document.createElement("select");
  for (var r = 0; r < i.length; r++) {
    var n = document.createElement("option");
    n.value = i[r], n.innerHTML = i[r], this.element.appendChild(n)
  }
  return this.element.setAttribute("class", this.multiSelector.selectorClass), this.element.setAttribute("data-option", "option" + (e + 1)), this.element.id = t.domIdPrefix + "-option-" + e, this.element.onchange = function(o, i) {
    i = i || {}, t.updateSelectors(e, i)
  }, !0
}, Shopify.Image = {
  preload: function(t, e) {
    for (var o = 0; o < t.length; o++) {
      var i = t[o];
      this.loadImage(this.getSizedImageUrl(i, e))
    }
  },
  loadImage: function(t) {
    (new Image).src = t
  },
  switchImage: function(t, e, o) {
    if (t && e) {
      var i = this.imageSize(e.src),
        r = this.getSizedImageUrl(t.src, i);
      o ? o(r, t, e) : e.src = r
    }
  },
  imageSize: function(t) {
    var e = t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
    return null !== e ? e[1] : null
  },
  getSizedImageUrl: function(t, e) {
    if (null == e) return t;
    if ("master" == e) return this.removeProtocol(t);
    var o = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
    if (null == o) return null;
    var i = t.split(o[0]),
      r = o[0];
    return this.removeProtocol(i[0] + "_" + e + r)
  },
  removeProtocol: function(t) {
    return t.replace(/http(s)?:/, "")
  }
}, Shopify.OptionSelectors.HistoryState = function(t) {
  this.browserSupports() && this.register(t)
}, Shopify.OptionSelectors.HistoryState.prototype.register = function(t) {
  window.addEventListener("popstate", function() {
    t.selectVariantFromParamsOrDropdown({
      popStateCall: !0
    })
  })
}, Shopify.OptionSelectors.HistoryState.prototype.onVariantChange = function(t, e, o) {
  this.browserSupports() && (!t || o.initialLoad || o.popStateCall || Shopify.setParam("variant", t.id))
}, Shopify.OptionSelectors.HistoryState.prototype.browserSupports = function() {
  return window.history && window.history.replaceState
};
! function(a, b) {
  "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipe = b()
}(this, function() {
  "use strict";
  var a = function(a, b, c, d) {
    var e = {
      features: null,
      bind: function(a, b, c, d) {
        var e = (d ? "remove" : "add") + "EventListener";
        b = b.split(" ");
        for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1)
      },
      isArray: function(a) {
        return a instanceof Array
      },
      createEl: function(a, b) {
        var c = document.createElement(b || "div");
        return a && (c.className = a), c
      },
      getScrollY: function() {
        var a = window.pageYOffset;
        return void 0 !== a ? a : document.documentElement.scrollTop
      },
      unbind: function(a, b, c) {
        e.bind(a, b, c, !0)
      },
      removeClass: function(a, b) {
        var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
        a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
      },
      addClass: function(a, b) {
        e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b)
      },
      hasClass: function(a, b) {
        return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
      },
      getChildByClass: function(a, b) {
        for (var c = a.firstChild; c;) {
          if (e.hasClass(c, b)) return c;
          c = c.nextSibling
        }
      },
      arraySearch: function(a, b, c) {
        for (var d = a.length; d--;)
          if (a[d][c] === b) return d;
        return -1
      },
      extend: function(a, b, c) {
        for (var d in b)
          if (b.hasOwnProperty(d)) {
            if (c && a.hasOwnProperty(d)) continue;
            a[d] = b[d]
          }
      },
      easing: {
        sine: {
          out: function(a) {
            return Math.sin(a * (Math.PI / 2))
          },
          inOut: function(a) {
            return -(Math.cos(Math.PI * a) - 1) / 2
          }
        },
        cubic: {
          out: function(a) {
            return --a * a * a + 1
          }
        }
      },
      detectFeatures: function() {
        if (e.features) return e.features;
        var a = e.createEl(),
          b = a.style,
          c = "",
          d = {};
        if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled, !d.pointerEvent) {
          var f = navigator.userAgent;
          if (/iP(hone|od)/.test(navigator.platform)) {
            var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && g < 8 && (d.isOldIOSPhone = !0))
          }
          var h = f.match(/Android\s([0-9\.]*)/),
            i = h ? h[1] : 0;
          i = parseFloat(i), i >= 1 && (i < 4.4 && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f)
        }
        for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; n < 4; n++) {
          c = m[n];
          for (var o = 0; o < 3; o++) j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
          c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]))
        }
        if (!d.raf) {
          var p = 0;
          d.raf = function(a) {
            var b = (new Date).getTime(),
              c = Math.max(0, 16 - (b - p)),
              d = window.setTimeout(function() {
                a(b + c)
              }, c);
            return p = b + c, d
          }, d.caf = function(a) {
            clearTimeout(a)
          }
        }
        return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d
      }
    };
    e.detectFeatures(), e.features.oldIE && (e.bind = function(a, b, c, d) {
      b = b.split(" ");
      for (var e, f = (d ? "detach" : "attach") + "Event", g = function() {
          c.handleEvent.call(c)
        }, h = 0; h < b.length; h++)
        if (e = b[h])
          if ("object" == typeof c && c.handleEvent) {
            if (d) {
              if (!c["oldIE" + e]) return !1
            } else c["oldIE" + e] = g;
            a[f]("on" + e, c["oldIE" + e])
          } else a[f]("on" + e, c)
    });
    var f = this,
      g = 25,
      h = 3,
      i = {
        allowPanToNext: !0,
        spacing: .12,
        bgOpacity: 1,
        mouseUsed: !1,
        loop: !0,
        pinchToClose: !0,
        closeOnScroll: !0,
        closeOnVerticalDrag: !0,
        verticalDragRange: .75,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        showHideOpacity: !1,
        focus: !0,
        escKey: !0,
        arrowKeys: !0,
        mainScrollEndFriction: .35,
        panEndFriction: .35,
        isClickableElement: function(a) {
          return "A" === a.tagName
        },
        getDoubleTapZoom: function(a, b) {
          return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33
        },
        maxSpreadZoom: 1.33,
        modal: !0,
        scaleMode: "fit"
      };
    e.extend(i, d);
    var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma = function() {
        return {
          x: 0,
          y: 0
        }
      },
      na = ma(),
      oa = ma(),
      pa = ma(),
      qa = {},
      ra = 0,
      sa = {},
      ta = ma(),
      ua = 0,
      va = !0,
      wa = [],
      xa = {},
      ya = !1,
      za = function(a, b) {
        e.extend(f, b.publicMethods), wa.push(a)
      },
      Aa = function(a) {
        var b = ac();
        return a > b - 1 ? a - b : a < 0 ? b + a : a
      },
      Ba = {},
      Ca = function(a, b) {
        return Ba[a] || (Ba[a] = []), Ba[a].push(b)
      },
      Da = function(a) {
        var b = Ba[a];
        if (b) {
          var c = Array.prototype.slice.call(arguments);
          c.shift();
          for (var d = 0; d < b.length; d++) b[d].apply(f, c)
        }
      },
      Ea = function() {
        return (new Date).getTime()
      },
      Fa = function(a) {
        ja = a, f.bg.style.opacity = a * i.bgOpacity
      },
      Ga = function(a, b, c, d, e) {
        (!ya || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")"
      },
      Ha = function(a) {
        ea && (a && (s > f.currItem.fitRatio ? ya || (mc(f.currItem, !1, !0), ya = !0) : ya && (mc(f.currItem), ya = !1)), Ga(ea, pa.x, pa.y, s))
      },
      Ia = function(a) {
        a.container && Ga(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a)
      },
      Ja = function(a, b) {
        b[E] = u + a + "px, 0px" + v
      },
      Ka = function(a, b) {
        if (!i.loop && b) {
          var c = m + (ta.x * ra - a) / ta.x,
            d = Math.round(a - tb.x);
          (c < 0 && d > 0 || c >= ac() - 1 && d < 0) && (a = tb.x + d * i.mainScrollEndFriction)
        }
        tb.x = a, Ja(a, n)
      },
      La = function(a, b) {
        var c = ub[a] - sa[a];
        return oa[a] + na[a] + c - c * (b / t)
      },
      Ma = function(a, b) {
        a.x = b.x, a.y = b.y, b.id && (a.id = b.id)
      },
      Na = function(a) {
        a.x = Math.round(a.x), a.y = Math.round(a.y)
      },
      Oa = null,
      Pa = function() {
        Oa && (e.unbind(document, "mousemove", Pa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Da("mouseUsed")), Oa = setTimeout(function() {
          Oa = null
        }, 100)
      },
      Qa = function() {
        e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Pa), e.bind(window, "resize scroll orientationchange", f), Da("bindEvents")
      },
      Ra = function() {
        e.unbind(window, "resize scroll orientationchange", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Pa), N.transform && e.unbind(f.scrollWrap, "click", f), V && e.unbind(window, p, f), clearTimeout(O), Da("unbindEvents")
      },
      Sa = function(a, b) {
        var c = ic(f.currItem, qa, a);
        return b && (da = c), c
      },
      Ta = function(a) {
        return a || (a = f.currItem), a.initialZoomLevel
      },
      Ua = function(a) {
        return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1
      },
      Va = function(a, b, c, d) {
        return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = La(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] && (c[a] = b.max[a], !0))
      },
      Wa = function() {
        if (E) {
          var b = N.perspective && !G;
          return u = "translate" + (b ? "3d(" : "("), void(v = N.perspective ? ", 0px)" : ")")
        }
        E = "left", e.addClass(a, "pswp--ie"), Ja = function(a, b) {
          b.left = a + "px"
        }, Ia = function(a) {
          var b = a.fitRatio > 1 ? 1 : a.fitRatio,
            c = a.container.style,
            d = b * a.w,
            e = b * a.h;
          c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px"
        }, Ha = function() {
          if (ea) {
            var a = ea,
              b = f.currItem,
              c = b.fitRatio > 1 ? 1 : b.fitRatio,
              d = c * b.w,
              e = c * b.h;
            a.width = d + "px", a.height = e + "px", a.left = pa.x + "px", a.top = pa.y + "px"
          }
        }
      },
      Xa = function(a) {
        var b = "";
        i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()))
      },
      Ya = function(a) {
        a && (Y || X || fa || T) && (a.preventDefault(), a.stopPropagation())
      },
      Za = function() {
        f.setScrollOffset(0, e.getScrollY())
      },
      $a = {},
      _a = 0,
      ab = function(a) {
        $a[a] && ($a[a].raf && I($a[a].raf), _a--, delete $a[a])
      },
      bb = function(a) {
        $a[a] && ab(a), $a[a] || (_a++, $a[a] = {})
      },
      cb = function() {
        for (var a in $a) $a.hasOwnProperty(a) && ab(a)
      },
      db = function(a, b, c, d, e, f, g) {
        var h, i = Ea();
        bb(a);
        var j = function() {
          if ($a[a]) {
            if (h = Ea() - i, h >= d) return ab(a), f(c), void(g && g());
            f((c - b) * e(h / d) + b), $a[a].raf = H(j)
          }
        };
        j()
      },
      eb = {
        shout: Da,
        listen: Ca,
        viewportSize: qa,
        options: i,
        isMainScrollAnimating: function() {
          return fa
        },
        getZoomLevel: function() {
          return s
        },
        getCurrentIndex: function() {
          return m
        },
        isDragging: function() {
          return V
        },
        isZooming: function() {
          return aa
        },
        setScrollOffset: function(a, b) {
          sa.x = a, M = sa.y = b, Da("updateScrollOffset", sa)
        },
        applyZoomPan: function(a, b, c, d) {
          pa.x = b, pa.y = c, s = a, Ha(d)
        },
        init: function() {
          if (!j && !k) {
            var c;
            f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{
              el: f.container.children[0],
              wrap: 0,
              index: -1
            }, {
              el: f.container.children[1],
              wrap: 0,
              index: -1
            }, {
              el: f.container.children[2],
              wrap: 0,
              index: -1
            }], y[0].el.style.display = y[2].el.style.display = "none", Wa(), r = {
              resize: f.updateSize,
              orientationchange: function() {
                clearTimeout(O), O = setTimeout(function() {
                  qa.x !== f.scrollWrap.clientWidth && f.updateSize()
                }, 500)
              },
              scroll: Za,
              keydown: Xa,
              click: Ya
            };
            var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
            for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < wa.length; c++) f["init" + wa[c]]();
            if (b) {
              var g = f.ui = new b(f, e);
              g.init()
            }
            Da("firstUpdate"), m = m || i.index || 0, (isNaN(m) || m < 0 || m >= ac()) && (m = 0), f.currItem = _b(m), (N.isOldIOSPhone || N.isOldAndroid) && (va = !1), a.setAttribute("aria-hidden", "false"), i.modal && (va ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === M && (Da("initialLayout"), M = K = e.getScrollY());
            var l = "pswp--open ";
            for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ua = null, c = 0; c < h; c++) Ja((c + o) * ta.x, y[c].el.style);
            L || e.bind(f.scrollWrap, q, f), Ca("initialZoomInEnd", function() {
              f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && a.focus(), Qa()
            }), f.setContent(y[1], m), f.updateCurrItem(), Da("afterInit"), va || (w = setInterval(function() {
              _a || V || aa || s !== f.currItem.initialZoomLevel || f.updateSize()
            }, 1e3)), e.addClass(a, "pswp--visible")
          }
        },
        close: function() {
          j && (j = !1, k = !0, Da("close"), Ra(), cc(f.currItem, null, !0, f.destroy))
        },
        destroy: function() {
          Da("destroy"), Xb && clearTimeout(Xb), a.setAttribute("aria-hidden", "true"), a.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), zb(), cb(), Ba = null
        },
        panTo: function(a, b, c) {
          c || (a > da.min.x ? a = da.min.x : a < da.max.x && (a = da.max.x), b > da.min.y ? b = da.min.y : b < da.max.y && (b = da.max.y)), pa.x = a, pa.y = b, Ha()
        },
        handleEvent: function(a) {
          a = a || window.event, r[a.type] && r[a.type](a)
        },
        goTo: function(a) {
          a = Aa(a);
          var b = a - m;
          ua = b, m = a, f.currItem = _b(m), ra -= b, Ka(ta.x * ra), cb(), fa = !1, f.updateCurrItem()
        },
        next: function() {
          f.goTo(m + 1)
        },
        prev: function() {
          f.goTo(m - 1)
        },
        updateCurrZoomItem: function(a) {
          if (a && Da("beforeChange", 0), y[1].el.children.length) {
            var b = y[1].el.children[0];
            ea = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null
          } else ea = null;
          da = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, pa.x = da.center.x, pa.y = da.center.y, a && Da("afterChange")
        },
        invalidateCurrItems: function() {
          x = !0;
          for (var a = 0; a < h; a++) y[a].item && (y[a].item.needsUpdate = !0)
        },
        updateCurrItem: function(a) {
          if (0 !== ua) {
            var b, c = Math.abs(ua);
            if (!(a && c < 2)) {
              f.currItem = _b(m), ya = !1, Da("beforeChange", ua), c >= h && (o += ua + (ua > 0 ? -h : h), c = h);
              for (var d = 0; d < c; d++) ua > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ja((o + 2) * ta.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ja(o * ta.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
              if (ea && 1 === Math.abs(ua)) {
                var e = _b(z);
                e.initialZoomLevel !== s && (ic(e, qa), mc(e), Ia(e))
              }
              ua = 0, f.updateCurrZoomItem(), z = m, Da("afterChange")
            }
          }
        },
        updateSize: function(b) {
          if (!va && i.modal) {
            var c = e.getScrollY();
            if (M !== c && (a.style.top = c + "px", M = c), !b && xa.x === window.innerWidth && xa.y === window.innerHeight) return;
            xa.x = window.innerWidth, xa.y = window.innerHeight, a.style.height = xa.y + "px"
          }
          if (qa.x = f.scrollWrap.clientWidth, qa.y = f.scrollWrap.clientHeight, Za(), ta.x = qa.x + Math.round(qa.x * i.spacing), ta.y = qa.y, Ka(ta.x * ra), Da("beforeResize"), void 0 !== o) {
            for (var d, g, j, k = 0; k < h; k++) d = y[k], Ja((k + o) * ta.x, d.el.style), j = m + k - 1, i.loop && ac() > 2 && (j = Aa(j)), g = _b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : d.index === -1 && j >= 0 && f.setContent(d, j), g && g.container && (ic(g, qa), mc(g), Ia(g));
            x = !1
          }
          t = s = f.currItem.initialZoomLevel, da = f.currItem.bounds, da && (pa.x = da.center.x, pa.y = da.center.y, Ha(!0)), Da("resize")
        },
        zoomTo: function(a, b, c, d, f) {
          b && (t = s, ub.x = Math.abs(b.x) - pa.x, ub.y = Math.abs(b.y) - pa.y, Ma(oa, pa));
          var g = Sa(a, !1),
            h = {};
          Va("x", g, h, a), Va("y", g, h, a);
          var i = s,
            j = {
              x: pa.x,
              y: pa.y
            };
          Na(h);
          var k = function(b) {
            1 === b ? (s = a, pa.x = h.x, pa.y = h.y) : (s = (a - i) * b + i, pa.x = (h.x - j.x) * b + j.x, pa.y = (h.y - j.y) * b + j.y), f && f(b), Ha(1 === b)
          };
          c ? db("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1)
        }
      },
      fb = 30,
      gb = 10,
      hb = {},
      ib = {},
      jb = {},
      kb = {},
      lb = {},
      mb = [],
      nb = {},
      ob = [],
      pb = {},
      qb = 0,
      rb = ma(),
      sb = 0,
      tb = ma(),
      ub = ma(),
      vb = ma(),
      wb = function(a, b) {
        return a.x === b.x && a.y === b.y
      },
      xb = function(a, b) {
        return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g
      },
      yb = function(a, b) {
        return pb.x = Math.abs(a.x - b.x), pb.y = Math.abs(a.y - b.y), Math.sqrt(pb.x * pb.x + pb.y * pb.y)
      },
      zb = function() {
        Z && (I(Z), Z = null)
      },
      Ab = function() {
        V && (Z = H(Ab), Qb())
      },
      Bb = function() {
        return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel)
      },
      Cb = function(a, b) {
        return !(!a || a === document) && (!(a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (b(a) ? a : Cb(a.parentNode, b)))
      },
      Db = {},
      Eb = function(a, b) {
        return Db.prevent = !Cb(a.target, i.isClickableElement), Da("preventDragEvent", a, b, Db), Db.prevent
      },
      Fb = function(a, b) {
        return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b
      },
      Gb = function(a, b, c) {
        c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y)
      },
      Hb = function(a, b, c) {
        if (a - Q > 50) {
          var d = ob.length > 2 ? ob.shift() : {};
          d.x = b, d.y = c, ob.push(d), Q = a
        }
      },
      Ib = function() {
        var a = pa.y - f.currItem.initialPosition.y;
        return 1 - Math.abs(a / (qa.y / 2))
      },
      Jb = {},
      Kb = {},
      Lb = [],
      Mb = function(a) {
        for (; Lb.length > 0;) Lb.pop();
        return F ? (la = 0, mb.forEach(function(a) {
          0 === la ? Lb[0] = a : 1 === la && (Lb[1] = a), la++
        })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Lb[0] = Fb(a.touches[0], Jb), a.touches.length > 1 && (Lb[1] = Fb(a.touches[1], Kb))) : (Jb.x = a.pageX, Jb.y = a.pageY, Jb.id = "", Lb[0] = Jb), Lb
      },
      Nb = function(a, b) {
        var c, d, e, g, h = 0,
          j = pa[a] + b[a],
          k = b[a] > 0,
          l = tb.x + b.x,
          m = tb.x - nb.x;
        return c = j > da.min[a] || j < da.max[a] ? i.panEndFriction : 1, j = pa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (ea ? "h" !== ga || "x" !== a || X || (k ? (j > da.min[a] && (c = i.panEndFriction, h = da.min[a] - j, d = da.min[a] - oa[a]), (d <= 0 || m < 0) && ac() > 1 ? (g = l, m < 0 && l > nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j)) : (j < da.max[a] && (c = i.panEndFriction, h = j - da.max[a], d = oa[a] - da.max[a]), (d <= 0 || m > 0) && ac() > 1 ? (g = l, m > 0 && l < nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j))) : g = l, "x" !== a) ? void(fa || $ || s > f.currItem.fitRatio && (pa[a] += b[a] * c)) : (void 0 !== g && (Ka(g, !0), $ = g !== nb.x), da.min.x !== da.max.x && (void 0 !== e ? pa.x = e : $ || (pa.x += b.x * c)), void 0 !== g)
      },
      Ob = function(a) {
        if (!("mousedown" === a.type && a.button > 0)) {
          if ($b) return void a.preventDefault();
          if (!U || "mousedown" !== a.type) {
            if (Eb(a, !0) && a.preventDefault(), Da("pointerDown"), F) {
              var b = e.arraySearch(mb, a.pointerId, "id");
              b < 0 && (b = mb.length), mb[b] = {
                x: a.pageX,
                y: a.pageY,
                id: a.pointerId
              }
            }
            var c = Mb(a),
              d = c.length;
            _ = null, cb(), V && 1 !== d || (V = ha = !0, e.bind(window, p, f), S = ka = ia = T = $ = Y = W = X = !1, ga = null, Da("firstTouchStart", c), Ma(oa, pa), na.x = na.y = 0, Ma(kb, c[0]), Ma(lb, kb), nb.x = ta.x * ra, ob = [{
              x: kb.x,
              y: kb.y
            }], Q = P = Ea(), Sa(s, !0), zb(), Ab()), !aa && d > 1 && !fa && !$ && (t = s, X = !1, aa = W = !0, na.y = na.x = 0, Ma(oa, pa), Ma(hb, c[0]), Ma(ib, c[1]), Gb(hb, ib, vb), ub.x = Math.abs(vb.x) - pa.x, ub.y = Math.abs(vb.y) - pa.y, ba = ca = yb(hb, ib))
          }
        }
      },
      Pb = function(a) {
        if (a.preventDefault(), F) {
          var b = e.arraySearch(mb, a.pointerId, "id");
          if (b > -1) {
            var c = mb[b];
            c.x = a.pageX, c.y = a.pageY
          }
        }
        if (V) {
          var d = Mb(a);
          if (ga || Y || aa) _ = d;
          else if (tb.x !== ta.x * ra) ga = "h";
          else {
            var f = Math.abs(d[0].x - kb.x) - Math.abs(d[0].y - kb.y);
            Math.abs(f) >= gb && (ga = f > 0 ? "h" : "v", _ = d)
          }
        }
      },
      Qb = function() {
        if (_) {
          var a = _.length;
          if (0 !== a)
            if (Ma(hb, _[0]), jb.x = hb.x - kb.x, jb.y = hb.y - kb.y, aa && a > 1) {
              if (kb.x = hb.x, kb.y = hb.y, !jb.x && !jb.y && wb(_[1], ib)) return;
              Ma(ib, _[1]), X || (X = !0, Da("zoomGestureStarted"));
              var b = yb(hb, ib),
                c = Vb(b);
              c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ka = !0);
              var d = 1,
                e = Ta(),
                g = Ua();
              if (c < e)
                if (i.pinchToClose && !ka && t <= f.currItem.initialZoomLevel) {
                  var h = e - c,
                    j = 1 - h / (e / 1.2);
                  Fa(j), Da("onPinchClose", j), ia = !0
                } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3);
              else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
              d < 0 && (d = 0), ba = b, Gb(hb, ib, rb), na.x += rb.x - vb.x, na.y += rb.y - vb.y, Ma(vb, rb), pa.x = La("x", c), pa.y = La("y", c), S = c > s, s = c, Ha()
            } else {
              if (!ga) return;
              if (ha && (ha = !1, Math.abs(jb.x) >= gb && (jb.x -= _[0].x - lb.x), Math.abs(jb.y) >= gb && (jb.y -= _[0].y - lb.y)), kb.x = hb.x, kb.y = hb.y, 0 === jb.x && 0 === jb.y) return;
              if ("v" === ga && i.closeOnVerticalDrag && !Bb()) {
                na.y += jb.y, pa.y += jb.y;
                var k = Ib();
                return T = !0, Da("onVerticalDrag", k), Fa(k), void Ha()
              }
              Hb(Ea(), hb.x, hb.y), Y = !0, da = f.currItem.bounds;
              var l = Nb("x", jb);
              l || (Nb("y", jb), Na(pa), Ha())
            }
        }
      },
      Rb = function(a) {
        if (N.isOldAndroid) {
          if (U && "mouseup" === a.type) return;
          a.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function() {
            U = 0
          }, 600))
        }
        Da("pointerUp"), Eb(a, !1) && a.preventDefault();
        var b;
        if (F) {
          var c = e.arraySearch(mb, a.pointerId, "id");
          if (c > -1)
            if (b = mb.splice(c, 1)[0], navigator.msPointerEnabled) {
              var d = {
                4: "mouse",
                2: "touch",
                3: "pen"
              };
              b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse")
            } else b.type = a.pointerType || "mouse"
        }
        var g, h = Mb(a),
          j = h.length;
        if ("mouseup" === a.type && (j = 0), 2 === j) return _ = null, !0;
        1 === j && Ma(lb, h[0]), 0 !== j || ga || fa || (b || ("mouseup" === a.type ? b = {
          x: a.pageX,
          y: a.pageY,
          type: "mouse"
        } : a.changedTouches && a.changedTouches[0] && (b = {
          x: a.changedTouches[0].pageX,
          y: a.changedTouches[0].pageY,
          type: "touch"
        })), Da("touchRelease", a, b));
        var k = -1;
        if (0 === j && (V = !1, e.unbind(window, p, f), zb(), aa ? k = 0 : sb !== -1 && (k = Ea() - sb)), sb = 1 === j ? Ea() : -1, g = k !== -1 && k < 150 ? "zoom" : "swipe", aa && j < 2 && (aa = !1, 1 === j && (g = "zoomPointerUp"), Da("zoomGestureEnded")), _ = null, Y || X || fa || T)
          if (cb(), R || (R = Sb()), R.calculateSwipeSpeed("x"), T) {
            var l = Ib();
            if (l < i.verticalDragRange) f.close();
            else {
              var m = pa.y,
                n = ja;
              db("verticalDrag", 0, 1, 300, e.easing.cubic.out, function(a) {
                pa.y = (f.currItem.initialPosition.y - m) * a + m, Fa((1 - n) * a + n), Ha()
              }), Da("onVerticalDrag", 1)
            }
          } else {
            if (($ || fa) && 0 === j) {
              var o = Ub(g, R);
              if (o) return;
              g = "zoomPointerUp"
            }
            if (!fa) return "swipe" !== g ? void Wb() : void(!$ && s > f.currItem.fitRatio && Tb(R))
          }
      },
      Sb = function() {
        var a, b, c = {
          lastFlickOffset: {},
          lastFlickDist: {},
          lastFlickSpeed: {},
          slowDownRatio: {},
          slowDownRatioReverse: {},
          speedDecelerationRatio: {},
          speedDecelerationRatioAbs: {},
          distanceOffset: {},
          backAnimDestination: {},
          backAnimStarted: {},
          calculateSwipeSpeed: function(d) {
            ob.length > 1 ? (a = Ea() - Q + 50, b = ob[ob.length - 2][d]) : (a = Ea() - P, b = lb[d]), c.lastFlickOffset[d] = kb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1
          },
          calculateOverBoundsAnimOffset: function(a, b) {
            c.backAnimStarted[a] || (pa[a] > da.min[a] ? c.backAnimDestination[a] = da.min[a] : pa[a] < da.max[a] && (c.backAnimDestination[a] = da.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, db("bounceZoomPan" + a, pa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function(b) {
              pa[a] = b, Ha()
            }))))
          },
          calculateAnimOffset: function(a) {
            c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, pa[a] += c.distanceOffset[a])
          },
          panAnimLoop: function() {
            if ($a.zoomPan && ($a.zoomPan.raf = H(c.panAnimLoop), c.now = Ea(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ha(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05)) return pa.x = Math.round(pa.x), pa.y = Math.round(pa.y), Ha(), void ab("zoomPan")
          }
        };
        return c
      },
      Tb = function(a) {
        return a.calculateSwipeSpeed("y"), da = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (bb("zoomPan"), a.lastNow = Ea(), void a.panAnimLoop())
      },
      Ub = function(a, b) {
        var c;
        fa || (qb = m);
        var d;
        if ("swipe" === a) {
          var g = kb.x - lb.x,
            h = b.lastFlickDist.x < 10;
          g > fb && (h || b.lastFlickOffset.x > 20) ? d = -1 : g < -fb && (h || b.lastFlickOffset.x < -20) && (d = 1)
        }
        var j;
        d && (m += d, m < 0 ? (m = i.loop ? ac() - 1 : 0, j = !0) : m >= ac() && (m = i.loop ? 0 : ac() - 1, j = !0), j && !i.loop || (ua += d, ra -= d, c = !0));
        var k, l = ta.x * ra,
          n = Math.abs(l - tb.x);
        return c || l > tb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, qb === m && (c = !1), fa = !0, Da("mainScrollAnimStart"), db("mainScroll", tb.x, l, k, e.easing.cubic.out, Ka, function() {
          cb(), fa = !1, qb = -1, (c || qb !== m) && f.updateCurrItem(), Da("mainScrollAnimComplete")
        }), c && f.updateCurrItem(!0), c
      },
      Vb = function(a) {
        return 1 / ca * a * t
      },
      Wb = function() {
        var a = s,
          b = Ta(),
          c = Ua();
        s < b ? a = b : s > c && (a = c);
        var d, g = 1,
          h = ja;
        return ia && !S && !ka && s < b ? (f.close(), !0) : (ia && (d = function(a) {
          Fa((g - h) * a + h)
        }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0)
      };
    za("Gestures", {
      publicMethods: {
        initGestures: function() {
          var a = function(a, b, c, d, e) {
            A = a + b, B = a + c, C = a + d, D = e ? a + e : ""
          };
          F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.msPointerEnabled ? a("MSPointer", "Down", "Move", "Up", "Cancel") : a("pointer", "down", "move", "up", "cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Ob, r[B] = Pb, r[C] = Rb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1)
        }
      }
    });
    var Xb, Yb, Zb, $b, _b, ac, bc, cc = function(b, c, d, g) {
        Xb && clearTimeout(Xb), $b = !0, Zb = !0;
        var h;
        b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
        var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
          k = function() {
            ab("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Fa(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Da("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), $b = !1
          };
        if (!j || !h || void 0 === h.x) return Da("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, Ma(pa, b.initialPosition), Ha(), a.style.opacity = d ? 0 : 1, Fa(1), void(j ? setTimeout(function() {
          k()
        }, j) : k());
        var n = function() {
          var c = l,
            g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
          b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, pa.x = h.x, pa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ha()), bb("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function() {
            e.addClass(a, "pswp--animate_opacity")
          }, 30)), Xb = setTimeout(function() {
            if (Da("initialZoom" + (d ? "Out" : "In")), d) {
              var f = h.w / b.w,
                i = {
                  x: pa.x,
                  y: pa.y
                },
                l = s,
                m = ja,
                n = function(b) {
                  1 === b ? (s = f, pa.x = h.x, pa.y = h.y - M) : (s = (f - l) * b + l, pa.x = (h.x - i.x) * b + i.x, pa.y = (h.y - M - i.y) * b + i.y), Ha(), g ? a.style.opacity = 1 - b : Fa(m - b * m)
                };
              c ? db("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Xb = setTimeout(k, j + 20))
            } else s = b.initialZoomLevel, Ma(pa, b.initialPosition), Ha(), Fa(1), g ? a.style.opacity = 1 : Fa(1), Xb = setTimeout(k, j + 20)
          }, d ? 25 : 90)
        };
        n()
      },
      dc = {},
      ec = [],
      fc = {
        index: 0,
        errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        forceProgressiveLoading: !1,
        preload: [1, 1],
        getNumItemsFn: function() {
          return Yb.length
        }
      },
      gc = function() {
        return {
          center: {
            x: 0,
            y: 0
          },
          max: {
            x: 0,
            y: 0
          },
          min: {
            x: 0,
            y: 0
          }
        }
      },
      hc = function(a, b, c) {
        var d = a.bounds;
        d.center.x = Math.round((dc.x - b) / 2), d.center.y = Math.round((dc.y - c) / 2) + a.vGap.top, d.max.x = b > dc.x ? Math.round(dc.x - b) : d.center.x, d.max.y = c > dc.y ? Math.round(dc.y - c) + a.vGap.top : d.center.y, d.min.x = b > dc.x ? 0 : d.center.x, d.min.y = c > dc.y ? a.vGap.top : d.center.y
      },
      ic = function(a, b, c) {
        if (a.src && !a.loadError) {
          var d = !c;
          if (d && (a.vGap || (a.vGap = {
              top: 0,
              bottom: 0
            }), Da("parseVerticalMargin", a)), dc.x = b.x, dc.y = b.y - a.vGap.top - a.vGap.bottom, d) {
            var e = dc.x / a.w,
              f = dc.y / a.h;
            a.fitRatio = e < f ? e : f;
            var g = i.scaleMode;
            "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = gc())
          }
          if (!c) return;
          return hc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds
        }
        return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = gc(), a.initialPosition = a.bounds.center, a.bounds
      },
      jc = function(a, b, c, d, e, g) {
        b.loadError || d && (b.imageAppended = !0, mc(b, d, b === f.currItem && ya), c.appendChild(d), g && setTimeout(function() {
          b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null)
        }, 500))
      },
      kc = function(a) {
        a.loading = !0, a.loaded = !1;
        var b = a.img = e.createEl("pswp__img", "img"),
          c = function() {
            a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null
          };
        return b.onload = c, b.onerror = function() {
          a.loadError = !0, c()
        }, b.src = a.src, b
      },
      lc = function(a, b) {
        if (a.src && a.loadError && a.container) return b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0
      },
      mc = function(a, b, c) {
        if (a.src) {
          b || (b = a.container.lastChild);
          var d = c ? a.w : Math.round(a.w * a.fitRatio),
            e = c ? a.h : Math.round(a.h * a.fitRatio);
          a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px"
        }
      },
      nc = function() {
        if (ec.length) {
          for (var a, b = 0; b < ec.length; b++) a = ec[b], a.holder.index === a.index && jc(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
          ec = []
        }
      };
    za("Controller", {
      publicMethods: {
        lazyLoadItem: function(a) {
          a = Aa(a);
          var b = _b(a);
          b && (!b.loaded && !b.loading || x) && (Da("gettingData", a, b), b.src && kc(b))
        },
        initController: function() {
          e.extend(i, fc, !0), f.items = Yb = c, _b = f.getItemAt, ac = i.getNumItemsFn, bc = i.loop, ac() < 3 && (i.loop = !1), Ca("beforeChange", function(a) {
            var b, c = i.preload,
              d = null === a || a >= 0,
              e = Math.min(c[0], ac()),
              g = Math.min(c[1], ac());
            for (b = 1; b <= (d ? g : e); b++) f.lazyLoadItem(m + b);
            for (b = 1; b <= (d ? e : g); b++) f.lazyLoadItem(m - b)
          }), Ca("initialLayout", function() {
            f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m)
          }), Ca("mainScrollAnimComplete", nc), Ca("initialZoomInEnd", nc), Ca("destroy", function() {
            for (var a, b = 0; b < Yb.length; b++) a = Yb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
            ec = null
          })
        },
        getItemAt: function(a) {
          return a >= 0 && (void 0 !== Yb[a] && Yb[a])
        },
        allowProgressiveImg: function() {
          return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200
        },
        setContent: function(a, b) {
          i.loop && (b = Aa(b));
          var c = f.getItemAt(a.index);
          c && (c.container = null);
          var d, g = f.getItemAt(b);
          if (!g) return void(a.el.innerHTML = "");
          Da("gettingData", b, g), a.index = b, a.item = g;
          var h = g.container = e.createEl("pswp__zoom-wrap");
          if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), lc(g), ic(g, qa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, mc(g, d), jc(b, g, h, d, !0));
          else {
            if (g.loadComplete = function(c) {
                if (j) {
                  if (a && a.index === b) {
                    if (lc(c, !0)) return c.loadComplete = c.img = null, ic(c, qa), Ia(c), void(a.index === m && f.updateCurrZoomItem());
                    c.imageAppended ? !$b && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (fa || $b) ? ec.push({
                      item: c,
                      baseDiv: h,
                      img: c.img,
                      index: b,
                      holder: a,
                      clearPlaceholder: !0
                    }) : jc(b, c, h, c.img, fa || $b, !0)
                  }
                  c.loadComplete = null, c.img = null, Da("imageLoadComplete", b, c)
                }
              }, e.features.transform) {
              var k = "pswp__img pswp__img--placeholder";
              k += g.msrc ? "" : " pswp__img--placeholder--blank";
              var l = e.createEl(k, g.msrc ? "img" : "");
              g.msrc && (l.src = g.msrc), mc(g, l), h.appendChild(l), g.placeholder = l
            }
            g.loading || kc(g), f.allowProgressiveImg() && (!Zb && N.transform ? ec.push({
              item: g,
              baseDiv: h,
              img: g.img,
              index: b,
              holder: a
            }) : jc(b, g, h, g.img, !0, !0))
          }
          Zb || b !== m ? Ia(g) : (ea = h.style, cc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h)
        },
        cleanSlide: function(a) {
          a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1
        }
      }
    });
    var oc, pc = {},
      qc = function(a, b, c) {
        var d = document.createEvent("CustomEvent"),
          e = {
            origEvent: a,
            target: a.target,
            releasePoint: b,
            pointerType: c || "touch"
          };
        d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d)
      };
    za("Tap", {
      publicMethods: {
        initTap: function() {
          Ca("firstTouchStart", f.onTapStart), Ca("touchRelease", f.onTapRelease), Ca("destroy", function() {
            pc = {}, oc = null
          })
        },
        onTapStart: function(a) {
          a.length > 1 && (clearTimeout(oc), oc = null)
        },
        onTapRelease: function(a, b) {
          if (b && !Y && !W && !_a) {
            var c = b;
            if (oc && (clearTimeout(oc), oc = null, xb(c, pc))) return void Da("doubleTap", c);
            if ("mouse" === b.type) return void qc(a, b, "mouse");
            var d = a.target.tagName.toUpperCase();
            if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap")) return void qc(a, b);
            Ma(pc, c), oc = setTimeout(function() {
              qc(a, b), oc = null
            }, 300)
          }
        }
      }
    });
    var rc;
    za("DesktopZoom", {
      publicMethods: {
        initDesktopZoom: function() {
          L || (G ? Ca("mouseUsed", function() {
            f.setupDesktopZoom()
          }) : f.setupDesktopZoom(!0))
        },
        setupDesktopZoom: function(b) {
          rc = {};
          var c = "wheel mousewheel DOMMouseScroll";
          Ca("bindEvents", function() {
            e.bind(a, c, f.handleMouseWheel)
          }), Ca("unbindEvents", function() {
            rc && e.unbind(a, c, f.handleMouseWheel)
          }), f.mouseZoomedIn = !1;
          var d, g = function() {
              f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), s < 1 ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h()
            },
            h = function() {
              d && (e.removeClass(a, "pswp--dragging"), d = !1)
            };
          Ca("resize", g), Ca("afterChange", g), Ca("pointerDown", function() {
            f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging"))
          }), Ca("pointerUp", h), b || g()
        },
        handleMouseWheel: function(a) {
          if (s <= f.currItem.fitRatio) return i.modal && (!i.closeOnScroll || _a || V ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0;
          if (a.stopPropagation(), rc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (rc.x = 18 * a.deltaX, rc.y = 18 * a.deltaY) : (rc.x = a.deltaX, rc.y = a.deltaY);
          else if ("wheelDelta" in a) a.wheelDeltaX && (rc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? rc.y = -.16 * a.wheelDeltaY : rc.y = -.16 * a.wheelDelta;
          else {
            if (!("detail" in a)) return;
            rc.y = a.detail
          }
          Sa(s, !0);
          var b = pa.x - rc.x,
            c = pa.y - rc.y;
          (i.modal || b <= da.min.x && b >= da.max.x && c <= da.min.y && c >= da.max.y) && a.preventDefault(), f.panTo(b, c)
        },
        toggleDesktopZoom: function(b) {
          b = b || {
            x: qa.x / 2 + sa.x,
            y: qa.y / 2 + sa.y
          };
          var c = i.getDoubleTapZoom(!0, f.currItem),
            d = s === c;
          f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in")
        }
      }
    });
    var sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec = {
        history: !0,
        galleryUID: 1
      },
      Fc = function() {
        return Cc.hash.substring(1)
      },
      Gc = function() {
        sc && clearTimeout(sc), uc && clearTimeout(uc)
      },
      Hc = function() {
        var a = Fc(),
          b = {};
        if (a.length < 5) return b;
        var c, d = a.split("&");
        for (c = 0; c < d.length; c++)
          if (d[c]) {
            var e = d[c].split("=");
            e.length < 2 || (b[e[0]] = e[1])
          } if (i.galleryPIDs) {
          var f = b.pid;
          for (b.pid = 0, c = 0; c < Yb.length; c++)
            if (Yb[c].pid === f) {
              b.pid = c;
              break
            }
        } else b.pid = parseInt(b.pid, 10) - 1;
        return b.pid < 0 && (b.pid = 0), b
      },
      Ic = function() {
        if (uc && clearTimeout(uc), _a || V) return void(uc = setTimeout(Ic, 500));
        vc ? clearTimeout(tc) : vc = !0;
        var a = m + 1,
          b = _b(m);
        b.hasOwnProperty("pid") && (a = b.pid);
        var c = yc + "&gid=" + i.galleryUID + "&pid=" + a;
        zc || Cc.hash.indexOf(c) === -1 && (Bc = !0);
        var d = Cc.href.split("#")[0] + "#" + c;
        Dc ? "#" + c !== window.location.hash && history[zc ? "replaceState" : "pushState"]("", document.title, d) : zc ? Cc.replace(d) : Cc.hash = c, zc = !0, tc = setTimeout(function() {
          vc = !1
        }, 60)
      };
    za("History", {
      publicMethods: {
        initHistory: function() {
          if (e.extend(i, Ec, !0), i.history) {
            Cc = window.location, Bc = !1, Ac = !1, zc = !1, yc = Fc(), Dc = "pushState" in history, yc.indexOf("gid=") > -1 && (yc = yc.split("&gid=")[0], yc = yc.split("?gid=")[0]), Ca("afterChange", f.updateURL), Ca("unbindEvents", function() {
              e.unbind(window, "hashchange", f.onHashChange)
            });
            var a = function() {
              xc = !0, Ac || (Bc ? history.back() : yc ? Cc.hash = yc : Dc ? history.pushState("", document.title, Cc.pathname + Cc.search) : Cc.hash = ""), Gc()
            };
            Ca("unbindEvents", function() {
              l && a()
            }), Ca("destroy", function() {
              xc || a()
            }), Ca("firstUpdate", function() {
              m = Hc().pid
            });
            var b = yc.indexOf("pid=");
            b > -1 && (yc = yc.substring(0, b), "&" === yc.slice(-1) && (yc = yc.slice(0, -1))), setTimeout(function() {
              j && e.bind(window, "hashchange", f.onHashChange)
            }, 40)
          }
        },
        onHashChange: function() {
          return Fc() === yc ? (Ac = !0, void f.close()) : void(vc || (wc = !0, f.goTo(Hc().pid), wc = !1))
        },
        updateURL: function() {
          Gc(), wc || (zc ? sc = setTimeout(Ic, 800) : Ic())
        }
      }
    }), e.extend(f, eb)
  };
  return a
});
! function(a, b) {
  "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b()
}(this, function() {
  "use strict";
  var a = function(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this,
      w = !1,
      x = !0,
      y = !0,
      z = {
        barsSize: {
          top: 44,
          bottom: "auto"
        },
        closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
        timeToIdle: 4e3,
        timeToIdleOutside: 1e3,
        loadingIndicatorDelay: 1e3,
        addCaptionHTMLFn: function(a, b) {
          return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1)
        },
        closeEl: !0,
        captionEl: !0,
        fullscreenEl: !0,
        zoomEl: !0,
        shareEl: !0,
        counterEl: !0,
        arrowEl: !0,
        preloaderEl: !0,
        tapToClose: !1,
        tapToToggleControls: !0,
        clickToCloseNonZoomable: !0,
        shareButtons: [{
          id: "facebook",
          label: "Share on Facebook",
          url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
        }, {
          id: "twitter",
          label: "Tweet",
          url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
        }, {
          id: "pinterest",
          label: "Pin it",
          url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
        }, {
          id: "download",
          label: "Download image",
          url: "{{raw_image_url}}",
          download: !0
        }],
        getImageURLForShare: function() {
          return a.currItem.src || ""
        },
        getPageURLForShare: function() {
          return window.location.href
        },
        getTextForShare: function() {
          return a.currItem.title || ""
        },
        indexIndicatorSep: " / ",
        fitControlsWidth: 1200
      },
      A = function(a) {
        if (r) return !0;
        a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
        for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
        if (d) {
          a.stopPropagation && a.stopPropagation(), r = !0;
          var h = b.features.isOldAndroid ? 600 : 30;
          s = setTimeout(function() {
            r = !1
          }, h)
        }
      },
      B = function() {
        return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth
      },
      C = function(a, c, d) {
        b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c)
      },
      D = function() {
        var a = 1 === q.getNumItemsFn();
        a !== p && (C(d, "ui--one-slide", a), p = a)
      },
      E = function() {
        C(i, "share-modal--hidden", y)
      },
      F = function() {
        return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function() {
          y && E()
        }, 300)) : (E(), setTimeout(function() {
          y || b.addClass(i, "pswp__share-modal--fade-in")
        }, 30)), y || H(), !1
      },
      G = function(b) {
        b = b || window.event;
        var c = b.target || b.srcElement;
        return a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1))
      },
      H = function() {
        for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
        i.children[0].innerHTML = f, i.children[0].onclick = G
      },
      I = function(a) {
        for (var c = 0; c < q.closeElClasses.length; c++)
          if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0
      },
      J = 0,
      K = function() {
        clearTimeout(u), J = 0, k && v.setIdle(!1)
      },
      L = function(a) {
        a = a ? a : window.event;
        var b = a.relatedTarget || a.toElement;
        b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function() {
          v.setIdle(!0)
        }, q.timeToIdleOutside))
      },
      M = function() {
        q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"))
      },
      N = function() {
        q.preloaderEl && (O(!0), l("beforeChange", function() {
          clearTimeout(o), o = setTimeout(function() {
            a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0)
          }, q.loadingIndicatorDelay)
        }), l("imageLoadComplete", function(b, c) {
          a.currItem === c && O(!0)
        }))
      },
      O = function(a) {
        n !== a && (C(m, "preloader--active", !a), n = a)
      },
      P = function(a) {
        var c = a.vGap;
        if (B()) {
          var g = q.barsSize;
          if (q.captionEl && "auto" === g.bottom)
            if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
              var h = f.clientHeight;
              c.bottom = parseInt(h, 10) || 44
            } else c.bottom = g.top;
          else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
          c.top = g.top
        } else c.top = c.bottom = 0
      },
      Q = function() {
        q.timeToIdle && l("mouseUsed", function() {
          b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function() {
            J++, 2 === J && v.setIdle(!0)
          }, q.timeToIdle / 2)
        })
      },
      R = function() {
        l("onVerticalDrag", function(a) {
          x && a < .95 ? v.hideControls() : !x && a >= .95 && v.showControls()
        });
        var a;
        l("onPinchClose", function(b) {
          x && b < .9 ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls()
        }), l("zoomGestureEnded", function() {
          a = !1, a && !x && v.showControls()
        })
      },
      S = [{
        name: "caption",
        option: "captionEl",
        onInit: function(a) {
          e = a
        }
      }, {
        name: "share-modal",
        option: "shareEl",
        onInit: function(a) {
          i = a
        },
        onTap: function() {
          F()
        }
      }, {
        name: "button--share",
        option: "shareEl",
        onInit: function(a) {
          h = a
        },
        onTap: function() {
          F()
        }
      }, {
        name: "button--zoom",
        option: "zoomEl",
        onTap: a.toggleDesktopZoom
      }, {
        name: "counter",
        option: "counterEl",
        onInit: function(a) {
          g = a
        }
      }, {
        name: "button--close",
        option: "closeEl",
        onTap: a.close
      }, {
        name: "button--arrow--left",
        option: "arrowEl",
        onTap: a.prev
      }, {
        name: "button--arrow--right",
        option: "arrowEl",
        onTap: a.next
      }, {
        name: "button--fs",
        option: "fullscreenEl",
        onTap: function() {
          c.isFullscreen() ? c.exit() : c.enter()
        }
      }, {
        name: "preloader",
        option: "preloaderEl",
        onInit: function(a) {
          m = a
        }
      }],
      T = function() {
        var a, c, e, f = function(d) {
          if (d)
            for (var f = d.length, g = 0; g < f; g++) {
              a = d[g], c = a.className;
              for (var h = 0; h < S.length; h++) e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"))
            }
        };
        f(d.children);
        var g = b.getChildByClass(d, "pswp__top-bar");
        g && f(g.children)
      };
    v.init = function() {
      b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function(b) {
        var c = a.currItem.initialZoomLevel;
        a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
      }), l("preventDragEvent", function(a, b, c) {
        var d = a.target || a.srcElement;
        d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
      }), l("bindEvents", function() {
        b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver)
      }), l("unbindEvents", function() {
        y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null)
      }), l("destroy", function() {
        q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1)
      }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function() {
        q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden")
      }), l("initialZoomOut", function() {
        b.addClass(d, "pswp__ui--hidden")
      }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
    }, v.setIdle = function(a) {
      k = a, C(d, "ui--idle", a)
    }, v.update = function() {
      x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D()
    }, v.updateFullscreen = function(d) {
      d && setTimeout(function() {
        a.setScrollOffset(0, b.getScrollY())
      }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs")
    }, v.updateIndexIndicator = function() {
      q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn())
    }, v.onGlobalTap = function(c) {
      c = c || window.event;
      var d = c.target || c.srcElement;
      if (!r)
        if (c.detail && "mouse" === c.detail.pointerType) {
          if (I(d)) return void a.close();
          b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
        } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close()
    }, v.onMouseOver = function(a) {
      a = a || window.event;
      var b = a.target || a.srcElement;
      C(d, "ui--over-close", I(b))
    }, v.hideControls = function() {
      b.addClass(d, "pswp__ui--hidden"), x = !1
    }, v.showControls = function() {
      x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden")
    }, v.supportsFullscreen = function() {
      var a = document;
      return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen)
    }, v.getFullscreenAPI = function() {
      var b, c = document.documentElement,
        d = "fullscreenchange";
      return c.requestFullscreen ? b = {
        enterK: "requestFullscreen",
        exitK: "exitFullscreen",
        elementK: "fullscreenElement",
        eventK: d
      } : c.mozRequestFullScreen ? b = {
        enterK: "mozRequestFullScreen",
        exitK: "mozCancelFullScreen",
        elementK: "mozFullScreenElement",
        eventK: "moz" + d
      } : c.webkitRequestFullscreen ? b = {
        enterK: "webkitRequestFullscreen",
        exitK: "webkitExitFullscreen",
        elementK: "webkitFullscreenElement",
        eventK: "webkit" + d
      } : c.msRequestFullscreen && (b = {
        enterK: "msRequestFullscreen",
        exitK: "msExitFullscreen",
        elementK: "msFullscreenElement",
        eventK: "MSFullscreenChange"
      }), b && (b.enter = function() {
        return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
      }, b.exit = function() {
        return q.closeOnScroll = j, document[this.exitK]()
      }, b.isFullscreen = function() {
        return document[this.elementK]
      }), b
    }
  };
  return a
});
! function(t, n) {
  "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(t.popmotion = {})
}(this, function(t) {
  "use strict";
  var n = function(t, r) {
    return (n = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(t, n) {
        t.__proto__ = n
      } || function(t, n) {
        for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
      })(t, r)
  };

  function r(t, r) {
    function e() {
      this.constructor = t
    }
    n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
  }
  var e = function() {
    return (e = Object.assign || function(t) {
      for (var n, r = 1, e = arguments.length; r < e; r++)
        for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      return t
    }).apply(this, arguments)
  };

  function o(t, n) {
    var r = {};
    for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && n.indexOf(e) < 0 && (r[e] = t[e]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
      var o = 0;
      for (e = Object.getOwnPropertySymbols(t); o < e.length; o++) n.indexOf(e[o]) < 0 && (r[e[o]] = t[e[o]])
    }
    return r
  }
  var i = function() {
      return (i = Object.assign || function(t) {
        for (var n, r = 1, e = arguments.length; r < e; r++)
          for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        return t
      }).apply(this, arguments)
    },
    u = function(t, n) {
      return function(r) {
        return Math.max(Math.min(r, n), t)
      }
    },
    a = function(t) {
      return t % 1 ? Number(t.toFixed(5)) : t
    },
    s = /(-)?(\d[\d\.]*)/g,
    c = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    f = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i,
    p = {
      test: function(t) {
        return "number" == typeof t
      },
      parse: parseFloat,
      transform: function(t) {
        return t
      }
    },
    d = i({}, p, {
      transform: u(0, 1)
    }),
    l = i({}, p, {
      default: 1
    }),
    v = function(t) {
      return {
        test: function(n) {
          return "string" == typeof n && n.endsWith(t) && 1 === n.split(" ").length
        },
        parse: parseFloat,
        transform: function(n) {
          return "" + n + t
        }
      }
    },
    h = v("deg"),
    m = v("%"),
    y = v("px"),
    g = v("vh"),
    b = v("vw"),
    w = i({}, m, {
      parse: function(t) {
        return m.parse(t) / 100
      },
      transform: function(t) {
        return m.transform(100 * t)
      }
    }),
    O = u(0, 255),
    x = function(t) {
      return void 0 !== t.red
    },
    M = function(t) {
      return void 0 !== t.hue
    },
    S = function(t) {
      return function(n) {
        if ("string" != typeof n) return n;
        for (var r, e = {}, o = (r = n, r.substring(r.indexOf("(") + 1, r.lastIndexOf(")"))).split(/,\s*/), i = 0; i < 4; i++) e[t[i]] = void 0 !== o[i] ? parseFloat(o[i]) : 1;
        return e
      }
    },
    A = i({}, p, {
      transform: function(t) {
        return Math.round(O(t))
      }
    });

  function P(t, n) {
    return t.startsWith(n) && f.test(t)
  }
  var k = {
      test: function(t) {
        return "string" == typeof t ? P(t, "rgb") : x(t)
      },
      parse: S(["red", "green", "blue", "alpha"]),
      transform: function(t) {
        var n = t.red,
          r = t.green,
          e = t.blue,
          o = t.alpha;
        return function(t) {
          var n = t.red,
            r = t.green,
            e = t.blue,
            o = t.alpha;
          return "rgba(" + n + ", " + r + ", " + e + ", " + (void 0 === o ? 1 : o) + ")"
        }({
          red: A.transform(n),
          green: A.transform(r),
          blue: A.transform(e),
          alpha: a(o)
        })
      }
    },
    C = {
      test: function(t) {
        return "string" == typeof t ? P(t, "hsl") : M(t)
      },
      parse: S(["hue", "saturation", "lightness", "alpha"]),
      transform: function(t) {
        var n = t.hue,
          r = t.saturation,
          e = t.lightness,
          o = t.alpha;
        return function(t) {
          var n = t.hue,
            r = t.saturation,
            e = t.lightness,
            o = t.alpha;
          return "hsla(" + n + ", " + r + ", " + e + ", " + (void 0 === o ? 1 : o) + ")"
        }({
          hue: Math.round(n),
          saturation: m.transform(a(r)),
          lightness: m.transform(a(e)),
          alpha: a(o)
        })
      }
    },
    R = i({}, k, {
      test: function(t) {
        return "string" == typeof t && P(t, "#")
      },
      parse: function(t) {
        var n = "",
          r = "",
          e = "";
        return t.length > 4 ? (n = t.substr(1, 2), r = t.substr(3, 2), e = t.substr(5, 2)) : (n = t.substr(1, 1), r = t.substr(2, 1), e = t.substr(3, 1), n += n, r += r, e += e), {
          red: parseInt(n, 16),
          green: parseInt(r, 16),
          blue: parseInt(e, 16),
          alpha: 1
        }
      }
    }),
    V = {
      test: function(t) {
        return "string" == typeof t && f.test(t) || x(t) || M(t)
      },
      parse: function(t) {
        return k.test(t) ? k.parse(t) : C.test(t) ? C.parse(t) : R.test(t) ? R.parse(t) : t
      },
      transform: function(t) {
        return x(t) ? k.transform(t) : M(t) ? C.transform(t) : t
      }
    },
    j = function(t) {
      return "number" == typeof t ? 0 : t
    },
    T = {
      test: function(t) {
        if ("string" != typeof t || !isNaN(t)) return !1;
        var n = 0,
          r = t.match(s),
          e = t.match(c);
        return r && (n += r.length), e && (n += e.length), n > 0
      },
      parse: function(t) {
        var n = t,
          r = [],
          e = n.match(c);
        e && (n = n.replace(c, "${c}"), r.push.apply(r, e.map(V.parse)));
        var o = n.match(s);
        return o && r.push.apply(r, o.map(p.parse)), r
      },
      createTransformer: function(t) {
        var n = t,
          r = 0,
          e = t.match(c),
          o = e ? e.length : 0;
        if (e)
          for (var i = 0; i < o; i++) n = n.replace(e[i], "${c}"), r++;
        var u = n.match(s),
          f = u ? u.length : 0;
        if (u)
          for (i = 0; i < f; i++) n = n.replace(u[i], "${n}"), r++;
        return function(t) {
          for (var e = n, i = 0; i < r; i++) e = e.replace(i < o ? "${c}" : "${n}", i < o ? V.transform(t[i]) : a(t[i]));
          return e
        }
      },
      getAnimatableNone: function(t) {
        var n = T.parse(t);
        return T.createTransformer(t)(n.map(j))
      }
    },
    E = Object.freeze({
      number: p,
      scale: l,
      alpha: d,
      degrees: h,
      percent: m,
      progressPercentage: w,
      px: y,
      vw: b,
      vh: g,
      rgba: k,
      rgbUnit: A,
      hsla: C,
      hex: R,
      color: V,
      complex: T
    }),
    Y = function() {};
  Y = function(t, n) {
    if (!t) throw new Error(n)
  };
  var L, X;
  L = function(t, n) {
    t || "undefined" == typeof console || console.warn("Hey, listen! " + n)
  }, X = function(t, n) {
    if (!t) throw new Error("Hey, listen! ".toUpperCase() + n)
  };
  var F, B = 0,
    D = "undefined" != typeof window && void 0 !== window.requestAnimationFrame ? function(t) {
      return window.requestAnimationFrame(t)
    } : function(t) {
      var n = Date.now(),
        r = Math.max(0, 16.7 - (n - B));
      B = n + r, setTimeout(function() {
        return t(B)
      }, r)
    };
  ! function(t) {
    t.Read = "read", t.Update = "update", t.Render = "render", t.PostRender = "postRender", t.FixedUpdate = "fixedUpdate"
  }(F || (F = {}));
  var z = 1 / 60 * 1e3,
    I = !0,
    W = !1,
    H = !1,
    U = {
      delta: 0,
      timestamp: 0
    },
    q = [F.Read, F.Update, F.Render, F.PostRender],
    N = function(t) {
      return W = t
    },
    _ = q.reduce(function(t, n) {
      var r, e, o, i, u, a, s, c, f, p = (r = N, e = [], o = [], i = 0, u = !1, a = 0, s = new WeakSet, c = new WeakSet, f = {
        cancel: function(t) {
          var n = o.indexOf(t);
          s.add(t), -1 !== n && o.splice(n, 1)
        },
        process: function(t) {
          var n, p;
          if (u = !0, e = (n = [o, e])[0], (o = n[1]).length = 0, i = e.length)
            for (a = 0; a < i; a++)(p = e[a])(t), !0 !== c.has(p) || s.has(p) || (f.schedule(p), r(!0));
          u = !1
        },
        schedule: function(t, n, r) {
          void 0 === n && (n = !1), void 0 === r && (r = !1), X("function" == typeof t, "Argument must be a function");
          var a = r && u,
            f = a ? e : o;
          s.delete(t), n && c.add(t), -1 === f.indexOf(t) && (f.push(t), a && (i = e.length))
        }
      });
      return t.sync[n] = function(t, n, r) {
        return void 0 === n && (n = !1), void 0 === r && (r = !1), W || Q(), p.schedule(t, n, r), t
      }, t.cancelSync[n] = function(t) {
        return p.cancel(t)
      }, t.steps[n] = p, t
    }, {
      steps: {},
      sync: {},
      cancelSync: {}
    }),
    Z = _.steps,
    $ = _.sync,
    G = _.cancelSync,
    K = function(t) {
      return Z[t].process(U)
    },
    J = function(t) {
      W = !1, U.delta = I ? z : Math.max(Math.min(t - U.timestamp, 40), 1), I || (z = U.delta), U.timestamp = t, H = !0, q.forEach(K), H = !1, W && (I = !1, D(J))
    },
    Q = function() {
      W = !0, I = !0, H || D(J)
    },
    tt = function() {
      return U
    },
    nt = function(t) {
      return function(n) {
        return 1 - t(1 - n)
      }
    },
    rt = function(t) {
      return function(n) {
        return n <= .5 ? t(2 * n) / 2 : (2 - t(2 * (1 - n))) / 2
      }
    },
    et = nt,
    ot = rt,
    it = function(t) {
      return function(n) {
        return Math.pow(n, t)
      }
    },
    ut = function(t) {
      return function(n) {
        return n * n * ((t + 1) * n - t)
      }
    },
    at = function(t) {
      var n = ut(t);
      return function(t) {
        return (t *= 2) < 1 ? .5 * n(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
      }
    },
    st = function(t) {
      return t
    },
    ct = it(2),
    ft = nt(ct),
    pt = rt(ct),
    dt = function(t) {
      return 1 - Math.sin(Math.acos(t))
    },
    lt = nt(dt),
    vt = rt(lt),
    ht = ut(1.525),
    mt = nt(ht),
    yt = rt(ht),
    gt = at(1.525),
    bt = function(t) {
      var n = t * t;
      return t < 4 / 11 ? 7.5625 * n : t < 8 / 11 ? 9.075 * n - 9.9 * t + 3.4 : t < .9 ? 4356 / 361 * n - 35442 / 1805 * t + 16061 / 1805 : 10.8 * t * t - 20.52 * t + 10.72
    },
    wt = 8,
    Ot = .001,
    xt = 1e-7,
    Mt = 10,
    St = 11,
    At = 1 / (St - 1),
    Pt = "undefined" != typeof Float32Array,
    kt = function(t, n) {
      return 1 - 3 * n + 3 * t
    },
    Ct = function(t, n) {
      return 3 * n - 6 * t
    },
    Rt = function(t) {
      return 3 * t
    },
    Vt = function(t, n, r) {
      return 3 * kt(n, r) * t * t + 2 * Ct(n, r) * t + Rt(n)
    },
    jt = function(t, n, r) {
      return ((kt(n, r) * t + Ct(n, r)) * t + Rt(n)) * t
    };
  var Tt = Object.freeze({
      reversed: nt,
      mirrored: rt,
      createReversedEasing: et,
      createMirroredEasing: ot,
      createExpoIn: it,
      createBackIn: ut,
      createAnticipateEasing: at,
      linear: st,
      easeIn: ct,
      easeOut: ft,
      easeInOut: pt,
      circIn: dt,
      circOut: lt,
      circInOut: vt,
      backIn: ht,
      backOut: mt,
      backInOut: yt,
      anticipate: gt,
      bounceOut: bt,
      bounceIn: function(t) {
        return 1 - bt(1 - t)
      },
      bounceInOut: function(t) {
        return t < .5 ? .5 * (1 - bt(1 - 2 * t)) : .5 * bt(2 * t - 1) + .5
      },
      cubicBezier: function(t, n, r, e) {
        var o = Pt ? new Float32Array(St) : new Array(St),
          i = function(n) {
            for (var e, i, u, a = 0, s = 1, c = St - 1; s !== c && o[s] <= n; ++s) a += At;
            return e = (n - o[--s]) / (o[s + 1] - o[s]), (u = Vt(i = a + e * At, t, r)) >= Ot ? function(n, e) {
              for (var o = 0, i = 0; o < wt; ++o) {
                if (0 === (i = Vt(e, t, r))) return e;
                e -= (jt(e, t, r) - n) / i
              }
              return e
            }(n, i) : 0 === u ? i : function(n, e, o) {
              var i, u, a = 0;
              do {
                (i = jt(u = e + (o - e) / 2, t, r) - n) > 0 ? o = u : e = u
              } while (Math.abs(i) > xt && ++a < Mt);
              return u
            }(n, a, a + At)
          };
        return function() {
            for (var n = 0; n < St; ++n) o[n] = jt(n * At, t, r)
          }(),
          function(o) {
            return t === n && r === e ? o : 0 === o ? 0 : 1 === o ? 1 : jt(i(o), n, e)
          }
      }
    }),
    Et = {
      x: 0,
      y: 0,
      z: 0
    },
    Yt = function(t) {
      return "number" == typeof t
    },
    Lt = function(t) {
      return 180 * t / Math.PI
    },
    Xt = function(t, n) {
      return void 0 === n && (n = Et), Lt(Math.atan2(n.y - t.y, n.x - t.x))
    },
    Ft = function(t, n) {
      var r = !0;
      return void 0 === n && (n = t, r = !1),
        function(e) {
          return r ? e - t + n : (t = e, r = !0, n)
        }
    },
    Bt = function(t) {
      return function(n, r, e) {
        return void 0 !== e ? t(n, r, e) : function(e) {
          return t(n, r, e)
        }
      }
    },
    Dt = Bt(function(t, n, r) {
      return Math.min(Math.max(r, t), n)
    }),
    zt = function(t) {
      return t * Math.PI / 180
    },
    It = function(t) {
      return t.hasOwnProperty("x") && t.hasOwnProperty("y")
    },
    Wt = function(t) {
      return It(t) && t.hasOwnProperty("z")
    },
    Ht = function(t, n) {
      return Math.abs(t - n)
    },
    Ut = function(t, n) {
      if (void 0 === n && (n = Et), Yt(t) && Yt(n)) return Ht(t, n);
      if (It(t) && It(n)) {
        var r = Ht(t.x, n.x),
          e = Ht(t.y, n.y),
          o = Wt(t) && Wt(n) ? Ht(t.z, n.z) : 0;
        return Math.sqrt(Math.pow(r, 2) + Math.pow(e, 2) + Math.pow(o, 2))
      }
      return 0
    },
    qt = function(t, n, r) {
      var e = n - t;
      return 0 === e ? 1 : (r - t) / e
    },
    Nt = function(t, n, r) {
      return -r * t + r * n + t
    },
    _t = function() {
      return (_t = Object.assign || function(t) {
        for (var n, r = 1, e = arguments.length; r < e; r++)
          for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        return t
      }).apply(this, arguments)
    },
    Zt = function(t, n, r) {
      var e = t * t,
        o = n * n;
      return Math.sqrt(Math.max(0, r * (o - e) + e))
    },
    $t = [R, k, C],
    Gt = function(t) {
      return $t.find(function(n) {
        return n.test(t)
      })
    },
    Kt = function(t) {
      return "'" + t + "' is not an animatable color. Use the equivalent color code instead."
    },
    Jt = function(t, n) {
      var r = Gt(t),
        e = Gt(n);
      Y(!!r, Kt(t)), Y(!!e, Kt(n)), Y(r.transform === e.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
      var o = r.parse(t),
        i = e.parse(n),
        u = _t({}, o),
        a = r === C ? Nt : Zt;
      return function(t) {
        for (var n in u) "alpha" !== n && (u[n] = a(o[n], i[n], t));
        return u.alpha = Nt(o.alpha, i.alpha, t), r.transform(u)
      }
    },
    Qt = function(t, n) {
      return function(r) {
        return n(t(r))
      }
    },
    tn = function() {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      return t.reduce(Qt)
    };

  function nn(t, n) {
    return Yt(t) ? function(r) {
      return Nt(t, n, r)
    } : V.test(t) ? Jt(t, n) : un(t, n)
  }
  var rn = function(t, n) {
      var r = t.slice(),
        e = r.length,
        o = t.map(function(t, r) {
          return nn(t, n[r])
        });
      return function(t) {
        for (var n = 0; n < e; n++) r[n] = o[n](t);
        return r
      }
    },
    en = function(t, n) {
      var r = _t({}, t, n),
        e = {};
      for (var o in r) void 0 !== t[o] && void 0 !== n[o] && (e[o] = nn(t[o], n[o]));
      return function(t) {
        for (var n in e) r[n] = e[n](t);
        return r
      }
    };

  function on(t) {
    for (var n = T.parse(t), r = n.length, e = 0, o = 0, i = 0, u = 0; u < r; u++) e || "number" == typeof n[u] ? e++ : void 0 !== n[u].hue ? i++ : o++;
    return {
      parsed: n,
      numNumbers: e,
      numRGB: o,
      numHSL: i
    }
  }
  var un = function(t, n) {
      var r = T.createTransformer(n),
        e = on(t),
        o = on(n);
      return Y(e.numHSL === o.numHSL && e.numRGB === o.numRGB && e.numNumbers >= o.numNumbers, "Complex values '" + t + "' and '" + n + "' too different to mix. Ensure all colors are of the same type."), tn(rn(e.parsed, o.parsed), r)
    },
    an = function(t, n) {
      return function(r) {
        return Nt(t, n, r)
      }
    };

  function sn(t, n, r) {
    for (var e, o = [], i = r || ("number" == typeof(e = t[0]) ? an : "string" == typeof e ? V.test(e) ? Jt : un : Array.isArray(e) ? rn : "object" == typeof e ? en : void 0), u = t.length - 1, a = 0; a < u; a++) {
      var s = i(t[a], t[a + 1]);
      if (n) {
        var c = Array.isArray(n) ? n[a] : n;
        s = tn(c, s)
      }
      o.push(s)
    }
    return o
  }
  var cn = function(t, n, r, e) {
      return void 0 === e && (e = 0), o = t + r * (n - t) / Math.max(e, r), void 0 === i && (i = 2), i = Math.pow(10, i), Math.round(o * i) / i;
      var o, i
    },
    fn = function(t) {
      return t
    },
    pn = function(t) {
      return void 0 === t && (t = fn), Bt(function(n, r, e) {
        var o = r - e,
          i = -(0 - n + 1) * (0 - t(Math.abs(o)));
        return o <= 0 ? r + i : r - i
      })
    },
    dn = pn(),
    ln = pn(Math.sqrt),
    vn = function(t, n) {
      return Yt(t) ? t / (1e3 / n) : 0
    },
    hn = function(t, n) {
      return n ? t * (1e3 / n) : 0
    },
    mn = Bt(function(t, n, r) {
      var e = n - t;
      return ((r - t) % e + e) % e + t
    }),
    yn = (Dt(0, 1), function() {
      function t(t) {
        void 0 === t && (t = {}), this.props = t
      }
      return t.prototype.applyMiddleware = function(t) {
        return this.create(e({}, this.props, {
          middleware: this.props.middleware ? [t].concat(this.props.middleware) : [t]
        }))
      }, t.prototype.pipe = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var r = 1 === t.length ? t[0] : tn.apply(void 0, t);
        return this.applyMiddleware(function(t) {
          return function(n) {
            return t(r(n))
          }
        })
      }, t.prototype.while = function(t) {
        return this.applyMiddleware(function(n, r) {
          return function(e) {
            return t(e) ? n(e) : r()
          }
        })
      }, t.prototype.filter = function(t) {
        return this.applyMiddleware(function(n) {
          return function(r) {
            return t(r) && n(r)
          }
        })
      }, t
    }()),
    gn = function() {
      return function(t, n) {
        var r = t.middleware,
          e = t.onComplete,
          o = this;
        this.isActive = !0, this.update = function(t) {
          o.observer.update && o.updateObserver(t)
        }, this.complete = function() {
          o.observer.complete && o.isActive && o.observer.complete(), o.onComplete && o.onComplete(), o.isActive = !1
        }, this.error = function(t) {
          o.observer.error && o.isActive && o.observer.error(t), o.isActive = !1
        }, this.observer = n, this.updateObserver = function(t) {
          return n.update(t)
        }, this.onComplete = e, n.update && r && r.length && r.forEach(function(t) {
          return o.updateObserver = t(o.updateObserver, o.complete)
        })
      }
    }(),
    bn = function(t, n, r) {
      var e = n.middleware;
      return new gn({
        middleware: e,
        onComplete: r
      }, "function" == typeof t ? {
        update: t
      } : t)
    },
    wn = function(t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this
      }
      return r(n, t), n.prototype.create = function(t) {
        return new n(t)
      }, n.prototype.start = function(t) {
        void 0 === t && (t = {});
        var n = !1,
          r = {
            stop: function() {}
          },
          i = this.props,
          u = i.init,
          a = o(i, ["init"]),
          s = u(bn(t, a, function() {
            n = !0, r.stop()
          }));
        return r = s ? e({}, r, s) : r, t.registerParent && t.registerParent(r), n && r.stop(), r
      }, n
    }(yn),
    On = function(t) {
      return new wn({
        init: t
      })
    },
    xn = function(t) {
      function n() {
        var n = null !== t && t.apply(this, arguments) || this;
        return n.subscribers = [], n
      }
      return r(n, t), n.prototype.complete = function() {
        this.subscribers.forEach(function(t) {
          return t.complete()
        })
      }, n.prototype.error = function(t) {
        this.subscribers.forEach(function(n) {
          return n.error(t)
        })
      }, n.prototype.update = function(t) {
        for (var n = 0; n < this.subscribers.length; n++) this.subscribers[n].update(t)
      }, n.prototype.subscribe = function(t) {
        var n = this,
          r = bn(t, this.props);
        return this.subscribers.push(r), {
          unsubscribe: function() {
            var t = n.subscribers.indexOf(r); - 1 !== t && n.subscribers.splice(t, 1)
          }
        }
      }, n.prototype.stop = function() {
        this.parent && this.parent.stop()
      }, n.prototype.registerParent = function(t) {
        this.stop(), this.parent = t
      }, n
    }(yn),
    Mn = function(t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this
      }
      return r(n, t), n.prototype.create = function(t) {
        return new n(t)
      }, n
    }(xn),
    Sn = function(t, n) {
      var r = 1 / (t - 1),
        e = 1 / (2 * (t - 1)),
        o = Math.min(n, 1) / e;
      return Math.floor((o + 1) / 2) * r
    },
    An = Object.freeze({
      angle: Xt,
      degreesToRadians: zt,
      distance: Ut,
      isPoint3D: Wt,
      isPoint: It,
      dilate: Nt,
      getValueFromProgress: Nt,
      pointFromAngleAndDistance: function(t, n, r) {
        return n = zt(n), {
          x: r * Math.cos(n) + t.x,
          y: r * Math.sin(n) + t.y
        }
      },
      getProgressFromValue: qt,
      radiansToDegrees: Lt,
      smooth: cn,
      speedPerFrame: vn,
      speedPerSecond: hn,
      stepProgress: Sn
    }),
    Pn = function(t) {
      return Array.isArray(t)
    },
    kn = function(t) {
      var n = typeof t;
      return "string" === n || "number" === n
    },
    Cn = function(t) {
      function n(n) {
        var r = t.call(this, n) || this;
        return r.scheduleVelocityCheck = function() {
          return $.postRender(r.velocityCheck)
        }, r.velocityCheck = function(t) {
          t.timestamp !== r.lastUpdated && (r.prev = r.current)
        }, r.prev = r.current = n.value || 0, kn(r.current) ? (r.updateCurrent = function(t) {
          return r.current = t
        }, r.getVelocityOfCurrent = function() {
          return r.getSingleVelocity(r.current, r.prev)
        }) : Pn(r.current) ? (r.updateCurrent = function(t) {
          return r.current = t.slice()
        }, r.getVelocityOfCurrent = function() {
          return r.getListVelocity()
        }) : (r.updateCurrent = function(t) {
          for (var n in r.current = {}, t) t.hasOwnProperty(n) && (r.current[n] = t[n])
        }, r.getVelocityOfCurrent = function() {
          return r.getMapVelocity()
        }), n.initialSubscription && r.subscribe(n.initialSubscription), r
      }
      return r(n, t), n.prototype.create = function(t) {
        return new n(t)
      }, n.prototype.get = function() {
        return this.current
      }, n.prototype.getVelocity = function() {
        return this.getVelocityOfCurrent()
      }, n.prototype.update = function(n) {
        t.prototype.update.call(this, n), this.prev = this.current, this.updateCurrent(n);
        var r = tt(),
          e = r.delta,
          o = r.timestamp;
        this.timeDelta = e, this.lastUpdated = o, $.postRender(this.scheduleVelocityCheck)
      }, n.prototype.subscribe = function(n) {
        var r = t.prototype.subscribe.call(this, n);
        return this.subscribers[this.subscribers.length - 1].update(this.current), r
      }, n.prototype.getSingleVelocity = function(t, n) {
        return "number" == typeof t && "number" == typeof n ? hn(t - n, this.timeDelta) : hn(parseFloat(t) - parseFloat(n), this.timeDelta) || 0
      }, n.prototype.getListVelocity = function() {
        var t = this;
        return this.current.map(function(n, r) {
          return t.getSingleVelocity(n, t.prev[r])
        })
      }, n.prototype.getMapVelocity = function() {
        var t = {};
        for (var n in this.current) this.current.hasOwnProperty(n) && (t[n] = this.getSingleVelocity(this.current[n], this.prev[n]));
        return t
      }, n
    }(xn),
    Rn = function(t, n) {
      return new Cn({
        value: t,
        initialSubscription: n
      })
    },
    Vn = function(t) {
      var n = t.getCount,
        r = t.getFirst,
        e = t.getOutput,
        o = t.mapApi,
        i = t.setProp,
        u = t.startActions;
      return function(t) {
        return On(function(a) {
          var s = a.update,
            c = a.complete,
            f = a.error,
            p = n(t),
            d = e(),
            l = function() {
              return s(d)
            },
            v = 0,
            h = u(t, function(t, n) {
              var r = !1;
              return t.start({
                complete: function() {
                  r || (r = !0, ++v === p && $.update(c))
                },
                error: f,
                update: function(t) {
                  i(d, n, t), $.update(l, !1, !0)
                }
              })
            });
          return Object.keys(r(h)).reduce(function(t, n) {
            return t[n] = o(h, n), t
          }, {})
        })
      }
    },
    jn = Vn({
      getOutput: function() {
        return {}
      },
      getCount: function(t) {
        return Object.keys(t).length
      },
      getFirst: function(t) {
        return t[Object.keys(t)[0]]
      },
      mapApi: function(t, n) {
        return function() {
          for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
          return Object.keys(t).reduce(function(e, o) {
            var i;
            return t[o][n] && (r[0] && void 0 !== r[0][o] ? e[o] = t[o][n](r[0][o]) : e[o] = (i = t[o])[n].apply(i, r)), e
          }, {})
        }
      },
      setProp: function(t, n, r) {
        return t[n] = r
      },
      startActions: function(t, n) {
        return Object.keys(t).reduce(function(r, e) {
          return r[e] = n(t[e], e), r
        }, {})
      }
    }),
    Tn = Vn({
      getOutput: function() {
        return []
      },
      getCount: function(t) {
        return t.length
      },
      getFirst: function(t) {
        return t[0]
      },
      mapApi: function(t, n) {
        return function() {
          for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
          return t.map(function(t, e) {
            if (t[n]) return Array.isArray(r[0]) ? t[n](r[0][e]) : t[n].apply(t, r)
          })
        }
      },
      setProp: function(t, n, r) {
        return t[n] = r
      },
      startActions: function(t, n) {
        return t.map(function(t, r) {
          return n(t, r)
        })
      }
    }),
    En = function() {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      return Tn(t)
    },
    Yn = [y, m, h, g, b],
    Ln = function(t) {
      return Yn.find(function(n) {
        return n.test(t)
      })
    },
    Xn = function(t, n) {
      return t(n)
    },
    Fn = function(t, n, r) {
      var o = r[0],
        i = n[o].map(function(o, i) {
          var u = r.reduce(function(t) {
            return function(n, r) {
              return n[r] = n[r][t], n
            }
          }(i), e({}, n));
          return Un(o)(t, u)
        });
      return En.apply(void 0, i)
    },
    Bn = function(t, n, r) {
      var o = r[0],
        i = Object.keys(n[o]).reduce(function(i, u) {
          var a = r.reduce(function(t) {
            return function(n, r) {
              return n[r] = n[r][t], n
            }
          }(u), e({}, n));
          return i[u] = Un(n[o][u])(t, a), i
        }, {});
      return jn(i)
    },
    Dn = function(t, n) {
      var r = n.from,
        i = n.to,
        u = o(n, ["from", "to"]),
        a = Ln(r) || Ln(i),
        s = a.transform,
        c = a.parse;
      return t(e({}, u, {
        from: "string" == typeof r ? c(r) : r,
        to: "string" == typeof i ? c(i) : i
      })).pipe(s)
    },
    zn = function(t) {
      return function(n, r) {
        var i = r.from,
          u = r.to,
          a = o(r, ["from", "to"]);
        return n(e({}, a, {
          from: 0,
          to: 1
        })).pipe(t(i, u))
      }
    },
    In = zn(Jt),
    Wn = zn(un),
    Hn = function(t, n) {
      var r = function(t) {
          var n = Object.keys(t),
            r = function(n, r) {
              return void 0 !== n && !t[r](n)
            };
          return {
            getVectorKeys: function(t) {
              return n.reduce(function(n, e) {
                return r(t[e], e) && n.push(e), n
              }, [])
            },
            testVectorProps: function(t) {
              return t && n.some(function(n) {
                return r(t[n], n)
              })
            }
          }
        }(n),
        e = r.testVectorProps,
        o = r.getVectorKeys;
      return function(n) {
        if (!e(n)) return t(n);
        var r = o(n),
          i = n[r[0]];
        return Un(i)(t, n, r)
      }
    },
    Un = function(t) {
      return "number" == typeof t ? Xn : Array.isArray(t) ? Fn : function(t) {
        return Boolean(Ln(t))
      }(t) ? Dn : V.test(t) ? In : T.test(t) ? Wn : "object" == typeof t ? Bn : Xn
    },
    qn = Hn(function(t) {
      return void 0 === t && (t = {}), On(function(n) {
        var r = n.complete,
          e = n.update,
          o = t.velocity,
          i = void 0 === o ? 0 : o,
          u = t.from,
          a = void 0 === u ? 0 : u,
          s = t.power,
          c = void 0 === s ? .8 : s,
          f = t.timeConstant,
          p = void 0 === f ? 350 : f,
          d = t.restDelta,
          l = void 0 === d ? .5 : d,
          v = t.modifyTarget,
          h = 0,
          m = c * i,
          y = Math.round(a + m),
          g = void 0 === v ? y : v(y),
          b = $.update(function(t) {
            var n = t.delta;
            h += n;
            var o = -m * Math.exp(-h / p),
              i = o > l || o < -l;
            e(i ? g + o : g), i || (G.update(b), r())
          }, !0);
        return {
          stop: function() {
            return G.update(b)
          }
        }
      })
    }, {
      from: p.test,
      modifyTarget: function(t) {
        return "function" == typeof t
      },
      velocity: p.test
    }),
    Nn = Hn(function(t) {
      return void 0 === t && (t = {}), On(function(n) {
        var r = n.update,
          e = n.complete,
          o = t.velocity,
          i = void 0 === o ? 0 : o,
          u = t.from,
          a = void 0 === u ? 0 : u,
          s = t.to,
          c = void 0 === s ? 0 : s,
          f = t.stiffness,
          p = void 0 === f ? 100 : f,
          d = t.damping,
          l = void 0 === d ? 10 : d,
          v = t.mass,
          h = void 0 === v ? 1 : v,
          m = t.restSpeed,
          y = void 0 === m ? .01 : m,
          g = t.restDelta,
          b = void 0 === g ? .01 : g,
          w = i ? -i / 1e3 : 0,
          O = 0,
          x = c - a,
          M = a,
          S = M,
          A = $.update(function(t) {
            var n = t.delta;
            O += n;
            var o = l / (2 * Math.sqrt(p * h)),
              u = Math.sqrt(p / h) / 1e3;
            if (S = M, o < 1) {
              var a = Math.exp(-o * u * O),
                s = u * Math.sqrt(1 - o * o);
              M = c - a * ((w + o * u * x) / s * Math.sin(s * O) + x * Math.cos(s * O))
            } else a = Math.exp(-u * O), M = c - a * (x + (w + u * x) * O);
            i = hn(M - S, n);
            var f = Math.abs(i) <= y,
              d = Math.abs(c - M) <= b;
            f && d ? (r(M = c), G.update(A), e()) : r(M)
          }, !0);
        return {
          stop: function() {
            return G.update(A)
          }
        }
      })
    }, {
      from: p.test,
      to: p.test,
      stiffness: p.test,
      damping: p.test,
      mass: p.test,
      velocity: p.test
    }),
    _n = Hn(function(t) {
      var n = t.from,
        r = void 0 === n ? 0 : n,
        o = t.velocity,
        i = void 0 === o ? 0 : o,
        u = t.min,
        a = t.max,
        s = t.power,
        c = void 0 === s ? .8 : s,
        f = t.timeConstant,
        p = void 0 === f ? 700 : f,
        d = t.bounceStiffness,
        l = void 0 === d ? 500 : d,
        v = t.bounceDamping,
        h = void 0 === v ? 10 : v,
        m = t.restDelta,
        y = void 0 === m ? 1 : m,
        g = t.modifyTarget;
      return On(function(t) {
        var n, o = t.update,
          s = t.complete,
          f = Rn(r),
          d = !1,
          v = function(t) {
            return void 0 !== u && t <= u
          },
          m = function(t) {
            return void 0 !== a && t >= a
          },
          b = function(t) {
            return v(t) || m(t)
          },
          w = function(t, r) {
            n && n.stop(), n = t.start({
              update: function(t) {
                return f.update(t)
              },
              complete: function() {
                r ? r() : s()
              }
            })
          },
          O = function(t) {
            d = !0, w(Nn(e({}, t, {
              to: v(t.from) ? u : a,
              stiffness: l,
              damping: h,
              restDelta: y
            })))
          };
        if (f.subscribe(function(t) {
            o(t);
            var r = f.getVelocity();
            n && !d && function(t, n) {
              return v(t) && n < 0 || m(t) && n > 0
            }(t, r) && O({
              from: t,
              velocity: r
            })
          }), b(r)) O({
          from: r,
          velocity: i
        });
        else if (0 !== i) {
          var x = qn({
            from: r,
            velocity: i,
            timeConstant: p,
            power: c,
            restDelta: b(r) ? 20 : y,
            modifyTarget: g
          });
          w(x, function() {
            var t = f.get();
            b(t) ? O({
              from: t,
              velocity: f.getVelocity()
            }) : s()
          })
        } else s();
        return {
          stop: function() {
            return n && n.stop()
          }
        }
      })
    }, {
      from: p.test,
      velocity: p.test,
      min: p.test,
      max: p.test,
      damping: p.test,
      stiffness: p.test,
      modifyTarget: function(t) {
        return "function" == typeof t
      }
    }),
    Zn = Hn(function(t) {
      var n = t.from,
        r = void 0 === n ? 0 : n,
        e = t.to,
        o = void 0 === e ? 1 : e,
        i = t.ease,
        u = void 0 === i ? st : i,
        a = t.reverseEase;
      return void 0 !== a && a && (u = et(u)), On(function(t) {
        var n = t.update;
        return {
          seek: function(t) {
            return n(t)
          }
        }
      }).pipe(u, function(t) {
        return Nt(r, o, t)
      })
    }, {
      ease: function(t) {
        return "function" == typeof t
      },
      from: p.test,
      to: p.test
    }),
    $n = Dt(0, 1),
    Gn = function(t) {
      return void 0 === t && (t = {}), On(function(n) {
        var r, e = n.update,
          o = n.complete,
          i = t.duration,
          u = void 0 === i ? 300 : i,
          a = t.ease,
          s = void 0 === a ? ft : a,
          c = t.flip,
          f = void 0 === c ? 0 : c,
          p = t.loop,
          d = void 0 === p ? 0 : p,
          l = t.yoyo,
          v = void 0 === l ? 0 : l,
          h = t.repeatDelay,
          m = void 0 === h ? 0 : h,
          y = t.from,
          g = void 0 === y ? 0 : y,
          b = t.to,
          w = void 0 === b ? 1 : b,
          O = t.elapsed,
          x = void 0 === O ? 0 : O,
          M = t.flipCount,
          S = void 0 === M ? 0 : M,
          A = t.yoyoCount,
          P = void 0 === A ? 0 : A,
          k = t.loopCount,
          C = void 0 === k ? 0 : k,
          R = Zn({
            from: g,
            to: w,
            ease: s
          }).start(e),
          V = 0,
          j = !1,
          T = function(t) {
            var n;
            void 0 === t && (t = !1), R = Zn({
              from: g = (n = [w, g])[0],
              to: w = n[1],
              ease: s,
              reverseEase: t
            }).start(e)
          },
          E = function() {
            V = $n(qt(0, u, x)), R.seek(V)
          },
          Y = function() {
            j = !0, r = $.update(function(t) {
              var n, e = t.delta;
              x += e, E(), !(n = j && x > u + m) || (!n || d || f || v) && (x = u - (x - m), d && C < d ? (C++, 1) : f && S < f ? (S++, T(), 1) : v && P < v && (T(++P % 2 != 0), 1)) || (G.update(r), o && $.update(o, !1, !0))
            }, !0)
          },
          L = function() {
            j = !1, r && G.update(r)
          };
        return Y(), {
          isActive: function() {
            return j
          },
          getElapsed: function() {
            return Dt(0, u, x)
          },
          getProgress: function() {
            return V
          },
          stop: function() {
            L()
          },
          pause: function() {
            return L(), this
          },
          resume: function() {
            return j || Y(), this
          },
          seek: function(t) {
            return x = Nt(0, u, t), $.update(E, !1, !0), this
          },
          reverse: function() {
            return T(), this
          }
        }
      })
    },
    Kn = Dt(0, 1),
    Jn = function(t) {
      var n = t.easings,
        r = t.ease,
        i = void 0 === r ? st : r,
        u = t.times,
        a = t.values,
        s = o(t, ["easings", "ease", "times", "values"]);
      n = Array.isArray(n) ? n : function(t, n) {
        return t.map(function() {
          return n || ft
        }).splice(0, t.length - 1)
      }(a, n), u = u || function(t) {
        var n = t.length;
        return t.map(function(t, r) {
          return 0 !== r ? r / (n - 1) : 0
        })
      }(a);
      var c = n.map(function(t, n) {
        return Zn({
          from: a[n],
          to: a[n + 1],
          ease: t
        })
      });
      return Gn(e({}, s, {
        ease: i
      })).applyMiddleware(function(t) {
        return function(t, n, r) {
          var e = t.length,
            o = e - 1,
            i = o - 1,
            u = n.map(function(t) {
              return t.start(r)
            });
          return function(n) {
            n <= t[0] && u[0].seek(0), n >= t[o] && u[i].seek(1);
            for (var r = 1; r < e && !(t[r] > n || r === o); r++);
            var a = qt(t[r - 1], t[r], n);
            u[r - 1].seek(Kn(a))
          }
        }(u, c, t)
      })
    },
    Qn = Hn(function(t) {
      return void 0 === t && (t = {}), On(function(n) {
        var r = n.complete,
          e = n.update,
          o = t.acceleration,
          i = void 0 === o ? 0 : o,
          u = t.friction,
          a = void 0 === u ? 0 : u,
          s = t.velocity,
          c = void 0 === s ? 0 : s,
          f = t.springStrength,
          p = t.to,
          d = t.restSpeed,
          l = void 0 === d ? .001 : d,
          v = t.from,
          h = void 0 === v ? 0 : v,
          m = $.update(function(t) {
            var n = t.delta,
              o = Math.max(n, 16);
            i && (c += vn(i, o)), a && (c *= Math.pow(1 - a, o / 100)), void 0 !== f && void 0 !== p && (c += (p - h) * vn(f, o)), h += vn(c, o), e(h), !1 !== l && (!c || Math.abs(c) <= l) && (G.update(m), r())
          }, !0);
        return {
          set: function(t) {
            return h = t, this
          },
          setAcceleration: function(t) {
            return i = t, this
          },
          setFriction: function(t) {
            return a = t, this
          },
          setSpringStrength: function(t) {
            return f = t, this
          },
          setSpringTarget: function(t) {
            return p = t, this
          },
          setVelocity: function(t) {
            return c = t, this
          },
          stop: function() {
            return G.update(m)
          }
        }
      })
    }, {
      acceleration: p.test,
      friction: p.test,
      velocity: p.test,
      from: p.test,
      to: p.test,
      springStrength: p.test
    }),
    tr = function(t, n) {
      return Array.isArray(n) ? t.push.apply(t, function(t) {
        var n = [],
          r = t[t.length - 1],
          e = "number" == typeof r,
          o = e ? r : 0,
          i = e ? t.slice(0, -1) : t,
          u = i.length,
          a = 0;
        return i.forEach(function(t, r) {
          if (n.push(t), r !== u - 1) {
            var e = t.duration || 300;
            a += o, n.push("-" + (e - a))
          }
        }), n
      }(n)) : t.push(n), t
    },
    nr = function(t, n, r) {
      var e = t.duration,
        o = t.easings,
        i = t.times,
        u = t.values,
        a = u.length,
        s = i[a - 1],
        c = 0 === n.at ? 0 : n.at / e,
        f = (n.at + n.duration) / e;
      if (0 === r) u.push(n.from), i.push(c);
      else if (s !== c) {
        void 0 !== n.from && (u.push(u[a - 1]), i.push(c), o.push(st));
        var p = void 0 !== n.from ? n.from : u[a - 1];
        u.push(p), i.push(c), o.push(st)
      } else void 0 !== n.from && (u.push(n.from), i.push(c), o.push(st));
      return u.push(n.to), i.push(f), o.push(n.ease || pt), t
    },
    rr = function(t, n, r) {
      return On(function(e) {
        var o = e.update,
          i = n.split(" ").map(function(n) {
            return t.addEventListener(n, o, r), n
          });
        return {
          stop: function() {
            return i.forEach(function(n) {
              return t.removeEventListener(n, o, r)
            })
          }
        }
      })
    },
    er = function(t, n) {
      return void 0 === n && (n = {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0
      }), n.clientX = n.x = t.clientX, n.clientY = n.y = t.clientY, n.pageX = t.pageX, n.pageY = t.pageY, n
    },
    or = [{
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      x: 0,
      y: 0
    }],
    ir = !1;
  if ("undefined" != typeof document) {
    rr(document, "touchstart touchmove", {
      passive: !0,
      capture: !0
    }).start(function(t) {
      var n = t.touches;
      ir = !0;
      var r = n.length;
      or.length = 0;
      for (var e = 0; e < r; e++) {
        var o = n[e];
        or.push(er(o))
      }
    })
  }
  var ur = function(t) {
      var n = void 0 === t ? {} : t,
        r = n.preventDefault,
        e = void 0 === r || r,
        o = n.scale,
        i = void 0 === o ? 1 : o,
        u = n.rotate,
        a = void 0 === u ? 0 : u;
      return On(function(t) {
        var n = t.update,
          r = {
            touches: or,
            scale: i,
            rotate: a
          },
          o = 0,
          u = 0,
          s = or.length > 1;
        if (s) {
          var c = or[0],
            f = or[1];
          o = Ut(c, f), u = Xt(c, f)
        }
        var p = function() {
            if (s) {
              var t = or[0],
                e = or[1],
                c = Ut(t, e),
                f = Xt(t, e);
              r.scale = i * (c / o), r.rotate = a + (f - u)
            }
            n(r)
          },
          d = rr(document, "touchmove", {
            passive: !e
          }).start(function(t) {
            (e || t.touches.length > 1) && t.preventDefault(), $.update(p)
          });
        return ir && $.update(p), {
          stop: function() {
            G.update(p), d.stop()
          }
        }
      })
    },
    ar = {
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      x: 0,
      y: 0
    },
    sr = !1;
  if ("undefined" != typeof document) {
    rr(document, "mousedown mousemove", !0).start(function(t) {
      sr = !0, er(t, ar)
    })
  }
  var cr, fr = function(t) {
      var n = (void 0 === t ? {} : t).preventDefault,
        r = void 0 === n || n;
      return On(function(t) {
        var n = t.update,
          e = function() {
            return n(ar)
          },
          o = rr(document, "mousemove").start(function(t) {
            r && t.preventDefault(), $.update(e)
          });
        return sr && $.update(e), {
          stop: function() {
            G.update(e), o.stop()
          }
        }
      })
    },
    pr = function(t) {
      return t[0]
    },
    dr = function(t) {
      return void 0 === t && (t = {}), ir ? ur(t).pipe(function(t) {
        return t.touches
      }, pr) : fr(t)
    },
    lr = function() {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      return On(function(n) {
        var r, e = n.update,
          o = n.complete,
          i = 0,
          u = function() {
            r = t[i].start({
              complete: function() {
                ++i >= t.length ? o() : u()
              },
              update: e
            })
          };
        return u(), {
          stop: function() {
            return r && r.stop()
          }
        }
      })
    },
    vr = function(t) {
      return On(function(n) {
        var r = n.complete,
          e = setTimeout(r, t);
        return {
          stop: function() {
            return clearTimeout(e)
          }
        }
      })
    },
    hr = Object.freeze({
      applyOffset: Ft,
      clamp: Dt,
      conditional: function(t, n) {
        return function(r) {
          return t(r) ? n(r) : r
        }
      },
      interpolate: function(t, n, r) {
        var e = void 0 === r ? {} : r,
          o = e.clamp,
          i = void 0 === o || o,
          u = e.ease,
          a = e.mixer,
          s = t.length;
        Y(s === n.length, "Both input and output ranges must be the same length"), Y(!u || !Array.isArray(u) || u.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[s - 1] && (t = [].concat(t), n = [].concat(n), t.reverse(), n.reverse());
        var c = sn(n, u, a),
          f = 2 === s ? function(t, n) {
            var r = t[0],
              e = t[1],
              o = n[0];
            return function(t) {
              return o(qt(r, e, t))
            }
          }(t, c) : function(t, n) {
            var r = t.length,
              e = r - 1;
            return function(o) {
              var i = 0,
                u = !1;
              if (o <= t[0] ? u = !0 : o >= t[e] && (i = e - 1, u = !0), !u) {
                for (var a = 1; a < r && !(t[a] > o || a === e); a++);
                i = a - 1
              }
              var s = qt(t[i], t[i + 1], o);
              return n[i](s)
            }
          }(t, c);
        return i ? tn(Dt(t[0], t[s - 1]), f) : f
      },
      blendArray: rn,
      blendColor: Jt,
      pipe: tn,
      smooth: function(t) {
        void 0 === t && (t = 50);
        var n = 0,
          r = 0;
        return function(e) {
          var o = tt().timestamp,
            i = o !== r ? o - r : 0,
            u = i ? cn(n, e, i, t) : n;
          return r = o, n = u, u
        }
      },
      snap: function(t) {
        if ("number" == typeof t) return function(n) {
          return Math.round(n / t) * t
        };
        var n = 0,
          r = t.length;
        return function(e) {
          var o = Math.abs(t[0] - e);
          for (n = 1; n < r; n++) {
            var i = t[n],
              u = Math.abs(i - e);
            if (0 === u) return i;
            if (u > o) return t[n - 1];
            if (n === r - 1) return i;
            o = u
          }
        }
      },
      generateStaticSpring: pn,
      nonlinearSpring: ln,
      linearSpring: dn,
      wrap: mn,
      appendUnit: function(t) {
        return function(n) {
          return "" + n + t
        }
      },
      steps: function(t, n, r) {
        return void 0 === n && (n = 0), void 0 === r && (r = 1),
          function(e) {
            var o = qt(n, r, e);
            return Nt(n, r, Sn(t, o))
          }
      },
      transformMap: function(t) {
        return function(n) {
          var r = e({}, n);
          for (var o in t)
            if (t.hasOwnProperty(o)) {
              var i = t[o];
              r[o] = i(n[o])
            } return r
        }
      }
    });
  cr = function(t, n) {
    if (!t) throw new Error(n)
  };
  var mr = function() {
    return (mr = Object.assign || function(t) {
      for (var n, r = 1, e = arguments.length; r < e; r++)
        for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      return t
    }).apply(this, arguments)
  };

  function yr(t, n) {
    var r = {};
    for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && n.indexOf(e) < 0 && (r[e] = t[e]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
      var o = 0;
      for (e = Object.getOwnPropertySymbols(t); o < e.length; o++) n.indexOf(e[o]) < 0 && (r[e[o]] = t[e[o]])
    }
    return r
  }
  var gr, br = function(t) {
      var n = t.onRead,
        r = t.onRender,
        e = t.uncachedValues,
        o = void 0 === e ? new Set : e,
        i = t.useCache,
        u = void 0 === i || i;
      return function(t) {
        void 0 === t && (t = {});
        var e = yr(t, []),
          i = {},
          a = [],
          s = !1;

        function c(t, n) {
          t.startsWith("--") && (e.hasCSSVariable = !0);
          var r = i[t];
          i[t] = n, i[t] !== r && (-1 === a.indexOf(t) && a.push(t), s || (s = !0, $.render(f.render)))
        }
        var f = {
          get: function(t, r) {
            return void 0 === r && (r = !1), !r && u && !o.has(t) && void 0 !== i[t] ? i[t] : n(t, e)
          },
          set: function(t, n) {
            if ("string" == typeof t) c(t, n);
            else
              for (var r in t) c(r, t[r]);
            return this
          },
          render: function(t) {
            return void 0 === t && (t = !1), (s || !0 === t) && (r(i, e, a), s = !1, a.length = 0), this
          }
        };
        return f
      }
    },
    wr = /([a-z])([A-Z])/g,
    Or = function(t) {
      return t.replace(wr, "$1-$2").toLowerCase()
    },
    xr = new Map,
    Mr = new Map,
    Sr = ["Webkit", "Moz", "O", "ms", ""],
    Ar = Sr.length,
    Pr = "undefined" != typeof document,
    kr = function(t, n) {
      return Mr.set(t, Or(n))
    },
    Cr = function(t, n) {
      void 0 === n && (n = !1);
      var r = n ? Mr : xr;
      return r.has(t) || (Pr ? function(t) {
        gr = gr || document.createElement("div");
        for (var n = 0; n < Ar; n++) {
          var r = Sr[n],
            e = "" === r,
            o = e ? t : r + t.charAt(0).toUpperCase() + t.slice(1);
          (o in gr.style || e) && (xr.set(t, o), kr(t, (e ? "" : "-") + Or(o)))
        }
      }(t) : function(t) {
        kr(t, t)
      }(t)), r.get(t) || t
    },
    Rr = ["", "X", "Y", "Z"],
    Vr = ["scale", "rotate", "skew", "transformPerspective"].reduce(function(t, n) {
      return Rr.reduce(function(t, r) {
        return t.push(n + r), t
      }, t)
    }, ["x", "y", "z"]),
    jr = Vr.reduce(function(t, n) {
      return t[n] = !0, t
    }, {});

  function Tr(t) {
    return !0 === jr[t]
  }

  function Er(t, n) {
    return Vr.indexOf(t) - Vr.indexOf(n)
  }
  var Yr = new Set(["originX", "originY", "originZ"]);

  function Lr(t) {
    return Yr.has(t)
  }
  var Xr = mr({}, p, {
      transform: Math.round
    }),
    Fr = {
      color: V,
      backgroundColor: V,
      outlineColor: V,
      fill: V,
      stroke: V,
      borderColor: V,
      borderTopColor: V,
      borderRightColor: V,
      borderBottomColor: V,
      borderLeftColor: V,
      borderWidth: y,
      borderTopWidth: y,
      borderRightWidth: y,
      borderBottomWidth: y,
      borderLeftWidth: y,
      borderRadius: y,
      radius: y,
      borderTopLeftRadius: y,
      borderTopRightRadius: y,
      borderBottomRightRadius: y,
      borderBottomLeftRadius: y,
      width: y,
      maxWidth: y,
      height: y,
      maxHeight: y,
      size: y,
      top: y,
      right: y,
      bottom: y,
      left: y,
      padding: y,
      paddingTop: y,
      paddingRight: y,
      paddingBottom: y,
      paddingLeft: y,
      margin: y,
      marginTop: y,
      marginRight: y,
      marginBottom: y,
      marginLeft: y,
      rotate: h,
      rotateX: h,
      rotateY: h,
      rotateZ: h,
      scale: l,
      scaleX: l,
      scaleY: l,
      scaleZ: l,
      skew: h,
      skewX: h,
      skewY: h,
      distance: y,
      x: y,
      y: y,
      z: y,
      perspective: y,
      opacity: d,
      originX: w,
      originY: w,
      originZ: y,
      zIndex: Xr
    },
    Br = function(t) {
      return Fr[t]
    },
    Dr = function(t, n) {
      return n && "number" == typeof t ? n.transform(t) : t
    },
    zr = "scrollLeft",
    Ir = "scrollTop",
    Wr = new Set([zr, Ir]),
    Hr = new Set([zr, Ir, "transform"]),
    Ur = {
      x: "translateX",
      y: "translateY",
      z: "translateZ"
    };

  function qr(t) {
    return "function" == typeof t
  }

  function Nr(t, n, r, e, o, i, u) {
    void 0 === n && (n = !0), void 0 === r && (r = {}), void 0 === e && (e = {}), void 0 === o && (o = {}), void 0 === i && (i = []), void 0 === u && (u = !1);
    var a = !0,
      s = !1,
      c = !1;
    for (var f in t) {
      var p = t[f],
        d = Br(f),
        l = Dr(p, d);
      Tr(f) ? (s = !0, e[f] = l, i.push(f), a && (d.default && p !== d.default || !d.default && 0 !== p) && (a = !1)) : Lr(f) ? (o[f] = l, c = !0) : Hr.has(f) && qr(l) || (r[Cr(f, u)] = l)
    }
    return (s || "function" == typeof t.transform) && (r.transform = function(t, n, r, e, o) {
      var i = "",
        u = !1;
      r.sort(Er);
      for (var a = r.length, s = 0; s < a; s++) {
        var c = r[s];
        i += (Ur[c] || c) + "(" + n[c] + ") ", u = "z" === c || u
      }
      return !u && o ? i += "translateZ(0)" : i = i.trim(), qr(t.transform) ? i = t.transform(n, i) : e && (i = "none"), i
    }(t, e, i, a, n)), c && (r.transformOrigin = (o.originX || 0) + " " + (o.originY || 0) + " " + (o.originZ || 0)), r
  }
  var _r = br({
    onRead: function(t, n) {
      var r = n.element,
        e = n.preparseOutput,
        o = Br(t);
      if (Tr(t)) return o && o.default || 0;
      if (Wr.has(t)) return r[t];
      var i = window.getComputedStyle(r, null).getPropertyValue(Cr(t, !0)) || 0;
      return e && o && o.test(i) && o.parse ? o.parse(i) : i
    },
    onRender: function(t, n, r) {
      var e = n.element,
        o = n.buildStyles,
        i = n.hasCSSVariable;
      if (Object.assign(e.style, o(t)), i)
        for (var u = r.length, a = 0; a < u; a++) {
          var s = r[a];
          s.startsWith("--") && e.style.setProperty(s, t[s])
        } - 1 !== r.indexOf(zr) && (e[zr] = t[zr]), -1 !== r.indexOf(Ir) && (e[Ir] = t[Ir])
    },
    uncachedValues: Wr
  });

  function Zr(t, n) {
    void 0 === n && (n = {});
    var r = n.enableHardwareAcceleration,
      e = yr(n, ["enableHardwareAcceleration"]);
    return _r(mr({
      element: t,
      buildStyles: function(t) {
        void 0 === t && (t = !0);
        var n = {},
          r = {},
          e = {},
          o = [];
        return function(i) {
          return o.length = 0, Nr(i, t, n, r, e, o, !0), n
        }
      }(r),
      preparseOutput: !0
    }, e))
  }
  var $r = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues"]),
    Gr = function(t, n) {
      return t * n + "px"
    },
    Kr = mr({}, p, {
      transform: Math.round
    }),
    Jr = {
      fill: V,
      stroke: V,
      scale: l,
      scaleX: l,
      scaleY: l,
      opacity: d,
      fillOpacity: d,
      strokeOpacity: d,
      numOctaves: Kr
    },
    Qr = br({
      onRead: function(t, n) {
        var r = n.element;
        if (Tr(t)) {
          var e = function(t) {
            return Jr[t]
          }(t);
          return e ? e.default : 0
        }
        return r.getAttribute(t)
      },
      onRender: function(t, n) {
        var r = n.dimensions;
        ! function(t, n) {
          for (var r in n) n.hasOwnProperty(r) && t.setAttribute(r, n[r])
        }(n.element, function(t, n, r, e) {
          var o = !1,
            i = !1,
            u = {},
            a = r ? {
              pathLength: "0",
              pathSpacing: "" + e
            } : void 0,
            s = void 0 !== t.scale ? t.scale || 1e-7 : t.scaleX || 1,
            c = void 0 !== t.scaleY ? t.scaleY || 1e-7 : s || 1,
            f = n.width * (t.originX || 50) + n.x,
            p = n.height * (t.originY || 50) + n.y,
            d = 1 * s * -f,
            l = 1 * c * -p,
            v = f / s,
            h = p / c,
            m = {
              translate: "translate(" + t.x + ", " + t.y + ") ",
              scale: "translate(" + d + ", " + l + ") scale(" + s + ", " + c + ") translate(" + v + ", " + h + ") ",
              rotate: "rotate(" + t.rotate + ", " + f + ", " + p + ") ",
              skewX: "skewX(" + t.skewX + ") ",
              skewY: "skewY(" + t.skewY + ") "
            };
          for (var y in t)
            if (t.hasOwnProperty(y)) {
              var g = t[y];
              Tr(y) ? o = !0 : !r || "pathLength" !== y && "pathSpacing" !== y || "number" != typeof g ? r && "pathOffset" === y ? u["stroke-dashoffset"] = Gr(-g, e) : u[$r.has(y) ? y : Or(y)] = g : (i = !0, a[y] = Gr(g, e))
            } if (i && (u["stroke-dasharray"] = a.pathLength + " " + a.pathSpacing), o)
            for (var y in u.transform = "", m)
              if (m.hasOwnProperty(y)) {
                var b = "scale" === y ? "1" : "0";
                u.transform += m[y].replace(/undefined/g, b)
              } return u
        }(t, r, n.isPath, n.pathLength))
      }
    }),
    te = br({
      useCache: !1,
      onRead: function(t) {
        return "scrollTop" === t ? window.pageYOffset : window.pageXOffset
      },
      onRender: function(t) {
        var n = t.scrollTop,
          r = void 0 === n ? 0 : n,
          e = t.scrollLeft,
          o = void 0 === e ? 0 : e;
        return window.scrollTo(o, r)
      }
    }),
    ne = new WeakMap,
    re = function(t, n) {
      var r;
      return t instanceof HTMLElement ? r = Zr(t, n) : t instanceof SVGElement ? r = function(t) {
        var n = {
          element: t,
          dimensions: function(t) {
            try {
              return function(t) {
                return "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
              }(t)
            } catch (t) {
              return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              }
            }
          }(t),
          isPath: !1
        };
        return "path" === t.tagName && (n.isPath = !0, n.pathLength = t.getTotalLength()), Qr(n)
      }(t) : t === window && (r = te(t)), cr(void 0 !== r, "No valid node provided. Node must be HTMLElement, SVGElement or window."), ne.set(t, r), r
    },
    ee = function(t, n) {
      return ne.has(t) ? ne.get(t) : re(t, n)
    };

  function oe(t, n) {
    var r = "string" == typeof t ? document.querySelector(t) : t;
    return ee(r, n)
  }
  t.action = On, t.multicast = function() {
    return new Mn
  }, t.value = Rn, t.decay = qn, t.inertia = _n, t.keyframes = Jn, t.everyFrame = function() {
    return On(function(t) {
      var n = t.update,
        r = 0,
        e = $.update(function(t) {
          var e = t.timestamp;
          r || (r = e), n(e - r)
        }, !0, !0);
      return {
        stop: function() {
          return G.update(e)
        }
      }
    })
  }, t.physics = Qn, t.spring = Nn, t.timeline = function(t, n) {
    var r = void 0 === n ? {} : n,
      o = r.duration,
      i = r.elapsed,
      u = r.ease,
      a = r.loop,
      s = r.flip,
      c = r.yoyo,
      f = 0,
      p = 0,
      d = [];
    t.reduce(tr, []).forEach(function(t) {
      if ("string" == typeof t) f += parseFloat(t);
      else if ("number" == typeof t) f = t;
      else {
        var n = e({}, t, {
          at: f
        });
        n.duration = void 0 === n.duration ? 300 : n.duration, d.push(n), f += n.duration, p = Math.max(p, n.at + n.duration)
      }
    });
    for (var l = {}, v = d.length, h = 0; h < v; h++) {
      var m = d[h],
        y = m.track;
      if (void 0 === y) throw new Error("No track defined");
      l.hasOwnProperty(y) || (l[y] = []), l[y].push(m)
    }
    var g = {};
    for (var b in l)
      if (l.hasOwnProperty(b)) {
        var w = l[b].reduce(nr, {
          duration: p,
          easings: [],
          times: [],
          values: []
        });
        g[b] = Jn(e({}, w, {
          duration: o || p,
          ease: u,
          elapsed: i,
          loop: a,
          yoyo: c,
          flip: s
        }))
      } return jn(g)
  }, t.tween = Gn, t.listen = rr, t.pointer = function(t) {
    void 0 === t && (t = {});
    var n = t.x,
      r = t.y,
      e = o(t, ["x", "y"]);
    if (void 0 !== n || void 0 !== r) {
      var i = Ft(n || 0),
        u = Ft(r || 0),
        a = {
          x: 0,
          y: 0
        };
      return dr(e).pipe(function(t) {
        return a.x = i(t.x), a.y = u(t.y), a
      })
    }
    return dr(e)
  }, t.mouse = fr, t.multitouch = ur, t.chain = lr, t.composite = jn, t.crossfade = function(t, n) {
    return On(function(r) {
      var o = 0,
        i = En(t, n).start(e({}, r, {
          update: function(t) {
            var n = t[0],
              e = t[1];
            r.update(Nt(n, e, o))
          }
        }));
      return {
        setBalance: function(t) {
          return o = t
        },
        stop: function() {
          return i.stop()
        }
      }
    })
  }, t.delay = vr, t.merge = function() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    return On(function(n) {
      var r = t.map(function(t) {
        return t.start(n)
      });
      return {
        stop: function() {
          return r.forEach(function(t) {
            return t.stop()
          })
        }
      }
    })
  }, t.parallel = En, t.schedule = function(t, n) {
    return On(function(r) {
      var e, o = r.update,
        i = r.complete,
        u = t.start({
          update: function() {
            return void 0 !== e && o(e)
          },
          complete: i
        }),
        a = n.start({
          update: function(t) {
            return e = t
          },
          complete: i
        });
      return {
        stop: function() {
          u.stop(), a.stop()
        }
      }
    })
  }, t.stagger = function(t, n) {
    var r = "number" == typeof n,
      e = t.map(function(t, e) {
        var o = r ? n * e : n(e);
        return lr(vr(o), t)
      });
    return En.apply(void 0, e)
  }, t.calc = An, t.easing = Tt, t.transform = hr, t.styler = oe, t.css = function(t, n) {
    return L(!1, "css() is deprecated, use styler instead"), oe(t, n)
  }, t.svg = function(t, n) {
    return L(!1, "svg() is deprecated, use styler instead"), oe(t, n)
  }, t.valueTypes = E, t.Action = wn, t.ValueReaction = Cn, Object.defineProperty(t, "__esModule", {
    value: !0
  })
});
const {
  tween,
  styler,
  easing
} = window.popmotion;
this.Shopify = this.Shopify || {}, this.Shopify.theme = this.Shopify.theme || {}, this.Shopify.theme.addresses = function(e) {
  "use strict";
  var r = "query countries($locale: SupportedLocale!) {  countries(locale: $locale) {    name    code    labels {      address1      address2      city      company      country      firstName      lastName      phone      postalCode      zone    }    formatting {      edit    }    zones {      name      code    }  }}",
    a = "https://country-service.shopifycloud.com/graphql";

  function u(e) {
    var n, t;
    return fetch(a, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        query: r,
        operationName: "countries",
        variables: {
          locale: (n = e, t = n.replace(/-/, "_").toUpperCase(), -1 !== i.indexOf(t) ? t : -1 !== i.indexOf(t.substring(0, 2)) ? t.substring(0, 2) : o)
        }
      })
    }).then(function(e) {
      return e.json()
    }).then(function(e) {
      return e.data.countries
    })
  }
  var o = "EN",
    i = ["DA", "DE", "EN", "ES", "FR", "IT", "JA", "NL", "PT", "PT_BR"];
  var h = /({\w+})/g,
    m = "_",
    d = {
      lastName: '[name="address[last_name]"]',
      firstName: '[name="address[first_name]"]',
      company: '[name="address[company]"]',
      address1: '[name="address[address1]"]',
      address2: '[name="address[address2]"]',
      country: '[name="address[country]"]',
      zone: '[name="address[province]"]',
      postalCode: '[name="address[zip]"]',
      city: '[name="address[city]"]',
      phone: '[name="address[phone]"]'
    };

  function l(e, n, t, r) {
    var a, o, i, s, c, u, d, l, p, f = (a = (a = t) || "CA", r.filter(function(e) {
      return e.code === a
    })[0]);
    o = n, i = f, Object.keys(o).forEach(function(n) {
        o[n].labels.forEach(function(e) {
          e.textContent = i.labels[n]
        })
      }), s = e, c = n, u = f.formatting.edit, d = c.country.wrapper, l = !1, (p = u, p.split(m).map(function(e) {
        var n = e.match(h);
        return n ? n.map(function(e) {
          var n = e.replace(/[{}]/g, "");
          switch (n) {
            case "zip":
              return "postalCode";
            case "province":
              return "zone";
            default:
              return n
          }
        }) : []
      })).forEach(function(n) {
        n.forEach(function(e) {
          c[e].wrapper.dataset.lineCount = n.length, c[e].wrapper && ("country" !== e ? l ? s.append(c[e].wrapper) : s.insertBefore(c[e].wrapper, d) : l = !0)
        })
      }),
      function(e, n) {
        var t = e.zone;
        if (!t) return;
        if (0 === n.zones.length) return t.wrapper.dataset.ariaHidden = "true", t.input.innerHTML = "";
        t.wrapper.dataset.ariaHidden = "false";
        var r = t.input,
          a = r.cloneNode(!0);
        a.innerHTML = "", n.zones.forEach(function(e) {
          var n = document.createElement("option");
          n.value = e.code, n.textContent = e.name, a.appendChild(n)
        }), r.innerHTML = a.innerHTML, r.dataset.default && (r.value = r.dataset.default)
      }(n, f)
  }
  return e.AddressForm = function(a, e, n) {
    e = e || "en";
    var t, r, o, i, s, c = (t = a, r = function() {
      for (var e = Object({}), n = 0; n < arguments.length; n++) {
        var t = arguments[n];
        if (t)
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
      }
      return e
    }(d, (n = n || {
      inputSelectors: {}
    }).inputSelectors), o = {}, Object.keys(d).forEach(function(e) {
      var n = t.querySelector(r[e]);
      o[e] = n ? {
        wrapper: n.parentElement,
        input: n,
        labels: document.querySelectorAll('[for="' + n.id + '"]')
      } : {}
    }), o);
    return i = c, Object.keys(i).forEach(function(e) {
      var n = i[e].input,
        t = i[e].labels;
      if (n) {
        if ("object" != typeof n) throw new TypeError(i[e] + " is missing an input or select.");
        if ("object" != typeof t) throw new TypeError(i[e] + " is missing a label.")
      }
    }), (s = n.shippingCountriesOnly, s ? fetch(location.origin + "/meta.json").then(function(e) {
      return e.json()
    }).then(function(e) {
      return -1 !== e.ships_to_countries.indexOf("*") ? null : e.ships_to_countries
    }).catch(function() {
      return null
    }) : Promise.resolve(null)).then(function(r) {
      return u(e).then(function(e) {
        var n, t;
        ! function(e, n, t) {
          var r, a, o;
          r = t, a = n.country.input, o = a.cloneNode(!0), r.forEach(function(e) {
            var n = document.createElement("option");
            n.value = e.code, n.textContent = e.name, o.appendChild(n)
          }), a.innerHTML = o.innerHTML, a.dataset.default && (a.value = a.dataset.default);
          var i, s, c, u = n.country.input ? n.country.input.value : null;
          i = e, c = t, (s = n).country.input.addEventListener("change", function(e) {
            l(i, s, e.target.value, c)
          }), l(e, n, u, t)
        }(a, c, (n = e, (t = r) ? n.filter(function(e) {
          return -1 !== t.indexOf(e.code)
        }) : n))
      })
    })
  }, e
}({});
