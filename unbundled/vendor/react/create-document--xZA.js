// Module: xZA (cjs)
// Dependencies: [ts]
// Exports: createDocument, createDocumentFragment, createElement, createCommentNode, appendChild, insertBefore, setTemplateContent, getTemplateContent, setDocumentType, setDocumentMode, getDocumentMode, detachNode, insertText, insertTextBefore, adoptAttributes, getFirstChild, getChildNodes, getParentNode, getAttrList, getTagName, getNamespaceURI, getTextNodeContent, getCommentNodeContent, getDocumentTypeNodeName, getDocumentTypeNodePublicId, getDocumentTypeNodeSystemId, isTextNode, isCommentNode, isDocumentTypeNode, isElementNode, setNodeSourceCodeLocation, getNodeSourceCodeLocation
// Lines: 312908-313040 in cli.formatted.js
// ---

  var { DOCUMENT_MODE: Up9 } = ts();
  dp9.createDocument = function () {
    return { nodeName: "#document", mode: Up9.NO_QUIRKS, childNodes: [] };
  };
  dp9.createDocumentFragment = function () {
    return { nodeName: "#document-fragment", childNodes: [] };
  };
  dp9.createElement = function (A, q, K) {
    return {
      nodeName: A,
      tagName: A,
      attrs: K,
      namespaceURI: q,
      childNodes: [],
      parentNode: null,
    };
  };
  dp9.createCommentNode = function (A) {
    return { nodeName: "#comment", data: A, parentNode: null };
  };
  var q34 = function (A) {
      return { nodeName: "#text", value: A, parentNode: null };
    },
    K34 = (dp9.appendChild = function (A, q) {
      (A.childNodes.push(q), (q.parentNode = A));
    }),
    pp9 = (dp9.insertBefore = function (A, q, K) {
      let Y = A.childNodes.indexOf(K);
      (A.childNodes.splice(Y, 0, q), (q.parentNode = A));
    });
  dp9.setTemplateContent = function (A, q) {
    A.content = q;
  };
  dp9.getTemplateContent = function (A) {
    return A.content;
  };
  dp9.setDocumentType = function (A, q, K, Y) {
    let z = null;
    for (let w = 0; w < A.childNodes.length; w++)
      if (A.childNodes[w].nodeName === "#documentType") {
        z = A.childNodes[w];
        break;
      }
    if (z) ((z.name = q), (z.publicId = K), (z.systemId = Y));
    else
      K34(A, { nodeName: "#documentType", name: q, publicId: K, systemId: Y });
  };
  dp9.setDocumentMode = function (A, q) {
    A.mode = q;
  };
  dp9.getDocumentMode = function (A) {
    return A.mode;
  };
  dp9.detachNode = function (A) {
    if (A.parentNode) {
      let q = A.parentNode.childNodes.indexOf(A);
      (A.parentNode.childNodes.splice(q, 1), (A.parentNode = null));
    }
  };
  dp9.insertText = function (A, q) {
    if (A.childNodes.length) {
      let K = A.childNodes[A.childNodes.length - 1];
      if (K.nodeName === "#text") {
        K.value += q;
        return;
      }
    }
    K34(A, q34(q));
  };
  dp9.insertTextBefore = function (A, q, K) {
    let Y = A.childNodes[A.childNodes.indexOf(K) - 1];
    if (Y && Y.nodeName === "#text") Y.value += q;
    else pp9(A, q34(q), K);
  };
  dp9.adoptAttributes = function (A, q) {
    let K = [];
    for (let Y = 0; Y < A.attrs.length; Y++) K.push(A.attrs[Y].name);
    for (let Y = 0; Y < q.length; Y++)
      if (K.indexOf(q[Y].name) === -1) A.attrs.push(q[Y]);
  };
  dp9.getFirstChild = function (A) {
    return A.childNodes[0];
  };
  dp9.getChildNodes = function (A) {
    return A.childNodes;
  };
  dp9.getParentNode = function (A) {
    return A.parentNode;
  };
  dp9.getAttrList = function (A) {
    return A.attrs;
  };
  dp9.getTagName = function (A) {
    return A.tagName;
  };
  dp9.getNamespaceURI = function (A) {
    return A.namespaceURI;
  };
  dp9.getTextNodeContent = function (A) {
    return A.value;
  };
  dp9.getCommentNodeContent = function (A) {
    return A.data;
  };
  dp9.getDocumentTypeNodeName = function (A) {
    return A.name;
  };
  dp9.getDocumentTypeNodePublicId = function (A) {
    return A.publicId;
  };
  dp9.getDocumentTypeNodeSystemId = function (A) {
    return A.systemId;
  };
  dp9.isTextNode = function (A) {
    return A.nodeName === "#text";
  };
  dp9.isCommentNode = function (A) {
    return A.nodeName === "#comment";
  };
  dp9.isDocumentTypeNode = function (A) {
    return A.nodeName === "#documentType";
  };
  dp9.isElementNode = function (A) {
    return !!A.tagName;
  };
  dp9.setNodeSourceCodeLocation = function (A, q) {
    A.sourceCodeLocation = q;
  };
  dp9.getNodeSourceCodeLocation = function (A) {
    return A.sourceCodeLocation;
  };
