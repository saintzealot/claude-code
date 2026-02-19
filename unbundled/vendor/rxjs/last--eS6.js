// Module: eS6 (cjs)
// Dependencies: [AM, vi, mQ, Cw1, hw1, da1]
// Exports: last
// Lines: 13597-13625 in cli.formatted.js
// ---

  Object.defineProperty(t88, "__esModule", { value: !0 });
  t88.last = void 0;
  var _tq = vi(),
    Jtq = mQ(),
    Xtq = da1(),
    jtq = hw1(),
    Dtq = Cw1(),
    Mtq = AM();
  function Ptq(A, q) {
    var K = arguments.length >= 2;
    return function (Y) {
      return Y.pipe(
        A
          ? Jtq.filter(function (z, w) {
              return A(z, w, Y);
            })
          : Mtq.identity,
        Xtq.takeLast(1),
        K
          ? Dtq.defaultIfEmpty(q)
          : jtq.throwIfEmpty(function () {
              return new _tq.EmptyError();
            }),
      );
    };
  }
  t88.last = Ptq;
