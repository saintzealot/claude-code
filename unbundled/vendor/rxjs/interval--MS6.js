// Module: MS6 (cjs)
// Dependencies: [Ff, Ri]
// Exports: interval
// Lines: 11759-11771 in cli.formatted.js
// ---

  Object.defineProperty(G68, "__esModule", { value: !0 });
  G68.interval = void 0;
  var pnq = Ff(),
    dnq = Ri();
  function cnq(A, q) {
    if (A === void 0) A = 0;
    if (q === void 0) q = pnq.asyncScheduler;
    if (A < 0) A = 0;
    return dnq.timer(A, A, q);
  }
  G68.interval = cnq;
