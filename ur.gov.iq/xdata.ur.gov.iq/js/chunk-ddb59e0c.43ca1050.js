(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-ddb59e0c"],
  {
    "00ee": function (t, e, o) {
      "use strict";
      var s = o("b622"),
        a = s("toStringTag"),
        n = {};
      (n[a] = "z"), (t.exports = "[object z]" === String(n));
    },
    "0274": function (t, e, o) {
      t.exports = o.p + "img/Flag-map.835c66d2.jpg";
    },
    "1cfd": function (t, e, o) {
      "use strict";
      o("e848");
    },
    "271a": function (t, e, o) {
      "use strict";
      var s = o("cb2d"),
        a = o("e330"),
        n = o("577e"),
        i = o("d6d6"),
        r = URLSearchParams,
        c = r.prototype,
        l = a(c.getAll),
        u = a(c.has),
        d = new r("a=1");
      (!d.has("a", 2) && d.has("a", void 0)) ||
        s(
          c,
          "has",
          function (t) {
            var e = arguments.length,
              o = e < 2 ? void 0 : arguments[1];
            if (e && void 0 === o) return u(this, t);
            var s = l(this, t);
            i(e, 1);
            var a = n(o),
              r = 0;
            while (r < s.length) if (s[r++] === a) return !0;
            return !1;
          },
          { enumerable: !0, unsafe: !0 }
        );
    },
    5494: function (t, e, o) {
      "use strict";
      var s = o("83ab"),
        a = o("e330"),
        n = o("edd0"),
        i = URLSearchParams.prototype,
        r = a(i.forEach);
      s &&
        !("size" in i) &&
        n(i, "size", {
          get: function () {
            var t = 0;
            return (
              r(this, function () {
                t++;
              }),
              t
            );
          },
          configurable: !0,
          enumerable: !0,
        });
    },
    "577e": function (t, e, o) {
      "use strict";
      var s = o("f5df"),
        a = String;
      t.exports = function (t) {
        if ("Symbol" === s(t))
          throw new TypeError("Cannot convert a Symbol value to a string");
        return a(t);
      };
    },
    "88a7": function (t, e, o) {
      "use strict";
      var s = o("cb2d"),
        a = o("e330"),
        n = o("577e"),
        i = o("d6d6"),
        r = URLSearchParams,
        c = r.prototype,
        l = a(c.append),
        u = a(c["delete"]),
        d = a(c.forEach),
        h = a([].push),
        m = new r("a=1&a=2&b=3");
      m["delete"]("a", 1),
        m["delete"]("b", void 0),
        m + "" !== "a=2" &&
          s(
            c,
            "delete",
            function (t) {
              var e = arguments.length,
                o = e < 2 ? void 0 : arguments[1];
              if (e && void 0 === o) return u(this, t);
              var s = [];
              d(this, function (t, e) {
                h(s, { key: e, value: t });
              }),
                i(e, 1);
              var a,
                r = n(t),
                c = n(o),
                m = 0,
                f = 0,
                p = !1,
                g = s.length;
              while (m < g)
                (a = s[m++]),
                  p || a.key === r ? ((p = !0), u(this, a.key)) : f++;
              while (f < g)
                (a = s[f++]),
                  (a.key === r && a.value === c) || l(this, a.key, a.value);
            },
            { enumerable: !0, unsafe: !0 }
          );
    },
    d6d6: function (t, e, o) {
      "use strict";
      var s = TypeError;
      t.exports = function (t, e) {
        if (t < e) throw new s("Not enough arguments");
        return t;
      };
    },
    e848: function (t, e, o) {},
    eb28: function (t, e, o) {
      "use strict";
      o.r(e);
      var s = function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "main" }, [
            e("section", { staticClass: "signup" }, [
              e("div", { staticClass: "container" }, [
                e("div", { staticClass: "signup-content row" }, [
                  e("div", { staticClass: "col-md-6 mt-5" }, [
                    e(
                      "div",
                      {
                        staticClass: "mt-3",
                        staticStyle: { "text-align": "right" },
                      },
                      [
                        e("form", [
                          e("div", {
                            staticClass: "mt-3",
                            staticStyle: { "text-align": "right" },
                            attrs: { id: "mosparo-box" },
                            on: { click: t.onCheckForm },
                          }),
                        ]),
                        t.successMessage
                          ? e("p", { staticClass: "success-message" }, [
                              t._v(" " + t._s(t.successMessage) + " "),
                            ])
                          : t._e(),
                      ]
                    ),
                  ]),
                  t._m(0),
                ]),
              ]),
            ]),
          ]);
        },
        a = [
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "col-md-6 signup-image mt-5",
                staticStyle: { "text-align": "center" },
              },
              [
                e("figure", [
                  e("img", { attrs: { src: o("0274"), alt: "sign up image" } }),
                ]),
              ]
            );
          },
        ],
        n = (o("14d9"), o("88a7"), o("271a"), o("5494"), o("3d20")),
        i = o.n(n),
        r = o("bc3a"),
        c = o.n(r);
      const l = "https://xdata.ur.gov.iq/api/";
      var u = {
          name: "readQR",
          title: "قراءة QR",
          data() {
            return {
              newUrl: null,
              urlParam: "",
              honeypotField: "",
              qrCheck: !1,
              mosparoConfig: {
                uuid: "4f11a243-b40c-4b05-9c2d-db265f168483",
                publicKey: "R-xfzljwupelVctXGlFVhOcpaZ1N5ZeSfiqE8MS6Y-8",
                host: "https://check.ur.gov.iq",
                htmlId: "mosparo-box",
                options: {
                  language: "ar_AR",
                  name: "mosparoxdata",
                  loadCssResource: !0,
                  onValidateFormInvisible: this.handleValidationSuccess,
                },
              },
              mosparoInstance: null,
              submitToken: null,
              successMessage: "",
              validationToken: null,
              showBtnQR: !1,
              hideErr: [],
            };
          },
          methods: {
            loadMosparo() {
              const t = document.createElement("script");
              (t.src = this.mosparoConfig.host + "/build/mosparo-frontend.js"),
                (t.defer = !0),
                (t.onload = () => {
                  (this.mosparoInstance = new window.mosparo(
                    this.mosparoConfig.htmlId,
                    this.mosparoConfig.host,
                    this.mosparoConfig.uuid,
                    this.mosparoConfig.publicKey,
                    this.mosparoConfig.options
                  )),
                    setTimeout(() => {
                      this.getSubmitToken();
                    }, 1e3);
                }),
                (t.onerror = () => {
                  console.error("Failed to load Mosparo script");
                }),
                document.head.appendChild(t);
            },
            getSubmitToken() {
              const t = document.querySelector(".mosparo__submit-token");
              t
                ? (this.submitToken = t.value)
                : console.error("Submit token element not found.");
            },
            onCheckForm() {
              let t = this.$loading.show({
                loader: "dots",
                transition: "fade",
                color: "#DC3545",
              });
              setTimeout(() => {
                this.getValidationToken(),
                  this.validationToken &&
                    setTimeout(() => {
                      t.hide(), this.checkMosparo();
                    }, 500);
              }, 500);
            },
            getValidationToken() {
              const t = document.querySelector(".mosparo__validation-token");
              t
                ? ((this.validationToken = t.value),
                  console.log("Validation Token:", this.validationToken))
                : console.error("Validation token element not found.");
            },
            checkMosparo() {
              let t = this.$loading.show({
                loader: "dots",
                transition: "fade",
                color: "#DC3545",
              });
              c.a
                .post(l + "plat/mosparo", {
                  submit_token: this.submitToken,
                  validation_token: this.validationToken,
                  formdata: { url: this.urlParam },
                })
                .then((e) => {
                  if (200 == e.status) {
                    t.hide(), (this.newUrl = e.data.pdf_base64);
                    var o = "data:application/pdf;base64," + this.newUrl;
                    fetch(o)
                      .then((t) => t.blob())
                      .then((t) => {
                        const e = URL.createObjectURL(t);
                        var o = document.createElement("a");
                        (o.href = e),
                          (o.target = "_blank"),
                          o.click(),
                          window.URL.revokeObjectURL(t);
                      });
                  } else
                    (201 == e.status || 422 == e.status) &&
                      (t.hide(),
                      i.a.fire({
                        icon: "info",
                        title: e.data.message,
                        showConfirmButton: !0,
                      }));
                })
                .catch((e) => {
                  t.hide(), this.hideErr.push(e);
                });
            },
            handleValidationSuccess() {
              (this.successMessage = "بياناتك صالحة. يمكنك تقديم النموذج."),
                this.getValidationToken();
            },
          },
          mounted() {
            (this.urlParam = this.$route.query.url), this.loadMosparo();
          },
        },
        d = u,
        h = (o("1cfd"), o("0c7c")),
        m = Object(h["a"])(d, s, a, !1, null, null, null);
      e["default"] = m.exports;
    },
    edd0: function (t, e, o) {
      "use strict";
      var s = o("13d2"),
        a = o("9bf2");
      t.exports = function (t, e, o) {
        return (
          o.get && s(o.get, e, { getter: !0 }),
          o.set && s(o.set, e, { setter: !0 }),
          a.f(t, e, o)
        );
      };
    },
    f5df: function (t, e, o) {
      "use strict";
      var s = o("00ee"),
        a = o("1626"),
        n = o("c6b6"),
        i = o("b622"),
        r = i("toStringTag"),
        c = Object,
        l =
          "Arguments" ===
          n(
            (function () {
              return arguments;
            })()
          ),
        u = function (t, e) {
          try {
            return t[e];
          } catch (o) {}
        };
      t.exports = s
        ? n
        : function (t) {
            var e, o, s;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" == typeof (o = u((e = c(t)), r))
              ? o
              : l
              ? n(e)
              : "Object" === (s = n(e)) && a(e.callee)
              ? "Arguments"
              : s;
          };
    },
  },
]);
