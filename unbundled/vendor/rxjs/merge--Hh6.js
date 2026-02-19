// Module: Hh6 (cjs)
// Dependencies: [V4, Qf, uQ, vw1]
// Exports: merge
// Lines: 13727-13776 in cli.formatted.js
// ---

  var ytq =
      (bi && bi.__read) ||
      function (A, q) {
        var K = typeof Symbol === "function" && A[Symbol.iterator];
        if (!K) return A;
        var Y = K.call(A),
          z,
          w = [],
          H;
        try {
          while ((q === void 0 || q-- > 0) && !(z = Y.next()).done)
            w.push(z.value);
        } catch ($) {
          H = { error: $ };
        } finally {
          try {
            if (z && !z.done && (K = Y.return)) K.call(Y);
          } finally {
            if (H) throw H.error;
          }
        }
        return w;
      },
    Ctq =
      (bi && bi.__spreadArray) ||
      function (A, q) {
        for (var K = 0, Y = q.length, z = A.length; K < Y; K++, z++)
          A[z] = q[K];
        return A;
      };
  Object.defineProperty(bi, "__esModule", { value: !0 });
  bi.merge = void 0;
  var Stq = V4(),
    htq = vw1(),
    X78 = Qf(),
    Itq = uQ();
  function xtq() {
    var A = [];
    for (var q = 0; q < arguments.length; q++) A[q] = arguments[q];
    var K = X78.popScheduler(A),
      Y = X78.popNumber(A, 1 / 0);
    return Stq.operate(function (z, w) {
      htq
        .mergeAll(Y)(Itq.from(Ctq([z], ytq(A)), K))
        .subscribe(w);
    });
  }
  bi.merge = xtq;
