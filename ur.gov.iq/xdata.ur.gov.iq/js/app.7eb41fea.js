(function (e) {
  function t(t) {
    for (
      var n, c, i = t[0], o = t[1], l = t[2], u = 0, d = [];
      u < i.length;
      u++
    )
      (c = i[u]),
        Object.prototype.hasOwnProperty.call(s, c) && s[c] && d.push(s[c][0]),
        (s[c] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    h && h(t);
    while (d.length) d.shift()();
    return r.push.apply(r, l || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], n = !0, c = 1; c < a.length; c++) {
        var i = a[c];
        0 !== s[i] && (n = !1);
      }
      n && (r.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var n = {},
    c = { app: 0 },
    s = { app: 0 },
    r = [];
  function i(e) {
    return (
      o.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-0263bd85": "3c863ebd",
        "chunk-027888a5": "92ab9934",
        "chunk-033db653": "4e6bbd0e",
        "chunk-10b9e817": "ba8773ad",
        "chunk-11d01b34": "698f499d",
        "chunk-1565f775": "68feca23",
        "chunk-185fae0e": "8b2e4370",
        "chunk-1aa6c772": "098eaa63",
        "chunk-1c441f36": "15bed010",
        "chunk-1e376b62": "234b760d",
        "chunk-247ce5be": "64b2cbf6",
        "chunk-27557b60": "3fd66957",
        "chunk-2d0ac951": "97508e79",
        "chunk-2d0bce40": "4935a49c",
        "chunk-2eb9e198": "5b449a1a",
        "chunk-30ef6669": "8337f671",
        "chunk-351931d3": "576cbc00",
        "chunk-18986d61": "95bcfc41",
        "chunk-2d21f07e": "bcd209c6",
        "chunk-2d225405": "aca235b7",
        "chunk-53874084": "9cc45b21",
        "chunk-453e5bd6": "5f8620d9",
        "chunk-672d355f": "4d2d4d61",
        "chunk-7aefbc36": "08edd4d3",
        "chunk-35c7e110": "4516616b",
        "chunk-377b48cb": "ceb14fe3",
        "chunk-3a1b63e9": "661dc326",
        "chunk-40bf6050": "255fce0a",
        "chunk-064ad8c8": "aef1ee8b",
        "chunk-1418e878": "411e3c22",
        "chunk-1cfb2342": "8232f108",
        "chunk-29072305": "a2246693",
        "chunk-29a095d3": "0813d804",
        "chunk-30afcc01": "2e8cc8fc",
        "chunk-30ffd467": "1294a767",
        "chunk-35821720": "4f40bae9",
        "chunk-3645261a": "b6415725",
        "chunk-380b8168": "4cc9b949",
        "chunk-45689513": "7df18bb1",
        "chunk-58cdfa54": "c9497b55",
        "chunk-63afac17": "b51793ea",
        "chunk-65b1603f": "95841869",
        "chunk-6fbbb777": "2efa173e",
        "chunk-71c5b152": "feec3094",
        "chunk-772eeb99": "a674b07a",
        "chunk-7c9b6cc2": "7749062b",
        "chunk-7e6bb447": "6c6f5888",
        "chunk-2d0da541": "7873d2af",
        "chunk-785e5c15": "7d0be788",
        "chunk-7e70687a": "bdad0977",
        "chunk-7eaa32ca": "9e9eb11a",
        "chunk-861e8704": "ae580da2",
        "chunk-9c622e8e": "f2908f59",
        "chunk-9f268f7c": "579874f8",
        "chunk-c0067614": "8ecb9193",
        "chunk-ca527496": "1e49ba4a",
        "chunk-dfcd5db6": "d6080d6f",
        "chunk-e7825b20": "970669a4",
        "chunk-45f83f58": "340e705e",
        "chunk-482cdf33": "96e750ac",
        "chunk-4cffa150": "814eb00a",
        "chunk-5138be88": "7e80eb88",
        "chunk-527caaf9": "1a8bdab7",
        "chunk-56c676d6": "8be13c05",
        "chunk-5a6a9eaf": "9fe14f87",
        "chunk-69d94ad8": "b3b9a458",
        "chunk-76714485": "1795eed8",
        "chunk-779e94bd": "dd9ea37c",
        "chunk-7dc04fde": "9816128f",
        "chunk-7e452dd1": "7d8bf432",
        "chunk-7f651697": "207b23a0",
        "chunk-840cff96": "1de5230a",
        "chunk-84354992": "e7d7d17c",
        "chunk-8b2d4026": "2367d3c1",
        "chunk-8e114246": "f9301299",
        "chunk-b077c4c6": "26cf8cc1",
        "chunk-b59846f6": "259b0b72",
        "chunk-b7d77998": "a8ca7474",
        "chunk-c292f51a": "d0242011",
        "chunk-cb219062": "c80be06d",
        "chunk-d3267e40": "9b819270",
        "chunk-dc7cbd20": "273a8232",
        "chunk-ddb59e0c": "43ca1050",
        "chunk-e3c0c388": "6789f42b",
        "chunk-e54001ae": "ac439a67",
        "chunk-f1446b7a": "123d2c3d",
      }[e] +
      ".js"
    );
  }
  function o(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.e = function (e) {
    var t = [],
      a = {
        "chunk-0263bd85": 1,
        "chunk-027888a5": 1,
        "chunk-10b9e817": 1,
        "chunk-11d01b34": 1,
        "chunk-1565f775": 1,
        "chunk-1aa6c772": 1,
        "chunk-1c441f36": 1,
        "chunk-1e376b62": 1,
        "chunk-247ce5be": 1,
        "chunk-2eb9e198": 1,
        "chunk-30ef6669": 1,
        "chunk-18986d61": 1,
        "chunk-53874084": 1,
        "chunk-35c7e110": 1,
        "chunk-3a1b63e9": 1,
        "chunk-1418e878": 1,
        "chunk-1cfb2342": 1,
        "chunk-29072305": 1,
        "chunk-29a095d3": 1,
        "chunk-30afcc01": 1,
        "chunk-30ffd467": 1,
        "chunk-35821720": 1,
        "chunk-3645261a": 1,
        "chunk-380b8168": 1,
        "chunk-45689513": 1,
        "chunk-58cdfa54": 1,
        "chunk-63afac17": 1,
        "chunk-6fbbb777": 1,
        "chunk-71c5b152": 1,
        "chunk-772eeb99": 1,
        "chunk-7c9b6cc2": 1,
        "chunk-7e70687a": 1,
        "chunk-7eaa32ca": 1,
        "chunk-861e8704": 1,
        "chunk-9c622e8e": 1,
        "chunk-9f268f7c": 1,
        "chunk-c0067614": 1,
        "chunk-ca527496": 1,
        "chunk-dfcd5db6": 1,
        "chunk-e7825b20": 1,
        "chunk-45f83f58": 1,
        "chunk-482cdf33": 1,
        "chunk-5138be88": 1,
        "chunk-56c676d6": 1,
        "chunk-5a6a9eaf": 1,
        "chunk-69d94ad8": 1,
        "chunk-779e94bd": 1,
        "chunk-7dc04fde": 1,
        "chunk-7f651697": 1,
        "chunk-840cff96": 1,
        "chunk-84354992": 1,
        "chunk-8b2d4026": 1,
        "chunk-8e114246": 1,
        "chunk-b077c4c6": 1,
        "chunk-b59846f6": 1,
        "chunk-c292f51a": 1,
        "chunk-d3267e40": 1,
        "chunk-ddb59e0c": 1,
        "chunk-e3c0c388": 1,
        "chunk-e54001ae": 1,
        "chunk-f1446b7a": 1,
      };
    c[e]
      ? t.push(c[e])
      : 0 !== c[e] &&
        a[e] &&
        t.push(
          (c[e] = new Promise(function (t, a) {
            for (
              var n =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-0263bd85": "58c02ffc",
                    "chunk-027888a5": "16ec35bc",
                    "chunk-033db653": "31d6cfe0",
                    "chunk-10b9e817": "266bb280",
                    "chunk-11d01b34": "8a65bca1",
                    "chunk-1565f775": "dc90e349",
                    "chunk-185fae0e": "31d6cfe0",
                    "chunk-1aa6c772": "82230293",
                    "chunk-1c441f36": "07dd5a49",
                    "chunk-1e376b62": "2f49d941",
                    "chunk-247ce5be": "a721d231",
                    "chunk-27557b60": "31d6cfe0",
                    "chunk-2d0ac951": "31d6cfe0",
                    "chunk-2d0bce40": "31d6cfe0",
                    "chunk-2eb9e198": "d9a5f400",
                    "chunk-30ef6669": "8defb29f",
                    "chunk-351931d3": "31d6cfe0",
                    "chunk-18986d61": "c07a232d",
                    "chunk-2d21f07e": "31d6cfe0",
                    "chunk-2d225405": "31d6cfe0",
                    "chunk-53874084": "549ccd76",
                    "chunk-453e5bd6": "31d6cfe0",
                    "chunk-672d355f": "31d6cfe0",
                    "chunk-7aefbc36": "31d6cfe0",
                    "chunk-35c7e110": "ebf7acd4",
                    "chunk-377b48cb": "31d6cfe0",
                    "chunk-3a1b63e9": "7ebc14ff",
                    "chunk-40bf6050": "31d6cfe0",
                    "chunk-064ad8c8": "31d6cfe0",
                    "chunk-1418e878": "8a2e0021",
                    "chunk-1cfb2342": "c8884ada",
                    "chunk-29072305": "f394a175",
                    "chunk-29a095d3": "cdd091d8",
                    "chunk-30afcc01": "5ccc69c2",
                    "chunk-30ffd467": "c11a8b28",
                    "chunk-35821720": "a7c812e0",
                    "chunk-3645261a": "9d9f7a6c",
                    "chunk-380b8168": "85d8b38c",
                    "chunk-45689513": "13cfcf17",
                    "chunk-58cdfa54": "900c4885",
                    "chunk-63afac17": "f340832c",
                    "chunk-65b1603f": "31d6cfe0",
                    "chunk-6fbbb777": "5ec03614",
                    "chunk-71c5b152": "f67d2dd6",
                    "chunk-772eeb99": "38119fff",
                    "chunk-7c9b6cc2": "39af85d1",
                    "chunk-7e6bb447": "31d6cfe0",
                    "chunk-2d0da541": "31d6cfe0",
                    "chunk-785e5c15": "31d6cfe0",
                    "chunk-7e70687a": "070778fc",
                    "chunk-7eaa32ca": "2abb515a",
                    "chunk-861e8704": "01525285",
                    "chunk-9c622e8e": "87aab263",
                    "chunk-9f268f7c": "6a6ba415",
                    "chunk-c0067614": "300478c0",
                    "chunk-ca527496": "0cf79890",
                    "chunk-dfcd5db6": "796006b8",
                    "chunk-e7825b20": "01323bb4",
                    "chunk-45f83f58": "16ec35bc",
                    "chunk-482cdf33": "5f31e0c3",
                    "chunk-4cffa150": "31d6cfe0",
                    "chunk-5138be88": "c057db9d",
                    "chunk-527caaf9": "31d6cfe0",
                    "chunk-56c676d6": "745d99fd",
                    "chunk-5a6a9eaf": "bad0fe9d",
                    "chunk-69d94ad8": "4a8b48ce",
                    "chunk-76714485": "31d6cfe0",
                    "chunk-779e94bd": "27fc5220",
                    "chunk-7dc04fde": "d982c0f9",
                    "chunk-7e452dd1": "31d6cfe0",
                    "chunk-7f651697": "f21fef26",
                    "chunk-840cff96": "766c12a4",
                    "chunk-84354992": "820515d2",
                    "chunk-8b2d4026": "f0f15213",
                    "chunk-8e114246": "f1b9fd48",
                    "chunk-b077c4c6": "bff056c9",
                    "chunk-b59846f6": "19bdd0f1",
                    "chunk-b7d77998": "31d6cfe0",
                    "chunk-c292f51a": "9f2eb805",
                    "chunk-cb219062": "31d6cfe0",
                    "chunk-d3267e40": "b5032f64",
                    "chunk-dc7cbd20": "31d6cfe0",
                    "chunk-ddb59e0c": "61eed777",
                    "chunk-e3c0c388": "4074e45c",
                    "chunk-e54001ae": "4aa452db",
                    "chunk-f1446b7a": "972186aa",
                  }[e] +
                  ".css",
                s = o.p + n,
                r = document.getElementsByTagName("link"),
                i = 0;
              i < r.length;
              i++
            ) {
              var l = r[i],
                u = l.getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (u === n || u === s)) return t();
            }
            var d = document.getElementsByTagName("style");
            for (i = 0; i < d.length; i++) {
              (l = d[i]), (u = l.getAttribute("data-href"));
              if (u === n || u === s) return t();
            }
            var h = document.createElement("link");
            (h.rel = "stylesheet"),
              (h.type = "text/css"),
              (h.onload = t),
              (h.onerror = function (t) {
                var n = (t && t.target && t.target.src) || s,
                  r = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + n + ")"
                  );
                (r.code = "CSS_CHUNK_LOAD_FAILED"),
                  (r.request = n),
                  delete c[e],
                  h.parentNode.removeChild(h),
                  a(r);
              }),
              (h.href = s);
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(h);
          }).then(function () {
            c[e] = 0;
          }))
        );
    var n = s[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, a) {
          n = s[e] = [t, a];
        });
        t.push((n[2] = r));
        var l,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          o.nc && u.setAttribute("nonce", o.nc),
          (u.src = i(e));
        var d = new Error();
        l = function (t) {
          (u.onerror = u.onload = null), clearTimeout(h);
          var a = s[e];
          if (0 !== a) {
            if (a) {
              var n = t && ("load" === t.type ? "missing" : t.type),
                c = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + c + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = n),
                (d.request = c),
                a[1](d);
            }
            s[e] = void 0;
          }
        };
        var h = setTimeout(function () {
          l({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = l), document.head.appendChild(u);
      }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = n),
    (o.d = function (e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          o.d(
            a,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/"),
    (o.oe = function (e) {
      throw (console.error(e), e);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var d = 0; d < l.length; d++) t(l[d]);
  var h = u;
  r.push([0, "chunk-vendors"]), a();
})({
  0: function (e, t, a) {
    e.exports = a("56d7");
  },
  "02d9": function (e, t, a) {
    "use strict";
    a("d5c0");
  },
  1: function (e, t) {},
  "1a0a": function (e, t, a) {},
  "2f6c": function (e, t, a) {
    e.exports = a.p + "img/logo-black-top.b8bd92b7.png";
  },
  "351f": function (e, t, a) {},
  "41cb": function (e, t, a) {
    "use strict";
    var n = a("2b0e"),
      c = a("8c4f"),
      s = a("4360");
    n["default"].use(c["a"]);
    const r = [
        {
          path: "/",
          name: "login",
          component: () => a.e("chunk-033db653").then(a.bind(null, "3bea")),
          meta: { login: !0 },
        },
        {
          path: "/robot",
          name: "robot",
          component: () => a.e("chunk-ddb59e0c").then(a.bind(null, "eb28")),
          meta: { login: !0 },
        },
        {
          path: "/electricity-service",
          name: "electricityService",
          component: () => a.e("chunk-30ef6669").then(a.bind(null, "2bd1")),
          meta: { login: !0 },
        },
        {
          path: "/traffic",
          name: "traffic",
          component: () => a.e("chunk-b7d77998").then(a.bind(null, "8ca8")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/babil",
          name: "babil",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-30afcc01")]).then(
              a.bind(null, "53cd")
            ),
        },
        {
          path: "/user-auth",
          name: "userAuth",
          component: () => a.e("chunk-e3c0c388").then(a.bind(null, "f6a1")),
          meta: { userAuth: !0 },
        },
        {
          path: "/dashboard",
          name: "adminMain",
          component: () => a.e("chunk-1e376b62").then(a.bind(null, "d4b9")),
        },
        {
          path: "/data-match",
          name: "dataMatch",
          component: () => a.e("chunk-2d0bce40").then(a.bind(null, "2a50")),
          children: [
            {
              path: "/data-match/file-upload",
              name: "fileUpload",
              component: () => a.e("chunk-7e452dd1").then(a.bind(null, "83bf")),
            },
            {
              path: "/data-match/choose-clos",
              name: "chooseClos",
              component: () => a.e("chunk-7f651697").then(a.bind(null, "7c8d")),
            },
            {
              path: "/data-match/download-file",
              name: "downloadFile",
              component: () => a.e("chunk-c292f51a").then(a.bind(null, "f6cc")),
            },
          ],
        },
        {
          path: "/upload-clean",
          name: "uploadClean",
          component: () => a.e("chunk-56c676d6").then(a.bind(null, "3d45")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/download-clean",
          name: "downloadClean",
          component: () => a.e("chunk-b59846f6").then(a.bind(null, "1c94")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/upload-files",
          name: "UploadFilesView",
          component: () => a.e("chunk-185fae0e").then(a.bind(null, "3bd7")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/org-services",
          name: "orgServices",
          component: () => a.e("chunk-84354992").then(a.bind(null, "1358")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/org-services-specific",
          name: "orgServicesSpecific",
          component: () => a.e("chunk-3a1b63e9").then(a.bind(null, "75f9")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/monorgs",
          name: "monorgs",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-380b8168")]).then(
              a.bind(null, "66c0")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/org-service-sharing",
          name: "orgServiceSharing",
          component: () => a.e("chunk-10b9e817").then(a.bind(null, "11cc")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/org-service-view/:Viewid/:TID",
          name: "orgService.view",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-dfcd5db6")]).then(
              a.bind(null, "b597")
            ),
          meta: { citizen: !0 },
        },
        {
          path: "/org-service-work-view/:Viewid/:TID",
          name: "orgServiceWork",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-9c622e8e")]).then(
              a.bind(null, "49a8")
            ),
          meta: { citizen: !0 },
        },
        {
          path: "/org-services-add-edit",
          name: "orgServicesAddEdit",
          component: () => a.e("chunk-5138be88").then(a.bind(null, "99a6")),
          meta: { citizen: !0 },
        },
        {
          path: "/org-service-add-edite-view/:Viewid/:TID",
          name: "orgServiceAddEdite.view",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-30ffd467")]).then(
              a.bind(null, "ed24")
            ),
          meta: { citizen: !0 },
        },
        {
          path: "/create-org-services",
          name: "createServices",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-1cfb2342")]).then(
              a.bind(null, "ea4c")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/create-org-sharing",
          name: "createSharing",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-7eaa32ca")]).then(
              a.bind(null, "a60d")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/create-org-cross",
          name: "createCross",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-772eeb99")]).then(
              a.bind(null, "b5c6")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/create-add-edit-service",
          name: "createAddEditService",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-6fbbb777")]).then(
              a.bind(null, "0e84")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/update-org-services/:id",
          name: "updateServices.edit",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-29072305")]).then(
              a.bind(null, "42f3")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/sharing-services/:id",
          name: "ShairingServices.list",
          component: () => a.e("chunk-f1446b7a").then(a.bind(null, "8a2f")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/all-update-services",
          name: "updateServices",
          component: () => a.e("chunk-45f83f58").then(a.bind(null, "1bb1")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/all-corss-services",
          name: "corssServices",
          component: () => a.e("chunk-b077c4c6").then(a.bind(null, "6002")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/all-work-services",
          name: "workServices",
          component: () => a.e("chunk-027888a5").then(a.bind(null, "2ee8")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/request-view/:id",
          name: "requestView",
          component: () => a.e("chunk-1aa6c772").then(a.bind(null, "26ac")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/specific-clean-view",
          name: "specificClean",
          component: () => a.e("chunk-247ce5be").then(a.bind(null, "ce1b")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/redundancy-processing",
          name: "redundancyProcessing",
          component: () => a.e("chunk-11d01b34").then(a.bind(null, "a97a")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/salary-differences",
          name: "salaryDifferences",
          component: () => a.e("chunk-cb219062").then(a.bind(null, "ac42")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/create-table-service",
          name: "createTableService",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-63afac17")]).then(
              a.bind(null, "471d")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/edit-table-service",
          name: "editTableService",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-35821720")]).then(
              a.bind(null, "715d")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/upload-data-table",
          name: "uploadDataTable",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-65b1603f")]).then(
              a.bind(null, "381c")
            ),
        },
        {
          path: "/data",
          name: "data",
          component: () => a.e("chunk-0263bd85").then(a.bind(null, "9352")),
        },
        {
          path: "/auto-match",
          name: "autoMatch",
          component: () => a.e("chunk-2d0ac951").then(a.bind(null, "19c6")),
        },
        {
          path: "/export-data",
          name: "exportData",
          component: () => a.e("chunk-dc7cbd20").then(a.bind(null, "d4c3")),
        },
        {
          path: "/qr",
          name: "qr",
          component: () => a.e("chunk-5a6a9eaf").then(a.bind(null, "5424")),
        },
        {
          path: "/test",
          name: "test",
          component: () => a.e("chunk-840cff96").then(a.bind(null, "2762")),
        },
        {
          path: "/lots",
          name: "lots",
          component: () => a.e("chunk-1c441f36").then(a.bind(null, "4538")),
        },
        {
          path: "/border",
          name: "border",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-71c5b152")]).then(
              a.bind(null, "ec0c")
            ),
        },
        {
          path: "/border2",
          name: "border2",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-45689513")]).then(
              a.bind(null, "0550")
            ),
        },
        {
          path: "/border3",
          name: "border3",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-c0067614")]).then(
              a.bind(null, "1ec1")
            ),
        },
        {
          path: "/border4",
          name: "border4",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-7c9b6cc2")]).then(
              a.bind(null, "036d")
            ),
        },
        {
          path: "/border7",
          name: "border7",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-9f268f7c")]).then(
              a.bind(null, "8ea5")
            ),
        },
        {
          path: "/border8",
          name: "border8",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-58cdfa54")]).then(
              a.bind(null, "47ff")
            ),
        },
        {
          path: "/tax",
          name: "tax",
          component: () => a.e("chunk-d3267e40").then(a.bind(null, "6f10")),
        },
        {
          path: "/border-cam",
          name: "borderCam",
          component: () => a.e("chunk-8e114246").then(a.bind(null, "5b33")),
        },
        {
          path: "/cert_check",
          name: "cert_check",
          component: () =>
            Promise.all([
              a.e("chunk-351931d3"),
              a.e("chunk-2d21f07e"),
              a.e("chunk-2d225405"),
            ]).then(a.bind(null, "e433")),
        },
        {
          path: "/trafficSearch",
          name: "trafficSearch",
          component: () => a.e("chunk-8b2d4026").then(a.bind(null, "4713")),
        },
        {
          path: "/border5",
          name: "border5",
          component: () =>
            Promise.all([
              a.e("chunk-351931d3"),
              a.e("chunk-2d21f07e"),
              a.e("chunk-53874084"),
            ]).then(a.bind(null, "4fce")),
        },
        {
          path: "/decleration",
          name: "decleration",
          component: () => a.e("chunk-76714485").then(a.bind(null, "14b0")),
        },
        {
          path: "/employeededuct",
          name: "employeededuct",
          component: () =>
            Promise.all([a.e("chunk-351931d3"), a.e("chunk-18986d61")]).then(
              a.bind(null, "8249")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/voting",
          name: "voting",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-3645261a")]).then(
              a.bind(null, "b372")
            ),
        },
        {
          path: "/multi-search",
          name: "multiSearch",
          component: () => a.e("chunk-482cdf33").then(a.bind(null, "1d12")),
        },
        {
          path: "/not-table",
          name: "notTable",
          component: () => a.e("chunk-1565f775").then(a.bind(null, "b3b7")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/report",
          name: "report",
          component: () =>
            Promise.all([a.e("chunk-351931d3"), a.e("chunk-7aefbc36")]).then(
              a.bind(null, "e022")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/report-add-edit",
          name: "reportAddEdit",
          component: () =>
            Promise.all([a.e("chunk-351931d3"), a.e("chunk-672d355f")]).then(
              a.bind(null, "cf3a")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/report-identities",
          name: "reportIdentities",
          component: () => a.e("chunk-27557b60").then(a.bind(null, "cb89")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/fastResponse",
          name: "fastResponse",
          component: () =>
            Promise.all([a.e("chunk-351931d3"), a.e("chunk-453e5bd6")]).then(
              a.bind(null, "5369")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/org-fexchange-carts",
          name: "orgFexchangeCarts",
          component: () => a.e("chunk-7dc04fde").then(a.bind(null, "c1b4")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/org-fexchange-view/:Viewid",
          name: "orgFexchangeView",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-ca527496")]).then(
              a.bind(null, "8c85")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/org-fexchange-send/:Viewid",
          name: "orgFexchangeSend",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-29a095d3")]).then(
              a.bind(null, "6aae")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/update-fexchange/:id",
          name: "updateFexchange",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-7e70687a")]).then(
              a.bind(null, "7dba")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/create-org-fexchange",
          name: "createFexchangee",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-1418e878")]).then(
              a.bind(null, "476a")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/profile",
          name: "profile",
          component: () => a.e("chunk-69d94ad8").then(a.bind(null, "5c5b")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/edit-account",
          name: "editAccount",
          component: () => a.e("chunk-527caaf9").then(a.bind(null, "9e0a")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/edit-personal",
          name: "editPersonal",
          component: () => a.e("chunk-377b48cb").then(a.bind(null, "3707")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/LogSystem",
          name: "LogSystem",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-861e8704")]).then(
              a.bind(null, "eb56")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/all-content-list",
          name: "allContentList",
          component: () => a.e("chunk-2eb9e198").then(a.bind(null, "a6ac")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/users-page",
          name: "usersPage",
          component: () =>
            Promise.all([
              a.e("chunk-40bf6050"),
              a.e("chunk-7e6bb447"),
              a.e("chunk-2d0da541"),
            ]).then(a.bind(null, "6aaa")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/add-user",
          name: "usersPage.add",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-e7825b20")]).then(
              a.bind(null, "156c")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/edit-user/:id",
          name: "usersPage.edit",
          component: () =>
            Promise.all([a.e("chunk-40bf6050"), a.e("chunk-064ad8c8")]).then(
              a.bind(null, "d640")
            ),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/user-info/:id",
          name: "usersPage.show",
          component: () => a.e("chunk-e54001ae").then(a.bind(null, "57d0")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/orgs-page",
          name: "orgsPage",
          component: () =>
            Promise.all([
              a.e("chunk-40bf6050"),
              a.e("chunk-7e6bb447"),
              a.e("chunk-785e5c15"),
            ]).then(a.bind(null, "1563")),
          meta: { requiresAuth: !0 },
        },
        {
          path: "/login-err",
          name: "loginErr",
          component: () => a.e("chunk-35c7e110").then(a.bind(null, "b41f")),
        },
        {
          path: "/citizin-error",
          name: "citizinError",
          component: () => a.e("chunk-4cffa150").then(a.bind(null, "e111")),
        },
        {
          path: "/:pathMatch(.*)*",
          name: "404",
          component: () => a.e("chunk-779e94bd").then(a.bind(null, "108b")),
          meta: { requiresAuth: !0 },
        },
      ],
      i = new c["a"]({ mode: "history", base: "/", routes: r });
    i.beforeEach((e, t, a) => {
      if (e.matched.some((e) => e.meta.requiresAuth)) {
        if (!s["a"].getters.isAuth) return a("/");
        if (0 == s["a"].getters.user.ur_login) return a("/login-err");
        null == s["a"].getters.user.OrgID &&
          1 == s["a"].getters.user.ur_login &&
          location.assign(s["a"].getters.currentUR);
      } else if (e.matched.some((e) => e.meta.login)) {
        if (s["a"].getters.isAuth) {
          if (0 == s["a"].getters.user.ur_login) return a("/login-err");
          a("/dashboard");
        }
      } else if (e.matched.some((e) => e.meta.userAuth)) {
        if (s["a"].getters.isAuth) {
          if (1 == s["a"].getters.user.ur_login && s["a"].getters.user.OrgID)
            return a("dashboard");
        } else if (s["a"].getters.isAuth) return a("/");
      } else if (e.matched.some((e) => e.meta.citizen)) {
        if (!s["a"].getters.isAuth) return a("/");
        if (0 == s["a"].getters.user.ur_login) return a("/login-err");
        null == s["a"].getters.user.OrgID &&
          1 == s["a"].getters.user.ur_login &&
          (console.log("User OrgID is null. Navigating to default route.", t),
          console.log("Current URL:", window.location.href),
          s["a"].commit("setcurrentUR", e.path),
          console.log("this.prevRoute.name", e.path),
          console.log(s["a"].getters.currentUR));
      }
      a();
    }),
      (t["a"] = i);
  },
  4360: function (e, t, a) {
    "use strict";
    var n = a("2f62"),
      c = a("2b0e"),
      s = a("0e44"),
      r = a("bc3a"),
      i = a.n(r),
      o = a("3d20"),
      l = a.n(o);
    const u = "https://xdata.ur.gov.iq/api/",
      d = {
        user: null,
        token: null,
        roles: [],
        currentPage: null,
        perPage: 10,
        uri: null,
        nameData: null,
        currentURL: null,
        selectedItem: null,
        count: null,
        countnot: null,
        records: null,
      },
      h = {
        user: (e) => e.user,
        token: (e) => e.token,
        isAuth: (e) => !!e.user,
        privilege: (e) => (e.user ? e.user.user_permissions : null),
        roles: (e) => e.roles,
        currentPage: (e) => e.currentPage,
        perPage: (e) => e.perPage,
        uri: (e) => e.uri,
        nameData: (e) => e.nameData,
        currentUR: (e) => e.currentUR,
        selectedItem: (e) => e.selectedItem,
        count: (e) => e.count,
        countnot: (e) => e.countnot,
        records: (e) => e.records,
      },
      f = {
        logoutAction({ commit: e, state: t, getters: a }) {
          let n = c["default"].$loading.show({
            loader: "dots",
            transition: "fade",
            color: "#c30734",
          });
          i.a
            .post(
              u + "auth/logout",
              {},
              { headers: { Authorization: "Bearer " + t.token } }
            )
            .then((c) => {
              200 == c.status &&
                (n.hide(),
                l.a
                  .fire({
                    icon: "success",
                    title: "تم تسجيل الخروج",
                    showConfirmButton: !1,
                    timer: 1e3,
                  })
                  .then(() => {
                    a.isAuth,
                      t.nameData,
                      null != t.user &&
                        (null != t.user.OrgID
                          ? location.assign("/")
                          : location.assign("http://ur.gov.iq/")),
                      e("logout");
                  }));
            });
        },
        logoutAuth({ commit: e, state: t }) {
          l.a
            .fire({
              icon: "warning",
              title: "الجلسة منتهية",
              showConfirmButton: !1,
              timer: 1500,
            })
            .then(() => {
              h.isAuth,
                t.nameData,
                null != t.user &&
                  (null != t.user.OrgID
                    ? location.assign("/")
                    : location.assign("http://ur.gov.iq/")),
                e("logout");
            });
        },
        setUserAction({ commit: e }, t) {
          e("setUser", t);
        },
        setTokenAction({ commit: e }, t) {
          e("setToken", t);
        },
        setRolesAction({ commit: e }, t) {
          e("setRoles", t);
        },
        setCurrentPageAction({ commit: e }, t) {
          e("setCurrentPage", t);
        },
        setPerPageAction({ commit: e }, t) {
          e("setPerPage", t);
        },
        setUriAction({ commit: e }, t) {
          e("setUri", t);
        },
        setnameData({ commit: e }, t) {
          e("setnameData", t);
        },
        setcurrentUR({ commit: e }, t) {
          e("currentUR", t);
        },
        setselectedItem({ commit: e }, t) {
          e("setselectedItem", t);
        },
        setCount({ commit: e }, t) {
          e("setCount", t);
        },
        setCountnot({ commit: e }, t) {
          e("setCountnot", t);
        },
        setRecords({ commit: e }, t) {
          e("setRecords", t);
        },
      },
      b = {
        setUser(e, t) {
          e.user = t;
        },
        setToken(e, t) {
          e.token = t;
        },
        setRoles(e, t) {
          e.roles = t;
        },
        logout(e) {
          (e.user = null), (e.token = null), (e.roles = null);
        },
        setCurrentPage(e, t) {
          e.currentPage = t;
        },
        setPerPage(e, t) {
          e.perPage = t;
        },
        setUri(e, t) {
          e.uri = t;
        },
        setnameData(e, t) {
          e.nameData = t;
        },
        setcurrentUR(e, t) {
          e.currentUR = t;
        },
        setselectedItem(e, t) {
          e.selectedItem = t;
        },
        setCount(e, t) {
          e.count = t;
        },
        setCountnot(e, t) {
          e.countnot = t;
        },
        setRecords(e, t) {
          e.records = t;
        },
      };
    var m = { state: d, getters: h, actions: f, mutations: b };
    c["default"].use(n["a"]);
    t["a"] = new n["a"].Store({
      modules: { auth: m },
      plugins: [Object(s["a"])()],
    });
  },
  4967: function (e, t, a) {
    "use strict";
    a("6160");
  },
  "4c7d": function (e, t, a) {
    "use strict";
    a("9741");
  },
  5055: function (e, t, a) {},
  "56d7": function (e, t, a) {
    "use strict";
    a.r(t);
    a("0cdd");
    var n = a("2b0e"),
      c = function () {
        var e = this,
          t = e._self._c;
        return t("div", { attrs: { id: "app" } }, [
          e.isAuth && 1 == e.user.ur_login && e.user.OrgID
            ? t("div", [e.isAuth ? t("admin-theme") : e._e()], 1)
            : t(
                "div",
                [
                  t("navbar"),
                  t(
                    "div",
                    { staticClass: "page-wrapper" },
                    [t("router-view")],
                    1
                  ),
                  t("footer-page"),
                ],
                1
              ),
        ]);
      },
      s = [],
      r = function () {
        var e = this,
          t = e._self._c;
        return t("div", { staticClass: "emp-theme" }, [
          t("nav", { staticClass: "side-navbar" }, [
            t("div", { staticClass: "side-navbar-wrapper" }, [
              e._m(0),
              t("div", { staticClass: "main-menu" }, [
                t("h5", { staticClass: "sidenav-heading" }, [
                  e._v("لوحة التحكم"),
                ]),
                t(
                  "ul",
                  {
                    staticClass: "side-menu list-unstyled",
                    attrs: { id: "side-main-menu" },
                  },
                  [
                    t("li", [
                      e._m(1),
                      t(
                        "ul",
                        {
                          staticClass: "collapse list-unstyled",
                          attrs: { id: "services" },
                        },
                        [
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      path: "/data-match/file-upload",
                                      params: { co: 1 },
                                    },
                                  },
                                },
                                [
                                  t("i", {
                                    staticClass: "fa fa-file-excel-o mx-2",
                                  }),
                                  e._v("تقاطع البيانات "),
                                ]
                              ),
                            ],
                            1
                          ),
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/org-services" } },
                                [
                                  t("i", {
                                    staticClass: "fa fa-folder-open mx-2",
                                  }),
                                  e._v("خدمات البحث "),
                                ]
                              ),
                            ],
                            1
                          ),
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/org-service-sharing" } },
                                [
                                  t("i", {
                                    staticClass: "fa fa-folder-open mx-2",
                                  }),
                                  e._v("خدمات تشاركية "),
                                ]
                              ),
                            ],
                            1
                          ),
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/org-services-add-edit" } },
                                [
                                  t("i", {
                                    staticClass: "fa fa-folder-open mx-2",
                                  }),
                                  e._v("خدمات تعديل البيانات "),
                                ]
                              ),
                            ],
                            1
                          ),
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/org-fexchange-carts" } },
                                [
                                  t("i", {
                                    staticClass: "fa fa-folder-open mx-2",
                                  }),
                                  e._v("خدمات مراسلة "),
                                ]
                              ),
                            ],
                            1
                          ),
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/org-services-specific" } },
                                [
                                  t("i", {
                                    staticClass: "fa fa-folder-open mx-2",
                                  }),
                                  e._v("خدمات مخصصة "),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                    t("li", [
                      e._m(2),
                      t(
                        "ul",
                        {
                          staticClass: "collapse list-unstyled",
                          attrs: { id: "data" },
                        },
                        [
                          t(
                            "li",
                            [
                              t("router-link", { attrs: { to: "/data" } }, [
                                t("i", { staticClass: "fa fa-download mx-2" }),
                                e._v("استيراد بيانات "),
                              ]),
                            ],
                            1
                          ),
                          e.privilege.find((e) => "IsSuperAdmin" == e) ||
                          e.privilege.find((e) => "IsAdmin" == e)
                            ? t(
                                "li",
                                [
                                  t(
                                    "router-link",
                                    { attrs: { to: "/export-data" } },
                                    [
                                      t("i", {
                                        staticClass: "fa fa-upload mx-2",
                                      }),
                                      e._v("تصدير البيانات "),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          e.privilege.find((e) => "IsSuperAdmin" == e) ||
                          e.privilege.find((e) => "IsAdmin" == e)
                            ? t(
                                "li",
                                [
                                  t(
                                    "router-link",
                                    { attrs: { to: "/create-table-service" } },
                                    [
                                      t("i", {
                                        staticClass: "fa fa-table mx-2",
                                      }),
                                      e._v("إنشاء جدول "),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          e.privilege.find((e) => "IsSuperAdmin" == e) ||
                          e.privilege.find((e) => "IsAdmin" == e)
                            ? t(
                                "li",
                                [
                                  t(
                                    "router-link",
                                    { attrs: { to: "/edit-table-service" } },
                                    [
                                      t("i", {
                                        staticClass: "fa fa-table mx-2",
                                      }),
                                      e._v("تعديل جدول "),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          e.privilege.find((e) => "IsSuperAdmin" == e) ||
                          e.privilege.find((e) => "IsAdmin" == e)
                            ? t(
                                "li",
                                [
                                  t(
                                    "router-link",
                                    { attrs: { to: "/upload-data-table" } },
                                    [
                                      t("i", {
                                        staticClass: "fa fa-database mx-2",
                                      }),
                                      e._v("خزن البيانات "),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                        ]
                      ),
                    ]),
                    t("li", [
                      e._m(3),
                      t(
                        "ul",
                        {
                          staticClass: "collapse list-unstyled",
                          attrs: { id: "clean" },
                        },
                        [
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/specific-clean-view" } },
                                [
                                  t("i", { staticClass: "fa fa-eraser mx-2" }),
                                  e._v("تنظيف مخصص "),
                                ]
                              ),
                            ],
                            1
                          ),
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/redundancy-processing" } },
                                [
                                  t("i", { staticClass: "fa fa-bars mx-2" }),
                                  e._v("معالجة التكرارات "),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                    t("li", [
                      e.privilege.find((e) => "IsSuperAdmin" == e) ||
                      e.privilege.find((e) => "IsAdmin" == e)
                        ? t(
                            "a",
                            {
                              attrs: {
                                href: "#contactUs",
                                "aria-expanded": "false",
                                "data-bs-toggle": "collapse",
                              },
                            },
                            [
                              t("i", {
                                staticClass: "fa fa-edit",
                                attrs: { "aria-hidden": "true" },
                              }),
                              e._v("إنشاء خدمة "),
                            ]
                          )
                        : e._e(),
                      t(
                        "ul",
                        {
                          staticClass: "collapse list-unstyled",
                          attrs: { id: "contactUs" },
                        },
                        [
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/create-org-services" } },
                                [
                                  t("i", {
                                    staticClass: "fa fa-plus-square-o mx-2",
                                  }),
                                  e._v("اضافة خدمة بحث "),
                                ]
                              ),
                            ],
                            1
                          ),
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/create-org-cross" } },
                                [
                                  t("i", {
                                    staticClass: "fa fa-plus-square-o mx-2",
                                  }),
                                  e._v("اضافة خدمة تقاطع "),
                                ]
                              ),
                            ],
                            1
                          ),
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/create-org-sharing" } },
                                [
                                  t("i", {
                                    staticClass: "fa fa-plus-square-o mx-2",
                                  }),
                                  e._v("اضافة خدمة تشاركية "),
                                ]
                              ),
                            ],
                            1
                          ),
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/create-add-edit-service" } },
                                [
                                  t("i", {
                                    staticClass: "fa fa-plus-square-o mx-2",
                                  }),
                                  e._v("اضافة خدمة تعديل البيانات "),
                                ]
                              ),
                            ],
                            1
                          ),
                          t(
                            "li",
                            [
                              t(
                                "router-link",
                                { attrs: { to: "/create-org-fexchange" } },
                                [
                                  t("i", {
                                    staticClass: "fa fa-plus-square-o mx-2",
                                  }),
                                  e._v("اضافة خدمة مراسلة "),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                    e.privilege.find((e) => "IsUser" != e)
                      ? t("li", [
                          e._m(4),
                          t(
                            "ul",
                            {
                              staticClass: "collapse list-unstyled",
                              attrs: { id: "manageSys" },
                            },
                            [
                              t(
                                "li",
                                [
                                  t(
                                    "router-link",
                                    { attrs: { to: "/all-update-services" } },
                                    [
                                      t("i", {
                                        staticClass: "fa fa-server mx-2",
                                      }),
                                      e._v("ادارة الخدمات "),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              e.privilege.find((e) => "IsUser" != e)
                                ? t(
                                    "li",
                                    [
                                      t(
                                        "router-link",
                                        { attrs: { to: "/users-page" } },
                                        [
                                          t("i", {
                                            staticClass:
                                              "fa fa-user-circle mx-2",
                                          }),
                                          e._v("إدارة الموظفين"),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : e._e(),
                              e.privilege.find((e) => "IsUser" != e)
                                ? t(
                                    "li",
                                    [
                                      t(
                                        "router-link",
                                        { attrs: { to: "/orgs-page" } },
                                        [
                                          t("i", {
                                            staticClass: "fa fa-building mx-2",
                                          }),
                                          e._v("الدوائر "),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : e._e(),
                            ]
                          ),
                        ])
                      : e._e(),
                    e.privilege.find((e) => "IsUser" != e)
                      ? t(
                          "li",
                          [
                            t("router-link", { attrs: { to: "/LogSystem" } }, [
                              t("i", { staticClass: "fa fa-link" }),
                              e._v("حركات المستخدمين "),
                            ]),
                          ],
                          1
                        )
                      : e._e(),
                    t(
                      "li",
                      [
                        t("router-link", { attrs: { to: "/qr" } }, [
                          t("i", { staticClass: "fa fa-qrcode" }),
                          e._v("قراءةرمز الوصول السريع (QR) "),
                        ]),
                      ],
                      1
                    ),
                    e.privilege.find((e) => "IsUser" != e)
                      ? t("li", [
                          e._m(5),
                          t(
                            "ul",
                            {
                              staticClass: "collapse list-unstyled",
                              attrs: { id: "reportSys" },
                            },
                            [
                              t(
                                "li",
                                [
                                  t(
                                    "router-link",
                                    { attrs: { to: "/report" } },
                                    [
                                      t("i", {
                                        staticClass: "fa fa-file-text-o mx-2",
                                      }),
                                      e._v(" تقارير بحثية "),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              e.privilege.find((e) => "IsUser" != e)
                                ? t(
                                    "li",
                                    [
                                      t(
                                        "router-link",
                                        { attrs: { to: "/report-add-edit" } },
                                        [
                                          t("i", {
                                            staticClass:
                                              "fa fa-file-text-o mx-2",
                                          }),
                                          e._v(" تقارير اضافة وتعديل "),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : e._e(),
                              e.privilege.find((e) => "IsUser" != e)
                                ? t(
                                    "li",
                                    [
                                      t(
                                        "router-link",
                                        { attrs: { to: "/report-identities" } },
                                        [
                                          t("i", {
                                            staticClass:
                                              "fa fa-file-text-o mx-2",
                                          }),
                                          e._v(" تقارير الهويات "),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : e._e(),
                              e.privilege.find((e) => "IsUser" != e)
                                ? t(
                                    "li",
                                    [
                                      t(
                                        "router-link",
                                        { attrs: { to: "/fastResponse" } },
                                        [
                                          t("i", {
                                            staticClass:
                                              "fa fa-file-text-o mx-2",
                                          }),
                                          e._v(" تقارير متابعة الوثائق "),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : e._e(),
                            ]
                          ),
                        ])
                      : e._e(),
                  ]
                ),
              ]),
            ]),
          ]),
          t(
            "div",
            { staticClass: "page" },
            [
              t(
                "header",
                { staticClass: "header sticky-top", attrs: { id: "header" } },
                [
                  t("nav", { staticClass: "navbar" }, [
                    t("div", { staticClass: "container-fluid" }, [
                      t(
                        "div",
                        {
                          staticClass:
                            "navbar-holder d-flex align-items-center justify-content-between",
                        },
                        [
                          t("div", { staticClass: "navbar-header" }, [
                            e._m(6),
                            t(
                              "a",
                              {
                                staticClass: "navbar-brand",
                                attrs: { href: "#" },
                              },
                              [
                                t(
                                  "div",
                                  {
                                    staticClass:
                                      "brand-text d-none d-md-inline-block",
                                  },
                                  [
                                    t(
                                      "strong",
                                      { staticClass: "text-danger" },
                                      [e._v(e._s(e.user.OrgName))]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                          t(
                            "ul",
                            {
                              staticClass:
                                "nav-menu list-unstyled d-flex flex-md-row",
                            },
                            [
                              t(
                                "li",
                                [
                                  t("notification", {
                                    on: { getNotify: e.getNotify },
                                  }),
                                ],
                                1
                              ),
                              e.isAuth
                                ? t(
                                    "li",
                                    { staticClass: "nav-item dropdown" },
                                    [
                                      t(
                                        "a",
                                        {
                                          staticClass:
                                            "nav-link language dropdown-toggle",
                                          attrs: {
                                            id: "languages",
                                            rel: "nofollow",
                                            "data-target": "#",
                                            href: "#",
                                            "data-bs-toggle": "dropdown",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false",
                                          },
                                        },
                                        [
                                          t("img", {
                                            staticClass:
                                              "img-fluid rounded-circle",
                                            staticStyle: { width: "36px" },
                                            attrs: {
                                              src: a("8fc4"),
                                              alt: "English",
                                            },
                                          }),
                                          t(
                                            "span",
                                            {
                                              staticClass:
                                                "d-none d-sm-inline-block",
                                            },
                                            [
                                              e._v(
                                                " مرحباً " +
                                                  e._s(e.user.UsFirstName) +
                                                  " " +
                                                  e._s(e.user.UsSecondName)
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t(
                                        "ul",
                                        {
                                          staticClass: "dropdown-menu",
                                          attrs: {
                                            "aria-labelledby": "languages",
                                          },
                                        },
                                        [
                                          t(
                                            "li",
                                            [
                                              t(
                                                "router-link",
                                                {
                                                  staticClass: "dropdown-item",
                                                  attrs: {
                                                    rel: "nofollow",
                                                    to: "/",
                                                  },
                                                },
                                                [
                                                  t("i", {
                                                    staticClass:
                                                      "fa fa-home fa-custom",
                                                  }),
                                                  t("span", [
                                                    e._v("الصفحة الرئيسية"),
                                                  ]),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          t("li", [
                                            t(
                                              "a",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: {
                                                  rel: "nofollow",
                                                  href: "#",
                                                },
                                                on: { click: e.logoutAction },
                                              },
                                              [
                                                t("i", {
                                                  staticClass:
                                                    "fa fa-sign-out fa-custom",
                                                }),
                                                t("span", [
                                                  e._v("تسجيل خروج "),
                                                ]),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  )
                                : t("li", { staticClass: "nav-item" }, [
                                    e._m(7),
                                  ]),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
              t("router-view", { attrs: { notify_id: e.notifyID } }),
              t("div", { staticClass: "watermark" }, [
                e._v(e._s(e.user.UserID)),
              ]),
              t("footer", { staticClass: "main-footer" }, [
                t("div", { staticClass: "container-fluid" }, [
                  t("div", { staticClass: "row" }, [
                    t("div", { staticClass: "col-sm-6" }, [
                      t("p", [
                        e._v(
                          " الامانة العامة لمجلس الوزراء © " +
                            e._s(e.copyDate) +
                            " "
                        ),
                      ]),
                    ]),
                    e._m(8),
                  ]),
                ]),
              ]),
            ],
            1
          ),
        ]);
      },
      i = [
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            {
              staticClass:
                "sidenav-header d-flex align-items-center justify-content-center",
            },
            [
              t("div", { staticClass: "sidenav-header-inner text-center" }, [
                t("img", { attrs: { src: a("2f6c"), alt: "person" } }),
              ]),
              t("div", { staticClass: "sidenav-header-logo" }, [
                t(
                  "a",
                  {
                    staticClass: "brand-small text-center",
                    attrs: { href: "index.html" },
                  },
                  [
                    t("img", {
                      staticClass: "img-fluid rounded-circle",
                      attrs: { src: a("60f1"), alt: "person" },
                    }),
                  ]
                ),
              ]),
            ]
          );
        },
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "a",
            {
              attrs: {
                href: "#services",
                "aria-expanded": "false",
                "data-bs-toggle": "collapse",
              },
            },
            [
              t("i", {
                staticClass: "fa fa-reorder",
                attrs: { "aria-hidden": "true" },
              }),
              e._v("الخدمات "),
            ]
          );
        },
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "a",
            {
              attrs: {
                href: "#data",
                "aria-expanded": "false",
                "data-bs-toggle": "collapse",
              },
            },
            [
              t("i", {
                staticClass: "fa fa-th",
                attrs: { "aria-hidden": "true" },
              }),
              e._v("إدارة البيانات "),
            ]
          );
        },
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "a",
            {
              attrs: {
                href: "#clean",
                "aria-expanded": "false",
                "data-bs-toggle": "collapse",
              },
            },
            [
              t("i", {
                staticClass: "fa fa-gears",
                attrs: { "aria-hidden": "true" },
              }),
              e._v("معالجة البيانات "),
            ]
          );
        },
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "a",
            {
              attrs: {
                href: "#manageSys",
                "aria-expanded": "false",
                "data-bs-toggle": "collapse",
              },
            },
            [
              t("i", {
                staticClass: "fa fa-cog",
                attrs: { "aria-hidden": "true" },
              }),
              e._v("ادارة النظام "),
            ]
          );
        },
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "a",
            {
              attrs: {
                href: "#reportSys",
                "aria-expanded": "false",
                "data-bs-toggle": "collapse",
              },
            },
            [
              t("i", {
                staticClass: "fa fa-file-o",
                attrs: { "aria-hidden": "true" },
              }),
              e._v("التقارير "),
            ]
          );
        },
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "a",
            { staticClass: "menu-btn", attrs: { id: "toggle-btn", href: "#" } },
            [
              t("i", {
                staticClass: "fa fa-bars",
                attrs: { "aria-hidden": "true" },
              }),
            ]
          );
        },
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "a",
            {
              staticClass: "nav-link language dropdown-toggle",
              attrs: {
                id: "languages",
                rel: "nofollow",
                href: "#",
                "aria-haspopup": "true",
                "aria-expanded": "false",
              },
            },
            [
              t("img", {
                staticClass: "img-fluid rounded-circle",
                staticStyle: { width: "36px" },
                attrs: { src: a("8fc4"), alt: "English" },
              }),
              t("span", { staticClass: "d-none d-sm-inline-block" }, [
                e._v("تسجيل الدخول"),
              ]),
            ]
          );
        },
        function () {
          var e = this,
            t = e._self._c;
          return t("div", { staticClass: "col-sm-6 text-right" }, [
            t("p", [e._v("بوابة العراق الخدمية")]),
          ]);
        },
      ],
      o = a("1157"),
      l = a.n(o),
      u = a("bc3a"),
      d = a.n(u),
      h = a("2f62"),
      f = function () {
        var e = this,
          t = e._self._c;
        return t("div", [
          t(
            "i",
            {
              staticClass: "position-relative",
              staticStyle: { "font-size": "32px" },
              attrs: {
                id: "countDropdown",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
              },
            },
            [
              e._m(0),
              t(
                "span",
                {
                  staticClass:
                    "position-relative top-0 start-31 translate-middle badge rounded-pill bg-danger",
                  staticStyle: { "font-size": "10px" },
                },
                [e._v(" " + e._s(e.countnot) + " ")]
              ),
            ]
          ),
          t(
            "div",
            {
              staticClass: "dropdown-menu pb-0 ml-5",
              attrs: { "aria-labelledby": "countDropdown" },
            },
            [
              0 == e.countnot
                ? t("a", { staticClass: "py-1" }, [
                    t(
                      "p",
                      {
                        staticClass: "mb-0",
                        staticStyle: { "font-size": "18px" },
                      },
                      [e._v(" لا توجد اشعارات جديدة ")]
                    ),
                  ])
                : t("a", { staticClass: "py-1" }, [
                    t(
                      "p",
                      {
                        staticClass: "mb-0",
                        staticStyle: { "font-size": "18px" },
                      },
                      [e._v(" لديك (" + e._s(e.countnot) + ") اشعارات جديدة ")]
                    ),
                  ]),
              e._l(e.records, function (a, n) {
                return t(
                  "div",
                  { key: n },
                  [
                    t("div", { staticClass: "dropdown-divider" }),
                    t(
                      "router-link",
                      {
                        staticClass: "dropdown-item",
                        attrs: { to: { name: "notTable" } },
                      },
                      [
                        t(
                          "p",
                          {
                            staticClass: "text-dark mb-0",
                            staticStyle: { "font-size": "16px" },
                          },
                          [
                            t(
                              "span",
                              {
                                staticClass: "d-block",
                                staticStyle: { color: "rgb(28, 92, 147)" },
                              },
                              [e._v(" " + e._s(a.EventType) + " ")]
                            ),
                            e._v(" " + e._s(a.TimeStamp) + " "),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                );
              }),
              t("div", { staticClass: "dropdown-divider" }),
              0 != e.countnot
                ? t(
                    "div",
                    [
                      t(
                        "router-link",
                        {
                          staticClass: "dropdown-item mb-2",
                          staticStyle: { "text-align": "center" },
                          attrs: {
                            to: { name: "notTable", params: { notid: 1 } },
                          },
                        },
                        [
                          t(
                            "p",
                            {
                              staticStyle: { "font-size": "16px" },
                              on: {
                                click: function (t) {
                                  return e.$emit("getNotify", 1);
                                },
                              },
                            },
                            [e._v("عرض الكل")]
                          ),
                        ]
                      ),
                    ],
                    1
                  )
                : e._e(),
            ],
            2
          ),
        ]);
      },
      b = [
        function () {
          var e = this,
            t = e._self._c;
          return t("a", { attrs: { href: "#" } }, [
            t("img", { attrs: { src: a("7dae"), alt: "English" } }),
          ]);
        },
      ];
    a("14d9"), a("3d20");
    const m = "https://xdata.ur.gov.iq/api/";
    var p = {
        name: "notification",
        title: "صفحة الاشعارات",
        components: {},
        data() {
          return { hideErr: [], componentKey: 0 };
        },
        mounted() {
          this.getItems();
        },
        computed: {
          ...Object(h["c"])([
            "token",
            "user",
            "privilege",
            ,
            "countnot",
            "records",
          ]),
        },
        created() {
          setInterval(() => {
            this.getItems();
          }, 2e4);
        },
        methods: {
          ...Object(h["b"])(["setCountnot", "setRecords"]),
          getItems() {
            d()({
              method: "get",
              url: m + "plat/not-download-files",
              headers: { Authorization: "Bearer " + this.token },
            })
              .then((e) => {
                this.setCountnot(e.data.count), this.setRecords(e.data.records);
              })
              .catch((e) => {
                this.hideErr.push(e);
              });
          },
        },
      },
      k = p,
      g = (a("af69"), a("0c7c")),
      v = Object(g["a"])(k, f, b, !1, null, "3b4ea328", null),
      C = v.exports;
    const _ = "https://xdata.ur.gov.iq/api/";
    var A = {
        components: { notification: C },
        name: "adminTheme",
        data() {
          return {
            fullScreen: !1,
            copyDate: null,
            loading: !1,
            notifyID: null,
            hideErr: [],
          };
        },
        computed: {
          ...Object(h["c"])([
            "user",
            "token",
            "isAuth",
            "roles",
            "avatar",
            "privilege",
          ]),
        },
        methods: {
          ...Object(h["b"])(["logoutAction"]),
          getNotify(e) {
            this.notifyID = e;
          },
          error() {
            d()({
              method: "get",
              url: _ + "auth/error",
              headers: { Authorization: "Bearer " + this.token },
            });
          },
        },
        mounted() {
          this.error(),
            (this.copyDate = new Date().getFullYear()),
            l()(document).on("click", "ul li", function () {
              l()(this).addClass("active").siblings().removeClass("active");
            }),
            l()("#toggle-btn").on("click", function (e) {
              e.preventDefault(),
                l()(window).outerWidth() > 1194
                  ? (l()("nav.side-navbar").toggleClass("shrink"),
                    l()(".page").toggleClass("active"),
                    l()("nav.side-navbar-en").toggleClass("shrink"),
                    l()(".pageen").toggleClass("active"))
                  : (l()("nav.side-navbar").toggleClass("show-sm"),
                    l()(".page").toggleClass("active-sm"),
                    l()("nav.side-navbar-en").toggleClass("show-sm"),
                    l()(".pageen").toggleClass("active-sm"));
            });
        },
      },
      w = A,
      x = (a("4c7d"), Object(g["a"])(w, r, i, !1, null, "ab3a7b24", null)),
      y = x.exports,
      S = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          { staticClass: "page" },
          [
            t(
              "header",
              { staticClass: "sticky-top", attrs: { id: "header" } },
              [
                t("nav", { staticClass: "navbar navbar-expand-lg bg-light" }, [
                  t("div", { staticClass: "container" }, [
                    e._m(0),
                    e._m(1),
                    t(
                      "div",
                      {
                        staticClass: "collapse navbar-collapse",
                        attrs: { id: "navbarSupportedContent" },
                      },
                      [
                        t(
                          "ul",
                          { staticClass: "navbar-nav me-auto mb-2 mb-md-0" },
                          [
                            t(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                t(
                                  "router-link",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { rel: "nofollow", to: "/" },
                                  },
                                  [
                                    t("i", {
                                      staticClass: "fa fa-home fa-custom",
                                    }),
                                    t("span", [e._v("الصفحة الرئيسية")]),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                        e.isAuth
                          ? t("div", { staticClass: "navbar-text d-flex" }, [
                              t(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: { click: e.logout },
                                },
                                [
                                  t("i", {
                                    staticClass: "fa fa-sign-out fa-custom",
                                  }),
                                  e._v(" تسجيل خروج "),
                                ]
                              ),
                            ])
                          : e._e(),
                      ]
                    ),
                  ]),
                ]),
              ]
            ),
            t("router-view"),
            t("footer", { staticClass: "main-footer" }, [
              t("div", { staticClass: "container-fluid" }, [
                t("div", { staticClass: "row" }, [
                  t("div", { staticClass: "col-sm-6" }, [
                    t("p", [
                      e._v(
                        " الامانة العامة لمجلس الوزراء © " +
                          e._s(e.copyDate) +
                          " "
                      ),
                    ]),
                  ]),
                  e._m(2),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      q = [
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "a",
            {
              staticClass: "navbar-brand",
              attrs: { href: "https://ur.gov.iq/" },
            },
            [
              t("img", {
                staticClass: "ur-logo",
                attrs: { src: "/static-img/ar-ur-logo.png" },
              }),
            ]
          );
        },
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "button",
            {
              staticClass: "navbar-toggler",
              attrs: {
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
            },
            [t("span", { staticClass: "navbar-toggler-icon" })]
          );
        },
        function () {
          var e = this,
            t = e._self._c;
          return t("div", { staticClass: "col-sm-6 text-right" }, [
            t("p", [e._v("بوابة العراق الخدمية")]),
          ]);
        },
      ],
      P = {
        name: "adminTheme2",
        data() {
          return { fullScreen: !1, copyDate: null, loading: !1, hideErr: [] };
        },
        computed: {
          ...Object(h["c"])([
            "user",
            "token",
            "isAuth",
            "roles",
            "avatar",
            "privilege",
          ]),
        },
        methods: {
          ...Object(h["b"])(["logoutAction"]),
          toHome() {
            location.assign("/index");
          },
          logout() {
            this.logoutAction();
          },
          requestFullScreen() {
            this.fullScreen = !0;
            var e = document.body,
              t =
                e.requestFullScreen ||
                e.webkitRequestFullScreen ||
                e.mozRequestFullScreen ||
                e.msRequestFullScreen;
            if (t) t.call(e);
            else if ("undefined" !== typeof window.ActiveXObject) {
              var a = new ActiveXObject("XXXXXXXXXXXXX");
              null !== a && a.SendKeys("{F11}");
            }
          },
          cancelFullScreen() {
            this.fullScreen = !1;
            var e = document,
              t =
                e.cancelFullScreen ||
                e.webkitCancelFullScreen ||
                e.mozCancelFullScreen ||
                e.exitFullscreen ||
                e.webkitExitFullscreen;
            if (t) t.call(e);
            else if ("undefined" !== typeof window.ActiveXObject) {
              var a = new ActiveXObject("XXXXXXXXXXXXX");
              null !== a && a.SendKeys("{F11}");
            }
          },
        },
        mounted() {
          (this.copyDate = new Date().getFullYear()),
            l()(document).on("click", "ul li", function () {
              l()(this).addClass("active").siblings().removeClass("active");
            }),
            l()("#toggle-btn").on("click", function (e) {
              e.preventDefault(),
                l()(window).outerWidth() > 1194
                  ? (l()("nav.side-navbar").toggleClass("shrink"),
                    l()(".page").toggleClass("active"),
                    l()("nav.side-navbar-en").toggleClass("shrink"),
                    l()(".pageen").toggleClass("active"))
                  : (l()("nav.side-navbar").toggleClass("show-sm"),
                    l()(".page").toggleClass("active-sm"),
                    l()("nav.side-navbar-en").toggleClass("show-sm"),
                    l()(".pageen").toggleClass("active-sm"));
            });
        },
      },
      I = P,
      O = (a("02d9"), Object(g["a"])(I, S, q, !1, null, "cda853d0", null)),
      D = O.exports,
      R = function () {
        var e = this,
          t = e._self._c;
        return t(
          "header",
          { staticClass: "sticky-top", attrs: { id: "header" } },
          [
            t("nav", { staticClass: "navbar navbar-expand-lg bg-light" }, [
              t("div", { staticClass: "container" }, [
                e._m(0),
                e._m(1),
                t(
                  "div",
                  {
                    staticClass: "collapse navbar-collapse",
                    attrs: { id: "navbarSupportedContent" },
                  },
                  [
                    t(
                      "ul",
                      { staticClass: "navbar-nav me-auto mb-2 mb-md-0" },
                      [
                        t("li", { staticClass: "nav-item" }, [
                          t(
                            "a",
                            {
                              staticClass: "nav-link active",
                              attrs: { href: e.mainURL + "#hero" },
                            },
                            [
                              e._v("الرئيسة "),
                              t("span", { staticClass: "sr-only" }, [
                                e._v("(current)"),
                              ]),
                            ]
                          ),
                        ]),
                      ]
                    ),
                    e.isAuth
                      ? t("div", { staticClass: "navbar-text d-flex" }, [
                          t(
                            "a",
                            { attrs: { href: "#" }, on: { click: e.logout } },
                            [
                              t("i", {
                                staticClass: "fa fa-sign-out fa-custom",
                              }),
                              e._v(" تسجيل خروج "),
                            ]
                          ),
                        ])
                      : e._e(),
                  ]
                ),
              ]),
            ]),
          ]
        );
      },
      j = [
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "a",
            {
              staticClass: "navbar-brand",
              attrs: { href: "https://ur.gov.iq/" },
            },
            [
              t("img", {
                staticClass: "ur-logo",
                attrs: { src: "/static-img/ar-ur-logo.png" },
              }),
            ]
          );
        },
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "button",
            {
              staticClass: "navbar-toggler",
              attrs: {
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
            },
            [t("span", { staticClass: "navbar-toggler-icon" })]
          );
        },
      ];
    const U = "https://ur.gov.iq/index/";
    var E = {
        name: "NavBar",
        data() {
          return { mainURL: U };
        },
        computed: { ...Object(h["c"])(["user", "token", "isAuth"]) },
        methods: {
          ...Object(h["b"])(["logoutAction"]),
          logout() {
            this.logoutAction();
          },
        },
      },
      F = E,
      T = (a("e4e5"), Object(g["a"])(F, R, j, !1, null, "8965710c", null)),
      z = T.exports,
      L = function () {
        var e = this,
          t = e._self._c;
        return t("footer", { attrs: { id: "footer" } }, [
          t("div", { staticClass: "footer-top" }, [
            t("div", { staticClass: "container" }, [
              t("div", { staticClass: "row" }, [
                t("div", { staticClass: "col-sm-8 footer-links" }, [
                  t("ul", [
                    t("li", [
                      t("a", { attrs: { href: e.urMain + "#hero" } }, [
                        e._v("الرئيسة"),
                      ]),
                    ]),
                  ]),
                ]),
                e._m(0),
              ]),
            ]),
          ]),
          t("div", { staticClass: "footer-bottom" }, [
            t("div", { staticClass: "container" }, [
              t("div", { staticClass: "row" }, [
                t("div", { staticClass: "col-md-6 col-12" }, [
                  t("div", { staticClass: "copyright" }, [
                    t("p", [
                      t(
                        "a",
                        {
                          attrs: {
                            href: "" + e.urMain,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                        },
                        [
                          e._v(
                            " © الامانة العامة لمجلس الوزراء / مركز البيانات الوطني " +
                              e._s(e.copyDate) +
                              " "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      N = [
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            {
              staticClass:
                "col-sm-4 social-links text-center text-md-right pt-3 pt-md-0",
            },
            [
              t(
                "a",
                {
                  staticClass: "twitter",
                  attrs: {
                    href: "https://t.me/IRAQIGMC",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t("i", { staticClass: "fa fa-telegram" })]
              ),
              t(
                "a",
                {
                  staticClass: "facebook",
                  attrs: {
                    href: "https://www.facebook.com/profile.php?id=100075951978581",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t("i", { staticClass: "fa fa-facebook" })]
              ),
              t(
                "a",
                {
                  staticClass: "google-plus",
                  attrs: {
                    href: "https://www.youtube.com/user/Iraqigov",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t("i", { staticClass: "fa fa-youtube" })]
              ),
              t(
                "a",
                {
                  staticClass: "google-plus",
                  attrs: {
                    href: "https://twitter.com/ur_gov_iq?s=11&t=SuJkNRFXA5zED6RKvCXBow",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [
                  t("img", {
                    attrs: { src: "/static-img/twitterx-24.png", width: "57%" },
                  }),
                ]
              ),
            ]
          );
        },
      ];
    const M = "https://ur.gov.iq/index/";
    var B = {
        name: "FooterPage",
        data() {
          return { copyDate: null, urMain: M };
        },
        mounted() {
          this.copyDate = new Date().getFullYear();
        },
      },
      V = B,
      X = (a("4967"), Object(g["a"])(V, L, N, !1, null, "bcb8af9e", null)),
      G = X.exports,
      H = {
        name: "app",
        components: { AdminTheme: y, AdminTheme2: D, Navbar: z, FooterPage: G },
        computed: {
          ...Object(h["c"])(["token", "user", "isAuth", "privilege"]),
        },
      },
      K = H,
      Y = (a("f1a2"), Object(g["a"])(K, c, s, !1, null, "fb380cca", null)),
      W = Y.exports,
      Z = a("41cb"),
      Q = a("4360"),
      J = a("1704"),
      $ = a.n(J),
      ee = (a("542c"), a("4a7a")),
      te = a.n(ee);
    a("6dfc");
    function ae(e) {
      const { title: t } = e.$options;
      if (t) return "function" === typeof t ? t.call(e) : t;
    }
    var ne = {
        created() {
          const e = ae(this);
          e && (document.title = e);
        },
      },
      ce = a("8b84"),
      se = a.n(ce),
      re = a("18fa"),
      ie = a.n(re),
      oe = (a("e40d"), a("6c42")),
      le = (a("da96"), a("1dce")),
      ue = a.n(le),
      de = a("f206"),
      he = a.n(de),
      fe =
        (a("77ed"),
        a("1a0a"),
        a("5055"),
        a("e0ee"),
        a("6665"),
        a("a647"),
        a("8e5f")),
      be = (a("e607"), a("bd0e"));
    a("7ce0");
    function me(e) {
      n["default"].$toast.warning(e, {
        position: "top-right",
        timeout: 6e3,
        closeOnClick: !1,
        pauseOnFocusLoss: !0,
        pauseOnHover: !0,
        draggable: !0,
        draggablePercent: 0.6,
        showCloseButtonOnHover: !1,
        hideProgressBar: !1,
        closeButton: "button",
        icon: !0,
        rtl: !0,
      });
    }
    function pe() {
      d.a.interceptors.response.use(
        function (e) {
          return e;
        },
        function (e) {
          switch (e.response.status) {
            case 401:
              Q["a"].dispatch("logoutAuth");
              break;
            case 403:
              me("لا توجد صلاحيات كافية ");
              break;
            case 404:
              me("لايمكن للخادم العثور على المحتوى الذي طلبته");
              break;
            case 422:
              me(e.response.data.error);
              break;
            case 500:
              me("حدث خطأ ما، يرجى إعادة المحاولة");
              break;
            case 503:
              me("الخدمة غير متوفرة");
              break;
          }
          return Promise.reject(e);
        }
      );
    }
    d.a.defaults.headers.post["X-CSRF-TOKEN"] = Q["a"].state.token;
    var ke = a("b73b"),
      ge = a.n(ke),
      ve = a("bb6f"),
      Ce = a.n(ve),
      _e = a("237f");
    a("5274");
    n["default"].use($.a, { fontSize: "12px" }),
      n["default"].use(te.a),
      n["default"].mixin(ne),
      (n["default"].config.productionTip = !1),
      n["default"].use(se.a),
      n["default"].use(ie.a),
      n["default"].use(oe["a"], {
        transition: "Vue-Toastification__fade",
        maxToasts: 20,
        newestOnTop: !0,
      }),
      n["default"].use(ue.a),
      n["default"].use(he.a),
      pe(),
      n["default"].use(ge.a),
      n["default"].use(_e["a"]),
      n["default"].use(Ce.a),
      new n["default"]({
        router: Z["a"],
        store: Q["a"],
        Multiselect: fe["Multiselect"],
        VueDatePicker: be["a"],
        VueCryptojs: ge.a,
        render: (e) => e(W),
      }).$mount("#app");
  },
  "60f1": function (e, t, a) {
    e.exports = a.p + "img/logo-hide-side.675b1bfe.png";
  },
  6160: function (e, t, a) {},
  6665: function (e, t, a) {},
  "7dae": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB40lEQVR4nL3WT4hOURjH8Q+Ltxl/ZjLJ4g0lsUGShdQkO1lYMhHGBgtlrdnYsDIrSuRPLFiIaUixmULCxr+VvLIgf8qKDU1kdOpRU95e773n3vnW6Z57zvM8v+65z3nOoRwH8Akfsd8MsQaT2Ivh6K+eCeGdaE17fxNjtbIZ45jCSZyKfhrbVIfgAtzED1zGIdzGLRzERXzHDfRXJdqHF7iHJR3sFofNU8yvQvgCnqC3C9vesD2bK7ocv7CqYNb/xLIc4ZFYvqLcx5Ec4XEcK+F3HGM5wo8jg4uSfB7lCL8uWRx24VWO8BdsKeG3FZ/Lis6KOryhhO/GKDalWIHfWFjCd1H4pu1YmH2Z/6kVJ1hhxnA6Q/hM1O5CrIyKlapQWdZGjPTLuqIR+/eafK7Hfm78zzAdaXfxFgMVCA9ErDudjsulkRDpWGuqjmbEbIXGP4zGEveonp6IfaLd5BC+YTtmVyiaYu2I2OnZlsNh8AGX4ljcjcEoBs24BqVbyV/6YqwZNoPhMxIx0hX4a8TuSH98fdrDE3gXpXOqyzYZPhMRYyj3HjYPRyNR1mF9tNR/FnPJphZGcaXN+NWYq43hWMY508bm4j321CncwEs8wLZoD/G8m+qUS6pG5yNbUzsXWV2IP3JHblX8w6Z0AAAAAElFTkSuQmCC";
  },
  "8fc4": function (e, t, a) {
    e.exports = a.p + "img/avatar-profile.b1bbec49.png";
  },
  9741: function (e, t, a) {},
  a29a: function (e, t, a) {},
  a647: function (e, t, a) {},
  af69: function (e, t, a) {
    "use strict";
    a("351f");
  },
  c7f3: function (e, t, a) {},
  d5c0: function (e, t, a) {},
  e0ee: function (e, t, a) {},
  e4e5: function (e, t, a) {
    "use strict";
    a("a29a");
  },
  f1a2: function (e, t, a) {
    "use strict";
    a("c7f3");
  },
});
