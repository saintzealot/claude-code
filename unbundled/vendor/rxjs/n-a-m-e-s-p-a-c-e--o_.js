// Module: o_ (cjs)
// Dependencies: [tG6, eG6]
// Exports: NAMESPACE, IndexSizeError, HierarchyRequestError, WrongDocumentError, InvalidCharacterError, NoModificationAllowedError, NotFoundError, NotSupportedError, InvalidStateError, SyntaxError, InvalidModificationError, NamespaceError, InvalidAccessError, TypeMismatchError, SecurityError, NetworkError, AbortError, UrlMismatchError, QuotaExceededError, TimeoutError, InvalidNodeTypeError, DataCloneError, nyi, shouldOverride, assert, expose, merge, documentOrder, toASCIILowerCase, toASCIIUpperCase
// Lines: 409562-409673 in cli.formatted.js
// ---

  var a_ = tG6(),
    UJ = a_,
    lxY = eG6().isApiWritable;
  ixY.NAMESPACE = {
    HTML: "http://www.w3.org/1999/xhtml",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/",
    MATHML: "http://www.w3.org/1998/Math/MathML",
    SVG: "http://www.w3.org/2000/svg",
    XLINK: "http://www.w3.org/1999/xlink",
  };
  ixY.IndexSizeError = function () {
    throw new a_(UJ.INDEX_SIZE_ERR);
  };
  ixY.HierarchyRequestError = function () {
    throw new a_(UJ.HIERARCHY_REQUEST_ERR);
  };
  ixY.WrongDocumentError = function () {
    throw new a_(UJ.WRONG_DOCUMENT_ERR);
  };
  ixY.InvalidCharacterError = function () {
    throw new a_(UJ.INVALID_CHARACTER_ERR);
  };
  ixY.NoModificationAllowedError = function () {
    throw new a_(UJ.NO_MODIFICATION_ALLOWED_ERR);
  };
  ixY.NotFoundError = function () {
    throw new a_(UJ.NOT_FOUND_ERR);
  };
  ixY.NotSupportedError = function () {
    throw new a_(UJ.NOT_SUPPORTED_ERR);
  };
  ixY.InvalidStateError = function () {
    throw new a_(UJ.INVALID_STATE_ERR);
  };
  ixY.SyntaxError = function () {
    throw new a_(UJ.SYNTAX_ERR);
  };
  ixY.InvalidModificationError = function () {
    throw new a_(UJ.INVALID_MODIFICATION_ERR);
  };
  ixY.NamespaceError = function () {
    throw new a_(UJ.NAMESPACE_ERR);
  };
  ixY.InvalidAccessError = function () {
    throw new a_(UJ.INVALID_ACCESS_ERR);
  };
  ixY.TypeMismatchError = function () {
    throw new a_(UJ.TYPE_MISMATCH_ERR);
  };
  ixY.SecurityError = function () {
    throw new a_(UJ.SECURITY_ERR);
  };
  ixY.NetworkError = function () {
    throw new a_(UJ.NETWORK_ERR);
  };
  ixY.AbortError = function () {
    throw new a_(UJ.ABORT_ERR);
  };
  ixY.UrlMismatchError = function () {
    throw new a_(UJ.URL_MISMATCH_ERR);
  };
  ixY.QuotaExceededError = function () {
    throw new a_(UJ.QUOTA_EXCEEDED_ERR);
  };
  ixY.TimeoutError = function () {
    throw new a_(UJ.TIMEOUT_ERR);
  };
  ixY.InvalidNodeTypeError = function () {
    throw new a_(UJ.INVALID_NODE_TYPE_ERR);
  };
  ixY.DataCloneError = function () {
    throw new a_(UJ.DATA_CLONE_ERR);
  };
  ixY.nyi = function () {
    throw Error("NotYetImplemented");
  };
  ixY.shouldOverride = function () {
    throw Error("Abstract function; should be overriding in subclass.");
  };
  ixY.assert = function (A, q) {
    if (!A)
      throw Error(
        "Assertion failed: " +
          (q || "") +
          `
` +
          Error().stack,
      );
  };
  ixY.expose = function (A, q) {
    for (var K in A)
      Object.defineProperty(q.prototype, K, { value: A[K], writable: lxY });
  };
  ixY.merge = function (A, q) {
    for (var K in q) A[K] = q[K];
  };
  ixY.documentOrder = function (A, q) {
    return 3 - (A.compareDocumentPosition(q) & 6);
  };
  ixY.toASCIILowerCase = function (A) {
    return A.replace(/[A-Z]+/g, function (q) {
      return q.toLowerCase();
    });
  };
  ixY.toASCIIUpperCase = function (A) {
    return A.replace(/[a-z]+/g, function (q) {
      return q.toUpperCase();
    });
  };
