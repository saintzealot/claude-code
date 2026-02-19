// Module: xw1 (cjs)
// Dependencies: [V4, fq, P5]
// Exports: switchMap
// Lines: 14643-14684 in cli.formatted.js
// ---

  Object.defineProperty(Z48, "__esModule", { value: !0 });
  Z48.switchMap = void 0;
  var R1K = P5(),
    y1K = V4(),
    G48 = fq();
  function C1K(A, q) {
    return y1K.operate(function (K, Y) {
      var z = null,
        w = 0,
        H = !1,
        $ = function () {
          return H && !z && Y.complete();
        };
      K.subscribe(
        G48.createOperatorSubscriber(
          Y,
          function (O) {
            z === null || z === void 0 || z.unsubscribe();
            var _ = 0,
              J = w++;
            R1K.innerFrom(A(O, J)).subscribe(
              (z = G48.createOperatorSubscriber(
                Y,
                function (X) {
                  return Y.next(q ? q(O, X, J, _++) : X);
                },
                function () {
                  ((z = null), $());
                },
              )),
            );
          },
          function () {
            ((H = !0), $());
          },
        ),
      );
    });
  }
  Z48.switchMap = C1K;
