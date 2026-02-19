// Module: BT1 (cjs)
// Dependencies: [AM]
// Exports: pipeFromArray, pipe
// Lines: 7744-7764 in cli.formatted.js
// ---

  Object.defineProperty(ksA, "__esModule", { value: !0 });
  ksA.pipeFromArray = ksA.pipe = void 0;
  var $pq = AM();
  function Opq() {
    var A = [];
    for (var q = 0; q < arguments.length; q++) A[q] = arguments[q];
    return EsA(A);
  }
  ksA.pipe = Opq;
  function EsA(A) {
    if (A.length === 0) return $pq.identity;
    if (A.length === 1) return A[0];
    return function (K) {
      return A.reduce(function (Y, z) {
        return z(Y);
      }, K);
    };
  }
  ksA.pipeFromArray = EsA;
