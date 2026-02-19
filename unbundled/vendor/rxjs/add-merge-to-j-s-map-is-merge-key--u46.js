// Module: u46 (cjs)
// Dependencies: [RY, EX]
// Exports: addMergeToJSMap, isMergeKey, merge
// Lines: 116693-116739 in cli.formatted.js
// ---

  var my1 = RY(),
    fa8 = EX(),
    x46 = "<<",
    b46 = {
      identify: (A) =>
        A === x46 || (typeof A === "symbol" && A.description === x46),
      default: "key",
      tag: "tag:yaml.org,2002:merge",
      test: /^<<$/,
      resolve: () =>
        Object.assign(new fa8.Scalar(Symbol(x46)), { addToJSMap: Va8 }),
      stringify: () => x46,
    },
    MO5 = (A, q) =>
      (b46.identify(q) ||
        (my1.isScalar(q) &&
          (!q.type || q.type === fa8.Scalar.PLAIN) &&
          b46.identify(q.value))) &&
      A?.doc.schema.tags.some((K) => K.tag === b46.tag && K.default);
  function Va8(A, q, K) {
    if (((K = A && my1.isAlias(K) ? K.resolve(A.doc) : K), my1.isSeq(K)))
      for (let Y of K.items) pAA(A, q, Y);
    else if (Array.isArray(K)) for (let Y of K) pAA(A, q, Y);
    else pAA(A, q, K);
  }
  function pAA(A, q, K) {
    let Y = A && my1.isAlias(K) ? K.resolve(A.doc) : K;
    if (!my1.isMap(Y)) throw Error("Merge sources must be maps or map aliases");
    let z = Y.toJSON(null, A, Map);
    for (let [w, H] of z)
      if (q instanceof Map) {
        if (!q.has(w)) q.set(w, H);
      } else if (q instanceof Set) q.add(w);
      else if (!Object.prototype.hasOwnProperty.call(q, w))
        Object.defineProperty(q, w, {
          value: H,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
    return q;
  }
  PO5.addMergeToJSMap = Va8;
  PO5.isMergeKey = MO5;
  PO5.merge = b46;
