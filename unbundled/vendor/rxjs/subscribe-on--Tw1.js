// Module: Tw1 (cjs)
// Dependencies: [V4]
// Exports: subscribeOn
// Lines: 10425-10440 in cli.formatted.js
// ---

  Object.defineProperty(GeA, "__esModule", { value: !0 });
  GeA.subscribeOn = void 0;
  var mcq = V4();
  function Fcq(A, q) {
    if (q === void 0) q = 0;
    return mcq.operate(function (K, Y) {
      Y.add(
        A.schedule(function () {
          return K.subscribe(Y);
        }, q),
      );
    });
  }
  GeA.subscribeOn = Fcq;
