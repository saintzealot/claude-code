// Module: BQ (cjs)
// Dependencies: [V4, fq]
// Exports: map
// Lines: 10934-10950 in cli.formatted.js
// ---

  Object.defineProperty(Z18, "__esModule", { value: !0 });
  Z18.map = void 0;
  var qiq = V4(),
    Kiq = fq();
  function Yiq(A, q) {
    return qiq.operate(function (K, Y) {
      var z = 0;
      K.subscribe(
        Kiq.createOperatorSubscriber(Y, function (w) {
          Y.next(A.call(q, w, z++));
        }),
      );
    });
  }
  Z18.map = Yiq;
