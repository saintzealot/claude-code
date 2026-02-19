// Module: fa1 (cjs)
// Dependencies: [V4, fq]
// Exports: refCount
// Lines: 8010-8039 in cli.formatted.js
// ---

  Object.defineProperty(bsA, "__esModule", { value: !0 });
  bsA.refCount = void 0;
  var Epq = V4(),
    kpq = fq();
  function Lpq() {
    return Epq.operate(function (A, q) {
      var K = null;
      A._refCount++;
      var Y = kpq.createOperatorSubscriber(
        q,
        void 0,
        void 0,
        void 0,
        function () {
          if (!A || A._refCount <= 0 || 0 < --A._refCount) {
            K = null;
            return;
          }
          var z = A._connection,
            w = K;
          if (((K = null), z && (!w || z === w))) z.unsubscribe();
          q.unsubscribe();
        },
      );
      if ((A.subscribe(Y), !Y.closed)) K = A.connect();
    });
  }
  bsA.refCount = Lpq;
