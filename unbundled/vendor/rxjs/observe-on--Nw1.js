// Module: Nw1 (cjs)
// Dependencies: [V4, fq, bQ]
// Exports: observeOn
// Lines: 10377-10424 in cli.formatted.js
// ---

  Object.defineProperty(PeA, "__esModule", { value: !0 });
  PeA.observeOn = void 0;
  var qS6 = bQ(),
    bcq = V4(),
    ucq = fq();
  function Bcq(A, q) {
    if (q === void 0) q = 0;
    return bcq.operate(function (K, Y) {
      K.subscribe(
        ucq.createOperatorSubscriber(
          Y,
          function (z) {
            return qS6.executeSchedule(
              Y,
              A,
              function () {
                return Y.next(z);
              },
              q,
            );
          },
          function () {
            return qS6.executeSchedule(
              Y,
              A,
              function () {
                return Y.complete();
              },
              q,
            );
          },
          function (z) {
            return qS6.executeSchedule(
              Y,
              A,
              function () {
                return Y.error(z);
              },
              q,
            );
          },
        ),
      );
    });
  }
  PeA.observeOn = Bcq;
