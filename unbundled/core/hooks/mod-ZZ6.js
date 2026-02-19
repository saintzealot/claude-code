// Module: ZZ6 (cjs)
// Dependencies: [Z6, UG1, eG6, o_, fP, T91, KZ6, YZ6, rG1, fCA, NCA, vCA, kCA, cU1, Ii4, Fi4, DZ6, bCA, WZ6, gCA, _n4, aU1]
// Lines: 415708-416467 in cli.formatted.js
// ---

  fn4.exports = rU1;
  var HG = fP(),
    tuY = T91(),
    Pn4 = KZ6(),
    je = rG1(),
    euY = fCA(),
    ABY = NCA(),
    nU1 = UG1(),
    qBY = vCA(),
    KBY = kCA(),
    YBY = aU1(),
    zBY = Ii4(),
    wBY = Fi4(),
    Jn4 = cU1(),
    Xn4 = DZ6(),
    jn4 = $Z6(),
    HBY = bCA(),
    GZ6 = YZ6(),
    UCA = WZ6(),
    $BY = gCA(),
    Wz = o_(),
    sG1 = _n4(),
    eG1 = Wz.NAMESPACE,
    pCA = eG6().isApiWritable;
  function rU1(A, q) {
    (Pn4.call(this),
      (this.nodeType = HG.DOCUMENT_NODE),
      (this.isHTML = A),
      (this._address = q || "about:blank"),
      (this.readyState = "loading"),
      (this.implementation = new YBY(this)),
      (this.ownerDocument = null),
      (this._contentType = A ? "text/html" : "application/xml"),
      (this.doctype = null),
      (this.documentElement = null),
      (this._templateDocCache = null),
      (this._nodeIterators = null),
      (this._nid = 1),
      (this._nextnid = 2),
      (this._nodes = [null, this]),
      (this.byId = Object.create(null)),
      (this.modclock = 0));
  }
  var OBY = {
      event: "Event",
      customevent: "CustomEvent",
      uievent: "UIEvent",
      mouseevent: "MouseEvent",
    },
    _BY = {
      events: "event",
      htmlevents: "event",
      mouseevents: "mouseevent",
      mutationevents: "mutationevent",
      uievents: "uievent",
    },
    tG1 = function (A, q, K) {
      return {
        get: function () {
          var Y = A.call(this);
          if (Y) return Y[q];
          return K;
        },
        set: function (Y) {
          var z = A.call(this);
          if (z) z[q] = Y;
        },
      };
    };
  function Dn4(A, q) {
    var K, Y, z;
    if (A === "") A = null;
    if (!GZ6.isValidQName(q)) Wz.InvalidCharacterError();
    if (((K = null), (Y = q), (z = q.indexOf(":")), z >= 0))
      ((K = q.substring(0, z)), (Y = q.substring(z + 1)));
    if (K !== null && A === null) Wz.NamespaceError();
    if (K === "xml" && A !== eG1.XML) Wz.NamespaceError();
    if ((K === "xmlns" || q === "xmlns") && A !== eG1.XMLNS)
      Wz.NamespaceError();
    if (A === eG1.XMLNS && !(K === "xmlns" || q === "xmlns"))
      Wz.NamespaceError();
    return { namespace: A, prefix: K, localName: Y };
  }
  rU1.prototype = Object.create(Pn4.prototype, {
    _setMutationHandler: {
      value: function (A) {
        this.mutationHandler = A;
      },
    },
    _dispatchRendererEvent: {
      value: function (A, q, K) {
        var Y = this._nodes[A];
        if (!Y) return;
        Y._dispatchEvent(new nU1(q, K), !0);
      },
    },
    nodeName: { value: "#document" },
    nodeValue: {
      get: function () {
        return null;
      },
      set: function () {},
    },
    documentURI: {
      get: function () {
        return this._address;
      },
      set: Wz.nyi,
    },
    compatMode: {
      get: function () {
        return this._quirks ? "BackCompat" : "CSS1Compat";
      },
    },
    createTextNode: {
      value: function (A) {
        return new euY(this, String(A));
      },
    },
    createComment: {
      value: function (A) {
        return new ABY(this, A);
      },
    },
    createDocumentFragment: {
      value: function () {
        return new qBY(this);
      },
    },
    createProcessingInstruction: {
      value: function (A, q) {
        if (!GZ6.isValidName(A) || q.indexOf("?>") !== -1)
          Wz.InvalidCharacterError();
        return new KBY(this, A, q);
      },
    },
    createAttribute: {
      value: function (A) {
        if (((A = String(A)), !GZ6.isValidName(A))) Wz.InvalidCharacterError();
        if (this.isHTML) A = Wz.toASCIILowerCase(A);
        return new je._Attr(null, A, null, null, "");
      },
    },
    createAttributeNS: {
      value: function (A, q) {
        ((A = A === null || A === void 0 || A === "" ? null : String(A)),
          (q = String(q)));
        var K = Dn4(A, q);
        return new je._Attr(null, K.localName, K.prefix, K.namespace, "");
      },
    },
    createElement: {
      value: function (A) {
        if (((A = String(A)), !GZ6.isValidName(A))) Wz.InvalidCharacterError();
        if (this.isHTML) {
          if (/[A-Z]/.test(A)) A = Wz.toASCIILowerCase(A);
          return UCA.createElement(this, A, null);
        } else if (this.contentType === "application/xhtml+xml")
          return UCA.createElement(this, A, null);
        else return new je(this, A, null, null);
      },
      writable: pCA,
    },
    createElementNS: {
      value: function (A, q) {
        ((A = A === null || A === void 0 || A === "" ? null : String(A)),
          (q = String(q)));
        var K = Dn4(A, q);
        return this._createElementNS(K.localName, K.namespace, K.prefix);
      },
      writable: pCA,
    },
    _createElementNS: {
      value: function (A, q, K) {
        if (q === eG1.HTML) return UCA.createElement(this, A, K);
        else if (q === eG1.SVG) return $BY.createElement(this, A, K);
        return new je(this, A, q, K);
      },
    },
    createEvent: {
      value: function (q) {
        q = q.toLowerCase();
        var K = _BY[q] || q,
          Y = HBY[OBY[K]];
        if (Y) {
          var z = new Y();
          return ((z._initialized = !1), z);
        } else Wz.NotSupportedError();
      },
    },
    createTreeWalker: {
      value: function (A, q, K) {
        if (!A) throw TypeError("root argument is required");
        if (!(A instanceof HG)) throw TypeError("root not a node");
        return (
          (q = q === void 0 ? Jn4.SHOW_ALL : +q),
          (K = K === void 0 ? null : K),
          new zBY(A, q, K)
        );
      },
    },
    createNodeIterator: {
      value: function (A, q, K) {
        if (!A) throw TypeError("root argument is required");
        if (!(A instanceof HG)) throw TypeError("root not a node");
        return (
          (q = q === void 0 ? Jn4.SHOW_ALL : +q),
          (K = K === void 0 ? null : K),
          new wBY(A, q, K)
        );
      },
    },
    _attachNodeIterator: {
      value: function (A) {
        if (!this._nodeIterators) this._nodeIterators = [];
        this._nodeIterators.push(A);
      },
    },
    _detachNodeIterator: {
      value: function (A) {
        var q = this._nodeIterators.indexOf(A);
        this._nodeIterators.splice(q, 1);
      },
    },
    _preremoveNodeIterators: {
      value: function (A) {
        if (this._nodeIterators)
          this._nodeIterators.forEach(function (q) {
            q._preremove(A);
          });
      },
    },
    _updateDocTypeElement: {
      value: function () {
        this.doctype = this.documentElement = null;
        for (var q = this.firstChild; q !== null; q = q.nextSibling)
          if (q.nodeType === HG.DOCUMENT_TYPE_NODE) this.doctype = q;
          else if (q.nodeType === HG.ELEMENT_NODE) this.documentElement = q;
      },
    },
    insertBefore: {
      value: function (q, K) {
        return (
          HG.prototype.insertBefore.call(this, q, K),
          this._updateDocTypeElement(),
          q
        );
      },
    },
    replaceChild: {
      value: function (q, K) {
        return (
          HG.prototype.replaceChild.call(this, q, K),
          this._updateDocTypeElement(),
          K
        );
      },
    },
    removeChild: {
      value: function (q) {
        return (
          HG.prototype.removeChild.call(this, q),
          this._updateDocTypeElement(),
          q
        );
      },
    },
    getElementById: {
      value: function (A) {
        var q = this.byId[A];
        if (!q) return null;
        if (q instanceof Vc) return q.getFirst();
        return q;
      },
    },
    _hasMultipleElementsWithId: {
      value: function (A) {
        return this.byId[A] instanceof Vc;
      },
    },
    getElementsByName: { value: je.prototype.getElementsByName },
    getElementsByTagName: { value: je.prototype.getElementsByTagName },
    getElementsByTagNameNS: { value: je.prototype.getElementsByTagNameNS },
    getElementsByClassName: { value: je.prototype.getElementsByClassName },
    adoptNode: {
      value: function (q) {
        if (q.nodeType === HG.DOCUMENT_NODE) Wz.NotSupportedError();
        if (q.nodeType === HG.ATTRIBUTE_NODE) return q;
        if (q.parentNode) q.parentNode.removeChild(q);
        if (q.ownerDocument !== this) Zn4(q, this);
        return q;
      },
    },
    importNode: {
      value: function (q, K) {
        return this.adoptNode(q.cloneNode(K));
      },
      writable: pCA,
    },
    origin: {
      get: function () {
        return null;
      },
    },
    characterSet: {
      get: function () {
        return "UTF-8";
      },
    },
    contentType: {
      get: function () {
        return this._contentType;
      },
    },
    URL: {
      get: function () {
        return this._address;
      },
    },
    domain: { get: Wz.nyi, set: Wz.nyi },
    referrer: { get: Wz.nyi },
    cookie: { get: Wz.nyi, set: Wz.nyi },
    lastModified: { get: Wz.nyi },
    location: {
      get: function () {
        return this.defaultView ? this.defaultView.location : null;
      },
      set: Wz.nyi,
    },
    _titleElement: {
      get: function () {
        return this.getElementsByTagName("title").item(0) || null;
      },
    },
    title: {
      get: function () {
        var A = this._titleElement,
          q = A ? A.textContent : "";
        return q.replace(/[ \t\n\r\f]+/g, " ").replace(/(^ )|( $)/g, "");
      },
      set: function (A) {
        var q = this._titleElement,
          K = this.head;
        if (!q && !K) return;
        if (!q) ((q = this.createElement("title")), K.appendChild(q));
        q.textContent = A;
      },
    },
    dir: tG1(
      function () {
        var A = this.documentElement;
        if (A && A.tagName === "HTML") return A;
      },
      "dir",
      "",
    ),
    fgColor: tG1(
      function () {
        return this.body;
      },
      "text",
      "",
    ),
    linkColor: tG1(
      function () {
        return this.body;
      },
      "link",
      "",
    ),
    vlinkColor: tG1(
      function () {
        return this.body;
      },
      "vLink",
      "",
    ),
    alinkColor: tG1(
      function () {
        return this.body;
      },
      "aLink",
      "",
    ),
    bgColor: tG1(
      function () {
        return this.body;
      },
      "bgColor",
      "",
    ),
    charset: {
      get: function () {
        return this.characterSet;
      },
    },
    inputEncoding: {
      get: function () {
        return this.characterSet;
      },
    },
    scrollingElement: {
      get: function () {
        return this._quirks ? this.body : this.documentElement;
      },
    },
    body: {
      get: function () {
        return Mn4(this.documentElement, "body");
      },
      set: Wz.nyi,
    },
    head: {
      get: function () {
        return Mn4(this.documentElement, "head");
      },
    },
    images: { get: Wz.nyi },
    embeds: { get: Wz.nyi },
    plugins: { get: Wz.nyi },
    links: { get: Wz.nyi },
    forms: { get: Wz.nyi },
    scripts: { get: Wz.nyi },
    applets: {
      get: function () {
        return [];
      },
    },
    activeElement: {
      get: function () {
        return null;
      },
    },
    innerHTML: {
      get: function () {
        return this.serialize();
      },
      set: Wz.nyi,
    },
    outerHTML: {
      get: function () {
        return this.serialize();
      },
      set: Wz.nyi,
    },
    write: {
      value: function (A) {
        if (!this.isHTML) Wz.InvalidStateError();
        if (!this._parser) return;
        if (!this._parser);
        var q = arguments.join("");
        this._parser.parse(q);
      },
    },
    writeln: {
      value: function (q) {
        this.write(
          Array.prototype.join.call(arguments, "") +
            `
`,
        );
      },
    },
    open: {
      value: function () {
        this.documentElement = null;
      },
    },
    close: {
      value: function () {
        if (
          ((this.readyState = "interactive"),
          this._dispatchEvent(new nU1("readystatechange"), !0),
          this._dispatchEvent(new nU1("DOMContentLoaded"), !0),
          (this.readyState = "complete"),
          this._dispatchEvent(new nU1("readystatechange"), !0),
          this.defaultView)
        )
          this.defaultView._dispatchEvent(new nU1("load"), !0);
      },
    },
    clone: {
      value: function () {
        var q = new rU1(this.isHTML, this._address);
        return (
          (q._quirks = this._quirks),
          (q._contentType = this._contentType),
          q
        );
      },
    },
    cloneNode: {
      value: function (q) {
        var K = HG.prototype.cloneNode.call(this, !1);
        if (q)
          for (var Y = this.firstChild; Y !== null; Y = Y.nextSibling)
            K._appendChild(K.importNode(Y, !0));
        return (K._updateDocTypeElement(), K);
      },
    },
    isEqual: {
      value: function (q) {
        return !0;
      },
    },
    mutateValue: {
      value: function (A) {
        if (this.mutationHandler)
          this.mutationHandler({ type: sG1.VALUE, target: A, data: A.data });
      },
    },
    mutateAttr: {
      value: function (A, q) {
        if (this.mutationHandler)
          this.mutationHandler({
            type: sG1.ATTR,
            target: A.ownerElement,
            attr: A,
          });
      },
    },
    mutateRemoveAttr: {
      value: function (A) {
        if (this.mutationHandler)
          this.mutationHandler({
            type: sG1.REMOVE_ATTR,
            target: A.ownerElement,
            attr: A,
          });
      },
    },
    mutateRemove: {
      value: function (A) {
        if (this.mutationHandler)
          this.mutationHandler({
            type: sG1.REMOVE,
            target: A.parentNode,
            node: A,
          });
        Gn4(A);
      },
    },
    mutateInsert: {
      value: function (A) {
        if ((Wn4(A), this.mutationHandler))
          this.mutationHandler({
            type: sG1.INSERT,
            target: A.parentNode,
            node: A,
          });
      },
    },
    mutateMove: {
      value: function (A) {
        if (this.mutationHandler)
          this.mutationHandler({ type: sG1.MOVE, target: A });
      },
    },
    addId: {
      value: function (q, K) {
        var Y = this.byId[q];
        if (!Y) this.byId[q] = K;
        else {
          if (!(Y instanceof Vc)) ((Y = new Vc(Y)), (this.byId[q] = Y));
          Y.add(K);
        }
      },
    },
    delId: {
      value: function (q, K) {
        var Y = this.byId[q];
        if ((Wz.assert(Y), Y instanceof Vc)) {
          if ((Y.del(K), Y.length === 1)) this.byId[q] = Y.downgrade();
        } else this.byId[q] = void 0;
      },
    },
    _resolve: {
      value: function (A) {
        return new Xn4(this._documentBaseURL).resolve(A);
      },
    },
    _documentBaseURL: {
      get: function () {
        var A = this._address;
        if (A === "about:blank") A = "/";
        var q = this.querySelector("base[href]");
        if (q) return new Xn4(A).resolve(q.getAttribute("href"));
        return A;
      },
    },
    _templateDoc: {
      get: function () {
        if (!this._templateDocCache) {
          var A = new rU1(this.isHTML, this._address);
          this._templateDocCache = A._templateDocCache = A;
        }
        return this._templateDocCache;
      },
    },
    querySelector: {
      value: function (A) {
        return jn4(A, this)[0];
      },
    },
    querySelectorAll: {
      value: function (A) {
        var q = jn4(A, this);
        return q.item ? q : new tuY(q);
      },
    },
  });
  var JBY = [
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
  ];
  JBY.forEach(function (A) {
    Object.defineProperty(rU1.prototype, "on" + A, {
      get: function () {
        return this._getEventHandler(A);
      },
      set: function (q) {
        this._setEventHandler(A, q);
      },
    });
  });
  function Mn4(A, q) {
    if (A && A.isHTML) {
      for (var K = A.firstChild; K !== null; K = K.nextSibling)
        if (
          K.nodeType === HG.ELEMENT_NODE &&
          K.localName === q &&
          K.namespaceURI === eG1.HTML
        )
          return K;
    }
    return null;
  }
  function XBY(A) {
    if (
      ((A._nid = A.ownerDocument._nextnid++),
      (A.ownerDocument._nodes[A._nid] = A),
      A.nodeType === HG.ELEMENT_NODE)
    ) {
      var q = A.getAttribute("id");
      if (q) A.ownerDocument.addId(q, A);
      if (A._roothook) A._roothook();
    }
  }
  function jBY(A) {
    if (A.nodeType === HG.ELEMENT_NODE) {
      var q = A.getAttribute("id");
      if (q) A.ownerDocument.delId(q, A);
    }
    ((A.ownerDocument._nodes[A._nid] = void 0), (A._nid = void 0));
  }
  function Wn4(A) {
    if ((XBY(A), A.nodeType === HG.ELEMENT_NODE))
      for (var q = A.firstChild; q !== null; q = q.nextSibling) Wn4(q);
  }
  function Gn4(A) {
    jBY(A);
    for (var q = A.firstChild; q !== null; q = q.nextSibling) Gn4(q);
  }
  function Zn4(A, q) {
    if (
      ((A.ownerDocument = q),
      (A._lastModTime = void 0),
      Object.prototype.hasOwnProperty.call(A, "_tagName"))
    )
      A._tagName = void 0;
    for (var K = A.firstChild; K !== null; K = K.nextSibling) Zn4(K, q);
  }
  function Vc(A) {
    ((this.nodes = Object.create(null)),
      (this.nodes[A._nid] = A),
      (this.length = 1),
      (this.firstNode = void 0));
  }
  Vc.prototype.add = function (A) {
    if (!this.nodes[A._nid])
      ((this.nodes[A._nid] = A), this.length++, (this.firstNode = void 0));
  };
  Vc.prototype.del = function (A) {
    if (this.nodes[A._nid])
      (delete this.nodes[A._nid], this.length--, (this.firstNode = void 0));
  };
  Vc.prototype.getFirst = function () {
    if (!this.firstNode) {
      var A;
      for (A in this.nodes)
        if (
          this.firstNode === void 0 ||
          this.firstNode.compareDocumentPosition(this.nodes[A]) &
            HG.DOCUMENT_POSITION_PRECEDING
        )
          this.firstNode = this.nodes[A];
    }
    return this.firstNode;
  };
  Vc.prototype.downgrade = function () {
    if (this.length === 1) {
      var A;
      for (A in this.nodes) return this.nodes[A];
    }
    return this;
  };
