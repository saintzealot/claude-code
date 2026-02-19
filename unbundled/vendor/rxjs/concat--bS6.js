// Module: bS6 (cjs)
// Dependencies: [V4, Qf, uQ, gT1]
// Exports: concat
// Lines: 12728-12776 in cli.formatted.js
// ---

  var aaq =
      (hi && hi.__read) ||
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
    oaq =
      (hi && hi.__spreadArray) ||
      function (A, q) {
        for (var K = 0, Y = q.length, z = A.length; K < Y; K++, z++)
          A[z] = q[K];
        return A;
      };
  Object.defineProperty(hi, "__esModule", { value: !0 });
  hi.concat = void 0;
  var saq = V4(),
    taq = gT1(),
    eaq = Qf(),
    Aoq = uQ();
  function qoq() {
    var A = [];
    for (var q = 0; q < arguments.length; q++) A[q] = arguments[q];
    var K = eaq.popScheduler(A);
    return saq.operate(function (Y, z) {
      taq
        .concatAll()(Aoq.from(oaq([Y], aaq(A)), K))
        .subscribe(z);
    });
  }
  hi.concat = qoq;
