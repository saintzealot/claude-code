// Module: mQ (cjs)
// Dependencies: [V4, fq]
// Exports: filter
// Lines: 11865-11881 in cli.formatted.js
// ---

  Object.defineProperty(B68, "__esModule", { value: !0 });
  B68.filter = void 0;
  var _rq = V4(),
    Jrq = fq();
  function Xrq(A, q) {
    return _rq.operate(function (K, Y) {
      var z = 0;
      K.subscribe(
        Jrq.createOperatorSubscriber(Y, function (w) {
          return A.call(q, w, z++) && Y.next(w);
        }),
      );
    });
  }
  B68.filter = Xrq;
