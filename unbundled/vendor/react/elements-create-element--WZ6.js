// Module: WZ6 (cjs)
// Dependencies: [o_, fP, rG1, MZ6, uCA, BCA]
// Exports: elements, createElement, HTMLElement
// Lines: 414041-415570 in cli.formatted.js
// ---

  var mCA = fP(),
    Yn4 = rG1(),
    UuY = MZ6(),
    CE = o_(),
    zn4 = uCA(),
    puY = BCA(),
    fc = (luY.elements = {}),
    iU1 = Object.create(null);
  luY.createElement = function (A, q, K) {
    var Y = iU1[q] || cuY;
    return new Y(A, q, K);
  };
  function P4(A) {
    return puY(A, Iq, fc, iU1);
  }
  function s_(A) {
    return {
      get: function () {
        var q = this._getattr(A);
        if (q === null) return "";
        var K = this.doc._resolve(q);
        return K === null ? q : K;
      },
      set: function (q) {
        this._setattr(A, q);
      },
    };
  }
  function PZ6(A) {
    return {
      get: function () {
        var q = this._getattr(A);
        if (q === null) return null;
        if (q.toLowerCase() === "use-credentials") return "use-credentials";
        return "anonymous";
      },
      set: function (q) {
        if (q === null || q === void 0) this.removeAttribute(A);
        else this._setattr(A, q);
      },
    };
  }
  var oG1 = {
      type: [
        "",
        "no-referrer",
        "no-referrer-when-downgrade",
        "same-origin",
        "origin",
        "strict-origin",
        "origin-when-cross-origin",
        "strict-origin-when-cross-origin",
        "unsafe-url",
      ],
      missing: "",
    },
    duY = {
      A: !0,
      LINK: !0,
      BUTTON: !0,
      INPUT: !0,
      SELECT: !0,
      TEXTAREA: !0,
      COMMAND: !0,
    },
    cI = function (A, q, K) {
      (Iq.call(this, A, q, K), (this._form = null));
    },
    Iq = (luY.HTMLElement = P4({
      superclass: Yn4,
      name: "HTMLElement",
      ctor: function (q, K, Y) {
        Yn4.call(this, q, K, CE.NAMESPACE.HTML, Y);
      },
      props: {
        dangerouslySetInnerHTML: {
          set: function (A) {
            this._innerHTML = A;
          },
        },
        innerHTML: {
          get: function () {
            return this.serialize();
          },
          set: function (A) {
            var q = this.ownerDocument.implementation.mozHTMLParser(
              this.ownerDocument._address,
              this,
            );
            q.parse(A === null ? "" : String(A), !0);
            var K = this instanceof iU1.template ? this.content : this;
            while (K.hasChildNodes()) K.removeChild(K.firstChild);
            K.appendChild(q._asDocumentFragment());
          },
        },
        style: {
          get: function () {
            if (!this._style) this._style = new UuY(this);
            return this._style;
          },
          set: function (A) {
            if (A === null || A === void 0) A = "";
            this._setattr("style", String(A));
          },
        },
        blur: { value: function () {} },
        focus: { value: function () {} },
        forceSpellCheck: { value: function () {} },
        click: {
          value: function () {
            if (this._click_in_progress) return;
            this._click_in_progress = !0;
            try {
              if (this._pre_click_activation_steps)
                this._pre_click_activation_steps();
              var A = this.ownerDocument.createEvent("MouseEvent");
              A.initMouseEvent(
                "click",
                !0,
                !0,
                this.ownerDocument.defaultView,
                1,
                0,
                0,
                0,
                0,
                !1,
                !1,
                !1,
                !1,
                0,
                null,
              );
              var q = this.dispatchEvent(A);
              if (q) {
                if (this._post_click_activation_steps)
                  this._post_click_activation_steps(A);
              } else if (this._cancelled_activation_steps)
                this._cancelled_activation_steps();
            } finally {
              this._click_in_progress = !1;
            }
          },
        },
        submit: { value: CE.nyi },
      },
      attributes: {
        title: String,
        lang: String,
        dir: { type: ["ltr", "rtl", "auto"], missing: "" },
        draggable: { type: ["true", "false"], treatNullAsEmptyString: !0 },
        spellcheck: { type: ["true", "false"], missing: "" },
        enterKeyHint: {
          type: ["enter", "done", "go", "next", "previous", "search", "send"],
          missing: "",
        },
        autoCapitalize: {
          type: ["off", "on", "none", "sentences", "words", "characters"],
          missing: "",
        },
        autoFocus: Boolean,
        accessKey: String,
        nonce: String,
        hidden: Boolean,
        translate: { type: ["no", "yes"], missing: "" },
        tabIndex: {
          type: "long",
          default: function () {
            if (this.tagName in duY || this.contentEditable) return 0;
            else return -1;
          },
        },
      },
      events: [
        "abort",
        "canplay",
        "canplaythrough",
        "change",
        "click",
        "contextmenu",
        "cuechange",
        "dblclick",
        "drag",
        "dragend",
        "dragenter",
        "dragleave",
        "dragover",
        "dragstart",
        "drop",
        "durationchange",
        "emptied",
        "ended",
        "input",
        "invalid",
        "keydown",
        "keypress",
        "keyup",
        "loadeddata",
        "loadedmetadata",
        "loadstart",
        "mousedown",
        "mousemove",
        "mouseout",
        "mouseover",
        "mouseup",
        "mousewheel",
        "pause",
        "play",
        "playing",
        "progress",
        "ratechange",
        "readystatechange",
        "reset",
        "seeked",
        "seeking",
        "select",
        "show",
        "stalled",
        "submit",
        "suspend",
        "timeupdate",
        "volumechange",
        "waiting",
        "blur",
        "error",
        "focus",
        "load",
        "scroll",
      ],
    })),
    cuY = P4({
      name: "HTMLUnknownElement",
      ctor: function (q, K, Y) {
        Iq.call(this, q, K, Y);
      },
    }),
    lI = {
      form: {
        get: function () {
          return this._form;
        },
      },
    };
  P4({
    tag: "a",
    name: "HTMLAnchorElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    props: {
      _post_click_activation_steps: {
        value: function (A) {
          if (this.href) this.ownerDocument.defaultView.location = this.href;
        },
      },
    },
    attributes: {
      href: s_,
      ping: String,
      download: String,
      target: String,
      rel: String,
      media: String,
      hreflang: String,
      type: String,
      referrerPolicy: oG1,
      coords: String,
      charset: String,
      name: String,
      rev: String,
      shape: String,
    },
  });
  zn4._inherit(iU1.a.prototype);
  P4({
    tag: "area",
    name: "HTMLAreaElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      alt: String,
      target: String,
      download: String,
      rel: String,
      media: String,
      href: s_,
      hreflang: String,
      type: String,
      shape: String,
      coords: String,
      ping: String,
      referrerPolicy: oG1,
      noHref: Boolean,
    },
  });
  zn4._inherit(iU1.area.prototype);
  P4({
    tag: "br",
    name: "HTMLBRElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { clear: String },
  });
  P4({
    tag: "base",
    name: "HTMLBaseElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { target: String },
  });
  P4({
    tag: "body",
    name: "HTMLBodyElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    events: [
      "afterprint",
      "beforeprint",
      "beforeunload",
      "blur",
      "error",
      "focus",
      "hashchange",
      "load",
      "message",
      "offline",
      "online",
      "pagehide",
      "pageshow",
      "popstate",
      "resize",
      "scroll",
      "storage",
      "unload",
    ],
    attributes: {
      text: { type: String, treatNullAsEmptyString: !0 },
      link: { type: String, treatNullAsEmptyString: !0 },
      vLink: { type: String, treatNullAsEmptyString: !0 },
      aLink: { type: String, treatNullAsEmptyString: !0 },
      bgColor: { type: String, treatNullAsEmptyString: !0 },
      background: String,
    },
  });
  P4({
    tag: "button",
    name: "HTMLButtonElement",
    ctor: function (q, K, Y) {
      cI.call(this, q, K, Y);
    },
    props: lI,
    attributes: {
      name: String,
      value: String,
      disabled: Boolean,
      autofocus: Boolean,
      type: { type: ["submit", "reset", "button", "menu"], missing: "submit" },
      formTarget: String,
      formAction: s_,
      formNoValidate: Boolean,
      formMethod: {
        type: ["get", "post", "dialog"],
        invalid: "get",
        missing: "",
      },
      formEnctype: {
        type: [
          "application/x-www-form-urlencoded",
          "multipart/form-data",
          "text/plain",
        ],
        invalid: "application/x-www-form-urlencoded",
        missing: "",
      },
    },
  });
  P4({
    tag: "dl",
    name: "HTMLDListElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { compact: Boolean },
  });
  P4({
    tag: "data",
    name: "HTMLDataElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { value: String },
  });
  P4({
    tag: "datalist",
    name: "HTMLDataListElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
  });
  P4({
    tag: "details",
    name: "HTMLDetailsElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { open: Boolean },
  });
  P4({
    tag: "div",
    name: "HTMLDivElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { align: String },
  });
  P4({
    tag: "embed",
    name: "HTMLEmbedElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      src: s_,
      type: String,
      width: String,
      height: String,
      align: String,
      name: String,
    },
  });
  P4({
    tag: "fieldset",
    name: "HTMLFieldSetElement",
    ctor: function (q, K, Y) {
      cI.call(this, q, K, Y);
    },
    props: lI,
    attributes: { disabled: Boolean, name: String },
  });
  P4({
    tag: "form",
    name: "HTMLFormElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      action: String,
      autocomplete: { type: ["on", "off"], missing: "on" },
      name: String,
      acceptCharset: { name: "accept-charset" },
      target: String,
      noValidate: Boolean,
      method: {
        type: ["get", "post", "dialog"],
        invalid: "get",
        missing: "get",
      },
      enctype: {
        type: [
          "application/x-www-form-urlencoded",
          "multipart/form-data",
          "text/plain",
        ],
        invalid: "application/x-www-form-urlencoded",
        missing: "application/x-www-form-urlencoded",
      },
      encoding: {
        name: "enctype",
        type: [
          "application/x-www-form-urlencoded",
          "multipart/form-data",
          "text/plain",
        ],
        invalid: "application/x-www-form-urlencoded",
        missing: "application/x-www-form-urlencoded",
      },
    },
  });
  P4({
    tag: "hr",
    name: "HTMLHRElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      align: String,
      color: String,
      noShade: Boolean,
      size: String,
      width: String,
    },
  });
  P4({
    tag: "head",
    name: "HTMLHeadElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
  });
  P4({
    tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
    name: "HTMLHeadingElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { align: String },
  });
  P4({
    tag: "html",
    name: "HTMLHtmlElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { xmlns: s_, version: String },
  });
  P4({
    tag: "iframe",
    name: "HTMLIFrameElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      src: s_,
      srcdoc: String,
      name: String,
      width: String,
      height: String,
      seamless: Boolean,
      allow: Boolean,
      allowFullscreen: Boolean,
      allowUserMedia: Boolean,
      allowPaymentRequest: Boolean,
      referrerPolicy: oG1,
      loading: { type: ["eager", "lazy"], treatNullAsEmptyString: !0 },
      align: String,
      scrolling: String,
      frameBorder: String,
      longDesc: s_,
      marginHeight: { type: String, treatNullAsEmptyString: !0 },
      marginWidth: { type: String, treatNullAsEmptyString: !0 },
    },
  });
  P4({
    tag: "img",
    name: "HTMLImageElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      alt: String,
      src: s_,
      srcset: String,
      crossOrigin: PZ6,
      useMap: String,
      isMap: Boolean,
      sizes: String,
      height: { type: "unsigned long", default: 0 },
      width: { type: "unsigned long", default: 0 },
      referrerPolicy: oG1,
      loading: { type: ["eager", "lazy"], missing: "" },
      name: String,
      lowsrc: s_,
      align: String,
      hspace: { type: "unsigned long", default: 0 },
      vspace: { type: "unsigned long", default: 0 },
      longDesc: s_,
      border: { type: String, treatNullAsEmptyString: !0 },
    },
  });
  P4({
    tag: "input",
    name: "HTMLInputElement",
    ctor: function (q, K, Y) {
      cI.call(this, q, K, Y);
    },
    props: {
      form: lI.form,
      _post_click_activation_steps: {
        value: function (A) {
          if (this.type === "checkbox") this.checked = !this.checked;
          else if (this.type === "radio") {
            var q = this.form.getElementsByName(this.name);
            for (var K = q.length - 1; K >= 0; K--) {
              var Y = q[K];
              Y.checked = Y === this;
            }
          }
        },
      },
    },
    attributes: {
      name: String,
      disabled: Boolean,
      autofocus: Boolean,
      accept: String,
      alt: String,
      max: String,
      min: String,
      pattern: String,
      placeholder: String,
      step: String,
      dirName: String,
      defaultValue: { name: "value" },
      multiple: Boolean,
      required: Boolean,
      readOnly: Boolean,
      checked: Boolean,
      value: String,
      src: s_,
      defaultChecked: { name: "checked", type: Boolean },
      size: { type: "unsigned long", default: 20, min: 1, setmin: 1 },
      width: { type: "unsigned long", min: 0, setmin: 0, default: 0 },
      height: { type: "unsigned long", min: 0, setmin: 0, default: 0 },
      minLength: { type: "unsigned long", min: 0, setmin: 0, default: -1 },
      maxLength: { type: "unsigned long", min: 0, setmin: 0, default: -1 },
      autocomplete: String,
      type: {
        type: [
          "text",
          "hidden",
          "search",
          "tel",
          "url",
          "email",
          "password",
          "datetime",
          "date",
          "month",
          "week",
          "time",
          "datetime-local",
          "number",
          "range",
          "color",
          "checkbox",
          "radio",
          "file",
          "submit",
          "image",
          "reset",
          "button",
        ],
        missing: "text",
      },
      formTarget: String,
      formNoValidate: Boolean,
      formMethod: { type: ["get", "post"], invalid: "get", missing: "" },
      formEnctype: {
        type: [
          "application/x-www-form-urlencoded",
          "multipart/form-data",
          "text/plain",
        ],
        invalid: "application/x-www-form-urlencoded",
        missing: "",
      },
      inputMode: {
        type: [
          "verbatim",
          "latin",
          "latin-name",
          "latin-prose",
          "full-width-latin",
          "kana",
          "kana-name",
          "katakana",
          "numeric",
          "tel",
          "email",
          "url",
        ],
        missing: "",
      },
      align: String,
      useMap: String,
    },
  });
  P4({
    tag: "keygen",
    name: "HTMLKeygenElement",
    ctor: function (q, K, Y) {
      cI.call(this, q, K, Y);
    },
    props: lI,
    attributes: {
      name: String,
      disabled: Boolean,
      autofocus: Boolean,
      challenge: String,
      keytype: { type: ["rsa"], missing: "" },
    },
  });
  P4({
    tag: "li",
    name: "HTMLLIElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { value: { type: "long", default: 0 }, type: String },
  });
  P4({
    tag: "label",
    name: "HTMLLabelElement",
    ctor: function (q, K, Y) {
      cI.call(this, q, K, Y);
    },
    props: lI,
    attributes: { htmlFor: { name: "for", type: String } },
  });
  P4({
    tag: "legend",
    name: "HTMLLegendElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { align: String },
  });
  P4({
    tag: "link",
    name: "HTMLLinkElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      href: s_,
      rel: String,
      media: String,
      hreflang: String,
      type: String,
      crossOrigin: PZ6,
      nonce: String,
      integrity: String,
      referrerPolicy: oG1,
      imageSizes: String,
      imageSrcset: String,
      charset: String,
      rev: String,
      target: String,
    },
  });
  P4({
    tag: "map",
    name: "HTMLMapElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { name: String },
  });
  P4({
    tag: "menu",
    name: "HTMLMenuElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      type: { type: ["context", "popup", "toolbar"], missing: "toolbar" },
      label: String,
      compact: Boolean,
    },
  });
  P4({
    tag: "meta",
    name: "HTMLMetaElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      name: String,
      content: String,
      httpEquiv: { name: "http-equiv", type: String },
      scheme: String,
    },
  });
  P4({
    tag: "meter",
    name: "HTMLMeterElement",
    ctor: function (q, K, Y) {
      cI.call(this, q, K, Y);
    },
    props: lI,
  });
  P4({
    tags: ["ins", "del"],
    name: "HTMLModElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { cite: s_, dateTime: String },
  });
  P4({
    tag: "ol",
    name: "HTMLOListElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    props: {
      _numitems: {
        get: function () {
          var A = 0;
          return (
            this.childNodes.forEach(function (q) {
              if (q.nodeType === mCA.ELEMENT_NODE && q.tagName === "LI") A++;
            }),
            A
          );
        },
      },
    },
    attributes: {
      type: String,
      reversed: Boolean,
      start: {
        type: "long",
        default: function () {
          if (this.reversed) return this._numitems;
          else return 1;
        },
      },
      compact: Boolean,
    },
  });
  P4({
    tag: "object",
    name: "HTMLObjectElement",
    ctor: function (q, K, Y) {
      cI.call(this, q, K, Y);
    },
    props: lI,
    attributes: {
      data: s_,
      type: String,
      name: String,
      useMap: String,
      typeMustMatch: Boolean,
      width: String,
      height: String,
      align: String,
      archive: String,
      code: String,
      declare: Boolean,
      hspace: { type: "unsigned long", default: 0 },
      standby: String,
      vspace: { type: "unsigned long", default: 0 },
      codeBase: s_,
      codeType: String,
      border: { type: String, treatNullAsEmptyString: !0 },
    },
  });
  P4({
    tag: "optgroup",
    name: "HTMLOptGroupElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { disabled: Boolean, label: String },
  });
  P4({
    tag: "option",
    name: "HTMLOptionElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    props: {
      form: {
        get: function () {
          var A = this.parentNode;
          while (A && A.nodeType === mCA.ELEMENT_NODE) {
            if (A.localName === "select") return A.form;
            A = A.parentNode;
          }
        },
      },
      value: {
        get: function () {
          return this._getattr("value") || this.text;
        },
        set: function (A) {
          this._setattr("value", A);
        },
      },
      text: {
        get: function () {
          return this.textContent.replace(/[ \t\n\f\r]+/g, " ").trim();
        },
        set: function (A) {
          this.textContent = A;
        },
      },
    },
    attributes: {
      disabled: Boolean,
      defaultSelected: { name: "selected", type: Boolean },
      label: String,
    },
  });
  P4({
    tag: "output",
    name: "HTMLOutputElement",
    ctor: function (q, K, Y) {
      cI.call(this, q, K, Y);
    },
    props: lI,
    attributes: { name: String },
  });
  P4({
    tag: "p",
    name: "HTMLParagraphElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { align: String },
  });
  P4({
    tag: "param",
    name: "HTMLParamElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      name: String,
      value: String,
      type: String,
      valueType: String,
    },
  });
  P4({
    tags: ["pre", "listing", "xmp"],
    name: "HTMLPreElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { width: { type: "long", default: 0 } },
  });
  P4({
    tag: "progress",
    name: "HTMLProgressElement",
    ctor: function (q, K, Y) {
      cI.call(this, q, K, Y);
    },
    props: lI,
    attributes: { max: { type: Number, float: !0, default: 1, min: 0 } },
  });
  P4({
    tags: ["q", "blockquote"],
    name: "HTMLQuoteElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { cite: s_ },
  });
  P4({
    tag: "script",
    name: "HTMLScriptElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    props: {
      text: {
        get: function () {
          var A = "";
          for (var q = 0, K = this.childNodes.length; q < K; q++) {
            var Y = this.childNodes[q];
            if (Y.nodeType === mCA.TEXT_NODE) A += Y._data;
          }
          return A;
        },
        set: function (A) {
          if ((this.removeChildren(), A !== null && A !== ""))
            this.appendChild(this.ownerDocument.createTextNode(A));
        },
      },
    },
    attributes: {
      src: s_,
      type: String,
      charset: String,
      referrerPolicy: oG1,
      defer: Boolean,
      async: Boolean,
      nomodule: Boolean,
      crossOrigin: PZ6,
      nonce: String,
      integrity: String,
    },
  });
  P4({
    tag: "select",
    name: "HTMLSelectElement",
    ctor: function (q, K, Y) {
      cI.call(this, q, K, Y);
    },
    props: {
      form: lI.form,
      options: {
        get: function () {
          return this.getElementsByTagName("option");
        },
      },
    },
    attributes: {
      autocomplete: String,
      name: String,
      disabled: Boolean,
      autofocus: Boolean,
      multiple: Boolean,
      required: Boolean,
      size: { type: "unsigned long", default: 0 },
    },
  });
  P4({
    tag: "span",
    name: "HTMLSpanElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
  });
  P4({
    tag: "style",
    name: "HTMLStyleElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { media: String, type: String, scoped: Boolean },
  });
  P4({
    tag: "caption",
    name: "HTMLTableCaptionElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { align: String },
  });
  P4({
    name: "HTMLTableCellElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      colSpan: { type: "unsigned long", default: 1 },
      rowSpan: { type: "unsigned long", default: 1 },
      scope: { type: ["row", "col", "rowgroup", "colgroup"], missing: "" },
      abbr: String,
      align: String,
      axis: String,
      height: String,
      width: String,
      ch: { name: "char", type: String },
      chOff: { name: "charoff", type: String },
      noWrap: Boolean,
      vAlign: String,
      bgColor: { type: String, treatNullAsEmptyString: !0 },
    },
  });
  P4({
    tags: ["col", "colgroup"],
    name: "HTMLTableColElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      span: { type: "limited unsigned long with fallback", default: 1, min: 1 },
      align: String,
      ch: { name: "char", type: String },
      chOff: { name: "charoff", type: String },
      vAlign: String,
      width: String,
    },
  });
  P4({
    tag: "table",
    name: "HTMLTableElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    props: {
      rows: {
        get: function () {
          return this.getElementsByTagName("tr");
        },
      },
    },
    attributes: {
      align: String,
      border: String,
      frame: String,
      rules: String,
      summary: String,
      width: String,
      bgColor: { type: String, treatNullAsEmptyString: !0 },
      cellPadding: { type: String, treatNullAsEmptyString: !0 },
      cellSpacing: { type: String, treatNullAsEmptyString: !0 },
    },
  });
  P4({
    tag: "template",
    name: "HTMLTemplateElement",
    ctor: function (q, K, Y) {
      (Iq.call(this, q, K, Y),
        (this._contentFragment = q._templateDoc.createDocumentFragment()));
    },
    props: {
      content: {
        get: function () {
          return this._contentFragment;
        },
      },
      serialize: {
        value: function () {
          return this.content.serialize();
        },
      },
    },
  });
  P4({
    tag: "tr",
    name: "HTMLTableRowElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    props: {
      cells: {
        get: function () {
          return this.querySelectorAll("td,th");
        },
      },
    },
    attributes: {
      align: String,
      ch: { name: "char", type: String },
      chOff: { name: "charoff", type: String },
      vAlign: String,
      bgColor: { type: String, treatNullAsEmptyString: !0 },
    },
  });
  P4({
    tags: ["thead", "tfoot", "tbody"],
    name: "HTMLTableSectionElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    props: {
      rows: {
        get: function () {
          return this.getElementsByTagName("tr");
        },
      },
    },
    attributes: {
      align: String,
      ch: { name: "char", type: String },
      chOff: { name: "charoff", type: String },
      vAlign: String,
    },
  });
  P4({
    tag: "textarea",
    name: "HTMLTextAreaElement",
    ctor: function (q, K, Y) {
      cI.call(this, q, K, Y);
    },
    props: {
      form: lI.form,
      type: {
        get: function () {
          return "textarea";
        },
      },
      defaultValue: {
        get: function () {
          return this.textContent;
        },
        set: function (A) {
          this.textContent = A;
        },
      },
      value: {
        get: function () {
          return this.defaultValue;
        },
        set: function (A) {
          this.defaultValue = A;
        },
      },
      textLength: {
        get: function () {
          return this.value.length;
        },
      },
    },
    attributes: {
      autocomplete: String,
      name: String,
      disabled: Boolean,
      autofocus: Boolean,
      placeholder: String,
      wrap: String,
      dirName: String,
      required: Boolean,
      readOnly: Boolean,
      rows: { type: "limited unsigned long with fallback", default: 2 },
      cols: { type: "limited unsigned long with fallback", default: 20 },
      maxLength: { type: "unsigned long", min: 0, setmin: 0, default: -1 },
      minLength: { type: "unsigned long", min: 0, setmin: 0, default: -1 },
      inputMode: {
        type: [
          "verbatim",
          "latin",
          "latin-name",
          "latin-prose",
          "full-width-latin",
          "kana",
          "kana-name",
          "katakana",
          "numeric",
          "tel",
          "email",
          "url",
        ],
        missing: "",
      },
    },
  });
  P4({
    tag: "time",
    name: "HTMLTimeElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { dateTime: String, pubDate: Boolean },
  });
  P4({
    tag: "title",
    name: "HTMLTitleElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    props: {
      text: {
        get: function () {
          return this.textContent;
        },
      },
    },
  });
  P4({
    tag: "ul",
    name: "HTMLUListElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { type: String, compact: Boolean },
  });
  P4({
    name: "HTMLMediaElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      src: s_,
      crossOrigin: PZ6,
      preload: {
        type: ["metadata", "none", "auto", { value: "", alias: "auto" }],
        missing: "auto",
      },
      loop: Boolean,
      autoplay: Boolean,
      mediaGroup: String,
      controls: Boolean,
      defaultMuted: { name: "muted", type: Boolean },
    },
  });
  P4({
    name: "HTMLAudioElement",
    tag: "audio",
    superclass: fc.HTMLMediaElement,
    ctor: function (q, K, Y) {
      fc.HTMLMediaElement.call(this, q, K, Y);
    },
  });
  P4({
    name: "HTMLVideoElement",
    tag: "video",
    superclass: fc.HTMLMediaElement,
    ctor: function (q, K, Y) {
      fc.HTMLMediaElement.call(this, q, K, Y);
    },
    attributes: {
      poster: s_,
      width: { type: "unsigned long", min: 0, default: 0 },
      height: { type: "unsigned long", min: 0, default: 0 },
    },
  });
  P4({
    tag: "td",
    name: "HTMLTableDataCellElement",
    superclass: fc.HTMLTableCellElement,
    ctor: function (q, K, Y) {
      fc.HTMLTableCellElement.call(this, q, K, Y);
    },
  });
  P4({
    tag: "th",
    name: "HTMLTableHeaderCellElement",
    superclass: fc.HTMLTableCellElement,
    ctor: function (q, K, Y) {
      fc.HTMLTableCellElement.call(this, q, K, Y);
    },
  });
  P4({
    tag: "frameset",
    name: "HTMLFrameSetElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
  });
  P4({
    tag: "frame",
    name: "HTMLFrameElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
  });
  P4({
    tag: "canvas",
    name: "HTMLCanvasElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    props: {
      getContext: { value: CE.nyi },
      probablySupportsContext: { value: CE.nyi },
      setContext: { value: CE.nyi },
      transferControlToProxy: { value: CE.nyi },
      toDataURL: { value: CE.nyi },
      toBlob: { value: CE.nyi },
    },
    attributes: {
      width: { type: "unsigned long", default: 300 },
      height: { type: "unsigned long", default: 150 },
    },
  });
  P4({
    tag: "dialog",
    name: "HTMLDialogElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    props: {
      show: { value: CE.nyi },
      showModal: { value: CE.nyi },
      close: { value: CE.nyi },
    },
    attributes: { open: Boolean, returnValue: String },
  });
  P4({
    tag: "menuitem",
    name: "HTMLMenuItemElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    props: {
      _label: {
        get: function () {
          var A = this._getattr("label");
          if (A !== null && A !== "") return A;
          return (
            (A = this.textContent),
            A.replace(/[ \t\n\f\r]+/g, " ").trim()
          );
        },
      },
      label: {
        get: function () {
          var A = this._getattr("label");
          if (A !== null) return A;
          return this._label;
        },
        set: function (A) {
          this._setattr("label", A);
        },
      },
    },
    attributes: {
      type: { type: ["command", "checkbox", "radio"], missing: "command" },
      icon: s_,
      disabled: Boolean,
      checked: Boolean,
      radiogroup: String,
      default: Boolean,
    },
  });
  P4({
    tag: "source",
    name: "HTMLSourceElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      srcset: String,
      sizes: String,
      media: String,
      src: s_,
      type: String,
      width: String,
      height: String,
    },
  });
  P4({
    tag: "track",
    name: "HTMLTrackElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      src: s_,
      srclang: String,
      label: String,
      default: Boolean,
      kind: {
        type: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
        missing: "subtitles",
        invalid: "metadata",
      },
    },
    props: {
      NONE: {
        get: function () {
          return 0;
        },
      },
      LOADING: {
        get: function () {
          return 1;
        },
      },
      LOADED: {
        get: function () {
          return 2;
        },
      },
      ERROR: {
        get: function () {
          return 3;
        },
      },
      readyState: { get: CE.nyi },
      track: { get: CE.nyi },
    },
  });
  P4({
    tag: "font",
    name: "HTMLFontElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: {
      color: { type: String, treatNullAsEmptyString: !0 },
      face: { type: String },
      size: { type: String },
    },
  });
  P4({
    tag: "dir",
    name: "HTMLDirectoryElement",
    ctor: function (q, K, Y) {
      Iq.call(this, q, K, Y);
    },
    attributes: { compact: Boolean },
  });
  P4({
    tags: [
      "abbr",
      "address",
      "article",
      "aside",
      "b",
      "bdi",
      "bdo",
      "cite",
      "content",
      "code",
      "dd",
      "dfn",
      "dt",
      "em",
      "figcaption",
      "figure",
      "footer",
      "header",
      "hgroup",
      "i",
      "kbd",
      "main",
      "mark",
      "nav",
      "noscript",
      "rb",
      "rp",
      "rt",
      "rtc",
      "ruby",
      "s",
      "samp",
      "section",
      "small",
      "strong",
      "sub",
      "summary",
      "sup",
      "u",
      "var",
      "wbr",
      "acronym",
      "basefont",
      "big",
      "center",
      "nobr",
      "noembed",
      "noframes",
      "plaintext",
      "strike",
      "tt",
    ],
  });
