// Module: Sw1 (cjs)
// Dependencies: [V4, fq, kC]
// Exports: take
// Lines: 12977-13000 in cli.formatted.js
// ---

  Object.defineProperty(eA8, "__esModule", { value: !0 });
  eA8.take = void 0;
  var Roq = kC(),
    yoq = V4(),
    Coq = fq();
  function Soq(A) {
    return A <= 0
      ? function () {
          return Roq.EMPTY;
        }
      : yoq.operate(function (q, K) {
          var Y = 0;
          q.subscribe(
            Coq.createOperatorSubscriber(K, function (z) {
              if (++Y <= A) {
                if ((K.next(z), A <= Y)) K.complete();
              }
            }),
          );
        });
  }
  eA8.take = Soq;
