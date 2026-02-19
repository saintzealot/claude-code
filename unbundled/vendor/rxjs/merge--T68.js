// Module: T68 (cjs)
// Dependencies: [kC, Qf, P5, uQ, vw1]
// Exports: merge
// Lines: 11772-11793 in cli.formatted.js
// ---

  Object.defineProperty(V68, "__esModule", { value: !0 });
  V68.merge = void 0;
  var lnq = vw1(),
    inq = P5(),
    nnq = kC(),
    f68 = Qf(),
    rnq = uQ();
  function anq() {
    var A = [];
    for (var q = 0; q < arguments.length; q++) A[q] = arguments[q];
    var K = f68.popScheduler(A),
      Y = f68.popNumber(A, 1 / 0),
      z = A;
    return !z.length
      ? nnq.EMPTY
      : z.length === 1
        ? inq.innerFrom(z[0])
        : lnq.mergeAll(Y)(rnq.from(z, K));
  }
  V68.merge = anq;
