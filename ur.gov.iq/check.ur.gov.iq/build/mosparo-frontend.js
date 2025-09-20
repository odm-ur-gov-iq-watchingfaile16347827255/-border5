(() => {
  "use strict";
  var e = {};
  function t(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var i =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != i) {
          var s,
            n,
            o,
            r,
            a = [],
            l = !0,
            c = !1;
          try {
            if (((o = (i = i.call(e)).next), 0 === t)) {
              if (Object(i) !== i) return;
              l = !1;
            } else
              for (
                ;
                !(l = (s = o.call(i)).done) &&
                (a.push(s.value), a.length !== t);
                l = !0
              );
          } catch (e) {
            (c = !0), (n = e);
          } finally {
            try {
              if (!l && null != i.return && ((r = i.return()), Object(r) !== r))
                return;
            } finally {
              if (c) throw n;
            }
          }
          return a;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return i(e, t);
          var s = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === s && e.constructor && (s = e.constructor.name),
            "Map" === s || "Set" === s
              ? Array.from(e)
              : "Arguments" === s ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
              ? i(e, t)
              : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
    return s;
  }
  function s(e) {
    return (
      (s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      s(e)
    );
  }
  function n(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t &&
        (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        i.push.apply(i, s);
    }
    return i;
  }
  function o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? n(Object(i), !0).forEach(function (t) {
            r(e, t, i[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : n(Object(i)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
          });
    }
    return e;
  }
  function r(e, t, i) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != s(e) || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(e, t || "default");
            if ("object" != s(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == s(t) ? t : t + "";
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = i),
      e
    );
  }
  (e.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (e.g.mosparo = function (e, i, n, r, a) {
      var l = this;
      return (
        (this.containerId = e),
        (this.url = i),
        (this.uuid = n),
        (this.publicKey = r),
        (this.defaultOptions = {
          name: "",
          allowBrowserValidation: !0,
          inputFieldSelector: "[name]:not(.mosparo__ignored-field)",
          designMode: !1,
          loadCssResource: !1,
          cssResourceUrl: "",
          requestSubmitTokenOnInit: !0,
          customMessages: {},
          language: null,
          onCheckForm: null,
          onResetState: null,
          onAbortSubmit: null,
          onSwitchToInvisible: null,
          onValidateFormInvisible: null,
          onSubmitFormInvisible: null,
          doSubmitFormInvisible: null,
        }),
        (this.options = o(o({}, this.defaultOptions), a)),
        (this.invisible = !1),
        (this.id = ""),
        (this.formElement = null),
        (this.containerElement = null),
        (this.checkboxElement = null),
        (this.checkboxFieldElement = null),
        (this.submitTokenElement = null),
        (this.validationTokenElement = null),
        (this.labelElement = null),
        (this.accessibleStatusElement = null),
        (this.errorMessageElement = null),
        (this.hpFieldElement = null),
        (this.loaderContainerElement = null),
        (this.countdownInterval = null),
        (this.countdownSeconds = 0),
        (this.isLocked = !1),
        (this.checkedFormData = null),
        (this.stateResetted = !0),
        (this.messages = {
          locale: "en",
          label:
            "I accept that the form entries are checked for spam and stored encrypted for 14 days.",
          accessibilityCheckingData:
            "The spam protection verifies your data. Please wait.",
          accessibilityDataValid:
            "Your data are valid. You can submit the form.",
          accessibilityProtectedBy:
            "This form is protected from spam by mosparo.",
          errorGotNoToken: "mosparo returned no submit token.",
          errorInternalError: "An error occurred. Please try again.",
          errorNoSubmitTokenAvailable:
            "No submit token available. Validation of this form is not possible.",
          errorSpamDetected: "Your data got catched by our spam protection.",
          errorLockedOut:
            "You are locked out. Please try again after %datetime%",
          errorDelay:
            "Your request was delayed. Please wait for %seconds% seconds.",
          hpLeaveEmpty: "Leave this field blank",
        }),
        (this.init = function () {
          if (
            ((this.id = this.getRandomHash()),
            (this.containerElement = document.getElementById(this.containerId)),
            this.containerElement)
          ) {
            this.options.loadCssResource && this.loadCssResource(),
              this.containerElement.classList.add(
                "mosparo__container",
                "mosparo__" + this.uuid
              ),
              this.containerElement.setAttribute("lang", this.messages.locale);
            for (
              var e = document.querySelectorAll("form"),
                t = this.containerElement.parentNode;
              t && !this.isTargetElement(e, t);

            )
              t = t.parentNode;
            if (null !== t) {
              (this.formElement = t),
                this.options.allowBrowserValidation &&
                  this.formElement.hasAttribute("novalidate") &&
                  this.formElement.removeAttribute("novalidate");
              var i = document.createElement("div");
              i.classList.add("mosparo__row"),
                this.containerElement.appendChild(i);
              var s = document.createElement("div");
              s.classList.add("mosparo__checkbox_column"), i.appendChild(s);
              var n = "_mosparo_checkboxField_" + this.id;
              (this.checkboxFieldElement = document.createElement("input")),
                this.checkboxFieldElement.setAttribute("type", "checkbox"),
                this.checkboxFieldElement.setAttribute("required", "required"),
                this.checkboxFieldElement.setAttribute("value", "1"),
                this.checkboxFieldElement.setAttribute("id", n),
                this.checkboxFieldElement.setAttribute(
                  "name",
                  "" !== this.options.name ? this.options.name : n
                ),
                s.appendChild(this.checkboxFieldElement),
                (this.checkboxElement = document.createElement("div")),
                this.checkboxElement.classList.add("mosparo__checkbox"),
                s.appendChild(this.checkboxElement);
              var o = document.createElement("div");
              o.classList.add("mosparo__icon-checkmark"),
                this.checkboxElement.appendChild(o);
              var r = document.createElement("div");
              r.classList.add("mosparo__icon-failure"),
                this.checkboxElement.appendChild(r);
              var a = document.createElement("div");
              a.classList.add("mosparo__content_column"),
                i.appendChild(a),
                (this.labelElement = document.createElement("label")),
                this.labelElement.classList.add("mosparo__label"),
                this.labelElement.setAttribute("for", n),
                a.appendChild(this.labelElement),
                (this.errorMessageElement = document.createElement("div")),
                this.errorMessageElement.classList.add(
                  "mosparo__error-message"
                ),
                a.appendChild(this.errorMessageElement),
                (this.accessibleStatusElement = document.createElement("div")),
                this.accessibleStatusElement.classList.add(
                  "mosparo__accessible-message"
                ),
                this.accessibleStatusElement.setAttribute(
                  "aria-describedby",
                  n
                ),
                a.appendChild(this.accessibleStatusElement),
                (this.submitTokenElement = document.createElement("input")),
                this.submitTokenElement.setAttribute(
                  "name",
                  "_mosparo_submitToken"
                ),
                this.submitTokenElement.setAttribute("type", "hidden"),
                this.submitTokenElement.classList.add("mosparo__submit-token"),
                this.checkboxElement.appendChild(this.submitTokenElement),
                (this.validationTokenElement = document.createElement("input")),
                this.validationTokenElement.setAttribute(
                  "name",
                  "_mosparo_validationToken"
                ),
                this.validationTokenElement.setAttribute("type", "hidden"),
                this.validationTokenElement.classList.add(
                  "mosparo__validation-token"
                ),
                this.checkboxElement.appendChild(this.validationTokenElement),
                this.options.designMode
                  ? (this.containerElement.classList.add(
                      "mosparo__design-mode"
                    ),
                    this.checkboxFieldElement.removeAttribute("required"),
                    (this.labelElement.textContent = this.getMessage("label")))
                  : (this.formElement
                      .querySelectorAll(this.options.inputFieldSelector)
                      .forEach(function (e) {
                        e !== l.validationTokenElement &&
                          e.addEventListener("change", function () {
                            l.resetState();
                          });
                      }),
                    this.formElement.addEventListener("submit", this.onSubmit),
                    this.formElement.addEventListener("reset", function () {
                      l.resetState(), l.requestSubmitToken();
                    }),
                    this.checkboxFieldElement.addEventListener(
                      "change",
                      function () {
                        l.checkForm();
                      }
                    ),
                    this.checkboxFieldElement.addEventListener(
                      "focus",
                      function () {
                        l.containerElement.classList.add("mosparo__focus");
                      }
                    ),
                    this.checkboxFieldElement.addEventListener(
                      "blur",
                      function () {
                        l.containerElement.classList.remove("mosparo__focus");
                      }
                    ),
                    this.checkboxElement.addEventListener("click", function () {
                      l.checkForm();
                    }),
                    this.options.requestSubmitTokenOnInit &&
                      this.requestSubmitToken());
            } else this.debug("Cannot find the form container.");
          } else this.debug("Cannot find the mosparo container.");
        }),
        (this.loadCssResource = function () {
          var e = this.options.cssResourceUrl;
          "" === e && (e = this.url + "/resources/" + this.uuid + ".css");
          var t = document.createElement("link");
          (t.rel = "stylesheet"),
            (t.type = "text/css"),
            (t.href = e),
            (t.media = "all"),
            document.getElementsByTagName("head")[0].appendChild(t);
        }),
        (this.getRandomHash = function () {
          return Math.random().toString().substring(2, 16);
        }),
        (this.requestSubmitToken = function () {
          this.errorMessageElement.classList.remove(
            "mosparo__error-message-visible"
          ),
            this.containerElement.classList.add("mosparo__loading");
          var e = {
            pageTitle: document.title,
            pageUrl: document.location.href,
          };
          null !== this.options.language &&
            (e.language = this.options.language),
            this.send(
              "/api/v1/frontend/request-submit-token",
              e,
              function (e) {
                e.messages && l.updateMessages(e.messages),
                  e.invisible
                    ? l.switchToInvisible()
                    : e.showLogo && l.addAccessibilityLogo(),
                  e.submitToken
                    ? (l.containerElement.classList.remove("mosparo__loading"),
                      (l.submitTokenElement.value = e.submitToken),
                      "honeypotFieldName" in e &&
                        e.honeypotFieldName &&
                        l.addHoneypotField(e.honeypotFieldName))
                    : e.security
                    ? (l.processSecurityResponse(e),
                      "delay" === e.type &&
                        setTimeout(function () {
                          l.requestSubmitToken();
                        }, 1e3 * (e.forSeconds + 1)))
                    : (l.containerElement.classList.remove("mosparo__loading"),
                      l.containerElement.classList.add("mosparo__invalid"),
                      l.showError(l.getMessage("errorGotNoToken")));
              },
              function () {
                l.containerElement.classList.remove("mosparo__loading"),
                  l.containerElement.classList.add("mosparo__invalid"),
                  l.showError(l.getMessage("errorInternalError"));
              }
            );
        }),
        (this.onSubmit = function (e) {
          l.invisible
            ? (l.checkboxFieldElement.checked && l.verifyCheckedFormData()) ||
              (l.loaderContainerElement.classList.add(
                "mosparo__loader-visible"
              ),
              e.preventDefault(),
              e.stopImmediatePropagation(),
              l.formElement.dispatchEvent(
                new CustomEvent("validate-form-invisible", { bubbles: !0 })
              ),
              null !== l.options.onValidateFormInvisible &&
                l.options.onValidateFormInvisible(),
              l.checkForm())
            : l.verifyCheckedFormData() ||
              (e.preventDefault(),
              e.stopImmediatePropagation(),
              l.formElement.dispatchEvent(
                new CustomEvent("submit-aborted", { bubbles: !0 })
              ),
              null !== l.options.onAbortSubmit && l.options.onAbortSubmit(),
              l.resetState());
        }),
        (this.checkForm = function () {
          if (!this.isLocked) {
            if ("" === this.submitTokenElement.value)
              return (
                this.containerElement.classList.add("mosparo__invalid"),
                void this.showError(
                  this.getMessage("errorNoSubmitTokenAvailable")
                )
              );
            (this.stateResetted = !1),
              this.containerElement.classList.remove("mosparo__invalid"),
              this.containerElement.classList.remove("mosparo__checked"),
              this.errorMessageElement.classList.remove(
                "mosparo__error-message-visible"
              ),
              this.containerElement.classList.add("mosparo__loading"),
              this.updateAccessibleStatus(
                this.getMessage("accessibilityCheckingData")
              );
            var e = JSON.stringify(this.getFormData()),
              t = { formData: e, submitToken: this.submitTokenElement.value };
            (this.checkedFormData = e),
              this.send(
                "/api/v1/frontend/check-form-data",
                t,
                function (e) {
                  if (
                    (l.containerElement.classList.remove("mosparo__loading"),
                    e.valid
                      ? ((l.checkboxFieldElement.checked = !0),
                        l.setHpFieldElementDisabled(!0),
                        l.containerElement.classList.add("mosparo__checked"),
                        (l.validationTokenElement.value = e.validationToken),
                        l.invisible ||
                          l.updateAccessibleStatus(
                            l.getMessage("accessibilityDataValid")
                          ))
                      : e.security
                      ? ((l.checkboxFieldElement.checked = !1),
                        l.setHpFieldElementDisabled(!1),
                        l.processSecurityResponse(e),
                        "delay" === e.type &&
                          setTimeout(function () {
                            l.requestSubmitToken();
                          }, 1e3 * (e.forSeconds + 1)))
                      : ((l.checkboxFieldElement.checked = !1),
                        l.setHpFieldElementDisabled(!1),
                        l.containerElement.classList.add("mosparo__invalid"),
                        (l.validationTokenElement.value = ""),
                        l.showError(l.getMessage("errorSpamDetected"))),
                    l.formElement.dispatchEvent(
                      new CustomEvent("form-checked", {
                        bubbles: !0,
                        detail: { valid: e.valid },
                      })
                    ),
                    null !== l.options.onCheckForm &&
                      l.options.onCheckForm(e.valid),
                    l.invisible)
                  ) {
                    if (e.valid)
                      if (
                        ((l.checkboxFieldElement.checked = !0),
                        l.formElement.dispatchEvent(
                          new CustomEvent("submit-form-invisible", {
                            bubbles: !0,
                          })
                        ),
                        null !== l.options.onSubmitFormInvisible &&
                          l.options.onSubmitFormInvisible(),
                        null !== l.options.doSubmitFormInvisible)
                      )
                        l.options.doSubmitFormInvisible();
                      else {
                        var t =
                          l.formElement.querySelectorAll('[type="submit"]');
                        t.length ? t.item(0).click() : l.formElement.submit();
                      }
                    l.loaderContainerElement.classList.remove(
                      "mosparo__loader-visible"
                    );
                  }
                },
                function () {
                  (l.checkboxFieldElement.checked = !1),
                    l.setHpFieldElementDisabled(!1),
                    l.containerElement.classList.remove("mosparo__loading"),
                    l.containerElement.classList.add("mosparo__invalid"),
                    l.showError(l.getMessage("errorInternalError"));
                }
              );
          }
        }),
        (this.verifyCheckedFormData = function () {
          var e = JSON.stringify(this.getFormData());
          return this.checkedFormData === e;
        }),
        (this.getFormData = function () {
          var e = [],
            t = [],
            i = [];
          return (
            this.formElement
              .querySelectorAll(this.options.inputFieldSelector)
              .forEach(function (n) {
                var o = n.getAttribute("name");
                if (0 !== o.indexOf("_mosparo_") && void 0 !== n.value) {
                  i.push(o);
                  var r = n.tagName.toLowerCase(),
                    a = r;
                  if ("input" === a || "button" === a) {
                    var l = n.getAttribute("type");
                    if ("submit" === l || "reset" === l || "button" === l)
                      return;
                    if (
                      "password" === l ||
                      "file" === l ||
                      "hidden" === l ||
                      "checkbox" === l ||
                      "radio" === l
                    )
                      return void (-1 === t.indexOf(o) && t.push(o));
                    a += "[" + l + "]";
                  }
                  a += "." + o;
                  var c = n.value;
                  o.indexOf("[]") === o.length - 2 &&
                    ((o = o.substring(0, o.length - 2)),
                    (c = "" === c ? [] : [c])),
                    "select" === r &&
                      null !== n.getAttribute("multiple") &&
                      ((c = []),
                      n
                        .querySelectorAll("option:checked")
                        .forEach(function (e) {
                          c.push(e.value);
                        }));
                  var m = e.find(function (e, t) {
                    if (e.name === o) return !0;
                  });
                  void 0 === m
                    ? e.push({ name: o, value: c, fieldPath: a })
                    : ("object" !== s(m.value) && (m.value = [m.value]),
                      (m.value = m.value.concat(c)));
                }
              }),
            this.formElement.querySelectorAll("[name]").forEach(function (e) {
              var s = e.getAttribute("name");
              0 !== s.indexOf("_mosparo_") &&
                -1 === i.indexOf(s) &&
                -1 === t.indexOf(s) &&
                t.push(s);
            }),
            { fields: e, ignoredFields: t }
          );
        }),
        (this.resetState = function () {
          this.stateResetted ||
            ((this.checkboxFieldElement.checked = !1),
            this.setHpFieldElementDisabled(!1),
            this.containerElement.classList.remove("mosparo__checked"),
            (this.validationTokenElement.value = ""),
            (this.stateResetted = !0),
            this.isLocked ||
              (this.containerElement.classList.remove("mosparo__invalid"),
              this.errorMessageElement.classList.remove(
                "mosparo__error-message-visible"
              )),
            l.formElement.dispatchEvent(new CustomEvent("state-reseted")),
            null !== l.options.onResetState && l.options.onResetState());
        }),
        (this.send = function (e, t, i, s) {
          var n = this.url + e;
          t.publicKey = this.publicKey;
          var o = new XMLHttpRequest();
          (o.onreadystatechange = function () {
            if (4 === this.readyState)
              if (200 === this.status) {
                var e = JSON.parse(this.responseText);
                i(e);
              } else s(this.responseText);
          }),
            o.open("POST", n, !0),
            o.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded"
            ),
            o.send(this.stringifyData(t));
        }),
        (this.addHoneypotField = function (e) {
          if (null === this.hpFieldElement) {
            (this.hpFieldElement = document.createElement("input")),
              this.hpFieldElement.setAttribute("type", "text"),
              this.hpFieldElement.setAttribute("name", e),
              this.hpFieldElement.setAttribute("autocomplete", "one-time-code"),
              this.hpFieldElement.setAttribute("tabindex", "-1"),
              this.hpFieldElement.setAttribute(
                "title",
                this.getMessage("hpLeaveEmpty")
              );
            for (
              var i = 0,
                s = Object.entries({
                  position: "absolute",
                  top: "-9999px",
                  left: "-9999px",
                  width: 0,
                  height: 0,
                  opacity: 0,
                  border: 0,
                  padding: 0,
                  background: "transparent",
                });
              i < s.length;
              i++
            ) {
              var n = t(s[i], 2),
                o = n[0],
                r = n[1];
              this.hpFieldElement.style.setProperty(o, r, "important");
            }
            this.formElement.appendChild(this.hpFieldElement),
              this.hpFieldElement.addEventListener("change", function () {
                l.resetState();
              });
          }
        }),
        (this.addAccessibilityLogo = function () {
          var e = document.createElement("span");
          e.classList.add("mosparo__accessible-message"),
            (e.textContent = this.getMessage("accessibilityProtectedBy")),
            this.labelElement.appendChild(e);
        }),
        (this.setHpFieldElementDisabled = function (e) {
          null !== this.hpFieldElement && (this.hpFieldElement.disabled = e);
        }),
        (this.processSecurityResponse = function (e) {
          if (
            ((this.isLocked = !0),
            "messages" in e && this.updateMessages(e.messages),
            "lockout" === e.type)
          ) {
            this.containerElement.classList.remove("mosparo__loading"),
              this.containerElement.classList.add("mosparo__invalid");
            var t = new Date(e.until);
            this.showError(
              this.getMessage("errorLockedOut").replace(
                "%datetime%",
                t.toLocaleString()
              )
            );
          } else if ("delay" === e.type) {
            var i = "<span>%val%</span>".replace("%val%", e.forSeconds);
            this.showError(
              this.getMessage("errorDelay").replace("%seconds%", i),
              !1,
              !0
            ),
              this.updateAccessibleStatus(
                this.getMessage("errorDelay").replace("%seconds%", e.forSeconds)
              ),
              (this.countdownSeconds = e.forSeconds),
              (this.countdownInterval = setInterval(function () {
                l.countDown();
              }, 1e3));
          }
        }),
        (this.countDown = function () {
          if (0 === this.countdownSeconds)
            return (
              (this.isLocked = !1),
              this.containerElement.classList.remove("mosparo__loading"),
              this.errorMessageElement.classList.remove(
                "mosparo__error-message-visible"
              ),
              void clearInterval(this.countdownInterval)
            );
          this.countdownSeconds--,
            (this.errorMessageElement.querySelectorAll("span")[0].textContent =
              this.countdownSeconds);
        }),
        (this.switchToInvisible = function () {
          (this.invisible = !0),
            this.formElement.classList.add("mosparo__form-with-invisible-box"),
            this.checkboxFieldElement.removeAttribute("required"),
            (this.loaderContainerElement = document.createElement("div")),
            this.loaderContainerElement.classList.add(
              "mosparo__loader-container"
            ),
            this.containerElement.appendChild(this.loaderContainerElement);
          var e = document.createElement("div");
          e.classList.add("mosparo__loader-inner-container"),
            this.loaderContainerElement.appendChild(e);
          var t = document.createElement("div");
          t.classList.add("mosparo__loader-circle"), e.appendChild(t);
          var i = document.createElement("div");
          i.classList.add("mosparo__loader-text"),
            (i.textContent = this.getMessage("accessibilityCheckingData")),
            e.appendChild(i);
          var s = this.formElement.querySelector('[type="submit"]');
          s &&
            (s.id || s.setAttribute("id", "button_" + this.getRandomHash()),
            this.accessibleStatusElement.setAttribute(
              "aria-describedby",
              s.id
            )),
            l.formElement.dispatchEvent(
              new CustomEvent("switch-to-invisible", { bubbles: !0 })
            ),
            null !== l.options.onSwitchToInvisible &&
              l.options.onSwitchToInvisible();
        }),
        (this.updateMessages = function (e) {
          (this.messages = e),
            this.containerElement.setAttribute("lang", this.messages.locale),
            (this.labelElement.textContent = this.getMessage("label"));
        }),
        (this.stringifyData = function (e) {
          var t = [];
          for (var i in e)
            t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
          return t.join("&");
        }),
        (this.isTargetElement = function (e, t) {
          for (var i = 0, s = e.length; i < s; i++) if (e[i] === t) return !0;
          return !1;
        }),
        (this.showError = function (e, t, i) {
          this.errorMessageElement.classList.add(
            "mosparo__error-message-visible"
          ),
            i
              ? (this.errorMessageElement.innerHTML = e)
              : ((this.errorMessageElement.textContent = e),
                (void 0 === t || t) && this.updateAccessibleStatus(e));
        }),
        (this.updateAccessibleStatus = function (e) {
          this.accessibleStatusElement.setAttribute("role", "alert"),
            (this.accessibleStatusElement.textContent = e);
        }),
        (this.getMessage = function (e) {
          var t = [];
          for (var i in (null !== this.options.language
            ? (t = [this.options.language])
            : void 0 !== navigator.languages
            ? (t = navigator.languages)
            : void 0 !== navigator.language && (t = [navigator.language]),
          t)) {
            var s = t[i].replace("-", "_");
            if (
              void 0 !== this.options.customMessages[s] &&
              void 0 !== this.options.customMessages[s][e] &&
              "" != this.options.customMessages[s][e]
            )
              return (
                "label" === e && this.containerElement.setAttribute("lang", s),
                this.options.customMessages[s][e]
              );
          }
          return this.messages[e];
        }),
        (this.debug = function (e) {
          console.log && console.log(e);
        }),
        this.init(),
        this
      );
    });
})();
