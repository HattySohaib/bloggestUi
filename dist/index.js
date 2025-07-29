/*! For license information please see index.js.LICENSE.txt */
!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e(require("react"), require("react-router-dom"));
  else if ("function" == typeof define && define.amd)
    define(["react", "react-router-dom"], e);
  else {
    var n =
      "object" == typeof exports
        ? e(require("react"), require("react-router-dom"))
        : e(t.react, t["react-router-dom"]);
    for (var r in n) ("object" == typeof exports ? exports : t)[r] = n[r];
  }
})(self, (t, e) =>
  (() => {
    "use strict";
    var n = {
        626: (t, e, n) => {
          n.d(e, { A: () => c });
          var r = n(601),
            o = n.n(r),
            i = n(314),
            a = n.n(i)()(o());
          a.push([
            t.id,
            ".blog-light {\n    --bg: #F8F8F8;\n    --bg2: #ffffff;\n    --txt: #000000;\n    --bor: #dbdbdb;\n}\n\n.blog-dark {\n    --bg: #0a0a0a;\n    --bg2: #121212;\n    --txt: #F8F8F8;\n    --bor: #1A1A1A;\n}\n\n.recommended-blog {\n    position: relative;\n    height: 22rem;\n    border-radius: 1rem;\n    overflow: hidden;\n    border: 1px solid var(--bor);\n    cursor: pointer;\n    background-color: var(--bg);\n    text-decoration: none;\n}\n\n.recommended-blog img {\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n    width: 100%;\n    height: 45%;\n    object-fit: cover;\n    object-position: center;\n}\n\n.recommended-blog .blog-text {\n    height: 40%;\n    padding: 0.75rem;\n    /* border: 1px solid red; */\n}\n\n.recommended-blog h3 {\n    font-size: 1.25rem;\n    font-family: 'Bricolage Grotesque', sans-serif;\n    font-weight: 600;\n    color: var(--txt);\n}\n\n.recommended-blog p {\n    margin-top: 0.75rem;\n    font-size: 0.9rem;\n    font-family: 'Bricolage Grotesque', sans-serif;\n    font-weight: 400;\n    color: var(--txt);\n}\n\n.recommended-blog .details {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    border-top: 1px solid var(--bor);\n}\n\n.blog-control img {\n    max-width: 1rem;\n    max-height: 1rem;\n}\n\n#action-nav-link {\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n}\n\n.blog-control {\n    background-color: var(--bg2);\n    border: none;\n    font-size: 0.8rem;\n    color: var(--txt);\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.25rem;\n    border-radius: 8px;\n    outline: 1px solid var(--bor);\n}\n\n.blog-control:hover {\n    background-color: var(--pri);\n    color: white;\n}\n\n.recommended-blog:hover .blog-card-actions {\n    max-height: 45%;\n    transition: all 0.2s;\n}\n\n.clickable-link {\n    text-decoration: none;\n}\n\n@media screen and (max-width: 768px) {\n\n    .recommended-blogs-list {\n        display: flex;\n        flex-direction: column;\n    }\n\n}\n\n\n.blog-read-light {\n    --bg: #ffffff;\n    --bg2: #f8f8f8;\n    --txt: black;\n    --p: #323232;\n    --bor: #dbdbdb;\n    --pri: #E43D11;\n}\n\n.blog-read-dark {\n    --bg: #080808;\n    --bg2: #0d0d0d;\n    --txt: #F8F8F8;\n    --p: #D7D7D7;\n    --bor: #1A1A1A;\n    --pri: #E43D11;\n}\n\n#blog-read {\n    background-color: var(--bg);\n    width: 100%;\n}\n\n\n.banner-container img {\n    height: 50vh;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n    margin: 0;\n    padding: 0;\n}\n\n.blogread-title {\n    font-size: 2.5rem;\n    font-family: 'Bricolage Grotesque', sans-serif;\n    margin-bottom: 1rem;\n    color: var(--txt);\n}\n\n.blogread-meta {\n    color: var(--p);\n    font-size: 1.05rem;\n    font-family: 'Bricolage Grotesque', sans-serif;\n    margin-bottom: 1rem;\n}\n\n.blogread-category {\n    font-size: 0.75rem;\n    font-weight: 500;\n    color: var(--p);\n}\n\n.blog-content {\n    color: var(--txt);\n    padding: 1.5rem 3rem;\n}\n\n.blogread-info {\n    border-bottom: 1px solid var(--bor);\n    margin: 0;\n    padding: 1.5rem 3rem;\n}\n\n.blog-title {\n    text-decoration: none;\n    color: var(--txt);\n    background-color: var(--bg2);\n    padding: 1rem;\n    margin-bottom: 1rem;\n    font-weight: 500;\n}\n\n\n@media (max-width:800px) {\n\n    .data-container {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .blogread-info {\n        padding: 1rem 2rem;\n    }\n\n    .blog-content {\n        padding: 1rem 2rem;\n        overflow-wrap: break-word;\n    }\n\n    .blog-content img {\n        width: 90vw;\n        height: auto;\n    }\n}\n\n\n.blogs-light {\n    --bg: white;\n    --txt: black;\n    --bor: #dbdbdb;\n}\n\n.blogs-dark {\n    --bg: #080808;\n    --txt: #D7D7D7;\n    --bor: #1A1A1A;\n}\n\n.recommended-blogs h2 {\n    font-size: 1.75rem;\n    font-family: 'Bricolage Grotesque', sans-serif;\n    font-weight: 500;\n    color: var(--txt);\n}\n\n.recommended-blogs {\n    border-top: 1px solid var(--bor);\n    padding: 2rem;\n    background-color: var(--bg);\n}\n\n.recommended-blogs-list {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    margin-top: 2rem;\n    grid-gap: 1.5rem;\n}\n\n\n/* From Uiverse.io by abrahamcalsin */\n.loader-light {\n    --bg: #f8f8f8;\n    --col: black;\n}\n\n.loader-dark {\n    --bg: #080808;\n    --col: white;\n}\n\n.loader-div {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    background-color: var(--bg);\n}\n\n.dot-spinner {\n    --uib-size: 2.8rem;\n    --uib-speed: .9s;\n    ;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    height: var(--uib-size);\n    width: var(--uib-size);\n}\n\n.dot-spinner__dot {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    height: 100%;\n    width: 100%;\n}\n\n.dot-spinner__dot::before {\n    content: '';\n    height: 20%;\n    width: 20%;\n    border-radius: 50%;\n    background-color: var(--col);\n    transform: scale(0);\n    opacity: 0.5;\n    animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;\n    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);\n}\n\n.dot-spinner__dot:nth-child(2) {\n    transform: rotate(45deg);\n}\n\n.dot-spinner__dot:nth-child(2)::before {\n    animation-delay: calc(var(--uib-speed) * -0.875);\n}\n\n.dot-spinner__dot:nth-child(3) {\n    transform: rotate(90deg);\n}\n\n.dot-spinner__dot:nth-child(3)::before {\n    animation-delay: calc(var(--uib-speed) * -0.75);\n}\n\n.dot-spinner__dot:nth-child(4) {\n    transform: rotate(135deg);\n}\n\n.dot-spinner__dot:nth-child(4)::before {\n    animation-delay: calc(var(--uib-speed) * -0.625);\n}\n\n.dot-spinner__dot:nth-child(5) {\n    transform: rotate(180deg);\n}\n\n.dot-spinner__dot:nth-child(5)::before {\n    animation-delay: calc(var(--uib-speed) * -0.5);\n}\n\n.dot-spinner__dot:nth-child(6) {\n    transform: rotate(225deg);\n}\n\n.dot-spinner__dot:nth-child(6)::before {\n    animation-delay: calc(var(--uib-speed) * -0.375);\n}\n\n.dot-spinner__dot:nth-child(7) {\n    transform: rotate(270deg);\n}\n\n.dot-spinner__dot:nth-child(7)::before {\n    animation-delay: calc(var(--uib-speed) * -0.25);\n}\n\n.dot-spinner__dot:nth-child(8) {\n    transform: rotate(315deg);\n}\n\n.dot-spinner__dot:nth-child(8)::before {\n    animation-delay: calc(var(--uib-speed) * -0.125);\n}\n\n@keyframes pulse0112 {\n\n    0%,\n    100% {\n        transform: scale(0);\n        opacity: 0.5;\n    }\n\n    50% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n.ghost-loader {\n    background-color: #1b1b1b;\n    animation: grad 1.5s ease-in-out infinite;\n}\n\n\n\n@keyframes grad {\n    0% {\n        opacity: 0.9;\n    }\n\n    50% {\n        opacity: 1;\n    }\n\n    100% {\n        opacity: 0.9;\n    }\n}",
            "",
          ]);
          const c = a;
        },
        314: (t) => {
          t.exports = function (t) {
            var e = [];
            return (
              (e.toString = function () {
                return this.map(function (e) {
                  var n = "",
                    r = void 0 !== e[5];
                  return (
                    e[4] && (n += "@supports (".concat(e[4], ") {")),
                    e[2] && (n += "@media ".concat(e[2], " {")),
                    r &&
                      (n += "@layer".concat(
                        e[5].length > 0 ? " ".concat(e[5]) : "",
                        " {"
                      )),
                    (n += t(e)),
                    r && (n += "}"),
                    e[2] && (n += "}"),
                    e[4] && (n += "}"),
                    n
                  );
                }).join("");
              }),
              (e.i = function (t, n, r, o, i) {
                "string" == typeof t && (t = [[null, t, void 0]]);
                var a = {};
                if (r)
                  for (var c = 0; c < this.length; c++) {
                    var l = this[c][0];
                    null != l && (a[l] = !0);
                  }
                for (var u = 0; u < t.length; u++) {
                  var s = [].concat(t[u]);
                  (r && a[s[0]]) ||
                    (void 0 !== i &&
                      (void 0 === s[5] ||
                        (s[1] = "@layer"
                          .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                          .concat(s[1], "}")),
                      (s[5] = i)),
                    n &&
                      (s[2]
                        ? ((s[1] = "@media "
                            .concat(s[2], " {")
                            .concat(s[1], "}")),
                          (s[2] = n))
                        : (s[2] = n)),
                    o &&
                      (s[4]
                        ? ((s[1] = "@supports ("
                            .concat(s[4], ") {")
                            .concat(s[1], "}")),
                          (s[4] = o))
                        : (s[4] = "".concat(o))),
                    e.push(s));
                }
              }),
              e
            );
          };
        },
        601: (t) => {
          t.exports = function (t) {
            return t[1];
          };
        },
        72: (t) => {
          var e = [];
          function n(t) {
            for (var n = -1, r = 0; r < e.length; r++)
              if (e[r].identifier === t) {
                n = r;
                break;
              }
            return n;
          }
          function r(t, r) {
            for (var i = {}, a = [], c = 0; c < t.length; c++) {
              var l = t[c],
                u = r.base ? l[0] + r.base : l[0],
                s = i[u] || 0,
                f = "".concat(u, " ").concat(s);
              i[u] = s + 1;
              var d = n(f),
                h = {
                  css: l[1],
                  media: l[2],
                  sourceMap: l[3],
                  supports: l[4],
                  layer: l[5],
                };
              if (-1 !== d) e[d].references++, e[d].updater(h);
              else {
                var p = o(h, r);
                (r.byIndex = c),
                  e.splice(c, 0, { identifier: f, updater: p, references: 1 });
              }
              a.push(f);
            }
            return a;
          }
          function o(t, e) {
            var n = e.domAPI(e);
            return (
              n.update(t),
              function (e) {
                if (e) {
                  if (
                    e.css === t.css &&
                    e.media === t.media &&
                    e.sourceMap === t.sourceMap &&
                    e.supports === t.supports &&
                    e.layer === t.layer
                  )
                    return;
                  n.update((t = e));
                } else n.remove();
              }
            );
          }
          t.exports = function (t, o) {
            var i = r((t = t || []), (o = o || {}));
            return function (t) {
              t = t || [];
              for (var a = 0; a < i.length; a++) {
                var c = n(i[a]);
                e[c].references--;
              }
              for (var l = r(t, o), u = 0; u < i.length; u++) {
                var s = n(i[u]);
                0 === e[s].references && (e[s].updater(), e.splice(s, 1));
              }
              i = l;
            };
          };
        },
        659: (t) => {
          var e = {};
          t.exports = function (t, n) {
            var r = (function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (t) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            })(t);
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(n);
          };
        },
        540: (t) => {
          t.exports = function (t) {
            var e = document.createElement("style");
            return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
          };
        },
        56: (t, e, n) => {
          t.exports = function (t) {
            var e = n.nc;
            e && t.setAttribute("nonce", e);
          };
        },
        825: (t) => {
          t.exports = function (t) {
            if ("undefined" == typeof document)
              return { update: function () {}, remove: function () {} };
            var e = t.insertStyleElement(t);
            return {
              update: function (n) {
                !(function (t, e, n) {
                  var r = "";
                  n.supports && (r += "@supports (".concat(n.supports, ") {")),
                    n.media && (r += "@media ".concat(n.media, " {"));
                  var o = void 0 !== n.layer;
                  o &&
                    (r += "@layer".concat(
                      n.layer.length > 0 ? " ".concat(n.layer) : "",
                      " {"
                    )),
                    (r += n.css),
                    o && (r += "}"),
                    n.media && (r += "}"),
                    n.supports && (r += "}");
                  var i = n.sourceMap;
                  i &&
                    "undefined" != typeof btoa &&
                    (r +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                        " */"
                      )),
                    e.styleTagTransform(r, t, e.options);
                })(e, t, n);
              },
              remove: function () {
                !(function (t) {
                  if (null === t.parentNode) return !1;
                  t.parentNode.removeChild(t);
                })(e);
              },
            };
          };
        },
        113: (t) => {
          t.exports = function (t, e) {
            if (e.styleSheet) e.styleSheet.cssText = t;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(t));
            }
          };
        },
        155: (e) => {
          e.exports = t;
        },
        442: (t) => {
          t.exports = e;
        },
      },
      r = {};
    function o(t) {
      var e = r[t];
      if (void 0 !== e) return e.exports;
      var i = (r[t] = { id: t, exports: {} });
      return n[t](i, i.exports, o), i.exports;
    }
    (o.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return o.d(e, { a: e }), e;
    }),
      (o.d = (t, e) => {
        for (var n in e)
          o.o(e, n) &&
            !o.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      }),
      (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (o.r = (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (o.nc = void 0);
    var i = {};
    o.r(i), o.d(i, { Bloggest: () => D });
    var a = o(155),
      c = o.n(a),
      l = o(442);
    const u = function (t) {
        var e = t.theme;
        return c().createElement(
          "div",
          { className: "loader-div loader-".concat(e) },
          c().createElement(
            "div",
            { className: "dot-spinner" },
            c().createElement("div", { className: "dot-spinner__dot" }),
            c().createElement("div", { className: "dot-spinner__dot" }),
            c().createElement("div", { className: "dot-spinner__dot" }),
            c().createElement("div", { className: "dot-spinner__dot" }),
            c().createElement("div", { className: "dot-spinner__dot" }),
            c().createElement("div", { className: "dot-spinner__dot" }),
            c().createElement("div", { className: "dot-spinner__dot" }),
            c().createElement("div", { className: "dot-spinner__dot" })
          )
        );
      },
      s = function (t) {
        var e = t.width,
          n = t.height,
          r = t.radius;
        return c().createElement("div", {
          style: { width: e, height: n, borderRadius: r },
          className: "ghost-loader",
        });
      };
    function f(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    var d = function (t, e) {
      return t
        ? (null == t ? void 0 : t.length) > e
          ? t.substr(0, e - 1) + "..."
          : t
        : "";
    };
    const h = function (t) {
      var e,
        n,
        r = t.blog,
        o = t.theme,
        i =
          ((e = (0, a.useState)(!0)),
          (n = 2),
          (function (t) {
            if (Array.isArray(t)) return t;
          })(e) ||
            (function (t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != n) {
                var r,
                  o,
                  i,
                  a,
                  c = [],
                  l = !0,
                  u = !1;
                try {
                  if (((i = (n = n.call(t)).next), 0 === e)) {
                    if (Object(n) !== n) return;
                    l = !1;
                  } else
                    for (
                      ;
                      !(l = (r = i.call(n)).done) &&
                      (c.push(r.value), c.length !== e);
                      l = !0
                    );
                } catch (t) {
                  (u = !0), (o = t);
                } finally {
                  try {
                    if (
                      !l &&
                      null != n.return &&
                      ((a = n.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (u) throw o;
                  }
                }
                return c;
              }
            })(e, n) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return f(t, e);
                var n = {}.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? f(t, e)
                    : void 0
                );
              }
            })(e, n) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        u = i[0],
        h = i[1];
      return c().createElement(
        l.Link,
        {
          to: "read-this-blog/".concat(null == r ? void 0 : r._id),
          key: r._id,
          className: "recommended-blog blog-".concat(o),
        },
        u && c().createElement(s, { width: "100%", height: "45%" }),
        c().createElement("img", {
          onLoad: function () {
            h(!1);
          },
          style: { display: u ? "none" : "block" },
          src: null == r ? void 0 : r.banner,
          alt: "",
        }),
        c().createElement(
          "div",
          { className: "blog-text" },
          c().createElement("h3", null, d(r.title, 50)),
          c().createElement("p", null, d(r.meta, 80))
        ),
        c().createElement(
          "div",
          { className: "details" },
          c().createElement("span", null, r.date)
        )
      );
    };
    function p(t) {
      return (
        (p =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        p(t)
      );
    }
    function m() {
      m = function () {
        return e;
      };
      var t,
        e = {},
        n = Object.prototype,
        r = n.hasOwnProperty,
        o =
          Object.defineProperty ||
          function (t, e, n) {
            t[e] = n.value;
          },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        c = i.asyncIterator || "@@asyncIterator",
        l = i.toStringTag || "@@toStringTag";
      function u(t, e, n) {
        return (
          Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        u({}, "");
      } catch (t) {
        u = function (t, e, n) {
          return (t[e] = n);
        };
      }
      function s(t, e, n, r) {
        var i = e && e.prototype instanceof b ? e : b,
          a = Object.create(i.prototype),
          c = new P(r || []);
        return o(a, "_invoke", { value: N(t, n, c) }), a;
      }
      function f(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      e.wrap = s;
      var d = "suspendedStart",
        h = "suspendedYield",
        y = "executing",
        v = "completed",
        g = {};
      function b() {}
      function w() {}
      function x() {}
      var E = {};
      u(E, a, function () {
        return this;
      });
      var _ = Object.getPrototypeOf,
        L = _ && _(_(F([])));
      L && L !== n && r.call(L, a) && (E = L);
      var j = (x.prototype = b.prototype = Object.create(E));
      function S(t) {
        ["next", "throw", "return"].forEach(function (e) {
          u(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function k(t, e) {
        function n(o, i, a, c) {
          var l = f(t[o], t, i);
          if ("throw" !== l.type) {
            var u = l.arg,
              s = u.value;
            return s && "object" == p(s) && r.call(s, "__await")
              ? e.resolve(s.__await).then(
                  function (t) {
                    n("next", t, a, c);
                  },
                  function (t) {
                    n("throw", t, a, c);
                  }
                )
              : e.resolve(s).then(
                  function (t) {
                    (u.value = t), a(u);
                  },
                  function (t) {
                    return n("throw", t, a, c);
                  }
                );
          }
          c(l.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, r) {
            function o() {
              return new e(function (e, o) {
                n(t, r, e, o);
              });
            }
            return (i = i ? i.then(o, o) : o());
          },
        });
      }
      function N(e, n, r) {
        var o = d;
        return function (i, a) {
          if (o === y) throw Error("Generator is already running");
          if (o === v) {
            if ("throw" === i) throw a;
            return { value: t, done: !0 };
          }
          for (r.method = i, r.arg = a; ; ) {
            var c = r.delegate;
            if (c) {
              var l = O(c, r);
              if (l) {
                if (l === g) continue;
                return l;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if (o === d) throw ((o = v), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            o = y;
            var u = f(e, n, r);
            if ("normal" === u.type) {
              if (((o = r.done ? v : h), u.arg === g)) continue;
              return { value: u.arg, done: r.done };
            }
            "throw" === u.type &&
              ((o = v), (r.method = "throw"), (r.arg = u.arg));
          }
        };
      }
      function O(e, n) {
        var r = n.method,
          o = e.iterator[r];
        if (o === t)
          return (
            (n.delegate = null),
            ("throw" === r &&
              e.iterator.return &&
              ((n.method = "return"),
              (n.arg = t),
              O(e, n),
              "throw" === n.method)) ||
              ("return" !== r &&
                ((n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a '" + r + "' method"
                )))),
            g
          );
        var i = f(o, e.iterator, n.arg);
        if ("throw" === i.type)
          return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g;
        var a = i.arg;
        return a
          ? a.done
            ? ((n[e.resultName] = a.value),
              (n.next = e.nextLoc),
              "return" !== n.method && ((n.method = "next"), (n.arg = t)),
              (n.delegate = null),
              g)
            : a
          : ((n.method = "throw"),
            (n.arg = new TypeError("iterator result is not an object")),
            (n.delegate = null),
            g);
      }
      function A(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function T(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function P(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(A, this),
          this.reset(!0);
      }
      function F(e) {
        if (e || "" === e) {
          var n = e[a];
          if (n) return n.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function n() {
                for (; ++o < e.length; )
                  if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                return (n.value = t), (n.done = !0), n;
              };
            return (i.next = i);
          }
        }
        throw new TypeError(p(e) + " is not iterable");
      }
      return (
        (w.prototype = x),
        o(j, "constructor", { value: x, configurable: !0 }),
        o(x, "constructor", { value: w, configurable: !0 }),
        (w.displayName = u(x, l, "GeneratorFunction")),
        (e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === w || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, x)
              : ((t.__proto__ = x), u(t, l, "GeneratorFunction")),
            (t.prototype = Object.create(j)),
            t
          );
        }),
        (e.awrap = function (t) {
          return { __await: t };
        }),
        S(k.prototype),
        u(k.prototype, c, function () {
          return this;
        }),
        (e.AsyncIterator = k),
        (e.async = function (t, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new k(s(t, n, r, o), i);
          return e.isGeneratorFunction(n)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        S(j),
        u(j, l, "Generator"),
        u(j, a, function () {
          return this;
        }),
        u(j, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (t) {
          var e = Object(t),
            n = [];
          for (var r in e) n.push(r);
          return (
            n.reverse(),
            function t() {
              for (; n.length; ) {
                var r = n.pop();
                if (r in e) return (t.value = r), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (e.values = F),
        (P.prototype = {
          constructor: P,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = t),
              this.tryEntries.forEach(T),
              !e)
            )
              for (var n in this)
                "t" === n.charAt(0) &&
                  r.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var n = this;
            function o(r, o) {
              return (
                (c.type = "throw"),
                (c.arg = e),
                (n.next = r),
                o && ((n.method = "next"), (n.arg = t)),
                !!o
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                c = a.completion;
              if ("root" === a.tryLoc) return o("end");
              if (a.tryLoc <= this.prev) {
                var l = r.call(a, "catchLoc"),
                  u = r.call(a, "finallyLoc");
                if (l && u) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                } else if (l) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                } else {
                  if (!u) throw Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              g
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), T(n), g;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  T(n);
                }
                return o;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function (e, n, r) {
            return (
              (this.delegate = { iterator: F(e), resultName: n, nextLoc: r }),
              "next" === this.method && (this.arg = t),
              g
            );
          },
        }),
        e
      );
    }
    function y(t, e, n, r, o, i, a) {
      try {
        var c = t[i](a),
          l = c.value;
      } catch (t) {
        return void n(t);
      }
      c.done ? e(l) : Promise.resolve(l).then(r, o);
    }
    function v(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null != n) {
            var r,
              o,
              i,
              a,
              c = [],
              l = !0,
              u = !1;
            try {
              if (((i = (n = n.call(t)).next), 0 === e)) {
                if (Object(n) !== n) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = i.call(n)).done) &&
                  (c.push(r.value), c.length !== e);
                  l = !0
                );
            } catch (t) {
              (u = !0), (o = t);
            } finally {
              try {
                if (
                  !l &&
                  null != n.return &&
                  ((a = n.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (u) throw o;
              }
            }
            return c;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return g(t, e);
            var n = {}.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? g(t, e)
                : void 0
            );
          }
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function g(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    const b = function (t) {
      t.apiKey;
      var e = t.theme,
        n = v((0, a.useState)(!0), 2),
        r = n[0],
        o = n[1],
        i = v((0, a.useState)([]), 2),
        l = i[0],
        s = i[1],
        f = (function () {
          var t,
            e =
              ((t = m().mark(function t() {
                return m().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          fetch(
                            "https://bloggestapi.sohaibaftab.me/api/blogs/get-published",
                            { method: "GET" }
                          )
                            .then(function (t) {
                              return t.json();
                            })
                            .then(function (t) {
                              s(t), o(!1);
                            })
                            .catch(function (t) {
                              console.log(t);
                            })
                        );
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, o) {
                  var i = t.apply(e, n);
                  function a(t) {
                    y(i, r, o, a, c, "next", t);
                  }
                  function c(t) {
                    y(i, r, o, a, c, "throw", t);
                  }
                  a(void 0);
                });
              });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return (
        (0, a.useEffect)(function () {
          f();
        }, []),
        r
          ? c().createElement(u, { theme: e })
          : c().createElement(
              "div",
              { id: "blogs", className: "blogs-".concat(e) },
              c().createElement(
                "div",
                { className: "recommended-blogs" },
                c().createElement("h2", null, "My Trending Blogs"),
                c().createElement(
                  "div",
                  { className: "recommended-blogs-list" },
                  l.map(function (t) {
                    return c().createElement(h, {
                      theme: e,
                      blog: t,
                      key: t._id,
                    });
                  })
                )
              )
            )
      );
    };
    function w(t) {
      return (
        (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        w(t)
      );
    }
    function x() {
      x = function () {
        return e;
      };
      var t,
        e = {},
        n = Object.prototype,
        r = n.hasOwnProperty,
        o =
          Object.defineProperty ||
          function (t, e, n) {
            t[e] = n.value;
          },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        c = i.asyncIterator || "@@asyncIterator",
        l = i.toStringTag || "@@toStringTag";
      function u(t, e, n) {
        return (
          Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        u({}, "");
      } catch (t) {
        u = function (t, e, n) {
          return (t[e] = n);
        };
      }
      function s(t, e, n, r) {
        var i = e && e.prototype instanceof v ? e : v,
          a = Object.create(i.prototype),
          c = new P(r || []);
        return o(a, "_invoke", { value: N(t, n, c) }), a;
      }
      function f(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      e.wrap = s;
      var d = "suspendedStart",
        h = "suspendedYield",
        p = "executing",
        m = "completed",
        y = {};
      function v() {}
      function g() {}
      function b() {}
      var E = {};
      u(E, a, function () {
        return this;
      });
      var _ = Object.getPrototypeOf,
        L = _ && _(_(F([])));
      L && L !== n && r.call(L, a) && (E = L);
      var j = (b.prototype = v.prototype = Object.create(E));
      function S(t) {
        ["next", "throw", "return"].forEach(function (e) {
          u(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function k(t, e) {
        function n(o, i, a, c) {
          var l = f(t[o], t, i);
          if ("throw" !== l.type) {
            var u = l.arg,
              s = u.value;
            return s && "object" == w(s) && r.call(s, "__await")
              ? e.resolve(s.__await).then(
                  function (t) {
                    n("next", t, a, c);
                  },
                  function (t) {
                    n("throw", t, a, c);
                  }
                )
              : e.resolve(s).then(
                  function (t) {
                    (u.value = t), a(u);
                  },
                  function (t) {
                    return n("throw", t, a, c);
                  }
                );
          }
          c(l.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (t, r) {
            function o() {
              return new e(function (e, o) {
                n(t, r, e, o);
              });
            }
            return (i = i ? i.then(o, o) : o());
          },
        });
      }
      function N(e, n, r) {
        var o = d;
        return function (i, a) {
          if (o === p) throw Error("Generator is already running");
          if (o === m) {
            if ("throw" === i) throw a;
            return { value: t, done: !0 };
          }
          for (r.method = i, r.arg = a; ; ) {
            var c = r.delegate;
            if (c) {
              var l = O(c, r);
              if (l) {
                if (l === y) continue;
                return l;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if (o === d) throw ((o = m), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            o = p;
            var u = f(e, n, r);
            if ("normal" === u.type) {
              if (((o = r.done ? m : h), u.arg === y)) continue;
              return { value: u.arg, done: r.done };
            }
            "throw" === u.type &&
              ((o = m), (r.method = "throw"), (r.arg = u.arg));
          }
        };
      }
      function O(e, n) {
        var r = n.method,
          o = e.iterator[r];
        if (o === t)
          return (
            (n.delegate = null),
            ("throw" === r &&
              e.iterator.return &&
              ((n.method = "return"),
              (n.arg = t),
              O(e, n),
              "throw" === n.method)) ||
              ("return" !== r &&
                ((n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a '" + r + "' method"
                )))),
            y
          );
        var i = f(o, e.iterator, n.arg);
        if ("throw" === i.type)
          return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), y;
        var a = i.arg;
        return a
          ? a.done
            ? ((n[e.resultName] = a.value),
              (n.next = e.nextLoc),
              "return" !== n.method && ((n.method = "next"), (n.arg = t)),
              (n.delegate = null),
              y)
            : a
          : ((n.method = "throw"),
            (n.arg = new TypeError("iterator result is not an object")),
            (n.delegate = null),
            y);
      }
      function A(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function T(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function P(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(A, this),
          this.reset(!0);
      }
      function F(e) {
        if (e || "" === e) {
          var n = e[a];
          if (n) return n.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function n() {
                for (; ++o < e.length; )
                  if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                return (n.value = t), (n.done = !0), n;
              };
            return (i.next = i);
          }
        }
        throw new TypeError(w(e) + " is not iterable");
      }
      return (
        (g.prototype = b),
        o(j, "constructor", { value: b, configurable: !0 }),
        o(b, "constructor", { value: g, configurable: !0 }),
        (g.displayName = u(b, l, "GeneratorFunction")),
        (e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === g || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, b)
              : ((t.__proto__ = b), u(t, l, "GeneratorFunction")),
            (t.prototype = Object.create(j)),
            t
          );
        }),
        (e.awrap = function (t) {
          return { __await: t };
        }),
        S(k.prototype),
        u(k.prototype, c, function () {
          return this;
        }),
        (e.AsyncIterator = k),
        (e.async = function (t, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new k(s(t, n, r, o), i);
          return e.isGeneratorFunction(n)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        S(j),
        u(j, l, "Generator"),
        u(j, a, function () {
          return this;
        }),
        u(j, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (t) {
          var e = Object(t),
            n = [];
          for (var r in e) n.push(r);
          return (
            n.reverse(),
            function t() {
              for (; n.length; ) {
                var r = n.pop();
                if (r in e) return (t.value = r), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (e.values = F),
        (P.prototype = {
          constructor: P,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = t),
              this.tryEntries.forEach(T),
              !e)
            )
              for (var n in this)
                "t" === n.charAt(0) &&
                  r.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var n = this;
            function o(r, o) {
              return (
                (c.type = "throw"),
                (c.arg = e),
                (n.next = r),
                o && ((n.method = "next"), (n.arg = t)),
                !!o
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                c = a.completion;
              if ("root" === a.tryLoc) return o("end");
              if (a.tryLoc <= this.prev) {
                var l = r.call(a, "catchLoc"),
                  u = r.call(a, "finallyLoc");
                if (l && u) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                } else if (l) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                } else {
                  if (!u) throw Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              y
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), T(n), y;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  T(n);
                }
                return o;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function (e, n, r) {
            return (
              (this.delegate = { iterator: F(e), resultName: n, nextLoc: r }),
              "next" === this.method && (this.arg = t),
              y
            );
          },
        }),
        e
      );
    }
    function E(t, e, n, r, o, i, a) {
      try {
        var c = t[i](a),
          l = c.value;
      } catch (t) {
        return void n(t);
      }
      c.done ? e(l) : Promise.resolve(l).then(r, o);
    }
    function _(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null != n) {
            var r,
              o,
              i,
              a,
              c = [],
              l = !0,
              u = !1;
            try {
              if (((i = (n = n.call(t)).next), 0 === e)) {
                if (Object(n) !== n) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = i.call(n)).done) &&
                  (c.push(r.value), c.length !== e);
                  l = !0
                );
            } catch (t) {
              (u = !0), (o = t);
            } finally {
              try {
                if (
                  !l &&
                  null != n.return &&
                  ((a = n.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (u) throw o;
              }
            }
            return c;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return L(t, e);
            var n = {}.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? L(t, e)
                : void 0
            );
          }
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function L(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    const j = function (t) {
      var e = t.theme,
        n = (0, l.useParams)().id;
      console.log(n);
      var r = _((0, a.useState)([]), 2),
        o = r[0],
        i = r[1],
        f = _((0, a.useState)(!0), 2),
        d = f[0],
        h = f[1],
        p = _((0, a.useState)(!0), 2),
        m = p[0],
        y = p[1],
        v = (function () {
          var t,
            e =
              ((t = x().mark(function t() {
                return x().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          fetch(
                            "https://bloggestapi.sohaibaftab.me/api/blogs/blog-details?blog=".concat(
                              n
                            )
                          )
                            .then(function (t) {
                              return t.json();
                            })
                            .then(function (t) {
                              i(t), h(!1);
                            })
                            .catch(function (t) {
                              console.log(t);
                            })
                        );
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, o) {
                  var i = t.apply(e, n);
                  function a(t) {
                    E(i, r, o, a, c, "next", t);
                  }
                  function c(t) {
                    E(i, r, o, a, c, "throw", t);
                  }
                  a(void 0);
                });
              });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return (
        (0, a.useEffect)(function () {
          n && v();
        }, []),
        d
          ? c().createElement(u, null)
          : c().createElement(
              "div",
              { id: "blog-read", className: "blog-read-".concat(e) },
              c().createElement(
                "div",
                { className: "banner-container" },
                m &&
                  c().createElement(s, {
                    width: "100%",
                    height: "50vh",
                    radius: "0",
                  }),
                c().createElement("img", {
                  style: { display: m ? "none" : "block" },
                  onLoad: function () {
                    y(!1);
                  },
                  src: null == o ? void 0 : o.banner,
                  alt: "",
                })
              ),
              c().createElement(
                "div",
                { className: "blogread-info" },
                c().createElement(
                  "p",
                  { className: "blogread-title" },
                  null == o ? void 0 : o.title
                ),
                c().createElement(
                  "p",
                  { className: "blogread-meta" },
                  null == o ? void 0 : o.meta
                ),
                c().createElement(
                  "p",
                  { className: "blogread-category" },
                  null == o ? void 0 : o.category,
                  c().createElement(
                    "span",
                    { style: { marginLeft: "1rem" } },
                    null == o ? void 0 : o.date
                  )
                )
              ),
              c().createElement("div", {
                className: "blog-content",
                dangerouslySetInnerHTML: {
                  __html: null == o ? void 0 : o.content,
                },
              })
            )
      );
    };
    var S = o(72),
      k = o.n(S),
      N = o(825),
      O = o.n(N),
      A = o(659),
      T = o.n(A),
      P = o(56),
      F = o.n(P),
      G = o(540),
      I = o.n(G),
      M = o(113),
      C = o.n(M),
      q = o(626),
      z = {};
    (z.styleTagTransform = C()),
      (z.setAttributes = F()),
      (z.insert = T().bind(null, "head")),
      (z.domAPI = O()),
      (z.insertStyleElement = I()),
      k()(q.A, z),
      q.A && q.A.locals && q.A.locals;
    const D = function (t) {
      var e = t.header,
        n = t.apiKey,
        r = t.theme;
      return c().createElement(
        l.Routes,
        null,
        c().createElement(l.Route, {
          index: !0,
          path: "/",
          element: c().createElement(b, { header: e, apiKey: n, theme: r }),
        }),
        c().createElement(l.Route, {
          path: "read-this-blog/:id",
          element: c().createElement(j, { theme: r }),
        })
      );
    };
    return i;
  })()
);
