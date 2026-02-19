// Module: hS6 (cjs)
// Dependencies: [BT1, V4, Qf, ki, Ca1, qA1]
// Exports: combineLatest
// Lines: 12610-12660 in cli.formatted.js
// ---

  var SA8 =
      (Ci && Ci.__read) ||
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
    hA8 =
      (Ci && Ci.__spreadArray) ||
      function (A, q) {
        for (var K = 0, Y = q.length, z = A.length; K < Y; K++, z++)
          A[z] = q[K];
        return A;
      };
  Object.defineProperty(Ci, "__esModule", { value: !0 });
  Ci.combineLatest = void 0;
  var uaq = Ca1(),
    Baq = V4(),
    maq = qA1(),
    Faq = ki(),
    Qaq = BT1(),
    gaq = Qf();
  function IA8() {
    var A = [];
    for (var q = 0; q < arguments.length; q++) A[q] = arguments[q];
    var K = gaq.popResultSelector(A);
    return K
      ? Qaq.pipe(IA8.apply(void 0, hA8([], SA8(A))), Faq.mapOneOrManyArgs(K))
      : Baq.operate(function (Y, z) {
          uaq.combineLatestInit(hA8([Y], SA8(maq.argsOrArgArray(A))))(z);
        });
  }
  Ci.combineLatest = IA8;
