// Module: kC (cjs)
// Dependencies: [p2]
// Exports: empty, EMPTY
// Lines: 9737-9755 in cli.formatted.js
// ---

  Object.defineProperty(QtA, "__esModule", { value: !0 });
  QtA.empty = QtA.EMPTY = void 0;
  var FtA = p2();
  QtA.EMPTY = new FtA.Observable(function (A) {
    return A.complete();
  });
  function ldq(A) {
    return A ? idq(A) : QtA.EMPTY;
  }
  QtA.empty = ldq;
  function idq(A) {
    return new FtA.Observable(function (q) {
      return A.schedule(function () {
        return q.complete();
      });
    });
  }
