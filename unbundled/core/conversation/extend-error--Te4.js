// Module: Te4 (cjs)
// Dependencies: [Lf6, ThA, Ge4]
// Exports: extendError
// Lines: 437227-437258 in cli.formatted.js
// ---

  Object.defineProperty(Ve4, "__esModule", { value: !0 });
  Ve4.extendError = void 0;
  var Ze4 = ThA(),
    Rf6 = Ge4(),
    fe4 = Lf6(),
    QUY = ["name", "message", "stack"];
  function gUY(A, q, K) {
    let Y = A;
    if ((UUY(Y, q), q && typeof q === "object")) pUY(Y, q);
    if (((Y.toJSON = fe4.toJSON), Ze4.addInspectMethod))
      Ze4.addInspectMethod(Y);
    if (K && typeof K === "object") Object.assign(Y, K);
    return Y;
  }
  Ve4.extendError = gUY;
  function UUY(A, q) {
    let K = Object.getOwnPropertyDescriptor(A, "stack");
    if (Rf6.isLazyStack(K)) Rf6.lazyJoinStacks(K, A, q);
    else if (Rf6.isWritableStack(K)) A.stack = Rf6.joinStacks(A, q);
  }
  function pUY(A, q) {
    let K = fe4.getDeepKeys(q, QUY),
      Y = A,
      z = q;
    for (let w of K)
      if (Y[w] === void 0)
        try {
          Y[w] = z[w];
        } catch (H) {}
  }
