// Module: Nh6 (cjs)
// Dependencies: [V4, yS6]
// Exports: scan
// Lines: 14307-14316 in cli.formatted.js
// ---

  Object.defineProperty(r78, "__esModule", { value: !0 });
  r78.scan = void 0;
  var ceq = V4(),
    leq = yS6();
  function ieq(A, q) {
    return ceq.operate(leq.scanInternals(A, q, arguments.length >= 2, !0));
  }
  r78.scan = ieq;
