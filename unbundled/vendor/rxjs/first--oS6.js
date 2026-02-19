// Module: oS6 (cjs)
// Dependencies: [AM, vi, mQ, Cw1, Sw1, hw1]
// Exports: first
// Lines: 13399-13427 in cli.formatted.js
// ---

  Object.defineProperty(l88, "__esModule", { value: !0 });
  l88.first = void 0;
  var dsq = vi(),
    csq = mQ(),
    lsq = Sw1(),
    isq = Cw1(),
    nsq = hw1(),
    rsq = AM();
  function asq(A, q) {
    var K = arguments.length >= 2;
    return function (Y) {
      return Y.pipe(
        A
          ? csq.filter(function (z, w) {
              return A(z, w, Y);
            })
          : rsq.identity,
        lsq.take(1),
        K
          ? isq.defaultIfEmpty(q)
          : nsq.throwIfEmpty(function () {
              return new dsq.EmptyError();
            }),
      );
    };
  }
  l88.first = asq;
