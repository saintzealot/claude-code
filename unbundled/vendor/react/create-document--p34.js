// Module: p34 (cjs)
// Dependencies: [pZA, F34]
// Exports: createDocument, createDocumentFragment, createElement, createCommentNode, appendChild, insertBefore, setTemplateContent, getTemplateContent, setDocumentType, setDocumentMode, getDocumentMode, detachNode, insertText, insertTextBefore, adoptAttributes, getFirstChild, getChildNodes, getParentNode, getAttrList, getTagName, getNamespaceURI, getTextNodeContent, getCommentNodeContent, getDocumentTypeNodeName, getDocumentTypeNodePublicId, getDocumentTypeNodeSystemId, isTextNode, isCommentNode, isDocumentTypeNode, isElementNode, setNodeSourceCodeLocation, getNodeSourceCodeLocation, updateNodeSourceCodeLocation
// Lines: 315956-316198 in cli.formatted.js
// ---

  var ol9 = F34(),
    { DOCUMENT_MODE: sl9 } = pZA(),
    Q34 = { element: 1, text: 3, cdata: 4, comment: 8 },
    g34 = {
      tagName: "name",
      childNodes: "children",
      parentNode: "parent",
      previousSibling: "prev",
      nextSibling: "next",
      nodeValue: "data",
    };
  class qt {
    constructor(A) {
      for (let q of Object.keys(A)) this[q] = A[q];
    }
    get firstChild() {
      let A = this.children;
      return (A && A[0]) || null;
    }
    get lastChild() {
      let A = this.children;
      return (A && A[A.length - 1]) || null;
    }
    get nodeType() {
      return Q34[this.type] || Q34.element;
    }
  }
  Object.keys(g34).forEach((A) => {
    let q = g34[A];
    Object.defineProperty(qt.prototype, A, {
      get: function () {
        return this[q] || null;
      },
      set: function (K) {
        return ((this[q] = K), K);
      },
    });
  });
  el9.createDocument = function () {
    return new qt({
      type: "root",
      name: "root",
      parent: null,
      prev: null,
      next: null,
      children: [],
      "x-mode": sl9.NO_QUIRKS,
    });
  };
  el9.createDocumentFragment = function () {
    return new qt({
      type: "root",
      name: "root",
      parent: null,
      prev: null,
      next: null,
      children: [],
    });
  };
  el9.createElement = function (A, q, K) {
    let Y = Object.create(null),
      z = Object.create(null),
      w = Object.create(null);
    for (let H = 0; H < K.length; H++) {
      let $ = K[H].name;
      ((Y[$] = K[H].value), (z[$] = K[H].namespace), (w[$] = K[H].prefix));
    }
    return new qt({
      type: A === "script" || A === "style" ? A : "tag",
      name: A,
      namespace: q,
      attribs: Y,
      "x-attribsNamespace": z,
      "x-attribsPrefix": w,
      children: [],
      parent: null,
      prev: null,
      next: null,
    });
  };
  el9.createCommentNode = function (A) {
    return new qt({
      type: "comment",
      data: A,
      parent: null,
      prev: null,
      next: null,
    });
  };
  var U34 = function (A) {
      return new qt({
        type: "text",
        data: A,
        parent: null,
        prev: null,
        next: null,
      });
    },
    dZA = (el9.appendChild = function (A, q) {
      let K = A.children[A.children.length - 1];
      if (K) ((K.next = q), (q.prev = K));
      (A.children.push(q), (q.parent = A));
    }),
    tl9 = (el9.insertBefore = function (A, q, K) {
      let Y = A.children.indexOf(K),
        z = K.prev;
      if (z) ((z.next = q), (q.prev = z));
      ((K.prev = q), (q.next = K), A.children.splice(Y, 0, q), (q.parent = A));
    });
  el9.setTemplateContent = function (A, q) {
    dZA(A, q);
  };
  el9.getTemplateContent = function (A) {
    return A.children[0];
  };
  el9.setDocumentType = function (A, q, K, Y) {
    let z = ol9.serializeContent(q, K, Y),
      w = null;
    for (let H = 0; H < A.children.length; H++)
      if (
        A.children[H].type === "directive" &&
        A.children[H].name === "!doctype"
      ) {
        w = A.children[H];
        break;
      }
    if (w)
      ((w.data = z),
        (w["x-name"] = q),
        (w["x-publicId"] = K),
        (w["x-systemId"] = Y));
    else
      dZA(
        A,
        new qt({
          type: "directive",
          name: "!doctype",
          data: z,
          "x-name": q,
          "x-publicId": K,
          "x-systemId": Y,
        }),
      );
  };
  el9.setDocumentMode = function (A, q) {
    A["x-mode"] = q;
  };
  el9.getDocumentMode = function (A) {
    return A["x-mode"];
  };
  el9.detachNode = function (A) {
    if (A.parent) {
      let q = A.parent.children.indexOf(A),
        K = A.prev,
        Y = A.next;
      if (((A.prev = null), (A.next = null), K)) K.next = Y;
      if (Y) Y.prev = K;
      (A.parent.children.splice(q, 1), (A.parent = null));
    }
  };
  el9.insertText = function (A, q) {
    let K = A.children[A.children.length - 1];
    if (K && K.type === "text") K.data += q;
    else dZA(A, U34(q));
  };
  el9.insertTextBefore = function (A, q, K) {
    let Y = A.children[A.children.indexOf(K) - 1];
    if (Y && Y.type === "text") Y.data += q;
    else tl9(A, U34(q), K);
  };
  el9.adoptAttributes = function (A, q) {
    for (let K = 0; K < q.length; K++) {
      let Y = q[K].name;
      if (typeof A.attribs[Y] > "u")
        ((A.attribs[Y] = q[K].value),
          (A["x-attribsNamespace"][Y] = q[K].namespace),
          (A["x-attribsPrefix"][Y] = q[K].prefix));
    }
  };
  el9.getFirstChild = function (A) {
    return A.children[0];
  };
  el9.getChildNodes = function (A) {
    return A.children;
  };
  el9.getParentNode = function (A) {
    return A.parent;
  };
  el9.getAttrList = function (A) {
    let q = [];
    for (let K in A.attribs)
      q.push({
        name: K,
        value: A.attribs[K],
        namespace: A["x-attribsNamespace"][K],
        prefix: A["x-attribsPrefix"][K],
      });
    return q;
  };
  el9.getTagName = function (A) {
    return A.name;
  };
  el9.getNamespaceURI = function (A) {
    return A.namespace;
  };
  el9.getTextNodeContent = function (A) {
    return A.data;
  };
  el9.getCommentNodeContent = function (A) {
    return A.data;
  };
  el9.getDocumentTypeNodeName = function (A) {
    return A["x-name"];
  };
  el9.getDocumentTypeNodePublicId = function (A) {
    return A["x-publicId"];
  };
  el9.getDocumentTypeNodeSystemId = function (A) {
    return A["x-systemId"];
  };
  el9.isTextNode = function (A) {
    return A.type === "text";
  };
  el9.isCommentNode = function (A) {
    return A.type === "comment";
  };
  el9.isDocumentTypeNode = function (A) {
    return A.type === "directive" && A.name === "!doctype";
  };
  el9.isElementNode = function (A) {
    return !!A.attribs;
  };
  el9.setNodeSourceCodeLocation = function (A, q) {
    A.sourceCodeLocation = q;
  };
  el9.getNodeSourceCodeLocation = function (A) {
    return A.sourceCodeLocation;
  };
  el9.updateNodeSourceCodeLocation = function (A, q) {
    A.sourceCodeLocation = Object.assign(A.sourceCodeLocation, q);
  };
