// Runtime preamble - bundler helper functions (v, R, SA, s, WC, etc.)
// ---

#!/usr/bin/env node
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.42

// Want to see the unminified source? We're hiring!
// https://job-boards.greenhouse.io/anthropic/jobs/4816199008
import { createRequire as TIq } from "node:module";
var fIq = Object.create;
var {
    getPrototypeOf: VIq,
    defineProperty: gN1,
    getOwnPropertyNames: ydA,
    getOwnPropertyDescriptor: NIq,
  } = Object,
  CdA = Object.prototype.hasOwnProperty;
var s = (A, q, K) => {
    K = A != null ? fIq(VIq(A)) : {};
    let Y =
      q || !A || !A.__esModule
        ? gN1(K, "default", { value: A, enumerable: !0 })
        : K;
    for (let z of ydA(A))
      if (!CdA.call(Y, z)) gN1(Y, z, { get: () => A[z], enumerable: !0 });
    return Y;
  },
  RdA = new WeakMap(),
  WC = (A) => {
    var q = RdA.get(A),
      K;
    if (q) return q;
    if (
      ((q = gN1({}, "__esModule", { value: !0 })),
      (A && typeof A === "object") || typeof A === "function")
    )
      ydA(A).map(
        (Y) =>
          !CdA.call(q, Y) &&
          gN1(q, Y, {
            get: () => A[Y],
            enumerable: !(K = NIq(A, Y)) || K.enumerable,
          }),
      );
    return (RdA.set(A, q), q);
  },
  R = (A, q) => () => (q || A((q = { exports: {} }).exports, q), q.exports);
var SA = (A, q) => {
  for (var K in q)
    gN1(A, K, {
      get: q[K],
      enumerable: !0,
      configurable: !0,
      set: (Y) => (q[K] = () => Y),
    });
};
var v = (A, q) => () => (A && (q = A((A = 0))), q);
var h1 = TIq(import.meta.url),
  vIq = Symbol.dispose || Symbol.for("Symbol.dispose"),
  EIq = Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose"),
  SdA = (A, q, K) => {
    if (q != null) {
      if (typeof q !== "object" && typeof q !== "function")
        throw TypeError(
          'Object expected to be assigned to "using" declaration',
        );
      var Y;
      if (K) Y = q[EIq];
      if (Y === void 0) Y = q[vIq];
      if (typeof Y !== "function") throw TypeError("Object not disposable");
      A.push([K, Y, q]);
    } else if (K) A.push([K]);
    return q;
  },
  hdA = (A, q, K) => {
    var Y =
        typeof SuppressedError === "function"
          ? SuppressedError
          : function (H, $, O, _) {
              return (
                (_ = Error(O)),
                (_.name = "SuppressedError"),
                (_.error = H),
                (_.suppressed = $),
                _
              );
            },
      z = (H) =>
        (q = K
          ? new Y(H, q, "An error was suppressed during disposal")
          : ((K = !0), H)),
      w = (H) => {
        while ((H = A.pop()))
          try {
            var $ = H[1] && H[1].call(H[2]);
            if (H[0]) return Promise.resolve($).then(w, (O) => (z(O), w()));
          } catch (O) {
            z(O);
          }
        if (K) throw q;
      };
    return w();
  };
