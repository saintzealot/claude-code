// Module: wS6 (cjs)
// Dependencies: [f2, p2]
// Exports: throwError
// Lines: 10613-10636 in cli.formatted.js
// ---

  Object.defineProperty(deA, "__esModule", { value: !0 });
  deA.throwError = void 0;
  var Elq = p2(),
    klq = f2();
  function Llq(A, q) {
    var K = klq.isFunction(A)
        ? A
        : function () {
            return A;
          },
      Y = function (z) {
        return z.error(K());
      };
    return new Elq.Observable(
      q
        ? function (z) {
            return q.schedule(Y, 0, z);
          }
        : Y,
    );
  }
  deA.throwError = Llq;
