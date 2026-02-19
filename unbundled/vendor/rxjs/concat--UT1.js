// Module: UT1 (cjs)
// Dependencies: [Qf, uQ, gT1]
// Exports: concat
// Lines: 11338-11350 in cli.formatted.js
// ---

  Object.defineProperty(r18, "__esModule", { value: !0 });
  r18.concat = void 0;
  var aiq = gT1(),
    oiq = Qf(),
    siq = uQ();
  function tiq() {
    var A = [];
    for (var q = 0; q < arguments.length; q++) A[q] = arguments[q];
    return aiq.concatAll()(siq.from(A, oiq.popScheduler(A)));
  }
  r18.concat = tiq;
