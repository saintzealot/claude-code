// Module: oe4 (cjs)
// Exports: all, filter, sort, run
// Lines: 437857-437920 in cli.formatted.js
// ---

  ppY.all = function (A) {
    return Object.keys(A)
      .filter((q) => {
        return typeof A[q] === "object";
      })
      .map((q) => {
        return ((A[q].name = q), A[q]);
      });
  };
  ppY.filter = function (A, q, K) {
    return A.filter((Y) => {
      return !!ae4(Y, q, K);
    });
  };
  ppY.sort = function (A) {
    for (let q of A) q.order = q.order || Number.MAX_SAFE_INTEGER;
    return A.sort((q, K) => {
      return q.order - K.order;
    });
  };
  ppY.run = function (A, q, K, Y) {
    let z,
      w,
      H = 0;
    return new Promise(($, O) => {
      _();
      function _() {
        if (((z = A[H++]), !z)) return O(w);
        try {
          let D = ae4(z, q, K, J, Y);
          if (D && typeof D.then === "function") D.then(X, j);
          else if (D !== void 0) X(D);
          else if (H === A.length)
            throw Error(
              "No promise has been returned or callback has been called.",
            );
        } catch (D) {
          j(D);
        }
      }
      function J(D, M) {
        if (D) j(D);
        else X(M);
      }
      function X(D) {
        $({ plugin: z, result: D });
      }
      function j(D) {
        ((w = { plugin: z, error: D }), _());
      }
    });
  };
  function ae4(A, q, K, Y, z) {
    let w = A[q];
    if (typeof w === "function") return w.apply(A, [K, Y, z]);
    if (!Y) {
      if (w instanceof RegExp) return w.test(K.url);
      else if (typeof w === "string") return w === K.extension;
      else if (Array.isArray(w)) return w.indexOf(K.extension) !== -1;
    }
    return w;
  }
